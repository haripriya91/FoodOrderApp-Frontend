import { TestBed } from '@angular/core/testing';

import { RestaurantPaymentsService } from './restaurant-payments.service';

describe('RestaurantPaymentsService', () => {
  let service: RestaurantPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
