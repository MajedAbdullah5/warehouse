import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, FormControl, FormArray,
    Validators, ValidatorFn, AbstractControl, ValidationErrors
  } from '@angular/forms';

import { DataService } from '../../../services/data.service';

export class FormInput {
  email: any;
  password: any;
  requiredInput: any;
  phone: any;
  cmbGear: any;
  address: any;
  file: any;
  switcher: any;
}

@Component({
  selector: 'app-frm-validation',
  templateUrl: './frm-validation.component.html',
  styleUrls: ['./frm-validation.component.scss']
})
export class FrmValidationComponent implements OnInit {
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;
  showSpin = true;

  loading = false;
  errorMessage = "";

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.isSubmit = false;

    this.buildLoginForm();

  }

  userLoginForm: FormGroup;
  usernamelControl;
  userPasswordControl;
  submit = 'submit'

  person = { title: 'Angular POST Request Example' }

  ngOnInit() {
    this.formInput = {
      email: '',
      password: '',
      requiredInput: '',
      phone: '',
      cmbGear: '',
      address: '',
      file: '',
      switcher: ''
    };

    this.addPerson();
  }

  /*confirmPassword: '',*/
  /*url: '',*/

  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
  }

  addPerson() {
    this.dataService.postJson(this.person, 'posts')
    .subscribe({
        next: data => {
            console.log(data, 'check point' )
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
  }




  buildLoginForm() {
    this.userLoginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', Validators.required)
    });
    this.usernamelControl = this.userLoginForm.get('username') as FormControl;
    this.userPasswordControl = this.userLoginForm.get('password') as FormControl;
  }

  submitLoginForm() {

  }

  loginErroraa () {
    
  }


  public getRepos(): void {
    this.loading = true;
    this.errorMessage = '';
    this.dataService.getAll('path')
      .subscribe(
        (response) => {                           // next() callback
          console.log('response received')
          const repos = response;
        },
        (error) => {                              // error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   // complete() callback
          console.error('Request completed')  // This is actually not needed
          this.loading = false;
        })
  }

}
