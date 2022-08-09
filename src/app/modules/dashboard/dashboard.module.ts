import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PaginaerrorComponent } from './pages/paginaerror/paginaerror.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './pages/main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormularioInscripcion } from './components/formulario-inscripcion/formulario-inscripcion.component';
import { Listado } from './components/listado/listado.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { MateriaComponenteComponent } from './components/materia-componente/materia-componente.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';
import { FormularioNuevoCursoComponent } from './components/formulario-nuevo-curso/formulario-nuevo-curso.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { NuevoCursoComponent } from './pages/nuevo-curso/nuevo-curso.component';

@NgModule({
  declarations: [
    PaginaerrorComponent,
    MainComponent,
    FormularioInscripcion,
    Listado,
    InscripcionComponent,
    AlumnosComponent,
    UsuariosComponent,
    MateriaComponenteComponent,
    CursosComponent,
    VerUsuarioComponent,
    ListadoCursosComponent,
    FormularioNuevoCursoComponent,
    EditarUsuarioComponent,
    NuevoCursoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
