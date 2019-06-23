import { NgModule } from '@angular/core';

import { NotificationModule } from './notification/notification.module';

@NgModule({
    imports: [
        NotificationModule
    ],
    exports: [
        NotificationModule
    ]
})

export class SharedModule { }