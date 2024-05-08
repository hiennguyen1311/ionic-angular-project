import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@services/language/language.service';

@Component({
  selector: 'app-languages-popup-menu',
  templateUrl: './languages-popup-menu.component.html',
  styleUrls: ['./languages-popup-menu.component.scss'],
})
export class LanguagesPopupMenuComponent implements OnInit {
  constructor(public Language: LanguageService) {}

  ngOnInit() {}
}
