import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnInitDestroyComponent } from './ng-on-init-destroy.component';

describe('NgOnInitDestroyComponent', () => {
  let component: NgOnInitDestroyComponent;
  let fixture: ComponentFixture<NgOnInitDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOnInitDestroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnInitDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
