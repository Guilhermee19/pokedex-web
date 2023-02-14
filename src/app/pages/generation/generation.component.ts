import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit, AfterViewInit {

  constructor(
    private pokemonService: PokemonService
  ) { }

  pokemons: any = [];
  loading: boolean = true;

  ngAfterViewInit(): void {
    this.loading = false;
  }

  ngOnInit(): void {
    this.getPokemonAll();
  }

  getPokemonAll() {
    this.pokemonService.getPokemonAll().subscribe(data => {
      console.log(data);
      this.pokemons = data.results;

      // setTimeout(() => {
        // this.loading = false;
      // }, 1000);
    })
  }

}
