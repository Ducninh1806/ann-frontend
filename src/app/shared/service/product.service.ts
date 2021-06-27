import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpEvent, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from '../model/product.model';
import {IProductSearch} from '../model/search/productSearch';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  apiURL = `${environment.apiUrl}/api/product`;

  constructor(private http: HttpClient) { }

  findAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiURL}`);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post(`${this.apiURL}`, product);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put(`${this.apiURL}`, product);
  }

  getDetailProduct(product: IProduct): Observable<IProduct> {
    return this.http.put(`${this.apiURL}`, product);
  }

  // searchProduct(productSearch: IProductSearch): Observable<any>{
  //   return this.http.get(`${this.apiURL}/search`).pipe(
  //     catchError((error) => {
  //       return throwError(error);
  //     }),
  //   );
  // }

  /**
   * searchProduct
   *
   * @param productSearch productSearch
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public searchProductUsingGET(productSearch: IProductSearch, observe?: 'body', reportProgress?: boolean): Observable<IProductSearch>;
  public searchProductUsingGET(productSearch: IProductSearch, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IProductSearch>>;
  public searchProductUsingGET(productSearch: IProductSearch, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IProductSearch>>;
  public searchProductUsingGET(productSearch: IProductSearch, observe: any = 'body', reportProgress = false ): Observable<any> {

    if (productSearch === null || productSearch === undefined) {
      throw new Error('Required parameter productSearch was null or undefined when calling searchProductUsingGET.');
    }
    return this.http.post<IProductSearch>(`${this.apiURL}/search`, productSearch, {observe, reportProgress}
    );
  }

}
