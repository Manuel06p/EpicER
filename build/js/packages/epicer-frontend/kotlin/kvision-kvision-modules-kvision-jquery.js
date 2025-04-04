(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kvision-kvision-modules-kvision-jquery'] = factory(typeof globalThis['kvision-kvision-modules-kvision-jquery'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-jquery']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-jquery.js.map
