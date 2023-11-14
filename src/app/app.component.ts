import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$!: Observable<number>;//quand on déclare le type de  interval$  , on le déclare comme  Observable  qui émet des  number  en passant  number  entre chevrons <>  
  ngOnInit() {
    this.interval$ = interval(1000);//créer un Observable qui émet des nombres croissants, en passant le nombre de millisecondes qui doit séparer les émissions. Vous stockez cet Observable dans une constante nommée  interval$  
  }
}

