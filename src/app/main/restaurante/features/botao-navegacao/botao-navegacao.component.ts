import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao-navegacao',
  templateUrl: './botao-navegacao.component.html',
  styleUrl: './botao-navegacao.component.scss'
})
export class BotaoNavegacaoComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public buttonId: number,
    private bottomRef: MatBottomSheetRef<BotaoNavegacaoComponent>,
    private router: Router
  ) {};

  openLink(event: MouseEvent): void {
    this.bottomRef.dismiss();
    event.preventDefault();
    const target = (event.target as HTMLElement).closest('a');
    this.router.navigate([`restaurante/${this.buttonId}/${target!.id}`])
  }
}
