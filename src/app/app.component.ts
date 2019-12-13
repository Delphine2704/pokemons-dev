import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS }from './mock-pokemons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private pokemons: Pokemon[];
  private title: string = "Pokémons";
  private value: string = '';
  private values: string = '';

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez cliqué sur " + pokemon.name);
  }

  onKey(value: string) {
    this.value = 'Bonjour ' + value;
  }

  onKeyEnter(values: string) {
    this.values = 'Bonjour à toi ' + values;
  }

}
