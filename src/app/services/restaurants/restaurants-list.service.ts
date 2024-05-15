import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { restaurants } from '../../models/restaurants';

const Base_URL = 'http://localhost:3000/restaurants';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsListService {

  private http = inject(HttpClient);
  constructor() { }

  getRestaurants(): Observable<restaurants[]>{
    return this.http.get<restaurants[]>(Base_URL);
  }
}
