import { Component, OnInit, Input } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { WagonService } from '../wagon.service';

@Component({
  selector: 'app-train-child-wagon3',
  templateUrl: './train-child-wagon3.component.html',
  styleUrls: ['./train-child-wagon3.component.css']
})
export class TrainChildWagon3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
