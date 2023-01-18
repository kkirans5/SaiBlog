import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
// import { Posts } from '../../mock-post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts:any;

@Input() colClass: any;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((retrivedData) => this.posts = retrivedData);
  }

}
