import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilynamesComponent } from './familynames.component';

describe('TestbranchComponent', () => {
  let component: FamilynamesComponent;
  let fixture: ComponentFixture<FamilynamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilynamesComponent]
    });
    fixture = TestBed.createComponent(FamilynamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
