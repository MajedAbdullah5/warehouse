import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';
// import { DialogData } from '../system-settings/department-settings/department-settings.component';

// dialog interface data are defined here
export interface DialogData {
  id: any;
  company_id: any;
  name: any;
  email: any;
  password: any;
  role_id: any;
  permissiontype: any;
  token: any;
  type: any;
}


@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss']
})
export class UserManagmentComponent implements OnInit {

  pagereqest = 1;
  itemPerPage = '15';
  totalitem = 0;
  itemSearch = '';
  permissionType = 0;
  access = 0;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService, private router: Router, private activeroute: ActivatedRoute) { }
  usercollection = [];
  ngOnInit(): void {
    this.all_initialData();
    this.common.aClickedEvent.subscribe((data: string) => {
      this.all_initialData();
    });
  }


  all_initialData() {
    const postdatet = {
      'token': this.common.mycookie.token,
      'rowperpage': this.itemPerPage,
      'pagereqest': this.pagereqest,
      'search': this.itemSearch,
      'permissionType': this.permissionType,
    }
    this.alluser(postdatet);

  }


  alluser(postdatet) {
    this.dataService.post(postdatet, 'usermanagment/all')
      .subscribe(data => {
        this.usercollection = data.list;
        this.totalitem = data.totalitem;
      });
  }


  itemSearchChange(value) {
    this.itemSearch = value;
    this.all_initialData();
  }

  changedPermissionType(value) {
    this.permissionType = value;
    this.all_initialData();
  }




  permission(type){
    this.access = this.common.permission("UserManagmentComponent",type);
    return this.access;
  }
  
    

  getSL(i) {
    return (Number(this.itemPerPage) * (Number(this.pagereqest) - 1)) + i
  }


  changedPageItem(sevent) {

    this.pagereqest = 1;
    this.all_initialData();
  }

  pageChange(newPage: number) {
    this.pagereqest = newPage;
    this.all_initialData();

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
  permissiontype = 0;
  userStatus = false;
  ngOnInit() {
    this.formInput = {
      id: this.data.id,
      company_id: this.data.company_id,
      name: this.data.name,
      email: this.data.email,
      password: '',
      role_id: this.data.role_id,
      permissiontype: this.permissiontype,
      token: this.common.mycookie.token,
      operation: this.data.type,
      status: this.userStatus,
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
      this.dataService.post(postdatet, 'usermanagment/findById')
        .subscribe(data => {
          let user = data.list[0];

          this.formInput.company_id = user.company_id;
          this.formInput.name = user.name;
          this.formInput.email = user.email;
          this.formInput.role_id = user.roleid;
          this.formInput.permissiontype = user.permissiontype;
          this.formInput.status = user.status;
          this.userStatus = user.status;
          if (user.permissiontype == 0) {
            this.formInput.permissiontype = 0;
          }

          this.companywiserole();
        });

    }
    console.log(this.formInput.status, " this.formInput");

  }
  changeStatus(e) {
    this.userStatus = e.checked;
    console.log(this.userStatus);
  }


  allcompanies() {
    const postdatet = {
      'token': this.common.mycookie.token,
    }
    this.dataService.post(postdatet, 'companymanagment/companies')
      .subscribe(data => {
        this.allcompanyList = data.list;
      });
  }



  companywiserole() {
    const postdatet = {
      'token': this.common.mycookie.token,
      'company_id': this.formInput.company_id
    }
    this.dataService.post(postdatet, 'usermanagment/findByCompanyId')
      .subscribe(data => {
        this.allroleList = data.list;
      });
  }



  changeRoleType(e) {
    this.permissiontype = e.value;
  }



  // data save function 
  save(form: any) {
    if (form.valid) {
      this.isSubmit = true;
      this.dataService.post(this.formInput, 'usermanagment/create')
        .subscribe(data => {
          this.dialogRef.close();
          this.common.AClicked("componenet clicked");
          // this.allcompanyList = data.list;
        });
    }
  }
  // function end

}



@Component({
  selector: 'app-user-role-edit',
  templateUrl: './user-role-edit.component.html'
})
export class UserRoleEditComponent implements OnInit {
  disabled = false;
  dataOrderBy = false;
  compcollection = [];
  rolewisecompcollection = [];
  tokenId;
  roleName = '';
  operation = [];
  onsubmit = 0;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService, private router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tokenId = this.common.mycookie.token;
    this.showcomponents();
  }

  getcomponent(e) {
    this.showcomponents();
  }

  showcomponents() {
    let orderBy: string;
    const postdatet = {
      'token': this.common.mycookie.token,
      'user_id': this.activeroute.snapshot.paramMap.get("id"),
    }
    this.allcomponents(postdatet);
  }

  allcomponents(postdatet) {
    this.dataService.post(postdatet, 'usermanagment/editRole')
      .subscribe(data => {
        // console.log(data);
        this.compcollection = data.list;
        this.rolewisecompcollection = data.rolewise;
        this.compcollection.forEach((element, i) => {
          let id = element.id;
          let permit_row_id = '';
          if (element.permit_row_id != undefined) {
            permit_row_id = element.permit_row_id;
          }
          let op = {
            "id": id,
            "permit_row_id": permit_row_id,
            "company_id": element.company_id,
            "role_permit_create": element.permit_create,
            "role_permit_view": element.permit_view,
            "role_permit_edit": element.permit_edit,
            "role_permit_delete": element.permit_delete,
          };
          this.operation.push(op);
        });
      });
  }


  saverole() {
    this.onsubmit = 1;
    const data = {
      "token": this.tokenId,
      "operation": this.operation,
      "user_id": this.activeroute.snapshot.paramMap.get("id"),
    }
    this.dataService.post(data, 'usermanagment/updateRole')
      .subscribe(res => {
        this.onsubmit = 0;
        if (res.response == 200) {
          this.common.openToasty('Success', res.message, 'success');
          this.router.navigate(['/role/user-managment']);
        } else {
          this.common.openToasty('Warning', res.message, 'warning');
         
        }
      });
  }


  someSelect(i) {
    console.log(i, 'ss');
  }

  checkoption(e, id, name) {
    const ar = this.operation[id];
    if (e.checked) {
      ar[name.trim()] = 1;
    } else {
      ar[name.trim()] = 0;
    }
    console.log(ar, "ddd");

  }

}
