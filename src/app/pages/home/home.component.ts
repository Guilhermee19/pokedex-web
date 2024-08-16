import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemon } from '../../model/pokemon';
import { GENERATIONS, TYPES } from '../../constants/utils';
import { MatChipsModule } from '@angular/material/chips';
import { FormBuilder, Validators } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { PokemonComponent } from '../../component/pokemon/pokemon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokemonComponent, MatChipsModule, MatBadgeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private pokemonService = inject(PokemonService)
  private fb = inject(FormBuilder);

  loading = true;

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
    this.loading = true;

    setTimeout(() => {
      this.pokemons = this.pokemonService.list_pokemons;
      this.loading = false;
    }, 500);
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
