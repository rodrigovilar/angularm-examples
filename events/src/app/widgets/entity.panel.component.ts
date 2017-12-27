import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, EntityComponent } from 'angularm';

@Component({
  templateUrl: 'entity.panel.component.html'
})
export class EntityPanelComponent extends EntityComponent {

  constructor(angularm: AngularmService) {
    super(angularm);
  }

  back() {
    super.fireEvent('list', {});
    return false;
  }

  edit() {
    super.fireEvent('editForm', {});
    return false;
  }

}
