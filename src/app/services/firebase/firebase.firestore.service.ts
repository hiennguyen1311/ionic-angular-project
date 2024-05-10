import { get } from '@utils/util';
import {
  doc,
  Firestore,
  collection,
  CollectionReference,
} from '@angular/fire/firestore';
import { Injectable, inject } from '@angular/core';
import { AngularFireStore } from '@plugins';
import { Observable, Subject, catchError, switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { ApplicationState } from '@models/store.interface';
import { UpdateProfileAction } from '@store/profile/profile.action';

@Injectable({ providedIn: 'root' })
export class FireStoreSerivce {
  private dbPath = 'user';
  private idField = 'id';
  private id = 'hien.phucnguyen@hitachids.com';
  private profile$ = new Subject<any>();
  public profile: any = {};
  public queryObservable$: Observable<any>;
  public parseData = {
    image: '',
    name: '',
    email: '',
  };

  constructor(
    private afs: AngularFirestore,
    private store: Store<ApplicationState>
  ) {
    this.queryObservable$ = this.profile$.pipe(
      switchMap((data) =>
        this.afs
          .collection(this.dbPath, (ref) => ref.where(this.idField, '==', data))
          .valueChanges()
      ),
      catchError((error) => {
        return error;
      })
    );
    this.queryObservable$.subscribe((queriedItems) => {
      this.profile = queriedItems[0] || this.profile;
      this.parseData = {
        image: get(this.profile, 'image', ''),
        name: get(this.profile, 'name', ''),
        email: get(this.profile, 'email', ''),
      };
      this.updateProfile(this.parseData);
    });
    this.profile$.next(this.id);
  }

  updateProfile(profile: any) {
    this.store.dispatch(UpdateProfileAction({ payload: profile }));
  }
}
