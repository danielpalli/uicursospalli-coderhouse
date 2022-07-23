import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin-guard.guard';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { MainComponent } from './pages/main/main.component';
import { PaginaerrorComponent } from './pages/paginaerror/paginaerror.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

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
