import { Component } from '@angular/core';

import { AngularmService, EntityTypesComponent } from 'angularm';

import { describeDomain } from './entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends EntityTypesComponent {

  constructor(
    private angularm: AngularmService
  ) {
    super();
    describeDomain(this.angularm);
  }

}
