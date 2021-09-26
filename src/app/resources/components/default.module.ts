import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DefaultRoutingModule } from './default-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ChartModule } from 'angular2-chartjs';
import { LayoutRoutes } from './layout.routing';
import { CMaterialModule } from '../../modules/c-material/c-material.module'

import { DashboardComponent } from './dashboard/dashboard.component';
import { FrmValidationComponent } from './frm-validation/frm-validation.component';
import { TblDatatableComponent } from './tbl-datatable/tbl-datatable.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { DeleteDepartmentDataDialog, DepartmentSettingsComponent,DialogContentExampleDialog } from './system-settings/department-settings/department-settings.component';
import { MatDialogModule } from '@angular/material/dialog';
import {  DesignationSettingsComponent, DesignationEditDialog, DeleteDesignationDataDialog } from './system-settings/designation-settings/designation-settings.component';
import { EmployeeTypeSettingsComponent, EmployeeTypeAddEditComponent, DeleteEmployeeTypeDataDialog } from './system-settings/employee-type-settings/employee-type-settings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LeaveTypeAddEditComponent, LeaveTypeComponent,DeleteLeaveTypeDataDialog } from './system-settings/leave-type/leave-type.component';
import { DeleteHolidayScheduleDataDialog, HolidayScheduleAddEditComponent, HolidayScheduleSettingsComponent } from './system-settings/holiday-schedule-settings/holiday-schedule-settings.component';
import { ShiftManagmentSettingsComponent, DeleteShiftDataDialog, ShiftAddEditComponent } from './system-settings/shift-managment-settings/shift-managment-settings.component';
import { DeleteEducationDataDialog, DeleteExparienceDataDialog, EducationAddEditComponent, EmployeeManagmentComponent, ExparienceAddEditComponent } from './employee-managment/employee-managment.component';
import { AllAttendanceManagmentComponent, AttendanceManagmentComponent, PunchAddEditComponent } from './attendance-managment/attendance-managment.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { DeleteLeaveDataDialog, EmployeeLeaveManagmentComponent, LeaveAddEditComponent, LeaveManagmentComponent, LeaveStatusChangeComponent } from './leave-managment/leave-managment.component';
import { AdMittingMinutesComponent, DeleteMeetingDataDialog, MeetingAddEditDialog, MeetingDetailsDialog } from './ad-mitting-minutes/ad-mitting-minutes.component';
import { EmMeetingDetailsDialog, EmMittingMinutesComponent } from './em-mitting-minutes/em-mitting-minutes.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DeleteVisitorDataDialog, VisitorAddEditComponent, VisitorManagmentComponent } from './visitor-managment/visitor-managment.component';
import { AdrequisitionDetailsDialog, AdRequisitionManagmentComponent, DeleteRequisitionDataDialog, RequisitionAddEditComponent } from './ad-requisition-managment/ad-requisition-managment.component';
import { DeleteGradeDataDialog, GradeAddEditComponent, GradeDetailsDialog, GradeLevelManageComponent } from './salary-matrix/grade-level-manage/grade-level-manage.component';
import { DeleteGradeMatrixDataDialog, GradeMatrixAddEditComponent, GradeMatrixManageComponent } from './salary-matrix/grade-matrix-manage/grade-matrix-manage.component';
import { AdNoticesManagmentComponent, DeleteNoticesDataDialog, NoticesAddEditComponent } from './notices/ad-notices-managment/ad-notices-managment.component';
import { EmNoticesBoardComponent } from './notices/em-notices-board/em-notices-board.component';
import { DeleteRoleDataDialog, RoleCreateComponent, RoleEditComponent, RoleManagmentComponent } from './role-managment/role-managment.component';
import { ComponentAddEditComponent, DeleteComponentDataDialog, SystemComponentsComponent } from './role-managment/system-components/system-components.component';
import { DataTablesModule } from 'angular-datatables';
import { AddUserDialogDialog, UserManagmentComponent, UserRoleEditComponent } from './user-managment/user-managment.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {ManageCompanyComponent} from './manage-company/manage-company.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {TinymceModule} from 'angular2-tinymce';
import { ManageBrandComponent } from './manage-brand/manage-brand.component';

// import {NgxPaginationModule} from 'ngx-pagination';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    DefaultRoutingModule,
    RouterModule.forChild(LayoutRoutes),
    SharedModule,
    ChartModule,
    CMaterialModule,
    MatDialogModule,
    MatSlideToggleModule,
    FullCalendarModule,
    DataTablesModule,
    NgxPaginationModule,
    EditorModule,
    TinymceModule
  ],
  declarations: [
    DefaultComponent,
    DashboardComponent,
    FrmValidationComponent,
    TblDatatableComponent,
    CompanySettingsComponent,
    CompanyProfileComponent,
    DepartmentSettingsComponent,
    DialogContentExampleDialog,
    DesignationSettingsComponent,
    DesignationEditDialog,
    DeleteDesignationDataDialog,
    DeleteDepartmentDataDialog,
    EmployeeTypeSettingsComponent,
    EmployeeTypeAddEditComponent,
    DeleteEmployeeTypeDataDialog,
    LeaveTypeComponent,
    LeaveTypeAddEditComponent,
    DeleteLeaveTypeDataDialog,
    HolidayScheduleSettingsComponent,
    HolidayScheduleAddEditComponent,
    DeleteHolidayScheduleDataDialog,
    ShiftManagmentSettingsComponent,
    ShiftAddEditComponent,
    DeleteShiftDataDialog,
    EmployeeManagmentComponent,
    ExparienceAddEditComponent,
    DeleteExparienceDataDialog,
    EducationAddEditComponent,
    DeleteEducationDataDialog,
    AttendanceManagmentComponent,
    PunchAddEditComponent,
    AllAttendanceManagmentComponent,
    QuickAccessComponent,
    LeaveManagmentComponent,
    LeaveStatusChangeComponent,
    EmployeeLeaveManagmentComponent,
    LeaveAddEditComponent,
    DeleteLeaveDataDialog,
    AdMittingMinutesComponent,
    EmMittingMinutesComponent,
    MeetingAddEditDialog,
    DeleteMeetingDataDialog,
    MeetingDetailsDialog,
    EmMeetingDetailsDialog,
    VisitorManagmentComponent,
    VisitorAddEditComponent,
    DeleteVisitorDataDialog,
    AdRequisitionManagmentComponent,
    AdrequisitionDetailsDialog,
    RequisitionAddEditComponent,
    DeleteRequisitionDataDialog,
    GradeLevelManageComponent,
    GradeAddEditComponent,
    GradeDetailsDialog,
    DeleteGradeDataDialog,
    GradeMatrixManageComponent,
    DeleteGradeMatrixDataDialog,
    GradeMatrixAddEditComponent,
    AdNoticesManagmentComponent,
    EmNoticesBoardComponent,
    NoticesAddEditComponent,
    DeleteNoticesDataDialog,
    RoleManagmentComponent,
    DeleteRoleDataDialog,
    SystemComponentsComponent,
    DeleteComponentDataDialog,
    ComponentAddEditComponent,
    RoleCreateComponent,
    RoleEditComponent,
    UserManagmentComponent,
    AddUserDialogDialog,
    UserRoleEditComponent,
    ManageCompanyComponent,
    ManageBrandComponent
  ]
})

export class DefaultModule { }
