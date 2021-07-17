import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


// dialog interface data are defined here
export interface DialogData {
  companyname: any;
  visitorname: any;
  designation: any;
  intime: any;
  outtime: any;
  phone: any;
  meetwith: any;
  details: any;
  type: string;
}



@Component({
  selector: 'app-ad-notices-managment',
  templateUrl: './ad-notices-managment.component.html',
  styleUrls: ['./ad-notices-managment.component.scss']
})
export class AdNoticesManagmentComponent implements OnInit {

 
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  disabled = false;
  ngOnInit(): void {}


  /*
   Add Leave Type  dialog are open by this function 
  */
   CreateNotice() {
    const dialogRef = this.dialog.open(NoticesAddEditComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Add Leave Type  function end
  */




  /*
   Edit Leave Type  dialog are open by this function 
  */
  EditNotice() {
    const dialogRef = this.dialog.open(NoticesAddEditComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {});
  } 
  /*
  Edit department function end
 */
  



  
  /*
   Delete Employee Type dialog are open by this function 
  */
  deleteNotice() {
    const dialogRef = this.dialog.open(DeleteNoticesDataDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
   Delete Employee Type function end
  */
  


}
 



@Component({
  selector: 'app-notices-add-edit-dialog',
  templateUrl: './notices-add-edit-dialog.html',
})
export class NoticesAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NoticesAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    public isSubmit: boolean;
    toppings = new FormControl();
// 
    toppingList: string[] = ['Infinity', 'Infotech', 'maslow', 'unimust'];
    departmentList: string[] = ['IT', 'Accounts', 'HR','Sales'];
    designationList: string[] = ['Manager', 'Accountent', 'HR Manager','Sales Manager'];
    employeeList: string[] = ['Md. Danyal Khan', 'Md. Abraham', 'Md. Melayid Joshi'];
    ngOnInit() {

    }
  
  
    // data save function 
    save(form: any) {
      if (!form.valid) {
        this.isSubmit = true;
        return;
      }
    }
    // function end

}
 

/* 
  the  Employee Type  create and edit dialog form  
  start from here 
*/





/* 
  the  leave Type  delete dialog 
  start from here 
*/


@Component({
  selector: 'app-delete-notices-data-dialog',
  templateUrl: './delete-notices-data-dialog.html',
})
export class DeleteNoticesDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteNoticesDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  LEave Type  delete dialog dialog   
  end here 
*/


