import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextRecongitionPageRoutingModule } from './text-recongition-routing.module';

import { TextRecongitionPage } from './text-recongition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextRecongitionPageRoutingModule
  ],
  declarations: [TextRecongitionPage]
})
export class TextRecongitionPageModule {}
