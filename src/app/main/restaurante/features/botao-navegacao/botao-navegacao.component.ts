import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-botao-navegacao',
  templateUrl: './botao-navegacao.component.html',
  styleUrl: './botao-navegacao.component.scss'
})
export class BotaoNavegacaoComponent {
  constructor(private bottomRef: MatBottomSheetRef<BotaoNavegacaoComponent>) {};

  openLink(event: MouseEvent): void {
    this.bottomRef.dismiss();
    event.preventDefault();
  }
}
