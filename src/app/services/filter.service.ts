import { Injectable } from "@angular/core";
import { Character } from "../models/character";

@Injectable({
  providedIn: "root"
})
export class FilterService {
  private _searchText: string;
  private _sortField: string;
  private _sortOrder: string;
  private _attribute: any = {
    species: [],
    genders: [],
    origins: []
  };

  set searchText(value) {
    this._searchText = value;
  }

  get searchText() {
    return this._searchText;
  }
  set sortField(value) {
    this._sortField = value;
  }

  get sortField() {
    return this._sortField;
  }
  set sortOrder(value) {
    this._sortOrder = value;
  }

  get sortOrder() {
    return this._sortOrder;
  }

  constructor() {}

  set attribute(value) {
    this._attribute = value;
  }

  get attribute() {
    return this._attribute;
  }

  getUniqueItems(props: string[]) {
    return props.filter((v, i, a) => a.indexOf(v) === i);
  }

  formatAttributes(items: string[], cat: string): any[] {
    const formattedList: any[] = [];
    for (const item of items) {
      formattedList.push({ checked: false, value: item, category: cat });
    }
    return formattedList;
  }

  setAttributes(characters: Character[]) {
    let allSpecies: any[] = [];
    let allGenders: any[] = [];
    let allOrigins: any[] = [];
    for (const character of characters) {
      allSpecies.push(character.species);
      allGenders.push(character.gender);
      allOrigins.push(character.origin.name);
    }
    // taking unique items
    allSpecies = this.formatAttributes(
      this.getUniqueItems(allSpecies),
      "species"
    );
    allGenders = this.formatAttributes(
      this.getUniqueItems(allGenders),
      "genders"
    );
    allOrigins = this.formatAttributes(
      this.getUniqueItems(allOrigins),
      "origins"
    );
    this.attribute = {
      species: allSpecies,
      genders: allGenders,
      origins: allOrigins
    };
  }

  // setting check or unchecked
  setChecked(value: string, cat: string, checked: boolean) {
    let attr = this.attribute[cat];
    const itemIndex = attr.findIndex(item => item.value === value);
    if (checked) {
      attr[itemIndex].checked = true;
    } else {
      attr[itemIndex].checked = false;
    }
    this.attribute = { ...this.attribute, [cat]: attr };
  }
  // to filter items in pipe we need data as array of string
  getCheckedAttributeValues() {
    let attr = this.attribute;
    const reduce = (acc, current) => {
      if (current.checked) {
        acc.push(current.value);
      }
      return acc;
    };
    attr = {
      species: attr.species.reduce(reduce, []),
      genders: attr.genders.reduce(reduce, []),
      origins: attr.origins.reduce(reduce, [])
    };
    return attr;
  }

  // To display select filters
  getCheckedAttributeObjects() {
    let attr = this.attribute;
    const finalItemList = [];
    for (const key of Object.keys(attr)) {
      for (const item of attr[key]) {
        if (item.checked) {
          finalItemList.push(item);
        }
      }
    }
    return finalItemList;
  }
}
