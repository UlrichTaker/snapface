import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ //On implémente OnInit  pour pouvoir utiliser  ngOnInit()  dans AppComponent !
  mySnap!:FaceSnap;
  ngOnInit() {
    this.mySnap = new FaceSnap(
    'Archibald',
    'Mon meilleur ami depuis tout petit !',
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    new Date(),
    6
    )
    
  }
}
