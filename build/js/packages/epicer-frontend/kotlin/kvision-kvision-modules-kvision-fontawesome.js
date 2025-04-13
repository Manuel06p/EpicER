(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-fontawesome'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-fontawesome'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-fontawesome'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-fontawesome'.");
    }
    globalThis['kvision-kvision-modules-kvision-fontawesome'] = factory(typeof globalThis['kvision-kvision-modules-kvision-fontawesome'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-fontawesome'], globalThis['kotlin-kotlin-stdlib'], kvision);
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
  initMetadataForObject(FontAwesomeModule, 'FontAwesomeModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function FontAwesomeModule() {
    FontAwesomeModule_instance = this;
  }
  protoOf(FontAwesomeModule).initialize_o9rygw_k$ = function () {
    require('@fortawesome/fontawesome-free/css/all.min.css');
  };
  var FontAwesomeModule_instance;
  function FontAwesomeModule_getInstance() {
    if (FontAwesomeModule_instance == null)
      new FontAwesomeModule();
    return FontAwesomeModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontAwesomeModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-fontawesome.js.map
