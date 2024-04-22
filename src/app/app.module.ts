import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreReducer } from '@store/store.reducer';
import { StoreEffect } from '@store/store.effect';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './modules/tabs/tabs.component';
import { HomeTabComponent } from './modules/home/home-tab/home-tab.component';

@NgModule({
  declarations: [AppComponent, TabsComponent, HomeTabComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreReducer,
    StoreEffect,
    IonicStorageModule.forRoot(),
    RouterModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
