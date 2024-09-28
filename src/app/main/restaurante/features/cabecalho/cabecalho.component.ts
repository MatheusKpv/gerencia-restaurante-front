import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      } else {
        this.currentRoute = this.router.url;
      }
    });
  }

  getTitle(): string {
    if (this.currentRoute.includes('cliente')) {
      return 'Cliente';
    } else if (this.currentRoute.includes('funcionario')) {
      return 'Funcionário';
    } else if (this.currentRoute.includes('restaurante')) {
      return 'Restaurante';
    }
    return 'Aplicação';
  }

  getButtons(): any[] {
    if (this.currentRoute.includes('cliente')) {
      return [
        { link: `${formataRota(this.currentRoute, 'cliente')}/lista`, label: 'Lista' },
        { link: `${formataRota(this.currentRoute, 'cliente')}/formulario`, label: 'Cadastro' }
      ];
    } else if (this.currentRoute.includes('funcionario')) {
      return [
        { link: `${formataRota(this.currentRoute, 'funcionario')}/lista`, label: 'Lista' },
        { link: `${formataRota(this.currentRoute, 'funcionario')}/formulario`, label: 'Cadastro' }
      ];
    } else if (this.currentRoute.includes('restaurante')) {
      return [
        { link: '/restaurante/lista', label: 'Lista' },
        { link: '/restaurante/formulario', label: 'Cadastro' }
      ];
    } else
    return [];
  }
}
function formataRota(router: string, rotaDesejada: string) {
  const arrayRota = router.split('/');
  const indexRotaDesejada = arrayRota.indexOf(rotaDesejada)
  return arrayRota.slice(0, Number(indexRotaDesejada) + 1).join('/')
}
