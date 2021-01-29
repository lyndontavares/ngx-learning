import { Component, OnInit } from '@angular/core';
import { PersonService } from './service/person.service';
import { Person } from './model/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  persons: Person[];

  persons$: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {

    this.persons = this.personService.getAll();

    this.personService.getAllRXJS()
    .subscribe( data => this.persons$ = data );
  }

}
