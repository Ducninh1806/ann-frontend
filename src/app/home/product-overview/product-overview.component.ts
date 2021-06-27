import { Component, OnInit } from '@angular/core';
import {IProductSearch} from '../../shared/model/search/productSearch';
import {Order} from '../../shared/model/search/order.model';
import {IProduct} from '../../shared/model/product.model';
import {ProductService} from '../../shared/service/product.service';
import {$} from "protractor";

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  productList: IProduct[] = [];

  order: Order = {
    ascending: true,
    property: '',
  };

  productSearch: IProductSearch = {
    name: '',
    sizes: [],
    colors: [],
    orders: [],
    page: 0,
    pageSize: 12,
    totalRecords: 0
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.doSearch();
  }

  doSearch(): void {
    this.productSearch.page = 0;
    this.fetch();
  }

  fetch(): void {
    this.productService.searchProductUsingGET(this.productSearch, 'response').subscribe(
      (response) => {
        this.productSearch = response.body;
        console.log(this.productSearch);
        this.productList = this.productSearch.data;
        console.log(this.productList);
      }, error => {
        console.log(error);
      }
    );
  }

}
