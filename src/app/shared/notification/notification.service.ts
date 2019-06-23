import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Notification } from '../model/notification.model';

@Injectable()
export class NotificationService {

    private nextId = 0;
    private uiNotificationSubject = new Subject<Notification>();

    getNotificationSubject(): Observable<Notification> {
        return this.uiNotificationSubject.asObservable();
    }

    public showSuccessNotification(title: string, message: string = null, closable = true, autoCloseTime = 3000) {
        const notify = new Notification(this.nextId++, 'success', title, message, closable, autoCloseTime);
        this.uiNotificationSubject.next(notify);
    }

    public showInfoNotification(title: string, message: string = null, closable = true, autoCloseTime = 3000) {
        const notify = new Notification(this.nextId++, 'info', title, message, closable, autoCloseTime);
        this.uiNotificationSubject.next(notify);
    }
}