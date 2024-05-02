import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuerpoComponent } from "./cuerpo/cuerpo.component";
import { WordComponent } from './word/word.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CuerpoComponent, WordComponent]
})
export class AppComponent {
  title = 'ClonMonkeyTypeAngular';
}
