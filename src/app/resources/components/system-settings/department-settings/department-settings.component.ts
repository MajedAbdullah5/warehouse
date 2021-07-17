import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


// dialog interface data are defined here
export interface DialogData {
  companyname: any;
  departmentName: any;
  departmentDetails: any;
  switcher: any;
  type: string;
}


@Component({
  selector: 'app-department-settings',
  templateUrl: './department-settings.component.html',
  styleUrls: ['./department-settings.component.scss']
})
export class DepartmentSettingsComponent implements OnInit {

  loading = true;
  errorMessage = "";


  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  ngOnInit() {
  }
  


  /*
   Add department dialog are open by this function 
  */
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
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
    Add department function end
  */
  



  /*
   Edit department dialog are open by this function 
  */
  EditDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
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
   Delete department dialog are open by this function 
  */
  deleteDialog() {
    const dialogRef = this.dialog.open(DeleteDepartmentDataDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
   Delete department function end
  */

}




/* 
  the department create and edit dialog form  
  start from here 
*/
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
  type = this.data.type; 
  formInput: any;
  form: any;
  public isSubmit: boolean;

  ngOnInit() {
    this.formInput = {
      companyname: this.data.companyname,
      departmentName: this.data.departmentName,
      departmentDetails: this.data.departmentDetails,
      switcher: this.data.switcher,
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
  the department create and edit dialog form  
  start from here 
*/




/* 
  the department delete dialog 
  start from here 
*/

@Component({
  selector: 'delete-department-data-dialog',
  templateUrl: 'delete-department-data-dialog.html',
})
export class DeleteDepartmentDataDialog {
  constructor(public dialogRef: MatDialogRef<DeleteDepartmentDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService){}

}

/* 
 the department delete dialog dialog   
  end here 
*/