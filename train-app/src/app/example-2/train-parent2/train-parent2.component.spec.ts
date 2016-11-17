/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrainParent2Component } from './train-parent2.component';

describe('TrainParent2Component', () => {
  let component: TrainParent2Component;
  let fixture: ComponentFixture<TrainParent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainParent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainParent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
