import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exo2child',
  templateUrl: './exo2child.component.html',
  styleUrls: ['./exo2child.component.scss']
})
export class Exo2childComponent implements OnInit {

  @Input() liste! : string[]
  @Output() deleteEvent : EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  previensPapaQueJeVeuxSupprimerUnTruc(index : number) {
    this.deleteEvent.next(index)
  }
}
