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
  activeArray:boolean[] = [];
  active:boolean = false;
  entrada:string = '';
  correcto:boolean = false;
  correctoArray: boolean[][] = [];
  incorrectoArray: boolean[][] = [];
  sizeW:Number = 0;
  numero:Number = 0
  Inicio(){
    this.tiempoActual = this.TIEMPO_BASE;
    this.palabras = this.TEXTO_BASE.split(' ');
    this.activeArray = this.palabras.map(() => false);
    this.correctoArray = this.palabras.map(word => Array.from({ length: word.length }, () => false));
    this.incorrectoArray = this.palabras.map(word => Array.from({ length: word.length }, () => false));
  }
  onKeyPress(event: KeyboardEvent) {

  }
  onKeyUp(event:KeyboardEvent){
    
  }

  onKeyDown(event: KeyboardEvent) {
    this.sizeW = this.palabras[0].length;
    // Esperar un breve momento para permitir que el input se actualice con la nueva letra
    setTimeout(() => {
      // Obtener la palabra actual en el input
      const entradaSplit = this.entrada.trim().split('');
      // Iterar sobre cada letra de la palabra actual
      if(entradaSplit.length==0){
        this.correctoArray[0][0] = false;
        this.incorrectoArray[0][0] = false;
      }
      entradaSplit.forEach((val, index) => {
        if (val.length > 0) {
          //console.log("Tecla:", event.key);
          //console.log("Valor:", this.palabras[0][index]);
          if(event.key=='Backspace'){
            this.correctoArray[0][index+1] = false;
            this.incorrectoArray[0][index+1] = false;

            if (val == this.palabras[0][index]) {
              this.correctoArray[0][index] = true;
              this.incorrectoArray[0][index]=false;
            }
            else{
              this.incorrectoArray[0][index] = true;
              this.correctoArray[0][index] = false;
            }
          }
          else if (val == this.palabras[0][index].toString()) {
            this.correctoArray[0][index] = true;
            this.incorrectoArray[0][index]=false;
          }
          else{
            this.incorrectoArray[0][index] = true;
            this.correctoArray[0][index] = false;
          }
        }
      });
    }, 1);
  }
}
