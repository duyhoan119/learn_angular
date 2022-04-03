import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : any;

  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    this.getListPosts()
  }

  getListPosts(){
    this.PostService.getPosts().subscribe((data)=>{
      this.posts = data
    })
  }

  remove(id : number){
    this.PostService.deletePost(id).subscribe((data)=>{
      this.getListPosts()
    })
  }

  parentChangeStatus(newStatus: number, student: any) {
    this.PostService.updatePost(
      student.id,
      {
        ...student,
        status: newStatus
      }).subscribe((data) => {
        this.getListPosts();
      })
  }
}
