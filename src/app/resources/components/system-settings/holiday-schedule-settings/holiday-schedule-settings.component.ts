import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


// dialog interface data are defined here
export interface DialogData {
  companyname: any;
  holidayName: any;
  fromDate: any;
  toDate: any;
  type: string;
}



@Component({
  selector: 'app-holiday-schedule-settings',
  templateUrl: './holiday-schedule-settings.component.html',
  styleUrls: ['./holiday-schedule-settings.component.scss']
})
export class HolidayScheduleSettingsComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  disabled = false;
  ngOnInit(): void {}


  /*
   Add Leave Type  dialog are open by this function 
  */
   CreateDialog() {
    const dialogRef = this.dialog.open(HolidayScheduleAddEditComponent, {
      data: {
        companyname: '',
        holidayName: '',
        fromDate: '',
        toDate: '',
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
    const dialogRef = this.dialog.open(HolidayScheduleAddEditComponent, {
      data: {
        companyname: '',
        holidayName: '',
        fromDate: '',
        toDate: '',
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
    const dialogRef = this.dialog.open(DeleteHolidayScheduleDataDialog, {});
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
  selector: 'app-holiday-schedule-add-edit-dialog',
  templateUrl: './holiday-schedule-add-edit-dialog.html',
})
export class HolidayScheduleAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HolidayScheduleAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = this.data.type; 
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {
      this.formInput = {
        companyname: this.data.companyname,
        holidayName: this.data.holidayName,
        fromDate: this.data.fromDate,
        toDate: this.data.toDate,
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
  selector: 'app-delete-holiday-schedule-data-dialog',
  templateUrl: './delete-holiday-schedule-data-dialog.html',
})
export class DeleteHolidayScheduleDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteHolidayScheduleDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  Employee Type  delete dialog dialog   
  end here 
*/



