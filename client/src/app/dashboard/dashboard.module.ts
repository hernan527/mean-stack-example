import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.componet';
// import { EditClinicaComponent } from './clinicas/edit-clinica/edit-clinica.component';
// import { AddClinicaComponent } from './clinicas/add-clinica/add-clinica.component';
// import { ClinicaFormComponent } from './clinicas/clinica-form/clinica-form.component'; // <-- add this line
// import { ClinicasListComponent } from './clinicas/clinicas-list/clinicas-list.component';
// import { EditEmpresaComponent } from './empresas/edit-empresa/edit-empresa.component';
// import { AddEmpresaComponent } from './empresas/add-empresa/add-empresa.component';
// import { EmpresasListComponent } from './empresas/empresas-list/empresas-list.component';
// import { EmpresasFormComponent } from './empresas/empresas-form/empresas-form.component';
import { EditPlanComponent } from './planes/edit-plan/edit-plan.component';

import { AddPlanComponent } from './planes/add-plan/add-plan.component';
import { PlanesListComponent } from './planes/planes-list/planes-list.component';
import { PlanesFormComponent } from './planes/planes-form/planes-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    AddPlanComponent,
    EditPlanComponent,
    PlanesListComponent,
    PlanesFormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule  ],
  exports: [
    DashboardComponent,
    PlanesListComponent,
    AddPlanComponent,
    EditPlanComponent]
  })
export class DashboardModule {
}

