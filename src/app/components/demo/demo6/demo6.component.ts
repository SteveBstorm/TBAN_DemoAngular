import { Component, OnInit } from '@angular/core';
import { FakeauthService } from './fakeauth.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
  //providers : [FakeauthService]
})
export class Demo6Component implements OnInit {

  isConnected! : boolean

  constructor(private _service : FakeauthService) { }

  ngOnInit(): void {
  }
  login() {
    this._service.connect()
    this.isConnected = this._service.isConnected
  }
  logout() {
    this._service.disconnect()
    this.isConnected = this._service.isConnected
  }
}
