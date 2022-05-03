import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Fan } from '../models/fan.model';
import { FanService } from './fan.service';

@Injectable({
  providedIn: 'root'
})
export class FanResolveResolver implements Resolve<Fan> {

  constructor(private _service : FanService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Fan {
    let id = route.params['id']
    return this._service.getById(id)
  }
}
