import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  selector: 'app-designation-settings',
  templateUrl: './designation-settings.component.html',
  styleUrls: ['./designation-settings.component.scss']
})
export class DesignationSettingsComponent implements OnInit {

  form: any;
  public isSubmit: boolean;
  loading = false;
  errorMessage = "";
  depcollection = [];
//pagination start

  pagereqest = 1;
  itemPerPage = '15';
  totalitem=0;
  itemSearch = '';

//end pagination
  // constructor
  constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService) {}
  ngOnInit(): void {
   
    this.all_initialData();
    this.common.aClickedEvent.subscribe((data: string) => {
      this.all_initialData();
    });
  }



  allDepartment(postdatet) {


    this.dataService.post(postdatet, 'degmanagment/all_department_list')
      .subscribe(data => {
        this.depcollection = data.list;
        this.totalitem = data.totalitem;
        // console.log(this.depcollection);
      });
  }

  
  all_initialData() {

    const postdatet = {
      'token': this.common.mycookie.token,
      'rowperpage': this.itemPerPage,
      'pagereqest':  this.pagereqest,
      'search':  this.itemSearch
    }
    this.allDepartment(postdatet);
  
   }

  /*
  server side comon scription
  */

  getSL(i) {
    return ( Number(this.itemPerPage) * ( Number(this.pagereqest) - 1 ) ) + i
  }


  changedPageItem(sevent) {
  
    this.pagereqest = 1;
    this.all_initialData();
  }

  pageChange(newPage: number) {
    this.pagereqest = newPage;
    this.all_initialData();

  }
  
  itemSearchChange(value) {
    this.itemSearch = value;
    this.all_initialData();
  }

  /*
   Add designation dialog are open by this function 
  */
   openDialog() {
    const dialogRef = this.dialog.open(DesignationEditDialog, {
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
    Add designation function end
  */
  




  /*
   Edit designation dialog are open by this function 
  */
   EditDialog(id) {
    const dialogRef = this.dialog.open(DesignationEditDialog, {
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
      this.dataService.post(postdatet, 'degmanagment/id_wise_desg')
        .subscribe(data => {
          let dep = data.list[0];
          console.log(dep);
          this.formInput.company_id = dep.company_id;
          this.formInput.name = dep.desg_name;
          this.formInput.description = dep.desg_description;
        });

    }
  }







  allcompanies() {
    const postdatet = {
      'token': this.common.mycookie.token,
    }
    this.dataService.post(postdatet, 'degmanagment/all_company_list')
      .subscribe(data => {
        this.allcompanyList = data.list;
      });
  }


  // data save function 
  save(form: any) {
    console.log(this.formInput);
    if (form.valid) {
      this.isSubmit = true;
      this.dataService.post(this.formInput, 'degmanagment/create_dep')
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