(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kobweb-frontend-browser-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    globalThis['kobweb-frontend-silk-widgets'] = factory(typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-browser-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var protoOf = kotlin_kotlin.$_$.y6;
  var initMetadataForObject = kotlin_kotlin.$_$.m6;
  var Unit_instance = kotlin_kotlin.$_$.f2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d4;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var listOf = kotlin_kotlin.$_$.z3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var VOID = kotlin_kotlin.$_$.e;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var KProperty1 = kotlin_kotlin.$_$.j7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e6;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var objectCreate = kotlin_kotlin.$_$.x6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i6;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var initMetadataForClass = kotlin_kotlin.$_$.h6;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var Companion_instance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var Companion_instance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Companion_instance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var descendants = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var marginBlock_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var ButtonType_Button_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var toModifier_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var ensureNotNull = kotlin_kotlin.$_$.s9;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d2;
  var get_isBright = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.k9;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q3;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d3;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var boxShadow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o2;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_instance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var Companion_instance_15 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Companion_instance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var Line = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d2;
  var Companion_instance_17 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var Group = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c2;
  var SVGStrokeLineJoin_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s2;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.u9;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t2;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var Hr = kotlin_org_jetbrains_compose_html_html_core.$_$.u3;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z2;
  var mapCapacity = kotlin_kotlin.$_$.a4;
  var coerceAtLeast = kotlin_kotlin.$_$.b7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.g7;
  var THROW_ISE = kotlin_kotlin.$_$.l9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.c6;
  var CoroutineImpl = kotlin_kotlin.$_$.o5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var isInterface = kotlin_kotlin.$_$.q6;
  var initMetadataForLambda = kotlin_kotlin.$_$.l6;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var EventListenerManager = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var merge = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var launchIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Enum = kotlin_kotlin.$_$.d9;
  var TopCenter_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var Deferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var disposableRef = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var toDouble = kotlin_kotlin.$_$.s8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var toString = kotlin_kotlin.$_$.a7;
  var initMetadataForInterface = kotlin_kotlin.$_$.k6;
  var IllegalStateException = kotlin_kotlin.$_$.g9;
  var onTransitionEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var KMutableProperty1 = kotlin_kotlin.$_$.h7;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var ResizeObserver_init_$Create$ = kotlin_com_varabyte_kobweb_browser_ext.$_$.h;
  var numberToDouble = kotlin_kotlin.$_$.v6;
  var align = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var BoxScope = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var split = kotlin_kotlin.$_$.l8;
  var charSequenceLength = kotlin_kotlin.$_$.y5;
  var Br = kotlin_org_jetbrains_compose_html_html_core.$_$.k3;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e2;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f2;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var get_name = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v1;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var Companion_instance_18 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var colorScheme = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var KProperty0 = kotlin_kotlin.$_$.i7;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForObject(CalloutVars, 'CalloutVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(CalloutType, 'CalloutType', VOID, Base);
  initMetadataForObject(ComposableSingletons$CalloutKt, 'ComposableSingletons$CalloutKt');
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForObject(ComposableSingletons$CloseIconKt, 'ComposableSingletons$CloseIconKt');
  initMetadataForObject(ComposableSingletons$ExclaimIconKt, 'ComposableSingletons$ExclaimIconKt');
  initMetadataForObject(ComposableSingletons$HamburgerIconKt, 'ComposableSingletons$HamburgerIconKt');
  initMetadataForObject(ComposableSingletons$InfoIconKt, 'ComposableSingletons$InfoIconKt');
  initMetadataForObject(ComposableSingletons$LightbulbIconKt, 'ComposableSingletons$LightbulbIconKt');
  initMetadataForObject(ComposableSingletons$MoonIconKt, 'ComposableSingletons$MoonIconKt');
  initMetadataForObject(ComposableSingletons$QuestionIconKt, 'ComposableSingletons$QuestionIconKt');
  initMetadataForObject(ComposableSingletons$QuoteIconKt, 'ComposableSingletons$QuoteIconKt');
  initMetadataForObject(ComposableSingletons$StopIconKt, 'ComposableSingletons$StopIconKt');
  initMetadataForObject(ComposableSingletons$SunIconKt, 'ComposableSingletons$SunIconKt');
  initMetadataForObject(ComposableSingletons$WarningIconKt, 'ComposableSingletons$WarningIconKt');
  initMetadataForClass(Fill, 'Fill', Fill);
  initMetadataForClass(Stroke, 'Stroke', Stroke);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForLambda(Surface$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(KeepPopupOpenStrategy, 'KeepPopupOpenStrategy');
  initMetadataForClass(never$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForClass(onFocus$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForClass(onHover$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForLambda(combine$o$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(combine$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(OpenClosePopupStrategy, 'OpenClosePopupStrategy');
  initMetadataForClass(OpenClose, 'OpenClose', VOID, Enum);
  initMetadataForClass(onFocus$1_0, VOID, VOID, OpenClosePopupStrategy);
  initMetadataForClass(onHover$1_0, VOID, VOID, OpenClosePopupStrategy);
  initMetadataForLambda(combine$o$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(combine$1_0, VOID, VOID, OpenClosePopupStrategy);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForObject(ComposableSingletons$OverlayKt, 'ComposableSingletons$OverlayKt');
  initMetadataForClass(PopoverShowHideSettings, 'PopoverShowHideSettings');
  initMetadataForLambda(PopoverStateController$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(PopoverStateController$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(PopoverStateController, 'PopoverStateController');
  initMetadataForClass(PopoverElements, 'PopoverElements');
  initMetadataForObject(Uninitialized, 'Uninitialized');
  initMetadataForInterface(Initialized, 'Initialized');
  initMetadataForClass(FoundElements, 'FoundElements', VOID, VOID, [Initialized]);
  initMetadataForInterface(Visible, 'Visible', VOID, VOID, [Initialized]);
  initMetadataForClass(Calculating, 'Calculating', VOID, VOID, [Visible]);
  initMetadataForClass(Shown, 'Shown', VOID, VOID, [Visible]);
  initMetadataForClass(Hiding, 'Hiding', VOID, VOID, [Visible]);
  initMetadataForClass(AdvancedPopover$$inlined$cache$1$2);
  initMetadataForClass(AdvancedPopover$$inlined$run$1$2$1$1);
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForClass(PopupPlacement, 'PopupPlacement', VOID, Enum);
  initMetadataForClass(PopupPlacementStrategy, 'PopupPlacementStrategy');
  initMetadataForClass(PopupPlacementStrategy$Companion$of$1, VOID, VOID, PopupPlacementStrategy);
  initMetadataForClass(Position, 'Position');
  initMetadataForClass(PositionAndPlacement, 'PositionAndPlacement');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(PopupScope, 'PopupScope', VOID, VOID, [BoxScope]);
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup);
  initMetadataForClass(MutableCallout, 'MutableCallout', VOID, ColorGroup);
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup);
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup);
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup);
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup);
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  var com_varabyte_kobweb_silk_components_disclosure_TabVars$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_PanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable;
  var com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable;
  function TabVars() {
    TabVars_instance = this;
    this.p3n_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().n32();
    tmp.q3n_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.r3n_1 = StyleVariable('silk');
    this.s3n_1 = StyleVariable('silk');
    this.t3n_1 = StyleVariable('silk');
    this.u3n_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.v3n_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f3o().n32();
    tmp_1.w3n_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).g3o = function () {
    return this.p3n_1.t32(this, Color$factory());
  };
  protoOf(TabVars).h3o = function () {
    return this.q3n_1.t32(this, BorderColor$factory());
  };
  protoOf(TabVars).i3o = function () {
    return this.r3n_1.t32(this, BackgroundColor$factory());
  };
  protoOf(TabVars).j3o = function () {
    return this.s3n_1.t32(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).k3o = function () {
    return this.t3n_1.t32(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).l3o = function () {
    return this.u3n_1.t32(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).m3o = function () {
    return this.v3n_1.t32(this, BorderThickness$factory());
  };
  protoOf(TabVars).n3o = function () {
    return this.w3n_1.t32(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().m3o().n32();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().h3o().n32());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.z1t(2044107546);
    var tmp0 = tabIndex(Companion_instance, 0);
    $composer_0.b1u();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.e3h(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    $this$CssStyle.g3j(tmp, TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).d3i(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.g3j(tmp_0, TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).d3i(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.g3j(tmp_1, TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.f30()), Companion_instance_2.h33(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().n3o().n32())), TabVars_getInstance().i3o().n32()), TabVars_getInstance().g3o().n32()), Companion_instance_3.i30()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().m3o().n32();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().h3o().n32());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.k33(TabVars_getInstance().m3o().n32());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().j3o().n32()), Companion_instance_1.g30());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().k3o().n32());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().l3o().n32());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.u3e(Companion_instance_4.a32());
    return Unit_instance;
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g3o();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.h3o();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i3o();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.j3o();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.k3o();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.l3o();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.m3o();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.n3o();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
      com_varabyte_kobweb_silk_components_disclosure_TabVars$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_PanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelData$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabPanelScope$stable = 8;
      com_varabyte_kobweb_silk_components_disclosure_TabsScope$stable = 8;
    }
  }
  function get_CalloutStyle() {
    _init_properties_Callout_kt__ksu682();
    return CalloutStyle;
  }
  var CalloutStyle;
  function get_LeftBorderedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedCalloutVariant;
  }
  var LeftBorderedCalloutVariant;
  function get_LeftBorderedFilledCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return LeftBorderedFilledCalloutVariant;
  }
  var LeftBorderedFilledCalloutVariant;
  function get_OutlinedCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return OutlinedCalloutVariant;
  }
  var OutlinedCalloutVariant;
  function get_MatchingLinkCalloutVariant() {
    _init_properties_Callout_kt__ksu682();
    return MatchingLinkCalloutVariant;
  }
  var MatchingLinkCalloutVariant;
  var com_varabyte_kobweb_silk_components_display_CalloutVars$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutType$stable;
  var com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable;
  function CalloutVars() {
    CalloutVars_instance = this;
    this.o3o_1 = StyleVariable('silk');
    this.p3o_1 = StyleVariable('silk');
    this.q3o_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.5);
    tmp.r3o_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
  }
  protoOf(CalloutVars).g3o = function () {
    return this.o3o_1.t32(this, Color$factory_0());
  };
  protoOf(CalloutVars).i3o = function () {
    return this.p3o_1.t32(this, BackgroundColor$factory_0());
  };
  protoOf(CalloutVars).s3o = function () {
    return this.q3o_1.t32(this, TitleFontSize$factory());
  };
  protoOf(CalloutVars).t3o = function () {
    return this.r3o_1.t32(this, TitleGap$factory());
  };
  var CalloutVars_instance;
  function CalloutVars_getInstance() {
    if (CalloutVars_instance == null)
      new CalloutVars();
    return CalloutVars_instance;
  }
  function markdownParagraphHack(_this__u8e3s4) {
    _init_properties_Callout_kt__ksu682();
    _this__u8e3s4.g3h(' >.callout-body>p:last-child', markdownParagraphHack$lambda);
  }
  function CalloutType$Companion$CAUTION$lambda(it) {
    return get_callout_0(toPalette(it)).u3o();
  }
  function CalloutType$Companion$IMPORTANT$lambda(it) {
    return get_callout_0(toPalette(it)).v3o();
  }
  function CalloutType$Companion$NOTE$lambda(it) {
    return get_callout_0(toPalette(it)).w3o();
  }
  function CalloutType$Companion$QUESTION$lambda(it) {
    return get_callout_0(toPalette(it)).x3o();
  }
  function CalloutType$Companion$QUOTE$lambda(it) {
    return get_callout_0(toPalette(it)).y3o();
  }
  function CalloutType$Companion$TIP$lambda(it) {
    return get_callout_0(toPalette(it)).z3o();
  }
  function CalloutType$Companion$WARNING$lambda(it) {
    return get_callout_0(toPalette(it)).a3p();
  }
  function CalloutType_init_$Init$(icon, label, provideColor, $this) {
    var tmp = CalloutType$_init_$lambda_4upqpt_0(provideColor);
    CalloutType.call($this, icon, label, tmp, CalloutType$_init_$lambda_4upqpt_1(provideColor));
    return $this;
  }
  function CalloutType_init_$Create$(icon, label, provideColor) {
    return CalloutType_init_$Init$(icon, label, provideColor, objectCreate(protoOf(CalloutType)));
  }
  function Companion() {
    Companion_instance_19 = this;
    var tmp = this;
    var tmp_0 = ComposableSingletons$CalloutKt_getInstance().b3p_1;
    tmp.i3p_1 = CalloutType_init_$Create$(tmp_0, 'Caution', CalloutType$Companion$CAUTION$lambda);
    var tmp_1 = this;
    var tmp_2 = ComposableSingletons$CalloutKt_getInstance().c3p_1;
    tmp_1.j3p_1 = CalloutType_init_$Create$(tmp_2, 'Important', CalloutType$Companion$IMPORTANT$lambda);
    var tmp_3 = this;
    var tmp_4 = ComposableSingletons$CalloutKt_getInstance().d3p_1;
    tmp_3.k3p_1 = CalloutType_init_$Create$(tmp_4, 'Note', CalloutType$Companion$NOTE$lambda);
    var tmp_5 = this;
    var tmp_6 = ComposableSingletons$CalloutKt_getInstance().e3p_1;
    tmp_5.l3p_1 = CalloutType_init_$Create$(tmp_6, 'Question', CalloutType$Companion$QUESTION$lambda);
    var tmp_7 = this;
    var tmp_8 = ComposableSingletons$CalloutKt_getInstance().f3p_1;
    tmp_7.m3p_1 = CalloutType_init_$Create$(tmp_8, 'Quote', CalloutType$Companion$QUOTE$lambda);
    var tmp_9 = this;
    var tmp_10 = ComposableSingletons$CalloutKt_getInstance().g3p_1;
    tmp_9.n3p_1 = CalloutType_init_$Create$(tmp_10, 'Tip', CalloutType$Companion$TIP$lambda);
    var tmp_11 = this;
    var tmp_12 = ComposableSingletons$CalloutKt_getInstance().h3p_1;
    tmp_11.o3p_1 = CalloutType_init_$Create$(tmp_12, 'Warning', CalloutType$Companion$WARNING$lambda);
  }
  var Companion_instance_19;
  function Companion_getInstance_0() {
    if (Companion_instance_19 == null)
      new Companion();
    return Companion_instance_19;
  }
  function CalloutType$_init_$lambda_4upqpt($provideColor, $provideBackgroundColor) {
    return function (_this__u8e3s4) {
      return setVariable(setVariable(Companion_instance, CalloutVars_getInstance().g3o(), $provideColor(_this__u8e3s4.h3j_1)), CalloutVars_getInstance().i3o(), $provideBackgroundColor(_this__u8e3s4.h3j_1));
    };
  }
  function CalloutType$_init_$lambda_4upqpt_0($provideColor) {
    return function (it) {
      return $provideColor(it);
    };
  }
  function CalloutType$_init_$lambda_4upqpt_1($provideColor) {
    return function (it) {
      return $provideColor(it).o3d().n3d(VOID, VOID, VOID, it.d3l() ? 0.15 : 0.2);
    };
  }
  function CalloutType(icon, label, provideColor, provideBackgroundColor) {
    Companion_getInstance_0();
    Base.call(this, CalloutType$_init_$lambda_4upqpt(provideColor, provideBackgroundColor));
    this.r3p_1 = icon;
    this.s3p_1 = label;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      StopIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      ExclaimIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      InfoIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      QuestionIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      QuoteIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      LightbulbIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      WarningIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CalloutKt() {
    ComposableSingletons$CalloutKt_instance = this;
    var tmp = this;
    tmp.b3p_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1105541261, false, ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q));
    var tmp_0 = this;
    tmp_0.c3p_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-700737724, false, ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj));
    var tmp_1 = this;
    tmp_1.d3p_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1510536654, false, ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o));
    var tmp_2 = this;
    tmp_2.e3p_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2086387290, false, ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9));
    var tmp_3 = this;
    tmp_3.f3p_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1974337438, false, ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y));
    var tmp_4 = this;
    tmp_4.g3p_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-613517763, false, ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz));
    var tmp_5 = this;
    tmp_5.h3p_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(2087814270, false, ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls));
  }
  var ComposableSingletons$CalloutKt_instance;
  function ComposableSingletons$CalloutKt_getInstance() {
    if (ComposableSingletons$CalloutKt_instance == null)
      new ComposableSingletons$CalloutKt();
    return ComposableSingletons$CalloutKt_instance;
  }
  function CalloutStyle$lambda($this$CssStyle) {
    _init_properties_Callout_kt__ksu682();
    $this$CssStyle.e3h(CalloutStyle$lambda$lambda);
    $this$CssStyle.g3h(' >.callout-title', CalloutStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function CalloutStyle$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return marginBlock(textAlign(Companion_instance, Companion_instance_6.o2z()), get_em(1));
  }
  function CalloutStyle$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return gap(fontSize(fontWeight(alignItems(display(tmp, 'flex'), Companion_instance_8.m2z()), Companion_instance_9.k30()), CalloutVars_getInstance().s3o().n32()), CalloutVars_getInstance().t3o().n32());
  }
  function LeftBorderedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.e3h(LeftBorderedCalloutVariant$lambda$lambda);
    $this$addVariant.g3h(' >.callout-title', LeftBorderedCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding_0(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().g3o().n32()), get_cssRem(0.5), get_cssRem(1));
  }
  function LeftBorderedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().g3o().n32());
    return margin_0(tmp, LeftBorderedCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.x3e(get_cssRem(1));
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.e3h(LeftBorderedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.g3h(' >.callout-title', LeftBorderedFilledCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(padding(borderRadius(backgroundColor(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().g3o().n32()), CalloutVars_getInstance().i3o().n32()), get_px(4)), get_cssRem(0.8)), [Companion_instance_10.w2z(get_px(0), get_px(1), get_px(2), VOID, Colors_instance.t3d().n3d(VOID, VOID, VOID, 0.12)), Companion_instance_10.w2z(get_px(0), get_px(3), get_px(10), VOID, Colors_instance.t3d().n3d(VOID, VOID, VOID, 0.08))]);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_instance, CalloutVars_getInstance().g3o().n32());
    return margin_0(tmp, LeftBorderedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.x3e(get_cssRem(0.25));
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.e3h(OutlinedCalloutVariant$lambda$lambda);
    $this$addVariant.g3h(' >.callout-title', OutlinedCalloutVariant$lambda$lambda_0);
    $this$addVariant.g3h(' .callout-icon', OutlinedCalloutVariant$lambda$lambda_1);
    $this$addVariant.g3h(' >.callout-body', OutlinedCalloutVariant$lambda$lambda_2);
    markdownParagraphHack($this$addVariant);
    return Unit_instance;
  }
  function OutlinedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().g3o().n32()), get_cssRem(0.2));
  }
  function OutlinedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(backgroundColor(Companion_instance, CalloutVars_getInstance().i3o().n32()), get_cssRem(0.5), get_cssRem(0.75));
  }
  function OutlinedCalloutVariant$lambda$lambda_1() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().g3o().n32());
  }
  function OutlinedCalloutVariant$lambda$lambda_2() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(Companion_instance, get_cssRem(0.5), get_cssRem(0.75));
  }
  function MatchingLinkCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    descendants($this$addVariant, [':any-link'], MatchingLinkCalloutVariant$lambda$lambda);
    return Unit_instance;
  }
  function MatchingLinkCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_instance, CalloutVars_getInstance().g3o().n32());
  }
  function markdownParagraphHack$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_instance;
    return marginBlock_0(tmp, markdownParagraphHack$lambda$lambda);
  }
  function markdownParagraphHack$lambda$lambda($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.z3e(get_px(0));
    return Unit_instance;
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g3o();
    }, null);
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i3o();
    }, null);
  }
  function TitleFontSize$factory() {
    return getPropertyCallableRef('TitleFontSize', 1, KProperty1, function (receiver) {
      return receiver.s3o();
    }, null);
  }
  function TitleGap$factory() {
    return getPropertyCallableRef('TitleGap', 1, KProperty1, function (receiver) {
      return receiver.t3o();
    }, null);
  }
  var properties_initialized_Callout_kt_nor0bk;
  function _init_properties_Callout_kt__ksu682() {
    if (!properties_initialized_Callout_kt_nor0bk) {
      properties_initialized_Callout_kt_nor0bk = true;
      CalloutStyle = CssStyle(VOID, CalloutStyle$lambda);
      var tmp = get_CalloutStyle();
      LeftBorderedCalloutVariant = addVariant(tmp, VOID, LeftBorderedCalloutVariant$lambda);
      var tmp_0 = get_CalloutStyle();
      LeftBorderedFilledCalloutVariant = addVariant(tmp_0, VOID, LeftBorderedFilledCalloutVariant$lambda);
      var tmp_1 = get_CalloutStyle();
      OutlinedCalloutVariant = addVariant(tmp_1, VOID, OutlinedCalloutVariant$lambda);
      var tmp_2 = get_CalloutStyle();
      MatchingLinkCalloutVariant = addVariant(tmp_2, VOID, MatchingLinkCalloutVariant$lambda);
      com_varabyte_kobweb_silk_components_display_CalloutVars$stable = 8;
      com_varabyte_kobweb_silk_components_display_CalloutType$stable = 0;
      com_varabyte_kobweb_silk_components_display_CalloutDefaults$stable = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter();
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  var com_varabyte_kobweb_silk_components_forms_ButtonVars$stable;
  var com_varabyte_kobweb_silk_components_forms_ButtonSize$stable;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.t3p_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().n32();
    tmp.u3p_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.v3p_1 = StyleVariable('silk');
    this.w3p_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().n32();
    tmp_0.x3p_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f3o().n32();
    tmp_1.y3p_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.z3p_1 = StyleVariable('silk');
    this.a3q_1 = StyleVariable('silk');
    this.b3q_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).c3q = function () {
    return this.t3p_1.t32(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).d3q = function () {
    return this.u3p_1.t32(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).e3q = function () {
    return this.v3p_1.t32(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).f3q = function () {
    return this.w3p_1.t32(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).g3o = function () {
    return this.x3p_1.t32(this, Color$factory_1());
  };
  protoOf(ButtonVars).n3o = function () {
    return this.y3p_1.t32(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).g3q = function () {
    return this.z3p_1.t32(this, FontSize$factory());
  };
  protoOf(ButtonVars).h3q = function () {
    return this.a3q_1.t32(this, Height$factory());
  };
  protoOf(ButtonVars).i3q = function () {
    return this.b3q_1.t32(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Button_0(onClick_0, modifier, variant, type, enabled, size, colorPalette, focusBorderColor, ref, content, $composer, $changed, $default) {
    _init_properties_Button_kt__2845m6();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var type_0 = {_v: type};
    var enabled_0 = {_v: enabled};
    var size_0 = {_v: size};
    var colorPalette_0 = {_v: colorPalette};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(366060417);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(onClick_0) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.j1l(variant_0._v) : $composer_0.w1u(variant_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.j1l(type_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.x1u(enabled_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.j1l(size_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.w1u(colorPalette_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.w1u(focusBorderColor_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ((($changed & 134217728) === 0 ? $composer_0.j1l(ref_0._v) : $composer_0.w1u(ref_0._v)) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.w1u(content) ? 536870912 : 268435456);
    if (!(($dirty & 306783379) === 306783378) || !$composer_0.s1t()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        type_0._v = ButtonType_Button_getInstance();
      }
      if (!(($default & 16) === 0)) {
        enabled_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        size_0._v = Companion_getInstance_1().l3q_1;
      }
      if (!(($default & 64) === 0)) {
        colorPalette_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        focusBorderColor_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        ref_0._v = null;
      }
      $composer_0.z1t(779060304);
      $composer_0.z1t(779030320);
      var tmp0 = thenIf(toModifier(get_ButtonStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3), !enabled_0._v, toModifier_0(get_DisabledStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter())).h3c(toModifier_1(size_0._v, $composer_0, 14 & $dirty >> 15));
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp;
      if (!(colorPalette_0._v == null)) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var colorPalette_1 = ensureNotNull(colorPalette_0._v);
        var isDark = Companion_instance_11.l3j($composer_0, 6).e3l();
        var isBrightColor = get_isBright(isDark ? colorPalette_1.q3l() : colorPalette_1.t3l());
        tmp = setVariable(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().g3o(), get_color(toPalette(isBrightColor ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance()))), ButtonVars_getInstance().c3q(), isDark ? colorPalette_1.q3l() : colorPalette_1.t3l()), ButtonVars_getInstance().e3q(), isDark ? colorPalette_1.r3l() : colorPalette_1.u3l()), ButtonVars_getInstance().f3q(), isDark ? colorPalette_1.s3l() : colorPalette_1.v3l());
      } else {
        tmp = Companion_instance;
      }
      var tmp0_group = tmp0.h3c(tmp);
      $composer_0.b1u();
      var tmp2 = setVariable(tmp0_group, ButtonVars_getInstance().d3q(), focusBorderColor_0._v).h3c(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_0;
      if (enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var tmp_1 = Companion_instance;
        $composer_0.z1t(-357979783);
        var tmp0_0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = tmp0_0.i1v();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r1o_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
          var value = Button$lambda(onClick_0);
          tmp0_0.t1v(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.b1u();
        tmp_0 = onClick(tmp_1, tmp0_group_0);
      } else {
        tmp_0 = Companion_instance;
      }
      var tmp1_group = tmp2.h3c(tmp_0);
      $composer_0.b1u();
      $composer_0.z1t(779067191);
      var tmp4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp4.i1v();
      var tmp_4;
      if (invalid_0 || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var value_0 = Button$lambda_0(type_0);
        tmp4.t1v(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.b1u();
      var tmp_6 = toAttrs(tmp1_group, tmp2_group);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(934841147, true, Button$lambda_1(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.i1v();
      var tmp_7;
      if (invalid_1 || it_1 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.t1v(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_6, tmp0_1, $composer_0, 48, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp3_safe_receiver = $composer_0.b1w();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.l21(Button$lambda_2(onClick_0, modifier_0, variant_0, type_0, enabled_0, size_0, colorPalette_0, focusBorderColor_0, ref_0, content, $changed, $default));
    }
  }
  function Companion_0() {
    Companion_instance_20 = this;
    this.j3q_1 = new ButtonSize(FontSizeVars_getInstance().r3q().n32(), get_cssRem(1.5), get_cssRem(0.5));
    this.k3q_1 = new ButtonSize(FontSizeVars_getInstance().s3q().n32(), get_cssRem(2), get_cssRem(0.75));
    this.l3q_1 = new ButtonSize(FontSizeVars_getInstance().t3q().n32(), get_cssRem(2.5), get_cssRem(1));
    this.m3q_1 = new ButtonSize(FontSizeVars_getInstance().u3q().n32(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_20;
  function Companion_getInstance_1() {
    if (Companion_instance_20 == null)
      new Companion_0();
    return Companion_instance_20;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_1();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().g3q(), fontSize), ButtonVars_getInstance().h3q(), height), ButtonVars_getInstance().i3q(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.e3h(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).d3i(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.g3j(tmp, ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).d3i(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.g3j(tmp_0, ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).d3i(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.g3j(tmp_1, ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().g3o().n32()), ButtonVars_getInstance().c3q().n32()), 1.2), ButtonVars_getInstance().h3q().n32()), ButtonVars_getInstance().h3q().n32()), ButtonVars_getInstance().g3q().n32()), Companion_instance_9.l30()), Companion_instance_12.y32()), VOID, ButtonVars_getInstance().i3q().n32()), Companion_instance_13.r31()), get_cssRem(0.375));
    return transition_0(userSelect(border_0(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.i30()), [Companion_instance_2.f33('background-color', ButtonVars_getInstance().n3o().n32())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.r3e(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().e3q().n32()), Companion_instance_1.f30());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(outline(tmp, tmp_0, 'solid', Colors_instance.r3d()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().d3q().n32());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().f3q().n32());
  }
  function Button$lambda($onClick) {
    return function (evt) {
      $onClick(evt);
      evt.s2x();
      return Unit_instance;
    };
  }
  function Button$lambda_0($type) {
    return function ($this$toAttrs) {
      type($this$toAttrs, $type._v);
      return Unit_instance;
    };
  }
  function Button$lambda_1($ref, $content) {
    return function ($this$JbButton, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$JbButton, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp = Center_instance;
      var tmp_0 = CenterVertically_instance;
      Row(null, tmp, tmp_0, null, $content, $composer_0, com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 9);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function Button$lambda_2($onClick, $modifier, $variant, $type, $enabled, $size, $colorPalette, $focusBorderColor, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($onClick, $modifier._v, $variant._v, $type._v, $enabled._v, $size._v, $colorPalette._v, $focusBorderColor._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.c3q();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.d3q();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.e3q();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.f3q();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g3o();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.n3o();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.g3q();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.h3q();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.i3q();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_ButtonVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_ButtonSize$stable = 0;
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  var com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable;
  var com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().n32();
    tmp.v3q_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.w3q_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.x3q_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.y3q_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.z3q_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.a3r_1 = StyleVariable('silk');
    this.b3r_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().n32();
    tmp_3.c3r_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.d3r_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.e3r_1 = StyleVariable('silk');
    this.f3r_1 = StyleVariable('silk');
    this.g3r_1 = StyleVariable('silk');
    this.h3r_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().j3r().n32();
    tmp_5.i3r_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).h3o = function () {
    return this.v3q_1.t32(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).k3r = function () {
    return this.w3q_1.t32(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).l3r = function () {
    return this.x3q_1.t32(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).m3r = function () {
    return this.y3q_1.t32(this, Size$factory());
  };
  protoOf(CheckboxVars).n3r = function () {
    return this.z3q_1.t32(this, Spacing$factory());
  };
  protoOf(CheckboxVars).g3q = function () {
    return this.a3r_1.t32(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).o3r = function () {
    return this.b3r_1.t32(this, IconSize$factory());
  };
  protoOf(CheckboxVars).p3r = function () {
    return this.c3r_1.t32(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).q3r = function () {
    return this.d3r_1.t32(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).r3r = function () {
    return this.e3r_1.t32(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).s3r = function () {
    return this.f3r_1.t32(this, IconColor$factory());
  };
  protoOf(CheckboxVars).t3r = function () {
    return this.g3r_1.t32(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).u3r = function () {
    return this.h3r_1.t32(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).v3r = function () {
    return this.i3r_1.t32(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_1() {
    Companion_instance_21 = this;
    this.w3r_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().s3q().n32());
    this.x3r_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().t3q().n32());
    this.y3r_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().u3q().n32());
  }
  var Companion_instance_21;
  function Companion_getInstance_2() {
    if (Companion_instance_21 == null)
      new Companion_1();
    return Companion_instance_21;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().m3r(), boxSize), CheckboxVars_getInstance().o3r(), iconSize), CheckboxVars_getInstance().g3q(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.e3h(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().n3r().n32()), Companion_instance_3.i30()), CheckboxVars_getInstance().g3q().n32()), Companion_instance_1.f30());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.w3j(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.x3j(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.e3h(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().o3r().n32()), CheckboxVars_getInstance().m3r().n32());
    var tmp_0 = CheckboxVars_getInstance().l3r().n32();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border(tmp, tmp_0, 'solid', CheckboxVars_getInstance().h3o().n32()), CheckboxVars_getInstance().k3r().n32()), Companion_instance_2.h33(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().v3r().n32()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().r3r().n32());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.e3h(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().t3r().n32());
    return border_0(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.p3e(CheckboxVars_getInstance().t3r().n32());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().m3r().n32()), CheckboxVars_getInstance().s3r().n32());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.e3h(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.g3h(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.g3h(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().q3r().n32(), CheckboxVars_getInstance().p3r().n32());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().t3r(), CheckboxVars_getInstance().u3r().n32());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.h3o();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.k3r();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.l3r();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.m3r();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.n3r();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.g3q();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.o3r();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.p3r();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.q3r();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.r3r();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.s3r();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t3r();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.u3r();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.v3r();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_CheckboxDefaults$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_CheckboxSize$stable = 0;
      com_varabyte_kobweb_silk_components_forms_CheckboxIconScope$stable = 0;
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  var com_varabyte_kobweb_silk_components_forms_InputDefaults$stable;
  var com_varabyte_kobweb_silk_components_forms_InputVars$stable;
  var com_varabyte_kobweb_silk_components_forms_InputParams$stable;
  var com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable;
  var com_varabyte_kobweb_silk_components_forms_InputSize$stable;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().n32();
    tmp.z3r_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.a3s_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().n32();
    tmp_0.b3s_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.c3s_1 = StyleVariable('silk');
    this.d3s_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().f3o().n32();
    tmp_1.e3s_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.f3s_1 = StyleVariable('silk');
    this.g3s_1 = StyleVariable('silk');
    this.h3s_1 = StyleVariable('silk');
    this.i3s_1 = StyleVariable('silk');
    this.j3s_1 = StyleVariable('silk');
    this.k3s_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().n32();
    tmp_2.l3s_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().n32();
    tmp_3.m3s_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.n3s_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.o3s_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).h3o = function () {
    return this.z3r_1.t32(this, BorderColor$factory_1());
  };
  protoOf(InputVars).k3r = function () {
    return this.a3s_1.t32(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).p3s = function () {
    return this.b3s_1.t32(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).q3s = function () {
    return this.c3s_1.t32(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).r3s = function () {
    return this.d3s_1.t32(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).n3o = function () {
    return this.e3s_1.t32(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).s3s = function () {
    return this.f3s_1.t32(this, FilledColor$factory());
  };
  protoOf(InputVars).t3s = function () {
    return this.g3s_1.t32(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).u3s = function () {
    return this.h3s_1.t32(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).g3q = function () {
    return this.i3s_1.t32(this, FontSize$factory_1());
  };
  protoOf(InputVars).h3q = function () {
    return this.j3s_1.t32(this, Height$factory_0());
  };
  protoOf(InputVars).v3s = function () {
    return this.k3s_1.t32(this, Padding$factory());
  };
  protoOf(InputVars).w3s = function () {
    return this.l3s_1.t32(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).x3s = function () {
    return this.m3s_1.t32(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().v3s().n32();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Companion_2() {
    Companion_instance_22 = this;
    this.y3s_1 = new InputSize(FontSizeVars_getInstance().r3q().n32(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().r3q().n32());
    this.z3s_1 = new InputSize(FontSizeVars_getInstance().s3q().n32(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().s3q().n32());
    this.a3t_1 = new InputSize(FontSizeVars_getInstance().t3q().n32(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().t3q().n32());
    this.b3t_1 = new InputSize(FontSizeVars_getInstance().u3q().n32(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().t3q().n32());
  }
  var Companion_instance_22;
  function Companion_getInstance_3() {
    if (Companion_instance_22 == null)
      new Companion_2();
    return Companion_instance_22;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_3();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().g3q(), fontSize), InputVars_getInstance().h3q(), height), InputVars_getInstance().v3s(), padding), InputVars_getInstance().k3r(), borderRadius), VOID, this);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.r3d());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border(tmp_1, tmp_2, 'solid', Colors_instance.r3d()), InputVars_getInstance().k3r().n32()), InputVars_getInstance().g3q().n32());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.e3h(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    $this$CssStyle.g3j(tmp, InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_15.i30()), get_ColorVar().n32()), InputVars_getInstance().h3q().n32()), InputVars_getInstance().g3q().n32()), Colors_instance.r3d());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.r3d());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp_1, tmp_2, 'solid', Colors_instance.r3d()), Companion_instance_2.h33(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().n3o().n32()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().w3s().n32()), InputVars_getInstance().x3s().n32());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.e3h(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.g3j(tmp, OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).d3i(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.g3j(tmp_0, OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).d3i(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.g3j(tmp_1, OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(border(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().k3r().n32());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', InputVars_getInstance().h3o().n32());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().r3s().n32());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.p3e(InputVars_getInstance().q3s().n32());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().p3s().n32());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.e3h(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).d3i(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.g3j(tmp, FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    $this$addVariant.g3j(tmp_0, FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).d3i(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.g3j(tmp_1, FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().s3s().n32()), InputVars_getInstance().k3r().n32());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Colors_instance.r3d());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().t3s().n32());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().r3s().n32());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().u3s().n32()), InputVars_getInstance().p3s().n32());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.p3e($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.e3h(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.g3j(tmp, FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).d3i(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.g3j(tmp_0, FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).d3i(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.g3j(tmp_1, FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().h3o().n32());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().r3s().n32());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border_0(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.p3e(InputVars_getInstance().q3s().n32());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().p3s().n32());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.p3e($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.h3o();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.k3r();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.p3s();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.q3s();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.r3s();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.n3o();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.s3s();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.t3s();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.u3s();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.g3q();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.h3q();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.v3s();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.w3s();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.x3s();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_1(size(border(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.z31()), Companion_instance_12.y32());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
      com_varabyte_kobweb_silk_components_forms_InputDefaults$stable = com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter();
      com_varabyte_kobweb_silk_components_forms_InputVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputParams$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputGroupScope$stable = 8;
      com_varabyte_kobweb_silk_components_forms_InputSize$stable = 0;
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  var com_varabyte_kobweb_silk_components_forms_SwitchVars$stable;
  var com_varabyte_kobweb_silk_components_forms_SwitchSize$stable;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.g3t_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.h3t_1 = StyleVariable('silk');
    this.i3t_1 = StyleVariable('silk');
    this.j3t_1 = StyleVariable('silk');
    this.k3t_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().n32();
    tmp_0.l3t_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.m3t_1 = StyleVariable('silk');
    this.n3t_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().p3t().n32();
    tmp_1.o3t_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).k3r = function () {
    return this.g3t_1.t32(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).q3t = function () {
    return this.h3t_1.t32(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).r3t = function () {
    return this.i3t_1.t32(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).s3t = function () {
    return this.j3t_1.t32(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).t3t = function () {
    return this.k3t_1.t32(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).u3t = function () {
    return this.l3t_1.t32(this, FocusColor$factory());
  };
  protoOf(SwitchVars).v3t = function () {
    return this.m3t_1.t32(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).w3t = function () {
    return this.n3t_1.t32(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).v3r = function () {
    return this.o3t_1.t32(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_3() {
    Companion_instance_23 = this;
    this.x3t_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.y3t_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.z3t_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_23;
  function Companion_getInstance_4() {
    if (Companion_instance_23 == null)
      new Companion_3();
    return Companion_instance_23;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_4();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().q3t(), width), SwitchVars_getInstance().r3t(), height), SwitchVars_getInstance().s3t(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.e3h(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).d3i(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.g3j(tmp, SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().q3t().n32()), SwitchVars_getInstance().q3t().n32()), SwitchVars_getInstance().r3t().n32()), SwitchVars_getInstance().r3t().n32()), SwitchVars_getInstance().s3t().n32()), SwitchVars_getInstance().k3r().n32()), SwitchVars_getInstance().t3t().n32()), [Companion_instance_2.f33('background-color', SwitchVars_getInstance().v3r().n32())]), Companion_instance_16.y2z());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.f30());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.e3h(SwitchInputVariant$lambda$lambda);
    $this$addVariant.g3h(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow_0(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().u3t().n32());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().r3t().n32()), SwitchVars_getInstance().k3r().n32()), SwitchVars_getInstance().w3t().n32()), SwitchVars_getInstance().v3t().n32()), [Companion_instance_2.f33('translate', SwitchVars_getInstance().v3r().n32())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.k3r();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.q3t();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.r3t();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.s3t();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.t3t();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.u3t();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.v3t();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.w3t();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.v3r();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
      com_varabyte_kobweb_silk_components_forms_SwitchVars$stable = 8;
      com_varabyte_kobweb_silk_components_forms_SwitchSize$stable = 0;
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  var com_varabyte_kobweb_silk_components_graphics_RenderScope$stable;
  var com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
      com_varabyte_kobweb_silk_components_graphics_RenderScope$stable = 0;
      com_varabyte_kobweb_silk_components_graphics_CanvasRepainter$stable = 8;
    }
  }
  function CloseIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-1551753013);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$CloseIconKt_getInstance().a3u_1, $composer_0, 24576, 3);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(CloseIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$CloseIconKt$lambda_1$lambda_40ptbb($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(1010262870);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$CloseIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$CloseIconKt$lambda_1$lambda$lambda_1m3jx8;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Line($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(1010266038);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.i1v();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$CloseIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$CloseIconKt$lambda_1$lambda$lambda_1m3jx8_0;
      $composer_0.t1v(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.b1u();
    Line($this$createIcon, tmp1_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$CloseIconKt$lambda_1$lambda$lambda_1m3jx8($this$Line) {
    $this$Line.h36(1);
    $this$Line.i36(23);
    $this$Line.j36(1);
    $this$Line.k36(23);
    return Unit_instance;
  }
  function ComposableSingletons$CloseIconKt$lambda_1$lambda$lambda_1m3jx8_0($this$Line) {
    $this$Line.h36(23);
    $this$Line.i36(1);
    $this$Line.j36(1);
    $this$Line.k36(23);
    return Unit_instance;
  }
  function ComposableSingletons$CloseIconKt() {
    ComposableSingletons$CloseIconKt_instance = this;
    var tmp = this;
    tmp.a3u_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1208133225, false, ComposableSingletons$CloseIconKt$lambda_1$lambda_40ptbb));
  }
  var ComposableSingletons$CloseIconKt_instance;
  function ComposableSingletons$CloseIconKt_getInstance() {
    if (ComposableSingletons$CloseIconKt_instance == null)
      new ComposableSingletons$CloseIconKt();
    return ComposableSingletons$CloseIconKt_instance;
  }
  function CloseIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CloseIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ExclaimIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1482883947);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w35(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$ExclaimIconKt_getInstance().b3u_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(ExclaimIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExclaimIconKt$lambda_1$lambda_dh78d4($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(-16435893);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$ExclaimIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$ExclaimIconKt$lambda_1$lambda$lambda_mq5g43;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt$lambda_1$lambda$lambda_mq5g43($this$Path) {
    $this$Path.a35('M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 9.5 A 1.75 1.75 0 0 1 14.25 13 H 8.06 l -2.573 2.573 A 1.458 1.458 0 0 1 3 14.543 V 13 H 1.75 A 1.75 1.75 0 0 1 0 11.25 Z m 1.75 -0.25 a 0.25 0.25 0 0 0 -0.25 0.25 v 9.5 c 0 0.138 0.112 0.25 0.25 0.25 h 2 a 0.75 0.75 0 0 1 0.75 0.75 v 2.19 l 2.72 -2.72 a 0.749 0.749 0 0 1 0.53 -0.22 h 6.5 a 0.25 0.25 0 0 0 0.25 -0.25 v -9.5 a 0.25 0.25 0 0 0 -0.25 -0.25 Z m 7 2.25 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 9 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$ExclaimIconKt() {
    ComposableSingletons$ExclaimIconKt_instance = this;
    var tmp = this;
    tmp.b3u_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-675482057, false, ComposableSingletons$ExclaimIconKt$lambda_1$lambda_dh78d4));
  }
  var ComposableSingletons$ExclaimIconKt_instance;
  function ComposableSingletons$ExclaimIconKt_getInstance() {
    if (ComposableSingletons$ExclaimIconKt_instance == null)
      new ComposableSingletons$ExclaimIconKt();
    return ComposableSingletons$ExclaimIconKt_instance;
  }
  function ExclaimIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ExclaimIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function HamburgerIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-2115900053);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$HamburgerIconKt_getInstance().c3u_1, $composer_0, 24576, 3);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(HamburgerIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$HamburgerIconKt$lambda_1$lambda_m6m1s8($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var _iterator__ex2g4s = listOf([3, 12, 21]).g();
    while (_iterator__ex2g4s.h()) {
      var y = _iterator__ex2g4s.i();
      $composer_0.z1t(-1855069352);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.y1u(y);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$HamburgerIconKt.lambda-1.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$HamburgerIconKt$lambda_1$lambda$lambda_5d353h(y);
        $composer_0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      Line($this$createIcon, tmp0_group, $composer_0, 14 & $changed);
    }
    return Unit_instance;
  }
  function ComposableSingletons$HamburgerIconKt$lambda_1$lambda$lambda_5d353h($y) {
    return function ($this$Line) {
      $this$Line.h36(0);
      $this$Line.i36(23);
      $this$Line.j36($y);
      $this$Line.k36($y);
      return Unit_instance;
    };
  }
  function ComposableSingletons$HamburgerIconKt() {
    ComposableSingletons$HamburgerIconKt_instance = this;
    var tmp = this;
    tmp.c3u_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(170760759, false, ComposableSingletons$HamburgerIconKt$lambda_1$lambda_m6m1s8));
  }
  var ComposableSingletons$HamburgerIconKt_instance;
  function ComposableSingletons$HamburgerIconKt_getInstance() {
    if (ComposableSingletons$HamburgerIconKt_instance == null)
      new ComposableSingletons$HamburgerIconKt();
    return ComposableSingletons$HamburgerIconKt_instance;
  }
  function HamburgerIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      HamburgerIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function InfoIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(197779673);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w35(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$InfoIconKt_getInstance().d3u_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(InfoIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$InfoIconKt$lambda_1$lambda_7lqjxh($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(657486137);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$InfoIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$InfoIconKt$lambda_1$lambda$lambda_59q3v4;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt$lambda_1$lambda$lambda_59q3v4($this$Path) {
    $this$Path.a35('M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z');
    return Unit_instance;
  }
  function ComposableSingletons$InfoIconKt() {
    ComposableSingletons$InfoIconKt_instance = this;
    var tmp = this;
    tmp.d3u_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-954934107, false, ComposableSingletons$InfoIconKt$lambda_1$lambda_7lqjxh));
  }
  var ComposableSingletons$InfoIconKt_instance;
  function ComposableSingletons$InfoIconKt_getInstance() {
    if (ComposableSingletons$InfoIconKt_instance == null)
      new ComposableSingletons$InfoIconKt();
    return ComposableSingletons$InfoIconKt_instance;
  }
  function InfoIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function LightbulbIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-1309236181);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w35(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$LightbulbIconKt_getInstance().e3u_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(LightbulbIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$LightbulbIconKt$lambda_1$lambda_abne2a($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(1126884965);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$LightbulbIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$LightbulbIconKt$lambda_1$lambda$lambda_r2tn8j;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt$lambda_1$lambda$lambda_r2tn8j($this$Path) {
    $this$Path.a35('M 8 1.5 c -2.363 0 -4 1.69 -4 3.75 c 0 0.984 0.424 1.625 0.984 2.304 l 0.214 0.253 c 0.223 0.264 0.47 0.556 0.673 0.848 c 0.284 0.411 0.537 0.896 0.621 1.49 a 0.75 0.75 0 0 1 -1.484 0.211 c -0.04 -0.282 -0.163 -0.547 -0.37 -0.847 a 8.456 8.456 0 0 0 -0.542 -0.68 c -0.084 -0.1 -0.173 -0.205 -0.268 -0.32 C 3.201 7.75 2.5 6.766 2.5 5.25 C 2.5 2.31 4.863 0 8 0 s 5.5 2.31 5.5 5.25 c 0 1.516 -0.701 2.5 -1.328 3.259 c -0.095 0.115 -0.184 0.22 -0.268 0.319 c -0.207 0.245 -0.383 0.453 -0.541 0.681 c -0.208 0.3 -0.33 0.565 -0.37 0.847 a 0.751 0.751 0 0 1 -1.485 -0.212 c 0.084 -0.593 0.337 -1.078 0.621 -1.489 c 0.203 -0.292 0.45 -0.584 0.673 -0.848 c 0.075 -0.088 0.147 -0.173 0.213 -0.253 c 0.561 -0.679 0.985 -1.32 0.985 -2.304 c 0 -2.06 -1.637 -3.75 -4 -3.75 Z M 5.75 12 h 4.5 a 0.75 0.75 0 0 1 0 1.5 h -4.5 a 0.75 0.75 0 0 1 0 -1.5 Z M 6 15.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0 1.5 h -2.5 a 0.75 0.75 0 0 1 -0.75 -0.75 Z');
    return Unit_instance;
  }
  function ComposableSingletons$LightbulbIconKt() {
    ComposableSingletons$LightbulbIconKt_instance = this;
    var tmp = this;
    tmp.e3u_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(977424631, false, ComposableSingletons$LightbulbIconKt$lambda_1$lambda_abne2a));
  }
  var ComposableSingletons$LightbulbIconKt_instance;
  function ComposableSingletons$LightbulbIconKt_getInstance() {
    if (ComposableSingletons$LightbulbIconKt_instance == null)
      new ComposableSingletons$LightbulbIconKt();
    return ComposableSingletons$LightbulbIconKt_instance;
  }
  function LightbulbIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LightbulbIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function MoonIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-24696525);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w35(200);
      createIcon(tmp, null, new Stroke(20), toAttrs(modifier_0._v), ComposableSingletons$MoonIconKt_getInstance().f3u_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(MoonIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$MoonIconKt$lambda_1$lambda_kdu3y($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(1648490556);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$MoonIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MoonIconKt$lambda_1$lambda$lambda_b4alj1;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$MoonIconKt$lambda_1$lambda$lambda_b4alj1($this$Path) {
    $this$Path.y34(ComposableSingletons$MoonIconKt$lambda_1$lambda$lambda$lambda_cd2vjm);
    return Unit_instance;
  }
  function ComposableSingletons$MoonIconKt$lambda_1$lambda$lambda$lambda_cd2vjm($this$d) {
    $this$d.o35(175, 106.583);
    $this$d.t35(75, 75, 0, 1, 1, 93.417, 25);
    $this$d.t35(58.333, 58.333, 0, 0, 0, 175, 106.583);
    $this$d.u35();
    return Unit_instance;
  }
  function ComposableSingletons$MoonIconKt() {
    ComposableSingletons$MoonIconKt_instance = this;
    var tmp = this;
    tmp.f3u_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1177410305, false, ComposableSingletons$MoonIconKt$lambda_1$lambda_kdu3y));
  }
  var ComposableSingletons$MoonIconKt_instance;
  function ComposableSingletons$MoonIconKt_getInstance() {
    if (ComposableSingletons$MoonIconKt_instance == null)
      new ComposableSingletons$MoonIconKt();
    return ComposableSingletons$MoonIconKt_instance;
  }
  function MoonIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      MoonIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuestionIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-1830362903);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$QuestionIconKt_getInstance().g3u_1, $composer_0, 24576, 3);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(QuestionIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda_if12nh($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(1001020366);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(1001024951);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.i1v();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_0;
      $composer_0.t1v(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.b1u();
    Path($this$createIcon, tmp1_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(1001029844);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.i1v();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_1;
      $composer_0.t1v(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.b1u();
    Circle($this$createIcon, tmp2_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs($this$Path) {
    $this$Path.c35(SVGStrokeLineCap_Round_getInstance());
    $this$Path.a35('M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_0($this$Path) {
    $this$Path.c35(SVGStrokeLineCap_Round_getInstance());
    $this$Path.a35('M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0');
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_1($this$Circle) {
    $this$Circle.n35(10);
    $this$Circle.t34(12);
    $this$Circle.u34(12);
    $this$Circle.d36(11.25);
    return Unit_instance;
  }
  function ComposableSingletons$QuestionIconKt() {
    ComposableSingletons$QuestionIconKt_instance = this;
    var tmp = this;
    tmp.g3u_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-1550888779, false, ComposableSingletons$QuestionIconKt$lambda_1$lambda_if12nh));
  }
  var ComposableSingletons$QuestionIconKt_instance;
  function ComposableSingletons$QuestionIconKt_getInstance() {
    if (ComposableSingletons$QuestionIconKt_instance == null)
      new ComposableSingletons$QuestionIconKt();
    return ComposableSingletons$QuestionIconKt_instance;
  }
  function QuestionIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuestionIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function QuoteIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-1516926133);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w35(300);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$QuoteIconKt_getInstance().h3u_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(QuoteIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$QuoteIconKt$lambda_1$lambda_h2zdpn($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(359856060);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuoteIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$QuoteIconKt$lambda_1$lambda$lambda_cdcof4;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt$lambda_1$lambda$lambda_cdcof4($this$Path) {
    $this$Path.a35('m175.6 204.73 22.19 46.49C258.61 223.15 278 189.49 278 151.18V48.78H175.6v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55zm-153.6 0 22.19 46.49c60.83-28.07 80.21-61.73 80.21-100.04V48.78H22v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55z');
    return Unit_instance;
  }
  function ComposableSingletons$QuoteIconKt() {
    ComposableSingletons$QuoteIconKt_instance = this;
    var tmp = this;
    tmp.h3u_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-1173306345, false, ComposableSingletons$QuoteIconKt$lambda_1$lambda_h2zdpn));
  }
  var ComposableSingletons$QuoteIconKt_instance;
  function ComposableSingletons$QuoteIconKt_getInstance() {
    if (ComposableSingletons$QuoteIconKt_instance == null)
      new ComposableSingletons$QuoteIconKt();
    return ComposableSingletons$QuoteIconKt_instance;
  }
  function QuoteIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuoteIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function StopIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(637478449);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w35(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$StopIconKt_getInstance().i3u_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(StopIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$StopIconKt$lambda_1$lambda_f41c6n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(-6619268);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$StopIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$StopIconKt$lambda_1$lambda$lambda_g94738;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt$lambda_1$lambda$lambda_g94738($this$Path) {
    $this$Path.a35('M 4.47 0.22 A 0.749 0.749 0 0 1 5 0 h 6 c 0.199 0 0.389 0.079 0.53 0.22 l 4.25 4.25 c 0.141 0.14 0.22 0.331 0.22 0.53 v 6 a 0.749 0.749 0 0 1 -0.22 0.53 l -4.25 4.25 A 0.749 0.749 0 0 1 11 16 H 5 a 0.749 0.749 0 0 1 -0.53 -0.22 L 0.22 11.53 A 0.749 0.749 0 0 1 0 11 V 5 c 0 -0.199 0.079 -0.389 0.22 -0.53 Z m 0.84 1.28 L 1.5 5.31 v 5.38 l 3.81 3.81 h 5.38 l 3.81 -3.81 V 5.31 L 10.69 1.5 Z M 8 4 a 0.75 0.75 0 0 1 0.75 0.75 v 3.5 a 0.75 0.75 0 0 1 -1.5 0 v -3.5 A 0.75 0.75 0 0 1 8 4 Z m 0 8 a 1 1 0 1 1 0 -2 a 1 1 0 0 1 0 2 Z');
    return Unit_instance;
  }
  function ComposableSingletons$StopIconKt() {
    ComposableSingletons$StopIconKt_instance = this;
    var tmp = this;
    tmp.i3u_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-515235331, false, ComposableSingletons$StopIconKt$lambda_1$lambda_f41c6n));
  }
  var ComposableSingletons$StopIconKt_instance;
  function ComposableSingletons$StopIconKt_getInstance() {
    if (ComposableSingletons$StopIconKt_instance == null)
      new ComposableSingletons$StopIconKt();
    return ComposableSingletons$StopIconKt_instance;
  }
  function StopIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      StopIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SunIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-1078008821);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$SunIconKt_getInstance().k3u_1, $composer_0, 24576, 3);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(SunIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda_aiqbb9($this$Group, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(-328491617);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Circle($this$Group, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(-328488368);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.i1v();
    var tmp_1;
    if (false || it_0 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_0;
      $composer_0.t1v(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.b1u();
    Path($this$Group, tmp1_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(-328483599);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.i1v();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_1;
      $composer_0.t1v(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.b1u();
    Path($this$Group, tmp2_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(-328478794);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.i1v();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_2 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_2;
      $composer_0.t1v(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.b1u();
    Path($this$Group, tmp3_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(-328473832);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.i1v();
    var tmp_7;
    if (false || it_3 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_3 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_3;
      $composer_0.t1v(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.b1u();
    Path($this$Group, tmp4_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(-328468814);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.i1v();
    var tmp_9;
    if (false || it_4 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_4 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_4;
      $composer_0.t1v(value_4);
      tmp_9 = value_4;
    } else {
      tmp_9 = it_4;
    }
    var tmp_10 = tmp_9;
    var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    $composer_0.b1u();
    Path($this$Group, tmp5_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(-328463981);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_5 = $composer_0.i1v();
    var tmp_11;
    if (false || it_5 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_5 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_5;
      $composer_0.t1v(value_5);
      tmp_11 = value_5;
    } else {
      tmp_11 = it_5;
    }
    var tmp_12 = tmp_11;
    var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_0.b1u();
    Path($this$Group, tmp6_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(-328459112);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_6 = $composer_0.i1v();
    var tmp_13;
    if (false || it_6 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_6 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_6;
      $composer_0.t1v(value_6);
      tmp_13 = value_6;
    } else {
      tmp_13 = it_6;
    }
    var tmp_14 = tmp_13;
    var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
    $composer_0.b1u();
    Path($this$Group, tmp7_group, $composer_0, 48 | 14 & $changed);
    $composer_0.z1t(-328454088);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_7 = $composer_0.i1v();
    var tmp_15;
    if (false || it_7 === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_7 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_7;
      $composer_0.t1v(value_7);
      tmp_15 = value_7;
    } else {
      tmp_15 = it_7;
    }
    var tmp_16 = tmp_15;
    var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
    $composer_0.b1u();
    Path($this$Group, tmp8_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8($this$Circle) {
    $this$Circle.t34(12);
    $this$Circle.u34(12);
    $this$Circle.d36(5);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_0($this$Path) {
    $this$Path.y34(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh($this$d) {
    $this$d.o35(12, 1);
    $this$d.q35(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_1($this$Path) {
    $this$Path.y34(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_0);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_0($this$d) {
    $this$d.o35(12, 21);
    $this$d.q35(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_2($this$Path) {
    $this$Path.y34(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_1);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_1($this$d) {
    $this$d.o35(4.22, 4.22);
    $this$d.p35(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_3($this$Path) {
    $this$Path.y34(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_2);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_2($this$d) {
    $this$d.o35(18.36, 18.36);
    $this$d.p35(1.42, 1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_4($this$Path) {
    $this$Path.y34(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_3);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_3($this$d) {
    $this$d.o35(1, 12);
    $this$d.r35(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_5($this$Path) {
    $this$Path.y34(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_4);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_4($this$d) {
    $this$d.o35(21, 12);
    $this$d.r35(2, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_6($this$Path) {
    $this$Path.y34(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_5);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_5($this$d) {
    $this$d.o35(4.22, 19.78);
    $this$d.p35(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_7($this$Path) {
    $this$Path.y34(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_6);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_6($this$d) {
    $this$d.o35(18.36, 5.64);
    $this$d.p35(1.42, -1.42, true);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$SunIconKt$lambda_2$lambda_iaw5qy($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(1179055871);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-2.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$SunIconKt$lambda_2$lambda$lambda_ux6jdd;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Group($this$createIcon, tmp0_group, ComposableSingletons$SunIconKt_getInstance().j3u_1, $composer_0, 432 | 14 & $changed, 0);
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt$lambda_2$lambda$lambda_ux6jdd($this$Group) {
    $this$Group.h35(SVGStrokeLineJoin_Round_getInstance());
    $this$Group.c35(SVGStrokeLineCap_Round_getInstance());
    return Unit_instance;
  }
  function ComposableSingletons$SunIconKt() {
    ComposableSingletons$SunIconKt_instance = this;
    var tmp = this;
    tmp.j3u_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(214795082, false, ComposableSingletons$SunIconKt$lambda_1$lambda_aiqbb9));
    var tmp_0 = this;
    tmp_0.k3u_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(149840599, false, ComposableSingletons$SunIconKt$lambda_2$lambda_iaw5qy));
  }
  var ComposableSingletons$SunIconKt_instance;
  function ComposableSingletons$SunIconKt_getInstance() {
    if (ComposableSingletons$SunIconKt_instance == null)
      new ComposableSingletons$SunIconKt();
    return ComposableSingletons$SunIconKt_instance;
  }
  function SunIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      SunIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function WarningIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1461404811);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      var tmp = Companion_instance_17.w35(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$WarningIconKt_getInstance().l3u_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(WarningIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$WarningIconKt$lambda_1$lambda_abye4r($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.z1t(613140820);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$WarningIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$WarningIconKt$lambda_1$lambda$lambda_x4zgqo;
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.b1u();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt$lambda_1$lambda$lambda_x4zgqo($this$Path) {
    $this$Path.a35('M 6.457 1.047 c 0.659 -1.234 2.427 -1.234 3.086 0 l 6.082 11.378 A 1.75 1.75 0 0 1 14.082 15 H 1.918 a 1.75 1.75 0 0 1 -1.543 -2.575 Z m 1.763 0.707 a 0.25 0.25 0 0 0 -0.44 0 L 1.698 13.132 a 0.25 0.25 0 0 0 0.22 0.368 h 12.164 a 0.25 0.25 0 0 0 0.22 -0.368 Z m 0.53 3.996 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 11 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_instance;
  }
  function ComposableSingletons$WarningIconKt() {
    ComposableSingletons$WarningIconKt_instance = this;
    var tmp = this;
    tmp.l3u_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-696961193, false, ComposableSingletons$WarningIconKt$lambda_1$lambda_abye4r));
  }
  var ComposableSingletons$WarningIconKt_instance;
  function ComposableSingletons$WarningIconKt_getInstance() {
    if (ComposableSingletons$WarningIconKt_instance == null)
      new ComposableSingletons$WarningIconKt();
    return ComposableSingletons$WarningIconKt_instance;
  }
  function WarningIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WarningIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable;
  var com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable;
  function createIcon(viewBox, width, renderStyle, attrs, content, $composer, $changed, $default) {
    var viewBox_0 = {_v: viewBox};
    var width_0 = {_v: width};
    var renderStyle_0 = {_v: renderStyle};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-1506534634);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.j1l(viewBox_0._v) : $composer_0.w1u(viewBox_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.w1u(width_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.j1l(renderStyle_0._v) : $composer_0.w1u(renderStyle_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w1u(attrs_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w1u(content) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.s1t()) {
      $composer_0.c1u();
      if (($changed & 1) === 0 || $composer_0.g1u()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_instance_17.w35(24);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          width_0._v = get_em(1);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          renderStyle_0._v = new Stroke();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          attrs_0._v = null;
        }
      } else {
        $composer_0.i1o();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.d1u();
      $composer_0.z1t(1471101172);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.w1u(width_0._v) | (($dirty & 14 ^ 6) > 4 && $composer_0.w1u(viewBox_0._v) || ($dirty & 6) === 4)) | (($dirty & 896 ^ 384) > 256 && $composer_0.w1u(renderStyle_0._v) || ($dirty & 384) === 256)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>' call
        var value = createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0);
        tmp0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      Svg(tmp0_group, content, $composer_0, 112 & $dirty >> 9, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.m3u_1 = strokeWidth;
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        $this$Svg.o34(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        $this$Svg.p34(tmp1_safe_receiver.x35_1, tmp1_safe_receiver.y35_1, tmp1_safe_receiver.z35_1, tmp1_safe_receiver.a36_1);
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.m34(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.k34(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.k34(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.m34(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.m3u_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp_0 = $this$Svg.l34(tmp1_safe_receiver_0);
            }
            tmp = tmp_0;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      var tmp3_safe_receiver = $attrs._v;
      if (tmp3_safe_receiver == null)
        null;
      else
        tmp3_safe_receiver($this$Svg);
      return Unit_instance;
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  var com_varabyte_kobweb_silk_components_layout_DividerVars$stable;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().n32();
    tmp.n3u_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.o3u_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).g3o = function () {
    return this.n3u_1.t32(this, Color$factory_2());
  };
  protoOf(DividerVars).p3u = function () {
    return this.o3u_1.t32(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDivider(modifier, variant, $composer, $changed, $default) {
    _init_properties_Divider_kt__8b5dnr();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-490066360);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.j1l(variant_0._v) : $composer_0.w1u(variant_0._v)) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      Hr(toAttrs(toModifier(get_HorizontalDividerStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).h3c(modifier_0._v)), $composer_0, 0, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(HorizontalDivider$lambda(modifier_0, variant_0, $changed, $default));
    }
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().g3o().n32()), DividerVars_getInstance().p3u().n32());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().g3o().n32()), DividerVars_getInstance().p3u().n32());
  }
  function HorizontalDivider$lambda($modifier, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      HorizontalDivider($modifier._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g3o();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.p3u();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_DividerVars$stable = 8;
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.e3h(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = get_columnVariables().k2().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.d2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.e2();
      $this$CssStyle.f3j(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.u30(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.n32();
      $this$gridTemplateColumns.p30(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var _iterator__ex2g4s = this_0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.l2_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.a5(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  var com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().n32();
    tmp.q3u_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().n32();
    tmp_0.r3u_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).i3o = function () {
    return this.q3u_1.t32(this, BackgroundColor$factory_1());
  };
  protoOf(SurfaceVars).g3o = function () {
    return this.r3u_1.t32(this, Color$factory_3());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-2142125922);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.j1l(variant_0._v) : $composer_0.w1u(variant_0._v)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.j1l(colorModeOverride_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.w1u(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.j1l(ref_0._v) : $composer_0.w1u(ref_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w1u(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.s1t()) {
      $composer_0.c1u();
      if (($changed & 1) === 0 || $composer_0.g1u()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.i1o();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.d1u();
      $composer_0.z1t(-1737049201);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i1v();
      var tmp;
      if (false || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).h3c(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      $composer_0.z1t(-1737043383);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 57344) === 16384 || (!(($dirty & 32768) === 0) && $composer_0.w1u(ref_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.i1v();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value_0 = Surface$lambda_1(ref_0, surfaceElement$delegate);
        tmp2.t1v(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.b1u();
      var tmp_5 = refScope(tmp1_group);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1615126744, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.i1v();
      var tmp_6;
      if (invalid_0 || it_1 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.t1v(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_1, tmp_2, tmp_5, tmp0, $composer_0, 3072 | 112 & $dirty >> 6 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp2_safe_receiver = $composer_0.b1w();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.l21(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.e2();
  }
  function Surface$lambda_0($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.o11(_set____db54di);
    return Unit_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.e3h(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().i3o().n32()), SurfaceVars_getInstance().g3o().n32());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.w33($ref._v);
      $this$refScope.u33([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.a3v_1 = $surfaceElement;
    this.b3v_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).q13 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.r13($this$LaunchedEffect, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(Surface$lambda$lambda$slambda).s9 = function (p1, $completion) {
    return this.q13((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        if (tmp === 0) {
          this.z8_1 = 1;
          setSilkWidgetVariables(this.a3v_1, this.b3v_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$lambda$slambda).r13 = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.a3v_1, this.b3v_1, completion);
    i.c3v_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.q13($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($surfaceElement, $content, $this_Box) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
        var currColorMode = Companion_instance_11.l3j($composer_0, 6);
        $composer_0.z1t(1829026742);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.w1u($surfaceElement) | $composer_0.j1l(currColorMode));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i1v();
        var tmp_0;
        if (invalid || it === Companion_getInstance().r1o_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null);
          $composer_0.t1v(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.b1u();
        LaunchedEffect(currColorMode, tmp0_group, $composer_0, 0);
        tmp = $content($this_Box, $composer_0, 0);
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.j1l($this$Box) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
        if (!($colorModeOverride._v == null)) {
          $composer_0.z1t(-708350689);
          var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_2 = $colorModeOverride._v.f3l();
            // Inline function 'kotlin.run' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(-346828591, true, Surface$lambda$lambda_0(tmp0_safe_receiver, $content, $this$Box), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_1 = $composer_0;
            sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = $composer_1.j1l(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it = $composer_1.i1v();
            var tmp_3;
            if (invalid || it === Companion_getInstance().r1o_1) {
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
              $composer_1.t1v(value);
              tmp_3 = value;
            } else {
              tmp_3 = it;
            }
            var tmp_4 = tmp_3;
            var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            sourceInformationMarkerEnd($composer_1);
            CompositionLocalProvider(tmp_2, tmp0, $composer_0, 56);
            tmp_1 = Unit_instance;
          }
          $composer_0.b1u();
        } else {
          $composer_0.z1t(-707941055);
          $content($this$Box, $composer_0, 14 & $dirty);
          $composer_0.b1u();
        }
        tmp_0 = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i3o();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g3o();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
      com_varabyte_kobweb_silk_components_layout_SurfaceVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable;
  function Companion_4() {
  }
  var Companion_instance_24;
  function Companion_getInstance_5() {
    return Companion_instance_24;
  }
  function KeepPopupOpenStrategy(defaultValue) {
    defaultValue = defaultValue === VOID ? false : defaultValue;
    this.d3v_1 = defaultValue;
    this.e3v_1 = MutableStateFlow(this.d3v_1);
    this.f3v_1 = false;
    this.g3v_1 = asStateFlow(this.e3v_1);
  }
  protoOf(KeepPopupOpenStrategy).h3v = function (popupElement) {
    this.e3v_1.o11(this.d3v_1);
    this.i3v(popupElement);
    this.f3v_1 = true;
  };
  protoOf(KeepPopupOpenStrategy).i3v = function (popupElement) {
    return Unit_instance;
  };
  protoOf(KeepPopupOpenStrategy).j3v = function (shouldKeepOpen) {
    if (this.f3v_1) {
      this.e3v_1.o11(shouldKeepOpen);
    }
  };
  protoOf(KeepPopupOpenStrategy).w27 = function () {
    this.f3v_1 = false;
    this.k3v();
    this.e3v_1.o11(this.d3v_1);
  };
  protoOf(KeepPopupOpenStrategy).k3v = function () {
    return Unit_instance;
  };
  function never(_this__u8e3s4) {
    return new never$1();
  }
  function plus(_this__u8e3s4, other) {
    return combine(Companion_instance_24, [_this__u8e3s4, other]);
  }
  function onFocus(_this__u8e3s4) {
    return new onFocus$1();
  }
  function onHover(_this__u8e3s4) {
    return new onHover$1();
  }
  function get_shouldKeepOpen(_this__u8e3s4) {
    return _this__u8e3s4.g3v_1.e2();
  }
  function combine(_this__u8e3s4, strategies) {
    return new combine$1(strategies);
  }
  function never$1() {
    KeepPopupOpenStrategy.call(this);
  }
  function onFocus$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.j3v(true);
      return Unit_instance;
    };
  }
  function onFocus$o$onInit$lambda_0(this$0, $popupElement) {
    return function (evt) {
      var focusEvent = evt instanceof FocusEvent ? evt : THROW_CCE();
      var tmp = focusEvent.relatedTarget;
      var newFocus = tmp instanceof Node ? tmp : null;
      this$0.j3v(!(newFocus == null) ? $popupElement.contains(newFocus) : false);
      return Unit_instance;
    };
  }
  function onFocus$1() {
    KeepPopupOpenStrategy.call(this);
    this.p3v_1 = null;
  }
  protoOf(onFocus$1).i3v = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
    this_0.h1a('focusin', onFocus$o$onInit$lambda(this));
    this_0.h1a('focusout', onFocus$o$onInit$lambda_0(this, popupElement));
    tmp.p3v_1 = this_0;
  };
  protoOf(onFocus$1).k3v = function () {
    ensureNotNull(this.p3v_1).i1a();
    this.p3v_1 = null;
  };
  function onHover$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.j3v(true);
      return Unit_instance;
    };
  }
  function onHover$o$onInit$lambda_0(this$0) {
    return function (it) {
      this$0.j3v(false);
      return Unit_instance;
    };
  }
  function onHover$1() {
    KeepPopupOpenStrategy.call(this);
    this.u3v_1 = null;
  }
  protoOf(onHover$1).i3v = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
    this_0.h1a('mouseenter', onHover$o$onInit$lambda(this));
    this_0.h1a('mouseleave', onHover$o$onInit$lambda_0(this));
    tmp.u3v_1 = this_0;
  };
  protoOf(onHover$1).k3v = function () {
    ensureNotNull(this.u3v_1).i1a();
    this.u3v_1 = null;
  };
  function combine$o$slambda($strategies, this$0, resultContinuation) {
    this.d3w_1 = $strategies;
    this.e3w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda).g3w = function (it, $completion) {
    var tmp = this.h3w(it, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(combine$o$slambda).s9 = function (p1, $completion) {
    return this.g3w((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        if (tmp === 0) {
          this.z8_1 = 1;
          var tmp0 = this.d3w_1;
          var tmp$ret$0;
          l$ret$1: do {
            var inductionVariable = 0;
            var last = tmp0.length;
            while (inductionVariable < last) {
              var element = tmp0[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (get_shouldKeepOpen(element)) {
                tmp$ret$0 = true;
                break l$ret$1;
              }
            }
            tmp$ret$0 = false;
          }
           while (false);
          var anyKeepOpen = tmp$ret$0;
          if (!(anyKeepOpen === this.e3w_1.g3v_1.e2())) {
            this.e3w_1.j3v(anyKeepOpen);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda).h3w = function (it, completion) {
    var i = new combine$o$slambda(this.d3w_1, this.e3w_1, completion);
    i.f3w_1 = it;
    return i;
  };
  function combine$o$slambda_0($strategies, this$0, resultContinuation) {
    var i = new combine$o$slambda($strategies, this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.g3w(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1($strategies) {
    this.m3w_1 = $strategies;
    KeepPopupOpenStrategy.call(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$($strategies.length);
    var inductionVariable = 0;
    var last = $strategies.length;
    while (inductionVariable < last) {
      var item = $strategies[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.<anonymous>' call
      var tmp$ret$0 = item.g3v_1;
      destination.e(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_0($strategies, this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1).i3v = function (popupElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.m3w_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
      element.h3v(popupElement);
    }
  };
  protoOf(combine$1).k3v = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.m3w_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onResetting.<anonymous>' call
      element.w27();
    }
  };
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function Companion_5() {
  }
  var Companion_instance_25;
  function Companion_getInstance_6() {
    return Companion_instance_25;
  }
  function OpenClosePopupStrategy() {
    this.n3w_1 = MutableStateFlow(OpenClose_CLOSE_getInstance());
    this.o3w_1 = asStateFlow(this.n3w_1);
  }
  protoOf(OpenClosePopupStrategy).h3v = function (targetElement) {
    return Unit_instance;
  };
  protoOf(OpenClosePopupStrategy).w27 = function () {
    return Unit_instance;
  };
  protoOf(OpenClosePopupStrategy).p3w = function (request) {
    this.n3w_1.q11(request);
  };
  var OpenClose_OPEN_instance;
  var OpenClose_CLOSE_instance;
  var OpenClose_entriesInitialized;
  function OpenClose_initEntries() {
    if (OpenClose_entriesInitialized)
      return Unit_instance;
    OpenClose_entriesInitialized = true;
    OpenClose_OPEN_instance = new OpenClose('OPEN', 0);
    OpenClose_CLOSE_instance = new OpenClose('CLOSE', 1);
  }
  function OpenClose(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function plus_0(_this__u8e3s4, other) {
    return combine_0(Companion_instance_25, [_this__u8e3s4, other]);
  }
  function onFocus_0(_this__u8e3s4) {
    return new onFocus$1_0();
  }
  function onHover_0(_this__u8e3s4) {
    return new onHover$1_0();
  }
  function combine_0(_this__u8e3s4, strategies) {
    return new combine$1_0(strategies);
  }
  function onFocus$o$init$lambda(this$0) {
    return function (it) {
      this$0.p3w(OpenClose_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function onFocus$o$init$lambda_0(this$0) {
    return function (it) {
      this$0.p3w(OpenClose_CLOSE_getInstance());
      return Unit_instance;
    };
  }
  function onFocus$1_0() {
    OpenClosePopupStrategy.call(this);
    this.s3w_1 = null;
  }
  protoOf(onFocus$1_0).h3v = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.h1a('focusin', onFocus$o$init$lambda(this));
    this_0.h1a('focusout', onFocus$o$init$lambda_0(this));
    if (targetElement.contains(document.activeElement)) {
      this.p3w(OpenClose_OPEN_getInstance());
    }
    tmp.s3w_1 = this_0;
  };
  protoOf(onFocus$1_0).w27 = function () {
    ensureNotNull(this.s3w_1).i1a();
    this.s3w_1 = null;
  };
  function onHover$o$init$lambda(this$0) {
    return function (it) {
      this$0.p3w(OpenClose_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function onHover$o$init$lambda_0(this$0) {
    return function (it) {
      this$0.p3w(OpenClose_CLOSE_getInstance());
      return Unit_instance;
    };
  }
  function onHover$1_0() {
    OpenClosePopupStrategy.call(this);
    this.v3w_1 = null;
  }
  protoOf(onHover$1_0).h3v = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.h1a('mouseenter', onHover$o$init$lambda(this));
    this_0.h1a('mouseleave', onHover$o$init$lambda_0(this));
    if (targetElement.matches(':hover')) {
      this.p3w(OpenClose_OPEN_getInstance());
    }
    tmp.v3w_1 = this_0;
  };
  protoOf(onHover$1_0).w27 = function () {
    ensureNotNull(this.v3w_1).i1a();
    this.v3w_1 = null;
  };
  function combine$o$slambda_1(this$0, resultContinuation) {
    this.e3x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda_1).g3x = function (it, $completion) {
    var tmp = this.h3x(it, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(combine$o$slambda_1).s9 = function (p1, $completion) {
    return this.g3x(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda_1).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        if (tmp === 0) {
          this.z8_1 = 1;
          this.e3x_1.p3w(this.f3x_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda_1).h3x = function (it, completion) {
    var i = new combine$o$slambda_1(this.e3x_1, completion);
    i.f3x_1 = it;
    return i;
  };
  function combine$o$slambda_2(this$0, resultContinuation) {
    var i = new combine$o$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.g3x(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1_0($strategies) {
    this.k3x_1 = $strategies;
    OpenClosePopupStrategy.call(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$($strategies.length);
    var inductionVariable = 0;
    var last = $strategies.length;
    while (inductionVariable < last) {
      var item = $strategies[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.<anonymous>' call
      var tmp$ret$0 = item.o3w_1;
      destination.e(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_2(this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1_0).h3v = function (targetElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.k3x_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
      element.h3v(targetElement);
    }
  };
  protoOf(combine$1_0).w27 = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.k3x_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.reset.<anonymous>' call
      element.w27();
    }
  };
  function OpenClose_OPEN_getInstance() {
    OpenClose_initEntries();
    return OpenClose_OPEN_instance;
  }
  function OpenClose_CLOSE_getInstance() {
    OpenClose_initEntries();
    return OpenClose_CLOSE_instance;
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  var com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.l3x_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).i3o = function () {
    return this.l3x_1.t32(this, BackgroundColor$factory_2());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function Overlay(modifier, variant, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Overlay_kt__p5agwu();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1952604270);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.j1l(variant_0._v) : $composer_0.w1u(variant_0._v)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.w1u(contentAlignment_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.j1l(ref_0._v) : $composer_0.w1u(ref_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w1u(content_0._v) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.s1t()) {
      $composer_0.c1u();
      if (($changed & 1) === 0 || $composer_0.g1u()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          contentAlignment_0._v = TopCenter_instance;
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          content_0._v = ComposableSingletons$OverlayKt_getInstance().m3x_1;
        }
      } else {
        $composer_0.i1o();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.d1u();
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1943592998, true, Overlay$lambda(variant_0, modifier_0, contentAlignment_0, ref_0, content_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_1.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Deferred(tmp0, $composer_0, 6);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(Overlay$lambda_0(modifier_0, variant_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (($changed & 17) === 16 && $composer_0.s1t()) {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$OverlayKt() {
    ComposableSingletons$OverlayKt_instance = this;
    var tmp = this;
    tmp.m3x_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-1906586062, false, ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty));
  }
  var ComposableSingletons$OverlayKt_instance;
  function ComposableSingletons$OverlayKt_getInstance() {
    if (ComposableSingletons$OverlayKt_instance == null)
      new ComposableSingletons$OverlayKt();
    return ComposableSingletons$OverlayKt_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().i3o().n32());
  }
  function Overlay$lambda($variant, $modifier, $contentAlignment, $ref, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
        var tmp_0 = toModifier(get_OverlayStyle(), [$variant._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        Box(right(left(bottom(top(position(tmp_0, 'fixed'), get_px(0)), get_px(0)), get_px(0)), get_px(0)).h3c($modifier._v), $contentAlignment._v, $ref._v, $content._v, $composer_0, com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function Overlay$lambda_0($modifier, $variant, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Overlay($modifier._v, $variant._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i3o();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_OverlayVars$stable = 8;
    }
  }
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable;
  function AdvancedPopover(target, modifier, hiddenModifier, variant, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, content, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-1021473669);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w1u(hiddenModifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.j1l(variant_0._v) : $composer_0.w1u(variant_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.y1u(showDelayMs_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.y1u(hideDelayMs_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.w1u(openCloseStrategy_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.w1u(placementTarget_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.j1l(placementStrategy_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.w1u(keepOpenStrategy_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 8) === 0 ? $composer_0.j1l(ref_0._v) : $composer_0.w1u(ref_0._v)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.w1u(content) ? 32 : 16);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 19) === 18) || !$composer_0.s1t()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        hiddenModifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        showDelayMs_0._v = 0;
      }
      if (!(($default & 32) === 0)) {
        hideDelayMs_0._v = 0;
      }
      if (!(($default & 64) === 0)) {
        openCloseStrategy_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        placementTarget_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        placementStrategy_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        keepOpenStrategy_0._v = null;
      }
      if (!(($default & 1024) === 0)) {
        ref_0._v = null;
      }
      $composer_0.z1t(1540444435);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.j1l(openCloseStrategy_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var tmp0_elvis_lhs = openCloseStrategy_0._v;
        var value = tmp0_elvis_lhs == null ? plus_0(onHover_0(Companion_instance_25), onFocus_0(Companion_instance_25)) : tmp0_elvis_lhs;
        tmp0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      var openCloseStrategy_1 = tmp0_group;
      $composer_0.z1t(1540449975);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!($composer_0.j1l(hiddenModifier_0._v) | ($dirty & 57344) === 16384) | ($dirty & 458752) === 131072);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.i1v();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var value_0 = new PopoverShowHideSettings(hiddenModifier_0._v, showDelayMs_0._v, hideDelayMs_0._v);
        tmp2.t1v(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b1u();
      var showHideSettings = tmp1_group;
      $composer_0.z1t(1540458578);
      var tmp4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 234881024) === 67108864;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp4.i1v();
      var tmp_3;
      if (invalid_1 || it_1 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var tmp0_elvis_lhs_0 = placementStrategy_0._v;
        var value_1 = tmp0_elvis_lhs_0 == null ? Companion_instance_26.n3x(PopupPlacement_Bottom_getInstance()) : tmp0_elvis_lhs_0;
        tmp4.t1v(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.b1u();
      var placementStrategy_1 = tmp2_group;
      $composer_0.z1t(1540463791);
      var tmp6 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_0.j1l(keepOpenStrategy_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp6.i1v();
      var tmp_5;
      if (invalid_2 || it_2 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var tmp0_elvis_lhs_1 = keepOpenStrategy_0._v;
        var value_2 = tmp0_elvis_lhs_1 == null ? plus(onHover(Companion_instance_24), onFocus(Companion_instance_24)) : tmp0_elvis_lhs_1;
        tmp6.t1v(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.b1u();
      var keepOpenStrategy_1 = tmp3_group;
      $composer_0.z1t(1540469368);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = !!(!!(!!($composer_0.j1l(openCloseStrategy_1) | $composer_0.j1l(showHideSettings)) | $composer_0.j1l(placementStrategy_1)) | $composer_0.j1l(keepOpenStrategy_1));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = tmp8.i1v();
      var tmp_7;
      if (invalid_3 || it_3 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var value_3 = new PopoverStateController(openCloseStrategy_1, showHideSettings, placementStrategy_1, keepOpenStrategy_1);
        tmp8.t1v(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.b1u();
      var popoverStateController = tmp4_group;
      var tmp_9 = Companion_instance;
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_10 = display(tmp_9, 'none');
      var tmp_11 = [popoverStateController, target, placementTarget_0._v];
      $composer_0.z1t(1540484359);
      var tmp11 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = !!(!!(!!($composer_0.w1u(target) | $composer_0.w1u(placementTarget_0._v)) | $composer_0.w1u(popoverStateController)) | $composer_0.w1u(openCloseStrategy_1));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = tmp11.i1v();
      var tmp_12;
      if (invalid_4 || it_4 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var value_4 = AdvancedPopover$lambda(target, placementTarget_0, popoverStateController, openCloseStrategy_1);
        tmp11.t1v(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp5_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.b1u();
      var tmp_14 = disposableRef(tmp_11, tmp5_group);
      Box(tmp_10, null, tmp_14, null, $composer_0, com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 10);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-617048177, true, AdvancedPopover$lambda_0(popoverStateController, variant_0, modifier_0, placementStrategy_1, ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_5 = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_1.i1v();
      var tmp_15;
      if (invalid_5 || it_5 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
        var value_5 = ComposableLambda$invoke$ref_24(dispatchReceiver);
        $composer_1.t1v(value_5);
        tmp_15 = value_5;
      } else {
        tmp_15 = it_5;
      }
      var tmp_16 = tmp_15;
      var tmp0_0 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Deferred(tmp0_0, $composer_0, 6);
    } else {
      $composer_0.i1o();
    }
    var tmp6_safe_receiver = $composer_0.b1w();
    if (tmp6_safe_receiver == null)
      null;
    else {
      tmp6_safe_receiver.l21(AdvancedPopover$lambda_1(target, modifier_0, hiddenModifier_0, variant_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function PopoverShowHideSettings(hiddenModifier, showDelayMs, hideDelayMs) {
    this.o3x_1 = coerceAtLeast(showDelayMs, 0);
    this.p3x_1 = coerceAtLeast(hideDelayMs, 0);
    this.q3x_1 = opacity(hiddenModifier, 0);
  }
  function _set__state__4o0y7v($this, _set____db54di) {
    var tmp0 = $this.u3x_1;
    _state$factory();
    tmp0.o11(_set____db54di);
    return Unit_instance;
  }
  function _get__state__37adl3($this) {
    var tmp0 = $this.u3x_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    _state$factory_0();
    return tmp0.e2();
  }
  function resetTimers($this) {
    window.clearTimeout($this.v3x_1);
    window.clearTimeout($this.w3x_1);
  }
  function PopoverStateController$requestShowPopup$lambda(this$0, $state) {
    return function () {
      _set__state__4o0y7v(this$0, new Calculating($state.x3x(), this$0.r3x_1));
      var tmp0_safe_receiver = $state.x3x().a3y_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_0;
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestShowPopup.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestShowPopup.<anonymous>.<anonymous>.<anonymous>' call
        var rect = tmp0_safe_receiver.getBoundingClientRect();
        if (rect.width * rect.height > 0) {
          tmp_0 = tmp0_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp_1;
      if (tmp == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestShowPopup.<anonymous>.<anonymous>' call
        this$0.b3y();
        tmp_1 = Unit_instance;
      }
      return tmp_1;
    };
  }
  function PopoverStateController$requestHidePopup$lambda(this$0, $state) {
    return function () {
      var tmp;
      if (!get_shouldKeepOpen(this$0.t3x_1)) {
        var tmp0_safe_receiver = $state.x3x().a3y_1;
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestHidePopup.<anonymous>.<anonymous>' call
          tmp_0 = toDouble(window.getComputedStyle(tmp0_safe_receiver).getPropertyValue('opacity'));
        }
        var currentOpacity = tmp_0;
        _set__state__4o0y7v(this$0, new Hiding($state.x3x(), this$0.s3x_1, this$0.r3x_1, $state.c3y()));
        var tmp_1;
        if (currentOpacity == null || currentOpacity === 0.0) {
          this$0.d3y($state.x3x());
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      }
      return Unit_instance;
    };
  }
  function PopoverStateController$slambda(this$0, resultContinuation) {
    this.m3y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda).g3w = function (keepOpen, $completion) {
    var tmp = this.h3w(keepOpen, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(PopoverStateController$slambda).s9 = function (p1, $completion) {
    return this.g3w((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        if (tmp === 0) {
          this.z8_1 = 1;
          if (!this.n3y_1) {
            this.m3y_1.o3y();
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda).h3w = function (keepOpen, completion) {
    var i = new PopoverStateController$slambda(this.m3y_1, completion);
    i.n3y_1 = keepOpen;
    return i;
  };
  function PopoverStateController$slambda_0(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda(this$0, resultContinuation);
    var l = function (keepOpen, $completion) {
      return i.g3w(keepOpen, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController$slambda_1(this$0, resultContinuation) {
    this.x3y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda_1).g3x = function (request, $completion) {
    var tmp = this.h3x(request, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(PopoverStateController$slambda_1).s9 = function (p1, $completion) {
    return this.g3x(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda_1).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        if (tmp === 0) {
          this.z8_1 = 1;
          switch (this.y3y_1.m2_1) {
            case 0:
              this.x3y_1.z3y();
              break;
            case 1:
              this.x3y_1.o3y();
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda_1).h3x = function (request, completion) {
    var i = new PopoverStateController$slambda_1(this.x3y_1, completion);
    i.y3y_1 = request;
    return i;
  };
  function PopoverStateController$slambda_2(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda_1(this$0, resultContinuation);
    var l = function (request, $completion) {
      return i.g3x(request, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController(openCloseStrategy, showHideSettings, placementStrategy, keepOpenStrategy) {
    this.r3x_1 = showHideSettings;
    this.s3x_1 = placementStrategy;
    this.t3x_1 = keepOpenStrategy;
    this.u3x_1 = mutableStateOf(Uninitialized_instance);
    this.v3x_1 = -1;
    this.w3x_1 = -1;
    var scope = CoroutineScope_0(asCoroutineDispatcher(window));
    launchIn(onEach(this.t3x_1.g3v_1, PopoverStateController$slambda_0(this, null)), scope);
    launchIn(onEach(openCloseStrategy.o3w_1, PopoverStateController$slambda_2(this, null)), scope);
  }
  protoOf(PopoverStateController).a3z = function () {
    return _get__state__37adl3(this);
  };
  protoOf(PopoverStateController).b3z = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Initialized)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    resetTimers(this);
    _set__state__4o0y7v(this, new FoundElements(state.x3x()));
  };
  protoOf(PopoverStateController).c3z = function (elements) {
    var state = _get__state__37adl3(this);
    if (isInterface(state, Initialized)) {
      state.d3z(elements);
    } else {
      _set__state__4o0y7v(this, new FoundElements(elements));
    }
  };
  protoOf(PopoverStateController).z3y = function () {
    var state = _get__state__37adl3(this);
    if (!isInterface(state, Initialized))
      return Unit_instance;
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.v3x_1 = tmp_0.setTimeout(PopoverStateController$requestShowPopup$lambda(this, state), this.r3x_1.o3x_1);
  };
  protoOf(PopoverStateController).e3z = function (popupElement) {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Initialized)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.t3x_1.h3v(popupElement);
    state.x3x().a3y_1 = popupElement;
  };
  protoOf(PopoverStateController).f3z = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Initialized)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.t3x_1.w27();
    state.x3x().a3y_1 = null;
  };
  protoOf(PopoverStateController).b3y = function () {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Calculating))
      return Unit_instance;
    var popupElement = state.g3z_1.a3y_1;
    // Inline function 'kotlin.check' call
    if (!!(popupElement == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    _set__state__4o0y7v(this, new Shown(state.g3z_1, this.s3x_1));
  };
  protoOf(PopoverStateController).o3y = function () {
    var state = _get__state__37adl3(this);
    if (state instanceof FoundElements) {
      resetTimers(this);
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Visible)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.w3x_1 = tmp_0.setTimeout(PopoverStateController$requestHidePopup$lambda(this, state), this.r3x_1.p3x_1);
  };
  protoOf(PopoverStateController).d3y = function (elements) {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Hiding))
      return Unit_instance;
    _set__state__4o0y7v(this, new FoundElements(elements));
    resetTimers(this);
  };
  function resolve(_this__u8e3s4, $this, targetFinder) {
    if (_this__u8e3s4 == null || targetFinder == null)
      return _this__u8e3s4;
    return targetFinder.q19(_this__u8e3s4);
  }
  function PopoverElements(srcElement, popupTarget, placementTarget) {
    var tmp = this;
    var tmp0_elvis_lhs = resolve(srcElement, this, popupTarget);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Target element finder returned null';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.y3x_1 = tmp_0;
    var tmp_1 = this;
    var tmp_2;
    if (placementTarget == null) {
      tmp_2 = this.y3x_1;
    } else {
      var tmp0_elvis_lhs_0 = resolve(srcElement, this, placementTarget);
      var tmp_3;
      if (tmp0_elvis_lhs_0 == null) {
        var message_0 = 'Placement element finder returned null';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_3 = tmp0_elvis_lhs_0;
      }
      tmp_2 = tmp_3;
    }
    tmp_1.z3x_1 = tmp_2;
    this.a3y_1 = null;
  }
  function Uninitialized() {
  }
  var Uninitialized_instance;
  function Uninitialized_getInstance() {
    return Uninitialized_instance;
  }
  function Initialized() {
  }
  function FoundElements(elements) {
    this.j3z_1 = elements;
  }
  protoOf(FoundElements).d3z = function (_set____db54di) {
    this.j3z_1 = _set____db54di;
  };
  protoOf(FoundElements).x3x = function () {
    return this.j3z_1;
  };
  function Visible() {
  }
  function Calculating(elements, showHideSettings) {
    this.g3z_1 = elements;
    this.h3z_1 = left(top(showHideSettings.q3x_1, get_percent(-100)), get_percent(-100));
    this.i3z_1 = null;
  }
  protoOf(Calculating).d3z = function (_set____db54di) {
    this.g3z_1 = _set____db54di;
  };
  protoOf(Calculating).x3x = function () {
    return this.g3z_1;
  };
  protoOf(Calculating).k3z = function () {
    return this.h3z_1;
  };
  protoOf(Calculating).c3y = function () {
    return this.i3z_1;
  };
  function Shown(elements, placementStrategy) {
    this.l3z_1 = elements;
    this.m3z_1 = placementStrategy.p3z();
    this.n3z_1 = Companion_instance.h3c(toModifier_2(this.m3z_1.q3z_1));
    this.o3z_1 = this.m3z_1.r3z_1;
  }
  protoOf(Shown).d3z = function (_set____db54di) {
    this.l3z_1 = _set____db54di;
  };
  protoOf(Shown).x3x = function () {
    return this.l3z_1;
  };
  protoOf(Shown).k3z = function () {
    return this.n3z_1;
  };
  protoOf(Shown).c3y = function () {
    return this.o3z_1;
  };
  function Hiding(elements, placementStrategy, showHideSettings, placement) {
    this.s3z_1 = elements;
    this.t3z_1 = placement;
    var tmp = this;
    var tmp0 = showHideSettings.q3x_1;
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp_0;
    if (!(this.s3z_1.a3y_1 == null)) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Hiding.modifier.<anonymous>' call
      tmp_0 = toModifier_2(placementStrategy.p3z().q3z_1);
    } else {
      tmp_0 = Companion_instance;
    }
    tmp.u3z_1 = tmp0.h3c(tmp_0);
  }
  protoOf(Hiding).d3z = function (_set____db54di) {
    this.s3z_1 = _set____db54di;
  };
  protoOf(Hiding).x3x = function () {
    return this.s3z_1;
  };
  protoOf(Hiding).c3y = function () {
    return this.t3z_1;
  };
  protoOf(Hiding).k3z = function () {
    return this.u3z_1;
  };
  function toModifier_2(_this__u8e3s4) {
    return left(top(Companion_instance, _this__u8e3s4.v3z_1), _this__u8e3s4.w3z_1);
  }
  function AdvancedPopover$$inlined$cache$1$2($openCloseStrategy) {
    this.x3z_1 = $openCloseStrategy;
  }
  protoOf(AdvancedPopover$$inlined$cache$1$2).om = function () {
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
    this.x3z_1.w27();
  };
  function AdvancedPopover$lambda($target, $placementTarget, $popoverStateController, $openCloseStrategy) {
    return function ($this$disposableRef, element) {
      var tmp;
      try {
        // Inline function 'kotlin.apply' call
        var this_0 = new PopoverElements(element, $target, $placementTarget._v);
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = this_0;
        var tmp_1 = $popoverStateController.a3z();
        var tmp0_safe_receiver = isInterface(tmp_1, Initialized) ? tmp_1 : null;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x3x();
        tmp_0.a3y_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a3y_1;
        var popoverElements = this_0;
        // Inline function 'kotlin.apply' call
        var this_1 = popoverElements.y3x_1;
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
        $openCloseStrategy.h3v(this_1);
        $popoverStateController.c3z(popoverElements);
        tmp = Unit_instance;
      } catch ($p) {
        var tmp_2;
        if ($p instanceof IllegalStateException) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = Unit_instance;
        } else {
          throw $p;
        }
        tmp = tmp_2;
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new AdvancedPopover$$inlined$cache$1$2($openCloseStrategy);
    };
  }
  function AdvancedPopover$lambda$lambda($popoverStateController) {
    return function (evt) {
      var state = $popoverStateController.a3z();
      var tmp;
      var tmp_0;
      if (evt.w36_1 === 'opacity') {
        tmp_0 = state instanceof Hiding;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        $popoverStateController.d3y(state.s3z_1);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AdvancedPopover$$inlined$run$1$2$1$1($popoverStateController, $placementStrategy) {
    this.y3z_1 = $popoverStateController;
    this.z3z_1 = $placementStrategy;
  }
  protoOf(AdvancedPopover$$inlined$run$1$2$1$1).om = function () {
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.y3z_1.f3z();
    this.y3z_1.b3z();
    this.z3z_1.w27();
  };
  function AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$disposableRef, popupElement) {
      $placementStrategy.a40($visiblePopoverState.x3x().z3x_1, popupElement);
      $popoverStateController.e3z(popupElement);
      $popoverStateController.b3y();
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new AdvancedPopover$$inlined$run$1$2$1$1($popoverStateController, $placementStrategy);
    };
  }
  function AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$refScope) {
      $this$refScope.v33([], AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController));
      $this$refScope.w33($ref._v);
      return Unit_instance;
    };
  }
  function AdvancedPopover$lambda$lambda_1($content, $visiblePopoverState) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
        tmp = $content(new PopupScope($visiblePopoverState.c3y()), $composer_0, 0);
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function AdvancedPopover$lambda_0($popoverStateController, $variant, $modifier, $placementStrategy, $ref, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
        var tmp_0 = $popoverStateController.a3z();
        var tmp0_elvis_lhs = isInterface(tmp_0, Visible) ? tmp_0 : null;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          return Unit_instance;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var visiblePopoverState = tmp_1;
        var tmp_2 = toModifier(get_PopupStyle(), [$variant._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = position(tmp_2, 'fixed').h3c(visiblePopoverState.k3z()).h3c($modifier._v);
        $composer_0.z1t(-1086205442);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.w1u($popoverStateController);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i1v();
        var tmp_4;
        if (invalid || it === Companion_getInstance().r1o_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
          var value = AdvancedPopover$lambda$lambda($popoverStateController);
          $composer_0.t1v(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.b1u();
        var tmp_6 = onTransitionEnd(tmp_3, tmp0_group);
        $composer_0.z1t(-1086195433);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(!!(!!($composer_0.j1l($placementStrategy) | $composer_0.w1u(visiblePopoverState)) | $composer_0.w1u($popoverStateController)) | $composer_0.w1u($ref._v));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.i1v();
        var tmp_7;
        if (invalid_0 || it_0 === Companion_getInstance().r1o_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, visiblePopoverState, $popoverStateController);
          $composer_0.t1v(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp1_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.b1u();
        var tmp_9 = refScope(tmp1_group);
        // Inline function 'kotlin.run' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(770335689, true, AdvancedPopover$lambda$lambda_1($content, visiblePopoverState), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_1.j1l(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.i1v();
        var tmp_10;
        if (invalid_1 || it_1 === Companion_getInstance().r1o_1) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_23(dispatchReceiver);
          $composer_1.t1v(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_11 = tmp_10;
        var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_6, null, tmp_9, tmp0, $composer_0, 3072 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 2);
        tmp = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function AdvancedPopover$lambda_1($target, $modifier, $hiddenModifier, $variant, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedPopover($target, $modifier._v, $hiddenModifier._v, $variant._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function _state$factory() {
    return getPropertyCallableRef('_state', 1, KMutableProperty1, function (receiver) {
      return _get__state__37adl3(receiver);
    }, function (receiver, value) {
      return _set__state__4o0y7v(receiver, value);
    });
  }
  function _state$factory_0() {
    return getPropertyCallableRef('_state', 1, KMutableProperty1, function (receiver) {
      return _get__state__37adl3(receiver);
    }, function (receiver, value) {
      return _set__state__4o0y7v(receiver, value);
    });
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  var com_varabyte_kobweb_silk_components_overlay_PopupVars$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupScope$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable;
  var com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().p3t().n32();
    tmp.b40_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).v3r = function () {
    return this.b40_1.t32(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  var PopupPlacement_TopLeft_instance;
  var PopupPlacement_Top_instance;
  var PopupPlacement_TopRight_instance;
  var PopupPlacement_LeftTop_instance;
  var PopupPlacement_RightTop_instance;
  var PopupPlacement_Left_instance;
  var PopupPlacement_Right_instance;
  var PopupPlacement_LeftBottom_instance;
  var PopupPlacement_RightBottom_instance;
  var PopupPlacement_BottomLeft_instance;
  var PopupPlacement_Bottom_instance;
  var PopupPlacement_BottomRight_instance;
  var PopupPlacement_entriesInitialized;
  function PopupPlacement_initEntries() {
    if (PopupPlacement_entriesInitialized)
      return Unit_instance;
    PopupPlacement_entriesInitialized = true;
    PopupPlacement_TopLeft_instance = new PopupPlacement('TopLeft', 0);
    PopupPlacement_Top_instance = new PopupPlacement('Top', 1);
    PopupPlacement_TopRight_instance = new PopupPlacement('TopRight', 2);
    PopupPlacement_LeftTop_instance = new PopupPlacement('LeftTop', 3);
    PopupPlacement_RightTop_instance = new PopupPlacement('RightTop', 4);
    PopupPlacement_Left_instance = new PopupPlacement('Left', 5);
    PopupPlacement_Right_instance = new PopupPlacement('Right', 6);
    PopupPlacement_LeftBottom_instance = new PopupPlacement('LeftBottom', 7);
    PopupPlacement_RightBottom_instance = new PopupPlacement('RightBottom', 8);
    PopupPlacement_BottomLeft_instance = new PopupPlacement('BottomLeft', 9);
    PopupPlacement_Bottom_instance = new PopupPlacement('Bottom', 10);
    PopupPlacement_BottomRight_instance = new PopupPlacement('BottomRight', 11);
  }
  function PopupPlacement(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function updatePopupPosition($this) {
    updatePosition(ensureNotNull($this.d40_1), $this.p3z().q3z_1);
  }
  function PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this$0) {
    return function (it) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda(this$0) {
    return function (_unused_var__etf5q3) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda_0(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0) {
      updatePopupPosition(this$0);
      return Unit_instance;
    };
  }
  function PopupPlacementStrategy$Companion$of$1($placement, $offsetPixels) {
    this.h40_1 = $placement;
    this.i40_1 = $offsetPixels;
    PopupPlacementStrategy.call(this);
    this.c40_1 = null;
    this.d40_1 = null;
    this.e40_1 = null;
    this.f40_1 = null;
    var tmp = this;
    tmp.g40_1 = EventListener(PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this));
  }
  protoOf(PopupPlacementStrategy$Companion$of$1).a40 = function (placementElement, popupElement) {
    this.c40_1 = placementElement;
    this.d40_1 = popupElement;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = ResizeObserver_init_$Create$(PopupPlacementStrategy$Companion$of$o$init$lambda(this));
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.c1a(popupElement);
    this_0.c1a(placementElement);
    tmp.e40_1 = this_0;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new MutationObserver(PopupPlacementStrategy$Companion$of$o$init$lambda_0(this));
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'org.w3c.dom.MutationObserverInit' call
    var attributeFilter = ['style'];
    var characterData = undefined;
    var attributeOldValue = undefined;
    var characterDataOldValue = undefined;
    var o = {};
    o['childList'] = false;
    o['attributes'] = true;
    o['characterData'] = characterData;
    o['subtree'] = false;
    o['attributeOldValue'] = attributeOldValue;
    o['characterDataOldValue'] = characterDataOldValue;
    o['attributeFilter'] = attributeFilter;
    this_1.observe(placementElement, o);
    tmp_0.f40_1 = this_1;
    window.addEventListener('scroll', this.g40_1);
    window.addEventListener('resize', this.g40_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).p3z = function () {
    var placementBounds = ensureNotNull(this.c40_1).getBoundingClientRect();
    var popupBounds = ensureNotNull(this.d40_1).getBoundingClientRect();
    var popupWidth = popupBounds.width;
    var popupHeight = popupBounds.height;
    return new PositionAndPlacement(this.j40(this.h40_1, popupWidth, popupHeight, placementBounds, this.i40_1), this.h40_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).w27 = function () {
    this.c40_1 = null;
    this.d40_1 = null;
    ensureNotNull(this.e40_1).d1a();
    this.e40_1 = null;
    ensureNotNull(this.f40_1).disconnect();
    this.f40_1 = null;
    window.removeEventListener('scroll', this.g40_1);
    window.removeEventListener('resize', this.g40_1);
  };
  function Position(top, left) {
    this.v3z_1 = top;
    this.w3z_1 = left;
  }
  function PositionAndPlacement(position, placement) {
    placement = placement === VOID ? null : placement;
    this.q3z_1 = position;
    this.r3z_1 = placement;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).k40 = function (placement, offsetPixels) {
    return new PopupPlacementStrategy$Companion$of$1(placement, offsetPixels);
  };
  protoOf(Companion_6).n3x = function (placement, offsetPixels, $super) {
    offsetPixels = offsetPixels === VOID ? 15 : offsetPixels;
    return $super === VOID ? this.k40(placement, offsetPixels) : $super.k40.call(this, placement, offsetPixels);
  };
  var Companion_instance_26;
  function Companion_getInstance_7() {
    return Companion_instance_26;
  }
  function PopupPlacementStrategy() {
  }
  protoOf(PopupPlacementStrategy).j40 = function (placement, popupWidth, popupHeight, placementBounds, offsetPixels) {
    var offsetPixels_0 = numberToDouble(offsetPixels);
    var tmp;
    switch (placement.m2_1) {
      case 0:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left));
        break;
      case 1:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left - (popupWidth - placementBounds.width) / 2));
        break;
      case 2:
        tmp = new Position(get_px(placementBounds.top - offsetPixels_0 - popupHeight), get_px(placementBounds.left + (placementBounds.width - popupWidth)));
        break;
      case 3:
        tmp = new Position(get_px(placementBounds.top), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 4:
        tmp = new Position(get_px(placementBounds.top), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 5:
        tmp = new Position(get_px(placementBounds.top - (popupHeight - placementBounds.height) / 2), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 6:
        tmp = new Position(get_px(placementBounds.top - (popupHeight - placementBounds.height) / 2), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 7:
        tmp = new Position(get_px(placementBounds.top + (placementBounds.height - popupHeight)), get_px(placementBounds.left - offsetPixels_0 - popupWidth));
        break;
      case 8:
        tmp = new Position(get_px(placementBounds.top + (placementBounds.height - popupHeight)), get_px(placementBounds.right + offsetPixels_0));
        break;
      case 9:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left));
        break;
      case 10:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left - (popupWidth - placementBounds.width) / 2));
        break;
      case 11:
        tmp = new Position(get_px(placementBounds.bottom + offsetPixels_0), get_px(placementBounds.left + (placementBounds.width - popupWidth)));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function PopupScope(placement) {
    this.l40_1 = placement;
  }
  function updatePosition(_this__u8e3s4, position) {
    _init_properties_Popup_kt__lluomy();
    _this__u8e3s4.style.top = toString(position.v3z_1);
    _this__u8e3s4.style.left = toString(position.w3z_1);
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_instance, [Companion_instance_2.f33('opacity', PopupVars_getInstance().v3r().n32())]);
  }
  function PopupPlacement_Bottom_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_Bottom_instance;
  }
  function PopupPlacement_BottomRight_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_BottomRight_instance;
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.v3r();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_PopupVars$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupScope$stable = 0;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_Position$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy_PositionAndPlacement$stable = 8;
      com_varabyte_kobweb_silk_components_overlay_PopupPlacementStrategy$stable = 0;
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  var com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.m40_1 = StyleVariable('silk');
    this.n40_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).i3o = function () {
    return this.m40_1.t32(this, BackgroundColor$factory_3());
  };
  protoOf(TooltipVars).g3o = function () {
    return this.n40_1.t32(this, Color$factory_4());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function Tooltip(target, text, modifier, variant, placement, hasArrow, offsetPixels, placementTarget, showDelayMs, hideDelayMs, keepOpenStrategy, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placement_0 = {_v: placement};
    var hasArrow_0 = {_v: hasArrow};
    var offsetPixels_0 = {_v: offsetPixels};
    var placementTarget_0 = {_v: placementTarget};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-303561348);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j1l(text) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.j1l(variant_0._v) : $composer_0.w1u(variant_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.j1l(placement_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.x1u(hasArrow_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.w1u(offsetPixels_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.w1u(placementTarget_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.y1u(showDelayMs_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.y1u(hideDelayMs_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.w1u(keepOpenStrategy_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 64) === 0 ? $composer_0.j1l(ref_0._v) : $composer_0.w1u(ref_0._v)) ? 32 : 16);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 19) === 18) || !$composer_0.s1t()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        placement_0._v = PopupPlacement_Bottom_getInstance();
      }
      if (!(($default & 32) === 0)) {
        hasArrow_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        offsetPixels_0._v = 15;
      }
      if (!(($default & 128) === 0)) {
        placementTarget_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        showDelayMs_0._v = 0;
      }
      if (!(($default & 512) === 0)) {
        hideDelayMs_0._v = 0;
      }
      if (!(($default & 1024) === 0)) {
        keepOpenStrategy_0._v = null;
      }
      if (!(($default & 2048) === 0)) {
        ref_0._v = null;
      }
      $composer_0.z1t(-2137198921);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 57344) === 16384;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.Tooltip.<anonymous>' call
        var value = Companion_instance_26.k40(placement_0._v, offsetPixels_0._v);
        tmp0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      var placementStrategy = tmp0_group;
      AdvancedTooltip(target, text, modifier_0._v, Companion_instance, variant_0._v, hasArrow_0._v, showDelayMs_0._v, hideDelayMs_0._v, null, placementTarget_0._v, placementStrategy, keepOpenStrategy_0._v, ref_0._v, $composer_0, 100666368 | 14 & $dirty | 112 & $dirty | 896 & $dirty | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 12 | 57344 & $dirty << 3 | 458752 & $dirty | 3670016 & $dirty >> 6 | 29360128 & $dirty >> 6 | 1879048192 & $dirty << 6, 112 & $dirty1 << 3 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6 | 896 & $dirty1 << 3, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(Tooltip$lambda(target, text, modifier_0, variant_0, placement_0, hasArrow_0, offsetPixels_0, placementTarget_0, showDelayMs_0, hideDelayMs_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
    }
  }
  function AdvancedTooltip(target, text, modifier, hiddenModifier, variant, hasArrow, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var hasArrow_0 = {_v: hasArrow};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1508280598);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j1l(text) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w1u(hiddenModifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.j1l(variant_0._v) : $composer_0.w1u(variant_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.x1u(hasArrow_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.y1u(showDelayMs_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.y1u(hideDelayMs_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.w1u(openCloseStrategy_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.w1u(placementTarget_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.j1l(placementStrategy_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.w1u(keepOpenStrategy_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 512) === 0 ? $composer_0.j1l(ref_0._v) : $composer_0.w1u(ref_0._v)) ? 256 : 128);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 147) === 146) || !$composer_0.s1t()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        hiddenModifier_0._v = Companion_instance;
      }
      if (!(($default & 16) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        hasArrow_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        showDelayMs_0._v = 0;
      }
      if (!(($default & 128) === 0)) {
        hideDelayMs_0._v = 0;
      }
      if (!(($default & 256) === 0)) {
        openCloseStrategy_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        placementTarget_0._v = null;
      }
      if (!(($default & 1024) === 0)) {
        placementStrategy_0._v = null;
      }
      if (!(($default & 2048) === 0)) {
        keepOpenStrategy_0._v = null;
      }
      if (!(($default & 4096) === 0)) {
        ref_0._v = null;
      }
      var tmp = modifier_0._v;
      var tmp_0 = hiddenModifier_0._v;
      var tmp_1 = variant_0._v;
      var tmp_2 = hasArrow_0._v;
      var tmp_3 = showDelayMs_0._v;
      var tmp_4 = hideDelayMs_0._v;
      var tmp_5 = openCloseStrategy_0._v;
      var tmp_6 = placementTarget_0._v;
      var tmp_7 = placementStrategy_0._v;
      var tmp_8 = keepOpenStrategy_0._v;
      var tmp_9 = ref_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(791805449, true, AdvancedTooltip$lambda(text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.i1v();
      var tmp_10;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
        $composer_1.t1v(value);
        tmp_10 = value;
      } else {
        tmp_10 = it;
      }
      var tmp_11 = tmp_10;
      var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AdvancedTooltip_0(target, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp0, $composer_0, 14 & $dirty | 112 & $dirty >> 3 | 896 & $dirty >> 3 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 384 | 14 & $dirty1 >> 3 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3 | 112 & $dirty1 >> 3, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(AdvancedTooltip$lambda_0(target, text, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
    }
  }
  function AdvancedTooltip_0(target, modifier, hiddenModifier, variant, hasArrow, showDelayMs, hideDelayMs, openCloseStrategy, placementTarget, placementStrategy, keepOpenStrategy, ref, content, $composer, $changed, $changed1, $default) {
    _init_properties_Tooltip_kt__palx2n();
    var modifier_0 = {_v: modifier};
    var hiddenModifier_0 = {_v: hiddenModifier};
    var variant_0 = {_v: variant};
    var hasArrow_0 = {_v: hasArrow};
    var showDelayMs_0 = {_v: showDelayMs};
    var hideDelayMs_0 = {_v: hideDelayMs};
    var openCloseStrategy_0 = {_v: openCloseStrategy};
    var placementTarget_0 = {_v: placementTarget};
    var placementStrategy_0 = {_v: placementStrategy};
    var keepOpenStrategy_0 = {_v: keepOpenStrategy};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1632743267);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w1u(hiddenModifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.j1l(variant_0._v) : $composer_0.w1u(variant_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.x1u(hasArrow_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.y1u(showDelayMs_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.y1u(hideDelayMs_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.w1u(openCloseStrategy_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.w1u(placementTarget_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.j1l(placementStrategy_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.w1u(keepOpenStrategy_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 64) === 0 ? $composer_0.j1l(ref_0._v) : $composer_0.w1u(ref_0._v)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.w1u(content) ? 256 : 128);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 147) === 146) || !$composer_0.s1t()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        hiddenModifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        hasArrow_0._v = true;
      }
      if (!(($default & 32) === 0)) {
        showDelayMs_0._v = 0;
      }
      if (!(($default & 64) === 0)) {
        hideDelayMs_0._v = 0;
      }
      if (!(($default & 128) === 0)) {
        openCloseStrategy_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        placementTarget_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        placementStrategy_0._v = null;
      }
      if (!(($default & 1024) === 0)) {
        keepOpenStrategy_0._v = null;
      }
      if (!(($default & 2048) === 0)) {
        ref_0._v = null;
      }
      $composer_0.z1t(1925347675);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.j1l(keepOpenStrategy_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
        var tmp0_elvis_lhs = keepOpenStrategy_0._v;
        var value = tmp0_elvis_lhs == null ? never(Companion_instance_24) : tmp0_elvis_lhs;
        tmp0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      var keepOpenStrategy_1 = tmp0_group;
      var tmp_1 = toModifier(get_TooltipStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).h3c(modifier_0._v);
      var tmp_2 = hiddenModifier_0._v;
      var tmp_3 = showDelayMs_0._v;
      var tmp_4 = hideDelayMs_0._v;
      var tmp_5 = openCloseStrategy_0._v;
      var tmp_6 = placementTarget_0._v;
      var tmp_7 = placementStrategy_0._v;
      var tmp_8 = ref_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(299746029, true, AdvancedTooltip$lambda_1(content, hasArrow_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i1v();
      var tmp_9;
      if (invalid_0 || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_27(dispatchReceiver);
        $composer_1.t1v(value_0);
        tmp_9 = value_0;
      } else {
        tmp_9 = it_0;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AdvancedPopover(target, tmp_1, tmp_2, null, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, keepOpenStrategy_1, tmp_8, tmp0_0, $composer_0, 3072 | 14 & $dirty | 896 & $dirty | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3, 48 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() | 14 & $dirty1 >> 3, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(AdvancedTooltip$lambda_2(target, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().i3o().n32()), TooltipVars_getInstance().g3o().n32()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border_0(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.r3e(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.q3e('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_2(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_2(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().i3o().n32());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_2(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().i3o().n32());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_2(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_2(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().i3o().n32());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.e2u('border-color', 'transparent transparent ' + toString($color) + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.e2u('border-color', 'transparent ' + toString($color) + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.e2u('border-color', 'transparent transparent transparent ' + toString($color));
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.e2u('border-color', toString($color) + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function Tooltip$lambda($target, $text, $modifier, $variant, $placement, $hasArrow, $offsetPixels, $placementTarget, $showDelayMs, $hideDelayMs, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Tooltip($target, $text, $modifier._v, $variant._v, $placement._v, $hasArrow._v, $offsetPixels._v, $placementTarget._v, $showDelayMs._v, $hideDelayMs._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda$lambda($text) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = split($text, ['\n']).g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(element) > 0) {
            $composer_0.z1t(2146053686);
            SpanText(element, null, null, null, $composer_0, 0, 14);
            $composer_0.b1u();
          } else {
            $composer_0.z1t(2146054316);
            Br(null, $composer_0, 0, 1);
            $composer_0.b1u();
          }
        }
        tmp = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda($text) {
    return function ($this$AdvancedTooltip, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
        var tmp_0 = toModifier(get_TooltipTextContainerStyle(), [], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        // Inline function 'kotlin.run' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-465460302, true, AdvancedTooltip$lambda$lambda($text), $composer_0, 54);
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
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_25(dispatchReceiver);
          $composer_1.t1v(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda_0($target, $text, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip($target, $text, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function AdvancedTooltip$lambda_1($content, $hasArrow) {
    return function ($this$AdvancedPopover, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.j1l($this$AdvancedPopover) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
        $content($this$AdvancedPopover, $composer_0, 14 & $dirty);
        var placement = $this$AdvancedPopover.l40_1;
        if ($hasArrow._v && !(placement == null)) {
          var tmp_1 = get_TooltipArrowStyle();
          var tmp_2;
          switch (placement == null ? -1 : placement.m2_1) {
            case 0:
              tmp_2 = get_BottomLeftTooltipArrowVariant();
              break;
            case 1:
              tmp_2 = get_BottomTooltipArrowVariant();
              break;
            case 2:
              tmp_2 = get_BottomRightTooltipArrowVariant();
              break;
            case 3:
              tmp_2 = get_RightTopTooltipArrowVariant();
              break;
            case 5:
              tmp_2 = get_RightTooltipArrowVariant();
              break;
            case 7:
              tmp_2 = get_RightBottomTooltipArrowVariant();
              break;
            case 4:
              tmp_2 = get_LeftTopTooltipArrowVariant();
              break;
            case 6:
              tmp_2 = get_LeftTooltipArrowVariant();
              break;
            case 8:
              tmp_2 = get_LeftBottomTooltipArrowVariant();
              break;
            case 9:
              tmp_2 = get_TopLeftTooltipArrowVariant();
              break;
            case 10:
              tmp_2 = get_TopTooltipArrowVariant();
              break;
            case 11:
              tmp_2 = get_TopRightTooltipArrowVariant();
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          var tmp_3 = toModifier(tmp_1, [tmp_2], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3);
          Box(tmp_3, null, null, null, $composer_0, 0, 14);
        }
        tmp_0 = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda_2($target, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip_0($target, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_3() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.i3o();
    }, null);
  }
  function Color$factory_4() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.g3o();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
      com_varabyte_kobweb_silk_components_overlay_TooltipVars$stable = 8;
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.r3f_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.r3f_1.i3g_1;
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().b3m_1.o3d().n3d(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().l3m_1;
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>.<anonymous>' call
    var color = Colors_instance.t3d();
    set_background(this_0.q3m_1, Colors_instance.m3e());
    set_color(this_0.q3m_1, color);
    set_border(this_0.q3m_1, color.n3d(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.q3m_1, focusOutline);
    set_overlay(this_0.q3m_1, color.n3d(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.q3m_1, placeholder);
    var buttonBase = Colors_instance.m3e().k3d(0.2);
    get_button_0(this_0.q3m_1).u40(buttonBase, buttonBase.k3d(0.2), Colors_instance.v3d(), buttonBase.k3d(0.4));
    get_callout(this_0.q3m_1).e41(Colors_instance.w3d(), Colors_instance.a3e(), Colors_instance.c3e(), Colors_instance.k3e(), Colors_instance.d3e(), Colors_instance.g3e(), Colors_instance.z3d());
    get_checkbox_0(this_0.q3m_1).k41(Blue_getInstance().b3m_1, Blue_getInstance().c3m_1, Colors_instance.m3e());
    var inputFilled = Gray_getInstance().i3m_1;
    var tmp0_$this = get_input_0(this_0.q3m_1);
    var tmp1_filledFocus = Colors_instance.r3d();
    var tmp2_hoveredBorder = Gray_getInstance().l3m_1;
    var tmp3_invalidBorder = Red_getInstance().p3l_1;
    var tmp4_filledHover = inputFilled.k3d(0.1);
    tmp0_$this.s41(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.q3m_1);
    var tmp6_thumb = Colors_instance.m3e();
    var tmp7_backgroundOn = Colors_instance.c3e();
    var tmp8_backgroundOff = Colors_instance.e3e();
    tmp5_$this.k41(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.q3m_1).i42(Colors_instance.t3d(), Colors_instance.m3e(), Colors_instance.v3d(), VOID, VOID, Colors_instance.e3e(), Colors_instance.n3e(), Colors_instance.m3e());
    get_tooltip_0(this_0.q3m_1).n42(get_color_0(this_0.q3m_1), get_background_0(this_0.q3m_1));
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>.<anonymous>' call
    var color_0 = Colors_instance.m3e();
    set_background(this_0.r3m_1, Colors_instance.t3d());
    set_color(this_0.r3m_1, color_0);
    set_border(this_0.r3m_1, color_0.n3d(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.r3m_1, focusOutline);
    set_overlay(this_0.r3m_1, color_0.n3d(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.r3m_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.t3d(), 0.2);
    get_button_0(this_0.r3m_1).u40(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.f3e(), lightened(buttonBase_0, 0.4));
    get_callout(this_0.r3m_1).e41(Colors_instance.j3e(), get_callout(this_0.q3m_1).v3o(), get_callout(this_0.q3m_1).w3o(), Colors_instance.s3d(), get_callout(this_0.q3m_1).y3o(), get_callout(this_0.q3m_1).z3o(), Colors_instance.h3e());
    get_checkbox_0(this_0.r3m_1).k41(Blue_getInstance().y3l_1, Blue_getInstance().z3l_1, Colors_instance.t3d());
    var inputFilled_0 = Gray_getInstance().p3m_1;
    var tmp0_$this_0 = get_input_0(this_0.r3m_1);
    var tmp1_filledFocus_0 = Colors_instance.r3d();
    var tmp2_hoveredBorder_0 = Gray_getInstance().m3m_1;
    var tmp3_invalidBorder_0 = Red_getInstance().j3l_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.s41(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.r3m_1);
    var tmp6_thumb_0 = Colors_instance.m3e();
    var tmp7_backgroundOn_0 = Colors_instance.f3e();
    var tmp8_backgroundOff_0 = Colors_instance.y3d();
    tmp5_$this_0.k41(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.r3m_1).i42(Colors_instance.m3e(), Colors_instance.t3d(), Colors_instance.f3e(), VOID, VOID, Colors_instance.b3e(), Colors_instance.y3d(), Colors_instance.t3d());
    get_tooltip_0(this_0.r3m_1).n42(get_color_0(this_0.r3m_1), get_background_0(this_0.r3m_1));
    mutableTheme.s3k('silk-colors', get_SilkColorsStyle());
    mutableTheme.k3g('silk-input', get_InputStyle());
    mutableTheme.y3k('-outlined', get_OutlinedInputVariant());
    mutableTheme.y3k('-filled', get_FilledInputVariant());
    mutableTheme.y3k('-flushed', get_FlushedInputVariant());
    mutableTheme.y3k('-unstyled', get_UnstyledInputVariant());
    mutableTheme.k3g('silk-input-group', get_InputGroupStyle());
    mutableTheme.s3k('silk-disabled', get_DisabledStyle());
    mutableTheme.s3k('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.k3g('silk-button', get_ButtonStyle());
    mutableTheme.k3g('silk-canvas', get_CanvasStyle());
    mutableTheme.k3g('silk-callout', get_CalloutStyle());
    mutableTheme.y3k('-left-bordered', get_LeftBorderedCalloutVariant());
    mutableTheme.y3k('-left-bordered-filled', get_LeftBorderedFilledCalloutVariant());
    mutableTheme.y3k('-outlined', get_OutlinedCalloutVariant());
    mutableTheme.y3k('-matching-link', get_MatchingLinkCalloutVariant());
    mutableTheme.k3g('silk-checkbox', get_CheckboxStyle());
    mutableTheme.y3k('-checkbox', get_CheckboxInputVariant());
    mutableTheme.k3g('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.k3g('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.y3k('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.y3k('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.k3g('silk-overlay', get_OverlayStyle());
    mutableTheme.k3g('silk-popup', get_PopupStyle());
    mutableTheme.k3g('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.k3g('silk-surface', get_SurfaceStyle());
    mutableTheme.k3g('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.k3g('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.k3g('silk-switch', get_SwitchStyle());
    mutableTheme.k3g('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.k3g('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.y3k('-switch', get_SwitchInputVariant());
    mutableTheme.k3g('silk-tabs', get_TabsStyle());
    mutableTheme.k3g('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.k3g('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.k3g('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.k3g('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.y3k('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.y3k('-top', get_TopTooltipArrowVariant());
    mutableTheme.y3k('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.y3k('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.y3k('-left', get_LeftTooltipArrowVariant());
    mutableTheme.y3k('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.y3k('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.y3k('-right', get_RightTooltipArrowVariant());
    mutableTheme.y3k('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.y3k('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.y3k('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.y3k('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.k3g('silk-tooltip', get_TooltipStyle());
    mutableTheme.k3g('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.z3k('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.q3k('silk-button-size_xs', Companion_getInstance_1().j3q_1);
    mutableTheme.q3k('silk-button-size_sm', Companion_getInstance_1().k3q_1);
    mutableTheme.q3k('silk-button-size_md', Companion_getInstance_1().l3q_1);
    mutableTheme.q3k('silk-button-size_lg', Companion_getInstance_1().m3q_1);
    mutableTheme.q3k('silk-checkbox-size_sm', Companion_getInstance_2().w3r_1);
    mutableTheme.q3k('silk-checkbox-size_md', Companion_getInstance_2().x3r_1);
    mutableTheme.q3k('silk-checkbox-size_lg', Companion_getInstance_2().y3r_1);
    mutableTheme.q3k('silk-input-size_xs', Companion_getInstance_3().y3s_1);
    mutableTheme.q3k('silk-input-size_sm', Companion_getInstance_3().z3s_1);
    mutableTheme.q3k('silk-input-size_md', Companion_getInstance_3().a3t_1);
    mutableTheme.q3k('silk-input-size_lg', Companion_getInstance_3().b3t_1);
    mutableTheme.q3k('silk-switch-size_sm', Companion_getInstance_4().x3t_1);
    mutableTheme.q3k('silk-switch-size_md', Companion_getInstance_4().y3t_1);
    mutableTheme.q3k('silk-switch-size_lg', Companion_getInstance_4().z3t_1);
    mutableTheme.q3k('silk-callout-type_caution', Companion_getInstance_0().i3p_1);
    mutableTheme.q3k('silk-callout-type_important', Companion_getInstance_0().j3p_1);
    mutableTheme.q3k('silk-callout-type_note', Companion_getInstance_0().k3p_1);
    mutableTheme.q3k('silk-callout-type_question', Companion_getInstance_0().l3p_1);
    mutableTheme.q3k('silk-callout-type_quote', Companion_getInstance_0().m3p_1);
    mutableTheme.q3k('silk-callout-type_tip', Companion_getInstance_0().n3p_1);
    mutableTheme.q3k('silk-callout-type_warning', Companion_getInstance_0().o3p_1);
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_name(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.o3j())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function SilkWidgetVariables($composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1751129124);
    if (!($changed === 0) || !$composer_0.s1t()) {
      $composer_0.z1t(743484619);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i1v();
      var tmp;
      if (false || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = SilkWidgetVariables$lambda;
        this_0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      SilkWidgetVariables_0(tmp0_group, $composer_0, 6);
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(SilkWidgetVariables$lambda_0($changed));
    }
  }
  function SilkWidgetVariables_0(provideElement, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1418237724);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(provideElement) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      $composer_0.z1t(743478685);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i1v();
      var tmp;
      if (false || it === Companion_getInstance().r1o_1) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = provideElement();
        this_0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      var rootElement = tmp0_group;
      SilkWidgetVariables_1(rootElement, $composer_0, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(SilkWidgetVariables$lambda_1(provideElement, $changed));
    }
  }
  function SilkWidgetVariables_1(element, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(145799267);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(element) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      setSilkWidgetVariables(element, Companion_instance_11.l3j($composer_0, 6));
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(SilkWidgetVariables$lambda_2(element, $changed));
    }
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.h3j_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(colorScheme(Companion_instance, $this$base.h3j_1.d3l() ? Companion_instance_18.a30() : Companion_instance_18.b30()), get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().c3q(), get_button(palette).o42()), ButtonVars_getInstance().e3q(), get_button(palette).i2v()), ButtonVars_getInstance().f3q(), get_button(palette).p42()), CheckboxVars_getInstance().t3r(), get_checkbox(palette).q42()), CheckboxVars_getInstance().u3r(), get_checkbox(palette).i2v()), CheckboxVars_getInstance().s3r(), get_checkbox(palette).r42()), InputVars_getInstance().q3s(), get_input(palette).s42()), InputVars_getInstance().r3s(), get_input(palette).t42()), InputVars_getInstance().s3s(), get_input(palette).u42()), InputVars_getInstance().t3s(), get_input(palette).v42()), InputVars_getInstance().u3s(), get_input(palette).w42()), OverlayVars_getInstance().i3o(), get_overlay(palette)), SwitchVars_getInstance().w3t(), get_switch(palette).x42()), TabVars_getInstance().g3o(), get_tab(palette).r42()), TabVars_getInstance().i3o(), get_tab(palette).q42()), TabVars_getInstance().j3o(), get_tab(palette).y42()), TabVars_getInstance().k3o(), get_tab(palette).i2v()), TabVars_getInstance().l3o(), get_tab(palette).p42()), TooltipVars_getInstance().i3o(), get_tooltip(palette).q42()), TooltipVars_getInstance().g3o(), get_tooltip(palette).r42());
  }
  function SilkWidgetVariables$lambda() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var tmp = document.documentElement;
    return tmp instanceof HTMLElement ? tmp : THROW_CCE();
  }
  function SilkWidgetVariables$lambda_0($$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkWidgetVariables$lambda_1($provideElement, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_0($provideElement, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SilkWidgetVariables$lambda_2($element, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_1($element, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.t32(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.z1t(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    $composer_0.b1u();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.g30());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_instance, [Companion_instance_2.f33('background-color', get_SmoothColorTransitionDurationVar().n32())]);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().f3o().n32();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.x3n_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.y3n_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.z3n_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.a3o_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.b3o_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.c3o_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.d3o_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.e3o_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).j3r = function () {
    return this.z3n_1.t32(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).p3t = function () {
    return this.a3o_1.t32(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).f3o = function () {
    return this.b3o_1.t32(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.j3r();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.p3t();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.f3o();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.t32(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.t32(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.t32(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.t32(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.t32(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.t32(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  var com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable;
  var com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable;
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.n3q_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.o3q_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.p3q_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.q3q_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).r3q = function () {
    return this.n3q_1.t32(this, XS$factory());
  };
  protoOf(FontSizeVars).s3q = function () {
    return this.o3q_1.t32(this, SM$factory());
  };
  protoOf(FontSizeVars).t3q = function () {
    return this.p3q_1.t32(this, MD$factory());
  };
  protoOf(FontSizeVars).u3q = function () {
    return this.q3q_1.t32(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.c3t_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.d3t_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.e3t_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.f3t_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).r3q = function () {
    return this.c3t_1.t32(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).s3q = function () {
    return this.d3t_1.t32(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).t3q = function () {
    return this.e3t_1.t32(this, MD$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.r3q();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.s3q();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.t3q();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.u3q();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.r3q();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.s3q();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.t3q();
    }, null);
  }
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable;
  var com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable;
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.q40_1 = this.d3n();
    this.r40_1 = this.d3n();
    this.s40_1 = this.d3n();
    this.t40_1 = this.d3n();
  }
  protoOf(MutableButton).z42 = function (_set____db54di) {
    return this.q40_1.a3n(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).o42 = function () {
    return this.q40_1.t32(this, default$factory_0());
  };
  protoOf(MutableButton).a43 = function (_set____db54di) {
    return this.r40_1.a3n(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).i2v = function () {
    return this.r40_1.t32(this, hover$factory_0());
  };
  protoOf(MutableButton).b43 = function (_set____db54di) {
    return this.s40_1.a3n(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).c43 = function () {
    return this.s40_1.t32(this, focus$factory_0());
  };
  protoOf(MutableButton).d43 = function (_set____db54di) {
    return this.t40_1.a3n(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).p42 = function () {
    return this.t40_1.t32(this, pressed$factory_0());
  };
  protoOf(MutableButton).u40 = function (default_0, hover, focus, pressed) {
    this.z42(default_0);
    this.a43(hover);
    this.b43(focus);
    this.d43(pressed);
  };
  function MutableCallout(palette) {
    ColorGroup.call(this, palette, 'callout');
    this.x40_1 = this.d3n();
    this.y40_1 = this.d3n();
    this.z40_1 = this.d3n();
    this.a41_1 = this.d3n();
    this.b41_1 = this.d3n();
    this.c41_1 = this.d3n();
    this.d41_1 = this.d3n();
  }
  protoOf(MutableCallout).e43 = function (_set____db54di) {
    return this.x40_1.a3n(this, caution$factory(), _set____db54di);
  };
  protoOf(MutableCallout).u3o = function () {
    return this.x40_1.t32(this, caution$factory_0());
  };
  protoOf(MutableCallout).f43 = function (_set____db54di) {
    return this.y40_1.a3n(this, important$factory(), _set____db54di);
  };
  protoOf(MutableCallout).v3o = function () {
    return this.y40_1.t32(this, important$factory_0());
  };
  protoOf(MutableCallout).g43 = function (_set____db54di) {
    return this.z40_1.a3n(this, note$factory(), _set____db54di);
  };
  protoOf(MutableCallout).w3o = function () {
    return this.z40_1.t32(this, note$factory_0());
  };
  protoOf(MutableCallout).h43 = function (_set____db54di) {
    return this.a41_1.a3n(this, question$factory(), _set____db54di);
  };
  protoOf(MutableCallout).x3o = function () {
    return this.a41_1.t32(this, question$factory_0());
  };
  protoOf(MutableCallout).i43 = function (_set____db54di) {
    return this.b41_1.a3n(this, quote$factory(), _set____db54di);
  };
  protoOf(MutableCallout).y3o = function () {
    return this.b41_1.t32(this, quote$factory_0());
  };
  protoOf(MutableCallout).j43 = function (_set____db54di) {
    return this.c41_1.a3n(this, tip$factory(), _set____db54di);
  };
  protoOf(MutableCallout).z3o = function () {
    return this.c41_1.t32(this, tip$factory_0());
  };
  protoOf(MutableCallout).k43 = function (_set____db54di) {
    return this.d41_1.a3n(this, warning$factory(), _set____db54di);
  };
  protoOf(MutableCallout).a3p = function () {
    return this.d41_1.t32(this, warning$factory_0());
  };
  protoOf(MutableCallout).e41 = function (caution, important, note, question, quote, tip, warning) {
    this.e43(caution);
    this.f43(important);
    this.g43(note);
    this.h43(question);
    this.i43(quote);
    this.j43(tip);
    this.k43(warning);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.h41_1 = this.d3n();
    this.i41_1 = this.d3n();
    this.j41_1 = this.d3n();
  }
  protoOf(MutableCheckbox).l43 = function (_set____db54di) {
    return this.h41_1.a3n(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).q42 = function () {
    return this.h41_1.t32(this, background$factory_0());
  };
  protoOf(MutableCheckbox).a43 = function (_set____db54di) {
    return this.i41_1.a3n(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).i2v = function () {
    return this.i41_1.t32(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).m43 = function (_set____db54di) {
    return this.j41_1.a3n(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).r42 = function () {
    return this.j41_1.t32(this, color$factory_0());
  };
  protoOf(MutableCheckbox).k41 = function (background, hover, color) {
    this.l43(background);
    this.a43(hover);
    this.m43(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.n41_1 = this.d3n();
    this.o41_1 = this.d3n();
    this.p41_1 = this.d3n();
    this.q41_1 = this.d3n();
    this.r41_1 = this.d3n();
  }
  protoOf(MutableInput).n43 = function (_set____db54di) {
    return this.n41_1.a3n(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).s42 = function () {
    return this.n41_1.t32(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).o43 = function (_set____db54di) {
    return this.o41_1.a3n(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).t42 = function () {
    return this.o41_1.t32(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).p43 = function (_set____db54di) {
    return this.p41_1.a3n(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).u42 = function () {
    return this.p41_1.t32(this, filled$factory_0());
  };
  protoOf(MutableInput).q43 = function (_set____db54di) {
    return this.q41_1.a3n(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).v42 = function () {
    return this.q41_1.t32(this, filledHover$factory_0());
  };
  protoOf(MutableInput).r43 = function (_set____db54di) {
    return this.r41_1.a3n(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).w42 = function () {
    return this.r41_1.t32(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).s41 = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.n43(hoveredBorder);
    this.o43(invalidBorder);
    this.p43(filled);
    this.q43(filledHover);
    this.r43(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.v41_1 = this.d3n();
    this.w41_1 = this.d3n();
    this.x41_1 = this.d3n();
  }
  protoOf(MutableSwitch).s43 = function (_set____db54di) {
    return this.v41_1.a3n(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).t43 = function () {
    return this.v41_1.t32(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).u43 = function (_set____db54di) {
    return this.w41_1.a3n(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).v43 = function () {
    return this.w41_1.t32(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).w43 = function (_set____db54di) {
    return this.x41_1.a3n(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).x42 = function () {
    return this.x41_1.t32(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).k41 = function (backgroundOn, backgroundOff, thumb) {
    this.s43(backgroundOn);
    this.u43(backgroundOff);
    this.w43(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.a42_1 = this.d3n();
    this.b42_1 = this.d3n();
    this.c42_1 = this.d3n();
    this.d42_1 = this.d3n();
    this.e42_1 = this.d3n();
    this.f42_1 = this.d3n();
    this.g42_1 = this.d3n();
    this.h42_1 = this.d3n();
  }
  protoOf(MutableTab).m43 = function (_set____db54di) {
    return this.a42_1.a3n(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).r42 = function () {
    return this.a42_1.t32(this, color$factory_2());
  };
  protoOf(MutableTab).l43 = function (_set____db54di) {
    return this.b42_1.a3n(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).q42 = function () {
    return this.b42_1.t32(this, background$factory_2());
  };
  protoOf(MutableTab).x43 = function (_set____db54di) {
    return this.c42_1.a3n(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).y43 = function () {
    return this.c42_1.t32(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).z43 = function (_set____db54di) {
    return this.d42_1.a3n(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).a44 = function () {
    return this.d42_1.t32(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).b44 = function (_set____db54di) {
    return this.e42_1.a3n(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).c44 = function () {
    return this.e42_1.t32(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).a43 = function (_set____db54di) {
    return this.f42_1.a3n(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).i2v = function () {
    return this.f42_1.t32(this, hover$factory_4());
  };
  protoOf(MutableTab).d43 = function (_set____db54di) {
    return this.g42_1.a3n(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).p42 = function () {
    return this.g42_1.t32(this, pressed$factory_2());
  };
  protoOf(MutableTab).d44 = function (_set____db54di) {
    return this.h42_1.a3n(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).y42 = function () {
    return this.h42_1.t32(this, disabled$factory_0());
  };
  protoOf(MutableTab).e44 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.m43(color);
    this.l43(background);
    this.x43(selectedColor);
    this.z43(selectedBackground);
    this.b44(selectedBorder);
    this.a43(hover);
    this.d43(pressed);
    this.d44(disabled);
  };
  protoOf(MutableTab).i42 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.e44(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.e44.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.l42_1 = this.d3n();
    this.m42_1 = this.d3n();
  }
  protoOf(MutableTooltip).l43 = function (_set____db54di) {
    return this.l42_1.a3n(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).q42 = function () {
    return this.l42_1.t32(this, background$factory_4());
  };
  protoOf(MutableTooltip).m43 = function (_set____db54di) {
    return this.m42_1.a3n(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).r42 = function () {
    return this.m42_1.t32(this, color$factory_4());
  };
  protoOf(MutableTooltip).n42 = function (background, color) {
    this.l43(background);
    this.m43(color);
  };
  function get_tooltip(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w3m('overlay');
  }
  function get_input(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w3m('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w3m('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w3m('border');
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w3m('color');
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w3m('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e3n('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w3m('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e3n('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.w3m('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e3n('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e3n('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e3n('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.e3n('placeholder', value);
  }
  function get_callout(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return new MutableCallout(_this__u8e3s4);
  }
  function get_callout_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return get_callout(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.o42();
    }, function (receiver, value) {
      return receiver.z42(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.o42();
    }, function (receiver, value) {
      return receiver.z42(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2v();
    }, function (receiver, value) {
      return receiver.a43(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2v();
    }, function (receiver, value) {
      return receiver.a43(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.c43();
    }, function (receiver, value) {
      return receiver.b43(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.c43();
    }, function (receiver, value) {
      return receiver.b43(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p42();
    }, function (receiver, value) {
      return receiver.d43(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p42();
    }, function (receiver, value) {
      return receiver.d43(value);
    });
  }
  function caution$factory() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.u3o();
    }, function (receiver, value) {
      return receiver.e43(value);
    });
  }
  function caution$factory_0() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.u3o();
    }, function (receiver, value) {
      return receiver.e43(value);
    });
  }
  function important$factory() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.v3o();
    }, function (receiver, value) {
      return receiver.f43(value);
    });
  }
  function important$factory_0() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.v3o();
    }, function (receiver, value) {
      return receiver.f43(value);
    });
  }
  function note$factory() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.w3o();
    }, function (receiver, value) {
      return receiver.g43(value);
    });
  }
  function note$factory_0() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.w3o();
    }, function (receiver, value) {
      return receiver.g43(value);
    });
  }
  function question$factory() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.x3o();
    }, function (receiver, value) {
      return receiver.h43(value);
    });
  }
  function question$factory_0() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.x3o();
    }, function (receiver, value) {
      return receiver.h43(value);
    });
  }
  function quote$factory() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.y3o();
    }, function (receiver, value) {
      return receiver.i43(value);
    });
  }
  function quote$factory_0() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.y3o();
    }, function (receiver, value) {
      return receiver.i43(value);
    });
  }
  function tip$factory() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.z3o();
    }, function (receiver, value) {
      return receiver.j43(value);
    });
  }
  function tip$factory_0() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.z3o();
    }, function (receiver, value) {
      return receiver.j43(value);
    });
  }
  function warning$factory() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.a3p();
    }, function (receiver, value) {
      return receiver.k43(value);
    });
  }
  function warning$factory_0() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.a3p();
    }, function (receiver, value) {
      return receiver.k43(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q42();
    }, function (receiver, value) {
      return receiver.l43(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q42();
    }, function (receiver, value) {
      return receiver.l43(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2v();
    }, function (receiver, value) {
      return receiver.a43(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2v();
    }, function (receiver, value) {
      return receiver.a43(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r42();
    }, function (receiver, value) {
      return receiver.m43(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r42();
    }, function (receiver, value) {
      return receiver.m43(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.s42();
    }, function (receiver, value) {
      return receiver.n43(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.s42();
    }, function (receiver, value) {
      return receiver.n43(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t42();
    }, function (receiver, value) {
      return receiver.o43(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t42();
    }, function (receiver, value) {
      return receiver.o43(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.u42();
    }, function (receiver, value) {
      return receiver.p43(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.u42();
    }, function (receiver, value) {
      return receiver.p43(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.v42();
    }, function (receiver, value) {
      return receiver.q43(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.v42();
    }, function (receiver, value) {
      return receiver.q43(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.w42();
    }, function (receiver, value) {
      return receiver.r43(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.w42();
    }, function (receiver, value) {
      return receiver.r43(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.t43();
    }, function (receiver, value) {
      return receiver.s43(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.t43();
    }, function (receiver, value) {
      return receiver.s43(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.v43();
    }, function (receiver, value) {
      return receiver.u43(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.v43();
    }, function (receiver, value) {
      return receiver.u43(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.x42();
    }, function (receiver, value) {
      return receiver.w43(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.x42();
    }, function (receiver, value) {
      return receiver.w43(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r42();
    }, function (receiver, value) {
      return receiver.m43(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r42();
    }, function (receiver, value) {
      return receiver.m43(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q42();
    }, function (receiver, value) {
      return receiver.l43(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q42();
    }, function (receiver, value) {
      return receiver.l43(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.y43();
    }, function (receiver, value) {
      return receiver.x43(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.y43();
    }, function (receiver, value) {
      return receiver.x43(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.a44();
    }, function (receiver, value) {
      return receiver.z43(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.a44();
    }, function (receiver, value) {
      return receiver.z43(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.c44();
    }, function (receiver, value) {
      return receiver.b44(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.c44();
    }, function (receiver, value) {
      return receiver.b44(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2v();
    }, function (receiver, value) {
      return receiver.a43(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.i2v();
    }, function (receiver, value) {
      return receiver.a43(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p42();
    }, function (receiver, value) {
      return receiver.d43(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.p42();
    }, function (receiver, value) {
      return receiver.d43(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.y42();
    }, function (receiver, value) {
      return receiver.d44(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.y42();
    }, function (receiver, value) {
      return receiver.d44(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q42();
    }, function (receiver, value) {
      return receiver.l43(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.q42();
    }, function (receiver, value) {
      return receiver.l43(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r42();
    }, function (receiver, value) {
      return receiver.m43(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.r42();
    }, function (receiver, value) {
      return receiver.m43(value);
    });
  }
  var properties_initialized_SilkWidgetColorGroups_kt_1mdo2;
  function _init_properties_SilkWidgetColorGroups_kt__mh2tbg() {
    if (!properties_initialized_SilkWidgetColorGroups_kt_1mdo2) {
      properties_initialized_SilkWidgetColorGroups_kt_1mdo2 = true;
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableButton$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCallout$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableCheckbox$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableInput$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableSwitch$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTab$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups_MutableTooltip$stable = com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter() | com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter();
      com_varabyte_kobweb_silk_theme_colors_palette_SilkWidgetColorGroups$stable = 0;
    }
  }
  //region block: post-declaration
  protoOf(PopupScope).b3c = align;
  //endregion
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 0;
  Companion_instance_24 = new Companion_4();
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  Companion_instance_25 = new Companion_5();
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  Uninitialized_instance = new Uninitialized();
  Companion_instance_26 = new Companion_6();
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ButtonStyle;
  _.$_$.b = Button_0;
  _.$_$.c = CloseIcon;
  _.$_$.d = HamburgerIcon;
  _.$_$.e = MoonIcon;
  _.$_$.f = SunIcon;
  _.$_$.g = get_HorizontalDividerStyle;
  _.$_$.h = HorizontalDivider;
  _.$_$.i = Surface;
  _.$_$.j = Overlay;
  _.$_$.k = Tooltip;
  _.$_$.l = get_SilkColorsStyle;
  _.$_$.m = SilkWidgetVariables;
  _.$_$.n = initSilkWidgets;
  _.$_$.o = get_SmoothColorStyle;
  _.$_$.p = get_BorderColorVar;
  _.$_$.q = get_ColorVar;
  _.$_$.r = set_background;
  _.$_$.s = get_color;
  _.$_$.t = set_color;
  _.$_$.u = PopupPlacement_BottomRight_getInstance;
  _.$_$.v = ButtonVars_getInstance;
  _.$_$.w = OverlayVars_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
