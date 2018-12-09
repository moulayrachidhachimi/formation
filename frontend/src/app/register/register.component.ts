import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  firstname = ""
  lastname = ""
  email: string = ""
  password: string = ""
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }


   register() {
     this.authorService.register({ firstName: this.firstname, lastName: this.lastname, email: this.email, password: this.password }).subscribe(register => console.log(register))
   }

}
