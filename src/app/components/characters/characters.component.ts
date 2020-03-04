import { Component, OnInit } from "@angular/core";
import { CharacterService } from "src/app/services/character.service";
import { Character } from "src/app/models/character";
import { Result } from "src/app/models/result";
import { Observable, of } from "rxjs";
import { FilterService } from "src/app/services/filter.service";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"]
})
export class CharactersComponent implements OnInit {
  characters$: Observable<Character[]>;
  searchText: string;
  constructor(
    private characterService: CharacterService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: Result) => {
      this.characters$ = of(data.results);
      this.filterService.setAttributes(data.results);
    });
  }

  getSearchText(): string {
    return this.filterService.searchText;
  }
  getSortField(): string {
    return this.filterService.sortField;
  }
  getSortOrder(): string {
    return this.filterService.sortOrder;
  }
  getCheckedAttributeValues(): any {
    return this.filterService.getCheckedAttributeValues();
  }
}
