import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clinicas } from '../../../interfaces/clinicas';
import { ClinicasService } from '../../../servicios/clinicas.service';
@Component({
  selector: 'app-add-clinica',
  template: `
    <p>
      add-clinica works!
    </p>
  `,
  styles: [
  ]
})
export class AddClinicaComponent {

  constructor(
    private router: Router,
    private employeeService: ClinicasService
  ) { }

  addEmpresa(clinica: Clinicas) {
    this.employeeService.createClinica(clinica)
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

