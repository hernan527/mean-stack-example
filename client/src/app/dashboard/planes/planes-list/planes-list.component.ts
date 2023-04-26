import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planes } from '../../../interfaces/planes';
import { PlanesService } from '../../../servicios/planes.service';

@Component({
  selector: 'app-planes-list',
  templateUrl: './planes-list.component.html',
  styleUrls: [ './planes-list.component.css']  
})
export class PlanesListComponent implements OnInit {
  planes$: Observable<Planes[]> = new Observable();

  constructor(private planesService: PlanesService) { }

  ngOnInit(): void {
    this.fetchPlanes();
  }

  deletePlan(id: string): void {
    this.planesService.deletePlan(id).subscribe({
      next: () => this.fetchPlanes()
    });
  }

  private fetchPlanes(): void {
    this.planes$ = this.planesService.getPlanes();
  }
}
