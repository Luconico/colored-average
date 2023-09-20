import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

export class ExampleComponent {

  rows = [
    {
      "column1": 0.1,
      "column2": "text",
      "column3": 500,
      "column4": 20
    },
    {
      "column1": 0.3,
      "column2": "text",
      "column3": 100,
      "column4": 320
    },
    {
      "column1": 0,
      "column2": "text",
      "column3": 200,
      "column4": -20
    },
    {
      "column1": 1,
      "column2": "text",
      "column3": 600,
      "column4": 0
    }
  ];

}
