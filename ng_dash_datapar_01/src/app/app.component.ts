import { Component } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'My Dash 1.0';

  routes: Object[] = [{
    icon: 'dashboard',
    route: 'dash',
    title: 'Dashboard',
  }, 
  {
    icon: 'perm_identity',
    route: 'login',
    title: 'Login',
  }
  
  ];

  constructor(public media: TdMediaService) {
  }
}
