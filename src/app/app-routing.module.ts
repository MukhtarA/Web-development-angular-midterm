import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { DirectivesComponent } from './components/directives/directives.component';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {AdminGuardGuard} from './admin-guard.guard';
import {ArticleComponent} from './components/article/article.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard]},
  {path: 'article', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
