(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-chart'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-chart'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-chart'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-chart'.");
    }
    globalThis['kvision-kvision-modules-kvision-chart'] = factory(typeof globalThis['kvision-kvision-modules-kvision-chart'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-chart'], globalThis['kotlin-kotlin-stdlib'], kvision);
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
  initMetadataForObject(ChartModule, 'ChartModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function ChartModule() {
    ChartModule_instance = this;
  }
  protoOf(ChartModule).initialize_o9rygw_k$ = function () {
    import('chart.js/auto');
  };
  var ChartModule_instance;
  function ChartModule_getInstance() {
    if (ChartModule_instance == null)
      new ChartModule();
    return ChartModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ChartModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-chart.js.map
