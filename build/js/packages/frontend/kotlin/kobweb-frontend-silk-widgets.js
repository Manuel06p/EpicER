(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './kobweb-frontend-browser-ext.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-browser-ext.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
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
    globalThis['kobweb-frontend-silk-widgets'] = factory(typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-silk-foundation'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-browser-ext'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_browser_ext, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.kd;
  var ComponentKind = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var initMetadataForInterface = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.g;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.p5;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var initMetadataForObject = kotlin_kotlin.$_$.lc;
  var Unit_getInstance = kotlin_kotlin.$_$.f5;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o4;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q3;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b4;
  var listOf = kotlin_kotlin.$_$.t8;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c4;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o3;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.e4;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w3;
  var KProperty1 = kotlin_kotlin.$_$.de;
  var getPropertyCallableRef = kotlin_kotlin.$_$.dc;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var objectCreate = kotlin_kotlin.$_$.jd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.hc;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var initMetadataForClass = kotlin_kotlin.$_$.gc;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.g4;
  var marginBlock = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n3;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f4;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var descendants = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var marginBlock_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var ButtonType_Button_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var toModifier_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var ensureNotNull = kotlin_kotlin.$_$.mi;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e2;
  var get_isBright = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z1;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.sh;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.a6;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b2;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Companion_getInstance_13 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e4;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var Companion_getInstance_14 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d4;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p3;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var boxShadow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var type = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x2;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i4;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.c6;
  var ariaInvalid = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var ariaRequired = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.l6;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var Companion_getInstance_16 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var registerRefScope_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a3;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var toString = kotlin_kotlin.$_$.nd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var Unit = kotlin_kotlin.$_$.ei;
  var isNumber = kotlin_kotlin.$_$.xc;
  var placeholder = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var disabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i1;
  var readOnly = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var required = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var autoComplete = kotlin_org_jetbrains_compose_html_html_core.$_$.q2;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var Companion_getInstance_17 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o3;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var Line = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q2;
  var Companion_getInstance_18 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f4;
  var com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r2;
  var Circle = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n2;
  var SVGStrokeLineCap_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var Group = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var SVGStrokeLineJoin_Round_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f3;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.si;
  var SVGStrokeType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g3;
  var SVGFillType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var SVGFillType_CurrentColor_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c3;
  var SVGStrokeType_None_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.n5;
  var Hr = kotlin_org_jetbrains_compose_html_html_core.$_$.j6;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.m4;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d7;
  var mapCapacity = kotlin_kotlin.$_$.u8;
  var coerceAtLeast = kotlin_kotlin.$_$.sd;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var TopStart_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n4;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.ae;
  var THROW_ISE = kotlin_kotlin.$_$.uh;
  var getLocalDelegateReference = kotlin_kotlin.$_$.bc;
  var CoroutineImpl = kotlin_kotlin.$_$.gb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var isInterface = kotlin_kotlin.$_$.vc;
  var initMetadataForLambda = kotlin_kotlin.$_$.kc;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var SuspendFunction1 = kotlin_kotlin.$_$.hb;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var EventListenerManager = kotlin_com_varabyte_kobweb_browser_ext.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var merge = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var asCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var launchIn = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var THROW_IAE = kotlin_kotlin.$_$.th;
  var enumEntries = kotlin_kotlin.$_$.kb;
  var Enum = kotlin_kotlin.$_$.hh;
  var TopCenter_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m4;
  var Deferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var disposableRef = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y2;
  var toDouble = kotlin_kotlin.$_$.gg;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var IllegalStateException = kotlin_kotlin.$_$.lh;
  var onTransitionEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var KMutableProperty1 = kotlin_kotlin.$_$.be;
  var EventListener = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.e;
  var ResizeObserver_init_$Create$ = kotlin_com_varabyte_kobweb_browser_ext.$_$.i;
  var numberToDouble = kotlin_kotlin.$_$.gd;
  var align = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var BoxScope = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.u5;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var split = kotlin_kotlin.$_$.wf;
  var charSequenceLength = kotlin_kotlin.$_$.ub;
  var Br = kotlin_org_jetbrains_compose_html_html_core.$_$.z5;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f2;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g2;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h2;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var get_name = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w1;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var Companion_getInstance_19 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p3;
  var colorScheme = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var KProperty0 = kotlin_kotlin.$_$.ce;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.k5;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var com_varabyte_kobweb_silk_theme_colors_palette_MutablePalette_ColorGroup_EntryDelegate$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(TabRow, 'TabRow', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Tab, 'Tab', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Panel, 'Panel', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(TabsKind, 'TabsKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(TabVars, 'TabVars');
  initMetadataForInterface(CalloutKind, 'CalloutKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(CalloutVars, 'CalloutVars');
  initMetadataForCompanion(Companion);
  initMetadataForClass(CalloutType, 'CalloutType', VOID, Base);
  initMetadataForObject(ComposableSingletons$CalloutKt, 'ComposableSingletons$CalloutKt');
  initMetadataForInterface(ButtonKind, 'ButtonKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(ButtonVars, 'ButtonVars');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Base);
  initMetadataForInterface(Container, 'Container', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Icon, 'Icon', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(CheckboxKind, 'CheckboxKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(CheckboxVars, 'CheckboxVars');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CheckboxSize, 'CheckboxSize', VOID, Base);
  initMetadataForInterface(InputKind, 'InputKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(InputGroupKind, 'InputGroupKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(InputVars, 'InputVars');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(InputSize, 'InputSize', VOID, Base);
  initMetadataForObject(InputDefaults, 'InputDefaults');
  initMetadataForInterface(Track, 'Track', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(Thumb, 'Thumb', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(SwitchKind, 'SwitchKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(SwitchVars, 'SwitchVars');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SwitchSize, 'SwitchSize', VOID, Base);
  initMetadataForInterface(CanvasKind, 'CanvasKind', VOID, VOID, [ComponentKind]);
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
  initMetadataForInterface(IconRenderStyle, 'IconRenderStyle');
  initMetadataForClass(Fill, 'Fill', Fill, VOID, [IconRenderStyle]);
  initMetadataForClass(Stroke, 'Stroke', Stroke, VOID, [IconRenderStyle]);
  initMetadataForInterface(HorizontalDividerKind, 'HorizontalDividerKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(DividerVars, 'DividerVars');
  initMetadataForInterface(VerticalDividerKind, 'VerticalDividerKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(SimpleGridKind, 'SimpleGridKind', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(SurfaceKind, 'SurfaceKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(SurfaceVars, 'SurfaceVars');
  initMetadataForLambda(Surface$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(KeepPopupOpenStrategy, 'KeepPopupOpenStrategy');
  initMetadataForClass(never$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForClass(onFocus$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForClass(onHover$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForLambda(combine$o$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(combine$1, VOID, VOID, KeepPopupOpenStrategy);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(OpenClosePopupStrategy, 'OpenClosePopupStrategy');
  initMetadataForClass(OpenClose, 'OpenClose', VOID, Enum);
  initMetadataForClass(onFocus$1_0, VOID, VOID, OpenClosePopupStrategy);
  initMetadataForClass(onHover$1_0, VOID, VOID, OpenClosePopupStrategy);
  initMetadataForLambda(combine$o$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(combine$1_0, VOID, VOID, OpenClosePopupStrategy);
  initMetadataForObject(OverlayVars, 'OverlayVars');
  initMetadataForInterface(OverlayKind, 'OverlayKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(ComposableSingletons$OverlayKt, 'ComposableSingletons$OverlayKt');
  initMetadataForClass(PopoverShowHideSettings, 'PopoverShowHideSettings');
  initMetadataForLambda(PopoverStateController$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(PopoverStateController$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(PopoverStateController, 'PopoverStateController');
  initMetadataForClass(PopoverElements, 'PopoverElements');
  initMetadataForInterface(PopoverState, 'PopoverState');
  initMetadataForObject(Uninitialized, 'Uninitialized', VOID, VOID, [PopoverState]);
  initMetadataForInterface(Initialized, 'Initialized', VOID, VOID, [PopoverState]);
  initMetadataForClass(FoundElements, 'FoundElements', VOID, VOID, [Initialized]);
  initMetadataForInterface(Visible, 'Visible', VOID, VOID, [Initialized]);
  initMetadataForInterface(Showing, 'Showing', VOID, VOID, [Visible]);
  initMetadataForClass(Calculating, 'Calculating', VOID, VOID, [Showing]);
  initMetadataForClass(Shown, 'Shown', VOID, VOID, [Showing]);
  initMetadataForClass(Hiding, 'Hiding', VOID, VOID, [Visible]);
  initMetadataForClass(AdvancedPopover$$inlined$cache$1$2, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(AdvancedPopover$$inlined$run$1$2$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(PopupPlacementStrategy, 'PopupPlacementStrategy');
  initMetadataForClass(PopupPlacementStrategy$Companion$of$1, VOID, VOID, PopupPlacementStrategy);
  initMetadataForClass(Position, 'Position');
  initMetadataForClass(PositionAndPlacement, 'PositionAndPlacement');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(PopupPlacement, 'PopupPlacement', VOID, Enum);
  initMetadataForClass(PopupScope, 'PopupScope', VOID, VOID, [BoxScope]);
  initMetadataForInterface(PopupKind, 'PopupKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(PopupVars, 'PopupVars');
  initMetadataForInterface(Arrow, 'Arrow', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(TextContainer, 'TextContainer', VOID, VOID, [ComponentKind]);
  initMetadataForInterface(TooltipKind, 'TooltipKind', VOID, VOID, [ComponentKind]);
  initMetadataForObject(TooltipVars, 'TooltipVars');
  initMetadataForClass(PlaceholderColor, 'PlaceholderColor');
  initMetadataForObject(TransitionDurationVars, 'TransitionDurationVars');
  initMetadataForObject(FontSizeVars, 'FontSizeVars');
  initMetadataForObject(BorderRadiusVars, 'BorderRadiusVars');
  initMetadataForInterface(Button_1, 'Button');
  initMetadataForClass(MutableButton, 'MutableButton', VOID, ColorGroup, [ColorGroup, Button_1]);
  initMetadataForInterface(Callout, 'Callout');
  initMetadataForClass(MutableCallout, 'MutableCallout', VOID, ColorGroup, [ColorGroup, Callout]);
  initMetadataForInterface(Checkbox, 'Checkbox');
  initMetadataForClass(MutableCheckbox, 'MutableCheckbox', VOID, ColorGroup, [ColorGroup, Checkbox]);
  initMetadataForInterface(Input_1, 'Input');
  initMetadataForClass(MutableInput, 'MutableInput', VOID, ColorGroup, [ColorGroup, Input_1]);
  initMetadataForInterface(Switch, 'Switch');
  initMetadataForClass(MutableSwitch, 'MutableSwitch', VOID, ColorGroup, [ColorGroup, Switch]);
  initMetadataForInterface(Tab_0, 'Tab');
  initMetadataForClass(MutableTab, 'MutableTab', VOID, ColorGroup, [ColorGroup, Tab_0]);
  initMetadataForInterface(Tooltip_0, 'Tooltip');
  initMetadataForClass(MutableTooltip, 'MutableTooltip', VOID, ColorGroup, [ColorGroup, Tooltip_0]);
  initMetadataForObject(SilkWidgetColorGroups, 'SilkWidgetColorGroups');
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
  function TabRow() {
  }
  function Tab() {
  }
  function Panel() {
  }
  function TabsKind() {
  }
  function TabVars() {
    TabVars_instance = this;
    this.Color$delegate_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
    this.DisabledBackgroundColor$delegate_1 = StyleVariable('silk');
    this.HoverBackgroundColor$delegate_1 = StyleVariable('silk');
    this.PressedBackgroundColor$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.BorderThickness$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory());
  };
  protoOf(TabVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, BorderColor$factory());
  };
  protoOf(TabVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundColor$factory());
  };
  protoOf(TabVars).get_DisabledBackgroundColor_cqusog_k$ = function () {
    return this.DisabledBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).get_HoverBackgroundColor_uy6r32_k$ = function () {
    return this.HoverBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).get_PressedBackgroundColor_ow7ud8_k$ = function () {
    return this.PressedBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).get_BorderThickness_psvqzl_k$ = function () {
    return this.BorderThickness$delegate_1.getValue_fbnwi2_k$(this, BorderThickness$factory());
  };
  protoOf(TabVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    return this.ColorTransitionDuration$delegate_1.getValue_fbnwi2_k$(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_getInstance();
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_getInstance());
    var tmp_0 = TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_36t2hw_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(2044107546);
    var tmp0 = tabIndex(Companion_getInstance(), 0);
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.base_y8uu8g_k$(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp_0, TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp_1, TabsTabStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$()), Companion_getInstance_2().group$default_mpvkys_k$(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_36t2hw_k$())), TabVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), TabVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), Companion_getInstance_3().get_None_wo6tgh_k$()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_36t2hw_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.unaryMinus_d2gf0y_k$(TabVars_getInstance().get_BorderThickness_psvqzl_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_getInstance(), TabVars_getInstance().get_DisabledBackgroundColor_cqusog_k$().value$default_36t2hw_k$()), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().get_HoverBackgroundColor_uy6r32_k$().value$default_36t2hw_k$());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_getInstance(), TabVars_getInstance().get_PressedBackgroundColor_ow7ud8_k$().value$default_36t2hw_k$());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_getInstance(), get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.y_9zjijb_k$(Companion_getInstance_4().get_Auto_wnyn88_k$());
    return Unit_getInstance();
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_DisabledBackgroundColor_cqusog_k$();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_HoverBackgroundColor_uy6r32_k$();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_PressedBackgroundColor_ow7ud8_k$();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.get_BorderThickness_psvqzl_k$();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_ColorTransitionDuration_d6ufct_k$();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_getInstance_5();
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_getInstance_5();
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
  function CalloutKind() {
  }
  function CalloutVars() {
    CalloutVars_instance = this;
    this.Color$delegate_1 = StyleVariable('silk');
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
    this.TitleFontSize$delegate_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.5);
    tmp.TitleGap$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
  }
  protoOf(CalloutVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory_0());
  };
  protoOf(CalloutVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundColor$factory_0());
  };
  protoOf(CalloutVars).get_TitleFontSize_xxaxnl_k$ = function () {
    return this.TitleFontSize$delegate_1.getValue_fbnwi2_k$(this, TitleFontSize$factory());
  };
  protoOf(CalloutVars).get_TitleGap_9dart3_k$ = function () {
    return this.TitleGap$delegate_1.getValue_fbnwi2_k$(this, TitleGap$factory());
  };
  var CalloutVars_instance;
  function CalloutVars_getInstance() {
    if (CalloutVars_instance == null)
      new CalloutVars();
    return CalloutVars_instance;
  }
  function markdownParagraphHack(_this__u8e3s4) {
    _init_properties_Callout_kt__ksu682();
    _this__u8e3s4.cssRule_fe6cwq_k$(' >.callout-body>p:last-child', markdownParagraphHack$lambda);
  }
  function CalloutType$Companion$CAUTION$lambda(it) {
    return get_callout_0(toPalette(it)).get_caution_ahahdu_k$();
  }
  function CalloutType$Companion$IMPORTANT$lambda(it) {
    return get_callout_0(toPalette(it)).get_important_52de2h_k$();
  }
  function CalloutType$Companion$NOTE$lambda(it) {
    return get_callout_0(toPalette(it)).get_note_wor96j_k$();
  }
  function CalloutType$Companion$QUESTION$lambda(it) {
    return get_callout_0(toPalette(it)).get_question_jy1o6n_k$();
  }
  function CalloutType$Companion$QUOTE$lambda(it) {
    return get_callout_0(toPalette(it)).get_quote_ixn9eb_k$();
  }
  function CalloutType$Companion$TIP$lambda(it) {
    return get_callout_0(toPalette(it)).get_tip_18ivgu_k$();
  }
  function CalloutType$Companion$WARNING$lambda(it) {
    return get_callout_0(toPalette(it)).get_warning_jv0q7n_k$();
  }
  function CalloutType_init_$Init$(icon, label, color, $this) {
    CalloutType_init_$Init$_0(icon, label, CalloutType$_init_$lambda_4upqpt_0(color), $this);
    return $this;
  }
  function CalloutType_init_$Create$(icon, label, color) {
    return CalloutType_init_$Init$(icon, label, color, objectCreate(protoOf(CalloutType)));
  }
  function CalloutType_init_$Init$_0(icon, label, provideColor, $this) {
    var tmp = CalloutType$_init_$lambda_4upqpt_1(provideColor);
    CalloutType.call($this, icon, label, tmp, CalloutType$_init_$lambda_4upqpt_2(provideColor));
    return $this;
  }
  function CalloutType_init_$Create$_0(icon, label, provideColor) {
    return CalloutType_init_$Init$_0(icon, label, provideColor, objectCreate(protoOf(CalloutType)));
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = ComposableSingletons$CalloutKt_getInstance().lambda_1_r8sbbp_1;
    tmp.CAUTION_1 = CalloutType_init_$Create$_0(tmp_0, 'Caution', CalloutType$Companion$CAUTION$lambda);
    var tmp_1 = this;
    var tmp_2 = ComposableSingletons$CalloutKt_getInstance().lambda_2_r8sbbo_1;
    tmp_1.IMPORTANT_1 = CalloutType_init_$Create$_0(tmp_2, 'Important', CalloutType$Companion$IMPORTANT$lambda);
    var tmp_3 = this;
    var tmp_4 = ComposableSingletons$CalloutKt_getInstance().lambda_3_r8sbbn_1;
    tmp_3.NOTE_1 = CalloutType_init_$Create$_0(tmp_4, 'Note', CalloutType$Companion$NOTE$lambda);
    var tmp_5 = this;
    var tmp_6 = ComposableSingletons$CalloutKt_getInstance().lambda_4_r8sbbm_1;
    tmp_5.QUESTION_1 = CalloutType_init_$Create$_0(tmp_6, 'Question', CalloutType$Companion$QUESTION$lambda);
    var tmp_7 = this;
    var tmp_8 = ComposableSingletons$CalloutKt_getInstance().lambda_5_r8sbbl_1;
    tmp_7.QUOTE_1 = CalloutType_init_$Create$_0(tmp_8, 'Quote', CalloutType$Companion$QUOTE$lambda);
    var tmp_9 = this;
    var tmp_10 = ComposableSingletons$CalloutKt_getInstance().lambda_6_r8sbbk_1;
    tmp_9.TIP_1 = CalloutType_init_$Create$_0(tmp_10, 'Tip', CalloutType$Companion$TIP$lambda);
    var tmp_11 = this;
    var tmp_12 = ComposableSingletons$CalloutKt_getInstance().lambda_7_r8sbbj_1;
    tmp_11.WARNING_1 = CalloutType_init_$Create$_0(tmp_12, 'Warning', CalloutType$Companion$WARNING$lambda);
  }
  protoOf(Companion).get_CAUTION_mcrcde_k$ = function () {
    return this.CAUTION_1;
  };
  protoOf(Companion).get_IMPORTANT_jvo9lz_k$ = function () {
    return this.IMPORTANT_1;
  };
  protoOf(Companion).get_NOTE_wo652z_k$ = function () {
    return this.NOTE_1;
  };
  protoOf(Companion).get_QUESTION_ww02wf_k$ = function () {
    return this.QUESTION_1;
  };
  protoOf(Companion).get_QUOTE_ifgqb7_k$ = function () {
    return this.QUOTE_1;
  };
  protoOf(Companion).get_TIP_18jjzi_k$ = function () {
    return this.TIP_1;
  };
  protoOf(Companion).get_WARNING_vqhl77_k$ = function () {
    return this.WARNING_1;
  };
  var Companion_instance;
  function Companion_getInstance_20() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CalloutType$_init_$lambda_4upqpt($provideColor, $provideBackgroundColor) {
    return function (_this__u8e3s4) {
      return setVariable(setVariable(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$(), $provideColor(_this__u8e3s4.get_colorMode_trbg8z_k$())), CalloutVars_getInstance().get_BackgroundColor_qhx06s_k$(), $provideBackgroundColor(_this__u8e3s4.get_colorMode_trbg8z_k$()));
    };
  }
  function CalloutType$_init_$lambda_4upqpt_0($color) {
    return function (it) {
      return $color;
    };
  }
  function CalloutType$_init_$lambda_4upqpt_1($provideColor) {
    return function (it) {
      return $provideColor(it);
    };
  }
  function CalloutType$_init_$lambda_4upqpt_2($provideColor) {
    return function (it) {
      return $provideColor(it).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, it.get_isLight_zemp0j_k$() ? 0.15 : 0.2);
    };
  }
  function CalloutType(icon, label, provideColor, provideBackgroundColor) {
    Companion_getInstance_20();
    Base.call(this, CalloutType$_init_$lambda_4upqpt(provideColor, provideBackgroundColor));
    this.icon_1 = icon;
    this.label_1 = label;
  }
  protoOf(CalloutType).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(CalloutType).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      StopIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      ExclaimIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      InfoIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      QuestionIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      QuoteIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      LightbulbIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      WarningIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CalloutKt() {
    ComposableSingletons$CalloutKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1105541261, false, ComposableSingletons$CalloutKt$lambda_1$lambda_vor60q));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-700737724, false, ComposableSingletons$CalloutKt$lambda_2$lambda_2v4oyj));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1510536654, false, ComposableSingletons$CalloutKt$lambda_3$lambda_pyhs3o));
    var tmp_2 = this;
    tmp_2.lambda_4_r8sbbm_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-2086387290, false, ComposableSingletons$CalloutKt$lambda_4$lambda_g8zst9));
    var tmp_3 = this;
    tmp_3.lambda_5_r8sbbl_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(1974337438, false, ComposableSingletons$CalloutKt$lambda_5$lambda_ckmo8y));
    var tmp_4 = this;
    tmp_4.lambda_6_r8sbbk_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-613517763, false, ComposableSingletons$CalloutKt$lambda_6$lambda_tmuwnz));
    var tmp_5 = this;
    tmp_5.lambda_7_r8sbbj_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(2087814270, false, ComposableSingletons$CalloutKt$lambda_7$lambda_t8fls));
  }
  protoOf(ComposableSingletons$CalloutKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda_2_f9rej6_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda_3_f3bn_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda_4_f8x7vw_k$ = function () {
    return this.lambda_4_r8sbbm_1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda_5_ui9j3f_k$ = function () {
    return this.lambda_5_r8sbbl_1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda_6_p9i7o6_k$ = function () {
    return this.lambda_6_r8sbbk_1;
  };
  protoOf(ComposableSingletons$CalloutKt).get_lambda_7_a05wgn_k$ = function () {
    return this.lambda_7_r8sbbj_1;
  };
  var ComposableSingletons$CalloutKt_instance;
  function ComposableSingletons$CalloutKt_getInstance() {
    if (ComposableSingletons$CalloutKt_instance == null)
      new ComposableSingletons$CalloutKt();
    return ComposableSingletons$CalloutKt_instance;
  }
  function CalloutStyle$lambda($this$CssStyle) {
    _init_properties_Callout_kt__ksu682();
    $this$CssStyle.base_y8uu8g_k$(CalloutStyle$lambda$lambda);
    $this$CssStyle.cssRule_fe6cwq_k$(' >.callout-title', CalloutStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function CalloutStyle$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return marginBlock(textAlign(Companion_getInstance(), Companion_getInstance_6().get_Start_ih4i6x_k$()), get_em(1));
  }
  function CalloutStyle$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return gap(fontSize(fontWeight(alignItems(display(tmp, 'flex'), Companion_getInstance_8().get_Center_3arb0i_k$()), Companion_getInstance_9().get_Medium_1fiba6_k$()), CalloutVars_getInstance().get_TitleFontSize_xxaxnl_k$().value$default_36t2hw_k$()), CalloutVars_getInstance().get_TitleGap_9dart3_k$().value$default_36t2hw_k$());
  }
  function LeftBorderedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.base_y8uu8g_k$(LeftBorderedCalloutVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(' >.callout-title', LeftBorderedCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_getInstance();
  }
  function LeftBorderedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding_0(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), get_cssRem(0.5), get_cssRem(1));
  }
  function LeftBorderedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
    return margin_0(tmp, LeftBorderedCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.bottom_k4p8ql_k$(get_cssRem(1));
    return Unit_getInstance();
  }
  function LeftBorderedFilledCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.base_y8uu8g_k$(LeftBorderedFilledCalloutVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(' >.callout-title', LeftBorderedFilledCalloutVariant$lambda$lambda_0);
    markdownParagraphHack($this$addVariant);
    return Unit_getInstance();
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    var tmp_0 = get_em(0.25);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(padding(borderRadius(backgroundColor(borderLeft(tmp, tmp_0, 'solid', CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), CalloutVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), get_px(4)), get_cssRem(0.8)), [Companion_getInstance_10().of$default_ebcpmt_k$(get_px(0), get_px(1), get_px(2), VOID, Colors_getInstance().get_Black_i7mvue_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.12)), Companion_getInstance_10().of$default_ebcpmt_k$(get_px(0), get_px(3), get_px(10), VOID, Colors_getInstance().get_Black_i7mvue_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.08))]);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    var tmp = color(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
    return margin_0(tmp, LeftBorderedFilledCalloutVariant$lambda$lambda$lambda);
  }
  function LeftBorderedFilledCalloutVariant$lambda$lambda$lambda($this$margin) {
    _init_properties_Callout_kt__ksu682();
    $this$margin.bottom_k4p8ql_k$(get_cssRem(0.25));
    return Unit_getInstance();
  }
  function OutlinedCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    $this$addVariant.base_y8uu8g_k$(OutlinedCalloutVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(' >.callout-title', OutlinedCalloutVariant$lambda$lambda_0);
    $this$addVariant.cssRule_fe6cwq_k$(' .callout-icon', OutlinedCalloutVariant$lambda$lambda_1);
    $this$addVariant.cssRule_fe6cwq_k$(' >.callout-body', OutlinedCalloutVariant$lambda$lambda_2);
    markdownParagraphHack($this$addVariant);
    return Unit_getInstance();
  }
  function OutlinedCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderRadius(border(tmp, tmp_0, 'solid', CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), get_cssRem(0.2));
  }
  function OutlinedCalloutVariant$lambda$lambda_0() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(backgroundColor(Companion_getInstance(), CalloutVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), get_cssRem(0.5), get_cssRem(0.75));
  }
  function OutlinedCalloutVariant$lambda$lambda_1() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
  }
  function OutlinedCalloutVariant$lambda$lambda_2() {
    _init_properties_Callout_kt__ksu682();
    return padding_0(Companion_getInstance(), get_cssRem(0.5), get_cssRem(0.75));
  }
  function MatchingLinkCalloutVariant$lambda($this$addVariant) {
    _init_properties_Callout_kt__ksu682();
    descendants($this$addVariant, [':any-link'], MatchingLinkCalloutVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function MatchingLinkCalloutVariant$lambda$lambda() {
    _init_properties_Callout_kt__ksu682();
    return color(Companion_getInstance(), CalloutVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
  }
  function markdownParagraphHack$lambda() {
    _init_properties_Callout_kt__ksu682();
    var tmp = Companion_getInstance();
    return marginBlock_0(tmp, markdownParagraphHack$lambda$lambda);
  }
  function markdownParagraphHack$lambda$lambda($this$marginBlock) {
    _init_properties_Callout_kt__ksu682();
    $this$marginBlock.end_t3ff3h_k$(get_px(0));
    return Unit_getInstance();
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function TitleFontSize$factory() {
    return getPropertyCallableRef('TitleFontSize', 1, KProperty1, function (receiver) {
      return receiver.get_TitleFontSize_xxaxnl_k$();
    }, null);
  }
  function TitleGap$factory() {
    return getPropertyCallableRef('TitleGap', 1, KProperty1, function (receiver) {
      return receiver.get_TitleGap_9dart3_k$();
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
  function ButtonKind() {
  }
  function ButtonVars() {
    ButtonVars_instance = this;
    this.BackgroundDefaultColor$delegate_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().value$default_36t2hw_k$();
    tmp.BackgroundFocusColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.BackgroundHoverColor$delegate_1 = StyleVariable('silk');
    this.BackgroundPressedColor$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().value$default_36t2hw_k$();
    tmp_0.Color$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.FontSize$delegate_1 = StyleVariable('silk');
    this.Height$delegate_1 = StyleVariable('silk');
    this.PaddingHorizontal$delegate_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).get_BackgroundDefaultColor_so3bvr_k$ = function () {
    return this.BackgroundDefaultColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).get_BackgroundFocusColor_4vb99e_k$ = function () {
    return this.BackgroundFocusColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).get_BackgroundHoverColor_qkbxz2_k$ = function () {
    return this.BackgroundHoverColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).get_BackgroundPressedColor_qp3aco_k$ = function () {
    return this.BackgroundPressedColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory_1());
  };
  protoOf(ButtonVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    return this.ColorTransitionDuration$delegate_1.getValue_fbnwi2_k$(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).get_FontSize_oos3dz_k$ = function () {
    return this.FontSize$delegate_1.getValue_fbnwi2_k$(this, FontSize$factory());
  };
  protoOf(ButtonVars).get_Height_xmnjk_k$ = function () {
    return this.Height$delegate_1.getValue_fbnwi2_k$(this, Height$factory());
  };
  protoOf(ButtonVars).get_PaddingHorizontal_u991sc_k$ = function () {
    return this.PaddingHorizontal$delegate_1.getValue_fbnwi2_k$(this, PaddingHorizontal$factory());
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(366060417);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick_0) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(type_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(enabled_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(colorPalette_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(focusBorderColor_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ((($changed & 134217728) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 536870912 : 268435456);
    if (!(($dirty & 306783379) === 306783378) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
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
        size_0._v = Companion_getInstance_21().MD_1;
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
      $composer_0.startReplaceGroup_5hh8aj_k$(779060304);
      $composer_0.startReplaceGroup_5hh8aj_k$(779030320);
      var tmp0 = thenIf(toModifier(get_ButtonStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3), !enabled_0._v, toModifier_0(get_DisabledStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter())).then_mmfvo6_k$(toModifier_1(size_0._v, $composer_0, 14 & $dirty >> 15));
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp;
      if (!(colorPalette_0._v == null)) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var colorPalette_1 = ensureNotNull(colorPalette_0._v);
        var isDark = Companion_getInstance_11().get_current_2iudd5_k$($composer_0, 6).get_isDark_evw91l_k$();
        var isBrightColor = get_isBright(isDark ? colorPalette_1.get__200_wogdh8_k$() : colorPalette_1.get__500_wogfpb_k$());
        tmp = setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), ButtonVars_getInstance().get_Color_i88tui_k$(), get_color(toPalette(isBrightColor ? ColorMode_LIGHT_getInstance() : ColorMode_DARK_getInstance()))), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), isDark ? colorPalette_1.get__200_wogdh8_k$() : colorPalette_1.get__500_wogfpb_k$()), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$(), isDark ? colorPalette_1.get__300_woge7x_k$() : colorPalette_1.get__600_woggg0_k$()), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$(), isDark ? colorPalette_1.get__400_wogeym_k$() : colorPalette_1.get__700_wogh6p_k$());
      } else {
        tmp = Companion_getInstance();
      }
      var tmp0_group = tmp0.then_mmfvo6_k$(tmp);
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp2 = setVariable(tmp0_group, ButtonVars_getInstance().get_BackgroundFocusColor_4vb99e_k$(), focusBorderColor_0._v).then_mmfvo6_k$(modifier_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_0;
      if (enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var tmp_1 = Companion_getInstance();
        $composer_0.startReplaceGroup_5hh8aj_k$(-357979783);
        var tmp0_0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = tmp0_0.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
          var value = Button$lambda(onClick_0);
          tmp0_0.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0_group_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_0 = onClick(tmp_1, tmp0_group_0);
      } else {
        tmp_0 = Companion_getInstance();
      }
      var tmp1_group = tmp2.then_mmfvo6_k$(tmp_0);
      $composer_0.endReplaceGroup_ek144q_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(779067191);
      var tmp4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp4.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
        var value_0 = Button$lambda_0(type_0);
        tmp4.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_6 = toAttrs(tmp1_group, tmp2_group);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(934841147, true, Button$lambda_1(ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_1 || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Button.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp0_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_6, tmp0_1, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(Button$lambda_2(onClick_0, modifier_0, variant_0, type_0, enabled_0, size_0, colorPalette_0, focusBorderColor_0, ref_0, content, $changed, $default));
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.XS_1 = new ButtonSize(FontSizeVars_getInstance().get_XS_kntocc_k$().value$default_36t2hw_k$(), get_cssRem(1.5), get_cssRem(0.5));
    this.SM_1 = new ButtonSize(FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$(), get_cssRem(2), get_cssRem(0.75));
    this.MD_1 = new ButtonSize(FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$(), get_cssRem(2.5), get_cssRem(1));
    this.LG_1 = new ButtonSize(FontSizeVars_getInstance().get_LG_knton0_k$().value$default_36t2hw_k$(), get_cssRem(3), get_cssRem(1.5));
  }
  protoOf(Companion_0).get_XS_kntocc_k$ = function () {
    return this.XS_1;
  };
  protoOf(Companion_0).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_0).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_0).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_21() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_21();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_getInstance(), ButtonVars_getInstance().get_FontSize_oos3dz_k$(), fontSize), ButtonVars_getInstance().get_Height_xmnjk_k$(), height), ButtonVars_getInstance().get_PaddingHorizontal_u991sc_k$(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.base_y8uu8g_k$(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp, ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp_0, ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp_1, ButtonStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_getInstance(), ButtonVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$().value$default_36t2hw_k$()), 1.2), ButtonVars_getInstance().get_Height_xmnjk_k$().value$default_36t2hw_k$()), ButtonVars_getInstance().get_Height_xmnjk_k$().value$default_36t2hw_k$()), ButtonVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$()), Companion_getInstance_9().get_SemiBold_aid1c4_k$()), Companion_getInstance_13().get_NoWrap_21tqz8_k$()), VOID, ButtonVars_getInstance().get_PaddingHorizontal_u991sc_k$().value$default_36t2hw_k$()), Companion_getInstance_14().get_Middle_1hpdq6_k$()), get_cssRem(0.375));
    return transition_0(userSelect(border_0(tmp, ButtonStyle$lambda$lambda$lambda), Companion_getInstance_3().get_None_wo6tgh_k$()), [Companion_getInstance_2().of$default_b85k2c_k$('background-color', ButtonVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_36t2hw_k$())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.width_iqjg4l_k$(get_px(0));
    return Unit_getInstance();
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_getInstance(), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$().value$default_36t2hw_k$()), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().get_BackgroundFocusColor_4vb99e_k$().value$default_36t2hw_k$());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_getInstance(), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$().value$default_36t2hw_k$());
  }
  function Button$lambda($onClick) {
    return function (evt) {
      $onClick(evt);
      evt.stopPropagation_5qf8uy_k$();
      return Unit_getInstance();
    };
  }
  function Button$lambda_0($type) {
    return function ($this$toAttrs) {
      type($this$toAttrs, $type._v);
      return Unit_getInstance();
    };
  }
  function Button$lambda_1($ref, $content) {
    return function ($this$JbButton, $composer, $changed) {
      var $composer_0 = $composer;
      registerRefScope($this$JbButton, $ref._v, $composer_0, 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      var tmp = Center_getInstance();
      var tmp_0 = CenterVertically_getInstance();
      Row(null, tmp, tmp_0, null, $content, $composer_0, com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 9);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Button$lambda_2($onClick, $modifier, $variant, $type, $enabled, $size, $colorPalette, $focusBorderColor, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_0($onClick, $modifier._v, $variant._v, $type._v, $enabled._v, $size._v, $colorPalette._v, $focusBorderColor._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundDefaultColor_so3bvr_k$();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundFocusColor_4vb99e_k$();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundHoverColor_qkbxz2_k$();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundPressedColor_qp3aco_k$();
    }, null);
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_ColorTransitionDuration_d6ufct_k$();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.get_FontSize_oos3dz_k$();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.get_Height_xmnjk_k$();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.get_PaddingHorizontal_u991sc_k$();
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
  function Container() {
  }
  function Icon() {
  }
  function CheckboxKind() {
  }
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.BorderRadius$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.BorderWidth$delegate_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.Size$delegate_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.Spacing$delegate_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.FontSize$delegate_1 = StyleVariable('silk');
    this.IconSize$delegate_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().value$default_36t2hw_k$();
    tmp_3.FocusOutlineColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.FocusOutlineSpread$delegate_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.UncheckedBackgroundColor$delegate_1 = StyleVariable('silk');
    this.IconColor$delegate_1 = StyleVariable('silk');
    this.IconBackgroundColor$delegate_1 = StyleVariable('silk');
    this.IconBackgroundHoverColor$delegate_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().get_VeryFast_7jhf2z_k$().value$default_36t2hw_k$();
    tmp_5.TransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).get_BorderRadius_tko1mv_k$ = function () {
    return this.BorderRadius$delegate_1.getValue_fbnwi2_k$(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).get_BorderWidth_hanxcf_k$ = function () {
    return this.BorderWidth$delegate_1.getValue_fbnwi2_k$(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).get_Size_wo9w8a_k$ = function () {
    return this.Size$delegate_1.getValue_fbnwi2_k$(this, Size$factory());
  };
  protoOf(CheckboxVars).get_Spacing_4hcb0m_k$ = function () {
    return this.Spacing$delegate_1.getValue_fbnwi2_k$(this, Spacing$factory());
  };
  protoOf(CheckboxVars).get_FontSize_oos3dz_k$ = function () {
    return this.FontSize$delegate_1.getValue_fbnwi2_k$(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).get_IconSize_s3avwj_k$ = function () {
    return this.IconSize$delegate_1.getValue_fbnwi2_k$(this, IconSize$factory());
  };
  protoOf(CheckboxVars).get_FocusOutlineColor_j0f8fk_k$ = function () {
    return this.FocusOutlineColor$delegate_1.getValue_fbnwi2_k$(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).get_FocusOutlineSpread_spl6o6_k$ = function () {
    return this.FocusOutlineSpread$delegate_1.getValue_fbnwi2_k$(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).get_UncheckedBackgroundColor_cj7b3k_k$ = function () {
    return this.UncheckedBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).get_IconColor_i8bnoh_k$ = function () {
    return this.IconColor$delegate_1.getValue_fbnwi2_k$(this, IconColor$factory());
  };
  protoOf(CheckboxVars).get_IconBackgroundColor_fqf24z_k$ = function () {
    return this.IconBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).get_IconBackgroundHoverColor_gda561_k$ = function () {
    return this.IconBackgroundHoverColor$delegate_1.getValue_fbnwi2_k$(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).get_TransitionDuration_6zl6by_k$ = function () {
    return this.TransitionDuration$delegate_1.getValue_fbnwi2_k$(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.SM_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$());
    this.MD_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$());
    this.LG_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().get_LG_knton0_k$().value$default_36t2hw_k$());
  }
  protoOf(Companion_1).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_1).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_1).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_22() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_22();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_getInstance(), CheckboxVars_getInstance().get_Size_wo9w8a_k$(), boxSize), CheckboxVars_getInstance().get_IconSize_s3avwj_k$(), iconSize), CheckboxVars_getInstance().get_FontSize_oos3dz_k$(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.base_y8uu8g_k$(CheckboxStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_getInstance(), CheckboxVars_getInstance().get_Spacing_4hcb0m_k$().value$default_36t2hw_k$()), Companion_getInstance_3().get_None_wo6tgh_k$()), CheckboxVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$()), Companion_getInstance_1().get_Pointer_m64vg4_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_15();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$Keyframes) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$Keyframes.from_1urvt_k$(CheckboxEnabledAnim$lambda$lambda);
    $this$Keyframes.to_txs6jq_k$(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_getInstance();
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_getInstance(), 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_getInstance(), 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.base_y8uu8g_k$(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_getInstance(), CheckboxVars_getInstance().get_IconSize_s3avwj_k$().value$default_36t2hw_k$()), CheckboxVars_getInstance().get_Size_wo9w8a_k$().value$default_36t2hw_k$());
    var tmp_0 = CheckboxVars_getInstance().get_BorderWidth_hanxcf_k$().value$default_36t2hw_k$();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(borderRadius(border(tmp, tmp_0, 'solid', CheckboxVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$()), CheckboxVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), Companion_getInstance_2().group$default_mpvkys_k$(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().get_UncheckedBackgroundColor_cj7b3k_k$().value$default_36t2hw_k$());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.base_y8uu8g_k$(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_getInstance(), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$().value$default_36t2hw_k$());
    return border_0(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.color_lesdgv_k$(CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_getInstance(), CheckboxVars_getInstance().get_Size_wo9w8a_k$().value$default_36t2hw_k$()), CheckboxVars_getInstance().get_IconColor_i8bnoh_k$().value$default_36t2hw_k$());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.base_y8uu8g_k$(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.cssRule_fe6cwq_k$(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_getInstance();
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow_0(Companion_getInstance(), VOID, VOID, VOID, CheckboxVars_getInstance().get_FocusOutlineSpread_spl6o6_k$().value$default_36t2hw_k$(), CheckboxVars_getInstance().get_FocusOutlineColor_j0f8fk_k$().value$default_36t2hw_k$());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_getInstance(), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$(), CheckboxVars_getInstance().get_IconBackgroundHoverColor_gda561_k$().value$default_36t2hw_k$());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.get_BorderRadius_tko1mv_k$();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.get_BorderWidth_hanxcf_k$();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.get_Size_wo9w8a_k$();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.get_Spacing_4hcb0m_k$();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.get_FontSize_oos3dz_k$();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.get_IconSize_s3avwj_k$();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.get_FocusOutlineColor_j0f8fk_k$();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.get_FocusOutlineSpread_spl6o6_k$();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_UncheckedBackgroundColor_cj7b3k_k$();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.get_IconColor_i8bnoh_k$();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_IconBackgroundColor_fqf24z_k$();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_IconBackgroundHoverColor_gda561_k$();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_TransitionDuration_6zl6by_k$();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_getInstance(), VOID, CenterVertically_getInstance());
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_getInstance_5();
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
  function InputKind() {
  }
  function InputGroupKind() {
  }
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.BorderRadius$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().value$default_36t2hw_k$();
    tmp_0.BorderFocusColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.BorderHoverColor$delegate_1 = StyleVariable('silk');
    this.BorderInvalidColor$delegate_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
    tmp_1.ColorTransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.FilledColor$delegate_1 = StyleVariable('silk');
    this.FilledHoverColor$delegate_1 = StyleVariable('silk');
    this.FilledFocusColor$delegate_1 = StyleVariable('silk');
    this.FontSize$delegate_1 = StyleVariable('silk');
    this.Height$delegate_1 = StyleVariable('silk');
    this.Padding$delegate_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().value$default_36t2hw_k$();
    tmp_2.PlaceholderOpacity$delegate_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().value$default_36t2hw_k$();
    tmp_3.PlaceholderColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.InsetLeftWidth$delegate_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.InsetRightWidth$delegate_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, BorderColor$factory_1());
  };
  protoOf(InputVars).get_BorderRadius_tko1mv_k$ = function () {
    return this.BorderRadius$delegate_1.getValue_fbnwi2_k$(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).get_BorderFocusColor_guhvfk_k$ = function () {
    return this.BorderFocusColor$delegate_1.getValue_fbnwi2_k$(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).get_BorderHoverColor_4uita4_k$ = function () {
    return this.BorderHoverColor$delegate_1.getValue_fbnwi2_k$(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).get_BorderInvalidColor_3xft0h_k$ = function () {
    return this.BorderInvalidColor$delegate_1.getValue_fbnwi2_k$(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).get_ColorTransitionDuration_d6ufct_k$ = function () {
    return this.ColorTransitionDuration$delegate_1.getValue_fbnwi2_k$(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).get_FilledColor_27lcwo_k$ = function () {
    return this.FilledColor$delegate_1.getValue_fbnwi2_k$(this, FilledColor$factory());
  };
  protoOf(InputVars).get_FilledHoverColor_z8l4su_k$ = function () {
    return this.FilledHoverColor$delegate_1.getValue_fbnwi2_k$(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).get_FilledFocusColor_e3i8gm_k$ = function () {
    return this.FilledFocusColor$delegate_1.getValue_fbnwi2_k$(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).get_FontSize_oos3dz_k$ = function () {
    return this.FontSize$delegate_1.getValue_fbnwi2_k$(this, FontSize$factory_1());
  };
  protoOf(InputVars).get_Height_xmnjk_k$ = function () {
    return this.Height$delegate_1.getValue_fbnwi2_k$(this, Height$factory_0());
  };
  protoOf(InputVars).get_Padding_fgkl54_k$ = function () {
    return this.Padding$delegate_1.getValue_fbnwi2_k$(this, Padding$factory());
  };
  protoOf(InputVars).get_PlaceholderOpacity_y4d5tt_k$ = function () {
    return this.PlaceholderOpacity$delegate_1.getValue_fbnwi2_k$(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).get_PlaceholderColor_fqs0o7_k$ = function () {
    return this.PlaceholderColor$delegate_1.getValue_fbnwi2_k$(this, PlaceholderColor$factory());
  };
  protoOf(InputVars).get_InsetLeftWidth_8un9fv_k$ = function () {
    return this.InsetLeftWidth$delegate_1.getValue_fbnwi2_k$(this, InsetLeftWidth$factory());
  };
  protoOf(InputVars).get_InsetRightWidth_1gxxby_k$ = function () {
    return this.InsetRightWidth$delegate_1.getValue_fbnwi2_k$(this, InsetRightWidth$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().get_Padding_fgkl54_k$().value$default_36t2hw_k$();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Input_0(type, value, onValueChange, modifier, variant, placeholder, size, enabled, valid, required, readOnly, spellCheck, autoComplete, onCommit, placeholderColor, focusBorderColor, invalidBorderColor, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Input_kt__b04mg8();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placeholder_0 = {_v: placeholder};
    var size_0 = {_v: size};
    var enabled_0 = {_v: enabled};
    var valid_0 = {_v: valid};
    var required_0 = {_v: required};
    var readOnly_0 = {_v: readOnly};
    var spellCheck_0 = {_v: spellCheck};
    var autoComplete_0 = {_v: autoComplete};
    var onCommit_0 = {_v: onCommit};
    var placeholderColor_0 = {_v: placeholderColor};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var invalidBorderColor_0 = {_v: invalidBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1251456891);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(value) : $composer_0.changedInstance_s1wkiy_k$(value)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onValueChange) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && (($changed & 32768) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placeholder_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.changed_ga7h3f_k$(size_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(enabled_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(valid_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(required_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_jpyyrz_k$(readOnly_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_jpyyrz_k$(spellCheck_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(autoComplete_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(onCommit_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(placeholderColor_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(focusBorderColor_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(invalidBorderColor_0._v) ? 1048576 : 524288);
    if (!(($default & 131072) === 0))
      $dirty1 = $dirty1 | 12582912;
    else if (($changed1 & 12582912) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 16777216) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 8388608 : 4194304);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 4793491) === 4793490) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 8) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 16) === 0)) {
          variant_0._v = InputDefaults_getInstance().Variant_1;
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          size_0._v = InputDefaults_getInstance().Size_1;
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 256) === 0)) {
          valid_0._v = true;
        }
        if (!(($default & 512) === 0)) {
          required_0._v = false;
        }
        if (!(($default & 1024) === 0)) {
          readOnly_0._v = false;
        }
        if (!(($default & 2048) === 0)) {
          spellCheck_0._v = false;
        }
        if (!(($default & 4096) === 0)) {
          autoComplete_0._v = null;
        }
        if (!(($default & 8192) === 0)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1585733483);
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = this_0.rememberedValue_4dg93v_k$();
          var tmp;
          if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
            // Inline function 'com.varabyte.kobweb.silk.components.forms.Input.<anonymous>' call
            var value_0 = Input$lambda;
            this_0.updateRememberedValue_l1wh71_k$(value_0);
            tmp = value_0;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          onCommit_0._v = tmp0_group;
        }
        if (!(($default & 16384) === 0)) {
          placeholderColor_0._v = null;
        }
        if (!(($default & 32768) === 0)) {
          focusBorderColor_0._v = null;
        }
        if (!(($default & 65536) === 0)) {
          invalidBorderColor_0._v = null;
        }
        if (!(($default & 131072) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      _Input(type, value, onValueChange, toModifier_1(size_0._v, $composer_0, 14 & $dirty >> 18).then_mmfvo6_k$(modifier_0._v), variant_0._v, placeholder_0._v, enabled_0._v, valid_0._v, required_0._v, readOnly_0._v, spellCheck_0._v, autoComplete_0._v, onCommit_0._v, placeholderColor_0._v, focusBorderColor_0._v, invalidBorderColor_0._v, ref_0._v, $composer_0, 14 & $dirty | (8 & $dirty >> 3) << 3 | 112 & $dirty | 896 & $dirty | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 12 | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 14 & $dirty1 >> 3 | 112 & $dirty1 >> 3 | 896 & $dirty1 >> 3 | 7168 & $dirty1 >> 3 | 57344 & $dirty1 >> 3 | 458752 & $dirty1 >> 3 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 18 | 3670016 & $dirty1 >> 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Input$lambda_0(type, value, onValueChange, modifier_0, variant_0, placeholder_0, size_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.XS_1 = new InputSize(FontSizeVars_getInstance().get_XS_kntocc_k$().value$default_36t2hw_k$(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().get_XS_kntocc_k$().value$default_36t2hw_k$());
    this.SM_1 = new InputSize(FontSizeVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().get_SM_kntogt_k$().value$default_36t2hw_k$());
    this.MD_1 = new InputSize(FontSizeVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$());
    this.LG_1 = new InputSize(FontSizeVars_getInstance().get_LG_knton0_k$().value$default_36t2hw_k$(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().get_MD_kntom8_k$().value$default_36t2hw_k$());
  }
  protoOf(Companion_2).get_XS_kntocc_k$ = function () {
    return this.XS_1;
  };
  protoOf(Companion_2).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_2).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_2).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_23() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_23();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_getInstance(), InputVars_getInstance().get_FontSize_oos3dz_k$(), fontSize), InputVars_getInstance().get_Height_xmnjk_k$(), height), InputVars_getInstance().get_Padding_fgkl54_k$(), padding), InputVars_getInstance().get_BorderRadius_tko1mv_k$(), borderRadius), VOID, this);
  }
  function InputDefaults() {
    InputDefaults_instance = this;
    this.Valid_1 = true;
    this.Enabled_1 = true;
    this.ReadOnly_1 = false;
    this.Required_1 = false;
    this.SpellCheck_1 = false;
    this.Size_1 = Companion_getInstance_23().MD_1;
    this.Variant_1 = get_OutlinedInputVariant();
  }
  protoOf(InputDefaults).get_Valid_iifz5f_k$ = function () {
    return this.Valid_1;
  };
  protoOf(InputDefaults).get_Enabled_26c20o_k$ = function () {
    return this.Enabled_1;
  };
  protoOf(InputDefaults).get_ReadOnly_py2dzf_k$ = function () {
    return this.ReadOnly_1;
  };
  protoOf(InputDefaults).get_Required_xslitk_k$ = function () {
    return this.Required_1;
  };
  protoOf(InputDefaults).get_SpellCheck_cpmys7_k$ = function () {
    return this.SpellCheck_1;
  };
  protoOf(InputDefaults).get_Size_wo9w8a_k$ = function () {
    return this.Size_1;
  };
  protoOf(InputDefaults).get_Variant_wpmdto_k$ = function () {
    return this.Variant_1;
  };
  var InputDefaults_instance;
  function InputDefaults_getInstance() {
    if (InputDefaults_instance == null)
      new InputDefaults();
    return InputDefaults_instance;
  }
  function _Input(type, value, onValueChange, modifier, variant, placeholder, enabled, valid, required, readOnly, spellCheck, autoComplete, onCommit, placeholderColor, focusBorderColor, invalidBorderColor, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Input_kt__b04mg8();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placeholder_0 = {_v: placeholder};
    var enabled_0 = {_v: enabled};
    var valid_0 = {_v: valid};
    var required_0 = {_v: required};
    var readOnly_0 = {_v: readOnly};
    var spellCheck_0 = {_v: spellCheck};
    var autoComplete_0 = {_v: autoComplete};
    var onCommit_0 = {_v: onCommit};
    var placeholderColor_0 = {_v: placeholderColor};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var invalidBorderColor_0 = {_v: invalidBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-484912825);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(type) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(value) : $composer_0.changedInstance_s1wkiy_k$(value)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onValueChange) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placeholder_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(enabled_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(valid_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(required_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(readOnly_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_jpyyrz_k$(spellCheck_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(autoComplete_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(onCommit_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(placeholderColor_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(focusBorderColor_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(invalidBorderColor_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 2097152) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 1048576 : 524288);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 599187) === 599186) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 8) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 16) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        placeholder_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        enabled_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        valid_0._v = true;
      }
      if (!(($default & 256) === 0)) {
        required_0._v = false;
      }
      if (!(($default & 512) === 0)) {
        readOnly_0._v = false;
      }
      if (!(($default & 1024) === 0)) {
        spellCheck_0._v = false;
      }
      if (!(($default & 2048) === 0)) {
        autoComplete_0._v = null;
      }
      if (!(($default & 4096) === 0)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-789462300);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
          var value_0 = _Input$lambda;
          this_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp = value_0;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        onCommit_0._v = tmp0_group;
      }
      if (!(($default & 8192) === 0)) {
        placeholderColor_0._v = null;
      }
      if (!(($default & 16384) === 0)) {
        focusBorderColor_0._v = null;
      }
      if (!(($default & 32768) === 0)) {
        invalidBorderColor_0._v = null;
      }
      if (!(($default & 65536) === 0)) {
        ref_0._v = null;
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-789455606);
      if (!(ref_0._v == null)) {
        var tmp_1 = Companion_getInstance();
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        Companion_getInstance_7();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = toAttrs(display(tmp_1, 'none'));
        // Inline function 'kotlin.run' call
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-419770335, true, _Input$lambda_0(ref_0), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_7(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0, $composer_0, 48, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_5 = toModifier(get_InputStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3);
      var tmp0_safe_receiver = placeholderColor_0._v;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toModifier_2(tmp0_safe_receiver);
      var tmp3 = setVariable(setVariable(tmp_5.then_mmfvo6_k$(tmp1_elvis_lhs == null ? Companion_getInstance() : tmp1_elvis_lhs), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$(), focusBorderColor_0._v), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$(), invalidBorderColor_0._v);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_6;
      if (!valid_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        tmp_6 = setVariable(ariaInvalid(Companion_getInstance()), InputVars_getInstance().get_BorderColor_hljtgy_k$(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
      } else {
        tmp_6 = Companion_getInstance();
      }
      var tmp5 = tmp3.then_mmfvo6_k$(tmp_6);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_7;
      if (!enabled_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        tmp_7 = ariaDisabled(Companion_getInstance());
      } else {
        tmp_7 = Companion_getInstance();
      }
      var tmp7 = tmp5.then_mmfvo6_k$(tmp_7);
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var tmp_8;
      if (required_0._v) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        tmp_8 = ariaRequired(Companion_getInstance());
      } else {
        tmp_8 = Companion_getInstance();
      }
      var tmp_9 = tmp7.then_mmfvo6_k$(tmp_8).then_mmfvo6_k$(modifier_0._v);
      $composer_0.startReplaceGroup_5hh8aj_k$(-789429692);
      var tmp9 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!(!!(!!(!!(!!(!!(!!(!!(!!((($dirty & 112) === 32 || (!(($dirty & 64) === 0) && $composer_0.changedInstance_s1wkiy_k$(value))) | ($dirty & 458752) === 131072) | ($dirty & 3670016) === 1048576) | ($dirty & 1879048192) === 536870912) | ($dirty & 234881024) === 67108864) | ($dirty1 & 14) === 4) | $composer_0.changedInstance_s1wkiy_k$(autoComplete_0._v)) | ($dirty & 896) === 256) | $composer_0.changedInstance_s1wkiy_k$(type)) | ($dirty & 29360128) === 8388608) | ($dirty1 & 896) === 256);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp9.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (invalid_0 || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        var value_2 = _Input$lambda_1(value, placeholder_0, enabled_0, readOnly_0, required_0, spellCheck_0, autoComplete_0, onValueChange, type, valid_0, onCommit_0);
        tmp9.updateRememberedValue_l1wh71_k$(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = it_1;
      }
      var tmp_11 = tmp_10;
      var tmp1_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Input(type, toAttrs(tmp_9, tmp1_group), $composer_0, 14 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(_Input$lambda_2(type, value, onValueChange, modifier_0, variant_0, placeholder_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  function toModifier_2(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    return setVariable_0(setVariable(Companion_getInstance(), InputVars_getInstance().get_PlaceholderColor_fqs0o7_k$(), _this__u8e3s4.get_color_ipu8u2_k$()), InputVars_getInstance().get_PlaceholderOpacity_y4d5tt_k$(), _this__u8e3s4.get_opacity_jowogu_k$());
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border(tmp_1, tmp_2, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.base_y8uu8g_k$(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, InputStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_getInstance(), Companion_getInstance_16().get_None_wo6tgh_k$()), get_ColorVar().value$default_36t2hw_k$()), InputVars_getInstance().get_Height_xmnjk_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_FontSize_oos3dz_k$().value$default_36t2hw_k$()), Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition(border(tmp_1, tmp_2, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), Companion_getInstance_2().group$default_mpvkys_k$(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().get_ColorTransitionDuration_d6ufct_k$().value$default_36t2hw_k$()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_getInstance(), InputVars_getInstance().get_PlaceholderOpacity_y4d5tt_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_PlaceholderColor_fqs0o7_k$().value$default_36t2hw_k$());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_y8uu8g_k$(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp, OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_0, OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_1, OutlinedInputVariant$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow_0(border(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_getInstance()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', InputVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border_0(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.color_lesdgv_k$(InputVars_getInstance().get_BorderHoverColor_4uita4_k$().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_getInstance(), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_y8uu8g_k$(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp, FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp_0, FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_1, FilledInputVariant$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_getInstance()), InputVars_getInstance().get_FilledColor_27lcwo_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_getInstance(), InputVars_getInstance().get_FilledHoverColor_z8l4su_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_getInstance(), InputVars_getInstance().get_FilledFocusColor_e3i8gm_k$().value$default_36t2hw_k$()), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_36t2hw_k$());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.color_lesdgv_k$($color);
      return Unit_getInstance();
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.base_y8uu8g_k$(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    $this$addVariant.invoke_9o9x0o_k$(tmp, FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_0, FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).plus_99tjwk_k$(not($this$addVariant, [get_disabled($this$addVariant)]));
    $this$addVariant.invoke_9o9x0o_k$(tmp_1, FlushedInputVariant$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow_0(border_0(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$().value$default_36t2hw_k$());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_getInstance();
    return border_0(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.color_lesdgv_k$(InputVars_getInstance().get_BorderHoverColor_4uita4_k$().value$default_36t2hw_k$());
    return Unit_getInstance();
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_getInstance(), InputVars_getInstance().get_BorderFocusColor_guhvfk_k$().value$default_36t2hw_k$());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.color_lesdgv_k$($color);
      return Unit_getInstance();
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_getInstance();
  }
  function Input$lambda() {
    _init_properties_Input_kt__b04mg8();
    return Unit_getInstance();
  }
  function Input$lambda_0($type, $value, $onValueChange, $modifier, $variant, $placeholder, $size, $enabled, $valid, $required, $readOnly, $spellCheck, $autoComplete, $onCommit, $placeholderColor, $focusBorderColor, $invalidBorderColor, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Input_0($type, $value, $onValueChange, $modifier._v, $variant._v, $placeholder._v, $size._v, $enabled._v, $valid._v, $required._v, $readOnly._v, $spellCheck._v, $autoComplete._v, $onCommit._v, $placeholderColor._v, $focusBorderColor._v, $invalidBorderColor._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function _Input$lambda() {
    _init_properties_Input_kt__b04mg8();
    return Unit_getInstance();
  }
  function _Input$lambda$lambda(it) {
    _init_properties_Input_kt__b04mg8();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
  }
  function _Input$lambda_0($ref) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $ref._v;
      $composer_0.startReplaceGroup_5hh8aj_k$(1429744071);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>.<anonymous>' call
        var value = _Input$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      registerRefScope_0($this$Div, tmp, tmp0_group, $composer_0, 384 | 14 & $changed | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function _Input$lambda$lambda_0($onValueChange, $type) {
    return function (evt) {
      $onValueChange($type.inputValue_qots9j_k$(evt.get_nativeEvent_skldba_k$()));
      return Unit_getInstance();
    };
  }
  function _Input$lambda$lambda_1($valid, $onCommit) {
    return function (evt) {
      var tmp;
      if ($valid._v && evt.get_code_wok7xy_k$() === 'Enter') {
        evt.preventDefault_xs6po9_k$();
        evt.stopPropagation_5qf8uy_k$();
        tmp = $onCommit._v();
      }
      return Unit_getInstance();
    };
  }
  function _Input$lambda_1($value, $placeholder, $enabled, $readOnly, $required, $spellCheck, $autoComplete, $onValueChange, $type, $valid, $onCommit) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($value == null)) {
        var tmp0_subject = $value;
        if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false)
          $this$toAttrs.value_hphtnt_k$($value);
        else {
          if (isNumber(tmp0_subject))
            $this$toAttrs.value_9pbxtm_k$($value);
          else {
            if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false)
              $this$toAttrs.checked_fr7msi_k$($value);
            else {
              if (!(tmp0_subject instanceof Unit)) {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected `Input` value type: ' + toString(getKClassFromExpression($value));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
        tmp = Unit_getInstance();
      }
      var tmp1_safe_receiver = $placeholder._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>.<anonymous>' call
        placeholder($this$toAttrs, tmp1_safe_receiver);
      }
      var tmp_0;
      if (!$enabled._v) {
        disabled($this$toAttrs);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if ($readOnly._v) {
        readOnly($this$toAttrs);
        tmp_1 = Unit_getInstance();
      }
      var tmp_2;
      if ($required._v) {
        required($this$toAttrs);
        tmp_2 = Unit_getInstance();
      }
      $this$toAttrs.spellCheck_hp5v6j_k$($spellCheck._v);
      var tmp2_safe_receiver = $autoComplete._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>.<anonymous>' call
        autoComplete($this$toAttrs, tmp2_safe_receiver);
      }
      $this$toAttrs.onInput_qzb0am_k$(_Input$lambda$lambda_0($onValueChange, $type));
      $this$toAttrs.onKeyUp_g6q8ee_k$(_Input$lambda$lambda_1($valid, $onCommit));
      return Unit_getInstance();
    };
  }
  function _Input$lambda_2($type, $value, $onValueChange, $modifier, $variant, $placeholder, $enabled, $valid, $required, $readOnly, $spellCheck, $autoComplete, $onCommit, $placeholderColor, $focusBorderColor, $invalidBorderColor, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      _Input($type, $value, $onValueChange, $modifier._v, $variant._v, $placeholder._v, $enabled._v, $valid._v, $required._v, $readOnly._v, $spellCheck._v, $autoComplete._v, $onCommit._v, $placeholderColor._v, $focusBorderColor._v, $invalidBorderColor._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.get_BorderRadius_tko1mv_k$();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderFocusColor_guhvfk_k$();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderHoverColor_4uita4_k$();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderInvalidColor_3xft0h_k$();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_ColorTransitionDuration_d6ufct_k$();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.get_FilledColor_27lcwo_k$();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.get_FilledHoverColor_z8l4su_k$();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_FilledFocusColor_e3i8gm_k$();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.get_FontSize_oos3dz_k$();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.get_Height_xmnjk_k$();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.get_Padding_fgkl54_k$();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.get_PlaceholderOpacity_y4d5tt_k$();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.get_PlaceholderColor_fqs0o7_k$();
    }, null);
  }
  function InsetLeftWidth$factory() {
    return getPropertyCallableRef('InsetLeftWidth', 1, KProperty1, function (receiver) {
      return receiver.get_InsetLeftWidth_8un9fv_k$();
    }, null);
  }
  function InsetRightWidth$factory() {
    return getPropertyCallableRef('InsetRightWidth', 1, KProperty1, function (receiver) {
      return receiver.get_InsetRightWidth_1gxxby_k$();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_1(size(border(Companion_getInstance(), get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_getInstance_4().get_Hidden_viqel_k$()), Companion_getInstance_13().get_NoWrap_21tqz8_k$());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      Companion_getInstance_15();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_getInstance_5();
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
  function Track() {
  }
  function Thumb() {
  }
  function SwitchKind() {
  }
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.BorderRadius$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.TrackWidth$delegate_1 = StyleVariable('silk');
    this.TrackHeight$delegate_1 = StyleVariable('silk');
    this.TrackPadding$delegate_1 = StyleVariable('silk');
    this.TrackBackgroundColor$delegate_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().value$default_36t2hw_k$();
    tmp_0.FocusColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.ThumbOffset$delegate_1 = StyleVariable('silk');
    this.ThumbColor$delegate_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().get_Fast_wo1fb9_k$().value$default_36t2hw_k$();
    tmp_1.TransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).get_BorderRadius_tko1mv_k$ = function () {
    return this.BorderRadius$delegate_1.getValue_fbnwi2_k$(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).get_TrackWidth_vulqlg_k$ = function () {
    return this.TrackWidth$delegate_1.getValue_fbnwi2_k$(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).get_TrackHeight_e8ng3b_k$ = function () {
    return this.TrackHeight$delegate_1.getValue_fbnwi2_k$(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).get_TrackPadding_t5kbzj_k$ = function () {
    return this.TrackPadding$delegate_1.getValue_fbnwi2_k$(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).get_TrackBackgroundColor_6g6jkd_k$ = function () {
    return this.TrackBackgroundColor$delegate_1.getValue_fbnwi2_k$(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).get_FocusColor_4uzwmk_k$ = function () {
    return this.FocusColor$delegate_1.getValue_fbnwi2_k$(this, FocusColor$factory());
  };
  protoOf(SwitchVars).get_ThumbOffset_629rpc_k$ = function () {
    return this.ThumbOffset$delegate_1.getValue_fbnwi2_k$(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).get_ThumbColor_g0t1d6_k$ = function () {
    return this.ThumbColor$delegate_1.getValue_fbnwi2_k$(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).get_TransitionDuration_6zl6by_k$ = function () {
    return this.TransitionDuration$delegate_1.getValue_fbnwi2_k$(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.SM_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.MD_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.LG_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  protoOf(Companion_3).get_SM_kntogt_k$ = function () {
    return this.SM_1;
  };
  protoOf(Companion_3).get_MD_kntom8_k$ = function () {
    return this.MD_1;
  };
  protoOf(Companion_3).get_LG_knton0_k$ = function () {
    return this.LG_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_24() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_24();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_getInstance(), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$(), width), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$(), height), SwitchVars_getInstance().get_TrackPadding_t5kbzj_k$(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_15();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.base_y8uu8g_k$(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).plus_99tjwk_k$(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    $this$CssStyle.invoke_9o9x0o_k$(tmp, SwitchTrackStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition_0(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_getInstance(), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackWidth_vulqlg_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackPadding_t5kbzj_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_TrackBackgroundColor_6g6jkd_k$().value$default_36t2hw_k$()), [Companion_getInstance_2().of$default_b85k2c_k$('background-color', SwitchVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$())]), Companion_getInstance_17().get_ContentBox_h63h2z_k$());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_getInstance(), Companion_getInstance_1().get_Pointer_m64vg4_k$());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.base_y8uu8g_k$(SwitchInputVariant$lambda$lambda);
    $this$addVariant.cssRule_fe6cwq_k$(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_getInstance();
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow_0(Companion_getInstance(), VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().get_FocusColor_4uzwmk_k$().value$default_36t2hw_k$());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition_0(translateX(backgroundColor(borderRadius(size(Companion_getInstance(), SwitchVars_getInstance().get_TrackHeight_e8ng3b_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_BorderRadius_tko1mv_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_ThumbColor_g0t1d6_k$().value$default_36t2hw_k$()), SwitchVars_getInstance().get_ThumbOffset_629rpc_k$().value$default_36t2hw_k$()), [Companion_getInstance_2().of$default_b85k2c_k$('translate', SwitchVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.get_BorderRadius_tko1mv_k$();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.get_TrackWidth_vulqlg_k$();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.get_TrackHeight_e8ng3b_k$();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.get_TrackPadding_t5kbzj_k$();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_TrackBackgroundColor_6g6jkd_k$();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.get_FocusColor_4uzwmk_k$();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.get_ThumbOffset_629rpc_k$();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.get_ThumbColor_g0t1d6_k$();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.get_TransitionDuration_6zl6by_k$();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_getInstance_5();
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_getInstance(), -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_getInstance_5();
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
  function CanvasKind() {
  }
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_getInstance();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1551753013);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      createIcon(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$CloseIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576, 3);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(CloseIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$CloseIconKt$lambda_1$lambda_40ptbb($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1010262870);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$CloseIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$CloseIconKt$lambda_1$lambda$lambda_1m3jx8;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Line($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(1010266038);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$CloseIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$CloseIconKt$lambda_1$lambda$lambda_1m3jx8_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Line($this$createIcon, tmp1_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$CloseIconKt$lambda_1$lambda$lambda_1m3jx8($this$Line) {
    $this$Line.x1_oqfh9a_k$(1);
    $this$Line.x2_mok5q7_k$(23);
    $this$Line.y1_w5klst_k$(1);
    $this$Line.y2_u3pa9q_k$(23);
    return Unit_getInstance();
  }
  function ComposableSingletons$CloseIconKt$lambda_1$lambda$lambda_1m3jx8_0($this$Line) {
    $this$Line.x1_oqfh9a_k$(23);
    $this$Line.x2_mok5q7_k$(1);
    $this$Line.y1_w5klst_k$(1);
    $this$Line.y2_u3pa9q_k$(23);
    return Unit_getInstance();
  }
  function ComposableSingletons$CloseIconKt() {
    ComposableSingletons$CloseIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-1208133225, false, ComposableSingletons$CloseIconKt$lambda_1$lambda_40ptbb));
  }
  protoOf(ComposableSingletons$CloseIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$CloseIconKt_instance;
  function ComposableSingletons$CloseIconKt_getInstance() {
    if (ComposableSingletons$CloseIconKt_instance == null)
      new ComposableSingletons$CloseIconKt();
    return ComposableSingletons$CloseIconKt_instance;
  }
  function CloseIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      CloseIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ExclaimIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1482883947);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$ExclaimIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ExclaimIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$ExclaimIconKt$lambda_1$lambda_dh78d4($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-16435893);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$ExclaimIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$ExclaimIconKt$lambda_1$lambda$lambda_mq5g43;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$ExclaimIconKt$lambda_1$lambda$lambda_mq5g43($this$Path) {
    $this$Path.d_e5qqiu_k$('M 0 1.75 C 0 0.784 0.784 0 1.75 0 h 12.5 C 15.216 0 16 0.784 16 1.75 v 9.5 A 1.75 1.75 0 0 1 14.25 13 H 8.06 l -2.573 2.573 A 1.458 1.458 0 0 1 3 14.543 V 13 H 1.75 A 1.75 1.75 0 0 1 0 11.25 Z m 1.75 -0.25 a 0.25 0.25 0 0 0 -0.25 0.25 v 9.5 c 0 0.138 0.112 0.25 0.25 0.25 h 2 a 0.75 0.75 0 0 1 0.75 0.75 v 2.19 l 2.72 -2.72 a 0.749 0.749 0 0 1 0.53 -0.22 h 6.5 a 0.25 0.25 0 0 0 0.25 -0.25 v -9.5 a 0.25 0.25 0 0 0 -0.25 -0.25 Z m 7 2.25 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 9 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$ExclaimIconKt() {
    ComposableSingletons$ExclaimIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-675482057, false, ComposableSingletons$ExclaimIconKt$lambda_1$lambda_dh78d4));
  }
  protoOf(ComposableSingletons$ExclaimIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$ExclaimIconKt_instance;
  function ComposableSingletons$ExclaimIconKt_getInstance() {
    if (ComposableSingletons$ExclaimIconKt_instance == null)
      new ComposableSingletons$ExclaimIconKt();
    return ComposableSingletons$ExclaimIconKt_instance;
  }
  function ExclaimIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      ExclaimIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function HamburgerIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2115900053);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      createIcon(null, null, new Stroke(3), toAttrs(modifier_0._v), ComposableSingletons$HamburgerIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576, 3);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HamburgerIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$HamburgerIconKt$lambda_1$lambda_m6m1s8($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    var _iterator__ex2g4s = listOf([3, 12, 21]).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var y = _iterator__ex2g4s.next_20eer_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-1855069352);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_kpusro_k$(y);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$HamburgerIconKt.lambda-1.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$HamburgerIconKt$lambda_1$lambda$lambda_5d353h(y);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Line($this$createIcon, tmp0_group, $composer_0, 14 & $changed);
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HamburgerIconKt$lambda_1$lambda$lambda_5d353h($y) {
    return function ($this$Line) {
      $this$Line.x1_oqfh9a_k$(0);
      $this$Line.x2_mok5q7_k$(23);
      $this$Line.y1_w5klst_k$($y);
      $this$Line.y2_u3pa9q_k$($y);
      return Unit_getInstance();
    };
  }
  function ComposableSingletons$HamburgerIconKt() {
    ComposableSingletons$HamburgerIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(170760759, false, ComposableSingletons$HamburgerIconKt$lambda_1$lambda_m6m1s8));
  }
  protoOf(ComposableSingletons$HamburgerIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$HamburgerIconKt_instance;
  function ComposableSingletons$HamburgerIconKt_getInstance() {
    if (ComposableSingletons$HamburgerIconKt_instance == null)
      new ComposableSingletons$HamburgerIconKt();
    return ComposableSingletons$HamburgerIconKt_instance;
  }
  function HamburgerIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      HamburgerIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function InfoIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(197779673);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$InfoIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(InfoIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$InfoIconKt$lambda_1$lambda_7lqjxh($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(657486137);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$InfoIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$InfoIconKt$lambda_1$lambda$lambda_59q3v4;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$InfoIconKt$lambda_1$lambda$lambda_59q3v4($this$Path) {
    $this$Path.d_e5qqiu_k$('M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$InfoIconKt() {
    ComposableSingletons$InfoIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-954934107, false, ComposableSingletons$InfoIconKt$lambda_1$lambda_7lqjxh));
  }
  protoOf(ComposableSingletons$InfoIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$InfoIconKt_instance;
  function ComposableSingletons$InfoIconKt_getInstance() {
    if (ComposableSingletons$InfoIconKt_instance == null)
      new ComposableSingletons$InfoIconKt();
    return ComposableSingletons$InfoIconKt_instance;
  }
  function InfoIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      InfoIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function LightbulbIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1309236181);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$LightbulbIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(LightbulbIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LightbulbIconKt$lambda_1$lambda_abne2a($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1126884965);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$LightbulbIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$LightbulbIconKt$lambda_1$lambda$lambda_r2tn8j;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$LightbulbIconKt$lambda_1$lambda$lambda_r2tn8j($this$Path) {
    $this$Path.d_e5qqiu_k$('M 8 1.5 c -2.363 0 -4 1.69 -4 3.75 c 0 0.984 0.424 1.625 0.984 2.304 l 0.214 0.253 c 0.223 0.264 0.47 0.556 0.673 0.848 c 0.284 0.411 0.537 0.896 0.621 1.49 a 0.75 0.75 0 0 1 -1.484 0.211 c -0.04 -0.282 -0.163 -0.547 -0.37 -0.847 a 8.456 8.456 0 0 0 -0.542 -0.68 c -0.084 -0.1 -0.173 -0.205 -0.268 -0.32 C 3.201 7.75 2.5 6.766 2.5 5.25 C 2.5 2.31 4.863 0 8 0 s 5.5 2.31 5.5 5.25 c 0 1.516 -0.701 2.5 -1.328 3.259 c -0.095 0.115 -0.184 0.22 -0.268 0.319 c -0.207 0.245 -0.383 0.453 -0.541 0.681 c -0.208 0.3 -0.33 0.565 -0.37 0.847 a 0.751 0.751 0 0 1 -1.485 -0.212 c 0.084 -0.593 0.337 -1.078 0.621 -1.489 c 0.203 -0.292 0.45 -0.584 0.673 -0.848 c 0.075 -0.088 0.147 -0.173 0.213 -0.253 c 0.561 -0.679 0.985 -1.32 0.985 -2.304 c 0 -2.06 -1.637 -3.75 -4 -3.75 Z M 5.75 12 h 4.5 a 0.75 0.75 0 0 1 0 1.5 h -4.5 a 0.75 0.75 0 0 1 0 -1.5 Z M 6 15.25 a 0.75 0.75 0 0 1 0.75 -0.75 h 2.5 a 0.75 0.75 0 0 1 0 1.5 h -2.5 a 0.75 0.75 0 0 1 -0.75 -0.75 Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$LightbulbIconKt() {
    ComposableSingletons$LightbulbIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(977424631, false, ComposableSingletons$LightbulbIconKt$lambda_1$lambda_abne2a));
  }
  protoOf(ComposableSingletons$LightbulbIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$LightbulbIconKt_instance;
  function ComposableSingletons$LightbulbIconKt_getInstance() {
    if (ComposableSingletons$LightbulbIconKt_instance == null)
      new ComposableSingletons$LightbulbIconKt();
    return ComposableSingletons$LightbulbIconKt_instance;
  }
  function LightbulbIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      LightbulbIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function MoonIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-24696525);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(200);
      createIcon(tmp, null, new Stroke(20), toAttrs(modifier_0._v), ComposableSingletons$MoonIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MoonIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MoonIconKt$lambda_1$lambda_kdu3y($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1648490556);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$MoonIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$MoonIconKt$lambda_1$lambda$lambda_b4alj1;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$MoonIconKt$lambda_1$lambda$lambda_b4alj1($this$Path) {
    $this$Path.d_tonr5x_k$(ComposableSingletons$MoonIconKt$lambda_1$lambda$lambda$lambda_cd2vjm);
    return Unit_getInstance();
  }
  function ComposableSingletons$MoonIconKt$lambda_1$lambda$lambda$lambda_cd2vjm($this$d) {
    $this$d.moveTo_3kg6ro_k$(175, 106.583);
    $this$d.ellipticalArc$default_j89yrk_k$(75, 75, 0, 1, 1, 93.417, 25);
    $this$d.ellipticalArc$default_j89yrk_k$(58.333, 58.333, 0, 0, 0, 175, 106.583);
    $this$d.closePath_hm2tg3_k$();
    return Unit_getInstance();
  }
  function ComposableSingletons$MoonIconKt() {
    ComposableSingletons$MoonIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-1177410305, false, ComposableSingletons$MoonIconKt$lambda_1$lambda_kdu3y));
  }
  protoOf(ComposableSingletons$MoonIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MoonIconKt_instance;
  function ComposableSingletons$MoonIconKt_getInstance() {
    if (ComposableSingletons$MoonIconKt_instance == null)
      new ComposableSingletons$MoonIconKt();
    return ComposableSingletons$MoonIconKt_instance;
  }
  function MoonIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      MoonIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function QuestionIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1830362903);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$QuestionIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576, 3);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(QuestionIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda_if12nh($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1001020366);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(1001024951);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$createIcon, tmp1_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(1001029844);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (false || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuestionIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_1;
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Circle($this$createIcon, tmp2_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs($this$Path) {
    $this$Path.strokeLineCap_j27fru_k$(SVGStrokeLineCap_Round_getInstance());
    $this$Path.d_e5qqiu_k$('M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25');
    return Unit_getInstance();
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_0($this$Path) {
    $this$Path.strokeLineCap_j27fru_k$(SVGStrokeLineCap_Round_getInstance());
    $this$Path.d_e5qqiu_k$('M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0');
    return Unit_getInstance();
  }
  function ComposableSingletons$QuestionIconKt$lambda_1$lambda$lambda_43yxbs_1($this$Circle) {
    $this$Circle.strokeMiterLimit_cvov7h_k$(10);
    $this$Circle.cx_7c4b4q_k$(12);
    $this$Circle.cy_5a8zln_k$(12);
    $this$Circle.r_4ompmx_k$(11.25);
    return Unit_getInstance();
  }
  function ComposableSingletons$QuestionIconKt() {
    ComposableSingletons$QuestionIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-1550888779, false, ComposableSingletons$QuestionIconKt$lambda_1$lambda_if12nh));
  }
  protoOf(ComposableSingletons$QuestionIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$QuestionIconKt_instance;
  function ComposableSingletons$QuestionIconKt_getInstance() {
    if (ComposableSingletons$QuestionIconKt_instance == null)
      new ComposableSingletons$QuestionIconKt();
    return ComposableSingletons$QuestionIconKt_instance;
  }
  function QuestionIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuestionIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function QuoteIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1516926133);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(300);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$QuoteIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(QuoteIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$QuoteIconKt$lambda_1$lambda_h2zdpn($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(359856060);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$QuoteIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$QuoteIconKt$lambda_1$lambda$lambda_cdcof4;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$QuoteIconKt$lambda_1$lambda$lambda_cdcof4($this$Path) {
    $this$Path.d_e5qqiu_k$('m175.6 204.73 22.19 46.49C258.61 223.15 278 189.49 278 151.18V48.78H175.6v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55zm-153.6 0 22.19 46.49c60.83-28.07 80.21-61.73 80.21-100.04V48.78H22v102.4h51.2c0 15.64-12.42 35.66-51.2 53.55z');
    return Unit_getInstance();
  }
  function ComposableSingletons$QuoteIconKt() {
    ComposableSingletons$QuoteIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1173306345, false, ComposableSingletons$QuoteIconKt$lambda_1$lambda_h2zdpn));
  }
  protoOf(ComposableSingletons$QuoteIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$QuoteIconKt_instance;
  function ComposableSingletons$QuoteIconKt_getInstance() {
    if (ComposableSingletons$QuoteIconKt_instance == null)
      new ComposableSingletons$QuoteIconKt();
    return ComposableSingletons$QuoteIconKt_instance;
  }
  function QuoteIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      QuoteIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function StopIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(637478449);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$StopIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(StopIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$StopIconKt$lambda_1$lambda_f41c6n($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-6619268);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$StopIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$StopIconKt$lambda_1$lambda$lambda_g94738;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$StopIconKt$lambda_1$lambda$lambda_g94738($this$Path) {
    $this$Path.d_e5qqiu_k$('M 4.47 0.22 A 0.749 0.749 0 0 1 5 0 h 6 c 0.199 0 0.389 0.079 0.53 0.22 l 4.25 4.25 c 0.141 0.14 0.22 0.331 0.22 0.53 v 6 a 0.749 0.749 0 0 1 -0.22 0.53 l -4.25 4.25 A 0.749 0.749 0 0 1 11 16 H 5 a 0.749 0.749 0 0 1 -0.53 -0.22 L 0.22 11.53 A 0.749 0.749 0 0 1 0 11 V 5 c 0 -0.199 0.079 -0.389 0.22 -0.53 Z m 0.84 1.28 L 1.5 5.31 v 5.38 l 3.81 3.81 h 5.38 l 3.81 -3.81 V 5.31 L 10.69 1.5 Z M 8 4 a 0.75 0.75 0 0 1 0.75 0.75 v 3.5 a 0.75 0.75 0 0 1 -1.5 0 v -3.5 A 0.75 0.75 0 0 1 8 4 Z m 0 8 a 1 1 0 1 1 0 -2 a 1 1 0 0 1 0 2 Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$StopIconKt() {
    ComposableSingletons$StopIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-515235331, false, ComposableSingletons$StopIconKt$lambda_1$lambda_f41c6n));
  }
  protoOf(ComposableSingletons$StopIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$StopIconKt_instance;
  function ComposableSingletons$StopIconKt_getInstance() {
    if (ComposableSingletons$StopIconKt_instance == null)
      new ComposableSingletons$StopIconKt();
    return ComposableSingletons$StopIconKt_instance;
  }
  function StopIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      StopIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function SunIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1078008821);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      createIcon(null, null, new Stroke(2), toAttrs(modifier_0._v), ComposableSingletons$SunIconKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 24576, 3);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SunIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda_aiqbb9($this$Group, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-328491617);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Circle($this$Group, tmp0_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(-328488368);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_0 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_0;
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$Group, tmp1_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(-328483599);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (false || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_1 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_1;
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$Group, tmp2_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(-328478794);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_5;
    if (false || it_2 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_2 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_2;
      $composer_0.updateRememberedValue_l1wh71_k$(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$Group, tmp3_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(-328473832);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_7;
    if (false || it_3 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_3 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_3;
      $composer_0.updateRememberedValue_l1wh71_k$(value_3);
      tmp_7 = value_3;
    } else {
      tmp_7 = it_3;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$Group, tmp4_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(-328468814);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_9;
    if (false || it_4 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_4 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_4;
      $composer_0.updateRememberedValue_l1wh71_k$(value_4);
      tmp_9 = value_4;
    } else {
      tmp_9 = it_4;
    }
    var tmp_10 = tmp_9;
    var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$Group, tmp5_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(-328463981);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_5 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_11;
    if (false || it_5 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_5 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_5;
      $composer_0.updateRememberedValue_l1wh71_k$(value_5);
      tmp_11 = value_5;
    } else {
      tmp_11 = it_5;
    }
    var tmp_12 = tmp_11;
    var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$Group, tmp6_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(-328459112);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_6 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_13;
    if (false || it_6 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_6 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_6;
      $composer_0.updateRememberedValue_l1wh71_k$(value_6);
      tmp_13 = value_6;
    } else {
      tmp_13 = it_6;
    }
    var tmp_14 = tmp_13;
    var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$Group, tmp7_group, $composer_0, 48 | 14 & $changed);
    $composer_0.startReplaceGroup_5hh8aj_k$(-328454088);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_7 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_15;
    if (false || it_7 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value_7 = ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_7;
      $composer_0.updateRememberedValue_l1wh71_k$(value_7);
      tmp_15 = value_7;
    } else {
      tmp_15 = it_7;
    }
    var tmp_16 = tmp_15;
    var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$Group, tmp8_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8($this$Circle) {
    $this$Circle.cx_7c4b4q_k$(12);
    $this$Circle.cy_5a8zln_k$(12);
    $this$Circle.r_4ompmx_k$(5);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_0($this$Path) {
    $this$Path.d_tonr5x_k$(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh($this$d) {
    $this$d.moveTo_3kg6ro_k$(12, 1);
    $this$d.verticalLineTo_1jzv3_k$(2, true);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_1($this$Path) {
    $this$Path.d_tonr5x_k$(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_0);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_0($this$d) {
    $this$d.moveTo_3kg6ro_k$(12, 21);
    $this$d.verticalLineTo_1jzv3_k$(2, true);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_2($this$Path) {
    $this$Path.d_tonr5x_k$(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_1);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_1($this$d) {
    $this$d.moveTo_3kg6ro_k$(4.22, 4.22);
    $this$d.lineTo_wo5zt2_k$(1.42, 1.42, true);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_3($this$Path) {
    $this$Path.d_tonr5x_k$(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_2);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_2($this$d) {
    $this$d.moveTo_3kg6ro_k$(18.36, 18.36);
    $this$d.lineTo_wo5zt2_k$(1.42, 1.42, true);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_4($this$Path) {
    $this$Path.d_tonr5x_k$(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_3);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_3($this$d) {
    $this$d.moveTo_3kg6ro_k$(1, 12);
    $this$d.horizontalLineTo_vd3o5f_k$(2, true);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_5($this$Path) {
    $this$Path.d_tonr5x_k$(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_4);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_4($this$d) {
    $this$d.moveTo_3kg6ro_k$(21, 12);
    $this$d.horizontalLineTo_vd3o5f_k$(2, true);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_6($this$Path) {
    $this$Path.d_tonr5x_k$(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_5);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_5($this$d) {
    $this$d.moveTo_3kg6ro_k$(4.22, 19.78);
    $this$d.lineTo_wo5zt2_k$(1.42, -1.42, true);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda_5zmgy8_7($this$Path) {
    $this$Path.d_tonr5x_k$(ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_6);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_1$lambda$lambda$lambda_ji5bhh_6($this$d) {
    $this$d.moveTo_3kg6ro_k$(18.36, 5.64);
    $this$d.lineTo_wo5zt2_k$(1.42, -1.42, true);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$SunIconKt$lambda_2$lambda_iaw5qy($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1179055871);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$SunIconKt.lambda-2.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$SunIconKt$lambda_2$lambda$lambda_ux6jdd;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Group($this$createIcon, tmp0_group, ComposableSingletons$SunIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 432 | 14 & $changed, 0);
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt$lambda_2$lambda$lambda_ux6jdd($this$Group) {
    $this$Group.strokeLineJoin_i3mwce_k$(SVGStrokeLineJoin_Round_getInstance());
    $this$Group.strokeLineCap_j27fru_k$(SVGStrokeLineCap_Round_getInstance());
    return Unit_getInstance();
  }
  function ComposableSingletons$SunIconKt() {
    ComposableSingletons$SunIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(214795082, false, ComposableSingletons$SunIconKt$lambda_1$lambda_aiqbb9));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(149840599, false, ComposableSingletons$SunIconKt$lambda_2$lambda_iaw5qy));
  }
  protoOf(ComposableSingletons$SunIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$SunIconKt).get_lambda_2_f9rej6_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$SunIconKt_instance;
  function ComposableSingletons$SunIconKt_getInstance() {
    if (ComposableSingletons$SunIconKt_instance == null)
      new ComposableSingletons$SunIconKt();
    return ComposableSingletons$SunIconKt_instance;
  }
  function SunIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      SunIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function WarningIcon(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1461404811);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = Companion_getInstance_18().sized$default_id0xg9_k$(16);
      createIcon(tmp, null, new Fill(), toAttrs(modifier_0._v), ComposableSingletons$WarningIconKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 24576 | com_varabyte_kobweb_compose_dom_svg_ViewBox$stableprop_getter(), 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(WarningIcon$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$WarningIconKt$lambda_1$lambda_abye4r($this$createIcon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(613140820);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
      // Inline function 'com.varabyte.kobweb.silk.components.icons.ComposableSingletons$WarningIconKt.lambda-1.<anonymous>.<anonymous>' call
      var value = ComposableSingletons$WarningIconKt$lambda_1$lambda$lambda_x4zgqo;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_0.endReplaceGroup_ek144q_k$();
    Path($this$createIcon, tmp0_group, $composer_0, 48 | 14 & $changed);
    return Unit_getInstance();
  }
  function ComposableSingletons$WarningIconKt$lambda_1$lambda$lambda_x4zgqo($this$Path) {
    $this$Path.d_e5qqiu_k$('M 6.457 1.047 c 0.659 -1.234 2.427 -1.234 3.086 0 l 6.082 11.378 A 1.75 1.75 0 0 1 14.082 15 H 1.918 a 1.75 1.75 0 0 1 -1.543 -2.575 Z m 1.763 0.707 a 0.25 0.25 0 0 0 -0.44 0 L 1.698 13.132 a 0.25 0.25 0 0 0 0.22 0.368 h 12.164 a 0.25 0.25 0 0 0 0.22 -0.368 Z m 0.53 3.996 v 2.5 a 0.75 0.75 0 0 1 -1.5 0 v -2.5 a 0.75 0.75 0 0 1 1.5 0 Z M 9 11 a 1 1 0 1 1 -2 0 a 1 1 0 0 1 2 0 Z');
    return Unit_getInstance();
  }
  function ComposableSingletons$WarningIconKt() {
    ComposableSingletons$WarningIconKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-696961193, false, ComposableSingletons$WarningIconKt$lambda_1$lambda_abye4r));
  }
  protoOf(ComposableSingletons$WarningIconKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$WarningIconKt_instance;
  function ComposableSingletons$WarningIconKt_getInstance() {
    if (ComposableSingletons$WarningIconKt_instance == null)
      new ComposableSingletons$WarningIconKt();
    return ComposableSingletons$WarningIconKt_instance;
  }
  function WarningIcon$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      WarningIcon($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1506534634);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && (($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(viewBox_0._v) : $composer_0.changedInstance_s1wkiy_k$(viewBox_0._v)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.changedInstance_s1wkiy_k$(width_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && (($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(renderStyle_0._v) : $composer_0.changedInstance_s1wkiy_k$(renderStyle_0._v)) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          viewBox_0._v = Companion_getInstance_18().sized$default_id0xg9_k$(24);
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
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(1471101172);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!($composer_0.changedInstance_s1wkiy_k$(width_0._v) | (($dirty & 14 ^ 6) > 4 && $composer_0.changedInstance_s1wkiy_k$(viewBox_0._v) || ($dirty & 6) === 4)) | (($dirty & 896 ^ 384) > 256 && $composer_0.changedInstance_s1wkiy_k$(renderStyle_0._v) || ($dirty & 384) === 256)) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>' call
        var value = createIcon$lambda(width_0, viewBox_0, renderStyle_0, attrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Svg(tmp0_group, content, $composer_0, 112 & $dirty >> 9, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(createIcon$lambda_0(viewBox_0, width_0, renderStyle_0, attrs_0, content, $changed, $default));
    }
  }
  function Fill() {
  }
  function Stroke(strokeWidth) {
    strokeWidth = strokeWidth === VOID ? null : strokeWidth;
    this.strokeWidth_1 = strokeWidth;
  }
  protoOf(Stroke).get_strokeWidth_pbded7_k$ = function () {
    return this.strokeWidth_1;
  };
  function IconRenderStyle() {
  }
  function createIcon$lambda($width, $viewBox, $renderStyle, $attrs) {
    return function ($this$Svg) {
      var tmp0_safe_receiver = $width._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        $this$Svg.width_3dri8b_k$(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $viewBox._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        $this$Svg.viewBox_s5pn86_k$(tmp1_safe_receiver.get_x_1mhr67_k$(), tmp1_safe_receiver.get_y_1mhr68_k$(), tmp1_safe_receiver.get_width_j0q4yl_k$(), tmp1_safe_receiver.get_height_e7t92o_k$());
      }
      var tmp2_safe_receiver = $renderStyle._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>' call
        var tmp;
        if (tmp2_safe_receiver instanceof Fill) {
          $this$Svg.fill_wlycpl_k$(SVGFillType_CurrentColor_getInstance());
          tmp = $this$Svg.stroke_m42ljs_k$(SVGStrokeType_None_getInstance());
        } else {
          if (tmp2_safe_receiver instanceof Stroke) {
            $this$Svg.stroke_m42ljs_k$(SVGStrokeType_CurrentColor_getInstance());
            $this$Svg.fill_wlycpl_k$(SVGFillType_None_getInstance());
            var tmp1_safe_receiver_0 = tmp2_safe_receiver.strokeWidth_1;
            var tmp_0;
            if (tmp1_safe_receiver_0 == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'com.varabyte.kobweb.silk.components.icons.createIcon.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp_0 = $this$Svg.strokeWidth_s6idgd_k$(tmp1_safe_receiver_0);
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
      return Unit_getInstance();
    };
  }
  function createIcon$lambda_0($viewBox, $width, $renderStyle, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      createIcon($viewBox._v, $width._v, $renderStyle._v, $attrs._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
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
  function HorizontalDividerKind() {
  }
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.Color$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.Length$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory_2());
  };
  protoOf(DividerVars).get_Length_yn18v_k$ = function () {
    return this.Length$delegate_1.getValue_fbnwi2_k$(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function VerticalDividerKind() {
  }
  function HorizontalDivider(modifier, variant, $composer, $changed, $default) {
    _init_properties_Divider_kt__8b5dnr();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-490066360);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        variant_0._v = null;
      }
      Hr(toAttrs(toModifier(get_HorizontalDividerStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).then_mmfvo6_k$(modifier_0._v)), $composer_0, 0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HorizontalDivider$lambda(modifier_0, variant_0, $changed, $default));
    }
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), DividerVars_getInstance().get_Length_yn18v_k$().value$default_36t2hw_k$());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_getInstance();
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), DividerVars_getInstance().get_Length_yn18v_k$().value$default_36t2hw_k$());
  }
  function HorizontalDivider$lambda($modifier, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      HorizontalDivider($modifier._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.get_Length_yn18v_k$();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_getInstance_5();
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      var tmp_0 = Companion_getInstance_5();
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
  function SimpleGridKind() {
  }
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.base_y8uu8g_k$(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = get_columnVariables().get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.get_value_j01efc_k$();
      $this$CssStyle.invoke_xzuw0j_k$(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_getInstance();
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    Companion_getInstance_7();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.size_q03g6h_k$(get_fr(1));
    return Unit_getInstance();
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.value$default_36t2hw_k$();
      $this$gridTemplateColumns.repeat_n9ti1_k$(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_getInstance();
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
      var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.get_name_woqyms_k$().toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.put_4fpzoq_k$(element, tmp$ret$2);
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
  function SurfaceKind() {
  }
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().value$default_36t2hw_k$();
    tmp.BackgroundColor$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().value$default_36t2hw_k$();
    tmp_0.Color$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundColor$factory_1());
  };
  protoOf(SurfaceVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory_3());
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2142125922);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(colorModeOverride_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.changedInstance_s1wkiy_k$(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_getInstance();
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-1737049201);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier(get_SurfaceStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).then_mmfvo6_k$(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1737043383);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 57344) === 16384 || (!(($dirty & 32768) === 0) && $composer_0.changedInstance_s1wkiy_k$(ref_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value_0 = Surface$lambda_1(ref_0, surfaceElement$delegate);
        tmp2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_5 = refScope(tmp1_group);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1615126744, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_21(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_1, tmp_2, tmp_5, tmp0, $composer_0, 3072 | 112 & $dirty >> 6 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.get_value_j01efc_k$();
  }
  function Surface$lambda_0($surfaceElement$delegate, _set____db54di) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.base_y8uu8g_k$(SurfaceStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_getInstance(), SurfaceVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), SurfaceVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_getInstance();
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.add_uaq22z_k$($ref._v);
      $this$refScope.ref_ilxxe0_k$([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_getInstance();
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.$surfaceElement_1 = $surfaceElement;
    this.$currColorMode_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Surface$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          setSilkWidgetVariables(this.$surfaceElement_1, this.$currColorMode_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.$surfaceElement_1, this.$currColorMode_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(Surface$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($surfaceElement, $content, $this_Box) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var currColorMode = Companion_getInstance_11().get_current_2iudd5_k$($composer_0, 6);
        $composer_0.startReplaceGroup_5hh8aj_k$(1829026742);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changedInstance_s1wkiy_k$($surfaceElement) | $composer_0.changed_ga7h3f_k$(currColorMode));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        LaunchedEffect(currColorMode, tmp0_group, $composer_0, 0);
        tmp = $content($this_Box, $composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Box) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        if (!($colorModeOverride._v == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-708350689);
          var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_2 = $colorModeOverride._v.provide_53xuu7_k$();
            // Inline function 'kotlin.run' call
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(-346828591, true, Surface$lambda$lambda_0(tmp0_safe_receiver, $content, $this$Box), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_1 = $composer_0;
            sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it = $composer_1.rememberedValue_4dg93v_k$();
            var tmp_3;
            if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
              // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
              $composer_1.updateRememberedValue_l1wh71_k$(value);
              tmp_3 = value;
            } else {
              tmp_3 = it;
            }
            var tmp_4 = tmp_3;
            var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            sourceInformationMarkerEnd($composer_1);
            CompositionLocalProvider(tmp_2, tmp0, $composer_0, 56);
            tmp_1 = Unit_getInstance();
          }
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-707941055);
          $content($this$Box, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
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
  function _get_defaultValue__cxgql7($this) {
    return $this.defaultValue_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  var Companion_instance_4;
  function Companion_getInstance_25() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function _get__keepOpenFlow__7i7cj9($this) {
    return $this._keepOpenFlow_1;
  }
  function _set_isActive__8i95on($this, _set____db54di) {
    $this.isActive_1 = _set____db54di;
  }
  function _get_isActive__4an5s5($this) {
    return $this.isActive_1;
  }
  function KeepPopupOpenStrategy(defaultValue) {
    Companion_getInstance_25();
    defaultValue = defaultValue === VOID ? false : defaultValue;
    this.defaultValue_1 = defaultValue;
    this._keepOpenFlow_1 = MutableStateFlow(this.defaultValue_1);
    this.isActive_1 = false;
    this.keepOpenFlow_1 = asStateFlow(this._keepOpenFlow_1);
  }
  protoOf(KeepPopupOpenStrategy).get_keepOpenFlow_bsp6yu_k$ = function () {
    return this.keepOpenFlow_1;
  };
  protoOf(KeepPopupOpenStrategy).init_2byfvu_k$ = function (popupElement) {
    this._keepOpenFlow_1.set_value_v1vabv_k$(this.defaultValue_1);
    this.onInit_7n9e9j_k$(popupElement);
    this.isActive_1 = true;
  };
  protoOf(KeepPopupOpenStrategy).onInit_7n9e9j_k$ = function (popupElement) {
    return Unit_getInstance();
  };
  protoOf(KeepPopupOpenStrategy).emitShouldKeepOpen_s81e2o_k$ = function (shouldKeepOpen) {
    if (this.isActive_1) {
      this._keepOpenFlow_1.set_value_v1vabv_k$(shouldKeepOpen);
    }
  };
  protoOf(KeepPopupOpenStrategy).reset_5u6xz3_k$ = function () {
    this.isActive_1 = false;
    this.onResetting_or93ny_k$();
    this._keepOpenFlow_1.set_value_v1vabv_k$(this.defaultValue_1);
  };
  protoOf(KeepPopupOpenStrategy).onResetting_or93ny_k$ = function () {
    return Unit_getInstance();
  };
  function never(_this__u8e3s4) {
    return new never$1();
  }
  function plus(_this__u8e3s4, other) {
    return combine(Companion_getInstance_25(), [_this__u8e3s4, other]);
  }
  function onFocus(_this__u8e3s4) {
    return new onFocus$1();
  }
  function onHover(_this__u8e3s4) {
    return new onHover$1();
  }
  function get_shouldKeepOpen(_this__u8e3s4) {
    return _this__u8e3s4.keepOpenFlow_1.get_value_j01efc_k$();
  }
  function combine(_this__u8e3s4, strategies) {
    return new combine$1(strategies);
  }
  function never$1() {
    KeepPopupOpenStrategy.call(this);
  }
  function _set_manager__87pxu0($this, _set____db54di) {
    $this.manager_1 = _set____db54di;
  }
  function _get_manager__xty870($this) {
    return $this.manager_1;
  }
  function onFocus$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.emitShouldKeepOpen_s81e2o_k$(true);
      return Unit_getInstance();
    };
  }
  function onFocus$o$onInit$lambda_0(this$0, $popupElement) {
    return function (evt) {
      var focusEvent = evt instanceof FocusEvent ? evt : THROW_CCE();
      var tmp = focusEvent.relatedTarget;
      var newFocus = tmp instanceof Node ? tmp : null;
      this$0.emitShouldKeepOpen_s81e2o_k$(!(newFocus == null) ? $popupElement.contains(newFocus) : false);
      return Unit_getInstance();
    };
  }
  function onFocus$1() {
    KeepPopupOpenStrategy.call(this);
    this.manager_1 = null;
  }
  protoOf(onFocus$1).onInit_7n9e9j_k$ = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
    this_0.addEventListener_q0srgg_k$('focusin', onFocus$o$onInit$lambda(this));
    this_0.addEventListener_q0srgg_k$('focusout', onFocus$o$onInit$lambda_0(this, popupElement));
    tmp.manager_1 = this_0;
  };
  protoOf(onFocus$1).onResetting_or93ny_k$ = function () {
    ensureNotNull(this.manager_1).clearAllListeners_1m8p17_k$();
    this.manager_1 = null;
  };
  function _set_manager__87pxu0_0($this, _set____db54di) {
    $this.manager_1 = _set____db54di;
  }
  function _get_manager__xty870_0($this) {
    return $this.manager_1;
  }
  function onHover$o$onInit$lambda(this$0) {
    return function (it) {
      this$0.emitShouldKeepOpen_s81e2o_k$(true);
      return Unit_getInstance();
    };
  }
  function onHover$o$onInit$lambda_0(this$0) {
    return function (it) {
      this$0.emitShouldKeepOpen_s81e2o_k$(false);
      return Unit_getInstance();
    };
  }
  function onHover$1() {
    KeepPopupOpenStrategy.call(this);
    this.manager_1 = null;
  }
  protoOf(onHover$1).onInit_7n9e9j_k$ = function (popupElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(popupElement);
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
    this_0.addEventListener_q0srgg_k$('mouseenter', onHover$o$onInit$lambda(this));
    this_0.addEventListener_q0srgg_k$('mouseleave', onHover$o$onInit$lambda_0(this));
    tmp.manager_1 = this_0;
  };
  protoOf(onHover$1).onResetting_or93ny_k$ = function () {
    ensureNotNull(this.manager_1).clearAllListeners_1m8p17_k$();
    this.manager_1 = null;
  };
  function combine$o$slambda($strategies, this$0, resultContinuation) {
    this.$strategies_1 = $strategies;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda).invoke_f29lti_k$ = function (it, $completion) {
    var tmp = this.create_vh5neu_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(combine$o$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_f29lti_k$((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp0 = this.$strategies_1;
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
          if (!(anyKeepOpen === this.this$0__1.keepOpenFlow_1.get_value_j01efc_k$())) {
            this.this$0__1.emitShouldKeepOpen_s81e2o_k$(anyKeepOpen);
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda).create_vh5neu_k$ = function (it, completion) {
    var i = new combine$o$slambda(this.$strategies_1, this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(combine$o$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_vh5neu_k$((!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE(), completion);
  };
  function combine$o$slambda_0($strategies, this$0, resultContinuation) {
    var i = new combine$o$slambda($strategies, this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_f29lti_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1($strategies) {
    this.$strategies_1 = $strategies;
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
      var tmp$ret$0 = item.keepOpenFlow_1;
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_0($strategies, this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1).onInit_7n9e9j_k$ = function (popupElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.$strategies_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onInit.<anonymous>' call
      element.init_2byfvu_k$(popupElement);
    }
  };
  protoOf(combine$1).onResetting_or93ny_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.$strategies_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.onResetting.<anonymous>' call
      element.reset_5u6xz3_k$();
    }
  };
  var com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable;
  var com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable;
  function Companion_5() {
    Companion_instance_5 = this;
  }
  var Companion_instance_5;
  function Companion_getInstance_26() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function _get__requestFlow__hx705v($this) {
    return $this._requestFlow_1;
  }
  function OpenClosePopupStrategy() {
    Companion_getInstance_26();
    this._requestFlow_1 = MutableStateFlow(OpenClose_CLOSE_getInstance());
    this.requestFlow_1 = asStateFlow(this._requestFlow_1);
  }
  protoOf(OpenClosePopupStrategy).get_requestFlow_wwolx0_k$ = function () {
    return this.requestFlow_1;
  };
  protoOf(OpenClosePopupStrategy).init_2byfvu_k$ = function (targetElement) {
    return Unit_getInstance();
  };
  protoOf(OpenClosePopupStrategy).reset_5u6xz3_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(OpenClosePopupStrategy).emitRequest_bf1bd6_k$ = function (request) {
    this._requestFlow_1.tryEmit_ru0jrz_k$(request);
  };
  var OpenClose_OPEN_instance;
  var OpenClose_CLOSE_instance;
  function values() {
    return [OpenClose_OPEN_getInstance(), OpenClose_CLOSE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'OPEN':
        return OpenClose_OPEN_getInstance();
      case 'CLOSE':
        return OpenClose_CLOSE_getInstance();
      default:
        OpenClose_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var OpenClose_entriesInitialized;
  function OpenClose_initEntries() {
    if (OpenClose_entriesInitialized)
      return Unit_getInstance();
    OpenClose_entriesInitialized = true;
    OpenClose_OPEN_instance = new OpenClose('OPEN', 0);
    OpenClose_CLOSE_instance = new OpenClose('CLOSE', 1);
  }
  var $ENTRIES;
  function OpenClose(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function plus_0(_this__u8e3s4, other) {
    return combine_0(Companion_getInstance_26(), [_this__u8e3s4, other]);
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
  function _set_manager__87pxu0_1($this, _set____db54di) {
    $this.manager_1 = _set____db54di;
  }
  function _get_manager__xty870_1($this) {
    return $this.manager_1;
  }
  function onFocus$o$init$lambda(this$0) {
    return function (it) {
      this$0.emitRequest_bf1bd6_k$(OpenClose_OPEN_getInstance());
      return Unit_getInstance();
    };
  }
  function onFocus$o$init$lambda_0(this$0) {
    return function (it) {
      this$0.emitRequest_bf1bd6_k$(OpenClose_CLOSE_getInstance());
      return Unit_getInstance();
    };
  }
  function onFocus$1_0() {
    OpenClosePopupStrategy.call(this);
    this.manager_1 = null;
  }
  protoOf(onFocus$1_0).init_2byfvu_k$ = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.addEventListener_q0srgg_k$('focusin', onFocus$o$init$lambda(this));
    this_0.addEventListener_q0srgg_k$('focusout', onFocus$o$init$lambda_0(this));
    if (targetElement.contains(document.activeElement)) {
      this.emitRequest_bf1bd6_k$(OpenClose_OPEN_getInstance());
    }
    tmp.manager_1 = this_0;
  };
  protoOf(onFocus$1_0).reset_5u6xz3_k$ = function () {
    ensureNotNull(this.manager_1).clearAllListeners_1m8p17_k$();
    this.manager_1 = null;
  };
  function _set_manager__87pxu0_2($this, _set____db54di) {
    $this.manager_1 = _set____db54di;
  }
  function _get_manager__xty870_2($this) {
    return $this.manager_1;
  }
  function onHover$o$init$lambda(this$0) {
    return function (it) {
      this$0.emitRequest_bf1bd6_k$(OpenClose_OPEN_getInstance());
      return Unit_getInstance();
    };
  }
  function onHover$o$init$lambda_0(this$0) {
    return function (it) {
      this$0.emitRequest_bf1bd6_k$(OpenClose_CLOSE_getInstance());
      return Unit_getInstance();
    };
  }
  function onHover$1_0() {
    OpenClosePopupStrategy.call(this);
    this.manager_1 = null;
  }
  protoOf(onHover$1_0).init_2byfvu_k$ = function (targetElement) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new EventListenerManager(targetElement);
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.addEventListener_q0srgg_k$('mouseenter', onHover$o$init$lambda(this));
    this_0.addEventListener_q0srgg_k$('mouseleave', onHover$o$init$lambda_0(this));
    if (targetElement.matches(':hover')) {
      this.emitRequest_bf1bd6_k$(OpenClose_OPEN_getInstance());
    }
    tmp.manager_1 = this_0;
  };
  protoOf(onHover$1_0).reset_5u6xz3_k$ = function () {
    ensureNotNull(this.manager_1).clearAllListeners_1m8p17_k$();
    this.manager_1 = null;
  };
  function combine$o$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$slambda_1).invoke_ign9f7_k$ = function (it, $completion) {
    var tmp = this.create_algunr_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(combine$o$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ign9f7_k$(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.this$0__1.emitRequest_bf1bd6_k$(this.it_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(combine$o$slambda_1).create_algunr_k$ = function (it, completion) {
    var i = new combine$o$slambda_1(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(combine$o$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_algunr_k$(value instanceof OpenClose ? value : THROW_CCE(), completion);
  };
  function combine$o$slambda_2(this$0, resultContinuation) {
    var i = new combine$o$slambda_1(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_ign9f7_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combine$1_0($strategies) {
    this.$strategies_1 = $strategies;
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
      var tmp$ret$0 = item.requestFlow_1;
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var tmp = merge(destination);
    launchIn(onEach(tmp, combine$o$slambda_2(this, null)), CoroutineScope_0(asCoroutineDispatcher(window)));
  }
  protoOf(combine$1_0).init_2byfvu_k$ = function (targetElement) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.$strategies_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
      element.init_2byfvu_k$(targetElement);
    }
  };
  protoOf(combine$1_0).reset_5u6xz3_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.$strategies_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.reset.<anonymous>' call
      element.reset_5u6xz3_k$();
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
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundColor$factory_2());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayKind() {
  }
  function Overlay(modifier, variant, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Overlay_kt__p5agwu();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1952604270);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.changedInstance_s1wkiy_k$(contentAlignment_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content_0._v) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          contentAlignment_0._v = TopCenter_getInstance();
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          ref_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          content_0._v = ComposableSingletons$OverlayKt_getInstance().lambda_1_r8sbbp_1;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1943592998, true, Overlay$lambda(variant_0, modifier_0, contentAlignment_0, ref_0, content_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.Overlay.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Deferred(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Overlay$lambda_0(modifier_0, variant_0, contentAlignment_0, ref_0, content_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (($changed & 17) === 16 && $composer_0.get_skipping_3owdve_k$()) {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$OverlayKt() {
    ComposableSingletons$OverlayKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-1906586062, false, ComposableSingletons$OverlayKt$lambda_1$lambda_mpnfty));
  }
  protoOf(ComposableSingletons$OverlayKt).get_lambda_1_uj3pqp_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$OverlayKt_instance;
  function ComposableSingletons$OverlayKt_getInstance() {
    if (ComposableSingletons$OverlayKt_instance == null)
      new ComposableSingletons$OverlayKt();
    return ComposableSingletons$OverlayKt_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_getInstance(), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function Overlay$lambda($variant, $modifier, $contentAlignment, $ref, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = toModifier(get_OverlayStyle(), [$variant._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        Companion_getInstance_15();
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        Box(right(left(bottom(top(position(tmp_0, 'fixed'), get_px(0)), get_px(0)), get_px(0)), get_px(0)).then_mmfvo6_k$($modifier._v), $contentAlignment._v, $ref._v, $content._v, $composer_0, com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function Overlay$lambda_0($modifier, $variant, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Overlay($modifier._v, $variant._v, $contentAlignment._v, $ref._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_getInstance_5();
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1021473669);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(hiddenModifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(showDelayMs_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(hideDelayMs_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(openCloseStrategy_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(placementTarget_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placementStrategy_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(keepOpenStrategy_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 8) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        hiddenModifier_0._v = Companion_getInstance();
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
      $composer_0.startReplaceGroup_5hh8aj_k$(1540444435);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(openCloseStrategy_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var tmp0_elvis_lhs = openCloseStrategy_0._v;
        var value = tmp0_elvis_lhs == null ? plus_0(onHover_0(Companion_getInstance_26()), onFocus_0(Companion_getInstance_26())) : tmp0_elvis_lhs;
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var openCloseStrategy_1 = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1540449975);
      var tmp2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!($composer_0.changed_ga7h3f_k$(hiddenModifier_0._v) | ($dirty & 57344) === 16384) | ($dirty & 458752) === 131072);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = tmp2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var value_0 = new PopoverShowHideSettings(hiddenModifier_0._v, showDelayMs_0._v, hideDelayMs_0._v);
        tmp2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var showHideSettings = tmp1_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1540458578);
      var tmp4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 234881024) === 67108864;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp4.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_1 || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var tmp0_elvis_lhs_0 = placementStrategy_0._v;
        var value_1 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_27().of$default_vdti6x_k$(PopupPlacement_Bottom_getInstance()) : tmp0_elvis_lhs_0;
        tmp4.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var placementStrategy_1 = tmp2_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1540463791);
      var tmp6 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_0.changed_ga7h3f_k$(keepOpenStrategy_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp6.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_2 || it_2 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var tmp0_elvis_lhs_1 = keepOpenStrategy_0._v;
        var value_2 = tmp0_elvis_lhs_1 == null ? plus(onHover(Companion_getInstance_25()), onFocus(Companion_getInstance_25())) : tmp0_elvis_lhs_1;
        tmp6.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var keepOpenStrategy_1 = tmp3_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1540469368);
      var tmp8 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = !!(!!(!!($composer_0.changed_ga7h3f_k$(openCloseStrategy_1) | $composer_0.changed_ga7h3f_k$(showHideSettings)) | $composer_0.changed_ga7h3f_k$(placementStrategy_1)) | $composer_0.changed_ga7h3f_k$(keepOpenStrategy_1));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = tmp8.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_3 || it_3 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var value_3 = new PopoverStateController(openCloseStrategy_1, showHideSettings, placementStrategy_1, keepOpenStrategy_1);
        tmp8.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var popoverStateController = tmp4_group;
      var tmp_9 = Companion_getInstance();
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_7();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_10 = display(tmp_9, 'none');
      var tmp_11 = [popoverStateController, target, placementTarget_0._v];
      $composer_0.startReplaceGroup_5hh8aj_k$(1540484359);
      var tmp11 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = !!(!!(!!($composer_0.changedInstance_s1wkiy_k$(target) | $composer_0.changedInstance_s1wkiy_k$(placementTarget_0._v)) | $composer_0.changedInstance_s1wkiy_k$(popoverStateController)) | $composer_0.changedInstance_s1wkiy_k$(openCloseStrategy_1));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = tmp11.rememberedValue_4dg93v_k$();
      var tmp_12;
      if (invalid_4 || it_4 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
        var value_4 = AdvancedPopover$lambda(target, placementTarget_0, popoverStateController, openCloseStrategy_1);
        tmp11.updateRememberedValue_l1wh71_k$(value_4);
        tmp_12 = value_4;
      } else {
        tmp_12 = it_4;
      }
      var tmp_13 = tmp_12;
      var tmp5_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_14 = disposableRef(tmp_11, tmp5_group);
      Box(tmp_10, null, tmp_14, null, $composer_0, com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 10);
      // Inline function 'kotlin.run' call
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-617048177, true, AdvancedPopover$lambda_0(popoverStateController, variant_0, modifier_0, placementStrategy_1, ref_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_5 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (invalid_5 || it_5 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>' call
        var value_5 = ComposableLambda$invoke$ref_25(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_5);
        tmp_15 = value_5;
      } else {
        tmp_15 = it_5;
      }
      var tmp_16 = tmp_15;
      var tmp0_0 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Deferred(tmp0_0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp6_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp6_safe_receiver == null)
      null;
    else {
      tmp6_safe_receiver.updateScope_t8jcf_k$(AdvancedPopover$lambda_1(target, modifier_0, hiddenModifier_0, variant_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function PopoverShowHideSettings(hiddenModifier, showDelayMs, hideDelayMs) {
    this.showDelayMs_1 = coerceAtLeast(showDelayMs, 0);
    this.hideDelayMs_1 = coerceAtLeast(hideDelayMs, 0);
    this.hiddenModifier_1 = opacity(hiddenModifier, 0);
  }
  protoOf(PopoverShowHideSettings).get_showDelayMs_p2rvkt_k$ = function () {
    return this.showDelayMs_1;
  };
  protoOf(PopoverShowHideSettings).get_hideDelayMs_xhkarm_k$ = function () {
    return this.hideDelayMs_1;
  };
  protoOf(PopoverShowHideSettings).get_hiddenModifier_cuypbe_k$ = function () {
    return this.hiddenModifier_1;
  };
  function _get_showHideSettings__b0dpt5($this) {
    return $this.showHideSettings_1;
  }
  function _get_placementStrategy__tkhdlz($this) {
    return $this.placementStrategy_1;
  }
  function _get_keepOpenStrategy__hc7th3($this) {
    return $this.keepOpenStrategy_1;
  }
  function _set__state__4o0y7v($this, _set____db54di) {
    var tmp0 = $this._state$delegate_1;
    _state$factory();
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get__state__37adl3($this) {
    var tmp0 = $this._state$delegate_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    _state$factory_0();
    return tmp0.get_value_j01efc_k$();
  }
  function _set_showTimeoutId__5mmcee($this, _set____db54di) {
    $this.showTimeoutId_1 = _set____db54di;
  }
  function _get_showTimeoutId__9l563y($this) {
    return $this.showTimeoutId_1;
  }
  function _set_hideTimeoutId__z31hh1($this, _set____db54di) {
    $this.hideTimeoutId_1 = _set____db54di;
  }
  function _get_hideTimeoutId__kqb1zr($this) {
    return $this.hideTimeoutId_1;
  }
  function resetTimers($this) {
    window.clearTimeout($this.showTimeoutId_1);
    window.clearTimeout($this.hideTimeoutId_1);
  }
  function PopoverStateController$requestShowPopup$lambda(this$0, $state) {
    return function () {
      _set__state__4o0y7v(this$0, new Calculating($state.get_elements_vxwh8g_k$(), this$0.showHideSettings_1));
      var tmp0_safe_receiver = $state.get_elements_vxwh8g_k$().popupElement_1;
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
        this$0.finishShowing_619yhu_k$();
        tmp_1 = Unit_getInstance();
      }
      return tmp_1;
    };
  }
  function PopoverStateController$requestHidePopup$lambda(this$0, $state) {
    return function () {
      var tmp;
      if (!get_shouldKeepOpen(this$0.keepOpenStrategy_1)) {
        var tmp0_safe_receiver = $state.get_elements_vxwh8g_k$().popupElement_1;
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.PopoverStateController.requestHidePopup.<anonymous>.<anonymous>' call
          tmp_0 = toDouble(window.getComputedStyle(tmp0_safe_receiver).getPropertyValue('opacity'));
        }
        var currentOpacity = tmp_0;
        _set__state__4o0y7v(this$0, new Hiding($state.get_elements_vxwh8g_k$(), this$0.placementStrategy_1, this$0.showHideSettings_1, $state.get_placement_wv4cec_k$()));
        var tmp_1;
        if (currentOpacity == null || currentOpacity === 0.0) {
          this$0.finishHiding_wjwzzw_k$($state.get_elements_vxwh8g_k$());
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function PopoverStateController$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda).invoke_f29lti_k$ = function (keepOpen, $completion) {
    var tmp = this.create_vh5neu_k$(keepOpen, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(PopoverStateController$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_f29lti_k$((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (!this.keepOpen_1) {
            this.this$0__1.requestHidePopup_nxy4mj_k$();
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda).create_vh5neu_k$ = function (keepOpen, completion) {
    var i = new PopoverStateController$slambda(this.this$0__1, completion);
    i.keepOpen_1 = keepOpen;
    return i;
  };
  protoOf(PopoverStateController$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_vh5neu_k$((!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE(), completion);
  };
  function PopoverStateController$slambda_0(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda(this$0, resultContinuation);
    var l = function (keepOpen, $completion) {
      return i.invoke_f29lti_k$(keepOpen, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PopoverStateController$slambda_1).invoke_ign9f7_k$ = function (request, $completion) {
    var tmp = this.create_algunr_k$(request, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(PopoverStateController$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ign9f7_k$(p1 instanceof OpenClose ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PopoverStateController$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          switch (this.request_1.get_ordinal_ip24qg_k$()) {
            case 0:
              this.this$0__1.requestShowPopup_ms4agg_k$();
              break;
            case 1:
              this.this$0__1.requestHidePopup_nxy4mj_k$();
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PopoverStateController$slambda_1).create_algunr_k$ = function (request, completion) {
    var i = new PopoverStateController$slambda_1(this.this$0__1, completion);
    i.request_1 = request;
    return i;
  };
  protoOf(PopoverStateController$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_algunr_k$(value instanceof OpenClose ? value : THROW_CCE(), completion);
  };
  function PopoverStateController$slambda_2(this$0, resultContinuation) {
    var i = new PopoverStateController$slambda_1(this$0, resultContinuation);
    var l = function (request, $completion) {
      return i.invoke_ign9f7_k$(request, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PopoverStateController(openCloseStrategy, showHideSettings, placementStrategy, keepOpenStrategy) {
    this.showHideSettings_1 = showHideSettings;
    this.placementStrategy_1 = placementStrategy;
    this.keepOpenStrategy_1 = keepOpenStrategy;
    this._state$delegate_1 = mutableStateOf(Uninitialized_getInstance());
    this.showTimeoutId_1 = -1;
    this.hideTimeoutId_1 = -1;
    var scope = CoroutineScope_0(asCoroutineDispatcher(window));
    var tmp = this.keepOpenStrategy_1.get_keepOpenFlow_bsp6yu_k$();
    launchIn(onEach(tmp, PopoverStateController$slambda_0(this, null)), scope);
    var tmp_0 = openCloseStrategy.get_requestFlow_wwolx0_k$();
    launchIn(onEach(tmp_0, PopoverStateController$slambda_2(this, null)), scope);
  }
  protoOf(PopoverStateController).get_state_iypx7s_k$ = function () {
    return _get__state__37adl3(this);
  };
  protoOf(PopoverStateController).resetToFoundElements_21bry9_k$ = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Initialized)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    resetTimers(this);
    _set__state__4o0y7v(this, new FoundElements(state.get_elements_vxwh8g_k$()));
  };
  protoOf(PopoverStateController).updateElements_itx82_k$ = function (elements) {
    var state = _get__state__37adl3(this);
    if (isInterface(state, Initialized)) {
      state.set_elements_h4xuwq_k$(elements);
    } else {
      _set__state__4o0y7v(this, new FoundElements(elements));
    }
  };
  protoOf(PopoverStateController).requestShowPopup_ms4agg_k$ = function () {
    var state = _get__state__37adl3(this);
    if (!isInterface(state, Initialized))
      return Unit_getInstance();
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.showTimeoutId_1 = tmp_0.setTimeout(PopoverStateController$requestShowPopup$lambda(this, state), this.showHideSettings_1.showDelayMs_1);
  };
  protoOf(PopoverStateController).updatePopupElement_798jwz_k$ = function (popupElement) {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Initialized)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.keepOpenStrategy_1.init_2byfvu_k$(popupElement);
    state.get_elements_vxwh8g_k$().popupElement_1 = popupElement;
  };
  protoOf(PopoverStateController).clearPopupElement_lehycz_k$ = function () {
    var state = _get__state__37adl3(this);
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Initialized)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.keepOpenStrategy_1.reset_5u6xz3_k$();
    state.get_elements_vxwh8g_k$().popupElement_1 = null;
  };
  protoOf(PopoverStateController).finishShowing_619yhu_k$ = function () {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Calculating))
      return Unit_getInstance();
    var popupElement = state.elements_1.popupElement_1;
    // Inline function 'kotlin.check' call
    if (!!(popupElement == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    _set__state__4o0y7v(this, new Shown(state.elements_1, this.placementStrategy_1));
  };
  protoOf(PopoverStateController).requestHidePopup_nxy4mj_k$ = function () {
    var state = _get__state__37adl3(this);
    if (state instanceof FoundElements) {
      resetTimers(this);
      return Unit_getInstance();
    }
    // Inline function 'kotlin.check' call
    if (!isInterface(state, Visible)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    resetTimers(this);
    var tmp = this;
    var tmp_0 = window;
    tmp.hideTimeoutId_1 = tmp_0.setTimeout(PopoverStateController$requestHidePopup$lambda(this, state), this.showHideSettings_1.hideDelayMs_1);
  };
  protoOf(PopoverStateController).finishHiding_wjwzzw_k$ = function (elements) {
    var state = _get__state__37adl3(this);
    if (!(state instanceof Hiding))
      return Unit_getInstance();
    _set__state__4o0y7v(this, new FoundElements(elements));
    resetTimers(this);
  };
  function resolve(_this__u8e3s4, $this, targetFinder) {
    if (_this__u8e3s4 == null || targetFinder == null)
      return _this__u8e3s4;
    return targetFinder.invoke_eqenwi_k$(_this__u8e3s4);
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
    tmp.targetElement_1 = tmp_0;
    var tmp_1 = this;
    var tmp_2;
    if (placementTarget == null) {
      tmp_2 = this.targetElement_1;
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
    tmp_1.placementElement_1 = tmp_2;
    this.popupElement_1 = null;
  }
  protoOf(PopoverElements).get_targetElement_9dyc5e_k$ = function () {
    return this.targetElement_1;
  };
  protoOf(PopoverElements).get_placementElement_okh734_k$ = function () {
    return this.placementElement_1;
  };
  protoOf(PopoverElements).set_popupElement_mnuym_k$ = function (_set____db54di) {
    this.popupElement_1 = _set____db54di;
  };
  protoOf(PopoverElements).get_popupElement_5cnda1_k$ = function () {
    return this.popupElement_1;
  };
  function _get_positionAndPlacement__fg8rxo($this) {
    return $this.positionAndPlacement_1;
  }
  function Uninitialized() {
    Uninitialized_instance = this;
  }
  var Uninitialized_instance;
  function Uninitialized_getInstance() {
    if (Uninitialized_instance == null)
      new Uninitialized();
    return Uninitialized_instance;
  }
  function Initialized() {
  }
  function FoundElements(elements) {
    this.elements_1 = elements;
  }
  protoOf(FoundElements).set_elements_h4xuwq_k$ = function (_set____db54di) {
    this.elements_1 = _set____db54di;
  };
  protoOf(FoundElements).get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  function Visible() {
  }
  function Showing() {
  }
  function Calculating(elements, showHideSettings) {
    this.elements_1 = elements;
    this.modifier_1 = left(top(showHideSettings.hiddenModifier_1, get_percent(-100)), get_percent(-100));
    this.placement_1 = null;
  }
  protoOf(Calculating).set_elements_h4xuwq_k$ = function (_set____db54di) {
    this.elements_1 = _set____db54di;
  };
  protoOf(Calculating).get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  protoOf(Calculating).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(Calculating).get_placement_wv4cec_k$ = function () {
    return this.placement_1;
  };
  function Shown(elements, placementStrategy) {
    this.elements_1 = elements;
    this.positionAndPlacement_1 = placementStrategy.calculate_l894t6_k$();
    this.modifier_1 = Companion_getInstance().then_mmfvo6_k$(toModifier_3(this.positionAndPlacement_1.get_position_jfponi_k$()));
    this.placement_1 = this.positionAndPlacement_1.get_placement_wv4cec_k$();
  }
  protoOf(Shown).set_elements_h4xuwq_k$ = function (_set____db54di) {
    this.elements_1 = _set____db54di;
  };
  protoOf(Shown).get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  protoOf(Shown).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(Shown).get_placement_wv4cec_k$ = function () {
    return this.placement_1;
  };
  function Hiding(elements, placementStrategy, showHideSettings, placement) {
    this.elements_1 = elements;
    this.placement_1 = placement;
    var tmp = this;
    var tmp0 = showHideSettings.hiddenModifier_1;
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp_0;
    if (!(this.elements_1.popupElement_1 == null)) {
      // Inline function 'com.varabyte.kobweb.silk.components.overlay.Hiding.modifier.<anonymous>' call
      tmp_0 = toModifier_3(placementStrategy.calculate_l894t6_k$().get_position_jfponi_k$());
    } else {
      tmp_0 = Companion_getInstance();
    }
    tmp.modifier_1 = tmp0.then_mmfvo6_k$(tmp_0);
  }
  protoOf(Hiding).set_elements_h4xuwq_k$ = function (_set____db54di) {
    this.elements_1 = _set____db54di;
  };
  protoOf(Hiding).get_elements_vxwh8g_k$ = function () {
    return this.elements_1;
  };
  protoOf(Hiding).get_placement_wv4cec_k$ = function () {
    return this.placement_1;
  };
  protoOf(Hiding).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  function PopoverState() {
  }
  function toModifier_3(_this__u8e3s4) {
    return left(top(Companion_getInstance(), _this__u8e3s4.get_top_18ivbo_k$()), _this__u8e3s4.get_left_woprgw_k$());
  }
  function AdvancedPopover$$inlined$cache$1$2($openCloseStrategy) {
    this.$openCloseStrategy_1 = $openCloseStrategy;
  }
  protoOf(AdvancedPopover$$inlined$cache$1$2).dispose_3nnxhr_k$ = function () {
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
    this.$openCloseStrategy_1.reset_5u6xz3_k$();
  };
  function AdvancedPopover$lambda($target, $placementTarget, $popoverStateController, $openCloseStrategy) {
    return function ($this$disposableRef, element) {
      var tmp;
      try {
        // Inline function 'kotlin.apply' call
        var this_0 = new PopoverElements(element, $target, $placementTarget._v);
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = this_0;
        var tmp_1 = $popoverStateController.get_state_iypx7s_k$();
        var tmp0_safe_receiver = isInterface(tmp_1, Initialized) ? tmp_1 : null;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_elements_vxwh8g_k$();
        tmp_0.popupElement_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.popupElement_1;
        var popoverElements = this_0;
        // Inline function 'kotlin.apply' call
        var this_1 = popoverElements.targetElement_1;
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
        $openCloseStrategy.init_2byfvu_k$(this_1);
        $popoverStateController.updateElements_itx82_k$(popoverElements);
        tmp = Unit_getInstance();
      } catch ($p) {
        var tmp_2;
        if ($p instanceof IllegalStateException) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = Unit_getInstance();
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
      var state = $popoverStateController.get_state_iypx7s_k$();
      var tmp;
      var tmp_0;
      if (evt.get_propertyName_9r91o7_k$() === 'opacity') {
        tmp_0 = state instanceof Hiding;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        $popoverStateController.finishHiding_wjwzzw_k$(state.elements_1);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AdvancedPopover$$inlined$run$1$2$1$1($popoverStateController, $placementStrategy) {
    this.$popoverStateController_1 = $popoverStateController;
    this.$placementStrategy_1 = $placementStrategy;
  }
  protoOf(AdvancedPopover$$inlined$run$1$2$1$1).dispose_3nnxhr_k$ = function () {
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.$popoverStateController_1.clearPopupElement_lehycz_k$();
    this.$popoverStateController_1.resetToFoundElements_21bry9_k$();
    this.$placementStrategy_1.reset_5u6xz3_k$();
  };
  function AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$disposableRef, popupElement) {
      $placementStrategy.init_19ji8_k$($visiblePopoverState.get_elements_vxwh8g_k$().placementElement_1, popupElement);
      $popoverStateController.updatePopupElement_798jwz_k$(popupElement);
      $popoverStateController.finishShowing_619yhu_k$();
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new AdvancedPopover$$inlined$run$1$2$1$1($popoverStateController, $placementStrategy);
    };
  }
  function AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, $visiblePopoverState, $popoverStateController) {
    return function ($this$refScope) {
      $this$refScope.disposableRef_sdjxhc_k$([], AdvancedPopover$lambda$lambda$lambda($placementStrategy, $visiblePopoverState, $popoverStateController));
      $this$refScope.add_uaq22z_k$($ref._v);
      return Unit_getInstance();
    };
  }
  function AdvancedPopover$lambda$lambda_1($content, $visiblePopoverState) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $content(new PopupScope($visiblePopoverState.get_placement_wv4cec_k$()), $composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AdvancedPopover$lambda_0($popoverStateController, $variant, $modifier, $placementStrategy, $ref, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = $popoverStateController.get_state_iypx7s_k$();
        var tmp0_elvis_lhs = isInterface(tmp_0, Visible) ? tmp_0 : null;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          return Unit_getInstance();
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var visiblePopoverState = tmp_1;
        var tmp_2 = toModifier(get_PopupStyle(), [$variant._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
        Companion_getInstance_15();
        // Inline function 'org.jetbrains.compose.web.css.Position' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = position(tmp_2, 'fixed').then_mmfvo6_k$(visiblePopoverState.get_modifier_t1pq5c_k$()).then_mmfvo6_k$($modifier._v);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1086205442);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$($popoverStateController);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
          var value = AdvancedPopover$lambda$lambda($popoverStateController);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_6 = onTransitionEnd(tmp_3, tmp0_group);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1086195433);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(!!(!!($composer_0.changed_ga7h3f_k$($placementStrategy) | $composer_0.changedInstance_s1wkiy_k$(visiblePopoverState)) | $composer_0.changedInstance_s1wkiy_k$($popoverStateController)) | $composer_0.changedInstance_s1wkiy_k$($ref._v));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (invalid_0 || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = AdvancedPopover$lambda$lambda_0($ref, $placementStrategy, visiblePopoverState, $popoverStateController);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp1_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_9 = refScope(tmp1_group);
        // Inline function 'kotlin.run' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(770335689, true, AdvancedPopover$lambda$lambda_1($content, visiblePopoverState), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid_1 || it_1 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedPopover.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_24(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_10 = value_1;
        } else {
          tmp_10 = it_1;
        }
        var tmp_11 = tmp_10;
        var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Box(tmp_6, null, tmp_9, tmp0, $composer_0, 3072 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6, 2);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AdvancedPopover$lambda_1($target, $modifier, $hiddenModifier, $variant, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedPopover($target, $modifier._v, $hiddenModifier._v, $variant._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
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
  function _set_placementElement__vwo480($this, _set____db54di) {
    $this.placementElement_1 = _set____db54di;
  }
  function _get_placementElement__a1booc($this) {
    return $this.placementElement_1;
  }
  function _set_popupElement__570kh3($this, _set____db54di) {
    $this.popupElement_1 = _set____db54di;
  }
  function _get_popupElement__kqrb17($this) {
    return $this.popupElement_1;
  }
  function _set_resizeObserver__cin8h9($this, _set____db54di) {
    $this.resizeObserver_1 = _set____db54di;
  }
  function _get_resizeObserver__wzddgf($this) {
    return $this.resizeObserver_1;
  }
  function _set_mutationObserver__ei0s14($this, _set____db54di) {
    $this.mutationObserver_1 = _set____db54di;
  }
  function _get_mutationObserver__el3h1o($this) {
    return $this.mutationObserver_1;
  }
  function updatePopupPosition($this) {
    updatePosition(ensureNotNull($this.popupElement_1), $this.calculate_l894t6_k$().position_1);
  }
  function _get_updatePopupPositionListener__lv385t($this) {
    return $this.updatePopupPositionListener_1;
  }
  function PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this$0) {
    return function (it) {
      updatePopupPosition(this$0);
      return Unit_getInstance();
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda(this$0) {
    return function (_unused_var__etf5q3) {
      updatePopupPosition(this$0);
      return Unit_getInstance();
    };
  }
  function PopupPlacementStrategy$Companion$of$o$init$lambda_0(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0) {
      updatePopupPosition(this$0);
      return Unit_getInstance();
    };
  }
  function PopupPlacementStrategy$Companion$of$1($placement, $offsetPixels) {
    this.$placement_1 = $placement;
    this.$offsetPixels_1 = $offsetPixels;
    PopupPlacementStrategy.call(this);
    this.placementElement_1 = null;
    this.popupElement_1 = null;
    this.resizeObserver_1 = null;
    this.mutationObserver_1 = null;
    var tmp = this;
    tmp.updatePopupPositionListener_1 = EventListener(PopupPlacementStrategy$Companion$of$o$updatePopupPositionListener$lambda(this));
  }
  protoOf(PopupPlacementStrategy$Companion$of$1).init_19ji8_k$ = function (placementElement, popupElement) {
    this.placementElement_1 = placementElement;
    this.popupElement_1 = popupElement;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = ResizeObserver_init_$Create$(PopupPlacementStrategy$Companion$of$o$init$lambda(this));
    // Inline function 'com.varabyte.kobweb.silk.components.overlay.<no name provided>.init.<anonymous>' call
    this_0.observe_kts85w_k$(popupElement);
    this_0.observe_kts85w_k$(placementElement);
    tmp.resizeObserver_1 = this_0;
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
    tmp_0.mutationObserver_1 = this_1;
    window.addEventListener('scroll', this.updatePopupPositionListener_1);
    window.addEventListener('resize', this.updatePopupPositionListener_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).calculate_l894t6_k$ = function () {
    var placementBounds = ensureNotNull(this.placementElement_1).getBoundingClientRect();
    var popupBounds = ensureNotNull(this.popupElement_1).getBoundingClientRect();
    var popupWidth = popupBounds.width;
    var popupHeight = popupBounds.height;
    return new PositionAndPlacement(this.calculateDefaultPosition_6ufwvm_k$(this.$placement_1, popupWidth, popupHeight, placementBounds, this.$offsetPixels_1), this.$placement_1);
  };
  protoOf(PopupPlacementStrategy$Companion$of$1).reset_5u6xz3_k$ = function () {
    this.placementElement_1 = null;
    this.popupElement_1 = null;
    ensureNotNull(this.resizeObserver_1).disconnect_t9cc0c_k$();
    this.resizeObserver_1 = null;
    ensureNotNull(this.mutationObserver_1).disconnect();
    this.mutationObserver_1 = null;
    window.removeEventListener('scroll', this.updatePopupPositionListener_1);
    window.removeEventListener('resize', this.updatePopupPositionListener_1);
  };
  function Position(top, left) {
    this.top_1 = top;
    this.left_1 = left;
  }
  protoOf(Position).get_top_18ivbo_k$ = function () {
    return this.top_1;
  };
  protoOf(Position).get_left_woprgw_k$ = function () {
    return this.left_1;
  };
  function PositionAndPlacement(position, placement) {
    placement = placement === VOID ? null : placement;
    this.position_1 = position;
    this.placement_1 = placement;
  }
  protoOf(PositionAndPlacement).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(PositionAndPlacement).get_placement_wv4cec_k$ = function () {
    return this.placement_1;
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).of_skk296_k$ = function (placement, offsetPixels) {
    return new PopupPlacementStrategy$Companion$of$1(placement, offsetPixels);
  };
  protoOf(Companion_6).of$default_vdti6x_k$ = function (placement, offsetPixels, $super) {
    offsetPixels = offsetPixels === VOID ? 15 : offsetPixels;
    return $super === VOID ? this.of_skk296_k$(placement, offsetPixels) : $super.of_skk296_k$.call(this, placement, offsetPixels);
  };
  protoOf(Companion_6).of_h621qs_k$ = function (offsetPixels) {
    return this.of_skk296_k$(PopupPlacement_Bottom_getInstance(), offsetPixels);
  };
  var Companion_instance_6;
  function Companion_getInstance_27() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function PopupPlacementStrategy() {
    Companion_getInstance_27();
  }
  protoOf(PopupPlacementStrategy).calculateDefaultPosition_6ufwvm_k$ = function (placement, popupWidth, popupHeight, placementBounds, offsetPixels) {
    var offsetPixels_0 = numberToDouble(offsetPixels);
    var tmp;
    switch (placement.get_ordinal_ip24qg_k$()) {
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
  protoOf(PopupPlacementStrategy).calculateDefaultPosition$default_hidp87_k$ = function (placement, popupWidth, popupHeight, placementBounds, offsetPixels, $super) {
    offsetPixels = offsetPixels === VOID ? 15 : offsetPixels;
    return $super === VOID ? this.calculateDefaultPosition_6ufwvm_k$(placement, popupWidth, popupHeight, placementBounds, offsetPixels) : $super.calculateDefaultPosition_6ufwvm_k$.call(this, placement, popupWidth, popupHeight, placementBounds, offsetPixels);
  };
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
  function values_0() {
    return [PopupPlacement_TopLeft_getInstance(), PopupPlacement_Top_getInstance(), PopupPlacement_TopRight_getInstance(), PopupPlacement_LeftTop_getInstance(), PopupPlacement_RightTop_getInstance(), PopupPlacement_Left_getInstance(), PopupPlacement_Right_getInstance(), PopupPlacement_LeftBottom_getInstance(), PopupPlacement_RightBottom_getInstance(), PopupPlacement_BottomLeft_getInstance(), PopupPlacement_Bottom_getInstance(), PopupPlacement_BottomRight_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TopLeft':
        return PopupPlacement_TopLeft_getInstance();
      case 'Top':
        return PopupPlacement_Top_getInstance();
      case 'TopRight':
        return PopupPlacement_TopRight_getInstance();
      case 'LeftTop':
        return PopupPlacement_LeftTop_getInstance();
      case 'RightTop':
        return PopupPlacement_RightTop_getInstance();
      case 'Left':
        return PopupPlacement_Left_getInstance();
      case 'Right':
        return PopupPlacement_Right_getInstance();
      case 'LeftBottom':
        return PopupPlacement_LeftBottom_getInstance();
      case 'RightBottom':
        return PopupPlacement_RightBottom_getInstance();
      case 'BottomLeft':
        return PopupPlacement_BottomLeft_getInstance();
      case 'Bottom':
        return PopupPlacement_Bottom_getInstance();
      case 'BottomRight':
        return PopupPlacement_BottomRight_getInstance();
      default:
        PopupPlacement_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var PopupPlacement_entriesInitialized;
  function PopupPlacement_initEntries() {
    if (PopupPlacement_entriesInitialized)
      return Unit_getInstance();
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
  var $ENTRIES_0;
  function PopupPlacement(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PopupScope(placement) {
    this.placement_1 = placement;
  }
  protoOf(PopupScope).get_placement_wv4cec_k$ = function () {
    return this.placement_1;
  };
  function PopupKind() {
  }
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().get_Fast_wo1fb9_k$().value$default_36t2hw_k$();
    tmp.TransitionDuration$delegate_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).get_TransitionDuration_6zl6by_k$ = function () {
    return this.TransitionDuration$delegate_1.getValue_fbnwi2_k$(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function updatePosition(_this__u8e3s4, position) {
    _init_properties_Popup_kt__lluomy();
    _this__u8e3s4.style.top = toString(position.top_1);
    _this__u8e3s4.style.left = toString(position.left_1);
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition_0(Companion_getInstance(), [Companion_getInstance_2().of$default_b85k2c_k$('opacity', PopupVars_getInstance().get_TransitionDuration_6zl6by_k$().value$default_36t2hw_k$())]);
  }
  function PopupPlacement_TopLeft_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_TopLeft_instance;
  }
  function PopupPlacement_Top_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_Top_instance;
  }
  function PopupPlacement_TopRight_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_TopRight_instance;
  }
  function PopupPlacement_LeftTop_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_LeftTop_instance;
  }
  function PopupPlacement_RightTop_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_RightTop_instance;
  }
  function PopupPlacement_Left_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_Left_instance;
  }
  function PopupPlacement_Right_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_Right_instance;
  }
  function PopupPlacement_LeftBottom_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_LeftBottom_instance;
  }
  function PopupPlacement_RightBottom_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_RightBottom_instance;
  }
  function PopupPlacement_BottomLeft_getInstance() {
    PopupPlacement_initEntries();
    return PopupPlacement_BottomLeft_instance;
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
      return receiver.get_TransitionDuration_6zl6by_k$();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_getInstance_5();
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
  function Arrow() {
  }
  function TextContainer() {
  }
  function TooltipKind() {
  }
  function TooltipVars() {
    TooltipVars_instance = this;
    this.BackgroundColor$delegate_1 = StyleVariable('silk');
    this.Color$delegate_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).get_BackgroundColor_qhx06s_k$ = function () {
    return this.BackgroundColor$delegate_1.getValue_fbnwi2_k$(this, BackgroundColor$factory_3());
  };
  protoOf(TooltipVars).get_Color_i88tui_k$ = function () {
    return this.Color$delegate_1.getValue_fbnwi2_k$(this, Color$factory_4());
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-303561348);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placement_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(hasArrow_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(offsetPixels_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(placementTarget_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(showDelayMs_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(hideDelayMs_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(keepOpenStrategy_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 64) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 32 : 16);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance();
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
      $composer_0.startReplaceGroup_5hh8aj_k$(-2137198921);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 57344) === 16384;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.Tooltip.<anonymous>' call
        var value = Companion_getInstance_27().of_skk296_k$(placement_0._v, offsetPixels_0._v);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var placementStrategy = tmp0_group;
      AdvancedTooltip(target, text, modifier_0._v, Companion_getInstance(), variant_0._v, hasArrow_0._v, showDelayMs_0._v, hideDelayMs_0._v, null, placementTarget_0._v, placementStrategy, keepOpenStrategy_0._v, ref_0._v, $composer_0, 100666368 | 14 & $dirty | 112 & $dirty | 896 & $dirty | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 12 | 57344 & $dirty << 3 | 458752 & $dirty | 3670016 & $dirty >> 6 | 29360128 & $dirty >> 6 | 1879048192 & $dirty << 6, 112 & $dirty1 << 3 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 6 | 896 & $dirty1 << 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Tooltip$lambda(target, text, modifier_0, variant_0, placement_0, hasArrow_0, offsetPixels_0, placementTarget_0, showDelayMs_0, hideDelayMs_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1508280598);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(hiddenModifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(hasArrow_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(showDelayMs_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(hideDelayMs_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(openCloseStrategy_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(placementTarget_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(placementStrategy_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(keepOpenStrategy_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 512) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 256 : 128);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 8) === 0)) {
        hiddenModifier_0._v = Companion_getInstance();
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
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_27(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_10 = value;
      } else {
        tmp_10 = it;
      }
      var tmp_11 = tmp_10;
      var tmp0 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AdvancedTooltip_0(target, tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp0, $composer_0, 14 & $dirty | 112 & $dirty >> 3 | 896 & $dirty >> 3 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 384 | 14 & $dirty1 >> 3 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() << 3 | 112 & $dirty1 >> 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AdvancedTooltip$lambda_0(target, text, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, $changed, $changed1, $default));
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
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1632743267);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(target) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(hiddenModifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.changed_ga7h3f_k$(variant_0._v) : $composer_0.changedInstance_s1wkiy_k$(variant_0._v)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(hasArrow_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(showDelayMs_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(hideDelayMs_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(openCloseStrategy_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(placementTarget_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placementStrategy_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(keepOpenStrategy_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ((($changed1 & 64) === 0 ? $composer_0.changed_ga7h3f_k$(ref_0._v) : $composer_0.changedInstance_s1wkiy_k$(ref_0._v)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        hiddenModifier_0._v = Companion_getInstance();
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
      $composer_0.startReplaceGroup_5hh8aj_k$(1925347675);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(keepOpenStrategy_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>' call
        var tmp0_elvis_lhs = keepOpenStrategy_0._v;
        var value = tmp0_elvis_lhs == null ? never(Companion_getInstance_25()) : tmp0_elvis_lhs;
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var keepOpenStrategy_1 = tmp0_group;
      var tmp_1 = toModifier(get_TooltipStyle(), [variant_0._v], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter() | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 3).then_mmfvo6_k$(modifier_0._v);
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
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_0 === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_28(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_9 = value_0;
      } else {
        tmp_9 = it_0;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AdvancedPopover(target, tmp_1, tmp_2, null, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, keepOpenStrategy_1, tmp_8, tmp0_0, $composer_0, 3072 | 14 & $dirty | 896 & $dirty | 57344 & $dirty >> 3 | 458752 & $dirty >> 3 | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3, 48 | com_varabyte_kobweb_compose_dom_ElementRefScope$stableprop_getter() | 14 & $dirty1 >> 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(AdvancedTooltip$lambda_2(target, modifier_0, hiddenModifier_0, variant_0, hasArrow_0, showDelayMs_0, hideDelayMs_0, openCloseStrategy_0, placementTarget_0, placementStrategy_0, keepOpenStrategy_0, ref_0, content, $changed, $changed1, $default));
    }
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    Companion_getInstance_15();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$()), TooltipVars_getInstance().get_Color_i88tui_k$().value$default_36t2hw_k$()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_getInstance();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    Companion_getInstance_15();
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border_0(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.width_iqjg4l_k$(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_0();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.style_o6ud9q_k$('solid');
    return Unit_getInstance();
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_2(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_2(tmp0_$receiver, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_2(tmp0_$receiver, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_2(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_2(Companion_getInstance(), VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_getInstance(), get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_2(Companion_getInstance(), unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_2(tmp0_$receiver, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp0_$receiver = Companion_getInstance();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_2(tmp0_$receiver, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_2(Companion_getInstance(), VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$().value$default_36t2hw_k$());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_getInstance(), get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('border-color', 'transparent transparent ' + toString($color) + ' transparent');
      return Unit_getInstance();
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('border-color', 'transparent ' + toString($color) + ' transparent transparent');
      return Unit_getInstance();
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('border-color', 'transparent transparent transparent ' + toString($color));
      return Unit_getInstance();
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.property_wcrait_k$('border-color', toString($color) + ' transparent transparent transparent');
      return Unit_getInstance();
    };
  }
  function Tooltip$lambda($target, $text, $modifier, $variant, $placement, $hasArrow, $offsetPixels, $placementTarget, $showDelayMs, $hideDelayMs, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Tooltip($target, $text, $modifier._v, $variant._v, $placement._v, $hasArrow._v, $offsetPixels._v, $placementTarget._v, $showDelayMs._v, $hideDelayMs._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function AdvancedTooltip$lambda$lambda($text) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = split($text, ['\n']).iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(element) > 0) {
            $composer_0.startReplaceGroup_5hh8aj_k$(2146053686);
            SpanText(element, null, null, null, $composer_0, 0, 14);
            $composer_0.endReplaceGroup_ek144q_k$();
          } else {
            $composer_0.startReplaceGroup_5hh8aj_k$(2146054316);
            Br(null, $composer_0, 0, 1);
            $composer_0.endReplaceGroup_ek144q_k$();
          }
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda($text) {
    return function ($this$AdvancedTooltip, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = toModifier(get_TooltipTextContainerStyle(), [], $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        // Inline function 'kotlin.run' call
        // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-465460302, true, AdvancedTooltip$lambda$lambda($text), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
          // Inline function 'com.varabyte.kobweb.silk.components.overlay.AdvancedTooltip.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_26(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda_0($target, $text, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip($target, $text, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function AdvancedTooltip$lambda_1($content, $hasArrow) {
    return function ($this$AdvancedPopover, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$AdvancedPopover) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
        $content($this$AdvancedPopover, $composer_0, 14 & $dirty);
        var placement = $this$AdvancedPopover.get_placement_wv4cec_k$();
        if ($hasArrow._v && !(placement == null)) {
          var tmp_1 = get_TooltipArrowStyle();
          var tmp_2;
          switch (placement == null ? -1 : placement.get_ordinal_ip24qg_k$()) {
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
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AdvancedTooltip$lambda_2($target, $modifier, $hiddenModifier, $variant, $hasArrow, $showDelayMs, $hideDelayMs, $openCloseStrategy, $placementTarget, $placementStrategy, $keepOpenStrategy, $ref, $content, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      AdvancedTooltip_0($target, $modifier._v, $hiddenModifier._v, $variant._v, $hasArrow._v, $showDelayMs._v, $hideDelayMs._v, $openCloseStrategy._v, $placementTarget._v, $placementStrategy._v, $keepOpenStrategy._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function BackgroundColor$factory_3() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.get_BackgroundColor_qhx06s_k$();
    }, null);
  }
  function Color$factory_4() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.get_Color_i88tui_k$();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_getInstance_5();
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_getInstance_5();
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
      var tmp_13 = Companion_getInstance_5();
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
    var mutableTheme = ctx.get_theme_iz24rk_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$();
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().get__500_wogfpb_k$().toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().get__500_wogfpb_k$();
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>.<anonymous>' call
    var color = Colors_getInstance().get_Black_i7mvue_k$();
    set_background(this_0.get_light_iuogdp_k$(), Colors_getInstance().get_White_ij46ow_k$());
    set_color(this_0.get_light_iuogdp_k$(), color);
    set_border(this_0.get_light_iuogdp_k$(), color.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.get_light_iuogdp_k$(), focusOutline);
    set_overlay(this_0.get_light_iuogdp_k$(), color.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.get_light_iuogdp_k$(), placeholder);
    var buttonBase = Colors_getInstance().get_White_ij46ow_k$().darkened_iwrtmu_k$(0.2);
    get_button_0(this_0.get_light_iuogdp_k$()).set_s40lvu_k$(buttonBase, buttonBase.darkened_iwrtmu_k$(0.2), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), buttonBase.darkened_iwrtmu_k$(0.4));
    get_callout(this_0.get_light_iuogdp_k$()).set_6605l8_k$(Colors_getInstance().get_Crimson_p5oht6_k$(), Colors_getInstance().get_DarkOrchid_ky5rby_k$(), Colors_getInstance().get_DodgerBlue_w4tkwu_k$(), Colors_getInstance().get_SeaGreen_gor2g3_k$(), Colors_getInstance().get_Gray_wo2eh8_k$(), Colors_getInstance().get_LimeGreen_33bue3_k$(), Colors_getInstance().get_DarkOrange_ky6wwj_k$());
    get_checkbox_0(this_0.get_light_iuogdp_k$()).set_38lh8k_k$(Blue_getInstance().get__500_wogfpb_k$(), Blue_getInstance().get__600_woggg0_k$(), Colors_getInstance().get_White_ij46ow_k$());
    var inputFilled = Gray_getInstance().get__200_wogdh8_k$();
    var tmp0_$this = get_input_0(this_0.get_light_iuogdp_k$());
    var tmp1_filledFocus = Colors_getInstance().get_Transparent_cxh4g9_k$();
    var tmp2_hoveredBorder = Gray_getInstance().get__500_wogfpb_k$();
    var tmp3_invalidBorder = Red_getInstance().get__900_wogio3_k$();
    var tmp4_filledHover = inputFilled.darkened_iwrtmu_k$(0.1);
    tmp0_$this.set_ax4sbs_k$(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.get_light_iuogdp_k$());
    var tmp6_thumb = Colors_getInstance().get_White_ij46ow_k$();
    var tmp7_backgroundOn = Colors_getInstance().get_DodgerBlue_w4tkwu_k$();
    var tmp8_backgroundOff = Colors_getInstance().get_LightGray_i1h2r4_k$();
    tmp5_$this.set_38lh8k_k$(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.get_light_iuogdp_k$()).set$default_u64q8f_k$(Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_CornflowerBlue_r6uqqi_k$(), VOID, VOID, Colors_getInstance().get_LightGray_i1h2r4_k$(), Colors_getInstance().get_WhiteSmoke_gvtxtb_k$(), Colors_getInstance().get_White_ij46ow_k$());
    get_tooltip_0(this_0.get_light_iuogdp_k$()).set_djj1hu_k$(get_color_0(this_0.get_light_iuogdp_k$()), get_background_0(this_0.get_light_iuogdp_k$()));
    // Inline function 'kotlin.run' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>.<anonymous>' call
    var color_0 = Colors_getInstance().get_White_ij46ow_k$();
    set_background(this_0.get_dark_wokkvz_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    set_color(this_0.get_dark_wokkvz_k$(), color_0);
    set_border(this_0.get_dark_wokkvz_k$(), color_0.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.get_dark_wokkvz_k$(), focusOutline);
    set_overlay(this_0.get_dark_wokkvz_k$(), color_0.copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.get_dark_wokkvz_k$(), placeholder);
    var buttonBase_0 = lightened(Colors_getInstance().get_Black_i7mvue_k$(), 0.2);
    get_button_0(this_0.get_dark_wokkvz_k$()).set_s40lvu_k$(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), lightened(buttonBase_0, 0.4));
    get_callout(this_0.get_dark_wokkvz_k$()).set_6605l8_k$(Colors_getInstance().get_Red_18jks8_k$(), get_callout(this_0.get_light_iuogdp_k$()).get_important_52de2h_k$(), get_callout(this_0.get_light_iuogdp_k$()).get_note_wor96j_k$(), Colors_getInstance().get_Aquamarine_wf4kkn_k$(), get_callout(this_0.get_light_iuogdp_k$()).get_quote_ixn9eb_k$(), get_callout(this_0.get_light_iuogdp_k$()).get_tip_18ivgu_k$(), Colors_getInstance().get_Orange_2kp26v_k$());
    get_checkbox_0(this_0.get_dark_wokkvz_k$()).set_38lh8k_k$(Blue_getInstance().get__200_wogdh8_k$(), Blue_getInstance().get__300_woge7x_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    var inputFilled_0 = Gray_getInstance().get__900_wogio3_k$();
    var tmp0_$this_0 = get_input_0(this_0.get_dark_wokkvz_k$());
    var tmp1_filledFocus_0 = Colors_getInstance().get_Transparent_cxh4g9_k$();
    var tmp2_hoveredBorder_0 = Gray_getInstance().get__600_woggg0_k$();
    var tmp3_invalidBorder_0 = Red_getInstance().get__300_woge7x_k$();
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.set_ax4sbs_k$(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.get_dark_wokkvz_k$());
    var tmp6_thumb_0 = Colors_getInstance().get_White_ij46ow_k$();
    var tmp7_backgroundOn_0 = Colors_getInstance().get_LightSkyBlue_74jx4i_k$();
    var tmp8_backgroundOff_0 = Colors_getInstance().get_DarkGray_1y3y8u_k$();
    tmp5_$this_0.set_38lh8k_k$(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.get_dark_wokkvz_k$()).set$default_u64q8f_k$(Colors_getInstance().get_White_ij46ow_k$(), Colors_getInstance().get_Black_i7mvue_k$(), Colors_getInstance().get_LightSkyBlue_74jx4i_k$(), VOID, VOID, Colors_getInstance().get_DarkSlateGray_s468al_k$(), Colors_getInstance().get_DarkGray_1y3y8u_k$(), Colors_getInstance().get_Black_i7mvue_k$());
    get_tooltip_0(this_0.get_dark_wokkvz_k$()).set_djj1hu_k$(get_color_0(this_0.get_dark_wokkvz_k$()), get_background_0(this_0.get_dark_wokkvz_k$()));
    mutableTheme.registerStyle$default_qiw5ck_k$('silk-colors', get_SilkColorsStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-input', get_InputStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-outlined', get_OutlinedInputVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-filled', get_FilledInputVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-flushed', get_FlushedInputVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-unstyled', get_UnstyledInputVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-input-group', get_InputGroupStyle());
    mutableTheme.registerStyle$default_qiw5ck_k$('silk-disabled', get_DisabledStyle());
    mutableTheme.registerStyle$default_qiw5ck_k$('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-button', get_ButtonStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-canvas', get_CanvasStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-callout', get_CalloutStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-bordered', get_LeftBorderedCalloutVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-bordered-filled', get_LeftBorderedFilledCalloutVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-outlined', get_OutlinedCalloutVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-matching-link', get_MatchingLinkCalloutVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-checkbox', get_CheckboxStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-checkbox', get_CheckboxInputVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-overlay', get_OverlayStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-popup', get_PopupStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-surface', get_SurfaceStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-switch', get_SwitchStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-switch', get_SwitchInputVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs', get_TabsStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-top', get_TopTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left', get_LeftTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-right', get_RightTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tooltip', get_TooltipStyle());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.registerKeyframes_f5btlc_k$('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_xs', Companion_getInstance_21().get_XS_kntocc_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_sm', Companion_getInstance_21().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_md', Companion_getInstance_21().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-button-size_lg', Companion_getInstance_21().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-checkbox-size_sm', Companion_getInstance_22().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-checkbox-size_md', Companion_getInstance_22().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-checkbox-size_lg', Companion_getInstance_22().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_xs', Companion_getInstance_23().get_XS_kntocc_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_sm', Companion_getInstance_23().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_md', Companion_getInstance_23().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-input-size_lg', Companion_getInstance_23().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-switch-size_sm', Companion_getInstance_24().get_SM_kntogt_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-switch-size_md', Companion_getInstance_24().get_MD_kntom8_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-switch-size_lg', Companion_getInstance_24().get_LG_knton0_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_caution', Companion_getInstance_20().get_CAUTION_mcrcde_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_important', Companion_getInstance_20().get_IMPORTANT_jvo9lz_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_note', Companion_getInstance_20().get_NOTE_wo652z_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_question', Companion_getInstance_20().get_QUESTION_ww02wf_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_quote', Companion_getInstance_20().get_QUOTE_ifgqb7_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_tip', Companion_getInstance_20().get_TIP_18jjzi_k$());
    mutableTheme.registerStyle$default_8xy09p_k$('silk-callout-type_warning', Companion_getInstance_20().get_WARNING_vqhl77_k$());
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_name(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.get_opposite_ywslzk_k$())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function SilkWidgetVariables($composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1751129124);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(743484619);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = SilkWidgetVariables$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      SilkWidgetVariables_0(tmp0_group, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SilkWidgetVariables$lambda_0($changed));
    }
  }
  function SilkWidgetVariables_0(provideElement, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1418237724);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(provideElement) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(743478685);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_12().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.init.SilkWidgetVariables.<anonymous>' call
        var value = provideElement();
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var rootElement = tmp0_group;
      SilkWidgetVariables_1(rootElement, $composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(SilkWidgetVariables$lambda_1(provideElement, $changed));
    }
  }
  function SilkWidgetVariables_1(element, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(145799267);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(element) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      setSilkWidgetVariables(element, Companion_getInstance_11().get_current_2iudd5_k$($composer_0, 6));
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SilkWidgetVariables$lambda_2(element, $changed));
    }
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.get_colorMode_trbg8z_k$());
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(colorScheme(Companion_getInstance(), $this$base.get_colorMode_trbg8z_k$().get_isLight_zemp0j_k$() ? Companion_getInstance_19().get_Light_id31e5_k$() : Companion_getInstance_19().get_Dark_wo05b3_k$()), get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), get_button(palette).get_default_qtagd4_k$()), ButtonVars_getInstance().get_BackgroundHoverColor_qkbxz2_k$(), get_button(palette).get_hover_islez7_k$()), ButtonVars_getInstance().get_BackgroundPressedColor_qp3aco_k$(), get_button(palette).get_pressed_3zxk93_k$()), CheckboxVars_getInstance().get_IconBackgroundColor_fqf24z_k$(), get_checkbox(palette).get_background_stpfw7_k$()), CheckboxVars_getInstance().get_IconBackgroundHoverColor_gda561_k$(), get_checkbox(palette).get_hover_islez7_k$()), CheckboxVars_getInstance().get_IconColor_i8bnoh_k$(), get_checkbox(palette).get_color_ipu8u2_k$()), InputVars_getInstance().get_BorderHoverColor_4uita4_k$(), get_input(palette).get_hoveredBorder_pnis3i_k$()), InputVars_getInstance().get_BorderInvalidColor_3xft0h_k$(), get_input(palette).get_invalidBorder_suexpi_k$()), InputVars_getInstance().get_FilledColor_27lcwo_k$(), get_input(palette).get_filled_dbz78r_k$()), InputVars_getInstance().get_FilledHoverColor_z8l4su_k$(), get_input(palette).get_filledHover_panomn_k$()), InputVars_getInstance().get_FilledFocusColor_e3i8gm_k$(), get_input(palette).get_filledFocus_pbrnir_k$()), OverlayVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_overlay(palette)), SwitchVars_getInstance().get_ThumbColor_g0t1d6_k$(), get_switch(palette).get_thumb_iz2gml_k$()), TabVars_getInstance().get_Color_i88tui_k$(), get_tab(palette).get_color_ipu8u2_k$()), TabVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_tab(palette).get_background_stpfw7_k$()), TabVars_getInstance().get_DisabledBackgroundColor_cqusog_k$(), get_tab(palette).get_disabled_rbmjej_k$()), TabVars_getInstance().get_HoverBackgroundColor_uy6r32_k$(), get_tab(palette).get_hover_islez7_k$()), TabVars_getInstance().get_PressedBackgroundColor_ow7ud8_k$(), get_tab(palette).get_pressed_3zxk93_k$()), TooltipVars_getInstance().get_BackgroundColor_qhx06s_k$(), get_tooltip(palette).get_background_stpfw7_k$()), TooltipVars_getInstance().get_Color_i88tui_k$(), get_tooltip(palette).get_color_ipu8u2_k$());
  }
  function SilkWidgetVariables$lambda() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var tmp = document.documentElement;
    return tmp instanceof HTMLElement ? tmp : THROW_CCE();
  }
  function SilkWidgetVariables$lambda_0($$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SilkWidgetVariables$lambda_1($provideElement, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_0($provideElement, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function SilkWidgetVariables$lambda_2($element, $$changed) {
    return function ($composer, $force) {
      SilkWidgetVariables_1($element, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_getInstance_5();
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
    return SmoothColorTransitionDurationVar$delegate.getValue_fbnwi2_k$(null, SmoothColorTransitionDurationVar$factory());
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
    $composer_0.startReplaceGroup_5hh8aj_k$(812442038);
    var tmp0 = tabIndex(ariaDisabled(Companion_getInstance()), -1);
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_getInstance(), 0.5), Companion_getInstance_1().get_NotAllowed_mobp4y_k$());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition_0(Companion_getInstance(), [Companion_getInstance_2().of$default_b85k2c_k$('background-color', get_SmoothColorTransitionDurationVar().value$default_36t2hw_k$())]);
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
      var tmp = Companion_getInstance_5();
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().get_Normal_22avww_k$().value$default_36t2hw_k$();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_getInstance_5();
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  var com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable;
  function PlaceholderColor(color, opacity) {
    opacity = opacity === VOID ? 1 : opacity;
    this.color_1 = color;
    this.opacity_1 = opacity;
  }
  protoOf(PlaceholderColor).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(PlaceholderColor).get_opacity_jowogu_k$ = function () {
    return this.opacity_1;
  };
  var com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable;
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.Instant$delegate_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.UltraFast$delegate_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.VeryFast$delegate_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.Fast$delegate_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.Normal$delegate_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.Slow$delegate_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.VerySlow$delegate_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.UltraSlow$delegate_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).get_Instant_9uzajs_k$ = function () {
    return this.Instant$delegate_1.getValue_fbnwi2_k$(this, Instant$factory());
  };
  protoOf(TransitionDurationVars).get_UltraFast_5ch09t_k$ = function () {
    return this.UltraFast$delegate_1.getValue_fbnwi2_k$(this, UltraFast$factory());
  };
  protoOf(TransitionDurationVars).get_VeryFast_7jhf2z_k$ = function () {
    return this.VeryFast$delegate_1.getValue_fbnwi2_k$(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).get_Fast_wo1fb9_k$ = function () {
    return this.Fast$delegate_1.getValue_fbnwi2_k$(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).get_Normal_22avww_k$ = function () {
    return this.Normal$delegate_1.getValue_fbnwi2_k$(this, Normal$factory());
  };
  protoOf(TransitionDurationVars).get_Slow_wo9y7e_k$ = function () {
    return this.Slow$delegate_1.getValue_fbnwi2_k$(this, Slow$factory());
  };
  protoOf(TransitionDurationVars).get_VerySlow_7jpxz4_k$ = function () {
    return this.VerySlow$delegate_1.getValue_fbnwi2_k$(this, VerySlow$factory());
  };
  protoOf(TransitionDurationVars).get_UltraSlow_5c8hdo_k$ = function () {
    return this.UltraSlow$delegate_1.getValue_fbnwi2_k$(this, UltraSlow$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function Instant$factory() {
    return getPropertyCallableRef('Instant', 1, KProperty1, function (receiver) {
      return receiver.get_Instant_9uzajs_k$();
    }, null);
  }
  function UltraFast$factory() {
    return getPropertyCallableRef('UltraFast', 1, KProperty1, function (receiver) {
      return receiver.get_UltraFast_5ch09t_k$();
    }, null);
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.get_VeryFast_7jhf2z_k$();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.get_Fast_wo1fb9_k$();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.get_Normal_22avww_k$();
    }, null);
  }
  function Slow$factory() {
    return getPropertyCallableRef('Slow', 1, KProperty1, function (receiver) {
      return receiver.get_Slow_wo9y7e_k$();
    }, null);
  }
  function VerySlow$factory() {
    return getPropertyCallableRef('VerySlow', 1, KProperty1, function (receiver) {
      return receiver.get_VerySlow_7jpxz4_k$();
    }, null);
  }
  function UltraSlow$factory() {
    return getPropertyCallableRef('UltraSlow', 1, KProperty1, function (receiver) {
      return receiver.get_UltraSlow_5c8hdo_k$();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.getValue_fbnwi2_k$(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.getValue_fbnwi2_k$(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.getValue_fbnwi2_k$(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.getValue_fbnwi2_k$(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.getValue_fbnwi2_k$(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.getValue_fbnwi2_k$(null, PlaceholderColorVar$factory());
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
    tmp.XS$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.SM$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.MD$delegate_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.LG$delegate_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).get_XS_kntocc_k$ = function () {
    return this.XS$delegate_1.getValue_fbnwi2_k$(this, XS$factory());
  };
  protoOf(FontSizeVars).get_SM_kntogt_k$ = function () {
    return this.SM$delegate_1.getValue_fbnwi2_k$(this, SM$factory());
  };
  protoOf(FontSizeVars).get_MD_kntom8_k$ = function () {
    return this.MD$delegate_1.getValue_fbnwi2_k$(this, MD$factory());
  };
  protoOf(FontSizeVars).get_LG_knton0_k$ = function () {
    return this.LG$delegate_1.getValue_fbnwi2_k$(this, LG$factory());
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
    tmp.XS$delegate_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.SM$delegate_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.MD$delegate_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.LG$delegate_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).get_XS_kntocc_k$ = function () {
    return this.XS$delegate_1.getValue_fbnwi2_k$(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).get_SM_kntogt_k$ = function () {
    return this.SM$delegate_1.getValue_fbnwi2_k$(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).get_MD_kntom8_k$ = function () {
    return this.MD$delegate_1.getValue_fbnwi2_k$(this, MD$factory_0());
  };
  protoOf(BorderRadiusVars).get_LG_knton0_k$ = function () {
    return this.LG$delegate_1.getValue_fbnwi2_k$(this, LG$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.get_XS_kntocc_k$();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.get_SM_kntogt_k$();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.get_MD_kntom8_k$();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.get_LG_knton0_k$();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.get_XS_kntocc_k$();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.get_SM_kntogt_k$();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.get_MD_kntom8_k$();
    }, null);
  }
  function LG$factory_0() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.get_LG_knton0_k$();
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
  function Button_1() {
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.default$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.focus$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.pressed$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableButton).set_default_r70t7m_k$ = function (_set____db54di) {
    return this.default$delegate_1.setValue_jpcais_k$(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_default_qtagd4_k$ = function () {
    return this.default$delegate_1.getValue_fbnwi2_k$(this, default$factory_0());
  };
  protoOf(MutableButton).set_hover_2oswrh_k$ = function (_set____db54di) {
    return this.hover$delegate_1.setValue_jpcais_k$(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_hover_islez7_k$ = function () {
    return this.hover$delegate_1.getValue_fbnwi2_k$(this, hover$factory_0());
  };
  protoOf(MutableButton).set_focus_kvs67t_k$ = function (_set____db54di) {
    return this.focus$delegate_1.setValue_jpcais_k$(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_focus_irhg33_k$ = function () {
    return this.focus$delegate_1.getValue_fbnwi2_k$(this, focus$factory_0());
  };
  protoOf(MutableButton).set_pressed_58wx37_k$ = function (_set____db54di) {
    return this.pressed$delegate_1.setValue_jpcais_k$(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).get_pressed_3zxk93_k$ = function () {
    return this.pressed$delegate_1.getValue_fbnwi2_k$(this, pressed$factory_0());
  };
  protoOf(MutableButton).set_s40lvu_k$ = function (default_0, hover, focus, pressed) {
    this.set_default_r70t7m_k$(default_0);
    this.set_hover_2oswrh_k$(hover);
    this.set_focus_kvs67t_k$(focus);
    this.set_pressed_58wx37_k$(pressed);
  };
  function Callout() {
  }
  function MutableCallout(palette) {
    ColorGroup.call(this, palette, 'callout');
    this.caution$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.important$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.note$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.question$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.quote$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.tip$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.warning$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableCallout).set_caution_qcastw_k$ = function (_set____db54di) {
    return this.caution$delegate_1.setValue_jpcais_k$(this, caution$factory(), _set____db54di);
  };
  protoOf(MutableCallout).get_caution_ahahdu_k$ = function () {
    return this.caution$delegate_1.getValue_fbnwi2_k$(this, caution$factory_0());
  };
  protoOf(MutableCallout).set_important_k32bpf_k$ = function (_set____db54di) {
    return this.important$delegate_1.setValue_jpcais_k$(this, important$factory(), _set____db54di);
  };
  protoOf(MutableCallout).get_important_52de2h_k$ = function () {
    return this.important$delegate_1.getValue_fbnwi2_k$(this, important$factory_0());
  };
  protoOf(MutableCallout).set_note_ga1pwt_k$ = function (_set____db54di) {
    return this.note$delegate_1.setValue_jpcais_k$(this, note$factory(), _set____db54di);
  };
  protoOf(MutableCallout).get_note_wor96j_k$ = function () {
    return this.note$delegate_1.getValue_fbnwi2_k$(this, note$factory_0());
  };
  protoOf(MutableCallout).set_question_rocr1d_k$ = function (_set____db54di) {
    return this.question$delegate_1.setValue_jpcais_k$(this, question$factory(), _set____db54di);
  };
  protoOf(MutableCallout).get_question_jy1o6n_k$ = function () {
    return this.question$delegate_1.getValue_fbnwi2_k$(this, question$factory_0());
  };
  protoOf(MutableCallout).set_quote_2gksmb_k$ = function (_set____db54di) {
    return this.quote$delegate_1.setValue_jpcais_k$(this, quote$factory(), _set____db54di);
  };
  protoOf(MutableCallout).get_quote_ixn9eb_k$ = function () {
    return this.quote$delegate_1.getValue_fbnwi2_k$(this, quote$factory_0());
  };
  protoOf(MutableCallout).set_tip_emcy4k_k$ = function (_set____db54di) {
    return this.tip$delegate_1.setValue_jpcais_k$(this, tip$factory(), _set____db54di);
  };
  protoOf(MutableCallout).get_tip_18ivgu_k$ = function () {
    return this.tip$delegate_1.getValue_fbnwi2_k$(this, tip$factory_0());
  };
  protoOf(MutableCallout).set_warning_dgztz1_k$ = function (_set____db54di) {
    return this.warning$delegate_1.setValue_jpcais_k$(this, warning$factory(), _set____db54di);
  };
  protoOf(MutableCallout).get_warning_jv0q7n_k$ = function () {
    return this.warning$delegate_1.getValue_fbnwi2_k$(this, warning$factory_0());
  };
  protoOf(MutableCallout).set_6605l8_k$ = function (caution, important, note, question, quote, tip, warning) {
    this.set_caution_qcastw_k$(caution);
    this.set_important_k32bpf_k$(important);
    this.set_note_ga1pwt_k$(note);
    this.set_question_rocr1d_k$(question);
    this.set_quote_2gksmb_k$(quote);
    this.set_tip_emcy4k_k$(tip);
    this.set_warning_dgztz1_k$(warning);
  };
  function Checkbox() {
  }
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableCheckbox).set_background_9u5jiv_k$ = function (_set____db54di) {
    return this.background$delegate_1.setValue_jpcais_k$(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).get_background_stpfw7_k$ = function () {
    return this.background$delegate_1.getValue_fbnwi2_k$(this, background$factory_0());
  };
  protoOf(MutableCheckbox).set_hover_2oswrh_k$ = function (_set____db54di) {
    return this.hover$delegate_1.setValue_jpcais_k$(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).get_hover_islez7_k$ = function () {
    return this.hover$delegate_1.getValue_fbnwi2_k$(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).set_color_6hbvlo_k$ = function (_set____db54di) {
    return this.color$delegate_1.setValue_jpcais_k$(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).get_color_ipu8u2_k$ = function () {
    return this.color$delegate_1.getValue_fbnwi2_k$(this, color$factory_0());
  };
  protoOf(MutableCheckbox).set_38lh8k_k$ = function (background, hover, color) {
    this.set_background_9u5jiv_k$(background);
    this.set_hover_2oswrh_k$(hover);
    this.set_color_6hbvlo_k$(color);
  };
  function Input_1() {
  }
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.hoveredBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.invalidBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filled$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filledHover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.filledFocus$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableInput).set_hoveredBorder_9dobm0_k$ = function (_set____db54di) {
    return this.hoveredBorder$delegate_1.setValue_jpcais_k$(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_hoveredBorder_pnis3i_k$ = function () {
    return this.hoveredBorder$delegate_1.getValue_fbnwi2_k$(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).set_invalidBorder_v1jyzo_k$ = function (_set____db54di) {
    return this.invalidBorder$delegate_1.setValue_jpcais_k$(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_invalidBorder_suexpi_k$ = function () {
    return this.invalidBorder$delegate_1.getValue_fbnwi2_k$(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).set_filled_owq1el_k$ = function (_set____db54di) {
    return this.filled$delegate_1.setValue_jpcais_k$(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_filled_dbz78r_k$ = function () {
    return this.filled$delegate_1.getValue_fbnwi2_k$(this, filled$factory_0());
  };
  protoOf(MutableInput).set_filledHover_xo7efv_k$ = function (_set____db54di) {
    return this.filledHover$delegate_1.setValue_jpcais_k$(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_filledHover_panomn_k$ = function () {
    return this.filledHover$delegate_1.getValue_fbnwi2_k$(this, filledHover$factory_0());
  };
  protoOf(MutableInput).set_filledFocus_j5xe2x_k$ = function (_set____db54di) {
    return this.filledFocus$delegate_1.setValue_jpcais_k$(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).get_filledFocus_pbrnir_k$ = function () {
    return this.filledFocus$delegate_1.getValue_fbnwi2_k$(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).set_ax4sbs_k$ = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.set_hoveredBorder_9dobm0_k$(hoveredBorder);
    this.set_invalidBorder_v1jyzo_k$(invalidBorder);
    this.set_filled_owq1el_k$(filled);
    this.set_filledHover_xo7efv_k$(filledHover);
    this.set_filledFocus_j5xe2x_k$(filledFocus);
  };
  function Switch() {
  }
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.backgroundOn$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.backgroundOff$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.thumb$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableSwitch).set_backgroundOn_jyhnko_k$ = function (_set____db54di) {
    return this.backgroundOn$delegate_1.setValue_jpcais_k$(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).get_backgroundOn_11s1ze_k$ = function () {
    return this.backgroundOn$delegate_1.getValue_fbnwi2_k$(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).set_backgroundOff_a7rgle_k$ = function (_set____db54di) {
    return this.backgroundOff$delegate_1.setValue_jpcais_k$(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).get_backgroundOff_wj5pl4_k$ = function () {
    return this.backgroundOff$delegate_1.getValue_fbnwi2_k$(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).set_thumb_hhfkzb_k$ = function (_set____db54di) {
    return this.thumb$delegate_1.setValue_jpcais_k$(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).get_thumb_iz2gml_k$ = function () {
    return this.thumb$delegate_1.getValue_fbnwi2_k$(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).set_38lh8k_k$ = function (backgroundOn, backgroundOff, thumb) {
    this.set_backgroundOn_jyhnko_k$(backgroundOn);
    this.set_backgroundOff_a7rgle_k$(backgroundOff);
    this.set_thumb_hhfkzb_k$(thumb);
  };
  function Tab_0() {
  }
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedColor$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedBackground$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.selectedBorder$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.hover$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.pressed$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.disabled$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableTab).set_color_6hbvlo_k$ = function (_set____db54di) {
    return this.color$delegate_1.setValue_jpcais_k$(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).get_color_ipu8u2_k$ = function () {
    return this.color$delegate_1.getValue_fbnwi2_k$(this, color$factory_2());
  };
  protoOf(MutableTab).set_background_9u5jiv_k$ = function (_set____db54di) {
    return this.background$delegate_1.setValue_jpcais_k$(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).get_background_stpfw7_k$ = function () {
    return this.background$delegate_1.getValue_fbnwi2_k$(this, background$factory_2());
  };
  protoOf(MutableTab).set_selectedColor_hlprkn_k$ = function (_set____db54di) {
    return this.selectedColor$delegate_1.setValue_jpcais_k$(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_selectedColor_mfz4gv_k$ = function () {
    return this.selectedColor$delegate_1.getValue_fbnwi2_k$(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).set_selectedBackground_c6bs9o_k$ = function (_set____db54di) {
    return this.selectedBackground$delegate_1.setValue_jpcais_k$(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_selectedBackground_7y8aq6_k$ = function () {
    return this.selectedBackground$delegate_1.getValue_fbnwi2_k$(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).set_selectedBorder_84ayzm_k$ = function (_set____db54di) {
    return this.selectedBorder$delegate_1.setValue_jpcais_k$(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_selectedBorder_f0tq34_k$ = function () {
    return this.selectedBorder$delegate_1.getValue_fbnwi2_k$(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).set_hover_2oswrh_k$ = function (_set____db54di) {
    return this.hover$delegate_1.setValue_jpcais_k$(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).get_hover_islez7_k$ = function () {
    return this.hover$delegate_1.getValue_fbnwi2_k$(this, hover$factory_4());
  };
  protoOf(MutableTab).set_pressed_58wx37_k$ = function (_set____db54di) {
    return this.pressed$delegate_1.setValue_jpcais_k$(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).get_pressed_3zxk93_k$ = function () {
    return this.pressed$delegate_1.getValue_fbnwi2_k$(this, pressed$factory_2());
  };
  protoOf(MutableTab).set_disabled_v5i0p5_k$ = function (_set____db54di) {
    return this.disabled$delegate_1.setValue_jpcais_k$(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).get_disabled_rbmjej_k$ = function () {
    return this.disabled$delegate_1.getValue_fbnwi2_k$(this, disabled$factory_0());
  };
  protoOf(MutableTab).set_jzzawy_k$ = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.set_color_6hbvlo_k$(color);
    this.set_background_9u5jiv_k$(background);
    this.set_selectedColor_hlprkn_k$(selectedColor);
    this.set_selectedBackground_c6bs9o_k$(selectedBackground);
    this.set_selectedBorder_84ayzm_k$(selectedBorder);
    this.set_hover_2oswrh_k$(hover);
    this.set_pressed_58wx37_k$(pressed);
    this.set_disabled_v5i0p5_k$(disabled);
  };
  protoOf(MutableTab).set$default_u64q8f_k$ = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.set_jzzawy_k$(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.set_jzzawy_k$.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function Tooltip_0() {
  }
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.background$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.color$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableTooltip).set_background_9u5jiv_k$ = function (_set____db54di) {
    return this.background$delegate_1.setValue_jpcais_k$(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).get_background_stpfw7_k$ = function () {
    return this.background$delegate_1.getValue_fbnwi2_k$(this, background$factory_4());
  };
  protoOf(MutableTooltip).set_color_6hbvlo_k$ = function (_set____db54di) {
    return this.color$delegate_1.setValue_jpcais_k$(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).get_color_ipu8u2_k$ = function () {
    return this.color$delegate_1.getValue_fbnwi2_k$(this, color$factory_4());
  };
  protoOf(MutableTooltip).set_djj1hu_k$ = function (background, color) {
    this.set_background_9u5jiv_k$(background);
    this.set_color_6hbvlo_k$(color);
  };
  function SilkWidgetColorGroups() {
    SilkWidgetColorGroups_instance = this;
  }
  var SilkWidgetColorGroups_instance;
  function SilkWidgetColorGroups_getInstance() {
    if (SilkWidgetColorGroups_instance == null)
      new SilkWidgetColorGroups();
    return SilkWidgetColorGroups_instance;
  }
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
    return _this__u8e3s4.getValue_r24mvz_k$('overlay');
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
    return _this__u8e3s4.getValue_r24mvz_k$('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('border');
  }
  function get_color(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('color');
  }
  function get_background(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('background');
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
    _this__u8e3s4.set_17rjxm_k$('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('background');
  }
  function set_color(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('color');
  }
  function set_border(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('border', value);
  }
  function get_border_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('border');
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('focusOutline', value);
  }
  function get_focusOutline_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('focusOutline');
  }
  function set_overlay(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('overlay', value);
  }
  function get_overlay_0(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('overlay');
  }
  function set_placeholder(_this__u8e3s4, value) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    _this__u8e3s4.set_17rjxm_k$('placeholder', value);
  }
  function get_placeholder_1(_this__u8e3s4) {
    _init_properties_SilkWidgetColorGroups_kt__mh2tbg();
    return _this__u8e3s4.getValue_r24mvz_k$('placeholder');
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
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_r70t7m_k$(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_r70t7m_k$(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_focus_irhg33_k$();
    }, function (receiver, value) {
      return receiver.set_focus_kvs67t_k$(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_focus_irhg33_k$();
    }, function (receiver, value) {
      return receiver.set_focus_kvs67t_k$(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_58wx37_k$(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_58wx37_k$(value);
    });
  }
  function caution$factory() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.get_caution_ahahdu_k$();
    }, function (receiver, value) {
      return receiver.set_caution_qcastw_k$(value);
    });
  }
  function caution$factory_0() {
    return getPropertyCallableRef('caution', 1, KMutableProperty1, function (receiver) {
      return receiver.get_caution_ahahdu_k$();
    }, function (receiver, value) {
      return receiver.set_caution_qcastw_k$(value);
    });
  }
  function important$factory() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.get_important_52de2h_k$();
    }, function (receiver, value) {
      return receiver.set_important_k32bpf_k$(value);
    });
  }
  function important$factory_0() {
    return getPropertyCallableRef('important', 1, KMutableProperty1, function (receiver) {
      return receiver.get_important_52de2h_k$();
    }, function (receiver, value) {
      return receiver.set_important_k32bpf_k$(value);
    });
  }
  function note$factory() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.get_note_wor96j_k$();
    }, function (receiver, value) {
      return receiver.set_note_ga1pwt_k$(value);
    });
  }
  function note$factory_0() {
    return getPropertyCallableRef('note', 1, KMutableProperty1, function (receiver) {
      return receiver.get_note_wor96j_k$();
    }, function (receiver, value) {
      return receiver.set_note_ga1pwt_k$(value);
    });
  }
  function question$factory() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.get_question_jy1o6n_k$();
    }, function (receiver, value) {
      return receiver.set_question_rocr1d_k$(value);
    });
  }
  function question$factory_0() {
    return getPropertyCallableRef('question', 1, KMutableProperty1, function (receiver) {
      return receiver.get_question_jy1o6n_k$();
    }, function (receiver, value) {
      return receiver.set_question_rocr1d_k$(value);
    });
  }
  function quote$factory() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.get_quote_ixn9eb_k$();
    }, function (receiver, value) {
      return receiver.set_quote_2gksmb_k$(value);
    });
  }
  function quote$factory_0() {
    return getPropertyCallableRef('quote', 1, KMutableProperty1, function (receiver) {
      return receiver.get_quote_ixn9eb_k$();
    }, function (receiver, value) {
      return receiver.set_quote_2gksmb_k$(value);
    });
  }
  function tip$factory() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.get_tip_18ivgu_k$();
    }, function (receiver, value) {
      return receiver.set_tip_emcy4k_k$(value);
    });
  }
  function tip$factory_0() {
    return getPropertyCallableRef('tip', 1, KMutableProperty1, function (receiver) {
      return receiver.get_tip_18ivgu_k$();
    }, function (receiver, value) {
      return receiver.set_tip_emcy4k_k$(value);
    });
  }
  function warning$factory() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_warning_jv0q7n_k$();
    }, function (receiver, value) {
      return receiver.set_warning_dgztz1_k$(value);
    });
  }
  function warning$factory_0() {
    return getPropertyCallableRef('warning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_warning_jv0q7n_k$();
    }, function (receiver, value) {
      return receiver.set_warning_dgztz1_k$(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hoveredBorder_pnis3i_k$();
    }, function (receiver, value) {
      return receiver.set_hoveredBorder_9dobm0_k$(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hoveredBorder_pnis3i_k$();
    }, function (receiver, value) {
      return receiver.set_hoveredBorder_9dobm0_k$(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_invalidBorder_suexpi_k$();
    }, function (receiver, value) {
      return receiver.set_invalidBorder_v1jyzo_k$(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_invalidBorder_suexpi_k$();
    }, function (receiver, value) {
      return receiver.set_invalidBorder_v1jyzo_k$(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filled_dbz78r_k$();
    }, function (receiver, value) {
      return receiver.set_filled_owq1el_k$(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filled_dbz78r_k$();
    }, function (receiver, value) {
      return receiver.set_filled_owq1el_k$(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledHover_panomn_k$();
    }, function (receiver, value) {
      return receiver.set_filledHover_xo7efv_k$(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledHover_panomn_k$();
    }, function (receiver, value) {
      return receiver.set_filledHover_xo7efv_k$(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledFocus_pbrnir_k$();
    }, function (receiver, value) {
      return receiver.set_filledFocus_j5xe2x_k$(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_filledFocus_pbrnir_k$();
    }, function (receiver, value) {
      return receiver.set_filledFocus_j5xe2x_k$(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOn_11s1ze_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOn_jyhnko_k$(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOn_11s1ze_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOn_jyhnko_k$(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOff_wj5pl4_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOff_a7rgle_k$(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.get_backgroundOff_wj5pl4_k$();
    }, function (receiver, value) {
      return receiver.set_backgroundOff_a7rgle_k$(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.get_thumb_iz2gml_k$();
    }, function (receiver, value) {
      return receiver.set_thumb_hhfkzb_k$(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.get_thumb_iz2gml_k$();
    }, function (receiver, value) {
      return receiver.set_thumb_hhfkzb_k$(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedColor_mfz4gv_k$();
    }, function (receiver, value) {
      return receiver.set_selectedColor_hlprkn_k$(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedColor_mfz4gv_k$();
    }, function (receiver, value) {
      return receiver.set_selectedColor_hlprkn_k$(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBackground_7y8aq6_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBackground_c6bs9o_k$(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBackground_7y8aq6_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBackground_c6bs9o_k$(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBorder_f0tq34_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBorder_84ayzm_k$(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_selectedBorder_f0tq34_k$();
    }, function (receiver, value) {
      return receiver.set_selectedBorder_84ayzm_k$(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.get_hover_islez7_k$();
    }, function (receiver, value) {
      return receiver.set_hover_2oswrh_k$(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_58wx37_k$(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pressed_3zxk93_k$();
    }, function (receiver, value) {
      return receiver.set_pressed_58wx37_k$(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_v5i0p5_k$(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_v5i0p5_k$(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_9u5jiv_k$(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_6hbvlo_k$(value);
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
  protoOf(PopupScope).align_s6rwef_k$ = align;
  //endregion
  //region block: init
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Fill$stable = 0;
  com_varabyte_kobweb_silk_components_icons_IconRenderStyle_Stroke$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_KeepPopupOpenStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualKeepPopupOpenStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_OpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_ManualOpenClosePopupStrategy$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_TimedOpenClosePopupStrategy$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Uninitialized$stable = 0;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_FoundElements$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Calculating$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Shown$stable = 8;
  com_varabyte_kobweb_silk_components_overlay_PopoverState_Hiding$stable = 8;
  com_varabyte_kobweb_silk_style_common_PlaceholderColor$stable = 8;
  com_varabyte_kobweb_silk_style_vars_animation_TransitionDurationVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_BorderRadiusVars$stable = 8;
  com_varabyte_kobweb_silk_style_vars_size_FontSizeVars$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ButtonStyle;
  _.$_$.b = Button_0;
  _.$_$.c = Input_0;
  _.$_$.d = CloseIcon;
  _.$_$.e = HamburgerIcon;
  _.$_$.f = MoonIcon;
  _.$_$.g = SunIcon;
  _.$_$.h = get_HorizontalDividerStyle;
  _.$_$.i = HorizontalDivider;
  _.$_$.j = Surface;
  _.$_$.k = AdvancedPopover;
  _.$_$.l = Overlay;
  _.$_$.m = Tooltip;
  _.$_$.n = get_SilkColorsStyle;
  _.$_$.o = SilkWidgetVariables;
  _.$_$.p = initSilkWidgets;
  _.$_$.q = get_SmoothColorStyle;
  _.$_$.r = get_BorderColorVar;
  _.$_$.s = get_ColorVar;
  _.$_$.t = set_background;
  _.$_$.u = get_color;
  _.$_$.v = set_color;
  _.$_$.w = PopupPlacement_BottomRight_getInstance;
  _.$_$.x = ButtonVars_getInstance;
  _.$_$.y = OverlayVars_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
