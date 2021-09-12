import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { CommonService } from 'src/app/services/common.service';

// dialog interface data are defined here
export interface DialogData {
  id: any;
  company_id: any;
  name: any;
  description: any;
  switcher: any;
  operation : string;
}


@Component({
  selector: 'app-department-settings',
  templateUrl: './department-settings.component.html',
  styleUrls: ['./department-settings.component.scss']
})
export class DepartmentSettingsComponent implements OnInit {

  loading = true;
  errorMessage = "";
  depcollection = [];
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

    this.dataService.post(postdatet, 'depmanagment/all_department_list')
      .subscribe(data => {
        this.depcollection = data.list;
        console.log(this.depcollection);
      });
  }



  


  /*
   Add department dialog are open by this function 
  */
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
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
    Add department function end
  */
  



  /*
   Edit department dialog are open by this function 
  */
  EditDialog(id) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        id: id,
        company_id: '',
        name: '',
        description: '',
        switcher:'',
        operation : 'update'
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
    this.singledep(this.data.id);
  }




  singledep(id) {
    const postdatet = {
      'token': this.common.mycookie.token,
      'id': id
    }
    if (id) {
      this.dataService.post(postdatet, 'depmanagment/id_wise_dep')
        .subscribe(data => {
          let dep = data.list[0];
          console.log(dep);
          this.formInput.company_id = dep.company_id;
          this.formInput.name = dep.dep_name;
          this.formInput.description = dep.dep_description;
        });

    }
  }







  allcompanies() {
    const postdatet = {
      'token': this.common.mycookie.token,
    }
    this.dataService.post(postdatet, 'depmanagment/all_company_list')
      .subscribe(data => {
        this.allcompanyList = data.list;
      });
  }


  // data save function 
  save(form: any) {
    console.log(this.formInput);
    if (form.valid) {
      this.isSubmit = true;
      this.dataService.post(this.formInput, 'depmanagment/create_dep')
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