import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { };

  // desbloqueiaCliente(id: number) {
  //   this.http.put(`http://localhost:8080/cliente/desbloqueio/${id}`, {}).subscribe();
  // }

  removeCliente(id: number) {
    this.http.delete(`http://localhost:8080/cliente/bloqueio/${id}`).subscribe();
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:8080/cliente/${id}`);
  }

  editaCliente(id: number, cliente: any) {
    console.log(cliente);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put(`http://localhost:8080/cliente/${id}`, JSON.stringify(cliente), { headers }).subscribe();
  }

  postCliente(formulario: any) {
    console.log(formulario);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<Cliente>('http://localhost:8080/cliente', JSON.stringify(formulario), { headers }).subscribe();
  }

  getListaClientes() {
    return this.http.get<Cliente[]>('http://localhost:8080/cliente')
  }
}
