import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { ColoredAverageModule } from './directives/colored-average/colored-average.module';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    ColoredAverageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
