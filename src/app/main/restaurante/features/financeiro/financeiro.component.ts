import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestauranteService } from '../../services/restaurante.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrl: './financeiro.component.scss'
})
export class FinanceiroComponent implements OnInit{
buscarMaiorFaturamentoMes() {
  this.service.getDiaMaiorFaturamentoMes(this.id!, this.mesInput!).subscribe(
    (response:any) => {
      this.faturamento = [
        {
          data: response.data,
          dia: response.dia,
          faturamento: response.faturamento
        }
      ]
    },
    (error) => {
      alert(error.error.message)
    }
  )
  this.mesInput = undefined;
}
buscarFaturamentoDia() {
  this.service.getFaturamentoPorDia(this.id!, this.dataInput).subscribe(
    response => {
      this.faturamentoDia = response;
    },
    (error) => {
      alert(error.error.message)
    }
  );
}
  displayedColumns: string[] = ['data', 'dia', 'faturamento'];
  faturamento:any = [];
  faturamentoDia: any = undefined;
  dataInput:string = '';
  mesInput:number | undefined = undefined;
  id: number | undefined = undefined;

  constructor(
    private service: RestauranteService,
    private router: Router,
    private route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id'];
      if (this.id) {

      } else {
        this.router.navigate(['/restaurante/lista'])
      }
    })
  }
}
