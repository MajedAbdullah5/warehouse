import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  profile_pic: string;
  name: string;
  designation: string;
}
declare const AmCharts: any;
import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/pie.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/ammap.js';
import '../../../../assets/charts/amchart/usaLow.js';
am4core.useTheme(am4themes_animated);

// dialog interface data are defined here
export interface DialogData {
  type: string;
}

@Component({
  selector: 'app-attendance-managment',
  templateUrl: './attendance-managment.component.html',
  styleUrls: [
    './attendance-managment.component.scss',
]
})
export class AttendanceManagmentComponent implements OnInit {
  type = 'In'; 
  formInput: any;
  form: any;
  public isSubmit: boolean;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {

    

  }



  /*
   Add Punch  dialog are open by this function 
  */
   InPunch() {
    const dialogRef = this.dialog.open(PunchAddEditComponent, {
      data: {
        type: 'In'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Add Punch function end
  */


  /*
   Add Punch dialog are open by this function 
  */
  OutPunch() {
    const dialogRef = this.dialog.open(PunchAddEditComponent, {
      data: {
        type: 'Out'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Add Punch  function end
  */

    
    // data save function 
    save(form: any) {
      if (!form.valid) {
        this.isSubmit = true;
        return;
      }
    }
    // function end


}






@Component({
  selector: 'app-punch-add-edit-dialog',
  templateUrl: './punch-add-edit-dialog.html',
})
export class PunchAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PunchAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = this.data.type; 
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {
      this.formInput = { };
      
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
 



@Component({
  selector: 'app-all-attendance-managment',
  templateUrl: './all-attendance-managment.component.html',
  styleUrls: [
    '../../../../assets/charts/radial/css/radial.scss'
]
})
export class AllAttendanceManagmentComponent implements OnInit {
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
    setTimeout(() => {

      let chart = am4core.create("employee-attendance-chart", am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.data = [
        {
          country: "Present",
          value: 401
        },
        {
          country: "Home Office",
          value: 200
        },
        {
          country: "Out Of Office",
          value: 300
        },
        {
          country: "Late",
          value: 165
        },
        {
          country: "Leave",
          value: 139
        },
        {
          country: "Absent",
          value: 128,
          color:"#EF9A9A"
        }
      ];
      chart.radius = am4core.percent(70);
      chart.innerRadius = am4core.percent(40);
      chart.startAngle = 180;
      chart.endAngle = 360;  
      
      let series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.category = "country";
      series.slices.template.propertyFields.fill = "color";
      
      series.slices.template.cornerRadius = 10;
      series.slices.template.innerCornerRadius = 7;
      series.slices.template.draggable = true;
      series.slices.template.inert = true;
      series.alignLabels = false;
      
      series.hiddenState.properties.startAngle = 90;
      series.hiddenState.properties.endAngle = 90;
      
      chart.legend = new am4charts.Legend();

    }, 75);
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






};
 
