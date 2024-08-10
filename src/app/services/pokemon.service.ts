import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient)

  getPokemonAll(generation = 1): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(`https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/generation/${generation}.json`)
  }

  getPokemon(name: string): Observable<any> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams()
    };

    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`, options)
  }

  getGeneration(): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams()
    };

    return this.http.get<any>("https://pokeapi.co/api/v2/generation/", options)
  }
}
