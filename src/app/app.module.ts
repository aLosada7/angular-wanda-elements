import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SmallNotificationComponent } from './components/small-notification/small-notification.component';
import { NavComponent } from './components/nav/nav.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { LargeNotificationComponent } from './components/large-notification/large-notification.component';
import { DropdownButtonComponent } from './components/dropdown-button/dropdown-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    SmallNotificationComponent,
    NavComponent,
    PasswordInputComponent,
    LargeNotificationComponent,
    DropdownButtonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
