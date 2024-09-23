import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  postRestaurante(formulario: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<Restaurante>('http://localhost:8080/restaurante', JSON.stringify(formulario), {headers}).subscribe();
  }

  constructor(
    private http: HttpClient
  ) { }

  getListaRestaurantes() {
    return this.http.get<Restaurante[]>('http://localhost:8080/restaurante')
  }
}
