import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import {FlexLayoutModule, BREAKPOINT, MediaObserver, MediaChange} from '@angular/flex-layout';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';


  watcher: Subscription;

  constructor(media: MediaObserver) {
    this.watcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }

  ngOnInit() {
  }

}
