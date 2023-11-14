export class FaceSnap {
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string;//On pourrait imaginer que les utilisateurs puissent choisir d'ajouter ou non cette localisation d'ou le point d'interrogation pour une propriété optionelle
}