import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[colored-average]'
})
export class ColoredAverageDirective implements AfterViewInit {
  @Input('colored-average') options: ColoredAverageOptions | any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.options) {
      const tableRows = Array.from(this.el.nativeElement.querySelectorAll('tbody tr'));

      const [minValues, maxValues] = this.calculateMinMaxValues(tableRows);

      tableRows.forEach((row: any) => {
        const cells = Array.from(row.children);

        cells.forEach((cell: any, index: number) => {
          let cellValueElement = cell.querySelector('[data-ca]');
          let cellValue = parseFloat(cell.innerText);
          
          if (cellValueElement) {
            cellValue = parseFloat(cellValueElement.innerText);
          }

          if (!isNaN(cellValue)) {
            let backgroundColor;
            let textColor;

            if (this.options.applyToBackground) {
              backgroundColor = this.calculateBackgroundColor(minValues[index], maxValues[index], cellValue);
              textColor = this.calculateTextColor(backgroundColor);
            } else {
              textColor = this.calculateColor(minValues[index], maxValues[index], cellValue);
              backgroundColor = this.options.applyToBackground ? this.options.minColor : 'transparent';
            }
            
            this.renderer.setStyle(cell, 'background-color', backgroundColor);
            this.renderer.setStyle(cell, 'color', textColor);
          }
        });
      });
    }
  }

  private calculateMinMaxValues(rows: any[]): [number[], number[]] {
    const columnCount = rows[0].children.length;
    const minValues: number[] = Array(columnCount).fill(Number.MAX_VALUE);
    const maxValues: number[] = Array(columnCount).fill(Number.MIN_VALUE);

    rows.forEach((row: HTMLElement) => {
      const cells = Array.from(row.children);

      cells.forEach((cell: any, index: number) => {
        let cellValueElement = cell.querySelector('[data-ca]');
        let cellValue = parseFloat(cell.innerText);

        if (cellValueElement) {
          cellValue = parseFloat(cellValueElement.innerText);
        }

        if (!isNaN(cellValue)) {
          minValues[index] = Math.min(minValues[index], cellValue);
          maxValues[index] = Math.max(maxValues[index], cellValue);
        }
      });
    });

    return [minValues, maxValues];
  }

  private calculateBackgroundColor(min: number, max: number, value: number): string {
    const percent = (value - min) / (max - min);
    const r = Math.round(this.interpolateColorChannel(percent, this.options.minColor.substring(1, 3), this.options.maxColor.substring(1, 3)));
    const g = Math.round(this.interpolateColorChannel(percent, this.options.minColor.substring(3, 5), this.options.maxColor.substring(3, 5)));
    const b = Math.round(this.interpolateColorChannel(percent, this.options.minColor.substring(5, 7), this.options.maxColor.substring(5, 7)));
    return `rgb(${r}, ${g}, ${b})`;
  }

  private calculateColor(min: number, max: number, value: number): string {
    const percent = (value - min) / (max - min);
    const r = Math.round(this.interpolateColorChannel(percent, this.options.minColor.substring(1, 3), this.options.maxColor.substring(1, 3)));
    const g = Math.round(this.interpolateColorChannel(percent, this.options.minColor.substring(3, 5), this.options.maxColor.substring(3, 5)));
    const b = Math.round(this.interpolateColorChannel(percent, this.options.minColor.substring(5, 7), this.options.maxColor.substring(5, 7)));
    return `rgb(${r}, ${g}, ${b})`;
  }

  private calculateTextColor(backgroundColor: string): string {
    const rgb = backgroundColor.match(/\d+/g);
    if (rgb) {
      const r = parseInt(rgb[0]);
      const g = parseInt(rgb[1]);
      const b = parseInt(rgb[2]);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness >= 128 ? 'black' : 'white';
    }
    return 'black'; // Valor predeterminado
  }

  private interpolateColorChannel(percent: number, minChannel: string, maxChannel: string): number {
    return parseInt(minChannel, 16) + percent * (parseInt(maxChannel, 16) - parseInt(minChannel, 16));
  }
}

export interface ColoredAverageOptions {
  minColor: string;
  maxColor: string;
  applyToBackground?: boolean;
}