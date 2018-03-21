import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmilyOzgulComponent } from './emily-ozgul.component';

describe('EmilyOzgulComponent', () => {
  let component: EmilyOzgulComponent;
  let fixture: ComponentFixture<EmilyOzgulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmilyOzgulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmilyOzgulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
