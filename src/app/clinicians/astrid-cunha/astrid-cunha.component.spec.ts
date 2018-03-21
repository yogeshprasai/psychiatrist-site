import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstridCunhaComponent } from './astrid-cunha.component';

describe('AstridCunhaComponent', () => {
  let component: AstridCunhaComponent;
  let fixture: ComponentFixture<AstridCunhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstridCunhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstridCunhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
