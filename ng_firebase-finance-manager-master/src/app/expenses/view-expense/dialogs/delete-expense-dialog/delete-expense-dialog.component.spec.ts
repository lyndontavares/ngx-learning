import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExpenseDialogComponent } from './delete-expense-dialog.component';

describe('DeleteExpenseDialogComponent', () => {
  let component: DeleteExpenseDialogComponent;
  let fixture: ComponentFixture<DeleteExpenseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExpenseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExpenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
