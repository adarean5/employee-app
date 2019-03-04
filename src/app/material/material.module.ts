import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatTooltipModule,
  MatTableModule,
  MatFormFieldModule
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule {}
