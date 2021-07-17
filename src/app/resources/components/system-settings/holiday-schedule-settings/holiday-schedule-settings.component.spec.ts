import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayScheduleSettingsComponent } from './holiday-schedule-settings.component';

describe('HolidayScheduleSettingsComponent', () => {
  let component: HolidayScheduleSettingsComponent;
  let fixture: ComponentFixture<HolidayScheduleSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayScheduleSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayScheduleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
