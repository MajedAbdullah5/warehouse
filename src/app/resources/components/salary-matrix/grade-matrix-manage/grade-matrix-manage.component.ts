import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { DialogData } from '../../system-settings/department-settings/department-settings.component';

@Component({
  selector: 'app-grade-matrix-manage',
  templateUrl: './grade-matrix-manage.component.html',
  styleUrls: ['./grade-matrix-manage.component.scss']
})
export class GradeMatrixManageComponent implements OnInit {


  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  
    /*
     Add Leave Type  dialog are open by this function 
    */
     GradeMatrixCreate() {
      const dialogRef = this.dialog.open(GradeMatrixAddEditComponent, {
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
    EditGradeMatrix() {
      const dialogRef = this.dialog.open(GradeMatrixAddEditComponent, {
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
    DeleteGradeMatrix() {
      const dialogRef = this.dialog.open(DeleteGradeMatrixDataDialog, {});
      dialogRef.afterClosed().subscribe(result => {});
    }
    /*
     Delete leave Type function end
    */
  
  }
  
  

  
  
  /* 
    the leave   create and edit dialog form  
    start from here 
  */
  
  
  @Component({
    selector: 'app-grade-matrix-add-edit-dialog',
    templateUrl: './grade-matrix-add-edit-dialog.html',
  })
  export class GradeMatrixAddEditComponent implements OnInit {
  
    constructor(public dialogRef: MatDialogRef<GradeMatrixAddEditComponent>,
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
    selector: 'app-delete-grade-matrix-data-dialog',
    templateUrl: './delete-grade-matrix-data-dialog.html',
  })
  export class DeleteGradeMatrixDataDialog implements OnInit {
  
    constructor(public dialogRef: MatDialogRef<DeleteGradeMatrixDataDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,private dataService: DataService) { }
  
    ngOnInit(): void {}
  
  }
   /* 
   the  leave  delete dialog dialog   
    end here 
  */
