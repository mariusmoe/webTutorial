/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrainChildWagon2Component } from './train-child-wagon2.component';

describe('TrainChildWagon2Component', () => {
  let component: TrainChildWagon2Component;
  let fixture: ComponentFixture<TrainChildWagon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainChildWagon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainChildWagon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
