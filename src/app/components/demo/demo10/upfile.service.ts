import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpfileService {

  url : string = "https://localhost:7124/api/file"
  constructor(
    private _client : HttpClient
  ) { }

  upload(ftu : File) : Observable<string> {
    let formdata : FormData = new FormData()
    formdata.append('myFile', ftu, ftu.name)
    return this._client.post(this.url, formdata, {responseType : 'text'})
  }
}
