import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  fanList : Fan[] = []

  constructor(
    private _router : Router
  ) { }

  create(newFan : Fan) {
    this.fanList.push(newFan)
    this._router.navigate(['exercices/exo4'])
  }

  delete(index : number){
    this.fanList.splice(index, 1)
  }

  update(index : number, fan : Fan) {
    this.fanList[index] = fan
  }

  getAll() : Fan[] {
    return this.fanList
  }

  getById(index : number) : Fan{
    return this.fanList[index]
  }
}
