import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcs-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss']
})
export class DropdownButtonComponent implements OnInit {

    showDropdownItems: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

}
