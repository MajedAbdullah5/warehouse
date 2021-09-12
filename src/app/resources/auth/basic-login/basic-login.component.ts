import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { AuthGuard } from 'src/app/core_classes/auth-guard';
import { AppRole } from 'src/app/core_classes/app-role';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  userLoginForm: FormGroup;
  emailControl;
  passwordControl;
  rememberControl;

  loginError = false;
  failedMessage;
  // cookie name 
  // @inf#infotech#
  constructor(private fb: FormBuilder, private auth: AuthService, private permission:AppRole,  private authguard: AuthGuard, private router: Router, private meta: Meta) {
    this.buildLoginForm();
    if(this.auth.loggedIns())
      this.router.navigate(['/dashboard']);
   }

  ngOnInit(): void {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme6');
  }

  // tslint:disable-next-line: typedef
  buildLoginForm(){
    this.userLoginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      remember_me: this.fb.control('')
    });
    this.emailControl = this.userLoginForm.get('email') as FormControl;
    this.passwordControl = this.userLoginForm.get('password') as FormControl;
    this.rememberControl = this.userLoginForm.get('remember_me') as FormControl;
  }

  // tslint:disable-next-line: typedef
  submitLoginForm() {
    if (this.userLoginForm.valid){
      const data = this.userLoginForm.value;
      this.auth.login(data).subscribe(
        res => {
          // console.log(res.component_permissions,'data');
          if (res.response === 200){
            const token = res.data.token;
            const cookieValue = res.data;
            // const cookieValue = {
            //   'name': res.data.name,
            //   'email': res.data.email,
            //   'token': token,
            //   'status': res.data.status
            // };
            const component_permissions = res.component_permissions;
            // console.log(res);
            // console.log(cookieValue,"cookieValue 1122");
            // console.log(token);
            // console.log(component_permissions);
            this.auth.setCookie('QGluZiNpbmZvdGVjaCM', btoa(JSON.stringify(cookieValue)), 1);
            localStorage.setItem("n_QGluZiNpbmZvdGVjaCM", btoa(JSON.stringify(component_permissions)));
            // this.auth.setCookie('n_QGluZiNpbmZvdGVjaCM', , 1);
            // console.log(this.permission.permission());
            window.location.reload();
            // this.router.navigate(['dashboard']);
          }else if (res.response === 400){
            this.loginError = true;
            this.failedMessage = res.message;
          }
        });
    }else{
      this.loginError = true;
      this.failedMessage = 'Email or password field is required';
    }
  }

  // tslint:disable-next-line: typedef
  loginAlertFun(){
    this.loginError = false;
  }

}
