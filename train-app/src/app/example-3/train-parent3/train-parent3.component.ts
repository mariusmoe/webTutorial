import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-parent3',
  templateUrl: './train-parent3.component.html',
  styleUrls: ['./train-parent3.component.css']
})
export class TrainParent3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  train: string[] = []

  availableWagons: string[] = ['passengerCart', 'cargoCart', 'foodCart', 'coffeeCart'];


  addCart(cartName: string){
    this.train.push(cartName);
  }


}
