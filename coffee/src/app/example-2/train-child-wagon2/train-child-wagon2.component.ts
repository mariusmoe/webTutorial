import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-train-child-wagon2',
  templateUrl: './train-child-wagon2.component.html',
  styleUrls: ['./train-child-wagon2.component.css']
})
export class TrainChildWagon2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Name the wagon by getting the name from parent
  @Input() name: string;

  // Send the name of the added wagon
  @Output() addCart = new EventEmitter<string>();;


  addThisCart(cartName: string) {
    this.addCart.emit(cartName);
  }

}
