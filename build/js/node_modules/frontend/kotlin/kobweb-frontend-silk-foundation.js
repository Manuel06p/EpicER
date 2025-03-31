(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    globalThis['kobweb-frontend-silk-foundation'] = factory(typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-foundation'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-browser-ext']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.f2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.k9;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.a4;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.i1;
  var VOID = kotlin_kotlin.$_$.e;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.b;
  var protoOf = kotlin_kotlin.$_$.y6;
  var initMetadataForObject = kotlin_kotlin.$_$.m6;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u1;
  var startsWith = kotlin_kotlin.$_$.n8;
  var endsWith = kotlin_kotlin.$_$.w7;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var initMetadataForClass = kotlin_kotlin.$_$.h6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var toString = kotlin_kotlin.$_$.a7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.f;
  var asList = kotlin_kotlin.$_$.da;
  var toSet = kotlin_kotlin.$_$.w4;
  var asSequence = kotlin_kotlin.$_$.y2;
  var flatMap = kotlin_kotlin.$_$.n7;
  var filter = kotlin_kotlin.$_$.m7;
  var Sequence = kotlin_kotlin.$_$.l7;
  var isInterface = kotlin_kotlin.$_$.q6;
  var map = kotlin_kotlin.$_$.p7;
  var toSet_0 = kotlin_kotlin.$_$.r7;
  var subtract = kotlin_kotlin.$_$.q4;
  var sorted = kotlin_kotlin.$_$.p4;
  var joinToString = kotlin_kotlin.$_$.r3;
  var trimIndent = kotlin_kotlin.$_$.w8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var KtMap = kotlin_kotlin.$_$.p2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var listOf = kotlin_kotlin.$_$.y3;
  var emptyList = kotlin_kotlin.$_$.h3;
  var listOf_0 = kotlin_kotlin.$_$.z3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.y5;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.u9;
  var mapCapacity = kotlin_kotlin.$_$.a4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var trimMargin = kotlin_kotlin.$_$.x8;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d1;
  var mutableListOf = kotlin_kotlin.$_$.d4;
  var plus = kotlin_kotlin.$_$.h4;
  var initMetadataForInterface = kotlin_kotlin.$_$.k6;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var equals = kotlin_kotlin.$_$.b6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z2;
  var substringAfterLast = kotlin_kotlin.$_$.o8;
  var endsWith_0 = kotlin_kotlin.$_$.x7;
  var copyToArray = kotlin_kotlin.$_$.e3;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var getValue = kotlin_kotlin.$_$.p3;
  var toList = kotlin_kotlin.$_$.t4;
  var com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x;
  var objectCreate = kotlin_kotlin.$_$.x6;
  var getStringHashCode = kotlin_kotlin.$_$.f6;
  var isBlank = kotlin_kotlin.$_$.z7;
  var first = kotlin_kotlin.$_$.y7;
  var Char = kotlin_kotlin.$_$.b9;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var setOf = kotlin_kotlin.$_$.m4;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var to = kotlin_kotlin.$_$.ba;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.j;
  var hashCode = kotlin_kotlin.$_$.g6;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.g1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var distinct = kotlin_kotlin.$_$.f3;
  var lazy = kotlin_kotlin.$_$.t9;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var KProperty1 = kotlin_kotlin.$_$.j7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e6;
  var enumEntries = kotlin_kotlin.$_$.q5;
  var Enum = kotlin_kotlin.$_$.d9;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var CSSMediaRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.c1;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var plus_0 = kotlin_kotlin.$_$.i4;
  var toMutableList = kotlin_kotlin.$_$.u4;
  var joinToString_0 = kotlin_kotlin.$_$.s3;
  var getKClass = kotlin_kotlin.$_$.c;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var getItem = kotlin_com_varabyte_kobweb_browser_ext.$_$.d;
  var setItem = kotlin_com_varabyte_kobweb_browser_ext.$_$.e;
  var createStorageKey = kotlin_com_varabyte_kobweb_browser_ext.$_$.c;
  var KProperty0 = kotlin_kotlin.$_$.i7;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var ensureNotNull = kotlin_kotlin.$_$.s9;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(SilkStyleSheet, 'SilkStyleSheet', VOID, StyleSheet);
  initMetadataForClass(Entry, 'Entry');
  initMetadataForClass(DeferredComposablesState, 'DeferredComposablesState', DeferredComposablesState);
  initMetadataForObject(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt');
  initMetadataForClass(Deferred$$inlined$cache$1$1);
  initMetadataForClass(InitSilkContext, 'InitSilkContext');
  initMetadataForClass(MutableSilkConfig, 'MutableSilkConfig', MutableSilkConfig);
  initMetadataForCompanion(Companion);
  initMetadataForClass(StyleScope, 'StyleScope');
  initMetadataForClass(SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1, VOID, VOID, StyleScope);
  initMetadataForObject(SilkStylesheetInstance, 'SilkStylesheetInstance');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CssRule, 'CssRule');
  initMetadataForClass(NonMediaCssRule, 'NonMediaCssRule', VOID, CssRule);
  initMetadataForClass(OfAttributeSelector, 'OfAttributeSelector', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoClass, 'OfPseudoClass', VOID, NonMediaCssRule);
  initMetadataForClass(OfPseudoElement, 'OfPseudoElement', VOID, NonMediaCssRule);
  initMetadataForClass(CompositeOpen, 'CompositeOpen', VOID, NonMediaCssRule);
  initMetadataForClass(CssStyle, 'CssStyle');
  initMetadataForClass(Restricted, 'Restricted', VOID, CssStyle);
  initMetadataForClass(Base, 'Base', VOID, Restricted);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CssStyleScope, 'CssStyleScope', VOID, StyleScope);
  initMetadataForInterface(ComponentKind, 'ComponentKind');
  initMetadataForInterface(RestrictedKind, 'RestrictedKind');
  initMetadataForClass(CssStyleBaseScope, 'CssStyleBaseScope');
  initMetadataForClass(Light, 'Light');
  initMetadataForClass(Dark, 'Dark');
  initMetadataForClass(ColorAgnostic, 'ColorAgnostic');
  initMetadataForClass(ColorAware, 'ColorAware');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(ImmutableCssStyle, 'ImmutableCssStyle');
  initMetadataForInterface(GeneralKind, 'GeneralKind');
  initMetadataForClass(ExtendingCssStyle, 'ExtendingCssStyle', VOID, CssStyle);
  initMetadataForClass(SimpleCssStyle, 'SimpleCssStyle', VOID, CssStyle);
  initMetadataForClass(CssStyle$2, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$4, VOID, VOID, CssStyle);
  initMetadataForClass(base$3, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyle$5, VOID, VOID, CssStyle);
  initMetadataForClass(CssStyleVariant, 'CssStyleVariant');
  initMetadataForClass(SimpleCssStyleVariant$1, VOID, VOID, CssStyle);
  initMetadataForClass(SimpleCssStyleVariant, 'SimpleCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(ExtendingCssStyleVariant, 'ExtendingCssStyleVariant', VOID, SimpleCssStyleVariant);
  initMetadataForClass(CompositeCssStyleVariant, 'CompositeCssStyleVariant', VOID, CssStyleVariant);
  initMetadataForClass(addVariant$1, VOID, VOID, CssStyle);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Key, 'Key');
  initMetadataForClass(CssModifier, 'CssModifier');
  initMetadataForClass(KeyframesBuilder, 'KeyframesBuilder');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Keyframes, 'Keyframes');
  initMetadataForClass(Breakpoint, 'Breakpoint', VOID, Enum);
  initMetadataForClass(ComposableSingletons$BreakpointConditionsKt$lambda_1$2$$inlined$cache$1$1);
  initMetadataForObject(ComposableSingletons$BreakpointConditionsKt, 'ComposableSingletons$BreakpointConditionsKt');
  initMetadataForClass(BreakpointValues, 'BreakpointValues');
  initMetadataForClass(BreakpointUnitValue, 'BreakpointUnitValue');
  initMetadataForClass(Rem, 'Rem', VOID, BreakpointUnitValue);
  initMetadataForClass(LayerListBuilder, 'LayerListBuilder', LayerListBuilder);
  initMetadataForClass(SilkLayer, 'SilkLayer', VOID, Enum);
  initMetadataForClass(MutableSilkTheme$replaceStyle$newStyle$1, VOID, VOID, CssStyle);
  initMetadataForClass(MutableSilkTheme, 'MutableSilkTheme', MutableSilkTheme);
  initMetadataForClass(ImmutableSilkTheme, 'ImmutableSilkTheme');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ColorMode, 'ColorMode', VOID, Enum);
  initMetadataForObject(Red, 'Red');
  initMetadataForObject(Blue, 'Blue');
  initMetadataForObject(Gray, 'Gray');
  function get(colorMode) {
    var tmp;
    switch (colorMode.m2_1) {
      case 0:
        tmp = this.s3m();
        break;
      case 1:
        tmp = this.t3m();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  initMetadataForInterface(Palettes, 'Palettes');
  initMetadataForClass(MutablePalettes, 'MutablePalettes', MutablePalettes, VOID, [Palettes]);
  function getValue_0(key) {
    return ensureNotNull(this.v3m(key));
  }
  initMetadataForInterface(Palette, 'Palette');
  initMetadataForClass(EntryDelegate, 'EntryDelegate');
  initMetadataForClass(ColorGroup, 'ColorGroup');
  initMetadataForClass(MutablePalette, 'MutablePalette', MutablePalette, VOID, [Palette]);
  initMetadataForClass(RectF, 'RectF', RectF_init_$Create$);
  initMetadataForClass(Path, 'Path');
  initMetadataForClass(InsetPath, 'InsetPath', VOID, Path);
  //endregion
  function SilkFoundationStyles(initSilk_0, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(67758577);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(initSilk_1._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        $composer_0.z1t(1839367468);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.i1v();
        var tmp;
        if (false || it === Companion_getInstance().r1o_1) {
          // Inline function 'com.varabyte.kobweb.silk.SilkFoundationStyles.<anonymous>' call
          var value = SilkFoundationStyles$lambda;
          this_0.t1v(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.b1u();
        initSilk_1._v = tmp0_group;
      }
      $composer_0.e1r(1839367920, Unit_instance);
      $composer_0.z1t(1839371138);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.i1v();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.SilkFoundationStyles.<anonymous>' call
        var value_0 = SilkFoundationStyles$lambda_0(initSilk_1);
        tmp2.t1v(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b1u();
      initSilk(tmp1_group);
      $composer_0.h1r();
      var tmp4 = SilkStyleSheet_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var $composer_1 = $composer_0;
      $composer_1.x1t(-1196466140);
      Style(null, tmp4.b2v(), $composer_1, 0, 1);
      $composer_1.y1t();
      SilkBreakpointDisplayStyles($composer_0, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp2_safe_receiver = $composer_0.b1w();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.l21(SilkFoundationStyles$lambda_1(initSilk_1, $changed, $default));
    }
  }
  function SilkFoundationStyles$lambda(it) {
    return Unit_instance;
  }
  function SilkFoundationStyles$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function SilkFoundationStyles$lambda_1($initSilk, $$changed, $$default) {
    return function ($composer, $force) {
      SilkFoundationStyles($initSilk._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_SilkStyleSheet$stable;
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).f2v = function (selector, cssRule) {
    return this.e2v(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle;
  }
  var SpanTextStyle;
  function SpanText(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-1400383509);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j1l(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.j1l(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.j1l(ref_0._v) : $composer_0.w1u(ref_0._v)) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.s1t()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      var tmp0 = toModifier_0(get_SpanTextStyle(), [variant_0._v], $composer_0, 6).h3c(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) || endsWith(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
        tmp = whiteSpace(Companion_instance, Companion_instance_0.z32());
      } else {
        tmp = Companion_instance;
      }
      var finalModifier = tmp0.h3c(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(262293193, true, SpanText$lambda(ref_0, text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.i1v();
      var tmp_1;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.t1v(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp_0, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(SpanText$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$lambda($this$CssStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  function SpanText$lambda($ref, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$Span, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      Text($text, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function SpanText$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle = CssStyle_0(VOID, SpanTextStyle$lambda);
    }
  }
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$Entry$dismiss$lambda(this$0, this$1) {
    return function () {
      this$0.h3f_1.o2p(this$1);
      return Unit_instance;
    };
  }
  function invokeLater_0($this, block) {
    $this.g3f_1.e(block);
    if ($this.f3f_1 === -1) {
      var tmp = $this;
      var tmp_0 = window;
      tmp.f3f_1 = tmp_0.setTimeout(DeferredComposablesState$invokeLater$lambda($this));
    }
  }
  function Entry($outer) {
    this.j3f_1 = $outer;
    this.i3f_1 = null;
  }
  protoOf(Entry).k3f = function () {
    invokeLater_0(this.j3f_1, DeferredComposablesState$Entry$dismiss$lambda(this.j3f_1, this));
  };
  function DeferredComposablesState$invokeLater$lambda(this$0) {
    return function () {
      var _iterator__ex2g4s = this$0.g3f_1.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.invokeLater.<anonymous>.<anonymous>' call
        element();
      }
      this$0.g3f_1.y1();
      this$0.f3f_1 = -1;
      return Unit_instance;
    };
  }
  function DeferredComposablesState$append$lambda(this$0, $it) {
    return function () {
      this$0.h3f_1.n1s($it);
      return Unit_instance;
    };
  }
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.l3f($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.f3f_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g3f_1 = ArrayList_init_$Create$();
    this.h3f_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).m3f = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new Entry(this);
    // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.append.<anonymous>' call
    invokeLater_0(this, DeferredComposablesState$append$lambda(this, this_0));
    return this_0;
  };
  protoOf(DeferredComposablesState).l3f = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(2018041013);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(render) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1u(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this.h3f_1.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach.<anonymous>' call
        render(element, $composer_0, 112 & $dirty << 3);
      }
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function DeferringHost(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1578083138);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().g21(state);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferringHost.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-2083084670, true, DeferringHost$lambda(content, state), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.i1v();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.DeferringHost.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.t1v(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(DeferringHost$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp0_safe_receiver = entry.i3f_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous>.<anonymous>' call
      DeferringHost(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_instance;
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.n3f_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(431504263, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function Deferred(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-897531951);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      var tmp0 = get_LocalDeferred();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.w1v(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var state = tmp0_0;
      $composer_0.z1t(59168957);
      var tmp3 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.j1l(state);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp3.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.Deferred.<anonymous>' call
        var value = state.m3f();
        tmp3.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      var deferredEntry = tmp0_group;
      deferredEntry.i3f_1 = content;
      $composer_0.z1t(59172388);
      var tmp5 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.w1u(deferredEntry);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp5.i1v();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.Deferred.<anonymous>' call
        var value_0 = Deferred$lambda(deferredEntry);
        tmp5.t1v(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b1u();
      DisposableEffect(deferredEntry, tmp1_group, $composer_0, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp2_safe_receiver = $composer_0.b1w();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.l21(Deferred$lambda_0(content, $changed));
    }
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    // Inline function 'kotlin.error' call
    var message = 'Attempting to defer rendering without calling `DeferringHost`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function DeferringHost$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
        $content($composer_0, 0);
        $state.l3f(ComposableSingletons$DeferredKt_getInstance().n3f_1, $composer_0, 6);
        tmp = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function DeferringHost$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      DeferringHost($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Deferred$$inlined$cache$1$1($deferredEntry) {
    this.o3f_1 = $deferredEntry;
  }
  protoOf(Deferred$$inlined$cache$1$1).om = function () {
    // Inline function 'com.varabyte.kobweb.silk.defer.Deferred.<anonymous>.<anonymous>.<anonymous>' call
    this.o3f_1.k3f();
  };
  function Deferred$lambda($deferredEntry) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Deferred$$inlined$cache$1$1($deferredEntry);
    };
  }
  function Deferred$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      Deferred($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  var com_varabyte_kobweb_silk_init_InitSilkContext$stable;
  function InitSilkContext(config, stylesheet, theme) {
    this.p3f_1 = config;
    this.q3f_1 = stylesheet;
    this.r3f_1 = theme;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.k3g('silk-span-text', get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    get_SilkTheme().q3g(SilkStylesheetInstance_getInstance());
    SilkStylesheetInstance_getInstance().u3g(SilkStyleSheet_getInstance());
    get_SilkTheme().v3g(SilkStyleSheet_getInstance());
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0);
  }
  function get_localStyleSheets(_this__u8e3s4) {
    _init_properties_InitSilk_kt__vukue3();
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = asList(document.styleSheets);
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (element instanceof CSSStyleSheet) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'com.varabyte.kobweb.silk.init.<get-localStyleSheets>.<anonymous>' call
      if (element_0.href == null) {
        destination_0.e(element_0);
      }
    }
    return destination_0;
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda_0() {
    _init_properties_InitSilk_kt__vukue3();
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
    var registeredCssLayers = toSet(SilkStylesheetInstance_getInstance().t3g_1.y3g());
    var tmp = asSequence(get_localStyleSheets(document));
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = flatMap(tmp, initSilk$lambda$lambda);
    var tmp_0 = filter(this_0, initSilk$lambda$lambda_0);
    var tmp_1 = isInterface(tmp_0, Sequence) ? tmp_0 : THROW_CCE();
    var referencedCssLayers = toSet_0(map(tmp_1, initSilk$lambda$lambda_1));
    var unregisteredLayers = subtract(referencedCssLayers, registeredCssLayers);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unregisteredLayers.p()) {
      var tmp_2 = console;
      var tmp_3 = sorted(unregisteredLayers);
      tmp_2.warn(trimIndent('\n                        One or more CSS layer(s) were referenced in code but not registered.\n                        \n                        Please add initialization to your project like:\n                        ```\n                        @InitSilk\n                        fun initSilk(ctx: InitSilkContext) {\n                           ctx.stylesheet.cssLayers.add(' + joinToString(tmp_3, VOID, VOID, VOID, VOID, VOID, initSilk$lambda$lambda_2) + ')\n                        }\n                        ```\n                        (but change the order of the layers to match your desired priority).\n                        \n                        If you are not the developer of this website, consider reporting this message to them.\n                    '));
    }
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = asList(document.styleSheets);
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (element instanceof CSSStyleSheet) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
      if (element_0.href == null) {
        destination_0.e(element_0);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = destination_0.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_1 = _iterator__ex2g4s_1.i();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
      var cssLayers = SilkStylesheetInstance_getInstance().t3g_1.y3g();
      element_1.insertRule('@layer ' + joinToString(cssLayers) + ';', 0);
    }
    return Unit_instance;
  }
  function initSilk$lambda$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return asSequence(asList(it.cssRules));
  }
  function initSilk$lambda$lambda_0(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it instanceof CSSLayerBlockRule;
  }
  function initSilk$lambda$lambda_1(it) {
    _init_properties_InitSilk_kt__vukue3();
    return it.name;
  }
  function initSilk$lambda$lambda_2(it) {
    _init_properties_InitSilk_kt__vukue3();
    return '"' + it + '"';
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
      com_varabyte_kobweb_silk_init_InitSilkContext$stable = 8;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  var com_varabyte_kobweb_silk_init_MutableSilkConfig$stable;
  function MutableSilkConfig() {
    this.z3g_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).a3h = function () {
    return this.z3g_1;
  };
  function Companion() {
  }
  protoOf(Companion).t3a = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_0() {
    return Companion_instance_3;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
      com_varabyte_kobweb_silk_init_MutableSilkConfig$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable;
  var com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable;
  function registerStyleBase(_this__u8e3s4, cssSelector, init) {
    _this__u8e3s4.b3h(cssSelector, registerStyleBase$lambda(init));
  }
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName) {
    var simpleStyleScope = new SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1();
    _this__u8e3s4(simpleStyleScope);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = simpleStyleScope.d3h_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.assertNoAttributeModifiers.<anonymous>' call
      assertNoAttributes(element, selectorName, 'Please search your `@InitSilk` code for a line like `ctx.stylesheet.registerStyle("' + selectorName + '")` and remove the offending attribute(s).');
    }
  }
  function SilkStylesheetInstance$assertNoAttributeModifiers$simpleStyleScope$1() {
    StyleScope.call(this);
  }
  function SilkStylesheetInstance$registerStyle$lambda($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(-1866964764);
    $composer_0.b1u();
    return Companion_instance;
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.r3g_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.s3g_1 = LinkedHashMap_init_$Create$();
    this.t3g_1 = new LayerListBuilder();
  }
  protoOf(SilkStylesheetInstance).b3h = function (cssSelector, init) {
    this.r3g_1.e(new SimpleCssStyle(cssSelector, init, SilkStylesheetInstance$registerStyle$lambda, null));
  };
  protoOf(SilkStylesheetInstance).i3h = function (name, build) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.s3g_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).f2(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.s3g_1.a5(name, build);
  };
  protoOf(SilkStylesheetInstance).u3g = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.r3g_1.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      var tmp = element.j3h_1;
      assertNoAttributeModifiers(typeof tmp === 'function' ? tmp : THROW_CCE(), SilkStylesheetInstance_getInstance(), element.n3h_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.r3g_1.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element_0.p3h(siteStyleSheet);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.s3g_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = this_0.k2().g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      // Inline function 'kotlin.collections.component1' call
      var name = item.d2();
      // Inline function 'kotlin.collections.component2' call
      var build = item.e2();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.s3h(siteStyleSheet, name);
      } else {
        lightBuilder.s3h(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.s3h(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.e(Unit_instance);
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function registerStyleBase$lambda$lambda($init) {
    return function () {
      return $init();
    };
  }
  function registerStyleBase$lambda($init) {
    return function ($this$registerStyle) {
      $this$registerStyle.e3h(registerStyleBase$lambda$lambda($init));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable;
  var com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable;
  var com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable;
  var com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable;
  var com_varabyte_kobweb_silk_style_CssRule$stable;
  function Companion_0() {
  }
  protoOf(Companion_0).t3h = function (pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.v3h();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.e(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_4;
  function Companion_getInstance_1() {
    return Companion_instance_4;
  }
  function NonMediaCssRule() {
    CssRule.call(this);
  }
  function OfAttributeSelector(attributeSelector) {
    NonMediaCssRule.call(this);
    this.a3i_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).v3h = function () {
    return this.y3h(listOf(this), emptyList(), null);
  };
  function OfPseudoClass(pseudoClass) {
    NonMediaCssRule.call(this);
    this.c3i_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).v3h = function () {
    return this.y3h(emptyList(), listOf(this), null);
  };
  protoOf(OfPseudoClass).d3i = function (other) {
    return new CompositeOpen(null, emptyList(), listOf_0([this, other]));
  };
  function OfPseudoElement(pseudoElement) {
    NonMediaCssRule.call(this);
    this.f3i_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).v3h = function () {
    return this.y3h(emptyList(), emptyList(), this);
  };
  function CompositeOpen(mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this);
    this.h3i_1 = mediaQuery;
    this.i3i_1 = attributeSelectors;
    this.j3i_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).x3h = function () {
    return this.h3i_1;
  };
  protoOf(CompositeOpen).v3h = function () {
    return this.y3h(this.i3i_1, this.j3i_1, null);
  };
  function CssRule() {
    this.u3h_1 = null;
  }
  protoOf(CssRule).w3h = function (target, createModifier) {
    target.f3h(this.x3h(), this.v3h(), createModifier);
  };
  protoOf(CssRule).x3h = function () {
    return this.u3h_1;
  };
  protoOf(CssRule).v3h = function () {
    return null;
  };
  protoOf(CssRule).y3h = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = attributeSelectors.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.f8('[' + element.a3i_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = pseudoClasses.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.f8(':' + element_0.c3i_1);
    }
    if (!(pseudoElement == null)) {
      this_0.f8('::' + pseudoElement.f3i_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_1 = this_0.toString();
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable;
  var com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable;
  var com_varabyte_kobweb_silk_style_CssStyle$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable;
  var com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable;
  var com_varabyte_kobweb_silk_style_CssStyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Light$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable;
  var com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable;
  function Base_init_$Init$(init, extraModifier, $this) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Base.call($this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2(init), extraModifier);
    return $this;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(-589847720);
    $composer_0.b1u();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this) {
    return function () {
      return $init(new CssStyleBaseScope($this.m3i_1));
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.e3h(CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, _this__u8e3s4));
      return Unit_instance;
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(1583284929);
    $composer_0.b1u();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2($init) {
    return function (_this__u8e3s4) {
      return $init;
    };
  }
  function Base(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Restricted.call(this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0(init), extraModifier);
  }
  function CssStyle$Restricted$_init_$lambda_tv1gbe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(-941642769);
    $composer_0.b1u();
    return Companion_instance;
  }
  function Restricted(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$_init_$lambda_tv1gbe;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    CssStyle.call(this, init, extraModifier);
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.g2v(cssRule, CssStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.t3i_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.s3i_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.r3i_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.p3i_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.q3i_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
  }
  function mergeCssModifiers(_this__u8e3s4, $this, init) {
    // Inline function 'kotlin.apply' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupBy' call
    var tmp0 = _this__u8e3s4.d3h_1;
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      var key = element.d2();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.h2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination.a5(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.e(element);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.k2().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.d2();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.e2();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.g();
      if (!iterator.h())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.i();
      while (iterator.h()) {
        var tmp2 = accumulator;
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var curr = iterator.i();
        accumulator = tmp2.x3i(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.a5(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers_0(_this__u8e3s4, $this, selectorName, layer) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _this__u8e3s4.k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var cssModifier = element.e2();
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
      var styleDeclaration = layer === SilkLayer_COMPONENT_VARIANTS_getInstance().a3j_1 ? 'val SomeExampleVariant = ExampleStyle.addVariant' : layer === SilkLayer_COMPONENT_STYLES_getInstance().a3j_1 ? 'val ExampleStyle = CssStyle<ExampleKind>' : 'val ExampleStyle = CssStyle';
      // Inline function 'kotlin.text.appendLine' call
      var value = 'Please move Modifiers associated with attributes to the `extraModifier` parameter.';
      // Inline function 'kotlin.text.appendLine' call
      this_0.f8(value).g8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      this_0.g8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'An example of how to fix this (e.g. if the offending attribute was `tab-index`):';
      // Inline function 'kotlin.text.appendLine' call
      this_0.f8(value_0).g8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = trimMargin('\n                        |   // Before\n                        |   ' + styleDeclaration + ' {\n                        |       base {\n                        |          Modifier\n                        |              .backgroundColor(Colors.Magenta))\n                        |              .tabIndex(0) // <-- The offending attribute modifier\n                        |       }\n                        |   }\n                        |\n                        |   // After\n                        |   ' + styleDeclaration + '(extraModifier = Modifier.tabIndex(0)) {\n                        |       base {\n                        |           Modifier.backgroundColor(Colors.Magenta)\n                        |       }\n                        |   }\n                        ');
      // Inline function 'kotlin.text.appendLine' call
      this_0.f8(value_1).g8(_Char___init__impl__6a9atx(10));
      var tmp$ret$10 = this_0.toString();
      assertNoAttributes(cssModifier, selectorName, tmp$ret$10);
    }
    return _this__u8e3s4;
  }
  function Companion_1() {
  }
  var Companion_instance_5;
  function Companion_getInstance_2() {
    return Companion_instance_5;
  }
  function addStylesInto$mediaOrInPlace(_this__u8e3s4, query, rulesBuild) {
    if (query == null) {
      // Inline function 'kotlin.apply' call
      rulesBuild(_this__u8e3s4);
    } else {
      media(_this__u8e3s4, query, rulesBuild);
    }
  }
  function addStylesInto$layerOrInPlace(_this__u8e3s4, name, rulesBuild) {
    if (name == null) {
      // Inline function 'kotlin.apply' call
      rulesBuild(_this__u8e3s4);
    } else {
      layer(_this__u8e3s4, name, rulesBuild);
    }
  }
  function CssStyle$_init_$lambda_598xul($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(2126113218);
    $composer_0.b1u();
    return Companion_instance;
  }
  function CssStyle$addStyles$lambda($styles) {
    return function ($this$style) {
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $styles.d30_1.k2().g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$style.e2u(element.d2(), element.e2());
      }
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = $styles.e30_1.k2().g();
      while (_iterator__ex2g4s_0.h()) {
        var element_0 = _iterator__ex2g4s_0.i();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$style.k2u(element_0.d2(), element_0.e2());
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda(this$0, $name, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $name, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda($classNames, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.e(name);
        addStylesInto$layerOrInPlace($styleSheet, $layer, CssStyle$addStylesInto$lambda$lambda(this$0, name, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, $cssRule, $styles) {
    return function ($this$mediaOrInPlace) {
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, $layer, CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles));
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.e(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.c3j_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        addStylesInto$mediaOrInPlace($styleSheet, $cssRuleKey.b3j_1, CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, cssRule, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$_init_$lambda_598xul;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    this.j3h_1 = init;
    this.k3h_1 = extraModifier;
  }
  protoOf(CssStyle).n3i = function (selector, styleSheet, layer) {
    var classNames = mutableListOf([selector]);
    var lightModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_LIGHT_getInstance()), this, this.j3h_1), this, selector, layer);
    var darkModifiers = assertNoAttributeModifiers_0(mergeCssModifiers(new CssStyleScope(ColorMode_DARK_getInstance()), this, this.j3h_1), this, selector, layer);
    var tmp = Companion_instance_6;
    var tmp0_safe_receiver = lightModifiers.h2(Companion_getInstance_4().d3j_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u3i_1;
    var tmp1_safe_receiver = darkModifiers.h2(Companion_getInstance_4().d3j_1);
    var tmp2_safe_receiver = tmp.e3j(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.u3i_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStylesInto.<anonymous>' call
      withFinalSelectorName(this, selector, tmp2_safe_receiver, CssStyle$addStylesInto$lambda(classNames, styleSheet, layer, this));
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = plus(lightModifiers.i2(), darkModifiers.i2());
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_4().d3j_1)) {
        destination.e(element);
      }
    }
    var allCssRuleKeys = destination;
    var _iterator__ex2g4s_0 = allCssRuleKeys.g();
    $l$loop: while (_iterator__ex2g4s_0.h()) {
      var cssRuleKey = _iterator__ex2g4s_0.i();
      var tmp_1 = Companion_instance_6;
      var tmp3_safe_receiver = lightModifiers.h2(cssRuleKey);
      var tmp_2 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.u3i_1;
      var tmp4_safe_receiver = darkModifiers.h2(cssRuleKey);
      var tmp5_elvis_lhs = tmp_1.e3j(tmp_2, tmp4_safe_receiver == null ? null : tmp4_safe_receiver.u3i_1);
      var tmp_3;
      if (tmp5_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp5_elvis_lhs;
      }
      var group = tmp_3;
      withFinalSelectorName(this, selector, group, CssStyle$addStylesInto$lambda_0(classNames, cssRuleKey, styleSheet, layer, this));
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(CssStyle).o3i = function (classSelectors) {
    return new ImmutableCssStyle(classSelectors, this.k3h_1);
  };
  function CssStyle_0(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return new CssStyle$2(init, extraModifier);
  }
  function CssStyleScope(colorMode) {
    StyleScope.call(this);
    this.m3i_1 = colorMode;
  }
  function ComponentKind() {
  }
  function RestrictedKind() {
  }
  function CssStyleBaseScope(colorMode) {
    this.h3j_1 = colorMode;
  }
  function Light(styles) {
    this.t3i_1 = styles;
  }
  function Dark(styles) {
    this.s3i_1 = styles;
  }
  function ColorAgnostic(styles) {
    this.r3i_1 = styles;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.p3i_1 = lightStyles;
    this.q3i_1 = darkStyles;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).e3j = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null && darkStyles == null)
      return null;
    if (!(lightStyles == null) && darkStyles == null)
      return new Light(lightStyles);
    if (lightStyles == null && !(darkStyles == null))
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    if (!(!(lightStyles == null) && !(darkStyles == null))) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_3() {
    return Companion_instance_6;
  }
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast(item, _Char___init__impl__6a9atx(46));
      destination.e(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableCssStyle(classSelectors, extraModifier) {
    this.i3j_1 = extraModifier;
    this.j3j_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableCssStyle).k3j = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(114788234);
    $composer_0.z1t(-1790367629);
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = this.j3j_1;
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.style.ImmutableCssStyle.toModifier.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_instance_9.l3j($composer_0, 6).o3j().l2_1.toLowerCase();
      if (!endsWith_0(element, tmp$ret$1)) {
        destination.e(element);
      }
    }
    $composer_0.b1u();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.p()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_instance;
    }
    var tmp0_0 = tmp.h3c(this.i3j_1($composer_0, 0));
    $composer_0.b1u();
    return tmp0_0;
  };
  function GeneralKind() {
  }
  function ExtendingCssStyle() {
  }
  function toModifier(_this__u8e3s4, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    $composer_0.z1t(748086722);
    var tmp0 = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    $composer_0.b1u();
    return tmp0;
  }
  function _toModifier(_this__u8e3s4, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    $composer_0.z1t(1265379901);
    var tmp0 = getValue(get_SilkTheme().p3g_1, _this__u8e3s4).k3j($composer_0, 0);
    $composer_0.b1u();
    return tmp0;
  }
  function toModifier_0(_this__u8e3s4, variants, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    $composer_0.z1t(-431222543);
    var tmp = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    var tmp0_safe_receiver = combine(toList(variants), $composer_0, 0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p3j($composer_0, 0);
    var tmp0 = tmp.h3c(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
    $composer_0.b1u();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return base_2(_this__u8e3s4, base$lambda(extraModifier), init);
  }
  function CssStyle_1(extraModifier, init) {
    _init_properties_CssStyle_kt__srbhji();
    return new CssStyle$4(init, extraModifier);
  }
  function base_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return base_1(_this__u8e3s4, base$lambda_0(extraModifier), init);
  }
  function base_1(_this__u8e3s4, extraModifier, init) {
    _init_properties_CssStyle_kt__srbhji();
    return new base$3(extraModifier, init);
  }
  function com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_CssStyle$stable;
  }
  function CssStyle_2(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    _init_properties_CssStyle_kt__srbhji();
    return new CssStyle$5(init, extraModifier);
  }
  function toAttrs_0(_this__u8e3s4, finalHandler, $composer, $changed, $default) {
    _init_properties_CssStyle_kt__srbhji();
    var finalHandler_0 = finalHandler;
    var $composer_0 = $composer;
    $composer_0.z1t(-850883108);
    if (!(($default & 1) === 0))
      finalHandler_0 = null;
    var tmp0 = toAttrs(toModifier(_this__u8e3s4, $composer_0, 14 & $changed), finalHandler_0);
    $composer_0.b1u();
    return tmp0;
  }
  function base_2(_this__u8e3s4, extraModifier, init) {
    _init_properties_CssStyle_kt__srbhji();
    return CssStyle_1(extraModifier, base$lambda_1(init));
  }
  function toModifier_1(_this__u8e3s4, $composer, $changed) {
    _init_properties_CssStyle_kt__srbhji();
    var $composer_0 = $composer;
    $composer_0.z1t(748086722);
    var tmp0 = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    $composer_0.b1u();
    return tmp0;
  }
  function SimpleCssStyle(selector, init, extraModifier, layer) {
    CssStyle.call(this, init, extraModifier);
    this.n3h_1 = selector;
    this.o3h_1 = layer;
  }
  protoOf(SimpleCssStyle).p3h = function (styleSheet) {
    return this.n3i(this.n3h_1, styleSheet, this.o3h_1);
  };
  function CssStyle$o$_init_$lambda_60e9n6($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.z1t(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.b1u();
      return tmp0;
    };
  }
  function CssStyle$2($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6($extraModifier));
  }
  function base$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.z1t(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.b1u();
      return tmp0;
    };
  }
  function CssStyle$4($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function base$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.z1t(-2139862911);
      var tmp0 = $extraModifier;
      $composer_0.b1u();
      return tmp0;
    };
  }
  function base$o$_init_$lambda$lambda_d0jdie($this, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this.m3i_1);
      return $init(this_0);
    };
  }
  function base$o$_init_$lambda_5dljwv($init) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.e3h(base$o$_init_$lambda$lambda_d0jdie(_this__u8e3s4, $init));
      return Unit_instance;
    };
  }
  function base$3($extraModifier, $init) {
    CssStyle.call(this, base$o$_init_$lambda_5dljwv($init), $extraModifier);
  }
  function CssStyle$o$_init_$lambda_60e9n6_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.z1t(-256215983);
      var tmp0 = $extraModifier;
      $composer_0.b1u();
      return tmp0;
    };
  }
  function CssStyle$5($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6_0($extraModifier));
  }
  function base$lambda$lambda($this_CssStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_CssStyle.m3i_1);
      return $init(this_0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$CssStyle) {
      $this$CssStyle.e3h(base$lambda$lambda($this$CssStyle, $init));
      return Unit_instance;
    };
  }
  var properties_initialized_CssStyle_kt_y9xggg;
  function _init_properties_CssStyle_kt__srbhji() {
    if (!properties_initialized_CssStyle_kt_y9xggg) {
      properties_initialized_CssStyle_kt_y9xggg = true;
      com_varabyte_kobweb_silk_style_CssStyle_Restricted_Base$stable = 0;
      com_varabyte_kobweb_silk_style_CssStyle_Restricted$stable = 0;
      com_varabyte_kobweb_silk_style_CssStyle$stable = 0;
      com_varabyte_kobweb_silk_style_SimpleCssStyle$stable = 0;
      com_varabyte_kobweb_silk_style_ExtendingCssStyle$stable = 0;
      com_varabyte_kobweb_silk_style_ImmutableCssStyle$stable = 8;
      com_varabyte_kobweb_silk_style_CssStyleScope$stable = 0;
      com_varabyte_kobweb_silk_style_CssStyleBaseScope$stable = 0;
      com_varabyte_kobweb_silk_style_StyleGroup_Light$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
      com_varabyte_kobweb_silk_style_StyleGroup_Dark$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
      com_varabyte_kobweb_silk_style_StyleGroup_ColorAgnostic$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
      com_varabyte_kobweb_silk_style_StyleGroup_ColorAware$stable = com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter() | com_varabyte_kobweb_compose_css_ComparableStyleScope$stableprop_getter();
    }
  }
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable;
  var com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable;
  function CssStyleVariant() {
  }
  protoOf(CssStyleVariant).q3j = function (next) {
    return new CompositeCssStyleVariant(this, next);
  };
  function SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, $this) {
    SimpleCssStyleVariant.call($this, new SimpleCssStyleVariant$1(init, extraModifier), baseStyle);
    return $this;
  }
  function SimpleCssStyleVariant_init_$Create$(init, extraModifier, baseStyle) {
    return SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, objectCreate(protoOf(SimpleCssStyleVariant)));
  }
  function SimpleCssStyleVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function SimpleCssStyleVariant(cssStyle, baseStyle) {
    CssStyleVariant.call(this);
    this.r3j_1 = cssStyle;
    this.s3j_1 = baseStyle;
  }
  protoOf(SimpleCssStyleVariant).p3j = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(-1935545974);
    var tmp0 = toModifier_0(this.r3j_1, [], $composer_0, 0);
    $composer_0.b1u();
    return tmp0;
  };
  function ExtendingCssStyleVariant() {
  }
  function addVariant(_this__u8e3s4, extraModifier, init) {
    return new SimpleCssStyleVariant(new addVariant$1(init, extraModifier), _this__u8e3s4);
  }
  function CompositeCssStyleVariant(head, tail) {
    CssStyleVariant.call(this);
    this.t3j_1 = head;
    this.u3j_1 = tail;
  }
  protoOf(CompositeCssStyleVariant).p3j = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(1761922567);
    var tmp0 = this.t3j_1.p3j($composer_0, 0).h3c(this.u3j_1.p3j($composer_0, 0));
    $composer_0.b1u();
    return tmp0;
  };
  function combine(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(867312062);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.g();
      if (!iterator.h()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.i();
      while (iterator.h()) {
        var tmp1 = accumulator;
        // Inline function 'com.varabyte.kobweb.silk.style.combine.<anonymous>' call
        var variant = iterator.i();
        var tmp;
        if (!(tmp1 == null) && !(variant == null)) {
          tmp = tmp1.q3j(variant);
        } else {
          tmp = tmp1 == null ? variant : tmp1;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    $composer_0.b1u();
    return tmp0;
  }
  function addVariant_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariant(_this__u8e3s4, addVariant$lambda(extraModifier), init);
  }
  function com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_CssStyleVariant$stable;
  }
  function addVariantBase(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifier), init);
  }
  function addVariantBase_0(_this__u8e3s4, extraModifier, init) {
    return SimpleCssStyleVariant_init_$Create$(addVariantBase$lambda_0(init), extraModifier, _this__u8e3s4);
  }
  function addVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function addVariant$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.z1t(1967918819);
      var tmp0 = $extraModifier;
      $composer_0.b1u();
      return tmp0;
    };
  }
  function addVariantBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.z1t(754846533);
      var tmp0 = $extraModifier;
      $composer_0.b1u();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_SimpleCssStyleVariant, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_SimpleCssStyleVariant.m3i_1);
      return $init(this_0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$SimpleCssStyleVariant) {
      $this$SimpleCssStyleVariant.e3h(addVariantBase$lambda$lambda($this$SimpleCssStyleVariant, $init));
      return Unit_instance;
    };
  }
  function get_selectorSeparators() {
    _init_properties_StyleScope_kt__rik58j();
    return selectorSeparators;
  }
  var selectorSeparators;
  var com_varabyte_kobweb_silk_style_StyleScope$stable;
  var com_varabyte_kobweb_silk_style_CssModifier_Key$stable;
  var com_varabyte_kobweb_silk_style_CssModifier$stable;
  function StyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c3h_1 = ArrayList_init_$Create$();
    this.d3h_1 = this.c3h_1;
  }
  protoOf(StyleScope).e3h = function (createModifier) {
    this.c3h_1.e(new CssModifier(createModifier()));
  };
  protoOf(StyleScope).f3h = function (mediaQuery, suffix, createModifier) {
    this.c3h_1.e(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleScope).g3h = function (suffix, createModifier) {
    this.c3h_1.e(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleScope).h3h = function (mediaQuery, createModifier) {
    this.c3h_1.e(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleScope).f3j = function (_this__u8e3s4, createModifier) {
    this.h3h(_this__u8e3s4.v3j(), createModifier);
  };
  protoOf(StyleScope).g3j = function (_this__u8e3s4, createModifier) {
    _this__u8e3s4.w3h(this, createModifier);
  };
  function Companion_3() {
    Companion_instance_7 = this;
    this.d3j_1 = new Key(null, null);
  }
  var Companion_instance_7;
  function Companion_getInstance_4() {
    if (Companion_instance_7 == null)
      new Companion_3();
    return Companion_instance_7;
  }
  function Key(mediaQuery, suffix) {
    this.b3j_1 = mediaQuery;
    this.c3j_1 = suffix;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.b3j_1 + ', suffix=' + this.c3j_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.b3j_1 == null ? 0 : getStringHashCode(this.b3j_1);
    result = imul(result, 31) + (this.c3j_1 == null ? 0 : getStringHashCode(this.c3j_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.b3j_1 == tmp0_other_with_cast.b3j_1))
      return false;
    if (!(this.c3j_1 == tmp0_other_with_cast.c3j_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_4();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.u3i_1 = modifier;
    this.v3i_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      tmp_2 = !get_selectorSeparators().r(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.w3i_1 = tmp_2;
  }
  protoOf(CssModifier).x3i = function (other) {
    // Inline function 'kotlin.check' call
    if (!(!(this === other) && equals(this.v3i_1, other.v3i_1) && this.w3i_1 == other.w3i_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    return new CssModifier(this.u3i_1.h3c(other.u3i_1), this.v3i_1, this.w3i_1);
  };
  protoOf(CssModifier).d2 = function () {
    var tmp0_safe_receiver = this.v3i_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.w3i_1);
  };
  function assertNoAttributes(_this__u8e3s4, selectorName, extraContext) {
    _init_properties_StyleScope_kt__rik58j();
    var attrsScope = ComparableAttrsScope_init_$Create$();
    toAttrs(_this__u8e3s4.u3i_1)(attrsScope);
    if (attrsScope.c2z_1.p())
      return Unit_instance;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'com.varabyte.kobweb.silk.style.assertNoAttributes.<anonymous>' call
    // Inline function 'kotlin.text.appendLine' call
    var value = 'Style block declarations cannot contain Modifiers that specify attributes. Only style modifiers are allowed here.';
    // Inline function 'kotlin.text.appendLine' call
    this_0.f8(value).g8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.g8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = 'Details:';
    // Inline function 'kotlin.text.appendLine' call
    this_0.f8(value_0).g8(_Char___init__impl__6a9atx(10));
    this_0.f8('\tCSS rule: ');
    this_0.f8('"' + selectorName);
    if (!(_this__u8e3s4.v3i_1 == null)) {
      this_0.e8(_this__u8e3s4.v3i_1);
    }
    if (!(_this__u8e3s4.w3i_1 == null)) {
      this_0.f8(_this__u8e3s4.w3i_1);
    }
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.f8('"').g8(_Char___init__impl__6a9atx(10));
    var tmp = attrsScope.c2z_1.i2();
    // Inline function 'kotlin.text.appendLine' call
    var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, assertNoAttributes$lambda);
    // Inline function 'kotlin.text.appendLine' call
    this_0.f8(value_1).g8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    this_0.g8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.text.appendLine' call
    // Inline function 'kotlin.text.appendLine' call
    this_0.f8(extraContext).g8(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.error' call
    var message = this_0.toString();
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function assertNoAttributes$lambda(it) {
    _init_properties_StyleScope_kt__rik58j();
    return '"' + it + '"';
  }
  var properties_initialized_StyleScope_kt_8wepyz;
  function _init_properties_StyleScope_kt__rik58j() {
    if (!properties_initialized_StyleScope_kt_8wepyz) {
      properties_initialized_StyleScope_kt_8wepyz = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
      com_varabyte_kobweb_silk_style_StyleScope$stable = 8;
      com_varabyte_kobweb_silk_style_CssModifier_Key$stable = 0;
      com_varabyte_kobweb_silk_style_CssModifier$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable;
  var com_varabyte_kobweb_silk_style_animation_Keyframes$stable;
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.r3h_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.j()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.d2();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.e2();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.a5(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.q3h_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r3h_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KeyframesBuilder).w3j = function (createStyle) {
    var tmp0 = this.r3h_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var pair = to(From_getInstance(), createStyle());
    tmp0.a5(pair.re_1, pair.se_1);
  };
  protoOf(KeyframesBuilder).x3j = function (createStyle) {
    var tmp0 = this.r3h_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var pair = to(To_getInstance(), createStyle());
    tmp0.a5(pair.re_1, pair.se_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other || equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).s3h = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.r3h_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.j());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.k2().g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.d2();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.e2();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.e(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.q2t(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion_4() {
  }
  protoOf(Companion_4).y3j = function (build) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf_0([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      build(this_1);
      destination.e(this_1);
    }
    // Inline function 'kotlin.collections.count' call
    return distinct(destination).j() === 1;
  };
  var Companion_instance_8;
  function Companion_getInstance_5() {
    return Companion_instance_8;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_8.y3j(this$0.z3j_1);
    };
  }
  function Keyframes(init) {
    this.z3j_1 = init;
    var tmp = this;
    tmp.a3k_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  protoOf(Keyframes).b3k = function () {
    var tmp0 = this.a3k_1;
    // Inline function 'kotlin.getValue' call
    usesColorMode$factory();
    return tmp0.e2();
  };
  function toAnimation(_this__u8e3s4, colorMode, duration, timingFunction, delay, iterationCount, direction, fillMode, playState) {
    duration = duration === VOID ? null : duration;
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    iterationCount = iterationCount === VOID ? null : iterationCount;
    direction = direction === VOID ? null : direction;
    fillMode = fillMode === VOID ? null : fillMode;
    playState = playState === VOID ? null : playState;
    var name = get_name(_this__u8e3s4);
    var tmp;
    if (_this__u8e3s4.b3k()) {
      var tmp_0;
      if (colorMode == null) {
        var message = 'Animation ' + name + " depends on the site's color mode but no color mode was specified.";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = colorMode;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    var colorMode_0 = tmp;
    var nameWithColorMode = !(colorMode_0 == null) ? suffixedWith(name, colorMode_0) : name;
    return Companion_instance_1.t2z(nameWithColorMode, duration, timingFunction, delay, iterationCount, direction, fillMode, playState);
  }
  function toAnimation_0(_this__u8e3s4, duration, timingFunction, delay, iterationCount, direction, fillMode, playState, $composer, $changed, $default) {
    var duration_0 = duration;
    var timingFunction_0 = timingFunction;
    var delay_0 = delay;
    var iterationCount_0 = iterationCount;
    var direction_0 = direction;
    var fillMode_0 = fillMode;
    var playState_0 = playState;
    var $composer_0 = $composer;
    $composer_0.z1t(523917725);
    if (!(($default & 1) === 0))
      duration_0 = null;
    if (!(($default & 2) === 0))
      timingFunction_0 = null;
    if (!(($default & 4) === 0))
      delay_0 = null;
    if (!(($default & 8) === 0))
      iterationCount_0 = null;
    if (!(($default & 16) === 0))
      direction_0 = null;
    if (!(($default & 32) === 0))
      fillMode_0 = null;
    if (!(($default & 64) === 0))
      playState_0 = null;
    var colorMode = _this__u8e3s4.b3k() ? Companion_instance_9.l3j($composer_0, 6) : null;
    var tmp0 = toAnimation(_this__u8e3s4, colorMode, duration_0, timingFunction_0, delay_0, iterationCount_0, direction_0, fillMode_0, playState_0);
    $composer_0.b1u();
    return tmp0;
  }
  function com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter() {
    return com_varabyte_kobweb_silk_style_animation_Keyframes$stable;
  }
  function usesColorMode$factory() {
    return getPropertyCallableRef('usesColorMode', 1, KProperty1, function (receiver) {
      return receiver.b3k();
    }, null);
  }
  var com_varabyte_kobweb_silk_style_breakpoint_Breakpoint_Range$stable;
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Breakpoint).v3j = function () {
    return new MediaFeature('min-width', toWidth(this));
  };
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function displayIfAtLeast(_this__u8e3s4, breakpoint) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.l2_1.toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-if-at-least-' + tmp$ret$1]);
  }
  function displayUntil(_this__u8e3s4, breakpoint) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = breakpoint.l2_1.toLowerCase();
    return classNames(_this__u8e3s4, ['silk-display-until-' + tmp$ret$1]);
  }
  function SilkBreakpointDisplayStyles($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1560920665);
    if (!($changed === 0) || !$composer_0.s1t()) {
      GenericTag('style', null, ComposableSingletons$BreakpointConditionsKt_getInstance().e3k_1, $composer_0, 390, 2);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(SilkBreakpointDisplayStyles$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$BreakpointConditionsKt$lambda_1$lambda_jljler($this$GenericTag, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(560331389);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.w1u($this$GenericTag);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (invalid || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.ComposableSingletons$BreakpointConditionsKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$BreakpointConditionsKt$lambda_1$lambda$lambda_jtcz2q($this$GenericTag);
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    DisposableEffect(Unit_instance, tmp0_group, $composer_0, 6);
    return Unit_instance;
  }
  function ComposableSingletons$BreakpointConditionsKt$lambda_1$2$$inlined$cache$1$1($cssStylesheet) {
    this.f3k_1 = $cssStylesheet;
  }
  protoOf(ComposableSingletons$BreakpointConditionsKt$lambda_1$2$$inlined$cache$1$1).om = function () {
    // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.ComposableSingletons$BreakpointConditionsKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.f3k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function ComposableSingletons$BreakpointConditionsKt$lambda_1$lambda$lambda_jtcz2q($this_GenericTag) {
    return function ($this$DisposableEffect) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = $this_GenericTag.j2w($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      var _iterator__ex2g4s = get_entries().g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.ComposableSingletons$BreakpointConditionsKt.lambda-1.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var breakpointQuery = (new CSSMediaRuleDeclaration(element.v3j(), emptyList())).g2t();
        var invertBreakpointQuery = (new CSSMediaRuleDeclaration(invert(element.v3j()), emptyList())).g2t();
        if (cssStylesheet == null)
          null;
        else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$3 = element.l2_1.toLowerCase();
          addRule(cssStylesheet, invertBreakpointQuery + ' { .silk-display-if-at-least-' + tmp$ret$3 + ' { display: none !important; } }');
        }
        if (cssStylesheet == null)
          null;
        else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$5 = element.l2_1.toLowerCase();
          addRule(cssStylesheet, breakpointQuery + ' { .silk-display-until-' + tmp$ret$5 + ' { display: none !important; } }');
        }
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new ComposableSingletons$BreakpointConditionsKt$lambda_1$2$$inlined$cache$1$1(cssStylesheet);
    };
  }
  function ComposableSingletons$BreakpointConditionsKt() {
    ComposableSingletons$BreakpointConditionsKt_instance = this;
    var tmp = this;
    tmp.e3k_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(321895361, false, ComposableSingletons$BreakpointConditionsKt$lambda_1$lambda_jljler));
  }
  var ComposableSingletons$BreakpointConditionsKt_instance;
  function ComposableSingletons$BreakpointConditionsKt_getInstance() {
    if (ComposableSingletons$BreakpointConditionsKt_instance == null)
      new ComposableSingletons$BreakpointConditionsKt();
    return ComposableSingletons$BreakpointConditionsKt_instance;
  }
  function invert(_this__u8e3s4) {
    return new Raw('not all and ' + toString(_this__u8e3s4));
  }
  function addRule(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function clearCSSRules(_this__u8e3s4) {
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.varabyte.kobweb.silk.style.breakpoint.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function SilkBreakpointDisplayStyles$lambda($$changed) {
    return function ($composer, $force) {
      SilkBreakpointDisplayStyles($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable;
  var com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable;
  function BreakpointValues(sm, md, lg, xl) {
    this.g3k_1 = sm;
    this.h3k_1 = md;
    this.i3k_1 = lg;
    this.j3k_1 = xl;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + toString(this.g3k_1) + ', md=' + toString(this.h3k_1) + ', lg=' + toString(this.i3k_1) + ', xl=' + toString(this.j3k_1) + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.g3k_1);
    result = imul(result, 31) + hashCode(this.h3k_1) | 0;
    result = imul(result, 31) + hashCode(this.i3k_1) | 0;
    result = imul(result, 31) + hashCode(this.j3k_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.g3k_1, tmp0_other_with_cast.g3k_1))
      return false;
    if (!equals(this.h3k_1, tmp0_other_with_cast.h3k_1))
      return false;
    if (!equals(this.i3k_1, tmp0_other_with_cast.i3k_1))
      return false;
    if (!equals(this.j3k_1, tmp0_other_with_cast.j3k_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  function BreakpointUnitValue(width) {
    this.k3k_1 = width;
  }
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable;
  var com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable;
  function LayerListBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.w3g_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries_0();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.silkLayers.<anonymous>' call
      var tmp$ret$1 = item.a3j_1;
      destination.e(tmp$ret$1);
    }
    tmp_0.x3g_1 = destination;
  }
  protoOf(LayerListBuilder).y3g = function () {
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = this.w3g_1.h2(null);
    var tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var layersToProcess = toMutableList(plus_0(this.x3g_1, tmp$ret$0));
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$();
    // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>' call
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!layersToProcess.p()) {
        break $l$loop;
      }
      var currLayer = layersToProcess.b2(0);
      this_0.e(currLayer);
      var tmp0_safe_receiver = this.w3g_1.h2(currLayer);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.style.layer.LayerListBuilder.build.<anonymous>.<anonymous>' call
        layersToProcess.w1(0, tmp0_safe_receiver);
      }
    }
    return this_0.i5();
  };
  var SilkLayer_RESET_instance;
  var SilkLayer_KOBWEB_COMPOSE_instance;
  var SilkLayer_BASE_instance;
  var SilkLayer_COMPONENT_STYLES_instance;
  var SilkLayer_COMPONENT_VARIANTS_instance;
  var SilkLayer_RESTRICTED_STYLES_instance;
  var SilkLayer_GENERAL_STYLES_instance;
  function values_0() {
    return [SilkLayer_RESET_getInstance(), SilkLayer_KOBWEB_COMPOSE_getInstance(), SilkLayer_BASE_getInstance(), SilkLayer_COMPONENT_STYLES_getInstance(), SilkLayer_COMPONENT_VARIANTS_getInstance(), SilkLayer_RESTRICTED_STYLES_getInstance(), SilkLayer_GENERAL_STYLES_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var SilkLayer_entriesInitialized;
  function SilkLayer_initEntries() {
    if (SilkLayer_entriesInitialized)
      return Unit_instance;
    SilkLayer_entriesInitialized = true;
    SilkLayer_RESET_instance = new SilkLayer('RESET', 0, 'reset');
    SilkLayer_KOBWEB_COMPOSE_instance = new SilkLayer('KOBWEB_COMPOSE', 1, 'kobweb-compose');
    SilkLayer_BASE_instance = new SilkLayer('BASE', 2, 'base');
    SilkLayer_COMPONENT_STYLES_instance = new SilkLayer('COMPONENT_STYLES', 3, 'component-styles');
    SilkLayer_COMPONENT_VARIANTS_instance = new SilkLayer('COMPONENT_VARIANTS', 4, 'component-variants');
    SilkLayer_RESTRICTED_STYLES_instance = new SilkLayer('RESTRICTED_STYLES', 5, 'restricted-styles');
    SilkLayer_GENERAL_STYLES_instance = new SilkLayer('GENERAL_STYLES', 6, 'general-styles');
  }
  var $ENTRIES_0;
  function SilkLayer(name, ordinal, layerName) {
    Enum.call(this, name, ordinal);
    this.a3j_1 = layerName;
  }
  function SilkLayer_RESET_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESET_instance;
  }
  function SilkLayer_KOBWEB_COMPOSE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_KOBWEB_COMPOSE_instance;
  }
  function SilkLayer_BASE_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_BASE_instance;
  }
  function SilkLayer_COMPONENT_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_STYLES_instance;
  }
  function SilkLayer_COMPONENT_VARIANTS_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_COMPONENT_VARIANTS_instance;
  }
  function SilkLayer_RESTRICTED_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_RESTRICTED_STYLES_instance;
  }
  function SilkLayer_GENERAL_STYLES_getInstance() {
    SilkLayer_initEntries();
    return SilkLayer_GENERAL_STYLES_instance;
  }
  function descendants(_this__u8e3s4, elements, createModifier) {
    return _this__u8e3s4.g3h(' :is(' + joinToString_0(elements) + ')', createModifier);
  }
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector('aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_4.t3h('not', params.slice());
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass('hover');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass('active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass('focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement('placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector('aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass('disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass('link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass('visited');
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  var com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable;
  var com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable;
  function _registerStyle($this, name, style, kind, layer) {
    // Inline function 'kotlin.let' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
    var it = $this.t3f_1.h2(name);
    // Inline function 'kotlin.check' call
    if (!(it == null || it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second CssStyle with a name that\'s already used: "' + name + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    $this.s3f_1.a5(name, style);
    // Inline function 'kotlin.collections.set' call
    $this.w3f_1.a5(style, name);
    var tmp;
    if (layer == null) {
      var tmp_0;
      if (kind.equals(getKClass(ComponentKind))) {
        tmp_0 = SilkLayer_COMPONENT_STYLES_getInstance();
      } else if (kind.equals(getKClass(RestrictedKind))) {
        tmp_0 = SilkLayer_RESTRICTED_STYLES_getInstance();
      } else if (kind.equals(getKClass(GeneralKind))) {
        tmp_0 = SilkLayer_GENERAL_STYLES_getInstance();
      } else {
        var message_0 = 'Unknown kind: ' + toString(kind);
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      tmp = tmp_0.a3j_1;
    } else {
      tmp = layer;
    }
    var finalLayer = tmp;
    // Inline function 'kotlin.takeIf' call
    var tmp_1;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(finalLayer) > 0) {
      tmp_1 = finalLayer;
    } else {
      tmp_1 = null;
    }
    var tmp2_safe_receiver = tmp_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      $this.y3f_1.a5(name, tmp2_safe_receiver);
    }
    if (style instanceof ExtendingCssStyle) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = $this.c3g_1;
      var value = this_0.h2(style);
      var tmp_2;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        this_0.a5(style, answer);
        tmp_2 = answer;
      } else {
        tmp_2 = value;
      }
      tmp_2.e(style.n3k_1);
    }
  }
  function updateReplaced($this, originalStyle, newStyle) {
    // Inline function 'kotlin.collections.set' call
    $this.a3g_1.a5(originalStyle, newStyle);
    var tmp0_safe_receiver = $this.c3g_1.b5(originalStyle);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.updateReplaced.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      $this.c3g_1.a5(newStyle, tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.c3g_1.j2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.updateReplaced.<anonymous>' call
      if (element.v1(originalStyle)) {
        element.e(newStyle);
      }
    }
  }
  function MutableSilkTheme$replaceStyle$newStyle$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s3f_1 = LinkedHashMap_init_$Create$();
    this.t3f_1 = this.s3f_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.u3f_1 = LinkedHashMap_init_$Create$();
    this.v3f_1 = this.u3f_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.w3f_1 = LinkedHashMap_init_$Create$();
    this.x3f_1 = this.w3f_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.y3f_1 = LinkedHashMap_init_$Create$();
    this.z3f_1 = this.y3f_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.a3g_1 = LinkedHashMap_init_$Create$();
    this.b3g_1 = this.a3g_1;
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.c3g_1 = LinkedHashMap_init_$Create$();
    this.d3g_1 = this.c3g_1;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.e3g_1 = LinkedHashMap_init_$Create$();
    this.f3g_1 = this.e3g_1;
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.g3g_1 = LinkedHashMap_init_$Create$();
    this.h3g_1 = this.g3g_1;
    this.i3g_1 = new MutablePalettes();
    this.j3g_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).o3k = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(ComponentKind), layer);
  };
  protoOf(MutableSilkTheme).k3g = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.o3k(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.o3k.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).p3k = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(RestrictedKind), layer);
  };
  protoOf(MutableSilkTheme).q3k = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.p3k(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.p3k.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).r3k = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(GeneralKind), layer);
  };
  protoOf(MutableSilkTheme).s3k = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.r3k(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.r3k.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).t3k = function (style, extraModifier, init) {
    var tmp0_elvis_lhs = this.x3f_1.h2(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to replace a CSS style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var name = tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.b3g_1;
    // Inline function 'kotlin.check' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).f2(style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + name + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var newStyle = new MutableSilkTheme$replaceStyle$newStyle$1(init, extraModifier);
    // Inline function 'kotlin.collections.set' call
    this.s3f_1.a5(name, newStyle);
    // Inline function 'kotlin.collections.set' call
    this.w3f_1.a5(newStyle, name);
    updateReplaced(this, style, newStyle);
  };
  protoOf(MutableSilkTheme).u3k = function (name, variant, layer) {
    var tmp0_elvis_lhs = variant instanceof SimpleCssStyleVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only register variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var simpleVariant = tmp;
    var tmp_0;
    if (startsWith(name, _Char___init__impl__6a9atx(45))) {
      var tmp1_elvis_lhs = this.x3f_1.h2(simpleVariant.s3j_1);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message_0 = 'When registering variant "' + name + '", somehow its base style was not registered correctly. This is not expected, so please report the issue.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var baseStyleName = tmp_1;
      tmp_0 = baseStyleName + name;
    } else {
      tmp_0 = name;
    }
    var name_0 = tmp_0;
    // Inline function 'kotlin.let' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    var it = this.v3f_1.h2(name_0);
    // Inline function 'kotlin.check' call
    if (!(it == null || it === variant)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
      var message_1 = trimIndent('\n            Attempting to register a second variant with a name that\'s already used: "' + name_0 + "\"\n\n            This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n            consider filing an issue at https://github.com/varabyte/kobweb/issues\n        ");
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.u3f_1.a5(name_0, variant);
    var tmp8 = this.w3f_1;
    // Inline function 'kotlin.collections.set' call
    var key = variant.r3j_1;
    tmp8.a5(key, name_0);
    // Inline function 'kotlin.takeIf' call
    var this_0 = layer == null ? SilkLayer_COMPONENT_VARIANTS_getInstance().a3j_1 : layer;
    var tmp_2;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp_2 = this_0;
    } else {
      tmp_2 = null;
    }
    var finalLayer = tmp_2;
    if (finalLayer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      this.y3f_1.a5(name_0, finalLayer);
    }
    if (variant instanceof ExtendingCssStyleVariant) {
      var tmp15 = this.c3g_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var key_0 = variant.r3j_1;
      var value = tmp15.h2(key_0);
      var tmp_3;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        tmp15.a5(key_0, answer);
        tmp_3 = answer;
      } else {
        tmp_3 = value;
      }
      tmp_3.e(variant.x3k_1.r3j_1);
    }
  };
  protoOf(MutableSilkTheme).y3k = function (name, variant, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.u3k(name, variant, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.u3k.call(this, name, variant, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).z3k = function (name, keyframes) {
    // Inline function 'kotlin.let' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
    var it = this.e3g_1.h2(name);
    // Inline function 'kotlin.check' call
    if (!(it == null || it === keyframes)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + name + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.e3g_1.a5(name, keyframes);
    // Inline function 'kotlin.collections.set' call
    this.g3g_1.a5(keyframes, name);
  };
  function get_name(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_SilkTheme().a3l(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Name requested for invalid Keyframes. This should only be called on top-level public keyframes or keyframes that got manually registered';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, style) {
    if (visited.r(style))
      return Unit_instance;
    visited.e(style);
    var tmp0_safe_receiver = $dependencies.h2(style);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp0_safe_receiver.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.visit.<anonymous>' call
        registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, element);
      }
    }
    orderedStyles.e(style);
  }
  function registerStylesInto$orderStyles(styles, dependencies) {
    if (dependencies.p())
      return styles;
    // Inline function 'kotlin.collections.mutableListOf' call
    var orderedStyles = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = styles.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.<anonymous>' call
      registerStylesInto$orderStyles$visit(visited, dependencies, orderedStyles, element);
    }
    return orderedStyles;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.l3g_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.l3g_1.i3g_1;
    tmp.m3g_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.n3g_1 = this.l3g_1.j3g_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.o3g_1 = LinkedHashMap_init_$Create$();
    this.p3g_1 = this.o3g_1;
  }
  protoOf(ImmutableSilkTheme).b3l = function (style) {
    return this.l3g_1.x3f_1.h2(style);
  };
  protoOf(ImmutableSilkTheme).a3l = function (keyframes) {
    return this.l3g_1.h3g_1.h2(keyframes);
  };
  protoOf(ImmutableSilkTheme).q3g = function (silkStyleSheet) {
    // Inline function 'kotlin.check' call
    if (!!(_SilkTheme == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.l3g_1.f3g_1.k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.d2();
      // Inline function 'kotlin.collections.component2' call
      var keyframes = element.e2();
      silkStyleSheet.i3h(name, keyframes.z3j_1);
    }
  };
  protoOf(ImmutableSilkTheme).v3g = function (stylesheet) {
    // Inline function 'kotlin.check' call
    if (!!(_SilkTheme == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var tmp = this.l3g_1.t3f_1.j2();
    // Inline function 'kotlin.collections.filterIsInstance' call
    var tmp0 = this.l3g_1.v3f_1.j2();
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      if (element instanceof SimpleCssStyleVariant) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$2 = item.r3j_1;
      destination_0.e(tmp$ret$2);
    }
    var allCssStyles = plus_0(tmp, destination_0);
    var allCssStylesSorted = registerStylesInto$orderStyles(allCssStyles, this.l3g_1.d3g_1);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = allCssStylesSorted.g();
    while (_iterator__ex2g4s_1.h()) {
      var element_0 = _iterator__ex2g4s_1.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var className = this.b3l(element_0);
      // Inline function 'kotlin.collections.get' call
      var this_0 = this.l3g_1.z3f_1;
      var layer = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).h2(className);
      var classSelectors = element_0.n3i('.' + className, stylesheet, layer);
      var tmp2 = this.o3g_1;
      // Inline function 'kotlin.collections.set' call
      var value = element_0.o3i(classSelectors);
      tmp2.a5(element_0, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.l3g_1.b3g_1.k2().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_1 = _iterator__ex2g4s_2.i();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var originalStyle = element_1.d2();
      // Inline function 'kotlin.collections.component2' call
      var overrideStyle = element_1.e2();
      var tmp2_0 = this.o3g_1;
      // Inline function 'kotlin.collections.set' call
      var value_0 = getValue(this.o3g_1, overrideStyle);
      tmp2_0.a5(originalStyle, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling `prepareSilkFoundation` (or `SilkApp`, which calls it)";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyStyleBase(_this__u8e3s4, style, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    modifyStyleBase_0(_this__u8e3s4, style, modifyStyleBase$lambda(extraModifier), init);
  }
  function modifyStyleBase_0(_this__u8e3s4, style, extraModifier, init) {
    modifyStyle(_this__u8e3s4, style, extraModifier, modifyStyleBase$lambda_0(init));
  }
  function modifyStyle(_this__u8e3s4, style, extraModifier, init) {
    var tmp0_elvis_lhs = _this__u8e3s4.x3f_1.h2(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to modify a style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var styleName = tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = _this__u8e3s4.t3f_1;
    // Inline function 'kotlin.check' call
    if (!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).f2(styleName)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous>' call
      var message_0 = 'Attempting to modify a style that was never registered: "' + styleName + '"';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var existingExtraModifier = style.k3h_1;
    var existingInit = style.j3h_1;
    var tmp_0 = modifyStyle$lambda(existingExtraModifier, extraModifier);
    _this__u8e3s4.t3k(style, tmp_0, modifyStyle$lambda_0(existingInit, init));
  }
  function get_name_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = get_SilkTheme().b3l(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Name requested for invalid CssStyle. This should only be called on top-level public styles or styles that got manually registered';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyStyleBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.z1t(-308722568);
      var tmp0 = $extraModifier;
      $composer_0.b1u();
      return tmp0;
    };
  }
  function modifyStyleBase$lambda$lambda($this_modifyStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_modifyStyle.m3i_1);
      return $init(this_0);
    };
  }
  function modifyStyleBase$lambda_0($init) {
    return function ($this$modifyStyle) {
      $this$modifyStyle.e3h(modifyStyleBase$lambda$lambda($this$modifyStyle, $init));
      return Unit_instance;
    };
  }
  function modifyStyle$lambda($existingExtraModifier, $extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.z1t(114003212);
      var tmp0 = $existingExtraModifier($composer_0, 0).h3c($extraModifier($composer_0, 0));
      $composer_0.b1u();
      return tmp0;
    };
  }
  function modifyStyle$lambda_0($existingInit, $init) {
    return function ($this$replaceStyle) {
      $existingInit($this$replaceStyle);
      $init($this$replaceStyle);
      return Unit_instance;
    };
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k3k_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.m2_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().n3g_1.g3k_1;
        break;
      case 2:
        tmp = get_SilkTheme().n3g_1.h3k_1;
        break;
      case 3:
        tmp = get_SilkTheme().n3g_1.i3k_1;
        break;
      case 4:
        tmp = get_SilkTheme().n3g_1.j3k_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    var tmp0 = rootColorModeState$delegate;
    // Inline function 'kotlin.getValue' call
    rootColorModeState$factory();
    return tmp0.e2();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
  }
  protoOf(Companion_5).c3l = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(-974960061);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1v(this_0);
    sourceInformationMarkerEnd($composer_1);
    $composer_0.b1u();
    return tmp0;
  };
  protoOf(Companion_5).l3j = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1v(this_0);
    sourceInformationMarkerEnd($composer_1);
    return tmp0.e2();
  };
  var Companion_instance_9;
  function Companion_getInstance_6() {
    return Companion_instance_9;
  }
  function values_1() {
    return [ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  var $ENTRIES_1;
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).d3l = function () {
    return this.equals(ColorMode_LIGHT_getInstance());
  };
  protoOf(ColorMode).e3l = function () {
    return this.equals(ColorMode_DARK_getInstance());
  };
  protoOf(ColorMode).o3j = function () {
    var tmp;
    switch (this.m2_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).f3l = function () {
    return get_LocalColorMode().g21(mutableStateOf(this));
  };
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.l2_1.toLowerCase();
  }
  function loadFromLocalStorage(_this__u8e3s4, key) {
    key = key === VOID ? 'silk-color-mode' : key;
    _init_properties_ColorMode_kt__lz79sc();
    var colorModeKey = createColorModeStorageKey(key);
    return getItem(window.localStorage, colorModeKey);
  }
  function get_systemPreference(_this__u8e3s4) {
    _init_properties_ColorMode_kt__lz79sc();
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? ColorMode_DARK_getInstance() : ColorMode_LIGHT_getInstance();
  }
  function saveToLocalStorage(_this__u8e3s4, key) {
    key = key === VOID ? 'silk-color-mode' : key;
    _init_properties_ColorMode_kt__lz79sc();
    var colorModeKey = createColorModeStorageKey(key);
    setItem(window.localStorage, colorModeKey, _this__u8e3s4);
  }
  function createColorModeStorageKey(key) {
    _init_properties_ColorMode_kt__lz79sc();
    return createStorageKey(get_entries_1(), key);
  }
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_3.t3a().a3h());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function Red() {
    Red_instance = this;
    this.g3l_1 = Companion_instance_2.p3d(16772078);
    this.h3l_1 = Companion_instance_2.p3d(16764370);
    this.i3l_1 = Companion_instance_2.p3d(15702682);
    this.j3l_1 = Companion_instance_2.p3d(15037299);
    this.k3l_1 = Companion_instance_2.p3d(15684432);
    this.l3l_1 = Companion_instance_2.p3d(16007990);
    this.m3l_1 = Companion_instance_2.p3d(15022389);
    this.n3l_1 = Companion_instance_2.p3d(13840175);
    this.o3l_1 = Companion_instance_2.p3d(12986408);
    this.p3l_1 = Companion_instance_2.p3d(12000284);
  }
  protoOf(Red).q3l = function () {
    return this.i3l_1;
  };
  protoOf(Red).r3l = function () {
    return this.j3l_1;
  };
  protoOf(Red).s3l = function () {
    return this.k3l_1;
  };
  protoOf(Red).t3l = function () {
    return this.l3l_1;
  };
  protoOf(Red).u3l = function () {
    return this.m3l_1;
  };
  protoOf(Red).v3l = function () {
    return this.n3l_1;
  };
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Blue() {
    Blue_instance = this;
    this.w3l_1 = Companion_instance_2.p3d(14938877);
    this.x3l_1 = Companion_instance_2.p3d(12312315);
    this.y3l_1 = Companion_instance_2.p3d(9489145);
    this.z3l_1 = Companion_instance_2.p3d(6600182);
    this.a3m_1 = Companion_instance_2.p3d(4367861);
    this.b3m_1 = Companion_instance_2.p3d(2201331);
    this.c3m_1 = Companion_instance_2.p3d(2001125);
    this.d3m_1 = Companion_instance_2.p3d(1668818);
    this.e3m_1 = Companion_instance_2.p3d(1402304);
    this.f3m_1 = Companion_instance_2.p3d(870305);
  }
  protoOf(Blue).q3l = function () {
    return this.y3l_1;
  };
  protoOf(Blue).r3l = function () {
    return this.z3l_1;
  };
  protoOf(Blue).s3l = function () {
    return this.a3m_1;
  };
  protoOf(Blue).t3l = function () {
    return this.b3m_1;
  };
  protoOf(Blue).u3l = function () {
    return this.c3m_1;
  };
  protoOf(Blue).v3l = function () {
    return this.d3m_1;
  };
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function Gray() {
    Gray_instance = this;
    this.g3m_1 = Companion_instance_2.p3d(16448250);
    this.h3m_1 = Companion_instance_2.p3d(16119285);
    this.i3m_1 = Companion_instance_2.p3d(15658734);
    this.j3m_1 = Companion_instance_2.p3d(14737632);
    this.k3m_1 = Companion_instance_2.p3d(12434877);
    this.l3m_1 = Companion_instance_2.p3d(10395294);
    this.m3m_1 = Companion_instance_2.p3d(7697781);
    this.n3m_1 = Companion_instance_2.p3d(6381921);
    this.o3m_1 = Companion_instance_2.p3d(4342338);
    this.p3m_1 = Companion_instance_2.p3d(2171169);
  }
  protoOf(Gray).q3l = function () {
    return this.i3m_1;
  };
  protoOf(Gray).r3l = function () {
    return this.j3m_1;
  };
  protoOf(Gray).s3l = function () {
    return this.k3m_1;
  };
  protoOf(Gray).t3l = function () {
    return this.l3m_1;
  };
  protoOf(Gray).u3l = function () {
    return this.m3m_1;
  };
  protoOf(Gray).v3l = function () {
    return this.n3m_1;
  };
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable;
  function MutablePalettes() {
    this.q3m_1 = new MutablePalette();
    this.r3m_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).s3m = function () {
    return this.q3m_1;
  };
  protoOf(MutablePalettes).t3m = function () {
    return this.r3m_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.x3m_1 = palette;
    this.y3m_1 = prefix;
  }
  protoOf(EntryDelegate).t32 = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.y3m_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.x3m_1.z3m_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).a3n = function (thisRef, property, value) {
    var tmp1 = this.x3m_1.z3m_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.y3m_1;
    // Inline function 'kotlin.collections.set' call
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    tmp1.a5(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.b3n_1 = palette;
    this.c3n_1 = groupName;
  }
  protoOf(ColorGroup).d3n = function () {
    return new EntryDelegate(this.b3n_1, this.c3n_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.z3m_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutablePalette).v3m = function (key) {
    return this.z3m_1.h2(key);
  };
  protoOf(MutablePalette).e3n = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.z3m_1.a5(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().m3g_1.u3m(_this__u8e3s4);
  }
  function com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() {
    return com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable;
  }
  var com_varabyte_kobweb_silk_theme_shapes_Path$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable;
  var com_varabyte_kobweb_silk_theme_shapes_RectF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Rect$stable;
  var com_varabyte_kobweb_silk_theme_shapes_CircleF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Circle$stable;
  var com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable;
  var com_varabyte_kobweb_silk_theme_shapes_Polygon$stable;
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.f3n();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.g3n_1 = topLeft;
    this.h3n_1 = botRight;
    this.i3n_1 = cornerRadius;
  }
  protoOf(RectF).f3n = function () {
    var tmp;
    if (!(this.g3n_1.re_1 === 0.0) || !(this.g3n_1.se_1 === 0.0) || !(this.h3n_1.re_1 === 100.0) || !(this.h3n_1.se_1 === 100.0) || !equals(this.i3n_1, get_px(0))) {
      tmp = new InsetPath(this.g3n_1, this.h3n_1, this.i3n_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
  }
  protoOf(Path).k3n = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).l3n = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.re_1) + '% ' + toString(_this__u8e3s4.se_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.re_1, 100.0 - _this__u8e3s4.se_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.m3n_1 = topLeft;
    this.n3n_1 = roundness;
    this.o3n_1 = from100(botRight);
  }
  protoOf(InsetPath).j3n = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.n3n_1;
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + toString(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.m3n_1.re_1;
    var top = this.m3n_1.se_1;
    var right = this.o3n_1.re_1;
    var bottom = this.o3n_1.se_1;
    var insetPart = left === top && right === bottom && left === right ? this.k3n(left) : left === right && top === bottom ? this.l3n(to(top, left)) : this.k3n(top) + ' ' + this.k3n(right) + ' ' + this.k3n(bottom) + ' ' + this.k3n(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.e2u('clip-path', $path.j3n());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).u3m = get;
  protoOf(MutablePalette).w3m = getValue_0;
  //endregion
  //region block: init
  com_varabyte_kobweb_silk_SilkStyleSheet$stable = 0;
  Companion_instance_3 = new Companion();
  com_varabyte_kobweb_silk_init_CssStyleRegistrarImpl_Entry$stable = 0;
  com_varabyte_kobweb_silk_init_SilkStylesheetInstance$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_OfMedia$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_NonMediaCssRule$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_OfAttributeSelector$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoClass$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_OfPseudoElement$stable = 0;
  com_varabyte_kobweb_silk_style_CssRule_CompositeOpen$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule_CompositeClosed$stable = 8;
  com_varabyte_kobweb_silk_style_CssRule$stable = 8;
  Companion_instance_4 = new Companion_0();
  Companion_instance_5 = new Companion_1();
  Companion_instance_6 = new Companion_2();
  com_varabyte_kobweb_silk_style_CssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_SimpleCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_ExtendingCssStyleVariant$stable = 0;
  com_varabyte_kobweb_silk_style_animation_KeyframesBuilder$stable = 8;
  com_varabyte_kobweb_silk_style_animation_Keyframes$stable = 8;
  Companion_instance_8 = new Companion_4();
  com_varabyte_kobweb_silk_style_breakpoint_Breakpoint_Range$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Px$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Em$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue_Rem$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointUnitValue$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_BreakpointValues$stable = 0;
  com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stable = 0;
  com_varabyte_kobweb_silk_style_layer_LayerListBuilder$stable = 8;
  _SilkTheme = null;
  com_varabyte_kobweb_silk_theme_MutableSilkTheme$stable = 8;
  com_varabyte_kobweb_silk_theme_ImmutableSilkTheme$stable = 8;
  Companion_instance_9 = new Companion_5();
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette$stable = 8;
  com_varabyte_kobweb_silk_theme_colors_palette_MutablePalettes$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Path$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_CirclePath$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_InsetPath$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_RectF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Rect$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_CircleF$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_Circle$stable = 0;
  com_varabyte_kobweb_silk_theme_shapes_PolygonF$stable = 8;
  com_varabyte_kobweb_silk_theme_shapes_Polygon$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SpanText;
  _.$_$.b = Deferred;
  _.$_$.c = DeferringHost;
  _.$_$.d = set_additionalSilkInitialization;
  _.$_$.e = registerStyleBase;
  _.$_$.f = Keyframes;
  _.$_$.g = com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter;
  _.$_$.h = toAnimation_0;
  _.$_$.i = get_entries;
  _.$_$.j = displayIfAtLeast;
  _.$_$.k = displayUntil;
  _.$_$.l = get_active;
  _.$_$.m = get_ariaDisabled;
  _.$_$.n = get_ariaInvalid;
  _.$_$.o = descendants;
  _.$_$.p = get_disabled;
  _.$_$.q = get_focusVisible;
  _.$_$.r = get_hover;
  _.$_$.s = get_link;
  _.$_$.t = not;
  _.$_$.u = get_placeholder;
  _.$_$.v = get_visited;
  _.$_$.w = Base;
  _.$_$.x = CssStyle_2;
  _.$_$.y = CssStyle_0;
  _.$_$.z = CssStyle_1;
  _.$_$.a1 = addVariantBase;
  _.$_$.b1 = addVariant_0;
  _.$_$.c1 = base_1;
  _.$_$.d1 = base_0;
  _.$_$.e1 = base;
  _.$_$.f1 = com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter;
  _.$_$.g1 = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter;
  _.$_$.h1 = toAttrs_0;
  _.$_$.i1 = toModifier_1;
  _.$_$.j1 = toModifier_0;
  _.$_$.k1 = toModifier;
  _.$_$.l1 = ColorGroup;
  _.$_$.m1 = MutablePalette;
  _.$_$.n1 = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter;
  _.$_$.o1 = toPalette;
  _.$_$.p1 = loadFromLocalStorage;
  _.$_$.q1 = saveToLocalStorage;
  _.$_$.r1 = suffixedWith;
  _.$_$.s1 = get_systemPreference;
  _.$_$.t1 = clip;
  _.$_$.u1 = modifyStyleBase;
  _.$_$.v1 = get_name_0;
  _.$_$.w1 = SilkFoundationStyles;
  _.$_$.x1 = Breakpoint_MD_getInstance;
  _.$_$.y1 = ColorMode_DARK_getInstance;
  _.$_$.z1 = ColorMode_LIGHT_getInstance;
  _.$_$.a2 = Base_init_$Init$;
  _.$_$.b2 = RectF_init_$Create$_0;
  _.$_$.c2 = Companion_instance_5;
  _.$_$.d2 = Companion_instance_9;
  _.$_$.e2 = Blue_getInstance;
  _.$_$.f2 = Gray_getInstance;
  _.$_$.g2 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
