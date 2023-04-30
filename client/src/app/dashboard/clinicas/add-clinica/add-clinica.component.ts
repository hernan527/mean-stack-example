import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clinicas } from '../../../interfaces/clinicas';
import { ClinicasService } from '../../../servicios/clinicas.service';
@Component({
  selector: 'app-add-clinica',
  templateUrl: './add-clinica.component.html', 
  styleUrls: [ './add-clinica.component.css' ]
})
export class AddClinicaComponent {

  constructor(
    private router: Router,
    private clinicasService: ClinicasService
  ) { }

  addClinica(clinica: Clinicas) {
    this.clinicasService.createClinica(clinica)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard/clinicas']);
        },
        error: (error) => {
          alert("Falló crear clínica");
          console.error(error);
        }
      });
  }
}

