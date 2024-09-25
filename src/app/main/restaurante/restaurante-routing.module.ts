import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './features/lista/lista.component';
import { FormularioComponent } from './features/formulario/formulario.component';
import { FinanceiroComponent } from './features/financeiro/financeiro.component';

const routes: Routes = [
  {path: '', redirectTo: 'lista', pathMatch: 'full'},
  {path: 'lista', component: ListaComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  {path: 'financeiro', component: FinanceiroComponent},
  {path: ':id/financeiro', component: FinanceiroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
