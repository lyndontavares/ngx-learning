import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public teams: any[];

  constructor() {
    this.teams = new Array<Object>();

    for (let i = 0; i < 3; i++) {
      this.teams.push({
        image: 'assets/img/team_picture.png',
        name: 'John Doe',
        position: 'Developer',
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      });
    }
  }
  ngOnInit() {
  }

}
