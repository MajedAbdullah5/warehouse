import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

// dialog interface data are defined here
export interface DialogData {
  companyname: any;
  leaveName: any;
  limit: any;
  type: string;
}

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.scss']
})
export class LeaveTypeComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  disabled = false;
  ngOnInit(): void {}


  /*
   Add Leave Type  dialog are open by this function 
  */
   CreateDialog() {
    const dialogRef = this.dialog.open(LeaveTypeAddEditComponent, {
      data: {
        companyname: '',
        leaveName: '',
        limit: '',
        type: 'insert'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Add Leave Type  function end
  */




  /*
   Edit Leave Type  dialog are open by this function 
  */
  EditDialog() {
    const dialogRef = this.dialog.open(LeaveTypeAddEditComponent, {
      data: {
        companyname: '',
        leaveName: '',
        limit: '',
        type: 'edit'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  } 
  /*
  Edit department function end
 */
  



  
  /*
   Delete Employee Type dialog are open by this function 
  */
  deleteDialog() {
    const dialogRef = this.dialog.open(DeleteLeaveTypeDataDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
   Delete Employee Type function end
  */
  

  /*
   Delete Employee Type dialog are open by this function 
  */
   onChangeStatus() {
     console.log('status');
    // alert(JSON.stringify(this.formGroup.value, null, 2));
  }
  /*
   Delete Employee Type function end
  */

}
 



@Component({
  selector: 'app-leave-type-add-edit-dialog',
  templateUrl: './leave-type-add-edit-dialog.html',
})
export class LeaveTypeAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LeaveTypeAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = this.data.type; 
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {
      this.formInput = {
        companyname: this.data.companyname,
        leaveName: this.data.leaveName,
        limit: this.data.leaveName,
      };
      
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
  selector: 'app-delete-leave-type-data-dialog',
  templateUrl: './delete-leave-type-data-dialog.html',
})
export class DeleteLeaveTypeDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteLeaveTypeDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  LEave Type  delete dialog dialog   
  end here 
*/



