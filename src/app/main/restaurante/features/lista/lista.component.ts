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
    console.log('aq');
    this.listaRestaurantes = [];
    // TO DO : AJUSTAR ORDENACAO DE LISTA
    this.service.getListaRestaurantes().subscribe(lista => {
      this.listaRestaurantes = lista
      console.log(this.listaRestaurantes);
    })

    // this.service.carregarListaRestaurantes().subscribe({
    //   next: () => {
    //     console.log('Lista carregada com sucesso');
    //   },
    //   error: err => {
    //     console.error('Erro ao carregar a lista:', err);
    //   }
    // });
    // this.service.listaRestaurantes$.subscribe(lista => {
    //   this.listaRestaurantes = lista;
    //   // Aqui você pode ter certeza de que a lista foi atualizada
    //   console.log('Lista atualizada:', this.listaRestaurantes);
    // });
  }
}
