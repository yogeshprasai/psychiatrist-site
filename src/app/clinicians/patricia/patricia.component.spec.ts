import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatriciaComponent } from './patricia.component';

describe('PatriciaComponent', () => {
  let component: PatriciaComponent;
  let fixture: ComponentFixture<PatriciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatriciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatriciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
