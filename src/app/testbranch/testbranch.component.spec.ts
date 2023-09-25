import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbranchComponent } from './testbranch.component';

describe('TestbranchComponent', () => {
  let component: TestbranchComponent;
  let fixture: ComponentFixture<TestbranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestbranchComponent]
    });
    fixture = TestBed.createComponent(TestbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
