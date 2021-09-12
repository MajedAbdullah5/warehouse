import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';


// dialog interface data are defined here
export interface DialogData {
  id: any;
  company_id: any;
  name: any;
  description: any;
  switcher: any;
  operation : string;
  type : string;
}



@Component({
  selector: 'app-employee-type-settings',
  templateUrl: './employee-type-settings.component.html',
  styleUrls: ['./employee-type-settings.component.scss']
})
export class EmployeeTypeSettingsComponent implements OnInit {
  collection = [];
  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService) {}
  ngOnInit(): void {
   
    this.allDepartment();
    this.common.aClickedEvent.subscribe((data: string) => {
      this.allDepartment();
    });
  }



  allDepartment() {
    const postdatet = {
      'token': this.common.mycookie.token,
    }

    this.dataService.post(postdatet, 'emptmanagment/all_empt_list')
      .subscribe(data => {
        this.collection = data.list;
        // console.log(this.depcollection);
      });
  }
















  /*
   Add Employee Type  dialog are open by this function 
  */
   CreateDialog() {
    const dialogRef = this.dialog.open(EmployeeTypeAddEditComponent, {
      data: {
        id: '',
        company_id: '',
        name: '',
        description: '',
        switcher: '',
        operation : 'create'
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
  EditDialog(id) {
    const dialogRef = this.dialog.open(EmployeeTypeAddEditComponent, {
      data: {
        id: id,
        company_id: '',
        name: '',
        description: '',
        switcher: '',
        operation : 'update'
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService) { }
    type  = this.data.operation ; 
  formInput: any;
  form: any;
  public isSubmit: boolean;
  allcompanyList = [];
  ngOnInit() {
    this.formInput = {
      id: this.data.id,
      token: this.common.mycookie.token,
      company_id: this.data.company_id,
      name: this.data.name,
      description: this.data.description,
      created_by: this.common.mycookie.id,
      operation : this.data.operation ,
    };
    this.allcompanies();
    this.singledeg(this.data.id);
  }




  singledeg(id) {
    const postdatet = {
      'token': this.common.mycookie.token,
      'id': id
    }
    if (id) {
      this.dataService.post(postdatet, 'emptmanagment/id_wise_type')
        .subscribe(data => {
          let dep = data.list[0];
          console.log(dep);
          this.formInput.company_id = dep.company_id;
          this.formInput.name = dep.emp_type_name;
          this.formInput.description = dep.emp_type_description;
        });

    }
  }







  allcompanies() {
    const postdatet = {
      'token': this.common.mycookie.token,
    }
    this.dataService.post(postdatet, 'emptmanagment/all_company_list')
      .subscribe(data => {
        this.allcompanyList = data.list;
      });
  }


  // data save function 
  save(form: any) {
    console.log(this.formInput);
    if (form.valid) {
      this.isSubmit = true;
      this.dataService.post(this.formInput, 'emptmanagment/create_empt')
      .subscribe(data => {
        console.log(data);
        this.dialogRef.close();
        this.common.AClicked("componenet clicked");
        // this.allcompanyList = data.list;
      });
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



