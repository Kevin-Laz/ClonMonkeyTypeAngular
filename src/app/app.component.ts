import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuerpoComponent } from "./cuerpo/cuerpo.component";
import { WordComponent } from './word/word.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CuerpoComponent, WordComponent, FormsModule]
})
export class AppComponent {
  title = 'ClonMonkeyTypeAngular';
}
