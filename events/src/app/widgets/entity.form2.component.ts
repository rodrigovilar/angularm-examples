import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AngularmService, EntityComponent } from 'angularm';

@Component({
  templateUrl: 'entity.form2.component.html'
})
export class EntityForm2Component extends EntityComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private angularm: AngularmService
  ) {
    super();
  }

  ngOnInit() {
    const fbConf: any = {};
    this.angularm.fireEvent('populateEditForm', this.entity, fbConf);
    this.myForm = this.fb.group(fbConf);
}

  onSubmit(form: any): void {
    this.angularm.fireEvent('edit', this.entity, form);
  }

  show() {
    this.angularm.fireEvent('show', this.entity, {});
    return false;
  }

  back() {
    this.angularm.fireEvent('list', this.entity, {});
    return false;
  }

}
