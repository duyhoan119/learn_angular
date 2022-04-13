import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  student: any
  id: any
  avatarBase64: any;

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
        console.log(this.student);
      })
    else
      this.student = {
        name: '',
        description: '',
        price: ''
      }
  }

  onSubmit(obj: any) {
    const submitData = {
      ...obj,
      image: this.avatarBase64
    };
    console.log(submitData);
    if (this.id)
      this.studentService.updateproduct(this.id, submitData).subscribe(data => {

        this.router.navigate(['admin/phones'])
      })
    else
      this.studentService.createproduct(submitData).subscribe(data => {
        this.router.navigate(['admin/phones'])
      })
  }

  resultString(e: any) {
    if (e && e.target && typeof e.target.result == 'string') {
      return e.target.result;
    }

    return '';
  }
  changeAvatar(event: any) {
    const arrayImageTypes = ['image/png','image/jpg','image/jfif'];
    const file = event.target.files[0];
    if (file.size > 5000000) {
      return alert('Kích thước file quá lớn');
    } else if (arrayImageTypes.includes(file.type)) {
      return alert('Kiểu dữ liệu không phù hợp');
    }

    console.log(file.size, file.type);
    // 1. Định nghĩa 1 thể hiện của FileReader để đọc file
    const reader = new FileReader();
    // 2. Định nghĩa phương thức đọc file
    reader.onload = (e) => {
      this.avatarBase64 = e.target?.result;
      const image = new Image();
      image.src = this.resultString(e);

      console.log(image.width, image.height);
    }
    // 3. Đây là lúc bắt đầu đọc file để chạy phần 2.
    reader.readAsDataURL(file);
  }


}
