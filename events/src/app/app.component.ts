import { Component } from '@angular/core';

import { AngularmService, EntityTypesComponent, AngularmEvent, TitleCase, EntityType, PropertyType, FlashMessageService } from 'angularm';

import { describeDomain } from './entities';
import { defineRules } from './rules';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends EntityTypesComponent {

  constructor(
    private router: Router,
    private angularm: AngularmService,
    private flash: FlashMessageService
  ) {
    super();
    describeDomain(this.angularm);
    defineRules(this.angularm);

    this.angularm.eventFired$
      .subscribe( (event: AngularmEvent) => {
          if (event.event === 'create') {
            this.create(event);
          }

          if (event.event === 'populateCreateForm') {
            this.populateCreateForm(event);
          }

          if (event.event === 'exit') {
            this.exit(event);
          }

          if (event.event === 'listAll') {
            this.listAll(event);
          }

          if (event.event === 'list') {
            this.list(event);
          }

          if (event.event === 'newForm') {
            this.newForm(event);
          }

          if (event.event === 'populateEditForm') {
            this.populateEditForm(event);
          }

          if (event.event === 'editForm') {
            this.editForm(event);
          }

          if (event.event === 'show') {
            this.show(event);
          }

          if (event.event === 'edit') {
            this.edit(event);
          }

          if (event.event === 'destroy') {
            this.destroy(event);
          }
        }
      );
  }

  private populateCreateForm(event: AngularmEvent) {
    event.context.properties.forEach( (propertyType: PropertyType) => {
      event.data[propertyType.name] = ['']; // TO DO Add validators here according to metadata
    });
  }

  private create(event: AngularmEvent) {
    this.angularm.create(event.context.singular, event.data);
    const entityTypeName = TitleCase.toTitleCase(event.context.singular);
    this.flash.changeMessage(`${entityTypeName} was successfully created.`);
    const idPropertyType: string = event.context.tags.id;
    this.router.navigate([event.context.plural, event.data[idPropertyType] ]);
  }

  private exit(event: AngularmEvent) {
    this.flash.clearMessage();
    this.router.navigate(['/']);
  }

  private listAll(event: AngularmEvent) {
    this.angularm.listAll(event.context.singular).then(
      entities => entities.forEach(entity => event.data.push(entity))
    );
  }

  private list(event: AngularmEvent) {
    this.router.navigate([event.context.entityType.plural]);
    this.flash.clearMessage();
  }

  private newForm(event: AngularmEvent) {
    this.flash.clearMessage();
    this.router.navigate([event.context.plural, 'new']);
  }

  private populateEditForm(event: AngularmEvent) {
    if (event.context) {
      event.context.entityType.properties.forEach(propertyType => {
        event.data[propertyType.name] = event.context.properties[propertyType.name]; // TO DO Add validators here according to metadata
      });
    }
  }

  private editForm(event: AngularmEvent) {
    this.flash.clearMessage();
    this.router.navigate([event.context.entityType.plural, event.context.key, 'edit']);
  }

  private show(event: AngularmEvent) {
    this.flash.clearMessage();
    this.router.navigate([event.context.entityType.plural, event.context.key]);
  }

  private edit (event: AngularmEvent) {
    this.angularm.edit(event.context.entityType.singular, event.context.key, event.data);
    const entityTypeName = TitleCase.toTitleCase(event.context.entityType.singular);
    this.flash.changeMessage(`${entityTypeName} was successfully updated.`);
    this.router.navigate([event.context.entityType.plural, event.data[event.context.entityType.tags.id]]);
  }

  private destroy (event: AngularmEvent) {
    if (confirm('Are you sure?')) {
      this.angularm.delete(event.context.entityType.singular, event.context.key);
      const entityTypeName = TitleCase.toTitleCase(event.context.entityType.singular);
      this.flash.changeMessage(`${entityTypeName} was successfully destroyed.`);
    }
  }

}
