import { Component, OnInit, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  public works: any[];
  private lists: ElementRef[];

  selectType: string;

  constructor(private elRef: ElementRef, private render: Renderer2) {

    this.selectType = 'all';

    this.works = [
      { type: 'mobile', image: 'assets/img/portfolio/mobile1.jpg', title: 'Mobile 1', description: '' },
      { type: 'web', image: 'assets/img/portfolio/web1.jpg', title: 'Web 1', description: '' },
      { type: 'web', image: 'assets/img/portfolio/web2.jpg', title: 'Web 2', description: '' },
      { type: 'photo', image: 'assets/img/portfolio/photography1.jpg', title: 'Photo 1', description: '' },
      { type: 'mobile', image: 'assets/img/portfolio/mobile2.jpg', title: 'Mobile 2', description: '' },
      { type: 'web', image: 'assets/img/portfolio/web3.png', title: 'Web 3', description: '' },
      { type: 'photo', image: 'assets/img/portfolio/photography4.jpg', title: 'Photo 4', description: '' },
      { type: 'photo', image: 'assets/img/portfolio/photography3.jpg', title: 'Photo 3', description: '' },
      { type: 'mobile', image: 'assets/img/portfolio/mobile3.jpg', title: 'Mobile 3', description: '' },
      { type: 'web', image: 'assets/img/portfolio/web4.jpg', title: 'Web 4', description: '' },
      { type: 'photo', image: 'assets/img/portfolio/photography2.jpg', title: 'Photo 2', description: '' },
    ];
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.lists = this.elRef.nativeElement.querySelectorAll('.nav-link');

  }

  onSelectType(event: any, type: string): void {
    this.lists.forEach(el => {
      this.render.removeClass(el, 'active');
    });
    this.selectType = type;
    this.render.addClass(event.target, 'active');
  }

  isShowing(type: string): boolean {
    if (this.selectType === 'all') {
      return false;
    }
  }

}
