import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativeApiPageRoutingModule } from './native-api-routing.module';

import { NativeApiPage } from './native-api.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NativeApiPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [NativeApiPage],
})
export class NativeApiPageModule {}
