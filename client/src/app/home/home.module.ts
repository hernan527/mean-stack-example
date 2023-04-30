import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CotizarFormComponent } from './cotizar-form/cotizar-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import {MatTabsModule} from '@angular/material/tabs';
import { ModalModule } from '../_modal';

import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
 
 
];


@NgModule({
  declarations: [
    HomeComponent,
    CotizarFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    ModalModule,
    RouterModule.forChild(routes)
],
exports: [CotizarFormComponent,RouterModule]
})
export class HomeModule {}
