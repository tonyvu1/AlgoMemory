import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Recursion1Component } from './recursion1.component';

describe('Recursion1Component', () => {
  let component: Recursion1Component;
  let fixture: ComponentFixture<Recursion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recursion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Recursion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
