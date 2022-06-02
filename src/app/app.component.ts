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
      {title : "D7 - Reactive Forms", url : "demo/demo7"},
      {title : "D8 - Guards", url : "demo/demo8"},
      {title : "D9 - Routing", url : "demo/demo9"},
      {title : "D10 - UploadFiles", url : "demo/demo10"},
    ]},
    {title : "Exercices", children : [
      {title : "Chronomètre", url : "exercices/exo1"},
      {title : "Liste article", url : "exercices/exo2"},
      {title : "Liste article ++", url : "exercices/exo3"},
      {title : "Fan List", url : "exercices/exo4"},
    ]}
  ]
}
