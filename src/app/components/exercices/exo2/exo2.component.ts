import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  articleList : string[] = []

  newArticle! : string
  constructor() { }

  ngOnInit(): void {
  }

  ajoutArticle(){
    this.articleList.push(this.newArticle)
  }

  supprimer(index : number) {
    this.articleList.splice(index, 1)
  }

}
