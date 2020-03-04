import { Pipe, PipeTransform } from "@angular/core";
import { Character } from "../models/character";
import { SelectedFilter } from "../models/selected-filter";

@Pipe({
  name: "attribute"
})
export class AttributePipe implements PipeTransform {
  transform(value: Character[], selectedFilter: SelectedFilter): Character[] {
    const selectedSpecies = selectedFilter?.species;
    const selectedGenders = selectedFilter?.genders;
    const selectedOrigins = selectedFilter?.origins;
    let filteredItems = value;
    if (selectedSpecies?.length > 0) {
      filteredItems = filteredItems?.filter((item: Character) =>
        selectedSpecies?.includes(item.species)
      );
    }
    if (selectedGenders?.length > 0) {
      filteredItems = filteredItems?.filter((item: Character) =>
        selectedGenders?.includes(item.gender)
      );
    }
    if (selectedOrigins?.length > 0) {
      filteredItems = filteredItems?.filter((item: Character) =>
        selectedOrigins?.includes(item.origin.name)
      );
    }
    return filteredItems;
  }
}
