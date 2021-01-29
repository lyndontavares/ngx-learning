import { Component, VERSION, OnInit, AfterViewInit,ViewChild, ElementRef ,NgZone} from '@angular/core';
import * as Instascan from "instascan";

//import {DbService} from './db.service';  

let scanner : Instascan.Scanner;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit,AfterViewInit {

    ngVersion = VERSION.full;
    //@ViewChild('preview')
    //preview : ElementRef;

    menu : any[];
    displayedColumns = ['email', 'nome', 'ativo', 'menu'];


    public qrcode:string=" ";

    constructor(
        private ngZone: NgZone
        //private dbService : DbService
    ) {};

    ngAfterViewInit()
    {
        scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5 });

        scanner.addListener('scan', (content) => this.ngZone.run(() => {         
            this.qrcode=">"+content;
            console.log(content);
        }));         
 
        Instascan.Camera.getCameras().then(function (cameras) {
            if (cameras.length > 0) {
               scanner.start(cameras[1]);
            } else {
              console.error('No cameras found.');
            }
          }).catch(function (e) {
            console.error(e);
          });
          
    };

    ngOnInit(): void {
        this.qrcode="pronto para leitura...";

       // this.dbService.GetUser().subscribe(data =>  this.menu = data) ; 
    };
 
}
