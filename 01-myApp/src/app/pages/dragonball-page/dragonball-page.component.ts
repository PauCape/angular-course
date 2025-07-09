import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})

export class DragonballPageComponent {
    name = signal('Nombre');
    power = signal(0);

    characters = signal<Character[]>([
        {id: 1, name: 'Goku', power: 9001},
        {id: 2, name: 'Vegeta', power: 8000},
        {id: 3, name: 'Piccolo', power: 3000},
        {id: 4, name: 'Yamcha', power: 500},
    ]);

    addCharacter(){
        console.log(this.name(), this.power());
    }
}
