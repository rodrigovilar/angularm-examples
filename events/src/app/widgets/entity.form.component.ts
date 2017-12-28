import 'rxjs/add/operator/switchMap';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AngularmService, EntityComponent, PropertyType } from 'angularm';

@Component({
    templateUrl: './entity.form.component.html',
})
export class EntityFormComponent extends EntityComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    angularm: AngularmService
  ) {
    super(angularm);
  }

  ngOnInit() {
    const fbConf: any = {};
    this.angularm.fireEvent(this.configuration.action + 'Init', this.entity, fbConf);
    this.myForm = this.fb.group(fbConf);
  }

  onSubmit(): void {
    this.angularm.fireEvent(this.configuration.action + 'Submit', this.entity, this.myForm.value);
  }

  back() {
    super.fireEvent('list', {});
    return false;
  }
}
