import { Component, Input, OnChanges } from '@angular/core';

import { AngularmService, EntityTypeComponent, EntityType, Entity } from 'angularm';

import { describeDomain } from './entities';

@Component({
  selector: 'app-listing-table',
  templateUrl: './app-listing-table.component.html',
  styleUrls: ['./app-listing-table.component.css']
})
export class AppListingTableComponent implements OnChanges {
  
  @Input()
  public entityType: EntityType;

  entities: Entity[];

  constructor(private angularm: AngularmService) {}

  public ngOnChanges() {
    this.angularm.listAll(this.entityType.singular).then( entities => {
      this.entities = entities;
    });
  }
}
