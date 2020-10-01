import { Injectable, OnInit, Output } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class DataService implements OnInit {

  constructor(private http: HttpClient){}

  @Output() pokemonList = new Subject<Pokemon[]>();

  ngOnInit() {
  }

  fetchPokemon() {
    let tmpList = [];
    for(let i = 0; i < 151; i++){
      this.http.get<JSON>('https://pokeapi.co/api/v2/pokemon/'+(i+1)).subscribe(res=>{
        let name = res['species']['name'];
        let image = res['sprites']['front_default'];
        let type = res['types'][0]['type']['name'];
        let stats = res['stats'];
        let id = res['id'];
        tmpList.push(new Pokemon(name, image, type, +id, stats));
        tmpList.sort((a,b)=>(a.id > b.id) ? 1 : -1);
      });
    }
    this.pokemonList.next(tmpList);
  }



}

