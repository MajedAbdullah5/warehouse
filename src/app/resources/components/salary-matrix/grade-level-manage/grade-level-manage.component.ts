import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


export interface DialogData {
  type : string;
}

@Component({
  selector: 'app-grade-level-manage',
  templateUrl: './grade-level-manage.component.html',
  styleUrls: ['./grade-level-manage.component.scss']
})
export class GradeLevelManageComponent implements OnInit {


  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  /*
    requisition details are open by this function 
  */
    GradeDetails() {
      const dialogRef = this.dialog.open(GradeDetailsDialog, {});
      dialogRef.afterClosed().subscribe(result => {});
    }
    /*
      Meeting details function end
    */
    
  
      
  
  
    /*
     Add Leave Type  dialog are open by this function 
    */
     GradeCreate() {
      const dialogRef = this.dialog.open(GradeAddEditComponent, {
        data: {
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
    EditGrade() {
      const dialogRef = this.dialog.open(GradeAddEditComponent, {
        data: {
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
    DeleteGrade() {
      const dialogRef = this.dialog.open(DeleteGradeDataDialog, {});
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
    selector: 'app-grade-details-dialog',
    templateUrl: './grade-details-dialog.html',
  })
  export class GradeDetailsDialog implements OnInit {
  
    constructor(public dialogRef: MatDialogRef<GradeDetailsDialog>,
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
    selector: 'app-grade-add-edit-dialog',
    templateUrl: './grade-add-edit-dialog.html',
  })
  export class GradeAddEditComponent implements OnInit {
  
    constructor(public dialogRef: MatDialogRef<GradeAddEditComponent>,
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
    selector: 'app-delete-grade-data-dialog',
    templateUrl: './delete-grade-data-dialog.html',
  })
  export class DeleteGradeDataDialog implements OnInit {
  
    constructor(public dialogRef: MatDialogRef<DeleteGradeDataDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
  
    ngOnInit(): void {}
  
  }
   /* 
   the  leave  delete dialog dialog   
    end here 
  */
