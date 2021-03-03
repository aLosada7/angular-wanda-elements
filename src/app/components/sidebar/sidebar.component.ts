import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mcs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() sections;

    constructor() { }

    ngOnInit(): void {
    }

}
