import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreManagerPage } from './store-manager.page';

const routes: Routes = [
  {
    path: '',
    component: StoreManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreManagerPageRoutingModule {}
