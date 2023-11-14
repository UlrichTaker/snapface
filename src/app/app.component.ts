import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>;//quand on déclare le type de  interval$  , on le déclare comme  Observable  qui émet des  string  en passant  string  entre chevrons <>  
  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
  ngOnInit() { 
    //Observable qui émet des nombres croissants, en passant le nombre de millisecondes qui doit séparer les émissions.
    this.interval$ = interval(1000).pipe(//appliquer des opérateurs à un Observable, on les passe, dans l'ordre, à une méthode qui s'appelle  pipe() 
    //filtrer toutes les émissions de l'Observable de base qui ne sont pas divisibles par 3
    filter(value => value % 3 === 0),//L'opérateur  filter()  permet de filtrer les émissions, laissant passer uniquement celles qui vous intéressent
    map(value => value % 2 === 0 ?
      `Je suis ${value} et je suis pair` :
      `Je suis ${value} et je suis impair`
    ),//map() permet de transformer(mapper) les émissions d'un Observable
    //Effet secondaire
    tap(text => this.logger(text)),
    );
     
  }
  
}


