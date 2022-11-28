import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FlexModule } from '@angular/flex-layout';
import { DashboardRoutingModule } from '../modules/dashboard/dashboard-routing.module';


@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [MaterialModule, FlexModule, DashboardRoutingModule, CommonModule ],
})
export class SharedModule {}
