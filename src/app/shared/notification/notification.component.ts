import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from '../model/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {

  private notifications: Notification[] = [];
  public activeNotification: Notification = null;

  constructor(private service: NotificationService) { }

  ngOnInit() {
      this.service.getNotificationSubject().subscribe(this.handleNewNotification.bind(this));
  }

  handleNewNotification(notify: Notification) {
      this.notifications.push(notify);
      if (this.activeNotification == null) {
          this.showNotification(notify);
      }
  }

  showNotification(notify: Notification) {
      this.activeNotification = notify;
      if (notify.autoCloseTime != null && notify.autoCloseTime > 0) {
          setTimeout(() => { this.removeNotification(notify); }, notify.autoCloseTime);
      }
  }

  onCloseNotification(notify: Notification) {
      this.removeNotification(notify);
  }

  showNextNoficiation() {
      if (this.notifications.length > 0) {
          this.showNotification(this.notifications[0]);
      } else {
          this.activeNotification = null;
      }
  }

  removeNotification(notify: Notification) {
      const index = this.notifications.indexOf(notify);
      if (index > -1) {
          this.notifications.splice(index, 1);
      }
      this.showNextNoficiation();
  }

}
