import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  selector: 'app-visitor-managment',
  templateUrl: './visitor-managment.component.html',
  styleUrls: ['./visitor-managment.component.scss']
})
export class VisitorManagmentComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  disabled = false;
  ngOnInit(): void {}


  /*
   Add Leave Type  dialog are open by this function 
  */
   CreateDialog() {
    const dialogRef = this.dialog.open(VisitorAddEditComponent, {
      data: {
        companyname: '',
        visitorname: '',
        designation: '',
        intime: '',
        outtime: '',
        phone: '',
        meetwith: '',
        details: '',
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
    const dialogRef = this.dialog.open(VisitorAddEditComponent, {
      data: {
        companyname: '',
        visitorname: '',
        designation: '',
        intime: '',
        outtime: '',
        phone: '',
        meetwith: '',
        details: '',
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
    const dialogRef = this.dialog.open(DeleteVisitorDataDialog, {});
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
  selector: 'app-visitor-add-edit-dialog',
  templateUrl: './visitor-add-edit-dialog.html',
})
export class VisitorAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VisitorAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = this.data.type; 
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {
      this.formInput = {
        companyname: this.data.companyname,
        visitorname: this.data.visitorname,
        designation: this.data.designation,
        intime: this.data.intime,
        outtime: this.data.outtime,
        phone: this.data.phone,
        meetwith: this.data.meetwith,
        details: this.data.details,
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
  selector: 'app-delete-visitor-data-dialog',
  templateUrl: './delete-visitor-data-dialog.html',
})
export class DeleteVisitorDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteVisitorDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  LEave Type  delete dialog dialog   
  end here 
*/


