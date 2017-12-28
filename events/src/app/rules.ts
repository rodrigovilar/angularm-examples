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
import { PropertyFormLineComponent } from './widgets/property.form.line.component';

export let defineRules = (angularm: AngularmService) => {
    angularm
        .pr('form_line', '*', 'code', null, PropertyFormLineComponent, { inputType: 'number' })
        .dpr('form_line', PropertyFormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', EntitiesTableComponent)
        .der('table_line', EntityTableLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .der('create_form', EntityFormComponent, {action: 'create'})
        .der('edit_form', EntityFormComponent, {action: 'edit'})
};
