import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'autenticacion',
    loadComponent: () => import('./features/auth/auth.component'),
    children: [
      {
        path: 'ingresar',
        title: 'Iniciar Sesion',
        loadComponent: () =>
          import('./features/auth/pages/login-page/login-page.component'),
      },
      {
        path: 'registro',
        title: 'Registro',
        loadComponent: () =>
          import('./features/auth/pages/register-page/register-page.component'),
      },
      {
        path: '**',
        redirectTo: 'ingresar',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'universidad',
    loadComponent: () => import('./features/ui/ui.component'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'autenticacion',
  },
];
