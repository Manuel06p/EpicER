(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-state'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-state'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-state'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-state'.");
    }
    globalThis['kvision-kvision-modules-kvision-state'] = factory(typeof globalThis['kvision-kvision-modules-kvision-state'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-state'], globalThis['kotlin-kotlin-stdlib'], kvision);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.f;
  var Container = kotlin_io_kvision_kvision.$_$.l1;
  var isInterface = kotlin_kotlin.$_$.ua;
  var Unit_getInstance = kotlin_kotlin.$_$.d5;
  //endregion
  //region block: pre-declaration
  //endregion
  function bind(_this__u8e3s4, observableState, removeChildren, runImmediately, factory) {
    removeChildren = removeChildren === VOID ? true : removeChildren;
    runImmediately = runImmediately === VOID ? true : runImmediately;
    var skip = {_v: !runImmediately};
    _this__u8e3s4.addBeforeDisposeHook_g5p0gq_k$(observableState.subscribe_go603e_k$(bind$lambda(skip, _this__u8e3s4, removeChildren, factory)));
    return _this__u8e3s4;
  }
  function bind$lambda$lambda($removeChildren, $this_bind, $factory, $it) {
    return function () {
      var tmp;
      if ($removeChildren) {
        var tmp0_safe_receiver = isInterface($this_bind, Container) ? $this_bind : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.disposeAll_hpz7bi_k$();
        }
        tmp = Unit_getInstance();
      }
      $factory($this_bind, $it);
      return Unit_getInstance();
    };
  }
  function bind$lambda($skip, $this_bind, $removeChildren, $factory) {
    return function (it) {
      var tmp;
      if (!$skip._v) {
        $this_bind.singleRenderAsync_haca86_k$(bind$lambda$lambda($removeChildren, $this_bind, $factory, it));
        tmp = Unit_getInstance();
      } else {
        $skip._v = false;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = bind;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-state.js.map
