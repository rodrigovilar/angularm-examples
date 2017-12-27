import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, EntityTypeComponent, AngularmEvent } from 'angularm';

@Component({
  templateUrl: './entities.table.component.html'
})
export class EntitiesTableComponent extends EntityTypeComponent implements OnInit {

  constructor(angularm: AngularmService) {
    super(angularm);
  }

  ngOnInit() {
    this.reload();

    this.angularm.eventFired$
      .subscribe( (event: AngularmEvent) => {
          if (event.name === 'destroy') {
            this.reload();
          }
        }
      );
  }

  reload() {
    this.entities = [];
    super.fireEvent('listAll', this.entities);
  }

  back() {
    super.fireEvent('exit', {});
    return false;
  }

  create() {
    this.angularm.fireEvent('newForm', this.entityType, {});
    return false;
  }
}
