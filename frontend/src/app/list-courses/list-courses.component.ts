import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service'

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  courses = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  	this.listCourses();
  }


  listCourses() {
  	this.courseService.getCourses().subscribe((courses: any[]) => this.courses = courses)
  }

  removeCourse(id, index){
    this.courseService.deleteCourse(id).subscribe((course) => this.courses.splice(index, 1));
  }

}
