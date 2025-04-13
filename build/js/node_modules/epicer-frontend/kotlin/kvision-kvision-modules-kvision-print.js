(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-print'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-print'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-print'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-print'.");
    }
    globalThis['kvision-kvision-modules-kvision-print'] = factory(typeof globalThis['kvision-kvision-modules-kvision-print'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-print'], globalThis['kotlin-kotlin-stdlib'], kvision);
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
  initMetadataForObject(PrintModule, 'PrintModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function PrintModule() {
    PrintModule_instance = this;
    this.printjs_1 = require('print-js');
    this.counter_1 = 0;
  }
  protoOf(PrintModule).get_printjs_gna69q_k$ = function () {
    return this.printjs_1;
  };
  protoOf(PrintModule).set_counter_xr1fnw_k$ = function (_set____db54di) {
    this.counter_1 = _set____db54di;
  };
  protoOf(PrintModule).get_counter_yf3clk_k$ = function () {
    return this.counter_1;
  };
  protoOf(PrintModule).initialize_o9rygw_k$ = function () {
    require('print-js/dist/print.css');
  };
  var PrintModule_instance;
  function PrintModule_getInstance() {
    if (PrintModule_instance == null)
      new PrintModule();
    return PrintModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PrintModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-print.js.map
