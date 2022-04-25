import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLien! : Link[]
  constructor() { }

  ngOnInit(): void {
    this.listeLien = [
      {title : "Home", url : "home"},
      {title : "About", url : "about"},
      {title : "Démos", children : [
        {title : "D1 - Propiétés", url : "demo/demo1"},
        {title : "D2 - Bindings", url : "demo/demo2"},
        {title : "D3 - Pipes", url : "demo/demo3"},
        {title : "D4 - Directives", url : "demo/demo4"},
      ]},
      {title : "Exercices", children : [
        {title : "Chronomètre", url : "exercices/exo1"}
      ]}
    ]
  }

  toggleChildrenVisible(index : number) {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }

}
