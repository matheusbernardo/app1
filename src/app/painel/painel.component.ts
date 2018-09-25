import { Component, OnInit } from '@angular/core';

import { FRASES } from "./frases-mock";
import { Frase } from "../shared/frase.model";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public resposta:string = ""
  public frases: Array<Frase> = FRASES
  public instrucao:string = 'Traduza a frase:'
  public rodada:number = 0
  public rodadaFrase : Frase
  public progresso:number = 0

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
   }

  ngOnInit() {
  }

  public atualizaResposta(resposta : Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)    
  }

  public verificarResposta() :void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      if (this.rodada < this.frases.length-1) {
        this.rodada++
        this.rodadaFrase = this.frases[ this.rodada ]
        this.progresso = this.progresso + 25
        this.resposta = ""
        alert("A frase está correta!")
      } else {
        this.progresso = this.progresso + 25
        this.resposta = ""
        alert("A frase está correta!")
      }
    } else {
      alert("A frase está errada")
    }    
  }

}
