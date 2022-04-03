import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://localhost:3000/posts"

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(apiUrl)
  }

  getPost(id : number|undefined){
    return this.http.get(`${apiUrl}/${id}`)
  }

  deletePost(id : number){
    return this.http.delete(`${apiUrl}/${id}`)
  }

  createPost(obj: any){
    return this.http.post(apiUrl, obj)
  }

  updatePost(id: number, obj: any){
    return this.http.put(`${apiUrl}/${id}`, obj)
  }


}

