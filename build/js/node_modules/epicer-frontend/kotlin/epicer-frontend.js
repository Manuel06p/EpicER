(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js', './kvision-kvision-modules-kvision-i18n.js', './kvision-kvision-modules-kvision-bootstrap.js', './kvision-kvision-modules-kvision-routing-navigo-ng.js', './kvision-kvision-modules-kvision-datetime.js', './kvision-kvision-modules-kvision-richtext.js', './kvision-kvision-modules-kvision-tom-select.js', './kvision-kvision-modules-kvision-bootstrap-upload.js', './kvision-kvision-modules-kvision-imask.js', './kvision-kvision-modules-kvision-toastify.js', './kvision-kvision-modules-kvision-fontawesome.js', './kvision-kvision-modules-kvision-bootstrap-icons.js', './kvision-kvision-modules-kvision-print.js', './kvision-kvision-modules-kvision-chart.js', './kvision-kvision-modules-kvision-tabulator.js', './kvision-kvision-modules-kvision-maps.js', './kotlinx-serialization-kotlinx-serialization-json.js', './epicer-common.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kvision-kvision-modules-kvision-state.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'), require('./kvision-kvision-modules-kvision-i18n.js'), require('./kvision-kvision-modules-kvision-bootstrap.js'), require('./kvision-kvision-modules-kvision-routing-navigo-ng.js'), require('./kvision-kvision-modules-kvision-datetime.js'), require('./kvision-kvision-modules-kvision-richtext.js'), require('./kvision-kvision-modules-kvision-tom-select.js'), require('./kvision-kvision-modules-kvision-bootstrap-upload.js'), require('./kvision-kvision-modules-kvision-imask.js'), require('./kvision-kvision-modules-kvision-toastify.js'), require('./kvision-kvision-modules-kvision-fontawesome.js'), require('./kvision-kvision-modules-kvision-bootstrap-icons.js'), require('./kvision-kvision-modules-kvision-print.js'), require('./kvision-kvision-modules-kvision-chart.js'), require('./kvision-kvision-modules-kvision-tabulator.js'), require('./kvision-kvision-modules-kvision-maps.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./epicer-common.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kvision-kvision-modules-kvision-state.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-i18n'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-i18n' was not found. Please, check whether 'kvision-kvision-modules-kvision-i18n' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-bootstrap'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-bootstrap' was not found. Please, check whether 'kvision-kvision-modules-kvision-bootstrap' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-routing-navigo-ng'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-routing-navigo-ng' was not found. Please, check whether 'kvision-kvision-modules-kvision-routing-navigo-ng' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-datetime'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-datetime' was not found. Please, check whether 'kvision-kvision-modules-kvision-datetime' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-richtext'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-richtext' was not found. Please, check whether 'kvision-kvision-modules-kvision-richtext' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-tom-select'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-tom-select' was not found. Please, check whether 'kvision-kvision-modules-kvision-tom-select' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-bootstrap-upload'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-bootstrap-upload' was not found. Please, check whether 'kvision-kvision-modules-kvision-bootstrap-upload' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-imask'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-imask' was not found. Please, check whether 'kvision-kvision-modules-kvision-imask' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-toastify'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-toastify' was not found. Please, check whether 'kvision-kvision-modules-kvision-toastify' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-fontawesome'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-fontawesome' was not found. Please, check whether 'kvision-kvision-modules-kvision-fontawesome' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-bootstrap-icons'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-bootstrap-icons' was not found. Please, check whether 'kvision-kvision-modules-kvision-bootstrap-icons' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-print'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-print' was not found. Please, check whether 'kvision-kvision-modules-kvision-print' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-chart'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-chart' was not found. Please, check whether 'kvision-kvision-modules-kvision-chart' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-tabulator'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-tabulator' was not found. Please, check whether 'kvision-kvision-modules-kvision-tabulator' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-maps'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-maps' was not found. Please, check whether 'kvision-kvision-modules-kvision-maps' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['epicer-common'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'epicer-common' was not found. Please, check whether 'epicer-common' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-state'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kvision-kvision-modules-kvision-state' was not found. Please, check whether 'kvision-kvision-modules-kvision-state' is loaded prior to 'epicer.frontend:frontend'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'epicer.frontend:frontend'.");
    }
    globalThis['epicer.frontend:frontend'] = factory(typeof globalThis['epicer.frontend:frontend'] === 'undefined' ? {} : globalThis['epicer.frontend:frontend'], globalThis['kotlin-kotlin-stdlib'], kvision, globalThis['kvision-kvision-modules-kvision-i18n'], globalThis['kvision-kvision-modules-kvision-bootstrap'], globalThis['kvision-kvision-modules-kvision-routing-navigo-ng'], globalThis['kvision-kvision-modules-kvision-datetime'], globalThis['kvision-kvision-modules-kvision-richtext'], globalThis['kvision-kvision-modules-kvision-tom-select'], globalThis['kvision-kvision-modules-kvision-bootstrap-upload'], globalThis['kvision-kvision-modules-kvision-imask'], globalThis['kvision-kvision-modules-kvision-toastify'], globalThis['kvision-kvision-modules-kvision-fontawesome'], globalThis['kvision-kvision-modules-kvision-bootstrap-icons'], globalThis['kvision-kvision-modules-kvision-print'], globalThis['kvision-kvision-modules-kvision-chart'], globalThis['kvision-kvision-modules-kvision-tabulator'], globalThis['kvision-kvision-modules-kvision-maps'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['epicer-common'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kvision-kvision-modules-kvision-state'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision, kotlin_io_kvision_kvision_i18n, kotlin_io_kvision_kvision_bootstrap, kotlin_io_kvision_kvision_routing_navigo_ng, kotlin_io_kvision_kvision_datetime, kotlin_io_kvision_kvision_richtext, kotlin_io_kvision_kvision_tom_select, kotlin_io_kvision_kvision_bootstrap_upload, kotlin_io_kvision_kvision_imask, kotlin_io_kvision_kvision_toastify, kotlin_io_kvision_kvision_fontawesome, kotlin_io_kvision_kvision_bootstrap_icons, kotlin_io_kvision_kvision_print, kotlin_io_kvision_kvision_chart, kotlin_io_kvision_kvision_tabulator, kotlin_io_kvision_kvision_maps, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_epicer_common, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_kvision_kvision_state, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.e5;
  var H3 = kotlin_io_kvision_kvision.$_$.g2;
  var Application = kotlin_io_kvision_kvision.$_$.r3;
  var I18n_getInstance = kotlin_io_kvision_kvision.$_$.g1;
  var to = kotlin_kotlin.$_$.bg;
  var mapOf = kotlin_kotlin.$_$.n7;
  var DefaultI18nManager = kotlin_io_kvision_kvision_i18n.$_$.a;
  var ThemeManager_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.g;
  var root = kotlin_io_kvision_kvision.$_$.h3;
  var SimplePanel = kotlin_io_kvision_kvision.$_$.d3;
  var Companion_getInstance = kotlin_io_kvision_kvision_routing_navigo_ng.$_$.a;
  var VOID = kotlin_kotlin.$_$.g;
  var protoOf = kotlin_kotlin.$_$.mb;
  var initMetadataForClass = kotlin_kotlin.$_$.ja;
  var BootstrapModule_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.i;
  var BootstrapCssModule_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.h;
  var DatetimeModule_getInstance = kotlin_io_kvision_kvision_datetime.$_$.a;
  var RichTextModule_getInstance = kotlin_io_kvision_kvision_richtext.$_$.a;
  var TomSelectModule_getInstance = kotlin_io_kvision_kvision_tom_select.$_$.a;
  var BootstrapUploadModule_getInstance = kotlin_io_kvision_kvision_bootstrap_upload.$_$.a;
  var ImaskModule_getInstance = kotlin_io_kvision_kvision_imask.$_$.a;
  var ToastifyModule_getInstance = kotlin_io_kvision_kvision_toastify.$_$.c;
  var FontAwesomeModule_getInstance = kotlin_io_kvision_kvision_fontawesome.$_$.a;
  var BootstrapIconsModule_getInstance = kotlin_io_kvision_kvision_bootstrap_icons.$_$.a;
  var PrintModule_getInstance = kotlin_io_kvision_kvision_print.$_$.a;
  var ChartModule_getInstance = kotlin_io_kvision_kvision_chart.$_$.a;
  var TabulatorModule_getInstance = kotlin_io_kvision_kvision_tabulator.$_$.b;
  var TabulatorCssBootstrapModule_getInstance = kotlin_io_kvision_kvision_tabulator.$_$.a;
  var MapsModule_getInstance = kotlin_io_kvision_kvision_maps.$_$.a;
  var CoreModule_getInstance = kotlin_io_kvision_kvision.$_$.j1;
  var startApplication = kotlin_io_kvision_kvision.$_$.t3;
  var navLink = kotlin_io_kvision_kvision_bootstrap.$_$.r;
  var listOf = kotlin_kotlin.$_$.l7;
  var dropDown = kotlin_io_kvision_kvision_bootstrap.$_$.o;
  var text = kotlin_io_kvision_kvision.$_$.d2;
  var checkBox = kotlin_io_kvision_kvision.$_$.w1;
  var Toast_getInstance = kotlin_io_kvision_kvision_toastify.$_$.b;
  var ToastPosition_BOTTOMRIGHT_getInstance = kotlin_io_kvision_kvision_toastify.$_$.a;
  var ToastOptions = kotlin_io_kvision_kvision_toastify.$_$.d;
  var get_perc = kotlin_io_kvision_kvision.$_$.p3;
  var AlignItems_CENTER_getInstance = kotlin_io_kvision_kvision.$_$.b;
  var ButtonStyle_LIGHT_getInstance = kotlin_io_kvision_kvision.$_$.s;
  var button = kotlin_io_kvision_kvision.$_$.j2;
  var get_px = kotlin_io_kvision_kvision.$_$.q3;
  var vPanel = kotlin_io_kvision_kvision.$_$.j3;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var BaseUserDTO = kotlin_epicer_common.$_$.c;
  var getKClass = kotlin_kotlin.$_$.f;
  var arrayOf = kotlin_kotlin.$_$.nf;
  var createKType = kotlin_kotlin.$_$.c;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var THROW_CCE = kotlin_kotlin.$_$.ye;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var isInterface = kotlin_kotlin.$_$.xa;
  var icon = kotlin_io_kvision_kvision.$_$.r2;
  var Navbar = kotlin_io_kvision_kvision_bootstrap.$_$.p;
  var nav = kotlin_io_kvision_kvision_bootstrap.$_$.t;
  var navForm = kotlin_io_kvision_kvision_bootstrap.$_$.q;
  var hPanel = kotlin_io_kvision_kvision.$_$.g3;
  var ImageShape_CIRCLE_getInstance = kotlin_io_kvision_kvision.$_$.w;
  var Placement_RIGHT_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.c;
  var Trigger_CLICK_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.d;
  var Trigger_HOVER_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.e;
  var TooltipOptions = kotlin_io_kvision_kvision_bootstrap.$_$.j;
  var enableTooltip = kotlin_io_kvision_kvision_bootstrap.$_$.m;
  var numberToInt = kotlin_kotlin.$_$.jb;
  var h4 = kotlin_io_kvision_kvision.$_$.o2;
  var toString = kotlin_kotlin.$_$.pb;
  var h6 = kotlin_io_kvision_kvision.$_$.q2;
  var bind = kotlin_io_kvision_kvision_state.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.k9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u8;
  var initMetadataForLambda = kotlin_kotlin.$_$.na;
  var image = kotlin_io_kvision_kvision.$_$.s2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var SuspendFunction1 = kotlin_kotlin.$_$.l9;
  var TextAlign_CENTER_getInstance = kotlin_io_kvision_kvision.$_$.o;
  var TextOverflow_ELLIPSIS_getInstance = kotlin_io_kvision_kvision.$_$.q;
  var WhiteSpace_NOWRAP_getInstance = kotlin_io_kvision_kvision.$_$.r;
  var Overflow_HIDDEN_getInstance = kotlin_io_kvision_kvision.$_$.n;
  var JustifyContent_SPACEBETWEEN_getInstance = kotlin_io_kvision_kvision.$_$.l;
  var h2 = kotlin_io_kvision_kvision.$_$.m2;
  var Companion_getInstance_0 = kotlin_io_kvision_kvision.$_$.e1;
  var Col_DARKSLATEGRAY_getInstance = kotlin_io_kvision_kvision.$_$.e;
  var Background = kotlin_io_kvision_kvision.$_$.n1;
  var BsBorder_BORDERDARK_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.b;
  var addBsBorder = kotlin_io_kvision_kvision_bootstrap.$_$.l;
  var get_auto = kotlin_io_kvision_kvision.$_$.n3;
  var json = kotlin_kotlin.$_$.eb;
  var LoginUserDTO = kotlin_epicer_common.$_$.d;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var TokenDTO = kotlin_epicer_common.$_$.e;
  var Exception = kotlin_kotlin.$_$.me;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.la;
  var FullRecipeDTO = kotlin_epicer_common.$_$.b;
  var KtList = kotlin_kotlin.$_$.o5;
  var BaseRecipeDTO = kotlin_epicer_common.$_$.a;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var println = kotlin_kotlin.$_$.p9;
  var Companion_getInstance_1 = kotlin_epicer_common.$_$.f;
  var Companion_getInstance_2 = kotlin_epicer_common.$_$.g;
  var FormPanel = kotlin_io_kvision_kvision.$_$.e2;
  var Text = kotlin_io_kvision_kvision.$_$.b2;
  var Password = kotlin_io_kvision_kvision.$_$.a2;
  var ButtonType_SUBMIT_getInstance = kotlin_io_kvision_kvision.$_$.v;
  var VPanel = kotlin_io_kvision_kvision.$_$.e3;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.dc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var AlignContent_CENTER_getInstance = kotlin_io_kvision_kvision.$_$.a;
  var gridPanel = kotlin_io_kvision_kvision.$_$.f3;
  var h1 = kotlin_io_kvision_kvision.$_$.l2;
  var p = kotlin_io_kvision_kvision.$_$.v2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.zf;
  var BsBgColor_BODYSECONDARY_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.a;
  var removeBsBgColor = kotlin_io_kvision_kvision_bootstrap.$_$.n;
  var addBsBgColor = kotlin_io_kvision_kvision_bootstrap.$_$.k;
  var BorderStyle_NONE_getInstance = kotlin_io_kvision_kvision.$_$.d;
  var Border = kotlin_io_kvision_kvision.$_$.o1;
  var toIntOrNull = kotlin_kotlin.$_$.nd;
  var TextAlign_LEFT_getInstance = kotlin_io_kvision_kvision.$_$.p;
  var Display_FLEX_getInstance = kotlin_io_kvision_kvision.$_$.g;
  var FlexWrap_WRAP_getInstance = kotlin_io_kvision_kvision.$_$.h;
  var span = kotlin_io_kvision_kvision.$_$.w2;
  var toString_0 = kotlin_kotlin.$_$.ag;
  var InputType_NUMBER_getInstance = kotlin_io_kvision_kvision.$_$.x;
  var textInput = kotlin_io_kvision_kvision.$_$.c2;
  var FontWeight_BOLD_getInstance = kotlin_io_kvision_kvision.$_$.i;
  var FontWeight_NORMAL_getInstance = kotlin_io_kvision_kvision.$_$.k;
  var FontWeight_LIGHTER_getInstance = kotlin_io_kvision_kvision.$_$.j;
  var ListStyleType_NONE_getInstance = kotlin_io_kvision_kvision.$_$.m;
  var ListStyle = kotlin_io_kvision_kvision.$_$.u1;
  var h5 = kotlin_io_kvision_kvision.$_$.p2;
  var ul = kotlin_io_kvision_kvision.$_$.x2;
  var li = kotlin_io_kvision_kvision.$_$.t2;
  var h3 = kotlin_io_kvision_kvision.$_$.n2;
  var ol = kotlin_io_kvision_kvision.$_$.u2;
  var AlignItems_START_getInstance = kotlin_io_kvision_kvision.$_$.c;
  var div = kotlin_io_kvision_kvision.$_$.k2;
  var NavbarExpand_ALWAYS_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.f;
  var navbar = kotlin_io_kvision_kvision_bootstrap.$_$.s;
  var stackPanel = kotlin_io_kvision_kvision.$_$.i3;
  var ObservableValue = kotlin_io_kvision_kvision.$_$.m3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(App, 'App', App, Application);
  initMetadataForClass(HeaderComponent, 'HeaderComponent', VOID, Navbar);
  initMetadataForLambda(ingredientInRecipeCard$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(recipeCard$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($loginCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($getRecipeCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($getMyRecipesCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($isLoggedCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($getImageCOROUTINE$4, CoroutineImpl);
  initMetadataForLambda(LoginView$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(LoginView, 'LoginView', VOID, VPanel);
  initMetadataForLambda(MainView$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(MainView$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(MainView, 'MainView', VOID, SimplePanel);
  initMetadataForLambda(RecipeView$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(RecipeView$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(RecipeView, 'RecipeView', VOID, SimplePanel);
  //endregion
  function App$start$lambda($root, $routing) {
    return function (it) {
      $root.removeAll_c84dd9_k$();
      $root.removeAll_c84dd9_k$();
      $root.add_rekwpt_k$(new MainView($routing));
      return Unit_getInstance();
    };
  }
  function App$start$lambda_0($root, $routing) {
    return function (it) {
      $root.removeAll_c84dd9_k$();
      $root.add_rekwpt_k$(new LoginView($routing));
      return Unit_getInstance();
    };
  }
  function App$start$lambda_1($root, $routing) {
    return function (match) {
      var recipeId = match.data[0];
      $root.removeAll_c84dd9_k$();
      $root.add_rekwpt_k$(new RecipeView($routing, recipeId));
      return Unit_getInstance();
    };
  }
  function App$start$lambda_2($root) {
    return function (it) {
      $root.removeAll_c84dd9_k$();
      $root.add_rekwpt_k$(new H3('Welcome to Dashboard!'));
      return Unit_getInstance();
    };
  }
  function App() {
    Application.call(this);
  }
  protoOf(App).start_fyv442_k$ = function () {
    I18n_getInstance().set_manager_3oin29_k$(new DefaultI18nManager(mapOf([to('pl', require('i18n/messages-pl.json')), to('en', require('i18n/messages-en.json'))])));
    ThemeManager_getInstance().init$default_e78sbl_k$();
    var root_0 = root(this, 'kvapp');
    var mainContainer = new SimplePanel();
    var routing = Companion_getInstance().init$default_24i12r_k$(VOID, true);
    root_0.add_rekwpt_k$(mainContainer);
    var tmp = routing.on('/', App$start$lambda(root_0, routing));
    var tmp_0 = tmp.on('/login', App$start$lambda_0(root_0, routing));
    var tmp_1 = new RegExp('^recipes/(.*)');
    var tmp_2 = tmp_0.on(tmp_1, App$start$lambda_1(root_0, routing));
    tmp_2.on('/dashboard', App$start$lambda_2(root_0)).resolve();
  };
  function main() {
    startApplication(App$_init_$ref_dfliw4(), module.hot, [BootstrapModule_getInstance(), BootstrapCssModule_getInstance(), DatetimeModule_getInstance(), RichTextModule_getInstance(), TomSelectModule_getInstance(), BootstrapUploadModule_getInstance(), ImaskModule_getInstance(), ToastifyModule_getInstance(), FontAwesomeModule_getInstance(), BootstrapIconsModule_getInstance(), PrintModule_getInstance(), ChartModule_getInstance(), TabulatorModule_getInstance(), TabulatorCssBootstrapModule_getInstance(), MapsModule_getInstance(), CoreModule_getInstance()]);
  }
  function App$_init_$ref_dfliw4() {
    var l = function () {
      return new App();
    };
    l.callableName = '<init>';
    return l;
  }
  function mainWrapper() {
    main();
  }
  function _get_routing__z92sqz($this) {
    return $this.routing_1;
  }
  function HeaderComponent$lambda($this$nav) {
    navLink($this$nav, 'File', VOID, 'fas fa-file');
    navLink($this$nav, 'Edit', VOID, 'fas fa-bars');
    dropDown($this$nav, 'Favourites', listOf([to('HTML', '#!/basic'), to('Forms', '#!/forms')]), 'fas fa-star', VOID, VOID, VOID, true);
    return Unit_getInstance();
  }
  function HeaderComponent$lambda_0($this$navForm) {
    text($this$navForm, VOID, VOID, VOID, VOID, 'Search:');
    checkBox($this$navForm, VOID, VOID, VOID, 'Search', VOID, HeaderComponent$lambda$lambda);
    return Unit_getInstance();
  }
  function HeaderComponent$lambda$lambda($this$checkBox) {
    $this$checkBox.set_inline_x67j3z_k$(true);
    return Unit_getInstance();
  }
  function HeaderComponent$lambda$lambda$lambda$lambda$lambda(this$0) {
    return function ($this$onClick, it) {
      localStorage.clear();
      Toast_getInstance().success_t2rnjk_k$('You have been logged out', new ToastOptions(ToastPosition_BOTTOMRIGHT_getInstance()));
      this$0.routing_1.navigate('/login');
      return Unit_getInstance();
    };
  }
  function HeaderComponent$lambda$lambda$lambda$lambda(this$0) {
    return function ($this$button) {
      $this$button.set_width_3hpb1_k$(get_perc(70));
      $this$button.onClick_br9hmj_k$(HeaderComponent$lambda$lambda$lambda$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function HeaderComponent$lambda$lambda$lambda(this$0) {
    return function ($this$vPanel) {
      $this$vPanel.set_alignItems_2x4ueh_k$(AlignItems_CENTER_getInstance());
      var tmp = ButtonStyle_LIGHT_getInstance();
      button($this$vPanel, 'Logout', 'fas fa-right-from-bracket', tmp, VOID, VOID, VOID, VOID, VOID, HeaderComponent$lambda$lambda$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function HeaderComponent$lambda$lambda_0(this$0) {
    return function ($this$dropDown) {
      $this$dropDown.set_fontSize_ozq5eh_k$(get_px(30));
      $this$dropDown.set_marginRight_b0p4mj_k$(get_px(10));
      vPanel($this$dropDown, VOID, VOID, VOID, VOID, VOID, HeaderComponent$lambda$lambda$lambda(this$0));
      return Unit_getInstance();
    };
  }
  function HeaderComponent$lambda$lambda_1($this$icon) {
    $this$icon.set_fontSize_ozq5eh_k$(get_px(35));
    return Unit_getInstance();
  }
  function HeaderComponent$lambda_1(this$0) {
    return function ($this$nav) {
      $this$nav.set_alignItems_2x4ueh_k$(AlignItems_CENTER_getInstance());
      var tmp0_safe_receiver = localStorage.getItem('baseUserDTO');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'epicer.frontend.components.HeaderComponent.<anonymous>.<anonymous>' call
        // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
        var this_0 = Default_getInstance();
        // Inline function 'kotlinx.serialization.serializer' call
        var this_1 = this_0.get_serializersModule_piitvg_k$();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_2 = serializer(this_1, createKType(getKClass(BaseUserDTO), arrayOf([]), false));
        var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        tmp = this_0.decodeFromString_jwu9sq_k$(tmp$ret$1, tmp0_safe_receiver).get_username_ytz5i7_k$();
      }
      var tmp1_elvis_lhs = tmp;
      var tmp2_text = tmp1_elvis_lhs == null ? '!UsernameNotFound' : tmp1_elvis_lhs;
      dropDown($this$nav, tmp2_text, VOID, VOID, VOID, VOID, VOID, true, VOID, VOID, true, VOID, false, VOID, HeaderComponent$lambda$lambda_0(this$0));
      icon($this$nav, 'fas fa-circle-user', HeaderComponent$lambda$lambda_1);
      return Unit_getInstance();
    };
  }
  function HeaderComponent(routing) {
    Navbar.call(this, 'navbar-header');
    this.routing_1 = routing;
    this.set_padding_5cj5xu_k$(get_px(20));
    nav(this, VOID, VOID, HeaderComponent$lambda);
    navForm(this, VOID, VOID, HeaderComponent$lambda_0);
    nav(this, true, VOID, HeaderComponent$lambda_1(this));
  }
  function ingredientInRecipeCard(_this__u8e3s4, ingredientInRecipe, portionsState, recipePortions, customScope, imageSize, nameFontSize, quantityFontSize, imageRightMargin) {
    imageSize = imageSize === VOID ? get_px(72) : imageSize;
    nameFontSize = nameFontSize === VOID ? null : nameFontSize;
    quantityFontSize = quantityFontSize === VOID ? null : quantityFontSize;
    imageRightMargin = imageRightMargin === VOID ? get_px(32) : imageRightMargin;
    hPanel(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, VOID, ingredientInRecipeCard$lambda(customScope, imageSize, imageRightMargin, portionsState, ingredientInRecipe, recipePortions, nameFontSize, quantityFontSize));
  }
  function ingredientInRecipeCard$lambda$lambda($imageSize, $imageRightMargin) {
    return function ($this$image) {
      $this$image.set_height_z8kom6_k$($imageSize);
      $this$image.set_width_3hpb1_k$($imageSize);
      $this$image.set_shape_i86x7h_k$(ImageShape_CIRCLE_getInstance());
      $this$image.setStyle_q2a0in_k$('object-fit', 'cover');
      $this$image.set_marginRight_b0p4mj_k$($imageRightMargin);
      return Unit_getInstance();
    };
  }
  function ingredientInRecipeCard$lambda$lambda$lambda$lambda($ingredientInRecipe, $nameFontSize) {
    return function ($this$h4) {
      enableTooltip($this$h4, new TooltipOptions($ingredientInRecipe.get_notes_ivw520_k$(), true, VOID, 0, VOID, Placement_RIGHT_getInstance(), listOf([Trigger_CLICK_getInstance(), Trigger_HOVER_getInstance()])));
      $this$h4.set_fontSize_ozq5eh_k$($nameFontSize);
      return Unit_getInstance();
    };
  }
  function ingredientInRecipeCard$lambda$lambda$lambda$lambda_0($quantityFontSize) {
    return function ($this$h6) {
      $this$h6.set_fontSize_ozq5eh_k$($quantityFontSize);
      return Unit_getInstance();
    };
  }
  function ingredientInRecipeCard$lambda$lambda$lambda($ingredientInRecipe, $recipePortions, $nameFontSize, $quantityFontSize) {
    return function ($this$bind, newPortions) {
      var tmp0_safe_receiver = $ingredientInRecipe.get_quantity_hz47ro_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp1_elvis_lhs = $recipePortions;
        tmp = tmp0_safe_receiver / (tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs);
      }
      var tmp2_safe_receiver = tmp;
      var tmp_0;
      if (tmp2_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = tmp2_safe_receiver * (newPortions == null ? 1 : newPortions);
      }
      var adjustedQuantity = tmp_0;
      var name = !($ingredientInRecipe.get_unit_wovp3h_k$() == null) || adjustedQuantity == null || numberToInt(adjustedQuantity) === 1 || $ingredientInRecipe.get_ingredient_nl550m_k$().get_namePlural_y2zlhk_k$() == null ? $ingredientInRecipe.get_ingredient_nl550m_k$().get_nameSingular_ufd0cr_k$() : $ingredientInRecipe.get_ingredient_nl550m_k$().get_namePlural_y2zlhk_k$();
      h4($this$bind, name, VOID, VOID, VOID, ingredientInRecipeCard$lambda$lambda$lambda$lambda($ingredientInRecipe, $nameFontSize));
      var tmp_1 = toString(adjustedQuantity == null ? '-' : adjustedQuantity);
      var tmp5_safe_receiver = $ingredientInRecipe.get_unit_wovp3h_k$();
      var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.get_shortName_p10yo2_k$();
      var tmp_2 = tmp_1 + ' ' + (tmp6_elvis_lhs == null ? '' : tmp6_elvis_lhs);
      h6($this$bind, tmp_2, VOID, VOID, VOID, ingredientInRecipeCard$lambda$lambda$lambda$lambda_0($quantityFontSize));
      return Unit_getInstance();
    };
  }
  function ingredientInRecipeCard$lambda$lambda_0($portionsState, $ingredientInRecipe, $recipePortions, $nameFontSize, $quantityFontSize) {
    return function ($this$vPanel) {
      bind($this$vPanel, $portionsState, VOID, VOID, ingredientInRecipeCard$lambda$lambda$lambda($ingredientInRecipe, $recipePortions, $nameFontSize, $quantityFontSize));
      return Unit_getInstance();
    };
  }
  function ingredientInRecipeCard$lambda$slambda($ingredientInRecipe, $imageComponent, resultContinuation) {
    this.$ingredientInRecipe_1 = $ingredientInRecipe;
    this.$imageComponent_1 = $imageComponent;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ingredientInRecipeCard$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ingredientInRecipeCard$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ingredientInRecipeCard$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.idImage0__1 = this.$ingredientInRecipe_1.get_ingredient_nl550m_k$().get_imageId_wvvawd_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = getImage(this.idImage0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var imageUrl = suspendResult;
            this.$imageComponent_1.set_src_vqknu8_k$(imageUrl == null ? '/assets/image_not_found.png' : imageUrl);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(ingredientInRecipeCard$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new ingredientInRecipeCard$lambda$slambda(this.$ingredientInRecipe_1, this.$imageComponent_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ingredientInRecipeCard$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ingredientInRecipeCard$lambda$slambda_0($ingredientInRecipe, $imageComponent, resultContinuation) {
    var i = new ingredientInRecipeCard$lambda$slambda($ingredientInRecipe, $imageComponent, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ingredientInRecipeCard$lambda($customScope, $imageSize, $imageRightMargin, $portionsState, $ingredientInRecipe, $recipePortions, $nameFontSize, $quantityFontSize) {
    return function ($this$hPanel) {
      $this$hPanel.set_marginBottom_q6omk0_k$(get_px(15));
      $this$hPanel.set_alignItems_2x4ueh_k$(AlignItems_CENTER_getInstance());
      var imageComponent = image($this$hPanel, '/assets/image_not_found.png', VOID, true, VOID, VOID, VOID, ingredientInRecipeCard$lambda$lambda($imageSize, $imageRightMargin));
      vPanel($this$hPanel, VOID, VOID, VOID, VOID, VOID, ingredientInRecipeCard$lambda$lambda_0($portionsState, $ingredientInRecipe, $recipePortions, $nameFontSize, $quantityFontSize));
      launch($customScope, VOID, VOID, ingredientInRecipeCard$lambda$slambda_0($ingredientInRecipe, imageComponent, null));
      return Unit_getInstance();
    };
  }
  function recipeCard(_this__u8e3s4, recipe, customScope, routing) {
    button(_this__u8e3s4, '', VOID, VOID, VOID, VOID, VOID, VOID, VOID, recipeCard$lambda(recipe, customScope, routing));
  }
  function recipeCard$lambda$lambda($this$h2) {
    $this$h2.set_width_3hpb1_k$(get_perc(100));
    $this$h2.set_textAlign_puln5o_k$(TextAlign_CENTER_getInstance());
    $this$h2.set_fontSize_ozq5eh_k$(get_px(20));
    $this$h2.set_textOverflow_3o6ktn_k$(TextOverflow_ELLIPSIS_getInstance());
    $this$h2.set_whiteSpace_koztq1_k$(WhiteSpace_NOWRAP_getInstance());
    $this$h2.set_overflow_7svzdu_k$(Overflow_HIDDEN_getInstance());
    $this$h2.set_padding_5cj5xu_k$(get_px(15));
    return Unit_getInstance();
  }
  function recipeCard$lambda$slambda$lambda($this$image) {
    $this$image.set_height_z8kom6_k$(get_perc(80));
    $this$image.set_width_3hpb1_k$(get_perc(100));
    $this$image.setStyle_q2a0in_k$('object-fit', 'cover');
    return Unit_getInstance();
  }
  function recipeCard$lambda$slambda($recipe, $this_button, resultContinuation) {
    this.$recipe_1 = $recipe;
    this.$this_button_1 = $this_button;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(recipeCard$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(recipeCard$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(recipeCard$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.idImage0__1 = this.$recipe_1.get_imageId_wvvawd_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = getImage(this.idImage0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var imageUrl = suspendResult;
            var tmp_0 = imageUrl == null ? '/assets/image_not_found.png' : imageUrl;
            image(this.$this_button_1, tmp_0, VOID, true, VOID, VOID, VOID, recipeCard$lambda$slambda$lambda);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(recipeCard$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new recipeCard$lambda$slambda(this.$recipe_1, this.$this_button_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(recipeCard$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function recipeCard$lambda$slambda_0($recipe, $this_button, resultContinuation) {
    var i = new recipeCard$lambda$slambda($recipe, $this_button, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function recipeCard$lambda$lambda_0($routing, $recipe) {
    return function ($this$onClick, it) {
      $routing.navigate('/recipes/' + $recipe.get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function recipeCard$lambda($recipe, $customScope, $routing) {
    return function ($this$button) {
      $this$button.set_justifyContent_920yxn_k$(JustifyContent_SPACEBETWEEN_getInstance());
      var tmp = $recipe.get_name_woqyms_k$();
      h2($this$button, tmp, VOID, VOID, VOID, recipeCard$lambda$lambda);
      launch($customScope, VOID, VOID, recipeCard$lambda$slambda_0($recipe, $this$button, null));
      $this$button.onClick_br9hmj_k$(recipeCard$lambda$lambda_0($routing, $recipe));
      $this$button.set_background_fl86pt_k$(new Background(Companion_getInstance_0().name_lqbcrr_k$(Col_DARKSLATEGRAY_getInstance())));
      addBsBorder($this$button, [BsBorder_BORDERDARK_getInstance()]);
      $this$button.set_padding_5cj5xu_k$(get_px(0));
      $this$button.set_overflow_7svzdu_k$(Overflow_HIDDEN_getInstance());
      $this$button.set_width_3hpb1_k$(get_perc(80));
      $this$button.set_marginLeft_hqxzqs_k$(get_auto());
      $this$button.set_marginRight_b0p4mj_k$(get_auto());
      $this$button.set_marginTop_uelzj8_k$(get_px(50));
      $this$button.set_height_z8kom6_k$(get_px(300));
      $this$button.set_borderRadius_tlfw5x_k$(get_px(25));
      return Unit_getInstance();
    };
  }
  function get_backend_url() {
    return backend_url;
  }
  var backend_url;
  function get_assets() {
    return assets;
  }
  var assets;
  function get_image_not_found() {
    return image_not_found;
  }
  var image_not_found;
  function login(loginUserDTO, $completion) {
    var tmp = new $loginCOROUTINE$0(loginUserDTO, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function getRecipe(recipeId, $completion) {
    var tmp = new $getRecipeCOROUTINE$1(recipeId, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function getMyRecipes($completion) {
    var tmp = new $getMyRecipesCOROUTINE$2($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function isLogged($completion) {
    var tmp = new $isLoggedCOROUTINE$3($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function getImage(imageId, $completion) {
    var tmp = new $getImageCOROUTINE$4(imageId, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $loginCOROUTINE$0(loginUserDTO, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.loginUserDTO_1 = loginUserDTO;
  }
  protoOf($loginCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = window;
            var tmp3 = json([to('Content-Type', 'application/json')]);
            var tmp0 = Default_getInstance();
            var value = this.loginUserDTO_1;
            var this_0 = tmp0.get_serializersModule_piitvg_k$();
            var this_1 = serializer(this_0, createKType(getKClass(LoginUserDTO), arrayOf([]), false));
            var body = tmp0.encodeToString_k0apqx_k$(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), value);
            var referrer = undefined;
            var referrerPolicy = undefined;
            var mode = undefined;
            var credentials = undefined;
            var cache = undefined;
            var redirect = undefined;
            var integrity = undefined;
            var keepalive = undefined;
            var window_0 = undefined;
            var o = {};
            o['method'] = 'POST';
            o['headers'] = tmp3;
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
            suspendResult = await_0(tmp_0.fetch('http://localhost:8080/login', o), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response0__1 = suspendResult;
            if (this.response0__1.status === 200) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = await_0(this.response0__1.text(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              return null;
            }

          case 2:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(6);
            return Unit_getInstance();
          case 4:
            var responseBody = suspendResult;
            var this_2 = Default_getInstance();
            var this_3 = this_2.get_serializersModule_piitvg_k$();
            var this_4 = serializer(this_3, createKType(getKClass(TokenDTO), arrayOf([]), false));
            var tokenDTO = this_2.decodeFromString_jwu9sq_k$(isInterface(this_4, KSerializer) ? this_4 : THROW_CCE(), responseBody);
            return tokenDTO;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              return null;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $getRecipeCOROUTINE$1(recipeId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.recipeId_1 = recipeId;
  }
  protoOf($getRecipeCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            var tmp0_elvis_lhs = localStorage.getItem('jwtToken');
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.token0__1 = tmp_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_2 = window;
            var tmp_3 = 'http://localhost:8080/recipes/' + this.recipeId_1;
            var headers = json([to('Content-Type', 'application/json'), to('Authorization', 'Bearer ' + this.token0__1)]);
            var body = undefined;
            var referrer = undefined;
            var referrerPolicy = undefined;
            var mode = undefined;
            var credentials = undefined;
            var cache = undefined;
            var redirect = undefined;
            var integrity = undefined;
            var keepalive = undefined;
            var window_0 = undefined;
            var o = {};
            o['method'] = 'GET';
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
            suspendResult = await_0(tmp_2.fetch(tmp_3, o), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response1__1 = suspendResult;
            if (this.response1__1.status === 200) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = await_0(this.response1__1.text(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              return null;
            }

          case 2:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(6);
            return Unit_getInstance();
          case 4:
            var responseBody = suspendResult;
            var this_0 = Default_getInstance();
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(FullRecipeDTO), arrayOf([]), false));
            return this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), responseBody);
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_4 = this.get_exception_x0n6w6_k$();
            if (tmp_4 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              console.error('Failed to fetch recipes', e);
              return null;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $getMyRecipesCOROUTINE$2(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($getMyRecipesCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            var tmp0_elvis_lhs = localStorage.getItem('jwtToken');
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.token0__1 = tmp_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_2 = window;
            var headers = json([to('Content-Type', 'application/json'), to('Authorization', 'Bearer ' + this.token0__1)]);
            var body = undefined;
            var referrer = undefined;
            var referrerPolicy = undefined;
            var mode = undefined;
            var credentials = undefined;
            var cache = undefined;
            var redirect = undefined;
            var integrity = undefined;
            var keepalive = undefined;
            var window_0 = undefined;
            var o = {};
            o['method'] = 'GET';
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
            suspendResult = await_0(tmp_2.fetch('http://localhost:8080/me/recipes', o), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response1__1 = suspendResult;
            if (this.response1__1.status === 200) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = await_0(this.response1__1.text(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              return null;
            }

          case 2:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(6);
            return Unit_getInstance();
          case 4:
            var responseBody = suspendResult;
            var this_0 = Default_getInstance();
            var this_1 = this_0.get_serializersModule_piitvg_k$();
            var this_2 = serializer(this_1, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(BaseRecipeDTO), arrayOf([]), false))]), false));
            return this_0.decodeFromString_jwu9sq_k$(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), responseBody);
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              console.error('Failed to fetch recipes', e);
              return null;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $isLoggedCOROUTINE$3(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($isLoggedCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this;
            var tmp0_elvis_lhs = localStorage.getItem('jwtToken');
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.token0__1 = tmp_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_2 = window;
            var headers = json([to('Content-Type', 'application/json'), to('Authorization', 'Bearer ' + this.token0__1)]);
            var body = undefined;
            var referrer = undefined;
            var referrerPolicy = undefined;
            var mode = undefined;
            var credentials = undefined;
            var cache = undefined;
            var redirect = undefined;
            var integrity = undefined;
            var keepalive = undefined;
            var window_0 = undefined;
            var o = {};
            o['method'] = 'GET';
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
            suspendResult = await_0(tmp_2.fetch('http://localhost:8080/me', o), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            return response.status === 200;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              return false;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $getImageCOROUTINE$4(imageId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.imageId_1 = imageId;
  }
  protoOf($getImageCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            var tmp0_elvis_lhs = localStorage.getItem('jwtToken');
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.token0__1 = tmp_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_2 = window;
            var tmp_3 = 'http://localhost:8080/images/' + this.imageId_1;
            var headers = json([to('Authorization', 'Bearer ' + this.token0__1)]);
            var body = undefined;
            var referrer = undefined;
            var referrerPolicy = undefined;
            var mode = undefined;
            var credentials = undefined;
            var cache = undefined;
            var redirect = undefined;
            var integrity = undefined;
            var keepalive = undefined;
            var window_0 = undefined;
            var o = {};
            o['method'] = 'GET';
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
            suspendResult = await_0(tmp_2.fetch(tmp_3, o), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.response1__1 = suspendResult;
            if (this.response1__1.status === 200) {
              this.set_state_rjd8d0_k$(4);
              suspendResult = await_0(this.response1__1.blob(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              return null;
            }

          case 2:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(6);
            return Unit_getInstance();
          case 4:
            var blob = suspendResult;
            return URL.createObjectURL(blob);
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_4 = this.get_exception_x0n6w6_k$();
            if (tmp_4 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              console.error('Failed to fetch image', e);
              return null;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function _get_routing__z92sqz_0($this) {
    return $this.routing_1;
  }
  function LoginView$lambda$lambda$lambda$slambda($formPanel, this$0, resultContinuation) {
    this.$formPanel_1 = $formPanel;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LoginView$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LoginView$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LoginView$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (this.$formPanel_1.validate$default_e8et1u_k$()) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = login(this.$formPanel_1.getData_190hy8_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            var token = suspendResult;
            if (!(token == null)) {
              localStorage.setItem('jwtToken', token.get_token_iz6pxs_k$());
              localStorage.setItem('baseUserDTO', Default_getInstance().encodeToString_k0apqx_k$(Companion_getInstance_1().serializer_9w0wvi_k$(), token.get_baseUserDTO_liaq92_k$()));
              Toast_getInstance().success_t2rnjk_k$('Login successfull', new ToastOptions(ToastPosition_BOTTOMRIGHT_getInstance()));
              println('Login succeded');
              this.this$0__1.routing_1.navigate('/');
            } else {
              localStorage.clear();
              Toast_getInstance().danger_93qmnk_k$('Login failed', new ToastOptions(ToastPosition_BOTTOMRIGHT_getInstance()));
              println('Login failed');
            }

            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LoginView$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LoginView$lambda$lambda$lambda$slambda(this.$formPanel_1, this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LoginView$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LoginView$lambda$lambda$lambda$slambda_0($formPanel, this$0, resultContinuation) {
    var i = new LoginView$lambda$lambda$lambda$slambda($formPanel, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LoginView$lambda$lambda$lambda($customScope, $formPanel, this$0) {
    return function ($this$onClick, it) {
      launch($customScope, VOID, VOID, LoginView$lambda$lambda$lambda$slambda_0($formPanel, this$0, null));
      return Unit_getInstance();
    };
  }
  function LoginView$lambda$lambda($customScope, $formPanel, this$0) {
    return function ($this$button) {
      $this$button.set_marginTop_uelzj8_k$(get_px(10));
      $this$button.onClick_br9hmj_k$(LoginView$lambda$lambda$lambda($customScope, $formPanel, this$0));
      return Unit_getInstance();
    };
  }
  function LoginView$lambda($customScope, this$0) {
    return function ($this$vPanel) {
      $this$vPanel.set_width_3hpb1_k$(get_perc(50));
      // Inline function 'kotlin.apply' call
      var this_0 = new FormPanel(VOID, VOID, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_2().serializer_9w0wvi_k$());
      // Inline function 'epicer.frontend.views.LoginView.<anonymous>.<anonymous>' call
      this_0.add$default_nrpp98_k$(username$factory(), new Text(VOID, VOID, VOID, VOID, 'Username'), true);
      this_0.add$default_nrpp98_k$(password$factory(), new Password(VOID, VOID, 'Password'), true);
      var formPanel = this_0;
      $this$vPanel.add_rekwpt_k$(formPanel);
      var tmp0_type = ButtonType_SUBMIT_getInstance();
      var loginButton = button($this$vPanel, 'Login', VOID, VOID, tmp0_type, VOID, VOID, VOID, 'btn btn-primary', LoginView$lambda$lambda($customScope, formPanel, this$0));
      return Unit_getInstance();
    };
  }
  function LoginView(routing) {
    VPanel.call(this);
    this.routing_1 = routing;
    h2(this, 'Login', VOID, VOID, 'text-center');
    this.set_marginLeft_hqxzqs_k$(get_px(20));
    this.set_marginRight_b0p4mj_k$(get_px(20));
    this.set_marginTop_uelzj8_k$(get_px(40));
    this.set_alignItems_2x4ueh_k$(AlignItems_CENTER_getInstance());
    var customScope = CoroutineScope_0(Dispatchers_getInstance().get_Main_wo5vz6_k$());
    vPanel(this, VOID, VOID, VOID, VOID, VOID, LoginView$lambda(customScope, this));
  }
  function username$factory() {
    return getPropertyCallableRef('username', 1, KProperty1, function (receiver) {
      return receiver.get_username_ytz5i7_k$();
    }, null);
  }
  function password$factory() {
    return getPropertyCallableRef('password', 1, KProperty1, function (receiver) {
      return receiver.get_password_bodifw_k$();
    }, null);
  }
  function MainView$slambda$lambda($myRecipes, $customScope, this$0) {
    return function ($this$gridPanel) {
      var tmp;
      if (!($myRecipes._v == null)) {
        var _iterator__ex2g4s = $myRecipes._v.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var recipe = _iterator__ex2g4s.next_20eer_k$();
          recipeCard($this$gridPanel, recipe, $customScope, this$0.routing_1);
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_routing__z92sqz_1($this) {
    return $this.routing_1;
  }
  function MainView$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainView$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainView$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainView$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = isLogged(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              this.this$0__1.routing_1.navigate('/login');
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MainView$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainView$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainView$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainView$slambda_0(this$0, resultContinuation) {
    var i = new MainView$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainView$slambda_1($myRecipes, this$0, $customScope, resultContinuation) {
    this.$myRecipes_1 = $myRecipes;
    this.this$0__1 = this$0;
    this.$customScope_1 = $customScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MainView$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MainView$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MainView$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = getMyRecipes(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.$myRecipes_1._v = ARGUMENT;
            var tmp_0 = AlignItems_CENTER_getInstance();
            var tmp_1 = AlignContent_CENTER_getInstance();
            gridPanel(this.this$0__1, VOID, VOID, VOID, 'repeat(auto-fill, minmax(400px, 1fr))', VOID, VOID, VOID, VOID, VOID, tmp_0, VOID, tmp_1, VOID, VOID, MainView$slambda$lambda(this.$myRecipes_1, this.$customScope_1, this.this$0__1));
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MainView$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new MainView$slambda_1(this.$myRecipes_1, this.this$0__1, this.$customScope_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(MainView$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MainView$slambda_2($myRecipes, this$0, $customScope, resultContinuation) {
    var i = new MainView$slambda_1($myRecipes, this$0, $customScope, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MainView(routing) {
    SimplePanel.call(this);
    this.routing_1 = routing;
    var customScope = CoroutineScope_0(Dispatchers_getInstance().get_Main_wo5vz6_k$());
    launch(customScope, VOID, VOID, MainView$slambda_0(this, null));
    this.add_rekwpt_k$(new HeaderComponent(this.routing_1));
    var myRecipes = {_v: null};
    launch(customScope, VOID, VOID, MainView$slambda_2(myRecipes, this, customScope, null));
  }
  function RecipeView$slambda$lambda$lambda($recipe) {
    return function ($this$div) {
      $this$div.set_textAlign_puln5o_k$(TextAlign_CENTER_getInstance());
      h1($this$div, $recipe.get_name_woqyms_k$());
      p($this$div, $recipe.get_description_emjre5_k$());
      $this$div.set_marginBottom_q6omk0_k$(get_px(25));
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda($panel, $ingredientsButton, $stepsButton) {
    return function ($this$onClick, it) {
      var tmp;
      if ($panel._v == null) {
        throwUninitializedPropertyAccessException('panel');
      } else {
        tmp = $panel._v;
      }
      tmp.set_activeIndex_2mqwdj_k$(0);
      var tmp_0;
      if ($ingredientsButton._v == null) {
        throwUninitializedPropertyAccessException('ingredientsButton');
      } else {
        tmp_0 = $ingredientsButton._v;
      }
      removeBsBgColor(tmp_0, BsBgColor_BODYSECONDARY_getInstance());
      var tmp_1;
      if ($stepsButton._v == null) {
        throwUninitializedPropertyAccessException('stepsButton');
      } else {
        tmp_1 = $stepsButton._v;
      }
      addBsBgColor(tmp_1, BsBgColor_BODYSECONDARY_getInstance());
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda($panel, $ingredientsButton, $stepsButton) {
    return function ($this$button) {
      $this$button.set_border_fseb7l_k$(new Border(VOID, BorderStyle_NONE_getInstance()));
      $this$button.onClick_br9hmj_k$(RecipeView$slambda$lambda$lambda$lambda$lambda$lambda($panel, $ingredientsButton, $stepsButton));
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_0($panel, $stepsButton, $ingredientsButton) {
    return function ($this$onClick, it) {
      var tmp;
      if ($panel._v == null) {
        throwUninitializedPropertyAccessException('panel');
      } else {
        tmp = $panel._v;
      }
      tmp.set_activeIndex_2mqwdj_k$(1);
      var tmp_0;
      if ($stepsButton._v == null) {
        throwUninitializedPropertyAccessException('stepsButton');
      } else {
        tmp_0 = $stepsButton._v;
      }
      removeBsBgColor(tmp_0, BsBgColor_BODYSECONDARY_getInstance());
      var tmp_1;
      if ($ingredientsButton._v == null) {
        throwUninitializedPropertyAccessException('ingredientsButton');
      } else {
        tmp_1 = $ingredientsButton._v;
      }
      addBsBgColor(tmp_1, BsBgColor_BODYSECONDARY_getInstance());
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda_0($panel, $stepsButton, $ingredientsButton) {
    return function ($this$button) {
      addBsBgColor($this$button, BsBgColor_BODYSECONDARY_getInstance());
      $this$button.set_border_fseb7l_k$(new Border(VOID, BorderStyle_NONE_getInstance()));
      $this$button.set_marginLeft_hqxzqs_k$(get_px(20));
      $this$button.onClick_br9hmj_k$(RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_0($panel, $stepsButton, $ingredientsButton));
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda($ingredientsButton, $stepsButton, $panel) {
    return function ($this$nav) {
      $this$nav.set_padding_5cj5xu_k$(get_px(7));
      $ingredientsButton._v = button($this$nav, 'Ingredients', 'fas fa-carrot', VOID, VOID, VOID, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda($panel, $ingredientsButton, $stepsButton));
      $stepsButton._v = button($this$nav, 'Steps', 'fas fa-list-ol', VOID, VOID, VOID, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda_0($panel, $stepsButton, $ingredientsButton));
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda_1($this$span) {
    $this$span.set_marginRight_b0p4mj_k$(get_px(8));
    return Unit_getInstance();
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_1($recipe, $portionsState) {
    return function ($this$onInput, it) {
      var tmp0_safe_receiver = $this$onInput.get_value_j01efc_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toIntOrNull(tmp0_safe_receiver);
      var newPortion = tmp1_elvis_lhs == null ? $recipe.get_portions_jqwgy3_k$() : tmp1_elvis_lhs;
      var tmp;
      if (!(newPortion == null) && newPortion >= 1) {
        $portionsState.set_value_v1vabv_k$(newPortion);
        tmp = Unit_getInstance();
      } else {
        $this$onInput.set_value_utlds3_k$('1');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda($handler, $this_setEventListener) {
    return function (e) {
      $handler($this_setEventListener.self, e);
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_2($handler) {
    return function ($this$setEventListener) {
      $this$setEventListener.input = RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda($handler, $this$setEventListener);
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda_2($recipe, $portionsState) {
    return function ($this$textInput) {
      $this$textInput.set_height_z8kom6_k$(get_auto());
      $this$textInput.set_width_3hpb1_k$(get_px(80));
      $this$textInput.set_textAlign_puln5o_k$(TextAlign_LEFT_getInstance());
      // Inline function 'io.kvision.core.onInput' call
      var handler = RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_1($recipe, $portionsState);
      $this$textInput.setEventListener_4rv3s8_k$(RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_2(handler));
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda_0($recipe, $portionsState) {
    return function ($this$nav) {
      $this$nav.set_height_z8kom6_k$(get_perc(100));
      $this$nav.set_display_2qo1ly_k$(Display_FLEX_getInstance());
      $this$nav.set_alignItems_2x4ueh_k$(AlignItems_CENTER_getInstance());
      $this$nav.set_flexWrap_te3tvl_k$(FlexWrap_WRAP_getInstance());
      span($this$nav, 'Portions:', VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda_1);
      var tmp0_value = toString_0($recipe.get_portions_jqwgy3_k$());
      var tmp1_type = InputType_NUMBER_getInstance();
      var portionsInput = textInput($this$nav, tmp1_type, tmp0_value, 4, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda_2($recipe, $portionsState));
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda_0($panel, $recipe, $portionsState) {
    return function ($this$navbar) {
      $this$navbar.set_borderRadius_tlfw5x_k$(get_px(25));
      $this$navbar.set_width_3hpb1_k$(get_perc(100));
      $this$navbar.set_maxWidth_ba46bd_k$(get_px(900));
      var ingredientsButton = {_v: null};
      var stepsButton = {_v: null};
      nav($this$navbar, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda(ingredientsButton, stepsButton, $panel));
      span($this$navbar);
      nav($this$navbar, true, VOID, RecipeView$slambda$lambda$lambda$lambda_0($recipe, $portionsState));
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda_1($recipe, $portionsState, $customScope) {
    return function ($this$vPanel) {
      $this$vPanel.set_marginTop_uelzj8_k$(get_px(40));
      var _iterator__ex2g4s = $recipe.get_ingredientsInRecipe_3mm3yk_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'epicer.frontend.views.RecipeView.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        ingredientInRecipeCard($this$vPanel, element, $portionsState, $recipe.get_portions_jqwgy3_k$(), $customScope);
      }
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_3($this$h3) {
    $this$h3.set_marginTop_uelzj8_k$(get_px(20));
    $this$h3.set_marginBottom_q6omk0_k$(get_px(10));
    $this$h3.set_fontWeight_3x4rur_k$(FontWeight_BOLD_getInstance());
    $this$h3.set_fontSize_ozq5eh_k$(get_px(30));
    return Unit_getInstance();
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda_0($this$h4) {
    $this$h4.set_marginTop_uelzj8_k$(get_px(15));
    $this$h4.set_marginBottom_q6omk0_k$(get_px(5));
    $this$h4.set_fontWeight_3x4rur_k$(FontWeight_NORMAL_getInstance());
    $this$h4.set_fontSize_ozq5eh_k$(get_px(24));
    return Unit_getInstance();
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($this$h5) {
    $this$h5.set_marginBottom_q6omk0_k$(get_px(15));
    $this$h5.set_fontWeight_3x4rur_k$(FontWeight_LIGHTER_getInstance());
    $this$h5.set_fontSize_ozq5eh_k$(get_px(20));
    return Unit_getInstance();
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($step, $portionsState, $recipe, $customScope) {
    return function ($this$ul) {
      $this$ul.set_listStyle_x4n8lv_k$(new ListStyle(ListStyleType_NONE_getInstance()));
      var _iterator__ex2g4s = $step.get_ingredientsInRecipe_3mm3yk_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'epicer.frontend.views.RecipeView.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        ingredientInRecipeCard($this$ul, element, $portionsState, $recipe.get_portions_jqwgy3_k$(), $customScope, get_px(64), get_px(18), get_px(15), get_px(20));
      }
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda_1($step, $portionsState, $recipe, $customScope) {
    return function ($this$li) {
      var tmp = $step.get_description_emjre5_k$();
      h5($this$li, tmp, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      ul($this$li, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($step, $portionsState, $recipe, $customScope));
      $this$li.set_marginBottom_q6omk0_k$(get_px(15));
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_4($section, $portionsState, $recipe, $customScope) {
    return function ($this$ol) {
      $this$ol.set_listStyle_x4n8lv_k$(new ListStyle(ListStyleType_NONE_getInstance()));
      var _iterator__ex2g4s = $section.get_steps_iyq03i_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'epicer.frontend.views.RecipeView.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = '' + element.get_index_it478p_k$() + '. ' + element.get_name_woqyms_k$();
        h4($this$ol, tmp, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
        li($this$ol, VOID, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda$lambda$lambda_1(element, $portionsState, $recipe, $customScope));
      }
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda$lambda_3($recipe, $portionsState, $customScope) {
    return function ($this$ol) {
      $this$ol.set_listStyle_x4n8lv_k$(new ListStyle(ListStyleType_NONE_getInstance()));
      var _iterator__ex2g4s = $recipe.get_sections_g4k5xl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'epicer.frontend.views.RecipeView.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = '' + element.get_index_it478p_k$() + '. ' + element.get_name_woqyms_k$();
        h3($this$ol, tmp, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_3);
        ol($this$ol, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda$lambda_4(element, $portionsState, $recipe, $customScope));
      }
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda$lambda_2($recipe, $portionsState, $customScope) {
    return function ($this$vPanel) {
      $this$vPanel.set_marginTop_uelzj8_k$(get_px(25));
      $this$vPanel.set_padding_5cj5xu_k$(get_px(15));
      $this$vPanel.set_alignItems_2x4ueh_k$(AlignItems_START_getInstance());
      ol($this$vPanel, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda$lambda_3($recipe, $portionsState, $customScope));
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda$lambda_1($recipe, $portionsState, $customScope) {
    return function ($this$stackPanel) {
      vPanel($this$stackPanel, VOID, VOID, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda_1($recipe, $portionsState, $customScope));
      vPanel($this$stackPanel, VOID, VOID, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda$lambda_2($recipe, $portionsState, $customScope));
      $this$stackPanel.set_activeIndex_2mqwdj_k$(0);
      return Unit_getInstance();
    };
  }
  function RecipeView$slambda$lambda($recipe, $portionsState, $customScope) {
    return function ($this$vPanel) {
      $this$vPanel.set_marginTop_uelzj8_k$(get_px(25));
      $this$vPanel.set_alignItems_2x4ueh_k$(AlignItems_CENTER_getInstance());
      $this$vPanel.set_marginRight_b0p4mj_k$(get_px(50));
      $this$vPanel.set_marginLeft_hqxzqs_k$(get_px(50));
      var panel = {_v: null};
      div($this$vPanel, VOID, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda($recipe));
      var tmp0_bgColor = BsBgColor_BODYSECONDARY_getInstance();
      var tmp1_expand = NavbarExpand_ALWAYS_getInstance();
      navbar($this$vPanel, VOID, VOID, VOID, tmp1_expand, VOID, tmp0_bgColor, VOID, VOID, VOID, VOID, RecipeView$slambda$lambda$lambda_0(panel, $recipe, $portionsState));
      panel._v = stackPanel($this$vPanel, VOID, VOID, RecipeView$slambda$lambda$lambda_1($recipe, $portionsState, $customScope));
      return Unit_getInstance();
    };
  }
  function _get_routing__z92sqz_2($this) {
    return $this.routing_1;
  }
  function RecipeView$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RecipeView$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RecipeView$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RecipeView$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = isLogged(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              this.this$0__1.routing_1.navigate('/login');
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RecipeView$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RecipeView$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RecipeView$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RecipeView$slambda_0(this$0, resultContinuation) {
    var i = new RecipeView$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RecipeView$slambda_1($recipeId, this$0, $customScope, resultContinuation) {
    this.$recipeId_1 = $recipeId;
    this.this$0__1 = this$0;
    this.$customScope_1 = $customScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RecipeView$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(RecipeView$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RecipeView$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = getRecipe(this.$recipeId_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var recipe = suspendResult;
            if (!(recipe == null)) {
              var portionsState = new ObservableValue(recipe.get_portions_jqwgy3_k$());
              vPanel(this.this$0__1, VOID, VOID, VOID, VOID, VOID, RecipeView$slambda$lambda(recipe, portionsState, this.$customScope_1));
            }

            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(RecipeView$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new RecipeView$slambda_1(this.$recipeId_1, this.this$0__1, this.$customScope_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(RecipeView$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function RecipeView$slambda_2($recipeId, this$0, $customScope, resultContinuation) {
    var i = new RecipeView$slambda_1($recipeId, this$0, $customScope, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RecipeView(routing, recipeId) {
    SimplePanel.call(this);
    this.routing_1 = routing;
    var customScope = CoroutineScope_0(Dispatchers_getInstance().get_Main_wo5vz6_k$());
    launch(customScope, VOID, VOID, RecipeView$slambda_0(this, null));
    this.add_rekwpt_k$(new HeaderComponent(this.routing_1));
    launch(customScope, VOID, VOID, RecipeView$slambda_2(recipeId, this, customScope, null));
  }
  //region block: init
  backend_url = 'http://localhost:8080';
  assets = '/assets';
  image_not_found = '/assets/image_not_found.png';
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=epicer-frontend.js.map
