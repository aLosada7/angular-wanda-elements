import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bullet } from '../models/bullet.model';
import { IRange } from '../models/range.model';

@Component({
  selector: 'mcs-fixed-price-range-selector',
  templateUrl: './fixed-price-range-selector.component.html',
  styleUrls: ['./fixed-price-range-selector.component.scss']
})
export class FixedPriceRangeSelectorComponent implements OnInit, OnDestroy {

    rangeValues: IRange;
    values: number[];
    min: number;
    max: number;

    loadDataSubscription: Subscription;

    constructor() { }

    ngOnInit(): void {
        const mockFixedValues: number[]  = [
            1.99, 5.99, 10.99, 30.99, 50.99, 70.99
        ]

        this.values = mockFixedValues;

        this.min = mockFixedValues[0];
        this.max = mockFixedValues[mockFixedValues.length - 1];

        this.rangeValues = {
            min: this.min,
            max: this.max
        }
    }

    onRangeChange(event) {
        if (event.bullet === Bullet.Left) {
            this.rangeValues = {
                ...this.rangeValues,
                min: event.move ? this.values[this.values.indexOf(this.rangeValues.min) + (event.move > 0 ? 1 : (-1))] : this.rangeValues.min //as the list is sorted
            }
        } else {
            this.rangeValues = {
                ...this.rangeValues,
                max: event.move ? this.values[this.values.indexOf(this.rangeValues.max) + (event.move > 0 ? 1 : (-1))] : this.rangeValues.max
            }
        }
    }

    ngOnDestroy() {
        if (this.loadDataSubscription) this.loadDataSubscription.unsubscribe();
    }

}
