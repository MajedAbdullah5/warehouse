import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTypeSettingsComponent } from './employee-type-settings.component';

describe('EmployeeTypeSettingsComponent', () => {
  let component: EmployeeTypeSettingsComponent;
  let fixture: ComponentFixture<EmployeeTypeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTypeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTypeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
