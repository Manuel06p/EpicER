(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-maps'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-maps'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-maps'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-maps'.");
    }
    globalThis['kvision-kvision-modules-kvision-maps'] = factory(typeof globalThis['kvision-kvision-modules-kvision-maps'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-maps'], globalThis['kotlin-kotlin-stdlib'], kvision);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.ye;
  var protoOf = kotlin_kotlin.$_$.mb;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.s3;
  var initMetadataForObject = kotlin_kotlin.$_$.oa;
  var VOID = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(MapsModule, 'MapsModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function setDefaultIcon($this) {
    $this.leaflet_1.Icon.Default.imagePath = '';
    delete($this.leaflet_1.Icon.Default.prototype._getIconUrl);
    // Inline function 'io.kvision.utils.obj' call
    var tmp = {};
    // Inline function 'kotlin.apply' call
    var this_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'io.kvision.MapsModule.setDefaultIcon.<anonymous>' call
    // Inline function 'kotlin.js.unsafeCast' call
    this_0.iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
    // Inline function 'kotlin.js.unsafeCast' call
    this_0.iconUrl = require('leaflet/dist/images/marker-icon.png');
    // Inline function 'kotlin.js.unsafeCast' call
    this_0.shadowUrl = require('leaflet/dist/images/marker-shadow.png');
    $this.leaflet_1.Icon.Default.mergeOptions(this_0);
  }
  function MapsModule() {
    MapsModule_instance = this;
    this.leaflet_1 = require('leaflet');
    setDefaultIcon(this);
  }
  protoOf(MapsModule).get_leaflet_2izx8x_k$ = function () {
    return this.leaflet_1;
  };
  protoOf(MapsModule).initialize_o9rygw_k$ = function () {
    require('leaflet/dist/leaflet.css');
  };
  var MapsModule_instance;
  function MapsModule_getInstance() {
    if (MapsModule_instance == null)
      new MapsModule();
    return MapsModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MapsModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-maps.js.map
