import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanesListComponent } from './planes/planes-list/planes-list.component';
import { AddPlanComponent } from './planes/add-plan/add-plan.component';
import { EditPlanComponent } from './planes/edit-plan/edit-plan.component';
import { EmpleadosListComponent } from './empleados/empleados-list/empleados-list.component';
import { AddEmpleadoComponent } from './empleados/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './empleados/edit-empleado/edit-empleado.component';
import { DashboardComponent } from './dashboard.componet';


const routes: Routes = [
 
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/planes', component: PlanesListComponent },
  { path: 'dashboard/planes/nuevo', component: AddPlanComponent }, 
  { path: 'dashboard/planes/editar/:id', component: EditPlanComponent },
  { path: 'dashboard/empleados', component: EmpleadosListComponent },
  { path: 'dashboard/empleados/nuevo', component: AddEmpleadoComponent }, 
  { path: 'dashboard/empleados/editar/:id', component: EditEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
