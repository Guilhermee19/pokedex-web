import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, AfterViewInit {

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { 
    this.name_pokemon = this.route.snapshot.paramMap.get('name');
  }

  loading: boolean = true;

  name_pokemon: any = null;
  pokemon: any = null;
  number_pokedex: string = '000';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }

  ngOnInit(): void {
    this.getPokemon();
  }
  
  getPokemon() {
    this.pokemonService.getPokemon(this.name_pokemon).subscribe(data => {
      console.log(data);
      this.number_pokedex = this.zerosLeft(data.id, 3);
      this.pokemon = data;
    })
  }

  zerosLeft(str: string, size: any){
    let s = String(str);
    while(s.length < (size || 2)){
      s = '0' + s;
    }
    return s;
  }

}
