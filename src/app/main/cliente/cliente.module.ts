import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { SharedModule } from '../../shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ListaComponent } from './features/lista/lista.component';
import { BotaoNavegacaoComponent } from './features/botao-navegacao/botao-navegacao.component';
import { FormularioComponent } from './features/formulario/formulario.component';



@NgModule({
  declarations: [
    ClienteComponent,
    ListaComponent,
    BotaoNavegacaoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule
  ]
})
export class ClienteModule { }
