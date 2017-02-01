import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MetaModule } from 'angularm';
import { PipesModule } from 'angularm';
import { AngularmModule, FlashMessageComponent, FlashMessageService } from 'angularm';
import { ListEntitiesComponent } from 'angularm';
import { ShowEntityComponent } from 'angularm';
import { CreateEntityComponent } from 'angularm';
import { EditEntityComponent } from 'angularm';
import { HomeComponent } from 'angularm';
import { PageNotFoundComponent } from 'angularm';
import { EntityLineComponent } from 'angularm';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':entitytypename', component: ListEntitiesComponent },
  { path: ':entitytypename/new', component: CreateEntityComponent },
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
    CreateEntityComponent,
    EditEntityComponent,
    EntityLineComponent
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
    EntityLineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
