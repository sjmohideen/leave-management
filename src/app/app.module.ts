import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { DepartmentService } from './services/department.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDepartmentComponent } from './component/view-department/view-department.component';
import { AddDepartmentComponent } from './component/add-department/add-department.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepartmentListComponent,
    ViewDepartmentComponent,
    AddDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
