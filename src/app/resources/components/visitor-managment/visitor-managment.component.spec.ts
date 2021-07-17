import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorManagmentComponent } from './visitor-managment.component';

describe('VisitorManagmentComponent', () => {
  let component: VisitorManagmentComponent;
  let fixture: ComponentFixture<VisitorManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
