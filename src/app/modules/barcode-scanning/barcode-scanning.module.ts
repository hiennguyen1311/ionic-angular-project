import { NgModule } from '@angular/core';

import { BarcodeScanningRoutingModule } from './barcode-scanning-routing.module';

import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { BarcodeScanningPage } from './barcode-scanning.page';

@NgModule({
  imports: [
    BarcodeScanningRoutingModule,
    BarcodeScanningPage,
    BarcodeScanningModalComponent,
  ],
  exports: [BarcodeScanningPage, BarcodeScanningModalComponent],
})
export class BarcodeScanningModule {}
