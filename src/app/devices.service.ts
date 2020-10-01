import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImdldCI.PreDJ357RmaAQQEw1L_duN2WEDdBi3FCwa-4JvRA5yo'
      })
    };
    return this.httpClient.get('http://127.0.0.1/erp/requests', httpOptions).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError(error);
        })
      )
  }

}
