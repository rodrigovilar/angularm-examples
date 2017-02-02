import {
    AngularmService, EntityLineComponent, CreateEntityComponent, EditEntityFormComponent,
//    ThComponent,
    FormLineComponent, EditFormLineComponent
    // EditFormLineComponent,
    // ShowLineComponent,
    // TdComponent
} from 'angularm';

export let defineRules = (angularm: AngularmService) => {
    angularm
        // .dptr('table_head', ThComponent)
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        // .dpr('show_line', ShowLineComponent)
        .der('table_line', EntityLineComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        // .dpr('table_cell', TdComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
