import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../../../interfaces/empresas';
import { EmpresasService } from '../../../servicios/empresas.service';

@Component({
  selector: 'app-add-empresa',
  template: `
    <h2 class="text-center m-5">Agregar Nueva Empresa</h2>
    <!-- <app-empresa-form (formSubmitted)="addEmpresa($event)"></app-empresa-form> -->
  `
})
export class AddEmpresaComponent {
  constructor(
    private router: Router,
    private empresasService: EmpresasService
  ) { }

  addEmpresa(empresa: Empresa) {
    this.empresasService.createEmpresa(empresa)
      .subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          alert("Failed to create employee");
          console.error(error);
        }
      });
  }
}
