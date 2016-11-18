import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-train-child-wagon',
  templateUrl: './train-child-wagon.component.html',
  styleUrls: ['./train-child-wagon.component.css']
})
export class TrainChildWagonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // This number will be passed down from the TrainParentComponent
  @Input() passengerCount: number;



}
