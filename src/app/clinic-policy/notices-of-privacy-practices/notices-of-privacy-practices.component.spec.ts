import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesOfPrivacyPracticesComponent } from './notices-of-privacy-practices.component';

describe('NoticesOfPrivacyPracticesComponent', () => {
  let component: NoticesOfPrivacyPracticesComponent;
  let fixture: ComponentFixture<NoticesOfPrivacyPracticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticesOfPrivacyPracticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticesOfPrivacyPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
