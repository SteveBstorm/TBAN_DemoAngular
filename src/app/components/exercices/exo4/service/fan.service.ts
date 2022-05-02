import { Injectable } from '@angular/core';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  fanList : Fan[] = []

  constructor() { }

  create(newFan : Fan) {
    this.fanList.push(newFan)
    console.log(this.fanList)
  }
}
