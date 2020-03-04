import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MainComponent } from "./components/main/main.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CharactersComponent } from "./components/characters/characters.component";
import { SingleCharacterComponent } from "./components/single-character/single-character.component";
import { SearchComponent } from "./components/search/search.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { SortingComponent } from "./components/sorting/sorting.component";
import { SortPipe } from "./pipes/sort.pipe";
import { AttributePipe } from "./pipes/attribute.pipe";
import { FilterTilesComponent } from './components/filter-tiles/filter-tiles.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    CharactersComponent,
    SingleCharacterComponent,
    SearchComponent,
    FilterPipe,
    SortingComponent,
    SortPipe,
    AttributePipe,
    FilterTilesComponent,
    ThumbnailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
