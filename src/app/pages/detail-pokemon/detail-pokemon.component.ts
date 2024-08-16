import { ChangeDetectorRef, Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IPokemon } from '../../model/pokemon';
import { interval, map, Observable, Subscription, timer } from 'rxjs';
import { CardPokemonComponent } from '../../components/shared/card-pokemon/card-pokemon.component';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { EffectCards, Swiper, SwiperOptions } from 'swiper';
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CardPokemonComponent, RouterModule, SwiperModule],
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DetailPokemonComponent implements OnInit{
  private pokemonService = inject(PokemonService)
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); // Injetando ChangeDetectorRef

  routerSubscription?: Subscription;

  loading = true;

  pod_id: string = '';
  pokemons: IPokemon[] = [];

  pokemon: IPokemon = {} as IPokemon;

  swiperOptions: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 100,
    centeredSlides: true,
    initialSlide: 0
  };

  ngOnInit(){
    this.pod_id = this.route.snapshot.params['id'];

    this.pokemons = this.pokemonService.list_pokemons;

    console.log(this.pokemons);

    this.getPokemon()
  }

  getPokemon(){
    this.loading = true;

    const index_poke = this.pokemons.findIndex((el) => el.id === this.pod_id)
    this.pokemon = this.pokemons[index_poke];

    this.swiperOptions.initialSlide = index_poke;

    // Usando o timer do RxJS para simular um atraso
    setTimeout(() => {
      this.loading = false;
    }, 100);
  }


  onSlideChange(event: [swiper: Swiper]): void {
    console.log(event[0].activeIndex);

    this.pokemon = {} as IPokemon;

    setTimeout(() => {
      this.pokemon = this.pokemons[event[0].activeIndex];
      this.router.navigate([`/pokemon/${this.pokemon.id}`])
      this.cdr.detectChanges();
    }, 100);
  }

  get imagePokemon(){
    const podeIdx = this.pokemon.dexNr.toString().padStart(3, '0');
    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${podeIdx}.png`
  }

  get classPokemon(){
    return this.pokemon.primaryType.names.English.toLowerCase()
  }
}
