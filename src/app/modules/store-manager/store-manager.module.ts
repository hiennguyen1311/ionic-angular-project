import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreManagerPageRoutingModule } from './store-manager-routing.module';

import { StoreManagerPage } from './store-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreManagerPageRoutingModule
  ],
  declarations: [StoreManagerPage]
})
export class StoreManagerPageModule {}
