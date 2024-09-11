import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [ NgStyle ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(){
    this.snapButtonText = 'Oh Snap!'
    this.userHasSnapped = false;

  }
  onSnap() {
    if(this.userHasSnapped){
      this.unsnap();
    }
    else{
      this.snap();
    }
  }

  snap(){
    this.faceSnap.addSnaps();
    this.snapButtonText = "Oops unsnap !"
    this.userHasSnapped = true;
  }

  unsnap(){
    this.faceSnap.removeSnaps();
    this.snapButtonText = "Oh Snap !"
    this.userHasSnapped = false;
  }

  getColor(): string {
    return `rgb(0, ${this.faceSnap.snaps}, 0)`; // Calculer la couleur en fonction de la valeur des snaps
  }
}


