import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CreateSuperuserService {

  public test: any = 'hello'
  constructor(private httpClient: HttpClient) {

  }
  getdata() {
    return this.httpClient.get('https://run.mocky.io/v3/b0bc5c23-f394-4027-a5f4-2fac9d3ef99e');
  }
  create(data) {

    /* const httpHeaders = new HttpHeaders({
      Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImdldCI.PreDJ357RmaAQQEw1L_duN2WEDdBi3FCwa-4JvRA5yo',
      'Content-Type': 'application/json'
    }) */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImdldCI.PreDJ357RmaAQQEw1L_duN2WEDdBi3FCwa-4JvRA5yo'
      })
    };
    return this.httpClient.post('http://127.0.0.1/erp/Add-super-user', data, httpOptions).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }
}
