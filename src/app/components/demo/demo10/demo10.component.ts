import { UpfileService } from './upfile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo10Component implements OnInit {

  myFile! : File
  url! : string
  constructor(
    private _upService : UpfileService
  ) { }

  ngOnInit(): void {
  }

  onGetFile(e: any) {
    this.myFile = e.target.files[0]
  }


  submit() {
    this._upService.upload(this.myFile).subscribe((url : string) => {
      this.url = url
      // let myProduct : Product
      // myProduct = {name : "Banane", url : url}
      // this._productService.post("urlapi", myProduct)
    })
  }
}


export interface Product {
  name: string
  url? : string
}
