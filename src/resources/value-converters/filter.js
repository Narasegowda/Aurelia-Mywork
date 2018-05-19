
export class FilterValueConverter {
  toView(value,query) {
   return value.filter(value=>value.name.toLowerCase().includes(query))
  }
  fromView(value) {

  }
}

