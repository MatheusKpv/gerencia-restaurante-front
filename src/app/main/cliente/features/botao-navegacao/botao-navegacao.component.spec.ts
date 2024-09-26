import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoNavegacaoComponent } from './botao-navegacao.component';

describe('BotaoNavegacaoComponent', () => {
  let component: BotaoNavegacaoComponent;
  let fixture: ComponentFixture<BotaoNavegacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoNavegacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
