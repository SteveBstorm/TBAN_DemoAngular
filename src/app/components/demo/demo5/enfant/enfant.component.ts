import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Input() infoduparent! : string
  @Input() fromParent! : number

  @Output() messageEvent : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  sendInfo(message : string) {
    this.messageEvent.next(message)
  }
}
