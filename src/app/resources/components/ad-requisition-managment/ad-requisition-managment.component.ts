import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


// export interface State {
//   profile_pic: string;
//   name: string;
//   designation: string;
// }

export interface DialogData {
  type : string;
}

@Component({
  selector: 'app-ad-requisition-managment',
  templateUrl: './ad-requisition-managment.component.html',
  styleUrls: ['./ad-requisition-managment.component.scss']
})
export class AdRequisitionManagmentComponent implements OnInit {
  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  public isSubmit: boolean;
  campaignOne = {
    start: null,
    end: null
  };
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
    requisition details are open by this function 
  */
    ReqDetails() {
    const dialogRef = this.dialog.open(AdrequisitionDetailsDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
    Meeting details function end
  */
  

    


  /*
   Add Leave Type  dialog are open by this function 
  */
   ReqCreate() {
    const dialogRef = this.dialog.open(RequisitionAddEditComponent, {
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




//   /*
//    Edit Leave   dialog are open by this function 
//   */
  EditReq() {
    const dialogRef = this.dialog.open(RequisitionAddEditComponent, {
      data: {
        companyname: '',
        leaveName: '',
        limit: '',
        type: 'edit'
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  } 
//   /*
//   Edit leave function end
//  */
  



  
  /*
   Delete leave dialog are open by this function 
  */
  DeleteReq() {
    const dialogRef = this.dialog.open(DeleteRequisitionDataDialog, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  /*
   Delete leave Type function end
  */

}


/* 
  the  Meeting  Details dialog 
  start from here 
*/



@Component({
  selector: 'app-ad-requisition-details-dialog',
  templateUrl: './ad-requisition-details-dialog.html',
})
export class AdrequisitionDetailsDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdrequisitionDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    ngOnInit() {}
  


}
 


 /* 
 the  Meeting  Details dialog   
  end here 
*/



/* 
  the leave   create and edit dialog form  
  start from here 
*/


@Component({
  selector: 'app-requisition-add-edit-dialog',
  templateUrl: './requisition-add-edit-dialog.html',
})
export class RequisitionAddEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RequisitionAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
    type = this.data.type; 
    formInput: any;
    form: any;
    public isSubmit: boolean;

    ngOnInit() {}
  
  

}
 



/* 
  the  leave  delete dialog 
  start from here 
*/


@Component({
  selector: 'app-delete-requisition-data-dialog',
  templateUrl: './delete-requisition-data-dialog.html',
})
export class DeleteRequisitionDataDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteRequisitionDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }

  ngOnInit(): void {}

}
 /* 
 the  leave  delete dialog dialog   
  end here 
*/