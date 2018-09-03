import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeInfoComponent } from './edge-info.component';

describe('EdgeInfoComponent', () => {
  let component: EdgeInfoComponent;
  let fixture: ComponentFixture<EdgeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdgeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
