import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Empresa } from '../../../interfaces/empresas';
import { EmpresasService } from '../../../servicios/empresas.service';

@Component({
  selector: 'app-edit-empresa.component.ts',
  template: `
    <h2 class="text-center m-5">Editar Empresa</h2>
    <app-empresa-form [initialState]="empresa" (formSubmitted)="editEmpresa($event)"></app-empresa-form>
  `
})
export class EditEmployeeComponent implements OnInit {
  empresa: BehaviorSubject<Empresa> = new BehaviorSubject({});

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private EmpresasService: EmpresasService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('id No Provisto');
    }

    this.EmpresasService.getEmpresa(id !).subscribe((empresa) => {
      this.empresa.next(empresa);
    });
  }

  editEmployee(employee: Empresa) {
    this.EmpresasService.updateEmpresa(this.empresa.value._id || '', empresa)
      .subscribe({
        next: () => {
          this.router.navigate(['/empresas']);
        },
        error: (error) => {
          alert('Falló actualizar empresa');
          console.error(error);
        }
      })
  }
}
