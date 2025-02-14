import { TranslateModule } from '@services/language/translate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagesPageRoutingModule } from './languages-routing.module';

import { LanguagesPage } from './languages.page';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguagesPageRoutingModule,
    TranslateModule.forChild({}),
  ],
  declarations: [LanguagesPage],
})
export class LanguagesPageModule {}
