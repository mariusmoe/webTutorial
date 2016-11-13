/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrainChildWagon3Component } from './train-child-wagon3.component';

describe('TrainChildWagon3Component', () => {
  let component: TrainChildWagon3Component;
  let fixture: ComponentFixture<TrainChildWagon3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainChildWagon3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainChildWagon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
