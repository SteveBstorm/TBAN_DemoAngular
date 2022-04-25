import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  toChildren : number = 42

  messageFromChildren! :string
  constructor() { }

  ngOnInit(): void {
  }


  receiveMessage(message : string){
    this.messageFromChildren = message
  }
}
