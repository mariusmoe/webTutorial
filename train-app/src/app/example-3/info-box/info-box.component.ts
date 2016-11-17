import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { WagonService } from '../wagon.service';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }
}
