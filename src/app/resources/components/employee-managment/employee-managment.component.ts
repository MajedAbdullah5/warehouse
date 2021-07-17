import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


// dialog interface data are defined here
export interface DialogData {
  type: string;
}



@Component({
  selector: 'app-employee-managment',
  templateUrl: './employee-managment.component.html',
  styleUrls: ['./employee-managment.component.scss']
})
export class EmployeeManagmentComponent implements OnInit {
  panelOpenState = true;
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  disabled = false;
  ngOnInit(): void {
  }




  /*
   Add Leave Type  dialog are open by this function 
  */
   CreateDialog() {
    const dialogRef = this.dialog.open(ExparienceAddEditComponent, {
      data: {
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
    const dialogRef = this.dialog.open(ExparienceAddEditComponent, {
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
    const dialogRef = this.dialog.open(DeleteExparienceDataDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
   Delete Employee Type function end
  */
  



  /*
   Add Leave Type  dialog are open by this function 
  */
  eduCreateDialog() {
    const dialogRef = this.dialog.open(EducationAddEditComponent, {
      data: {
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
  eduEditDialog() {
    const dialogRef = this.dialog.open(EducationAddEditComponent, {
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
  eduDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteEducationDataDialog, {});
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
  selector: 'app-exparience-add-edit-dialog',
  templateUrl: './exparience-add-edit-dialog.html',
})
export class ExparienceAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExparienceAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = this.data.type; 
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {
      this.formInput = {
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
  selector: 'app-delete-exparience-data-dialog',
  templateUrl: './delete-exparience-data-dialog.html',
})
export class DeleteExparienceDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteExparienceDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  Employee Type  delete dialog dialog   
  end here 
*/




@Component({
  selector: 'app-education-add-edit-dialog',
  templateUrl: './education-add-edit-dialog.html',
})
export class EducationAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EducationAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = this.data.type; 
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {
      this.formInput = {
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
  selector: 'app-delete-education-data-dialog',
  templateUrl: './delete-education-data-dialog.html',
})
export class DeleteEducationDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteEducationDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  Employee Type  delete dialog dialog   
  end here 
*/






