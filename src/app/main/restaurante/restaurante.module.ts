import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteComponent } from './restaurante.component';
import { FinanceiroComponent } from './features/financeiro/financeiro.component';
import { ListaComponent } from './features/lista/lista.component';
import { FormularioComponent } from './features/formulario/formulario.component';
import { CabecalhoComponent } from './features/cabecalho/cabecalho.component';
import {AsyncPipe} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoNavegacaoComponent } from './features/botao-navegacao/botao-navegacao.component';


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
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatTabsModule,
    AsyncPipe,
    MatDatepickerModule,
    MatCardModule,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [
    provideNativeDateAdapter()
  ]
})
export class RestauranteModule { }
