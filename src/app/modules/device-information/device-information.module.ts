import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceInformationPageRoutingModule } from './device-information-routing.module';

import { DeviceInformationPage } from './device-information.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceInformationPageRoutingModule,
    TranslateModule.forChild({}),
  ],
  declarations: [DeviceInformationPage],
})
export class DeviceInformationPageModule {}
