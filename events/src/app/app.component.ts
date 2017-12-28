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
    angularm: AngularmService,
    private flash: FlashMessageService
      ) {
    super(angularm);
    describeDomain(this.angularm);
    defineRules(this.angularm);

    this.angularm.subscribeEvent('createSubmit', (event) => this.createSubmit(event));
    this.angularm.subscribeEvent('createInit', (event) => this.populateCreateForm(event));
    this.angularm.subscribeEvent('exit', (event) => this.exit(event));
    this.angularm.subscribeEvent('listAll', (event) => this.listAll(event));
    this.angularm.subscribeEvent('list', (event) => this.list(event));
    this.angularm.subscribeEvent('newForm', (event) => this.newForm(event));
    this.angularm.subscribeEvent('editInit', (event) => this.populateEditForm(event));
    this.angularm.subscribeEvent('editForm', (event) => this.editForm(event));
    this.angularm.subscribeEvent('show', (event) => this.show(event));
    this.angularm.subscribeEvent('editSubmit', (event) => this.editSubmit(event));
    this.angularm.subscribeEvent('destroy', (event) => this.destroy(event));
  }

  private populateCreateForm(event: AngularmEvent) {
    event.context.entityType.properties.forEach( (propertyType: PropertyType) => {
      event.data[propertyType.name] = ['']; // TO DO Add validators here according to metadata
    });
  }

  private createSubmit(event: AngularmEvent) {
    this.angularm.create(event.context.entityType.singular, event.data);
    const entityTypeName = TitleCase.toTitleCase(event.context.entityType.singular);
    this.flash.changeMessage(`${entityTypeName} was successfully created.`);
    const idPropertyType: string = event.context.entityType.tags.id;
    this.router.navigate([event.context.entityType.plural, event.data[idPropertyType] ]);
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

  private editSubmit(event: AngularmEvent) {
    this.angularm.edit(event.context.entityType.singular, event.context.key, event.data);
    const entityTypeName = TitleCase.toTitleCase(event.context.entityType.singular);
    this.flash.changeMessage(`${entityTypeName} was successfully updated.`);
    this.router.navigate([event.context.entityType.plural, event.data[event.context.entityType.tags.id]]);
  }

  private destroy(event: AngularmEvent) {
    if (confirm('Are you sure?')) {
      this.angularm.delete(event.context.entityType.singular, event.context.key);
      const entityTypeName = TitleCase.toTitleCase(event.context.entityType.singular);
      this.flash.changeMessage(`${entityTypeName} was successfully destroyed.`);
    }
  }

}
