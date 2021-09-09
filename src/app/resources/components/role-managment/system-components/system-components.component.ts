import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';
// import { DialogData } from '../../system-settings/department-settings/department-settings.component';

// dialog interface data are defined here
export interface DialogData {
    companyname: any;
    componentname: any;
    component: any;
    componentpath: any;
    componentviewall: any;
    componentcreate: any;
    componentedit: any;
    componentdelete: any;
    type: string;
}
export interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
}
@Component({
    selector: 'app-system-components',
    templateUrl: './system-components.component.html',
    styleUrls: ['./system-components.component.scss']
})
export class SystemComponentsComponent implements OnInit {
    disabled = false;
    dataOrderBy = false;
    collection = [];
    totalitem;
    pagereqest = 1;
    itemPerPage = '15';
    searchValues: String = '';
    constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService) { }
    tokenId = this.common.mycookie.token;


    ngOnInit(): void {
        this.tokenId = this.common.mycookie.token;
        this.showPackages();
        this.common.aClickedEvent.subscribe((data:string)=>{
            this.showPackages();
        });
    }


    showPackages() {
        let orderBy: string;
        if (this.dataOrderBy === true) {
            orderBy = 'DESC';
        } else {
            orderBy = 'ASC';
        }
        const postdatet = {
            'token': this.tokenId,
            'rowperpage': this.itemPerPage,
            'pagereqest': this.pagereqest,
            'order': orderBy,
            'search': this.searchValues
        }
        this.allcomponents(postdatet);
    }



    allcomponents(postdatet) {

        this.dataService.post(postdatet, 'rolemanagment/all_component_list')
            .subscribe(data => {
                this.collection = data.list;
            });
    }


    CreateDialog() {
        const dialogRef = this.dialog.open(ComponentAddEditComponent, {
            data: {
                switcher: '',
                type: 'insert'
            }
        });
        dialogRef.afterClosed().subscribe(result => { });
    }


    deleteDialog($id) {
        const dialogRef = this.dialog.open(DeleteComponentDataDialog, {
            data: {
                id: $id,
                token: this.common.mycookie.token
            }
        });
        dialogRef.afterClosed().subscribe(result => { });
    }

    changestatus(id,cstatus) {
       const data = {
            token: this.tokenId,
            id: id,
            cstatus : cstatus
        }
        // console.log(data);
        
        this.dataService.post(data, 'rolemanagment/change_component_status')
        .subscribe(res => {
            this.showPackages();
        });
    }
}




@Component({
    selector: 'app-component-add-edit-dialog',
    templateUrl: './component-add-edit-dialog.html',
})
export class ComponentAddEditComponent implements OnInit {
    componentcrudform: FormGroup;
    companyname: any;
    componentname: any;
    component: any;
    componentpath: any;
    componentaction: any;
    componentviewall: any;
    componentcreate: any;
    componentedit: any;
    componentdelete: any;

    constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ComponentAddEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private dataService: DataService, public common: CommonService) {
        this.buildLoginForm()
    }
    tokenId = this.common.mycookie.token;
    type = this.data.type;
    formInput: any;
    form: any;
    public isSubmit: boolean;

    companyList;
  

    ngOnInit() {
        this.companyname = this.data.companyname,
        this.componentname = this.data.componentname,
        this.component = this.data.component,
        this.componentpath = this.data.companyname,
        this.componentviewall = this.data.componentviewall,
        this.componentcreate = this.data.componentcreate,
        this.componentedit = this.data.componentedit,
        this.componentdelete = this.data.componentdelete;
        this.getCompanies();
         
    }



    getCompanies(){
        const data = {
            "token" :this.tokenId
        }
        console.log(data);
        this.dataService.post(data, 'rolemanagment/get_companies')
        .subscribe(res => {
            this.companyList = res.list
        });
    }

    buildLoginForm() {
        this.componentcrudform = this.fb.group({
            companyname: this.fb.control('', [Validators.required]),
            componentname: this.fb.control('', [Validators.required]),
            component: this.fb.control('', [Validators.required]),
            componentpath: this.fb.control('', [Validators.required]),
            componentcreate: this.fb.control('', [Validators.required]),
            componentviewall: this.fb.control('', [Validators.required]),
            componentedit: this.fb.control('', [Validators.required]),
            componentdelete: this.fb.control('', [Validators.required]),
        });

        this.companyname = this.componentcrudform.get('companyname') as FormControl;
        this.componentname = this.componentcrudform.get('componentname') as FormControl;
        this.component = this.componentcrudform.get('component') as FormControl;
        this.componentpath = this.componentcrudform.get('componentpath') as FormControl;
        this.componentviewall = this.componentcrudform.get('componentviewall') as FormControl;
        this.componentcreate = this.componentcrudform.get('componentcreate') as FormControl;
        this.componentedit = this.componentcrudform.get('componentedit') as FormControl;
        this.componentdelete = this.componentcrudform.get('componentdelete') as FormControl;
    }



    // data save function 
    submitForm() {
        this.componentcrudform.value['token'] = this.common.mycookie.token;
        this.componentcrudform.value['operation'] = 'create';
        this.dataService.post(this.componentcrudform.value, 'rolemanagment/create_component')
            .subscribe(data => {
                console.log(data);
                this.dialogRef.close();
                this.common.AClicked("componenet clicked");
            });

    }
    // function end


}


/* 
  the  Employee Type  create and edit dialog form  
  start from here 
*/

@Component({
    selector: 'delete-component-data-dialog',
    templateUrl: 'delete-component-data-dialog.html',
})
export class DeleteComponentDataDialog {
    constructor(public dialogRef: MatDialogRef<DeleteComponentDataDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private dataService: DataService, public common: CommonService) { }
      
    ngOnInit() {}
    delete() {
        this.dataService.post(this.data, 'rolemanagment/delete_component')
            .subscribe(data => {                
                this.dialogRef.close();
                this.common.AClicked("componenet clicked");
            });

    }
}