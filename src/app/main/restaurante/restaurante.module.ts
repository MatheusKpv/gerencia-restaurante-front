import { NgModule } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteComponent } from './restaurante.component';
import { FinanceiroComponent } from './features/financeiro/financeiro.component';
import { ListaComponent } from './features/lista/lista.component';
import { FormularioComponent } from './features/formulario/formulario.component';
import { CabecalhoComponent } from './features/cabecalho/cabecalho.component';
import { BotaoNavegacaoComponent } from './features/botao-navegacao/botao-navegacao.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RestauranteComponent,
    FinanceiroComponent,
    ListaComponent,
    FormularioComponent,
    CabecalhoComponent,
    BotaoNavegacaoComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    SharedModule
  ],
  providers: [
    provideNativeDateAdapter()
  ]
})
export class RestauranteModule { }
