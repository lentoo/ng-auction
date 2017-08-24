import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarComponent } from './star/star.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './shard/product.service';
import { FilterProductPipe } from './pipe/filter-product.pipe'
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

const routerConfig: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    FooterComponent,
    ProductComponent,
    CarouselComponent,
    StarComponent,
    HomeComponent,
    ProductDetailComponent,
    FilterProductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ProductService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
