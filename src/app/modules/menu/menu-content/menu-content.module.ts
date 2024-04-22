import { NgModule } from '@angular/core';
import { MenuContentComponent } from './menu-content.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [MenuContentComponent],
  exports: [MenuContentComponent],
})
export class MenuContentModule {}
