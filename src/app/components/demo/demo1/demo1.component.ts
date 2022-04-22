import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  myProp! : string //public par défaut
  public myprop2 : string = "salut"


  private _prop! : number
  get prop() {
    return this._prop
  }
  set prop(value : number){
    this._prop = value
  }

  //Type primitif Typescript
  texte : string = "5.2"
  nombre : number = 10.2
  datedujour : Date = new Date()
  booleen : boolean = true
  nimporte : any = {nom : "steve", age : 22}
  inconnu : unknown = "type anonyme"
  age! : number
  constructor() { }

  ngOnInit(): void {
    this.myProp = "salut"
    this.prop = 5

   this.age = Number.parseFloat(this.texte)
  }

}
