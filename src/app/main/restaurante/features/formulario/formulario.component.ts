import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestauranteService } from '../../services/restaurante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{
cadastra() {
  this.service.postRestaurante(this.formulario.value);
  this.router.navigate(['/restaurante/lista']);
}
  formulario!: FormGroup;

  constructor (
    private buider: FormBuilder,
    private service: RestauranteService,
    private router: Router
  ) { };

  ngOnInit(): void {
    this.formulario = this.buider.group({
      nome: [null, Validators.required],
      cnpj: [null, Validators.required],
      estrelas: [null, Validators.required],
      tipoComida: [null, Validators.required]
    })
  }
}
