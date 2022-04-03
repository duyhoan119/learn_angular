import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students : any;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getListStudents()
  }

  getListStudents(){
    this.studentService.getStudents().subscribe((data)=>{
      this.students = data
    })
  }

  remove(id : number){
    this.studentService.deleteStudent(id).subscribe((data)=>{
      this.getListStudents()
    })
  }

  parentChangeStatus(newStatus: number, obj: any){
    this.studentService.changeStatusStudent(status, {
      ...obj,
      status: newStatus
    }).subscribe((data)=>{
      this.getListStudents()
    })
  }

}
