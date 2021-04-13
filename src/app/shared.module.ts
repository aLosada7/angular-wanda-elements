import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HammerModule } from '@angular/platform-browser';

import { RangeComponent } from './components/range/range.component';
import { SmallNotificationComponent } from './components/small-notification-page/small-notification/small-notification.component';
@NgModule({
  declarations: [
    SmallNotificationComponent,
    RangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SmallNotificationComponent,
    RangeComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HammerModule
  ],
})
export class SharedModule { }
