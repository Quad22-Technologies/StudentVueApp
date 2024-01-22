import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';
import {Component } from '@angular/core';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleComponent]
      
    });
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    component.familynames = [
      { id: 1, firstname: 'John', lastname: 'Doe' },
      { id: 2,firstname: 'Mohamed', lastname:'Keita'},
      { id: 3,firstname: 'Benjamin', lastname:'Carter'}
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});