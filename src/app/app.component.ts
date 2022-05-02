import { Component } from '@angular/core';
import { Link } from './models/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TBANDemo';
  mesLiens : Link[] = [
    {title : "Home", url : "home"},
    {title : "About", url : "about"},
    {title : "Démos", children : [
      {title : "D1 - Propiétés", url : "demo/demo1"},
      {title : "D2 - Bindings", url : "demo/demo2"},
      {title : "D3 - Pipes", url : "demo/demo3"},
      {title : "D4 - Directives", url : "demo/demo4"},
      {title : "D5 - @Input/@Output", url : "demo/demo5"},
      {title : "D6 - Injection et service", url : "demo/demo6"},
    ]},
    {title : "Exercices", children : [
      {title : "Chronomètre", url : "exercices/exo1"},
      {title : "Liste article", url : "exercices/exo2"},
      {title : "Liste article ++", url : "exercices/exo3"},
    ]}
  ]
}
