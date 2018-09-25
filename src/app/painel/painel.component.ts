import { Component, OnInit } from '@angular/core';

import { FRASES } from "./frases-mock";
import { Frase } from "../shared/frase.model";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES
  public instrucao:string = 'Traduza a frase:'

  constructor() { console.log(this.frases) }

  ngOnInit() {
  }

  /**
   * testaEventBinding
   */
  public testaEventBinding() {
    console.log("Evento capturado")
  }

}
