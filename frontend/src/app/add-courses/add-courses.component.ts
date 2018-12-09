import { CourseService } from './../course.service';
import { TagService } from './../tag.service';
import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {
  
  authors = []
  tags = []
  course = {
    label: "",
    price: 0,
    author: null,
    tags: []
  }
  constructor(private courseService: CourseService, 
              private authorService: AuthorService, 
              private tagService: TagService,
              private router: Router) { }

  ngOnInit() {
    this.listAuthor()
    this.listTag()
  }


  listAuthor() {
    this.authorService.getAuthors().subscribe((authors: any[]) => this.authors = authors)
  }

  listTag() {
    this.tagService.getTags().subscribe((tags: any[]) => this.tags = tags)
  }

  persistPost() {
    this.courseService.postService(this.course).subscribe((course: any) => this.router.navigate(['/']))
  }

}
