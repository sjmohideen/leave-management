
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { ViewDepartmentComponent } from './component/view-department/view-department.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'department-list', component: DepartmentListComponent },
    { path: 'department-list/view/:id', component: ViewDepartmentComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }