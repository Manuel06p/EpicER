(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'navigo-kotlin-ng-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'navigo-kotlin-ng-js-ir'.");
    }
    globalThis['navigo-kotlin-ng-js-ir'] = factory(typeof globalThis['navigo-kotlin-ng-js-ir'] === 'undefined' ? {} : globalThis['navigo-kotlin-ng-js-ir'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.fb;
  var initMetadataForClass = kotlin_kotlin.$_$.ca;
  var Function0 = kotlin_kotlin.$_$.fe;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DoneFunction, 'DoneFunction');
  //endregion
  function DoneFunction() {
  }
  protoOf(DoneFunction).invoke_eo5g2r_k$ = function (continueResolution) {
    // Inline function 'kotlin.js.asDynamic' call
    this(continueResolution);
  };
  return _;
}));

//# sourceMappingURL=navigo-kotlin-ng-js-ir.js.map
