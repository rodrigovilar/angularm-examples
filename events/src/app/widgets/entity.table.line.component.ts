import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, EntityComponent } from 'angularm';


@Component({
    templateUrl: 'entity.table.line.component.html',
})
export class EntityTableLineComponent extends EntityComponent {

    constructor(angularm: AngularmService) {
        super(angularm);
      }

    show() {
        super.fireEvent('show', {});
        return false;
    }

    edit() {
        super.fireEvent('editForm', {});
        return false;
    }

    destroy() {
        super.fireEvent('destroy', {});
        return false;
    }
}
