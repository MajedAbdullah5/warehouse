import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';
// import { DialogData } from '../system-settings/department-settings/department-settings.component';

// dialog interface data are defined here
export interface DialogData {
  id:any;
  company_id:any;
  name:any;
  email:any;
  password:any;
  role_id:any;
  token:any;
  type:any;
}


@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss']
})
export class UserManagmentComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService, private router: Router, private activeroute: ActivatedRoute) { }
  usercollection = [];
  ngOnInit(): void {
    this.alluser();
    this.common.aClickedEvent.subscribe((data: string) => {
      this.alluser();
    });
  }



  alluser() {
    const postdatet = {
      'token': this.common.mycookie.token,
    }

    this.dataService.post(postdatet, 'usermanagment/all_user_list')
      .subscribe(data => {
        this.usercollection = data.list;
        console.log(this.usercollection);
      });
  }







  openDialog() {
    const dialogRef = this.dialog.open(AddUserDialogDialog, {
      data: {
        id: '',
        company_id: '',
        name: '',
        email: '',
        mobile: '',
        role_id: '',
        type: 'create'
      }
    });
    dialogRef.afterClosed().subscribe(result => { });
  }



  EditDialog(userid) {
    const dialogRef = this.dialog.open(AddUserDialogDialog, {
      data: {
        id: userid,
        company_id: '',
        name: '',
        email: '',
        mobile: '',
        role_id: '',
        type: 'update'
      }
    });
    dialogRef.afterClosed().subscribe(result => { });
  }
}





@Component({
  selector: 'add-user-dialog',
  templateUrl: 'add-user-dialog.html',
})
export class AddUserDialogDialog {
  constructor(public dialogRef: MatDialogRef<AddUserDialogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService, private router: Router, private activeroute: ActivatedRoute) { }
  type = this.data.type;
  formInput: any;
  form: any;
  public isSubmit: boolean;
  usercollection = [];
  allcompanyList = [];
  allroleList = [];
  operation = 1;
  ngOnInit() {
    this.formInput = {
      id: this.data.id,
      company_id: this.data.company_id,
      name: this.data.name,
      email: this.data.email,
      password: '',
      role_id: this.data.role_id,
      token: this.common.mycookie.token,
      operation: this.data.type,
    };
    this.allcompanies();
    this.singleuser(this.data.id);
  }


  singleuser(id) {
    const postdatet = {
      'token': this.common.mycookie.token,
      'id': id
    }
    if (id) {
      this.dataService.post(postdatet, 'usermanagment/id_wise_user')
        .subscribe(data => {
          let user = data.list[0];
          this.formInput.company_id = user.company_id;
          this.formInput.name = user.name;
          this.formInput.email = user.email;
          this.formInput.role_id = user.roleid;
          this.companywiserole();
        });

    }
  }


  allcompanies() {
    const postdatet = {
      'token': this.common.mycookie.token,
    }
    this.dataService.post(postdatet, 'usermanagment/all_company_list')
      .subscribe(data => {
        this.allcompanyList = data.list;
      });
  }



  companywiserole() {
    const postdatet = {
      'token': this.common.mycookie.token,
      'company_id': this.formInput.company_id
    }
    this.dataService.post(postdatet, 'usermanagment/company_wise_role_list')
      .subscribe(data => {
        this.allroleList = data.list;
      });
  }

  // data save function 
  save(form: any) {
    if (form.valid) {
      this.isSubmit = true;
      this.dataService.post(this.formInput, 'usermanagment/create_user')
        .subscribe(data => {
          console.log(data);
          this.dialogRef.close();
          this.common.AClicked("componenet clicked");
          // this.allcompanyList = data.list;
        });
    }
  }
  // function end

}
