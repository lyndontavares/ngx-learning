import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReferenceDialogComponent } from './edit-reference-dialog.component';

describe('EditReferenceDialogComponent', () => {
  let component: EditReferenceDialogComponent;
  let fixture: ComponentFixture<EditReferenceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReferenceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
