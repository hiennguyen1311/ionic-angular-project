import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomeTabComponent } from './home-tab.component';
import { MenuContentModule } from '@modules/menu/menu-content/menu-content.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MenuContentModule],
  declarations: [HomeTabComponent],
})
export class HomeTabModule {}
