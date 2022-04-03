import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  student: any
  id: any

  constructor(
    private studentService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    console.log(this.id);

    if (this.id)
      this.studentService.getproduct(this.id).subscribe(data => {
        this.student = data
      })
    else
      this.student = {
        name: '',
        class: ''
      }
  }

  onSubmit(obj: any) {
    if (this.id)
      this.studentService.updateproduct(this.id, obj).subscribe(data => {
        this.router.navigate(['admin/products'])
      })
    else
      this.studentService.createproduct(obj).subscribe(data => {
        this.router.navigate(['admin/products'])
      })
  }


}
