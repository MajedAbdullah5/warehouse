import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { formatDate } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { DialogData } from '../system-settings/department-settings/department-settings.component';

export interface State {
  profile_pic: string;
  name: string;
  designation: string;
}


@Component({
  selector: 'app-ad-mitting-minutes',
  templateUrl: './ad-mitting-minutes.component.html',
  styleUrls: ['./ad-mitting-minutes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdMittingMinutesComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  selectedTabIndex: number = 0;
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
  event calander start
  */

  dateObj = new Date();
  yearMonth = this.dateObj.getUTCFullYear() + '-' + (this.dateObj.getUTCMonth() + 1);

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'All Day Event',
        start: formatDate(this.yearMonth + '-01', 'yyyy-MM-dd', 'en-US'),
        borderColor: '#04a9f5',
        backgroundColor: '#04a9f5',
        textColor: '#fff'
      },
      {
        title: 'Long Event',
        start: formatDate(this.yearMonth + '-07', 'yyyy-MM-dd', 'en-US'),
        end: formatDate(this.yearMonth + '-10', 'yyyy-MM-dd', 'en-US'),
        borderColor: '#f44236',
        backgroundColor: '#f44236',
        textColor: '#fff'
      },
      {
        id: '999',
        title: 'Repeating Event',
        start: formatDate(this.yearMonth + '-09 09:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        borderColor: '#f4c22b',
        backgroundColor: '#f4c22b',
        textColor: '#fff'
      },
      {
        id: '1000',
        title: 'Repeating Event',
        start: formatDate(this.yearMonth + '-16 08:00:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        borderColor: '#3ebfea',
        backgroundColor: '#3ebfea',
        textColor: '#fff'
      },
      {
        title: 'Conference',
        start: formatDate(this.yearMonth + '-11', 'yyyy-MM-dd', 'en-US'),
        end: formatDate(this.yearMonth + '-13', 'yyyy-MM-dd', 'en-US'),
        borderColor: '#1de9b6',
        backgroundColor: '#1de9b6',
        textColor: '#fff'
      },
      {
        title: 'Meeting',
        start: formatDate(this.yearMonth + '-12 10:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        end: formatDate(this.yearMonth + '-12 12:30:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        textColor: '#fff'
      },
      {
        title: 'Lunch',
        start: formatDate(this.yearMonth + '-12 12:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        borderColor: '#f44236',
        backgroundColor: '#f44236',
        textColor: '#fff'
      },
      {
        title: 'Meeting',
        start: formatDate(this.yearMonth + '-12 02:30:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        textColor: '#fff'
      },
      {
        title: 'Happy Hour',
        start: formatDate(this.yearMonth + '-12 05:30:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        borderColor: '#a389d4',
        backgroundColor: '#a389d4',
        textColor: '#fff'
      },
      {
        title: 'Dinner',
        start: formatDate(this.yearMonth + '-12 08:00:00 PM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        textColor: '#fff'
      },
      {
        title: 'Birthday Party',
        start: formatDate(this.yearMonth + '-13 07:30:00 AM', 'yyyy-MM-dd hh:mm:ss', 'en-US'),
        textColor: '#fff'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: formatDate(this.yearMonth + '-28', 'yyyy-MM-dd', 'en-US'),
        borderColor: '#a389d4',
        backgroundColor: '#a389d4',
        textColor: '#fff'
      }
    ]
  };





  /*
   event calander end
  */




  /*
   Add Meeting  dialog are open by this function 
  */
   AddMeeting() {
    const dialogRef = this.dialog.open(MeetingAddEditDialog, {
      data: {
        type: 'insert'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Add Meeting   function end
  */




  /*
   Edit Meeting   dialog are open by this function 
  */
   EditMeeting() {
    const dialogRef = this.dialog.open(MeetingAddEditDialog, {
      data: {
        type: 'edit'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  } 
  /*
  Edit Meeting function end
 */
  



  
  /*
   Delete Meeting dialog are open by this function 
  */
  deleteMeeting() {
    const dialogRef = this.dialog.open(DeleteMeetingDataDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
   Delete Meeting function end
  */
  

  
  /*
    Meeting details are open by this function 
  */
  MeetingDetails() {
    const dialogRef = this.dialog.open(MeetingDetailsDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Meeting details function end
  */
  


}




@Component({
  selector: 'app-meeting-add-edit-dialog',
  templateUrl: './meeting-add-edit-dialog.html',
})
export class MeetingAddEditDialog implements OnInit {
  campaignOne = {
    start: null,
    end: null
  };
  
  selectedTabIndex: number = 0;
  public isSubmit: boolean;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    
    this.filteredStates = this.stateCtrl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.employee.slice())
    );

  }





  ngOnInit(): void {}


    // data save function 
    save(form: any) {
      if (!form.valid) {
        this.isSubmit = true;
        return;
      }
    }
    // function end

  SelectTab(index){
    this.selectedTabIndex = index;
    console.log(index);
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.employee.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  employee: State[] = [
    {
      name: 'Akram',
      designation: 'Ass.Manager',
      profile_pic: 'http://localhost:4500/assets/images/avatar-6.jpg'
    },
    {
      name: 'Bani',
      designation: 'Marketing Manager',
      profile_pic: 'http://localhost:4500/assets/images/avatar-2.jpg'
    },
    {
      name: 'Avata',
      designation: 'Accountent',
      profile_pic: 'http://localhost:4500/assets/images/avatar-5.jpg'
    },
    {
      name: 'Alexdenra ',
      designation: 'Executive',
      profile_pic: 'http://localhost:4500/assets/images/avatar-4.jpg'
    }
  ];






};
 

/* 
  the  Meeting  delete dialog 
  start from here 
*/


@Component({
  selector: 'app-delete-meeting-data-dialog',
  templateUrl: './delete-meeting-data-dialog.html',
})
export class DeleteMeetingDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteMeetingDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  Meeting  delete dialog   
  end here 
*/

/* 
  the  Meeting  Details dialog 
  start from here 
*/



@Component({
  selector: 'app-meeting-details-dialog',
  templateUrl: './meeting-details-dialog.html',
})
export class MeetingDetailsDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<MeetingDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    ngOnInit() {}
  


}
 


 /* 
 the  Meeting  Details dialog   
  end here 
*/

