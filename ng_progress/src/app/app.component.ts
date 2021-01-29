import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {


  options = {
    minimum: 0.08,
    maximum: 1,
    ease: 'linear',
    speed: 200,
    trickleSpeed: 300,
    meteor: true,
    spinner: true,
    spinnerPosition: 'right',
    direction: 'leftToRightIncreased',
    color: 'red',
    thick: true
  };

  startedClass = false;
  endedClass = false;
  preventAbuse = false;

  constructor(public progress: NgProgress, private http: HttpClient) {
  }

  ngOnInit() {

    this.progress.started.subscribe(() => {

      this.startedClass = true;
      setTimeout(() => {
        this.startedClass = false;
      }, 800);
    });

    this.progress.ended.subscribe(() => {

      this.endedClass = true;
      setTimeout(() => {
        this.endedClass = false;
      }, 800);
    });
  }

  testHttp() {
    this.preventAbuse = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(res => {
      console.log(res);
      setTimeout(() => {
        this.preventAbuse = false;
      }, 800);
    });
  }
}
