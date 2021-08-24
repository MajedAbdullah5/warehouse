import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
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
  selector: 'app-leave-managment',
  templateUrl: './leave-managment.component.html',
  styleUrls: [
    './leave-managment.component.scss',
  '../../../../assets/charts/radial/css/radial.scss'
]
})
export class LeaveManagmentComponent implements OnInit {
  campaignOne = {
    start: null,
    end: null
  };

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    
    this.filteredStates = this.stateCtrl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.employee.slice())
    );

  }
  selectedTabIndex: number = 0;



  ngOnInit(): void {
    // setTimeout(() => {
      
    //   let iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"


    //   let chart = am4core.create("employee-leave-chart", am4charts.SlicedChart);
    //   chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
      
    //   chart.data = [{
    //       "name": "Sick leave",
    //       "value": 354
    //   }, {
    //       "name": "Casual leave",
    //       "value": 245
    //   }, {
    //       "name": "Public holiday",
    //       "value": 187
    //   }, {
    //       "name": "Religious holidays",
    //       "value": 123
    //   }, {
    //       "name": "Maternity leave",
    //       "value": 87
    //   }, {
    //       "name": "Paternity leave",
    //       "value": 45
    //   }, {
    //       "name": "Bereavement leave",
    //       "value": 23
    //   }, {
    //       "name": "Compensatory leave",
    //       "value": 23
    //   }, {
    //       "name": "Marriage Leave",
    //       "value": 23
    //   }, {
    //       "name": "Annual Leave",
    //       "value": 23
    //   }, {
    //       "name": "Unpaid Leave",
    //       "value": 23
    //   }
    // ];
      

    //   let series = chart.series.push(new am4charts.PictorialStackedSeries());
    //   series.dataFields.value = "value";
    //   series.dataFields.category = "name";
    //   series.alignLabels = true;
      
    //   series.maskSprite.path = iconPath;
    //   series.ticks.template.locationX = 1;
    //   series.ticks.template.locationY = 0.5;
      
    //   series.labelsContainer.width = 200;
      
    //   chart.legend = new am4charts.Legend();
    //   chart.legend.position = "left";
    //   chart.legend.valign = "bottom";
      

    // }, 75);
  }


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

  actionINLeave(){
    const dialogRef = this.dialog.open(LeaveStatusChangeComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}





@Component({
  selector: 'app-leave-status-change-dialog',
  templateUrl: './leave-status-change-dialog.html',
})
export class LeaveStatusChangeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LeaveStatusChangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {
      
    }

}




@Component({
  selector: 'app-employee-leave-managment',
  templateUrl: './employee-leave-managment.component.html',
})
export class EmployeeLeaveManagmentComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
  }
  public isSubmit: boolean;
  selectedTabIndex: number = 0;

  campaignOne = {
    start: null,
    end: null
  };

  ngOnInit(): void {

  }

  SelectTab(index){
    this.selectedTabIndex = index;
    console.log(index);
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
   Add Leave Type  dialog are open by this function 
  */
   CreateLeave() {
    const dialogRef = this.dialog.open(LeaveAddEditComponent, {
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
   Edit Leave   dialog are open by this function 
  */
  EditLeave() {
    const dialogRef = this.dialog.open(LeaveAddEditComponent, {
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
  Edit leave function end
 */
  



  
  /*
   Delete leave dialog are open by this function 
  */
  DeleteLeave() {
    const dialogRef = this.dialog.open(DeleteLeaveDataDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
   Delete leave Type function end
  */
  



};





/* 
  the leave   create and edit dialog form  
  start from here 
*/


@Component({
  selector: 'app-leave-add-edit-dialog',
  templateUrl: './leave-add-edit-dialog.html',
})
export class LeaveAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LeaveAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = this.data.type; 
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {}
  
  
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
  the  leave  delete dialog 
  start from here 
*/


@Component({
  selector: 'app-delete-leave-data-dialog',
  templateUrl: './delete-leave-data-dialog.html',
})
export class DeleteLeaveDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteLeaveDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  leave  delete dialog dialog   
  end here 
*/

