import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRequisitionManagmentComponent } from './ad-requisition-managment.component';

describe('AdRequisitionManagmentComponent', () => {
  let component: AdRequisitionManagmentComponent;
  let fixture: ComponentFixture<AdRequisitionManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRequisitionManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRequisitionManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
