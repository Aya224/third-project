import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  product: any;

  products = [
    { id: 1, name: 'Product 1', price: 10, stock: 0, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, stock: 5, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 15, stock: 2, image: 'product3.jpg' },
  
  ];

  constructor(@Inject(ACTIVATED_ROUTE_TOKEN) private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('id');
      this.product = this.products.find(p => p.id === this.productId);
    });
  }
}
