import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  private id : any = null
  student : any

  constructor(public routes : ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params["id"]
    this.studentService.getStudent(this.id).subscribe(data=>{
      this.student = data
    })
  }

}
