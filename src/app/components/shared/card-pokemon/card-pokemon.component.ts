import { Component, Input } from '@angular/core';
import { IPokemon } from '../../../model/pokemon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-pokemon',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.scss'
})
export class CardPokemonComponent {
  @Input() pokemon: IPokemon | undefined
}
