export class FaceSnap {
    
    location?: string;

    constructor(
      public title:string,
      public description: string,
      public imageUrl: string,
      public createdDate: Date,
      public snaps: number,
    ){}

    addSnaps(){
        this.snaps++;
    }

    removeSnaps(){
        this.snaps--;
    }

    setLocation(location: string): void {
        this.location = location;
      }
    
  }