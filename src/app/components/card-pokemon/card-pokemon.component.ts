import { PokemonService } from 'src/app/services/pokemon.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  @Input() pokemon: any = null;
  @Input() index: any = 0;

  isErro: boolean = false;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  number_pokedex: string = '000';

  ngOnInit(): void {
    this.number_pokedex = this.zerosLeft(this.index, 3);
    this.getPokemon()
  }

  getPokemon() {
    if(!this.isErro){
      this.pokemonService.getPokemon(this.pokemon.name).subscribe(data => {
        this.isErro = true;
        console.log(data);
        this.pokemon = data;
      }, erro => {
        // this.isErro = false;
        // this.getPokemon()
      })
    }
  }

  zerosLeft(str: string, size: any){
    let s = String(str);
    while(s.length < (size || 2)){
      s = '0' + s;
    }
    return s;
  }

}
