import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Clinicas } from '../../../interfaces/clinicas';
import { ClinicasService } from '../../../servicios/clinicas.service';

@Component({
  selector: 'app-edit-clinica.component.ts',
  template: `
    <h2 class="text-center m-5">Editar Clinica</h2>
    <app-clinica-form [initialState]="clinica" (formSubmitted)="editClinica($event)"></app-clinica-form>
  `
})
export class EditClinicaComponent implements OnInit {
  clinica: BehaviorSubject<Clinicas> = new BehaviorSubject<Clinicas>({ nombre: '', _id: 0, entity:'' });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clinicasService: ClinicasService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('id No Provisto');
    }

    this.clinicasService.getClinicas(id !).subscribe((clinica) => {
      this.clinica.next(clinica);
    });
  }

  editClinica(clinica: Clinicas) {
    this.clinicasService.updateClinica(this.clinica.value._id || '', clinica)
      .subscribe({
        next: () => {
          this.router.navigate(['/clinicas']);
        },
        error: (error) => {
          alert('Falló actualizar Clínicas');
          console.error(error);
        }
      })
  }
}
