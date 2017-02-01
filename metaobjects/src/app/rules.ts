import {
    AngularmService, EntityLineComponent
//    ThComponent,
    // FormLineComponent,
    // EditFormLineComponent,
    // ShowLineComponent,
    // TdComponent
} from 'angularm';

export let defineRules = (angularm: AngularmService) => {
    angularm
        // .dptr('table_head', ThComponent)
        // .ptr('form_line', '*', 'matricula', null, FormLineComponent, { inputType: 'number' })
        // .dptr('form_line', FormLineComponent, { inputType: 'text' })
        // .dpr('show_line', ShowLineComponent)
        .der('table_line', EntityLineComponent);
        // .dpr('table_cell', TdComponent)
        // .pr('edit_form_line', '*', 'matricula', null, EditFormLineComponent, { inputType: 'number' })
        // .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
