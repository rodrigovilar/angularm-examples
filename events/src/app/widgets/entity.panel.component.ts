import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, EntityComponent } from 'angularm';

@Component({
  templateUrl: 'entity.panel.component.html'
})
export class EntityPanelComponent extends EntityComponent {

  constructor(
    private angularm: AngularmService
  ) {
    super();
  }

  back() {
    this.angularm.fireEvent('list', this.entity, {});
    return false;
  }

  edit() {
    this.angularm.fireEvent('editForm', this.entity, {});
    return false;
  }

}
