import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        NotificationComponent
    ],
    imports: [
        CommonModule,
        NgbAlertModule
    ],
    exports: [
        NotificationComponent
    ],
    providers: [
        NotificationService
    ]
})
export class NotificationModule { }
