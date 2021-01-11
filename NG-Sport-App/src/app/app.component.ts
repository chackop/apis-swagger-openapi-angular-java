import { Component } from '@angular/core';
import { ProductService } from './rest/api/product.service';
import { Product } from './rest/model/product';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hsports-api-client-app';
  products: Product[];

  constructor(private productService:ProductService){
    productService.productGet().subscribe(data => {
      this.products = data;
    });
  }

}


