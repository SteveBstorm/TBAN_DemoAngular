import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  texte : string = "toto"

  isDisabled : boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  maMethode() : void {
    this.texte = "j'ai cliqué sur mon bouton"
  }
  switchDisable() : void {
    this.isDisabled = !this.isDisabled
  }

}
