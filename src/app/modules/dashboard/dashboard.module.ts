import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PaginaerrorComponent } from './pages/paginaerror/paginaerror.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './pages/main/main.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HomeComponent,
    PaginaerrorComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DashboardModule { }
