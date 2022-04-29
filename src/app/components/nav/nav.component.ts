import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';
import { FakeauthService } from '../demo/demo6/fakeauth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() listeLien! : Link[]

  constructor() { }

  ngOnInit(): void {

  }

  toggleChildrenVisible(index : number) {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }

}
