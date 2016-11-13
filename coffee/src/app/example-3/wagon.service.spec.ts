/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WagonService } from './wagon.service';

describe('Service: Wagon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WagonService]
    });
  });

  it('should ...', inject([WagonService], (service: WagonService) => {
    expect(service).toBeTruthy();
  }));
});
