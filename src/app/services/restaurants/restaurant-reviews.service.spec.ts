import { TestBed } from '@angular/core/testing';

import { RestaurantReviewsService } from './restaurant-reviews.service';

describe('RestaurantReviewsService', () => {
  let service: RestaurantReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
