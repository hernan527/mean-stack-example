import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinicas } from '../../../interfaces/clinicas';
import { ClinicasService } from '../../../servicios/clinicas.service';

@Component({
  selector: 'app-clinicas-list',
  templateUrl: './clinicas-list.component.html',
  styleUrls: [ './clinicas-list.component.css']  
})
export class ClinicasListComponent implements OnInit {
  clinicas$: Observable<Clinicas[]> = new Observable();

  constructor(private clinicasService: ClinicasService) { }

  ngOnInit(): void {
    this.fetchClinicas();
  }

  deleteClinica(id: string): void {
    this.clinicasService.deleteClinica(id).subscribe({
      next: () => this.fetchClinicas()
    });
  }

  private fetchClinicas(): void {
    this.clinicas$ = this.clinicasService.getClinicas();
  }
}
