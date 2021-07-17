import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { DialogData } from '../system-settings/department-settings/department-settings.component';

@Component({
  selector: 'app-em-mitting-minutes',
  templateUrl: './em-mitting-minutes.component.html',
  styleUrls: ['./em-mitting-minutes.component.scss']
})
export class EmMittingMinutesComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  public isSubmit: boolean;

  ngOnInit(): void {
  }


    // data save function 
    save(form: any) {
      if (!form.valid) {
        this.isSubmit = true;
        return;
      }
    }
    // function end

  
  /*
    Meeting details are open by this function 
  */
  MeetingDetails() {
    const dialogRef = this.dialog.open(EmMeetingDetailsDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Meeting details function end
  */
  


}


/* 
  the  Meeting  Details dialog 
  start from here 
*/



@Component({
  selector: 'app-meeting-details-dialog',
  templateUrl: './meeting-details-dialog.html',
})
export class EmMeetingDetailsDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmMeetingDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    ngOnInit() {}
  


}
 


 /* 
 the  Meeting  Details dialog   
  end here 
*/

