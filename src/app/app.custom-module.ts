import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreReducer } from '@store/store.reducer';
import { StoreEffect } from '@store/store.effect';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RouterModule } from '@angular/router';
import { HomeTabModule } from '@modules/home/home-tab/home-tab.module';
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
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
export const CustomModulesImport = [
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
];
