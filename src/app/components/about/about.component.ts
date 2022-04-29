import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';
import { FakeauthService } from '../demo/demo6/fakeauth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private _service : FakeauthService) { }
  isConnected! : boolean
  ngOnInit(): void {
    this.isConnected = this._service.isConnected
  }

}
