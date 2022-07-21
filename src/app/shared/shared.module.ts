import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { FlexModule } from '@angular/flex-layout';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { ImagenPipe } from './pipes/imagen.pipe';
import { NombreYApellidoPipe } from './pipes/nombre-yapellido.pipe';
import { AgrandarLetraDirective } from './directives/agrandar-letra.directive';
import { DashboardRoutingModule } from '../modules/dashboard/dashboard-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    ErrorMsgDirective,
    ImagenPipe,
    NombreYApellidoPipe,
    AgrandarLetraDirective,
    SidenavComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    SidenavComponent,
    AgrandarLetraDirective,
  ],
  imports: [MaterialModule, FlexModule, DashboardRoutingModule, CommonModule ],
})
export class SharedModule {}
