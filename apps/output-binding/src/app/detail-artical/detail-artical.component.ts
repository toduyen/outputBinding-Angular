import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UserInfo} from "../Interface/UserInfo";

@Component({
  selector: 'output-binding-detail-artical',
  template: `

    <li>
      {{Artical.title}}
      <button (click)="Select.emit(Artical)">Select</button>
      <button (click)="DeleteItem.emit(Artical.id)">X</button>
    </li>

  `,
  styles: [`

  `]
})
export class DetailArticalComponent implements OnInit {

  @Input() Artical!:UserInfo
  @Output() Select = new EventEmitter<UserInfo>();
  @Output() DeleteItem = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
