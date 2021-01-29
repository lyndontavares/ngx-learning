import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
  
@Injectable()  
export class DbService {  
  
  constructor(private http: Http) { }  
  
  GetUser(){       
    //return this.http.get('https://api.mlab.com/api/1/databases/menufacil/collections/menu?apiKey=d3CvOsuMDdVMhv-n1xM-rZrds1Ll1cRj')  
    return this.http.get('http://localhost:4200/menu')  
            .map((response: Response) => response.json())               
  }  
 
  
}  
