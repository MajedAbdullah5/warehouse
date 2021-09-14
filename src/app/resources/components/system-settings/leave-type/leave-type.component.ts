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
    operation: string;
    type: string;
}

@Component({
    selector: 'app-leave-type',
    templateUrl: './leave-type.component.html',
    styleUrls: ['./leave-type.component.scss']
})
export class LeaveTypeComponent implements OnInit {
    collection = [];

    pagereqest = 1;
    itemPerPage = '15';
    totalitem = 0;
    itemSearch = '';

    // constructor
    constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService) { }

    disabled = false;
    ngOnInit(): void {
        this.all_initialData();
        this.common.aClickedEvent.subscribe((data: string) => {
            this.all_initialData();
        });
    }

    all_initialData() {
        const postdatet = {
            'token': this.common.mycookie.token,
            'rowperpage': this.itemPerPage,
            'pagereqest': this.pagereqest,
            'search': this.itemSearch,
        }
        this.allDepartment(postdatet);
    }



    allDepartment(postdatet) {

        this.dataService.post(postdatet, 'leavetypemanagment/all')
            .subscribe(data => {
                console.log(data);
                this.collection = data.list;
                this.totalitem = data.totalitem;
                // console.log(this.depcollection);
            });
    }

    getSL(i) {
        return (Number(this.itemPerPage) * (Number(this.pagereqest) - 1)) + i
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
     Add Leave Type  dialog are open by this function 
    */
    CreateDialog() {
        const dialogRef = this.dialog.open(LeaveTypeAddEditComponent, {
            data: {
                id: '',
                company_id: '',
                name: '',
                description: '',
                switcher: '',
                operation: 'create'
            }
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
    /*
      Add Leave Type  function end
    */




    /*
     Edit Leave Type  dialog are open by this function 
    */
    EditDialog(id) {
        const dialogRef = this.dialog.open(LeaveTypeAddEditComponent, {
            data: {
                id: id,
                company_id: '',
                name: '',
                description: '',
                switcher:'',
                operation : 'update'
            }
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
    /*
    Edit department function end
   */





    /*
     Delete Employee Type dialog are open by this function 
    */
    deleteDialog() {
        const dialogRef = this.dialog.open(DeleteLeaveTypeDataDialog, {});
        dialogRef.afterClosed().subscribe(result => { });
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
    selector: 'app-leave-type-add-edit-dialog',
    templateUrl: './leave-type-add-edit-dialog.html',
})
export class LeaveTypeAddEditComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<LeaveTypeAddEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private dataService: DataService, public common: CommonService) { }
    type = this.data.operation;
    formInput: any;
    form: any;
    public isSubmit: boolean;
    allcompanyList = [];
    ngOnInit() {
        this.allcompanies();
        this.formInput = {  
            id: this.data.id,
            token: this.common.mycookie.token,
            created_by: this.common.mycookie.id,
            company_id: this.data.company_id,
            name: this.data.name,
            description: this.data.description,
            operation: this.data.operation,
        };
        this.find(this.data.id);
    }



    find(id) {
        const postdatet = {
            'token':this.common.mycookie.token,
            'id': id
        }
        if (id) {
          this.dataService.post(postdatet, 'leavetypemanagment/findById')
            .subscribe(res => {
              let data = res.list[0];
              this.formInput.company_id = data.company_id;
              this.formInput.name = data.name;
              this.formInput.description = data.description;
            });
    
        }
      }
    

      allcompanies() {
        const postdatet = {
          'token': this.common.mycookie.token,
        }
        this.dataService.post(postdatet, 'leavetypemanagment/companies')
          .subscribe(data => {
            this.allcompanyList = data.list;
          });
      }
    


    // data save function 
    save(form: any) {
        if (form.valid) {
            this.isSubmit = true;
            console.log(this.formInput);
            this.dataService.post(this.formInput, 'leavetypemanagment/insert')
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
  the  leave Type  delete dialog 
  start from here 
*/


@Component({
    selector: 'app-delete-leave-type-data-dialog',
    templateUrl: './delete-leave-type-data-dialog.html',
})
export class DeleteLeaveTypeDataDialog implements OnInit {

    constructor(public dialogRef: MatDialogRef<DeleteLeaveTypeDataDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private dataService: DataService) { }

    ngOnInit(): void { }

}
 /*
the  LEave Type  delete dialog dialog
end here
*/



