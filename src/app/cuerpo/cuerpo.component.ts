import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-cuerpo',
    standalone: true,
    templateUrl: './cuerpo.component.html',
    styleUrl: './cuerpo.component.css',
    imports: [CommonModule,FormsModule]
})
export class CuerpoComponent implements OnInit{
  ngOnInit(): void {
    this.Inicio();
  }
  TIEMPO_BASE:Number = 50;
  TEXTO_BASE:String = "árbol gato perro casa sol libro manzana papel ventana tierra agua luz puerta coche mesa silla aire vida noche día cielo camino amor verano invierno primavera otoño fuego mar montaña nube flor luna estrella tiempo aire boca nariz ojo oreja mano pie cabeza corazón cuerpo alma mente pensamiento palabra voz música arte dibujo pintura escultura poesía canción baile juego trabajo";

  palabras:Array<String> = [];
  texto:String = '';
  tiempoActual = this.TIEMPO_BASE;

  //Atributos→Clases
  active:boolean = false;
  entrada:string = '';
  correcto:boolean = false;
  correctoArray: boolean[][] = [];

  Inicio(){
    this.tiempoActual = this.TIEMPO_BASE;
    this.palabras = this.TEXTO_BASE.split(' ');
    this.correctoArray = this.palabras.map(word => Array.from({ length: word.length }, () => false));
  }
  onKeyDown(event: KeyboardEvent) {
    if(event.key == this.palabras[0][0].toString()){
      this.correctoArray[0][0] = true;
    }
    console.log(this.correctoArray[0][0])
  }

}
