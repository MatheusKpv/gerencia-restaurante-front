import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';
import { Sexo } from '../../models/sexo.enum';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit {
  formulario!: FormGroup;
  clienteEdit: Cliente | undefined = undefined;

  cadastra() {
    if (this.clienteEdit) {
      this.service.editaCliente(this.clienteEdit.id, this.formulario.value).subscribe()
      this.router.navigate([ajustaRota(this.router), 'lista']);
    } else {
      this.service.postCliente(this.formulario.value)
      this.router.navigate([ajustaRota(this.router), 'lista']);
    }
  }

  constructor(
    private buider: FormBuilder,
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const idRestaurante = this.route.parent?.snapshot.paramMap.get('id');
      this.formulario = initForm(this.buider, idRestaurante);
      const idCliente = param['idCliente']
      if (idCliente) {
        this.service.findById(idCliente).subscribe(
          (response) => {
            this.clienteEdit = response;
            console.log(this.clienteEdit);
            if (this.clienteEdit) {
              this.formulario.patchValue({
                nome: this.clienteEdit.nome,
                sobrenome: this.clienteEdit.sobrenome,
                cpf: this.clienteEdit.cpf,
                dataNascimento: this.clienteEdit.dataNascimento,
                sexo: this.clienteEdit.sexo,
                telefone: this.clienteEdit.telefone,
                dataCadastro: this.clienteEdit.dataCadastro
              })
            }
          }
        )
      }
    })
  }
}
function initForm(builder: FormBuilder, idRestaurante: any) {
  console.log(idRestaurante);

  return builder.group({
    nome: [null, Validators.required],
    sobrenome: [null, Validators.required],
    cpf: [null, Validators.required],
    dataNascimento: [null, Validators.required],
    sexo: [null, Validators.required],
    telefone: [null, Validators.required],
    idRestaurante: [idRestaurante],
    dataCadastro: [null]
  })
}

function getOrdinalSexo(sexo: string): number {
  return Sexo[sexo as keyof typeof Sexo];
}

function ajustaRota(router: Router): any {
  const arrayRouter = router.url.split('/');
  const indexCliente = arrayRouter.indexOf('cliente');
  return arrayRouter.slice(0, indexCliente + 1).join('/');
}

