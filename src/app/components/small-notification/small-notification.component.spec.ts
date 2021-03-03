import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNotificationComponent } from './small-notification.component';

describe('SmallNotificationComponent', () => {
  let component: SmallNotificationComponent;
  let fixture: ComponentFixture<SmallNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
