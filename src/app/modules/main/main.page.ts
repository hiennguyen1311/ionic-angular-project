import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import i18n from '@i18n/i18n';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  titles = {
    title: i18n.t('MAIN.TITLE'),
    home: i18n.t('HOME.TITLE'),
  };
  buttons = [
    { title: i18n.t('HOME.TITLE'), page: '/home' },
    { title: i18n.t('MAIN.MENU'), page: '/menu' },
    { title: i18n.t('MAIN.TABS'), page: '/tabs' },
    { title: i18n.t('LANGUAGES.TITLE'), page: '/languages' },
    { title: i18n.t('MAIN.NATIVE'), page: '/tabs' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPage(route: string) {
    this.router.navigate([route]);
  }
}
