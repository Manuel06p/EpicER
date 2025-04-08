(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kvision.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kvision.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-toastify'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-toastify'.");
    }
    if (typeof kvision === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-toastify'. Its dependency 'kvision' was not found. Please, check whether 'kvision' is loaded prior to 'kvision-kvision-modules-kvision-toastify'.");
    }
    globalThis['kvision-kvision-modules-kvision-toastify'] = factory(typeof globalThis['kvision-kvision-modules-kvision-toastify'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-toastify'], globalThis['kotlin-kotlin-stdlib'], kvision);
  }
}(function (_, kotlin_kotlin, kotlin_io_kvision_kvision) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.fb;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.q2;
  var initMetadataForObject = kotlin_kotlin.$_$.ha;
  var VOID = kotlin_kotlin.$_$.f;
  var Unit_getInstance = kotlin_kotlin.$_$.c5;
  var toString = kotlin_kotlin.$_$.sf;
  var getStringHashCode = kotlin_kotlin.$_$.aa;
  var getBooleanHashCode = kotlin_kotlin.$_$.y9;
  var hashCode = kotlin_kotlin.$_$.ba;
  var THROW_CCE = kotlin_kotlin.$_$.qe;
  var equals = kotlin_kotlin.$_$.w9;
  var initMetadataForClass = kotlin_kotlin.$_$.ca;
  var THROW_IAE = kotlin_kotlin.$_$.re;
  var enumEntries = kotlin_kotlin.$_$.i9;
  var Enum = kotlin_kotlin.$_$.ce;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ToastifyModule, 'ToastifyModule', VOID, VOID, [ModuleInitializer]);
  initMetadataForObject(Toast, 'Toast');
  initMetadataForClass(ToastOptions, 'ToastOptions', ToastOptions);
  initMetadataForClass(ToastPosition, 'ToastPosition', VOID, Enum);
  initMetadataForClass(ToastType, 'ToastType', VOID, Enum);
  //endregion
  function ToastifyModule() {
    ToastifyModule_instance = this;
    this.toastify_1 = require('toastify-js');
  }
  protoOf(ToastifyModule).get_toastify_aby293_k$ = function () {
    return this.toastify_1;
  };
  protoOf(ToastifyModule).initialize_o9rygw_k$ = function () {
    require('toastify-js/src/toastify.css');
  };
  var ToastifyModule_instance;
  function ToastifyModule_getInstance() {
    if (ToastifyModule_instance == null)
      new ToastifyModule();
    return ToastifyModule_instance;
  }
  function show($this, type, message, options) {
    var tmp;
    if (!(options == null)) {
      var opts = toJs(options);
      opts['text'] = message;
      var tmp0_elvis_lhs = options.className_1;
      opts['className'] = tmp0_elvis_lhs == null ? type.type_1 : tmp0_elvis_lhs;
      tmp = opts;
    } else {
      // Inline function 'io.kvision.utils.obj' call
      // Inline function 'kotlin.apply' call
      var this_0 = new Object();
      // Inline function 'io.kvision.toast.Toast.show.<anonymous>' call
      this_0.text = message;
      this_0.className = type.type_1;
      tmp = this_0;
    }
    var optJs = tmp;
    ToastifyModule_getInstance().get_toastify_aby293_k$()(optJs).showToast();
  }
  function show$default($this, type, message, options, $super) {
    options = options === VOID ? null : options;
    return show($this, type, message, options);
  }
  function Toast() {
    Toast_instance = this;
    ToastifyModule_getInstance().initialize_o9rygw_k$();
  }
  protoOf(Toast).primary_rnxcgh_k$ = function (message, options) {
    show(this, ToastType_PRIMARY_getInstance(), message, options);
  };
  protoOf(Toast).primary$default_4j8sxe_k$ = function (message, options, $super) {
    options = options === VOID ? null : options;
    var tmp;
    if ($super === VOID) {
      this.primary_rnxcgh_k$(message, options);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.primary_rnxcgh_k$.call(this, message, options);
    }
    return tmp;
  };
  protoOf(Toast).secondary_ak7eov_k$ = function (message, options) {
    show(this, ToastType_SECONDARY_getInstance(), message, options);
  };
  protoOf(Toast).secondary$default_tctygw_k$ = function (message, options, $super) {
    options = options === VOID ? null : options;
    var tmp;
    if ($super === VOID) {
      this.secondary_ak7eov_k$(message, options);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.secondary_ak7eov_k$.call(this, message, options);
    }
    return tmp;
  };
  protoOf(Toast).success_t2rnjk_k$ = function (message, options) {
    show(this, ToastType_SUCCESS_getInstance(), message, options);
  };
  protoOf(Toast).success$default_gt3o9d_k$ = function (message, options, $super) {
    options = options === VOID ? null : options;
    var tmp;
    if ($super === VOID) {
      this.success_t2rnjk_k$(message, options);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.success_t2rnjk_k$.call(this, message, options);
    }
    return tmp;
  };
  protoOf(Toast).info_gn8fdn_k$ = function (message, options) {
    show(this, ToastType_INFO_getInstance(), message, options);
  };
  protoOf(Toast).info$default_tcilkq_k$ = function (message, options, $super) {
    options = options === VOID ? null : options;
    var tmp;
    if ($super === VOID) {
      this.info_gn8fdn_k$(message, options);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.info_gn8fdn_k$.call(this, message, options);
    }
    return tmp;
  };
  protoOf(Toast).warning_pg3caf_k$ = function (message, options) {
    show(this, ToastType_WARNING_getInstance(), message, options);
  };
  protoOf(Toast).warning$default_k3xxjs_k$ = function (message, options, $super) {
    options = options === VOID ? null : options;
    var tmp;
    if ($super === VOID) {
      this.warning_pg3caf_k$(message, options);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.warning_pg3caf_k$.call(this, message, options);
    }
    return tmp;
  };
  protoOf(Toast).danger_93qmnk_k$ = function (message, options) {
    show(this, ToastType_DANGER_getInstance(), message, options);
  };
  protoOf(Toast).danger$default_hbu8wf_k$ = function (message, options, $super) {
    options = options === VOID ? null : options;
    var tmp;
    if ($super === VOID) {
      this.danger_93qmnk_k$(message, options);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.danger_93qmnk_k$.call(this, message, options);
    }
    return tmp;
  };
  protoOf(Toast).light_qyqqbh_k$ = function (message, options) {
    show(this, ToastType_LIGHT_getInstance(), message, options);
  };
  protoOf(Toast).light$default_x2knc2_k$ = function (message, options, $super) {
    options = options === VOID ? null : options;
    var tmp;
    if ($super === VOID) {
      this.light_qyqqbh_k$(message, options);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.light_qyqqbh_k$.call(this, message, options);
    }
    return tmp;
  };
  protoOf(Toast).dark_eir1yb_k$ = function (message, options) {
    show(this, ToastType_DARK_getInstance(), message, options);
  };
  protoOf(Toast).dark$default_3293eq_k$ = function (message, options, $super) {
    options = options === VOID ? null : options;
    var tmp;
    if ($super === VOID) {
      this.dark_eir1yb_k$(message, options);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.dark_eir1yb_k$.call(this, message, options);
    }
    return tmp;
  };
  var Toast_instance;
  function Toast_getInstance() {
    if (Toast_instance == null)
      new Toast();
    return Toast_instance;
  }
  function ToastOptions(position, className, escapeHtml, close, oldestFirst, duration, stopOnFocus, onClick, destination, newWindow, callback, avatar, offset, style, ariaLive) {
    position = position === VOID ? null : position;
    className = className === VOID ? null : className;
    escapeHtml = escapeHtml === VOID ? null : escapeHtml;
    close = close === VOID ? null : close;
    oldestFirst = oldestFirst === VOID ? null : oldestFirst;
    duration = duration === VOID ? null : duration;
    stopOnFocus = stopOnFocus === VOID ? null : stopOnFocus;
    onClick = onClick === VOID ? null : onClick;
    destination = destination === VOID ? null : destination;
    newWindow = newWindow === VOID ? null : newWindow;
    callback = callback === VOID ? null : callback;
    avatar = avatar === VOID ? null : avatar;
    offset = offset === VOID ? null : offset;
    style = style === VOID ? null : style;
    ariaLive = ariaLive === VOID ? null : ariaLive;
    this.position_1 = position;
    this.className_1 = className;
    this.escapeHtml_1 = escapeHtml;
    this.close_1 = close;
    this.oldestFirst_1 = oldestFirst;
    this.duration_1 = duration;
    this.stopOnFocus_1 = stopOnFocus;
    this.onClick_1 = onClick;
    this.destination_1 = destination;
    this.newWindow_1 = newWindow;
    this.callback_1 = callback;
    this.avatar_1 = avatar;
    this.offset_1 = offset;
    this.style_1 = style;
    this.ariaLive_1 = ariaLive;
  }
  protoOf(ToastOptions).get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  protoOf(ToastOptions).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  protoOf(ToastOptions).get_escapeHtml_mfoujv_k$ = function () {
    return this.escapeHtml_1;
  };
  protoOf(ToastOptions).get_close_ipse6n_k$ = function () {
    return this.close_1;
  };
  protoOf(ToastOptions).get_oldestFirst_ixbmo8_k$ = function () {
    return this.oldestFirst_1;
  };
  protoOf(ToastOptions).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(ToastOptions).get_stopOnFocus_tnwolu_k$ = function () {
    return this.stopOnFocus_1;
  };
  protoOf(ToastOptions).get_onClick_l3c0lc_k$ = function () {
    return this.onClick_1;
  };
  protoOf(ToastOptions).get_destination_9r3c63_k$ = function () {
    return this.destination_1;
  };
  protoOf(ToastOptions).get_newWindow_dwumf_k$ = function () {
    return this.newWindow_1;
  };
  protoOf(ToastOptions).get_callback_ynh0qa_k$ = function () {
    return this.callback_1;
  };
  protoOf(ToastOptions).get_avatar_b5pjz6_k$ = function () {
    return this.avatar_1;
  };
  protoOf(ToastOptions).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(ToastOptions).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(ToastOptions).get_ariaLive_dk89y6_k$ = function () {
    return this.ariaLive_1;
  };
  protoOf(ToastOptions).component1_7eebsc_k$ = function () {
    return this.position_1;
  };
  protoOf(ToastOptions).component2_7eebsb_k$ = function () {
    return this.className_1;
  };
  protoOf(ToastOptions).component3_7eebsa_k$ = function () {
    return this.escapeHtml_1;
  };
  protoOf(ToastOptions).component4_7eebs9_k$ = function () {
    return this.close_1;
  };
  protoOf(ToastOptions).component5_7eebs8_k$ = function () {
    return this.oldestFirst_1;
  };
  protoOf(ToastOptions).component6_7eebs7_k$ = function () {
    return this.duration_1;
  };
  protoOf(ToastOptions).component7_7eebs6_k$ = function () {
    return this.stopOnFocus_1;
  };
  protoOf(ToastOptions).component8_7eebs5_k$ = function () {
    return this.onClick_1;
  };
  protoOf(ToastOptions).component9_7eebs4_k$ = function () {
    return this.destination_1;
  };
  protoOf(ToastOptions).component10_gazzfo_k$ = function () {
    return this.newWindow_1;
  };
  protoOf(ToastOptions).component11_gazzfn_k$ = function () {
    return this.callback_1;
  };
  protoOf(ToastOptions).component12_gazzfm_k$ = function () {
    return this.avatar_1;
  };
  protoOf(ToastOptions).component13_gazzfl_k$ = function () {
    return this.offset_1;
  };
  protoOf(ToastOptions).component14_gazzfk_k$ = function () {
    return this.style_1;
  };
  protoOf(ToastOptions).component15_gazzfj_k$ = function () {
    return this.ariaLive_1;
  };
  protoOf(ToastOptions).copy_6yrbpt_k$ = function (position, className, escapeHtml, close, oldestFirst, duration, stopOnFocus, onClick, destination, newWindow, callback, avatar, offset, style, ariaLive) {
    return new ToastOptions(position, className, escapeHtml, close, oldestFirst, duration, stopOnFocus, onClick, destination, newWindow, callback, avatar, offset, style, ariaLive);
  };
  protoOf(ToastOptions).copy$default_7jzkr0_k$ = function (position, className, escapeHtml, close, oldestFirst, duration, stopOnFocus, onClick, destination, newWindow, callback, avatar, offset, style, ariaLive, $super) {
    position = position === VOID ? this.position_1 : position;
    className = className === VOID ? this.className_1 : className;
    escapeHtml = escapeHtml === VOID ? this.escapeHtml_1 : escapeHtml;
    close = close === VOID ? this.close_1 : close;
    oldestFirst = oldestFirst === VOID ? this.oldestFirst_1 : oldestFirst;
    duration = duration === VOID ? this.duration_1 : duration;
    stopOnFocus = stopOnFocus === VOID ? this.stopOnFocus_1 : stopOnFocus;
    onClick = onClick === VOID ? this.onClick_1 : onClick;
    destination = destination === VOID ? this.destination_1 : destination;
    newWindow = newWindow === VOID ? this.newWindow_1 : newWindow;
    callback = callback === VOID ? this.callback_1 : callback;
    avatar = avatar === VOID ? this.avatar_1 : avatar;
    offset = offset === VOID ? this.offset_1 : offset;
    style = style === VOID ? this.style_1 : style;
    ariaLive = ariaLive === VOID ? this.ariaLive_1 : ariaLive;
    return $super === VOID ? this.copy_6yrbpt_k$(position, className, escapeHtml, close, oldestFirst, duration, stopOnFocus, onClick, destination, newWindow, callback, avatar, offset, style, ariaLive) : $super.copy_6yrbpt_k$.call(this, position, className, escapeHtml, close, oldestFirst, duration, stopOnFocus, onClick, destination, newWindow, callback, avatar, offset, style, ariaLive);
  };
  protoOf(ToastOptions).toString = function () {
    return 'ToastOptions(position=' + toString(this.position_1) + ', className=' + this.className_1 + ', escapeHtml=' + this.escapeHtml_1 + ', close=' + this.close_1 + ', oldestFirst=' + this.oldestFirst_1 + ', duration=' + this.duration_1 + ', stopOnFocus=' + this.stopOnFocus_1 + ', onClick=' + toString(this.onClick_1) + ', destination=' + this.destination_1 + ', newWindow=' + this.newWindow_1 + ', callback=' + toString(this.callback_1) + ', avatar=' + this.avatar_1 + ', offset=' + this.offset_1 + ', style=' + this.style_1 + ', ariaLive=' + this.ariaLive_1 + ')';
  };
  protoOf(ToastOptions).hashCode = function () {
    var result = this.position_1 == null ? 0 : this.position_1.hashCode();
    result = imul(result, 31) + (this.className_1 == null ? 0 : getStringHashCode(this.className_1)) | 0;
    result = imul(result, 31) + (this.escapeHtml_1 == null ? 0 : getBooleanHashCode(this.escapeHtml_1)) | 0;
    result = imul(result, 31) + (this.close_1 == null ? 0 : getBooleanHashCode(this.close_1)) | 0;
    result = imul(result, 31) + (this.oldestFirst_1 == null ? 0 : getBooleanHashCode(this.oldestFirst_1)) | 0;
    result = imul(result, 31) + (this.duration_1 == null ? 0 : this.duration_1) | 0;
    result = imul(result, 31) + (this.stopOnFocus_1 == null ? 0 : getBooleanHashCode(this.stopOnFocus_1)) | 0;
    result = imul(result, 31) + (this.onClick_1 == null ? 0 : hashCode(this.onClick_1)) | 0;
    result = imul(result, 31) + (this.destination_1 == null ? 0 : getStringHashCode(this.destination_1)) | 0;
    result = imul(result, 31) + (this.newWindow_1 == null ? 0 : getBooleanHashCode(this.newWindow_1)) | 0;
    result = imul(result, 31) + (this.callback_1 == null ? 0 : hashCode(this.callback_1)) | 0;
    result = imul(result, 31) + (this.avatar_1 == null ? 0 : getStringHashCode(this.avatar_1)) | 0;
    result = imul(result, 31) + (this.offset_1 == null ? 0 : hashCode(this.offset_1)) | 0;
    result = imul(result, 31) + (this.style_1 == null ? 0 : hashCode(this.style_1)) | 0;
    result = imul(result, 31) + (this.ariaLive_1 == null ? 0 : getStringHashCode(this.ariaLive_1)) | 0;
    return result;
  };
  protoOf(ToastOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ToastOptions))
      return false;
    var tmp0_other_with_cast = other instanceof ToastOptions ? other : THROW_CCE();
    if (!equals(this.position_1, tmp0_other_with_cast.position_1))
      return false;
    if (!(this.className_1 == tmp0_other_with_cast.className_1))
      return false;
    if (!(this.escapeHtml_1 == tmp0_other_with_cast.escapeHtml_1))
      return false;
    if (!(this.close_1 == tmp0_other_with_cast.close_1))
      return false;
    if (!(this.oldestFirst_1 == tmp0_other_with_cast.oldestFirst_1))
      return false;
    if (!(this.duration_1 == tmp0_other_with_cast.duration_1))
      return false;
    if (!(this.stopOnFocus_1 == tmp0_other_with_cast.stopOnFocus_1))
      return false;
    if (!equals(this.onClick_1, tmp0_other_with_cast.onClick_1))
      return false;
    if (!(this.destination_1 == tmp0_other_with_cast.destination_1))
      return false;
    if (!(this.newWindow_1 == tmp0_other_with_cast.newWindow_1))
      return false;
    if (!equals(this.callback_1, tmp0_other_with_cast.callback_1))
      return false;
    if (!(this.avatar_1 == tmp0_other_with_cast.avatar_1))
      return false;
    if (!(this.offset_1 == tmp0_other_with_cast.offset_1))
      return false;
    if (!(this.style_1 == tmp0_other_with_cast.style_1))
      return false;
    if (!(this.ariaLive_1 == tmp0_other_with_cast.ariaLive_1))
      return false;
    return true;
  };
  var ToastPosition_TOPRIGHT_instance;
  var ToastPosition_BOTTOMRIGHT_instance;
  var ToastPosition_BOTTOMLEFT_instance;
  var ToastPosition_TOPLEFT_instance;
  function values() {
    return [ToastPosition_TOPRIGHT_getInstance(), ToastPosition_BOTTOMRIGHT_getInstance(), ToastPosition_BOTTOMLEFT_getInstance(), ToastPosition_TOPLEFT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'TOPRIGHT':
        return ToastPosition_TOPRIGHT_getInstance();
      case 'BOTTOMRIGHT':
        return ToastPosition_BOTTOMRIGHT_getInstance();
      case 'BOTTOMLEFT':
        return ToastPosition_BOTTOMLEFT_getInstance();
      case 'TOPLEFT':
        return ToastPosition_TOPLEFT_getInstance();
      default:
        ToastPosition_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var ToastPosition_entriesInitialized;
  function ToastPosition_initEntries() {
    if (ToastPosition_entriesInitialized)
      return Unit_getInstance();
    ToastPosition_entriesInitialized = true;
    ToastPosition_TOPRIGHT_instance = new ToastPosition('TOPRIGHT', 0);
    ToastPosition_BOTTOMRIGHT_instance = new ToastPosition('BOTTOMRIGHT', 1);
    ToastPosition_BOTTOMLEFT_instance = new ToastPosition('BOTTOMLEFT', 2);
    ToastPosition_TOPLEFT_instance = new ToastPosition('TOPLEFT', 3);
  }
  var $ENTRIES;
  function ToastPosition(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var ToastType_PRIMARY_instance;
  var ToastType_SECONDARY_instance;
  var ToastType_INFO_instance;
  var ToastType_SUCCESS_instance;
  var ToastType_WARNING_instance;
  var ToastType_DANGER_instance;
  var ToastType_LIGHT_instance;
  var ToastType_DARK_instance;
  function values_0() {
    return [ToastType_PRIMARY_getInstance(), ToastType_SECONDARY_getInstance(), ToastType_INFO_getInstance(), ToastType_SUCCESS_getInstance(), ToastType_WARNING_getInstance(), ToastType_DANGER_getInstance(), ToastType_LIGHT_getInstance(), ToastType_DARK_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'PRIMARY':
        return ToastType_PRIMARY_getInstance();
      case 'SECONDARY':
        return ToastType_SECONDARY_getInstance();
      case 'INFO':
        return ToastType_INFO_getInstance();
      case 'SUCCESS':
        return ToastType_SUCCESS_getInstance();
      case 'WARNING':
        return ToastType_WARNING_getInstance();
      case 'DANGER':
        return ToastType_DANGER_getInstance();
      case 'LIGHT':
        return ToastType_LIGHT_getInstance();
      case 'DARK':
        return ToastType_DARK_getInstance();
      default:
        ToastType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var ToastType_entriesInitialized;
  function ToastType_initEntries() {
    if (ToastType_entriesInitialized)
      return Unit_getInstance();
    ToastType_entriesInitialized = true;
    ToastType_PRIMARY_instance = new ToastType('PRIMARY', 0, 'kv-toastify-primary');
    ToastType_SECONDARY_instance = new ToastType('SECONDARY', 1, 'kv-toastify-secondary');
    ToastType_INFO_instance = new ToastType('INFO', 2, 'kv-toastify-info');
    ToastType_SUCCESS_instance = new ToastType('SUCCESS', 3, 'kv-toastify-success');
    ToastType_WARNING_instance = new ToastType('WARNING', 4, 'kv-toastify-warning');
    ToastType_DANGER_instance = new ToastType('DANGER', 5, 'kv-toastify-danger');
    ToastType_LIGHT_instance = new ToastType('LIGHT', 6, 'kv-toastify-light');
    ToastType_DARK_instance = new ToastType('DARK', 7, 'kv-toastify-dark');
  }
  var $ENTRIES_0;
  function ToastType(name, ordinal, type) {
    Enum.call(this, name, ordinal);
    this.type_1 = type;
  }
  protoOf(ToastType).get_type_mnsmny_k$ = function () {
    return this.type_1;
  };
  function toJs(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.position_1;
    var positionType;
    switch (tmp0_subject == null ? -1 : tmp0_subject.get_ordinal_ip24qg_k$()) {
      case 0:
      case 1:
        positionType = 'right';
        break;
      case 3:
      case 2:
        positionType = 'left';
        break;
      default:
        positionType = null;
        break;
    }
    var tmp1_subject = _this__u8e3s4.position_1;
    var gravityType;
    switch (tmp1_subject == null ? -1 : tmp1_subject.get_ordinal_ip24qg_k$()) {
      case 0:
      case 3:
        gravityType = 'top';
        break;
      case 1:
      case 2:
        gravityType = 'bottom';
        break;
      default:
        gravityType = null;
        break;
    }
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.toast.toJs.<anonymous>' call
    if (!(positionType == null))
      this_0.position = positionType;
    if (!(gravityType == null))
      this_0.gravity = gravityType;
    if (!(_this__u8e3s4.escapeHtml_1 == null))
      this_0.escapeHtml = _this__u8e3s4.escapeHtml_1;
    if (!(_this__u8e3s4.close_1 == null))
      this_0.close = _this__u8e3s4.close_1;
    if (!(_this__u8e3s4.oldestFirst_1 == null))
      this_0.oldestFirst = _this__u8e3s4.oldestFirst_1;
    if (!(_this__u8e3s4.duration_1 == null))
      this_0.duration = _this__u8e3s4.duration_1;
    if (!(_this__u8e3s4.stopOnFocus_1 == null))
      this_0.stopOnFocus = _this__u8e3s4.stopOnFocus_1;
    if (!(_this__u8e3s4.onClick_1 == null))
      this_0.onClick = _this__u8e3s4.onClick_1;
    if (!(_this__u8e3s4.destination_1 == null))
      this_0.destination = _this__u8e3s4.destination_1;
    if (!(_this__u8e3s4.newWindow_1 == null))
      this_0.newWindow = _this__u8e3s4.newWindow_1;
    if (!(_this__u8e3s4.callback_1 == null))
      this_0.callback = _this__u8e3s4.callback_1;
    if (!(_this__u8e3s4.avatar_1 == null))
      this_0.avatar = _this__u8e3s4.avatar_1;
    if (_this__u8e3s4.offset_1 != null)
      this_0.offset = _this__u8e3s4.offset_1;
    if (_this__u8e3s4.style_1 != null)
      this_0.style = _this__u8e3s4.style_1;
    if (!(_this__u8e3s4.ariaLive_1 == null))
      this_0.ariaLive = _this__u8e3s4.ariaLive_1;
    return this_0;
  }
  function ToastPosition_TOPRIGHT_getInstance() {
    ToastPosition_initEntries();
    return ToastPosition_TOPRIGHT_instance;
  }
  function ToastPosition_BOTTOMRIGHT_getInstance() {
    ToastPosition_initEntries();
    return ToastPosition_BOTTOMRIGHT_instance;
  }
  function ToastPosition_BOTTOMLEFT_getInstance() {
    ToastPosition_initEntries();
    return ToastPosition_BOTTOMLEFT_instance;
  }
  function ToastPosition_TOPLEFT_getInstance() {
    ToastPosition_initEntries();
    return ToastPosition_TOPLEFT_instance;
  }
  function ToastType_PRIMARY_getInstance() {
    ToastType_initEntries();
    return ToastType_PRIMARY_instance;
  }
  function ToastType_SECONDARY_getInstance() {
    ToastType_initEntries();
    return ToastType_SECONDARY_instance;
  }
  function ToastType_INFO_getInstance() {
    ToastType_initEntries();
    return ToastType_INFO_instance;
  }
  function ToastType_SUCCESS_getInstance() {
    ToastType_initEntries();
    return ToastType_SUCCESS_instance;
  }
  function ToastType_WARNING_getInstance() {
    ToastType_initEntries();
    return ToastType_WARNING_instance;
  }
  function ToastType_DANGER_getInstance() {
    ToastType_initEntries();
    return ToastType_DANGER_instance;
  }
  function ToastType_LIGHT_getInstance() {
    ToastType_initEntries();
    return ToastType_LIGHT_instance;
  }
  function ToastType_DARK_getInstance() {
    ToastType_initEntries();
    return ToastType_DARK_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ToastPosition_BOTTOMRIGHT_getInstance;
  _.$_$.b = Toast_getInstance;
  _.$_$.c = ToastifyModule_getInstance;
  _.$_$.d = ToastOptions;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-toastify.js.map
