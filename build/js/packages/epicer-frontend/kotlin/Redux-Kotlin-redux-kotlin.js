(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['Redux-Kotlin-redux-kotlin'] = factory(typeof globalThis['Redux-Kotlin-redux-kotlin'] === 'undefined' ? {} : globalThis['Redux-Kotlin-redux-kotlin']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Redux-Kotlin-redux-kotlin.js.map
