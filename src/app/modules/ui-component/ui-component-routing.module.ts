import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponentPage } from './ui-component.page';

const routes: Routes = [
  {
    path: '',
    component: UiComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiComponentPageRoutingModule {}
