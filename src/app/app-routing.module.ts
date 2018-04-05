import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { AuthComponent } from './auth/auth.component';
import { PostsComponent } from './blogs/posts/posts.component';
import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/blogs',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PostsComponent
      },
      {
        path: 'tags/:id',
        component: PostsComponent
      }
    ]
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
