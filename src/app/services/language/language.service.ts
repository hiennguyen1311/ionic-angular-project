import { Injectable } from '@angular/core';
import { ApplicationState } from '@models/store.interface';
import { Store, select } from '@ngrx/store';
import { ChangeLanguageAction } from '@store/language.ts/language.action';
import { Languages } from '@plugins/Language/LanguagePlugin';
import i18n from '@i18n/i18n';
import LocalStorage from '@plugins/LocalStorage/LocalStorage';
import { LOCAL_STORAGE } from '@constant/enum';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE_CODE, LANGUAGES_CODE } from '@constant/constant';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  languages = Languages;
  id$;
  id = DEFAULT_LANGUAGE_CODE;
  flag = '';
  name = '';
  constructor(
    private store: Store<ApplicationState>,
    private translateService: TranslateService
  ) {
    this.id$ = this.store.pipe(select('language', 'id'));
    this.id$.subscribe((value) => {
      this.id = value;
      this.flag = this.languages.find((i) => i.code === value)?.flag || '';
      this.name = this.languages.find((i) => i.code === value)?.fullName || '';
    });
    this.init();
    translateService.setDefaultLang(DEFAULT_LANGUAGE_CODE);
    translateService.use(DEFAULT_LANGUAGE_CODE);
    translateService.addLangs(LANGUAGES_CODE);
  }

  async init() {
    const { value } = await LocalStorage.get({ key: LOCAL_STORAGE.LANGUAGE });
    this.handleChange(value || DEFAULT_LANGUAGE_CODE);
    this.translateService.use(value || DEFAULT_LANGUAGE_CODE);
  }

  public handleChange(id: string) {
    this.id = id;
    this.store.dispatch(ChangeLanguageAction({ id }));
  }

  public t(scope: string | string[], options?: any) {
    return i18n.t(scope, options);
  }

  public translate(scope: string | string[], options: any) {
    return this.t(scope, options);
  }
}
