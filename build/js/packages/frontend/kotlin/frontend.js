(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobwebx-markdown.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-kobweb-silk.js', './kotlinx-coroutines-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobwebx-markdown.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobwebx-markdown'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kobweb-frontend-kobwebx-markdown' was not found. Please, check whether 'kobweb-frontend-kobwebx-markdown' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'epicer.frontend:site'.");
    }
    if (typeof globalThis['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:site'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'epicer.frontend:site'.");
    }
    globalThis['epicer.frontend:site'] = factory(typeof globalThis['epicer.frontend:site'] === 'undefined' ? {} : globalThis['epicer.frontend:site'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobwebx-markdown'], globalThis['html-html-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kobweb-frontend-browser-ext']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobwebx_kobwebx_markdown, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.s9;
  var Unit_instance = kotlin_kotlin.$_$.f2;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var AppGlobals_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var to = kotlin_kotlin.$_$.ba;
  var mapOf = kotlin_kotlin.$_$.b4;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var removePrefix = kotlin_kotlin.$_$.f8;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.c;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.k9;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var initMetadataForObject = kotlin_kotlin.$_$.m6;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.b;
  var toString = kotlin_kotlin.$_$.aa;
  var toInt = kotlin_kotlin.$_$.t8;
  var charSequenceLength = kotlin_kotlin.$_$.y5;
  var toBoolean = kotlin_kotlin.$_$.r8;
  var isBlank = kotlin_kotlin.$_$.z7;
  var removeSuffix = kotlin_kotlin.$_$.g8;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.n;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.f;
  var com_varabyte_kobweb_navigation_Router$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var get_LocalMarkdownContext = kotlin_com_varabyte_kobwebx_kobwebx_markdown.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.i3;
  var MarkdownContext = kotlin_com_varabyte_kobwebx_kobwebx_markdown.$_$.b;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.c4;
  var Code = kotlin_org_jetbrains_compose_html_html_core.$_$.m3;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.w3;
  var Em = kotlin_org_jetbrains_compose_html_html_core.$_$.p3;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.y3;
  var HorizontalDivider = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.r3;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.s3;
  var H4 = kotlin_org_jetbrains_compose_html_html_core.$_$.t3;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.d4;
  var Pre = kotlin_org_jetbrains_compose_html_html_core.$_$.x3;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d2;
  var loadFromLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var get_systemPreference = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s1;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.o5;
  var protoOf = kotlin_kotlin.$_$.y6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var isInterface = kotlin_kotlin.$_$.q6;
  var saveToLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var initMetadataForLambda = kotlin_kotlin.$_$.l6;
  var VOID = kotlin_kotlin.$_$.e;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.o;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l3;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u1;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d4;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.u1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.s;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.a3;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.v;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var initMetadataForClass = kotlin_kotlin.$_$.h6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.u9;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.r;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.t;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var fontWeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k3;
  var overflowWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var Companion_instance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var toAttrs = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.n3;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var maxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var toAttrs_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q3;
  var Svg = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var gridTemplateRows = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Center_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var Stop = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var RadialGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var _SvgId___init__impl__pmt7ru = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w2;
  var Defs = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var Path = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.c2;
  var gridRow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var CenterHorizontally_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.q;
  var get_UncoloredLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.d;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var Link_0 = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.r3;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i3;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.z3;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var get_UndecoratedLinkVariant = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.e;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_browser_ext.$_$.i;
  var PopupPlacement_BottomRight_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.u;
  var Tooltip = kotlin_com_varabyte_kobweb_silk_widgets.$_$.k;
  var Enum = kotlin_kotlin.$_$.d9;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var OverlayVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.w;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var Overlay = kotlin_com_varabyte_kobweb_silk_widgets.$_$.j;
  var HamburgerIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var CloseIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var KMutableProperty0 = kotlin_kotlin.$_$.g7;
  var THROW_ISE = kotlin_kotlin.$_$.l9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.c6;
  var Spacer = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var displayIfAtLeast = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var displayUntil = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f3;
  var SunIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var MoonIcon = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var End_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var clamp = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var CenterEnd_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var Companion_instance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var Companion_instance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.f;
  var Companion_instance_15 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var toAnimation = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var animation = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var onAnimationEnd = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.w1;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var KProperty0 = kotlin_kotlin.$_$.i7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e6;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$AboutKt, 'ComposableSingletons$AboutKt');
  initMetadataForLambda(AppEntry$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Brand, 'Brand', Brand);
  initMetadataForClass(SitePalette, 'SitePalette');
  initMetadataForObject(SitePalettes, 'SitePalettes');
  initMetadataForLambda(PageLayout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt');
  initMetadataForClass(SideMenuState, 'SideMenuState', VOID, Enum);
  initMetadataForObject(ComposableSingletons$NavHeaderKt, 'ComposableSingletons$NavHeaderKt');
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).l39(true);
    AppGlobals_instance.t39(mapOf(to('title', 'frontend')));
    Companion_instance.e3b('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.x3b(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.z3b(remove(Companion_instance, removePrefix(window.location.href, window.origin)), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('root', ComposableLambda$invoke$ref_3(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      HomePage($composer_0, 0);
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
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      AboutPage($composer_0, 0);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
      // Inline function 'kotlin.run' call
      // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i1v();
      var tmp;
      if (invalid || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.t1v(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.s44_1 = ComposableLambda$invoke$ref(composableLambdaInstance(188215112, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.t44_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1712232191, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.u44_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (document.hidden) {
          forceReloadNow();
          tmp_1 = Unit_instance;
        } else {
          // Inline function 'kotlin.text.isNotEmpty' call
          var this_0 = $status.className;
          if (charSequenceLength(this_0) > 0) {
            $shouldReload._v = true;
            tmp_1 = Unit_instance;
          } else {
            forceReloadNow();
            tmp_1 = Unit_instance;
          }
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_instance;
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_instance;
        }
        tmp_2 = tmp_3;
      }
      return Unit_instance;
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_instance;
    };
  }
  function main$lambda(ctx) {
    ctx.q3a_1.w3b('/', ComposableSingletons$MainKt_getInstance().s44_1);
    ctx.q3a_1.w3b('/about', ComposableSingletons$MainKt_getInstance().t44_1);
    return Unit_instance;
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.a3c(removeSuffix(removeSuffix($this$addRouteInterceptor.q3b_1, '.html'), '.htm'));
    return Unit_instance;
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.r3f_1.s3k('headline-text', get_HeadlineTextStyle());
    ctx.r3f_1.s3k('subheadline-text', get_SubheadlineTextStyle());
    ctx.r3f_1.s3k('markdown', get_MarkdownStyle());
    ctx.r3f_1.s3k('page-content', get_PageContentStyle());
    ctx.r3f_1.s3k('footer', get_FooterStyle());
    ctx.r3f_1.s3k('nav-header', get_NavHeaderStyle());
    ctx.r3f_1.s3k('hero-container', get_HeroContainerStyle());
    ctx.r3f_1.s3k('home-grid', get_HomeGridStyle());
    ctx.r3f_1.s3k('home-grid-cell', get_HomeGridCellStyle());
    ctx.r3f_1.y3k('-circle', get_CircleButtonVariant());
    ctx.r3f_1.y3k('-uncolored', get_UncoloredButtonVariant());
    ctx.r3f_1.z3k('side-menu-slide-in', get_SideMenuSlideInAnim());
    initColorMode(ctx);
    initSiteStyles(ctx);
    initTheme(ctx);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
        $router.t3b(ComposableSingletons$MainKt_getInstance().u44_1, $composer_0, 6 | com_varabyte_kobweb_navigation_Router$stableprop_getter() << 3, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1190994075, true, main$lambda$lambda($router), $composer_0, 54);
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
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      return Unit_instance;
    };
  }
  function mainWrapper() {
    main();
  }
  function AboutPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1576304819);
    if (!($changed === 0) || !$composer_0.s1t()) {
      var tmp = get_LocalMarkdownContext();
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      CompositionLocalProvider(tmp.g21(new MarkdownContext('About.md', tmp$ret$0)), ComposableSingletons$AboutKt_getInstance().n47_1, $composer_0, 56);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(AboutPage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_1$lambda_irurs3($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    Text('About this template', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_2$lambda_nfmt4u($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('This template is intended to both demonstrate some fundamentals of the Kobweb framework and act a starting point you can build your own site from.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_3$lambda_5dznxd($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Learn', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_4$lambda_y7m4zk($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("If this is your first time using Kobweb, please open this site's project in an IDE and take a few minutes to look around the code.", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_5$lambda_7zvfxd($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Files', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_6$lambda_ktr14u($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('AppEntry.kt', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_7$lambda_ldqjs3($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('@App', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_8$lambda_7fvxa4($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('This file declares a method that is an entry point for all pages on your site. You can rename the file and the method if you like. Kobweb searches for a single method at compile time annotated with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().b45_1, $composer_0, 48, 1);
    Text('.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_9$lambda_yrlnmt($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('AppStyles.kt', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_10$lambda_i5qkjn($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('An example of declaring generally useful styles that can be used anywhere across the whole site. Otherwise, you normally declare styles close to the widget that uses them.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_11$lambda_o1r0da($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('SiteTheme.kt', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_12$lambda_4rvgox($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('An example of how to define some site-specific colors, effectively extending the palette provided by Silk.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_13$lambda_xlhxr4($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('components/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_14$lambda_8lzn5t($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('By convention, Kobweb codebases organize reusable site components under this folder. Within it, you have:', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_15$lambda_k7mtwe($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('layouts/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_16$lambda_lzur0j($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().j45_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Represents top-level organization for pages', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_17$lambda_6trq1o($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('sections/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_18$lambda_zdpuv9($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().l45_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Areas of content that appear across multiple pages (such as nav bars and footers)', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_19$lambda_6k3dt2($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('widgets/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_20$lambda_bqdg8s($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().n45_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Home for low-level UI pieces that you can use around your site', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_21$lambda_h390tf($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    Li(null, ComposableSingletons$AboutKt_getInstance().k45_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().m45_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().o45_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_22$lambda_p48k3i($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('pages/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_23$lambda_3pdwyp($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('@Composable', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_24$lambda_wj0e0w($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('@Page', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_25$lambda_9oh6w1($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('resources/markdown', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_26$lambda_j55a66($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Any ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().r45_1, $composer_0, 48, 1);
    Text(' under this folder additionally tagged with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().s45_1, $composer_0, 48, 1);
    Text(' will have a route generated for it automatically. Defining a page outside of this folder will be flagged as an error by the Kobweb Gradle plugin at compile time. Note that additional pages (like this one!) might live under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().t45_1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_27$lambda_n2caqr($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('resources/', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_28$lambda_5ra6bg($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('public', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_29$lambda_ykwndn($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().w45_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' If you want to host any media on your site (such as an icon, an image, text configuration files, movies, fonts, etc.), you should put it under this folder.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_30$lambda_temkxx($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('markdown', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_35($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_31$lambda_csuzz0($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().y45_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Any markdown discovered in here by Kobweb at compile time will be converted into pages on your site.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_36($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_32$lambda_g0rh37($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    Li(null, ComposableSingletons$AboutKt_getInstance().x45_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().z45_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_37($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_33$lambda_q6q3tq($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Classes', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_38($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_34$lambda_2mwd8h($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('The Kobweb and Silk APIs introduce a lot of powerful concepts. Here are some of the most important ones to know about which you can find used throughout this template.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_39($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_35$lambda_vgiuao($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Modifier', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_40($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_36$lambda_aqyqm9($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Modifier', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_41($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_37$lambda_i2nqfy($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Kobweb introduces the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().e46_1, $composer_0, 48, 1);
    Text(' keyword that Android developers will recognize from the Jetpack Compose API. In a webdev context, this is used for setting CSS styles and html attributes on elements in the page.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_42($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_38$lambda_o4tugz($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('CssStyle', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_43($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_39$lambda_4osml8($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('CssStyle', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_44($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_40$lambda_hhfui($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Traditional HTML pages use CSS to style their UI. In Kobweb, these styles can be declared using the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().h46_1, $composer_0, 48, 1);
    Text(' class in a Kotlin-idiomatic way. You can find examples of style blocks used throughout the template.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_45($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_41$lambda_sc517p($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Keyframes', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_46($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_42$lambda_dvcjp8($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Keyframes', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_47($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_43$lambda_ey9xcz($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('CssStyle', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_48($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_44$lambda_r97njy($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Modifier.animation(YourKeyframes.toAnimation(...))', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_49($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_45$lambda_1keti9($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('You can create animations by declaring keyframes for them, using ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().k46_1, $composer_0, 48, 1);
    Text(' blocks to define them (similar to declaring ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().l46_1, $composer_0, 48, 1);
    Text(' style blocks). Once defined, call ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().m46_1, $composer_0, 48, 1);
    Text(' to reference them.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_50($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_46$lambda_ue1akg($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Starting Point', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_51($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_47$lambda_btgach($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    Text('About', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_52($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_48$lambda_h066pq($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('This template aims to create some generally useful pieces that most sites will want to use. Making your own site could be as easy as deleting this ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().p46_1, $composer_0, 48, 1);
    Text(" page and working from there. However, you are welcome to modify or delete anything you find in the template that you don't plan to use in your final site.", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_53($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_49$lambda_p7be77($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("If instead you'd like to start from scratch, you can run", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_54($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_50$lambda_udlgmx($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('$ kobweb create app/empty\n', $composer_0, 0);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_55($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_51$lambda_1jyzkq($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().s46_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_56($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_52$lambda_r9nhhh($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('which will create a new project with nothing inside of it except for a minimal, skeletal structure.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_57($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_53$lambda_exu3fg($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Export and Deploy', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_58($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_54$lambda_dvsdmr($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("When you are ready to share your site with the world, you'll want to export it first. This will create a production snapshot of your site.", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_59($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_55$lambda_sbp7a6($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    Text('static layout', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_60($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_56$lambda_hx9s1($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    Text('full stack', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_61($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_57$lambda_tbjqu8($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      Text('read more about these choices here', $composer_0, 6);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_62($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_58$lambda_cvxu2p($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('There are two flavors of Kobweb sites: ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().x46_1, $composer_0, 48, 1);
    Text(' and ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().y46_1, $composer_0, 48, 1);
    Text('. You can ', $composer_0, 6);
    Link('https://github.com/varabyte/kobweb#static-layout-vs-full-stack-sites', null, null, null, null, null, null, ComposableSingletons$AboutKt_getInstance().z46_1, $composer_0, 12582918, 126);
    Text('.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_63($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_59$lambda_fxomzi($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('For most sites, a static layout site is what you want, so to do that, return to the command line and run:', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_64($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_60$lambda_arekjs($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('$ kobweb export --layout static\n', $composer_0, 0);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_65($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_61$lambda_vg30d5($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().c47_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_66($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_62$lambda_2mgjay($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('.kobweb/site', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_67($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_63$lambda_q75xr9($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('After that runs for a little while, your production site should be generated! You can find the files under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().e47_1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_68($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_64$lambda_g0bn5o($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Test it locally by running:', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_69($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_65$lambda_ctatwj($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('$ kobweb run --layout static --env prod\n', $composer_0, 0);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_70($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_66$lambda_te6r0e($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().h47_1, $composer_0, 48, 1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_71($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_67$lambda_kk9y7($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("If you're satisfied, you can upload your site files to the static website host provider of your choice. Each provider has its own instructions for how it discovers your files, so please refer to their documentation.", $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_72($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_68$lambda_s92740($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      Text('read this blog post', $composer_0, 6);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_73($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$AboutKt$lambda_69$lambda_dyfdsx($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('You can ', $composer_0, 6);
    Link('https://bitspittle.dev/blog/2022/staticdeploy', null, null, null, null, null, null, ComposableSingletons$AboutKt_getInstance().k47_1, $composer_0, 12582918, 126);
    Text(' for some concrete examples of exporting a Kobweb site to two popular static website hosting providers.', $composer_0, 6);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_74($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda_j4pg8n($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      $composer_0.z1t(1747549790);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.i1v();
      var tmp;
      if (false || it === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m;
        $composer_0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      H1(tmp0_group, ComposableSingletons$AboutKt_getInstance().v44_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().w44_1, $composer_0, 48, 1);
      HorizontalDivider(null, null, $composer_0, 0, 3);
      $composer_0.z1t(1747566096);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.i1v();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_0;
        $composer_0.t1v(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b1u();
      H2(tmp1_group, ComposableSingletons$AboutKt_getInstance().x44_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().y44_1, $composer_0, 48, 1);
      $composer_0.z1t(1747578608);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.i1v();
      var tmp_3;
      if (false || it_1 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_1 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_1;
        $composer_0.t1v(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.b1u();
      H3(tmp2_group, ComposableSingletons$AboutKt_getInstance().z44_1, $composer_0, 54, 0);
      $composer_0.z1t(1747583286);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.i1v();
      var tmp_5;
      if (false || it_2 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_2 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_2;
        $composer_0.t1v(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.b1u();
      H4(tmp3_group, ComposableSingletons$AboutKt_getInstance().a45_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().c45_1, $composer_0, 48, 1);
      $composer_0.z1t(1747604439);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = $composer_0.i1v();
      var tmp_7;
      if (false || it_3 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_3 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_3;
        $composer_0.t1v(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.b1u();
      H4(tmp4_group, ComposableSingletons$AboutKt_getInstance().d45_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().e45_1, $composer_0, 48, 1);
      $composer_0.z1t(1747618711);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_4 = $composer_0.i1v();
      var tmp_9;
      if (false || it_4 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_4 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_4;
        $composer_0.t1v(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp5_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      $composer_0.b1u();
      H4(tmp5_group, ComposableSingletons$AboutKt_getInstance().f45_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().g45_1, $composer_0, 48, 1);
      $composer_0.z1t(1747630901);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = $composer_0.i1v();
      var tmp_11;
      if (false || it_5 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_5 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_5;
        $composer_0.t1v(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      $composer_0.b1u();
      H4(tmp6_group, ComposableSingletons$AboutKt_getInstance().h45_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().i45_1, $composer_0, 48, 1);
      Ul(null, ComposableSingletons$AboutKt_getInstance().p45_1, $composer_0, 48, 1);
      $composer_0.z1t(1747684880);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = $composer_0.i1v();
      var tmp_13;
      if (false || it_6 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_6 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_6;
        $composer_0.t1v(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      $composer_0.b1u();
      H4(tmp7_group, ComposableSingletons$AboutKt_getInstance().q45_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().u45_1, $composer_0, 48, 1);
      $composer_0.z1t(1747721204);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_7 = $composer_0.i1v();
      var tmp_15;
      if (false || it_7 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_7 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_7;
        $composer_0.t1v(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmp8_group = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      $composer_0.b1u();
      H4(tmp8_group, ComposableSingletons$AboutKt_getInstance().v45_1, $composer_0, 54, 0);
      Ul(null, ComposableSingletons$AboutKt_getInstance().a46_1, $composer_0, 48, 1);
      $composer_0.z1t(1747758866);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_8 = $composer_0.i1v();
      var tmp_17;
      if (false || it_8 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_8 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_8;
        $composer_0.t1v(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_8;
      }
      var tmp_18 = tmp_17;
      var tmp9_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_0.b1u();
      H3(tmp9_group, ComposableSingletons$AboutKt_getInstance().b46_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().c46_1, $composer_0, 48, 1);
      $composer_0.z1t(1747772691);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_9 = $composer_0.i1v();
      var tmp_19;
      if (false || it_9 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_9 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_9;
        $composer_0.t1v(value_9);
        tmp_19 = value_9;
      } else {
        tmp_19 = it_9;
      }
      var tmp_20 = tmp_19;
      var tmp10_group = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      $composer_0.b1u();
      H4(tmp10_group, ComposableSingletons$AboutKt_getInstance().d46_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().f46_1, $composer_0, 48, 1);
      $composer_0.z1t(1747793843);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_10 = $composer_0.i1v();
      var tmp_21;
      if (false || it_10 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_10 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_10;
        $composer_0.t1v(value_10);
        tmp_21 = value_10;
      } else {
        tmp_21 = it_10;
      }
      var tmp_22 = tmp_21;
      var tmp11_group = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      $composer_0.b1u();
      H4(tmp11_group, ComposableSingletons$AboutKt_getInstance().g46_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().i46_1, $composer_0, 48, 1);
      $composer_0.z1t(1747814996);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_11 = $composer_0.i1v();
      var tmp_23;
      if (false || it_11 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_11 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_11;
        $composer_0.t1v(value_11);
        tmp_23 = value_11;
      } else {
        tmp_23 = it_11;
      }
      var tmp_24 = tmp_23;
      var tmp12_group = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      $composer_0.b1u();
      H4(tmp12_group, ComposableSingletons$AboutKt_getInstance().j46_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().n46_1, $composer_0, 48, 1);
      $composer_0.z1t(1747848761);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_12 = $composer_0.i1v();
      var tmp_25;
      if (false || it_12 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_12 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_12;
        $composer_0.t1v(value_12);
        tmp_25 = value_12;
      } else {
        tmp_25 = it_12;
      }
      var tmp_26 = tmp_25;
      var tmp13_group = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
      $composer_0.b1u();
      H2(tmp13_group, ComposableSingletons$AboutKt_getInstance().o46_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().q46_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().r46_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().t46_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().u46_1, $composer_0, 48, 1);
      $composer_0.z1t(1747890908);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_13 = $composer_0.i1v();
      var tmp_27;
      if (false || it_13 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.pages.ComposableSingletons$AboutKt.lambda-70.<anonymous>.<anonymous>' call
        var value_13 = ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_13;
        $composer_0.t1v(value_13);
        tmp_27 = value_13;
      } else {
        tmp_27 = it_13;
      }
      var tmp_28 = tmp_27;
      var tmp14_group = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      $composer_0.b1u();
      H2(tmp14_group, ComposableSingletons$AboutKt_getInstance().v46_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().w46_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().a47_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().b47_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().d47_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().f47_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().g47_1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().i47_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().j47_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().l47_1, $composer_0, 48, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m($this$H1) {
    $this$H1.t2r('about-this-template');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_0($this$H2) {
    $this$H2.t2r('learn');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_1($this$H3) {
    $this$H3.t2r('files');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_2($this$H4) {
    $this$H4.t2r('appentry-kt');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_3($this$H4) {
    $this$H4.t2r('appstyles-kt');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_4($this$H4) {
    $this$H4.t2r('sitetheme-kt');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_5($this$H4) {
    $this$H4.t2r('components');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_6($this$H4) {
    $this$H4.t2r('pages');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_7($this$H4) {
    $this$H4.t2r('resources');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_8($this$H3) {
    $this$H3.t2r('classes');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_9($this$H4) {
    $this$H4.t2r('modifier');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_10($this$H4) {
    $this$H4.t2r('cssstyle');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_11($this$H4) {
    $this$H4.t2r('keyframes');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_12($this$H2) {
    $this$H2.t2r('starting-point');
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt$lambda_70$lambda$lambda_384s3m_13($this$H2) {
    $this$H2.t2r('export-and-deploy');
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_75($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda_71$lambda_9ox0tk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      MarkdownLayout('About', ComposableSingletons$AboutKt_getInstance().m47_1, $composer_0, 54);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AboutKt() {
    ComposableSingletons$AboutKt_instance = this;
    var tmp = this;
    tmp.v44_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(1029801623, false, ComposableSingletons$AboutKt$lambda_1$lambda_irurs3));
    var tmp_0 = this;
    tmp_0.w44_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-1907008424, false, ComposableSingletons$AboutKt$lambda_2$lambda_nfmt4u));
    var tmp_1 = this;
    tmp_1.x44_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(325938648, false, ComposableSingletons$AboutKt$lambda_3$lambda_5dznxd));
    var tmp_2 = this;
    tmp_2.y44_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(668240655, false, ComposableSingletons$AboutKt$lambda_4$lambda_y7m4zk));
    var tmp_3 = this;
    tmp_3.z44_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-377924327, false, ComposableSingletons$AboutKt$lambda_5$lambda_7zvfxd));
    var tmp_4 = this;
    tmp_4.a45_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-1081787302, false, ComposableSingletons$AboutKt$lambda_6$lambda_ktr14u));
    var tmp_5 = this;
    tmp_5.b45_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-1751536431, false, ComposableSingletons$AboutKt$lambda_7$lambda_ldqjs3));
    var tmp_6 = this;
    tmp_6.c45_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-35622320, false, ComposableSingletons$AboutKt$lambda_8$lambda_7fvxa4));
    var tmp_7 = this;
    tmp_7.d45_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-863210863, false, ComposableSingletons$AboutKt$lambda_9$lambda_yrlnmt));
    var tmp_8 = this;
    tmp_8.e45_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(-739485295, false, ComposableSingletons$AboutKt$lambda_10$lambda_i5qkjn));
    var tmp_9 = this;
    tmp_9.f45_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1567073838, false, ComposableSingletons$AboutKt$lambda_11$lambda_o1r0da));
    var tmp_10 = this;
    tmp_10.g45_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-1443348270, false, ComposableSingletons$AboutKt$lambda_12$lambda_4rvgox));
    var tmp_11 = this;
    tmp_11.h45_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(2024030483, false, ComposableSingletons$AboutKt$lambda_13$lambda_xlhxr4));
    var tmp_12 = this;
    tmp_12.i45_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-2147211245, false, ComposableSingletons$AboutKt$lambda_14$lambda_8lzn5t));
    var tmp_13 = this;
    tmp_13.j45_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(-620307083, false, ComposableSingletons$AboutKt$lambda_15$lambda_k7mtwe));
    var tmp_14 = this;
    tmp_14.k45_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(101910772, false, ComposableSingletons$AboutKt$lambda_16$lambda_lzur0j));
    var tmp_15 = this;
    tmp_15.l45_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1627565086, false, ComposableSingletons$AboutKt$lambda_17$lambda_6trq1o));
    var tmp_16 = this;
    tmp_16.m45_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-105778211, false, ComposableSingletons$AboutKt$lambda_18$lambda_zdpuv9));
    var tmp_17 = this;
    tmp_17.n45_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-548351235, false, ComposableSingletons$AboutKt$lambda_19$lambda_6k3dt2));
    var tmp_18 = this;
    tmp_18.o45_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(2013272764, false, ComposableSingletons$AboutKt$lambda_20$lambda_bqdg8s));
    var tmp_19 = this;
    tmp_19.p45_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-2032345627, false, ComposableSingletons$AboutKt$lambda_21$lambda_h390tf));
    var tmp_20 = this;
    tmp_20.q45_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(1320167508, false, ComposableSingletons$AboutKt$lambda_22$lambda_p48k3i));
    var tmp_21 = this;
    tmp_21.r45_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-272021035, false, ComposableSingletons$AboutKt$lambda_23$lambda_3pdwyp));
    var tmp_22 = this;
    tmp_22.s45_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-1919578100, false, ComposableSingletons$AboutKt$lambda_24$lambda_wj0e0w));
    var tmp_23 = this;
    tmp_23.t45_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(-653507315, false, ComposableSingletons$AboutKt$lambda_25$lambda_9oh6w1));
    var tmp_24 = this;
    tmp_24.u45_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(1443893076, false, ComposableSingletons$AboutKt$lambda_26$lambda_j55a66));
    var tmp_25 = this;
    tmp_25.v45_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(616304533, false, ComposableSingletons$AboutKt$lambda_27$lambda_n2caqr));
    var tmp_26 = this;
    tmp_26.w45_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(237648108, false, ComposableSingletons$AboutKt$lambda_28$lambda_5ra6bg));
    var tmp_27 = this;
    tmp_27.x45_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-1495695189, false, ComposableSingletons$AboutKt$lambda_29$lambda_ykwndn));
    var tmp_28 = this;
    tmp_28.y45_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(74252629, false, ComposableSingletons$AboutKt$lambda_30$lambda_temkxx));
    var tmp_29 = this;
    tmp_29.z45_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(778655060, false, ComposableSingletons$AboutKt$lambda_31$lambda_csuzz0));
    var tmp_30 = this;
    tmp_30.a46_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(478272860, false, ComposableSingletons$AboutKt$lambda_32$lambda_g0rh37));
    var tmp_31 = this;
    tmp_31.b46_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(1239242640, false, ComposableSingletons$AboutKt$lambda_33$lambda_q6q3tq));
    var tmp_32 = this;
    tmp_32.c46_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(740030101, false, ComposableSingletons$AboutKt$lambda_34$lambda_2mwd8h));
    var tmp_33 = this;
    tmp_33.d46_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(-87558442, false, ComposableSingletons$AboutKt$lambda_35$lambda_vgiuao));
    var tmp_34 = this;
    tmp_34.e46_1 = ComposableLambda$invoke$ref_40(composableLambdaInstance(-1679746985, false, ComposableSingletons$AboutKt$lambda_36$lambda_aqyqm9));
    var tmp_35 = this;
    tmp_35.f46_1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(36167126, false, ComposableSingletons$AboutKt$lambda_37$lambda_i2nqfy));
    var tmp_36 = this;
    tmp_36.g46_1 = ComposableLambda$invoke$ref_42(composableLambdaInstance(-791421417, false, ComposableSingletons$AboutKt$lambda_38$lambda_o4tugz));
    var tmp_37 = this;
    tmp_37.h46_1 = ComposableLambda$invoke$ref_43(composableLambdaInstance(1911357336, false, ComposableSingletons$AboutKt$lambda_39$lambda_4osml8));
    var tmp_38 = this;
    tmp_38.i46_1 = ComposableLambda$invoke$ref_44(composableLambdaInstance(-667695849, false, ComposableSingletons$AboutKt$lambda_40$lambda_hhfui));
    var tmp_39 = this;
    tmp_39.j46_1 = ComposableLambda$invoke$ref_45(composableLambdaInstance(-1495284392, false, ComposableSingletons$AboutKt$lambda_41$lambda_sc517p));
    var tmp_40 = this;
    tmp_40.k46_1 = ComposableLambda$invoke$ref_46(composableLambdaInstance(-156081130, false, ComposableSingletons$AboutKt$lambda_42$lambda_dvcjp8));
    var tmp_41 = this;
    tmp_41.l46_1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(309257407, false, ComposableSingletons$AboutKt$lambda_43$lambda_ey9xcz));
    var tmp_42 = this;
    tmp_42.m46_1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(902746078, false, ComposableSingletons$AboutKt$lambda_44$lambda_r97njy));
    var tmp_43 = this;
    tmp_43.n46_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(1497648759, false, ComposableSingletons$AboutKt$lambda_45$lambda_1keti9));
    var tmp_44 = this;
    tmp_44.o46_1 = ComposableLambda$invoke$ref_50(composableLambdaInstance(-953271153, false, ComposableSingletons$AboutKt$lambda_46$lambda_ue1akg));
    var tmp_45 = this;
    tmp_45.p46_1 = ComposableLambda$invoke$ref_51(composableLambdaInstance(1255749692, false, ComposableSingletons$AboutKt$lambda_47$lambda_btgach));
    var tmp_46 = this;
    tmp_46.q46_1 = ComposableLambda$invoke$ref_52(composableLambdaInstance(793785784, false, ComposableSingletons$AboutKt$lambda_48$lambda_h066pq));
    var tmp_47 = this;
    tmp_47.r46_1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(89922809, false, ComposableSingletons$AboutKt$lambda_49$lambda_p7be77));
    var tmp_48 = this;
    tmp_48.s46_1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(-1129255028, false, ComposableSingletons$AboutKt$lambda_50$lambda_udlgmx));
    var tmp_49 = this;
    tmp_49.t46_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(586659083, false, ComposableSingletons$AboutKt$lambda_51$lambda_1jyzkq));
    var tmp_50 = this;
    tmp_50.u46_1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(-613940166, false, ComposableSingletons$AboutKt$lambda_52$lambda_r9nhhh));
    var tmp_51 = this;
    tmp_51.v46_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-1657134128, false, ComposableSingletons$AboutKt$lambda_53$lambda_exu3fg));
    var tmp_52 = this;
    tmp_52.w46_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(-1317803141, false, ComposableSingletons$AboutKt$lambda_54$lambda_dvsdmr));
    var tmp_53 = this;
    tmp_53.x46_1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(-1559702208, false, ComposableSingletons$AboutKt$lambda_55$lambda_sbp7a6));
    var tmp_54 = this;
    tmp_54.y46_1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(-1547849559, false, ComposableSingletons$AboutKt$lambda_56$lambda_hx9s1));
    var tmp_55 = this;
    tmp_55.z46_1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(-1341273682, false, ComposableSingletons$AboutKt$lambda_57$lambda_tbjqu8));
    var tmp_56 = this;
    tmp_56.a47_1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(-2021666116, false, ComposableSingletons$AboutKt$lambda_58$lambda_cvxu2p));
    var tmp_57 = this;
    tmp_57.b47_1 = ComposableLambda$invoke$ref_63(composableLambdaInstance(1569438205, false, ComposableSingletons$AboutKt$lambda_59$lambda_fxomzi));
    var tmp_58 = this;
    tmp_58.c47_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(764944707, false, ComposableSingletons$AboutKt$lambda_60$lambda_arekjs));
    var tmp_59 = this;
    tmp_59.d47_1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(490963714, false, ComposableSingletons$AboutKt$lambda_61$lambda_vg30d5));
    var tmp_60 = this;
    tmp_60.e47_1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(-788154659, false, ComposableSingletons$AboutKt$lambda_62$lambda_2mgjay));
    var tmp_61 = this;
    tmp_61.f47_1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(865575230, false, ComposableSingletons$AboutKt$lambda_63$lambda_q75xr9));
    var tmp_62 = this;
    tmp_62.g47_1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(161712255, false, ComposableSingletons$AboutKt$lambda_64$lambda_g0bn5o));
    var tmp_63 = this;
    tmp_63.h47_1 = ComposableLambda$invoke$ref_69(composableLambdaInstance(61081732, false, ComposableSingletons$AboutKt$lambda_65$lambda_ctatwj));
    var tmp_64 = this;
    tmp_64.i47_1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(-212899261, false, ComposableSingletons$AboutKt$lambda_66$lambda_te6r0e));
    var tmp_65 = this;
    tmp_65.j47_1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(-542150720, false, ComposableSingletons$AboutKt$lambda_67$lambda_kk9y7));
    var tmp_66 = this;
    tmp_66.k47_1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(1833125448, false, ComposableSingletons$AboutKt$lambda_68$lambda_s92740));
    var tmp_67 = this;
    tmp_67.l47_1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(1152733014, false, ComposableSingletons$AboutKt$lambda_69$lambda_dyfdsx));
    var tmp_68 = this;
    tmp_68.m47_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(1731502906, false, ComposableSingletons$AboutKt$lambda_70$lambda_j4pg8n));
    var tmp_69 = this;
    tmp_69.n47_1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(1799439731, false, ComposableSingletons$AboutKt$lambda_71$lambda_9ox0tk));
  }
  var ComposableSingletons$AboutKt_instance;
  function ComposableSingletons$AboutKt_getInstance() {
    if (ComposableSingletons$AboutKt_instance == null)
      new ComposableSingletons$AboutKt();
    return ComposableSingletons$AboutKt_instance;
  }
  function AboutPage$lambda($$changed) {
    return function ($composer, $force) {
      AboutPage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function initColorMode(ctx) {
    var tmp = ctx.p3f_1;
    var tmp0_elvis_lhs = loadFromLocalStorage(Companion_instance_0, 'frontend:colorMode');
    tmp.z3g_1 = tmp0_elvis_lhs == null ? get_systemPreference(Companion_instance_0) : tmp0_elvis_lhs;
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-2108914949);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      // Inline function 'kotlin.run' call
      // Inline function 'epicer.frontend.AppEntry.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-495988742, true, AppEntry$lambda(content), $composer_0, 54);
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
        // Inline function 'epicer.frontend.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_77(dispatchReceiver);
        $composer_1.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$slambda($colorMode, resultContinuation) {
    this.w47_1 = $colorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda).q13 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.r13($this$LaunchedEffect, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(AppEntry$lambda$slambda).s9 = function (p1, $completion) {
    return this.q13((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        if (tmp === 0) {
          this.z8_1 = 1;
          saveToLocalStorage(this.w47_1, 'frontend:colorMode');
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
  protoOf(AppEntry$lambda$slambda).r13 = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda(this.w47_1, completion);
    i.x47_1 = $this$LaunchedEffect;
    return i;
  };
  function AppEntry$lambda$slambda_0($colorMode, resultContinuation) {
    var i = new AppEntry$lambda$slambda($colorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.q13($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_76($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
        var colorMode = Companion_instance_0.l3j($composer_0, 6);
        $composer_0.z1t(599331412);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.j1l(colorMode);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i1v();
        var tmp_0;
        if (invalid || it === Companion_getInstance().r1o_1) {
          // Inline function 'epicer.frontend.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
          var value = AppEntry$lambda$slambda_0(colorMode, null);
          $composer_0.t1v(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.b1u();
        LaunchedEffect(colorMode, tmp0_group, $composer_0, 0);
        var tmp_2 = scrollBehavior(minHeight(toModifier(get_SmoothColorStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), get_vh(100)), Companion_instance_1.e32());
        // Inline function 'kotlin.run' call
        // Inline function 'epicer.frontend.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(867151520, true, AppEntry$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.j1l(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_1.i1v();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance().r1o_1) {
          // Inline function 'epicer.frontend.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = ComposableLambda$invoke$ref_76(dispatchReceiver);
          $composer_1.t1v(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_2, null, null, null, null, tmp0, $composer_0, 196608, 30);
        tmp = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_77($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_HeadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return HeadlineTextStyle;
  }
  var HeadlineTextStyle;
  function get_SubheadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return SubheadlineTextStyle;
  }
  var SubheadlineTextStyle;
  function get_CircleButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return CircleButtonVariant;
  }
  var CircleButtonVariant;
  function get_UncoloredButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return UncoloredButtonVariant;
  }
  var UncoloredButtonVariant;
  function initSiteStyles(ctx) {
    _init_properties_AppStyles_kt__9fg0zz();
    ctx.q3f_1.b3h('html', initSiteStyles$lambda);
    registerStyleBase(ctx.q3f_1, 'body', initSiteStyles$lambda_0);
    var tmp = get_HorizontalDividerStyle();
    modifyStyleBase(ctx.r3f_1, tmp, VOID, initSiteStyles$lambda_1);
  }
  function HeadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(textAlign(fontSize(Companion_instance_2, get_cssRem(3)), Companion_instance_3.o2z()), 1.2);
  }
  function SubheadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(fontSize(Companion_instance_2, get_cssRem(1)), Companion_instance_3.o2z()), get_color(toPalette($this$base.h3j_1)).o3d().n3d(VOID, VOID, VOID, 0.8));
  }
  function CircleButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return borderRadius(padding(Companion_instance_2, get_px(0)), get_percent(50));
  }
  function UncoloredButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return setVariable(Companion_instance_2, ButtonVars_getInstance().c3q(), Colors_instance.r3d());
  }
  function initSiteStyles$lambda($this$registerStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'no-preference';
    var tmp = new MediaFeature('prefers-reduced-motion', tmp$ret$2);
    $this$registerStyle.h3h(tmp, initSiteStyles$lambda$lambda);
    return Unit_instance;
  }
  function initSiteStyles$lambda$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return scrollBehavior(Companion_instance_2, Companion_instance_1.e32());
  }
  function initSiteStyles$lambda_0() {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(fontSize(fontFamily(Companion_instance_2, ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']), get_px(18)), 1.5);
  }
  function initSiteStyles$lambda_1($this$modifyStyleBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return fillMaxWidth(Companion_instance_2);
  }
  var properties_initialized_AppStyles_kt_kq2bkd;
  function _init_properties_AppStyles_kt__9fg0zz() {
    if (!properties_initialized_AppStyles_kt_kq2bkd) {
      properties_initialized_AppStyles_kt_kq2bkd = true;
      var tmp = Companion_instance_4;
      HeadlineTextStyle = base(tmp, VOID, HeadlineTextStyle$lambda);
      var tmp_0 = Companion_instance_4;
      SubheadlineTextStyle = base(tmp_0, VOID, SubheadlineTextStyle$lambda);
      var tmp_1 = get_ButtonStyle();
      CircleButtonVariant = addVariantBase(tmp_1, VOID, CircleButtonVariant$lambda);
      var tmp_2 = get_ButtonStyle();
      UncoloredButtonVariant = addVariantBase(tmp_2, VOID, UncoloredButtonVariant$lambda);
    }
  }
  var epicer_frontend_SitePalette_Brand$stable;
  var epicer_frontend_SitePalette$stable;
  var epicer_frontend_SitePalettes$stable;
  function Brand(primary, accent) {
    primary = primary === VOID ? Companion_instance_5.p3d(3965935) : primary;
    accent = accent === VOID ? Companion_instance_5.p3d(15981403) : accent;
    this.y47_1 = primary;
    this.z47_1 = accent;
  }
  function SitePalette(nearBackground, cobweb, brand) {
    this.a48_1 = nearBackground;
    this.b48_1 = cobweb;
    this.c48_1 = brand;
  }
  function SitePalettes() {
    SitePalettes_instance = this;
    this.d48_1 = new SitePalette(Companion_instance_5.p3d(16054010), Colors_instance.e3e(), new Brand(Companion_instance_5.p3d(3965935), Companion_instance_5.p3d(16562691)));
    this.e48_1 = new SitePalette(Companion_instance_5.p3d(1251103), Colors_instance.e3e().h3d(), new Brand(Companion_instance_5.p3d(3965935), Companion_instance_5.p3d(15981403)));
  }
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function toSitePalette(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.m2_1) {
      case 0:
        tmp = SitePalettes_getInstance().d48_1;
        break;
      case 1:
        tmp = SitePalettes_getInstance().e48_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function initTheme(ctx) {
    set_background(ctx.r3f_1.i3g_1.q3m_1, Companion_instance_5.p3d(16448250));
    set_color(ctx.r3f_1.i3g_1.q3m_1, Colors_instance.t3d());
    set_background(ctx.r3f_1.i3g_1.r3m_1, Companion_instance_5.p3d(395275));
    set_color(ctx.r3f_1.i3g_1.r3m_1, Colors_instance.m3e());
  }
  function get_MarkdownStyle() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return MarkdownStyle;
  }
  var MarkdownStyle;
  function MarkdownLayout(title, content, $composer, $changed) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-26524777);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j1l(title) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1u(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
      // Inline function 'kotlin.run' call
      // Inline function 'epicer.frontend.components.layouts.MarkdownLayout.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1129334848, true, MarkdownLayout$lambda(content), $composer_0, 54);
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
        // Inline function 'epicer.frontend.components.layouts.MarkdownLayout.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_79(dispatchReceiver);
        $composer_1.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      PageLayout(title, tmp0, $composer_0, 48 | 14 & $dirty);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(MarkdownLayout$lambda_0(title, content, $changed));
    }
  }
  function MarkdownStyle$lambda($this$CssStyle) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$CssStyle.e3h(MarkdownStyle$lambda$lambda);
    $this$CssStyle.g3h('h1', MarkdownStyle$lambda$lambda_0);
    $this$CssStyle.g3h('h2', MarkdownStyle$lambda$lambda_1);
    $this$CssStyle.g3h('h3', MarkdownStyle$lambda$lambda_2);
    $this$CssStyle.g3h('h4', MarkdownStyle$lambda$lambda_3);
    $this$CssStyle.g3h('ul', MarkdownStyle$lambda$lambda_4);
    $this$CssStyle.g3h(' :is(li,ol,ul)', MarkdownStyle$lambda$lambda_5);
    $this$CssStyle.g3h('code', MarkdownStyle$lambda$lambda_6($this$CssStyle));
    $this$CssStyle.g3h('pre', MarkdownStyle$lambda$lambda_7);
    $this$CssStyle.g3h('pre > code', MarkdownStyle$lambda$lambda_8($this$CssStyle));
    return Unit_instance;
  }
  function MarkdownStyle$lambda$lambda() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxSize(Companion_instance_2);
  }
  function MarkdownStyle$lambda$lambda_0() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return lineHeight(margin(fontWeight(fontSize(Companion_instance_2, get_cssRem(3)), 400), VOID, VOID, get_cssRem(2.5)), 1.2);
  }
  function MarkdownStyle$lambda$lambda_1() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_instance_2, get_cssRem(3)), 300), get_cssRem(2));
  }
  function MarkdownStyle$lambda$lambda_2() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_instance_2, get_cssRem(2.4)), 300), get_cssRem(1.5));
  }
  function MarkdownStyle$lambda$lambda_3() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(fontWeight_0(fontSize(Companion_instance_2, get_cssRem(1.2)), Companion_instance_6.m30()), get_cssRem(1), VOID, get_cssRem(0.5));
  }
  function MarkdownStyle$lambda$lambda_4() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return overflowWrap(fillMaxWidth(Companion_instance_2), Companion_instance_7.c32());
  }
  function MarkdownStyle$lambda$lambda_5() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin(Companion_instance_2, VOID, VOID, get_cssRem(0.25));
  }
  function MarkdownStyle$lambda$lambda_6($this_CssStyle) {
    return function () {
      return fontWeight_0(color(Companion_instance_2, get_color(toPalette($this_CssStyle.m3i_1)).o3d().n3d(VOID, VOID, VOID, 0.8)), Companion_instance_6.m30());
    };
  }
  function MarkdownStyle$lambda$lambda_7() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxWidth(margin(Companion_instance_2, get_cssRem(0.5), VOID, get_cssRem(2)));
  }
  function MarkdownStyle$lambda$lambda$lambda($this$overflow) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$overflow.t3e(Companion_instance_8.a32());
    return Unit_instance;
  }
  function MarkdownStyle$lambda$lambda_8($this_CssStyle) {
    return function () {
      var tmp = Companion_instance_2;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = backgroundColor(fillMaxWidth(display(tmp, 'block')), toSitePalette($this_CssStyle.m3i_1).a48_1);
      var tmp_1 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = fontSize(padding(borderRadius(border(tmp_0, tmp_1, 'solid', get_color(toPalette($this_CssStyle.m3i_1))), get_cssRem(0.25)), get_cssRem(0.5)), get_cssRem(1));
      return overflow(tmp_2, MarkdownStyle$lambda$lambda$lambda);
    };
  }
  function MarkdownLayout$lambda$lambda($content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $content($composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_78($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function MarkdownLayout$lambda($content) {
    return function ($this$PageLayout, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
        var tmp_0 = get_MarkdownStyle();
        var tmp_1 = toAttrs(tmp_0, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
        // Inline function 'kotlin.run' call
        // Inline function 'epicer.frontend.components.layouts.MarkdownLayout.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1878156767, true, MarkdownLayout$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.j1l(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.i1v();
        var tmp_2;
        if (invalid || it === Companion_getInstance().r1o_1) {
          // Inline function 'epicer.frontend.components.layouts.MarkdownLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_78(dispatchReceiver);
          $composer_1.t1v(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_1, tmp0, $composer_0, 48, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_79($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function MarkdownLayout$lambda_0($title, $content, $$changed) {
    return function ($composer, $force) {
      MarkdownLayout($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_MarkdownLayout_kt_c0ljiz;
  function _init_properties_MarkdownLayout_kt__1k3pk7() {
    if (!properties_initialized_MarkdownLayout_kt_c0ljiz) {
      properties_initialized_MarkdownLayout_kt_c0ljiz = true;
      MarkdownStyle = CssStyle(VOID, MarkdownStyle$lambda);
    }
  }
  function get_PageContentStyle() {
    _init_properties_PageLayout_kt__pf69s7();
    return PageContentStyle;
  }
  var PageContentStyle;
  function SvgCobweb(modifier, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(843951517);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      var color = toSitePalette(Companion_instance_0.l3j($composer_0, 6)).b48_1;
      var tmp = maxWidth(modifier, get_percent(100));
      $composer_0.z1t(-1521284897);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.i1v();
      var tmp_0;
      if (false || it === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.layouts.SvgCobweb.<anonymous>' call
        var value = SvgCobweb$lambda;
        this_0.t1v(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.b1u();
      var tmp_2 = toAttrs_0(tmp, tmp0_group);
      // Inline function 'kotlin.run' call
      // Inline function 'epicer.frontend.components.layouts.SvgCobweb.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-369011089, true, SvgCobweb$lambda_0(color), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i1v();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.layouts.SvgCobweb.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_82(dispatchReceiver);
        $composer_1.t1v(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Svg(tmp_2, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(SvgCobweb$lambda_1(modifier, $changed));
    }
  }
  function PageLayout(title, content, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-850061578);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j1l(title) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1u(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
      $composer_0.z1t(59324968);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.layouts.PageLayout.<anonymous>' call
        var value = PageLayout$slambda_0(title, null);
        tmp0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      LaunchedEffect(title, tmp0_group, $composer_0, 14 & $dirty);
      var tmp_1 = minHeight(fillMaxWidth(Companion_instance_2), get_percent(100));
      $composer_0.z1t(59349590);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.i1v();
      var tmp_2;
      if (false || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.layouts.PageLayout.<anonymous>' call
        var value_0 = PageLayout$lambda;
        this_0.t1v(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp1_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.b1u();
      var tmp_4 = gridTemplateRows(tmp_1, tmp1_group);
      var tmp_5 = Center_instance;
      // Inline function 'kotlin.run' call
      // Inline function 'epicer.frontend.components.layouts.PageLayout.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1242026704, true, PageLayout$lambda_0(content), $composer_0, 54);
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
        // Inline function 'epicer.frontend.components.layouts.PageLayout.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_85(dispatchReceiver);
        $composer_1.t1v(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_4, tmp_5, null, tmp0_0, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.i1o();
    }
    var tmp2_safe_receiver = $composer_0.b1w();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.l21(PageLayout$lambda_1(title, content, $changed));
    }
  }
  function PageContentStyle$lambda($this$CssStyle) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$CssStyle.e3h(PageContentStyle$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.f3j(tmp, PageContentStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function PageContentStyle$lambda$lambda() {
    _init_properties_PageLayout_kt__pf69s7();
    var tmp0_$receiver = fillMaxSize(Companion_instance_2);
    var tmp1_leftRight = get_cssRem(2);
    var tmp2_top = get_cssRem(4);
    return padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight);
  }
  function PageContentStyle$lambda$lambda_0() {
    _init_properties_PageLayout_kt__pf69s7();
    return maxWidth(Companion_instance_2, get_cssRem(60));
  }
  function SvgCobweb$lambda($this$toAttrs) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$toAttrs.o34(get_cssRem(25));
    $this$toAttrs.n34(get_cssRem(20));
    return Unit_instance;
  }
  function SvgCobweb$lambda$lambda$lambda($this$RadialGradient) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$RadialGradient.t34(0);
    $this$RadialGradient.u34(0);
    $this$RadialGradient.v34(get_percent(120));
    return Unit_instance;
  }
  function SvgCobweb$lambda$lambda$lambda_0($color) {
    return function ($this$RadialGradient, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = get_percent(50);
      Stop($this$RadialGradient, tmp, $color, null, $composer_0, 14 & $changed, 4);
      Stop($this$RadialGradient, get_percent(100), $color, 0.0, $composer_0, 3072 | 14 & $changed, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_80($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function SvgCobweb$lambda$lambda($cobwebFadeOutId, $color) {
    return function ($this$Defs, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.z1t(-1442265059);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.i1v();
      var tmp;
      if (false || it === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = SvgCobweb$lambda$lambda$lambda;
        $composer_0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      // Inline function 'kotlin.run' call
      // Inline function 'epicer.frontend.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1186646733, true, SvgCobweb$lambda$lambda$lambda_0($color), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i1v();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_80(dispatchReceiver);
        $composer_1.t1v(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      RadialGradient($this$Defs, $cobwebFadeOutId, tmp0_group, tmp0, $composer_0, 3504 | 14 & $changed, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_81($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function SvgCobweb$lambda$lambda$lambda_1($this$transform) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$transform.g35(0.6);
    return Unit_instance;
  }
  function SvgCobweb$lambda$lambda_0($cobwebFadeOutId) {
    return function ($this$Path) {
      $this$Path.a35('M-19.5501 -131.516L37.5899-59.412C34.8649 -10.82 13.8419 26.38 -14.8001 60.62L-21.5161 58.86V78.18L-18.9591 78.852C-3.60911 123.917 -9.87111 169.679 -17.1391 217.146L-21.5151 219.193V239.823L-12.3351 235.529C-5.81911 246.236 1.32289 262.576 6.72489 276.859C10.0329 285.624 13.1183 294.472 15.9779 303.394L-21.5151 341.084V343.514H2.42689L30.9769 314.814C40.2469 314.451 72.7469 313.341 113.677 314.064C160.421 314.889 216.289 318.364 252.727 327.731L257.807 343.515H277.439L270.009 320.427C305.949 278.917 341.921 239.902 401.743 218.087L453.517 238.573V218.476L410.534 201.468C404.16 162.258 423.289 124.803 441.154 84.788L453.517 82.203V63.111L447.194 64.434L441.744 61.631C385.656 32.8 365.41 -16.36 348.444 -71.07L392.628 -131.516H369.478L330.878 -78.706C272.605 -77.452 218.403 -81.169 176.432 -116.496L174.158 -131.516H155.258L158.096 -112.766C130.96 -83.776 100.532 -64.812 53.5119 -69.41L4.29189 -131.516H-19.5521H-19.5501ZM180.367 -90.512C220.975 -64.208 268.865 -59.618 317.121 -59.882L283.981 -14.542C247.393 -14.146 214.125 -17.576 188.136 -39.18L180.367 -90.512ZM161.533 -90.072L169.823 -35.297C152.008 -16.681 132.529 -5.117 101.828 -8.443L68.7519 -50.18C107.345 -50.92 137.11 -67.324 161.532 -90.072H161.533ZM334.857 -52.48C350.393 -5.51302 371.907 40.21 419.407 70.242L367.639 81.062L366.823 80.645C329.553 61.5 316.378 29.005 304.888 -8.18501L304.172 -10.5L334.855 -52.48H334.857ZM54.1169 -38.562L88.5099 4.836C85.9869 34.419 73.1059 57.496 55.3699 79.043L4.96589 65.81C28.6799 36.036 47.6059 2.41699 54.1179 -38.563L54.1169 -38.562ZM191.965 -13.872C215.901 -0.177994 243.015 3.528 270.369 4.076L237.459 49.104C222.401 42.74 211.322 31.351 198.889 18.779L196.546 16.409L191.964 -13.871L191.965 -13.872ZM173.187 -13.062L178.779 23.893C167.603 31.393 154.343 36.043 139.733 39.385L116.831 10.488C139.541 9.093 157.926 -0.192001 173.187 -13.062ZM290.567 8.11099C300.313 37.266 313.713 66.128 341.147 86.601L285.219 98.291C272.222 87.109 265.242 73.557 258.063 58.401L256.393 54.871L290.567 8.11099ZM104.135 24.554L123.277 48.708L123.199 49.418C121.269 66.783 114.322 79.048 106.549 92.481L75.0129 84.201C88.2249 66.845 98.9529 47.373 104.133 24.554H104.135ZM181.809 43.907L187.821 83.649C184.26 84.3288 180.81 85.5 177.571 87.129L152.394 55.362C162.584 52.612 172.524 49.017 181.808 43.908L181.809 43.907ZM201.169 46.95C208.524 53.528 216.689 59.672 226.321 64.34L210.487 86.002C209.307 85.5035 208.103 85.0636 206.88 84.684L201.17 46.949L201.169 46.95ZM138.419 67.814L163.329 99.244C161.729 101.454 160.361 103.823 159.249 106.314L125.335 97.412C130.29 88.655 135.165 79.159 138.419 67.814ZM243.944 71.896C249.064 82.311 255.048 92.991 263.597 102.809L232.454 109.317C230.89 104.865 228.541 100.73 225.517 97.107L243.944 71.896ZM2.17189 84.4L51.0449 97.23C60.2719 125.445 56.8399 154.31 52.2449 184.678L3.17289 207.64C9.12289 167.493 13.4619 126.226 2.17189 84.4ZM418.314 89.562C403.381 122.197 388.2 156.295 390.881 193.692L347.141 176.385C343.541 151.369 355.917 126.94 367.866 100.107L418.316 89.563L418.314 89.562ZM71.7379 102.662L99.3519 109.91L99.9139 111.31C106.014 126.443 105.297 143.082 102.814 161.018L72.4959 175.203C75.7099 151.691 77.4719 127.39 71.7379 102.662ZM345.033 104.879C335.99 124.696 327.236 145.682 327.781 168.726L291.194 154.249C291.19 141.101 292.589 131.409 300.314 120.329L305.294 113.185L345.034 104.878L345.033 104.879ZM120.673 115.507L155.91 124.759C156.126 128.317 156.825 131.829 157.988 135.199L122.718 151.702C123.768 139.802 123.644 127.654 120.673 115.507ZM279.833 118.507C275.208 127.94 273.453 137.397 272.885 147.005L233.607 131.465C233.873 130.34 234.077 129.192 234.247 128.035L279.832 118.507H279.833ZM225.037 148.169L261.541 162.612C252.631 167.192 244.225 173.148 236.864 178.772C233.505 181.339 230.209 183.988 226.978 186.714L216.876 155.317C219.916 153.317 222.662 150.909 225.038 148.169H225.037ZM166.917 151.653L129.26 189.51C126.702 183.31 123.242 178.363 119.672 174.275L119.76 173.719L166.914 151.653H166.917ZM184.647 160.325C189.395 161.652 194.351 162.077 199.256 161.58L209.729 194.12C196.415 193.96 172.116 194.196 148.036 197.13L184.646 160.326L184.647 160.325ZM288.133 173.135L313.496 183.169C284.096 198.089 263.12 219.065 244.244 240.369L233.2 206.05C236.754 202.876 241.93 198.42 248.21 193.623C259.63 184.896 274.418 175.923 283.895 173.996L288.133 173.135ZM101.635 182.2L103.152 183.725C109 189.6 113.125 194.028 114.375 204.475L83.2319 235.783C82.8819 233.513 82.4939 231.153 82.0319 228.641C80.0219 217.691 77.5839 205.699 72.7069 195.737L101.635 182.202V182.2ZM337.563 192.693L376.781 208.211C327.358 230.711 293.866 264.895 263.331 299.681L250.896 261.034C274.999 233.196 298.569 207.418 337.564 192.694L337.563 192.693ZM55.5769 203.75C58.5789 210.587 61.7989 221.92 63.6529 232.016C65.2349 240.626 66.1529 248.096 66.6329 252.466L30.7509 288.541C28.6803 282.405 26.4966 276.307 24.2009 270.251C18.8269 256.035 12.2079 240.239 4.59089 227.611L55.5769 203.751V203.75ZM206.44 212.898C210.408 212.892 213.254 212.928 215.79 212.963L226.186 245.263C199.929 241.113 167.553 241.073 139.129 242.078C123.554 242.628 111.125 243.405 101.272 244.143L125.38 219.906L126.33 219.676C150.076 213.886 186.19 212.93 206.44 212.898ZM164.248 260.288C189.172 260.235 214.614 261.554 232.664 265.391L246.092 307.118C207.384 298.888 157.108 296.141 114.006 295.38C86.7839 294.898 64.7689 295.192 50.1359 295.553L80.9359 264.59C88.7009 263.833 111.646 261.748 139.789 260.754C147.689 260.474 155.939 260.304 164.247 260.287L164.248 260.288Z');
      $this$Path.b35(SvgCobweb$lambda$lambda$lambda_1);
      $this$Path.d35($cobwebFadeOutId);
      return Unit_instance;
    };
  }
  function SvgCobweb$lambda_0($color) {
    return function ($this$Svg, $composer, $changed) {
      var $composer_0 = $composer;
      var cobwebFadeOutId = _SvgId___init__impl__pmt7ru('cobweb-fade-out');
      // Inline function 'kotlin.run' call
      // Inline function 'epicer.frontend.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-321992431, true, SvgCobweb$lambda$lambda(cobwebFadeOutId, $color), $composer_0, 54);
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
        // Inline function 'epicer.frontend.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_81(dispatchReceiver);
        $composer_1.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Defs($this$Svg, null, tmp0, $composer_0, 384 | 14 & $changed, 1);
      $composer_0.z1t(-1131704519);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.i1v();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.layouts.SvgCobweb.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = SvgCobweb$lambda$lambda_0(cobwebFadeOutId);
        $composer_0.t1v(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b1u();
      Path($this$Svg, tmp0_group, $composer_0, 48 | 14 & $changed);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_82($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function SvgCobweb$lambda_1($modifier, $$changed) {
    return function ($composer, $force) {
      SvgCobweb($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PageLayout$slambda($title, resultContinuation) {
    this.n48_1 = $title;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PageLayout$slambda).q13 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.r13($this$LaunchedEffect, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(PageLayout$slambda).s9 = function (p1, $completion) {
    return this.q13((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PageLayout$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        if (tmp === 0) {
          this.z8_1 = 1;
          document.title = 'Kobweb - ' + this.n48_1;
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
  protoOf(PageLayout$slambda).r13 = function ($this$LaunchedEffect, completion) {
    var i = new PageLayout$slambda(this.n48_1, completion);
    i.o48_1 = $this$LaunchedEffect;
    return i;
  };
  function PageLayout$slambda_0($title, resultContinuation) {
    var i = new PageLayout$slambda($title, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.q13($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PageLayout$lambda($this$gridTemplateRows) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$gridTemplateRows.u30(get_fr(1));
    $this$gridTemplateRows.t30($this$gridTemplateRows.s30());
    return Unit_instance;
  }
  function PageLayout$lambda$lambda$lambda($content, $this_Column) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $content($this_Column, $composer_0, 0);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_83($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function PageLayout$lambda$lambda($content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.j1l($this$Column) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
        NavHeader($composer_0, 0);
        var tmp_1 = get_PageContentStyle();
        var tmp_2 = toAttrs(tmp_1, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
        // Inline function 'kotlin.run' call
        // Inline function 'epicer.frontend.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(516884986, true, PageLayout$lambda$lambda$lambda($content, $this$Column), $composer_0, 54);
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
          // Inline function 'epicer.frontend.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_83(dispatchReceiver);
          $composer_1.t1v(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0, $composer_0, 48, 0);
        tmp_0 = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_84($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function PageLayout$lambda_0($content) {
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
        SvgCobweb($this$Box.b3c(gridRow(Companion_instance_2, 1), TopStart_instance), $composer_0, 0);
        var tmp_1 = gridRow(fillMaxSize(Companion_instance_2), 1);
        var tmp_2 = CenterHorizontally_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'epicer.frontend.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(289996761, true, PageLayout$lambda$lambda($content), $composer_0, 54);
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
          // Inline function 'epicer.frontend.components.layouts.PageLayout.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_84(dispatchReceiver);
          $composer_1.t1v(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_1, null, tmp_2, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
        Footer(gridRow(fillMaxWidth(Companion_instance_2), 2), $composer_0, 0, 0);
        tmp_0 = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_85($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function PageLayout$lambda_1($title, $content, $$changed) {
    return function ($composer, $force) {
      PageLayout($title, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_PageLayout_kt_piu0g5;
  function _init_properties_PageLayout_kt__pf69s7() {
    if (!properties_initialized_PageLayout_kt_piu0g5) {
      properties_initialized_PageLayout_kt_piu0g5 = true;
      PageContentStyle = CssStyle(VOID, PageContentStyle$lambda);
    }
  }
  function get_FooterStyle() {
    _init_properties_Footer_kt__fc6p2z();
    return FooterStyle;
  }
  var FooterStyle;
  function Footer(modifier, $composer, $changed, $default) {
    _init_properties_Footer_kt__fc6p2z();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-917588595);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(modifier_0._v) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_2;
      }
      var tmp = toModifier(get_FooterStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()).h3c(modifier_0._v);
      var tmp_0 = Center_instance;
      Box(tmp, tmp_0, null, ComposableSingletons$FooterKt_getInstance().q48_1, $composer_0, 3072 | com_varabyte_kobweb_compose_ui_Alignment_Center$stableprop_getter() << 3, 4);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(Footer$lambda(modifier_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_86($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_1$lambda_a73781($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    var sitePalette = toSitePalette(Companion_instance_0.l3j($composer_0, 6));
    SpanText('Built with ', null, null, null, $composer_0, 6, 14);
    var tmp = setVariable(Companion_instance_2, get_ColorVar(), sitePalette.c48_1.y47_1);
    var tmp_0 = get_UncoloredLinkVariant();
    Link_0('https://github.com/varabyte/kobweb', 'Kobweb', tmp, tmp_0, null, null, null, null, $composer_0, 54 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 240);
    SpanText(', template designed by ', null, null, null, $composer_0, 6, 14);
    var tmp_1 = whiteSpace(setVariable(Companion_instance_2, get_ColorVar(), sitePalette.c48_1.z47_1), Companion_instance_11.y32());
    var tmp_2 = get_UncoloredLinkVariant();
    Link_0('https://ui-rocket.com', 'UI Rocket', tmp_1, tmp_2, null, null, null, null, $composer_0, 54 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 240);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_87($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
      Span(toAttrs_0(textAlign(Companion_instance_2, Companion_instance_3.m2z())), ComposableSingletons$FooterKt_getInstance().p48_1, $composer_0, 48, 0);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.p48_1 = ComposableLambda$invoke$ref_86(composableLambdaInstance(-1544343439, false, ComposableSingletons$FooterKt$lambda_1$lambda_a73781));
    var tmp_0 = this;
    tmp_0.q48_1 = ComposableLambda$invoke$ref_87(composableLambdaInstance(-772890093, false, ComposableSingletons$FooterKt$lambda_2$lambda_imj9u6));
  }
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function FooterStyle$lambda($this$base) {
    _init_properties_Footer_kt__fc6p2z();
    return padding_1(backgroundColor(Companion_instance_2, toSitePalette($this$base.h3j_1).a48_1), get_cssRem(1.5), get_percent(10));
  }
  function Footer$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Footer($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Footer_kt_pg7k03;
  function _init_properties_Footer_kt__fc6p2z() {
    if (!properties_initialized_Footer_kt_pg7k03) {
      properties_initialized_Footer_kt_pg7k03 = true;
      var tmp = Companion_instance_4;
      FooterStyle = base(tmp, VOID, FooterStyle$lambda);
    }
  }
  function get_NavHeaderStyle() {
    _init_properties_NavHeader_kt__vdotjy();
    return NavHeaderStyle;
  }
  var NavHeaderStyle;
  function get_SideMenuSlideInAnim() {
    _init_properties_NavHeader_kt__vdotjy();
    return SideMenuSlideInAnim;
  }
  var SideMenuSlideInAnim;
  function NavLink(path, text, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-302450727);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j1l(path) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.j1l(text) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
      var tmp = get_UndecoratedLinkVariant().q3j(get_UncoloredLinkVariant());
      Link_0(path, text, null, tmp, null, null, null, null, $composer_0, 14 & $dirty | 112 & $dirty | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 9, 244);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(NavLink$lambda(path, text, $changed));
    }
  }
  function MenuItems($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(251936183);
    if (!($changed === 0) || !$composer_0.s1t()) {
      NavLink('/', 'Home', $composer_0, 54);
      NavLink('/about', 'About', $composer_0, 54);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(MenuItems$lambda($changed));
    }
  }
  function ColorModeButton($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(735165710);
    if (!($changed === 0) || !$composer_0.s1t()) {
      var colorMode$delegate = Companion_instance_0.c3l($composer_0, 6);
      $composer_0.z1t(1990066514);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.j1l(colorMode$delegate);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.sections.ColorModeButton.<anonymous>' call
        var value = ColorModeButton$lambda_1(colorMode$delegate);
        tmp0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      // Inline function 'kotlin.run' call
      // Inline function 'epicer.frontend.components.sections.ColorModeButton.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1666194905, true, ColorModeButton$lambda_2(colorMode$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i1v();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.sections.ColorModeButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_95(dispatchReceiver);
        $composer_1.t1v(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      IconButton(tmp0_group, tmp0_0, $composer_0, 48);
      var tmp_3 = Companion_instance_12.r19();
      var tmp_4 = PopupPlacement_BottomRight_getInstance();
      Tooltip(tmp_3, 'Toggle color mode', null, null, tmp_4, false, null, null, 0, 0, null, null, $composer_0, 24624, 0, 4076);
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(ColorModeButton$lambda_3($changed));
    }
  }
  function HamburgerButton(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-652272497);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(onClick) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      IconButton(onClick, ComposableSingletons$NavHeaderKt_getInstance().r48_1, $composer_0, 48 | 14 & $dirty);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(HamburgerButton$lambda(onClick, $changed));
    }
  }
  function CloseButton(onClick, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(1936236992);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(onClick) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.s1t()) {
      IconButton(onClick, ComposableSingletons$NavHeaderKt_getInstance().s48_1, $composer_0, 48 | 14 & $dirty);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(CloseButton$lambda(onClick, $changed));
    }
  }
  var SideMenuState_CLOSED_instance;
  var SideMenuState_OPEN_instance;
  var SideMenuState_CLOSING_instance;
  var SideMenuState_entriesInitialized;
  function SideMenuState_initEntries() {
    if (SideMenuState_entriesInitialized)
      return Unit_instance;
    SideMenuState_entriesInitialized = true;
    SideMenuState_CLOSED_instance = new SideMenuState('CLOSED', 0);
    SideMenuState_OPEN_instance = new SideMenuState('OPEN', 1);
    SideMenuState_CLOSING_instance = new SideMenuState('CLOSING', 2);
  }
  function SideMenuState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SideMenuState).a49 = function () {
    var tmp;
    switch (this.m2_1) {
      case 0:
        tmp = SideMenuState_CLOSED_getInstance();
        break;
      case 1:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      case 2:
        tmp = SideMenuState_CLOSING_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function NavHeader($composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(882291110);
    if (!($changed === 0) || !$composer_0.s1t()) {
      var tmp = toModifier(get_NavHeaderStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
      var tmp_0 = CenterVertically_instance;
      Row(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().w48_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 10);
    } else {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(NavHeader$lambda($changed));
    }
  }
  function SideMenu(menuState, close, onAnimationEnd, $composer, $changed) {
    _init_properties_NavHeader_kt__vdotjy();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-442318563);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.j1l(menuState) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1u(close) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w1u(onAnimationEnd) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.s1t()) {
      var tmp = setVariable(Companion_instance_2, OverlayVars_getInstance().i3o(), Colors_instance.r3d());
      $composer_0.z1t(115578985);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.i1v();
      var tmp_0;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.sections.SideMenu.<anonymous>' call
        var value = SideMenu$lambda(close);
        tmp0.t1v(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.b1u();
      var tmp_2 = onClick(tmp, tmp0_group);
      // Inline function 'kotlin.run' call
      // Inline function 'epicer.frontend.components.sections.SideMenu.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-315450553, true, SideMenu$lambda_0(menuState, onAnimationEnd, close), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i1v();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.sections.SideMenu.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_97(dispatchReceiver);
        $composer_1.t1v(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Overlay(tmp_2, null, null, null, tmp0_0, $composer_0, 24576, 14);
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(SideMenu$lambda_1(menuState, close, onAnimationEnd, $changed));
    }
  }
  function ComposableLambda$invoke$ref_88($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      HamburgerIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_89($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      CloseIcon(null, $composer_0, 0, 1);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_90($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      var tmp = height(Companion_instance_2, get_cssRem(2));
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = display(tmp, 'block');
      Image('/kobweb-logo.png', 'Kobweb Logo', tmp_0, null, null, null, null, $composer_0, 54, 120);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_91($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
      MenuItems($composer_0, 0);
      ColorModeButton($composer_0, 0);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_92($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
      $composer_0.z1t(590580027);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.i1v();
      var tmp;
      if (false || it === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous>.<anonymous>' call
        var value = mutableStateOf(SideMenuState_CLOSED_getInstance());
        $composer_0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      var menuState$delegate = tmp0_group;
      ColorModeButton($composer_0, 0);
      $composer_0.z1t(590583852);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.i1v();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous>.<anonymous>' call
        var value_0 = ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t(menuState$delegate);
        $composer_0.t1v(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.b1u();
      HamburgerButton(tmp1_group, $composer_0, 6);
      if (!invoke$lambda(menuState$delegate).equals(SideMenuState_CLOSED_getInstance())) {
        var tmp_3 = invoke$lambda(menuState$delegate);
        $composer_0.z1t(590589451);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.i1v();
        var tmp_4;
        if (false || it_1 === Companion_getInstance().r1o_1) {
          // Inline function 'epicer.frontend.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous>.<anonymous>' call
          var value_1 = ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t_0(menuState$delegate);
          $composer_0.t1v(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = it_1;
        }
        var tmp_5 = tmp_4;
        var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        $composer_0.b1u();
        $composer_0.z1t(590591798);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.i1v();
        var tmp_6;
        if (false || it_2 === Companion_getInstance().r1o_1) {
          // Inline function 'epicer.frontend.components.sections.ComposableSingletons$NavHeaderKt.lambda-5.<anonymous>.<anonymous>' call
          var value_2 = ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t_1(menuState$delegate);
          $composer_0.t1v(value_2);
          tmp_6 = value_2;
        } else {
          tmp_6 = it_2;
        }
        var tmp_7 = tmp_6;
        var tmp3_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.b1u();
        SideMenu(tmp_3, tmp2_group, tmp3_group, $composer_0, 432);
      }
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function invoke$lambda($menuState$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $menuState$delegate.e2();
  }
  function invoke$lambda_0($menuState$delegate, _set____db54di) {
    getLocalDelegateReference('menuState', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $menuState$delegate.o11(_set____db54di);
    return Unit_instance;
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t($menuState$delegate) {
    return function () {
      invoke$lambda_0($menuState$delegate, SideMenuState_OPEN_getInstance());
      return Unit_instance;
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t_0($menuState$delegate) {
    return function () {
      invoke$lambda_0($menuState$delegate, invoke$lambda($menuState$delegate).a49());
      return Unit_instance;
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_5$lambda$lambda_tjf03t_1($menuState$delegate) {
    return function () {
      var tmp;
      if (invoke$lambda($menuState$delegate).equals(SideMenuState_CLOSING_getInstance())) {
        invoke$lambda_0($menuState$delegate, SideMenuState_CLOSED_getInstance());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_93($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
      Link('https://kobweb.varabyte.com', null, null, null, null, null, null, ComposableSingletons$NavHeaderKt_getInstance().t48_1, $composer_0, 12582918, 126);
      Spacer($composer_0, 0);
      var tmp = displayIfAtLeast(gap(Companion_instance_2, get_cssRem(1.5)), Breakpoint_MD_getInstance());
      var tmp_0 = CenterVertically_instance;
      Row(tmp, null, tmp_0, null, ComposableSingletons$NavHeaderKt_getInstance().u48_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 10);
      var tmp_1 = displayUntil(gap(fontSize(Companion_instance_2, get_cssRem(1.5)), get_cssRem(1)), Breakpoint_MD_getInstance());
      var tmp_2 = CenterVertically_instance;
      Row(tmp_1, null, tmp_2, null, ComposableSingletons$NavHeaderKt_getInstance().v48_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 10);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_94($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function ComposableSingletons$NavHeaderKt$lambda_7$lambda_zig2o($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
      MenuItems($composer_0, 0);
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$NavHeaderKt() {
    ComposableSingletons$NavHeaderKt_instance = this;
    var tmp = this;
    tmp.r48_1 = ComposableLambda$invoke$ref_88(composableLambdaInstance(-91839594, false, ComposableSingletons$NavHeaderKt$lambda_1$lambda_vv16hm));
    var tmp_0 = this;
    tmp_0.s48_1 = ComposableLambda$invoke$ref_89(composableLambdaInstance(725795911, false, ComposableSingletons$NavHeaderKt$lambda_2$lambda_31epff));
    var tmp_1 = this;
    tmp_1.t48_1 = ComposableLambda$invoke$ref_90(composableLambdaInstance(1622588087, false, ComposableSingletons$NavHeaderKt$lambda_3$lambda_ps7rms));
    var tmp_2 = this;
    tmp_2.u48_1 = ComposableLambda$invoke$ref_91(composableLambdaInstance(-1925636372, false, ComposableSingletons$NavHeaderKt$lambda_4$lambda_gf9ta5));
    var tmp_3 = this;
    tmp_3.v48_1 = ComposableLambda$invoke$ref_92(composableLambdaInstance(246730019, false, ComposableSingletons$NavHeaderKt$lambda_5$lambda_cecns2));
    var tmp_4 = this;
    tmp_4.w48_1 = ComposableLambda$invoke$ref_93(composableLambdaInstance(569001705, false, ComposableSingletons$NavHeaderKt$lambda_6$lambda_tt4x4v));
    var tmp_5 = this;
    tmp_5.x48_1 = ComposableLambda$invoke$ref_94(composableLambdaInstance(1722910988, false, ComposableSingletons$NavHeaderKt$lambda_7$lambda_zig2o));
  }
  var ComposableSingletons$NavHeaderKt_instance;
  function ComposableSingletons$NavHeaderKt_getInstance() {
    if (ComposableSingletons$NavHeaderKt_instance == null)
      new ComposableSingletons$NavHeaderKt();
    return ComposableSingletons$NavHeaderKt_instance;
  }
  function ColorModeButton$lambda($colorMode$delegate) {
    _init_properties_NavHeader_kt__vdotjy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $colorMode$delegate.e2();
  }
  function ColorModeButton$lambda_0($colorMode$delegate, _set____db54di) {
    _init_properties_NavHeader_kt__vdotjy();
    getLocalDelegateReference('colorMode', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $colorMode$delegate.o11(_set____db54di);
    return Unit_instance;
  }
  function NavHeaderStyle$lambda($this$base) {
    _init_properties_NavHeader_kt__vdotjy();
    return padding(fillMaxWidth(Companion_instance_2), get_cssRem(1));
  }
  function SideMenuSlideInAnim$lambda($this$Keyframes) {
    _init_properties_NavHeader_kt__vdotjy();
    $this$Keyframes.w3j(SideMenuSlideInAnim$lambda$lambda);
    $this$Keyframes.x3j(SideMenuSlideInAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function SideMenuSlideInAnim$lambda$lambda() {
    _init_properties_NavHeader_kt__vdotjy();
    return translateX(Companion_instance_2, get_percent(100));
  }
  function SideMenuSlideInAnim$lambda$lambda_0() {
    _init_properties_NavHeader_kt__vdotjy();
    return Companion_instance_2;
  }
  function NavLink$lambda($path, $text, $$changed) {
    return function ($composer, $force) {
      NavLink($path, $text, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MenuItems$lambda($$changed) {
    return function ($composer, $force) {
      MenuItems($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ColorModeButton$lambda_1($colorMode$delegate) {
    return function () {
      ColorModeButton$lambda_0($colorMode$delegate, ColorModeButton$lambda($colorMode$delegate).o3j());
      return Unit_instance;
    };
  }
  function ColorModeButton$lambda_2($colorMode$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
        var tmp_0;
        if (ColorModeButton$lambda($colorMode$delegate).d3l()) {
          $composer_0.z1t(-2086013959);
          MoonIcon(null, $composer_0, 0, 1);
          $composer_0.b1u();
          tmp_0 = Unit_instance;
        } else {
          $composer_0.z1t(-2086013448);
          SunIcon(null, $composer_0, 0, 1);
          $composer_0.b1u();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_95($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ColorModeButton$lambda_3($$changed) {
    return function ($composer, $force) {
      ColorModeButton($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function HamburgerButton$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      HamburgerButton($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function CloseButton$lambda($onClick, $$changed) {
    return function ($composer, $force) {
      CloseButton($onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function NavHeader$lambda($$changed) {
    return function ($composer, $force) {
      NavHeader($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SideMenu$lambda($close) {
    return function (it) {
      $close();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda(it) {
    _init_properties_NavHeader_kt__vdotjy();
    it.s2x();
    return Unit_instance;
  }
  function SideMenu$lambda$lambda_0($onAnimationEnd) {
    return function (it) {
      $onAnimationEnd();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda$lambda($close) {
    return function () {
      $close();
      return Unit_instance;
    };
  }
  function SideMenu$lambda$lambda_1($close) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
        $composer_0.z1t(587447814);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.j1l($close);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i1v();
        var tmp_0;
        if (invalid || it === Companion_getInstance().r1o_1) {
          // Inline function 'epicer.frontend.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = SideMenu$lambda$lambda$lambda($close);
          $composer_0.t1v(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.b1u();
        CloseButton(tmp0_group, $composer_0, 0);
        var tmp_2 = fontSize(gap(padding_2(Companion_instance_2, VOID, get_cssRem(0.75)), get_cssRem(1.5)), get_cssRem(1.4));
        var tmp_3 = End_instance;
        Column(tmp_2, null, tmp_3, null, ComposableSingletons$NavHeaderKt_getInstance().x48_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter() << 6, 10);
        tmp = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_96($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function SideMenu$lambda_0($menuState, $onAnimationEnd, $close) {
    return function ($this$Overlay, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.j1l($this$Overlay) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
        $composer_0.e1r(-1279871118, $menuState);
        var tmp_1 = backgroundColor(gap(padding_0($this$Overlay.b3c(width(fillMaxHeight(Companion_instance_2), clamp(get_cssRem(8), get_percent(33), get_cssRem(10))), CenterEnd_instance), get_cssRem(1), get_cssRem(1)), get_cssRem(1.5)), toSitePalette(Companion_instance_0.l3j($composer_0, 6)).a48_1);
        var tmp_2 = get_SideMenuSlideInAnim();
        var tmp_3 = get_ms(200);
        var tmp_4;
        if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseOut' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_4 = 'ease-out';
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Companion.EaseIn' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_4 = 'ease-in';
        }
        var tmp_5 = tmp_4;
        var tmp_6;
        if ($menuState.equals(SideMenuState_OPEN_getInstance())) {
          // Inline function 'org.jetbrains.compose.web.css.Companion.Normal' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_6 = 'normal';
        } else {
          // Inline function 'org.jetbrains.compose.web.css.Companion.Reverse' call
          // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_6 = 'reverse';
        }
        var tmp_7 = tmp_6;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Forwards' call
        // Inline function 'org.jetbrains.compose.web.css.AnimationFillMode' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_8 = 'forwards';
        var tmp_9 = borderRadius_0(animation(tmp_1, [toAnimation(tmp_2, tmp_3, tmp_5, null, null, tmp_7, tmp_8, null, $composer_0, com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter(), 76)]), get_cssRem(2));
        $composer_0.z1t(-1279832075);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.i1v();
        var tmp_10;
        if (false || it === Companion_getInstance().r1o_1) {
          // Inline function 'epicer.frontend.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
          var value = SideMenu$lambda$lambda;
          $composer_0.t1v(value);
          tmp_10 = value;
        } else {
          tmp_10 = it;
        }
        var tmp_11 = tmp_10;
        var tmp0_group = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        $composer_0.b1u();
        var tmp_12 = onClick(tmp_9, tmp0_group);
        $composer_0.z1t(-1279830127);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.j1l($onAnimationEnd);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.i1v();
        var tmp_13;
        if (invalid || it_0 === Companion_getInstance().r1o_1) {
          // Inline function 'epicer.frontend.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = SideMenu$lambda$lambda_0($onAnimationEnd);
          $composer_0.t1v(value_0);
          tmp_13 = value_0;
        } else {
          tmp_13 = it_0;
        }
        var tmp_14 = tmp_13;
        var tmp1_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        $composer_0.b1u();
        var tmp_15 = onAnimationEnd(tmp_12, tmp1_group);
        var tmp_16 = End_instance;
        // Inline function 'kotlin.run' call
        // Inline function 'epicer.frontend.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1421240483, true, SideMenu$lambda$lambda_1($close), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.j1l(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_1.i1v();
        var tmp_17;
        if (invalid_0 || it_1 === Companion_getInstance().r1o_1) {
          // Inline function 'epicer.frontend.components.sections.SideMenu.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = ComposableLambda$invoke$ref_96(dispatchReceiver);
          $composer_1.t1v(value_1);
          tmp_17 = value_1;
        } else {
          tmp_17 = it_1;
        }
        var tmp_18 = tmp_17;
        var tmp0 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_15, null, tmp_16, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_End$stableprop_getter() << 6, 10);
        $composer_0.h1r();
        tmp_0 = Unit_instance;
      } else {
        $composer_0.i1o();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_97($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function SideMenu$lambda_1($menuState, $close, $onAnimationEnd, $$changed) {
    return function ($composer, $force) {
      SideMenu($menuState, $close, $onAnimationEnd, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SideMenuState_CLOSED_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSED_instance;
  }
  function SideMenuState_OPEN_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_OPEN_instance;
  }
  function SideMenuState_CLOSING_getInstance() {
    SideMenuState_initEntries();
    return SideMenuState_CLOSING_instance;
  }
  var properties_initialized_NavHeader_kt_f5zrgg;
  function _init_properties_NavHeader_kt__vdotjy() {
    if (!properties_initialized_NavHeader_kt_f5zrgg) {
      properties_initialized_NavHeader_kt_f5zrgg = true;
      var tmp = Companion_instance_4;
      NavHeaderStyle = base(tmp, VOID, NavHeaderStyle$lambda);
      SideMenuSlideInAnim = new Keyframes(SideMenuSlideInAnim$lambda);
    }
  }
  function IconButton(onClick, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(778553800);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w1u(onClick) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w1u(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.s1t()) {
      $composer_0.z1t(2113278063);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.i1v();
      var tmp;
      if (invalid || it === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.widgets.IconButton.<anonymous>' call
        var value = IconButton$lambda(onClick);
        tmp0.t1v(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.b1u();
      var tmp_1 = setVariable(Companion_instance_2, ButtonVars_getInstance().g3q(), get_em(1));
      var tmp_2 = get_CircleButtonVariant().q3j(get_UncoloredButtonVariant());
      // Inline function 'kotlin.run' call
      // Inline function 'epicer.frontend.components.widgets.IconButton.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1375980104, true, IconButton$lambda_0(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.j1l(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.i1v();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().r1o_1) {
        // Inline function 'epicer.frontend.components.widgets.IconButton.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_98(dispatchReceiver);
        $composer_1.t1v(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp0_group, tmp_1, tmp_2, null, false, null, null, null, null, tmp0_0, $composer_0, 805306368 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 504);
    } else {
      $composer_0.i1o();
    }
    var tmp1_safe_receiver = $composer_0.b1w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l21(IconButton$lambda_1(onClick, content, $changed));
    }
  }
  function IconButton$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_instance;
    };
  }
  function IconButton$lambda_0($content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.s1t()) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_98($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.w2p(p0, p1, p2);
    };
  }
  function IconButton$lambda_1($onClick, $content, $$changed) {
    return function ($composer, $force) {
      IconButton($onClick, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_HeroContainerStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HeroContainerStyle;
  }
  var HeroContainerStyle;
  function get_HomeGridStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HomeGridStyle;
  }
  var HomeGridStyle;
  function get_GridCellColorVar() {
    _init_properties_Index_kt__ifxcv4();
    return GridCellColorVar$delegate.t32(null, GridCellColorVar$factory());
  }
  var GridCellColorVar$delegate;
  function get_HomeGridCellStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HomeGridCellStyle;
  }
  var HomeGridCellStyle;
  function HomePage($composer, $changed) {
    _init_properties_Index_kt__ifxcv4();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(710540476);
    if ($changed === 0 && $composer_0.s1t()) {
      $composer_0.i1o();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(HomePage$lambda($changed));
    }
  }
  function HeroContainerStyle$lambda($this$CssStyle) {
    _init_properties_Index_kt__ifxcv4();
    $this$CssStyle.e3h(HeroContainerStyle$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.f3j(tmp, HeroContainerStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function HeroContainerStyle$lambda$lambda() {
    _init_properties_Index_kt__ifxcv4();
    return gap(fillMaxWidth(Companion_instance_2), get_cssRem(2));
  }
  function HeroContainerStyle$lambda$lambda_0() {
    _init_properties_Index_kt__ifxcv4();
    var tmp = Companion_instance_2;
    return margin_1(tmp, HeroContainerStyle$lambda$lambda$lambda);
  }
  function HeroContainerStyle$lambda$lambda$lambda($this$margin) {
    _init_properties_Index_kt__ifxcv4();
    $this$margin.w3e(get_vh(20));
    return Unit_instance;
  }
  function HomeGridStyle$lambda($this$base) {
    _init_properties_Index_kt__ifxcv4();
    return height(width(gap(Companion_instance_2, get_cssRem(0.5)), get_cssRem(70)), get_cssRem(18));
  }
  function HomeGridCellStyle$lambda($this$base) {
    _init_properties_Index_kt__ifxcv4();
    return borderRadius(boxShadow(backgroundColor(Companion_instance_2, get_GridCellColorVar().n32()), VOID, VOID, get_cssRem(0.6), VOID, get_GridCellColorVar().n32()), get_cssRem(1));
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function GridCellColorVar$factory() {
    return getPropertyCallableRef('GridCellColorVar', 0, KProperty0, function () {
      return get_GridCellColorVar();
    }, null);
  }
  var properties_initialized_Index_kt_nnboou;
  function _init_properties_Index_kt__ifxcv4() {
    if (!properties_initialized_Index_kt_nnboou) {
      properties_initialized_Index_kt_nnboou = true;
      HeroContainerStyle = CssStyle(VOID, HeroContainerStyle$lambda);
      var tmp = Companion_instance_4;
      HomeGridStyle = base(tmp, VOID, HomeGridStyle$lambda);
      GridCellColorVar$delegate = StyleVariable();
      var tmp_0 = Companion_instance_4;
      HomeGridCellStyle = base(tmp_0, VOID, HomeGridCellStyle$lambda);
    }
  }
  //region block: init
  epicer_frontend_SitePalette_Brand$stable = 8;
  epicer_frontend_SitePalette$stable = 8;
  epicer_frontend_SitePalettes$stable = 8;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=frontend.js.map
