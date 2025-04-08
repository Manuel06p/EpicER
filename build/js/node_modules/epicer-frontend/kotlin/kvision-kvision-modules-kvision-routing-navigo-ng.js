(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'navigo', './kvision.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('navigo'), require('./kvision.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof Navigo === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-routing-navigo-ng'. Its dependency 'navigo' was not found. Please, check whether 'navigo' is loaded prior to 'kvision-kvision-modules-kvision-routing-navigo-ng'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-routing-navigo-ng'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-routing-navigo-ng'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-routing-navigo-ng'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-routing-navigo-ng'.");
    }
    globalThis['kvision-kvision-modules-kvision-routing-navigo-ng'] = factory(typeof globalThis['kvision-kvision-modules-kvision-routing-navigo-ng'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-routing-navigo-ng'], Navigo, kvision, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, Navigo, kotlin_io_kvision_kvision, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var RoutingManager_getInstance = kotlin_io_kvision_kvision.$_$.x;
  var protoOf = kotlin_kotlin.$_$.fb;
  var VOID = kotlin_kotlin.$_$.f;
  var initMetadataForCompanion = kotlin_kotlin.$_$.da;
  var KVRouter = kotlin_io_kvision_kvision.$_$.k2;
  var initMetadataForClass = kotlin_kotlin.$_$.ca;
  var THROW_IAE = kotlin_kotlin.$_$.re;
  var enumEntries = kotlin_kotlin.$_$.i9;
  var Unit_getInstance = kotlin_kotlin.$_$.c5;
  var Enum = kotlin_kotlin.$_$.ce;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var RouterFactory = kotlin_io_kvision_kvision.$_$.l2;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Routing, 'Routing', Routing, Navigo, [KVRouter]);
  initMetadataForClass(Strategy, 'Strategy', VOID, Enum);
  initMetadataForClass(NavigoRouterFactory, 'NavigoRouterFactory', NavigoRouterFactory, VOID, [RouterFactory]);
  //endregion
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).init_fsw4sy_k$ = function (root, useHash, strategy, noMatchWarning, linksSelector) {
    RoutingManager_getInstance().set_routerFactory_xubq9x_k$(new NavigoRouterFactory(root, useHash, strategy, noMatchWarning, linksSelector));
    RoutingManager_getInstance().initRouter_f4tktl_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return RoutingManager_getInstance().getRouter_cqyofz_k$();
  };
  protoOf(Companion).init$default_24i12r_k$ = function (root, useHash, strategy, noMatchWarning, linksSelector, $super) {
    root = root === VOID ? null : root;
    useHash = useHash === VOID ? true : useHash;
    strategy = strategy === VOID ? Strategy_ONE_getInstance() : strategy;
    noMatchWarning = noMatchWarning === VOID ? false : noMatchWarning;
    linksSelector = linksSelector === VOID ? null : linksSelector;
    return $super === VOID ? this.init_fsw4sy_k$(root, useHash, strategy, noMatchWarning, linksSelector) : $super.init_fsw4sy_k$.call(this, root, useHash, strategy, noMatchWarning, linksSelector);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Routing(root, useHash, strategy, noMatchWarning, linksSelector) {
    Companion_getInstance();
    root = root === VOID ? null : root;
    useHash = useHash === VOID ? true : useHash;
    strategy = strategy === VOID ? Strategy_ONE_getInstance() : strategy;
    noMatchWarning = noMatchWarning === VOID ? false : noMatchWarning;
    linksSelector = linksSelector === VOID ? null : linksSelector;
    Navigo.call(this, calculateRoot(root, useHash), calculateOptions(useHash, strategy, noMatchWarning, linksSelector));
  }
  protoOf(Routing).kvNavigate_rz6nrm_k$ = function (route) {
    this.navigate(route);
  };
  protoOf(Routing).kvOn_ic624w_k$ = function (route, handler) {
    this.on(route, handler);
    return this;
  };
  protoOf(Routing).kvOff_k5foy4_k$ = function (handler) {
    this.off(handler);
  };
  protoOf(Routing).kvResolve_9bjbjl_k$ = function () {
    this.resolve();
  };
  protoOf(Routing).kvDestroy_oi5mbj_k$ = function () {
    this.destroy();
  };
  var Strategy_ONE_instance;
  var Strategy_ALL_instance;
  function values() {
    return [Strategy_ONE_getInstance(), Strategy_ALL_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ONE':
        return Strategy_ONE_getInstance();
      case 'ALL':
        return Strategy_ALL_getInstance();
      default:
        Strategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Strategy_entriesInitialized;
  function Strategy_initEntries() {
    if (Strategy_entriesInitialized)
      return Unit_getInstance();
    Strategy_entriesInitialized = true;
    Strategy_ONE_instance = new Strategy('ONE', 0);
    Strategy_ALL_instance = new Strategy('ALL', 1);
  }
  var $ENTRIES;
  function Strategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function calculateRoot(root, useHash) {
    return root == null ? useHash ? '/' : window.location.pathname : root;
  }
  function calculateOptions(useHash, strategy, noMatchWarning, linksSelector) {
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.routing.calculateOptions.<anonymous>' call
    this_0.hash = useHash;
    this_0.strategy = strategy.get_name_woqyms_k$();
    this_0.noMatchWarning = noMatchWarning;
    if (!(linksSelector == null))
      this_0.linksSelector = linksSelector;
    // Inline function 'kotlin.js.unsafeCast' call
    return this_0;
  }
  function _set_routing__a5syv5($this, _set____db54di) {
    $this.routing_1 = _set____db54di;
  }
  function _get_routing__z92sqz($this) {
    return $this.routing_1;
  }
  function NavigoRouterFactory(root, useHash, strategy, noMatchWarning, linksSelector) {
    root = root === VOID ? null : root;
    useHash = useHash === VOID ? true : useHash;
    strategy = strategy === VOID ? Strategy_ONE_getInstance() : strategy;
    noMatchWarning = noMatchWarning === VOID ? false : noMatchWarning;
    linksSelector = linksSelector === VOID ? null : linksSelector;
    this.root_1 = root;
    this.useHash_1 = useHash;
    this.strategy_1 = strategy;
    this.noMatchWarning_1 = noMatchWarning;
    this.linksSelector_1 = linksSelector;
    this.routing_1 = null;
  }
  protoOf(NavigoRouterFactory).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  protoOf(NavigoRouterFactory).get_useHash_16se5w_k$ = function () {
    return this.useHash_1;
  };
  protoOf(NavigoRouterFactory).get_strategy_28j0lg_k$ = function () {
    return this.strategy_1;
  };
  protoOf(NavigoRouterFactory).get_noMatchWarning_vxr0qn_k$ = function () {
    return this.noMatchWarning_1;
  };
  protoOf(NavigoRouterFactory).get_linksSelector_ihtm5t_k$ = function () {
    return this.linksSelector_1;
  };
  protoOf(NavigoRouterFactory).getRouter_cqyofz_k$ = function () {
    var tmp0_elvis_lhs = this.routing_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Routing not initialized');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(NavigoRouterFactory).initRouter_f4tktl_k$ = function () {
    if (this.routing_1 == null) {
      this.routing_1 = new Routing(this.root_1, this.useHash_1, this.strategy_1, this.noMatchWarning_1, this.linksSelector_1);
    }
  };
  protoOf(NavigoRouterFactory).shutdownRouter_acl6kx_k$ = function () {
    var tmp0_safe_receiver = this.routing_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.destroy();
    }
    this.routing_1 = null;
  };
  function Strategy_ONE_getInstance() {
    Strategy_initEntries();
    return Strategy_ONE_instance;
  }
  function Strategy_ALL_getInstance() {
    Strategy_initEntries();
    return Strategy_ALL_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-routing-navigo-ng.js.map
