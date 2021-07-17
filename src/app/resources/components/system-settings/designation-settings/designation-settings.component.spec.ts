import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationSettingsComponent } from './designation-settings.component';

describe('DesignationSettingsComponent', () => {
  let component: DesignationSettingsComponent;
  let fixture: ComponentFixture<DesignationSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
