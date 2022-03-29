import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../header/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  id: string | undefined;
  public student: any = [];

  constructor(
    private route: Router,
    private studentSevice: StudentService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.studentSevice.getStudent(this.id).subscribe(data => {
        this.student = data;
      });
      console.log(this.student);
    }else{
      this.student = [

      ]
    }


  }
  onsubmit(obj: { name: string, class: string }) {
    console.log(obj);

    this.studentSevice.updateStudent(this.id, obj).subscribe(data => {
      //chuyển hướng đường dẫn
      this.route.navigate(['/student']);
    })


  }

}
