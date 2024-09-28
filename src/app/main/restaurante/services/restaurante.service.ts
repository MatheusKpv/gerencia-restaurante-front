import { Restaurante } from './../models/restaurante';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { DatePipe } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RestauranteService {

  constructor(private http: HttpClient, private datePipe: DatePipe) {};

  getDiaMaiorFaturamentoMes(id: number, mes: number) {
    const params = new HttpParams().set('mes', mes);
    return this.http.get(
      `http://localhost:8080/restaurante/dia-maior-faturamento-mes/${id}`,
      { params }
    );
  }
  getFaturamentoPorDia(id: number, data: string) {
    const dataFormatada: string | null = this.datePipe.transform(
      data,
      'yyyy-MM-dd'
    );
    const params = new HttpParams().set('data', dataFormatada!);
    return this.http.get(
      `http://localhost:8080/restaurante/faturamento-dia/${id}`,
      { params }
    );
  }
  findById(id: number): Observable<Restaurante> {
    return this.http.get<Restaurante>(
      `http://localhost:8080/restaurante/${id}`
    );
  }
  editaRestaurante(id: number, restaurante: any) : Observable<Restaurante> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Restaurante>(
      `http://localhost:8080/restaurante/${id}`,
      JSON.stringify(restaurante),
      { headers }
    );
  }

  postRestaurante(formulario: FormGroup): Observable<Restaurante> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Restaurante>(
      'http://localhost:8080/restaurante',
      JSON.stringify(formulario),
      { headers }
    );
  }

  getListaRestaurantes() {
    return this.http.get<Restaurante[]>('http://localhost:8080/restaurante');
  }
}
