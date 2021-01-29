import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public posts: any[];

  constructor() {
    this.posts = new Array<Object>();

    for (let i = 0; i < 6; i++) {
      this.posts.push({
        image: 'assets/img/blank.svg',
        title: 'Post ' + (i + 1),
        date: 'Octobe 2017',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
      });
    }
  }

  ngOnInit() {
  }

}
