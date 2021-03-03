import { DropdownButtonComponent } from './components/dropdown-button/dropdown-button.component';
import { LargeNotificationComponent } from './components/large-notification/large-notification.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordInputComponent } from './components/password-input/password-input.component';
import { SmallNotificationComponent } from './components/small-notification/small-notification.component';

const routes: Routes = [
    { path: "", redirectTo: 'notifications/small-notification', pathMatch: 'full' },
    { path: "notifications/small-notification", component: SmallNotificationComponent },
    { path: "notifications/large-notification", component: LargeNotificationComponent },
    { path: "inputs/password-input", component: PasswordInputComponent },
    { path: "buttons/dropdown-button", component: DropdownButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
