import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { WagonService } from '../wagon.service';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
   subscription: Subscription;
   private burningCartList: string[]

  constructor(private wagonService: WagonService) {
    this.subscription = wagonService.cartOnFire$.subscribe( result => {
       this.burningCartList = result;
     });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
