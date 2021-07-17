import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'quick-access',
        short_label: 'S',
        name: 'Quick Access',
        type: 'link',
        icon: 'fa fa-fighter-jet'
      },
      {
        state: 'dashboard',
        short_label: 'S',
        name: 'Dashboard',
        type: 'link',
        icon: 'fa fa-home'
      },
      {
        state: 'company-settings',
        name: 'Company Settings',
        type: 'link',
        short_label: 'S',
        icon: 'far fa-circle',
      },
      {
        state: 'settings',
        short_label: 'M',
        name: 'System Settings',
        type: 'sub',
        icon: 'fa fa-cogs',
        children: [
         {
          state: 'department',
          name: 'Department Settings',
          type: 'link',
          short_label: 'D',
          icon: 'fa fa-angle-right',
          target: false
         },
         {
          state: 'designation',
          name: 'Designation Settings',
          type: 'link',
          short_label: 'D',
          icon: 'fa fa-angle-right',
          target: false
         },
         {
          state: 'employee-type-settings',
          name: 'Employee Type Settings',
          type: 'link',
          short_label: 'D',
          icon: 'fa fa-angle-right',
          target: false
         },
         {
          state: 'leave-type-settings',
          name: 'Leave Type Settings',
          type: 'link',
          short_label: 'D',
          icon: 'fa fa-angle-right',
          target: false
         },
         {
          state: 'holiday-schedule-settings',
          name: 'Holiday Type Settings',
          type: 'link',
          short_label: 'D',
          icon: 'fa fa-angle-right',
          target: false
         },
         {
          state: 'shift-managment-settings',
          name: 'Shift Managment Settings',
          type: 'link',
          short_label: 'D',
          icon: 'fa fa-angle-right',
          target: false
         },
        ]
      },
      {
        state: 'employee-managment',
        short_label: 'E',
        name: 'Employee Managment',
        type: 'link',
        icon: 'fa fa-users'
      },
      {
        state: 'attendance',
        short_label: 'A',
        name: 'Attendance Managment',
        type: 'sub',
        icon: 'fa fa-users',
        children: [
         {
          state: 'take-attendance',
          short_label: 'A',
          name: 'My Attendance',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
         {
          state: 'all-employee-attendance',
          short_label: 'L',
          name: 'Employee Attendance',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
        ]
      },
      {
        state: 'leave',
        short_label: 'A',
        name: 'Leave Managment',
        type: 'sub',
        icon: 'fa fa-users',
        children: [
         {
          state: 'my-leave',
          short_label: 'A',
          name: 'My Leave',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
         {
          state: 'all-employee-leaves',
          short_label: 'L',
          name: 'Employee Leave',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
        ]
      },
      {
        state: 'meeting',
        short_label: 'A',
        name: 'Meeting Managment',
        type: 'sub',
        icon: 'fa fa-users',
        children: [
         {
          state: 'my-meeting',
          short_label: 'A',
          name: 'My Meeting',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
         {
          state: 'meeting-minutes',
          short_label: 'L',
          name: 'Meeting Minutes',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
        ]
      },
      {
        state: 'visitor-managment',
        short_label: 'S',
        name: 'Visitor Managment',
        type: 'link',
        icon: 'fa fa-user'
      },
      {
        state: 'requisition',
        short_label: 'A',
        name: 'Requisition Managment',
        type: 'sub',
        icon: 'fa fa-users',
        children: [
        //  {
        //   state: 'my-requisition',
        //   short_label: 'A',
        //   name: 'My Requisition',
        //   type: 'link',
        //   icon: 'fa fa-users',
        //   target: false
        //  },
         {
          state: 'manage',
          short_label: 'L',
          name: 'Requisition Manage',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
        ]
      },
      {
        state: 'grade',
        short_label: 'A',
        name: 'Grade Managment',
        type: 'sub',
        icon: 'fa fa-users',
        children: [
         {
          state: 'manage',
          short_label: 'G',
          name: 'All Grades',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
         {
          state: 'matrix',
          short_label: 'G',
          name: 'Grades Matrix',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
        ]
      },
      {
        state: 'notice',
        short_label: 'A',
        name: 'Notice Management',
        type: 'sub',
        icon: 'fa fa-users',
        children: [
         {
          state: 'manage',
          short_label: 'G',
          name: 'Manage Notice',
          type: 'link',
          icon: 'fa fa-users',
          target: false
         },
       
        ]
      },



      // {
      //   state: 'frm-validation',
      //   short_label: 'S',
      //   name: 'Validation',
      //   type: 'link',
      //   icon: 'icon-layout-sidebar-left'
      // },


      // {
      //   state: 'data-table',
      //   short_label: 'S',
      //   name: 'Data Table',
      //   type: 'link',
      //   icon: 'icon-layout-sidebar-left'
      // },
      
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
