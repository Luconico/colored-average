# colored-average Directive

[![npm](https://img.shields.io/npm/v/colored-average)](https://www.npmjs.com/package/colored-average)
[![License](https://img.shields.io/npm/l/colored-average)](https://github.com/your-username/colored-average/blob/main/LICENSE)

The `colored-average` directive is an Angular directive that allows you to dynamically colorize table cells based on the range of numeric values within the columns. You can specify minimum and maximum colors, and the directive will apply colors smoothly between them based on the values in the table.

![colored-average Demo](demo.png)

## Installation

You can install the `colored-average` directive via npm using the following command:

```shell
npm install colored-average
```
## Usage

To use the `colored-average` directive, follow these steps:

1. Import the `ColoredAverageDirective` in your Angular component:

   ```typescript
   import { Component } from '@angular/core';
   import { ColoredAverageOptions } from 'colored-average';

   @Component({
     selector: 'app-your-component',
     templateUrl: './your-component.component.html',
   })
   export class YourComponent {
     coloredAverageOptions: ColoredAverageOptions = {
       minColor: '#FF0000', // Minimum color (e.g., red)
       maxColor: '#00FF00', // Maximum color (e.g., green)
       applyToBackground: true, // Apply to cell background color
     };
   }
   ```

2. Add the [colored-average] directive to your table's tbody element in your component's template:

    ```typescript
    <table>
    <tbody [colored-average]="coloredAverageOptions">
        <!-- Your table rows here -->
    </tbody>
    </table>
    ```
Now, the colored-average directive will apply color gradients to the table cells based on the numeric values within the columns.

## Options

The `ColoredAverageOptions` interface allows you to customize the behavior of the directive:

- `minColor`: The color applied to the minimum value in the column. Specify the color using a hexadecimal value (e.g., `#FF0000` for red).
- `maxColor`: The color applied to the maximum value in the column. Specify the color using a hexadecimal value (e.g., `#00FF00` for green).
- `applyToBackground`: Set this option to `true` to apply colors to the background of the table cells. Set it to `false` to apply colors to the text color.

You can adjust these options to achieve the desired visual effect for your table columns. For example, you can create a gradient effect from red to green for numeric values in a table.

## License

This project is licensed under the MIT License.

## Author

- LucasGS
- GitHub: [LucasGS](https://github.com/Luconico)

Feel free to contribute or report issues on GitHub!