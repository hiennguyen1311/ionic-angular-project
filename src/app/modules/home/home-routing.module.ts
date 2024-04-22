import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
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
