import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'mcs-plan-selector',
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.scss']
})
export class PlanSelectorComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  handleSelection(selection: string) {
    this.sharedService.emitChange({ success: true, text: `Plan selected: ${this.sharedService.capitalizeFirstLetter(selection)}` });
}

}
