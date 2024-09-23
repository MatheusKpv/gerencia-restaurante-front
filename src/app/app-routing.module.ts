import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './main/restaurante/restaurante.component';

const routes: Routes = [
  {path: '', component: RestauranteComponent, children: [
    {path: '', redirectTo: 'restaurante/lista', pathMatch: 'full'},
    {
      path: 'restaurante', loadChildren: () => import('./main/restaurante/restaurante.module').then(r => r.RestauranteModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
