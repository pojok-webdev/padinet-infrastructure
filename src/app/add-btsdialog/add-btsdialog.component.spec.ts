import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBTSDialogComponent } from './add-btsdialog.component';

describe('AddBTSDialogComponent', () => {
  let component: AddBTSDialogComponent;
  let fixture: ComponentFixture<AddBTSDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBTSDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBTSDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
