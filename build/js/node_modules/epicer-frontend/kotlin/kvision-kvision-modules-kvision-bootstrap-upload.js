(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'jquery', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('jquery'), require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof jQuery === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-bootstrap-upload'. Its dependency 'jquery' was not found. Please, check whether 'jquery' is loaded prior to 'kvision-kvision-modules-kvision-bootstrap-upload'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-bootstrap-upload'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-bootstrap-upload'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-bootstrap-upload'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-bootstrap-upload'.");
    }
    globalThis['kvision-kvision-modules-kvision-bootstrap-upload'] = factory(typeof globalThis['kvision-kvision-modules-kvision-bootstrap-upload'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-bootstrap-upload'], jQuery, globalThis['kotlin-kotlin-stdlib'], kvision);
  }
}(function (_, jQuery, kotlin_kotlin, kotlin_io_kvision_kvision) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.gb;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.s2;
  var initMetadataForObject = kotlin_kotlin.$_$.ia;
  var VOID = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(BootstrapUploadModule, 'BootstrapUploadModule', VOID, VOID, [ModuleInitializer]);
  //endregion
  function BootstrapUploadModule() {
    BootstrapUploadModule_instance = this;
    var bootstrap = require('bootstrap');
    // Inline function 'kotlin.js.asDynamic' call
    jQuery.fn['modal'] = bootstrap.Modal.jQueryInterface;
    // Inline function 'kotlin.js.asDynamic' call
    jQuery.fn['modal'].Constructor = bootstrap.Modal;
  }
  protoOf(BootstrapUploadModule).initialize_o9rygw_k$ = function () {
    require('bootstrap-fileinput/css/fileinput.min.css');
    require('bootstrap-fileinput/themes/explorer-fa6/theme.min.css');
    require('bootstrap-fileinput');
    require('bootstrap-fileinput/js/locales/ar.js');
    require('bootstrap-fileinput/js/locales/az.js');
    require('bootstrap-fileinput/js/locales/bg.js');
    require('bootstrap-fileinput/js/locales/ca.js');
    require('bootstrap-fileinput/js/locales/cr.js');
    require('bootstrap-fileinput/js/locales/cs.js');
    require('bootstrap-fileinput/js/locales/da.js');
    require('bootstrap-fileinput/js/locales/de.js');
    require('bootstrap-fileinput/js/locales/el.js');
    require('bootstrap-fileinput/js/locales/es.js');
    require('bootstrap-fileinput/js/locales/et.js');
    require('bootstrap-fileinput/js/locales/fa.js');
    require('bootstrap-fileinput/js/locales/fi.js');
    require('bootstrap-fileinput/js/locales/fr.js');
    require('bootstrap-fileinput/js/locales/gl.js');
    require('bootstrap-fileinput/js/locales/he.js');
    require('bootstrap-fileinput/js/locales/hu.js');
    require('bootstrap-fileinput/js/locales/id.js');
    require('bootstrap-fileinput/js/locales/it.js');
    require('bootstrap-fileinput/js/locales/ja.js');
    require('bootstrap-fileinput/js/locales/ka.js');
    require('bootstrap-fileinput/js/locales/kr.js');
    require('bootstrap-fileinput/js/locales/kz.js');
    require('bootstrap-fileinput/js/locales/lt.js');
    require('bootstrap-fileinput/js/locales/lv.js');
    require('bootstrap-fileinput/js/locales/nl.js');
    require('bootstrap-fileinput/js/locales/no.js');
    require('bootstrap-fileinput/js/locales/pl.js');
    require('bootstrap-fileinput/js/locales/pt.js');
    require('bootstrap-fileinput/js/locales/ro.js');
    require('bootstrap-fileinput/js/locales/ru.js');
    require('bootstrap-fileinput/js/locales/sk.js');
    require('bootstrap-fileinput/js/locales/sl.js');
    require('bootstrap-fileinput/js/locales/sr-latn.js');
    require('bootstrap-fileinput/js/locales/sv.js');
    require('bootstrap-fileinput/js/locales/th.js');
    require('bootstrap-fileinput/js/locales/tr.js');
    require('bootstrap-fileinput/js/locales/uk.js');
    require('bootstrap-fileinput/js/locales/uz.js');
    require('bootstrap-fileinput/js/locales/vi.js');
    require('bootstrap-fileinput/js/locales/zh.js');
    require('bootstrap-fileinput/themes/explorer-fa6/theme.js');
    require('bootstrap-fileinput/themes/fa6/theme.js');
  };
  var BootstrapUploadModule_instance;
  function BootstrapUploadModule_getInstance() {
    if (BootstrapUploadModule_instance == null)
      new BootstrapUploadModule();
    return BootstrapUploadModule_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BootstrapUploadModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-bootstrap-upload.js.map
