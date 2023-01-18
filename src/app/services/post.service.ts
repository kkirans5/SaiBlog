import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
   return this.http.get<Post[]>(this.apiURL);
  }
}
