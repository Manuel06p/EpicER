(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    globalThis.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.qf;
  var VOID = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  //endregion
  function clear(_this__u8e3s4) {
    while (_this__u8e3s4.hasChildNodes()) {
      _this__u8e3s4.removeChild(ensureNotNull(_this__u8e3s4.firstChild));
    }
  }
  function RequestInit(method, headers, body, referrer, referrerPolicy, mode, credentials, cache, redirect, integrity, keepalive, window_0) {
    method = method === VOID ? undefined : method;
    headers = headers === VOID ? undefined : headers;
    body = body === VOID ? undefined : body;
    referrer = referrer === VOID ? undefined : referrer;
    referrerPolicy = referrerPolicy === VOID ? undefined : referrerPolicy;
    mode = mode === VOID ? undefined : mode;
    credentials = credentials === VOID ? undefined : credentials;
    cache = cache === VOID ? undefined : cache;
    redirect = redirect === VOID ? undefined : redirect;
    integrity = integrity === VOID ? undefined : integrity;
    keepalive = keepalive === VOID ? undefined : keepalive;
    window_0 = window_0 === VOID ? undefined : window_0;
    var o = {};
    o['method'] = method;
    o['headers'] = headers;
    o['body'] = body;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    return o;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = clear;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
