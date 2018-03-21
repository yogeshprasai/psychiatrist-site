import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaufDeanComponent } from './rauf-dean.component';

describe('RaufDeanComponent', () => {
  let component: RaufDeanComponent;
  let fixture: ComponentFixture<RaufDeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaufDeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaufDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
