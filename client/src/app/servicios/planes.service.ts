import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Planes } from '../interfaces/planes';
import { SERVER_URL } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  private url = SERVER_URL;
  private planes$: Subject<Planes[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshPlanes() {
    this.httpClient.get<Planes[]>(`${this.url}/planes`)
      .subscribe(planes => {
        this.planes$.next(planes);
      });
  }

  getPlanes(): Subject<Planes[]> {
    this.refreshPlanes();
    return this.planes$;
  }

  getPlan(id: string): Observable<Planes> {
    return this.httpClient.get<Planes>(`${this.url}/planes/${id}`);
  }

  createPlan(planes: Planes): Observable<string> {
    return this.httpClient.post(`${this.url}/planes`, planes, { responseType: 'text' });
  }

  updatePlan(id: string, planes: Planes): Observable<string> {
    return this.httpClient.put(`${this.url}/planes/${id}`, planes, { responseType: 'text' });
  }

  deletePlan(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/planes/${id}`, { responseType: 'text' });
  }
}
