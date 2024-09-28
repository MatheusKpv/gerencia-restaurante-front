import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../models/restaurante';
import { RestauranteService } from '../../services/restaurante.service';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BotaoNavegacaoComponent } from '../botao-navegacao/botao-navegacao.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
  listaRestaurantes: Restaurante[] = [];
  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'estrelas', 'tipoComida', 'botoes'];

  constructor(private service: RestauranteService, private router: Router, private bottomSheet: MatBottomSheet) { };

  editaRestaurante(id: number) {
    this.router.navigate([`/restaurante/${id}/formulario`]);
  }

  openBottomSheet(id: number): void {
    this.bottomSheet.open(BotaoNavegacaoComponent, { data: id });
  }

  ngOnInit(): void {
    this.listaRestaurantes = [];
    this.service.getListaRestaurantes().subscribe(lista => {
      this.listaRestaurantes = lista
    })
  }
}
