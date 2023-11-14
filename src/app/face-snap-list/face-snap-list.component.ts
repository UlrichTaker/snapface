import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/snaps.service';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  //Pour pouvoir utiliser un service dans un component, il faut utiliser le système d'injection de dépendances (dependency injection ou DI) que vous fournit Angular. C'est très simple : vous passez un argument du type du service au constructor du component, et Angular vous mettra à disposition la bonne instance du service.  
  constructor(private faceSnapsService: FaceSnapsService) {//Ajouter un modificateur d'accès comme  public  ou  private  à un argument du  constructor  crée une propriété avec ce nom-là dans la classe. Vous aurez donc accès au service via la propriété  faceSnapsService.On préfère généralement  private  pour les injections de service, car ça empêche le template du component d'y accéder directement. Donner au template accès aux injections serait un anti-pattern Angular
  }
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
} 
}

