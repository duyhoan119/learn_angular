import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-client-product-detail',
  templateUrl: './client-product-detail.component.html',
  styleUrls: ['./client-product-detail.component.css']
})
export class ClientProductDetailComponent implements OnInit {
  product: any;
  id: number | undefined;
  constructor(
    private route: Router,
    private Productsevice: ProductService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id']
    this.Productsevice.getproduct(this.id).subscribe(data => {
      this.product = data
    })
  }

}
