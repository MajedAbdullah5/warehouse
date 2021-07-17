import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


// dialog interface data are defined here
export interface DialogData {
  companyname: any;
  departmentName: any;
  shiftName: any;
  type: string;
}


@Component({
  selector: 'app-shift-managment-settings',
  templateUrl: './shift-managment-settings.component.html',
  styleUrls: ['./shift-managment-settings.component.scss']
})

export class ShiftManagmentSettingsComponent implements OnInit {
  loading = true;
  errorMessage = "";

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  disabled = false;
  ngOnInit(): void {}


  /*
   Add Leave Type  dialog are open by this function 
  */
   CreateDialog() {
    const dialogRef = this.dialog.open(ShiftAddEditComponent, {
      data: {
        companyname: "",
        departmentName: "",
        shiftName: "",
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
    const dialogRef = this.dialog.open(ShiftAddEditComponent, {
      data: {
        companyname: "",
        departmentName: "",
        shiftName: "",
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
    const dialogRef = this.dialog.open(DeleteShiftDataDialog, {});
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
  selector: 'app-shift-add-edit-dialog',
  templateUrl: './shift-add-edit-dialog.html',
})
export class ShiftAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ShiftAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = 'edit'; 
    formInput: any;
    form: any; 
    public isSubmit: boolean;

    ngOnInit() {
      this.formInput = {
        companyname: this.data.companyname,
        departmentName: this.data.departmentName,
        shiftName: this.data.shiftName,
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
  the  Employee Type  delete dialog 
  start from here 
*/


@Component({
  selector: 'app-delete-shift-type-data-dialog',
  templateUrl: './delete-shift-type-data-dialog.html',
})
export class DeleteShiftDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteShiftDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  Employee Type  delete dialog dialog   
  end here 
*/



