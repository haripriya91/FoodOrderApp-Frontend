import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { tag } from '../../models/tag';


const Base_URL = 'http://localhost:3000/tags';
@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private http = inject(HttpClient);
  constructor() { }


  getTags():Observable<tag[]>{
    return this.http.get<tag[]>(Base_URL);
  }

}
