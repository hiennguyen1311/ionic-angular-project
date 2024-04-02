import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextRecongitionPage } from './text-recongition.page';

const routes: Routes = [
  {
    path: '',
    component: TextRecongitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextRecongitionPageRoutingModule {}
