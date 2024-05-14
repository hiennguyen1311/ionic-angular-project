import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  constructor(public notification: NotificationService) {}

  ngOnInit() {
    this.notification.init();
  }
}
