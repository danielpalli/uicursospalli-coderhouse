import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  exports: [MatButtonModule, MatMenuModule,MatFormFieldModule,MatDividerModule],
  declarations: [],
  imports: [CommonModule],
})
export class MaterialModule {}
