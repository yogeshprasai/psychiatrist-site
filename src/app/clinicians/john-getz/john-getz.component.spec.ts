import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnGetzComponent } from './john-getz.component';

describe('JohnGetzComponent', () => {
  let component: JohnGetzComponent;
  let fixture: ComponentFixture<JohnGetzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnGetzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnGetzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
