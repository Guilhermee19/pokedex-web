import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemon } from '../../model/pokemon';
import { CardPokemonComponent } from '../../components/shared/card-pokemon/card-pokemon.component';
import { GENERATIONS, TYPES } from '../../constants/utils';
import { MatChipsModule } from '@angular/material/chips';
import { FormBuilder, Validators } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPokemonComponent, MatChipsModule, MatBadgeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private pokemonService = inject(PokemonService)
  private fb = inject(FormBuilder);

  pokemons: IPokemon[] = []
  generations = GENERATIONS
  types = TYPES
  select_type = ''

  generation = 1;

  filter_form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: [''],
    message: ['', Validators.required],
    type: [''],
    property: [-1],
    value: [''],
    purpose_type: [''],
  });

  ngOnInit(){
    this.getPokemonAll()
  }

  getPokemonAll(){
    this.pokemonService.getPokemonAll(this.generation).subscribe({
      next: (data) =>{
        console.log(data);
        this.pokemons = data;
      }
    })
  }

  filterTypePokemon(type: string){
    if(this.select_type === type) {
      this.select_type = '';
      return
    }

    this.select_type = type;
  }

  get pokemonsFilter() {
    if(!this.select_type) return this.pokemons;

    return this.pokemons.filter(el => el?.secondaryType?.names?.English === this.select_type ||
                                el?.primaryType.names.English === this.select_type)
  }
}


// pokemon?.secondaryType?.names?.English
// pokemon?.primaryType.names.English
