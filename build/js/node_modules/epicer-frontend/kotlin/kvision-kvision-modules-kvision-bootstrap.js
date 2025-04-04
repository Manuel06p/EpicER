(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-bootstrap'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-bootstrap'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-bootstrap'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-bootstrap'.");
    }
    globalThis['kvision-kvision-modules-kvision-bootstrap'] = factory(typeof globalThis['kvision-kvision-modules-kvision-bootstrap'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-bootstrap'], globalThis['kotlin-kotlin-stdlib'], kvision);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.eb;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.e1;
  var initMetadataForObject = kotlin_kotlin.$_$.ga;
  var VOID = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_io_kvision_kvision.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.b5;
  var THROW_IAE = kotlin_kotlin.$_$.qe;
  var enumEntries = kotlin_kotlin.$_$.h9;
  var Enum = kotlin_kotlin.$_$.be;
  var initMetadataForClass = kotlin_kotlin.$_$.ba;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(BootstrapCssModule, 'BootstrapCssModule', VOID, VOID, [ModuleInitializer]);
  initMetadataForObject(BootstrapModule, 'BootstrapModule', VOID, VOID, [ModuleInitializer]);
  initMetadataForObject(ThemeManager, 'ThemeManager');
  initMetadataForClass(Theme, 'Theme', VOID, Enum);
  //endregion
  function BootstrapCssModule() {
    BootstrapCssModule_instance = this;
  }
  protoOf(BootstrapCssModule).initialize_o9rygw_k$ = function () {
    require('bootstrap/dist/css/bootstrap.min.css');
  };
  var BootstrapCssModule_instance;
  function BootstrapCssModule_getInstance() {
    if (BootstrapCssModule_instance == null)
      new BootstrapCssModule();
    return BootstrapCssModule_instance;
  }
  function BootstrapModule() {
    BootstrapModule_instance = this;
    var tmp0_safe_receiver = document.body;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.setAttribute('data-bs-no-jquery', 'true');
    }
    this.bootstrap_1 = require('bootstrap');
  }
  protoOf(BootstrapModule).get_bootstrap_5xrc6f_k$ = function () {
    return this.bootstrap_1;
  };
  protoOf(BootstrapModule).initialize_o9rygw_k$ = function () {
  };
  var BootstrapModule_instance;
  function BootstrapModule_getInstance() {
    if (BootstrapModule_instance == null)
      new BootstrapModule();
    return BootstrapModule_instance;
  }
  function _set_remember__hdxb12($this, _set____db54di) {
    $this.remember_1 = _set____db54di;
  }
  function _get_remember__u6tmhu($this) {
    return $this.remember_1;
  }
  function getStoredTheme($this) {
    var tmp;
    if ($this.remember_1) {
      var tmp0_safe_receiver = localStorage.getItem('kvision-bootstrap-theme');
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.find' call
        var tmp0 = get_entries();
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var element = _iterator__ex2g4s.next_20eer_k$();
            // Inline function 'io.kvision.theme.ThemeManager.getStoredTheme.<anonymous>.<anonymous>' call
            if (tmp0_safe_receiver === element.theme_1) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        return tmp$ret$1;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function setStoredTheme($this, theme) {
    if ($this.remember_1) {
      localStorage.setItem('kvision-bootstrap-theme', theme.theme_1);
    }
  }
  function getPreferredTheme($this) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme_DARK_getInstance() : Theme_LIGHT_getInstance();
  }
  function ThemeManager$init$lambda(it) {
    var tmp0_elvis_lhs = getStoredTheme(ThemeManager_getInstance());
    var storedTheme = tmp0_elvis_lhs == null ? Theme_AUTO_getInstance() : tmp0_elvis_lhs;
    if (storedTheme.equals(Theme_AUTO_getInstance())) {
      var tmp1_safe_receiver = document.documentElement;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.setAttribute('data-bs-theme', getPreferredTheme(ThemeManager_getInstance()).theme_1);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = Companion_getInstance().get_roots_iy382w_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.theme.ThemeManager.init.<anonymous>.<anonymous>' call
        element.restart_nz0dof_k$();
      }
    }
    return Unit_getInstance();
  }
  function ThemeManager() {
    ThemeManager_instance = this;
    this.remember_1 = true;
    this.theme_1 = Theme_AUTO_getInstance();
  }
  protoOf(ThemeManager).set_theme_a618pc_k$ = function (value) {
    this.theme_1 = value;
    setStoredTheme(this, value);
    if (value.equals(Theme_AUTO_getInstance())) {
      var tmp0_safe_receiver = document.documentElement;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.setAttribute('data-bs-theme', getPreferredTheme(this).theme_1);
      }
    } else {
      var tmp1_safe_receiver = document.documentElement;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.setAttribute('data-bs-theme', value.theme_1);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = Companion_getInstance().get_roots_iy382w_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.theme.ThemeManager.<set-theme>.<anonymous>' call
      element.restart_nz0dof_k$();
    }
  };
  protoOf(ThemeManager).get_theme_iz24rk_k$ = function () {
    return this.theme_1;
  };
  protoOf(ThemeManager).init_cqxvcc_k$ = function (initialTheme, remember) {
    this.remember_1 = remember;
    var tmp1_elvis_lhs = initialTheme == null ? getStoredTheme(this) : initialTheme;
    this.set_theme_a618pc_k$(tmp1_elvis_lhs == null ? getPreferredTheme(this) : tmp1_elvis_lhs);
    if (this.theme_1.equals(Theme_AUTO_getInstance())) {
      var tmp2_safe_receiver = document.documentElement;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.setAttribute('data-bs-theme', getPreferredTheme(this).theme_1);
      }
    } else {
      var tmp3_safe_receiver = document.documentElement;
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.setAttribute('data-bs-theme', this.theme_1.theme_1);
      }
    }
    var tmp = window.matchMedia('(prefers-color-scheme: dark)');
    tmp.addEventListener('change', ThemeManager$init$lambda);
  };
  protoOf(ThemeManager).init$default_e78sbl_k$ = function (initialTheme, remember, $super) {
    initialTheme = initialTheme === VOID ? null : initialTheme;
    remember = remember === VOID ? true : remember;
    var tmp;
    if ($super === VOID) {
      this.init_cqxvcc_k$(initialTheme, remember);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.init_cqxvcc_k$.call(this, initialTheme, remember);
    }
    return tmp;
  };
  var ThemeManager_instance;
  function ThemeManager_getInstance() {
    if (ThemeManager_instance == null)
      new ThemeManager();
    return ThemeManager_instance;
  }
  var Theme_AUTO_instance;
  var Theme_LIGHT_instance;
  var Theme_DARK_instance;
  function values() {
    return [Theme_AUTO_getInstance(), Theme_LIGHT_getInstance(), Theme_DARK_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'AUTO':
        return Theme_AUTO_getInstance();
      case 'LIGHT':
        return Theme_LIGHT_getInstance();
      case 'DARK':
        return Theme_DARK_getInstance();
      default:
        Theme_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_AUTO_instance = new Theme('AUTO', 0, 'auto');
    Theme_LIGHT_instance = new Theme('LIGHT', 1, 'light');
    Theme_DARK_instance = new Theme('DARK', 2, 'dark');
  }
  var $ENTRIES;
  function Theme(name, ordinal, theme) {
    Enum.call(this, name, ordinal);
    this.theme_1 = theme;
  }
  protoOf(Theme).get_theme_8lbir8_k$ = function () {
    return this.theme_1;
  };
  function Theme_AUTO_getInstance() {
    Theme_initEntries();
    return Theme_AUTO_instance;
  }
  function Theme_LIGHT_getInstance() {
    Theme_initEntries();
    return Theme_LIGHT_instance;
  }
  function Theme_DARK_getInstance() {
    Theme_initEntries();
    return Theme_DARK_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ThemeManager_getInstance;
  _.$_$.b = BootstrapCssModule_getInstance;
  _.$_$.c = BootstrapModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-bootstrap.js.map
