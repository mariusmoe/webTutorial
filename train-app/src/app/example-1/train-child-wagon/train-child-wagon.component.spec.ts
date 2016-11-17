/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrainChildWagonComponent } from './train-child-wagon.component';

describe('TrainChildWagonComponent', () => {
  let component: TrainChildWagonComponent;
  let fixture: ComponentFixture<TrainChildWagonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainChildWagonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainChildWagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
