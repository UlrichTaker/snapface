import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'//L'objet de configuration qui spécifie  providedIn: 'root'  dit à Angular d'enregistrer ce service à la racine de l'application. Ce sera très souvent le cas pour vos services, car ça permet de s'assurer de n'avoir qu'une seule instance du service, partagée par tous les partis intéressés.
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[]= [
        {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 0,
        location : 'Washington'
      },
      {
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 0
      }
      ];
    //   getAllFaceSnaps(): FaceSnap[] {//Cette méthode retournera, comme son nom l'indique, tous les FaceSnaps contenus dans le service.Il s'agit d'une méthode TypeScript, donc il est vivement conseillé de stipuler son type de retour – ici, il s'agit d'un tableau de  FaceSnap.
    //     return this.faceSnaps;
        
    //   }
    //   snapFaceSnapById(faceSnapId: number): void {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);//cherche un FaceSnap par son  id  dans le tableau faceSnaps avec la fonction  find()
    //     if (faceSnap) {
    //         faceSnap.snaps++;//Si le FaceSnap existe, on lui incrémente ses  snaps
    //     } else {
    //         throw new Error('FaceSnap not found!');
    //     }
    // }
}
