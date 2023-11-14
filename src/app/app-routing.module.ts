import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [//Ce tableau va lier les routes de votre application (les différentes URL) aux components correspondants
  { path: 'facesnaps', component: FaceSnapListComponent },//une première route  facesnaps  qui affichera le component FaceSnapListComponent 
  { path: '',component: LandingPageComponent}//le component à afficher pour la route vide
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  
export class AppRoutingModule {}
