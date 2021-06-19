import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Appsettings } from '../core_classes/appsettings';

export interface IUserResponse {
  total: number;
  list: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiendPoint = environment.API_URL;
  // apikey = Appsettings.getApiKey();
  apikey = '';
  constructor(private https: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  httpDataHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }

  getAll(path: string): Observable<any> {
    return this.https.get(this.apiendPoint + path + '/' + this.apikey)
  }

  getdata(id, path): Observable<any> {
    return this.https.get(this.apiendPoint + path + '/' + this.apikey + '?id=' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  postJson(resource, path): Observable<any> {
    return this.https.post(this.apiendPoint + path + '/' + this.apikey, JSON.stringify(resource), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  postEncodedData(resource, path): Observable<any> {
    return this.https.post(this.apiendPoint + path + '/' + this.apikey, JSON.stringify(resource), this.httpDataHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  update(id, data, path): Observable<any> {
    return this.https.put(this.apiendPoint + path + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  delete(id, path): Observable<any> {
    return this.https.delete(this.apiendPoint + path + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }


  httpError(error) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }


}
