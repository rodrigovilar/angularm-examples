import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import AngularM module
import { AngularmModule } from 'angularm';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularmModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
