import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  id: any

  postForm: FormGroup
  post: any;
  constructor(
    private PostService: PostService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      status: new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    if (this.id)
      this.PostService.getPost(this.id).subscribe(data => {
        this.post = data
      })

  }

  onSubmit(obj: any) {
    if (this.id)
      this.PostService.updatePost(this.id, obj).subscribe(data => {
        this.router.navigate(['admin/posts'])
      })

    else
      this.PostService.createPost(obj).subscribe(data => {
        this.router.navigate(['admin/posts'])
      })
  }

}
