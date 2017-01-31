import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularmModule, PipesModule } from 'angularm';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularmModule,
    PipesModule //TO DO move pipes to AngularmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
