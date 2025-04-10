(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-bootstrap-icons'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-bootstrap-icons'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-bootstrap-icons'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-bootstrap-icons'.");
    }
    globalThis['kvision-kvision-modules-kvision-bootstrap-icons'] = factory(typeof globalThis['kvision-kvision-modules-kvision-bootstrap-icons'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-bootstrap-icons'], globalThis['kotlin-kotlin-stdlib'], kvision);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.jb;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.g3;
  var initMetadataForObject = kotlin_kotlin.$_$.la;
  var VOID = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(BootstrapIconsModule, 'BootstrapIconsModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function BootstrapIconsModule() {
    BootstrapIconsModule_instance = this;
  }
  protoOf(BootstrapIconsModule).initialize_o9rygw_k$ = function () {
    require('bootstrap-icons/font/bootstrap-icons.css');
  };
  var BootstrapIconsModule_instance;
  function BootstrapIconsModule_getInstance() {
    if (BootstrapIconsModule_instance == null)
      new BootstrapIconsModule();
    return BootstrapIconsModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BootstrapIconsModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-bootstrap-icons.js.map
