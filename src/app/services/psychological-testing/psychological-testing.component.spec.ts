import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologicalTestingComponent } from './psychological-testing.component';

describe('PsychologicalTestingComponent', () => {
  let component: PsychologicalTestingComponent;
  let fixture: ComponentFixture<PsychologicalTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologicalTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologicalTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
