import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ValidarTokenGuard } from './core/guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'autogestion',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    // canActivate: [ValidarTokenGuard],
    // canLoad: [ValidarTokenGuard],
  },

  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
