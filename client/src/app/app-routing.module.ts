import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/components/layouts/base-layout.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const baseLayoutRouting: Routes = [
  {path: '', pathMatch: 'full',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}]

const routes: Routes = [
  {path: '',component: BaseLayoutComponent,children: baseLayoutRouting},
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/new', component: AddEmployeeComponent }, 
  { path: 'employees/edit/:id', component: EditEmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    DashboardRoutingModule],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
