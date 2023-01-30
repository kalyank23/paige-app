import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { ShoppingServiceService } from '../shopping-service.service'
import { ViewProductComponent } from '../view-product/view-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products_with_types: { [s: string]: {[s: string]: any}[]; } = {};
  selectedProduct: {} = '';

  constructor(private shoppingService: ShoppingServiceService, private route: ActivatedRoute, private router: Router, 
    public dialog: MatDialog) {}
   
  ngOnInit() {
    this.shoppingService.getProducts().subscribe((response) => {
      this.shoppingService.products = response;
      this.shoppingService.products.map((p: { [s: string]: string; }) => this.products_with_types[p['type']]=[]);
      for (let product of this.shoppingService.products) {
        this.products_with_types[product.type].push(product);
      }
      console.log(this.products_with_types);
    })
  }

  selectProduct(sku: string) {
    console.log(this.selectedProduct);

    this.dialog.open(ViewProductComponent, {
      width: '500px',
      data: { sku: sku}
    });
  }
}
