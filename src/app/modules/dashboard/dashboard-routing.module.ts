import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { PaginaerrorComponent } from './pages/paginaerror/paginaerror.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'inicio',
        component: HomeComponent,
      },
      {
        path: '404',
        component: PaginaerrorComponent,
      },
      {
        path: '**',
        redirectTo: 'auth',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
