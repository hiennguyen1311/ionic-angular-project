import { Component, OnInit } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { HomePage } from '@modules/home/home.page';
import { ScanPage } from '@modules/scan/scan.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  homePage = HomePage;
  scanPage = ScanPage;
  constructor() {}

  ngOnInit() {}
}
