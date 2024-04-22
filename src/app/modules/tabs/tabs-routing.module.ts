import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'scan',
      },
      {
        path: 'scan',
        loadChildren: () =>
          import('../scan/scan.module').then((m) => m.ScanPageModule),
      },
      {
        path: 'text-recongition',
        loadChildren: () =>
          import('../text-recongition/text-recongition.module').then(
            (m) => m.TextRecongitionPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
