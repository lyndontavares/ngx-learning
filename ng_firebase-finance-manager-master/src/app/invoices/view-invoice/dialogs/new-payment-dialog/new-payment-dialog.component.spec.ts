import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaymentDialogComponent } from './new-payment-dialog.component';

describe('NewPaymentDialogComponent', () => {
  let component: NewPaymentDialogComponent;
  let fixture: ComponentFixture<NewPaymentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPaymentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
