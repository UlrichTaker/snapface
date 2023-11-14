import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',// Le sélecteur (avec le préfixe  app-  par défaut), c'est ce qui va nous permettre d'insérer ce component dans notre application.Le sélecteur d'un component correspond à la balise HTML personnalisée qu'on utilisera pour l'insérer dans l'application.
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;//@Input() est utilisée pour indiquer qu'une propriété d'un composant Angular est une propriété d'entrée, ce qui signifie qu'elle peut être passée depuis un composant parent vers ce composant enfant. Dans votre cas, vous avez une propriété faceSnap de type FaceSnap qui est annotée comme une entrée.

  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh Snap!'
  }
  

  onSnap() {
    
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!'
    }
  }

}
export { FaceSnap };

