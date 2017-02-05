import { Component } from '@angular/core';

import { AngularmService, EntityTypesComponent, EntityType } from 'angularm';

import { describeDomain } from './entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends EntityTypesComponent {

  selectedEntityType: EntityType;

  constructor(angularm: AngularmService) {
    super();
    describeDomain(angularm);

    angularm.create('student', {code: "123", name: "John"});
    angularm.create('student', {code: "456", name: "Mary"});

    angularm.create('client', {id: "1", name: "Client 1"});
    angularm.create('client', {id: "2", name: "Client 2"});

    this.entityTypes = angularm.listEntityTypes();
  }

  select(entityType: EntityType) {
    this.selectedEntityType = entityType;
  }
}
