import 'rxjs/add/operator/switchMap';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AngularmService, EntityTypeComponent, PropertyType } from 'angularm';

@Component({
    templateUrl: './entity.form.component.html',
})
export class EntityFormComponent extends EntityTypeComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private angularm: AngularmService
  ) {
    super();
  }

  ngOnInit() {
    const fbConf: any = {};
    this.angularm.fireEvent('populateCreateForm', this.entityType, fbConf);
    this.myForm = this.fb.group(fbConf);
  }

  onSubmit(form: any): void {
    this.angularm.fireEvent('create', this.entityType, form);
  }
}
