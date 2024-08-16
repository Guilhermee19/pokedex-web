import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private pokemonService = inject(PokemonService)

  loading = true;
  generation = 1;

  ngOnInit(){
    this.getPokemonAll()
  }

  getPokemonAll(){
    this.loading = true;

    this.pokemonService.getPokemonAll(this.generation).subscribe({
    next: (data) =>{
      this.pokemonService.list_pokemons = data
      // this.pokemons = data;
      this.loading = false;
      }
    })
  }
}
