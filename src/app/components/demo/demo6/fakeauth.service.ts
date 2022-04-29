import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Demo6Component } from './demo6.component';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {


  currentContact! : Contact
  isConnected! : boolean

  constructor() { }

  connect() {
    this.isConnected = true
    this.currentContact.id = 1
    this.currentContact.firstname = "toto"
  }

  disconnect(){
    this.isConnected = false
  }
}
