import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteComponent } from './restaurante.component';
import { FinanceiroComponent } from './features/financeiro/financeiro.component';
import { ListaComponent } from './features/lista/lista.component';
import { FormularioComponent } from './features/formulario/formulario.component';
import { CabecalhoComponent } from './features/cabecalho/cabecalho.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RestauranteComponent,
    FinanceiroComponent,
    ListaComponent,
    FormularioComponent,
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ]
})
export class RestauranteModule { }
