import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeToTitle'
})
export class TypeToTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    let type_to_title: any = {
      "dress": "Dresses",
      "pant": "Pants",
      "eyewear": "Eye Wear",
      "short": "Shorts",
      "shirt": "Shirts",
      "shoe": "Shoes",
      "name": "Name",
      "type": "Type",
      "color": "Color",
      "price": "Price",
      "description": "Description"
    }
    return type_to_title[<string>value];
  }

}
