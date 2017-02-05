import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import AngularM module
import { AngularmModule } from 'angularm';

import { AppComponent } from './app.component';
import { AppListingTableComponent } from './app-listing-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListingTableComponent
  ],
  imports: [
    BrowserModule,
    AngularmModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
