import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService, Product } from "../shard/product.service";
import { FormControl } from '@angular/forms';
import 'rxjs/RX';
import { Http } from "@angular/http";
import { Observable } from "rxjs/RX";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private keyword: string;
  private formControl: FormControl;
  private obProducts: Observable<any>;
  @Output()
  last: EventEmitter<any> = new EventEmitter<any>();
  constructor(private productService: ProductService, http: Http) {
    this.formControl = new FormControl();
    this.formControl.valueChanges
      .debounceTime(500)
      .subscribe((filter) => {
        this.keyword = filter
      });
    //this.obProducts = http.get("/Product/Index").map((res) => res.json())
  }

  ngOnInit() {
    //this.obProducts.subscribe((data) => { this.obProducts = data; console.log(data);});
    this.productService.getProducts().subscribe((product) => { this.products = product; console.log(this.products) });
    this.last.emit('abc');
  }
}
