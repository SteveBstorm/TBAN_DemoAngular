import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  texte : string = "Salut tout le monde"
  nombre : number = 3.149
  jour : Date = new Date()
  euro : number = 150000

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.jour = new Date(), 1000)

  }

}
