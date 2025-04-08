(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-multiplatform-diff'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-multiplatform-diff'.");
    }
    globalThis['kotlin-multiplatform-diff'] = factory(typeof globalThis['kotlin-multiplatform-diff'] === 'undefined' ? {} : globalThis['kotlin-multiplatform-diff'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Regex_init_$Create$ = kotlin_kotlin.$_$.b1;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_lineBreak() {
    _init_properties_DiffUtils_kt__ex4zay();
    return lineBreak;
  }
  var lineBreak;
  var properties_initialized_DiffUtils_kt_a1wjdw;
  function _init_properties_DiffUtils_kt__ex4zay() {
    if (!properties_initialized_DiffUtils_kt_a1wjdw) {
      properties_initialized_DiffUtils_kt_a1wjdw = true;
      lineBreak = Regex_init_$Create$('\r\n|\r|\n');
    }
  }
  function get_defaultPattern() {
    _init_properties_WordDiffSplitter_kt__iywd2u();
    return defaultPattern;
  }
  var defaultPattern;
  var properties_initialized_WordDiffSplitter_kt_o4eza0;
  function _init_properties_WordDiffSplitter_kt__iywd2u() {
    if (!properties_initialized_WordDiffSplitter_kt_o4eza0) {
      properties_initialized_WordDiffSplitter_kt_o4eza0 = true;
      defaultPattern = Regex_init_$Create$('\\s+|[,.\\[\\](){}/\\\\*+\\-#]');
    }
  }
  return _;
}));

//# sourceMappingURL=kotlin-multiplatform-diff.js.map
