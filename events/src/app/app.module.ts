import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MetaModule, PipesModule } from 'angularm';
import { AngularmModule, FlashMessageComponent, FlashMessageService } from 'angularm';
import {
  ListEntitiesComponent, ShowEntityComponent, NewEntityComponent,
  EditEntityComponent, HomeComponent, PageNotFoundComponent } from 'angularm';
import { EntityLineComponent, CreateEntityComponent, FormLineComponent,
  EditEntityFormComponent, EditFormLineComponent, EntityDetailsComponent,
  ShowLineComponent, ListingTableComponent } from 'angularm';

import { AppComponent } from './app.component';
import { EntityFormComponent } from './widgets/entity.form.component';
import { EntitiesTableComponent } from './widgets/entities.table.component';
import { EntityTableLineComponent } from './widgets/entity.table.line.component';
import { EntityPanelComponent } from './widgets/entity.panel.component';
import { PropertyFormLineComponent } from './widgets/property.form.line.component';

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
    EntityFormComponent,
    EntitiesTableComponent,
    EntityTableLineComponent,
    EntityPanelComponent,
    PropertyFormLineComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    EditFormLineComponent,
    EntityDetailsComponent,
    ShowLineComponent,
    ListingTableComponent,
    EntityFormComponent,
    EntitiesTableComponent,
    EntityTableLineComponent,
    EntityPanelComponent,
    PropertyFormLineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
