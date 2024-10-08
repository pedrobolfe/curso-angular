import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';
//import { CursoFormComponent } from './curso-form/curso-form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CursosRoutingModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent//,
        //CursoFormComponent
    ],
    providers: [CursosService],
})
export class CursosModule { }