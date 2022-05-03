import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/components/exercices/exo3/models/article.model';

@Component({
  selector: 'app-recup',
  templateUrl: './recup.component.html',
  styleUrls: ['./recup.component.scss']
})
export class RecupComponent implements OnInit {

  paramRecup! : any
  articleResolu! : Article

  constructor(
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramRecup = this._activatedRoute.snapshot.params['id']
    this.articleResolu = this._activatedRoute.snapshot.data['monArticle']
  }

}
