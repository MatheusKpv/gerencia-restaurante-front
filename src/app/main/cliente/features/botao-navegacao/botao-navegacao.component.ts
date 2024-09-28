import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-botao-navegacao',
  templateUrl: './botao-navegacao.component.html',
  styleUrl: './botao-navegacao.component.scss'
})
export class BotaoNavegacaoComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public idCliente: number,
    private bottomRef: MatBottomSheetRef<BotaoNavegacaoComponent>,
    private router: Router,
    private service: ClienteService
  ) {};

  openLink(event: MouseEvent): void {
    this.bottomRef.dismiss();
    event.preventDefault();
    const target = (event.target as HTMLElement).closest('a');
    const rotaAnterior = this.router.url.split('/').slice(0, -1).join('/');

    if (target?.id == 'edit') {
      this.router.navigate([rotaAnterior, this.idCliente, `formulario`])
    }

    if (target?.id == 'remove') {
      this.service.removeCliente(this.idCliente).subscribe(
        (response) => {
          this.router.navigate([rotaAnterior]).then(() => window.location.reload())
        },
        (error) => {
          alert(error.error.message);
        }
      )
    }

    if (target?.id == 'desbloqueia') {
      this.service.desbloqueiaCliente(this.idCliente).subscribe(
        (response) => {
          this.router.navigate([rotaAnterior]).then(() => window.location.reload())
        },
        (error) => {
          alert(error.error.message);
        }
      )
    }
  }
}
