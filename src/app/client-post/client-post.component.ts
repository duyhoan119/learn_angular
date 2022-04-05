import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-client-post',
  templateUrl: './client-post.component.html',
  styleUrls: ['./client-post.component.css']
})
export class ClientPostComponent implements OnInit {

  posts: any;
  constructor(
    private postsevice: PostService,
  ) { }

  ngOnInit(): void {
    this.postsevice.getPosts().subscribe(data => {
      this.posts = data
    })

  }
}
