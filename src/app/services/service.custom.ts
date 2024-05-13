import { RouteReuseStrategy } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { IonicRouteStrategy } from '@ionic/angular';
import { FireStoreSerivce } from './firebase/firestore.firebase.service';
import { LanguageService } from './language/language.service';
import { ProfileSerivce } from './profile/profile.service';

export const CustomServiceProviders = [
  AuthService,
  AuthGuard,
  {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy,
  },
  LanguageService,
  FireStoreSerivce,
  ProfileSerivce,
];
