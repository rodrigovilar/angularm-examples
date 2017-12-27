import { Component, OnInit, ViewChild } from '@angular/core';

import { PropertyComponent, AngularmService} from 'angularm';

@Component({
    templateUrl: 'property.form.line2.component.html'
})
export class PropertyFormLine2Component extends PropertyComponent {
    constructor(angularm: AngularmService) {
        super(angularm);
    }

 }
