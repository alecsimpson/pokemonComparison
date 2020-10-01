import { Component, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { Pokemon } from 'src/app/shared/pokemon.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() selectedItem = new Subject<HTMLElement>();
  private isSelected = false;

  formattedStats: {
    'hp': string;
    'attack': string;
    'defence': string;
    'special-attack': string;
    'special-defence': string;
    'speed': string;
  };

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    this.formattedStats = {
      'hp': this.pokemon.stats[0]['base_stat'],
      'attack': this.pokemon.stats[1]['base_stat'],
      'defence': this.pokemon.stats[2]['base_stat'],
      'special-attack': this.pokemon.stats[3]['base_stat'],
      'special-defence': this.pokemon.stats[4]['base_stat'],
      'speed': this.pokemon.stats[5]['base_stat']
    }
  }

  onClick(divElem: HTMLElement) {
    this.selectedItem.next(divElem);
    if(divElem.hasAttribute('style') && divElem.getAttribute('style').valueOf() !== ''){}
  }


}
