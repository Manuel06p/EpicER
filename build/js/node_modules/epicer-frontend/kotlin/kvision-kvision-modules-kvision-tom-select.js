(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-tom-select'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-tom-select'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-tom-select'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-tom-select'.");
    }
    globalThis['kvision-kvision-modules-kvision-tom-select'] = factory(typeof globalThis['kvision-kvision-modules-kvision-tom-select'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-tom-select'], globalThis['kotlin-kotlin-stdlib'], kvision);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.mb;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.s3;
  var initMetadataForObject = kotlin_kotlin.$_$.oa;
  var VOID = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TomSelectModule, 'TomSelectModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function TomSelectModule() {
    TomSelectModule_instance = this;
  }
  protoOf(TomSelectModule).initialize_o9rygw_k$ = function () {
    require('tom-select/dist/css/tom-select.bootstrap5.min.css');
  };
  var TomSelectModule_instance;
  function TomSelectModule_getInstance() {
    if (TomSelectModule_instance == null)
      new TomSelectModule();
    return TomSelectModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = TomSelectModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-tom-select.js.map
