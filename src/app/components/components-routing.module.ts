import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';
import { LargeNotificationComponent } from './large-notification/large-notification.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordInputComponent } from './password-input/password-input.component';
import { SmallNotificationPageComponent } from './small-notification-page/small-notification-page.component';

const routes: Routes = [
    { path: "", redirectTo: 'inputs/password-input', pathMatch: 'full' },
    { path: "inputs/password-input", component: PasswordInputComponent },

    { path: "notifications/small-notification", component: SmallNotificationPageComponent },
    { path: "notifications/large-notification", component: LargeNotificationComponent },

    { path: "buttons/dropdown-button", component: DropdownButtonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
