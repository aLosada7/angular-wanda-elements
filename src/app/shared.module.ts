import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SmallNotificationComponent } from './components/small-notification-page/small-notification/small-notification.component';

@NgModule({
  declarations: [
    SmallNotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmallNotificationComponent,
    CommonModule,
  ],
})
export class SharedModule { }
