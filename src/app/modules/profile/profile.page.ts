import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';
import { ApplicationState } from '@models/store.interface';
import { Store, select } from '@ngrx/store';
import { AuthService } from '@services/auth/auth.service';
import { FireStoreSerivce } from '@services/firebase/firebase.firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  titles = {
    logout: i18n.t('HOME.LOGOUT'),
    logout_confirm: i18n.t('PROFILE.LOGOUT_CONFIRM'),
    cancel: i18n.t('GLOBAL.CANCEL'),
  };
  email$: Observable<string>;
  email: string = '';
  profile$: Observable<string>;
  profile: any = {};

  constructor(
    private authService: AuthService,
    private store: Store<ApplicationState>,
    public fireService: FireStoreSerivce
  ) {
    this.email$ = this.store.pipe(select('auth', 'email'));
    this.profile$ = this.store.pipe(select('profile', 'data'));
  }

  ngOnInit() {
    this.email$.subscribe((value) => {
      this.email = value;
    });
    this.profile$.subscribe((value) => {
      this.profile = value;
    });
  }

  async logout() {
    await this.authService.logout();
  }
}
