import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdNoticesManagmentComponent } from './ad-notices-managment.component';

describe('AdNoticesManagmentComponent', () => {
  let component: AdNoticesManagmentComponent;
  let fixture: ComponentFixture<AdNoticesManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdNoticesManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdNoticesManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
