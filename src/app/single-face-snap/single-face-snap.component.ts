import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;
  buttonText!: string;
  constructor(private faceSnapsService: FaceSnapsService,private route: ActivatedRoute) {}
  ngOnInit() {
    const snapId = +this.route.snapshot.params['id'];//récupérer le paramètre id via le snapshot de la route (un snapshot est un aperçu instantané d'une valeur qui change au cours du temps).Tous les paramètres d'une route sont de type  string, mais l'id  des FaceSnaps est de type  number. Ajouter le  +  au début de l'expression permet de cast (changer le type d'une variable) une string  de nombres en  number
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    this.buttonText = 'Oh Snap!'
  }
  
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.buttonText = 'Oops, unSnap!';
    } else {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.buttonText = 'Oh Snap!';
    }
}
}
