import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcs-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

    showPassword: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

}
