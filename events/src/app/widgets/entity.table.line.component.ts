import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, EntityComponent } from 'angularm';


@Component({
    templateUrl: 'entity.table.line.component.html',
})
export class EntityTableLineComponent extends EntityComponent {

    constructor(
            private angularm: AngularmService) {
        super();
    }

    show() {
        this.angularm.fireEvent('show', this.entity, {});
        return false;
    }

    edit() {
        this.angularm.fireEvent('editForm', this.entity, {});
        return false;
    }

    destroy() {
        this.angularm.fireEvent('destroy', this.entity, {});
        return false;
    }
}
