import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BotaoNavegacaoComponent } from '../botao-navegacao/botao-navegacao.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
  listaClientes: Cliente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'cpf', 'dataNascimento', 'sexo',
    'telefone', 'idRestaurante', 'dataCadastro', 'quantidadeReservas', 'quantidadeValorGasto', 'flgBloqueado', 'botoes'];

  constructor(private service: ClienteService, private router: Router, private bottomSheet: MatBottomSheet, private route: ActivatedRoute) { };

  editaCliente(id: number) {
    this.router.navigate([`/restaurante/${id}/formulario`]);
  }

  openBottomSheet(id: number): void {
    this.bottomSheet.open(BotaoNavegacaoComponent, { data: id });
  }

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(param => {
      const idRestaurante = param.get('id');
      this.service.getListaClientes().pipe(
        map(clientes => clientes.filter(cliente => cliente.idRestaurante == Number(idRestaurante)))
      ).subscribe(lista => {
          this.listaClientes = lista
        })
    })
  }
}
