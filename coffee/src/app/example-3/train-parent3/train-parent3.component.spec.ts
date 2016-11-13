/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrainParent3Component } from './train-parent3.component';

describe('TrainParent3Component', () => {
  let component: TrainParent3Component;
  let fixture: ComponentFixture<TrainParent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainParent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainParent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
