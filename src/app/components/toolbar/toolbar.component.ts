import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mcs-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    @Input() sections;

    showNavbar: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    toggleNavbar() {
        this.showNavbar = !this.showNavbar;
    }

}
