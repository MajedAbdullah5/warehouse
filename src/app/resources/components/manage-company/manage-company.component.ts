import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss']
})
export class ManageCompanyComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  // Company Slogan
  companyLogoSlogan = 'Logo';
  companyTitleSlogan = 'Company';
  companyGeneralInfoSlogan = 'General Info';
  companyContactPersonSlogan = 'Contact Person';

  // Validators
  companyImageSrc = './assets/images/thumbnail/no-image.png';
  companyLogoSrc = '';
  companyContactPhotoSrc = '';

  // Company form field components
  manageCompanyForm = this.formBuilder.group({
    companyUserName: ['', Validators.required],
    companyUserEmail: ['', Validators.required],
    companyUserPhone: ['', Validators.required],
    companyUserBalance: ['', Validators.required],
    companyUserWebsite: [''],
    companyUserDescription: [''],
    companyUserStatus: [''],
    companyLogo: [''],
    companyContactName: ['', Validators.required],
    companyContactEmail: ['', Validators.required],
    companyContactPhone: ['', Validators.required],
    companyContactPhoto: [''],
  });

  get companyUserName() {
    return this.manageCompanyForm.get('companyUserName');
  }

  get companyUserEmail() {
    return this.manageCompanyForm.get('companyUserEmail');
  }

  get companyUserPhone() {
    return this.manageCompanyForm.get('companyUserPhone');
  }

  get companyUserBalance() {
    return this.manageCompanyForm.get('companyUserBalance');
  }

  get companyLogo() {
    return this.manageCompanyForm.get('companyLogo');
  }

  get companyContactName() {
    return this.manageCompanyForm.get('companyContactName');
  }

  get companyContactEmail() {
    return this.manageCompanyForm.get('companyContactEmail');
  }

  get companyContactPhone() {
    return this.manageCompanyForm.get('companyContactPhone');
  }

  companyLogoOnChange(e): void {
    this.companyLogoSrc = e.target.value;
  }

  companyContactPhotoSrcOnChange(e): void {
    this.companyContactPhotoSrc = e.target.value;
    console.log(e.target.value);
  }

  formResetOnClick() {
    this.manageCompanyForm.reset();
  }

  submitManageCompanyForm() {
    console.log(this.manageCompanyForm);
  }


  ngOnInit(): void {
  }
}
