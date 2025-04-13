(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kvision.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kvision.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-i18n'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-i18n'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-i18n'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-i18n'.");
    }
    globalThis['kvision-kvision-modules-kvision-i18n'] = factory(typeof globalThis['kvision-kvision-modules-kvision-i18n'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-i18n'], kvision, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_io_kvision_kvision, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var I18n_getInstance = kotlin_io_kvision_kvision.$_$.g1;
  var protoOf = kotlin_kotlin.$_$.mb;
  var tr = kotlin_io_kvision_kvision.$_$.b3;
  var ntr = kotlin_io_kvision_kvision.$_$.y2;
  var trans = kotlin_io_kvision_kvision.$_$.a3;
  var trans_0 = kotlin_io_kvision_kvision.$_$.z2;
  var I18nManager = kotlin_io_kvision_kvision.$_$.c3;
  var initMetadataForClass = kotlin_kotlin.$_$.ja;
  var VOID = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DefaultI18nManager, 'DefaultI18nManager', VOID, VOID, [I18nManager]);
  //endregion
  function _get_i18n__d75fcd($this) {
    return $this.i18n_1;
  }
  function DefaultI18nManager(translations) {
    this.i18n_1 = require('gettext.js').default();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = translations.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.i18n.DefaultI18nManager.<anonymous>' call
      var json = JSON.parse(JSON.stringify(element.get_value_j01efc_k$()));
      json[''].language = element.get_key_18j28a_k$();
      this.i18n_1.loadJSON(json, 'messages');
    }
  }
  protoOf(DefaultI18nManager).gettext_fnjyej_k$ = function (key, args) {
    this.i18n_1.setLocale(I18n_getInstance().get_language_cjhhk1_k$());
    var tmp0_elvis_lhs = function () {
      var $externalVarargReceiverTmp = this.i18n_1;
      return $externalVarargReceiverTmp.gettext.apply($externalVarargReceiverTmp, [key].concat([].slice.call(args.slice())));
    }.call(this);
    return tmp0_elvis_lhs == null ? key : tmp0_elvis_lhs;
  };
  protoOf(DefaultI18nManager).ngettext_92uof3_k$ = function (singularKey, pluralKey, value, args) {
    this.i18n_1.setLocale(I18n_getInstance().get_language_cjhhk1_k$());
    var tmp0_elvis_lhs = function () {
      var $externalVarargReceiverTmp = this.i18n_1;
      return $externalVarargReceiverTmp.ngettext.apply($externalVarargReceiverTmp, [singularKey, pluralKey, value].concat([].slice.call(args.slice())));
    }.call(this);
    return tmp0_elvis_lhs == null ? value === 1 ? singularKey : pluralKey : tmp0_elvis_lhs;
  };
  //region block: post-declaration
  protoOf(DefaultI18nManager).tr_8q01fg_k$ = tr;
  protoOf(DefaultI18nManager).ntr_8gt1sk_k$ = ntr;
  protoOf(DefaultI18nManager).trans_c4o9pq_k$ = trans;
  protoOf(DefaultI18nManager).trans_netp7j_k$ = trans_0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DefaultI18nManager;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-i18n.js.map
