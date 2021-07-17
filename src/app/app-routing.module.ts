import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { BasicLoginComponent } from './resources/auth/basic-login/basic-login.component';
import { BasicRegComponent } from './resources/auth/basic-reg/basic-reg.component';
import { ForgotComponent } from './resources/auth/forgot/forgot.component';
import { AuthGuard } from './core_classes/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./resources/components/default.module').then(m => m.DefaultModule)
      },
     
      // {
      //   path: '**',
      //   redirectTo: 'ecommerce'
      // }
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
