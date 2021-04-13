import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPriceRangeSelectorComponent } from './fixed-price-range-selector.component';

describe('FixedPriceRangeSelectorComponent', () => {
  let component: FixedPriceRangeSelectorComponent;
  let fixture: ComponentFixture<FixedPriceRangeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedPriceRangeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedPriceRangeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
