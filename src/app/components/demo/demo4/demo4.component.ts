import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  isVisible : boolean = false

  monTableau : string[] = ["Matelas", "Lit", "Oreiller", "Couette", "Sieste"]

  maValeur! : string

  constructor() { }


  ngOnInit(): void {
  }

  switchVisible() {
    this.isVisible = !this.isVisible
  }

}
