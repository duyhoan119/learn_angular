import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { type } from 'os';
//định nghĩa kiểu dữ liệu
type PRODUCT_ITEM_TYPE = {
  id: number,
  name: string,
  description: string,
  price: number
} | undefined;
type PRODUCT_TYPE = PRODUCT_ITEM_TYPE[];
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  public id: any = null;
  public fillterProduct: PRODUCT_ITEM_TYPE;
  constructor(routes: ActivatedRoute) {
    //lấy ra d trên URL

  }

  ngOnInit(): void {
    // this.id = this.routes.snapshot.paramMap.get('id');
    this.fillterProduct = this.products.find(product =>{console.log(this.fillterProduct);

     return product?.id == this.id} );
    console.log(this.id);
  }

  products: PRODUCT_TYPE = [
    {
      'id': 1,
      'name': 'Iphone',
      'description': 'Description iphone',
      'price': 1200000
    },
    {
      'id': 2,
      'name': 'Iphone',
      'description': 'Description iphone',
      'price': 1200000
    }
  ]
}
