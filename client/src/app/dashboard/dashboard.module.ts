import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.componet';
import { EditClinicaComponent } from './clinicas/edit-clinica/edit-clinica.component';
import { AddClinicaComponent } from './clinicas/add-clinica/add-clinica.component';
import { ClinicasFormComponent } from './clinicas/clinica-form/clinica-form.component'; // <-- add this line
import { ClinicasListComponent } from './clinicas/clinicas-list/clinicas-list.component';
import { EditEmpresaComponent } from './empresas/edit-empresa/edit-empresa.component';
import { AddEmpresaComponent } from './empresas/add-empresa/add-empresa.component';
import { EmpresasListComponent } from './empresas/empresas-list/empresas-list.component';
import { EmpresasFormComponent } from './empresas/empresas-form/empresas-form.component';
import { EditPlanComponent } from './planes/edit-plan/edit-plan.component';
import { AddPlanComponent } from './planes/add-plan/add-plan.component';
import { PlanesListComponent } from './planes/planes-list/planes-list.component';
import { PlanesFormComponent } from './planes/planes-form/planes-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadosListComponent } from './empleados/empleados-list/empleados-list.component';
import { AddEmpleadoComponent } from './empleados/add-empleado/add-empleado.component';
import { EditEmpleadoComponent } from './empleados/edit-empleado/edit-empleado.component';
import { EmpleadoFormComponent } from './empleados/empleado-form/empleado-form.component';
import { HomeModule } from "../home/home.module";
import { ModalModule } from "../_modal/modal.module";


@NgModule({
    declarations: [
        AddClinicaComponent,
        EditClinicaComponent,
        ClinicasListComponent,
        ClinicasFormComponent,
        AddEmpresaComponent,
        EditEmpresaComponent,
        EmpresasListComponent,
        EmpresasFormComponent,
        AddPlanComponent,
        EditPlanComponent,
        PlanesListComponent,
        PlanesFormComponent,
        DashboardComponent,
        EmpleadosListComponent,
        AddEmpleadoComponent,
        EditEmpleadoComponent,
        EmpleadoFormComponent
    ],
    exports: [
        DashboardComponent,
        PlanesListComponent,
        AddPlanComponent,
        EditPlanComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HomeModule,
        ModalModule
    ]
})
export class DashboardModule {
}

