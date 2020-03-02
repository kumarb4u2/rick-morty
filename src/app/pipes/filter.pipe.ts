import { Pipe, PipeTransform } from "@angular/core";
import { Character } from "../models/character";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: Character[], searchText: string): Character[] {
    if (!searchText) {
      return value;
    }
    return value?.filter(
      (item: Character) =>
        item?.name?.toLowerCase().indexOf(searchText?.toLowerCase()) !== -1
    );
  }
}
