import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
  ) { }

  getPokemonAll(): Observable<any> {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams()
    };

    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/?limit=151`, options)
    // return this.http.get<any>(`https://api.pokemon.com/br/api/pokedex/kalos`, options)
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
