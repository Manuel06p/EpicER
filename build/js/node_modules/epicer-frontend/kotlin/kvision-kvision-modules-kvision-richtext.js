(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kvision.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kvision.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-richtext'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-richtext'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-richtext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-richtext'.");
    }
    globalThis['kvision-kvision-modules-kvision-richtext'] = factory(typeof globalThis['kvision-kvision-modules-kvision-richtext'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-richtext'], kvision, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_io_kvision_kvision, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var I18n_getInstance = kotlin_io_kvision_kvision.$_$.g1;
  var iterator = kotlin_kotlin.$_$.cb;
  var Unit_getInstance = kotlin_kotlin.$_$.e5;
  var protoOf = kotlin_kotlin.$_$.mb;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.s3;
  var initMetadataForObject = kotlin_kotlin.$_$.oa;
  var VOID = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(RichTextModule, 'RichTextModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function RichTextModule$lambda($trixLocales, $trix, $orig) {
    return function () {
      var tmp;
      if ($trixLocales[I18n_getInstance().get_language_cjhhk1_k$()] != undefined) {
        tmp = $trixLocales[I18n_getInstance().get_language_cjhhk1_k$()];
      } else {
        tmp = $trixLocales['en'];
      }
      var config = tmp;
      var _iterator__ex2g4s = iterator(Object.keys($trix.config.lang));
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var key = _iterator__ex2g4s.next_20eer_k$();
        $trix.config.lang[key] = config[key];
      }
      return $orig();
    };
  }
  function RichTextModule() {
    RichTextModule_instance = this;
    var trix = require('trix/dist/trix.esm.js').default;
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    // Inline function 'io.kvision.RichTextModule.<anonymous>' call
    var trixLocales = new Object();
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    // Inline function 'io.kvision.RichTextModule.<anonymous>' call
    trixLocales['en'] = new Object();
    var _iterator__ex2g4s = iterator(Object.keys(trix.config.lang));
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var key = _iterator__ex2g4s.next_20eer_k$();
      trixLocales['en'][key] = trix.config.lang[key];
    }
    var orig = trix.config.toolbar.getDefaultHTML;
    trix.config.toolbar.getDefaultHTML = RichTextModule$lambda(trixLocales, trix, orig);
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$6 = window;
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.RichTextModule.<anonymous>' call
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_1 = new Object();
    // Inline function 'io.kvision.RichTextModule.<anonymous>.<anonymous>' call
    this_1.languages = trixLocales;
    this_0.config = this_1;
    tmp$ret$6.Trix = this_0;
    require('kvision-assets/js/locales/trix/trix.pl.js');
  }
  protoOf(RichTextModule).initialize_o9rygw_k$ = function () {
    require('trix/dist/trix.css');
  };
  var RichTextModule_instance;
  function RichTextModule_getInstance() {
    if (RichTextModule_instance == null)
      new RichTextModule();
    return RichTextModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = RichTextModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-richtext.js.map
