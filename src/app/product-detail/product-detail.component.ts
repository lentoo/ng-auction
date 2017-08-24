import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Product, ProductService, Comment } from "../shard/product.service";



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private isComment: boolean = true;
  private newRating: number = 5;
  newCommentContent: string = '';
  product: Product
  comments: Comment[]
  constructor(private routerInfo: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {
    console.log(this.routerInfo.snapshot);
    let productId = this.routerInfo.snapshot.params['id'];
    this.productService.getProductForProductId(productId).subscribe(prodoct => { this.product = prodoct[0]; console.log(this.product) });
    this.productService.getCommentForProductId(productId).subscribe(com => this.comments = com);
  }
  addComment() {
    this.comments.unshift(new Comment(Math.random() * 100, this.product.Id, new Date().toLocaleString(), 'zs', this.newRating, this.newCommentContent));
    //reset
    this.newRating = 5;
    this.newCommentContent = null;
    this.isComment = true;

    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    let avg = sum / this.comments.length;
    this.product.star = avg;
  }
  starChangeHandle(star: number) {
    this.newRating = star;
  }
}
