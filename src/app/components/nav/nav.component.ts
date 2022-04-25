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
      {title : "About", url : "about"}
    ]
  }

}
