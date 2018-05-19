import {inject} from 'aurelia-framework';

@inject(Element)
export class HighlighterCustomAttribute {
  constructor(element) {
    this.element = element;
    console.log(element);
  }

  valueChanged(newColor, oldValue) {
  this.element.style.color=newColor;
  }
}

