import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.scss'],
})
export class HomeTabComponent implements OnInit {
  titles = {
    home: i18n.t('HOME.TITLE'),
    scan: i18n.t('HOME.SCAN'),
    profile: i18n.t('HOME.PROFILE'),
    text: i18n.t('HOME.TEXT'),
  };
  constructor() {}

  ngOnInit() {}
}
