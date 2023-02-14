import { NavbarComponent } from './components/navbar/navbar.component';
import { GenerationComponent } from './pages/generation/generation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [
      { path: '', redirectTo: 'generation', pathMatch: 'full' },
      { path: 'generation', component: GenerationComponent },
      { path: 'pokemon/:name', component: PokemonComponent },
    ]
  },
  { path: '**', redirectTo: 'generation' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
