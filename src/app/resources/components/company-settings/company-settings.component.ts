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
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent implements OnInit {

  formInput: FormInput;
  form: any;
  public isSubmit: boolean;
  showSpin = true;

  loading = false;
  errorMessage = "";

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.isSubmit = false;
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
