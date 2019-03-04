import { NgModule } from '@angular/core';

import { MatButtonModule, MatTooltipModule, MatTable } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTooltipModule, MatTable],
  exports: [MatButtonModule, MatTooltipModule, MatTable],
  declarations: []
})
export class MaterialModule {}
