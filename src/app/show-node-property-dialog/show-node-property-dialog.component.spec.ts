import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNodePropertyDialogComponent } from './show-node-property-dialog.component';

describe('ShowNodePropertyDialogComponent', () => {
  let component: ShowNodePropertyDialogComponent;
  let fixture: ComponentFixture<ShowNodePropertyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNodePropertyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNodePropertyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
