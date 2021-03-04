import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'mcs-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

    showPassword: boolean = false;

    constructor(private sharedService: SharedService) { }

    ngOnInit(): void {
    }

    handleSubmit() {
        this.sharedService.emitChange({ success: true, text: 'Input clicked' });
    }

}
