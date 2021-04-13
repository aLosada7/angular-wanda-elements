import { Component, OnDestroy, OnInit } from '@angular/core';

import { IRange } from '../models/range.model';
import { Subscription } from 'rxjs';
import { Bullet } from '../models/bullet.model';

@Component({
  selector: 'mcs-price-range-selector',
  templateUrl: './price-range-selector.component.html',
  styleUrls: ['./price-range-selector.component.scss']
})
export class PriceRangeSelectorComponent implements OnInit, OnDestroy {

    rangeValues: IRange;
    defaultMinMaxRangeValues: IRange;

    loadDataSubscription: Subscription;

    constructor() {
        this.rangeValues = {
            min: 1,
            max: 150
        }
        this.defaultMinMaxRangeValues = this.rangeValues;
    }

    ngOnInit(): void {
    }

    onRangeChange(options) {
        if (options.bullet === Bullet.Left) {
            this.rangeValues = {
                ...this.rangeValues,
                min: options.move ? +this.rangeValues['min'] + (options.move > 0 ? 1 : (-1)) : +options.newValue
            }
        } else {
            this.rangeValues = {
                ...this.rangeValues,
                max: options.move ? +this.rangeValues['max'] + (options.move > 0 ? 1 : (-1)) : +options.newValue
            }
        }
    }

    ngOnDestroy() {
        if (this.loadDataSubscription) this.loadDataSubscription.unsubscribe();
    }

}
