import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Article } from '../../exercices/exo3/models/article.model';
import { ShopService } from '../../exercices/exo3/services/shop.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article> {

  constructor(private _articleService : ShopService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Article {
    let id = route.params['id']
    let currentArticle = this._articleService.articleList[id]
    return currentArticle;
  }
}
