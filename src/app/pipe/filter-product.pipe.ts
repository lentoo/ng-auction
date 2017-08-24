import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../shard/product.service";

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {
  transform(list: Array<Product>, filterField?: string, keyword?: string): Array<any> {
    if (!filterField || !keyword) {      
      return list  ;
    }   
    list = list.filter((item) => {

      let fieldValue = item[filterField];
      return fieldValue.indexOf(keyword) >= 0;
    });
    return list;
  }
}
