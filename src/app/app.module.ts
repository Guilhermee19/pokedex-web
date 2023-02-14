import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconDarkLightComponent } from './components/shared/icon-dark-light/icon-dark-light.component';
import { PageLoadingComponent } from './components/shared/page-loading/page-loading.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { GenerationComponent } from './pages/generation/generation.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    IconDarkLightComponent,
    LoadingComponent,
    PageLoadingComponent,
    NavbarComponent,
    GenerationComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
