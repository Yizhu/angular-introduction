import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterChildComponent } from './after-child.component';

describe('AfterChildComponent', () => {
  let component: AfterChildComponent;
  let fixture: ComponentFixture<AfterChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
