import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  findById(id: any): Restaurante | undefined {
    // return this.http.get()
    return undefined;
  }
  editaRestaurante(restaurante: any) {
    console.log(restaurante);

    this.http.put(`http://localhost:8080/restaurante/?id=${restaurante.id}`, JSON.stringify(restaurante))
  }
  deleteRestaurante(id: number) {
    throw new Error('Method not implemented.');
  }
  postRestaurante(formulario: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<Restaurante>('http://localhost:8080/restaurante', JSON.stringify(formulario), {headers}).pipe(

    ).subscribe();
  }

  constructor(
    private http: HttpClient
  ) { }

  getListaRestaurantes() {
    return this.http.get<Restaurante[]>('http://localhost:8080/restaurante')
  }
}
