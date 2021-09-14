import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError} from 'rxjs';
import { Appsettings } from '../core_classes/appsettings';
import { environment } from '../../environments/environment';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  url = environment.API_URL;
  apiKey = Appsettings.getApiKey();

  constructor(private https: HttpClient, private router: Router) {
    
  }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  httpDataHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
    // user auth check
    loggedIns(): boolean {
        let c = this.getCookie('QGluZiNpbmZvdGVjaCM');
        if(c == undefined || c == null || c == '')
           this.logOut();
        try {
            for (const p in JSON.parse(atob(c))) 
                if(p == null)
                    this.logOut();
        }
        catch(e){
            this.logOut();
        }
        return true;
    }

  login(data): Observable<any> {
    const uri = this.url + 'loginapi/login/' + this.apiKey;
    return this.https.post(uri, JSON.stringify(data), this.httpDataHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  // tslint:disable-next-line: typedef
  setCookie(cookieName, cookieValue, expireDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expireDays * 30 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
  }

  // tslint:disable-next-line: typedef
  getCookie(cookieName) {
    const name = cookieName + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  // tslint:disable-next-line: typedef
  logOut(){
    localStorage.removeItem("n_QGluZiNpbmZvdGVjaCM");
    this.eraseCookie('QGluZiNpbmZvdGVjaCM');
    this.router.navigate(['login']);
  }

  // tslint:disable-next-line: typedef
  deleteAllCookies() {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
  }

  eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  // tslint:disable-next-line: typedef
  httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
