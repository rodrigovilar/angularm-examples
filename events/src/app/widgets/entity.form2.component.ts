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
    angularm: AngularmService
        ) {
    super(angularm);
    }

  ngOnInit() {
    const fbConf: any = {};
    super.fireEvent('populateEditForm', fbConf);
    this.myForm = this.fb.group(fbConf);
}

  onSubmit(form: any): void {
    super.fireEvent('edit', form);
  }

  show() {
    super.fireEvent('show', {});
    return false;
  }

  back() {
    super.fireEvent('list', {});
    return false;
  }

}
