import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/components/layouts/base-layout.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { HomeRoutingModule} from './home/home-routing.module';
const baseLayoutRouting: Routes = [
  {path: '', pathMatch: 'full',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)}]

const routes: Routes = [
  {path: 'home',component: BaseLayoutComponent,children: baseLayoutRouting},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    DashboardRoutingModule,
    HomeRoutingModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
