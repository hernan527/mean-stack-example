import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanesListComponent } from './planes/planes-list/planes-list.component';
import { AddPlanComponent } from './planes/add-plan/add-plan.component';
import { EditPlanComponent } from './planes/edit-plan/edit-plan.component';
import { EmpleadosListComponent } from './empleados/empleados-list/empleados-list.component';
import { AddEmpleadoComponent } from './empleados/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './empleados/edit-empleado/edit-empleado.component';
import { EmpresasListComponent } from './empresas/empresas-list/empresas-list.component';
import { AddEmpresaComponent } from './empresas/add-empresa/add-empresa.component';
import { EditEmpresaComponent } from './empresas/edit-empresa/edit-empresa.component';
import { ClinicasListComponent } from './clinicas/clinicas-list/clinicas-list.component';
import { AddClinicaComponent } from './clinicas/add-clinica/add-clinica.component';
import { EditClinicaComponent } from './clinicas/edit-clinica/edit-clinica.component';
import { DashboardComponent } from './dashboard.componet';


const routes: Routes = [
 
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/planes', component: PlanesListComponent },
  { path: 'dashboard/planes/nuevo', component: AddPlanComponent }, 
  { path: 'dashboard/planes/editar/:id', component: EditPlanComponent },
  { path: 'dashboard/empleados', component: EmpleadosListComponent },
  { path: 'dashboard/empleados/nuevo', component: AddEmpleadoComponent }, 
  { path: 'dashboard/empleados/editar/:id', component: EditEmpleadoComponent },
  { path: 'dashboard/empresas', component: EmpresasListComponent },
  { path: 'dashboard/empresas/nuevo', component: AddEmpresaComponent }, 
  { path: 'dashboard/empresas/editar/:id', component: EditEmpresaComponent },
  { path: 'dashboard/clinicas', component: ClinicasListComponent },
  { path: 'dashboard/clinicas/nuevo', component: AddClinicaComponent }, 
  { path: 'dashboard/clinicas/editar/:id', component: EditClinicaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
