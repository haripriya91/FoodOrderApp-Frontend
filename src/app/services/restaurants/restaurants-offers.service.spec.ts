import { TestBed } from '@angular/core/testing';

import { RestaurantsOffersService } from './restaurants-offers.service';

describe('RestaurantsOffersService', () => {
  let service: RestaurantsOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
