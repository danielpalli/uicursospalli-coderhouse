import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaerrorComponent } from './shared/paginaerror/paginaerror.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
