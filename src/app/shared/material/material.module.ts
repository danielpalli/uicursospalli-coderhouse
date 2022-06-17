import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../shared.module';

@NgModule({
  exports: [MatButtonModule, MatMenuModule],
  declarations: [],
  imports: [CommonModule],
})
export class MaterialModule {}
