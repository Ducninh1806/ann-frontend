import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpEvent, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IColor} from "../model/color.model";

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiURL = `${environment.apiUrl}/api/color`;

  constructor(private http: HttpClient) { }

  /**
   * findAllColor
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findAllColorUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<IColor>>;
  public findAllColorUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<IColor>>>;
  public findAllColorUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<IColor>>>;
  public findAllColorUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    return this.http.get<Array<IColor>>(`${this.apiURL}`, {observe, reportProgress}
    );
  }

  /**
   * findByIdColor
   *
   * @param id id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findByIdColorUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<IColor>;
  public findByIdColorUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IColor>>;
  public findByIdColorUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IColor>>;
  public findByIdColorUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling findByIdColorUsingGET.');
    }

    return this.http.get<IColor>(`${this.apiURL}/${encodeURIComponent(String(id))}`, {observe, reportProgress}
    );
  }


}
