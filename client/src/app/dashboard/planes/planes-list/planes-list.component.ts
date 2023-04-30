import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planes } from '../../../interfaces/planes';
import { PlanesService } from '../../../servicios/planes.service';
import {ServcioRetornoPrecioService} from '../../../servicios/servcio-retorno-precio.service';
import {ServicioDeCompararService} from '../../../servicios/servicio-de-comparar.service';
import { ModalService } from '../../../_modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planes-list',
  templateUrl: './planes-list.component.html',
  styleUrls: [ './planes-list.component.css']  
})
export class PlanesListComponent implements OnInit {
  planes$: Observable<Planes[]> = new Observable();
  constructor(
    private planesService: PlanesService,
    private retornarService: ServcioRetornoPrecioService,
    private servicioComparar: ServicioDeCompararService,
    private modalService : ModalService,
    private http: HttpClient
    ) { }
    ngOnInit(): void {
      console.log('hola')
      this.retornarService.disparadorDePrecio.subscribe(data=>{
        console.log('Recibiendo data en planes-list...',data);
  });
      this.fetchPlanes();
     
    }

    openModa(id: string) {
      this.modalService.open('custom-modal-3');
  
    }
  
    closeModa(id: string) {
      this.modalService.close('custom-modal-3');
  
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

