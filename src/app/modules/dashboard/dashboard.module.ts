import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PaginaerrorComponent } from './pages/paginaerror/paginaerror.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    HomeComponent,
    PaginaerrorComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
