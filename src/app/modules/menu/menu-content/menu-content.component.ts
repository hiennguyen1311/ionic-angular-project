import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import i18n from '@i18n/i18n';
import { NavController } from '@ionic/angular';
import { ApplicationState } from '@models/store.interface';
import { Store } from '@ngrx/store';
import { Dialog } from '@plugins/Dialog/Dialog';
import { LogoutAction } from '@store/login/login.actions';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss'],
})
export class MenuContentComponent implements OnInit {
  @Input() side: 'start' | 'end' = 'start';
  currentRoute = '';
  routes = [
    {
      name: '/home/home-content',
      title: i18n.t('HOME.TITLE'),
      icon: 'home',
    },
    {
      name: '/home/scan',
      title: i18n.t('HOME.SCAN'),
      icon: 'scan',
    },
    {
      name: '/home/text-recognition',
      title: i18n.t('HOME.TEXT'),
      icon: 'text',
    },
    {
      name: '/home/profile',
      title: i18n.t('HOME.PROFILE'),
      icon: 'person-circle',
    },
  ];
  titles = {
    logout: i18n.t('HOME.LOGOUT'),
    logout_confirm: i18n.t('PROFILE.LOGOUT_CONFIRM'),
    cancel: i18n.t('GLOBAL.CANCEL'),
  };
  constructor(
    private router: Router,
    private store: Store<ApplicationState>,
    public navCtrl: NavController
  ) {
    this.currentRoute = this.router.url;
    this.router.events.subscribe((val: any) => {
      if (val?.urlAfterRedirects) {
        this.currentRoute = val?.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {}

  clickOnRoute(route: string) {
    this.router.navigate([route]);
  }

  async logout() {
    const { value } = await Dialog.confirm({
      title: this.titles.logout,
      message: this.titles.logout_confirm,
      okButtonTitle: this.titles.logout,
      cancelButtonTitle: this.titles.cancel,
    });
    if (value) {
      this.store.dispatch(LogoutAction());
      this.navCtrl.navigateRoot('/login');
    }
  }
}
