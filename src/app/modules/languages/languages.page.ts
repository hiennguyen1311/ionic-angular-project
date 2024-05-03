import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';
import { ApplicationState } from '@models/store.interface';
import { Store, select } from '@ngrx/store';
import { Languages } from '@plugins/Language/LanguagePlugin';
import { LanguageService } from '@services/language/language.service';
import { ChangeLanguageAction } from '@store/language.ts/language.action';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {
  titles = {
    title: this.Language.t('LANGUAGES.TITLE'),
  };
  languages = Languages;
  constructor(public Language: LanguageService) {}

  ngOnInit() {}

  handleChange(id: string) {
    this.Language.handleChange(id);
  }
}
