import { Component, OnInit } from '@angular/core';
import { StudentService } from '../header/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any;
  classname: any;
  id: any;
  constructor(private studentSevice: StudentService) { }

  ngOnInit(): void {
    this.studentSevice.getStudents().subscribe((data)=>{
      this.students = data
      console.log(this.students);

    })

  }


  edit(obj: object){

  }

  ondelete(id : number){

  }

}
