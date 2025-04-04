(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js', './kvision-kvision-modules-kvision-i18n.js', './kvision-kvision-modules-kvision-bootstrap.js', './kvision-kvision-modules-kvision-routing-navigo-ng.js', './kvision-kvision-modules-kvision-datetime.js', './kvision-kvision-modules-kvision-richtext.js', './kvision-kvision-modules-kvision-tom-select.js', './kvision-kvision-modules-kvision-bootstrap-upload.js', './kvision-kvision-modules-kvision-imask.js', './kvision-kvision-modules-kvision-toastify.js', './kvision-kvision-modules-kvision-fontawesome.js', './kvision-kvision-modules-kvision-bootstrap-icons.js', './kvision-kvision-modules-kvision-print.js', './kvision-kvision-modules-kvision-chart.js', './kvision-kvision-modules-kvision-tabulator.js', './kvision-kvision-modules-kvision-maps.js', './kotlinx-serialization-kotlinx-serialization-json.js', './epicer-common.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'), require('./kvision-kvision-modules-kvision-i18n.js'), require('./kvision-kvision-modules-kvision-bootstrap.js'), require('./kvision-kvision-modules-kvision-routing-navigo-ng.js'), require('./kvision-kvision-modules-kvision-datetime.js'), require('./kvision-kvision-modules-kvision-richtext.js'), require('./kvision-kvision-modules-kvision-tom-select.js'), require('./kvision-kvision-modules-kvision-bootstrap-upload.js'), require('./kvision-kvision-modules-kvision-imask.js'), require('./kvision-kvision-modules-kvision-toastify.js'), require('./kvision-kvision-modules-kvision-fontawesome.js'), require('./kvision-kvision-modules-kvision-bootstrap-icons.js'), require('./kvision-kvision-modules-kvision-print.js'), require('./kvision-kvision-modules-kvision-chart.js'), require('./kvision-kvision-modules-kvision-tabulator.js'), require('./kvision-kvision-modules-kvision-maps.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./epicer-common.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'));
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
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'epicer.frontend:frontend'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'epicer.frontend:frontend'.");
    }
    globalThis['epicer.frontend:frontend'] = factory(typeof globalThis['epicer.frontend:frontend'] === 'undefined' ? {} : globalThis['epicer.frontend:frontend'], globalThis['kotlin-kotlin-stdlib'], kvision, globalThis['kvision-kvision-modules-kvision-i18n'], globalThis['kvision-kvision-modules-kvision-bootstrap'], globalThis['kvision-kvision-modules-kvision-routing-navigo-ng'], globalThis['kvision-kvision-modules-kvision-datetime'], globalThis['kvision-kvision-modules-kvision-richtext'], globalThis['kvision-kvision-modules-kvision-tom-select'], globalThis['kvision-kvision-modules-kvision-bootstrap-upload'], globalThis['kvision-kvision-modules-kvision-imask'], globalThis['kvision-kvision-modules-kvision-toastify'], globalThis['kvision-kvision-modules-kvision-fontawesome'], globalThis['kvision-kvision-modules-kvision-bootstrap-icons'], globalThis['kvision-kvision-modules-kvision-print'], globalThis['kvision-kvision-modules-kvision-chart'], globalThis['kvision-kvision-modules-kvision-tabulator'], globalThis['kvision-kvision-modules-kvision-maps'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['epicer-common'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision, kotlin_io_kvision_kvision_i18n, kotlin_io_kvision_kvision_bootstrap, kotlin_io_kvision_kvision_routing_navigo_ng, kotlin_io_kvision_kvision_datetime, kotlin_io_kvision_kvision_richtext, kotlin_io_kvision_kvision_tom_select, kotlin_io_kvision_kvision_bootstrap_upload, kotlin_io_kvision_kvision_imask, kotlin_io_kvision_kvision_toastify, kotlin_io_kvision_kvision_fontawesome, kotlin_io_kvision_kvision_bootstrap_icons, kotlin_io_kvision_kvision_print, kotlin_io_kvision_kvision_chart, kotlin_io_kvision_kvision_tabulator, kotlin_io_kvision_kvision_maps, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_epicer_common, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.b5;
  var H3 = kotlin_io_kvision_kvision.$_$.n;
  var Application = kotlin_io_kvision_kvision.$_$.d1;
  var I18n_getInstance = kotlin_io_kvision_kvision.$_$.d;
  var to = kotlin_kotlin.$_$.sf;
  var mapOf = kotlin_kotlin.$_$.h7;
  var DefaultI18nManager = kotlin_io_kvision_kvision_i18n.$_$.a;
  var ThemeManager_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.a;
  var root = kotlin_io_kvision_kvision.$_$.x;
  var SimplePanel = kotlin_io_kvision_kvision.$_$.v;
  var Companion_getInstance = kotlin_io_kvision_kvision_routing_navigo_ng.$_$.a;
  var protoOf = kotlin_kotlin.$_$.eb;
  var initMetadataForClass = kotlin_kotlin.$_$.ba;
  var BootstrapModule_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.c;
  var BootstrapCssModule_getInstance = kotlin_io_kvision_kvision_bootstrap.$_$.b;
  var DatetimeModule_getInstance = kotlin_io_kvision_kvision_datetime.$_$.a;
  var RichTextModule_getInstance = kotlin_io_kvision_kvision_richtext.$_$.a;
  var TomSelectModule_getInstance = kotlin_io_kvision_kvision_tom_select.$_$.a;
  var BootstrapUploadModule_getInstance = kotlin_io_kvision_kvision_bootstrap_upload.$_$.a;
  var ImaskModule_getInstance = kotlin_io_kvision_kvision_imask.$_$.a;
  var ToastifyModule_getInstance = kotlin_io_kvision_kvision_toastify.$_$.b;
  var FontAwesomeModule_getInstance = kotlin_io_kvision_kvision_fontawesome.$_$.a;
  var BootstrapIconsModule_getInstance = kotlin_io_kvision_kvision_bootstrap_icons.$_$.a;
  var PrintModule_getInstance = kotlin_io_kvision_kvision_print.$_$.a;
  var ChartModule_getInstance = kotlin_io_kvision_kvision_chart.$_$.a;
  var TabulatorModule_getInstance = kotlin_io_kvision_kvision_tabulator.$_$.b;
  var TabulatorCssBootstrapModule_getInstance = kotlin_io_kvision_kvision_tabulator.$_$.a;
  var MapsModule_getInstance = kotlin_io_kvision_kvision_maps.$_$.a;
  var CoreModule_getInstance = kotlin_io_kvision_kvision.$_$.g;
  var startApplication = kotlin_io_kvision_kvision.$_$.f1;
  var CoroutineImpl = kotlin_kotlin.$_$.d9;
  var json = kotlin_kotlin.$_$.wa;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var LoginUserDTO = kotlin_epicer_common.$_$.a;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.ef;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var THROW_CCE = kotlin_kotlin.$_$.pe;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var isInterface = kotlin_kotlin.$_$.pa;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.n8;
  var TokenDTO = kotlin_epicer_common.$_$.b;
  var Exception = kotlin_kotlin.$_$.de;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.da;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Toast_getInstance = kotlin_io_kvision_kvision_toastify.$_$.a;
  var println = kotlin_kotlin.$_$.i9;
  var initMetadataForLambda = kotlin_kotlin.$_$.fa;
  var VOID = kotlin_kotlin.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get_px = kotlin_io_kvision_kvision.$_$.c1;
  var get_perc = kotlin_io_kvision_kvision.$_$.b1;
  var Companion_getInstance_0 = kotlin_epicer_common.$_$.c;
  var FormPanel = kotlin_io_kvision_kvision.$_$.m;
  var Text = kotlin_io_kvision_kvision.$_$.l;
  var Password = kotlin_io_kvision_kvision.$_$.k;
  var ButtonType_SUBMIT_getInstance = kotlin_io_kvision_kvision.$_$.b;
  var button = kotlin_io_kvision_kvision.$_$.o;
  var VPanel = kotlin_io_kvision_kvision.$_$.w;
  var h2 = kotlin_io_kvision_kvision.$_$.p;
  var AlignItems_CENTER_getInstance = kotlin_io_kvision_kvision.$_$.a;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var vPanel = kotlin_io_kvision_kvision.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.ub;
  var getPropertyCallableRef = kotlin_kotlin.$_$.y9;
  var SuspendFunction1 = kotlin_kotlin.$_$.e9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(App, 'App', App, Application);
  initMetadataForCoroutine($loginCOROUTINE$0, CoroutineImpl);
  initMetadataForLambda(LoginView$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(LoginView, 'LoginView', VOID, VPanel);
  //endregion
  function App$start$lambda(it) {
    return Unit_getInstance();
  }
  function App$start$lambda_0($mainContainer, $routing) {
    return function (it) {
      $mainContainer.removeAll_c84dd9_k$();
      $mainContainer.add_rekwpt_k$(new LoginView($routing));
      return Unit_getInstance();
    };
  }
  function App$start$lambda_1($mainContainer) {
    return function (it) {
      $mainContainer.removeAll_c84dd9_k$();
      $mainContainer.add_rekwpt_k$(new H3('Welcome to Dashboard!'));
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
    var routing = Companion_getInstance().init$default_24i12r_k$();
    root_0.add_rekwpt_k$(mainContainer);
    var tmp = routing.on('/', App$start$lambda);
    var tmp_0 = tmp.on('/login', App$start$lambda_0(mainContainer, routing));
    tmp_0.on('/dashboard', App$start$lambda_1(mainContainer)).resolve();
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
  function get_backend_url() {
    return backend_url;
  }
  var backend_url;
  function login(loginUserDTO, $completion) {
    var tmp = new $loginCOROUTINE$0(loginUserDTO, $completion);
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
  function _get_routing__z92sqz($this) {
    return $this.routing_1;
  }
  function LoginView$lambda$lambda$lambda$slambda($formPanel, resultContinuation) {
    this.$formPanel_1 = $formPanel;
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
              Toast_getInstance().success$default_gt3o9d_k$('Login successfull');
              println('Login succeded');
            } else {
              localStorage.removeItem('jwtToken');
              Toast_getInstance().danger$default_hbu8wf_k$('Login failed');
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
    var i = new LoginView$lambda$lambda$lambda$slambda(this.$formPanel_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LoginView$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LoginView$lambda$lambda$lambda$slambda_0($formPanel, resultContinuation) {
    var i = new LoginView$lambda$lambda$lambda$slambda($formPanel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LoginView$lambda$lambda$lambda($customScope, $formPanel) {
    return function ($this$onClick, it) {
      launch($customScope, VOID, VOID, LoginView$lambda$lambda$lambda$slambda_0($formPanel, null));
      return Unit_getInstance();
    };
  }
  function LoginView$lambda$lambda($customScope, $formPanel) {
    return function ($this$button) {
      $this$button.set_marginTop_uelzj8_k$(get_px(10));
      $this$button.onClick_br9hmj_k$(LoginView$lambda$lambda$lambda($customScope, $formPanel));
      return Unit_getInstance();
    };
  }
  function LoginView$lambda($customScope) {
    return function ($this$vPanel) {
      $this$vPanel.set_width_3hpb1_k$(get_perc(50));
      // Inline function 'kotlin.apply' call
      var this_0 = new FormPanel(VOID, VOID, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_0().serializer_9w0wvi_k$());
      // Inline function 'epicer.frontend.views.LoginView.<anonymous>.<anonymous>' call
      this_0.add$default_nrpp98_k$(username$factory(), new Text(VOID, VOID, VOID, VOID, 'Username'), true);
      this_0.add$default_nrpp98_k$(password$factory(), new Password(VOID, VOID, 'Password'), true);
      var formPanel = this_0;
      $this$vPanel.add_rekwpt_k$(formPanel);
      var tmp0_type = ButtonType_SUBMIT_getInstance();
      var loginButton = button($this$vPanel, 'Login', VOID, VOID, tmp0_type, VOID, VOID, VOID, 'btn btn-primary', LoginView$lambda$lambda($customScope, formPanel));
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
    vPanel(this, VOID, VOID, VOID, VOID, VOID, LoginView$lambda(customScope));
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
  //region block: init
  backend_url = 'http://localhost:8080';
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=epicer-frontend.js.map
