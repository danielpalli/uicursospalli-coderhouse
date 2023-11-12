import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLayoutComponent } from './layouts/ui-layout/ui-layout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: UiLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: MainPageComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
