import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNoticeComponent } from './side-notice.component';

describe('SideNoticeComponent', () => {
  let component: SideNoticeComponent;
  let fixture: ComponentFixture<SideNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
