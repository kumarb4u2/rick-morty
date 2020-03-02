import { Component, OnInit } from "@angular/core";
import { FilterService } from "src/app/services/filter.service";

@Component({
  selector: "app-sorting",
  templateUrl: "./sorting.component.html",
  styleUrls: ["./sorting.component.scss"]
})
export class SortingComponent implements OnInit {
  sortField: string = "id";
  sortOrder: string = "asc";

  constructor(private filterService: FilterService) {
    this.setSortField();
    this.setSortOrder();
  }

  ngOnInit(): void {}

  setSortField() {
    this.filterService.sortField = this.sortField;
  }

  setSortOrder() {
    this.filterService.sortOrder = this.sortOrder;
  }
}
