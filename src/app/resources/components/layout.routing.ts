import { Routes, RouterModule } from '@angular/router';
import { CompanySettingsComponent } from './company-settings/company-settings.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentSettingsComponent } from './system-settings/department-settings/department-settings.component';
import { FrmValidationComponent } from './frm-validation/frm-validation.component';
import { TblDatatableComponent } from './tbl-datatable/tbl-datatable.component';
import { DesignationSettingsComponent } from './system-settings/designation-settings/designation-settings.component';
import { EmployeeTypeSettingsComponent } from './system-settings/employee-type-settings/employee-type-settings.component';
import { LeaveTypeComponent } from './system-settings/leave-type/leave-type.component';
import { HolidayScheduleSettingsComponent } from './system-settings/holiday-schedule-settings/holiday-schedule-settings.component';
import { ShiftManagmentSettingsComponent } from './system-settings/shift-managment-settings/shift-managment-settings.component';
import { EmployeeManagmentComponent } from './employee-managment/employee-managment.component';
import { AttendanceManagmentComponent,AllAttendanceManagmentComponent } from './attendance-managment/attendance-managment.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { EmployeeLeaveManagmentComponent, LeaveManagmentComponent } from './leave-managment/leave-managment.component';
import { AdMittingMinutesComponent } from './ad-mitting-minutes/ad-mitting-minutes.component';
import { EmMittingMinutesComponent } from './em-mitting-minutes/em-mitting-minutes.component';
import { VisitorManagmentComponent } from './visitor-managment/visitor-managment.component';
import { AdRequisitionManagmentComponent } from './ad-requisition-managment/ad-requisition-managment.component';
import { GradeLevelManageComponent } from './salary-matrix/grade-level-manage/grade-level-manage.component';
import { GradeMatrixManageComponent } from './salary-matrix/grade-matrix-manage/grade-matrix-manage.component';
import { AdNoticesManagmentComponent } from './notices/ad-notices-managment/ad-notices-managment.component';
import { RoleCreateComponent, RoleEditComponent, RoleManagmentComponent } from './role-managment/role-managment.component';
import { SystemComponentsComponent } from './role-managment/system-components/system-components.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';

export const LayoutRoutes: Routes = [
  {
    path: 'quick-access',            
    component: QuickAccessComponent,
    data: {
      title: 'Quick Access',
      icon: 'fa fa-home',
      caption: '',
      status: false
    }
  },
  {
    path: 'dashboard',            
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      icon: 'fa fa-home',
      caption: '',
      status: true
    }
  },
  
  {
    path: 'company-settings',
    component: CompanySettingsComponent,
    data: {
      title: 'Company Settings',
      icon: 'fa fa-home',
      caption: '',
      status: true
    }
  },
  { 
    path: 'settings',   
    data: {
      title: 'System Settings',
    },      
    children: [
      { 
        path: 'department',            
        component: DepartmentSettingsComponent,
        data: {
          title: 'Department Settings ',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      { 
        path: 'designation',            
        component: DesignationSettingsComponent,
        data: {
          title: 'Designation Settings',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      { 
        path: 'employee-type-settings',            
        component: EmployeeTypeSettingsComponent,
        data: {
          title: 'Employee Type Settings',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      { 
        path: 'leave-type-settings',            
        component: LeaveTypeComponent,
        data: {
          title: 'Leave Type Settings',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      {
        path: 'holiday-schedule-settings',            
        component: HolidayScheduleSettingsComponent,
        data: {
          title: 'Holiday Schedule Settings',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      {
        path: 'shift-managment-settings',            
        component: ShiftManagmentSettingsComponent,
        data: {
          title: 'Shift Managment Settings',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
    ]
  },
  
  { 
    path: 'employee',   
    data: {
      title: 'Employee Managment',
    },      
    children: [
      {
        path: 'employee-managment',
        component: EmployeeManagmentComponent,
        data: {
          title: 'Employee Managment',
          icon: 'fa fa-users',
          caption: '',
          status: true
        },
      },
      
    ]
  },
  { 
    path: 'leave',   
    data: {
      title: 'Leaves Managment',
    },      
    children: [
      { 
        path: 'my-leave',      
        component: EmployeeLeaveManagmentComponent,
        data: {
          title: 'My Leaves',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      {
        path: 'all-employee-leaves',      
        component: LeaveManagmentComponent,
        data: {
          title: 'Employee Leaves',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
    ]
  },
  { 
    path: 'meeting',   
    data: {
      title: 'Meeting Managment',
    },      
    children: [
      { 
        path: 'my-meeting',      
        component: EmMittingMinutesComponent,
        data: {
          title: 'My Meeting',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      {
        path: 'meeting-minutes',      
        component: AdMittingMinutesComponent,
        data: {
          title: 'Meeting Minutes',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
    ]
  },
 
  { 
    path: 'attendance',   
    data: {
      title: 'Attendance Managment',
    },      
    children: [
      { 
        path: 'take-attendance',      
        component: AttendanceManagmentComponent,
        data: {
          title: 'My Attendance',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      { 
        path: 'all-employee-attendance',      
        component: AllAttendanceManagmentComponent,
        data: {
          title: 'Employee Attendance',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
    ]
  },
 
  {
    path: 'visitor-managment',            
    component: VisitorManagmentComponent,
    data: {
      title: 'Visitor Managment',
      icon: 'fa fa-home',
      caption: '',
      status: true
    }
  },

  { 
    path: 'requisition',   
    data: {
      title: 'Requisition Managment',
    },      
    children: [
      // { 
      //   path: 'my-requisition',      
      //   component: VisitorManagmentComponent,
      //   data: {
      //     title: 'My Requisition',
      //     icon: 'fa fa-home',
      //     caption: '',
      //     status: true
      //   }
      // },
      { 
        path: 'manage',      
        component: AdRequisitionManagmentComponent,
        data: {
          title: 'Requisition Manage',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
    ]
  },
  { 
    path: 'grade',   
    data: {
      title: 'Grade Managment',
    },      
    children: [
      { 
        path: 'manage',      
        component: GradeLevelManageComponent,
        data: {
          title: 'Grade Managment',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      { 
        path: 'matrix',      
        component: GradeMatrixManageComponent,
        data: {
          title: 'Grade Matrix',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
    ]
  },
  { 
    path: 'notice',   
    data: {
      title: 'Notice Management',
    },      
    children: [
      { 
        path: 'manage',      
        component: AdNoticesManagmentComponent,
        data: {
          title:'Notice Manage',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
     
    ]
  },


  // {
  //   path: 'visitor-managment',            
  //   component: AdRequisitionManagmentComponent,
  //   data: [
  //    {
  //     title: 'My Requisition',
  //     type: 'link',
  //     icon: 'fa fa-users',
  //     target: false
  //    },
  //    {
  //     title: 'requisition Manage',
  //     type: 'link',
  //     icon: 'fa fa-users',
  //     target: false
  //    },
  //   ]
  // },

  { 
    path: 'role',        
    children: [
      { 
        path: 'create',      
        component: RoleCreateComponent,
        data: {
          title: 'Create New Role',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      { 
        path: 'manage',      
        component: RoleManagmentComponent,
        data: {
          title: 'Role Managment',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      { 
        path: 'edit/:id',      
        component: RoleEditComponent,
        data: {
          title: 'Edit',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      { 
        path: 'components',      
        component: SystemComponentsComponent,
        data: {
          title: 'Component Managment',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
      { 
        path: 'user-managment',      
        component: UserManagmentComponent,
        data: {
          title: 'User Managment',
          icon: 'fa fa-home',
          caption: '',
          status: true
        }
      },
     
    ]
  },


  { path: 'frm-validation',        component: FrmValidationComponent },
  { path: 'data-table',            component: TblDatatableComponent }
];
