import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  sendInput(query: string) {
    this.searchService.queryPokemon(query);
  }

  fetchData() {
    this.searchService.initPokemonList();
  }

}
