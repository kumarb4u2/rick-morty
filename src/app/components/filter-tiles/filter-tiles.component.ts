import { Component, OnInit } from "@angular/core";
import { FilterService } from "src/app/services/filter.service";

@Component({
  selector: "app-filter-tiles",
  templateUrl: "./filter-tiles.component.html",
  styleUrls: ["./filter-tiles.component.scss"]
})
export class FilterTilesComponent implements OnInit {
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  getAllSelectedAttributes(): string[] {
    return this.filterService.getCheckedAttributeObjects();
  }

  removeSelectedAttribute(value: string, cat: string, checked: boolean) {
    this.filterService.setChecked(value, cat, checked);
  }
}
