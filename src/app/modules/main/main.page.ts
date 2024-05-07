import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    { title: 'LANGUAGES.TITLE', page: '/languages' },
    { title: 'MAIN.NATIVE', page: '/tabs' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToPage(route: string) {
    this.router.navigate([route]);
  }
}
