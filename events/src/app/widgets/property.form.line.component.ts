import { Component } from '@angular/core';

import { PropertyTypeComponent, AngularmService } from 'angularm';

@Component({
    templateUrl: 'property.form.line.component.html'
})
export class PropertyFormLineComponent extends PropertyTypeComponent {
    constructor(angularm: AngularmService) {
        super(angularm);
    }

}
