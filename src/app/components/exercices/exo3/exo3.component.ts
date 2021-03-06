import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  articleListCopy! : Article[]
  // newArticleError! : string
  // _newArticle! : string
  newArticle! : string
  // set newArticle(value : string) {
  //   if(value.length > 4)  {
  //     this._newArticle = value
  //     this.newArticleError = ""
  //   }
  //   else(this.newArticleError ="article doit contenir 4 caratères minimum")
  // }
  constructor(
    private _shopService : ShopService
  ) { }

  ngOnInit(): void {
    this.articleListCopy = this._shopService.articleList
  }

  add() {
    this._shopService.create(this.newArticle)
  }

  plus(index : number) {
    this._shopService.addQty(index)
  }

  moins(index : number) {
    this._shopService.remQty(index)
  }

  delete(index : number) {
    this._shopService.delete(index)
  }

}
