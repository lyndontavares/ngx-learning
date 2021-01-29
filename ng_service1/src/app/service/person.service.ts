import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { PERSONS } from '../model/mock-person';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getAll(): Person[] {
    return PERSONS;
  }

  getAllRXJS():  Observable<Person[]> {
    return of(PERSONS);
  }

}
