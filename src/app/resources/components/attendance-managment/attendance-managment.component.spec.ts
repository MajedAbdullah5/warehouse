import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceManagmentComponent } from './attendance-managment.component';

describe('AttendanceManagmentComponent', () => {
  let component: AttendanceManagmentComponent;
  let fixture: ComponentFixture<AttendanceManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
