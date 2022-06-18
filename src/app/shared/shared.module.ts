import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [MaterialModule, FlexModule],
})
export class SharedModule {}
