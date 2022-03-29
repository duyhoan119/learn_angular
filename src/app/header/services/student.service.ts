import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { expand } from 'rxjs';

const apiUrl = 'http://localhost:3000/Students'
@Injectable({

  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getStudents(){
    return this.http.get(`${apiUrl}?expand=Class`);
  }
  getStudent(id:string|undefined){
    return this.http.get(`${apiUrl}/${id}`);

  }
  createStudent(data:any){
    return this.http.post(apiUrl,data);
  }
  updateStudent(id:string|undefined, data:any){
    return this.http.put(`${apiUrl}/${id}`,data);
  }
  delete(id:string|number){
    return this.http.delete(`${apiUrl}/${id}`);
  }

}
