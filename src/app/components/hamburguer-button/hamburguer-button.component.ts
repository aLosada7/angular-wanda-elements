import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcs-hamburguer-button',
  templateUrl: './hamburguer-button.component.html',
  styleUrls: ['./hamburguer-button.component.scss']
})
export class HamburguerButtonComponent implements OnInit {

    menuOpen: boolean = false

    constructor() { }

    ngOnInit(): void {
    }

}
