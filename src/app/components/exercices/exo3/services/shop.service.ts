import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  articleList : Article[] = []

  constructor() { }

  create(newName : string) {
    let index = this.articleList.findIndex(x => x.nom == newName)
    if(index == -1)
      this.articleList.push(
        {nom : newName, quantity : 1}
      )
    else
      this.addQty(index)
  }

  delete(index : number) {
    this.articleList.splice(index, 1)
  }

  addQty(index : number) {
    this.articleList[index].quantity++
  }

  remQty(index : number) {
    if(this.articleList[index].quantity == 1)
      this.delete(index)
    else
      this.articleList[index].quantity--
  }

}
