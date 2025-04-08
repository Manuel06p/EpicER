(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-datetime'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-datetime'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-datetime'.");
    }
    globalThis['kvision-kvision-modules-kvision-datetime'] = factory(typeof globalThis['kvision-kvision-modules-kvision-datetime'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-datetime'], globalThis['kotlin-kotlin-stdlib'], kvision);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.fb;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.q2;
  var initMetadataForObject = kotlin_kotlin.$_$.ha;
  var VOID = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(DatetimeModule, 'DatetimeModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function DatetimeModule() {
    DatetimeModule_instance = this;
    this.locales_1 = {};
    require('@eonasdan/tempus-dominus/dist/css/tempus-dominus.min.css');
    this.tempusDominus_1 = require('@eonasdan/tempus-dominus');
    var localeAr = require('@eonasdan/tempus-dominus/dist/locales/ar.js');
    this.locales_1[localeAr.name] = localeAr.localization;
    var localeCa = require('@eonasdan/tempus-dominus/dist/locales/ca.js');
    this.locales_1[localeCa.name] = localeCa.localization;
    var localeDe = require('@eonasdan/tempus-dominus/dist/locales/de.js');
    this.locales_1[localeDe.name] = localeDe.localization;
    var localeEs = require('@eonasdan/tempus-dominus/dist/locales/es.js');
    this.locales_1[localeEs.name] = localeEs.localization;
    var localeFi = require('@eonasdan/tempus-dominus/dist/locales/fi.js');
    this.locales_1[localeFi.name] = localeFi.localization;
    var localeFr = require('@eonasdan/tempus-dominus/dist/locales/fr.js');
    this.locales_1[localeFr.name] = localeFr.localization;
    var localeIt = require('@eonasdan/tempus-dominus/dist/locales/it.js');
    this.locales_1[localeIt.name] = localeIt.localization;
    var localeNl = require('@eonasdan/tempus-dominus/dist/locales/nl.js');
    this.locales_1[localeNl.name] = localeNl.localization;
    var localePl = require('@eonasdan/tempus-dominus/dist/locales/pl.js');
    this.locales_1[localePl.name] = localePl.localization;
    var localePt = require('@eonasdan/tempus-dominus/dist/locales/pt-PT.js');
    this.locales_1[localePt.name] = localePt.localization;
    var localeRo = require('@eonasdan/tempus-dominus/dist/locales/ro.js');
    this.locales_1[localeRo.name] = localeRo.localization;
    var localeRu = require('@eonasdan/tempus-dominus/dist/locales/ru.js');
    this.locales_1[localeRu.name] = localeRu.localization;
    var localeSk = require('@eonasdan/tempus-dominus/dist/locales/sk.js');
    this.locales_1[localeSk.name] = localeSk.localization;
    var localeSl = require('@eonasdan/tempus-dominus/dist/locales/sl.js');
    this.locales_1[localeSl.name] = localeSl.localization;
    var localeTr = require('@eonasdan/tempus-dominus/dist/locales/tr.js');
    this.locales_1[localeTr.name] = localeTr.localization;
    var localeZh = require('@eonasdan/tempus-dominus/dist/locales/zh-CN.js');
    this.locales_1[localeZh.name] = localeZh.localization;
  }
  protoOf(DatetimeModule).get_tempusDominus_rgftlh_k$ = function () {
    return this.tempusDominus_1;
  };
  protoOf(DatetimeModule).get_locales_4k3nf5_k$ = function () {
    return this.locales_1;
  };
  protoOf(DatetimeModule).initialize_o9rygw_k$ = function () {
  };
  var DatetimeModule_instance;
  function DatetimeModule_getInstance() {
    if (DatetimeModule_instance == null)
      new DatetimeModule();
    return DatetimeModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DatetimeModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-datetime.js.map
