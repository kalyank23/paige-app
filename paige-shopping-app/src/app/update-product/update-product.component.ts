import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingServiceService } from '../shopping-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  productForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    public shoppingService: ShoppingServiceService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { productForUpdate: any }
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      "name": [this.data.productForUpdate['name']],
      "type": [this.data.productForUpdate['type']],
      "price": [this.data.productForUpdate['price']],
      "color": [this.data.productForUpdate['color']],
      "description": [this.data.productForUpdate['description']]
    });
  }

  save() {
    console.log(this.data.productForUpdate);
    console.log(this.productForm.value);
    for(let key in this.productForm.value) {
      this.data.productForUpdate[key] = this.productForm.value[key];
    }
    console.log(this.data.productForUpdate);
    this.shoppingService.updateProduct(this.data.productForUpdate['id'], this.data.productForUpdate).subscribe(
      (response) => { alert('Saved successfully'); }
    );
    window.location.reload();
  }
}
