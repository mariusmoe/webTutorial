import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class WagonService {

  cartOnFireSource = new Subject<string[]>();

  // The suffixed dollar sign is a soft convention to indicate that the
  // variable is a stream
  cartOnFire$ = this.cartOnFireSource.asObservable();

  burningCartList: string[] = []

  constructor() { }

  announceBurningCart(cartName:string){
    console.log("aaa")
    console.log(cartName);
    this.burningCartList.push(cartName);
    this.cartOnFireSource.next(this.burningCartList);
  }
}
