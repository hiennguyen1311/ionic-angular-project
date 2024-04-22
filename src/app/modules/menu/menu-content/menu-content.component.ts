import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import i18n from '@i18n/i18n';
import { NavController } from '@ionic/angular';
import { ApplicationState } from '@models/store.interface';
import { Store } from '@ngrx/store';
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
      title: 'Home',
    },
    { name: 'home/profile', title: 'Profile' },
  ];
  titles = {
    logout: i18n.t('HOME.LOGOUT'),
  };
  constructor(
    private router: Router,
    private store: Store<ApplicationState>,
    public navCtrl: NavController
  ) {
    this.currentRoute = this.router.url || '';
  }

  ngOnInit() {}

  clickOnRoute(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    this.store.dispatch(LogoutAction());
    this.navCtrl.navigateRoot('/login');
  }
}
