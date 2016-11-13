import { Component, OnInit } from '@angular/core';
import { TrainChildWagonComponent } from '../train-child-wagon/train-child-wagon.component';

@Component({
  selector: 'app-train-parent',
  templateUrl: './train-parent.component.html',
  styleUrls: ['./train-parent.component.css']
})
export class TrainParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  wagons:[number] = [20, 40, 50];

  passangerCount:number = 20;

}
