import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/RX";

@Injectable()
export class ProductService {
  // products: Product[] = [
  //   new Product(1, 'iphone1', '第一个商品', 1000, 1),
  //   new Product(2, 'iphone2', '第二个商品', 2000, 2),
  //   new Product(3, 'iphone3', '第三个商品', 3000, 3),
  //   new Product(4, 'iphone4', '第四个商品', 4000, 4),
  //   new Product(5, 'iphone5', '第五个商品', 5000, 5)
  // ];
  // comments: Comment[] = [
  //   new Comment(1, 1, '2017-8-18 8:08:8', '张三', 3, '好东西'),
  //   new Comment(2, 1, '2017-8-18 9:08:8', '张三1', 2, '好东西1'),
  //   new Comment(3, 1, '2017-8-18 10:08:8', '张三2', 4, '好东西2'),
  //   new Comment(4, 2, '2017-8-18 11:08:8', '张三3', 2, '好东西3'),
  // ];
  constructor(private http: Http) { }
  //获取商品分类信息
  getProductCategoty(): Observable<string[]> {
    return this.http.get('/Product/getProductCategoty').map(res => res.json());
  }
  //获取所有商品
  getProducts(): Observable<Product[]> {
    return this.http.get('/Product/Index').map(res => res.json());
  }
  //根据商品ID获取商品信息
  getProductForProductId(productId: number): Observable<Product> {
    return this.http.get('/Product/GetProductForId?productId=' + productId).map(res => res.json());
  }
  //获取商品评论信息
  getCommentForProductId(productId: number): Observable<Comment[]> {
    return this.http.get('/Product/GetProductComments?productId=' + productId).map(res => res.json());
  }
}
export class Product {
  constructor(public Id: number,
    public Name: string,
    public Dec: string,
    public price: number,
    public star: number) {
  }
}
export class Comment {
  constructor(public Id: number,
    public productId: number,
    public commentTime: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }
}