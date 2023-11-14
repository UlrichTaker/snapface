export class FaceSnap {
    title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;
    location?: string;
    
    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number,location? : string) {
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.createdDate = createdDate;
      this.snaps = snaps;
      this.location = location;
    }
  }
// Raccourci TypeScript. Si vous avez des propriétés qui seront initialisées par les arguments passés au constructor comme ci-dessus, vous pouvez retirer leurs déclarations et initialisations, et leur ajouter simplement le modificateur  public  dans le  constructor  :
/**export class FaceSnap {
    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdDate: Date,
                public snaps: number) 
                public location?: string){
    }
  }**/