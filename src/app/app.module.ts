import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

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
import { HouseDetailsComponent } from './pages/house-details/house-details.component';
import { SearchSpellsPipe } from './pipes/search-spells.pipe';
import { ItemCharacterComponent } from './components/item-character/item-character.component';
import { SearchCharactersPipe } from './pipes/search-characters.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'home/:id',  component: HouseDetailsComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
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
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
