import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './client-product.component.html',
  styleUrls: ['./client-product.component.css']
})
export class ClientProductComponent implements OnInit {
 products: any;
  constructor(
    private route: Router,
    private Productsevice: ProductService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Productsevice.getproducts().subscribe(data => {
      this.products = data
    })
  }

}
