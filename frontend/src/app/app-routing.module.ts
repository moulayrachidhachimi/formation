import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursesComponent } from './list-courses/list-courses.component'
import { AddCoursesComponent } from './add-courses/add-courses.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
	{ path: "" , component: ListCoursesComponent },
	{ path: "add" , component: AddCoursesComponent },
	{ path: "login" , component: LoginComponent },
	{ path: "register" , component: RegisterComponent },
	{ path: "**" , component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
