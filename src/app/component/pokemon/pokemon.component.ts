import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { IPokemon } from '../../model/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  @Input() pokemon: IPokemon | undefined
}
