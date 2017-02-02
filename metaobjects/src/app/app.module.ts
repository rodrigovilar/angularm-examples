import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MetaModule, PipesModule } from 'angularm';
import { AngularmModule, FlashMessageComponent, FlashMessageService } from 'angularm';
import {
  ListEntitiesComponent, ShowEntityComponent, NewEntityComponent,
  EditEntityComponent, HomeComponent, PageNotFoundComponent } from 'angularm';
import { EntityLineComponent, CreateEntityComponent, FormLineComponent,
  EditEntityFormComponent, EditFormLineComponent } from 'angularm';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':entitytypename', component: ListEntitiesComponent },
  { path: ':entitytypename/new', component: NewEntityComponent },
  { path: ':entitytypename/:key', component: ShowEntityComponent },
  { path: ':entitytypename/:key/edit', component: EditEntityComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FlashMessageComponent,
    HomeComponent,
    PageNotFoundComponent,
    ListEntitiesComponent,
    ShowEntityComponent,
    NewEntityComponent,
    EditEntityComponent,
    EntityLineComponent,
    CreateEntityComponent,
    FormLineComponent,
    EditEntityFormComponent,
    EditFormLineComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularmModule,
    PipesModule,
    MetaModule
  ],
  providers: [
    FlashMessageService
  ],
  entryComponents: [
    EntityLineComponent,
    CreateEntityComponent,
    FormLineComponent,
    EditEntityFormComponent,
    EditFormLineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
