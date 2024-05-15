import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, catchError, throwError } from 'rxjs';
import { Food } from '../../models/food';



const Base_URL = 'http://localhost:3000/foodList';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private http = inject(HttpClient);

  constructor() { }

  getFoodList(): Observable<Food[]> {
    return this.http.get<Food[]>(Base_URL).pipe(
      catchError((err : HttpErrorResponse) => {
        return this.handleError(err);
      })
    );
  }
  

  private handleError(error: HttpErrorResponse): Observable<any>{
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError('something went wrong');
  }
}
