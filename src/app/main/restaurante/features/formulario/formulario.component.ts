import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestauranteService } from '../../services/restaurante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurante } from '../../models/restaurante';
import { TipoComida } from '../../models/tipoComida.enum';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent implements OnInit {
  formulario!: FormGroup;
  restauranteEdit: Restaurante | undefined = undefined;
  tiposComida = Object.keys(TipoComida).filter(key => isNaN(Number(key)));

  cadastra() {
    if (this.restauranteEdit) {
      this.service.editaRestaurante(
        this.restauranteEdit.id,
        this.formulario.value
      ).subscribe(
        (response) => {
          this.restauranteEdit = response;
          this.router.navigate(['/restaurante/lista']);
        },
        (error) => {
          alert(error.error.message);
        }
      );
    } else {
      this.service
        .postRestaurante(this.formulario.value).subscribe(
          (response) => {
            this.restauranteEdit = response;
            this.router.navigate(['/restaurante/lista']);
          },
          (error) => {
            alert(error.error.message);
          }
        )
    }

  }

  constructor(
    private buider: FormBuilder,
    private service: RestauranteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formulario = initForm(this.buider);
    this.route.params.subscribe((param) => {
      const id = param['id'];
      if (id) {
        this.service.findById(id).subscribe((response) => {
          this.restauranteEdit = response;
          if (this.restauranteEdit) {
            this.formulario.patchValue({
              nome: this.restauranteEdit.nome,
              cnpj: this.restauranteEdit.cnpj,
              estrelas: this.restauranteEdit.estrelas,
              tipoComida: this.restauranteEdit.tipoComida,
            });
          }
        });
      }
    });
  }
}
function initForm(builder: FormBuilder) {
  return builder.group({
    nome: [null, Validators.required],
    cnpj: [null, Validators.required],
    estrelas: [null, Validators.required],
    tipoComida: [null, Validators.required],
  });
}
