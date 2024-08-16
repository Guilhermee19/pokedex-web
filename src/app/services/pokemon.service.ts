import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient)

  list_pokemons: IPokemon[] = []

  set pokemons(list_pokemons: IPokemon[]){
    this.list_pokemons = list_pokemons;
  }

  get pokemons(){
    return this.list_pokemons;
  }

  getPokemonAll(generation = 1): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(`https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/generation/${generation}.json`)
  }

  getPokemon(id: string): Observable<IPokemon> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams()
    };

    return this.http.get<IPokemon>(`https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/name/${id}.json`, options)
  }

  getGeneration(): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams()
    };

    return this.http.get<any>("https://pokeapi.co/api/v2/generation/", options)
  }
}
