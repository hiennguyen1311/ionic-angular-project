import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiManagerPageRoutingModule } from './api-manager-routing.module';

import { ApiManagerPage } from './api-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiManagerPageRoutingModule
  ],
  declarations: [ApiManagerPage]
})
export class ApiManagerPageModule {}
