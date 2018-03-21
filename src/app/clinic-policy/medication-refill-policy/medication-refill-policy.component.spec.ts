import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationRefillPolicyComponent } from './medication-refill-policy.component';

describe('MedicationRefillPolicyComponent', () => {
  let component: MedicationRefillPolicyComponent;
  let fixture: ComponentFixture<MedicationRefillPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationRefillPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationRefillPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
