import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabModule } from './home-tab/home-tab.module';
import { HomeTabComponent } from './home-tab/home-tab.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTabComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home-content',
      },
      {
        path: 'home-content',
        loadChildren: () =>
          import('./home-content/home-content.module').then(
            (m) => m.HomeContentPageModule
          ),
      },
      {
        path: 'scan',
        loadChildren: () =>
          import('../scan/scan.module').then((m) => m.ScanPageModule),
      },
      {
        path: 'text-recognition',
        loadChildren: () =>
          import('../text-recongition/text-recongition.module').then(
            (m) => m.TextRecongitionPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
