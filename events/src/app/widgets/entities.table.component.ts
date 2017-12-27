import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, EntityTypeComponent, AngularmEvent } from 'angularm';

@Component({
  templateUrl: './entities.table.component.html'
})
export class EntitiesTableComponent extends EntityTypeComponent implements OnInit {

  constructor(
    private angularm: AngularmService
  ) {
    super();
  }

  ngOnInit() {
    this.reload();

    this.angularm.eventFired$
      .subscribe( (event: AngularmEvent) => {
          if (event.event === 'destroy') {
            this.reload();
          }
        }
      );
  }

  reload() {
    this.entities = [];
    this.angularm.fireEvent('listAll', this.entityType, this.entities);
  }

  back() {
    this.angularm.fireEvent('exit', this.entityType, {});
    return false;
  }

  create() {
    this.angularm.fireEvent('newForm', this.entityType, {});
    return false;
  }
}
