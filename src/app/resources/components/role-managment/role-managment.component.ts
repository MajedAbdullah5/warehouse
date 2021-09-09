import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';
import { ThemePalette } from '@angular/material/core';
import { data } from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';

export interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
}




// dialog interface data are defined here
export interface DialogData {
    companyname: any;
    roleid: any;
    switcher: any;
    type: string;
}
class DataTablesResponse {
    data: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
}


@Component({
    selector: 'app-role-managment',
    templateUrl: './role-managment.component.html',
    styleUrls: ['./role-managment.component.scss']
})
export class RoleManagmentComponent implements OnInit {
    disabled = false;
    dataOrderBy = false;
    collection = [];
    totalitem;
    pagereqest = 1;
    itemPerPage = '15';
    searchValues: String = '';
    tokenId;
    constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService) { }

    ngOnInit(): void {
        this.tokenId = this.common.mycookie.token;
        console.log(this.common.mycookie);
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

        this.dataService.post(postdatet, 'rolemanagment/all_role_list')
            .subscribe(data => {
                console.log(data);
                this.collection = data.result;
            });
    }

    /*
     Delete Role dialog are open by this function 
    */
    deleteDialog($id) {
        const dialogRef = this.dialog.open(DeleteRoleDataDialog, {
            data: {
                id: $id,
                token: this.common.mycookie.token
            }
        });
        dialogRef.afterClosed().subscribe(result => { });
    }
    /*
     Delete Role function end
    */

}







@Component({
    selector: 'app-role-create',
    templateUrl: './role-create.component.html',
    styleUrls: ['./role-managment.component.scss']
})
export class RoleCreateComponent implements OnInit {
    disabled = false;
    dataOrderBy = false;
    compcollection = [];
    totalitem;
    pagereqest = 1;
    itemPerPage = '15';
    searchValues: String = '';
    tokenId;
    selectCompany='';
    roleName='';
    operation = [];
    onsubmit = 0;
    constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService,  private router: Router) { }

    ngOnInit(): void {
        this.tokenId = this.common.mycookie.token;
    }

    getcomponent(e) {
        this.showcomponents();
    }

    showcomponents() {
        let orderBy: string;
        const postdatet = {
            'token': this.tokenId,
            'company_id': this.selectCompany
        }

        this.allcomponents(postdatet);
    }

 

    allcomponents(postdatet) {
        this.dataService.post(postdatet, 'rolemanagment/company_wise_component_list')
            .subscribe(data => {
                console.log(data);
                this.compcollection = data.list;


                this.compcollection.forEach((element,i) => {                    
                    let id = element.id;
                   
                    let op = {
                        "id":id,
                        "company_id":element.company_id,
                        "role_permit_create":element.permit_create,
                        "role_permit_view":element.permit_view,
                        "role_permit_edit":element.permit_edit,
                        "role_permit_delete":element.permit_delete,
                    };
                    // let options = {};
                    // element.options.split(',').forEach(e => {
                    //      options["role_permit_"+e.trim()] = false;
                    // });
                    //  op['options'] = options;
                    //  console.log(i);
                     this.operation.push(op);
                });


                // this.compcollection.forEach((element,i) => {
                //     let id = element.id;
                //     let op = {"id":id};
                //     let options = {};
                //     element.options.split(',').forEach(e => {
                //          options[e.trim()] = false;
                //     });
                //      op['options'] = options;
                //      console.log(i);
                //      this.operation.push(op);
                // });
                // console.log(this.operation,"operation");
            });
    } 


    saverole(){
        this.onsubmit = 1;
        const data = {
            "token" :this.tokenId,
            "operation" :this.operation,
            "company_id" :this.selectCompany,
            "role_name" :this.roleName,
        }
        console.log(data);
        this.dataService.post(data, 'rolemanagment/create_role')
        .subscribe(res => {
            this.onsubmit = 0;
            if(res.response == 400){
                alert(res.result);
            }else{
                this.router.navigate(['/role/manage']);
            }

        });
    }


    someSelect(i){
        console.log(i,'ss');
    }
    // updateAllComplete(e,id,type){
    //     const ar = this.operation[id].options;
    //     console.log(this.compcollection[id]+".permit_"+type);
    //     ar[type.trim()] = e.checked;
    // }

    checkoption(e,id,name){
        const ar = this.operation[id];
        if(e.checked){
            ar[name.trim()] = 1;
        }else{
            ar[name.trim()] = 0;
        }
        console.log(ar);
       
    }
}


@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-managment.component.scss']
})
export class RoleEditComponent implements OnInit {
    disabled = false;
    dataOrderBy = false;
    compcollection = [];
    rolewisecompcollection = [];
    totalitem;
    pagereqest = 1;
    itemPerPage = '15';
    searchValues: String = '';
    tokenId;
    selectCompany='';
    roleName='';
    operation = [];
    onsubmit = 0;
    constructor(private fb: FormBuilder, public dialog: MatDialog, private dataService: DataService, public common: CommonService,  private router: Router,private activeroute: ActivatedRoute) { }

    ngOnInit(): void {
        this.tokenId = this.common.mycookie.token;
        // this.roleName = this.common.mycookie.rolepermissions[0].role_name;
        // console.log(this.common.mycookie.roleid,"on");
        
        this.showcomponents();
    }

    getcomponent(e) {
        this.showcomponents();
    }

    showcomponents() {
        let orderBy: string;
        const postdatet = {
            'token': this.common.mycookie.token,
            'company_id':  this.activeroute.snapshot.paramMap.get("company"),
            'roleid': this.activeroute.snapshot.paramMap.get("id"),
        }
        // console.log(postdatet,"postdatet edit");
        this.allcomponents(postdatet);
    }

 

    allcomponents(postdatet) {
        this.dataService.post(postdatet, 'rolemanagment/edit_role_list')
            .subscribe(data => {
                console.log(data);
                this.compcollection = data.list;
                this.rolewisecompcollection = data.rolewise;
                this.compcollection.forEach((element,i) => {                    
                    let id = element.id;
                    let permit_row_id = '';
                    if( element.permit_row_id != undefined){
                         permit_row_id =element.permit_row_id;
                    }
                    let op = {
                        "id":id,
                        "permit_row_id":permit_row_id,
                        "company_id":element.company_id,
                        "role_permit_create":element.permit_create,
                        "role_permit_view":element.permit_view,
                        "role_permit_edit":element.permit_edit,
                        "role_permit_delete":element.permit_delete,
                    };
                    // let options = {};
                    // element.options.split(',').forEach(e => {
                    //      options["role_permit_"+e.trim()] = false;
                    // });
                    //  op['options'] = options;
                    //  console.log(i);
                     this.operation.push(op);
                });
                // console.log(this.operation);
            });
    } 


    saverole(){
        this.onsubmit = 1;
        const data = {
            "token" :this.tokenId,
            "operation" :this.operation,
            "company_id" :this.activeroute.snapshot.paramMap.get("company"),
            "role_name" :this.roleName,
            "role_id" :this.activeroute.snapshot.paramMap.get("id"),
        }
        console.log(data);
        this.dataService.post(data, 'rolemanagment/edit_role')
        .subscribe(res => {
            this.onsubmit = 0;
            if(res.response == 400){
                alert(res.result);
            }else{
                this.router.navigate(['/role/manage']);
            }

        });
    }


    someSelect(i){
        console.log(i,'ss');
    }

    checkoption(e,id,name){
        const ar = this.operation[id];
        if(e.checked){
            ar[name.trim()] = 1;
        }else{
            ar[name.trim()] = 0;
        }
        console.log(ar);
       
    }

}




@Component({
    selector: 'delete-role-data-dialog',
    templateUrl: 'delete-role-data-dialog.html',
})
export class DeleteRoleDataDialog {
    constructor(public dialogRef: MatDialogRef<DeleteRoleDataDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private dataService: DataService, public common: CommonService) { }
    
    ngOnInit() { }
    delete() {
        // console.log(this.data);
        this.dataService.post(this.data, 'rolemanagment/delete_role')
            .subscribe(res => {
                this.dialogRef.close();
                this.common.AClicked("componenet clicked");
            });

    }
}
