import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPolicyComponent } from './financial-policy.component';

describe('FinancialPolicyComponent', () => {
  let component: FinancialPolicyComponent;
  let fixture: ComponentFixture<FinancialPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
