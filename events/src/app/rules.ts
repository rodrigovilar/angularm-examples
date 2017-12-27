import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { EntitiesTableComponent } from './widgets/entities.table.component';
import { EntityTableLineComponent } from './widgets/entity.table.line.component';
import { EntityFormComponent } from './widgets/entity.form.component';
import { EntityForm2Component } from './widgets/entity.form2.component';
import { PropertyFormLineComponent } from './widgets/property.form.line.component';

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', PropertyFormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', EntitiesTableComponent)
        .der('table_line', EntityTableLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', EntityFormComponent)
        .der('edit_form', EntityForm2Component)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
