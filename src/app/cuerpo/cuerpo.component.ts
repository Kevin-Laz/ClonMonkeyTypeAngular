import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WordComponent } from '../word/word.component';

@Component({
    selector: 'app-cuerpo',
    standalone: true,
    templateUrl: './cuerpo.component.html',
    styleUrl: './cuerpo.component.css',
    imports: [CommonModule,FormsModule, WordComponent]
})
export class CuerpoComponent implements OnInit{
  ngOnInit(): void {
    this.Inicio();
  }

  TIEMPO_BASE:number = 50;
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
  numero:number = 0


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
    this.sizeW = this.palabras[this.numero].length;
    // Esperar un breve momento para permitir que el input se actualice con la nueva letra
    setTimeout(() => {
      // Obtener la palabra actual en el input
      const entradaSplit = this.entrada.trim().split('');
      // Iterar sobre cada letra de la palabra actual
      entradaSplit.forEach((val, index) => {
        if (val.length > 0) {
          if (event.key == 'Backspace') {
            this.correctoArray[this.numero][index + 1] = false;
            this.incorrectoArray[this.numero][index + 1] = false;

            if (val == this.palabras[this.numero][index]) {
              this.correctoArray[this.numero][index] = true;
              this.incorrectoArray[this.numero][index] = false;
            }
            else {
              this.incorrectoArray[this.numero][index] = true;
              this.correctoArray[this.numero][index] = false;
            }
          }
          else if (val == this.palabras[this.numero][index].toString()) {
            this.correctoArray[this.numero][index] = true;
            this.incorrectoArray[this.numero][index] = false;
          }
          else {
            this.incorrectoArray[this.numero][index] = true;
            this.correctoArray[this.numero][index] = false;
          }
        }
      });
      // Verificar si se ha ingresado un espacio al final de la palabra
      if (event.key == ' ' && entradaSplit.length > 0 && this.sizeW==entradaSplit.length) {
        this.numero++;
        if (this.numero < this.palabras.length) {
          this.sizeW = this.palabras[this.numero].length;
          this.entrada = '';
          this.activeArray = this.palabras.map(() => false);
          this.correctoArray[this.numero] = Array.from({ length: this.palabras[this.numero].length }, () => false);
          this.incorrectoArray[this.numero] = Array.from({ length: this.palabras[this.numero].length }, () => false);
        }
      }
    }, 1);
  }

}
