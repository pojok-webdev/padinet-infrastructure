import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table2ViewComponent } from './table2-view.component';

describe('Table2ViewComponent', () => {
  let component: Table2ViewComponent;
  let fixture: ComponentFixture<Table2ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table2ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
