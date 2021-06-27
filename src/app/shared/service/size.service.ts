import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISize} from "../model/size.model";

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  apiURL = `${environment.apiUrl}/api/size`;

  constructor(private http: HttpClient) { }

  findAllSize(): Observable<ISize[]> {
    return this.http.get<ISize[]>(`${this.apiURL}`);
  }
}
