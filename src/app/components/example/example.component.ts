import { Component } from '@angular/core';
import { ColoredAverageOptions } from '../../directives/colored-average/colored-average.directive';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

export class ExampleComponent {

  coloredAverageOptions: ColoredAverageOptions = { 
    minColor: '#FF0000',
    maxColor: '#00FF00',
    applyToBackground: true
  }

  rows = [
    {
      "column1": 0.9,
      "column2": "text",
      "column3": 500,
      "column4": 1000
    },
    {
      "column1": 0.3,
      "column2": "text",
      "column3": 100,
      "column4": 3200
    },
    {
      "column1": 0,
      "column2": "text",
      "column3": 200,
      "column4": -2000
    },
    {
      "column1": 1,
      "column2": "text",
      "column3": 600,
      "column4": 0
    },
    {
      "column1": 2,
      "column2": "text",
      "column3": 601,
      "column4": 500
    }
  ];

}
