import { LogoutComponent } from './logout/logout.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardServiceService } from './service/route-guard-service.service';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home/:name', component: HomeComponent, canActivate: [RouteGuardServiceService]},
  {path: 'todo', component: ListToDosComponent, canActivate: [RouteGuardServiceService]},
  {path: 'todo/:id', component: TodoComponent , canActivate: [RouteGuardServiceService]},
  {path: 'logout', component: LogoutComponent , canActivate: [RouteGuardServiceService]},

  
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
