import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
  ],
  declarations: [],
  imports: [CommonModule],
})
export class MaterialModule {}
