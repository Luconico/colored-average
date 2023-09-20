# colored-average Directive (Angular)

[![npm](https://img.shields.io/npm/v/colored-average)](https://www.npmjs.com/package/colored-average)
[![License](https://img.shields.io/npm/l/colored-average)](https://github.com/Luconico/colored-average/blob/main/LICENSE)

The `colored-average` directive is an Angular directive that allows you to dynamically colorize table cells based on the range of numeric values within the columns. You can specify minimum and maximum colors, and the directive will apply colors smoothly between them based on the values in the table.

![colored-average Example1](https://github.com/Luconico/colored-average/blob/main/example1.png)
![colored-average Example2](https://github.com/Luconico/colored-average/blob/main/example2.png)

## Installation

You can install the `colored-average` directive via npm using the following command:

```shell
npm install colored-average
```
## Usage

To use the `colored-average` directive, follow these steps:

1. Import the `ColoredAverageModule` in your Angular module:

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { ColoredAverageModule } from 'colored-average';

   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule, ColoredAverageModule],
     providers: [],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

2. Import the `ColoredAverageOptions` in your Angular component:

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
       columnOptions: [
         {
           index: 3, // Index of the column (0-based)
           minValue: 0, // Minimum value for this column
           maxValue: 100, // Maximum value for this column
         },
         // Add more columnOptions as needed
        ],
     };
   }
   ```

3. Add the [colored-average] directive to your table's tbody element in your component's template:

    ```html
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
- `columnOptions`: An array of `ColumnOptions` objects that specify the minimum and maximum values for each column in the table. This is useful for cases like pagination where you want to set specific bounds for a column without affecting others. The `ColumnOptions` interface has the following properties:
  - `index`: The index of the column (0-based).
  - `minValue`: The minimum value for this column.
  - `maxValue`: The maximum value for this column.

You can adjust these options to achieve the desired visual effect for your table columns. For example, you can create a gradient effect from red to green for numeric values in a table.

## License

This project is licensed under the MIT License.

## Author

- LucasGS
- GitHub: [LucasGS](https://github.com/Luconico)

Feel free to contribute or report issues on GitHub!