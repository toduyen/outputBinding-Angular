import { Component, OnInit } from '@angular/core';
import {UserData} from "../Data/UserData";
import {UserInfo} from "../Interface/UserInfo";

@Component({
  selector: 'output-binding-list-artical',
  template: `
    <ul>
      <output-binding-detail-artical *ngFor="let x of Artical" [Artical]="x" (Select)="handleSelect($event)" (DeleteItem)="handeleDeleteItem($event)" ></output-binding-detail-artical>
    </ul>
    <p>Current: {{current.title}}</p>
  `,
  styles: [`

  `]
})
export class ListArticalComponent implements OnInit {
  Artical=UserData;
  current = this.Artical[0];
  constructor() { }
  ngOnInit(): void {
  }
  handleSelect(userInfo: UserInfo){
    this.current = userInfo
  }
  handeleDeleteItem(id: number){
    this.Artical = this.Artical.filter(x => x.id !== id)
    if(this.current.id === id){
      this.current = this.Artical[0]
    }
  }
}
