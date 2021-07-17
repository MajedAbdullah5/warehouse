import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmMittingMinutesComponent } from './em-mitting-minutes.component';

describe('EmMittingMinutesComponent', () => {
  let component: EmMittingMinutesComponent;
  let fixture: ComponentFixture<EmMittingMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmMittingMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmMittingMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
