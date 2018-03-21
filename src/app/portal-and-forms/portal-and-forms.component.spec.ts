import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAndFormsComponent } from './portal-and-forms.component';

describe('PortalAndFormsComponent', () => {
  let component: PortalAndFormsComponent;
  let fixture: ComponentFixture<PortalAndFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalAndFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalAndFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
