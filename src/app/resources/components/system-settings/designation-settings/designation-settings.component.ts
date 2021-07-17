import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


// dialog interface data are defined here
export interface DialogData {
  companyname: any;
  designationName: any;
  departmentName: any,
  designationDetails: any;
  switcher: any;
  type: string;
}



@Component({
  selector: 'app-designation-settings',
  templateUrl: './designation-settings.component.html',
  styleUrls: ['./designation-settings.component.scss']
})
export class DesignationSettingsComponent implements OnInit {

  form: any;
  public isSubmit: boolean;
  loading = false;
  errorMessage = "";

  // constructor
  constructor(private fb: FormBuilder, private dataService: DataService,public dialog: MatDialog) {
    this.isSubmit = false;
  }

  // ngOnInit
  ngOnInit() {}



  /*
   Add designation dialog are open by this function 
  */
   openDialog() {
    const dialogRef = this.dialog.open(DesignationEditDialog, {
      data: {
        companyname: '',
        designationName: '',
        departmentName: '',
        designationDetails: '',
        switcher: '',
        type: 'insert'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Add designation function end
  */
  




  /*
   Edit designation dialog are open by this function 
  */
   EditDialog() {
    const dialogRef = this.dialog.open(DesignationEditDialog, {
      data: {
        companyname: '',
        designationName: '',
        departmentName: '',
        designationDetails: '',
        switcher:'',
        type: 'edit'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  } 
  /*
  Edit designation function end
 */
  


  
  /*
   Delete designation dialog are open by this function 
  */
   deleteDialog() {
    const dialogRef = this.dialog.open(DeleteDesignationDataDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
   Delete designation function end
  */

}




/* 
  the designation create and edit dialog form  
  start from here 
*/

@Component({
  selector: 'designation-edit-dialog',
  templateUrl: 'designation-edit-dialog.html',
})
export class DesignationEditDialog {
  constructor(public dialogRef: MatDialogRef<DesignationEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService){}
  type = this.data.type; 
  formInput: any;
  form: any;
  public isSubmit: boolean;
  errorMessage = "";

    ngOnInit(){
      this.formInput = {
        companyname: this.data.companyname,
        designationName: this.data.designationName,
        departmentName: this.data.departmentName,
        designationDetails: this.data.designationDetails,
        switcher: this.data.switcher,
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
  the sesignation create and edit dialog form  
  end here 
*/



/* 
  the designation delete dialog 
  start from here 
*/

@Component({
  selector: 'delete-designation-data-dialog',
  templateUrl: 'delete-designation-data-dialog.html',
})
export class DeleteDesignationDataDialog {
  constructor(public dialogRef: MatDialogRef<DeleteDesignationDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService){}

}

/* 
 the designation delete dialog dialog   
  end here 
*/