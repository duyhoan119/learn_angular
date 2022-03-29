import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../header/services/student.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  id: any;
  student: object = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.studentService.getStudents().subscribe((data)=>{
      this.student = data;
    })
    console.log(this.student);
  }

}
