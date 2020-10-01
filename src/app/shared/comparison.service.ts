import { Injectable, Input, Renderer2, RendererFactory2 } from '@angular/core';

class Stats {
  constructor(
    public type: HTMLElement,
    public hp: HTMLElement,
    public attack: HTMLElement,
    public defence: HTMLElement,
    public specialAttack: HTMLElement,
    public specialDefence: HTMLElement,
    public speed: HTMLElement,
  ) {}
}

@Injectable({providedIn: 'root'})
export class ComparisonService {

  render: Renderer2;

  itemElements: HTMLElement[] = [];
  itemStats: Stats[] = [];

  init(render: Renderer2) {
    this.render = render;
  }


  setElement(i: number, element: HTMLElement) {
    // if(this.itemElements[i] !== undefined){
    //   console.log("inside " + this.itemElements[i]);
    //   this.render.removeStyle(this.itemStats[i], 'background-color');
    // }
    // this.itemElements[i] = element;
    // console.log("outside " + this.itemElements[i]);

    if(this.itemElements[i] === undefined) {
      this.itemElements[i] = element;
      // console.log(this.itemElements[i])
      this.pullStats(i);
    } else {
      // console.log(this.itemStats[i]);
      this.resetStyles(i);
      this.itemElements[i] = element;
      this.pullStats(i);
    }

  }

  pullStats(i: number) {

    this.itemStats[i] = new Stats(
      this.itemElements[i].querySelector("#type"),
      this.itemElements[i].querySelector("#hp"),
      this.itemElements[i].querySelector("#attack"),
      this.itemElements[i].querySelector("#defence"),
      this.itemElements[i].querySelector("#specialAttack"),
      this.itemElements[i].querySelector("#specialDefence"),
      this.itemElements[i].querySelector("#speed")
    );

    if(this.itemStats.length === 2) {
      this.compareStats();
    }

    // console.log(this.itemStats);
  }

  compareStats() {
    // (+this.itemStats[0].hp.innerText > +this.itemStats[1].hp.innerText) ? this.render.setStyle(this.itemStats[0].hp, 'background-color', 'aquamarine') : null;
    // console.log(this.itemStats[0].hp.innerText);
    // this.render.setStyle(this.itemStats[1].hp, 'background-color', 'green');

    // console.log(this.itemStats[0].hp.firstElementChild.innerHTML);
    // console.log('\n');

    if(+this.itemStats[0].hp.firstElementChild.innerHTML > +this.itemStats[1].hp.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[0].hp, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[1].hp, 'background-color', 'IndianRed');

    } else if(+this.itemStats[0].hp.firstElementChild.innerHTML < +this.itemStats[1].hp.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[1].hp, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[0].hp, 'background-color', 'IndianRed');
    } else {
      this.render.setStyle(this.itemStats[0].hp, 'background-color', 'khaki');
      this.render.setStyle(this.itemStats[1].hp, 'background-color', 'khaki');
    }

    if(+this.itemStats[0].attack.firstElementChild.innerHTML > +this.itemStats[1].attack.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[0].attack, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[1].attack, 'background-color', 'IndianRed');
    } else if(this.itemStats[0].hp.firstElementChild.innerHTML < this.itemStats[1].hp.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[1].attack, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[0].attack, 'background-color', 'IndianRed');
    } else {
      this.render.setStyle(this.itemStats[0].attack, 'background-color', 'khaki');
      this.render.setStyle(this.itemStats[1].attack, 'background-color', 'khaki');
    }

    if(+this.itemStats[0].defence.firstElementChild.innerHTML > +this.itemStats[1].defence.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[0].defence, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[1].defence, 'background-color', 'IndianRed');
    } else if(this.itemStats[0].hp.firstElementChild.innerHTML < this.itemStats[1].hp.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[1].defence, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[0].defence, 'background-color', 'IndianRed');
    } else {
      this.render.setStyle(this.itemStats[0].defence, 'background-color', 'khaki');
      this.render.setStyle(this.itemStats[1].defence, 'background-color', 'khaki');
    }

    if(+this.itemStats[0].specialAttack.firstElementChild.innerHTML > +this.itemStats[1].specialAttack.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[0].specialAttack, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[1].specialAttack, 'background-color', 'IndianRed');
      // console.log("spAtt if")
      // console.log(this.itemStats[0].specialAttack.firstElementChild.innerHTML);
      // console.log(this.itemStats[1].specialAttack.firstElementChild.innerHTML);
    } else if(+this.itemStats[0].hp.firstElementChild.innerHTML < +this.itemStats[1].hp.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[1].specialAttack, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[0].specialAttack, 'background-color', 'IndianRed');
      // console.log("spAtt elif")
      // console.log(this.itemStats[0].specialAttack.firstElementChild.innerHTML);
      // console.log(this.itemStats[1].specialAttack.firstElementChild.innerHTML);
    } else {
      this.render.setStyle(this.itemStats[0].specialAttack, 'background-color', 'khaki');
      this.render.setStyle(this.itemStats[1].specialAttack, 'background-color', 'khaki');
      // console.log("spAtt else")
      // console.log(this.itemStats[0].specialAttack.firstElementChild.innerHTML);
      // console.log(this.itemStats[1].specialAttack.firstElementChild.innerHTML);
    }

    if(+this.itemStats[0].specialDefence.firstElementChild.innerHTML > +this.itemStats[1].specialDefence.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[0].specialDefence, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[1].specialDefence, 'background-color', 'IndianRed');
      // console.log("spDef if")
      // console.log(this.itemStats[0].specialDefence.firstElementChild.innerHTML);
      // console.log(this.itemStats[1].specialDefence.firstElementChild.innerHTML);
    } else if(+this.itemStats[0].hp.firstElementChild.innerHTML < +this.itemStats[1].hp.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[1].specialDefence, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[0].specialDefence, 'background-color', 'IndianRed');
      // console.log("spDef elif")
      // console.log(this.itemStats[0].specialDefence.firstElementChild.innerHTML);
      // console.log(this.itemStats[1].specialDefence.firstElementChild.innerHTML);
    } else {
      this.render.setStyle(this.itemStats[0].specialDefence, 'background-color', 'khaki');
      this.render.setStyle(this.itemStats[1].specialDefence, 'background-color', 'khaki');
      // console.log("spDef else")
      // console.log(this.itemStats[0].specialDefence.firstElementChild.innerHTML);
      // console.log(this.itemStats[1].specialDefence.firstElementChild.innerHTML);
    }

    if(+this.itemStats[0].speed.firstElementChild.innerHTML > +this.itemStats[1].speed.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[0].speed, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[1].speed, 'background-color', 'IndianRed');
    } else if(+this.itemStats[0].speed.firstElementChild.innerHTML < +this.itemStats[1].speed.firstElementChild.innerHTML){
      this.render.setStyle(this.itemStats[1].speed, 'background-color', 'aquamarine');
      this.render.setStyle(this.itemStats[0].speed, 'background-color', 'IndianRed');
    } else {
      this.render.setStyle(this.itemStats[0].speed, 'background-color', 'khaki');
      this.render.setStyle(this.itemStats[1].speed, 'background-color', 'khaki');
    }

  }

  resetStyles(i: number) {
    this.render.removeStyle(this.itemStats[i].hp, 'background-color');
    this.render.removeStyle(this.itemStats[i].attack, 'background-color');
    this.render.removeStyle(this.itemStats[i].defence, 'background-color');
    this.render.removeStyle(this.itemStats[i].specialAttack, 'background-color');
    this.render.removeStyle(this.itemStats[i].specialDefence, 'background-color');
    this.render.removeStyle(this.itemStats[i].speed, 'background-color');
  }




}


