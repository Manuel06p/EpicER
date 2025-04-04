(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kvision-kvision-modules-kvision-rest'] = factory(typeof globalThis['kvision-kvision-modules-kvision-rest'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-rest']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-rest.js.map
