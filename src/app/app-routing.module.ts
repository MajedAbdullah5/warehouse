import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { BasicLoginComponent } from './resources/auth/login/login.component';
import { BasicRegComponent } from './resources/auth/registation/registation.component';
import { ForgotComponent } from './resources/auth/forgot/forgot.component';
import { AuthGuard } from './core_classes/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,   
    children: [      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./resources/dashboard/dashboard.module').then(m => m.DashboardModule)
        // loadChildren: () => import('./resources/components/admin.module').then(m => m.AdminModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: BasicLoginComponent
      },
      {
        path: 'registration',
        component: BasicRegComponent
      },
      {
        path: 'forgot-password',
        component: ForgotComponent
      },
       {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
 // exports: [RouterModule]
  exports: []
})
export class AppRoutingModule { }
