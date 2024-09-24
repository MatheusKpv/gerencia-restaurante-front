import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { RestauranteService } from '../../services/restaurante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
deletaRestaurante(id: number) {
  this.service.deleteRestaurante(id);
}
editaRestaurante(id: number) {
  this.router.navigate(['/restaurante/formulario', id])
  // this.service.editaRestaurante(restaurante);
}
  listaRestaurantes: Restaurante[] = [];
  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'estrelas', 'tipoComida', 'botoes'];

  constructor(private service: RestauranteService, private router: Router) { };

  ngOnInit(): void {
    this.service.getListaRestaurantes().subscribe(lista => {
      this.listaRestaurantes = lista
    })
  }
}
