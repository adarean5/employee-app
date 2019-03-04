import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { GenderPipePipe } from './pipes/gender-pipe.pipe';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [TableComponent, GenderPipePipe],
  imports: [CommonModule, MaterialModule],
  exports: [TableComponent, GenderPipePipe]
})
export class WidgetsModule {}
