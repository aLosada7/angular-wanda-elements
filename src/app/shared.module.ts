import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SmallNotificationComponent } from './components/small-notification-page/small-notification/small-notification.component';
@NgModule({
  declarations: [
    SmallNotificationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SmallNotificationComponent,
    CommonModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
