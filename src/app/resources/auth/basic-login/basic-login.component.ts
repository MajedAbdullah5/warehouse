import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder,private auth: AuthService, private router: Router) { 
    this.buildLoginForm();
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    if (this.auth.loggedIns()) { this.router.navigate(['/dashboard']);  }
  }

  buildLoginForm() {
    
    this.LoginForm = this.fb.group({
      // email:new FormControl(''),
      // password: new FormControl('')
      email: this.fb.control('', [
                                  Validators.required,
                                  Validators.minLength(4),
                                ]),
      password: this.fb.control('', Validators.required)
    });
    this.userEmailControl = this.LoginForm.get('email') as FormControl;
    this.userPasswordControl = this.LoginForm.get('password') as FormControl;
    console.log(this.userEmailControl,'userEmailControl');
    console.log(this.userPasswordControl,"userPasswordControl");
  }

  login() {
  //   this.loader = true;
    const data = this.LoginForm.value;
    console.log(data);
    this.auth.login(data).subscribe(
          res => {
            console.log(res);
              });
            }
  //   // this.loginservice.login(data);

  //   // this.submit = 'Submitting....';
  //   // this.showSpin = true;
    // this.auth.login(data).subscribe(
    //   res => {
    //     this.submit = 'Login';
    //     this.showSpin = false;
    //     const response = res['response'];
    //     const result = res['result'];
    //     if (response === 200) {
    //       const token = res['bearertoken'];
    //       const mobile = res['mobile'];
       
    //       const cvalue = {'username': data.username, 'bearertoken': token, 'status': 'true' }
    //       this.loginservice.setCookie('MASN_spbT', JSON.stringify(cvalue), 1)
    //       this.loginresult = 'success';
    //       this.router.navigate(['dashboard']);
    //       this.common.mycookie = cvalue;
    //       this.common.mymobile = mobile;
    //       this.common.user_status = res['status'];
    //       this.common.getPin = res['getPin'];
    //       this.common.check_access_for_profile(res['profile_data']);
    //       this.common.getasptree = res['getasptree'];
    //       this.common.getseniorleader = res['getseniorleader'];
    //       this.common.getsuperupline = res['getsuperupline'];
    //       this.common.getoutnetoffice = res['getoutnetoffice'];
    //       localStorage.removeItem('uplinedata');
    //       localStorage.removeItem('preuplinedata');
    //       this.common.AClicked('Component A is clicked!!');

    //       let users =  res['users'];
    //       if ( Number(res['status']) === 1 ) {
    //         if ( Number(users.membertype)  > 3 ) {
    //          this.common.showTreeStrature = true
    //         } else {
    //          this.common.showTreeStrature = false
    //         }
    //       } else {
    //       this.common.showTreeStrature = false
    //       }




      //   } else if (response === 400) {
      //     this.loginError = true;
      //     this.failedMessage = result;
      //   }

      //   if (!res) {
      //     this.loginresult = 'error';
      //     this.loginError = true;
      //   } else {

      //   }
      // },
      // // error => this.loader = false,
      // // () => this.loader = false
      // error => {
      //   this.submit = 'Login';
      //   this.showSpin = false;
      //   this.loginError = true;
      // }
    // );
  // }

}
