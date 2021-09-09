import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'app-basic-login',
    templateUrl: './basic-login.component.html',
    styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
    loader;
    LoginForm: FormGroup;
    userEmailControl;
    userPasswordControl;
    loginresult;
    loginError;
    constructor(private fb: FormBuilder, private auth: AuthService, private dataService: DataService, private router: Router, private common: CommonService,) {
        this.buildLoginForm();
    }

    ngOnInit() {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
       if (this.auth.loggedIns()) { this.router.navigate(['/dashboard']); }
    }

    buildLoginForm() {

        this.LoginForm = this.fb.group({
            email: this.fb.control('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            password: this.fb.control('', Validators.required)
        });
        this.userEmailControl = this.LoginForm.get('email') as FormControl;
        this.userPasswordControl = this.LoginForm.get('password') as FormControl;
    }

    login() {
        const data = this.LoginForm.value;
        this.auth.login(data).subscribe(
            res => {
                console.log(res);
                const response = res['response'];
                const result = res['result'];
                if (response === 200) {
                    const token = res['bearertoken'];
                    const mobile = res['mobile'];

                    const cvalue = { 'username': data.email, 'bearertoken': token, 'status': 'true' }
                    this.common.setCookie('MASN_spbT', JSON.stringify(cvalue), 1)

                    this.router.navigate(['dashboard']);
                    this.loginresult = 'success';
                    let users = res['users'];


                }
                else if (response === 400) {
                    // this.loginError = true;
                    // this.failedMessage = result;
                }

                if (!res) {
                    this.loginresult = 'error';
                    this.loginError = true;
                } else {

                }
    // },
    // // error => this.loader = false,
    // // () => this.loader = false
    // error => {
    //     console.log('error');
    //     // this.submit = 'Login';
    //     // this.showSpin = false;
    //     // this.loginError = true;
    // }
      });
      }

}
