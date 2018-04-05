import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreAppModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AuthComponent } from './auth/auth.component';
import { PostsComponent } from './blogs/posts/posts.component';
import { TagsComponent } from './blogs/tags/tags.component';
import { BlogsService } from './blogs/blogs.service';


@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    AuthComponent,
    PostsComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,

    // core & shared
    CoreAppModule,
    SharedModule,

    AppRoutingModule
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
