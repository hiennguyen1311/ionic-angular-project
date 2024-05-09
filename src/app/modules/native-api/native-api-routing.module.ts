import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NativeApiPage } from './native-api.page';

const routes: Routes = [
  {
    path: '',
    component: NativeApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NativeApiPageRoutingModule {}
