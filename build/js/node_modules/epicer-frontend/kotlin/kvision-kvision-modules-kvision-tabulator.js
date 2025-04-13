(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-tabulator'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-tabulator'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-tabulator'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-tabulator'.");
    }
    globalThis['kvision-kvision-modules-kvision-tabulator'] = factory(typeof globalThis['kvision-kvision-modules-kvision-tabulator'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-tabulator'], globalThis['kotlin-kotlin-stdlib'], kvision);
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
  initMetadataForObject(TabulatorCssBootstrapModule, 'TabulatorCssBootstrapModule', VOID, VOID, [ModuleInitializer]);
  initMetadataForObject(TabulatorModule, 'TabulatorModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function TabulatorCssBootstrapModule() {
    TabulatorCssBootstrapModule_instance = this;
  }
  protoOf(TabulatorCssBootstrapModule).initialize_o9rygw_k$ = function () {
    require('tabulator-tables/dist/css/tabulator_bootstrap5.min.css');
  };
  var TabulatorCssBootstrapModule_instance;
  function TabulatorCssBootstrapModule_getInstance() {
    if (TabulatorCssBootstrapModule_instance == null)
      new TabulatorCssBootstrapModule();
    return TabulatorCssBootstrapModule_instance;
  }
  function _get_tabulator__hwjyof($this) {
    return $this.tabulator_1;
  }
  function TabulatorModule() {
    TabulatorModule_instance = this;
    this.tabulator_1 = require('tabulator-tables');
  }
  protoOf(TabulatorModule).getConstructor_y67tfo_k$ = function () {
    return this.tabulator_1;
  };
  protoOf(TabulatorModule).initialize_o9rygw_k$ = function () {
  };
  var TabulatorModule_instance;
  function TabulatorModule_getInstance() {
    if (TabulatorModule_instance == null)
      new TabulatorModule();
    return TabulatorModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = TabulatorCssBootstrapModule_getInstance;
  _.$_$.b = TabulatorModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-tabulator.js.map
