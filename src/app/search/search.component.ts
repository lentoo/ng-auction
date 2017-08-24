import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from "../shard/product.service";



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categorys: string[];
  formModel: FormGroup;
  constructor(productService: ProductService) {
    productService.getProductCategoty().subscribe(cate => this.categorys = cate);
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.ValidatorPrice],
      category: ['-1']
    });
  }

  ngOnInit() {
  }
  ValidatorPrice(form: FormControl) {
    if (!form.value) {
      return null;
    }
    let price = parseInt(form.value);
    if (price > 0) {
      return null;
    } else {
      return { ValidatorPrice: true }
    }
  }
  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
