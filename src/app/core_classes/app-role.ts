import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service'



@Injectable()
export class AppRole implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private common: CommonService) { }

  permission() {
    // console.log(this.router,"router");
    // const c = this.auth.getCookie('QGluZiNpbmZvdGVjaCM');
    const c = this.auth.getCookie('n_QGluZiNpbmZvdGVjaCM');
    let r = null;
    let nr = {
      roleid: null,
      role_name: null,
      permission: null
    };
    // let tempData = [];
    try {
      r = JSON.parse(atob(c));
      nr.roleid = r.roleid;
      nr.role_name = r.rolepermissions[0].role_name;
      // let pt = r.rolepermissions[0].permissions;
      // for(let p of pt){
      //   if(p.company_id == r.company_id)
      //     tempData.push( p );
      // }
      nr.permission = r.rolepermissions[0].permissions;
    }
    catch (e) {
      //
    }
    return nr;
  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    return;

    // const found = this.common.rolelist.find(function(element) {
    //   if ( route.data.role ==  element.role) {
    //     sessionStorage.setItem('pageurl', element.pageurl)
    //     return element.pageaccess;
    //   }
    // });

    // if (found) {
    //   return true;
    // } else {
    //   this.router.navigate(['/dashboard']);
    //   return false;
    // }


  }



}
