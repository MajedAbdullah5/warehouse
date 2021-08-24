import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Appsettings } from '../core_classes/appsettings';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataService: DataService, private http:HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
    // user:{"id":'1111'}
  }

    apikey = Appsettings.getApiKey();
    url =  'http://localhost/inf/hrms/backend/';
    loggedIns(): boolean {
      console.log (this.dataService.getCookie('user'));
      return !!sessionStorage.getItem('bearertoken');
    }

    login(data) {
      const uri = this.url + 'loginapi/init/' + this.apikey;
    //   this.http.post(uri,data).pipe(map(data => {})).subscribe(result => {
    //   console.log(result);
    // });
    let a = this.http.post(uri, JSON.stringify(data), this.httpHeader)
     .pipe(
      retry(1),
      catchError(this.dataService.httpError)
    );
    console.log(a,'llll');
    return a;
    }
}
