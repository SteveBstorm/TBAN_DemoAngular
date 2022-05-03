import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from '../models/fan.model';
import { FanService } from '../service/fan.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currentFan! : Fan

  constructor(
    private _service : FanService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['id']
    this.currentFan = this._service.getById(id)
  }

}
