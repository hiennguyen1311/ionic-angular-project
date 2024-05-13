import { get } from '@utils/util';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { documentId } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class FireStoreSerivce {
  private dbPath = 'user';
  private idField = 'id';
  private profile$ = new Subject<any>();
  public profile: any = {};
  public queryObservable$: Observable<any>;
  public parseData = {
    image: '',
    name: '',
    email: '',
    dob: '',
  };

  constructor(private afs: AngularFirestore) {
    this.queryObservable$ = this.profile$.pipe(
      switchMap((data) =>
        this.afs
          .collection(this.dbPath, (ref) => ref.where(documentId(), '==', data))
          .valueChanges()
      ),
      catchError((error) => {
        return error;
      })
    );
  }

  fetchProfile(id: string, cb = (_data: any) => {}) {
    this.queryObservable$.subscribe((queriedItems) => {
      this.profile = queriedItems[0] || this.profile;
      this.parseData = {
        image: get(this.profile, 'image', ''),
        name: get(this.profile, 'name', ''),
        email: get(this.profile, 'email', ''),
        dob: get(this.profile, 'dob', ''),
      };
      cb(this.parseData);
    });
    this.profile$.next(id);
  }

  async updateProfile(id: string, values: any) {
    await this.afs.collection(this.dbPath).doc(id).set(values, { merge: true });
  }
}
