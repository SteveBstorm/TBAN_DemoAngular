import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  nav(param : number) {
    this._router.navigate(['demo/recup/'+param])
  }

}
