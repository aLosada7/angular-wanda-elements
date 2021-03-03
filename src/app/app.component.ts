import { Component } from '@angular/core';

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
export class AppComponent {
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
        }
    ]
}
