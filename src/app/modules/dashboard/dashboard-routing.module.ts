import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin-guard.guard';
import { AgregarAlumnoComponent } from './pages/agregar-alumno/agregar-alumno.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { MainComponent } from './pages/main/main.component';
import { NuevoCursoComponent } from './pages/nuevo-curso/nuevo-curso.component';
import { PaginaerrorComponent } from './pages/paginaerror/paginaerror.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VerCursoComponent } from './pages/ver-curso/ver-curso.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'alumnos',
        component: AlumnosComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'inscripciones',
        component: InscripcionComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'info-usuario/:id',
        component: VerUsuarioComponent,
      },
      {
        path: 'info-curso/:id',
        component: VerCursoComponent,
      },
      {
        path: 'nuevo-curso',
        component: NuevoCursoComponent,
      },
      {
        path: 'agregar-alumno/:id',
        component: AgregarAlumnoComponent,
      },
      {
        path: '404',
        component: PaginaerrorComponent,
      },
      {
        path: '**',
        redirectTo: '404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
