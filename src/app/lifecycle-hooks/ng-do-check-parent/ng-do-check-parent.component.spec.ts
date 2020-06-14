import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDoCheckParentComponent } from './ng-do-check-parent.component';

describe('NgDoCheckParentComponent', () => {
  let component: NgDoCheckParentComponent;
  let fixture: ComponentFixture<NgDoCheckParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDoCheckParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDoCheckParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
