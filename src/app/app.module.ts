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
import { ItemSpellComponent } from './components/item-spell/item-spell.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { SearchSpellsPipe } from './pipes/search-spells.pipe';
import { ItemCharacterComponent } from './components/item-character/item-character.component';
import { SearchCharactersPipe } from './pipes/search-characters.pipe';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
     {
      path: '',
      component: ListComponent
      },
      {
      path: ':id',
      component: HouseDetailsComponent
      }
    ]
  },
  {path: 'spells', component: SpellsComponent},
  {path: 'characters', component: CharactersComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

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
    SearchSpellsPipe,
    ItemCharacterComponent,
    SearchCharactersPipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
