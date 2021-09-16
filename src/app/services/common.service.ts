import { Injectable } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    mycookie;
    aClickedEvent: EventEmitter<any> = new EventEmitter<string>();
    aClickedEventLost: EventEmitter<any> = new EventEmitter<string>();
    onMainEvent: EventEmitter<any> = new EventEmitter();
    onBufferEvent: EventEmitter<any> = new EventEmitter();
    rootUrl = environment.API_URL;
    cookieName = 'something';
    showPrintHeader = true;
    today: Date = new Date();
    rolelist = [];
    cook;
      // tosty options
    position = 'top-right';

    constructor(private auth: AuthService,private toastyService: ToastyService ) {


        this.cook = this.auth.getCookie('QGluZiNpbmZvdGVjaCM');

        if (this.cook) {

            this.mycookie = JSON.parse(atob(this.cook));
        } else {
            this.mycookie = '';
        }
    }



    permission(component, action) {
        let permissions = localStorage.getItem("n_QGluZiNpbmZvdGVjaCM");
        if (permissions != undefined) {
            let menu = JSON.parse(atob(permissions))
            let access = 0;
            menu.forEach((element, i) => {
                let permit = element.permissions;
                permit.forEach((e, ei) => {
                    if (e.component == component) {
                        if (action === 'create') {
                            if (e.role_permit_create == 1) {
                                access = 1;
                            } else {
                                access = 0;
                            }
                        } else if (action === 'view') {
                            if (e.role_permit_view == 1) {
                                access = 1;
                            } else {
                                access = 0;
                            }
                        } else if (action === 'edit') {
                            if (e.role_permit_edit == 1) {
                                access = 1;
                            } else {
                                access = 0;
                            }
                        } else if (action === 'delete') {
                            if (e.role_permit_delete == 1) {
                                access = 1;
                            } else {
                                access = 0;
                            }
                        }
                    } else {
                        return 0;
                    }
                });
            });
            return access;
        } else {
            return 0;
        }
    }



    AClicked(msg: string): void {
        this.aClickedEvent.emit(msg);
    }

    getCookie(cname) {
        const name = cname + '=';
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

    updateCookie(cname, cvalue, exdays): void {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 30 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    checkCookie(): void {
        const cookie = this.getCookie(this.cookieName);
        if (cookie) {
            const copkiedata = JSON.parse(cookie);
            this.updateCookie(this.cookieName, cookie, 1);
        }
    }

    setCookie(cname, cvalue, exdays): void {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 30 * 60 * 1000));
        const expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    printwindow(): boolean {
        const allmembers = document.querySelector('.memebr_tbl').innerHTML;

        const mywindow = window.open('', 'Infinity Marketing Limited', 'height=1000,width=1200');
        // tslint:disable-next-line: max-line-length
        mywindow.document.write('<html><head><title></title><style>table {border-collapse: collapse;width:100%;}table, table td, table th {border: 1px solid #666;padding: 6px 8px;font-size: 14px;}.forfooter::before{content:"";display:table;clear:both;}</style>');
        mywindow.document.write('</head><body >');
        if (this.showPrintHeader) {
            // tslint:disable-next-line: max-line-length
            mywindow.document.write('<div style="width:100%;display:block;"><h3 style="text-align:center;">Infinity Marketing Ltd.</h3><p style="text-align:center;">Jabbar Tower,Road no-135 House No-42, Level-6, Gulshan Avenue-1 Dhaka-1212,Bangladesh</p><h3  style="text-align:center;">Total Income Report (infinity6)</h3></div>');
        }
        // tslint:disable-next-line: max-line-length
        mywindow.document.write('<div style="width:100%; display:block;"><div style=" width:70%;margin:0 auto;">' + allmembers + '</div></div>');

        if (this.showPrintHeader) {
            // tslint:disable-next-line: max-line-length
            mywindow.document.write('<div class="forfooter" style="width:100%;display:block;margin-top:26px;"><div style="text-align:center;width:100%;margin-top:26px;"> Copyright &copy;' + this.today.getFullYear() + '</div><p style="text-align:center;">All Rights Reserved By Infinity Marketing Limited</p></div>');
        }
        mywindow.document.write('</body></html>');
        mywindow.print();
        mywindow.close();

        return true;
    }

    getMonthNmae(month): void {
        let monthname;
        switch (month) {
            case '1':
                monthname = 'JAN';
                break;
            case '2':
                monthname = 'FEB';
                break;
            case '3':
                monthname = 'MAR';
                break;
            case '4':
                monthname = 'APR';
                break;
            case '5':
                monthname = 'MAY';
                break;
            case '6':
                monthname = 'JUN';
                break;
            case '7':
                monthname = 'JUL';
                break;
            case '8':
                monthname = 'AUG';
                break;
            case '9':
                monthname = 'SEP';
                break;
            case '10':
                monthname = 'OCT';
                break;
            case '11':
                monthname = 'NOV';
                break;
            case '12':
                monthname = 'DEC';
                break;
            default:
            // code block

        }
        return monthname;
    }


// tslint:disable-next-line: typedef
openToasty(title: string, message: string, type: string) {
    // tslint:disable-next-line: max-line-length
    const options = { title: title, msg: message, timeout: 5000, theme: 'default', position: 'top-right', type: type, closeOther: true, showClose: true};
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }
}
