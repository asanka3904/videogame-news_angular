import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/module';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent implements OnInit {
  // @Input() game?: Game; //not work,becuase property initialize error occure
  @Input() game: any;
  constructor() {}

  ngOnInit(): void {
    //console.log('game is' + thisgame.parent_platforms);
  }
}
