import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatTooltipModule,
  MatTableModule,
  MatFormFieldModule
} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule {}
