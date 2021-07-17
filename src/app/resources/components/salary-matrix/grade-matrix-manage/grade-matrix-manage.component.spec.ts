import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeMatrixManageComponent } from './grade-matrix-manage.component';

describe('GradeMatrixManageComponent', () => {
  let component: GradeMatrixManageComponent;
  let fixture: ComponentFixture<GradeMatrixManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeMatrixManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeMatrixManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
