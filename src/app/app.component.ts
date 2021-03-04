import { SharedService } from './shared.service';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { SmallNotificationComponent } from './components/small-notification-page/small-notification/small-notification.component';
export interface Section {
    name: string,
    subsections: Subsection[]
}

export interface Subsection {
    id: string
    name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

    @ViewChild('notification') notification: SmallNotificationComponent;

    notification$: Observable<any>;
    notificationDuration: number = 3000;

    title = 'micro-interations';
    sections: Section[] = [
        {
            name: "Inputs",
            subsections: [
                { id: "password-input", name: "Password input" }
            ]
        },
        {
            name: "Notifications",
            subsections: [
                { id: "small-notification", name: "Small Notification" },
                { id: "large-notification", name: "Large Notification" }
            ]
        },
        {
            name: "Buttons",
            subsections: [
                { id: "dropdown-button", name: "Dropdown Button" }
            ]
        },
        {
            name: "Selectors",
            subsections: [
                { id: "plan-selector", name: "Price Plan Selector" }
            ]
        }
    ];
    showNotification: boolean = false;
    success: boolean = false;
    text: string;

    notificationSubscription: Subscription = undefined;

    constructor(private sharedService: SharedService) { }

    ngOnInit() {
        this.notificationSubscription = this.sharedService.changeEmitted$.pipe(
            tap((notification) => {
                this.success = notification.success;
                this.text = notification.text;
                this.showNotification = true;
            }),
            switchMap(_ => interval(3000)),
            tap(() => {
                this.showNotification = false;
            }),
        ).subscribe(() => {});
    }

    ngOnDestroy() {
        if (this.notificationSubscription) this.notificationSubscription.unsubscribe();
    }

    onDismiss() {
        this.showNotification = false;
    }

}
