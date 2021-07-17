import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmNoticesBoardComponent } from './em-notices-board.component';

describe('EmNoticesBoardComponent', () => {
  let component: EmNoticesBoardComponent;
  let fixture: ComponentFixture<EmNoticesBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmNoticesBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmNoticesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
