import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get('http://localhost:3002/api/authors');
  }


  register(data) {
    return this.http.post('http://localhost:3002/api/authors', data);
  }


  login(data) {
    return this.http.post('http://localhost:3002/api/authors/login', data);
  }
}
