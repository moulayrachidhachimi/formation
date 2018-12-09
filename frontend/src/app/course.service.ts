import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  url = "http://localhost:3002/api/courses";

  constructor(private http: HttpClient) { }


  getCourses() {

  	  return this.http.get(this.url);
  }


  postService(data) {
    return this.http.post(this.url, data);
  }

  deleteCourse(id){
    return this.http.delete(this.url+`/${id}`);
  }

}
