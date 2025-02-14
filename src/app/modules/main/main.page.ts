import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  titles = {
    title: 'MAIN.TITLE',
    home: 'HOME.TITLE',
  };
  buttons = [
    { title: 'HOME.TITLE', page: '/home' },
    { title: 'MAIN.MENU', page: '/menu' },
    { title: 'MAIN.TABS', page: '/tabs' },
    { title: 'MAIN.UI', page: '/ui-component' },
    { title: 'LANGUAGES.TITLE', page: '/languages' },
    { title: 'MAIN.NATIVE', page: '/native-api' },
    { title: 'MAIN.API_MANAGEMENT', page: '/api-manager' },
    { title: 'MAIN.STORE_MANAGEMENT', page: '/store-manager' },
    { title: 'MAIN.GOOGLE_MAP', page: '/tabs' },
    { title: 'MAIN.NETWORK', page: '/network' },
    { title: 'MAIN.DEVICE_INFORMATION', page: '/device-information' },
    { title: 'MAIN.NOTIFICATION', page: '/notification' },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  goToPage(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    this.authService.logout();
  }
}
