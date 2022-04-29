import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Demo6Component } from './demo6.component';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  contactList : Contact[] = []

  isConnected! : boolean

  constructor() { }

  connect() {
    this.isConnected = true
  }

  disconnect(){
    this.isConnected = false
  }
}
