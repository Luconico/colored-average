import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[colored-average]'
})
export class ColoredAverageDirective implements AfterViewInit  {
  @Input('colored-average') options: ColoredAverageOptions | any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    console.log('dentro de ngOnInit')
    if (this.options) {

    }
  }

}

export interface ColoredAverageOptions {
  columns?: ColoredAverageColumn[]; 
  minColor: string;
  maxColor: string; 
  applyToBackground: boolean;
}

export interface ColoredAverageColumn {
  index: number;
  min: number;
  max: number;
}