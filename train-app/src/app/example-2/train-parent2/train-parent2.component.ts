import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-parent2',
  templateUrl: './train-parent2.component.html',
  styleUrls: ['./train-parent2.component.css']
})
export class TrainParent2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  train: string[] = []

  availableWagons: string[] = ['passengerCart', 'cargoCart', 'foodCart', 'coffeeCart'];


  addCart(cartName: string){
    this.train.push(cartName);
  }

}
