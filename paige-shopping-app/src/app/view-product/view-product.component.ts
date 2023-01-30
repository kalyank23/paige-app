import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingServiceService } from '../shopping-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateProductComponent } from '../update-product/update-product.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  sku_id: string;
  product_selected: any;
  constructor(private route: ActivatedRoute, private router: Router,
    public dialog: MatDialog,
    public shoppingService: ShoppingServiceService,
    @Inject(MAT_DIALOG_DATA) public data: { sku: any }
  ) {}

  ngOnInit() {
    console.log(this.shoppingService.products)
    console.log(this.data.sku);
    this.product_selected = this.shoppingService.products.filter((p: { [s: string]: string; }) => p['sku'] == this.data.sku)[0];
    console.log(this.product_selected);
  }

  updateProduct() {
    this.dialog.open(UpdateProductComponent, {
      width: '500px',
      data: { productForUpdate: this.product_selected}
    });
  }

  removeProduct() {
    this.shoppingService.deleteProduct(this.product_selected['id']).subscribe(
      (response) => { alert('Deleted successfully'); }
    );
    window.location.reload();
  }
}
