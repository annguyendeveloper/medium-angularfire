import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  blogs$: Observable<Post[]>;

  title: string;
  content: string;
  tags: string[];

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {
  }

  ngOnInit() {
    this.blogs$ = this.blogsService.getSnapshot();
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id')) {
        alert(params.get('id'));
      }
    });

    // this.blogs$ = this.route.paramMap.switchMap((params: ParamMap) =>
    //   this.blogsService.getSnapshot(params.get('id'))
    // );


    // this.blogs$ = this.blogsService.getPosts();
  }

  createPost() {
    let tags = this.tags || [];

    this.blogsService.createPost(this.title, this.content, tags);
    this.title = '';
    this.content = '';
    this.tags = [];
  }

  deletePost(id: string) {
    this.blogsService.deletePost(id);
  }
}
