import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizarFormComponent } from './cotizar-form/cotizar-form.component';

const routes: Routes = [
 
  { path: 'cotizar', component: CotizarFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
