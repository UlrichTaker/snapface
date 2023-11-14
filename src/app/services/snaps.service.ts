import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

// Ce service va centraliser toutes les interactions avec les FaceSnaps 

@Injectable({
  providedIn: 'root'//L'objet de configuration qui spécifie  providedIn: 'root'  dit à Angular d'enregistrer ce service à la racine de l'application. Ce sera très souvent le cas pour vos services, car ça permet de s'assurer de n'avoir qu'une seule instance du service, partagée par tous les partis intéressés.
})
export class FaceSnapsService {
  
    faceSnaps: FaceSnap[]= [
        {
        id: 1,
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        id: 2,
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 0,
        location : 'Washington'
      },
      {
        id: 3,
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 0
      }
      ];
  

      getAllFaceSnaps(): FaceSnap[] {//Cette méthode retournera, comme son nom l'indique, tous les FaceSnaps contenus dans le service.Il s'agit d'une méthode TypeScript, donc il est vivement conseillé de stipuler son type de retour – ici, il s'agit d'un tableau de  FaceSnap.
        return this.faceSnaps;
      }

      // Cette méthode retourne un FaceSnap si elle le trouve (d'où son type de retour), et  throw  une erreur sinon.
      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);//cherche un FaceSnap par son  id  dans le tableau faceSnaps avec la fonction  find()
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }
      // Cette méthode utilise  getFaceSnapById()  pour récupérer le FaceSnap, et si le deuxième argument est  'snap', rajoute un snap ; sinon, elle enlève un snap.Cependant, on pourrait passer n'importe quelle chaîne de caractères à cette méthode. Afin de limiter les possibilités à des options sémantiques, on peut remplacer le type  string  par un literal type 
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {// Avec les literal types vous ne pourrez passer que 'snap' ou 'unsnap' comme deuxième argument. Non seulement votre IDE vous préviendra si vous essayez de passer autre chose, mais l'autocomplétion et la documentation automatique faciliteront l'utilisation de cette méthode
            const faceSnap = this.getFaceSnapById(faceSnapId);
            snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        }
      unsnapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            faceSnap.snaps--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }       
    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }){//La fonction accepte un objet comme argument, qui correspond à l'objet généré par le formulaire 
      const faceSnap: FaceSnap = {//•	crée un nouvel objet à partir de l'argument en ajoutant les champs manquants 
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1 //•	ajoute 1 à l' id  du dernier ajouté au tableau pour générer le nouveau, puisque les  id  des FaceSnap sont des entiers croissants 
        };
      this.faceSnaps.push(faceSnap);//•	ajoute le FaceSnap au tableau
      }
    } 
  
