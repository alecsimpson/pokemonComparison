import { Component, OnInit, Renderer2 } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon.model';
import { SearchService } from '../search.service';
import { ComparisonService } from '../../shared/comparison.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  initFlag = false;
  previousSelectedItem: HTMLElement;
  currentSelectedItem: HTMLElement;

  static instanceCount = 0;
  private id: number;

  constructor(private searchService: SearchService, private comparisonService: ComparisonService, private render: Renderer2) { }

  ngOnInit(): void {
    this.searchService.searchResults.subscribe(list => {
      this.pokemonList = list;
    });
    this.searchService.initFlag.subscribe(init => {
      this.initFlag = init;
    });
    this.id = DropdownComponent.instanceCount++;
  }

  havePokemon() {
    return (this.pokemonList.length > 0);
  }

  onItemSelected(divElem: HTMLElement) {
    if(this.currentSelectedItem) {
      this.previousSelectedItem = this.currentSelectedItem;
      this.render.removeStyle(this.previousSelectedItem, 'border');
    }
    this.currentSelectedItem = divElem;
    this.render.setStyle(this.currentSelectedItem, 'border', '2px solid green');

    // this.comparisonService.itemElements[this.id] = this.currentSelectedItem;
    this.comparisonService.init(this.render);
    this.comparisonService.setElement(this.id, this.currentSelectedItem);
    // this.comparisonService.pullStats();
  }



}
