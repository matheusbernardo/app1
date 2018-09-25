import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoCheio:string = 'src/assets/coracao_cheio.png'
  public coracaoVazio:string = 'src/assets/coracao_vazio.png'
  constructor() { }

  ngOnInit() {
  }

}
