import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'scan',
    loadChildren: () =>
      import('./modules/scan/scan.module').then((m) => m.ScanPageModule),
  },
  {
    path: 'barcode-scanningg',
    loadChildren: () =>
      import('./modules/barcode-scanning/barcode-scanning.module').then(
        (m) => m.BarcodeScanningModule
      ),
  },
  {
    path: 'text-recongition',
    loadChildren: () =>
      import('./modules/text-recongition/text-recongition.module').then(
        (m) => m.TextRecongitionPageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./modules/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
