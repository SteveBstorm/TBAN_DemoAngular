import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from './models/fan.model';
import { FanService } from './service/fan.service';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss']
})
export class Exo4Component implements OnInit {

  myList : Fan[] =[]

  constructor(
    private _service : FanService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.myList = this._service.fanList
  }

  update(index : number) {
    this._router.navigate(['exercices/update/'+index])
  }

  delete(index : number) {
    this._service.delete(index);
  }
}
