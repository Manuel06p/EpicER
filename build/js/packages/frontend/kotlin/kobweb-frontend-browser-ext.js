(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-browser-ext'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-browser-ext'.");
    }
    globalThis['kobweb-frontend-browser-ext'] = factory(typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined' ? {} : globalThis['kobweb-frontend-browser-ext'], globalThis['kotlin-kotlin-stdlib'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.y6;
  var initMetadataForClass = kotlin_kotlin.$_$.h6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Unit_instance = kotlin_kotlin.$_$.f2;
  var objectCreate = kotlin_kotlin.$_$.x6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var VOID = kotlin_kotlin.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.j7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e6;
  var lazy = kotlin_kotlin.$_$.t9;
  var THROW_CCE = kotlin_kotlin.$_$.k9;
  var Enum = kotlin_kotlin.$_$.d9;
  var isBlank = kotlin_kotlin.$_$.z7;
  var toString = kotlin_kotlin.$_$.a7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.y5;
  var charSequenceGet = kotlin_kotlin.$_$.x5;
  var isUpperCase = kotlin_kotlin.$_$.b8;
  var Char = kotlin_kotlin.$_$.b9;
  var get_lastIndex = kotlin_kotlin.$_$.d8;
  var isLowerCase = kotlin_kotlin.$_$.a8;
  var toString_0 = kotlin_kotlin.$_$.v1;
  var Companion_getInstance = kotlin_kotlin.$_$.d2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.a9;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.s1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ElementTarget$Companion$PreviousSibling$1);
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Size, 'Size');
  initMetadataForClass(Entry, 'Entry');
  initMetadataForClass(ResizeObserver_0, 'ResizeObserver');
  initMetadataForClass(EventListenerManager, 'EventListenerManager');
  initMetadataForClass(HttpFetcher, 'HttpFetcher', VOID, VOID, VOID, [4, 5]);
  initMetadataForClass(StorageKey, 'StorageKey');
  initMetadataForClass(EnumStorageKey, 'EnumStorageKey', VOID, StorageKey);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(CancellableActionHandle, 'CancellableActionHandle');
  //endregion
  function ElementTarget$Companion$PreviousSibling$1() {
  }
  protoOf(ElementTarget$Companion$PreviousSibling$1).q19 = function (startingFrom) {
    var tmp = startingFrom.previousElementSibling;
    return tmp instanceof HTMLElement ? tmp : null;
  };
  function Companion() {
  }
  protoOf(Companion).r19 = function () {
    return new ElementTarget$Companion$PreviousSibling$1();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).s19 = function (actualSize) {
    return new Size(actualSize.blockSize, actualSize.inlineSize);
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  protoOf(Companion_1).t19 = function (actualEntry) {
    var tmp = actualEntry.target;
    // Inline function 'kotlin.collections.map' call
    var this_0 = actualEntry.borderBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.dom.observers.Companion.from.<anonymous>' call
      var tmp$ret$0 = Companion_instance_0.s19(item);
      destination.e(tmp$ret$0);
    }
    var tmp_0 = destination;
    // Inline function 'kotlin.collections.map' call
    var this_1 = actualEntry.contentBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(this_1.length);
    var inductionVariable_0 = 0;
    var last_0 = this_1.length;
    while (inductionVariable_0 < last_0) {
      var item_0 = this_1[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.dom.observers.Companion.from.<anonymous>' call
      var tmp$ret$3 = Companion_instance_0.s19(item_0);
      destination_0.e(tmp$ret$3);
    }
    var tmp_1 = destination_0;
    var tmp_2 = actualEntry.contentRect;
    // Inline function 'kotlin.collections.map' call
    var this_2 = actualEntry.devicePixelContentBoxSize;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(this_2.length);
    var inductionVariable_1 = 0;
    var last_1 = this_2.length;
    while (inductionVariable_1 < last_1) {
      var item_1 = this_2[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.dom.observers.Companion.from.<anonymous>' call
      var tmp$ret$6 = Companion_instance_0.s19(item_1);
      destination_1.e(tmp$ret$6);
    }
    return new Entry(tmp, tmp_0, tmp_1, tmp_2, destination_1);
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function ResizeObserver_init_$Init$(resized, $this) {
    ResizeObserver_0.call($this, ResizeObserver$_init_$lambda_4ha6n5(resized));
    return $this;
  }
  function ResizeObserver_init_$Create$(resized) {
    return ResizeObserver_init_$Init$(resized, objectCreate(protoOf(ResizeObserver_0)));
  }
  function Size(blockSize, inlineSize) {
    this.u19_1 = blockSize;
    this.v19_1 = inlineSize;
  }
  function Entry(target, borderBoxSize, contentBoxSize, contentRect, devicePixelContentBoxSize) {
    this.w19_1 = target;
    this.x19_1 = borderBoxSize;
    this.y19_1 = contentBoxSize;
    this.z19_1 = contentRect;
    this.a1a_1 = devicePixelContentBoxSize;
  }
  function ResizeObserver$_init_$lambda_4ha6n5($resized) {
    return function (entries, _unused_var__etf5q3) {
      $resized(entries);
      return Unit_instance;
    };
  }
  function ResizeObserver$_actualObserver$lambda($resized, this$0) {
    return function (actualEntries, _unused_var__etf5q3) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(actualEntries.length);
      var inductionVariable = 0;
      var last = actualEntries.length;
      while (inductionVariable < last) {
        var item = actualEntries[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.varabyte.kobweb.browser.dom.observers.ResizeObserver._actualObserver.<anonymous>.<anonymous>' call
        var tmp$ret$0 = Companion_instance_1.t19(item);
        destination.e(tmp$ret$0);
      }
      $resized(destination, this$0);
      return Unit_instance;
    };
  }
  function ResizeObserver_0(resized) {
    var tmp = this;
    tmp.b1a_1 = new ResizeObserver(ResizeObserver$_actualObserver$lambda(resized, this));
  }
  protoOf(ResizeObserver_0).c1a = function (element) {
    return this.b1a_1.observe(element);
  };
  protoOf(ResizeObserver_0).d1a = function () {
    return this.b1a_1.disconnect();
  };
  function EventListenerManager(target) {
    this.e1a_1 = target;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f1a_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(EventListenerManager).g1a = function (type, listener) {
    // Inline function 'kotlin.collections.set' call
    this.f1a_1.a5(type, listener);
    this.e1a_1.addEventListener(type, listener);
  };
  protoOf(EventListenerManager).h1a = function (type, listener) {
    this.g1a(type, EventListener(listener));
  };
  protoOf(EventListenerManager).i1a = function () {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.f1a_1.k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.browser.events.EventListenerManager.clearAllListeners.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var type = element.d2();
      // Inline function 'kotlin.collections.component2' call
      var listener = element.e2();
      this.e1a_1.removeEventListener(type, listener);
    }
    this.f1a_1.y1();
  };
  function get_http(_this__u8e3s4) {
    _init_properties_HttpFetcher_kt__6mmkul();
    var tmp0 = http$delegate;
    // Inline function 'kotlin.getValue' call
    http$factory();
    return tmp0.e2();
  }
  var http$delegate;
  function HttpFetcher(window_0) {
    this.j1a_1 = window_0;
    this.k1a_1 = false;
  }
  function http$delegate$lambda() {
    _init_properties_HttpFetcher_kt__6mmkul();
    return new HttpFetcher(window);
  }
  function http$factory() {
    return getPropertyCallableRef('http', 1, KProperty1, function (receiver) {
      return get_http(receiver);
    }, null);
  }
  var properties_initialized_HttpFetcher_kt_uxns7j;
  function _init_properties_HttpFetcher_kt__6mmkul() {
    if (!properties_initialized_HttpFetcher_kt_uxns7j) {
      properties_initialized_HttpFetcher_kt_uxns7j = true;
      http$delegate = lazy(http$delegate$lambda);
    }
  }
  function EnumStorageKey(name, entries, defaultValue) {
    defaultValue = defaultValue === VOID ? null : defaultValue;
    StorageKey.call(this, name, defaultValue);
    this.n1a_1 = entries;
  }
  protoOf(EnumStorageKey).o1a = function (value) {
    return value.l2_1;
  };
  protoOf(EnumStorageKey).p1a = function (value) {
    return this.o1a(value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumStorageKey).q1a = function (value) {
    var tmp0 = this.n1a_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'com.varabyte.kobweb.browser.storage.EnumStorageKey.convertFromString.<anonymous>' call
        if (element.l2_1 === value) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  };
  function getItem(_this__u8e3s4, key) {
    var tmp0_safe_receiver = _this__u8e3s4.getItem(key.r1a_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.browser.storage.getItem.<anonymous>' call
      tmp = key.q1a(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return key.s1a_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function setItem(_this__u8e3s4, key, value) {
    _this__u8e3s4.setItem(key.r1a_1, key.p1a(value));
  }
  function createStorageKey(_this__u8e3s4, name, defaultValue) {
    defaultValue = defaultValue === VOID ? null : defaultValue;
    return new EnumStorageKey(name, _this__u8e3s4, defaultValue);
  }
  function StorageKey(name, defaultValue) {
    defaultValue = defaultValue === VOID ? null : defaultValue;
    this.r1a_1 = name;
    this.s1a_1 = defaultValue;
  }
  function titleCamelCaseToKebabCase(_this__u8e3s4) {
    return camelCaseToKebabCase(_this__u8e3s4);
  }
  function camelCaseToKebabCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(_this__u8e3s4)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var lastIsUpper = false;
    var str = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>' call
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(str)) {
      var item = charSequenceGet(str, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      // Inline function 'com.varabyte.kobweb.browser.util.camelCaseToKebabCase.<anonymous>.<anonymous>' call
      var isUpper = isUpperCase(item);
      var tmp;
      if (isUpper) {
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_0) > 0) {
          if (!lastIsUpper || (_unary__edvuaz < get_lastIndex(str) && isLowerCase(charSequenceGet(str, _unary__edvuaz + 1 | 0)))) {
            this_0.f8('-');
          }
        }
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = toString_0(item).toLowerCase();
      } else {
        tmp = new Char(item);
      }
      var cFinal = tmp;
      this_0.e8(cFinal);
      lastIsUpper = isUpper;
    }
    return this_0.toString();
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.t1a_1 = new CancellableActionHandle(0);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function CancellableActionHandle(id, isInterval) {
    Companion_getInstance_3();
    isInterval = isInterval === VOID ? false : isInterval;
    this.u1a_1 = isInterval;
    this.v1a_1 = id;
  }
  function invokeLater(_this__u8e3s4, block) {
    // Inline function 'kotlin.time.Companion.milliseconds' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(0, DurationUnit_MILLISECONDS_getInstance());
    return setTimeout(_this__u8e3s4, tmp$ret$0, block);
  }
  function setTimeout(_this__u8e3s4, timeout, block) {
    var id = _this__u8e3s4.setTimeout(block, _Duration___get_inWholeMilliseconds__impl__msfiry(timeout).h3());
    return new CancellableActionHandle(id);
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventListenerManager;
  _.$_$.b = get_http;
  _.$_$.c = createStorageKey;
  _.$_$.d = getItem;
  _.$_$.e = setItem;
  _.$_$.f = invokeLater;
  _.$_$.g = titleCamelCaseToKebabCase;
  _.$_$.h = ResizeObserver_init_$Create$;
  _.$_$.i = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-browser-ext.js.map
