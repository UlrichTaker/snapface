import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
    faceSnaps!: FaceSnap[];
    private destroy$!: Subject<boolean>;//Un Subject est un Observable que vous pouvez faire émettre à la demande. Vous allez donc créer un Subject appelé  destroy$  qui émettra une seule fois, au moment de la destruction du component.
  //Pour pouvoir utiliser un service dans un component, il faut utiliser le système d'injection de dépendances (dependency injection ou DI) que vous fournit Angular. C'est très simple : vous passez un argument du type du service au constructor du component, et Angular vous mettra à disposition la bonne instance du service.  
  constructor(private faceSnapsService: FaceSnapsService) {//Ajouter un modificateur d'accès comme  public  ou  private  à un argument du  constructor  crée une propriété avec ce nom-là dans la classe. Vous aurez donc accès au service via la propriété  faceSnapsService.On préfère généralement  private  pour les injections de service, car ça empêche le template du component d'y accéder directement. Donner au template accès aux injections serait un anti-pattern Angular
  }
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
    interval(1000).pipe(take(3),tap(console.log)).subscribe();//take()  prend un nombre comme argument, et complète l'Observable quand il a émis ce nombre de valeurs
    this.destroy$ = new Subject<boolean>();
    interval(1000).pipe(tap(console.log),takeUntil(this.destroy$)).subscribe();//takeUntil dit à l'Observable  interval  de continuer à émettre tant que  destroy$  n'a pas émis, mais dès que  destroy$  émet, de compléter l'Observable.
  } 
  ngOnDestroy(): void {
    this.destroy$.next(true);//Pour faire émettre un Subject, on appelle sa méthode  next()  :
  }
}

