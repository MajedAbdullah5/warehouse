import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


// dialog interface data are defined here
export interface DialogData {
  companyname: any;
  employeeType: any;
  type: string;
}



@Component({
  selector: 'app-employee-type-settings',
  templateUrl: './employee-type-settings.component.html',
  styleUrls: ['./employee-type-settings.component.scss']
})
export class EmployeeTypeSettingsComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  disabled = false;
  ngOnInit(): void {}


  /*
   Add Employee Type  dialog are open by this function 
  */
   CreateDialog() {
    const dialogRef = this.dialog.open(EmployeeTypeAddEditComponent, {
      data: {
        companyname: '',
        departmentName: '',
        departmentDetails: '',
        switcher: '',
        type: 'insert'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Add Employee Type  function end
  */
  



  /*
   Edit Employee Type  dialog are open by this function 
  */
  EditDialog() {
    const dialogRef = this.dialog.open(EmployeeTypeAddEditComponent, {
      data: {
        companyname: '',
        departmentName: '',
        departmentDetails: '',
        switcher:'',
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
    const dialogRef = this.dialog.open(DeleteEmployeeTypeDataDialog, {});
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
  selector: 'app-employee-type-add-edit-dialog',
  templateUrl: './employee-type-add-edit-dialog.html',
})
export class EmployeeTypeAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeTypeAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = this.data.type; 
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {
      this.formInput = {
        companyname: this.data.companyname,
        employeeType: this.data.employeeType,
      };
      // console.log(this.data);
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
  selector: 'app-delete-employee-type-data-dialog',
  templateUrl: './delete-employee-type-data-dialog.html',
})
export class DeleteEmployeeTypeDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteEmployeeTypeDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  Employee Type  delete dialog dialog   
  end here 
*/



