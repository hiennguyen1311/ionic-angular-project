import { Component, OnInit } from '@angular/core';
import i18n from '@i18n/i18n';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.page.html',
  styleUrls: ['./home-content.page.scss'],
})
export class HomeContentPage implements OnInit {
  titles = {
    main: i18n.t('HOME.TITLE'),
    content: i18n.t('HOME.CONTENT'),
  };
  constructor(public navCtrl: NavController, private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(5, () => {});
  }

  ngOnInit(): void {}
}
