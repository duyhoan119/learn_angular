import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type PRODUCT_ITEM_TYPE = {
  id: number,
  name: string,
  des: string,
  price: number
} | undefined;

type PRODUCTS_TYPE = PRODUCT_ITEM_TYPE[];

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private id : any = null
  showProduct : PRODUCT_ITEM_TYPE

  constructor(public routes : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id']
    this.showProduct = this.data.find(x => x?.id == this.id)
  }

  data: PRODUCTS_TYPE = [
    {
      id: 0,
      name: "iPhone 12",
      des: "des 2",
      price: 1200
    },
    {
      id: 1,
      name: "iPhone 11",
      des: "des 1",
      price: 1200
    },
    {
      id: 2,
      name: "iPhone 13",
      des: "des 3",
      price: 1200
    },
  ]




}
