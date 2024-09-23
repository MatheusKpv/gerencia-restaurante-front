import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { RestauranteService } from '../../services/restaurante.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
  listaRestaurantes: Restaurante[] = [];
  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'estrelas', 'tipoComida'];

  constructor(private service: RestauranteService) { };

  ngOnInit(): void {
    this.service.getListaRestaurantes().subscribe(lista => {
      this.listaRestaurantes = lista
    })
  }
}
