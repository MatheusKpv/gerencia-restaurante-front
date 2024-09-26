import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { ListaComponent } from './features/lista/lista.component';
import { FormularioComponent } from './features/formulario/formulario.component';

const routes: Routes = [
  {path: '', component: ClienteComponent, children: [
    { path: '', redirectTo: 'lista', pathMatch: 'full' },
    { path: 'lista', component: ListaComponent },
    { path: 'formulario', component: FormularioComponent },
    {
      path: ':idCliente', children: [
        { path: 'formulario', component: FormularioComponent }
      ]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
