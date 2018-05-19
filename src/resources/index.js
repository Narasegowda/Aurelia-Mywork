import {PLATFORM} from 'aurelia-pal';
export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('./value-converters/valueconverter'),
    PLATFORM.moduleName('./value-converters/filter'),
    PLATFORM.moduleName('./attributes/highlighter')
  ]);
}
