(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-kobweb-compose.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-kobweb-compose.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-html-core.js'));
  else {
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-icons-fa'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-icons-fa'.");
    }
    globalThis['kobweb-frontend-silk-icons-fa'] = factory(typeof globalThis['kobweb-frontend-silk-icons-fa'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-icons-fa'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-html-core']);
  }
}(function (_, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o4;
  var THROW_IAE = kotlin_kotlin.$_$.th;
  var enumEntries = kotlin_kotlin.$_$.kb;
  var Unit_getInstance = kotlin_kotlin.$_$.f5;
  var Enum = kotlin_kotlin.$_$.hh;
  var protoOf = kotlin_kotlin.$_$.kd;
  var initMetadataForClass = kotlin_kotlin.$_$.gc;
  var VOID = kotlin_kotlin.$_$.g;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.sh;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.p6;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IconStyle, 'IconStyle', VOID, Enum);
  initMetadataForClass(IconSize, 'IconSize', VOID, Enum);
  initMetadataForClass(IconCategory, 'IconCategory', VOID, Enum);
  //endregion
  function FaCircleUser(modifier, style, size, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1692354077);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        style_0._v = IconStyle_OUTLINE_getInstance();
      }
      if (!(($default & 4) === 0)) {
        size_0._v = null;
      }
      FaIcon('circle-user', modifier_0._v, style_0._v.category_1, size_0._v, $composer_0, 6 | 112 & $dirty << 3 | 7168 & $dirty << 3, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(FaCircleUser$lambda(modifier_0, style_0, size_0, $changed, $default));
    }
  }
  var IconStyle_FILLED_instance;
  var IconStyle_OUTLINE_instance;
  function values() {
    return [IconStyle_FILLED_getInstance(), IconStyle_OUTLINE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'FILLED':
        return IconStyle_FILLED_getInstance();
      case 'OUTLINE':
        return IconStyle_OUTLINE_getInstance();
      default:
        IconStyle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var IconStyle_entriesInitialized;
  function IconStyle_initEntries() {
    if (IconStyle_entriesInitialized)
      return Unit_getInstance();
    IconStyle_entriesInitialized = true;
    IconStyle_FILLED_instance = new IconStyle('FILLED', 0, IconCategory_SOLID_getInstance());
    IconStyle_OUTLINE_instance = new IconStyle('OUTLINE', 1, IconCategory_REGULAR_getInstance());
  }
  var $ENTRIES;
  function IconStyle(name, ordinal, category) {
    Enum.call(this, name, ordinal);
    this.category_1 = category;
  }
  protoOf(IconStyle).get_category_klsyz3_k$ = function () {
    return this.category_1;
  };
  var IconSize_XXS_instance;
  var IconSize_XS_instance;
  var IconSize_SM_instance;
  var IconSize_LG_instance;
  var IconSize_XL_instance;
  var IconSize_XXL_instance;
  var IconSize_X1_instance;
  var IconSize_X2_instance;
  var IconSize_X3_instance;
  var IconSize_X4_instance;
  var IconSize_X5_instance;
  var IconSize_X6_instance;
  var IconSize_X7_instance;
  var IconSize_X8_instance;
  var IconSize_X9_instance;
  var IconSize_X10_instance;
  function values_0() {
    return [IconSize_XXS_getInstance(), IconSize_XS_getInstance(), IconSize_SM_getInstance(), IconSize_LG_getInstance(), IconSize_XL_getInstance(), IconSize_XXL_getInstance(), IconSize_X1_getInstance(), IconSize_X2_getInstance(), IconSize_X3_getInstance(), IconSize_X4_getInstance(), IconSize_X5_getInstance(), IconSize_X6_getInstance(), IconSize_X7_getInstance(), IconSize_X8_getInstance(), IconSize_X9_getInstance(), IconSize_X10_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'XXS':
        return IconSize_XXS_getInstance();
      case 'XS':
        return IconSize_XS_getInstance();
      case 'SM':
        return IconSize_SM_getInstance();
      case 'LG':
        return IconSize_LG_getInstance();
      case 'XL':
        return IconSize_XL_getInstance();
      case 'XXL':
        return IconSize_XXL_getInstance();
      case 'X1':
        return IconSize_X1_getInstance();
      case 'X2':
        return IconSize_X2_getInstance();
      case 'X3':
        return IconSize_X3_getInstance();
      case 'X4':
        return IconSize_X4_getInstance();
      case 'X5':
        return IconSize_X5_getInstance();
      case 'X6':
        return IconSize_X6_getInstance();
      case 'X7':
        return IconSize_X7_getInstance();
      case 'X8':
        return IconSize_X8_getInstance();
      case 'X9':
        return IconSize_X9_getInstance();
      case 'X10':
        return IconSize_X10_getInstance();
      default:
        IconSize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var IconSize_entriesInitialized;
  function IconSize_initEntries() {
    if (IconSize_entriesInitialized)
      return Unit_getInstance();
    IconSize_entriesInitialized = true;
    IconSize_XXS_instance = new IconSize('XXS', 0, 'fa-2xs');
    IconSize_XS_instance = new IconSize('XS', 1, 'fa-xs');
    IconSize_SM_instance = new IconSize('SM', 2, 'fa-sm');
    IconSize_LG_instance = new IconSize('LG', 3, 'fa-lg');
    IconSize_XL_instance = new IconSize('XL', 4, 'fa-xl');
    IconSize_XXL_instance = new IconSize('XXL', 5, 'fa-2xl');
    IconSize_X1_instance = new IconSize('X1', 6, 'fa-1x');
    IconSize_X2_instance = new IconSize('X2', 7, 'fa-2x');
    IconSize_X3_instance = new IconSize('X3', 8, 'fa-3x');
    IconSize_X4_instance = new IconSize('X4', 9, 'fa-4x');
    IconSize_X5_instance = new IconSize('X5', 10, 'fa-5x');
    IconSize_X6_instance = new IconSize('X6', 11, 'fa-6x');
    IconSize_X7_instance = new IconSize('X7', 12, 'fa-7x');
    IconSize_X8_instance = new IconSize('X8', 13, 'fa-8x');
    IconSize_X9_instance = new IconSize('X9', 14, 'fa-9x');
    IconSize_X10_instance = new IconSize('X10', 15, 'fa-10x');
  }
  var $ENTRIES_0;
  function IconSize(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(IconSize).get_className_pmbm3o_k$ = function () {
    return this.className_1;
  };
  function FaIcon(name, modifier, style, size, $composer, $changed, $default) {
    var style_0 = {_v: style};
    var size_0 = {_v: size};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(706646195);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(size_0._v) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 4) === 0)) {
        style_0._v = IconCategory_REGULAR_getInstance();
      }
      if (!(($default & 8) === 0)) {
        size_0._v = null;
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(-1370970547);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(($dirty & 896) === 256 | ($dirty & 14) === 4) | ($dirty & 7168) === 2048);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.varabyte.kobweb.silk.components.icons.fa.FaIcon.<anonymous>' call
        var value = FaIcon$lambda(style_0, name, size_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_1 = toAttrs(modifier, tmp0_group);
      Span(tmp_1, null, $composer_0, 0, 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(FaIcon$lambda_0(name, modifier, style_0, size_0, $changed, $default));
    }
  }
  var IconCategory_REGULAR_instance;
  var IconCategory_SOLID_instance;
  var IconCategory_BRAND_instance;
  function values_1() {
    return [IconCategory_REGULAR_getInstance(), IconCategory_SOLID_getInstance(), IconCategory_BRAND_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'REGULAR':
        return IconCategory_REGULAR_getInstance();
      case 'SOLID':
        return IconCategory_SOLID_getInstance();
      case 'BRAND':
        return IconCategory_BRAND_getInstance();
      default:
        IconCategory_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var IconCategory_entriesInitialized;
  function IconCategory_initEntries() {
    if (IconCategory_entriesInitialized)
      return Unit_getInstance();
    IconCategory_entriesInitialized = true;
    IconCategory_REGULAR_instance = new IconCategory('REGULAR', 0, 'far');
    IconCategory_SOLID_instance = new IconCategory('SOLID', 1, 'fas');
    IconCategory_BRAND_instance = new IconCategory('BRAND', 2, 'fab');
  }
  var $ENTRIES_1;
  function IconCategory(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(IconCategory).get_className_pmbm3o_k$ = function () {
    return this.className_1;
  };
  function FaCircleUser$lambda($modifier, $style, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaCircleUser($modifier._v, $style._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FaIcon$lambda($style, $name, $size) {
    return function ($this$toAttrs) {
      $this$toAttrs.classes_ayghm2_k$([$style._v.className_1, 'fa-' + $name]);
      var tmp;
      if (!($size._v == null)) {
        $this$toAttrs.classes_ayghm2_k$([$size._v.className_1]);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function FaIcon$lambda_0($name, $modifier, $style, $size, $$changed, $$default) {
    return function ($composer, $force) {
      FaIcon($name, $modifier, $style._v, $size._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function IconStyle_FILLED_getInstance() {
    IconStyle_initEntries();
    return IconStyle_FILLED_instance;
  }
  function IconStyle_OUTLINE_getInstance() {
    IconStyle_initEntries();
    return IconStyle_OUTLINE_instance;
  }
  function IconSize_XXS_getInstance() {
    IconSize_initEntries();
    return IconSize_XXS_instance;
  }
  function IconSize_XS_getInstance() {
    IconSize_initEntries();
    return IconSize_XS_instance;
  }
  function IconSize_SM_getInstance() {
    IconSize_initEntries();
    return IconSize_SM_instance;
  }
  function IconSize_LG_getInstance() {
    IconSize_initEntries();
    return IconSize_LG_instance;
  }
  function IconSize_XL_getInstance() {
    IconSize_initEntries();
    return IconSize_XL_instance;
  }
  function IconSize_XXL_getInstance() {
    IconSize_initEntries();
    return IconSize_XXL_instance;
  }
  function IconSize_X1_getInstance() {
    IconSize_initEntries();
    return IconSize_X1_instance;
  }
  function IconSize_X2_getInstance() {
    IconSize_initEntries();
    return IconSize_X2_instance;
  }
  function IconSize_X3_getInstance() {
    IconSize_initEntries();
    return IconSize_X3_instance;
  }
  function IconSize_X4_getInstance() {
    IconSize_initEntries();
    return IconSize_X4_instance;
  }
  function IconSize_X5_getInstance() {
    IconSize_initEntries();
    return IconSize_X5_instance;
  }
  function IconSize_X6_getInstance() {
    IconSize_initEntries();
    return IconSize_X6_instance;
  }
  function IconSize_X7_getInstance() {
    IconSize_initEntries();
    return IconSize_X7_instance;
  }
  function IconSize_X8_getInstance() {
    IconSize_initEntries();
    return IconSize_X8_instance;
  }
  function IconSize_X9_getInstance() {
    IconSize_initEntries();
    return IconSize_X9_instance;
  }
  function IconSize_X10_getInstance() {
    IconSize_initEntries();
    return IconSize_X10_instance;
  }
  function IconCategory_REGULAR_getInstance() {
    IconCategory_initEntries();
    return IconCategory_REGULAR_instance;
  }
  function IconCategory_SOLID_getInstance() {
    IconCategory_initEntries();
    return IconCategory_SOLID_instance;
  }
  function IconCategory_BRAND_getInstance() {
    IconCategory_initEntries();
    return IconCategory_BRAND_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FaCircleUser;
  _.$_$.b = IconStyle_FILLED_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-icons-fa.js.map
