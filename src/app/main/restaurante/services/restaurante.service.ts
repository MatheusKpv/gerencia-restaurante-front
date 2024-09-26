import { Restaurante } from './../models/restaurante';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  // private listaRestaurantesSubject = new BehaviorSubject<Restaurante[]>([]);
  // listaRestaurantes$ = this.listaRestaurantesSubject.asObservable();

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { }

  // carregarListaRestaurantes() {
  //   return this.http.get<Restaurante[]>('http://localhost:8080/restaurante').pipe(
  //     tap(lista => this.listaRestaurantesSubject.next(lista)) // Atualiza a lista
  //   );
  // }

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

  postRestaurante(formulario: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<Restaurante>('http://localhost:8080/restaurante', JSON.stringify(formulario), { headers }).subscribe();
  }

  getListaRestaurantes() {
    return this.http.get<Restaurante[]>('http://localhost:8080/restaurante')
  }
}
