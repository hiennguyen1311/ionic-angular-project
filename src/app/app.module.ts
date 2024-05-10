import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
  MyMissingTranslationHandler,
  TranslateLoader,
  createTranslateLoader,
} from '@services/language/translate.service';
import { DEFAULT_LANGUAGE_CODE } from '@constant/constant';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import environment from '@src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FireStoreSerivce } from '@services/firebase/firebase.firestore.service';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

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
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: DEFAULT_LANGUAGE_CODE,
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MyMissingTranslationHandler,
      },
    }),
    /** Firebase */
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: environment.firebaseKey,
        projectId: environment.firebaseProjectId,
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp({
      apiKey: environment.firebaseKey,
      projectId: environment.firebaseProjectId,
    }),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    LanguageService,
    FireStoreSerivce,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
