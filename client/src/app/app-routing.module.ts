import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/components/layouts/base-layout.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

const baseLayoutRouting: Routes = [
  {path: '', pathMatch: 'full',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}]

const routes: Routes = [
  {path: '',component: BaseLayoutComponent,children: baseLayoutRouting},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    DashboardRoutingModule],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
