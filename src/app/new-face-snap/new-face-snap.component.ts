import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { Router } from '@angular/router';
import { FaceSnapsService } from '../services/snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!: FormGroup;//On cree un objet de type formgroup
  faceSnapPreview$!: Observable<FaceSnap>;//Observable  faceSnapPreview$  qui émettra des objets de type  FaceSnap  
  urlRegex!: RegExp;
  constructor(private formBuilder: FormBuilder,private faceSnapsService: FaceSnapsService,private router: Router) { }
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    /* Vous utilisez la méthode  group  du FormBuilder, en lui passant un objet :
•	les clés de l'objet correspondent aux noms des champs – ici, j'ai choisi les quatre champs du modèle FaceSnap que l'utilisateur pourra entrer ;
•	les valeurs de l'objet correspondent à la configuration de chaque champ – pour l'instant, vous passez uniquement null  pour dire que la valeur par défaut de ces champs est  null  .
*/
    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],//Validators.required vérifie que les champs requis contiennent bien des valeurs
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required,Validators.pattern(this.urlRegex)]],//Validators.pattern compare la valeur entrée à une expression régulière (RegExp).
      location: [null]
  }, {//modifier le déclenchement de  valueChanges  du formulaire pour émettre uniquement lorsque l'utilisateur change de champ, c'est-à-dire lors du  blur  des différents champs
    updateOn: 'blur'
  });
  //On branche l'observable aux changements de valeur du formulaire il emettra de la valeur à chaque modification
  this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    //le formulaire n'émet pas des objets de type FaceSnap : il manque des attributs. Il faut donc utiliser l'opérateur map pour transformer les émissions en FaceSnaps valables :
    map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
    }))
    );
    
  }
  onSubmitForm() {
    this.faceSnapsService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
}

}
