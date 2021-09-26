import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-manage-brand',
  templateUrl: './manage-brand.component.html',
  styleUrls: ['./manage-brand.component.scss']
})
export class ManageBrandComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
  }

  // brand Slogan
  brandLogoSlogan = 'Logo';
  brandTitleSlogan = 'Brand';
  brandGeneralInfoSlogan = 'General Info';

  // Validators
  brandImageSrc = './assets/images/thumbnail/no-image.png';
  brandLogoSrc = '';

  // brand form field components
  manageBrandForm = this.formBuilder.group({
    brandUserName: ['', Validators.required],
    brandUserCompany: ['', Validators.required],
    brandUserDescription: [''],
    brandUserStatus: [''],
    brandLogo: [''],
  });

  //Validate brand companies
  brandCompanies = ['Company1', 'Company2', 'Company3', 'Company4'];
  brandCompanyHasError = true;

  get brandUserName() {
    return this.manageBrandForm.get('brandUserName');
  }

  get brandUserCompany() {
    return this.manageBrandForm.get('brandUserCompany');
  }

  brandLogoOnChange(e): void {
    this.brandLogoSrc = e.target.value;
  }

  validateBrandCompany(companyValue) {
    companyValue == 'default' ? this.brandCompanyHasError = true : this.brandCompanyHasError = false;
  }

  formResetOnClick() {
    this.manageBrandForm.reset();
  }

  submitManageBrandForm() {
    console.log(this.manageBrandForm);
  }

  ngOnInit(): void {
  }

}
