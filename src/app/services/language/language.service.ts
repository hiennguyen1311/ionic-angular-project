import { Injectable } from '@angular/core';
import { ApplicationState } from '@models/store.interface';
import { Store, select } from '@ngrx/store';
import { ChangeLanguageAction } from '@store/language.ts/language.action';
import { Languages } from '@plugins/Language/LanguagePlugin';
import i18n from '@i18n/i18n';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';
import { LOCAL_STORAGE } from '@constant/enum';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  languages = Languages;
  id$;
  id = 'en';
  constructor(private store: Store<ApplicationState>) {
    this.id$ = this.store.pipe(select('language', 'id'));
    this.id$.subscribe((value) => {
      this.id = value;
    });
    this.init();
  }

  async init() {
    const { value } = await LocalStorage.get({ key: LOCAL_STORAGE.LANGUAGE });
    this.handleChange(value || 'en');
  }

  public handleChange(id: string) {
    this.id = id;
    this.store.dispatch(ChangeLanguageAction({ id }));
  }

  public t(scope: string | string[], options?: any) {
    return i18n.t(scope, options);
  }

  public translate(scope: string | string[], options: any) {
    return i18n.t(scope, options);
  }
}
