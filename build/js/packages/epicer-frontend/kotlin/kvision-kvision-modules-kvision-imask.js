(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-imask'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-imask'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-imask'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-imask'.");
    }
    globalThis['kvision-kvision-modules-kvision-imask'] = factory(typeof globalThis['kvision-kvision-modules-kvision-imask'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-imask'], globalThis['kotlin-kotlin-stdlib'], kvision);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.eb;
  var MaskManager_getInstance = kotlin_io_kvision_kvision.$_$.c;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.e1;
  var initMetadataForObject = kotlin_kotlin.$_$.ga;
  var VOID = kotlin_kotlin.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.b5;
  var Mask = kotlin_io_kvision_kvision.$_$.j;
  var initMetadataForClass = kotlin_kotlin.$_$.ba;
  var MaskFactory = kotlin_io_kvision_kvision.$_$.h;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var copyToArray = kotlin_kotlin.$_$.k6;
  var toString = kotlin_kotlin.$_$.t2;
  var replace = kotlin_kotlin.$_$.sc;
  var Char = kotlin_kotlin.$_$.ud;
  var toString_0 = kotlin_kotlin.$_$.rf;
  var hashCode = kotlin_kotlin.$_$.aa;
  var THROW_CCE = kotlin_kotlin.$_$.pe;
  var equals = kotlin_kotlin.$_$.v9;
  var MaskOptions = kotlin_io_kvision_kvision.$_$.i;
  var THROW_IAE = kotlin_kotlin.$_$.qe;
  var enumEntries = kotlin_kotlin.$_$.h9;
  var Enum = kotlin_kotlin.$_$.be;
  var getStringHashCode = kotlin_kotlin.$_$.z9;
  var getBooleanHashCode = kotlin_kotlin.$_$.x9;
  var Char__hashCode_impl_otmys = kotlin_kotlin.$_$.p2;
  var toString_1 = kotlin_kotlin.$_$.hb;
  var I18n_getInstance = kotlin_io_kvision_kvision.$_$.d;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.o2;
  var listOf = kotlin_kotlin.$_$.e7;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ImaskModule, 'ImaskModule', VOID, VOID, [ModuleInitializer]);
  initMetadataForClass(Imask, 'Imask', VOID, VOID, [Mask]);
  initMetadataForClass(ImaskFactory, 'ImaskFactory', VOID, VOID, [MaskFactory]);
  initMetadataForClass(ImaskOptions, 'ImaskOptions', ImaskOptions, VOID, [MaskOptions]);
  initMetadataForClass(MaskOverwrite, 'MaskOverwrite', VOID, Enum);
  initMetadataForClass(PatternMask, 'PatternMask');
  initMetadataForClass(RangeMask, 'RangeMask');
  initMetadataForClass(EnumMask, 'EnumMask');
  initMetadataForClass(NumberMask, 'NumberMask', NumberMask);
  initMetadataForClass(MaskAutofix, 'MaskAutofix', VOID, Enum);
  //endregion
  function ImaskModule() {
    ImaskModule_instance = this;
    this.imask_1 = require('imask/esm/index.js').default;
  }
  protoOf(ImaskModule).get_imask_5fyla1_k$ = function () {
    return this.imask_1;
  };
  protoOf(ImaskModule).initialize_o9rygw_k$ = function () {
    MaskManager_getInstance().set_factory_4ukst4_k$(new ImaskFactory(this.imask_1));
  };
  var ImaskModule_instance;
  function ImaskModule_getInstance() {
    if (ImaskModule_instance == null)
      new ImaskModule();
    return ImaskModule_instance;
  }
  function _get_imask__g3a5b8($this) {
    return $this.imask_1;
  }
  function Imask$onChange$lambda($callback, this$0) {
    return function () {
      $callback(this$0.getValue_wjkqt7_k$());
      return Unit_getInstance();
    };
  }
  function Imask(imask) {
    this.imask_1 = imask;
  }
  protoOf(Imask).destroy_evhcfe_k$ = function () {
    this.imask_1.destroy();
  };
  protoOf(Imask).getValue_wjkqt7_k$ = function () {
    return this.imask_1.unmaskedValue;
  };
  protoOf(Imask).onChange_li5o3l_k$ = function (callback) {
    this.imask_1.on('accept', Imask$onChange$lambda(callback, this));
  };
  protoOf(Imask).refresh_6a3uvf_k$ = function () {
    this.imask_1.updateValue();
    this.imask_1.updateControl('auto');
  };
  function _get_imask__g3a5b8_0($this) {
    return $this.imask_1;
  }
  function ImaskFactory(imask) {
    this.imask_1 = imask;
  }
  protoOf(ImaskFactory).createMask_ahmdb8_k$ = function (element, options) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new Imask(this.imask_1(element, toJs(options, this.imask_1)));
  };
  function toJs(_this__u8e3s4, imask) {
    var tmp0_subject = _this__u8e3s4.overwrite_1;
    var overwriteDynamic;
    switch (tmp0_subject == null ? -1 : tmp0_subject.get_ordinal_ip24qg_k$()) {
      case 0:
        overwriteDynamic = true;
        break;
      case 2:
        overwriteDynamic = MaskOverwrite_SHIFT_getInstance().overwrite_1;
        break;
      default:
        overwriteDynamic = undefined;
        break;
    }
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.form.text.toJs.<anonymous>' call
    if (!(_this__u8e3s4.pattern_1 == null)) {
      var patternOptions = toJs_0(_this__u8e3s4.pattern_1, imask);
      Object.assign(this_0, patternOptions);
    } else if (!(_this__u8e3s4.range_1 == null)) {
      var rangeOptions = toJs_1(_this__u8e3s4.range_1, imask);
      Object.assign(this_0, rangeOptions);
    } else if (!(_this__u8e3s4.enum_1 == null)) {
      var enumOptions = toJs_2(_this__u8e3s4.enum_1, imask);
      Object.assign(this_0, enumOptions);
    } else if (!(_this__u8e3s4.number_1 == null)) {
      var numberOptions = toJs_3(_this__u8e3s4.number_1);
      Object.assign(this_0, numberOptions);
    } else if (!(_this__u8e3s4.regExp_1 == null)) {
      this_0.mask = _this__u8e3s4.regExp_1;
    } else if (!(_this__u8e3s4.function_1 == null)) {
      this_0.mask = _this__u8e3s4.function_1;
    } else if (!(_this__u8e3s4.list_1 == null)) {
      // Inline function 'kotlin.collections.map' call
      var this_1 = _this__u8e3s4.list_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var _iterator__ex2g4s = this_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.form.text.toJs.<anonymous>.<anonymous>' call
        var tmp$ret$0 = toJs(item, imask);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      this_0.mask = copyToArray(destination);
    }
    if (!(_this__u8e3s4.overwrite_1 == null))
      this_0.overwrite = overwriteDynamic;
    return this_0;
  }
  function ImaskOptions(pattern, range, enum_0, number, regExp, function_0, list, overwrite) {
    pattern = pattern === VOID ? null : pattern;
    range = range === VOID ? null : range;
    enum_0 = enum_0 === VOID ? null : enum_0;
    number = number === VOID ? null : number;
    regExp = regExp === VOID ? null : regExp;
    function_0 = function_0 === VOID ? null : function_0;
    list = list === VOID ? null : list;
    overwrite = overwrite === VOID ? null : overwrite;
    this.pattern_1 = pattern;
    this.range_1 = range;
    this.enum_1 = enum_0;
    this.number_1 = number;
    this.regExp_1 = regExp;
    this.function_1 = function_0;
    this.list_1 = list;
    this.overwrite_1 = overwrite;
  }
  protoOf(ImaskOptions).get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  protoOf(ImaskOptions).get_range_ixu978_k$ = function () {
    return this.range_1;
  };
  protoOf(ImaskOptions).get_enum_wolhl6_k$ = function () {
    return this.enum_1;
  };
  protoOf(ImaskOptions).get_number_hay53m_k$ = function () {
    return this.number_1;
  };
  protoOf(ImaskOptions).get_regExp_iy7i7m_k$ = function () {
    return this.regExp_1;
  };
  protoOf(ImaskOptions).get_function_8yrfj3_k$ = function () {
    return this.function_1;
  };
  protoOf(ImaskOptions).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(ImaskOptions).get_overwrite_3t2tcu_k$ = function () {
    return this.overwrite_1;
  };
  protoOf(ImaskOptions).maskNumericValue_uvrmru_k$ = function (value) {
    var tmp;
    var tmp0_safe_receiver = this.number_1;
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.radix_1;
    if (!((tmp_0 == null ? null : new Char(tmp_0)) == null)) {
      tmp = replace(value, '.', toString(this.number_1.radix_1));
    } else {
      tmp = value;
    }
    return tmp;
  };
  protoOf(ImaskOptions).component1_7eebsc_k$ = function () {
    return this.pattern_1;
  };
  protoOf(ImaskOptions).component2_7eebsb_k$ = function () {
    return this.range_1;
  };
  protoOf(ImaskOptions).component3_7eebsa_k$ = function () {
    return this.enum_1;
  };
  protoOf(ImaskOptions).component4_7eebs9_k$ = function () {
    return this.number_1;
  };
  protoOf(ImaskOptions).component5_7eebs8_k$ = function () {
    return this.regExp_1;
  };
  protoOf(ImaskOptions).component6_7eebs7_k$ = function () {
    return this.function_1;
  };
  protoOf(ImaskOptions).component7_7eebs6_k$ = function () {
    return this.list_1;
  };
  protoOf(ImaskOptions).component8_7eebs5_k$ = function () {
    return this.overwrite_1;
  };
  protoOf(ImaskOptions).copy_qncnxa_k$ = function (pattern, range, enum_0, number, regExp, function_0, list, overwrite) {
    return new ImaskOptions(pattern, range, enum_0, number, regExp, function_0, list, overwrite);
  };
  protoOf(ImaskOptions).copy$default_kitfay_k$ = function (pattern, range, enum_0, number, regExp, function_0, list, overwrite, $super) {
    pattern = pattern === VOID ? this.pattern_1 : pattern;
    range = range === VOID ? this.range_1 : range;
    enum_0 = enum_0 === VOID ? this.enum_1 : enum_0;
    number = number === VOID ? this.number_1 : number;
    regExp = regExp === VOID ? this.regExp_1 : regExp;
    function_0 = function_0 === VOID ? this.function_1 : function_0;
    list = list === VOID ? this.list_1 : list;
    overwrite = overwrite === VOID ? this.overwrite_1 : overwrite;
    return $super === VOID ? this.copy_qncnxa_k$(pattern, range, enum_0, number, regExp, function_0, list, overwrite) : $super.copy_qncnxa_k$.call(this, pattern, range, enum_0, number, regExp, function_0, list, overwrite);
  };
  protoOf(ImaskOptions).toString = function () {
    return 'ImaskOptions(pattern=' + toString_0(this.pattern_1) + ', range=' + toString_0(this.range_1) + ', enum=' + toString_0(this.enum_1) + ', number=' + toString_0(this.number_1) + ', regExp=' + toString_0(this.regExp_1) + ', function=' + toString_0(this.function_1) + ', list=' + toString_0(this.list_1) + ', overwrite=' + toString_0(this.overwrite_1) + ')';
  };
  protoOf(ImaskOptions).hashCode = function () {
    var result = this.pattern_1 == null ? 0 : this.pattern_1.hashCode();
    result = imul(result, 31) + (this.range_1 == null ? 0 : this.range_1.hashCode()) | 0;
    result = imul(result, 31) + (this.enum_1 == null ? 0 : this.enum_1.hashCode()) | 0;
    result = imul(result, 31) + (this.number_1 == null ? 0 : this.number_1.hashCode()) | 0;
    result = imul(result, 31) + (this.regExp_1 == null ? 0 : hashCode(this.regExp_1)) | 0;
    result = imul(result, 31) + (this.function_1 == null ? 0 : hashCode(this.function_1)) | 0;
    result = imul(result, 31) + (this.list_1 == null ? 0 : hashCode(this.list_1)) | 0;
    result = imul(result, 31) + (this.overwrite_1 == null ? 0 : this.overwrite_1.hashCode()) | 0;
    return result;
  };
  protoOf(ImaskOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImaskOptions))
      return false;
    var tmp0_other_with_cast = other instanceof ImaskOptions ? other : THROW_CCE();
    if (!equals(this.pattern_1, tmp0_other_with_cast.pattern_1))
      return false;
    if (!equals(this.range_1, tmp0_other_with_cast.range_1))
      return false;
    if (!equals(this.enum_1, tmp0_other_with_cast.enum_1))
      return false;
    if (!equals(this.number_1, tmp0_other_with_cast.number_1))
      return false;
    if (!equals(this.regExp_1, tmp0_other_with_cast.regExp_1))
      return false;
    if (!equals(this.function_1, tmp0_other_with_cast.function_1))
      return false;
    if (!equals(this.list_1, tmp0_other_with_cast.list_1))
      return false;
    if (!equals(this.overwrite_1, tmp0_other_with_cast.overwrite_1))
      return false;
    return true;
  };
  var MaskOverwrite_TRUE_instance;
  var MaskOverwrite_FALSE_instance;
  var MaskOverwrite_SHIFT_instance;
  function values() {
    return [MaskOverwrite_TRUE_getInstance(), MaskOverwrite_FALSE_getInstance(), MaskOverwrite_SHIFT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'TRUE':
        return MaskOverwrite_TRUE_getInstance();
      case 'FALSE':
        return MaskOverwrite_FALSE_getInstance();
      case 'SHIFT':
        return MaskOverwrite_SHIFT_getInstance();
      default:
        MaskOverwrite_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var MaskOverwrite_entriesInitialized;
  function MaskOverwrite_initEntries() {
    if (MaskOverwrite_entriesInitialized)
      return Unit_getInstance();
    MaskOverwrite_entriesInitialized = true;
    MaskOverwrite_TRUE_instance = new MaskOverwrite('TRUE', 0, 'true');
    MaskOverwrite_FALSE_instance = new MaskOverwrite('FALSE', 1, 'false');
    MaskOverwrite_SHIFT_instance = new MaskOverwrite('SHIFT', 2, 'shift');
  }
  var $ENTRIES;
  function MaskOverwrite(name, ordinal, overwrite) {
    Enum.call(this, name, ordinal);
    this.overwrite_1 = overwrite;
  }
  protoOf(MaskOverwrite).get_overwrite_l1zg8f_k$ = function () {
    return this.overwrite_1;
  };
  function PatternMask(pattern, lazy, eager, placeholderChar, definitions, blocks) {
    lazy = lazy === VOID ? null : lazy;
    eager = eager === VOID ? null : eager;
    placeholderChar = placeholderChar === VOID ? null : placeholderChar;
    definitions = definitions === VOID ? null : definitions;
    blocks = blocks === VOID ? null : blocks;
    this.pattern_1 = pattern;
    this.lazy_1 = lazy;
    this.eager_1 = eager;
    this.placeholderChar_1 = placeholderChar;
    this.definitions_1 = definitions;
    this.blocks_1 = blocks;
  }
  protoOf(PatternMask).get_pattern_btfv4p_k$ = function () {
    return this.pattern_1;
  };
  protoOf(PatternMask).get_lazy_wopozh_k$ = function () {
    return this.lazy_1;
  };
  protoOf(PatternMask).get_eager_iqos9b_k$ = function () {
    return this.eager_1;
  };
  protoOf(PatternMask).get_placeholderChar_8qhr7h_k$ = function () {
    return this.placeholderChar_1;
  };
  protoOf(PatternMask).get_definitions_8ypvjd_k$ = function () {
    return this.definitions_1;
  };
  protoOf(PatternMask).get_blocks_bhhtvz_k$ = function () {
    return this.blocks_1;
  };
  protoOf(PatternMask).component1_7eebsc_k$ = function () {
    return this.pattern_1;
  };
  protoOf(PatternMask).component2_7eebsb_k$ = function () {
    return this.lazy_1;
  };
  protoOf(PatternMask).component3_7eebsa_k$ = function () {
    return this.eager_1;
  };
  protoOf(PatternMask).component4_zhtqiu_k$ = function () {
    return this.placeholderChar_1;
  };
  protoOf(PatternMask).component5_7eebs8_k$ = function () {
    return this.definitions_1;
  };
  protoOf(PatternMask).component6_7eebs7_k$ = function () {
    return this.blocks_1;
  };
  protoOf(PatternMask).copy_lbbgvd_k$ = function (pattern, lazy, eager, placeholderChar, definitions, blocks) {
    return new PatternMask(pattern, lazy, eager, placeholderChar, definitions, blocks);
  };
  protoOf(PatternMask).copy$default_m56u81_k$ = function (pattern, lazy, eager, placeholderChar, definitions, blocks, $super) {
    pattern = pattern === VOID ? this.pattern_1 : pattern;
    lazy = lazy === VOID ? this.lazy_1 : lazy;
    eager = eager === VOID ? this.eager_1 : eager;
    placeholderChar = placeholderChar === VOID ? this.placeholderChar_1 : placeholderChar;
    definitions = definitions === VOID ? this.definitions_1 : definitions;
    blocks = blocks === VOID ? this.blocks_1 : blocks;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_lbbgvd_k$(pattern, lazy, eager, placeholderChar, definitions, blocks);
    } else {
      var tmp_0 = $super.copy_lbbgvd_k$;
      var tmp_1 = placeholderChar;
      tmp = tmp_0.call(this, pattern, lazy, eager, tmp_1 == null ? null : new Char(tmp_1), definitions, blocks);
    }
    return tmp;
  };
  protoOf(PatternMask).toString = function () {
    var tmp = this.placeholderChar_1;
    return 'PatternMask(pattern=' + this.pattern_1 + ', lazy=' + this.lazy_1 + ', eager=' + this.eager_1 + ', placeholderChar=' + toString_0(tmp == null ? null : new Char(tmp)) + ', definitions=' + this.definitions_1 + ', blocks=' + toString_0(this.blocks_1) + ')';
  };
  protoOf(PatternMask).hashCode = function () {
    var result = getStringHashCode(this.pattern_1);
    result = imul(result, 31) + (this.lazy_1 == null ? 0 : getBooleanHashCode(this.lazy_1)) | 0;
    result = imul(result, 31) + (this.eager_1 == null ? 0 : getBooleanHashCode(this.eager_1)) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.placeholderChar_1;
    if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = Char__hashCode_impl_otmys(this.placeholderChar_1);
    }
    result = tmp + tmp_0 | 0;
    result = imul(result, 31) + (this.definitions_1 == null ? 0 : hashCode(this.definitions_1)) | 0;
    result = imul(result, 31) + (this.blocks_1 == null ? 0 : hashCode(this.blocks_1)) | 0;
    return result;
  };
  protoOf(PatternMask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PatternMask))
      return false;
    var tmp0_other_with_cast = other instanceof PatternMask ? other : THROW_CCE();
    if (!(this.pattern_1 === tmp0_other_with_cast.pattern_1))
      return false;
    if (!(this.lazy_1 == tmp0_other_with_cast.lazy_1))
      return false;
    if (!(this.eager_1 == tmp0_other_with_cast.eager_1))
      return false;
    var tmp = this.placeholderChar_1;
    var tmp_0 = tmp == null ? null : new Char(tmp);
    var tmp_1 = tmp0_other_with_cast.placeholderChar_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new Char(tmp_1)))
      return false;
    if (!(this.definitions_1 == tmp0_other_with_cast.definitions_1))
      return false;
    if (!equals(this.blocks_1, tmp0_other_with_cast.blocks_1))
      return false;
    return true;
  };
  function toJs_0(_this__u8e3s4, imask) {
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.form.text.toJs.<anonymous>' call
    this_0.mask = _this__u8e3s4.pattern_1;
    if (!(_this__u8e3s4.lazy_1 == null))
      this_0.lazy = _this__u8e3s4.lazy_1;
    if (!(_this__u8e3s4.eager_1 == null))
      this_0.eager = _this__u8e3s4.eager_1;
    var tmp = _this__u8e3s4.placeholderChar_1;
    if (!((tmp == null ? null : new Char(tmp)) == null))
      this_0.placeholderChar = toString(_this__u8e3s4.placeholderChar_1);
    if (_this__u8e3s4.definitions_1 != null)
      this_0.definitions = _this__u8e3s4.definitions_1;
    if (!(_this__u8e3s4.blocks_1 == null)) {
      // Inline function 'io.kvision.utils.obj' call
      // Inline function 'kotlin.apply' call
      var this_1 = new Object();
      // Inline function 'io.kvision.form.text.toJs.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = _this__u8e3s4.blocks_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.form.text.toJs.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var def = element.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var options = element.get_value_j01efc_k$();
        this_1[def] = toJs(options, imask);
      }
      this_0.blocks = this_1;
    }
    return this_0;
  }
  function RangeMask(from, to, maxLength, autofix, lazy, eager, placeholderChar) {
    maxLength = maxLength === VOID ? null : maxLength;
    autofix = autofix === VOID ? null : autofix;
    lazy = lazy === VOID ? null : lazy;
    eager = eager === VOID ? null : eager;
    placeholderChar = placeholderChar === VOID ? null : placeholderChar;
    this.from_1 = from;
    this.to_1 = to;
    this.maxLength_1 = maxLength;
    this.autofix_1 = autofix;
    this.lazy_1 = lazy;
    this.eager_1 = eager;
    this.placeholderChar_1 = placeholderChar;
  }
  protoOf(RangeMask).get_from_wom7eb_k$ = function () {
    return this.from_1;
  };
  protoOf(RangeMask).get_to_kntnng_k$ = function () {
    return this.to_1;
  };
  protoOf(RangeMask).get_maxLength_4knn0f_k$ = function () {
    return this.maxLength_1;
  };
  protoOf(RangeMask).get_autofix_9f8p2b_k$ = function () {
    return this.autofix_1;
  };
  protoOf(RangeMask).get_lazy_wopozh_k$ = function () {
    return this.lazy_1;
  };
  protoOf(RangeMask).get_eager_iqos9b_k$ = function () {
    return this.eager_1;
  };
  protoOf(RangeMask).get_placeholderChar_8qhr7h_k$ = function () {
    return this.placeholderChar_1;
  };
  protoOf(RangeMask).component1_7eebsc_k$ = function () {
    return this.from_1;
  };
  protoOf(RangeMask).component2_7eebsb_k$ = function () {
    return this.to_1;
  };
  protoOf(RangeMask).component3_7eebsa_k$ = function () {
    return this.maxLength_1;
  };
  protoOf(RangeMask).component4_7eebs9_k$ = function () {
    return this.autofix_1;
  };
  protoOf(RangeMask).component5_7eebs8_k$ = function () {
    return this.lazy_1;
  };
  protoOf(RangeMask).component6_7eebs7_k$ = function () {
    return this.eager_1;
  };
  protoOf(RangeMask).component7_dz2fbx_k$ = function () {
    return this.placeholderChar_1;
  };
  protoOf(RangeMask).copy_17i1oz_k$ = function (from, to, maxLength, autofix, lazy, eager, placeholderChar) {
    return new RangeMask(from, to, maxLength, autofix, lazy, eager, placeholderChar);
  };
  protoOf(RangeMask).copy$default_btzbhv_k$ = function (from, to, maxLength, autofix, lazy, eager, placeholderChar, $super) {
    from = from === VOID ? this.from_1 : from;
    to = to === VOID ? this.to_1 : to;
    maxLength = maxLength === VOID ? this.maxLength_1 : maxLength;
    autofix = autofix === VOID ? this.autofix_1 : autofix;
    lazy = lazy === VOID ? this.lazy_1 : lazy;
    eager = eager === VOID ? this.eager_1 : eager;
    placeholderChar = placeholderChar === VOID ? this.placeholderChar_1 : placeholderChar;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_17i1oz_k$(from, to, maxLength, autofix, lazy, eager, placeholderChar);
    } else {
      var tmp_0 = $super.copy_17i1oz_k$;
      var tmp_1 = placeholderChar;
      tmp = tmp_0.call(this, from, to, maxLength, autofix, lazy, eager, tmp_1 == null ? null : new Char(tmp_1));
    }
    return tmp;
  };
  protoOf(RangeMask).toString = function () {
    var tmp = toString_0(this.autofix_1);
    var tmp_0 = this.placeholderChar_1;
    return 'RangeMask(from=' + this.from_1 + ', to=' + this.to_1 + ', maxLength=' + this.maxLength_1 + ', autofix=' + tmp + ', lazy=' + this.lazy_1 + ', eager=' + this.eager_1 + ', placeholderChar=' + toString_0(tmp_0 == null ? null : new Char(tmp_0)) + ')';
  };
  protoOf(RangeMask).hashCode = function () {
    var result = this.from_1;
    result = imul(result, 31) + this.to_1 | 0;
    result = imul(result, 31) + (this.maxLength_1 == null ? 0 : this.maxLength_1) | 0;
    result = imul(result, 31) + (this.autofix_1 == null ? 0 : this.autofix_1.hashCode()) | 0;
    result = imul(result, 31) + (this.lazy_1 == null ? 0 : getBooleanHashCode(this.lazy_1)) | 0;
    result = imul(result, 31) + (this.eager_1 == null ? 0 : getBooleanHashCode(this.eager_1)) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.placeholderChar_1;
    if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = Char__hashCode_impl_otmys(this.placeholderChar_1);
    }
    result = tmp + tmp_0 | 0;
    return result;
  };
  protoOf(RangeMask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RangeMask))
      return false;
    var tmp0_other_with_cast = other instanceof RangeMask ? other : THROW_CCE();
    if (!(this.from_1 === tmp0_other_with_cast.from_1))
      return false;
    if (!(this.to_1 === tmp0_other_with_cast.to_1))
      return false;
    if (!(this.maxLength_1 == tmp0_other_with_cast.maxLength_1))
      return false;
    if (!equals(this.autofix_1, tmp0_other_with_cast.autofix_1))
      return false;
    if (!(this.lazy_1 == tmp0_other_with_cast.lazy_1))
      return false;
    if (!(this.eager_1 == tmp0_other_with_cast.eager_1))
      return false;
    var tmp = this.placeholderChar_1;
    var tmp_0 = tmp == null ? null : new Char(tmp);
    var tmp_1 = tmp0_other_with_cast.placeholderChar_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new Char(tmp_1)))
      return false;
    return true;
  };
  function toJs_1(_this__u8e3s4, imask) {
    var tmp0_subject = _this__u8e3s4.autofix_1;
    var autofixDynamic;
    switch (tmp0_subject == null ? -1 : tmp0_subject.get_ordinal_ip24qg_k$()) {
      case 0:
        autofixDynamic = true;
        break;
      case 2:
        autofixDynamic = MaskAutofix_PAD_getInstance().autofix_1;
        break;
      default:
        autofixDynamic = undefined;
        break;
    }
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.form.text.toJs.<anonymous>' call
    this_0.mask = imask.MaskedRange;
    this_0.from = _this__u8e3s4.from_1;
    this_0.to = _this__u8e3s4.to_1;
    if (!(_this__u8e3s4.maxLength_1 == null))
      this_0.maxLength = _this__u8e3s4.maxLength_1;
    if (!(_this__u8e3s4.autofix_1 == null))
      this_0.autofix = autofixDynamic;
    if (!(_this__u8e3s4.lazy_1 == null))
      this_0.lazy = _this__u8e3s4.lazy_1;
    if (!(_this__u8e3s4.eager_1 == null))
      this_0.eager = _this__u8e3s4.eager_1;
    var tmp = _this__u8e3s4.placeholderChar_1;
    if (!((tmp == null ? null : new Char(tmp)) == null))
      this_0.placeholderChar = toString(_this__u8e3s4.placeholderChar_1);
    return this_0;
  }
  function EnumMask(enum_0, lazy, eager, placeholderChar) {
    lazy = lazy === VOID ? null : lazy;
    eager = eager === VOID ? null : eager;
    placeholderChar = placeholderChar === VOID ? null : placeholderChar;
    this.enum_1 = enum_0;
    this.lazy_1 = lazy;
    this.eager_1 = eager;
    this.placeholderChar_1 = placeholderChar;
  }
  protoOf(EnumMask).get_enum_wolhl6_k$ = function () {
    return this.enum_1;
  };
  protoOf(EnumMask).get_lazy_wopozh_k$ = function () {
    return this.lazy_1;
  };
  protoOf(EnumMask).get_eager_iqos9b_k$ = function () {
    return this.eager_1;
  };
  protoOf(EnumMask).get_placeholderChar_8qhr7h_k$ = function () {
    return this.placeholderChar_1;
  };
  protoOf(EnumMask).component1_7eebsc_k$ = function () {
    return this.enum_1;
  };
  protoOf(EnumMask).component2_7eebsb_k$ = function () {
    return this.lazy_1;
  };
  protoOf(EnumMask).component3_7eebsa_k$ = function () {
    return this.eager_1;
  };
  protoOf(EnumMask).component4_zhtqiu_k$ = function () {
    return this.placeholderChar_1;
  };
  protoOf(EnumMask).copy_843eff_k$ = function (enum_0, lazy, eager, placeholderChar) {
    return new EnumMask(enum_0, lazy, eager, placeholderChar);
  };
  protoOf(EnumMask).copy$default_4tmse2_k$ = function (enum_0, lazy, eager, placeholderChar, $super) {
    enum_0 = enum_0 === VOID ? this.enum_1 : enum_0;
    lazy = lazy === VOID ? this.lazy_1 : lazy;
    eager = eager === VOID ? this.eager_1 : eager;
    placeholderChar = placeholderChar === VOID ? this.placeholderChar_1 : placeholderChar;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_843eff_k$(enum_0, lazy, eager, placeholderChar);
    } else {
      var tmp_0 = $super.copy_843eff_k$;
      var tmp_1 = placeholderChar;
      tmp = tmp_0.call(this, enum_0, lazy, eager, tmp_1 == null ? null : new Char(tmp_1));
    }
    return tmp;
  };
  protoOf(EnumMask).toString = function () {
    var tmp = toString_1(this.enum_1);
    var tmp_0 = this.placeholderChar_1;
    return 'EnumMask(enum=' + tmp + ', lazy=' + this.lazy_1 + ', eager=' + this.eager_1 + ', placeholderChar=' + toString_0(tmp_0 == null ? null : new Char(tmp_0)) + ')';
  };
  protoOf(EnumMask).hashCode = function () {
    var result = hashCode(this.enum_1);
    result = imul(result, 31) + (this.lazy_1 == null ? 0 : getBooleanHashCode(this.lazy_1)) | 0;
    result = imul(result, 31) + (this.eager_1 == null ? 0 : getBooleanHashCode(this.eager_1)) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.placeholderChar_1;
    if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = Char__hashCode_impl_otmys(this.placeholderChar_1);
    }
    result = tmp + tmp_0 | 0;
    return result;
  };
  protoOf(EnumMask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EnumMask))
      return false;
    var tmp0_other_with_cast = other instanceof EnumMask ? other : THROW_CCE();
    if (!equals(this.enum_1, tmp0_other_with_cast.enum_1))
      return false;
    if (!(this.lazy_1 == tmp0_other_with_cast.lazy_1))
      return false;
    if (!(this.eager_1 == tmp0_other_with_cast.eager_1))
      return false;
    var tmp = this.placeholderChar_1;
    var tmp_0 = tmp == null ? null : new Char(tmp);
    var tmp_1 = tmp0_other_with_cast.placeholderChar_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new Char(tmp_1)))
      return false;
    return true;
  };
  function toJs_2(_this__u8e3s4, imask) {
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.form.text.toJs.<anonymous>' call
    this_0.mask = imask.MaskedEnum;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = _this__u8e3s4.enum_1;
    this_0.enum = copyToArray(this_1);
    if (!(_this__u8e3s4.lazy_1 == null))
      this_0.lazy = _this__u8e3s4.lazy_1;
    if (!(_this__u8e3s4.eager_1 == null))
      this_0.eager = _this__u8e3s4.eager_1;
    var tmp = _this__u8e3s4.placeholderChar_1;
    if (!((tmp == null ? null : new Char(tmp)) == null))
      this_0.placeholderChar = toString(_this__u8e3s4.placeholderChar_1);
    return this_0;
  }
  function NumberMask(scale, thousandsSeparator, padFractionalZeros, normalizeZeros, radix, mapToRadix, min, max) {
    scale = scale === VOID ? null : scale;
    thousandsSeparator = thousandsSeparator === VOID ? null : thousandsSeparator;
    padFractionalZeros = padFractionalZeros === VOID ? null : padFractionalZeros;
    normalizeZeros = normalizeZeros === VOID ? null : normalizeZeros;
    radix = radix === VOID ? I18n_getInstance().detectDecimalSeparator_qhe63d_k$() : radix;
    mapToRadix = mapToRadix === VOID ? listOf(new Char(_Char___init__impl__6a9atx(46))) : mapToRadix;
    min = min === VOID ? null : min;
    max = max === VOID ? null : max;
    this.scale_1 = scale;
    this.thousandsSeparator_1 = thousandsSeparator;
    this.padFractionalZeros_1 = padFractionalZeros;
    this.normalizeZeros_1 = normalizeZeros;
    this.radix_1 = radix;
    this.mapToRadix_1 = mapToRadix;
    this.min_1 = min;
    this.max_1 = max;
  }
  protoOf(NumberMask).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(NumberMask).get_thousandsSeparator_pm7ke4_k$ = function () {
    return this.thousandsSeparator_1;
  };
  protoOf(NumberMask).get_padFractionalZeros_5lf1ws_k$ = function () {
    return this.padFractionalZeros_1;
  };
  protoOf(NumberMask).get_normalizeZeros_r7t4nb_k$ = function () {
    return this.normalizeZeros_1;
  };
  protoOf(NumberMask).get_radix_7lvqqr_k$ = function () {
    return this.radix_1;
  };
  protoOf(NumberMask).get_mapToRadix_xh7phy_k$ = function () {
    return this.mapToRadix_1;
  };
  protoOf(NumberMask).get_min_18j0nr_k$ = function () {
    return this.min_1;
  };
  protoOf(NumberMask).get_max_18j0ud_k$ = function () {
    return this.max_1;
  };
  protoOf(NumberMask).component1_7eebsc_k$ = function () {
    return this.scale_1;
  };
  protoOf(NumberMask).component2_2k0vjs_k$ = function () {
    return this.thousandsSeparator_1;
  };
  protoOf(NumberMask).component3_7eebsa_k$ = function () {
    return this.padFractionalZeros_1;
  };
  protoOf(NumberMask).component4_7eebs9_k$ = function () {
    return this.normalizeZeros_1;
  };
  protoOf(NumberMask).component5_olai3q_k$ = function () {
    return this.radix_1;
  };
  protoOf(NumberMask).component6_7eebs7_k$ = function () {
    return this.mapToRadix_1;
  };
  protoOf(NumberMask).component7_7eebs6_k$ = function () {
    return this.min_1;
  };
  protoOf(NumberMask).component8_7eebs5_k$ = function () {
    return this.max_1;
  };
  protoOf(NumberMask).copy_dvuyxz_k$ = function (scale, thousandsSeparator, padFractionalZeros, normalizeZeros, radix, mapToRadix, min, max) {
    return new NumberMask(scale, thousandsSeparator, padFractionalZeros, normalizeZeros, radix, mapToRadix, min, max);
  };
  protoOf(NumberMask).copy$default_lrno28_k$ = function (scale, thousandsSeparator, padFractionalZeros, normalizeZeros, radix, mapToRadix, min, max, $super) {
    scale = scale === VOID ? this.scale_1 : scale;
    thousandsSeparator = thousandsSeparator === VOID ? this.thousandsSeparator_1 : thousandsSeparator;
    padFractionalZeros = padFractionalZeros === VOID ? this.padFractionalZeros_1 : padFractionalZeros;
    normalizeZeros = normalizeZeros === VOID ? this.normalizeZeros_1 : normalizeZeros;
    radix = radix === VOID ? this.radix_1 : radix;
    mapToRadix = mapToRadix === VOID ? this.mapToRadix_1 : mapToRadix;
    min = min === VOID ? this.min_1 : min;
    max = max === VOID ? this.max_1 : max;
    var tmp;
    if ($super === VOID) {
      tmp = this.copy_dvuyxz_k$(scale, thousandsSeparator, padFractionalZeros, normalizeZeros, radix, mapToRadix, min, max);
    } else {
      var tmp_0 = $super.copy_dvuyxz_k$;
      var tmp_1 = thousandsSeparator;
      tmp = tmp_0.call(this, scale, tmp_1 == null ? null : new Char(tmp_1), padFractionalZeros, normalizeZeros, new Char(radix), mapToRadix, min, max);
    }
    return tmp;
  };
  protoOf(NumberMask).toString = function () {
    var tmp = this.thousandsSeparator_1;
    return 'NumberMask(scale=' + this.scale_1 + ', thousandsSeparator=' + toString_0(tmp == null ? null : new Char(tmp)) + ', padFractionalZeros=' + this.padFractionalZeros_1 + ', normalizeZeros=' + this.normalizeZeros_1 + ', radix=' + toString(this.radix_1) + ', mapToRadix=' + toString_1(this.mapToRadix_1) + ', min=' + toString_0(this.min_1) + ', max=' + toString_0(this.max_1) + ')';
  };
  protoOf(NumberMask).hashCode = function () {
    var result = this.scale_1 == null ? 0 : this.scale_1;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.thousandsSeparator_1;
    if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = Char__hashCode_impl_otmys(this.thousandsSeparator_1);
    }
    result = tmp + tmp_0 | 0;
    result = imul(result, 31) + (this.padFractionalZeros_1 == null ? 0 : getBooleanHashCode(this.padFractionalZeros_1)) | 0;
    result = imul(result, 31) + (this.normalizeZeros_1 == null ? 0 : getBooleanHashCode(this.normalizeZeros_1)) | 0;
    result = imul(result, 31) + Char__hashCode_impl_otmys(this.radix_1) | 0;
    result = imul(result, 31) + hashCode(this.mapToRadix_1) | 0;
    result = imul(result, 31) + (this.min_1 == null ? 0 : hashCode(this.min_1)) | 0;
    result = imul(result, 31) + (this.max_1 == null ? 0 : hashCode(this.max_1)) | 0;
    return result;
  };
  protoOf(NumberMask).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NumberMask))
      return false;
    var tmp0_other_with_cast = other instanceof NumberMask ? other : THROW_CCE();
    if (!(this.scale_1 == tmp0_other_with_cast.scale_1))
      return false;
    var tmp = this.thousandsSeparator_1;
    var tmp_0 = tmp == null ? null : new Char(tmp);
    var tmp_1 = tmp0_other_with_cast.thousandsSeparator_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new Char(tmp_1)))
      return false;
    if (!(this.padFractionalZeros_1 == tmp0_other_with_cast.padFractionalZeros_1))
      return false;
    if (!(this.normalizeZeros_1 == tmp0_other_with_cast.normalizeZeros_1))
      return false;
    if (!(this.radix_1 === tmp0_other_with_cast.radix_1))
      return false;
    if (!equals(this.mapToRadix_1, tmp0_other_with_cast.mapToRadix_1))
      return false;
    if (!equals(this.min_1, tmp0_other_with_cast.min_1))
      return false;
    if (!equals(this.max_1, tmp0_other_with_cast.max_1))
      return false;
    return true;
  };
  function toJs_3(_this__u8e3s4) {
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.form.text.toJs.<anonymous>' call
    this_0.mask = Number;
    if (!(_this__u8e3s4.scale_1 == null))
      this_0.scale = _this__u8e3s4.scale_1;
    var tmp = _this__u8e3s4.thousandsSeparator_1;
    if (!((tmp == null ? null : new Char(tmp)) == null))
      this_0.thousandsSeparator = toString(_this__u8e3s4.thousandsSeparator_1);
    if (!(_this__u8e3s4.padFractionalZeros_1 == null))
      this_0.padFractionalZeros = _this__u8e3s4.padFractionalZeros_1;
    if (!(_this__u8e3s4.normalizeZeros_1 == null))
      this_0.normalizeZeros = _this__u8e3s4.normalizeZeros_1;
    this_0.radix = toString(_this__u8e3s4.radix_1);
    // Inline function 'kotlin.collections.map' call
    var this_1 = _this__u8e3s4.mapToRadix_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s = this_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.form.text.toJs.<anonymous>.<anonymous>' call
      var it = item.value_1;
      var tmp$ret$0 = toString(it);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    this_0.mapToRadix = copyToArray(destination);
    if (!(_this__u8e3s4.min_1 == null))
      this_0.min = _this__u8e3s4.min_1;
    if (!(_this__u8e3s4.max_1 == null))
      this_0.max = _this__u8e3s4.max_1;
    return this_0;
  }
  var MaskAutofix_TRUE_instance;
  var MaskAutofix_FALSE_instance;
  var MaskAutofix_PAD_instance;
  function values_0() {
    return [MaskAutofix_TRUE_getInstance(), MaskAutofix_FALSE_getInstance(), MaskAutofix_PAD_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TRUE':
        return MaskAutofix_TRUE_getInstance();
      case 'FALSE':
        return MaskAutofix_FALSE_getInstance();
      case 'PAD':
        return MaskAutofix_PAD_getInstance();
      default:
        MaskAutofix_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var MaskAutofix_entriesInitialized;
  function MaskAutofix_initEntries() {
    if (MaskAutofix_entriesInitialized)
      return Unit_getInstance();
    MaskAutofix_entriesInitialized = true;
    MaskAutofix_TRUE_instance = new MaskAutofix('TRUE', 0, 'true');
    MaskAutofix_FALSE_instance = new MaskAutofix('FALSE', 1, 'false');
    MaskAutofix_PAD_instance = new MaskAutofix('PAD', 2, 'pad');
  }
  var $ENTRIES_0;
  function MaskAutofix(name, ordinal, autofix) {
    Enum.call(this, name, ordinal);
    this.autofix_1 = autofix;
  }
  protoOf(MaskAutofix).get_autofix_ts1hxy_k$ = function () {
    return this.autofix_1;
  };
  function MaskOverwrite_TRUE_getInstance() {
    MaskOverwrite_initEntries();
    return MaskOverwrite_TRUE_instance;
  }
  function MaskOverwrite_FALSE_getInstance() {
    MaskOverwrite_initEntries();
    return MaskOverwrite_FALSE_instance;
  }
  function MaskOverwrite_SHIFT_getInstance() {
    MaskOverwrite_initEntries();
    return MaskOverwrite_SHIFT_instance;
  }
  function MaskAutofix_TRUE_getInstance() {
    MaskAutofix_initEntries();
    return MaskAutofix_TRUE_instance;
  }
  function MaskAutofix_FALSE_getInstance() {
    MaskAutofix_initEntries();
    return MaskAutofix_FALSE_instance;
  }
  function MaskAutofix_PAD_getInstance() {
    MaskAutofix_initEntries();
    return MaskAutofix_PAD_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ImaskModule_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-imask.js.map
