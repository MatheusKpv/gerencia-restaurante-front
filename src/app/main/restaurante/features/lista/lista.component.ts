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
abreBotao() {

}
// financeiroRestaurante(id: number) {
//   this.router.navigate(['/restaurante/financeiro', id]);
// }
editaRestaurante(id: number) {
  this.router.navigate(['/restaurante/formulario', id]);
}
  listaRestaurantes: Restaurante[] = [];
  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'estrelas', 'tipoComida', 'botoes'];

  constructor(private service: RestauranteService, private router: Router, private bottomSheet: MatBottomSheet) { };

  openBottomSheet(id: number): void {
    this.bottomSheet.open(BotaoNavegacaoComponent);
  }

  ngOnInit(): void {
    //TO DO : AJUSTAR ORDENACAO DE LISTA
    this.service.getListaRestaurantes().subscribe(lista => {
      this.listaRestaurantes = lista
    })
  }
}
