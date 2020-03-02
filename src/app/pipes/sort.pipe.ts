import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(items: any[], fieldName: string, order: string = "asc"): any {
    if (!items || !fieldName) {
      return items;
    }

    if (order === "desc") {
      return items.sort((left, right) => {
        if (left[fieldName] < right[fieldName]) return 1;

        if (left[fieldName] > right[fieldName]) return -1;

        return 0;
      });
    }

    return items.sort((left, right) => {
      if (left[fieldName] < right[fieldName]) return -1;

      if (left[fieldName] > right[fieldName]) return 1;

      return 0;
    });
  }
}
