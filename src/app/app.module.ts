import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Renderer2 } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { DropdownComponent } from './search/dropdown/dropdown.component';
import { ItemComponent } from './search/dropdown/item/item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchBarComponent,
    DropdownComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
