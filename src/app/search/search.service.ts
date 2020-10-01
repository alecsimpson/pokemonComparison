import { ThrowStmt } from '@angular/compiler';
import { Injectable, OnInit, Output } from "@angular/core";
import { Subject } from 'rxjs';
import { DataService } from "../shared/data.service";
import { Pokemon } from "../shared/pokemon.model";

@Injectable()
export class SearchService implements OnInit {

  private pokemonList: Pokemon[] = [];
  @Output() searchResults = new Subject<Pokemon[]>();
  @Output() initFlag = new Subject<boolean>();
  private firstInit = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
  }

  initPokemonList() {
    if(!this.firstInit) {
      this.dataService.pokemonList.subscribe(list => {
        this.pokemonList = list;
      });
      this.dataService.fetchPokemon();
      this.searchResults.next(this.pokemonList);
      this.initFlag.next(true);
      this.firstInit = true;
    }
  }

  queryPokemon(query: string) {
    this.searchResults.next([...this.pokemonList.filter(element => (element.name.indexOf(query) > -1))]);
  }



}

