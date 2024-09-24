import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestauranteService } from '../../services/restaurante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurante } from '../../models/restaurante';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{
verificaRoteamento(): boolean {
  return this.router.url.endsWith('/formulario');
}
cadastra() {
  this.service.postRestaurante(this.formulario.value);
  this.router.navigate(['/restaurante/lista']);
}
  formulario!: FormGroup;
  ativo: boolean = true;
  restauranteEdit: Restaurante | undefined = undefined;

  constructor (
    private buider: FormBuilder,
    private service: RestauranteService,
    private router: Router,
    private route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = param['id'];
      if (id) {
        this.restauranteEdit = this.service.findById(id);
      }
    })
    this.formulario = this.buider.group({
      nome: [null, Validators.required],
      cnpj: [null, Validators.required],
      estrelas: [null, Validators.required],
      tipoComida: [null, Validators.required]
    })
    this.ativo = false
  }
}
