import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreReducer } from '@store/store.reducer';
import { StoreEffect } from '@store/store.effect';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './modules/tabs/tabs.component';
import { HomeTabModule } from '@modules/home/home-tab/home-tab.module';
import { AuthService } from '@services/auth/auth.service';
import { AuthGuard } from '@services/auth/auth.guard';
import { LanguageService } from '@services/language/language.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  MissingTranslationHandler,
  TranslateModule,
} from '@ngx-translate/core';
import {
  HttpLoaderFactory,
  MyMissingTranslationHandler,
  TranslateLoader,
  createTranslateLoader,
} from '@services/language/translate.service';
import { DEFAULT_LANGUAGE_CODE } from '@constant/constant';

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
    StoreDevtoolsModule.instrument({
      maxAge: 100,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: DEFAULT_LANGUAGE_CODE,
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler,
      },
    }),
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
