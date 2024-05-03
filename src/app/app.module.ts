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
import { HomeTabModule } from '@modules/home/home-tab/home-tab.module';
import { AuthService } from '@services/auth/auth.service';
import { AuthGuard } from '@services/auth/auth.guard';
import { LanguageService } from '@services/language/language.service';

@NgModule({
  declarations: [AppComponent, TabsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreReducer,
    StoreEffect,
    IonicStorageModule.forRoot(),
    RouterModule,
    HomeTabModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    LanguageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
