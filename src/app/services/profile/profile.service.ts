import { get } from '@utils/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '@models/store.interface';
import { FireStoreSerivce } from '@services/firebase/firestore.firebase.service';
import { FetchProfileAction } from '@store/profile/profile.action';
import { UserUpdate } from '@models/models';

@Injectable({ providedIn: 'root' })
export class ProfileSerivce {
  private id = '';
  private id$: Observable<string>;
  private email$: Observable<string>;
  public email: string = '';
  private profile$: Observable<string>;
  public profile: any = {};
  public profileKeys = ['name'];
  public profiles: any[] = [];

  constructor(
    private firestoreService: FireStoreSerivce,
    private store: Store<ApplicationState>
  ) {
    this.id$ = this.store.pipe(select('auth', 'email'));
    this.email$ = this.store.pipe(select('auth', 'email'));
    this.profile$ = this.store.pipe(select('profile', 'data'));
  }

  public init() {
    this.id$.subscribe((value) => {
      this.id = value;
      if (value) {
        this.firestoreService.fetchProfile(this.id, (payload) =>
          this.store.dispatch(FetchProfileAction.request({ payload }))
        );
      }
    });
    this.email$.subscribe((value) => {
      this.email = value;
    });
    this.profile$.subscribe((value) => {
      this.profile = value;
      this.profiles = this.profileKeys.map((key) => ({
        key,
        value: get(value, key),
      }));
    });
  }

  public async updateProfile(values: UserUpdate) {
    await this.firestoreService.updateProfile(this.email, values);
  }
}
