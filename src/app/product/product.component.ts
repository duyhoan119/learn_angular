import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {
      'id': 1,
      'name': 'Iphone',
      'description': 'Description iphone',
      'price': 1200000
    }
  ]
  fillterProduct = this.products;
  newproduct = {
    'id': 0,
    'name': '',
    'description': '',
    'price': 0
  }

  onSubmit(data: any) {
    if (this.isedit) {
      for (let i = 0; i < this.fillterProduct.length; i++) {
        if (this.fillterProduct[i].id === this.newproduct.id) {
          this.fillterProduct[i] = this.newproduct;
        }
      }
      this.newproduct = {
        'id': 0,
        'name': '',
        'description': '',
        'price': 0
      }
      this.isedit = false;
    } else {
      console.log(data);
      data.id = this.fillterProduct.length + 1;
      if (data.id != this.fillterProduct.filter(function (product) { })) {
        this.fillterProduct.push(data)
        this.newproduct = {
          'id': 0,
          'name': '',
          'description': '',
          'price': 0
        }
      }


    }

    console.log(this.products);

  }
  isedit = false;
  edit(obj: any) {
    this.newproduct = obj;
    console.log(this.newproduct);

    return this.isedit = true;
  }
  remove(productId: any) {
    this.fillterProduct = this.fillterProduct.filter(function (product) {
      return product.id !== productId
    });
  }
}
