import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './features/lista/lista.component';
import { FormularioComponent } from './features/formulario/formulario.component';
import { FinanceiroComponent } from './features/financeiro/financeiro.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: ':id', redirectTo: ':id/financeiro', pathMatch: 'full' },
  {
    path: ':id', children: [
      { path: 'formulario', component: FormularioComponent },
      { path: 'financeiro', component: FinanceiroComponent },
      { path: 'cliente', loadChildren: () => import('../cliente/cliente.module').then(c => c.ClienteModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
