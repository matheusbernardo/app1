import { Component, OnInit } from '@angular/core';
import { Coracao } from "../shared/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoCheio:string = 'src/assets/coracao_cheio.png'
  public coracaoVazio:string = 'src/assets/coracao_vazio.png'
  public coracoes : Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { console.log(this.coracoes) }

  ngOnInit() {
  }

}
