import { NgModule } from '@angular/core';
import { ColoredAverageDirective } from './colored-average.directive';



@NgModule({
  declarations: [
    ColoredAverageDirective
  ],
  exports: [
    ColoredAverageDirective
  ]
})
export class ColoredAverageModule { }
