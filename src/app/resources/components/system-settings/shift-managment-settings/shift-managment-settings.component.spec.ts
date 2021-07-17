import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftManagmentSettingsComponent } from './shift-managment-settings.component';

describe('ShiftManagmentSettingsComponent', () => {
  let component: ShiftManagmentSettingsComponent;
  let fixture: ComponentFixture<ShiftManagmentSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftManagmentSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftManagmentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
