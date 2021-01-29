import { Component, OnInit } from '@angular/core';

import { NotificationsService } from '@app/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit {

  notifications: Array<any>;
  selectedNotification: any;

  constructor(public notifService: NotificationsService) {
    this.notifications = this.notifService.notifications;
    // this.selectedNotification = this.notifService.selectedNotification;
  }

  ngOnInit() {
    console.log('NotificationsService.selectedNotification:', this.notifService.selectedNotification);
  }

}
