import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMittingMinutesComponent } from './ad-mitting-minutes.component';

describe('AdMittingMinutesComponent', () => {
  let component: AdMittingMinutesComponent;
  let fixture: ComponentFixture<AdMittingMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMittingMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMittingMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
