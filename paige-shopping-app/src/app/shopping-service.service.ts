import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {
  products: any;
  sort_order = ['name', 'type', 'price', 'color', 'description'];
  constructor(private httpClient: HttpClient) { 
  }

  headers() {
    return {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };

  }

  getProducts() {
    return this.httpClient.get("http://localhost:8000/products_list", this.headers());
  }

  updateProduct(id: string, jsonBody: any) {
    return this.httpClient.put("http://localhost:8000/products_list/"+id, jsonBody, this.headers());
  }

  deleteProduct(id: string) {
    return this.httpClient.delete("http://localhost:8000/products_list/"+id, this.headers());
  }
}
