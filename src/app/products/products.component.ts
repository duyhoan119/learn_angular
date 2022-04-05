import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: any;
  constructor(
    private route: Router,
    private Productsevice: ProductService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Productsevice.getproducts().subscribe(data => {
      this.data = data
    })
  }
  remove(id: number) {
    if (confirm("bạn muốn xóa sản phẩm") == true) {
      this.Productsevice.deleteproduct(id).subscribe((data) => {
        this.ngOnInit()
      })
    }

  }
  // onSubmit(formValue: any) {
  //     if (this.isEdit) {
  //       let i = this.data.findIndex(x => x.id = formValue.id)
  //       this.data[i] = formValue

  //     } else {
  //       this.newProduct = formValue
  //       this.newProduct.id = this.data.length
  //       this.data.push(this.newProduct)

  //       console.log(this.newProduct, this.data);
  //     }

  //     this.isEdit = false
  //     this.newProduct = {
  //       id: 1,
  //       name: "",
  //       des: "",
  //       price: 0
  //     }
  //   }

  //   onValidate(obj : any){
  //     if (!obj.name || !obj.des || !(obj.price>0) ) {
  //       return false
  //     }
  //     return true
  //   }
}
