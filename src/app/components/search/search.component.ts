import { Component, OnInit } from "@angular/core";
import { FilterService } from "src/app/services/filter.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchText: string;
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  searchCharacters() {
    this.filterService.searchText = this.searchText;
  }
}
