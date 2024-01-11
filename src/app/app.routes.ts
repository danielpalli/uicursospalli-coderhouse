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
        path: 'recuperarpassword',
        title: 'Recuperar Password',
        loadComponent: () =>
          import('./features/auth/pages/forgot-password-page/forgot-password-page.component'),
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
    children: [
      {
        path: 'inicio',
        title: 'Noticias',
        loadComponent: () =>
          import('./features/ui/pages/main-page/main-page.component'),
      },
      {
        path: 'preinscripcion',
        title: 'Pre-inscripcion',
        loadComponent: () =>
          import(
            './features/ui/pages/course-enrollment-page/course-enrollment-page.component'
          ),
      },
      {
        path: '**',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'autenticacion',
  },
];
