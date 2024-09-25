import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Restaurante } from '../models/restaurante';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  getDiaMaiorFaturamentoMes(id: number, mes: number) {
    console.log(mes);
    const params = new HttpParams().set('mes', mes);
    return this.http.get(`http://localhost:8080/restaurante/dia-maior-faturamento-mes/${id}`, { params })
  }
  getFaturamentoPorDia(id: number, data: string) {
    const dataFormatada: string | null = this.datePipe.transform(data, 'yyyy-MM-dd');
    console.log(dataFormatada);
    const params = new HttpParams().set('data', dataFormatada!);
    return this.http.get(`http://localhost:8080/restaurante/faturamento-dia/${id}`, { params })
  }
  findById(id: number): Observable<Restaurante> {
    return this.http.get<Restaurante>(`http://localhost:8080/restaurante/${id}`);
  }
  editaRestaurante(id: number, restaurante: any) {
    console.log(restaurante);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put(`http://localhost:8080/restaurante/${id}`, JSON.stringify(restaurante), { headers }).subscribe();
  }
  financeiroRestaurante(id: number) {
    //TO DO : INCREMENTAR DELETE
    throw new Error('Method not implemented.');
  }
  postRestaurante(formulario: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<Restaurante>('http://localhost:8080/restaurante', JSON.stringify(formulario), { headers }).subscribe();
  }

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  getListaRestaurantes() {
    return this.http.get<Restaurante[]>('http://localhost:8080/restaurante')
  }
}
