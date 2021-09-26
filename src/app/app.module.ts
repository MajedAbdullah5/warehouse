import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuItems } from './shared/menu-items/menu-items';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CMaterialModule } from './modules/c-material/c-material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataService } from './services/data.service';
import { AuthGuard } from './core_classes/auth-guard';
import { AppRole } from './core_classes/app-role';
import { BasicLoginComponent } from './resources/auth/basic-login/basic-login.component';
import { BasicRegComponent } from './resources/auth/basic-reg/basic-reg.component';
import { ForgotComponent } from './resources/auth/forgot/forgot.component';
import { CommonService } from './services/common.service';
import { AuthService } from './services/auth.service';
import { ToastyModule } from 'ng2-toasty';
import { TinymceModule } from 'angular2-tinymce';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    BasicLoginComponent,
    BasicRegComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    CMaterialModule,
    HttpClientModule,
    ToastyModule,
    MatInputModule,
    MatFormFieldModule,
    TinymceModule,
    ReactiveFormsModule
  ],
  providers: [
    MenuItems,
    AuthService,
    AuthGuard,
    AppRole,
    DataService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
