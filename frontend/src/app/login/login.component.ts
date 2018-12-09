import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string = ""
  password: string = ""
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  
  login() {
    alert(1)
    this.authorService.login({ email: this.email, password: this.password })
        .subscribe(login => console.log(login), error => console.log(error))
  }


}
