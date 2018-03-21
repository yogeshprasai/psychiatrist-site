import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaminaRajaComponent } from './samina-raja.component';

describe('SaminaRajaComponent', () => {
  let component: SaminaRajaComponent;
  let fixture: ComponentFixture<SaminaRajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaminaRajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaminaRajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
