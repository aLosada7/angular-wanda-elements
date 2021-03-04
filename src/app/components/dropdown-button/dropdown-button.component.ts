import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'mcs-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss']
})
export class DropdownButtonComponent implements OnInit {

    showDropdownItems: boolean = false;

    constructor(private sharedService: SharedService) { }

    ngOnInit(): void {
    }

    handleSelection(selection: string) {
        this.showDropdownItems = false;
        this.sharedService.emitChange({ success: true, text: `Your selection: ${this.sharedService.capitalizeFirstLetter(selection)}` });
    }

}
