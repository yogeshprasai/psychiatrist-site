import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadanUpretyComponent } from './madan-uprety.component';

describe('MadanUpretyComponent', () => {
  let component: MadanUpretyComponent;
  let fixture: ComponentFixture<MadanUpretyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadanUpretyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadanUpretyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
