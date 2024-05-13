import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiComponentPageRoutingModule } from './ui-component-routing.module';

import { UiComponentPage } from './ui-component.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiComponentPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [UiComponentPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiComponentPageModule {}
