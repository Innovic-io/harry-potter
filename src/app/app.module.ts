import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { HomeComponent } from './pages/home/home.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchPipe } from './pipes/search.pipe';
import { SpellsComponent } from './pages/spells/spells.component';
import { CharactersComponent } from './pages/characters/characters.component';
import {ItemSpellComponent} from './components/item-spell/item-spell.component';
import {HouseDetailsComponent} from './components/house-details/house-details.component';
import {DetailsComponent} from './pages/details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ItemComponent,
    HomeComponent,
    BottomMenuComponent,
    SearchPipe,
    SpellsComponent,
    CharactersComponent,
    ItemSpellComponent,
    HouseDetailsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
