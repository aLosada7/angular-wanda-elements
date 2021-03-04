import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mcs-small-notification',
  templateUrl: './small-notification.component.html',
  styleUrls: ['./small-notification.component.scss']
})
export class SmallNotificationComponent implements OnInit {

    @Input() success: boolean;
    @Input() text: string;

    @Output() onDismiss;

    constructor() {
        this.onDismiss = new EventEmitter();
    }

    ngOnInit(): void {
    }

    dismiss() {
        this.onDismiss.emit();
    }

}
