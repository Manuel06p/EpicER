(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobwebx-markdown'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobwebx-markdown'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobwebx-markdown'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-kobwebx-markdown'.");
    }
    globalThis['kobweb-frontend-kobwebx-markdown'] = factory(typeof globalThis['kobweb-frontend-kobwebx-markdown'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobwebx-markdown'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.y6;
  var initMetadataForClass = kotlin_kotlin.$_$.h6;
  var VOID = kotlin_kotlin.$_$.e;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(MarkdownContext, 'MarkdownContext');
  //endregion
  function get_LocalMarkdownContext() {
    _init_properties_MarkdownContext_kt__bijofm();
    return LocalMarkdownContext;
  }
  var LocalMarkdownContext;
  var com_varabyte_kobwebx_markdown_MarkdownContext$stable;
  function MarkdownContext(path, frontMatter) {
    this.q44_1 = path;
    this.r44_1 = frontMatter;
  }
  function LocalMarkdownContext$lambda() {
    _init_properties_MarkdownContext_kt__bijofm();
    return null;
  }
  var properties_initialized_MarkdownContext_kt_igqsds;
  function _init_properties_MarkdownContext_kt__bijofm() {
    if (!properties_initialized_MarkdownContext_kt_igqsds) {
      properties_initialized_MarkdownContext_kt_igqsds = true;
      LocalMarkdownContext = compositionLocalOf(VOID, LocalMarkdownContext$lambda);
      com_varabyte_kobwebx_markdown_MarkdownContext$stable = 8;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalMarkdownContext;
  _.$_$.b = MarkdownContext;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobwebx-markdown.js.map
