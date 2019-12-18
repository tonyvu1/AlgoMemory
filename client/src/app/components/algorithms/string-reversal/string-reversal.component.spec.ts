import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringReversalComponent } from './string-reversal.component';

describe('Recursion1Component', () => {
  let component: StringReversalComponent;
  let fixture: ComponentFixture<StringReversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringReversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringReversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
