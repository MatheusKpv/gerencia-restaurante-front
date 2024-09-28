import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { map, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) { };

  desbloqueiaCliente(id: number) {
    return this.http.put(`http://localhost:8080/cliente/desbloqueio/${id}`, {});
  }

  removeCliente(id: number) {
    return this.http.delete(`http://localhost:8080/cliente/bloqueio/${id}`);
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:8080/cliente/${id}`);
  }

  editaCliente(id: number, cliente: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`http://localhost:8080/cliente/${id}`, JSON.stringify(cliente), { headers });
  }

  postCliente(formulario: any) {
    const dataFormatada: string | null = this.datePipe.transform(
      formulario.dataNascimento,
      'yyyy-MM-dd'
    );
    formulario.dataNascimento = dataFormatada;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Cliente>('http://localhost:8080/cliente', JSON.stringify(formulario), { headers });
  }

  getListaClientes() {
    return this.http.get<Cliente[]>('http://localhost:8080/cliente')
  }
}
