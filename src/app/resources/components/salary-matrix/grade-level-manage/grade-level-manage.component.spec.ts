import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLevelManageComponent } from './grade-level-manage.component';

describe('GradeLevelManageComponent', () => {
  let component: GradeLevelManageComponent;
  let fixture: ComponentFixture<GradeLevelManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeLevelManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeLevelManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
