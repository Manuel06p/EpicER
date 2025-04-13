(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'snabbdom', 'snabbdom', './kotlin-kotlin-stdlib.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kotlinx-coroutines-core.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kvision-kvision-modules-kvision-common-types.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('snabbdom'), require('snabbdom'), require('./kotlin-kotlin-stdlib.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kvision-kvision-modules-kvision-common-types.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof snabbdom === 'undefined') {
      throw new Error("Error loading module 'kvision'. Its dependency 'snabbdom' was not found. Please, check whether 'snabbdom' is loaded prior to 'kvision'.");
    }
    if (typeof modulesExt === 'undefined') {
      throw new Error("Error loading module 'kvision'. Its dependency 'snabbdom' was not found. Please, check whether 'snabbdom' is loaded prior to 'kvision'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kvision'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kvision'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kvision'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kvision'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kvision'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kvision'.");
    }
    if (typeof globalThis['kvision-kvision-modules-kvision-common-types'] === 'undefined') {
      throw new Error("Error loading module 'kvision'. Its dependency 'kvision-kvision-modules-kvision-common-types' was not found. Please, check whether 'kvision-kvision-modules-kvision-common-types' is loaded prior to 'kvision'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'kvision'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'kvision'.");
    }
    globalThis.kvision = factory(typeof kvision === 'undefined' ? {} : kvision, snabbdom, modulesExt, globalThis['kotlin-kotlin-stdlib'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kvision-kvision-modules-kvision-common-types'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, $module$snabbdom, modulesExt, kotlin_kotlin, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_kvision_kvision_common_types, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var init = $module$snabbdom.init;
  var h = $module$snabbdom.h;
  var h_0 = $module$snabbdom.h;
  var imul = Math.imul;
  var h_1 = $module$snabbdom.h;
  var h_2 = $module$snabbdom.h;
  var h_3 = $module$snabbdom.h;
  var protoOf = kotlin_kotlin.$_$.mb;
  var emptyMap = kotlin_kotlin.$_$.s6;
  var initMetadataForClass = kotlin_kotlin.$_$.ja;
  var VOID = kotlin_kotlin.$_$.g;
  var Unit_getInstance = kotlin_kotlin.$_$.e5;
  var initMetadataForInterface = kotlin_kotlin.$_$.ma;
  var initMetadataForObject = kotlin_kotlin.$_$.oa;
  var clear = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var charSequenceLength = kotlin_kotlin.$_$.y9;
  var asList = kotlin_kotlin.$_$.w5;
  var THROW_IAE = kotlin_kotlin.$_$.ze;
  var enumEntries = kotlin_kotlin.$_$.o9;
  var Enum = kotlin_kotlin.$_$.ke;
  var toString = kotlin_kotlin.$_$.qd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q2;
  var padStart = kotlin_kotlin.$_$.vc;
  var listOf = kotlin_kotlin.$_$.l7;
  var joinToString = kotlin_kotlin.$_$.e7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ka;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var charArrayOf = kotlin_kotlin.$_$.v9;
  var split = kotlin_kotlin.$_$.dd;
  var last = kotlin_kotlin.$_$.j7;
  var iterator = kotlin_kotlin.$_$.cb;
  var to = kotlin_kotlin.$_$.bg;
  var toString_0 = kotlin_kotlin.$_$.pb;
  var hashCode = kotlin_kotlin.$_$.ia;
  var THROW_CCE = kotlin_kotlin.$_$.ye;
  var equals = kotlin_kotlin.$_$.ca;
  var KMutableProperty1 = kotlin_kotlin.$_$.bc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ga;
  var ensureNotNull = kotlin_kotlin.$_$.qf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var apply = kotlin_kotlin.$_$.mf;
  var toSet = kotlin_kotlin.$_$.o8;
  var emptySet = kotlin_kotlin.$_$.t6;
  var intersect = kotlin_kotlin.$_$.d7;
  var mapOf = kotlin_kotlin.$_$.n7;
  var split_0 = kotlin_kotlin.$_$.ed;
  var toSet_0 = kotlin_kotlin.$_$.n8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var toMap = kotlin_kotlin.$_$.j8;
  var toMutableMap = kotlin_kotlin.$_$.l8;
  var copyToArray = kotlin_kotlin.$_$.o6;
  var first = kotlin_kotlin.$_$.w6;
  var mutableMapOf = kotlin_kotlin.$_$.p7;
  var startsWith = kotlin_kotlin.$_$.fd;
  var toMutableSet = kotlin_kotlin.$_$.m8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var setOf = kotlin_kotlin.$_$.z7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var getKClass = kotlin_kotlin.$_$.f;
  var overwriteWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var KtList = kotlin_kotlin.$_$.o5;
  var isInterface = kotlin_kotlin.$_$.xa;
  var Companion_getInstance = kotlin_io_kvision_kvision_common_types.$_$.a;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var KtMap = kotlin_kotlin.$_$.q5;
  var contains = kotlin_kotlin.$_$.c6;
  var mapCapacity = kotlin_kotlin.$_$.m7;
  var coerceAtLeast = kotlin_kotlin.$_$.tb;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var plus = kotlin_kotlin.$_$.q7;
  var withDefault = kotlin_kotlin.$_$.p8;
  var toString_1 = kotlin_kotlin.$_$.ag;
  var getBooleanHashCode = kotlin_kotlin.$_$.ea;
  var getStringHashCode = kotlin_kotlin.$_$.ha;
  var json = kotlin_kotlin.$_$.eb;
  var isNumber = kotlin_kotlin.$_$.za;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.u1;
  var listOf_0 = kotlin_kotlin.$_$.k7;
  var checkIndexOverflow = kotlin_kotlin.$_$.a6;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wf;
  var Annotation = kotlin_kotlin.$_$.be;
  var dropLast = kotlin_kotlin.$_$.lc;
  var last_0 = kotlin_kotlin.$_$.uc;
  var Exception = kotlin_kotlin.$_$.me;
  var charSequenceGet = kotlin_kotlin.$_$.x9;
  var toIntOrNull = kotlin_kotlin.$_$.nd;
  var objectCreate = kotlin_kotlin.$_$.lb;
  var asList_0 = kotlin_kotlin.$_$.cg;
  var plus_0 = kotlin_kotlin.$_$.u7;
  var getOrNull = kotlin_kotlin.$_$.x6;
  var emptyList = kotlin_kotlin.$_$.r6;
  var indexOf = kotlin_kotlin.$_$.z6;
  var firstOrNull = kotlin_kotlin.$_$.v6;
  var ObservableProperty = kotlin_kotlin.$_$.rb;
  var Delegates_getInstance = kotlin_kotlin.$_$.t4;
  var get_KV_DEFAULT_DATE_FORMAT = kotlin_io_kvision_kvision_common_types.$_$.b;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var plus_1 = kotlin_kotlin.$_$.r7;
  var serializersModuleOf = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var Pair = kotlin_kotlin.$_$.ve;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Application, 'Application');
  initMetadataForInterface(ModuleInitializer, 'ModuleInitializer');
  initMetadataForObject(CoreModule, 'CoreModule', VOID, VOID, [ModuleInitializer]);
  initMetadataForObject(KVManager, 'KVManager');
  function add$default(name, value, $super) {
    value = value === VOID ? name : value;
    var tmp;
    if ($super === VOID) {
      this.add_lbri6p_k$(name, value);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_lbri6p_k$.call(this, name, value);
    }
    return tmp;
  }
  function addAll(attributes) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = attributes.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.core.AttributeSetBuilder.addAll.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = element.get_value_j01efc_k$();
      this.add_lbri6p_k$(key, value);
    }
  }
  function add(attribute) {
    if (!(attribute == null)) {
      this.add_lbri6p_k$(attribute.get_attributeName_p6lq76_k$(), attribute.get_attributeValue_rxe0u_k$());
    }
  }
  initMetadataForInterface(AttributeSetBuilder, 'AttributeSetBuilder');
  initMetadataForClass(AttributeSetBuilderImpl, 'AttributeSetBuilderImpl', AttributeSetBuilderImpl, VOID, [AttributeSetBuilder]);
  function add_0(value) {
    if (!(value == null)) {
      this.add_udnk2x_k$(value.get_className_8cmv0a_k$());
    }
  }
  initMetadataForInterface(ClassSetBuilder, 'ClassSetBuilder');
  initMetadataForClass(ClassSetBuilderImpl, 'ClassSetBuilderImpl', ClassSetBuilderImpl, VOID, [ClassSetBuilder]);
  function focus() {
    var tmp0_safe_receiver = this.getElementD_y85vem_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.focus();
  }
  function blur() {
    var tmp0_safe_receiver = this.getElementD_y85vem_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.blur();
  }
  initMetadataForInterface(Component, 'Component');
  function invoke(children) {
    this.addAll_a94ixq_k$(asList(children));
  }
  function unaryPlus(_this__u8e3s4) {
    this.add_rekwpt_k$(new TextNode(_this__u8e3s4));
  }
  initMetadataForInterface(Container, 'Container', VOID, VOID, [Component]);
  initMetadataForClass(FlexDirection, 'FlexDirection', VOID, Enum);
  initMetadataForClass(TextTransform, 'TextTransform', VOID, Enum);
  initMetadataForClass(PosFloat, 'PosFloat', VOID, Enum);
  initMetadataForClass(Background, 'Background', Background);
  initMetadataForClass(Border, 'Border', Border);
  initMetadataForClass(WordBreak, 'WordBreak', VOID, Enum);
  initMetadataForClass(VerticalAlign, 'VerticalAlign', VOID, Enum);
  initMetadataForClass(FontWeight, 'FontWeight', VOID, Enum);
  initMetadataForClass(UnicodeBidi, 'UnicodeBidi', VOID, Enum);
  initMetadataForClass(Outline, 'Outline', Outline);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(BorderStyle, 'BorderStyle', VOID, Enum);
  initMetadataForClass(Display, 'Display', VOID, Enum);
  initMetadataForClass(ListStyleType, 'ListStyleType', VOID, Enum);
  initMetadataForClass(Overflow, 'Overflow', VOID, Enum);
  initMetadataForClass(TextAlign, 'TextAlign', VOID, Enum);
  initMetadataForClass(BoxShadow, 'BoxShadow', BoxShadow);
  initMetadataForClass(FontVariant, 'FontVariant', VOID, Enum);
  initMetadataForClass(Cursor, 'Cursor', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Color, 'Color', Color);
  initMetadataForClass(AlignItems, 'AlignItems', VOID, Enum);
  initMetadataForClass(LineBreak, 'LineBreak', VOID, Enum);
  initMetadataForClass(FlexWrap, 'FlexWrap', VOID, Enum);
  initMetadataForClass(GridAutoFlow, 'GridAutoFlow', VOID, Enum);
  initMetadataForClass(Clear, 'Clear', VOID, Enum);
  initMetadataForClass(TextOverflow, 'TextOverflow', VOID, Enum);
  initMetadataForClass(TextDecoration, 'TextDecoration', TextDecoration);
  initMetadataForClass(WhiteSpace, 'WhiteSpace', VOID, Enum);
  initMetadataForClass(TextShadow, 'TextShadow', TextShadow);
  initMetadataForClass(JustifyItems, 'JustifyItems', VOID, Enum);
  initMetadataForClass(FontStyle, 'FontStyle', VOID, Enum);
  initMetadataForClass(Col, 'Col', VOID, Enum);
  initMetadataForClass(Position, 'Position', VOID, Enum);
  initMetadataForClass(ListStyle, 'ListStyle', ListStyle);
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(JustifyContent, 'JustifyContent', VOID, Enum);
  initMetadataForClass(UNIT, 'UNIT', VOID, Enum);
  initMetadataForClass(OverflowWrap, 'OverflowWrap', VOID, Enum);
  initMetadataForClass(AlignContent, 'AlignContent', VOID, Enum);
  initMetadataForClass(Resize, 'Resize', VOID, Enum);
  initMetadataForClass(BgSize, 'BgSize', VOID, Enum);
  initMetadataForClass(BgRepeat, 'BgRepeat', VOID, Enum);
  initMetadataForClass(BgOrigin, 'BgOrigin', VOID, Enum);
  initMetadataForClass(BgClip, 'BgClip', VOID, Enum);
  initMetadataForClass(BgAttach, 'BgAttach', VOID, Enum);
  initMetadataForClass(OutlineStyle, 'OutlineStyle', VOID, Enum);
  initMetadataForClass(TextDecorationLine, 'TextDecorationLine', VOID, Enum);
  initMetadataForClass(TextDecorationStyle, 'TextDecorationStyle', VOID, Enum);
  initMetadataForClass(ListStylePosition, 'ListStylePosition', VOID, Enum);
  initMetadataForInterface(CssClass, 'CssClass');
  initMetadataForInterface(DomAttribute, 'DomAttribute');
  function clearOn(shouldClear) {
    return new AutoClearCache(this, shouldClear);
  }
  initMetadataForInterface(SingleObjectCache, 'SingleObjectCache');
  initMetadataForClass(LazyCache, 'LazyCache', VOID, VOID, [SingleObjectCache]);
  initMetadataForClass(AutoClearCache, 'AutoClearCache', VOID, VOID, [SingleObjectCache]);
  initMetadataForClass(RefreshDelegateProvider, 'RefreshDelegateProvider');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(StyledComponent, 'StyledComponent');
  initMetadataForClass(Style, 'Style', Style, StyledComponent);
  initMetadataForClass(PClass, 'PClass', VOID, Enum);
  initMetadataForClass(PElement, 'PElement', VOID, Enum);
  initMetadataForClass(StyleRefreshDelegate, 'StyleRefreshDelegate');
  initMetadataForClass(StyledRefreshDelegate, 'StyledRefreshDelegate');
  initMetadataForClass(WidgetRefreshDelegate, 'WidgetRefreshDelegate');
  initMetadataForClass(RefreshDelegateProvider_0, 'RefreshDelegateProvider');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Widget, 'Widget', Widget, StyledComponent, [StyledComponent, Component]);
  initMetadataForClass(SimplePanel, 'SimplePanel', SimplePanel, Widget, [Widget, Container]);
  initMetadataForClass(WidgetWrapper, 'WidgetWrapper', VOID, SimplePanel);
  function set_templateData(value) {
    if (!this.get_rich_woto9x_k$()) {
      this.set_rich_1alg2s_k$(true);
    }
    this.set_templateDataObj_9197dl_k$(value);
    var tmp0_safe_receiver = this.get_template_hdczer_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(value);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = this.get_templates_tqpy0g_k$().get_wei43m_k$(I18n_getInstance().get_language_cjhhk1_k$());
      tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver(value);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    this.set_content_i5lrjv_k$(tmp);
  }
  function get_templateData() {
    return this.get_templateDataObj_u8d8eu_k$();
  }
  initMetadataForInterface(Template, 'Template');
  initMetadataForClass(Tag, 'Tag', VOID, SimplePanel, [SimplePanel, Template]);
  initMetadataForClass(FieldLabel, 'FieldLabel', VOID, Tag);
  initMetadataForClass(FieldLabelCheck, 'FieldLabelCheck', VOID, FieldLabel);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Form, 'Form', Form);
  initMetadataForClass(FieldParams, 'FieldParams', FieldParams);
  function set_disabled(value) {
    this.get_input_it4gip_k$().set_disabled_rhu918_k$(value);
  }
  function get_disabled() {
    return this.get_input_it4gip_k$().get_disabled_rbmjej_k$();
  }
  function set_size(value) {
    this.get_input_it4gip_k$().set_size_duu2i7_k$(value);
    if (equals(value, InputSize_SMALL_getInstance())) {
      this.get_flabel_ddfcrb_k$().addCssClass_ul13bg_k$('col-form-label-sm');
    } else {
      this.get_flabel_ddfcrb_k$().removeCssClass_3dntip_k$('col-form-label-sm');
    }
    if (equals(value, InputSize_LARGE_getInstance())) {
      this.get_flabel_ddfcrb_k$().addCssClass_ul13bg_k$('col-form-label-lg');
    } else {
      this.get_flabel_ddfcrb_k$().removeCssClass_3dntip_k$('col-form-label-lg');
    }
  }
  function get_size() {
    return this.get_input_it4gip_k$().get_size_woubt6_k$();
  }
  function set_name(value) {
    this.get_input_it4gip_k$().set_name_wkmnld_k$(value);
  }
  function get_name() {
    return this.get_input_it4gip_k$().get_name_woqyms_k$();
  }
  function set_validationStatus(value) {
    this.get_input_it4gip_k$().set_validationStatus_hx0grd_k$(value);
  }
  function get_validationStatus() {
    return this.get_input_it4gip_k$().get_validationStatus_he6hkc_k$();
  }
  function set_validatorError(value) {
    this.get_invalidFeedback_fj7eer_k$().set_content_i5lrjv_k$(value);
    this.get_invalidFeedback_fj7eer_k$().set_visible_w9mvj4_k$(!(value == null));
    this.get_input_it4gip_k$().set_validationStatus_hx0grd_k$(!(value == null) ? ValidationStatus_INVALID_getInstance() : null);
    if (this.hasCssClass_hvhhyj_k$('kv-control-horiz')) {
      if (!(value == null)) {
        this.get_input_it4gip_k$().addSurroundingCssClass_h2gyzy_k$('is-invalid');
      } else {
        this.get_input_it4gip_k$().removeSurroundingCssClass_at56kr_k$('is-invalid');
      }
    }
    this.refresh_6a3uvf_k$();
  }
  function get_validatorError() {
    return this.get_invalidFeedback_fj7eer_k$().get_content_h02jrk_k$();
  }
  function styleForVerticalFormPanel() {
  }
  function styleForHorizontalFormPanel(horizontalRatio) {
    this.addCssClass_ul13bg_k$('row');
    this.addCssClass_ul13bg_k$('kv-control-horiz');
    this.get_flabel_ddfcrb_k$().addCssClass_ul13bg_k$('col-sm-' + horizontalRatio.get_labels_g1o1zc_k$());
    this.get_flabel_ddfcrb_k$().addCssClass_ul13bg_k$('col-form-label');
    this.get_input_it4gip_k$().addSurroundingCssClass_h2gyzy_k$('col-sm-' + horizontalRatio.get_fields_dbuqbm_k$());
    this.get_invalidFeedback_fj7eer_k$().addCssClass_ul13bg_k$('offset-sm-' + horizontalRatio.get_labels_g1o1zc_k$());
    this.get_invalidFeedback_fj7eer_k$().addCssClass_ul13bg_k$('col-sm-' + horizontalRatio.get_fields_dbuqbm_k$());
  }
  function styleForInlineFormPanel() {
    this.removeCssClass_3dntip_k$('kv-mb-3');
  }
  initMetadataForInterface(FormControl, 'FormControl', VOID, VOID, [Component]);
  initMetadataForInterface(GenericFormComponent, 'GenericFormComponent', VOID, VOID, [Component]);
  function getValue() {
    return this.get_value_j01efc_k$();
  }
  function setValue(v) {
    var tmp0_elvis_lhs = (v == null ? true : !(v == null)) ? v : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.set_value_v1vabv_k$(tmp);
  }
  function getValueAsString() {
    var tmp0_safe_receiver = this.get_value_j01efc_k$();
    return tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
  }
  initMetadataForInterface(GenericNonNullableFormControl, 'GenericNonNullableFormControl', VOID, VOID, [FormControl, GenericFormComponent]);
  function setValue_0(v) {
    var tmp0_elvis_lhs = (!(v == null) ? typeof v === 'boolean' : false) ? v : null;
    this.set_value_v1vabv_k$(tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs);
  }
  initMetadataForInterface(BoolFormControl, 'BoolFormControl', VOID, VOID, [GenericNonNullableFormControl]);
  initMetadataForInterface(FormInput, 'FormInput', VOID, VOID, [Component]);
  function getValue_0() {
    return this.get_value_j01efc_k$();
  }
  function setValue_1(v) {
    this.set_value_v1vabv_k$((v == null ? true : !(v == null)) ? v : null);
  }
  function getValueAsString_0() {
    var tmp0_safe_receiver = this.get_value_j01efc_k$();
    return tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
  }
  initMetadataForInterface(GenericFormControl, 'GenericFormControl', VOID, VOID, [FormControl, GenericFormComponent]);
  function setValue_2(v) {
    var tmp0_elvis_lhs = (!(v == null) ? typeof v === 'string' : false) ? v : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = v == null ? null : toString_0(v);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.set_value_v1vabv_k$(tmp);
  }
  function getValueAsString_1() {
    return this.get_value_j01efc_k$();
  }
  initMetadataForInterface(StringFormControl, 'StringFormControl', VOID, VOID, [GenericFormControl]);
  function setValue_3(v) {
    if (v == null) {
      this.set_value_v1vabv_k$(null);
    }
  }
  function getValueAsString_2() {
    var tmp0_safe_receiver = this.get_value_j01efc_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = joinToString(tmp0_safe_receiver, ',', VOID, VOID, VOID, VOID, KFilesFormControl$getValueAsString$lambda);
    }
    return tmp;
  }
  initMetadataForInterface(KFilesFormControl, 'KFilesFormControl', VOID, VOID, [GenericFormControl]);
  function setValue_4(v) {
    this.set_value_v1vabv_k$(isNumber(v) ? v : null);
  }
  initMetadataForInterface(NumberFormControl, 'NumberFormControl', VOID, VOID, [GenericFormControl]);
  initMetadataForClass(ValidationStatus, 'ValidationStatus', VOID, Enum, [CssClass, Enum]);
  initMetadataForClass(InputSize, 'InputSize', VOID, Enum, [CssClass, Enum]);
  function setValue_5(v) {
    this.set_value_v1vabv_k$(v instanceof Date ? v : null);
  }
  initMetadataForInterface(DateFormControl, 'DateFormControl', VOID, VOID, [GenericFormControl]);
  function setValue_6(v) {
    this.set_value_v1vabv_k$((!(v == null) ? typeof v === 'boolean' : false) ? v : null);
  }
  initMetadataForInterface(TriStateFormControl, 'TriStateFormControl', VOID, VOID, [GenericFormControl]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FormPanel, 'FormPanel', FormPanel, SimplePanel);
  initMetadataForClass(FormHorizontalRatio, 'FormHorizontalRatio', VOID, Enum);
  initMetadataForClass(FormMethod, 'FormMethod', VOID, Enum, [DomAttribute, Enum]);
  initMetadataForClass(FormEnctype, 'FormEnctype', VOID, Enum);
  initMetadataForClass(FormType, 'FormType', VOID, Enum);
  initMetadataForClass(FormTarget, 'FormTarget', VOID, Enum, [DomAttribute, Enum]);
  initMetadataForClass(InvalidFeedback, 'InvalidFeedback', InvalidFeedback, Tag);
  initMetadataForCompanion(Companion_4);
  initMetadataForInterface(ObservableState, 'ObservableState');
  initMetadataForInterface(MutableState, 'MutableState', VOID, VOID, [ObservableState]);
  initMetadataForClass(CheckBox, 'CheckBox', CheckBox, SimplePanel, [SimplePanel, BoolFormControl, MutableState]);
  initMetadataForClass(CheckInput, 'CheckInput', VOID, Widget, [Widget, GenericFormComponent, FormInput, MutableState]);
  initMetadataForClass(CheckBoxInput, 'CheckBoxInput', CheckBoxInput, CheckInput);
  initMetadataForClass(CheckStyle, 'CheckStyle', VOID, Enum, [CssClass, Enum]);
  initMetadataForClass(CheckInputType, 'CheckInputType', VOID, Enum);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(AbstractText, 'AbstractText', VOID, SimplePanel, [SimplePanel, StringFormControl, MutableState]);
  initMetadataForClass(AbstractTextInput, 'AbstractTextInput', VOID, Widget, [Widget, GenericFormComponent, FormInput, MutableState]);
  initMetadataForInterface(MaskFactory, 'MaskFactory');
  initMetadataForObject(MaskManager, 'MaskManager');
  initMetadataForInterface(Mask, 'Mask');
  initMetadataForInterface(MaskOptions, 'MaskOptions');
  initMetadataForClass(Text, 'Text', Text, AbstractText);
  initMetadataForClass(Password, 'Password', Password, Text);
  initMetadataForClass(TextInput, 'TextInput', TextInput, AbstractTextInput);
  initMetadataForClass(ButtonType, 'ButtonType', VOID, Enum);
  initMetadataForClass(Button, 'Button', VOID, SimplePanel);
  initMetadataForClass(ButtonStyle, 'ButtonStyle', VOID, Enum, [CssClass, Enum]);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Enum, [CssClass, Enum]);
  initMetadataForClass(Div, 'Div', Div, Tag);
  initMetadataForClass(H1, 'H1', H1, Tag);
  initMetadataForClass(H2, 'H2', H2, Tag);
  initMetadataForClass(H3, 'H3', H3, Tag);
  initMetadataForClass(H4, 'H4', H4, Tag);
  initMetadataForClass(H5, 'H5', H5, Tag);
  initMetadataForClass(H6, 'H6', H6, Tag);
  initMetadataForClass(Icon, 'Icon', VOID, Tag);
  initMetadataForClass(Image, 'Image', VOID, Widget);
  initMetadataForClass(ImageShape, 'ImageShape', VOID, Enum, [CssClass, Enum]);
  initMetadataForClass(InputType, 'InputType', VOID, Enum);
  initMetadataForClass(Autocomplete, 'Autocomplete', VOID, Enum);
  initMetadataForClass(Li, 'Li', Li, Tag);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Link, 'Link', VOID, SimplePanel);
  initMetadataForClass(ListType, 'ListType', VOID, Enum);
  initMetadataForClass(ListTag, 'ListTag', VOID, SimplePanel);
  initMetadataForClass(Ol, 'Ol', Ol, ListTag);
  initMetadataForClass(P, 'P', P, Tag);
  initMetadataForClass(Span, 'Span', Span, Tag);
  initMetadataForClass(TAG, 'TAG', VOID, Enum);
  initMetadataForClass(Align, 'Align', VOID, Enum, [CssClass, Enum]);
  initMetadataForClass(TagMarker, 'TagMarker', VOID, VOID, [Annotation]);
  initMetadataForClass(TextNode, 'TextNode', VOID, Widget);
  initMetadataForClass(Ul, 'Ul', Ul, ListTag);
  function tr(key) {
    return '###KvI18nS###' + key;
  }
  function ntr(singularKey, pluralKey, value) {
    return '###KvI18nP###' + singularKey + '###KvI18nP###' + pluralKey + '###KvI18nP###' + value;
  }
  function trans(text) {
    var tmp;
    if (startsWith(text, '###KvI18nS###')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = text.substring(13);
      tmp = this.gettext_fnjyej_k$(tmp$ret$1, []);
    } else if (startsWith(text, '###KvI18nP###')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = text.substring(13);
      var tab = split_0(tmp$ret$3, ['###KvI18nP###']);
      var tmp_0;
      if (tab.get_size_woubt6_k$() === 3) {
        var tmp_1 = tab.get_c1px32_k$(0);
        var tmp_2 = tab.get_c1px32_k$(1);
        var tmp0_elvis_lhs = toIntOrNull(tab.get_c1px32_k$(2));
        var tmp_3 = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        var tmp1_elvis_lhs = toIntOrNull(tab.get_c1px32_k$(2));
        tmp_0 = this.ngettext_92uof3_k$(tmp_1, tmp_2, tmp_3, [tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs]);
      } else {
        tmp_0 = text;
      }
      tmp = tmp_0;
    } else {
      tmp = text;
    }
    return tmp;
  }
  function trans_0(text) {
    var tmp;
    if (text == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.i18n.I18nManager.trans.<anonymous>' call
      tmp = this.trans_c4o9pq_k$(text);
    }
    return tmp;
  }
  initMetadataForInterface(I18nManager, 'I18nManager');
  initMetadataForObject(I18n, 'I18n', VOID, VOID, [I18nManager]);
  initMetadataForClass(SimpleI18nManager, 'SimpleI18nManager', SimpleI18nManager, VOID, [I18nManager]);
  initMetadataForClass(FieldsetPanel, 'FieldsetPanel', FieldsetPanel, SimplePanel);
  initMetadataForClass(FlexPanel$options$1, VOID, VOID, VOID, [Container]);
  initMetadataForClass(FlexPanel, 'FlexPanel', FlexPanel, SimplePanel);
  initMetadataForClass(GridPanel$options$1, VOID, VOID, VOID, [Container]);
  initMetadataForClass(GridPanel, 'GridPanel', GridPanel, SimplePanel);
  initMetadataForClass(HPanel, 'HPanel', HPanel, FlexPanel);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Root, 'Root', VOID, SimplePanel);
  initMetadataForClass(ContainerType, 'ContainerType', VOID, Enum);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(StackPanel$route$1, VOID, VOID, VOID, [Container]);
  initMetadataForClass(StackPanel, 'StackPanel', StackPanel, SimplePanel);
  initMetadataForClass(VPanel, 'VPanel', VPanel, FlexPanel);
  initMetadataForInterface(KVRouter, 'KVRouter');
  initMetadataForObject(RoutingManager, 'RoutingManager');
  initMetadataForInterface(RouterFactory, 'RouterFactory');
  initMetadataForClass(DummyRouterFactory, 'DummyRouterFactory', DummyRouterFactory, VOID, [RouterFactory]);
  initMetadataForClass(DummyRouter, 'DummyRouter', DummyRouter, VOID, [KVRouter]);
  initMetadataForClass(ObservableValue$value$$inlined$observable$1, VOID, VOID, ObservableProperty);
  initMetadataForClass(ObservableValue, 'ObservableValue', VOID, VOID, [MutableState]);
  initMetadataForObject(DateSerializer, 'DateSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(Serialization, 'Serialization');
  //endregion
  function Application() {
  }
  protoOf(Application).start_fyv442_k$ = function () {
  };
  protoOf(Application).start_pjy57x_k$ = function (state) {
    this.start_fyv442_k$();
  };
  protoOf(Application).dispose_rnbs4f_k$ = function () {
    // Inline function 'kotlin.collections.mapOf' call
    return emptyMap();
  };
  function startApplication(builder, hot, moduleInitializer) {
    hot = hot === VOID ? null : hot;
    // Inline function 'kotlin.js.asDynamic' call
    if (window.__karma__)
      return Unit_getInstance();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = moduleInitializer.length;
    while (inductionVariable < last) {
      var element = moduleInitializer[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.kvision.startApplication.<anonymous>' call
      element.initialize_o9rygw_k$();
    }
    var application = {_v: null};
    var tmp;
    if (hot == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.startApplication.<anonymous>' call
      hot.accept();
      hot.dispose(startApplication$lambda(application));
      tmp = hot.data;
    }
    var state = tmp;
    if (!(document.body == null)) {
      application._v = startApplication$start(builder, state);
    } else {
      application._v = null;
      var tmp_0 = document;
      tmp_0.addEventListener('DOMContentLoaded', startApplication$lambda_0(application, state, builder));
    }
  }
  function startApplication$start($builder, state) {
    if ((state == null ? null : state.appState) != undefined) {
      RoutingManager_getInstance().initRouter_f4tktl_k$();
    }
    var application = $builder();
    var tmp2_elvis_lhs = state == null ? null : state.appState;
    application.start_pjy57x_k$(tmp2_elvis_lhs == null ? emptyMap() : tmp2_elvis_lhs);
    RoutingManager_getInstance().getRouter_cqyofz_k$().kvResolve_9bjbjl_k$();
    return application;
  }
  function startApplication$lambda($application) {
    return function (data) {
      Companion_getInstance_8().disposeAllRoots_fs2xup_k$();
      RoutingManager_getInstance().shutdownRouter_acl6kx_k$();
      var tmp0_safe_receiver = $application._v;
      data.appState = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dispose_rnbs4f_k$();
      $application._v = null;
      return Unit_getInstance();
    };
  }
  function startApplication$lambda_0($application, $state, $builder) {
    return function (it) {
      $application._v = startApplication$start($builder, $state);
      return Unit_getInstance();
    };
  }
  function ModuleInitializer() {
  }
  function CoreModule() {
    CoreModule_instance = this;
  }
  protoOf(CoreModule).initialize_o9rygw_k$ = function () {
    require('kvision-assets/css/style.css');
  };
  var CoreModule_instance;
  function CoreModule_getInstance() {
    if (CoreModule_instance == null)
      new CoreModule();
    return CoreModule_instance;
  }
  function _get_sdPatch__qvmy62($this) {
    return $this.sdPatch_1;
  }
  function _get_sdVirtualize__hi6gvl($this) {
    return $this.sdVirtualize_1;
  }
  function _get_virtualizeCache__n6zwx4($this) {
    return $this.virtualizeCache_1;
  }
  function KVManager() {
    KVManager_instance = this;
    this.splitjs_1 = require('split.js').default;
    this.fecha_1 = require('fecha').default;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [get_classModule(), get_attributesModule(), get_propsModule(), get_styleModule(), get_eventListenersModule()];
    tmp.sdPatch_1 = init(tmp$ret$2);
    this.sdVirtualize_1 = require('@rjaros/snabbdom-virtualize/strings').default;
    this.virtualizeCache_1 = {};
  }
  protoOf(KVManager).get_splitjs_qv7xpt_k$ = function () {
    return this.splitjs_1;
  };
  protoOf(KVManager).get_fecha_8fyu3t_k$ = function () {
    return this.fecha_1;
  };
  protoOf(KVManager).patch_qexiis_k$ = function (id, vnode) {
    var container = document.getElementById(id);
    if (container == null)
      null;
    else {
      clear(container);
    }
    return this.sdPatch_1(container, vnode);
  };
  protoOf(KVManager).patch_yfthds_k$ = function (element, vnode) {
    return this.sdPatch_1(element, vnode);
  };
  protoOf(KVManager).patch_5fv7el_k$ = function (oldVNode, newVNode) {
    return this.sdPatch_1(oldVNode, newVNode);
  };
  protoOf(KVManager).virtualize_d7cntb_k$ = function (html) {
    var node = this.virtualizeCache_1[html];
    var tmp;
    if (node != null) {
      tmp = JSON.parse(JSON.stringify(node));
    } else {
      var newNode = this.sdVirtualize_1(html);
      this.virtualizeCache_1[html] = newNode;
      tmp = newNode;
    }
    return tmp;
  };
  var KVManager_instance;
  function KVManager_getInstance() {
    if (KVManager_instance == null)
      new KVManager();
    return KVManager_instance;
  }
  function buildAttributeSet(delegate) {
    // Inline function 'kotlin.also' call
    var this_0 = new AttributeSetBuilderImpl();
    // Inline function 'io.kvision.core.buildAttributeSet.<anonymous>' call
    delegate(this_0);
    return this_0.get_attributes_dgqof4_k$();
  }
  function AttributeSetBuilder() {
  }
  function _get__attributes__by08kb($this) {
    return $this._attributes_1;
  }
  function AttributeSetBuilderImpl() {
    this._attributes_1 = {};
  }
  protoOf(AttributeSetBuilderImpl).get_attributes_dgqof4_k$ = function () {
    return Object.assign({}, this._attributes_1);
  };
  protoOf(AttributeSetBuilderImpl).add_lbri6p_k$ = function (name, value) {
    this._attributes_1[name] = value;
  };
  function ClassSetBuilder() {
  }
  function buildClassSet(delegate) {
    // Inline function 'kotlin.also' call
    var this_0 = new ClassSetBuilderImpl();
    // Inline function 'io.kvision.core.buildClassSet.<anonymous>' call
    delegate(this_0);
    return this_0.get_classes_fds01p_k$();
  }
  function _get__classes__xkpovw($this) {
    return $this._classes_1;
  }
  function ClassSetBuilderImpl() {
    this._classes_1 = {};
  }
  protoOf(ClassSetBuilderImpl).get_classes_fds01p_k$ = function () {
    return Object.assign({}, this._classes_1);
  };
  protoOf(ClassSetBuilderImpl).add_udnk2x_k$ = function (value) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(value) > 0) {
      this._classes_1[value] = true;
    }
  };
  protoOf(ClassSetBuilderImpl).addAll_kmiuje_k$ = function (values) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = values.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.core.ClassSetBuilderImpl.addAll.<anonymous>' call
      this.add_udnk2x_k$(element);
    }
  };
  function Component() {
  }
  function Container() {
  }
  var FlexDirection_ROW_instance;
  var FlexDirection_ROWREV_instance;
  var FlexDirection_COLUMN_instance;
  var FlexDirection_COLUMNREV_instance;
  function values() {
    return [FlexDirection_ROW_getInstance(), FlexDirection_ROWREV_getInstance(), FlexDirection_COLUMN_getInstance(), FlexDirection_COLUMNREV_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'ROW':
        return FlexDirection_ROW_getInstance();
      case 'ROWREV':
        return FlexDirection_ROWREV_getInstance();
      case 'COLUMN':
        return FlexDirection_COLUMN_getInstance();
      case 'COLUMNREV':
        return FlexDirection_COLUMNREV_getInstance();
      default:
        FlexDirection_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var FlexDirection_entriesInitialized;
  function FlexDirection_initEntries() {
    if (FlexDirection_entriesInitialized)
      return Unit_getInstance();
    FlexDirection_entriesInitialized = true;
    FlexDirection_ROW_instance = new FlexDirection('ROW', 0, 'row');
    FlexDirection_ROWREV_instance = new FlexDirection('ROWREV', 1, 'row-reverse');
    FlexDirection_COLUMN_instance = new FlexDirection('COLUMN', 2, 'column');
    FlexDirection_COLUMNREV_instance = new FlexDirection('COLUMNREV', 3, 'column-reverse');
  }
  var $ENTRIES;
  function FlexDirection(name, ordinal, dir) {
    Enum.call(this, name, ordinal);
    this.dir_1 = dir;
  }
  protoOf(FlexDirection).get_dir_nrok3d_k$ = function () {
    return this.dir_1;
  };
  var TextTransform_NONE_instance;
  var TextTransform_CAPITALIZE_instance;
  var TextTransform_UPPERCASE_instance;
  var TextTransform_LOWERCASE_instance;
  var TextTransform_INITIAL_instance;
  var TextTransform_INHERIT_instance;
  function values_0() {
    return [TextTransform_NONE_getInstance(), TextTransform_CAPITALIZE_getInstance(), TextTransform_UPPERCASE_getInstance(), TextTransform_LOWERCASE_getInstance(), TextTransform_INITIAL_getInstance(), TextTransform_INHERIT_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'NONE':
        return TextTransform_NONE_getInstance();
      case 'CAPITALIZE':
        return TextTransform_CAPITALIZE_getInstance();
      case 'UPPERCASE':
        return TextTransform_UPPERCASE_getInstance();
      case 'LOWERCASE':
        return TextTransform_LOWERCASE_getInstance();
      case 'INITIAL':
        return TextTransform_INITIAL_getInstance();
      case 'INHERIT':
        return TextTransform_INHERIT_getInstance();
      default:
        TextTransform_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var TextTransform_entriesInitialized;
  function TextTransform_initEntries() {
    if (TextTransform_entriesInitialized)
      return Unit_getInstance();
    TextTransform_entriesInitialized = true;
    TextTransform_NONE_instance = new TextTransform('NONE', 0, 'none');
    TextTransform_CAPITALIZE_instance = new TextTransform('CAPITALIZE', 1, 'capitalize');
    TextTransform_UPPERCASE_instance = new TextTransform('UPPERCASE', 2, 'uppercase');
    TextTransform_LOWERCASE_instance = new TextTransform('LOWERCASE', 3, 'lowercase');
    TextTransform_INITIAL_instance = new TextTransform('INITIAL', 4, 'initial');
    TextTransform_INHERIT_instance = new TextTransform('INHERIT', 5, 'inherit');
  }
  var $ENTRIES_0;
  function TextTransform(name, ordinal, textTransform) {
    Enum.call(this, name, ordinal);
    this.textTransform_1 = textTransform;
  }
  protoOf(TextTransform).get_textTransform_5af2t_k$ = function () {
    return this.textTransform_1;
  };
  var PosFloat_NONE_instance;
  var PosFloat_LEFT_instance;
  var PosFloat_RIGHT_instance;
  var PosFloat_INITIAL_instance;
  var PosFloat_INHERIT_instance;
  function values_1() {
    return [PosFloat_NONE_getInstance(), PosFloat_LEFT_getInstance(), PosFloat_RIGHT_getInstance(), PosFloat_INITIAL_getInstance(), PosFloat_INHERIT_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'NONE':
        return PosFloat_NONE_getInstance();
      case 'LEFT':
        return PosFloat_LEFT_getInstance();
      case 'RIGHT':
        return PosFloat_RIGHT_getInstance();
      case 'INITIAL':
        return PosFloat_INITIAL_getInstance();
      case 'INHERIT':
        return PosFloat_INHERIT_getInstance();
      default:
        PosFloat_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var PosFloat_entriesInitialized;
  function PosFloat_initEntries() {
    if (PosFloat_entriesInitialized)
      return Unit_getInstance();
    PosFloat_entriesInitialized = true;
    PosFloat_NONE_instance = new PosFloat('NONE', 0, 'none');
    PosFloat_LEFT_instance = new PosFloat('LEFT', 1, 'left');
    PosFloat_RIGHT_instance = new PosFloat('RIGHT', 2, 'right');
    PosFloat_INITIAL_instance = new PosFloat('INITIAL', 3, 'initial');
    PosFloat_INHERIT_instance = new PosFloat('INHERIT', 4, 'inherit');
  }
  var $ENTRIES_1;
  function PosFloat(name, ordinal, posFloat) {
    Enum.call(this, name, ordinal);
    this.posFloat_1 = posFloat;
  }
  protoOf(PosFloat).get_posFloat_sslzy2_k$ = function () {
    return this.posFloat_1;
  };
  function _get_color__iw9cfm($this) {
    return $this.color_1;
  }
  function _get_image__g3aecq($this) {
    return $this.image_1;
  }
  function _get_positionX__17mbqa($this) {
    return $this.positionX_1;
  }
  function _get_positionY__17mbr5($this) {
    return $this.positionY_1;
  }
  function _get_sizeX__belfwm($this) {
    return $this.sizeX_1;
  }
  function _get_sizeY__belfvr($this) {
    return $this.sizeY_1;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function _get_repeat__f4ywxc($this) {
    return $this.repeat_1;
  }
  function _get_origin__hwq945($this) {
    return $this.origin_1;
  }
  function _get_clip__d4xce3($this) {
    return $this.clip_1;
  }
  function _get_attachment__rm2rwo($this) {
    return $this.attachment_1;
  }
  function Background(color, image, positionX, positionY, sizeX, sizeY, size, repeat, origin, clip, attachment) {
    color = color === VOID ? null : color;
    image = image === VOID ? null : image;
    positionX = positionX === VOID ? null : positionX;
    positionY = positionY === VOID ? null : positionY;
    sizeX = sizeX === VOID ? null : sizeX;
    sizeY = sizeY === VOID ? null : sizeY;
    size = size === VOID ? null : size;
    repeat = repeat === VOID ? null : repeat;
    origin = origin === VOID ? null : origin;
    clip = clip === VOID ? null : clip;
    attachment = attachment === VOID ? null : attachment;
    this.color_1 = color;
    this.image_1 = image;
    this.positionX_1 = positionX;
    this.positionY_1 = positionY;
    this.sizeX_1 = sizeX;
    this.sizeY_1 = sizeY;
    this.size_1 = size;
    this.repeat_1 = repeat;
    this.origin_1 = origin;
    this.clip_1 = clip;
    this.attachment_1 = attachment;
  }
  protoOf(Background).asString_fj7iig_k$ = function () {
    var tmp;
    if (this.image_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Background.asString.<anonymous>' call
      tmp = 'url(' + this.image_1 + ')';
    }
    var img = tmp;
    var tmp1_safe_receiver = this.positionX_1;
    var posX = tmp1_safe_receiver == null ? null : asString(tmp1_safe_receiver);
    var tmp2_safe_receiver = this.positionY_1;
    var posY = tmp2_safe_receiver == null ? null : asString(tmp2_safe_receiver);
    var tmp3_safe_receiver = this.sizeX_1;
    var sX = tmp3_safe_receiver == null ? null : asString(tmp3_safe_receiver);
    var tmp4_safe_receiver = this.sizeY_1;
    var sY = tmp4_safe_receiver == null ? null : asString(tmp4_safe_receiver);
    var tmp5_safe_receiver = this.color_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.asString_l3f38d_k$();
    var tmp_0 = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ' ';
    // Inline function 'kotlin.text.orEmpty' call
    var tmp_1 = tmp_0 + (img == null ? '' : img) + ' ';
    // Inline function 'kotlin.text.orEmpty' call
    var tmp_2 = tmp_1 + (posX == null ? '' : posX) + ' ';
    // Inline function 'kotlin.text.orEmpty' call
    var tmp_3 = tmp_2 + (posY == null ? '' : posY);
    var tmp_4;
    if (!(sX == null) || !(sY == null) || !(this.size_1 == null)) {
      var tmp_5 = !(posX == null) || !(posY == null) ? ' / ' : ' 0px 0px / ';
      // Inline function 'kotlin.text.orEmpty' call
      var tmp_6 = tmp_5 + (sX == null ? '' : sX) + ' ';
      // Inline function 'kotlin.text.orEmpty' call
      var tmp_7 = tmp_6 + (sY == null ? '' : sY) + ' ';
      var tmp6_safe_receiver = this.size_1;
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_elvis_lhs_0 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.size_1;
      tmp_4 = tmp_7 + (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0);
    } else {
      tmp_4 = '';
    }
    var tmp_8 = tmp_3 + tmp_4 + ' ';
    var tmp7_safe_receiver = this.repeat_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_1 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.repeat_1;
    var tmp_9 = tmp_8 + (tmp0_elvis_lhs_1 == null ? '' : tmp0_elvis_lhs_1) + ' ';
    var tmp8_safe_receiver = this.origin_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_2 = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.origin_1;
    var tmp_10 = tmp_9 + (tmp0_elvis_lhs_2 == null ? '' : tmp0_elvis_lhs_2) + ' ';
    var tmp9_safe_receiver = this.clip_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_3 = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.clip_1;
    var tmp_11 = tmp_10 + (tmp0_elvis_lhs_3 == null ? '' : tmp0_elvis_lhs_3) + ' ';
    var tmp10_safe_receiver = this.attachment_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_4 = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.attachment_1;
    return tmp_11 + (tmp0_elvis_lhs_4 == null ? '' : tmp0_elvis_lhs_4);
  };
  protoOf(Background).toString = function () {
    return this.asString_fj7iig_k$();
  };
  function _get_width__9isoj9($this) {
    return $this.width_1;
  }
  function _get_style__b8k6v4($this) {
    return $this.style_1;
  }
  function _get_color__iw9cfm_0($this) {
    return $this.color_1;
  }
  function Border(width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    this.width_1 = width;
    this.style_1 = style;
    this.color_1 = color;
  }
  protoOf(Border).asString_fj7iig_k$ = function () {
    var tmp0_safe_receiver = this.width_1;
    var w = tmp0_safe_receiver == null ? null : asString(tmp0_safe_receiver);
    // Inline function 'kotlin.text.orEmpty' call
    var tmp = (w == null ? '' : w) + ' ';
    var tmp1_safe_receiver = this.style_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.borderStyle_1;
    var tmp_0 = tmp + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ' ';
    var tmp2_safe_receiver = this.color_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.asString_l3f38d_k$();
    return tmp_0 + (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0);
  };
  protoOf(Border).toString = function () {
    return this.asString_fj7iig_k$();
  };
  var WordBreak_NORMAL_instance;
  var WordBreak_KEEPALL_instance;
  var WordBreak_BREAKALL_instance;
  function values_2() {
    return [WordBreak_NORMAL_getInstance(), WordBreak_KEEPALL_getInstance(), WordBreak_BREAKALL_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'NORMAL':
        return WordBreak_NORMAL_getInstance();
      case 'KEEPALL':
        return WordBreak_KEEPALL_getInstance();
      case 'BREAKALL':
        return WordBreak_BREAKALL_getInstance();
      default:
        WordBreak_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var WordBreak_entriesInitialized;
  function WordBreak_initEntries() {
    if (WordBreak_entriesInitialized)
      return Unit_getInstance();
    WordBreak_entriesInitialized = true;
    WordBreak_NORMAL_instance = new WordBreak('NORMAL', 0, 'normal');
    WordBreak_KEEPALL_instance = new WordBreak('KEEPALL', 1, 'keep-all');
    WordBreak_BREAKALL_instance = new WordBreak('BREAKALL', 2, 'break-all');
  }
  var $ENTRIES_2;
  function WordBreak(name, ordinal, wordBreak) {
    Enum.call(this, name, ordinal);
    this.wordBreak_1 = wordBreak;
  }
  protoOf(WordBreak).get_wordBreak_dj8qv5_k$ = function () {
    return this.wordBreak_1;
  };
  var VerticalAlign_BASELINE_instance;
  var VerticalAlign_SUB_instance;
  var VerticalAlign_SUPER_instance;
  var VerticalAlign_TOP_instance;
  var VerticalAlign_TEXTTOP_instance;
  var VerticalAlign_MIDDLE_instance;
  var VerticalAlign_BOTTOM_instance;
  var VerticalAlign_TEXTBOTTOM_instance;
  var VerticalAlign_INITIAL_instance;
  var VerticalAlign_INHERIT_instance;
  function values_3() {
    return [VerticalAlign_BASELINE_getInstance(), VerticalAlign_SUB_getInstance(), VerticalAlign_SUPER_getInstance(), VerticalAlign_TOP_getInstance(), VerticalAlign_TEXTTOP_getInstance(), VerticalAlign_MIDDLE_getInstance(), VerticalAlign_BOTTOM_getInstance(), VerticalAlign_TEXTBOTTOM_getInstance(), VerticalAlign_INITIAL_getInstance(), VerticalAlign_INHERIT_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'BASELINE':
        return VerticalAlign_BASELINE_getInstance();
      case 'SUB':
        return VerticalAlign_SUB_getInstance();
      case 'SUPER':
        return VerticalAlign_SUPER_getInstance();
      case 'TOP':
        return VerticalAlign_TOP_getInstance();
      case 'TEXTTOP':
        return VerticalAlign_TEXTTOP_getInstance();
      case 'MIDDLE':
        return VerticalAlign_MIDDLE_getInstance();
      case 'BOTTOM':
        return VerticalAlign_BOTTOM_getInstance();
      case 'TEXTBOTTOM':
        return VerticalAlign_TEXTBOTTOM_getInstance();
      case 'INITIAL':
        return VerticalAlign_INITIAL_getInstance();
      case 'INHERIT':
        return VerticalAlign_INHERIT_getInstance();
      default:
        VerticalAlign_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var VerticalAlign_entriesInitialized;
  function VerticalAlign_initEntries() {
    if (VerticalAlign_entriesInitialized)
      return Unit_getInstance();
    VerticalAlign_entriesInitialized = true;
    VerticalAlign_BASELINE_instance = new VerticalAlign('BASELINE', 0, 'baseline');
    VerticalAlign_SUB_instance = new VerticalAlign('SUB', 1, 'sub');
    VerticalAlign_SUPER_instance = new VerticalAlign('SUPER', 2, 'super');
    VerticalAlign_TOP_instance = new VerticalAlign('TOP', 3, 'top');
    VerticalAlign_TEXTTOP_instance = new VerticalAlign('TEXTTOP', 4, 'text-top');
    VerticalAlign_MIDDLE_instance = new VerticalAlign('MIDDLE', 5, 'middle');
    VerticalAlign_BOTTOM_instance = new VerticalAlign('BOTTOM', 6, 'bottom');
    VerticalAlign_TEXTBOTTOM_instance = new VerticalAlign('TEXTBOTTOM', 7, 'text-bottom');
    VerticalAlign_INITIAL_instance = new VerticalAlign('INITIAL', 8, 'initial');
    VerticalAlign_INHERIT_instance = new VerticalAlign('INHERIT', 9, 'inherit');
  }
  var $ENTRIES_3;
  function VerticalAlign(name, ordinal, verticalAlign) {
    Enum.call(this, name, ordinal);
    this.verticalAlign_1 = verticalAlign;
  }
  protoOf(VerticalAlign).get_verticalAlign_hwlb39_k$ = function () {
    return this.verticalAlign_1;
  };
  var FontWeight_NORMAL_instance;
  var FontWeight_BOLD_instance;
  var FontWeight_BOLDER_instance;
  var FontWeight_LIGHTER_instance;
  var FontWeight_INITIAL_instance;
  var FontWeight_INHERIT_instance;
  function values_4() {
    return [FontWeight_NORMAL_getInstance(), FontWeight_BOLD_getInstance(), FontWeight_BOLDER_getInstance(), FontWeight_LIGHTER_getInstance(), FontWeight_INITIAL_getInstance(), FontWeight_INHERIT_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'NORMAL':
        return FontWeight_NORMAL_getInstance();
      case 'BOLD':
        return FontWeight_BOLD_getInstance();
      case 'BOLDER':
        return FontWeight_BOLDER_getInstance();
      case 'LIGHTER':
        return FontWeight_LIGHTER_getInstance();
      case 'INITIAL':
        return FontWeight_INITIAL_getInstance();
      case 'INHERIT':
        return FontWeight_INHERIT_getInstance();
      default:
        FontWeight_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var FontWeight_entriesInitialized;
  function FontWeight_initEntries() {
    if (FontWeight_entriesInitialized)
      return Unit_getInstance();
    FontWeight_entriesInitialized = true;
    FontWeight_NORMAL_instance = new FontWeight('NORMAL', 0, 'normal');
    FontWeight_BOLD_instance = new FontWeight('BOLD', 1, 'bold');
    FontWeight_BOLDER_instance = new FontWeight('BOLDER', 2, 'bolder');
    FontWeight_LIGHTER_instance = new FontWeight('LIGHTER', 3, 'lighter');
    FontWeight_INITIAL_instance = new FontWeight('INITIAL', 4, 'initial');
    FontWeight_INHERIT_instance = new FontWeight('INHERIT', 5, 'inherit');
  }
  var $ENTRIES_4;
  function FontWeight(name, ordinal, fontWeight) {
    Enum.call(this, name, ordinal);
    this.fontWeight_1 = fontWeight;
  }
  protoOf(FontWeight).get_fontWeight_gi02it_k$ = function () {
    return this.fontWeight_1;
  };
  var UnicodeBidi_NORMAL_instance;
  var UnicodeBidi_EMBED_instance;
  var UnicodeBidi_BIDIOVERRIDE_instance;
  var UnicodeBidi_INITIAL_instance;
  var UnicodeBidi_INHERIT_instance;
  function values_5() {
    return [UnicodeBidi_NORMAL_getInstance(), UnicodeBidi_EMBED_getInstance(), UnicodeBidi_BIDIOVERRIDE_getInstance(), UnicodeBidi_INITIAL_getInstance(), UnicodeBidi_INHERIT_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'NORMAL':
        return UnicodeBidi_NORMAL_getInstance();
      case 'EMBED':
        return UnicodeBidi_EMBED_getInstance();
      case 'BIDIOVERRIDE':
        return UnicodeBidi_BIDIOVERRIDE_getInstance();
      case 'INITIAL':
        return UnicodeBidi_INITIAL_getInstance();
      case 'INHERIT':
        return UnicodeBidi_INHERIT_getInstance();
      default:
        UnicodeBidi_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var UnicodeBidi_entriesInitialized;
  function UnicodeBidi_initEntries() {
    if (UnicodeBidi_entriesInitialized)
      return Unit_getInstance();
    UnicodeBidi_entriesInitialized = true;
    UnicodeBidi_NORMAL_instance = new UnicodeBidi('NORMAL', 0, 'normal');
    UnicodeBidi_EMBED_instance = new UnicodeBidi('EMBED', 1, 'embed');
    UnicodeBidi_BIDIOVERRIDE_instance = new UnicodeBidi('BIDIOVERRIDE', 2, 'bidi-override');
    UnicodeBidi_INITIAL_instance = new UnicodeBidi('INITIAL', 3, 'initial');
    UnicodeBidi_INHERIT_instance = new UnicodeBidi('INHERIT', 4, 'inherit');
  }
  var $ENTRIES_5;
  function UnicodeBidi(name, ordinal, unicodeBidi) {
    Enum.call(this, name, ordinal);
    this.unicodeBidi_1 = unicodeBidi;
  }
  protoOf(UnicodeBidi).get_unicodeBidi_tfx9hn_k$ = function () {
    return this.unicodeBidi_1;
  };
  function _get_width__9isoj9_0($this) {
    return $this.width_1;
  }
  function _get_style__b8k6v4_0($this) {
    return $this.style_1;
  }
  function _get_color__iw9cfm_1($this) {
    return $this.color_1;
  }
  function Outline(width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    this.width_1 = width;
    this.style_1 = style;
    this.color_1 = color;
  }
  protoOf(Outline).asString_fj7iig_k$ = function () {
    var tmp0_safe_receiver = this.width_1;
    var w = tmp0_safe_receiver == null ? null : asString(tmp0_safe_receiver);
    // Inline function 'kotlin.text.orEmpty' call
    var tmp = (w == null ? '' : w) + ' ';
    var tmp1_safe_receiver = this.style_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.outlineStyle_1;
    var tmp_0 = tmp + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ' ';
    var tmp2_safe_receiver = this.color_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.asString_l3f38d_k$();
    return tmp_0 + (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0);
  };
  protoOf(Outline).toString = function () {
    return this.asString_fj7iig_k$();
  };
  var Direction_LTR_instance;
  var Direction_RTL_instance;
  var Direction_INITIAL_instance;
  var Direction_INHERIT_instance;
  function values_6() {
    return [Direction_LTR_getInstance(), Direction_RTL_getInstance(), Direction_INITIAL_getInstance(), Direction_INHERIT_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'LTR':
        return Direction_LTR_getInstance();
      case 'RTL':
        return Direction_RTL_getInstance();
      case 'INITIAL':
        return Direction_INITIAL_getInstance();
      case 'INHERIT':
        return Direction_INHERIT_getInstance();
      default:
        Direction_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_LTR_instance = new Direction('LTR', 0, 'ltr');
    Direction_RTL_instance = new Direction('RTL', 1, 'rtl');
    Direction_INITIAL_instance = new Direction('INITIAL', 2, 'initial');
    Direction_INHERIT_instance = new Direction('INHERIT', 3, 'inherit');
  }
  var $ENTRIES_6;
  function Direction(name, ordinal, direction) {
    Enum.call(this, name, ordinal);
    this.direction_1 = direction;
  }
  protoOf(Direction).get_direction_teeu7f_k$ = function () {
    return this.direction_1;
  };
  var BorderStyle_NONE_instance;
  var BorderStyle_HIDDEN_instance;
  var BorderStyle_DOTTED_instance;
  var BorderStyle_DASHED_instance;
  var BorderStyle_SOLID_instance;
  var BorderStyle_DOUBLE_instance;
  var BorderStyle_GROOVE_instance;
  var BorderStyle_RIDGE_instance;
  var BorderStyle_INSET_instance;
  var BorderStyle_OUTSET_instance;
  var BorderStyle_INITIAL_instance;
  var BorderStyle_INHERIT_instance;
  var BorderStyle_UNSET_instance;
  function values_7() {
    return [BorderStyle_NONE_getInstance(), BorderStyle_HIDDEN_getInstance(), BorderStyle_DOTTED_getInstance(), BorderStyle_DASHED_getInstance(), BorderStyle_SOLID_getInstance(), BorderStyle_DOUBLE_getInstance(), BorderStyle_GROOVE_getInstance(), BorderStyle_RIDGE_getInstance(), BorderStyle_INSET_getInstance(), BorderStyle_OUTSET_getInstance(), BorderStyle_INITIAL_getInstance(), BorderStyle_INHERIT_getInstance(), BorderStyle_UNSET_getInstance()];
  }
  function valueOf_7(value) {
    switch (value) {
      case 'NONE':
        return BorderStyle_NONE_getInstance();
      case 'HIDDEN':
        return BorderStyle_HIDDEN_getInstance();
      case 'DOTTED':
        return BorderStyle_DOTTED_getInstance();
      case 'DASHED':
        return BorderStyle_DASHED_getInstance();
      case 'SOLID':
        return BorderStyle_SOLID_getInstance();
      case 'DOUBLE':
        return BorderStyle_DOUBLE_getInstance();
      case 'GROOVE':
        return BorderStyle_GROOVE_getInstance();
      case 'RIDGE':
        return BorderStyle_RIDGE_getInstance();
      case 'INSET':
        return BorderStyle_INSET_getInstance();
      case 'OUTSET':
        return BorderStyle_OUTSET_getInstance();
      case 'INITIAL':
        return BorderStyle_INITIAL_getInstance();
      case 'INHERIT':
        return BorderStyle_INHERIT_getInstance();
      case 'UNSET':
        return BorderStyle_UNSET_getInstance();
      default:
        BorderStyle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_7() {
    if ($ENTRIES_7 == null)
      $ENTRIES_7 = enumEntries(values_7());
    return $ENTRIES_7;
  }
  var BorderStyle_entriesInitialized;
  function BorderStyle_initEntries() {
    if (BorderStyle_entriesInitialized)
      return Unit_getInstance();
    BorderStyle_entriesInitialized = true;
    BorderStyle_NONE_instance = new BorderStyle('NONE', 0, 'none');
    BorderStyle_HIDDEN_instance = new BorderStyle('HIDDEN', 1, 'hidden');
    BorderStyle_DOTTED_instance = new BorderStyle('DOTTED', 2, 'dotted');
    BorderStyle_DASHED_instance = new BorderStyle('DASHED', 3, 'dashed');
    BorderStyle_SOLID_instance = new BorderStyle('SOLID', 4, 'solid');
    BorderStyle_DOUBLE_instance = new BorderStyle('DOUBLE', 5, 'double');
    BorderStyle_GROOVE_instance = new BorderStyle('GROOVE', 6, 'groove');
    BorderStyle_RIDGE_instance = new BorderStyle('RIDGE', 7, 'ridge');
    BorderStyle_INSET_instance = new BorderStyle('INSET', 8, 'inset');
    BorderStyle_OUTSET_instance = new BorderStyle('OUTSET', 9, 'outset');
    BorderStyle_INITIAL_instance = new BorderStyle('INITIAL', 10, 'initial');
    BorderStyle_INHERIT_instance = new BorderStyle('INHERIT', 11, 'inherit');
    BorderStyle_UNSET_instance = new BorderStyle('UNSET', 12, 'unset');
  }
  var $ENTRIES_7;
  function BorderStyle(name, ordinal, borderStyle) {
    Enum.call(this, name, ordinal);
    this.borderStyle_1 = borderStyle;
  }
  protoOf(BorderStyle).get_borderStyle_53e13l_k$ = function () {
    return this.borderStyle_1;
  };
  var Display_INLINE_instance;
  var Display_BLOCK_instance;
  var Display_FLEX_instance;
  var Display_GRID_instance;
  var Display_INLINEBLOCK_instance;
  var Display_INLINEFLEX_instance;
  var Display_INLINEGRID_instance;
  var Display_INLINETABLE_instance;
  var Display_LISTITEM_instance;
  var Display_RUNIN_instance;
  var Display_TABLE_instance;
  var Display_TABLECAPTION_instance;
  var Display_TABLECOLUMNGROUP_instance;
  var Display_TABLEHEADERGROUP_instance;
  var Display_TABLEFOOTERGROUP_instance;
  var Display_TABLEROWGROUP_instance;
  var Display_TABLECELL_instance;
  var Display_TABLECOLUMN_instance;
  var Display_TABLEROW_instance;
  var Display_CONTENTS_instance;
  var Display_NONE_instance;
  var Display_INITIAL_instance;
  var Display_INHERIT_instance;
  function values_8() {
    return [Display_INLINE_getInstance(), Display_BLOCK_getInstance(), Display_FLEX_getInstance(), Display_GRID_getInstance(), Display_INLINEBLOCK_getInstance(), Display_INLINEFLEX_getInstance(), Display_INLINEGRID_getInstance(), Display_INLINETABLE_getInstance(), Display_LISTITEM_getInstance(), Display_RUNIN_getInstance(), Display_TABLE_getInstance(), Display_TABLECAPTION_getInstance(), Display_TABLECOLUMNGROUP_getInstance(), Display_TABLEHEADERGROUP_getInstance(), Display_TABLEFOOTERGROUP_getInstance(), Display_TABLEROWGROUP_getInstance(), Display_TABLECELL_getInstance(), Display_TABLECOLUMN_getInstance(), Display_TABLEROW_getInstance(), Display_CONTENTS_getInstance(), Display_NONE_getInstance(), Display_INITIAL_getInstance(), Display_INHERIT_getInstance()];
  }
  function valueOf_8(value) {
    switch (value) {
      case 'INLINE':
        return Display_INLINE_getInstance();
      case 'BLOCK':
        return Display_BLOCK_getInstance();
      case 'FLEX':
        return Display_FLEX_getInstance();
      case 'GRID':
        return Display_GRID_getInstance();
      case 'INLINEBLOCK':
        return Display_INLINEBLOCK_getInstance();
      case 'INLINEFLEX':
        return Display_INLINEFLEX_getInstance();
      case 'INLINEGRID':
        return Display_INLINEGRID_getInstance();
      case 'INLINETABLE':
        return Display_INLINETABLE_getInstance();
      case 'LISTITEM':
        return Display_LISTITEM_getInstance();
      case 'RUNIN':
        return Display_RUNIN_getInstance();
      case 'TABLE':
        return Display_TABLE_getInstance();
      case 'TABLECAPTION':
        return Display_TABLECAPTION_getInstance();
      case 'TABLECOLUMNGROUP':
        return Display_TABLECOLUMNGROUP_getInstance();
      case 'TABLEHEADERGROUP':
        return Display_TABLEHEADERGROUP_getInstance();
      case 'TABLEFOOTERGROUP':
        return Display_TABLEFOOTERGROUP_getInstance();
      case 'TABLEROWGROUP':
        return Display_TABLEROWGROUP_getInstance();
      case 'TABLECELL':
        return Display_TABLECELL_getInstance();
      case 'TABLECOLUMN':
        return Display_TABLECOLUMN_getInstance();
      case 'TABLEROW':
        return Display_TABLEROW_getInstance();
      case 'CONTENTS':
        return Display_CONTENTS_getInstance();
      case 'NONE':
        return Display_NONE_getInstance();
      case 'INITIAL':
        return Display_INITIAL_getInstance();
      case 'INHERIT':
        return Display_INHERIT_getInstance();
      default:
        Display_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_8() {
    if ($ENTRIES_8 == null)
      $ENTRIES_8 = enumEntries(values_8());
    return $ENTRIES_8;
  }
  var Display_entriesInitialized;
  function Display_initEntries() {
    if (Display_entriesInitialized)
      return Unit_getInstance();
    Display_entriesInitialized = true;
    Display_INLINE_instance = new Display('INLINE', 0, 'inline');
    Display_BLOCK_instance = new Display('BLOCK', 1, 'block');
    Display_FLEX_instance = new Display('FLEX', 2, 'flex');
    Display_GRID_instance = new Display('GRID', 3, 'grid');
    Display_INLINEBLOCK_instance = new Display('INLINEBLOCK', 4, 'inline-block');
    Display_INLINEFLEX_instance = new Display('INLINEFLEX', 5, 'inline-flex');
    Display_INLINEGRID_instance = new Display('INLINEGRID', 6, 'inline-grid');
    Display_INLINETABLE_instance = new Display('INLINETABLE', 7, 'inline-table');
    Display_LISTITEM_instance = new Display('LISTITEM', 8, 'list-item');
    Display_RUNIN_instance = new Display('RUNIN', 9, 'run-in');
    Display_TABLE_instance = new Display('TABLE', 10, 'table');
    Display_TABLECAPTION_instance = new Display('TABLECAPTION', 11, 'table-caption');
    Display_TABLECOLUMNGROUP_instance = new Display('TABLECOLUMNGROUP', 12, 'table-column-group');
    Display_TABLEHEADERGROUP_instance = new Display('TABLEHEADERGROUP', 13, 'table-header-group');
    Display_TABLEFOOTERGROUP_instance = new Display('TABLEFOOTERGROUP', 14, 'table-footer-group');
    Display_TABLEROWGROUP_instance = new Display('TABLEROWGROUP', 15, 'table-row-group');
    Display_TABLECELL_instance = new Display('TABLECELL', 16, 'table-cell');
    Display_TABLECOLUMN_instance = new Display('TABLECOLUMN', 17, 'table-column');
    Display_TABLEROW_instance = new Display('TABLEROW', 18, 'table-row');
    Display_CONTENTS_instance = new Display('CONTENTS', 19, 'contents');
    Display_NONE_instance = new Display('NONE', 20, 'none');
    Display_INITIAL_instance = new Display('INITIAL', 21, 'initial');
    Display_INHERIT_instance = new Display('INHERIT', 22, 'inherit');
  }
  var $ENTRIES_8;
  function Display(name, ordinal, display) {
    Enum.call(this, name, ordinal);
    this.display_1 = display;
  }
  protoOf(Display).get_display_nrp3e6_k$ = function () {
    return this.display_1;
  };
  var ListStyleType_DISC_instance;
  var ListStyleType_CIRCLE_instance;
  var ListStyleType_SQUARE_instance;
  var ListStyleType_DECIMAL_instance;
  var ListStyleType_CJKDECIMAL_instance;
  var ListStyleType_DECIMALLEADINGZERO_instance;
  var ListStyleType_LOWERROMAN_instance;
  var ListStyleType_UPPERROMAN_instance;
  var ListStyleType_LOWERGREEK_instance;
  var ListStyleType_LOWERLATIN_instance;
  var ListStyleType_UPPERALPHA_instance;
  var ListStyleType_LOWERALPHA_instance;
  var ListStyleType_UPPERLATIN_instance;
  var ListStyleType_ARABICINDIC_instance;
  var ListStyleType_ARMENIAN_instance;
  var ListStyleType_BENGALI_instance;
  var ListStyleType_CAMBODIAN_instance;
  var ListStyleType_CJKIDEOGRAPHIC_instance;
  var ListStyleType_GEORGIAN_instance;
  var ListStyleType_HEBREW_instance;
  var ListStyleType_HIRAGANA_instance;
  var ListStyleType_HIRAGANAIROHA_instance;
  var ListStyleType_JAPANESEFORMAL_instance;
  var ListStyleType_JAPANESEINFORMAL_instance;
  var ListStyleType_KATAKANA_instance;
  var ListStyleType_KATAKANAIROHA_instance;
  var ListStyleType_NONE_instance;
  var ListStyleType_INITIAL_instance;
  var ListStyleType_INHERIT_instance;
  function values_9() {
    return [ListStyleType_DISC_getInstance(), ListStyleType_CIRCLE_getInstance(), ListStyleType_SQUARE_getInstance(), ListStyleType_DECIMAL_getInstance(), ListStyleType_CJKDECIMAL_getInstance(), ListStyleType_DECIMALLEADINGZERO_getInstance(), ListStyleType_LOWERROMAN_getInstance(), ListStyleType_UPPERROMAN_getInstance(), ListStyleType_LOWERGREEK_getInstance(), ListStyleType_LOWERLATIN_getInstance(), ListStyleType_UPPERALPHA_getInstance(), ListStyleType_LOWERALPHA_getInstance(), ListStyleType_UPPERLATIN_getInstance(), ListStyleType_ARABICINDIC_getInstance(), ListStyleType_ARMENIAN_getInstance(), ListStyleType_BENGALI_getInstance(), ListStyleType_CAMBODIAN_getInstance(), ListStyleType_CJKIDEOGRAPHIC_getInstance(), ListStyleType_GEORGIAN_getInstance(), ListStyleType_HEBREW_getInstance(), ListStyleType_HIRAGANA_getInstance(), ListStyleType_HIRAGANAIROHA_getInstance(), ListStyleType_JAPANESEFORMAL_getInstance(), ListStyleType_JAPANESEINFORMAL_getInstance(), ListStyleType_KATAKANA_getInstance(), ListStyleType_KATAKANAIROHA_getInstance(), ListStyleType_NONE_getInstance(), ListStyleType_INITIAL_getInstance(), ListStyleType_INHERIT_getInstance()];
  }
  function valueOf_9(value) {
    switch (value) {
      case 'DISC':
        return ListStyleType_DISC_getInstance();
      case 'CIRCLE':
        return ListStyleType_CIRCLE_getInstance();
      case 'SQUARE':
        return ListStyleType_SQUARE_getInstance();
      case 'DECIMAL':
        return ListStyleType_DECIMAL_getInstance();
      case 'CJKDECIMAL':
        return ListStyleType_CJKDECIMAL_getInstance();
      case 'DECIMALLEADINGZERO':
        return ListStyleType_DECIMALLEADINGZERO_getInstance();
      case 'LOWERROMAN':
        return ListStyleType_LOWERROMAN_getInstance();
      case 'UPPERROMAN':
        return ListStyleType_UPPERROMAN_getInstance();
      case 'LOWERGREEK':
        return ListStyleType_LOWERGREEK_getInstance();
      case 'LOWERLATIN':
        return ListStyleType_LOWERLATIN_getInstance();
      case 'UPPERALPHA':
        return ListStyleType_UPPERALPHA_getInstance();
      case 'LOWERALPHA':
        return ListStyleType_LOWERALPHA_getInstance();
      case 'UPPERLATIN':
        return ListStyleType_UPPERLATIN_getInstance();
      case 'ARABICINDIC':
        return ListStyleType_ARABICINDIC_getInstance();
      case 'ARMENIAN':
        return ListStyleType_ARMENIAN_getInstance();
      case 'BENGALI':
        return ListStyleType_BENGALI_getInstance();
      case 'CAMBODIAN':
        return ListStyleType_CAMBODIAN_getInstance();
      case 'CJKIDEOGRAPHIC':
        return ListStyleType_CJKIDEOGRAPHIC_getInstance();
      case 'GEORGIAN':
        return ListStyleType_GEORGIAN_getInstance();
      case 'HEBREW':
        return ListStyleType_HEBREW_getInstance();
      case 'HIRAGANA':
        return ListStyleType_HIRAGANA_getInstance();
      case 'HIRAGANAIROHA':
        return ListStyleType_HIRAGANAIROHA_getInstance();
      case 'JAPANESEFORMAL':
        return ListStyleType_JAPANESEFORMAL_getInstance();
      case 'JAPANESEINFORMAL':
        return ListStyleType_JAPANESEINFORMAL_getInstance();
      case 'KATAKANA':
        return ListStyleType_KATAKANA_getInstance();
      case 'KATAKANAIROHA':
        return ListStyleType_KATAKANAIROHA_getInstance();
      case 'NONE':
        return ListStyleType_NONE_getInstance();
      case 'INITIAL':
        return ListStyleType_INITIAL_getInstance();
      case 'INHERIT':
        return ListStyleType_INHERIT_getInstance();
      default:
        ListStyleType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_9() {
    if ($ENTRIES_9 == null)
      $ENTRIES_9 = enumEntries(values_9());
    return $ENTRIES_9;
  }
  var ListStyleType_entriesInitialized;
  function ListStyleType_initEntries() {
    if (ListStyleType_entriesInitialized)
      return Unit_getInstance();
    ListStyleType_entriesInitialized = true;
    ListStyleType_DISC_instance = new ListStyleType('DISC', 0, 'disc');
    ListStyleType_CIRCLE_instance = new ListStyleType('CIRCLE', 1, 'circle');
    ListStyleType_SQUARE_instance = new ListStyleType('SQUARE', 2, 'square');
    ListStyleType_DECIMAL_instance = new ListStyleType('DECIMAL', 3, 'decimal');
    ListStyleType_CJKDECIMAL_instance = new ListStyleType('CJKDECIMAL', 4, 'cjk-decimal');
    ListStyleType_DECIMALLEADINGZERO_instance = new ListStyleType('DECIMALLEADINGZERO', 5, 'decimal-leading-zero');
    ListStyleType_LOWERROMAN_instance = new ListStyleType('LOWERROMAN', 6, 'lower-roman');
    ListStyleType_UPPERROMAN_instance = new ListStyleType('UPPERROMAN', 7, 'upper-roman');
    ListStyleType_LOWERGREEK_instance = new ListStyleType('LOWERGREEK', 8, 'lower-greek');
    ListStyleType_LOWERLATIN_instance = new ListStyleType('LOWERLATIN', 9, 'lower-latin');
    ListStyleType_UPPERALPHA_instance = new ListStyleType('UPPERALPHA', 10, 'upper-alpha');
    ListStyleType_LOWERALPHA_instance = new ListStyleType('LOWERALPHA', 11, 'lower-alpha');
    ListStyleType_UPPERLATIN_instance = new ListStyleType('UPPERLATIN', 12, 'upper-latin');
    ListStyleType_ARABICINDIC_instance = new ListStyleType('ARABICINDIC', 13, 'arabic-indic');
    ListStyleType_ARMENIAN_instance = new ListStyleType('ARMENIAN', 14, 'armenian');
    ListStyleType_BENGALI_instance = new ListStyleType('BENGALI', 15, 'bengali');
    ListStyleType_CAMBODIAN_instance = new ListStyleType('CAMBODIAN', 16, 'cambodian');
    ListStyleType_CJKIDEOGRAPHIC_instance = new ListStyleType('CJKIDEOGRAPHIC', 17, 'cjk-ideographic');
    ListStyleType_GEORGIAN_instance = new ListStyleType('GEORGIAN', 18, 'georgian');
    ListStyleType_HEBREW_instance = new ListStyleType('HEBREW', 19, 'hebrew');
    ListStyleType_HIRAGANA_instance = new ListStyleType('HIRAGANA', 20, 'hiragana');
    ListStyleType_HIRAGANAIROHA_instance = new ListStyleType('HIRAGANAIROHA', 21, 'hiragana-iroha');
    ListStyleType_JAPANESEFORMAL_instance = new ListStyleType('JAPANESEFORMAL', 22, 'japanese-formal');
    ListStyleType_JAPANESEINFORMAL_instance = new ListStyleType('JAPANESEINFORMAL', 23, 'japanese-informal');
    ListStyleType_KATAKANA_instance = new ListStyleType('KATAKANA', 24, 'katakana');
    ListStyleType_KATAKANAIROHA_instance = new ListStyleType('KATAKANAIROHA', 25, 'katakana-iroha');
    ListStyleType_NONE_instance = new ListStyleType('NONE', 26, 'none');
    ListStyleType_INITIAL_instance = new ListStyleType('INITIAL', 27, 'initial');
    ListStyleType_INHERIT_instance = new ListStyleType('INHERIT', 28, 'inherit');
  }
  var $ENTRIES_9;
  function ListStyleType(name, ordinal, type) {
    Enum.call(this, name, ordinal);
    this.type_1 = type;
  }
  protoOf(ListStyleType).get_type_t5wobc_k$ = function () {
    return this.type_1;
  };
  var Overflow_VISIBLE_instance;
  var Overflow_HIDDEN_instance;
  var Overflow_SCROLL_instance;
  var Overflow_AUTO_instance;
  var Overflow_INITIAL_instance;
  var Overflow_INHERIT_instance;
  function values_10() {
    return [Overflow_VISIBLE_getInstance(), Overflow_HIDDEN_getInstance(), Overflow_SCROLL_getInstance(), Overflow_AUTO_getInstance(), Overflow_INITIAL_getInstance(), Overflow_INHERIT_getInstance()];
  }
  function valueOf_10(value) {
    switch (value) {
      case 'VISIBLE':
        return Overflow_VISIBLE_getInstance();
      case 'HIDDEN':
        return Overflow_HIDDEN_getInstance();
      case 'SCROLL':
        return Overflow_SCROLL_getInstance();
      case 'AUTO':
        return Overflow_AUTO_getInstance();
      case 'INITIAL':
        return Overflow_INITIAL_getInstance();
      case 'INHERIT':
        return Overflow_INHERIT_getInstance();
      default:
        Overflow_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_10() {
    if ($ENTRIES_10 == null)
      $ENTRIES_10 = enumEntries(values_10());
    return $ENTRIES_10;
  }
  var Overflow_entriesInitialized;
  function Overflow_initEntries() {
    if (Overflow_entriesInitialized)
      return Unit_getInstance();
    Overflow_entriesInitialized = true;
    Overflow_VISIBLE_instance = new Overflow('VISIBLE', 0, 'visible');
    Overflow_HIDDEN_instance = new Overflow('HIDDEN', 1, 'hidden');
    Overflow_SCROLL_instance = new Overflow('SCROLL', 2, 'scroll');
    Overflow_AUTO_instance = new Overflow('AUTO', 3, 'auto');
    Overflow_INITIAL_instance = new Overflow('INITIAL', 4, 'initial');
    Overflow_INHERIT_instance = new Overflow('INHERIT', 5, 'inherit');
  }
  var $ENTRIES_10;
  function Overflow(name, ordinal, overflow) {
    Enum.call(this, name, ordinal);
    this.overflow_1 = overflow;
  }
  protoOf(Overflow).get_overflow_2asodc_k$ = function () {
    return this.overflow_1;
  };
  var TextAlign_LEFT_instance;
  var TextAlign_RIGHT_instance;
  var TextAlign_CENTER_instance;
  var TextAlign_JUSTIFY_instance;
  var TextAlign_INITIAL_instance;
  var TextAlign_INHERIT_instance;
  function values_11() {
    return [TextAlign_LEFT_getInstance(), TextAlign_RIGHT_getInstance(), TextAlign_CENTER_getInstance(), TextAlign_JUSTIFY_getInstance(), TextAlign_INITIAL_getInstance(), TextAlign_INHERIT_getInstance()];
  }
  function valueOf_11(value) {
    switch (value) {
      case 'LEFT':
        return TextAlign_LEFT_getInstance();
      case 'RIGHT':
        return TextAlign_RIGHT_getInstance();
      case 'CENTER':
        return TextAlign_CENTER_getInstance();
      case 'JUSTIFY':
        return TextAlign_JUSTIFY_getInstance();
      case 'INITIAL':
        return TextAlign_INITIAL_getInstance();
      case 'INHERIT':
        return TextAlign_INHERIT_getInstance();
      default:
        TextAlign_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_11() {
    if ($ENTRIES_11 == null)
      $ENTRIES_11 = enumEntries(values_11());
    return $ENTRIES_11;
  }
  var TextAlign_entriesInitialized;
  function TextAlign_initEntries() {
    if (TextAlign_entriesInitialized)
      return Unit_getInstance();
    TextAlign_entriesInitialized = true;
    TextAlign_LEFT_instance = new TextAlign('LEFT', 0, 'left');
    TextAlign_RIGHT_instance = new TextAlign('RIGHT', 1, 'right');
    TextAlign_CENTER_instance = new TextAlign('CENTER', 2, 'center');
    TextAlign_JUSTIFY_instance = new TextAlign('JUSTIFY', 3, 'justify');
    TextAlign_INITIAL_instance = new TextAlign('INITIAL', 4, 'initial');
    TextAlign_INHERIT_instance = new TextAlign('INHERIT', 5, 'inherit');
  }
  var $ENTRIES_11;
  function TextAlign(name, ordinal, textAlign) {
    Enum.call(this, name, ordinal);
    this.textAlign_1 = textAlign;
  }
  protoOf(TextAlign).get_textAlign_rnl0sc_k$ = function () {
    return this.textAlign_1;
  };
  function _get_hOffset__jnxpyi($this) {
    return $this.hOffset_1;
  }
  function _get_vOffset__sp8n0o($this) {
    return $this.vOffset_1;
  }
  function _get_blurRadius__hxfu8i($this) {
    return $this.blurRadius_1;
  }
  function _get_spreadRadius__zb3coq($this) {
    return $this.spreadRadius_1;
  }
  function _get_color__iw9cfm_2($this) {
    return $this.color_1;
  }
  function _get_inset__g2f54c($this) {
    return $this.inset_1;
  }
  function BoxShadow(hOffset, vOffset, blurRadius, spreadRadius, color, inset) {
    hOffset = hOffset === VOID ? null : hOffset;
    vOffset = vOffset === VOID ? null : vOffset;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    spreadRadius = spreadRadius === VOID ? null : spreadRadius;
    color = color === VOID ? null : color;
    inset = inset === VOID ? false : inset;
    this.hOffset_1 = hOffset;
    this.vOffset_1 = vOffset;
    this.blurRadius_1 = blurRadius;
    this.spreadRadius_1 = spreadRadius;
    this.color_1 = color;
    this.inset_1 = inset;
  }
  protoOf(BoxShadow).asString_fj7iig_k$ = function () {
    var tmp;
    if (this.inset_1) {
      tmp = 'inset ';
    } else {
      var tmp0_safe_receiver = this.hOffset_1;
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : asString(tmp0_safe_receiver);
      var tmp_0 = '' + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ' ';
      var tmp1_safe_receiver = this.vOffset_1;
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_elvis_lhs_0 = tmp1_safe_receiver == null ? null : asString(tmp1_safe_receiver);
      var tmp_1 = tmp_0 + (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0) + ' ';
      var tmp2_safe_receiver = this.blurRadius_1;
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_elvis_lhs_1 = tmp2_safe_receiver == null ? null : asString(tmp2_safe_receiver);
      var tmp_2 = tmp_1 + (tmp0_elvis_lhs_1 == null ? '' : tmp0_elvis_lhs_1) + ' ';
      var tmp3_safe_receiver = this.spreadRadius_1;
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_elvis_lhs_2 = tmp3_safe_receiver == null ? null : asString(tmp3_safe_receiver);
      var tmp_3 = tmp_2 + (tmp0_elvis_lhs_2 == null ? '' : tmp0_elvis_lhs_2) + ' ';
      var tmp4_safe_receiver = this.color_1;
      // Inline function 'kotlin.text.orEmpty' call
      var tmp0_elvis_lhs_3 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.asString_l3f38d_k$();
      tmp = tmp_3 + (tmp0_elvis_lhs_3 == null ? '' : tmp0_elvis_lhs_3);
    }
    return tmp;
  };
  protoOf(BoxShadow).toString = function () {
    return this.asString_fj7iig_k$();
  };
  var FontVariant_NORMAL_instance;
  var FontVariant_SMALLCAPS_instance;
  var FontVariant_INITIAL_instance;
  var FontVariant_INHERIT_instance;
  function values_12() {
    return [FontVariant_NORMAL_getInstance(), FontVariant_SMALLCAPS_getInstance(), FontVariant_INITIAL_getInstance(), FontVariant_INHERIT_getInstance()];
  }
  function valueOf_12(value) {
    switch (value) {
      case 'NORMAL':
        return FontVariant_NORMAL_getInstance();
      case 'SMALLCAPS':
        return FontVariant_SMALLCAPS_getInstance();
      case 'INITIAL':
        return FontVariant_INITIAL_getInstance();
      case 'INHERIT':
        return FontVariant_INHERIT_getInstance();
      default:
        FontVariant_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_12() {
    if ($ENTRIES_12 == null)
      $ENTRIES_12 = enumEntries(values_12());
    return $ENTRIES_12;
  }
  var FontVariant_entriesInitialized;
  function FontVariant_initEntries() {
    if (FontVariant_entriesInitialized)
      return Unit_getInstance();
    FontVariant_entriesInitialized = true;
    FontVariant_NORMAL_instance = new FontVariant('NORMAL', 0, 'normal');
    FontVariant_SMALLCAPS_instance = new FontVariant('SMALLCAPS', 1, 'small-caps');
    FontVariant_INITIAL_instance = new FontVariant('INITIAL', 2, 'initial');
    FontVariant_INHERIT_instance = new FontVariant('INHERIT', 3, 'inherit');
  }
  var $ENTRIES_12;
  function FontVariant(name, ordinal, fontVariant) {
    Enum.call(this, name, ordinal);
    this.fontVariant_1 = fontVariant;
  }
  protoOf(FontVariant).get_fontVariant_axdwe_k$ = function () {
    return this.fontVariant_1;
  };
  var Cursor_DEFAULT_instance;
  var Cursor_AUTO_instance;
  var Cursor_NONE_instance;
  var Cursor_ALIAS_instance;
  var Cursor_ALLSCROLL_instance;
  var Cursor_CELL_instance;
  var Cursor_CONTEXTMENU_instance;
  var Cursor_COLRESIZE_instance;
  var Cursor_COPY_instance;
  var Cursor_CROSSHAIR_instance;
  var Cursor_ERESIZE_instance;
  var Cursor_EWRESIZE_instance;
  var Cursor_GRAB_instance;
  var Cursor_GRABBING_instance;
  var Cursor_HELP_instance;
  var Cursor_MOVE_instance;
  var Cursor_NRESIZE_instance;
  var Cursor_NERESIZE_instance;
  var Cursor_NESWRESIZE_instance;
  var Cursor_NSRESIZE_instance;
  var Cursor_NWRESIZE_instance;
  var Cursor_NWSERESIZE_instance;
  var Cursor_NODROP_instance;
  var Cursor_NOTALLOWED_instance;
  var Cursor_POINTER_instance;
  var Cursor_PROGRESS_instance;
  var Cursor_ROWRESIZE_instance;
  var Cursor_SRESIZE_instance;
  var Cursor_SERESIZE_instance;
  var Cursor_SWRESIZE_instance;
  var Cursor_TEXT_instance;
  var Cursor_VERTICALTEXT_instance;
  var Cursor_WRESIZE_instance;
  var Cursor_WAIT_instance;
  var Cursor_ZOOMIN_instance;
  var Cursor_ZOOMOUT_instance;
  var Cursor_INITIAL_instance;
  var Cursor_INHERIT_instance;
  function values_13() {
    return [Cursor_DEFAULT_getInstance(), Cursor_AUTO_getInstance(), Cursor_NONE_getInstance(), Cursor_ALIAS_getInstance(), Cursor_ALLSCROLL_getInstance(), Cursor_CELL_getInstance(), Cursor_CONTEXTMENU_getInstance(), Cursor_COLRESIZE_getInstance(), Cursor_COPY_getInstance(), Cursor_CROSSHAIR_getInstance(), Cursor_ERESIZE_getInstance(), Cursor_EWRESIZE_getInstance(), Cursor_GRAB_getInstance(), Cursor_GRABBING_getInstance(), Cursor_HELP_getInstance(), Cursor_MOVE_getInstance(), Cursor_NRESIZE_getInstance(), Cursor_NERESIZE_getInstance(), Cursor_NESWRESIZE_getInstance(), Cursor_NSRESIZE_getInstance(), Cursor_NWRESIZE_getInstance(), Cursor_NWSERESIZE_getInstance(), Cursor_NODROP_getInstance(), Cursor_NOTALLOWED_getInstance(), Cursor_POINTER_getInstance(), Cursor_PROGRESS_getInstance(), Cursor_ROWRESIZE_getInstance(), Cursor_SRESIZE_getInstance(), Cursor_SERESIZE_getInstance(), Cursor_SWRESIZE_getInstance(), Cursor_TEXT_getInstance(), Cursor_VERTICALTEXT_getInstance(), Cursor_WRESIZE_getInstance(), Cursor_WAIT_getInstance(), Cursor_ZOOMIN_getInstance(), Cursor_ZOOMOUT_getInstance(), Cursor_INITIAL_getInstance(), Cursor_INHERIT_getInstance()];
  }
  function valueOf_13(value) {
    switch (value) {
      case 'DEFAULT':
        return Cursor_DEFAULT_getInstance();
      case 'AUTO':
        return Cursor_AUTO_getInstance();
      case 'NONE':
        return Cursor_NONE_getInstance();
      case 'ALIAS':
        return Cursor_ALIAS_getInstance();
      case 'ALLSCROLL':
        return Cursor_ALLSCROLL_getInstance();
      case 'CELL':
        return Cursor_CELL_getInstance();
      case 'CONTEXTMENU':
        return Cursor_CONTEXTMENU_getInstance();
      case 'COLRESIZE':
        return Cursor_COLRESIZE_getInstance();
      case 'COPY':
        return Cursor_COPY_getInstance();
      case 'CROSSHAIR':
        return Cursor_CROSSHAIR_getInstance();
      case 'ERESIZE':
        return Cursor_ERESIZE_getInstance();
      case 'EWRESIZE':
        return Cursor_EWRESIZE_getInstance();
      case 'GRAB':
        return Cursor_GRAB_getInstance();
      case 'GRABBING':
        return Cursor_GRABBING_getInstance();
      case 'HELP':
        return Cursor_HELP_getInstance();
      case 'MOVE':
        return Cursor_MOVE_getInstance();
      case 'NRESIZE':
        return Cursor_NRESIZE_getInstance();
      case 'NERESIZE':
        return Cursor_NERESIZE_getInstance();
      case 'NESWRESIZE':
        return Cursor_NESWRESIZE_getInstance();
      case 'NSRESIZE':
        return Cursor_NSRESIZE_getInstance();
      case 'NWRESIZE':
        return Cursor_NWRESIZE_getInstance();
      case 'NWSERESIZE':
        return Cursor_NWSERESIZE_getInstance();
      case 'NODROP':
        return Cursor_NODROP_getInstance();
      case 'NOTALLOWED':
        return Cursor_NOTALLOWED_getInstance();
      case 'POINTER':
        return Cursor_POINTER_getInstance();
      case 'PROGRESS':
        return Cursor_PROGRESS_getInstance();
      case 'ROWRESIZE':
        return Cursor_ROWRESIZE_getInstance();
      case 'SRESIZE':
        return Cursor_SRESIZE_getInstance();
      case 'SERESIZE':
        return Cursor_SERESIZE_getInstance();
      case 'SWRESIZE':
        return Cursor_SWRESIZE_getInstance();
      case 'TEXT':
        return Cursor_TEXT_getInstance();
      case 'VERTICALTEXT':
        return Cursor_VERTICALTEXT_getInstance();
      case 'WRESIZE':
        return Cursor_WRESIZE_getInstance();
      case 'WAIT':
        return Cursor_WAIT_getInstance();
      case 'ZOOMIN':
        return Cursor_ZOOMIN_getInstance();
      case 'ZOOMOUT':
        return Cursor_ZOOMOUT_getInstance();
      case 'INITIAL':
        return Cursor_INITIAL_getInstance();
      case 'INHERIT':
        return Cursor_INHERIT_getInstance();
      default:
        Cursor_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_13() {
    if ($ENTRIES_13 == null)
      $ENTRIES_13 = enumEntries(values_13());
    return $ENTRIES_13;
  }
  var Cursor_entriesInitialized;
  function Cursor_initEntries() {
    if (Cursor_entriesInitialized)
      return Unit_getInstance();
    Cursor_entriesInitialized = true;
    Cursor_DEFAULT_instance = new Cursor('DEFAULT', 0, 'default');
    Cursor_AUTO_instance = new Cursor('AUTO', 1, 'auto');
    Cursor_NONE_instance = new Cursor('NONE', 2, 'none');
    Cursor_ALIAS_instance = new Cursor('ALIAS', 3, 'alias');
    Cursor_ALLSCROLL_instance = new Cursor('ALLSCROLL', 4, 'all-scroll');
    Cursor_CELL_instance = new Cursor('CELL', 5, 'cell');
    Cursor_CONTEXTMENU_instance = new Cursor('CONTEXTMENU', 6, 'context-menu');
    Cursor_COLRESIZE_instance = new Cursor('COLRESIZE', 7, 'col-resize');
    Cursor_COPY_instance = new Cursor('COPY', 8, 'copy');
    Cursor_CROSSHAIR_instance = new Cursor('CROSSHAIR', 9, 'crosshair');
    Cursor_ERESIZE_instance = new Cursor('ERESIZE', 10, 'e-resize');
    Cursor_EWRESIZE_instance = new Cursor('EWRESIZE', 11, 'ew-resize');
    Cursor_GRAB_instance = new Cursor('GRAB', 12, 'grab');
    Cursor_GRABBING_instance = new Cursor('GRABBING', 13, 'grabbing');
    Cursor_HELP_instance = new Cursor('HELP', 14, 'help');
    Cursor_MOVE_instance = new Cursor('MOVE', 15, 'move');
    Cursor_NRESIZE_instance = new Cursor('NRESIZE', 16, 'n-resize');
    Cursor_NERESIZE_instance = new Cursor('NERESIZE', 17, 'ne-resize');
    Cursor_NESWRESIZE_instance = new Cursor('NESWRESIZE', 18, 'nesw-resize');
    Cursor_NSRESIZE_instance = new Cursor('NSRESIZE', 19, 'ns-resize');
    Cursor_NWRESIZE_instance = new Cursor('NWRESIZE', 20, 'nw-resize');
    Cursor_NWSERESIZE_instance = new Cursor('NWSERESIZE', 21, 'nwse-resize');
    Cursor_NODROP_instance = new Cursor('NODROP', 22, 'no-drop');
    Cursor_NOTALLOWED_instance = new Cursor('NOTALLOWED', 23, 'not-allowed');
    Cursor_POINTER_instance = new Cursor('POINTER', 24, 'pointer');
    Cursor_PROGRESS_instance = new Cursor('PROGRESS', 25, 'progress');
    Cursor_ROWRESIZE_instance = new Cursor('ROWRESIZE', 26, 'row-resize');
    Cursor_SRESIZE_instance = new Cursor('SRESIZE', 27, 's-resize');
    Cursor_SERESIZE_instance = new Cursor('SERESIZE', 28, 'se-resize');
    Cursor_SWRESIZE_instance = new Cursor('SWRESIZE', 29, 'sw-resize');
    Cursor_TEXT_instance = new Cursor('TEXT', 30, 'text');
    Cursor_VERTICALTEXT_instance = new Cursor('VERTICALTEXT', 31, 'vertical-text');
    Cursor_WRESIZE_instance = new Cursor('WRESIZE', 32, 'w-resize');
    Cursor_WAIT_instance = new Cursor('WAIT', 33, 'wait');
    Cursor_ZOOMIN_instance = new Cursor('ZOOMIN', 34, 'zoom-in');
    Cursor_ZOOMOUT_instance = new Cursor('ZOOMOUT', 35, 'zoom-out');
    Cursor_INITIAL_instance = new Cursor('INITIAL', 36, 'initial');
    Cursor_INHERIT_instance = new Cursor('INHERIT', 37, 'inherit');
  }
  var $ENTRIES_13;
  function Cursor(name, ordinal, cursor) {
    Enum.call(this, name, ordinal);
    this.cursor_1 = cursor;
  }
  protoOf(Cursor).get_cursor_4ki1v8_k$ = function () {
    return this.cursor_1;
  };
  function Color$Companion$rgb$lambda(it) {
    return padStart(toString(it, 16), 2, _Char___init__impl__6a9atx(48));
  }
  function Color$Companion$rgba$lambda(it) {
    return padStart(toString(it, 16), 2, _Char___init__impl__6a9atx(48));
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).hex_sedvbx_k$ = function (color) {
    return new Color('#' + toHexString(color));
  };
  protoOf(Companion).name_lqbcrr_k$ = function (color) {
    return new Color(color.color_1);
  };
  protoOf(Companion).rgb_udwlgr_k$ = function (red, green, blue) {
    var tmp = listOf([red, green, blue]);
    return new Color('#' + joinToString(tmp, '', VOID, VOID, VOID, VOID, Color$Companion$rgb$lambda));
  };
  protoOf(Companion).rgba_3xu3m4_k$ = function (red, green, blue, alpha) {
    var tmp = listOf([red, green, blue, alpha]);
    return new Color('#' + joinToString(tmp, '', VOID, VOID, VOID, VOID, Color$Companion$rgba$lambda));
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Color(color) {
    Companion_getInstance_0();
    color = color === VOID ? null : color;
    this.color_1 = color;
  }
  protoOf(Color).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(Color).asString_l3f38d_k$ = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.color_1;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Color).toString = function () {
    return this.asString_l3f38d_k$();
  };
  var AlignItems_FLEXSTART_instance;
  var AlignItems_FLEXEND_instance;
  var AlignItems_CENTER_instance;
  var AlignItems_BASELINE_instance;
  var AlignItems_STRETCH_instance;
  var AlignItems_START_instance;
  var AlignItems_END_instance;
  function values_14() {
    return [AlignItems_FLEXSTART_getInstance(), AlignItems_FLEXEND_getInstance(), AlignItems_CENTER_getInstance(), AlignItems_BASELINE_getInstance(), AlignItems_STRETCH_getInstance(), AlignItems_START_getInstance(), AlignItems_END_getInstance()];
  }
  function valueOf_14(value) {
    switch (value) {
      case 'FLEXSTART':
        return AlignItems_FLEXSTART_getInstance();
      case 'FLEXEND':
        return AlignItems_FLEXEND_getInstance();
      case 'CENTER':
        return AlignItems_CENTER_getInstance();
      case 'BASELINE':
        return AlignItems_BASELINE_getInstance();
      case 'STRETCH':
        return AlignItems_STRETCH_getInstance();
      case 'START':
        return AlignItems_START_getInstance();
      case 'END':
        return AlignItems_END_getInstance();
      default:
        AlignItems_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_14() {
    if ($ENTRIES_14 == null)
      $ENTRIES_14 = enumEntries(values_14());
    return $ENTRIES_14;
  }
  var AlignItems_entriesInitialized;
  function AlignItems_initEntries() {
    if (AlignItems_entriesInitialized)
      return Unit_getInstance();
    AlignItems_entriesInitialized = true;
    AlignItems_FLEXSTART_instance = new AlignItems('FLEXSTART', 0, 'flex-start');
    AlignItems_FLEXEND_instance = new AlignItems('FLEXEND', 1, 'flex-end');
    AlignItems_CENTER_instance = new AlignItems('CENTER', 2, 'center');
    AlignItems_BASELINE_instance = new AlignItems('BASELINE', 3, 'baseline');
    AlignItems_STRETCH_instance = new AlignItems('STRETCH', 4, 'stretch');
    AlignItems_START_instance = new AlignItems('START', 5, 'start');
    AlignItems_END_instance = new AlignItems('END', 6, 'end');
  }
  var $ENTRIES_14;
  function AlignItems(name, ordinal, alignItems) {
    Enum.call(this, name, ordinal);
    this.alignItems_1 = alignItems;
  }
  protoOf(AlignItems).get_alignItems_dy32g7_k$ = function () {
    return this.alignItems_1;
  };
  var LineBreak_AUTO_instance;
  var LineBreak_LOOSE_instance;
  var LineBreak_NORMAL_instance;
  var LineBreak_STRICT_instance;
  var LineBreak_ANYWHERE_instance;
  function values_15() {
    return [LineBreak_AUTO_getInstance(), LineBreak_LOOSE_getInstance(), LineBreak_NORMAL_getInstance(), LineBreak_STRICT_getInstance(), LineBreak_ANYWHERE_getInstance()];
  }
  function valueOf_15(value) {
    switch (value) {
      case 'AUTO':
        return LineBreak_AUTO_getInstance();
      case 'LOOSE':
        return LineBreak_LOOSE_getInstance();
      case 'NORMAL':
        return LineBreak_NORMAL_getInstance();
      case 'STRICT':
        return LineBreak_STRICT_getInstance();
      case 'ANYWHERE':
        return LineBreak_ANYWHERE_getInstance();
      default:
        LineBreak_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_15() {
    if ($ENTRIES_15 == null)
      $ENTRIES_15 = enumEntries(values_15());
    return $ENTRIES_15;
  }
  var LineBreak_entriesInitialized;
  function LineBreak_initEntries() {
    if (LineBreak_entriesInitialized)
      return Unit_getInstance();
    LineBreak_entriesInitialized = true;
    LineBreak_AUTO_instance = new LineBreak('AUTO', 0, 'auto');
    LineBreak_LOOSE_instance = new LineBreak('LOOSE', 1, 'loose');
    LineBreak_NORMAL_instance = new LineBreak('NORMAL', 2, 'normal');
    LineBreak_STRICT_instance = new LineBreak('STRICT', 3, 'strict');
    LineBreak_ANYWHERE_instance = new LineBreak('ANYWHERE', 4, 'anywhere');
  }
  var $ENTRIES_15;
  function LineBreak(name, ordinal, lineBreak) {
    Enum.call(this, name, ordinal);
    this.lineBreak_1 = lineBreak;
  }
  protoOf(LineBreak).get_lineBreak_izdxzr_k$ = function () {
    return this.lineBreak_1;
  };
  var FlexWrap_NOWRAP_instance;
  var FlexWrap_WRAP_instance;
  var FlexWrap_WRAPREV_instance;
  function values_16() {
    return [FlexWrap_NOWRAP_getInstance(), FlexWrap_WRAP_getInstance(), FlexWrap_WRAPREV_getInstance()];
  }
  function valueOf_16(value) {
    switch (value) {
      case 'NOWRAP':
        return FlexWrap_NOWRAP_getInstance();
      case 'WRAP':
        return FlexWrap_WRAP_getInstance();
      case 'WRAPREV':
        return FlexWrap_WRAPREV_getInstance();
      default:
        FlexWrap_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_16() {
    if ($ENTRIES_16 == null)
      $ENTRIES_16 = enumEntries(values_16());
    return $ENTRIES_16;
  }
  var FlexWrap_entriesInitialized;
  function FlexWrap_initEntries() {
    if (FlexWrap_entriesInitialized)
      return Unit_getInstance();
    FlexWrap_entriesInitialized = true;
    FlexWrap_NOWRAP_instance = new FlexWrap('NOWRAP', 0, 'nowrap');
    FlexWrap_WRAP_instance = new FlexWrap('WRAP', 1, 'wrap');
    FlexWrap_WRAPREV_instance = new FlexWrap('WRAPREV', 2, 'wrap-reverse');
  }
  var $ENTRIES_16;
  function FlexWrap(name, ordinal, wrap) {
    Enum.call(this, name, ordinal);
    this.wrap_1 = wrap;
  }
  protoOf(FlexWrap).get_wrap_gu5iy0_k$ = function () {
    return this.wrap_1;
  };
  var GridAutoFlow_ROW_instance;
  var GridAutoFlow_COLUMN_instance;
  var GridAutoFlow_ROWDENSE_instance;
  var GridAutoFlow_COLUMNDENSE_instance;
  function values_17() {
    return [GridAutoFlow_ROW_getInstance(), GridAutoFlow_COLUMN_getInstance(), GridAutoFlow_ROWDENSE_getInstance(), GridAutoFlow_COLUMNDENSE_getInstance()];
  }
  function valueOf_17(value) {
    switch (value) {
      case 'ROW':
        return GridAutoFlow_ROW_getInstance();
      case 'COLUMN':
        return GridAutoFlow_COLUMN_getInstance();
      case 'ROWDENSE':
        return GridAutoFlow_ROWDENSE_getInstance();
      case 'COLUMNDENSE':
        return GridAutoFlow_COLUMNDENSE_getInstance();
      default:
        GridAutoFlow_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_17() {
    if ($ENTRIES_17 == null)
      $ENTRIES_17 = enumEntries(values_17());
    return $ENTRIES_17;
  }
  var GridAutoFlow_entriesInitialized;
  function GridAutoFlow_initEntries() {
    if (GridAutoFlow_entriesInitialized)
      return Unit_getInstance();
    GridAutoFlow_entriesInitialized = true;
    GridAutoFlow_ROW_instance = new GridAutoFlow('ROW', 0, 'row');
    GridAutoFlow_COLUMN_instance = new GridAutoFlow('COLUMN', 1, 'column');
    GridAutoFlow_ROWDENSE_instance = new GridAutoFlow('ROWDENSE', 2, 'row dense');
    GridAutoFlow_COLUMNDENSE_instance = new GridAutoFlow('COLUMNDENSE', 3, 'column dense');
  }
  var $ENTRIES_17;
  function GridAutoFlow(name, ordinal, flow) {
    Enum.call(this, name, ordinal);
    this.flow_1 = flow;
  }
  protoOf(GridAutoFlow).get_flow_r5t4ok_k$ = function () {
    return this.flow_1;
  };
  var Clear_NONE_instance;
  var Clear_LEFT_instance;
  var Clear_RIGHT_instance;
  var Clear_BOTH_instance;
  var Clear_INITIAL_instance;
  var Clear_INHERIT_instance;
  function values_18() {
    return [Clear_NONE_getInstance(), Clear_LEFT_getInstance(), Clear_RIGHT_getInstance(), Clear_BOTH_getInstance(), Clear_INITIAL_getInstance(), Clear_INHERIT_getInstance()];
  }
  function valueOf_18(value) {
    switch (value) {
      case 'NONE':
        return Clear_NONE_getInstance();
      case 'LEFT':
        return Clear_LEFT_getInstance();
      case 'RIGHT':
        return Clear_RIGHT_getInstance();
      case 'BOTH':
        return Clear_BOTH_getInstance();
      case 'INITIAL':
        return Clear_INITIAL_getInstance();
      case 'INHERIT':
        return Clear_INHERIT_getInstance();
      default:
        Clear_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_18() {
    if ($ENTRIES_18 == null)
      $ENTRIES_18 = enumEntries(values_18());
    return $ENTRIES_18;
  }
  var Clear_entriesInitialized;
  function Clear_initEntries() {
    if (Clear_entriesInitialized)
      return Unit_getInstance();
    Clear_entriesInitialized = true;
    Clear_NONE_instance = new Clear('NONE', 0, 'none');
    Clear_LEFT_instance = new Clear('LEFT', 1, 'left');
    Clear_RIGHT_instance = new Clear('RIGHT', 2, 'right');
    Clear_BOTH_instance = new Clear('BOTH', 3, 'both');
    Clear_INITIAL_instance = new Clear('INITIAL', 4, 'initial');
    Clear_INHERIT_instance = new Clear('INHERIT', 5, 'inherit');
  }
  var $ENTRIES_18;
  function Clear(name, ordinal, clear) {
    Enum.call(this, name, ordinal);
    this.clear_1 = clear;
  }
  protoOf(Clear).get_clear_s1y46x_k$ = function () {
    return this.clear_1;
  };
  var TextOverflow_CLIP_instance;
  var TextOverflow_ELLIPSIS_instance;
  var TextOverflow_INITIAL_instance;
  var TextOverflow_INHERIT_instance;
  function values_19() {
    return [TextOverflow_CLIP_getInstance(), TextOverflow_ELLIPSIS_getInstance(), TextOverflow_INITIAL_getInstance(), TextOverflow_INHERIT_getInstance()];
  }
  function valueOf_19(value) {
    switch (value) {
      case 'CLIP':
        return TextOverflow_CLIP_getInstance();
      case 'ELLIPSIS':
        return TextOverflow_ELLIPSIS_getInstance();
      case 'INITIAL':
        return TextOverflow_INITIAL_getInstance();
      case 'INHERIT':
        return TextOverflow_INHERIT_getInstance();
      default:
        TextOverflow_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_19() {
    if ($ENTRIES_19 == null)
      $ENTRIES_19 = enumEntries(values_19());
    return $ENTRIES_19;
  }
  var TextOverflow_entriesInitialized;
  function TextOverflow_initEntries() {
    if (TextOverflow_entriesInitialized)
      return Unit_getInstance();
    TextOverflow_entriesInitialized = true;
    TextOverflow_CLIP_instance = new TextOverflow('CLIP', 0, 'clip');
    TextOverflow_ELLIPSIS_instance = new TextOverflow('ELLIPSIS', 1, 'ellipsis');
    TextOverflow_INITIAL_instance = new TextOverflow('INITIAL', 2, 'initial');
    TextOverflow_INHERIT_instance = new TextOverflow('INHERIT', 3, 'inherit');
  }
  var $ENTRIES_19;
  function TextOverflow(name, ordinal, textOverflow) {
    Enum.call(this, name, ordinal);
    this.textOverflow_1 = textOverflow;
  }
  protoOf(TextOverflow).get_textOverflow_4hsrf7_k$ = function () {
    return this.textOverflow_1;
  };
  function _get_line__d9to7r($this) {
    return $this.line_1;
  }
  function _get_style__b8k6v4_1($this) {
    return $this.style_1;
  }
  function _get_color__iw9cfm_3($this) {
    return $this.color_1;
  }
  function TextDecoration(line, style, color) {
    line = line === VOID ? null : line;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    this.line_1 = line;
    this.style_1 = style;
    this.color_1 = color;
  }
  protoOf(TextDecoration).asString_fj7iig_k$ = function () {
    var tmp0_safe_receiver = this.line_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.textDecorationLine_1;
    var tmp = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ' ';
    var tmp1_safe_receiver = this.style_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.textDecorationStyle_1;
    var tmp_0 = tmp + (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0) + ' ';
    var tmp2_safe_receiver = this.color_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_1 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.asString_l3f38d_k$();
    return tmp_0 + (tmp0_elvis_lhs_1 == null ? '' : tmp0_elvis_lhs_1);
  };
  protoOf(TextDecoration).toString = function () {
    return this.asString_fj7iig_k$();
  };
  var WhiteSpace_NORMAL_instance;
  var WhiteSpace_NOWRAP_instance;
  var WhiteSpace_PRE_instance;
  var WhiteSpace_PRELINE_instance;
  var WhiteSpace_PREWRAP_instance;
  var WhiteSpace_INITIAL_instance;
  var WhiteSpace_INHERIT_instance;
  function values_20() {
    return [WhiteSpace_NORMAL_getInstance(), WhiteSpace_NOWRAP_getInstance(), WhiteSpace_PRE_getInstance(), WhiteSpace_PRELINE_getInstance(), WhiteSpace_PREWRAP_getInstance(), WhiteSpace_INITIAL_getInstance(), WhiteSpace_INHERIT_getInstance()];
  }
  function valueOf_20(value) {
    switch (value) {
      case 'NORMAL':
        return WhiteSpace_NORMAL_getInstance();
      case 'NOWRAP':
        return WhiteSpace_NOWRAP_getInstance();
      case 'PRE':
        return WhiteSpace_PRE_getInstance();
      case 'PRELINE':
        return WhiteSpace_PRELINE_getInstance();
      case 'PREWRAP':
        return WhiteSpace_PREWRAP_getInstance();
      case 'INITIAL':
        return WhiteSpace_INITIAL_getInstance();
      case 'INHERIT':
        return WhiteSpace_INHERIT_getInstance();
      default:
        WhiteSpace_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_20() {
    if ($ENTRIES_20 == null)
      $ENTRIES_20 = enumEntries(values_20());
    return $ENTRIES_20;
  }
  var WhiteSpace_entriesInitialized;
  function WhiteSpace_initEntries() {
    if (WhiteSpace_entriesInitialized)
      return Unit_getInstance();
    WhiteSpace_entriesInitialized = true;
    WhiteSpace_NORMAL_instance = new WhiteSpace('NORMAL', 0, 'normal');
    WhiteSpace_NOWRAP_instance = new WhiteSpace('NOWRAP', 1, 'nowrap');
    WhiteSpace_PRE_instance = new WhiteSpace('PRE', 2, 'pre');
    WhiteSpace_PRELINE_instance = new WhiteSpace('PRELINE', 3, 'pre-line');
    WhiteSpace_PREWRAP_instance = new WhiteSpace('PREWRAP', 4, 'pre-wrap');
    WhiteSpace_INITIAL_instance = new WhiteSpace('INITIAL', 5, 'initial');
    WhiteSpace_INHERIT_instance = new WhiteSpace('INHERIT', 6, 'inherit');
  }
  var $ENTRIES_20;
  function WhiteSpace(name, ordinal, whiteSpace) {
    Enum.call(this, name, ordinal);
    this.whiteSpace_1 = whiteSpace;
  }
  protoOf(WhiteSpace).get_whiteSpace_fgcr5x_k$ = function () {
    return this.whiteSpace_1;
  };
  function _get_hShadow__v4dqjb($this) {
    return $this.hShadow_1;
  }
  function _get_vShadow__h8smfv($this) {
    return $this.vShadow_1;
  }
  function _get_blurRadius__hxfu8i_0($this) {
    return $this.blurRadius_1;
  }
  function _get_color__iw9cfm_4($this) {
    return $this.color_1;
  }
  function TextShadow(hShadow, vShadow, blurRadius, color) {
    hShadow = hShadow === VOID ? null : hShadow;
    vShadow = vShadow === VOID ? null : vShadow;
    blurRadius = blurRadius === VOID ? null : blurRadius;
    color = color === VOID ? null : color;
    this.hShadow_1 = hShadow;
    this.vShadow_1 = vShadow;
    this.blurRadius_1 = blurRadius;
    this.color_1 = color;
  }
  protoOf(TextShadow).asString_fj7iig_k$ = function () {
    var tmp0_safe_receiver = this.hShadow_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : asString(tmp0_safe_receiver);
    var tmp = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + ' ';
    var tmp1_safe_receiver = this.vShadow_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = tmp1_safe_receiver == null ? null : asString(tmp1_safe_receiver);
    var tmp_0 = tmp + (tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0) + ' ';
    var tmp2_safe_receiver = this.blurRadius_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_1 = tmp2_safe_receiver == null ? null : asString(tmp2_safe_receiver);
    var tmp_1 = tmp_0 + (tmp0_elvis_lhs_1 == null ? '' : tmp0_elvis_lhs_1) + ' ';
    var tmp3_safe_receiver = this.color_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_2 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.asString_l3f38d_k$();
    return tmp_1 + (tmp0_elvis_lhs_2 == null ? '' : tmp0_elvis_lhs_2);
  };
  protoOf(TextShadow).toString = function () {
    return this.asString_fj7iig_k$();
  };
  var JustifyItems_START_instance;
  var JustifyItems_END_instance;
  var JustifyItems_CENTER_instance;
  var JustifyItems_STRETCH_instance;
  function values_21() {
    return [JustifyItems_START_getInstance(), JustifyItems_END_getInstance(), JustifyItems_CENTER_getInstance(), JustifyItems_STRETCH_getInstance()];
  }
  function valueOf_21(value) {
    switch (value) {
      case 'START':
        return JustifyItems_START_getInstance();
      case 'END':
        return JustifyItems_END_getInstance();
      case 'CENTER':
        return JustifyItems_CENTER_getInstance();
      case 'STRETCH':
        return JustifyItems_STRETCH_getInstance();
      default:
        JustifyItems_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_21() {
    if ($ENTRIES_21 == null)
      $ENTRIES_21 = enumEntries(values_21());
    return $ENTRIES_21;
  }
  var JustifyItems_entriesInitialized;
  function JustifyItems_initEntries() {
    if (JustifyItems_entriesInitialized)
      return Unit_getInstance();
    JustifyItems_entriesInitialized = true;
    JustifyItems_START_instance = new JustifyItems('START', 0, 'start');
    JustifyItems_END_instance = new JustifyItems('END', 1, 'end');
    JustifyItems_CENTER_instance = new JustifyItems('CENTER', 2, 'center');
    JustifyItems_STRETCH_instance = new JustifyItems('STRETCH', 3, 'stretch');
  }
  var $ENTRIES_21;
  function JustifyItems(name, ordinal, justify) {
    Enum.call(this, name, ordinal);
    this.justify_1 = justify;
  }
  protoOf(JustifyItems).get_justify_166mys_k$ = function () {
    return this.justify_1;
  };
  var FontStyle_NORMAL_instance;
  var FontStyle_ITALIC_instance;
  var FontStyle_OBLIQUE_instance;
  var FontStyle_INITIAL_instance;
  var FontStyle_INHERIT_instance;
  function values_22() {
    return [FontStyle_NORMAL_getInstance(), FontStyle_ITALIC_getInstance(), FontStyle_OBLIQUE_getInstance(), FontStyle_INITIAL_getInstance(), FontStyle_INHERIT_getInstance()];
  }
  function valueOf_22(value) {
    switch (value) {
      case 'NORMAL':
        return FontStyle_NORMAL_getInstance();
      case 'ITALIC':
        return FontStyle_ITALIC_getInstance();
      case 'OBLIQUE':
        return FontStyle_OBLIQUE_getInstance();
      case 'INITIAL':
        return FontStyle_INITIAL_getInstance();
      case 'INHERIT':
        return FontStyle_INHERIT_getInstance();
      default:
        FontStyle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_22() {
    if ($ENTRIES_22 == null)
      $ENTRIES_22 = enumEntries(values_22());
    return $ENTRIES_22;
  }
  var FontStyle_entriesInitialized;
  function FontStyle_initEntries() {
    if (FontStyle_entriesInitialized)
      return Unit_getInstance();
    FontStyle_entriesInitialized = true;
    FontStyle_NORMAL_instance = new FontStyle('NORMAL', 0, 'normal');
    FontStyle_ITALIC_instance = new FontStyle('ITALIC', 1, 'italic');
    FontStyle_OBLIQUE_instance = new FontStyle('OBLIQUE', 2, 'oblique');
    FontStyle_INITIAL_instance = new FontStyle('INITIAL', 3, 'initial');
    FontStyle_INHERIT_instance = new FontStyle('INHERIT', 4, 'inherit');
  }
  var $ENTRIES_22;
  function FontStyle(name, ordinal, fontStyle) {
    Enum.call(this, name, ordinal);
    this.fontStyle_1 = fontStyle;
  }
  protoOf(FontStyle).get_fontStyle_q231bm_k$ = function () {
    return this.fontStyle_1;
  };
  var Col_ALICEBLUE_instance;
  var Col_ANTIQUEWHITE_instance;
  var Col_AQUA_instance;
  var Col_AQUAMARINE_instance;
  var Col_AZURE_instance;
  var Col_BEIGE_instance;
  var Col_BISQUE_instance;
  var Col_BLACK_instance;
  var Col_BLANCHEDALMOND_instance;
  var Col_BLUE_instance;
  var Col_BLUEVIOLET_instance;
  var Col_BROWN_instance;
  var Col_BURLYWOOD_instance;
  var Col_CADETBLUE_instance;
  var Col_CHARTREUSE_instance;
  var Col_CHOCOLATE_instance;
  var Col_CORAL_instance;
  var Col_CORNFLOWERBLUE_instance;
  var Col_CORNSILK_instance;
  var Col_CRIMSON_instance;
  var Col_CYAN_instance;
  var Col_DARKBLUE_instance;
  var Col_DARKCYAN_instance;
  var Col_DARKGOLDENROD_instance;
  var Col_DARKGRAY_instance;
  var Col_DARKGREEN_instance;
  var Col_DARKKHAKI_instance;
  var Col_DARKMAGENTA_instance;
  var Col_DARKOLIVEGREEN_instance;
  var Col_DARKORANGE_instance;
  var Col_DARKORCHID_instance;
  var Col_DARKRED_instance;
  var Col_DARKSALMON_instance;
  var Col_DARKSEAGREEN_instance;
  var Col_DARKSLATEBLUE_instance;
  var Col_DARKSLATEGRAY_instance;
  var Col_DARKTURQUOISE_instance;
  var Col_DARKVIOLET_instance;
  var Col_DEEPPINK_instance;
  var Col_DEEPSKYBLUE_instance;
  var Col_DIMGRAY_instance;
  var Col_DODGERBLUE_instance;
  var Col_FIREBRICK_instance;
  var Col_FLORALWHITE_instance;
  var Col_FORESTGREEN_instance;
  var Col_FUCHSIA_instance;
  var Col_GAINSBORO_instance;
  var Col_GHOSTWHITE_instance;
  var Col_GOLD_instance;
  var Col_GOLDENROD_instance;
  var Col_GRAY_instance;
  var Col_GREEN_instance;
  var Col_GREENYELLOW_instance;
  var Col_HONEYDEW_instance;
  var Col_HOTPINK_instance;
  var Col_INDIANRED_instance;
  var Col_INDIGO_instance;
  var Col_IVORY_instance;
  var Col_KHAKI_instance;
  var Col_LAVENDER_instance;
  var Col_LAVENDERBLUSH_instance;
  var Col_LAWNGREEN_instance;
  var Col_LEMONCHIFFON_instance;
  var Col_LIGHTBLUE_instance;
  var Col_LIGHTCORAL_instance;
  var Col_LIGHTCYAN_instance;
  var Col_LIGHTGOLDENRODYELLOW_instance;
  var Col_LIGHTGRAY_instance;
  var Col_LIGHTGREEN_instance;
  var Col_LIGHTPINK_instance;
  var Col_LIGHTSALMON_instance;
  var Col_LIGHTSEAGREEN_instance;
  var Col_LIGHTSKYBLUE_instance;
  var Col_LIGHTSLATEGRAY_instance;
  var Col_LIGHTSTEELBLUE_instance;
  var Col_LIGHTYELLOW_instance;
  var Col_LIME_instance;
  var Col_LIMEGREEN_instance;
  var Col_LINEN_instance;
  var Col_MAGENTA_instance;
  var Col_MAROON_instance;
  var Col_MEDIUMAQUAMARINE_instance;
  var Col_MEDIUMBLUE_instance;
  var Col_MEDIUMORCHID_instance;
  var Col_MEDIUMPURPLE_instance;
  var Col_MEDIUMSEAGREEN_instance;
  var Col_MEDIUMSLATEBLUE_instance;
  var Col_MEDIUMSPRINGGREEN_instance;
  var Col_MEDIUMTURQUOISE_instance;
  var Col_MEDIUMVIOLETRED_instance;
  var Col_MIDNIGHTBLUE_instance;
  var Col_MINTCREAM_instance;
  var Col_MISTYROSE_instance;
  var Col_MOCCASIN_instance;
  var Col_NAVAJOWHITE_instance;
  var Col_NAVY_instance;
  var Col_OLDLACE_instance;
  var Col_OLIVE_instance;
  var Col_OLIVEDRAB_instance;
  var Col_ORANGE_instance;
  var Col_ORANGERED_instance;
  var Col_ORCHID_instance;
  var Col_PALEGOLDENROD_instance;
  var Col_PALEGREEN_instance;
  var Col_PALETURQUOISE_instance;
  var Col_PALEVIOLETRED_instance;
  var Col_PAPAYAWHIP_instance;
  var Col_PEACHPUFF_instance;
  var Col_PERU_instance;
  var Col_PINK_instance;
  var Col_PLUM_instance;
  var Col_POWDERBLUE_instance;
  var Col_PURPLE_instance;
  var Col_REBECCAPURPLE_instance;
  var Col_RED_instance;
  var Col_ROSYBROWN_instance;
  var Col_ROYALBLUE_instance;
  var Col_SADDLEBROWN_instance;
  var Col_SALMON_instance;
  var Col_SANDYBROWN_instance;
  var Col_SEAGREEN_instance;
  var Col_SEASHELL_instance;
  var Col_SIENNA_instance;
  var Col_SILVER_instance;
  var Col_SKYBLUE_instance;
  var Col_SLATEBLUE_instance;
  var Col_SLATEGRAY_instance;
  var Col_SNOW_instance;
  var Col_SPRINGGREEN_instance;
  var Col_STEELBLUE_instance;
  var Col_TAN_instance;
  var Col_TEAL_instance;
  var Col_THISTLE_instance;
  var Col_TOMATO_instance;
  var Col_TURQUOISE_instance;
  var Col_VIOLET_instance;
  var Col_WHEAT_instance;
  var Col_WHITE_instance;
  var Col_WHITESMOKE_instance;
  var Col_YELLOW_instance;
  var Col_YELLOWGREEN_instance;
  function values_23() {
    return [Col_ALICEBLUE_getInstance(), Col_ANTIQUEWHITE_getInstance(), Col_AQUA_getInstance(), Col_AQUAMARINE_getInstance(), Col_AZURE_getInstance(), Col_BEIGE_getInstance(), Col_BISQUE_getInstance(), Col_BLACK_getInstance(), Col_BLANCHEDALMOND_getInstance(), Col_BLUE_getInstance(), Col_BLUEVIOLET_getInstance(), Col_BROWN_getInstance(), Col_BURLYWOOD_getInstance(), Col_CADETBLUE_getInstance(), Col_CHARTREUSE_getInstance(), Col_CHOCOLATE_getInstance(), Col_CORAL_getInstance(), Col_CORNFLOWERBLUE_getInstance(), Col_CORNSILK_getInstance(), Col_CRIMSON_getInstance(), Col_CYAN_getInstance(), Col_DARKBLUE_getInstance(), Col_DARKCYAN_getInstance(), Col_DARKGOLDENROD_getInstance(), Col_DARKGRAY_getInstance(), Col_DARKGREEN_getInstance(), Col_DARKKHAKI_getInstance(), Col_DARKMAGENTA_getInstance(), Col_DARKOLIVEGREEN_getInstance(), Col_DARKORANGE_getInstance(), Col_DARKORCHID_getInstance(), Col_DARKRED_getInstance(), Col_DARKSALMON_getInstance(), Col_DARKSEAGREEN_getInstance(), Col_DARKSLATEBLUE_getInstance(), Col_DARKSLATEGRAY_getInstance(), Col_DARKTURQUOISE_getInstance(), Col_DARKVIOLET_getInstance(), Col_DEEPPINK_getInstance(), Col_DEEPSKYBLUE_getInstance(), Col_DIMGRAY_getInstance(), Col_DODGERBLUE_getInstance(), Col_FIREBRICK_getInstance(), Col_FLORALWHITE_getInstance(), Col_FORESTGREEN_getInstance(), Col_FUCHSIA_getInstance(), Col_GAINSBORO_getInstance(), Col_GHOSTWHITE_getInstance(), Col_GOLD_getInstance(), Col_GOLDENROD_getInstance(), Col_GRAY_getInstance(), Col_GREEN_getInstance(), Col_GREENYELLOW_getInstance(), Col_HONEYDEW_getInstance(), Col_HOTPINK_getInstance(), Col_INDIANRED_getInstance(), Col_INDIGO_getInstance(), Col_IVORY_getInstance(), Col_KHAKI_getInstance(), Col_LAVENDER_getInstance(), Col_LAVENDERBLUSH_getInstance(), Col_LAWNGREEN_getInstance(), Col_LEMONCHIFFON_getInstance(), Col_LIGHTBLUE_getInstance(), Col_LIGHTCORAL_getInstance(), Col_LIGHTCYAN_getInstance(), Col_LIGHTGOLDENRODYELLOW_getInstance(), Col_LIGHTGRAY_getInstance(), Col_LIGHTGREEN_getInstance(), Col_LIGHTPINK_getInstance(), Col_LIGHTSALMON_getInstance(), Col_LIGHTSEAGREEN_getInstance(), Col_LIGHTSKYBLUE_getInstance(), Col_LIGHTSLATEGRAY_getInstance(), Col_LIGHTSTEELBLUE_getInstance(), Col_LIGHTYELLOW_getInstance(), Col_LIME_getInstance(), Col_LIMEGREEN_getInstance(), Col_LINEN_getInstance(), Col_MAGENTA_getInstance(), Col_MAROON_getInstance(), Col_MEDIUMAQUAMARINE_getInstance(), Col_MEDIUMBLUE_getInstance(), Col_MEDIUMORCHID_getInstance(), Col_MEDIUMPURPLE_getInstance(), Col_MEDIUMSEAGREEN_getInstance(), Col_MEDIUMSLATEBLUE_getInstance(), Col_MEDIUMSPRINGGREEN_getInstance(), Col_MEDIUMTURQUOISE_getInstance(), Col_MEDIUMVIOLETRED_getInstance(), Col_MIDNIGHTBLUE_getInstance(), Col_MINTCREAM_getInstance(), Col_MISTYROSE_getInstance(), Col_MOCCASIN_getInstance(), Col_NAVAJOWHITE_getInstance(), Col_NAVY_getInstance(), Col_OLDLACE_getInstance(), Col_OLIVE_getInstance(), Col_OLIVEDRAB_getInstance(), Col_ORANGE_getInstance(), Col_ORANGERED_getInstance(), Col_ORCHID_getInstance(), Col_PALEGOLDENROD_getInstance(), Col_PALEGREEN_getInstance(), Col_PALETURQUOISE_getInstance(), Col_PALEVIOLETRED_getInstance(), Col_PAPAYAWHIP_getInstance(), Col_PEACHPUFF_getInstance(), Col_PERU_getInstance(), Col_PINK_getInstance(), Col_PLUM_getInstance(), Col_POWDERBLUE_getInstance(), Col_PURPLE_getInstance(), Col_REBECCAPURPLE_getInstance(), Col_RED_getInstance(), Col_ROSYBROWN_getInstance(), Col_ROYALBLUE_getInstance(), Col_SADDLEBROWN_getInstance(), Col_SALMON_getInstance(), Col_SANDYBROWN_getInstance(), Col_SEAGREEN_getInstance(), Col_SEASHELL_getInstance(), Col_SIENNA_getInstance(), Col_SILVER_getInstance(), Col_SKYBLUE_getInstance(), Col_SLATEBLUE_getInstance(), Col_SLATEGRAY_getInstance(), Col_SNOW_getInstance(), Col_SPRINGGREEN_getInstance(), Col_STEELBLUE_getInstance(), Col_TAN_getInstance(), Col_TEAL_getInstance(), Col_THISTLE_getInstance(), Col_TOMATO_getInstance(), Col_TURQUOISE_getInstance(), Col_VIOLET_getInstance(), Col_WHEAT_getInstance(), Col_WHITE_getInstance(), Col_WHITESMOKE_getInstance(), Col_YELLOW_getInstance(), Col_YELLOWGREEN_getInstance()];
  }
  function valueOf_23(value) {
    switch (value) {
      case 'ALICEBLUE':
        return Col_ALICEBLUE_getInstance();
      case 'ANTIQUEWHITE':
        return Col_ANTIQUEWHITE_getInstance();
      case 'AQUA':
        return Col_AQUA_getInstance();
      case 'AQUAMARINE':
        return Col_AQUAMARINE_getInstance();
      case 'AZURE':
        return Col_AZURE_getInstance();
      case 'BEIGE':
        return Col_BEIGE_getInstance();
      case 'BISQUE':
        return Col_BISQUE_getInstance();
      case 'BLACK':
        return Col_BLACK_getInstance();
      case 'BLANCHEDALMOND':
        return Col_BLANCHEDALMOND_getInstance();
      case 'BLUE':
        return Col_BLUE_getInstance();
      case 'BLUEVIOLET':
        return Col_BLUEVIOLET_getInstance();
      case 'BROWN':
        return Col_BROWN_getInstance();
      case 'BURLYWOOD':
        return Col_BURLYWOOD_getInstance();
      case 'CADETBLUE':
        return Col_CADETBLUE_getInstance();
      case 'CHARTREUSE':
        return Col_CHARTREUSE_getInstance();
      case 'CHOCOLATE':
        return Col_CHOCOLATE_getInstance();
      case 'CORAL':
        return Col_CORAL_getInstance();
      case 'CORNFLOWERBLUE':
        return Col_CORNFLOWERBLUE_getInstance();
      case 'CORNSILK':
        return Col_CORNSILK_getInstance();
      case 'CRIMSON':
        return Col_CRIMSON_getInstance();
      case 'CYAN':
        return Col_CYAN_getInstance();
      case 'DARKBLUE':
        return Col_DARKBLUE_getInstance();
      case 'DARKCYAN':
        return Col_DARKCYAN_getInstance();
      case 'DARKGOLDENROD':
        return Col_DARKGOLDENROD_getInstance();
      case 'DARKGRAY':
        return Col_DARKGRAY_getInstance();
      case 'DARKGREEN':
        return Col_DARKGREEN_getInstance();
      case 'DARKKHAKI':
        return Col_DARKKHAKI_getInstance();
      case 'DARKMAGENTA':
        return Col_DARKMAGENTA_getInstance();
      case 'DARKOLIVEGREEN':
        return Col_DARKOLIVEGREEN_getInstance();
      case 'DARKORANGE':
        return Col_DARKORANGE_getInstance();
      case 'DARKORCHID':
        return Col_DARKORCHID_getInstance();
      case 'DARKRED':
        return Col_DARKRED_getInstance();
      case 'DARKSALMON':
        return Col_DARKSALMON_getInstance();
      case 'DARKSEAGREEN':
        return Col_DARKSEAGREEN_getInstance();
      case 'DARKSLATEBLUE':
        return Col_DARKSLATEBLUE_getInstance();
      case 'DARKSLATEGRAY':
        return Col_DARKSLATEGRAY_getInstance();
      case 'DARKTURQUOISE':
        return Col_DARKTURQUOISE_getInstance();
      case 'DARKVIOLET':
        return Col_DARKVIOLET_getInstance();
      case 'DEEPPINK':
        return Col_DEEPPINK_getInstance();
      case 'DEEPSKYBLUE':
        return Col_DEEPSKYBLUE_getInstance();
      case 'DIMGRAY':
        return Col_DIMGRAY_getInstance();
      case 'DODGERBLUE':
        return Col_DODGERBLUE_getInstance();
      case 'FIREBRICK':
        return Col_FIREBRICK_getInstance();
      case 'FLORALWHITE':
        return Col_FLORALWHITE_getInstance();
      case 'FORESTGREEN':
        return Col_FORESTGREEN_getInstance();
      case 'FUCHSIA':
        return Col_FUCHSIA_getInstance();
      case 'GAINSBORO':
        return Col_GAINSBORO_getInstance();
      case 'GHOSTWHITE':
        return Col_GHOSTWHITE_getInstance();
      case 'GOLD':
        return Col_GOLD_getInstance();
      case 'GOLDENROD':
        return Col_GOLDENROD_getInstance();
      case 'GRAY':
        return Col_GRAY_getInstance();
      case 'GREEN':
        return Col_GREEN_getInstance();
      case 'GREENYELLOW':
        return Col_GREENYELLOW_getInstance();
      case 'HONEYDEW':
        return Col_HONEYDEW_getInstance();
      case 'HOTPINK':
        return Col_HOTPINK_getInstance();
      case 'INDIANRED':
        return Col_INDIANRED_getInstance();
      case 'INDIGO':
        return Col_INDIGO_getInstance();
      case 'IVORY':
        return Col_IVORY_getInstance();
      case 'KHAKI':
        return Col_KHAKI_getInstance();
      case 'LAVENDER':
        return Col_LAVENDER_getInstance();
      case 'LAVENDERBLUSH':
        return Col_LAVENDERBLUSH_getInstance();
      case 'LAWNGREEN':
        return Col_LAWNGREEN_getInstance();
      case 'LEMONCHIFFON':
        return Col_LEMONCHIFFON_getInstance();
      case 'LIGHTBLUE':
        return Col_LIGHTBLUE_getInstance();
      case 'LIGHTCORAL':
        return Col_LIGHTCORAL_getInstance();
      case 'LIGHTCYAN':
        return Col_LIGHTCYAN_getInstance();
      case 'LIGHTGOLDENRODYELLOW':
        return Col_LIGHTGOLDENRODYELLOW_getInstance();
      case 'LIGHTGRAY':
        return Col_LIGHTGRAY_getInstance();
      case 'LIGHTGREEN':
        return Col_LIGHTGREEN_getInstance();
      case 'LIGHTPINK':
        return Col_LIGHTPINK_getInstance();
      case 'LIGHTSALMON':
        return Col_LIGHTSALMON_getInstance();
      case 'LIGHTSEAGREEN':
        return Col_LIGHTSEAGREEN_getInstance();
      case 'LIGHTSKYBLUE':
        return Col_LIGHTSKYBLUE_getInstance();
      case 'LIGHTSLATEGRAY':
        return Col_LIGHTSLATEGRAY_getInstance();
      case 'LIGHTSTEELBLUE':
        return Col_LIGHTSTEELBLUE_getInstance();
      case 'LIGHTYELLOW':
        return Col_LIGHTYELLOW_getInstance();
      case 'LIME':
        return Col_LIME_getInstance();
      case 'LIMEGREEN':
        return Col_LIMEGREEN_getInstance();
      case 'LINEN':
        return Col_LINEN_getInstance();
      case 'MAGENTA':
        return Col_MAGENTA_getInstance();
      case 'MAROON':
        return Col_MAROON_getInstance();
      case 'MEDIUMAQUAMARINE':
        return Col_MEDIUMAQUAMARINE_getInstance();
      case 'MEDIUMBLUE':
        return Col_MEDIUMBLUE_getInstance();
      case 'MEDIUMORCHID':
        return Col_MEDIUMORCHID_getInstance();
      case 'MEDIUMPURPLE':
        return Col_MEDIUMPURPLE_getInstance();
      case 'MEDIUMSEAGREEN':
        return Col_MEDIUMSEAGREEN_getInstance();
      case 'MEDIUMSLATEBLUE':
        return Col_MEDIUMSLATEBLUE_getInstance();
      case 'MEDIUMSPRINGGREEN':
        return Col_MEDIUMSPRINGGREEN_getInstance();
      case 'MEDIUMTURQUOISE':
        return Col_MEDIUMTURQUOISE_getInstance();
      case 'MEDIUMVIOLETRED':
        return Col_MEDIUMVIOLETRED_getInstance();
      case 'MIDNIGHTBLUE':
        return Col_MIDNIGHTBLUE_getInstance();
      case 'MINTCREAM':
        return Col_MINTCREAM_getInstance();
      case 'MISTYROSE':
        return Col_MISTYROSE_getInstance();
      case 'MOCCASIN':
        return Col_MOCCASIN_getInstance();
      case 'NAVAJOWHITE':
        return Col_NAVAJOWHITE_getInstance();
      case 'NAVY':
        return Col_NAVY_getInstance();
      case 'OLDLACE':
        return Col_OLDLACE_getInstance();
      case 'OLIVE':
        return Col_OLIVE_getInstance();
      case 'OLIVEDRAB':
        return Col_OLIVEDRAB_getInstance();
      case 'ORANGE':
        return Col_ORANGE_getInstance();
      case 'ORANGERED':
        return Col_ORANGERED_getInstance();
      case 'ORCHID':
        return Col_ORCHID_getInstance();
      case 'PALEGOLDENROD':
        return Col_PALEGOLDENROD_getInstance();
      case 'PALEGREEN':
        return Col_PALEGREEN_getInstance();
      case 'PALETURQUOISE':
        return Col_PALETURQUOISE_getInstance();
      case 'PALEVIOLETRED':
        return Col_PALEVIOLETRED_getInstance();
      case 'PAPAYAWHIP':
        return Col_PAPAYAWHIP_getInstance();
      case 'PEACHPUFF':
        return Col_PEACHPUFF_getInstance();
      case 'PERU':
        return Col_PERU_getInstance();
      case 'PINK':
        return Col_PINK_getInstance();
      case 'PLUM':
        return Col_PLUM_getInstance();
      case 'POWDERBLUE':
        return Col_POWDERBLUE_getInstance();
      case 'PURPLE':
        return Col_PURPLE_getInstance();
      case 'REBECCAPURPLE':
        return Col_REBECCAPURPLE_getInstance();
      case 'RED':
        return Col_RED_getInstance();
      case 'ROSYBROWN':
        return Col_ROSYBROWN_getInstance();
      case 'ROYALBLUE':
        return Col_ROYALBLUE_getInstance();
      case 'SADDLEBROWN':
        return Col_SADDLEBROWN_getInstance();
      case 'SALMON':
        return Col_SALMON_getInstance();
      case 'SANDYBROWN':
        return Col_SANDYBROWN_getInstance();
      case 'SEAGREEN':
        return Col_SEAGREEN_getInstance();
      case 'SEASHELL':
        return Col_SEASHELL_getInstance();
      case 'SIENNA':
        return Col_SIENNA_getInstance();
      case 'SILVER':
        return Col_SILVER_getInstance();
      case 'SKYBLUE':
        return Col_SKYBLUE_getInstance();
      case 'SLATEBLUE':
        return Col_SLATEBLUE_getInstance();
      case 'SLATEGRAY':
        return Col_SLATEGRAY_getInstance();
      case 'SNOW':
        return Col_SNOW_getInstance();
      case 'SPRINGGREEN':
        return Col_SPRINGGREEN_getInstance();
      case 'STEELBLUE':
        return Col_STEELBLUE_getInstance();
      case 'TAN':
        return Col_TAN_getInstance();
      case 'TEAL':
        return Col_TEAL_getInstance();
      case 'THISTLE':
        return Col_THISTLE_getInstance();
      case 'TOMATO':
        return Col_TOMATO_getInstance();
      case 'TURQUOISE':
        return Col_TURQUOISE_getInstance();
      case 'VIOLET':
        return Col_VIOLET_getInstance();
      case 'WHEAT':
        return Col_WHEAT_getInstance();
      case 'WHITE':
        return Col_WHITE_getInstance();
      case 'WHITESMOKE':
        return Col_WHITESMOKE_getInstance();
      case 'YELLOW':
        return Col_YELLOW_getInstance();
      case 'YELLOWGREEN':
        return Col_YELLOWGREEN_getInstance();
      default:
        Col_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_23() {
    if ($ENTRIES_23 == null)
      $ENTRIES_23 = enumEntries(values_23());
    return $ENTRIES_23;
  }
  var Col_entriesInitialized;
  function Col_initEntries() {
    if (Col_entriesInitialized)
      return Unit_getInstance();
    Col_entriesInitialized = true;
    Col_ALICEBLUE_instance = new Col('ALICEBLUE', 0, 'aliceblue');
    Col_ANTIQUEWHITE_instance = new Col('ANTIQUEWHITE', 1, 'antiquewhite');
    Col_AQUA_instance = new Col('AQUA', 2, 'aqua');
    Col_AQUAMARINE_instance = new Col('AQUAMARINE', 3, 'aquamarine');
    Col_AZURE_instance = new Col('AZURE', 4, 'azure');
    Col_BEIGE_instance = new Col('BEIGE', 5, 'beige');
    Col_BISQUE_instance = new Col('BISQUE', 6, 'bisque');
    Col_BLACK_instance = new Col('BLACK', 7, 'black');
    Col_BLANCHEDALMOND_instance = new Col('BLANCHEDALMOND', 8, 'blanchedalmond');
    Col_BLUE_instance = new Col('BLUE', 9, 'blue');
    Col_BLUEVIOLET_instance = new Col('BLUEVIOLET', 10, 'blueviolet');
    Col_BROWN_instance = new Col('BROWN', 11, 'brown');
    Col_BURLYWOOD_instance = new Col('BURLYWOOD', 12, 'burlywood');
    Col_CADETBLUE_instance = new Col('CADETBLUE', 13, 'cadetblue');
    Col_CHARTREUSE_instance = new Col('CHARTREUSE', 14, 'chartreuse');
    Col_CHOCOLATE_instance = new Col('CHOCOLATE', 15, 'chocolate');
    Col_CORAL_instance = new Col('CORAL', 16, 'coral');
    Col_CORNFLOWERBLUE_instance = new Col('CORNFLOWERBLUE', 17, 'cornflowerblue');
    Col_CORNSILK_instance = new Col('CORNSILK', 18, 'cornsilk');
    Col_CRIMSON_instance = new Col('CRIMSON', 19, 'crimson');
    Col_CYAN_instance = new Col('CYAN', 20, 'cyan');
    Col_DARKBLUE_instance = new Col('DARKBLUE', 21, 'darkblue');
    Col_DARKCYAN_instance = new Col('DARKCYAN', 22, 'darkcyan');
    Col_DARKGOLDENROD_instance = new Col('DARKGOLDENROD', 23, 'darkgoldenrod');
    Col_DARKGRAY_instance = new Col('DARKGRAY', 24, 'darkgray');
    Col_DARKGREEN_instance = new Col('DARKGREEN', 25, 'darkgreen');
    Col_DARKKHAKI_instance = new Col('DARKKHAKI', 26, 'darkkhaki');
    Col_DARKMAGENTA_instance = new Col('DARKMAGENTA', 27, 'darkmagenta');
    Col_DARKOLIVEGREEN_instance = new Col('DARKOLIVEGREEN', 28, 'darkolivegreen');
    Col_DARKORANGE_instance = new Col('DARKORANGE', 29, 'darkorange');
    Col_DARKORCHID_instance = new Col('DARKORCHID', 30, 'darkorchid');
    Col_DARKRED_instance = new Col('DARKRED', 31, 'darkred');
    Col_DARKSALMON_instance = new Col('DARKSALMON', 32, 'darksalmon');
    Col_DARKSEAGREEN_instance = new Col('DARKSEAGREEN', 33, 'darkseagreen');
    Col_DARKSLATEBLUE_instance = new Col('DARKSLATEBLUE', 34, 'darkslateblue');
    Col_DARKSLATEGRAY_instance = new Col('DARKSLATEGRAY', 35, 'darkslategray');
    Col_DARKTURQUOISE_instance = new Col('DARKTURQUOISE', 36, 'darkturquoise');
    Col_DARKVIOLET_instance = new Col('DARKVIOLET', 37, 'darkviolet');
    Col_DEEPPINK_instance = new Col('DEEPPINK', 38, 'deeppink');
    Col_DEEPSKYBLUE_instance = new Col('DEEPSKYBLUE', 39, 'deepskyblue');
    Col_DIMGRAY_instance = new Col('DIMGRAY', 40, 'dimgray');
    Col_DODGERBLUE_instance = new Col('DODGERBLUE', 41, 'dodgerblue');
    Col_FIREBRICK_instance = new Col('FIREBRICK', 42, 'firebrick');
    Col_FLORALWHITE_instance = new Col('FLORALWHITE', 43, 'floralwhite');
    Col_FORESTGREEN_instance = new Col('FORESTGREEN', 44, 'forestgreen');
    Col_FUCHSIA_instance = new Col('FUCHSIA', 45, 'fuchsia');
    Col_GAINSBORO_instance = new Col('GAINSBORO', 46, 'gainsboro');
    Col_GHOSTWHITE_instance = new Col('GHOSTWHITE', 47, 'ghostwhite');
    Col_GOLD_instance = new Col('GOLD', 48, 'gold');
    Col_GOLDENROD_instance = new Col('GOLDENROD', 49, 'goldenrod');
    Col_GRAY_instance = new Col('GRAY', 50, 'gray');
    Col_GREEN_instance = new Col('GREEN', 51, 'green');
    Col_GREENYELLOW_instance = new Col('GREENYELLOW', 52, 'greenyellow');
    Col_HONEYDEW_instance = new Col('HONEYDEW', 53, 'honeydew');
    Col_HOTPINK_instance = new Col('HOTPINK', 54, 'hotpink');
    Col_INDIANRED_instance = new Col('INDIANRED', 55, 'indianred');
    Col_INDIGO_instance = new Col('INDIGO', 56, 'indigo');
    Col_IVORY_instance = new Col('IVORY', 57, 'ivory');
    Col_KHAKI_instance = new Col('KHAKI', 58, 'khaki');
    Col_LAVENDER_instance = new Col('LAVENDER', 59, 'lavender');
    Col_LAVENDERBLUSH_instance = new Col('LAVENDERBLUSH', 60, 'lavenderblush');
    Col_LAWNGREEN_instance = new Col('LAWNGREEN', 61, 'lawngreen');
    Col_LEMONCHIFFON_instance = new Col('LEMONCHIFFON', 62, 'lemonchiffon');
    Col_LIGHTBLUE_instance = new Col('LIGHTBLUE', 63, 'lightblue');
    Col_LIGHTCORAL_instance = new Col('LIGHTCORAL', 64, 'lightcoral');
    Col_LIGHTCYAN_instance = new Col('LIGHTCYAN', 65, 'lightcyan');
    Col_LIGHTGOLDENRODYELLOW_instance = new Col('LIGHTGOLDENRODYELLOW', 66, 'lightgoldenrodyellow');
    Col_LIGHTGRAY_instance = new Col('LIGHTGRAY', 67, 'lightgray');
    Col_LIGHTGREEN_instance = new Col('LIGHTGREEN', 68, 'lightgreen');
    Col_LIGHTPINK_instance = new Col('LIGHTPINK', 69, 'lightpink');
    Col_LIGHTSALMON_instance = new Col('LIGHTSALMON', 70, 'lightsalmon');
    Col_LIGHTSEAGREEN_instance = new Col('LIGHTSEAGREEN', 71, 'lightseagreen');
    Col_LIGHTSKYBLUE_instance = new Col('LIGHTSKYBLUE', 72, 'lightskyblue');
    Col_LIGHTSLATEGRAY_instance = new Col('LIGHTSLATEGRAY', 73, 'lightslategray');
    Col_LIGHTSTEELBLUE_instance = new Col('LIGHTSTEELBLUE', 74, 'lightsteelblue');
    Col_LIGHTYELLOW_instance = new Col('LIGHTYELLOW', 75, 'lightyellow');
    Col_LIME_instance = new Col('LIME', 76, 'lime');
    Col_LIMEGREEN_instance = new Col('LIMEGREEN', 77, 'limegreen');
    Col_LINEN_instance = new Col('LINEN', 78, 'linen');
    Col_MAGENTA_instance = new Col('MAGENTA', 79, 'magenta');
    Col_MAROON_instance = new Col('MAROON', 80, 'maroon');
    Col_MEDIUMAQUAMARINE_instance = new Col('MEDIUMAQUAMARINE', 81, 'mediumaquamarine');
    Col_MEDIUMBLUE_instance = new Col('MEDIUMBLUE', 82, 'mediumblue');
    Col_MEDIUMORCHID_instance = new Col('MEDIUMORCHID', 83, 'mediumorchid');
    Col_MEDIUMPURPLE_instance = new Col('MEDIUMPURPLE', 84, 'mediumpurple');
    Col_MEDIUMSEAGREEN_instance = new Col('MEDIUMSEAGREEN', 85, 'mediumseagreen');
    Col_MEDIUMSLATEBLUE_instance = new Col('MEDIUMSLATEBLUE', 86, 'mediumslateblue');
    Col_MEDIUMSPRINGGREEN_instance = new Col('MEDIUMSPRINGGREEN', 87, 'mediumspringgreen');
    Col_MEDIUMTURQUOISE_instance = new Col('MEDIUMTURQUOISE', 88, 'mediumturquoise');
    Col_MEDIUMVIOLETRED_instance = new Col('MEDIUMVIOLETRED', 89, 'mediumvioletred');
    Col_MIDNIGHTBLUE_instance = new Col('MIDNIGHTBLUE', 90, 'midnightblue');
    Col_MINTCREAM_instance = new Col('MINTCREAM', 91, 'mintcream');
    Col_MISTYROSE_instance = new Col('MISTYROSE', 92, 'mistyrose');
    Col_MOCCASIN_instance = new Col('MOCCASIN', 93, 'moccasin');
    Col_NAVAJOWHITE_instance = new Col('NAVAJOWHITE', 94, 'navajowhite');
    Col_NAVY_instance = new Col('NAVY', 95, 'navy');
    Col_OLDLACE_instance = new Col('OLDLACE', 96, 'oldlace');
    Col_OLIVE_instance = new Col('OLIVE', 97, 'olive');
    Col_OLIVEDRAB_instance = new Col('OLIVEDRAB', 98, 'olivedrab');
    Col_ORANGE_instance = new Col('ORANGE', 99, 'orange');
    Col_ORANGERED_instance = new Col('ORANGERED', 100, 'orangered');
    Col_ORCHID_instance = new Col('ORCHID', 101, 'orchid');
    Col_PALEGOLDENROD_instance = new Col('PALEGOLDENROD', 102, 'palegoldenrod');
    Col_PALEGREEN_instance = new Col('PALEGREEN', 103, 'palegreen');
    Col_PALETURQUOISE_instance = new Col('PALETURQUOISE', 104, 'paleturquoise');
    Col_PALEVIOLETRED_instance = new Col('PALEVIOLETRED', 105, 'palevioletred');
    Col_PAPAYAWHIP_instance = new Col('PAPAYAWHIP', 106, 'papayawhip');
    Col_PEACHPUFF_instance = new Col('PEACHPUFF', 107, 'peachpuff');
    Col_PERU_instance = new Col('PERU', 108, 'peru');
    Col_PINK_instance = new Col('PINK', 109, 'pink');
    Col_PLUM_instance = new Col('PLUM', 110, 'plum');
    Col_POWDERBLUE_instance = new Col('POWDERBLUE', 111, 'powderblue');
    Col_PURPLE_instance = new Col('PURPLE', 112, 'purple');
    Col_REBECCAPURPLE_instance = new Col('REBECCAPURPLE', 113, 'rebeccapurple');
    Col_RED_instance = new Col('RED', 114, 'red');
    Col_ROSYBROWN_instance = new Col('ROSYBROWN', 115, 'rosybrown');
    Col_ROYALBLUE_instance = new Col('ROYALBLUE', 116, 'royalblue');
    Col_SADDLEBROWN_instance = new Col('SADDLEBROWN', 117, 'saddlebrown');
    Col_SALMON_instance = new Col('SALMON', 118, 'salmon');
    Col_SANDYBROWN_instance = new Col('SANDYBROWN', 119, 'sandybrown');
    Col_SEAGREEN_instance = new Col('SEAGREEN', 120, 'seagreen');
    Col_SEASHELL_instance = new Col('SEASHELL', 121, 'seashell');
    Col_SIENNA_instance = new Col('SIENNA', 122, 'sienna');
    Col_SILVER_instance = new Col('SILVER', 123, 'silver');
    Col_SKYBLUE_instance = new Col('SKYBLUE', 124, 'skyblue');
    Col_SLATEBLUE_instance = new Col('SLATEBLUE', 125, 'slateblue');
    Col_SLATEGRAY_instance = new Col('SLATEGRAY', 126, 'slategray');
    Col_SNOW_instance = new Col('SNOW', 127, 'snow');
    Col_SPRINGGREEN_instance = new Col('SPRINGGREEN', 128, 'springgreen');
    Col_STEELBLUE_instance = new Col('STEELBLUE', 129, 'steelblue');
    Col_TAN_instance = new Col('TAN', 130, 'tan');
    Col_TEAL_instance = new Col('TEAL', 131, 'teal');
    Col_THISTLE_instance = new Col('THISTLE', 132, 'thistle');
    Col_TOMATO_instance = new Col('TOMATO', 133, 'tomato');
    Col_TURQUOISE_instance = new Col('TURQUOISE', 134, 'turquoise');
    Col_VIOLET_instance = new Col('VIOLET', 135, 'violet');
    Col_WHEAT_instance = new Col('WHEAT', 136, 'wheat');
    Col_WHITE_instance = new Col('WHITE', 137, 'white');
    Col_WHITESMOKE_instance = new Col('WHITESMOKE', 138, 'whitesmoke');
    Col_YELLOW_instance = new Col('YELLOW', 139, 'yellow');
    Col_YELLOWGREEN_instance = new Col('YELLOWGREEN', 140, 'yellowgreen');
  }
  var $ENTRIES_23;
  function Col(name, ordinal, color) {
    Enum.call(this, name, ordinal);
    this.color_1 = color;
  }
  protoOf(Col).get_color_852ib5_k$ = function () {
    return this.color_1;
  };
  var Position_STATIC_instance;
  var Position_RELATIVE_instance;
  var Position_FIXED_instance;
  var Position_ABSOLUTE_instance;
  var Position_STICKY_instance;
  function values_24() {
    return [Position_STATIC_getInstance(), Position_RELATIVE_getInstance(), Position_FIXED_getInstance(), Position_ABSOLUTE_getInstance(), Position_STICKY_getInstance()];
  }
  function valueOf_24(value) {
    switch (value) {
      case 'STATIC':
        return Position_STATIC_getInstance();
      case 'RELATIVE':
        return Position_RELATIVE_getInstance();
      case 'FIXED':
        return Position_FIXED_getInstance();
      case 'ABSOLUTE':
        return Position_ABSOLUTE_getInstance();
      case 'STICKY':
        return Position_STICKY_getInstance();
      default:
        Position_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_24() {
    if ($ENTRIES_24 == null)
      $ENTRIES_24 = enumEntries(values_24());
    return $ENTRIES_24;
  }
  var Position_entriesInitialized;
  function Position_initEntries() {
    if (Position_entriesInitialized)
      return Unit_getInstance();
    Position_entriesInitialized = true;
    Position_STATIC_instance = new Position('STATIC', 0, 'static');
    Position_RELATIVE_instance = new Position('RELATIVE', 1, 'relative');
    Position_FIXED_instance = new Position('FIXED', 2, 'fixed');
    Position_ABSOLUTE_instance = new Position('ABSOLUTE', 3, 'absolute');
    Position_STICKY_instance = new Position('STICKY', 4, 'sticky');
  }
  var $ENTRIES_24;
  function Position(name, ordinal, position) {
    Enum.call(this, name, ordinal);
    this.position_1 = position;
  }
  protoOf(Position).get_position_ue28av_k$ = function () {
    return this.position_1;
  };
  function _get_type__deia8h($this) {
    return $this.type_1;
  }
  function _get_position__iahqv2($this) {
    return $this.position_1;
  }
  function _get_image__g3aecq_0($this) {
    return $this.image_1;
  }
  function ListStyle(type, position, image) {
    type = type === VOID ? null : type;
    position = position === VOID ? null : position;
    image = image === VOID ? null : image;
    this.type_1 = type;
    this.position_1 = position;
    this.image_1 = image;
  }
  protoOf(ListStyle).asString_fj7iig_k$ = function () {
    var tmp;
    if (this.image_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.ListStyle.asString.<anonymous>' call
      tmp = 'url(' + this.image_1 + ')';
    }
    var img = tmp;
    var tmp1_safe_receiver = this.type_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.type_1;
    var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp2_safe_receiver = this.position_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.position_1;
    var tmp_1 = tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0;
    // Inline function 'kotlin.text.orEmpty' call
    return tmp_0 + ' ' + tmp_1 + ' ' + (img == null ? '' : img);
  };
  protoOf(ListStyle).toString = function () {
    return this.asString_fj7iig_k$();
  };
  function _get_property__ck0u52($this) {
    return $this.property_1;
  }
  function _get_duration__2bya89($this) {
    return $this.duration_1;
  }
  function _get_timingFunction__vgyt4n($this) {
    return $this.timingFunction_1;
  }
  function _get_delay__ikpy6q($this) {
    return $this.delay_1;
  }
  function Transition(property, duration, timingFunction, delay) {
    timingFunction = timingFunction === VOID ? null : timingFunction;
    delay = delay === VOID ? null : delay;
    this.property_1 = property;
    this.duration_1 = duration;
    this.timingFunction_1 = timingFunction;
    this.delay_1 = delay;
  }
  protoOf(Transition).asString_fj7iig_k$ = function () {
    var tmp0_elvis_lhs = this.timingFunction_1;
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_safe_receiver = this.delay_1;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Transition.asString.<anonymous>' call
      tmp_0 = tmp1_safe_receiver.toString() + 's';
    }
    var tmp2_elvis_lhs = tmp_0;
    return this.property_1 + ' ' + this.duration_1 + 's ' + tmp + ' ' + (tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs);
  };
  protoOf(Transition).toString = function () {
    return this.asString_fj7iig_k$();
  };
  var JustifyContent_FLEXSTART_instance;
  var JustifyContent_FLEXEND_instance;
  var JustifyContent_CENTER_instance;
  var JustifyContent_SPACEBETWEEN_instance;
  var JustifyContent_SPACEAROUND_instance;
  var JustifyContent_SPACEEVENLY_instance;
  var JustifyContent_START_instance;
  var JustifyContent_END_instance;
  var JustifyContent_STRETCH_instance;
  function values_25() {
    return [JustifyContent_FLEXSTART_getInstance(), JustifyContent_FLEXEND_getInstance(), JustifyContent_CENTER_getInstance(), JustifyContent_SPACEBETWEEN_getInstance(), JustifyContent_SPACEAROUND_getInstance(), JustifyContent_SPACEEVENLY_getInstance(), JustifyContent_START_getInstance(), JustifyContent_END_getInstance(), JustifyContent_STRETCH_getInstance()];
  }
  function valueOf_25(value) {
    switch (value) {
      case 'FLEXSTART':
        return JustifyContent_FLEXSTART_getInstance();
      case 'FLEXEND':
        return JustifyContent_FLEXEND_getInstance();
      case 'CENTER':
        return JustifyContent_CENTER_getInstance();
      case 'SPACEBETWEEN':
        return JustifyContent_SPACEBETWEEN_getInstance();
      case 'SPACEAROUND':
        return JustifyContent_SPACEAROUND_getInstance();
      case 'SPACEEVENLY':
        return JustifyContent_SPACEEVENLY_getInstance();
      case 'START':
        return JustifyContent_START_getInstance();
      case 'END':
        return JustifyContent_END_getInstance();
      case 'STRETCH':
        return JustifyContent_STRETCH_getInstance();
      default:
        JustifyContent_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_25() {
    if ($ENTRIES_25 == null)
      $ENTRIES_25 = enumEntries(values_25());
    return $ENTRIES_25;
  }
  var JustifyContent_entriesInitialized;
  function JustifyContent_initEntries() {
    if (JustifyContent_entriesInitialized)
      return Unit_getInstance();
    JustifyContent_entriesInitialized = true;
    JustifyContent_FLEXSTART_instance = new JustifyContent('FLEXSTART', 0, 'flex-start');
    JustifyContent_FLEXEND_instance = new JustifyContent('FLEXEND', 1, 'flex-end');
    JustifyContent_CENTER_instance = new JustifyContent('CENTER', 2, 'center');
    JustifyContent_SPACEBETWEEN_instance = new JustifyContent('SPACEBETWEEN', 3, 'space-between');
    JustifyContent_SPACEAROUND_instance = new JustifyContent('SPACEAROUND', 4, 'space-around');
    JustifyContent_SPACEEVENLY_instance = new JustifyContent('SPACEEVENLY', 5, 'space-evenly');
    JustifyContent_START_instance = new JustifyContent('START', 6, 'start');
    JustifyContent_END_instance = new JustifyContent('END', 7, 'end');
    JustifyContent_STRETCH_instance = new JustifyContent('STRETCH', 8, 'stretch');
  }
  var $ENTRIES_25;
  function JustifyContent(name, ordinal, justifyContent) {
    Enum.call(this, name, ordinal);
    this.justifyContent_1 = justifyContent;
  }
  protoOf(JustifyContent).get_justifyContent_ksrt09_k$ = function () {
    return this.justifyContent_1;
  };
  var UNIT_px_instance;
  var UNIT_pt_instance;
  var UNIT_em_instance;
  var UNIT_cm_instance;
  var UNIT_mm_instance;
  var UNIT_in_instance;
  var UNIT_pc_instance;
  var UNIT_ch_instance;
  var UNIT_rem_instance;
  var UNIT_vw_instance;
  var UNIT_vh_instance;
  var UNIT_vmin_instance;
  var UNIT_vmax_instance;
  var UNIT_perc_instance;
  var UNIT_auto_instance;
  var UNIT_normal_instance;
  function values_26() {
    return [UNIT_px_getInstance(), UNIT_pt_getInstance(), UNIT_em_getInstance(), UNIT_cm_getInstance(), UNIT_mm_getInstance(), UNIT_in_getInstance(), UNIT_pc_getInstance(), UNIT_ch_getInstance(), UNIT_rem_getInstance(), UNIT_vw_getInstance(), UNIT_vh_getInstance(), UNIT_vmin_getInstance(), UNIT_vmax_getInstance(), UNIT_perc_getInstance(), UNIT_auto_getInstance(), UNIT_normal_getInstance()];
  }
  function valueOf_26(value) {
    switch (value) {
      case 'px':
        return UNIT_px_getInstance();
      case 'pt':
        return UNIT_pt_getInstance();
      case 'em':
        return UNIT_em_getInstance();
      case 'cm':
        return UNIT_cm_getInstance();
      case 'mm':
        return UNIT_mm_getInstance();
      case 'in':
        return UNIT_in_getInstance();
      case 'pc':
        return UNIT_pc_getInstance();
      case 'ch':
        return UNIT_ch_getInstance();
      case 'rem':
        return UNIT_rem_getInstance();
      case 'vw':
        return UNIT_vw_getInstance();
      case 'vh':
        return UNIT_vh_getInstance();
      case 'vmin':
        return UNIT_vmin_getInstance();
      case 'vmax':
        return UNIT_vmax_getInstance();
      case 'perc':
        return UNIT_perc_getInstance();
      case 'auto':
        return UNIT_auto_getInstance();
      case 'normal':
        return UNIT_normal_getInstance();
      default:
        UNIT_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_26() {
    if ($ENTRIES_26 == null)
      $ENTRIES_26 = enumEntries(values_26());
    return $ENTRIES_26;
  }
  var UNIT_entriesInitialized;
  function UNIT_initEntries() {
    if (UNIT_entriesInitialized)
      return Unit_getInstance();
    UNIT_entriesInitialized = true;
    UNIT_px_instance = new UNIT('px', 0, 'px');
    UNIT_pt_instance = new UNIT('pt', 1, 'pt');
    UNIT_em_instance = new UNIT('em', 2, 'em');
    UNIT_cm_instance = new UNIT('cm', 3, 'cm');
    UNIT_mm_instance = new UNIT('mm', 4, 'mm');
    UNIT_in_instance = new UNIT('in', 5, 'in');
    UNIT_pc_instance = new UNIT('pc', 6, 'pc');
    UNIT_ch_instance = new UNIT('ch', 7, 'ch');
    UNIT_rem_instance = new UNIT('rem', 8, 'rem');
    UNIT_vw_instance = new UNIT('vw', 9, 'vw');
    UNIT_vh_instance = new UNIT('vh', 10, 'vh');
    UNIT_vmin_instance = new UNIT('vmin', 11, 'vmin');
    UNIT_vmax_instance = new UNIT('vmax', 12, 'vmax');
    UNIT_perc_instance = new UNIT('perc', 13, '%');
    UNIT_auto_instance = new UNIT('auto', 14, 'auto');
    UNIT_normal_instance = new UNIT('normal', 15, 'normal');
  }
  var $ENTRIES_26;
  function UNIT(name, ordinal, unit) {
    Enum.call(this, name, ordinal);
    this.unit_1 = unit;
  }
  protoOf(UNIT).get_unit_tlhtb2_k$ = function () {
    return this.unit_1;
  };
  var OverflowWrap_NORMAL_instance;
  var OverflowWrap_BREAKWORD_instance;
  var OverflowWrap_ANYWHERE_instance;
  function values_27() {
    return [OverflowWrap_NORMAL_getInstance(), OverflowWrap_BREAKWORD_getInstance(), OverflowWrap_ANYWHERE_getInstance()];
  }
  function valueOf_27(value) {
    switch (value) {
      case 'NORMAL':
        return OverflowWrap_NORMAL_getInstance();
      case 'BREAKWORD':
        return OverflowWrap_BREAKWORD_getInstance();
      case 'ANYWHERE':
        return OverflowWrap_ANYWHERE_getInstance();
      default:
        OverflowWrap_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_27() {
    if ($ENTRIES_27 == null)
      $ENTRIES_27 = enumEntries(values_27());
    return $ENTRIES_27;
  }
  var OverflowWrap_entriesInitialized;
  function OverflowWrap_initEntries() {
    if (OverflowWrap_entriesInitialized)
      return Unit_getInstance();
    OverflowWrap_entriesInitialized = true;
    OverflowWrap_NORMAL_instance = new OverflowWrap('NORMAL', 0, 'normal');
    OverflowWrap_BREAKWORD_instance = new OverflowWrap('BREAKWORD', 1, 'break-word');
    OverflowWrap_ANYWHERE_instance = new OverflowWrap('ANYWHERE', 2, 'anywhere');
  }
  var $ENTRIES_27;
  function OverflowWrap(name, ordinal, overflowWrap) {
    Enum.call(this, name, ordinal);
    this.overflowWrap_1 = overflowWrap;
  }
  protoOf(OverflowWrap).get_overflowWrap_i25j92_k$ = function () {
    return this.overflowWrap_1;
  };
  var AlignContent_FLEXSTART_instance;
  var AlignContent_FLEXEND_instance;
  var AlignContent_CENTER_instance;
  var AlignContent_SPACEBETWEEN_instance;
  var AlignContent_SPACEAROUND_instance;
  var AlignContent_STRETCH_instance;
  var AlignContent_START_instance;
  var AlignContent_END_instance;
  var AlignContent_SPACEEVENLY_instance;
  function values_28() {
    return [AlignContent_FLEXSTART_getInstance(), AlignContent_FLEXEND_getInstance(), AlignContent_CENTER_getInstance(), AlignContent_SPACEBETWEEN_getInstance(), AlignContent_SPACEAROUND_getInstance(), AlignContent_STRETCH_getInstance(), AlignContent_START_getInstance(), AlignContent_END_getInstance(), AlignContent_SPACEEVENLY_getInstance()];
  }
  function valueOf_28(value) {
    switch (value) {
      case 'FLEXSTART':
        return AlignContent_FLEXSTART_getInstance();
      case 'FLEXEND':
        return AlignContent_FLEXEND_getInstance();
      case 'CENTER':
        return AlignContent_CENTER_getInstance();
      case 'SPACEBETWEEN':
        return AlignContent_SPACEBETWEEN_getInstance();
      case 'SPACEAROUND':
        return AlignContent_SPACEAROUND_getInstance();
      case 'STRETCH':
        return AlignContent_STRETCH_getInstance();
      case 'START':
        return AlignContent_START_getInstance();
      case 'END':
        return AlignContent_END_getInstance();
      case 'SPACEEVENLY':
        return AlignContent_SPACEEVENLY_getInstance();
      default:
        AlignContent_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_28() {
    if ($ENTRIES_28 == null)
      $ENTRIES_28 = enumEntries(values_28());
    return $ENTRIES_28;
  }
  var AlignContent_entriesInitialized;
  function AlignContent_initEntries() {
    if (AlignContent_entriesInitialized)
      return Unit_getInstance();
    AlignContent_entriesInitialized = true;
    AlignContent_FLEXSTART_instance = new AlignContent('FLEXSTART', 0, 'flex-start');
    AlignContent_FLEXEND_instance = new AlignContent('FLEXEND', 1, 'flex-end');
    AlignContent_CENTER_instance = new AlignContent('CENTER', 2, 'center');
    AlignContent_SPACEBETWEEN_instance = new AlignContent('SPACEBETWEEN', 3, 'space-between');
    AlignContent_SPACEAROUND_instance = new AlignContent('SPACEAROUND', 4, 'space-around');
    AlignContent_STRETCH_instance = new AlignContent('STRETCH', 5, 'stretch');
    AlignContent_START_instance = new AlignContent('START', 6, 'start');
    AlignContent_END_instance = new AlignContent('END', 7, 'end');
    AlignContent_SPACEEVENLY_instance = new AlignContent('SPACEEVENLY', 8, 'space-evenly');
  }
  var $ENTRIES_28;
  function AlignContent(name, ordinal, alignContent) {
    Enum.call(this, name, ordinal);
    this.alignContent_1 = alignContent;
  }
  protoOf(AlignContent).get_alignContent_6xvhpq_k$ = function () {
    return this.alignContent_1;
  };
  var Resize_NONE_instance;
  var Resize_BOTH_instance;
  var Resize_HORIZONTAL_instance;
  var Resize_VERTICAL_instance;
  var Resize_INITIAL_instance;
  var Resize_INHERIT_instance;
  function values_29() {
    return [Resize_NONE_getInstance(), Resize_BOTH_getInstance(), Resize_HORIZONTAL_getInstance(), Resize_VERTICAL_getInstance(), Resize_INITIAL_getInstance(), Resize_INHERIT_getInstance()];
  }
  function valueOf_29(value) {
    switch (value) {
      case 'NONE':
        return Resize_NONE_getInstance();
      case 'BOTH':
        return Resize_BOTH_getInstance();
      case 'HORIZONTAL':
        return Resize_HORIZONTAL_getInstance();
      case 'VERTICAL':
        return Resize_VERTICAL_getInstance();
      case 'INITIAL':
        return Resize_INITIAL_getInstance();
      case 'INHERIT':
        return Resize_INHERIT_getInstance();
      default:
        Resize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_29() {
    if ($ENTRIES_29 == null)
      $ENTRIES_29 = enumEntries(values_29());
    return $ENTRIES_29;
  }
  var Resize_entriesInitialized;
  function Resize_initEntries() {
    if (Resize_entriesInitialized)
      return Unit_getInstance();
    Resize_entriesInitialized = true;
    Resize_NONE_instance = new Resize('NONE', 0, 'none');
    Resize_BOTH_instance = new Resize('BOTH', 1, 'both');
    Resize_HORIZONTAL_instance = new Resize('HORIZONTAL', 2, 'horizontal');
    Resize_VERTICAL_instance = new Resize('VERTICAL', 3, 'vertical');
    Resize_INITIAL_instance = new Resize('INITIAL', 4, 'initial');
    Resize_INHERIT_instance = new Resize('INHERIT', 5, 'inherit');
  }
  var $ENTRIES_29;
  function Resize(name, ordinal, resize) {
    Enum.call(this, name, ordinal);
    this.resize_1 = resize;
  }
  protoOf(Resize).get_resize_t3jage_k$ = function () {
    return this.resize_1;
  };
  var BgSize_COVER_instance;
  var BgSize_CONTAIN_instance;
  function values_30() {
    return [BgSize_COVER_getInstance(), BgSize_CONTAIN_getInstance()];
  }
  function valueOf_30(value) {
    switch (value) {
      case 'COVER':
        return BgSize_COVER_getInstance();
      case 'CONTAIN':
        return BgSize_CONTAIN_getInstance();
      default:
        BgSize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_30() {
    if ($ENTRIES_30 == null)
      $ENTRIES_30 = enumEntries(values_30());
    return $ENTRIES_30;
  }
  var BgSize_entriesInitialized;
  function BgSize_initEntries() {
    if (BgSize_entriesInitialized)
      return Unit_getInstance();
    BgSize_entriesInitialized = true;
    BgSize_COVER_instance = new BgSize('COVER', 0, 'cover');
    BgSize_CONTAIN_instance = new BgSize('CONTAIN', 1, 'contain');
  }
  var $ENTRIES_30;
  function BgSize(name, ordinal, size) {
    Enum.call(this, name, ordinal);
    this.size_1 = size;
  }
  protoOf(BgSize).get_size_2uq9ep_k$ = function () {
    return this.size_1;
  };
  var BgRepeat_REPEAT_instance;
  var BgRepeat_REPEATX_instance;
  var BgRepeat_REPEATY_instance;
  var BgRepeat_NOREPEAT_instance;
  function values_31() {
    return [BgRepeat_REPEAT_getInstance(), BgRepeat_REPEATX_getInstance(), BgRepeat_REPEATY_getInstance(), BgRepeat_NOREPEAT_getInstance()];
  }
  function valueOf_31(value) {
    switch (value) {
      case 'REPEAT':
        return BgRepeat_REPEAT_getInstance();
      case 'REPEATX':
        return BgRepeat_REPEATX_getInstance();
      case 'REPEATY':
        return BgRepeat_REPEATY_getInstance();
      case 'NOREPEAT':
        return BgRepeat_NOREPEAT_getInstance();
      default:
        BgRepeat_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_31() {
    if ($ENTRIES_31 == null)
      $ENTRIES_31 = enumEntries(values_31());
    return $ENTRIES_31;
  }
  var BgRepeat_entriesInitialized;
  function BgRepeat_initEntries() {
    if (BgRepeat_entriesInitialized)
      return Unit_getInstance();
    BgRepeat_entriesInitialized = true;
    BgRepeat_REPEAT_instance = new BgRepeat('REPEAT', 0, 'repeat');
    BgRepeat_REPEATX_instance = new BgRepeat('REPEATX', 1, 'repeat-x');
    BgRepeat_REPEATY_instance = new BgRepeat('REPEATY', 2, 'repeat-y');
    BgRepeat_NOREPEAT_instance = new BgRepeat('NOREPEAT', 3, 'no-repeat');
  }
  var $ENTRIES_31;
  function BgRepeat(name, ordinal, repeat) {
    Enum.call(this, name, ordinal);
    this.repeat_1 = repeat;
  }
  protoOf(BgRepeat).get_repeat_v2xc1l_k$ = function () {
    return this.repeat_1;
  };
  var BgOrigin_PADDING_instance;
  var BgOrigin_BORDER_instance;
  var BgOrigin_CONTENT_instance;
  function values_32() {
    return [BgOrigin_PADDING_getInstance(), BgOrigin_BORDER_getInstance(), BgOrigin_CONTENT_getInstance()];
  }
  function valueOf_32(value) {
    switch (value) {
      case 'PADDING':
        return BgOrigin_PADDING_getInstance();
      case 'BORDER':
        return BgOrigin_BORDER_getInstance();
      case 'CONTENT':
        return BgOrigin_CONTENT_getInstance();
      default:
        BgOrigin_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_32() {
    if ($ENTRIES_32 == null)
      $ENTRIES_32 = enumEntries(values_32());
    return $ENTRIES_32;
  }
  var BgOrigin_entriesInitialized;
  function BgOrigin_initEntries() {
    if (BgOrigin_entriesInitialized)
      return Unit_getInstance();
    BgOrigin_entriesInitialized = true;
    BgOrigin_PADDING_instance = new BgOrigin('PADDING', 0, 'padding-box');
    BgOrigin_BORDER_instance = new BgOrigin('BORDER', 1, 'border-box');
    BgOrigin_CONTENT_instance = new BgOrigin('CONTENT', 2, 'content-box');
  }
  var $ENTRIES_32;
  function BgOrigin(name, ordinal, origin) {
    Enum.call(this, name, ordinal);
    this.origin_1 = origin;
  }
  protoOf(BgOrigin).get_origin_ova8qs_k$ = function () {
    return this.origin_1;
  };
  var BgClip_PADDING_instance;
  var BgClip_BORDER_instance;
  var BgClip_CONTENT_instance;
  function values_33() {
    return [BgClip_PADDING_getInstance(), BgClip_BORDER_getInstance(), BgClip_CONTENT_getInstance()];
  }
  function valueOf_33(value) {
    switch (value) {
      case 'PADDING':
        return BgClip_PADDING_getInstance();
      case 'BORDER':
        return BgClip_BORDER_getInstance();
      case 'CONTENT':
        return BgClip_CONTENT_getInstance();
      default:
        BgClip_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_33() {
    if ($ENTRIES_33 == null)
      $ENTRIES_33 = enumEntries(values_33());
    return $ENTRIES_33;
  }
  var BgClip_entriesInitialized;
  function BgClip_initEntries() {
    if (BgClip_entriesInitialized)
      return Unit_getInstance();
    BgClip_entriesInitialized = true;
    BgClip_PADDING_instance = new BgClip('PADDING', 0, 'padding-box');
    BgClip_BORDER_instance = new BgClip('BORDER', 1, 'border-box');
    BgClip_CONTENT_instance = new BgClip('CONTENT', 2, 'content-box');
  }
  var $ENTRIES_33;
  function BgClip(name, ordinal, clip) {
    Enum.call(this, name, ordinal);
    this.clip_1 = clip;
  }
  protoOf(BgClip).get_clip_9s1u0e_k$ = function () {
    return this.clip_1;
  };
  var BgAttach_SCROLL_instance;
  var BgAttach_FIXED_instance;
  var BgAttach_LOCAL_instance;
  function values_34() {
    return [BgAttach_SCROLL_getInstance(), BgAttach_FIXED_getInstance(), BgAttach_LOCAL_getInstance()];
  }
  function valueOf_34(value) {
    switch (value) {
      case 'SCROLL':
        return BgAttach_SCROLL_getInstance();
      case 'FIXED':
        return BgAttach_FIXED_getInstance();
      case 'LOCAL':
        return BgAttach_LOCAL_getInstance();
      default:
        BgAttach_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_34() {
    if ($ENTRIES_34 == null)
      $ENTRIES_34 = enumEntries(values_34());
    return $ENTRIES_34;
  }
  var BgAttach_entriesInitialized;
  function BgAttach_initEntries() {
    if (BgAttach_entriesInitialized)
      return Unit_getInstance();
    BgAttach_entriesInitialized = true;
    BgAttach_SCROLL_instance = new BgAttach('SCROLL', 0, 'scroll');
    BgAttach_FIXED_instance = new BgAttach('FIXED', 1, 'fixed');
    BgAttach_LOCAL_instance = new BgAttach('LOCAL', 2, 'local');
  }
  var $ENTRIES_34;
  function BgAttach(name, ordinal, attachment) {
    Enum.call(this, name, ordinal);
    this.attachment_1 = attachment;
  }
  protoOf(BgAttach).get_attachment_qofup_k$ = function () {
    return this.attachment_1;
  };
  var OutlineStyle_AUTO_instance;
  var OutlineStyle_NONE_instance;
  var OutlineStyle_HIDDEN_instance;
  var OutlineStyle_DOTTED_instance;
  var OutlineStyle_DASHED_instance;
  var OutlineStyle_SOLID_instance;
  var OutlineStyle_DOUBLE_instance;
  var OutlineStyle_GROOVE_instance;
  var OutlineStyle_RIDGE_instance;
  var OutlineStyle_INSET_instance;
  var OutlineStyle_OUTSET_instance;
  var OutlineStyle_INITIAL_instance;
  var OutlineStyle_INHERIT_instance;
  var OutlineStyle_UNSET_instance;
  function values_35() {
    return [OutlineStyle_AUTO_getInstance(), OutlineStyle_NONE_getInstance(), OutlineStyle_HIDDEN_getInstance(), OutlineStyle_DOTTED_getInstance(), OutlineStyle_DASHED_getInstance(), OutlineStyle_SOLID_getInstance(), OutlineStyle_DOUBLE_getInstance(), OutlineStyle_GROOVE_getInstance(), OutlineStyle_RIDGE_getInstance(), OutlineStyle_INSET_getInstance(), OutlineStyle_OUTSET_getInstance(), OutlineStyle_INITIAL_getInstance(), OutlineStyle_INHERIT_getInstance(), OutlineStyle_UNSET_getInstance()];
  }
  function valueOf_35(value) {
    switch (value) {
      case 'AUTO':
        return OutlineStyle_AUTO_getInstance();
      case 'NONE':
        return OutlineStyle_NONE_getInstance();
      case 'HIDDEN':
        return OutlineStyle_HIDDEN_getInstance();
      case 'DOTTED':
        return OutlineStyle_DOTTED_getInstance();
      case 'DASHED':
        return OutlineStyle_DASHED_getInstance();
      case 'SOLID':
        return OutlineStyle_SOLID_getInstance();
      case 'DOUBLE':
        return OutlineStyle_DOUBLE_getInstance();
      case 'GROOVE':
        return OutlineStyle_GROOVE_getInstance();
      case 'RIDGE':
        return OutlineStyle_RIDGE_getInstance();
      case 'INSET':
        return OutlineStyle_INSET_getInstance();
      case 'OUTSET':
        return OutlineStyle_OUTSET_getInstance();
      case 'INITIAL':
        return OutlineStyle_INITIAL_getInstance();
      case 'INHERIT':
        return OutlineStyle_INHERIT_getInstance();
      case 'UNSET':
        return OutlineStyle_UNSET_getInstance();
      default:
        OutlineStyle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_35() {
    if ($ENTRIES_35 == null)
      $ENTRIES_35 = enumEntries(values_35());
    return $ENTRIES_35;
  }
  var OutlineStyle_entriesInitialized;
  function OutlineStyle_initEntries() {
    if (OutlineStyle_entriesInitialized)
      return Unit_getInstance();
    OutlineStyle_entriesInitialized = true;
    OutlineStyle_AUTO_instance = new OutlineStyle('AUTO', 0, 'auto');
    OutlineStyle_NONE_instance = new OutlineStyle('NONE', 1, 'none');
    OutlineStyle_HIDDEN_instance = new OutlineStyle('HIDDEN', 2, 'hidden');
    OutlineStyle_DOTTED_instance = new OutlineStyle('DOTTED', 3, 'dotted');
    OutlineStyle_DASHED_instance = new OutlineStyle('DASHED', 4, 'dashed');
    OutlineStyle_SOLID_instance = new OutlineStyle('SOLID', 5, 'solid');
    OutlineStyle_DOUBLE_instance = new OutlineStyle('DOUBLE', 6, 'double');
    OutlineStyle_GROOVE_instance = new OutlineStyle('GROOVE', 7, 'groove');
    OutlineStyle_RIDGE_instance = new OutlineStyle('RIDGE', 8, 'ridge');
    OutlineStyle_INSET_instance = new OutlineStyle('INSET', 9, 'inset');
    OutlineStyle_OUTSET_instance = new OutlineStyle('OUTSET', 10, 'outset');
    OutlineStyle_INITIAL_instance = new OutlineStyle('INITIAL', 11, 'initial');
    OutlineStyle_INHERIT_instance = new OutlineStyle('INHERIT', 12, 'inherit');
    OutlineStyle_UNSET_instance = new OutlineStyle('UNSET', 13, 'unset');
  }
  var $ENTRIES_35;
  function OutlineStyle(name, ordinal, outlineStyle) {
    Enum.call(this, name, ordinal);
    this.outlineStyle_1 = outlineStyle;
  }
  protoOf(OutlineStyle).get_outlineStyle_adwdwt_k$ = function () {
    return this.outlineStyle_1;
  };
  var TextDecorationLine_NONE_instance;
  var TextDecorationLine_UNDERLINE_instance;
  var TextDecorationLine_OVERLINE_instance;
  var TextDecorationLine_LINETHROUGH_instance;
  var TextDecorationLine_JUSTIFY_instance;
  var TextDecorationLine_INITIAL_instance;
  var TextDecorationLine_INHERIT_instance;
  function values_36() {
    return [TextDecorationLine_NONE_getInstance(), TextDecorationLine_UNDERLINE_getInstance(), TextDecorationLine_OVERLINE_getInstance(), TextDecorationLine_LINETHROUGH_getInstance(), TextDecorationLine_JUSTIFY_getInstance(), TextDecorationLine_INITIAL_getInstance(), TextDecorationLine_INHERIT_getInstance()];
  }
  function valueOf_36(value) {
    switch (value) {
      case 'NONE':
        return TextDecorationLine_NONE_getInstance();
      case 'UNDERLINE':
        return TextDecorationLine_UNDERLINE_getInstance();
      case 'OVERLINE':
        return TextDecorationLine_OVERLINE_getInstance();
      case 'LINETHROUGH':
        return TextDecorationLine_LINETHROUGH_getInstance();
      case 'JUSTIFY':
        return TextDecorationLine_JUSTIFY_getInstance();
      case 'INITIAL':
        return TextDecorationLine_INITIAL_getInstance();
      case 'INHERIT':
        return TextDecorationLine_INHERIT_getInstance();
      default:
        TextDecorationLine_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_36() {
    if ($ENTRIES_36 == null)
      $ENTRIES_36 = enumEntries(values_36());
    return $ENTRIES_36;
  }
  var TextDecorationLine_entriesInitialized;
  function TextDecorationLine_initEntries() {
    if (TextDecorationLine_entriesInitialized)
      return Unit_getInstance();
    TextDecorationLine_entriesInitialized = true;
    TextDecorationLine_NONE_instance = new TextDecorationLine('NONE', 0, 'none');
    TextDecorationLine_UNDERLINE_instance = new TextDecorationLine('UNDERLINE', 1, 'underline');
    TextDecorationLine_OVERLINE_instance = new TextDecorationLine('OVERLINE', 2, 'overline');
    TextDecorationLine_LINETHROUGH_instance = new TextDecorationLine('LINETHROUGH', 3, 'line-through');
    TextDecorationLine_JUSTIFY_instance = new TextDecorationLine('JUSTIFY', 4, 'justify');
    TextDecorationLine_INITIAL_instance = new TextDecorationLine('INITIAL', 5, 'initial');
    TextDecorationLine_INHERIT_instance = new TextDecorationLine('INHERIT', 6, 'inherit');
  }
  var $ENTRIES_36;
  function TextDecorationLine(name, ordinal, textDecorationLine) {
    Enum.call(this, name, ordinal);
    this.textDecorationLine_1 = textDecorationLine;
  }
  protoOf(TextDecorationLine).get_textDecorationLine_nkxrbl_k$ = function () {
    return this.textDecorationLine_1;
  };
  var TextDecorationStyle_SOLID_instance;
  var TextDecorationStyle_DOUBLE_instance;
  var TextDecorationStyle_DOTTED_instance;
  var TextDecorationStyle_DASHED_instance;
  var TextDecorationStyle_WAVY_instance;
  var TextDecorationStyle_INITIAL_instance;
  var TextDecorationStyle_INHERIT_instance;
  function values_37() {
    return [TextDecorationStyle_SOLID_getInstance(), TextDecorationStyle_DOUBLE_getInstance(), TextDecorationStyle_DOTTED_getInstance(), TextDecorationStyle_DASHED_getInstance(), TextDecorationStyle_WAVY_getInstance(), TextDecorationStyle_INITIAL_getInstance(), TextDecorationStyle_INHERIT_getInstance()];
  }
  function valueOf_37(value) {
    switch (value) {
      case 'SOLID':
        return TextDecorationStyle_SOLID_getInstance();
      case 'DOUBLE':
        return TextDecorationStyle_DOUBLE_getInstance();
      case 'DOTTED':
        return TextDecorationStyle_DOTTED_getInstance();
      case 'DASHED':
        return TextDecorationStyle_DASHED_getInstance();
      case 'WAVY':
        return TextDecorationStyle_WAVY_getInstance();
      case 'INITIAL':
        return TextDecorationStyle_INITIAL_getInstance();
      case 'INHERIT':
        return TextDecorationStyle_INHERIT_getInstance();
      default:
        TextDecorationStyle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_37() {
    if ($ENTRIES_37 == null)
      $ENTRIES_37 = enumEntries(values_37());
    return $ENTRIES_37;
  }
  var TextDecorationStyle_entriesInitialized;
  function TextDecorationStyle_initEntries() {
    if (TextDecorationStyle_entriesInitialized)
      return Unit_getInstance();
    TextDecorationStyle_entriesInitialized = true;
    TextDecorationStyle_SOLID_instance = new TextDecorationStyle('SOLID', 0, 'solid');
    TextDecorationStyle_DOUBLE_instance = new TextDecorationStyle('DOUBLE', 1, 'double');
    TextDecorationStyle_DOTTED_instance = new TextDecorationStyle('DOTTED', 2, 'dotted');
    TextDecorationStyle_DASHED_instance = new TextDecorationStyle('DASHED', 3, 'dashed');
    TextDecorationStyle_WAVY_instance = new TextDecorationStyle('WAVY', 4, 'wavy');
    TextDecorationStyle_INITIAL_instance = new TextDecorationStyle('INITIAL', 5, 'initial');
    TextDecorationStyle_INHERIT_instance = new TextDecorationStyle('INHERIT', 6, 'inherit');
  }
  var $ENTRIES_37;
  function TextDecorationStyle(name, ordinal, textDecorationStyle) {
    Enum.call(this, name, ordinal);
    this.textDecorationStyle_1 = textDecorationStyle;
  }
  protoOf(TextDecorationStyle).get_textDecorationStyle_8bgjds_k$ = function () {
    return this.textDecorationStyle_1;
  };
  var ListStylePosition_INSIDE_instance;
  var ListStylePosition_OUTSIDE_instance;
  function values_38() {
    return [ListStylePosition_INSIDE_getInstance(), ListStylePosition_OUTSIDE_getInstance()];
  }
  function valueOf_38(value) {
    switch (value) {
      case 'INSIDE':
        return ListStylePosition_INSIDE_getInstance();
      case 'OUTSIDE':
        return ListStylePosition_OUTSIDE_getInstance();
      default:
        ListStylePosition_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_38() {
    if ($ENTRIES_38 == null)
      $ENTRIES_38 = enumEntries(values_38());
    return $ENTRIES_38;
  }
  var ListStylePosition_entriesInitialized;
  function ListStylePosition_initEntries() {
    if (ListStylePosition_entriesInitialized)
      return Unit_getInstance();
    ListStylePosition_entriesInitialized = true;
    ListStylePosition_INSIDE_instance = new ListStylePosition('INSIDE', 0, 'inside');
    ListStylePosition_OUTSIDE_instance = new ListStylePosition('OUTSIDE', 1, 'outside');
  }
  var $ENTRIES_38;
  function ListStylePosition(name, ordinal, position) {
    Enum.call(this, name, ordinal);
    this.position_1 = position;
  }
  protoOf(ListStylePosition).get_position_ue28av_k$ = function () {
    return this.position_1;
  };
  function FlexDirection_ROW_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_ROW_instance;
  }
  function FlexDirection_ROWREV_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_ROWREV_instance;
  }
  function FlexDirection_COLUMN_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_COLUMN_instance;
  }
  function FlexDirection_COLUMNREV_getInstance() {
    FlexDirection_initEntries();
    return FlexDirection_COLUMNREV_instance;
  }
  function TextTransform_NONE_getInstance() {
    TextTransform_initEntries();
    return TextTransform_NONE_instance;
  }
  function TextTransform_CAPITALIZE_getInstance() {
    TextTransform_initEntries();
    return TextTransform_CAPITALIZE_instance;
  }
  function TextTransform_UPPERCASE_getInstance() {
    TextTransform_initEntries();
    return TextTransform_UPPERCASE_instance;
  }
  function TextTransform_LOWERCASE_getInstance() {
    TextTransform_initEntries();
    return TextTransform_LOWERCASE_instance;
  }
  function TextTransform_INITIAL_getInstance() {
    TextTransform_initEntries();
    return TextTransform_INITIAL_instance;
  }
  function TextTransform_INHERIT_getInstance() {
    TextTransform_initEntries();
    return TextTransform_INHERIT_instance;
  }
  function PosFloat_NONE_getInstance() {
    PosFloat_initEntries();
    return PosFloat_NONE_instance;
  }
  function PosFloat_LEFT_getInstance() {
    PosFloat_initEntries();
    return PosFloat_LEFT_instance;
  }
  function PosFloat_RIGHT_getInstance() {
    PosFloat_initEntries();
    return PosFloat_RIGHT_instance;
  }
  function PosFloat_INITIAL_getInstance() {
    PosFloat_initEntries();
    return PosFloat_INITIAL_instance;
  }
  function PosFloat_INHERIT_getInstance() {
    PosFloat_initEntries();
    return PosFloat_INHERIT_instance;
  }
  function WordBreak_NORMAL_getInstance() {
    WordBreak_initEntries();
    return WordBreak_NORMAL_instance;
  }
  function WordBreak_KEEPALL_getInstance() {
    WordBreak_initEntries();
    return WordBreak_KEEPALL_instance;
  }
  function WordBreak_BREAKALL_getInstance() {
    WordBreak_initEntries();
    return WordBreak_BREAKALL_instance;
  }
  function VerticalAlign_BASELINE_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_BASELINE_instance;
  }
  function VerticalAlign_SUB_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_SUB_instance;
  }
  function VerticalAlign_SUPER_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_SUPER_instance;
  }
  function VerticalAlign_TOP_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_TOP_instance;
  }
  function VerticalAlign_TEXTTOP_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_TEXTTOP_instance;
  }
  function VerticalAlign_MIDDLE_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_MIDDLE_instance;
  }
  function VerticalAlign_BOTTOM_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_BOTTOM_instance;
  }
  function VerticalAlign_TEXTBOTTOM_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_TEXTBOTTOM_instance;
  }
  function VerticalAlign_INITIAL_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_INITIAL_instance;
  }
  function VerticalAlign_INHERIT_getInstance() {
    VerticalAlign_initEntries();
    return VerticalAlign_INHERIT_instance;
  }
  function FontWeight_NORMAL_getInstance() {
    FontWeight_initEntries();
    return FontWeight_NORMAL_instance;
  }
  function FontWeight_BOLD_getInstance() {
    FontWeight_initEntries();
    return FontWeight_BOLD_instance;
  }
  function FontWeight_BOLDER_getInstance() {
    FontWeight_initEntries();
    return FontWeight_BOLDER_instance;
  }
  function FontWeight_LIGHTER_getInstance() {
    FontWeight_initEntries();
    return FontWeight_LIGHTER_instance;
  }
  function FontWeight_INITIAL_getInstance() {
    FontWeight_initEntries();
    return FontWeight_INITIAL_instance;
  }
  function FontWeight_INHERIT_getInstance() {
    FontWeight_initEntries();
    return FontWeight_INHERIT_instance;
  }
  function UnicodeBidi_NORMAL_getInstance() {
    UnicodeBidi_initEntries();
    return UnicodeBidi_NORMAL_instance;
  }
  function UnicodeBidi_EMBED_getInstance() {
    UnicodeBidi_initEntries();
    return UnicodeBidi_EMBED_instance;
  }
  function UnicodeBidi_BIDIOVERRIDE_getInstance() {
    UnicodeBidi_initEntries();
    return UnicodeBidi_BIDIOVERRIDE_instance;
  }
  function UnicodeBidi_INITIAL_getInstance() {
    UnicodeBidi_initEntries();
    return UnicodeBidi_INITIAL_instance;
  }
  function UnicodeBidi_INHERIT_getInstance() {
    UnicodeBidi_initEntries();
    return UnicodeBidi_INHERIT_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_INITIAL_getInstance() {
    Direction_initEntries();
    return Direction_INITIAL_instance;
  }
  function Direction_INHERIT_getInstance() {
    Direction_initEntries();
    return Direction_INHERIT_instance;
  }
  function BorderStyle_NONE_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_NONE_instance;
  }
  function BorderStyle_HIDDEN_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_HIDDEN_instance;
  }
  function BorderStyle_DOTTED_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_DOTTED_instance;
  }
  function BorderStyle_DASHED_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_DASHED_instance;
  }
  function BorderStyle_SOLID_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_SOLID_instance;
  }
  function BorderStyle_DOUBLE_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_DOUBLE_instance;
  }
  function BorderStyle_GROOVE_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_GROOVE_instance;
  }
  function BorderStyle_RIDGE_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_RIDGE_instance;
  }
  function BorderStyle_INSET_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_INSET_instance;
  }
  function BorderStyle_OUTSET_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_OUTSET_instance;
  }
  function BorderStyle_INITIAL_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_INITIAL_instance;
  }
  function BorderStyle_INHERIT_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_INHERIT_instance;
  }
  function BorderStyle_UNSET_getInstance() {
    BorderStyle_initEntries();
    return BorderStyle_UNSET_instance;
  }
  function Display_INLINE_getInstance() {
    Display_initEntries();
    return Display_INLINE_instance;
  }
  function Display_BLOCK_getInstance() {
    Display_initEntries();
    return Display_BLOCK_instance;
  }
  function Display_FLEX_getInstance() {
    Display_initEntries();
    return Display_FLEX_instance;
  }
  function Display_GRID_getInstance() {
    Display_initEntries();
    return Display_GRID_instance;
  }
  function Display_INLINEBLOCK_getInstance() {
    Display_initEntries();
    return Display_INLINEBLOCK_instance;
  }
  function Display_INLINEFLEX_getInstance() {
    Display_initEntries();
    return Display_INLINEFLEX_instance;
  }
  function Display_INLINEGRID_getInstance() {
    Display_initEntries();
    return Display_INLINEGRID_instance;
  }
  function Display_INLINETABLE_getInstance() {
    Display_initEntries();
    return Display_INLINETABLE_instance;
  }
  function Display_LISTITEM_getInstance() {
    Display_initEntries();
    return Display_LISTITEM_instance;
  }
  function Display_RUNIN_getInstance() {
    Display_initEntries();
    return Display_RUNIN_instance;
  }
  function Display_TABLE_getInstance() {
    Display_initEntries();
    return Display_TABLE_instance;
  }
  function Display_TABLECAPTION_getInstance() {
    Display_initEntries();
    return Display_TABLECAPTION_instance;
  }
  function Display_TABLECOLUMNGROUP_getInstance() {
    Display_initEntries();
    return Display_TABLECOLUMNGROUP_instance;
  }
  function Display_TABLEHEADERGROUP_getInstance() {
    Display_initEntries();
    return Display_TABLEHEADERGROUP_instance;
  }
  function Display_TABLEFOOTERGROUP_getInstance() {
    Display_initEntries();
    return Display_TABLEFOOTERGROUP_instance;
  }
  function Display_TABLEROWGROUP_getInstance() {
    Display_initEntries();
    return Display_TABLEROWGROUP_instance;
  }
  function Display_TABLECELL_getInstance() {
    Display_initEntries();
    return Display_TABLECELL_instance;
  }
  function Display_TABLECOLUMN_getInstance() {
    Display_initEntries();
    return Display_TABLECOLUMN_instance;
  }
  function Display_TABLEROW_getInstance() {
    Display_initEntries();
    return Display_TABLEROW_instance;
  }
  function Display_CONTENTS_getInstance() {
    Display_initEntries();
    return Display_CONTENTS_instance;
  }
  function Display_NONE_getInstance() {
    Display_initEntries();
    return Display_NONE_instance;
  }
  function Display_INITIAL_getInstance() {
    Display_initEntries();
    return Display_INITIAL_instance;
  }
  function Display_INHERIT_getInstance() {
    Display_initEntries();
    return Display_INHERIT_instance;
  }
  function ListStyleType_DISC_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_DISC_instance;
  }
  function ListStyleType_CIRCLE_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_CIRCLE_instance;
  }
  function ListStyleType_SQUARE_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_SQUARE_instance;
  }
  function ListStyleType_DECIMAL_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_DECIMAL_instance;
  }
  function ListStyleType_CJKDECIMAL_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_CJKDECIMAL_instance;
  }
  function ListStyleType_DECIMALLEADINGZERO_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_DECIMALLEADINGZERO_instance;
  }
  function ListStyleType_LOWERROMAN_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_LOWERROMAN_instance;
  }
  function ListStyleType_UPPERROMAN_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_UPPERROMAN_instance;
  }
  function ListStyleType_LOWERGREEK_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_LOWERGREEK_instance;
  }
  function ListStyleType_LOWERLATIN_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_LOWERLATIN_instance;
  }
  function ListStyleType_UPPERALPHA_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_UPPERALPHA_instance;
  }
  function ListStyleType_LOWERALPHA_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_LOWERALPHA_instance;
  }
  function ListStyleType_UPPERLATIN_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_UPPERLATIN_instance;
  }
  function ListStyleType_ARABICINDIC_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_ARABICINDIC_instance;
  }
  function ListStyleType_ARMENIAN_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_ARMENIAN_instance;
  }
  function ListStyleType_BENGALI_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_BENGALI_instance;
  }
  function ListStyleType_CAMBODIAN_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_CAMBODIAN_instance;
  }
  function ListStyleType_CJKIDEOGRAPHIC_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_CJKIDEOGRAPHIC_instance;
  }
  function ListStyleType_GEORGIAN_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_GEORGIAN_instance;
  }
  function ListStyleType_HEBREW_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_HEBREW_instance;
  }
  function ListStyleType_HIRAGANA_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_HIRAGANA_instance;
  }
  function ListStyleType_HIRAGANAIROHA_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_HIRAGANAIROHA_instance;
  }
  function ListStyleType_JAPANESEFORMAL_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_JAPANESEFORMAL_instance;
  }
  function ListStyleType_JAPANESEINFORMAL_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_JAPANESEINFORMAL_instance;
  }
  function ListStyleType_KATAKANA_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_KATAKANA_instance;
  }
  function ListStyleType_KATAKANAIROHA_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_KATAKANAIROHA_instance;
  }
  function ListStyleType_NONE_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_NONE_instance;
  }
  function ListStyleType_INITIAL_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_INITIAL_instance;
  }
  function ListStyleType_INHERIT_getInstance() {
    ListStyleType_initEntries();
    return ListStyleType_INHERIT_instance;
  }
  function Overflow_VISIBLE_getInstance() {
    Overflow_initEntries();
    return Overflow_VISIBLE_instance;
  }
  function Overflow_HIDDEN_getInstance() {
    Overflow_initEntries();
    return Overflow_HIDDEN_instance;
  }
  function Overflow_SCROLL_getInstance() {
    Overflow_initEntries();
    return Overflow_SCROLL_instance;
  }
  function Overflow_AUTO_getInstance() {
    Overflow_initEntries();
    return Overflow_AUTO_instance;
  }
  function Overflow_INITIAL_getInstance() {
    Overflow_initEntries();
    return Overflow_INITIAL_instance;
  }
  function Overflow_INHERIT_getInstance() {
    Overflow_initEntries();
    return Overflow_INHERIT_instance;
  }
  function TextAlign_LEFT_getInstance() {
    TextAlign_initEntries();
    return TextAlign_LEFT_instance;
  }
  function TextAlign_RIGHT_getInstance() {
    TextAlign_initEntries();
    return TextAlign_RIGHT_instance;
  }
  function TextAlign_CENTER_getInstance() {
    TextAlign_initEntries();
    return TextAlign_CENTER_instance;
  }
  function TextAlign_JUSTIFY_getInstance() {
    TextAlign_initEntries();
    return TextAlign_JUSTIFY_instance;
  }
  function TextAlign_INITIAL_getInstance() {
    TextAlign_initEntries();
    return TextAlign_INITIAL_instance;
  }
  function TextAlign_INHERIT_getInstance() {
    TextAlign_initEntries();
    return TextAlign_INHERIT_instance;
  }
  function FontVariant_NORMAL_getInstance() {
    FontVariant_initEntries();
    return FontVariant_NORMAL_instance;
  }
  function FontVariant_SMALLCAPS_getInstance() {
    FontVariant_initEntries();
    return FontVariant_SMALLCAPS_instance;
  }
  function FontVariant_INITIAL_getInstance() {
    FontVariant_initEntries();
    return FontVariant_INITIAL_instance;
  }
  function FontVariant_INHERIT_getInstance() {
    FontVariant_initEntries();
    return FontVariant_INHERIT_instance;
  }
  function Cursor_DEFAULT_getInstance() {
    Cursor_initEntries();
    return Cursor_DEFAULT_instance;
  }
  function Cursor_AUTO_getInstance() {
    Cursor_initEntries();
    return Cursor_AUTO_instance;
  }
  function Cursor_NONE_getInstance() {
    Cursor_initEntries();
    return Cursor_NONE_instance;
  }
  function Cursor_ALIAS_getInstance() {
    Cursor_initEntries();
    return Cursor_ALIAS_instance;
  }
  function Cursor_ALLSCROLL_getInstance() {
    Cursor_initEntries();
    return Cursor_ALLSCROLL_instance;
  }
  function Cursor_CELL_getInstance() {
    Cursor_initEntries();
    return Cursor_CELL_instance;
  }
  function Cursor_CONTEXTMENU_getInstance() {
    Cursor_initEntries();
    return Cursor_CONTEXTMENU_instance;
  }
  function Cursor_COLRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_COLRESIZE_instance;
  }
  function Cursor_COPY_getInstance() {
    Cursor_initEntries();
    return Cursor_COPY_instance;
  }
  function Cursor_CROSSHAIR_getInstance() {
    Cursor_initEntries();
    return Cursor_CROSSHAIR_instance;
  }
  function Cursor_ERESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_ERESIZE_instance;
  }
  function Cursor_EWRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_EWRESIZE_instance;
  }
  function Cursor_GRAB_getInstance() {
    Cursor_initEntries();
    return Cursor_GRAB_instance;
  }
  function Cursor_GRABBING_getInstance() {
    Cursor_initEntries();
    return Cursor_GRABBING_instance;
  }
  function Cursor_HELP_getInstance() {
    Cursor_initEntries();
    return Cursor_HELP_instance;
  }
  function Cursor_MOVE_getInstance() {
    Cursor_initEntries();
    return Cursor_MOVE_instance;
  }
  function Cursor_NRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_NRESIZE_instance;
  }
  function Cursor_NERESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_NERESIZE_instance;
  }
  function Cursor_NESWRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_NESWRESIZE_instance;
  }
  function Cursor_NSRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_NSRESIZE_instance;
  }
  function Cursor_NWRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_NWRESIZE_instance;
  }
  function Cursor_NWSERESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_NWSERESIZE_instance;
  }
  function Cursor_NODROP_getInstance() {
    Cursor_initEntries();
    return Cursor_NODROP_instance;
  }
  function Cursor_NOTALLOWED_getInstance() {
    Cursor_initEntries();
    return Cursor_NOTALLOWED_instance;
  }
  function Cursor_POINTER_getInstance() {
    Cursor_initEntries();
    return Cursor_POINTER_instance;
  }
  function Cursor_PROGRESS_getInstance() {
    Cursor_initEntries();
    return Cursor_PROGRESS_instance;
  }
  function Cursor_ROWRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_ROWRESIZE_instance;
  }
  function Cursor_SRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_SRESIZE_instance;
  }
  function Cursor_SERESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_SERESIZE_instance;
  }
  function Cursor_SWRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_SWRESIZE_instance;
  }
  function Cursor_TEXT_getInstance() {
    Cursor_initEntries();
    return Cursor_TEXT_instance;
  }
  function Cursor_VERTICALTEXT_getInstance() {
    Cursor_initEntries();
    return Cursor_VERTICALTEXT_instance;
  }
  function Cursor_WRESIZE_getInstance() {
    Cursor_initEntries();
    return Cursor_WRESIZE_instance;
  }
  function Cursor_WAIT_getInstance() {
    Cursor_initEntries();
    return Cursor_WAIT_instance;
  }
  function Cursor_ZOOMIN_getInstance() {
    Cursor_initEntries();
    return Cursor_ZOOMIN_instance;
  }
  function Cursor_ZOOMOUT_getInstance() {
    Cursor_initEntries();
    return Cursor_ZOOMOUT_instance;
  }
  function Cursor_INITIAL_getInstance() {
    Cursor_initEntries();
    return Cursor_INITIAL_instance;
  }
  function Cursor_INHERIT_getInstance() {
    Cursor_initEntries();
    return Cursor_INHERIT_instance;
  }
  function AlignItems_FLEXSTART_getInstance() {
    AlignItems_initEntries();
    return AlignItems_FLEXSTART_instance;
  }
  function AlignItems_FLEXEND_getInstance() {
    AlignItems_initEntries();
    return AlignItems_FLEXEND_instance;
  }
  function AlignItems_CENTER_getInstance() {
    AlignItems_initEntries();
    return AlignItems_CENTER_instance;
  }
  function AlignItems_BASELINE_getInstance() {
    AlignItems_initEntries();
    return AlignItems_BASELINE_instance;
  }
  function AlignItems_STRETCH_getInstance() {
    AlignItems_initEntries();
    return AlignItems_STRETCH_instance;
  }
  function AlignItems_START_getInstance() {
    AlignItems_initEntries();
    return AlignItems_START_instance;
  }
  function AlignItems_END_getInstance() {
    AlignItems_initEntries();
    return AlignItems_END_instance;
  }
  function LineBreak_AUTO_getInstance() {
    LineBreak_initEntries();
    return LineBreak_AUTO_instance;
  }
  function LineBreak_LOOSE_getInstance() {
    LineBreak_initEntries();
    return LineBreak_LOOSE_instance;
  }
  function LineBreak_NORMAL_getInstance() {
    LineBreak_initEntries();
    return LineBreak_NORMAL_instance;
  }
  function LineBreak_STRICT_getInstance() {
    LineBreak_initEntries();
    return LineBreak_STRICT_instance;
  }
  function LineBreak_ANYWHERE_getInstance() {
    LineBreak_initEntries();
    return LineBreak_ANYWHERE_instance;
  }
  function FlexWrap_NOWRAP_getInstance() {
    FlexWrap_initEntries();
    return FlexWrap_NOWRAP_instance;
  }
  function FlexWrap_WRAP_getInstance() {
    FlexWrap_initEntries();
    return FlexWrap_WRAP_instance;
  }
  function FlexWrap_WRAPREV_getInstance() {
    FlexWrap_initEntries();
    return FlexWrap_WRAPREV_instance;
  }
  function GridAutoFlow_ROW_getInstance() {
    GridAutoFlow_initEntries();
    return GridAutoFlow_ROW_instance;
  }
  function GridAutoFlow_COLUMN_getInstance() {
    GridAutoFlow_initEntries();
    return GridAutoFlow_COLUMN_instance;
  }
  function GridAutoFlow_ROWDENSE_getInstance() {
    GridAutoFlow_initEntries();
    return GridAutoFlow_ROWDENSE_instance;
  }
  function GridAutoFlow_COLUMNDENSE_getInstance() {
    GridAutoFlow_initEntries();
    return GridAutoFlow_COLUMNDENSE_instance;
  }
  function Clear_NONE_getInstance() {
    Clear_initEntries();
    return Clear_NONE_instance;
  }
  function Clear_LEFT_getInstance() {
    Clear_initEntries();
    return Clear_LEFT_instance;
  }
  function Clear_RIGHT_getInstance() {
    Clear_initEntries();
    return Clear_RIGHT_instance;
  }
  function Clear_BOTH_getInstance() {
    Clear_initEntries();
    return Clear_BOTH_instance;
  }
  function Clear_INITIAL_getInstance() {
    Clear_initEntries();
    return Clear_INITIAL_instance;
  }
  function Clear_INHERIT_getInstance() {
    Clear_initEntries();
    return Clear_INHERIT_instance;
  }
  function TextOverflow_CLIP_getInstance() {
    TextOverflow_initEntries();
    return TextOverflow_CLIP_instance;
  }
  function TextOverflow_ELLIPSIS_getInstance() {
    TextOverflow_initEntries();
    return TextOverflow_ELLIPSIS_instance;
  }
  function TextOverflow_INITIAL_getInstance() {
    TextOverflow_initEntries();
    return TextOverflow_INITIAL_instance;
  }
  function TextOverflow_INHERIT_getInstance() {
    TextOverflow_initEntries();
    return TextOverflow_INHERIT_instance;
  }
  function WhiteSpace_NORMAL_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_NORMAL_instance;
  }
  function WhiteSpace_NOWRAP_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_NOWRAP_instance;
  }
  function WhiteSpace_PRE_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_PRE_instance;
  }
  function WhiteSpace_PRELINE_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_PRELINE_instance;
  }
  function WhiteSpace_PREWRAP_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_PREWRAP_instance;
  }
  function WhiteSpace_INITIAL_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_INITIAL_instance;
  }
  function WhiteSpace_INHERIT_getInstance() {
    WhiteSpace_initEntries();
    return WhiteSpace_INHERIT_instance;
  }
  function JustifyItems_START_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_START_instance;
  }
  function JustifyItems_END_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_END_instance;
  }
  function JustifyItems_CENTER_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_CENTER_instance;
  }
  function JustifyItems_STRETCH_getInstance() {
    JustifyItems_initEntries();
    return JustifyItems_STRETCH_instance;
  }
  function FontStyle_NORMAL_getInstance() {
    FontStyle_initEntries();
    return FontStyle_NORMAL_instance;
  }
  function FontStyle_ITALIC_getInstance() {
    FontStyle_initEntries();
    return FontStyle_ITALIC_instance;
  }
  function FontStyle_OBLIQUE_getInstance() {
    FontStyle_initEntries();
    return FontStyle_OBLIQUE_instance;
  }
  function FontStyle_INITIAL_getInstance() {
    FontStyle_initEntries();
    return FontStyle_INITIAL_instance;
  }
  function FontStyle_INHERIT_getInstance() {
    FontStyle_initEntries();
    return FontStyle_INHERIT_instance;
  }
  function Col_ALICEBLUE_getInstance() {
    Col_initEntries();
    return Col_ALICEBLUE_instance;
  }
  function Col_ANTIQUEWHITE_getInstance() {
    Col_initEntries();
    return Col_ANTIQUEWHITE_instance;
  }
  function Col_AQUA_getInstance() {
    Col_initEntries();
    return Col_AQUA_instance;
  }
  function Col_AQUAMARINE_getInstance() {
    Col_initEntries();
    return Col_AQUAMARINE_instance;
  }
  function Col_AZURE_getInstance() {
    Col_initEntries();
    return Col_AZURE_instance;
  }
  function Col_BEIGE_getInstance() {
    Col_initEntries();
    return Col_BEIGE_instance;
  }
  function Col_BISQUE_getInstance() {
    Col_initEntries();
    return Col_BISQUE_instance;
  }
  function Col_BLACK_getInstance() {
    Col_initEntries();
    return Col_BLACK_instance;
  }
  function Col_BLANCHEDALMOND_getInstance() {
    Col_initEntries();
    return Col_BLANCHEDALMOND_instance;
  }
  function Col_BLUE_getInstance() {
    Col_initEntries();
    return Col_BLUE_instance;
  }
  function Col_BLUEVIOLET_getInstance() {
    Col_initEntries();
    return Col_BLUEVIOLET_instance;
  }
  function Col_BROWN_getInstance() {
    Col_initEntries();
    return Col_BROWN_instance;
  }
  function Col_BURLYWOOD_getInstance() {
    Col_initEntries();
    return Col_BURLYWOOD_instance;
  }
  function Col_CADETBLUE_getInstance() {
    Col_initEntries();
    return Col_CADETBLUE_instance;
  }
  function Col_CHARTREUSE_getInstance() {
    Col_initEntries();
    return Col_CHARTREUSE_instance;
  }
  function Col_CHOCOLATE_getInstance() {
    Col_initEntries();
    return Col_CHOCOLATE_instance;
  }
  function Col_CORAL_getInstance() {
    Col_initEntries();
    return Col_CORAL_instance;
  }
  function Col_CORNFLOWERBLUE_getInstance() {
    Col_initEntries();
    return Col_CORNFLOWERBLUE_instance;
  }
  function Col_CORNSILK_getInstance() {
    Col_initEntries();
    return Col_CORNSILK_instance;
  }
  function Col_CRIMSON_getInstance() {
    Col_initEntries();
    return Col_CRIMSON_instance;
  }
  function Col_CYAN_getInstance() {
    Col_initEntries();
    return Col_CYAN_instance;
  }
  function Col_DARKBLUE_getInstance() {
    Col_initEntries();
    return Col_DARKBLUE_instance;
  }
  function Col_DARKCYAN_getInstance() {
    Col_initEntries();
    return Col_DARKCYAN_instance;
  }
  function Col_DARKGOLDENROD_getInstance() {
    Col_initEntries();
    return Col_DARKGOLDENROD_instance;
  }
  function Col_DARKGRAY_getInstance() {
    Col_initEntries();
    return Col_DARKGRAY_instance;
  }
  function Col_DARKGREEN_getInstance() {
    Col_initEntries();
    return Col_DARKGREEN_instance;
  }
  function Col_DARKKHAKI_getInstance() {
    Col_initEntries();
    return Col_DARKKHAKI_instance;
  }
  function Col_DARKMAGENTA_getInstance() {
    Col_initEntries();
    return Col_DARKMAGENTA_instance;
  }
  function Col_DARKOLIVEGREEN_getInstance() {
    Col_initEntries();
    return Col_DARKOLIVEGREEN_instance;
  }
  function Col_DARKORANGE_getInstance() {
    Col_initEntries();
    return Col_DARKORANGE_instance;
  }
  function Col_DARKORCHID_getInstance() {
    Col_initEntries();
    return Col_DARKORCHID_instance;
  }
  function Col_DARKRED_getInstance() {
    Col_initEntries();
    return Col_DARKRED_instance;
  }
  function Col_DARKSALMON_getInstance() {
    Col_initEntries();
    return Col_DARKSALMON_instance;
  }
  function Col_DARKSEAGREEN_getInstance() {
    Col_initEntries();
    return Col_DARKSEAGREEN_instance;
  }
  function Col_DARKSLATEBLUE_getInstance() {
    Col_initEntries();
    return Col_DARKSLATEBLUE_instance;
  }
  function Col_DARKSLATEGRAY_getInstance() {
    Col_initEntries();
    return Col_DARKSLATEGRAY_instance;
  }
  function Col_DARKTURQUOISE_getInstance() {
    Col_initEntries();
    return Col_DARKTURQUOISE_instance;
  }
  function Col_DARKVIOLET_getInstance() {
    Col_initEntries();
    return Col_DARKVIOLET_instance;
  }
  function Col_DEEPPINK_getInstance() {
    Col_initEntries();
    return Col_DEEPPINK_instance;
  }
  function Col_DEEPSKYBLUE_getInstance() {
    Col_initEntries();
    return Col_DEEPSKYBLUE_instance;
  }
  function Col_DIMGRAY_getInstance() {
    Col_initEntries();
    return Col_DIMGRAY_instance;
  }
  function Col_DODGERBLUE_getInstance() {
    Col_initEntries();
    return Col_DODGERBLUE_instance;
  }
  function Col_FIREBRICK_getInstance() {
    Col_initEntries();
    return Col_FIREBRICK_instance;
  }
  function Col_FLORALWHITE_getInstance() {
    Col_initEntries();
    return Col_FLORALWHITE_instance;
  }
  function Col_FORESTGREEN_getInstance() {
    Col_initEntries();
    return Col_FORESTGREEN_instance;
  }
  function Col_FUCHSIA_getInstance() {
    Col_initEntries();
    return Col_FUCHSIA_instance;
  }
  function Col_GAINSBORO_getInstance() {
    Col_initEntries();
    return Col_GAINSBORO_instance;
  }
  function Col_GHOSTWHITE_getInstance() {
    Col_initEntries();
    return Col_GHOSTWHITE_instance;
  }
  function Col_GOLD_getInstance() {
    Col_initEntries();
    return Col_GOLD_instance;
  }
  function Col_GOLDENROD_getInstance() {
    Col_initEntries();
    return Col_GOLDENROD_instance;
  }
  function Col_GRAY_getInstance() {
    Col_initEntries();
    return Col_GRAY_instance;
  }
  function Col_GREEN_getInstance() {
    Col_initEntries();
    return Col_GREEN_instance;
  }
  function Col_GREENYELLOW_getInstance() {
    Col_initEntries();
    return Col_GREENYELLOW_instance;
  }
  function Col_HONEYDEW_getInstance() {
    Col_initEntries();
    return Col_HONEYDEW_instance;
  }
  function Col_HOTPINK_getInstance() {
    Col_initEntries();
    return Col_HOTPINK_instance;
  }
  function Col_INDIANRED_getInstance() {
    Col_initEntries();
    return Col_INDIANRED_instance;
  }
  function Col_INDIGO_getInstance() {
    Col_initEntries();
    return Col_INDIGO_instance;
  }
  function Col_IVORY_getInstance() {
    Col_initEntries();
    return Col_IVORY_instance;
  }
  function Col_KHAKI_getInstance() {
    Col_initEntries();
    return Col_KHAKI_instance;
  }
  function Col_LAVENDER_getInstance() {
    Col_initEntries();
    return Col_LAVENDER_instance;
  }
  function Col_LAVENDERBLUSH_getInstance() {
    Col_initEntries();
    return Col_LAVENDERBLUSH_instance;
  }
  function Col_LAWNGREEN_getInstance() {
    Col_initEntries();
    return Col_LAWNGREEN_instance;
  }
  function Col_LEMONCHIFFON_getInstance() {
    Col_initEntries();
    return Col_LEMONCHIFFON_instance;
  }
  function Col_LIGHTBLUE_getInstance() {
    Col_initEntries();
    return Col_LIGHTBLUE_instance;
  }
  function Col_LIGHTCORAL_getInstance() {
    Col_initEntries();
    return Col_LIGHTCORAL_instance;
  }
  function Col_LIGHTCYAN_getInstance() {
    Col_initEntries();
    return Col_LIGHTCYAN_instance;
  }
  function Col_LIGHTGOLDENRODYELLOW_getInstance() {
    Col_initEntries();
    return Col_LIGHTGOLDENRODYELLOW_instance;
  }
  function Col_LIGHTGRAY_getInstance() {
    Col_initEntries();
    return Col_LIGHTGRAY_instance;
  }
  function Col_LIGHTGREEN_getInstance() {
    Col_initEntries();
    return Col_LIGHTGREEN_instance;
  }
  function Col_LIGHTPINK_getInstance() {
    Col_initEntries();
    return Col_LIGHTPINK_instance;
  }
  function Col_LIGHTSALMON_getInstance() {
    Col_initEntries();
    return Col_LIGHTSALMON_instance;
  }
  function Col_LIGHTSEAGREEN_getInstance() {
    Col_initEntries();
    return Col_LIGHTSEAGREEN_instance;
  }
  function Col_LIGHTSKYBLUE_getInstance() {
    Col_initEntries();
    return Col_LIGHTSKYBLUE_instance;
  }
  function Col_LIGHTSLATEGRAY_getInstance() {
    Col_initEntries();
    return Col_LIGHTSLATEGRAY_instance;
  }
  function Col_LIGHTSTEELBLUE_getInstance() {
    Col_initEntries();
    return Col_LIGHTSTEELBLUE_instance;
  }
  function Col_LIGHTYELLOW_getInstance() {
    Col_initEntries();
    return Col_LIGHTYELLOW_instance;
  }
  function Col_LIME_getInstance() {
    Col_initEntries();
    return Col_LIME_instance;
  }
  function Col_LIMEGREEN_getInstance() {
    Col_initEntries();
    return Col_LIMEGREEN_instance;
  }
  function Col_LINEN_getInstance() {
    Col_initEntries();
    return Col_LINEN_instance;
  }
  function Col_MAGENTA_getInstance() {
    Col_initEntries();
    return Col_MAGENTA_instance;
  }
  function Col_MAROON_getInstance() {
    Col_initEntries();
    return Col_MAROON_instance;
  }
  function Col_MEDIUMAQUAMARINE_getInstance() {
    Col_initEntries();
    return Col_MEDIUMAQUAMARINE_instance;
  }
  function Col_MEDIUMBLUE_getInstance() {
    Col_initEntries();
    return Col_MEDIUMBLUE_instance;
  }
  function Col_MEDIUMORCHID_getInstance() {
    Col_initEntries();
    return Col_MEDIUMORCHID_instance;
  }
  function Col_MEDIUMPURPLE_getInstance() {
    Col_initEntries();
    return Col_MEDIUMPURPLE_instance;
  }
  function Col_MEDIUMSEAGREEN_getInstance() {
    Col_initEntries();
    return Col_MEDIUMSEAGREEN_instance;
  }
  function Col_MEDIUMSLATEBLUE_getInstance() {
    Col_initEntries();
    return Col_MEDIUMSLATEBLUE_instance;
  }
  function Col_MEDIUMSPRINGGREEN_getInstance() {
    Col_initEntries();
    return Col_MEDIUMSPRINGGREEN_instance;
  }
  function Col_MEDIUMTURQUOISE_getInstance() {
    Col_initEntries();
    return Col_MEDIUMTURQUOISE_instance;
  }
  function Col_MEDIUMVIOLETRED_getInstance() {
    Col_initEntries();
    return Col_MEDIUMVIOLETRED_instance;
  }
  function Col_MIDNIGHTBLUE_getInstance() {
    Col_initEntries();
    return Col_MIDNIGHTBLUE_instance;
  }
  function Col_MINTCREAM_getInstance() {
    Col_initEntries();
    return Col_MINTCREAM_instance;
  }
  function Col_MISTYROSE_getInstance() {
    Col_initEntries();
    return Col_MISTYROSE_instance;
  }
  function Col_MOCCASIN_getInstance() {
    Col_initEntries();
    return Col_MOCCASIN_instance;
  }
  function Col_NAVAJOWHITE_getInstance() {
    Col_initEntries();
    return Col_NAVAJOWHITE_instance;
  }
  function Col_NAVY_getInstance() {
    Col_initEntries();
    return Col_NAVY_instance;
  }
  function Col_OLDLACE_getInstance() {
    Col_initEntries();
    return Col_OLDLACE_instance;
  }
  function Col_OLIVE_getInstance() {
    Col_initEntries();
    return Col_OLIVE_instance;
  }
  function Col_OLIVEDRAB_getInstance() {
    Col_initEntries();
    return Col_OLIVEDRAB_instance;
  }
  function Col_ORANGE_getInstance() {
    Col_initEntries();
    return Col_ORANGE_instance;
  }
  function Col_ORANGERED_getInstance() {
    Col_initEntries();
    return Col_ORANGERED_instance;
  }
  function Col_ORCHID_getInstance() {
    Col_initEntries();
    return Col_ORCHID_instance;
  }
  function Col_PALEGOLDENROD_getInstance() {
    Col_initEntries();
    return Col_PALEGOLDENROD_instance;
  }
  function Col_PALEGREEN_getInstance() {
    Col_initEntries();
    return Col_PALEGREEN_instance;
  }
  function Col_PALETURQUOISE_getInstance() {
    Col_initEntries();
    return Col_PALETURQUOISE_instance;
  }
  function Col_PALEVIOLETRED_getInstance() {
    Col_initEntries();
    return Col_PALEVIOLETRED_instance;
  }
  function Col_PAPAYAWHIP_getInstance() {
    Col_initEntries();
    return Col_PAPAYAWHIP_instance;
  }
  function Col_PEACHPUFF_getInstance() {
    Col_initEntries();
    return Col_PEACHPUFF_instance;
  }
  function Col_PERU_getInstance() {
    Col_initEntries();
    return Col_PERU_instance;
  }
  function Col_PINK_getInstance() {
    Col_initEntries();
    return Col_PINK_instance;
  }
  function Col_PLUM_getInstance() {
    Col_initEntries();
    return Col_PLUM_instance;
  }
  function Col_POWDERBLUE_getInstance() {
    Col_initEntries();
    return Col_POWDERBLUE_instance;
  }
  function Col_PURPLE_getInstance() {
    Col_initEntries();
    return Col_PURPLE_instance;
  }
  function Col_REBECCAPURPLE_getInstance() {
    Col_initEntries();
    return Col_REBECCAPURPLE_instance;
  }
  function Col_RED_getInstance() {
    Col_initEntries();
    return Col_RED_instance;
  }
  function Col_ROSYBROWN_getInstance() {
    Col_initEntries();
    return Col_ROSYBROWN_instance;
  }
  function Col_ROYALBLUE_getInstance() {
    Col_initEntries();
    return Col_ROYALBLUE_instance;
  }
  function Col_SADDLEBROWN_getInstance() {
    Col_initEntries();
    return Col_SADDLEBROWN_instance;
  }
  function Col_SALMON_getInstance() {
    Col_initEntries();
    return Col_SALMON_instance;
  }
  function Col_SANDYBROWN_getInstance() {
    Col_initEntries();
    return Col_SANDYBROWN_instance;
  }
  function Col_SEAGREEN_getInstance() {
    Col_initEntries();
    return Col_SEAGREEN_instance;
  }
  function Col_SEASHELL_getInstance() {
    Col_initEntries();
    return Col_SEASHELL_instance;
  }
  function Col_SIENNA_getInstance() {
    Col_initEntries();
    return Col_SIENNA_instance;
  }
  function Col_SILVER_getInstance() {
    Col_initEntries();
    return Col_SILVER_instance;
  }
  function Col_SKYBLUE_getInstance() {
    Col_initEntries();
    return Col_SKYBLUE_instance;
  }
  function Col_SLATEBLUE_getInstance() {
    Col_initEntries();
    return Col_SLATEBLUE_instance;
  }
  function Col_SLATEGRAY_getInstance() {
    Col_initEntries();
    return Col_SLATEGRAY_instance;
  }
  function Col_SNOW_getInstance() {
    Col_initEntries();
    return Col_SNOW_instance;
  }
  function Col_SPRINGGREEN_getInstance() {
    Col_initEntries();
    return Col_SPRINGGREEN_instance;
  }
  function Col_STEELBLUE_getInstance() {
    Col_initEntries();
    return Col_STEELBLUE_instance;
  }
  function Col_TAN_getInstance() {
    Col_initEntries();
    return Col_TAN_instance;
  }
  function Col_TEAL_getInstance() {
    Col_initEntries();
    return Col_TEAL_instance;
  }
  function Col_THISTLE_getInstance() {
    Col_initEntries();
    return Col_THISTLE_instance;
  }
  function Col_TOMATO_getInstance() {
    Col_initEntries();
    return Col_TOMATO_instance;
  }
  function Col_TURQUOISE_getInstance() {
    Col_initEntries();
    return Col_TURQUOISE_instance;
  }
  function Col_VIOLET_getInstance() {
    Col_initEntries();
    return Col_VIOLET_instance;
  }
  function Col_WHEAT_getInstance() {
    Col_initEntries();
    return Col_WHEAT_instance;
  }
  function Col_WHITE_getInstance() {
    Col_initEntries();
    return Col_WHITE_instance;
  }
  function Col_WHITESMOKE_getInstance() {
    Col_initEntries();
    return Col_WHITESMOKE_instance;
  }
  function Col_YELLOW_getInstance() {
    Col_initEntries();
    return Col_YELLOW_instance;
  }
  function Col_YELLOWGREEN_getInstance() {
    Col_initEntries();
    return Col_YELLOWGREEN_instance;
  }
  function Position_STATIC_getInstance() {
    Position_initEntries();
    return Position_STATIC_instance;
  }
  function Position_RELATIVE_getInstance() {
    Position_initEntries();
    return Position_RELATIVE_instance;
  }
  function Position_FIXED_getInstance() {
    Position_initEntries();
    return Position_FIXED_instance;
  }
  function Position_ABSOLUTE_getInstance() {
    Position_initEntries();
    return Position_ABSOLUTE_instance;
  }
  function Position_STICKY_getInstance() {
    Position_initEntries();
    return Position_STICKY_instance;
  }
  function JustifyContent_FLEXSTART_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_FLEXSTART_instance;
  }
  function JustifyContent_FLEXEND_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_FLEXEND_instance;
  }
  function JustifyContent_CENTER_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_CENTER_instance;
  }
  function JustifyContent_SPACEBETWEEN_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_SPACEBETWEEN_instance;
  }
  function JustifyContent_SPACEAROUND_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_SPACEAROUND_instance;
  }
  function JustifyContent_SPACEEVENLY_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_SPACEEVENLY_instance;
  }
  function JustifyContent_START_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_START_instance;
  }
  function JustifyContent_END_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_END_instance;
  }
  function JustifyContent_STRETCH_getInstance() {
    JustifyContent_initEntries();
    return JustifyContent_STRETCH_instance;
  }
  function UNIT_px_getInstance() {
    UNIT_initEntries();
    return UNIT_px_instance;
  }
  function UNIT_pt_getInstance() {
    UNIT_initEntries();
    return UNIT_pt_instance;
  }
  function UNIT_em_getInstance() {
    UNIT_initEntries();
    return UNIT_em_instance;
  }
  function UNIT_cm_getInstance() {
    UNIT_initEntries();
    return UNIT_cm_instance;
  }
  function UNIT_mm_getInstance() {
    UNIT_initEntries();
    return UNIT_mm_instance;
  }
  function UNIT_in_getInstance() {
    UNIT_initEntries();
    return UNIT_in_instance;
  }
  function UNIT_pc_getInstance() {
    UNIT_initEntries();
    return UNIT_pc_instance;
  }
  function UNIT_ch_getInstance() {
    UNIT_initEntries();
    return UNIT_ch_instance;
  }
  function UNIT_rem_getInstance() {
    UNIT_initEntries();
    return UNIT_rem_instance;
  }
  function UNIT_vw_getInstance() {
    UNIT_initEntries();
    return UNIT_vw_instance;
  }
  function UNIT_vh_getInstance() {
    UNIT_initEntries();
    return UNIT_vh_instance;
  }
  function UNIT_vmin_getInstance() {
    UNIT_initEntries();
    return UNIT_vmin_instance;
  }
  function UNIT_vmax_getInstance() {
    UNIT_initEntries();
    return UNIT_vmax_instance;
  }
  function UNIT_perc_getInstance() {
    UNIT_initEntries();
    return UNIT_perc_instance;
  }
  function UNIT_auto_getInstance() {
    UNIT_initEntries();
    return UNIT_auto_instance;
  }
  function UNIT_normal_getInstance() {
    UNIT_initEntries();
    return UNIT_normal_instance;
  }
  function OverflowWrap_NORMAL_getInstance() {
    OverflowWrap_initEntries();
    return OverflowWrap_NORMAL_instance;
  }
  function OverflowWrap_BREAKWORD_getInstance() {
    OverflowWrap_initEntries();
    return OverflowWrap_BREAKWORD_instance;
  }
  function OverflowWrap_ANYWHERE_getInstance() {
    OverflowWrap_initEntries();
    return OverflowWrap_ANYWHERE_instance;
  }
  function AlignContent_FLEXSTART_getInstance() {
    AlignContent_initEntries();
    return AlignContent_FLEXSTART_instance;
  }
  function AlignContent_FLEXEND_getInstance() {
    AlignContent_initEntries();
    return AlignContent_FLEXEND_instance;
  }
  function AlignContent_CENTER_getInstance() {
    AlignContent_initEntries();
    return AlignContent_CENTER_instance;
  }
  function AlignContent_SPACEBETWEEN_getInstance() {
    AlignContent_initEntries();
    return AlignContent_SPACEBETWEEN_instance;
  }
  function AlignContent_SPACEAROUND_getInstance() {
    AlignContent_initEntries();
    return AlignContent_SPACEAROUND_instance;
  }
  function AlignContent_STRETCH_getInstance() {
    AlignContent_initEntries();
    return AlignContent_STRETCH_instance;
  }
  function AlignContent_START_getInstance() {
    AlignContent_initEntries();
    return AlignContent_START_instance;
  }
  function AlignContent_END_getInstance() {
    AlignContent_initEntries();
    return AlignContent_END_instance;
  }
  function AlignContent_SPACEEVENLY_getInstance() {
    AlignContent_initEntries();
    return AlignContent_SPACEEVENLY_instance;
  }
  function Resize_NONE_getInstance() {
    Resize_initEntries();
    return Resize_NONE_instance;
  }
  function Resize_BOTH_getInstance() {
    Resize_initEntries();
    return Resize_BOTH_instance;
  }
  function Resize_HORIZONTAL_getInstance() {
    Resize_initEntries();
    return Resize_HORIZONTAL_instance;
  }
  function Resize_VERTICAL_getInstance() {
    Resize_initEntries();
    return Resize_VERTICAL_instance;
  }
  function Resize_INITIAL_getInstance() {
    Resize_initEntries();
    return Resize_INITIAL_instance;
  }
  function Resize_INHERIT_getInstance() {
    Resize_initEntries();
    return Resize_INHERIT_instance;
  }
  function BgSize_COVER_getInstance() {
    BgSize_initEntries();
    return BgSize_COVER_instance;
  }
  function BgSize_CONTAIN_getInstance() {
    BgSize_initEntries();
    return BgSize_CONTAIN_instance;
  }
  function BgRepeat_REPEAT_getInstance() {
    BgRepeat_initEntries();
    return BgRepeat_REPEAT_instance;
  }
  function BgRepeat_REPEATX_getInstance() {
    BgRepeat_initEntries();
    return BgRepeat_REPEATX_instance;
  }
  function BgRepeat_REPEATY_getInstance() {
    BgRepeat_initEntries();
    return BgRepeat_REPEATY_instance;
  }
  function BgRepeat_NOREPEAT_getInstance() {
    BgRepeat_initEntries();
    return BgRepeat_NOREPEAT_instance;
  }
  function BgOrigin_PADDING_getInstance() {
    BgOrigin_initEntries();
    return BgOrigin_PADDING_instance;
  }
  function BgOrigin_BORDER_getInstance() {
    BgOrigin_initEntries();
    return BgOrigin_BORDER_instance;
  }
  function BgOrigin_CONTENT_getInstance() {
    BgOrigin_initEntries();
    return BgOrigin_CONTENT_instance;
  }
  function BgClip_PADDING_getInstance() {
    BgClip_initEntries();
    return BgClip_PADDING_instance;
  }
  function BgClip_BORDER_getInstance() {
    BgClip_initEntries();
    return BgClip_BORDER_instance;
  }
  function BgClip_CONTENT_getInstance() {
    BgClip_initEntries();
    return BgClip_CONTENT_instance;
  }
  function BgAttach_SCROLL_getInstance() {
    BgAttach_initEntries();
    return BgAttach_SCROLL_instance;
  }
  function BgAttach_FIXED_getInstance() {
    BgAttach_initEntries();
    return BgAttach_FIXED_instance;
  }
  function BgAttach_LOCAL_getInstance() {
    BgAttach_initEntries();
    return BgAttach_LOCAL_instance;
  }
  function OutlineStyle_AUTO_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_AUTO_instance;
  }
  function OutlineStyle_NONE_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_NONE_instance;
  }
  function OutlineStyle_HIDDEN_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_HIDDEN_instance;
  }
  function OutlineStyle_DOTTED_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_DOTTED_instance;
  }
  function OutlineStyle_DASHED_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_DASHED_instance;
  }
  function OutlineStyle_SOLID_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_SOLID_instance;
  }
  function OutlineStyle_DOUBLE_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_DOUBLE_instance;
  }
  function OutlineStyle_GROOVE_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_GROOVE_instance;
  }
  function OutlineStyle_RIDGE_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_RIDGE_instance;
  }
  function OutlineStyle_INSET_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_INSET_instance;
  }
  function OutlineStyle_OUTSET_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_OUTSET_instance;
  }
  function OutlineStyle_INITIAL_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_INITIAL_instance;
  }
  function OutlineStyle_INHERIT_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_INHERIT_instance;
  }
  function OutlineStyle_UNSET_getInstance() {
    OutlineStyle_initEntries();
    return OutlineStyle_UNSET_instance;
  }
  function TextDecorationLine_NONE_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_NONE_instance;
  }
  function TextDecorationLine_UNDERLINE_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_UNDERLINE_instance;
  }
  function TextDecorationLine_OVERLINE_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_OVERLINE_instance;
  }
  function TextDecorationLine_LINETHROUGH_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_LINETHROUGH_instance;
  }
  function TextDecorationLine_JUSTIFY_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_JUSTIFY_instance;
  }
  function TextDecorationLine_INITIAL_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_INITIAL_instance;
  }
  function TextDecorationLine_INHERIT_getInstance() {
    TextDecorationLine_initEntries();
    return TextDecorationLine_INHERIT_instance;
  }
  function TextDecorationStyle_SOLID_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_SOLID_instance;
  }
  function TextDecorationStyle_DOUBLE_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_DOUBLE_instance;
  }
  function TextDecorationStyle_DOTTED_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_DOTTED_instance;
  }
  function TextDecorationStyle_DASHED_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_DASHED_instance;
  }
  function TextDecorationStyle_WAVY_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_WAVY_instance;
  }
  function TextDecorationStyle_INITIAL_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_INITIAL_instance;
  }
  function TextDecorationStyle_INHERIT_getInstance() {
    TextDecorationStyle_initEntries();
    return TextDecorationStyle_INHERIT_instance;
  }
  function ListStylePosition_INSIDE_getInstance() {
    ListStylePosition_initEntries();
    return ListStylePosition_INSIDE_instance;
  }
  function ListStylePosition_OUTSIDE_getInstance() {
    ListStylePosition_initEntries();
    return ListStylePosition_OUTSIDE_instance;
  }
  function CssClass() {
  }
  function DomAttribute() {
  }
  function SingleObjectCache() {
  }
  function _set__value__3j54pn($this, _set____db54di) {
    $this._value_1 = _set____db54di;
  }
  function _get__value__22ek2v($this) {
    return $this._value_1;
  }
  function LazyCache(initializer) {
    this.initializer_1 = initializer;
    this._value_1 = null;
  }
  protoOf(LazyCache).get_initializer_yawku1_k$ = function () {
    return this.initializer_1;
  };
  protoOf(LazyCache).get_value_j01efc_k$ = function () {
    var tmp0_elvis_lhs = this._value_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.initializer_1();
      // Inline function 'io.kvision.core.LazyCache.<get-value>.<anonymous>' call
      this._value_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(LazyCache).clear_j9egeb_k$ = function () {
    this._value_1 = null;
  };
  function AutoClearCache(delegate, shouldClear) {
    this.delegate_1 = delegate;
    this.shouldClear_1 = shouldClear;
  }
  protoOf(AutoClearCache).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(AutoClearCache).get_shouldClear_62nl69_k$ = function () {
    return this.shouldClear_1;
  };
  protoOf(AutoClearCache).get_value_j01efc_k$ = function () {
    if (this.shouldClear_1()) {
      this.delegate_1.clear_j9egeb_k$();
    }
    return this.delegate_1.get_value_j01efc_k$();
  };
  protoOf(AutoClearCache).clear_j9egeb_k$ = function () {
    this.delegate_1.clear_j9egeb_k$();
  };
  protoOf(AutoClearCache).clearOn_v5z2ar_k$ = function (shouldClear) {
    return this.delegate_1.clearOn_v5z2ar_k$(shouldClear);
  };
  function _get_initialValue__5p7eea($this) {
    return $this.initialValue_1;
  }
  function _get_refreshFunction__h8es9q($this) {
    return $this.refreshFunction_1;
  }
  function RefreshDelegateProvider($outer, initialValue, refreshFunction) {
    this.$this_1 = $outer;
    this.initialValue_1 = initialValue;
    this.refreshFunction_1 = refreshFunction;
  }
  protoOf(RefreshDelegateProvider).provideDelegate_rv6ry7_k$ = function (thisRef, prop) {
    if (!(this.initialValue_1 == null)) {
      this.$this_1.stylePropertyValues_1[prop.callableName] = this.initialValue_1;
    }
    return _StyleRefreshDelegate___init__impl__98yanm(this.refreshFunction_1);
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.counter_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.styles_1 = ArrayList_init_$Create$();
  }
  protoOf(Companion_0).set_counter_lagg9g_k$ = function (_set____db54di) {
    this.counter_1 = _set____db54di;
  };
  protoOf(Companion_0).get_counter_5zq0k8_k$ = function () {
    return this.counter_1;
  };
  protoOf(Companion_0).set_styles_jx1bo5_k$ = function (_set____db54di) {
    this.styles_1 = _set____db54di;
  };
  protoOf(Companion_0).get_styles_swambk_k$ = function () {
    return this.styles_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Style$pClass$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Style$customPClass$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Style$pElement$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Style$mediaQuery$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Style$generateStyle$lambda(it) {
    return it.get_first_irdx8n_k$() + ': ' + it.get_second_jf7fjx_k$() + ';';
  }
  function Style$refreshOnUpdate$lambda(this$0) {
    return function (it) {
      this$0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Style$refreshOnUpdate$lambda_0(this$0) {
    return function (it) {
      this$0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Style(selector, pClass, pElement, mediaQuery, parentStyle, init) {
    Companion_getInstance_1();
    selector = selector === VOID ? null : selector;
    pClass = pClass === VOID ? null : pClass;
    pElement = pElement === VOID ? null : pElement;
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    parentStyle = parentStyle === VOID ? null : parentStyle;
    init = init === VOID ? null : init;
    StyledComponent.call(this);
    this.parentStyle_1 = parentStyle;
    this.stylePropertyValues_1 = {};
    var tmp = this;
    var tmp_0;
    if (selector == null) {
      var _unary__edvuaz = Companion_getInstance_1().counter_1;
      Companion_getInstance_1().counter_1 = _unary__edvuaz + 1 | 0;
      tmp_0 = '.kv_styleclass_' + _unary__edvuaz;
    } else {
      tmp_0 = selector;
    }
    tmp.selector_1 = tmp_0;
    this.cssClassName_1 = last(split(last(split(this.selector_1, charArrayOf([_Char___init__impl__6a9atx(32)]))), charArrayOf([_Char___init__impl__6a9atx(46)])));
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Style.refreshOnUpdate' call
    var refreshFunction = Style$pClass$delegate$lambda(this);
    tmp_1.pClass$delegate_1 = (new RefreshDelegateProvider(this, pClass, refreshFunction)).provideDelegate_rv6ry7_k$(this, pClass$factory());
    var tmp_2 = this;
    // Inline function 'io.kvision.core.Style.refreshOnUpdate' call
    var refreshFunction_0 = Style$customPClass$delegate$lambda(this);
    tmp_2.customPClass$delegate_1 = _StyleRefreshDelegate___init__impl__98yanm(refreshFunction_0);
    var tmp_3 = this;
    // Inline function 'io.kvision.core.Style.refreshOnUpdate' call
    var refreshFunction_1 = Style$pElement$delegate$lambda(this);
    tmp_3.pElement$delegate_1 = (new RefreshDelegateProvider(this, pElement, refreshFunction_1)).provideDelegate_rv6ry7_k$(this, pElement$factory());
    var tmp_4 = this;
    // Inline function 'io.kvision.core.Style.refreshOnUpdate' call
    var refreshFunction_2 = Style$mediaQuery$delegate$lambda(this);
    tmp_4.mediaQuery$delegate_1 = (new RefreshDelegateProvider(this, mediaQuery, refreshFunction_2)).provideDelegate_rv6ry7_k$(this, mediaQuery$factory());
    Companion_getInstance_1().styles_1.add_utx5q5_k$(this);
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(Style).get_parentStyle_ui1i2m_k$ = function () {
    return this.parentStyle_1;
  };
  protoOf(Style).get_stylePropertyValues_oxw87o_k$ = function () {
    return this.stylePropertyValues_1;
  };
  protoOf(Style).get_selector_c3i7h4_k$ = function () {
    return this.selector_1;
  };
  protoOf(Style).get_cssClassName_8qljcu_k$ = function () {
    return this.cssClassName_1;
  };
  protoOf(Style).set_pClass_97p7y4_k$ = function (_set____db54di) {
    return StyleRefreshDelegate__setValue_impl_ldwzg1(this.pClass$delegate_1, this, pClass$factory_0(), _set____db54di);
  };
  protoOf(Style).get_pClass_hhj0tt_k$ = function () {
    return StyleRefreshDelegate__getValue_impl_y6tawt(this.pClass$delegate_1, this, pClass$factory_1());
  };
  protoOf(Style).set_customPClass_b5khr5_k$ = function (_set____db54di) {
    return StyleRefreshDelegate__setValue_impl_ldwzg1(this.customPClass$delegate_1, this, customPClass$factory(), _set____db54di);
  };
  protoOf(Style).get_customPClass_8s8k5e_k$ = function () {
    return StyleRefreshDelegate__getValue_impl_y6tawt(this.customPClass$delegate_1, this, customPClass$factory_0());
  };
  protoOf(Style).set_pElement_n8iwlk_k$ = function (_set____db54di) {
    return StyleRefreshDelegate__setValue_impl_ldwzg1(this.pElement$delegate_1, this, pElement$factory_0(), _set____db54di);
  };
  protoOf(Style).get_pElement_79n_k$ = function () {
    return StyleRefreshDelegate__getValue_impl_y6tawt(this.pElement$delegate_1, this, pElement$factory_1());
  };
  protoOf(Style).set_mediaQuery_721eom_k$ = function (_set____db54di) {
    return StyleRefreshDelegate__setValue_impl_ldwzg1(this.mediaQuery$delegate_1, this, mediaQuery$factory_0(), _set____db54di);
  };
  protoOf(Style).get_mediaQuery_bp0atp_k$ = function () {
    return StyleRefreshDelegate__getValue_impl_y6tawt(this.mediaQuery$delegate_1, this, mediaQuery$factory_1());
  };
  protoOf(Style).getStyleDeclaration_2ct7cv_k$ = function () {
    var tmp0_safe_receiver = this.get_pElement_79n_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Style.getStyleDeclaration.<anonymous>' call
      tmp = '::' + tmp0_safe_receiver.pname_1;
    }
    var tmp1_elvis_lhs = tmp;
    var pseudoElementName = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.get_customPClass_8s8k5e_k$();
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Style.getStyleDeclaration.<anonymous>' call
      tmp_0 = ':' + tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      var tmp4_safe_receiver = this.get_pClass_hhj0tt_k$();
      var tmp_2;
      if (tmp4_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.Style.getStyleDeclaration.<anonymous>' call
        tmp_2 = ':' + tmp4_safe_receiver.pname_1;
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var tmp5_elvis_lhs = tmp_1;
    var pseudoClassName = tmp5_elvis_lhs == null ? '' : tmp5_elvis_lhs;
    var fullSelector = this.selector_1 + pseudoElementName + pseudoClassName;
    var tmp6_safe_receiver = this.parentStyle_1;
    var tmp_3;
    if (tmp6_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Style.getStyleDeclaration.<anonymous>' call
      tmp_3 = tmp6_safe_receiver.getStyleDeclaration_2ct7cv_k$() + ' ';
    }
    var tmp7_elvis_lhs = tmp_3;
    return (tmp7_elvis_lhs == null ? '' : tmp7_elvis_lhs) + fullSelector;
  };
  protoOf(Style).generateStyle_vh3gof_k$ = function () {
    var styles = this.getSnStyle_ha57og_k$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var stylesList = ArrayList_init_$Create$();
    var _iterator__ex2g4s = iterator(Object.keys(styles));
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var key = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.js.unsafeCast' call
      stylesList.add_utx5q5_k$(to(key, styles[key]));
    }
    var tmp = this.getStyleDeclaration_2ct7cv_k$() + ' {\n';
    return tmp + joinToString(stylesList, '\n', VOID, VOID, VOID, VOID, Style$generateStyle$lambda) + '\n}';
  };
  protoOf(Style).refresh_6a3uvf_k$ = function () {
    protoOf(StyledComponent).refresh_6a3uvf_k$.call(this);
    var tmp0_safe_receiver = Companion_getInstance_8().getFirstRoot_21g3y4_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Style.refresh.<anonymous>' call
      tmp0_safe_receiver.clearStylesCache_s7vjew_k$();
      tmp0_safe_receiver.reRender_8c6ezy_k$();
    }
  };
  protoOf(Style).refreshOnUpdate_th0lia_k$ = function (refreshFunction) {
    return _StyleRefreshDelegate___init__impl__98yanm(refreshFunction);
  };
  protoOf(Style).refreshOnUpdate_jcsjtp_k$ = function (initialValue, refreshFunction) {
    return new RefreshDelegateProvider(this, initialValue, refreshFunction);
  };
  var PClass_ACTIVE_instance;
  var PClass_CHECKED_instance;
  var PClass_DISABLED_instance;
  var PClass_EMPTY_instance;
  var PClass_ENABLED_instance;
  var PClass_FIRSTCHILD_instance;
  var PClass_FIRSTOFTYPE_instance;
  var PClass_FOCUS_instance;
  var PClass_HOVER_instance;
  var PClass_INRANGE_instance;
  var PClass_INVALID_instance;
  var PClass_LASTCHILD_instance;
  var PClass_LASTOFTYPE_instance;
  var PClass_LINK_instance;
  var PClass_ONLYOFTYPE_instance;
  var PClass_ONLYCHILD_instance;
  var PClass_OPTIONAL_instance;
  var PClass_OUTOFRANGE_instance;
  var PClass_READONLY_instance;
  var PClass_READWRITE_instance;
  var PClass_REQUIRED_instance;
  var PClass_ROOT_instance;
  var PClass_TARGET_instance;
  var PClass_VALID_instance;
  var PClass_VISITED_instance;
  function values_39() {
    return [PClass_ACTIVE_getInstance(), PClass_CHECKED_getInstance(), PClass_DISABLED_getInstance(), PClass_EMPTY_getInstance(), PClass_ENABLED_getInstance(), PClass_FIRSTCHILD_getInstance(), PClass_FIRSTOFTYPE_getInstance(), PClass_FOCUS_getInstance(), PClass_HOVER_getInstance(), PClass_INRANGE_getInstance(), PClass_INVALID_getInstance(), PClass_LASTCHILD_getInstance(), PClass_LASTOFTYPE_getInstance(), PClass_LINK_getInstance(), PClass_ONLYOFTYPE_getInstance(), PClass_ONLYCHILD_getInstance(), PClass_OPTIONAL_getInstance(), PClass_OUTOFRANGE_getInstance(), PClass_READONLY_getInstance(), PClass_READWRITE_getInstance(), PClass_REQUIRED_getInstance(), PClass_ROOT_getInstance(), PClass_TARGET_getInstance(), PClass_VALID_getInstance(), PClass_VISITED_getInstance()];
  }
  function valueOf_39(value) {
    switch (value) {
      case 'ACTIVE':
        return PClass_ACTIVE_getInstance();
      case 'CHECKED':
        return PClass_CHECKED_getInstance();
      case 'DISABLED':
        return PClass_DISABLED_getInstance();
      case 'EMPTY':
        return PClass_EMPTY_getInstance();
      case 'ENABLED':
        return PClass_ENABLED_getInstance();
      case 'FIRSTCHILD':
        return PClass_FIRSTCHILD_getInstance();
      case 'FIRSTOFTYPE':
        return PClass_FIRSTOFTYPE_getInstance();
      case 'FOCUS':
        return PClass_FOCUS_getInstance();
      case 'HOVER':
        return PClass_HOVER_getInstance();
      case 'INRANGE':
        return PClass_INRANGE_getInstance();
      case 'INVALID':
        return PClass_INVALID_getInstance();
      case 'LASTCHILD':
        return PClass_LASTCHILD_getInstance();
      case 'LASTOFTYPE':
        return PClass_LASTOFTYPE_getInstance();
      case 'LINK':
        return PClass_LINK_getInstance();
      case 'ONLYOFTYPE':
        return PClass_ONLYOFTYPE_getInstance();
      case 'ONLYCHILD':
        return PClass_ONLYCHILD_getInstance();
      case 'OPTIONAL':
        return PClass_OPTIONAL_getInstance();
      case 'OUTOFRANGE':
        return PClass_OUTOFRANGE_getInstance();
      case 'READONLY':
        return PClass_READONLY_getInstance();
      case 'READWRITE':
        return PClass_READWRITE_getInstance();
      case 'REQUIRED':
        return PClass_REQUIRED_getInstance();
      case 'ROOT':
        return PClass_ROOT_getInstance();
      case 'TARGET':
        return PClass_TARGET_getInstance();
      case 'VALID':
        return PClass_VALID_getInstance();
      case 'VISITED':
        return PClass_VISITED_getInstance();
      default:
        PClass_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_39() {
    if ($ENTRIES_39 == null)
      $ENTRIES_39 = enumEntries(values_39());
    return $ENTRIES_39;
  }
  var PClass_entriesInitialized;
  function PClass_initEntries() {
    if (PClass_entriesInitialized)
      return Unit_getInstance();
    PClass_entriesInitialized = true;
    PClass_ACTIVE_instance = new PClass('ACTIVE', 0, 'active');
    PClass_CHECKED_instance = new PClass('CHECKED', 1, 'checked');
    PClass_DISABLED_instance = new PClass('DISABLED', 2, 'disabled');
    PClass_EMPTY_instance = new PClass('EMPTY', 3, 'empty');
    PClass_ENABLED_instance = new PClass('ENABLED', 4, 'enabled');
    PClass_FIRSTCHILD_instance = new PClass('FIRSTCHILD', 5, 'first-child');
    PClass_FIRSTOFTYPE_instance = new PClass('FIRSTOFTYPE', 6, 'first-of-type');
    PClass_FOCUS_instance = new PClass('FOCUS', 7, 'focus');
    PClass_HOVER_instance = new PClass('HOVER', 8, 'hover');
    PClass_INRANGE_instance = new PClass('INRANGE', 9, 'in-range');
    PClass_INVALID_instance = new PClass('INVALID', 10, 'invalid');
    PClass_LASTCHILD_instance = new PClass('LASTCHILD', 11, 'last-child');
    PClass_LASTOFTYPE_instance = new PClass('LASTOFTYPE', 12, 'last-of-type');
    PClass_LINK_instance = new PClass('LINK', 13, 'link');
    PClass_ONLYOFTYPE_instance = new PClass('ONLYOFTYPE', 14, 'only-of-type');
    PClass_ONLYCHILD_instance = new PClass('ONLYCHILD', 15, 'only-child');
    PClass_OPTIONAL_instance = new PClass('OPTIONAL', 16, 'optional');
    PClass_OUTOFRANGE_instance = new PClass('OUTOFRANGE', 17, 'out-of-range');
    PClass_READONLY_instance = new PClass('READONLY', 18, 'read-only');
    PClass_READWRITE_instance = new PClass('READWRITE', 19, 'read-write');
    PClass_REQUIRED_instance = new PClass('REQUIRED', 20, 'required');
    PClass_ROOT_instance = new PClass('ROOT', 21, 'root');
    PClass_TARGET_instance = new PClass('TARGET', 22, 'target');
    PClass_VALID_instance = new PClass('VALID', 23, 'valid');
    PClass_VISITED_instance = new PClass('VISITED', 24, 'visited');
  }
  var $ENTRIES_39;
  function PClass(name, ordinal, pname) {
    Enum.call(this, name, ordinal);
    this.pname_1 = pname;
  }
  protoOf(PClass).get_pname_agwpsp_k$ = function () {
    return this.pname_1;
  };
  var PElement_AFTER_instance;
  var PElement_BEFORE_instance;
  var PElement_FIRSTLETTER_instance;
  var PElement_FIRSTLINE_instance;
  var PElement_MARKER_instance;
  var PElement_SELECTION_instance;
  function values_40() {
    return [PElement_AFTER_getInstance(), PElement_BEFORE_getInstance(), PElement_FIRSTLETTER_getInstance(), PElement_FIRSTLINE_getInstance(), PElement_MARKER_getInstance(), PElement_SELECTION_getInstance()];
  }
  function valueOf_40(value) {
    switch (value) {
      case 'AFTER':
        return PElement_AFTER_getInstance();
      case 'BEFORE':
        return PElement_BEFORE_getInstance();
      case 'FIRSTLETTER':
        return PElement_FIRSTLETTER_getInstance();
      case 'FIRSTLINE':
        return PElement_FIRSTLINE_getInstance();
      case 'MARKER':
        return PElement_MARKER_getInstance();
      case 'SELECTION':
        return PElement_SELECTION_getInstance();
      default:
        PElement_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_40() {
    if ($ENTRIES_40 == null)
      $ENTRIES_40 = enumEntries(values_40());
    return $ENTRIES_40;
  }
  var PElement_entriesInitialized;
  function PElement_initEntries() {
    if (PElement_entriesInitialized)
      return Unit_getInstance();
    PElement_entriesInitialized = true;
    PElement_AFTER_instance = new PElement('AFTER', 0, 'after');
    PElement_BEFORE_instance = new PElement('BEFORE', 1, 'before');
    PElement_FIRSTLETTER_instance = new PElement('FIRSTLETTER', 2, 'first-letter');
    PElement_FIRSTLINE_instance = new PElement('FIRSTLINE', 3, 'first-line');
    PElement_MARKER_instance = new PElement('MARKER', 4, 'marker');
    PElement_SELECTION_instance = new PElement('SELECTION', 5, 'selection');
  }
  var $ENTRIES_40;
  function PElement(name, ordinal, pname) {
    Enum.call(this, name, ordinal);
    this.pname_1 = pname;
  }
  protoOf(PElement).get_pname_agwpsp_k$ = function () {
    return this.pname_1;
  };
  function _StyleRefreshDelegate___init__impl__98yanm(refreshFunction) {
    return refreshFunction;
  }
  function _get_refreshFunction__h8es9q_0($this) {
    return $this;
  }
  function StyleRefreshDelegate__getValue_impl_y6tawt($this, thisRef, property) {
    var value = thisRef.stylePropertyValues_1[property.callableName];
    var tmp;
    if (value != null) {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = value;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = null;
    }
    return tmp;
  }
  function StyleRefreshDelegate__setValue_impl_ldwzg1($this, thisRef, property, value) {
    thisRef.stylePropertyValues_1[property.callableName] = value;
    _get_refreshFunction__h8es9q_0($this)(value);
  }
  function StyleRefreshDelegate__toString_impl_v7il5a($this) {
    return 'StyleRefreshDelegate(refreshFunction=' + toString_0($this) + ')';
  }
  function StyleRefreshDelegate__hashCode_impl_i2fk0z($this) {
    return hashCode($this);
  }
  function StyleRefreshDelegate__equals_impl_lzp5mp($this, other) {
    if (!(other instanceof StyleRefreshDelegate))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRefreshDelegate ? other.refreshFunction_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function StyleRefreshDelegate(refreshFunction) {
    this.refreshFunction_1 = refreshFunction;
  }
  protoOf(StyleRefreshDelegate).toString = function () {
    return StyleRefreshDelegate__toString_impl_v7il5a(this.refreshFunction_1);
  };
  protoOf(StyleRefreshDelegate).hashCode = function () {
    return StyleRefreshDelegate__hashCode_impl_i2fk0z(this.refreshFunction_1);
  };
  protoOf(StyleRefreshDelegate).equals = function (other) {
    return StyleRefreshDelegate__equals_impl_lzp5mp(this.refreshFunction_1, other);
  };
  function PClass_ACTIVE_getInstance() {
    PClass_initEntries();
    return PClass_ACTIVE_instance;
  }
  function PClass_CHECKED_getInstance() {
    PClass_initEntries();
    return PClass_CHECKED_instance;
  }
  function PClass_DISABLED_getInstance() {
    PClass_initEntries();
    return PClass_DISABLED_instance;
  }
  function PClass_EMPTY_getInstance() {
    PClass_initEntries();
    return PClass_EMPTY_instance;
  }
  function PClass_ENABLED_getInstance() {
    PClass_initEntries();
    return PClass_ENABLED_instance;
  }
  function PClass_FIRSTCHILD_getInstance() {
    PClass_initEntries();
    return PClass_FIRSTCHILD_instance;
  }
  function PClass_FIRSTOFTYPE_getInstance() {
    PClass_initEntries();
    return PClass_FIRSTOFTYPE_instance;
  }
  function PClass_FOCUS_getInstance() {
    PClass_initEntries();
    return PClass_FOCUS_instance;
  }
  function PClass_HOVER_getInstance() {
    PClass_initEntries();
    return PClass_HOVER_instance;
  }
  function PClass_INRANGE_getInstance() {
    PClass_initEntries();
    return PClass_INRANGE_instance;
  }
  function PClass_INVALID_getInstance() {
    PClass_initEntries();
    return PClass_INVALID_instance;
  }
  function PClass_LASTCHILD_getInstance() {
    PClass_initEntries();
    return PClass_LASTCHILD_instance;
  }
  function PClass_LASTOFTYPE_getInstance() {
    PClass_initEntries();
    return PClass_LASTOFTYPE_instance;
  }
  function PClass_LINK_getInstance() {
    PClass_initEntries();
    return PClass_LINK_instance;
  }
  function PClass_ONLYOFTYPE_getInstance() {
    PClass_initEntries();
    return PClass_ONLYOFTYPE_instance;
  }
  function PClass_ONLYCHILD_getInstance() {
    PClass_initEntries();
    return PClass_ONLYCHILD_instance;
  }
  function PClass_OPTIONAL_getInstance() {
    PClass_initEntries();
    return PClass_OPTIONAL_instance;
  }
  function PClass_OUTOFRANGE_getInstance() {
    PClass_initEntries();
    return PClass_OUTOFRANGE_instance;
  }
  function PClass_READONLY_getInstance() {
    PClass_initEntries();
    return PClass_READONLY_instance;
  }
  function PClass_READWRITE_getInstance() {
    PClass_initEntries();
    return PClass_READWRITE_instance;
  }
  function PClass_REQUIRED_getInstance() {
    PClass_initEntries();
    return PClass_REQUIRED_instance;
  }
  function PClass_ROOT_getInstance() {
    PClass_initEntries();
    return PClass_ROOT_instance;
  }
  function PClass_TARGET_getInstance() {
    PClass_initEntries();
    return PClass_TARGET_instance;
  }
  function PClass_VALID_getInstance() {
    PClass_initEntries();
    return PClass_VALID_instance;
  }
  function PClass_VISITED_getInstance() {
    PClass_initEntries();
    return PClass_VISITED_instance;
  }
  function PElement_AFTER_getInstance() {
    PElement_initEntries();
    return PElement_AFTER_instance;
  }
  function PElement_BEFORE_getInstance() {
    PElement_initEntries();
    return PElement_BEFORE_instance;
  }
  function PElement_FIRSTLETTER_getInstance() {
    PElement_initEntries();
    return PElement_FIRSTLETTER_instance;
  }
  function PElement_FIRSTLINE_getInstance() {
    PElement_initEntries();
    return PElement_FIRSTLINE_instance;
  }
  function PElement_MARKER_getInstance() {
    PElement_initEntries();
    return PElement_MARKER_instance;
  }
  function PElement_SELECTION_getInstance() {
    PElement_initEntries();
    return PElement_SELECTION_instance;
  }
  function pClass$factory() {
    return getPropertyCallableRef('pClass', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pClass_hhj0tt_k$();
    }, function (receiver, value) {
      return receiver.set_pClass_97p7y4_k$(value);
    });
  }
  function pElement$factory() {
    return getPropertyCallableRef('pElement', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pElement_79n_k$();
    }, function (receiver, value) {
      return receiver.set_pElement_n8iwlk_k$(value);
    });
  }
  function mediaQuery$factory() {
    return getPropertyCallableRef('mediaQuery', 1, KMutableProperty1, function (receiver) {
      return receiver.get_mediaQuery_bp0atp_k$();
    }, function (receiver, value) {
      return receiver.set_mediaQuery_721eom_k$(value);
    });
  }
  function pClass$factory_0() {
    return getPropertyCallableRef('pClass', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pClass_hhj0tt_k$();
    }, function (receiver, value) {
      return receiver.set_pClass_97p7y4_k$(value);
    });
  }
  function pClass$factory_1() {
    return getPropertyCallableRef('pClass', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pClass_hhj0tt_k$();
    }, function (receiver, value) {
      return receiver.set_pClass_97p7y4_k$(value);
    });
  }
  function customPClass$factory() {
    return getPropertyCallableRef('customPClass', 1, KMutableProperty1, function (receiver) {
      return receiver.get_customPClass_8s8k5e_k$();
    }, function (receiver, value) {
      return receiver.set_customPClass_b5khr5_k$(value);
    });
  }
  function customPClass$factory_0() {
    return getPropertyCallableRef('customPClass', 1, KMutableProperty1, function (receiver) {
      return receiver.get_customPClass_8s8k5e_k$();
    }, function (receiver, value) {
      return receiver.set_customPClass_b5khr5_k$(value);
    });
  }
  function pElement$factory_0() {
    return getPropertyCallableRef('pElement', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pElement_79n_k$();
    }, function (receiver, value) {
      return receiver.set_pElement_n8iwlk_k$(value);
    });
  }
  function pElement$factory_1() {
    return getPropertyCallableRef('pElement', 1, KMutableProperty1, function (receiver) {
      return receiver.get_pElement_79n_k$();
    }, function (receiver, value) {
      return receiver.set_pElement_n8iwlk_k$(value);
    });
  }
  function mediaQuery$factory_0() {
    return getPropertyCallableRef('mediaQuery', 1, KMutableProperty1, function (receiver) {
      return receiver.get_mediaQuery_bp0atp_k$();
    }, function (receiver, value) {
      return receiver.set_mediaQuery_721eom_k$(value);
    });
  }
  function mediaQuery$factory_1() {
    return getPropertyCallableRef('mediaQuery', 1, KMutableProperty1, function (receiver) {
      return receiver.get_mediaQuery_bp0atp_k$();
    }, function (receiver, value) {
      return receiver.set_mediaQuery_721eom_k$(value);
    });
  }
  function _get_propertyStyles__gaytw4($this) {
    return $this.propertyStyles_1;
  }
  function _set_snStyleCache__qxx4gb($this, _set____db54di) {
    $this.snStyleCache_1 = _set____db54di;
  }
  function _get_snStyleCache__sjg6yp($this) {
    return $this.snStyleCache_1;
  }
  function setStyleProperty($this, key, value) {
    if (!(value == null)) {
      $this.propertyStyles_1[key] = value;
    } else {
      delete_0($this.propertyStyles_1, key);
    }
  }
  function refreshOnUpdate($this, refreshFunction) {
    return _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction);
  }
  function StyledComponent$width$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'width', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$minWidth$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'min-width', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$maxWidth$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'max-width', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$height$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'height', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$minHeight$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'min-height', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$maxHeight$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'max-height', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$display$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'display', it == null ? null : it.get_display_nrp3e6_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$position$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'position', it == null ? null : it.get_position_ue28av_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$top$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'top', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$left$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'left', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$right$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'right', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$bottom$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'bottom', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$zIndex$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.StyledComponent.zIndex$delegate.<anonymous>.<anonymous>' call
        tmp = '' + it;
      }
      setStyleProperty(this$0, 'z-index', tmp);
      return Unit_getInstance();
    };
  }
  function StyledComponent$overflow$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'overflow', it == null ? null : it.get_overflow_2asodc_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$overflowX$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'overflow-x', it == null ? null : it.get_overflow_2asodc_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$overflowY$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'overflow-y', it == null ? null : it.get_overflow_2asodc_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$overflowWrap$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'overflow-wrap', it == null ? null : it.get_overflowWrap_i25j92_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$resize$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'resize', it == null ? null : it.get_resize_t3jage_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$border$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'border', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$borderTop$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'border-top', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$borderRight$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'border-right', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$borderBottom$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'border-bottom', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$borderLeft$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'border-left', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$margin$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'margin', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$marginTop$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'margin-top', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$marginRight$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'margin-right', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$marginBottom$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'margin-bottom', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$marginLeft$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'margin-left', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$padding$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'padding', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$paddingTop$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'padding-top', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$paddingRight$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'padding-right', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$paddingBottom$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'padding-bottom', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$paddingLeft$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'padding-left', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$color$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'color', it == null ? null : it.asString_l3f38d_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$opacity$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.StyledComponent.opacity$delegate.<anonymous>.<anonymous>' call
        tmp = '' + it;
      }
      setStyleProperty(this$0, 'opacity', tmp);
      return Unit_getInstance();
    };
  }
  function StyledComponent$background$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'background', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$textDirection$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'text-direction', it == null ? null : it.get_direction_teeu7f_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$letterSpacing$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'letter-spacing', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$lineHeight$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'line-height', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$textAlign$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'text-align', it == null ? null : it.get_textAlign_rnl0sc_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$textDecoration$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'text-decoration', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$textIndent$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'text-indent', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$textShadow$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'text-shadow', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$textTransform$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'text-transform', it == null ? null : it.get_textTransform_5af2t_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$textOverflow$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'text-overflow', it == null ? null : it.get_textOverflow_4hsrf7_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$unicodeBidi$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'unicode-bidi', it == null ? null : it.get_unicodeBidi_tfx9hn_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$verticalAlign$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'vertical-align', it == null ? null : it.get_verticalAlign_hwlb39_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$whiteSpace$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'white-space', it == null ? null : it.get_whiteSpace_fgcr5x_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$wordSpacing$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'word-spacing', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$fontFamily$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'font-family', it);
      return Unit_getInstance();
    };
  }
  function StyledComponent$fontSize$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'font-size', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$fontStyle$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'font-style', it == null ? null : it.get_fontStyle_q231bm_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$fontWeight$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'font-weight', it == null ? null : it.get_fontWeight_gi02it_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$fontVariant$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'font-variant', it == null ? null : it.get_fontVariant_axdwe_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$float$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'float', it == null ? null : it.get_posFloat_sslzy2_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$clear$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'clear', it == null ? null : it.get_clear_s1y46x_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$wordBreak$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'word-break', it == null ? null : it.get_wordBreak_dj8qv5_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$lineBreak$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'line-break', it == null ? null : it.get_lineBreak_izdxzr_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$cursor$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'cursor', it == null ? null : it.get_cursor_4ki1v8_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$flexDirection$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'flex-direction', it == null ? null : it.get_dir_nrok3d_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$flexWrap$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'flex-wrap', it == null ? null : it.get_wrap_gu5iy0_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$justifyItems$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'justify-items', it == null ? null : it.get_justify_166mys_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$justifyContent$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'justify-content', it == null ? null : it.get_justifyContent_ksrt09_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$alignItems$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'align-items', it == null ? null : it.get_alignItems_dy32g7_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$alignContent$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'align-content', it == null ? null : it.get_alignContent_6xvhpq_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$order$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.StyledComponent.order$delegate.<anonymous>.<anonymous>' call
        tmp = '' + it;
      }
      setStyleProperty(this$0, 'order', tmp);
      return Unit_getInstance();
    };
  }
  function StyledComponent$flexGrow$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.StyledComponent.flexGrow$delegate.<anonymous>.<anonymous>' call
        tmp = '' + it;
      }
      setStyleProperty(this$0, 'flex-grow', tmp);
      return Unit_getInstance();
    };
  }
  function StyledComponent$flexShrink$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.StyledComponent.flexShrink$delegate.<anonymous>.<anonymous>' call
        tmp = '' + it;
      }
      setStyleProperty(this$0, 'flex-shrink', tmp);
      return Unit_getInstance();
    };
  }
  function StyledComponent$flexBasis$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'flex-basis', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$alignSelf$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'align-self', it == null ? null : it.get_alignItems_dy32g7_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$justifySelf$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'justify-self', it == null ? null : it.get_justify_166mys_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridAutoColumns$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'grid-auto-columns', it);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridAutoRows$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'grid-auto-rows', it);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridAutoFlow$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'grid-auto-flow', it == null ? null : it.get_flow_r5t4ok_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridTemplateColumns$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'grid-template-columns', it);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridTemplateRows$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'grid-template-rows', it);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridTemplateAreas$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'grid-template-areas', it == null ? null : joinToString(it, '\n'));
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridColumnGap$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.StyledComponent.gridColumnGap$delegate.<anonymous>.<anonymous>' call
        tmp = '' + it + 'px';
      }
      setStyleProperty(this$0, 'grid-column-gap', tmp);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridRowGap$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.StyledComponent.gridRowGap$delegate.<anonymous>.<anonymous>' call
        tmp = '' + it + 'px';
      }
      setStyleProperty(this$0, 'grid-row-gap', tmp);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridColumnStart$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.StyledComponent.gridColumnStart$delegate.<anonymous>.<anonymous>' call
        tmp = '' + it;
      }
      setStyleProperty(this$0, 'grid-column-start', tmp);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridRowStart$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.StyledComponent.gridRowStart$delegate.<anonymous>.<anonymous>' call
        tmp = '' + it;
      }
      setStyleProperty(this$0, 'grid-row-start', tmp);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridColumnEnd$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'grid-column-end', it);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridRowEnd$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'grid-row-end', it);
      return Unit_getInstance();
    };
  }
  function StyledComponent$gridArea$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'grid-area', it);
      return Unit_getInstance();
    };
  }
  function StyledComponent$outline$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'outline', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$boxShadow$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null) && !(this$0.get_boxShadowList_p96gps_k$() == null)) {
        this$0.set_boxShadowList_ck6kdn_k$(null);
        tmp = Unit_getInstance();
      }
      setStyleProperty(this$0, 'box-shadow', it == null ? null : it.asString_fj7iig_k$());
      setStyleProperty(this$0, '-webkit-box-shadow', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$boxShadowList$delegate$lambda$lambda(s) {
    return s.asString_fj7iig_k$();
  }
  function StyledComponent$boxShadowList$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null) && !(this$0.get_boxShadow_ksx25e_k$() == null)) {
        this$0.set_boxShadow_wldfgd_k$(null);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (it == null) {
        tmp_0 = null;
      } else {
        tmp_0 = joinToString(it, VOID, VOID, VOID, VOID, VOID, StyledComponent$boxShadowList$delegate$lambda$lambda);
      }
      var value = tmp_0;
      setStyleProperty(this$0, 'box-shadow', value);
      setStyleProperty(this$0, '-webkit-box-shadow', value);
      return Unit_getInstance();
    };
  }
  function StyledComponent$transition$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null) && !(this$0.get_transitionList_7wb6k_k$() == null)) {
        this$0.set_transitionList_5v6vvd_k$(null);
        tmp = Unit_getInstance();
      }
      setStyleProperty(this$0, 'transition', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent$transitionList$delegate$lambda$lambda(t) {
    return t.asString_fj7iig_k$();
  }
  function StyledComponent$transitionList$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null) && !(this$0.get_transition_mcca1q_k$() == null)) {
        this$0.set_transition_wr68gv_k$(null);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (it == null) {
        tmp_0 = null;
      } else {
        tmp_0 = joinToString(it, VOID, VOID, VOID, VOID, VOID, StyledComponent$transitionList$delegate$lambda$lambda);
      }
      setStyleProperty(this$0, 'transition', tmp_0);
      return Unit_getInstance();
    };
  }
  function StyledComponent$borderRadius$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null) && !(this$0.get_borderRadiusList_hu8axx_k$() == null)) {
        this$0.set_borderRadiusList_jumjse_k$(null);
        tmp = Unit_getInstance();
      }
      setStyleProperty(this$0, 'border-radius', it == null ? null : asString(it));
      setStyleProperty(this$0, '-webkit-border-radius', it == null ? null : asString(it));
      return Unit_getInstance();
    };
  }
  function StyledComponent$borderRadiusList$delegate$lambda$lambda(s) {
    return asString(s);
  }
  function StyledComponent$borderRadiusList$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null) && !(this$0.get_borderRadius_quu3af_k$() == null)) {
        this$0.set_borderRadius_tlfw5x_k$(null);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (it == null) {
        tmp_0 = null;
      } else {
        tmp_0 = joinToString(it, ' ', VOID, VOID, VOID, VOID, StyledComponent$borderRadiusList$delegate$lambda$lambda);
      }
      var value = tmp_0;
      setStyleProperty(this$0, 'border-radius', value);
      setStyleProperty(this$0, '-webkit-border-radius', value);
      return Unit_getInstance();
    };
  }
  function StyledComponent$listStyle$delegate$lambda(this$0) {
    return function (it) {
      setStyleProperty(this$0, 'list-style', it == null ? null : it.asString_fj7iig_k$());
      return Unit_getInstance();
    };
  }
  function StyledComponent() {
    this.styledPropertyValues_1 = {};
    this.propertyStyles_1 = {};
    this.snStyleCache_1 = null;
    var tmp = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction = StyledComponent$width$delegate$lambda(this);
    tmp.width$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction);
    var tmp_0 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_0 = StyledComponent$minWidth$delegate$lambda(this);
    tmp_0.minWidth$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_0);
    var tmp_1 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_1 = StyledComponent$maxWidth$delegate$lambda(this);
    tmp_1.maxWidth$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_1);
    var tmp_2 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_2 = StyledComponent$height$delegate$lambda(this);
    tmp_2.height$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_2);
    var tmp_3 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_3 = StyledComponent$minHeight$delegate$lambda(this);
    tmp_3.minHeight$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_3);
    var tmp_4 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_4 = StyledComponent$maxHeight$delegate$lambda(this);
    tmp_4.maxHeight$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_4);
    var tmp_5 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_5 = StyledComponent$display$delegate$lambda(this);
    tmp_5.display$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_5);
    var tmp_6 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_6 = StyledComponent$position$delegate$lambda(this);
    tmp_6.position$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_6);
    var tmp_7 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_7 = StyledComponent$top$delegate$lambda(this);
    tmp_7.top$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_7);
    var tmp_8 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_8 = StyledComponent$left$delegate$lambda(this);
    tmp_8.left$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_8);
    var tmp_9 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_9 = StyledComponent$right$delegate$lambda(this);
    tmp_9.right$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_9);
    var tmp_10 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_10 = StyledComponent$bottom$delegate$lambda(this);
    tmp_10.bottom$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_10);
    var tmp_11 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_11 = StyledComponent$zIndex$delegate$lambda(this);
    tmp_11.zIndex$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_11);
    var tmp_12 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_12 = StyledComponent$overflow$delegate$lambda(this);
    tmp_12.overflow$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_12);
    var tmp_13 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_13 = StyledComponent$overflowX$delegate$lambda(this);
    tmp_13.overflowX$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_13);
    var tmp_14 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_14 = StyledComponent$overflowY$delegate$lambda(this);
    tmp_14.overflowY$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_14);
    var tmp_15 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_15 = StyledComponent$overflowWrap$delegate$lambda(this);
    tmp_15.overflowWrap$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_15);
    var tmp_16 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_16 = StyledComponent$resize$delegate$lambda(this);
    tmp_16.resize$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_16);
    var tmp_17 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_17 = StyledComponent$border$delegate$lambda(this);
    tmp_17.border$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_17);
    var tmp_18 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_18 = StyledComponent$borderTop$delegate$lambda(this);
    tmp_18.borderTop$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_18);
    var tmp_19 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_19 = StyledComponent$borderRight$delegate$lambda(this);
    tmp_19.borderRight$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_19);
    var tmp_20 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_20 = StyledComponent$borderBottom$delegate$lambda(this);
    tmp_20.borderBottom$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_20);
    var tmp_21 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_21 = StyledComponent$borderLeft$delegate$lambda(this);
    tmp_21.borderLeft$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_21);
    var tmp_22 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_22 = StyledComponent$margin$delegate$lambda(this);
    tmp_22.margin$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_22);
    var tmp_23 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_23 = StyledComponent$marginTop$delegate$lambda(this);
    tmp_23.marginTop$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_23);
    var tmp_24 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_24 = StyledComponent$marginRight$delegate$lambda(this);
    tmp_24.marginRight$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_24);
    var tmp_25 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_25 = StyledComponent$marginBottom$delegate$lambda(this);
    tmp_25.marginBottom$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_25);
    var tmp_26 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_26 = StyledComponent$marginLeft$delegate$lambda(this);
    tmp_26.marginLeft$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_26);
    var tmp_27 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_27 = StyledComponent$padding$delegate$lambda(this);
    tmp_27.padding$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_27);
    var tmp_28 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_28 = StyledComponent$paddingTop$delegate$lambda(this);
    tmp_28.paddingTop$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_28);
    var tmp_29 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_29 = StyledComponent$paddingRight$delegate$lambda(this);
    tmp_29.paddingRight$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_29);
    var tmp_30 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_30 = StyledComponent$paddingBottom$delegate$lambda(this);
    tmp_30.paddingBottom$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_30);
    var tmp_31 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_31 = StyledComponent$paddingLeft$delegate$lambda(this);
    tmp_31.paddingLeft$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_31);
    var tmp_32 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_32 = StyledComponent$color$delegate$lambda(this);
    tmp_32.color$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_32);
    var tmp_33 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_33 = StyledComponent$opacity$delegate$lambda(this);
    tmp_33.opacity$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_33);
    var tmp_34 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_34 = StyledComponent$background$delegate$lambda(this);
    tmp_34.background$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_34);
    var tmp_35 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_35 = StyledComponent$textDirection$delegate$lambda(this);
    tmp_35.textDirection$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_35);
    var tmp_36 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_36 = StyledComponent$letterSpacing$delegate$lambda(this);
    tmp_36.letterSpacing$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_36);
    var tmp_37 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_37 = StyledComponent$lineHeight$delegate$lambda(this);
    tmp_37.lineHeight$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_37);
    var tmp_38 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_38 = StyledComponent$textAlign$delegate$lambda(this);
    tmp_38.textAlign$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_38);
    var tmp_39 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_39 = StyledComponent$textDecoration$delegate$lambda(this);
    tmp_39.textDecoration$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_39);
    var tmp_40 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_40 = StyledComponent$textIndent$delegate$lambda(this);
    tmp_40.textIndent$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_40);
    var tmp_41 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_41 = StyledComponent$textShadow$delegate$lambda(this);
    tmp_41.textShadow$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_41);
    var tmp_42 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_42 = StyledComponent$textTransform$delegate$lambda(this);
    tmp_42.textTransform$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_42);
    var tmp_43 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_43 = StyledComponent$textOverflow$delegate$lambda(this);
    tmp_43.textOverflow$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_43);
    var tmp_44 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_44 = StyledComponent$unicodeBidi$delegate$lambda(this);
    tmp_44.unicodeBidi$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_44);
    var tmp_45 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_45 = StyledComponent$verticalAlign$delegate$lambda(this);
    tmp_45.verticalAlign$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_45);
    var tmp_46 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_46 = StyledComponent$whiteSpace$delegate$lambda(this);
    tmp_46.whiteSpace$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_46);
    var tmp_47 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_47 = StyledComponent$wordSpacing$delegate$lambda(this);
    tmp_47.wordSpacing$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_47);
    var tmp_48 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_48 = StyledComponent$fontFamily$delegate$lambda(this);
    tmp_48.fontFamily$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_48);
    var tmp_49 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_49 = StyledComponent$fontSize$delegate$lambda(this);
    tmp_49.fontSize$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_49);
    var tmp_50 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_50 = StyledComponent$fontStyle$delegate$lambda(this);
    tmp_50.fontStyle$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_50);
    var tmp_51 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_51 = StyledComponent$fontWeight$delegate$lambda(this);
    tmp_51.fontWeight$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_51);
    var tmp_52 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_52 = StyledComponent$fontVariant$delegate$lambda(this);
    tmp_52.fontVariant$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_52);
    var tmp_53 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_53 = StyledComponent$float$delegate$lambda(this);
    tmp_53.float$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_53);
    var tmp_54 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_54 = StyledComponent$clear$delegate$lambda(this);
    tmp_54.clear$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_54);
    var tmp_55 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_55 = StyledComponent$wordBreak$delegate$lambda(this);
    tmp_55.wordBreak$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_55);
    var tmp_56 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_56 = StyledComponent$lineBreak$delegate$lambda(this);
    tmp_56.lineBreak$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_56);
    var tmp_57 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_57 = StyledComponent$cursor$delegate$lambda(this);
    tmp_57.cursor$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_57);
    var tmp_58 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_58 = StyledComponent$flexDirection$delegate$lambda(this);
    tmp_58.flexDirection$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_58);
    var tmp_59 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_59 = StyledComponent$flexWrap$delegate$lambda(this);
    tmp_59.flexWrap$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_59);
    var tmp_60 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_60 = StyledComponent$justifyItems$delegate$lambda(this);
    tmp_60.justifyItems$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_60);
    var tmp_61 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_61 = StyledComponent$justifyContent$delegate$lambda(this);
    tmp_61.justifyContent$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_61);
    var tmp_62 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_62 = StyledComponent$alignItems$delegate$lambda(this);
    tmp_62.alignItems$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_62);
    var tmp_63 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_63 = StyledComponent$alignContent$delegate$lambda(this);
    tmp_63.alignContent$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_63);
    var tmp_64 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_64 = StyledComponent$order$delegate$lambda(this);
    tmp_64.order$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_64);
    var tmp_65 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_65 = StyledComponent$flexGrow$delegate$lambda(this);
    tmp_65.flexGrow$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_65);
    var tmp_66 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_66 = StyledComponent$flexShrink$delegate$lambda(this);
    tmp_66.flexShrink$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_66);
    var tmp_67 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_67 = StyledComponent$flexBasis$delegate$lambda(this);
    tmp_67.flexBasis$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_67);
    var tmp_68 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_68 = StyledComponent$alignSelf$delegate$lambda(this);
    tmp_68.alignSelf$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_68);
    var tmp_69 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_69 = StyledComponent$justifySelf$delegate$lambda(this);
    tmp_69.justifySelf$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_69);
    var tmp_70 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_70 = StyledComponent$gridAutoColumns$delegate$lambda(this);
    tmp_70.gridAutoColumns$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_70);
    var tmp_71 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_71 = StyledComponent$gridAutoRows$delegate$lambda(this);
    tmp_71.gridAutoRows$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_71);
    var tmp_72 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_72 = StyledComponent$gridAutoFlow$delegate$lambda(this);
    tmp_72.gridAutoFlow$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_72);
    var tmp_73 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_73 = StyledComponent$gridTemplateColumns$delegate$lambda(this);
    tmp_73.gridTemplateColumns$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_73);
    var tmp_74 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_74 = StyledComponent$gridTemplateRows$delegate$lambda(this);
    tmp_74.gridTemplateRows$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_74);
    var tmp_75 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_75 = StyledComponent$gridTemplateAreas$delegate$lambda(this);
    tmp_75.gridTemplateAreas$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_75);
    var tmp_76 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_76 = StyledComponent$gridColumnGap$delegate$lambda(this);
    tmp_76.gridColumnGap$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_76);
    var tmp_77 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_77 = StyledComponent$gridRowGap$delegate$lambda(this);
    tmp_77.gridRowGap$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_77);
    var tmp_78 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_78 = StyledComponent$gridColumnStart$delegate$lambda(this);
    tmp_78.gridColumnStart$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_78);
    var tmp_79 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_79 = StyledComponent$gridRowStart$delegate$lambda(this);
    tmp_79.gridRowStart$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_79);
    var tmp_80 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_80 = StyledComponent$gridColumnEnd$delegate$lambda(this);
    tmp_80.gridColumnEnd$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_80);
    var tmp_81 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_81 = StyledComponent$gridRowEnd$delegate$lambda(this);
    tmp_81.gridRowEnd$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_81);
    var tmp_82 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_82 = StyledComponent$gridArea$delegate$lambda(this);
    tmp_82.gridArea$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_82);
    var tmp_83 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_83 = StyledComponent$outline$delegate$lambda(this);
    tmp_83.outline$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_83);
    var tmp_84 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_84 = StyledComponent$boxShadow$delegate$lambda(this);
    tmp_84.boxShadow$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_84);
    var tmp_85 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_85 = StyledComponent$boxShadowList$delegate$lambda(this);
    tmp_85.boxShadowList$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_85);
    var tmp_86 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_86 = StyledComponent$transition$delegate$lambda(this);
    tmp_86.transition$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_86);
    var tmp_87 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_87 = StyledComponent$transitionList$delegate$lambda(this);
    tmp_87.transitionList$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_87);
    var tmp_88 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_88 = StyledComponent$borderRadius$delegate$lambda(this);
    tmp_88.borderRadius$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_88);
    var tmp_89 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_89 = StyledComponent$borderRadiusList$delegate$lambda(this);
    tmp_89.borderRadiusList$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_89);
    var tmp_90 = this;
    // Inline function 'io.kvision.core.StyledComponent.refreshOnUpdate' call
    var refreshFunction_90 = StyledComponent$listStyle$delegate$lambda(this);
    tmp_90.listStyle$delegate_1 = _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction_90);
  }
  protoOf(StyledComponent).get_styledPropertyValues_c7807s_k$ = function () {
    return this.styledPropertyValues_1;
  };
  protoOf(StyledComponent).set_width_3hpb1_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.width$delegate_1, this, width$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_width_j0q4yl_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.width$delegate_1, this, width$factory_0());
  };
  protoOf(StyledComponent).set_minWidth_lgkrm3_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.minWidth$delegate_1, this, minWidth$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_minWidth_gh1tnh_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.minWidth$delegate_1, this, minWidth$factory_0());
  };
  protoOf(StyledComponent).set_maxWidth_ba46bd_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.maxWidth$delegate_1, this, maxWidth$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_maxWidth_p6k67p_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.maxWidth$delegate_1, this, maxWidth$factory_0());
  };
  protoOf(StyledComponent).set_height_z8kom6_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.height$delegate_1, this, height$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_height_e7t92o_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.height$delegate_1, this, height$factory_0());
  };
  protoOf(StyledComponent).set_minHeight_6sfami_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.minHeight$delegate_1, this, minHeight$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_minHeight_6azkhc_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.minHeight$delegate_1, this, minHeight$factory_0());
  };
  protoOf(StyledComponent).set_maxHeight_wsun0o_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.maxHeight$delegate_1, this, maxHeight$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_maxHeight_6gxbsu_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.maxHeight$delegate_1, this, maxHeight$factory_0());
  };
  protoOf(StyledComponent).set_display_2qo1ly_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.display$delegate_1, this, display$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_display_swvnix_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.display$delegate_1, this, display$factory_0());
  };
  protoOf(StyledComponent).set_position_18dayj_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.position$delegate_1, this, position$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_position_jfponi_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.position$delegate_1, this, position$factory_0());
  };
  protoOf(StyledComponent).set_top_r69qtq_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.top$delegate_1, this, top$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_top_18ivbo_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.top$delegate_1, this, top$factory_0());
  };
  protoOf(StyledComponent).set_left_qygbia_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.left$delegate_1, this, left$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_left_woprgw_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.left$delegate_1, this, left$factory_0());
  };
  protoOf(StyledComponent).set_right_9od7uh_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.right$delegate_1, this, right$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_right_ixz7xv_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.right$delegate_1, this, right$factory_0());
  };
  protoOf(StyledComponent).set_bottom_ffkllq_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.bottom$delegate_1, this, bottom$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_bottom_bj8ras_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.bottom$delegate_1, this, bottom$factory_0());
  };
  protoOf(StyledComponent).set_zIndex_5yac2u_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.zIndex$delegate_1, this, zIndex$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_zIndex_mbbc75_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.zIndex$delegate_1, this, zIndex$factory_0());
  };
  protoOf(StyledComponent).set_overflow_7svzdu_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.overflow$delegate_1, this, overflow$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_overflow_n1lnw5_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.overflow$delegate_1, this, overflow$factory_0());
  };
  protoOf(StyledComponent).set_overflowX_7iyfto_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.overflowX$delegate_1, this, overflowX$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_overflowX_42j0ur_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.overflowX$delegate_1, this, overflowX$factory_0());
  };
  protoOf(StyledComponent).set_overflowY_17y4pv_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.overflowY$delegate_1, this, overflowY$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_overflowY_42j0uq_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.overflowY$delegate_1, this, overflowY$factory_0());
  };
  protoOf(StyledComponent).set_overflowWrap_r7nla0_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.overflowWrap$delegate_1, this, overflowWrap$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_overflowWrap_6lceob_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.overflowWrap$delegate_1, this, overflowWrap$factory_0());
  };
  protoOf(StyledComponent).set_resize_h86wr4_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.resize$delegate_1, this, resize$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_resize_iyfwsd_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.resize$delegate_1, this, resize$factory_0());
  };
  protoOf(StyledComponent).set_border_fseb7l_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.border$delegate_1, this, border$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_border_bj7585_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.border$delegate_1, this, border$factory_0());
  };
  protoOf(StyledComponent).set_borderTop_xjdfqa_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.borderTop$delegate_1, this, borderTop$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_borderTop_bs24m8_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.borderTop$delegate_1, this, borderTop$factory_0());
  };
  protoOf(StyledComponent).set_borderRight_jm71op_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.borderRight$delegate_1, this, borderRight$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_borderRight_q2ozxj_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.borderRight$delegate_1, this, borderRight$factory_0());
  };
  protoOf(StyledComponent).set_borderBottom_619gwm_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.borderBottom$delegate_1, this, borderBottom$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_borderBottom_ji3p34_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.borderBottom$delegate_1, this, borderBottom$factory_0());
  };
  protoOf(StyledComponent).set_borderLeft_djnoze_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.borderLeft$delegate_1, this, borderLeft$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_borderLeft_a04dss_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.borderLeft$delegate_1, this, borderLeft$factory_0());
  };
  protoOf(StyledComponent).set_margin_lv72e3_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.margin$delegate_1, this, margin$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_margin_gizxkn_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.margin$delegate_1, this, margin$factory_0());
  };
  protoOf(StyledComponent).set_marginTop_uelzj8_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.marginTop$delegate_1, this, marginTop$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_marginTop_8ripk2_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.marginTop$delegate_1, this, marginTop$factory_0());
  };
  protoOf(StyledComponent).set_marginRight_b0p4mj_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.marginRight$delegate_1, this, marginRight$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_marginRight_u0qrhh_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.marginRight$delegate_1, this, marginRight$factory_0());
  };
  protoOf(StyledComponent).set_marginBottom_q6omk0_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.marginBottom$delegate_1, this, marginBottom$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_marginBottom_8loou_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.marginBottom$delegate_1, this, marginBottom$factory_0());
  };
  protoOf(StyledComponent).set_marginLeft_hqxzqs_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.marginLeft$delegate_1, this, marginLeft$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_marginLeft_cf6w66_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.marginLeft$delegate_1, this, marginLeft$factory_0());
  };
  protoOf(StyledComponent).set_padding_5cj5xu_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.padding$delegate_1, this, padding$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_padding_c2ipjs_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.padding$delegate_1, this, padding$factory_0());
  };
  protoOf(StyledComponent).set_paddingTop_t7d9x7_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.paddingTop$delegate_1, this, paddingTop$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_paddingTop_iol9mb_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.paddingTop$delegate_1, this, paddingTop$factory_0());
  };
  protoOf(StyledComponent).set_paddingRight_6t1ose_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.paddingRight$delegate_1, this, paddingRight$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_paddingRight_gckk44_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.paddingRight$delegate_1, this, paddingRight$factory_0());
  };
  protoOf(StyledComponent).set_paddingBottom_t7mbgn_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.paddingBottom$delegate_1, this, paddingBottom$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_paddingBottom_24qann_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.paddingBottom$delegate_1, this, paddingBottom$factory_0());
  };
  protoOf(StyledComponent).set_paddingLeft_g1o09h_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.paddingLeft$delegate_1, this, paddingLeft$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_paddingLeft_axk5v5_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.paddingLeft$delegate_1, this, paddingLeft$factory_0());
  };
  protoOf(StyledComponent).set_color_oq6983_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.color$delegate_1, this, color$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_color_ipu8u2_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.color$delegate_1, this, color$factory_0());
  };
  protoOf(StyledComponent).set_colorHex_70b8ey_k$ = function (value) {
    this.set_color_oq6983_k$(!(value == null) ? Companion_getInstance_0().hex_sedvbx_k$(value) : null);
  };
  protoOf(StyledComponent).get_colorHex_strxj5_k$ = function () {
    return null;
  };
  protoOf(StyledComponent).set_colorName_lzm036_k$ = function (value) {
    this.set_color_oq6983_k$(!(value == null) ? Companion_getInstance_0().name_lqbcrr_k$(value) : null);
  };
  protoOf(StyledComponent).get_colorName_trb3ff_k$ = function () {
    return null;
  };
  protoOf(StyledComponent).set_opacity_lnkdgj_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.opacity$delegate_1, this, opacity$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_opacity_jowogu_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.opacity$delegate_1, this, opacity$factory_0());
  };
  protoOf(StyledComponent).set_background_fl86pt_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.background$delegate_1, this, background$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_background_stpfw7_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.background$delegate_1, this, background$factory_0());
  };
  protoOf(StyledComponent).set_textDirection_twg66u_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.textDirection$delegate_1, this, textDirection$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_textDirection_cl6v6f_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.textDirection$delegate_1, this, textDirection$factory_0());
  };
  protoOf(StyledComponent).set_letterSpacing_lggd0m_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.letterSpacing$delegate_1, this, letterSpacing$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_letterSpacing_xp4v84_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.letterSpacing$delegate_1, this, letterSpacing$factory_0());
  };
  protoOf(StyledComponent).set_lineHeight_n39u4u_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.lineHeight$delegate_1, this, lineHeight$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_lineHeight_spcmd8_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.lineHeight$delegate_1, this, lineHeight$factory_0());
  };
  protoOf(StyledComponent).set_textAlign_puln5o_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.textAlign$delegate_1, this, textAlign$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_textAlign_93uspd_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.textAlign$delegate_1, this, textAlign$factory_0());
  };
  protoOf(StyledComponent).set_textDecoration_a64boh_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.textDecoration$delegate_1, this, textDecoration$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_textDecoration_itgjwm_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.textDecoration$delegate_1, this, textDecoration$factory_0());
  };
  protoOf(StyledComponent).set_textIndent_3mpakw_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.textIndent$delegate_1, this, textIndent$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_textIndent_5mau2q_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.textIndent$delegate_1, this, textIndent$factory_0());
  };
  protoOf(StyledComponent).set_textShadow_a41vmn_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.textShadow$delegate_1, this, textShadow$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_textShadow_a9ecs6_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.textShadow$delegate_1, this, textShadow$factory_0());
  };
  protoOf(StyledComponent).set_textTransform_36gikj_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.textTransform$delegate_1, this, textTransform$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_textTransform_kqn3iu_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.textTransform$delegate_1, this, textTransform$factory_0());
  };
  protoOf(StyledComponent).set_textOverflow_3o6ktn_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.textOverflow$delegate_1, this, textOverflow$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_textOverflow_8v7btk_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.textOverflow$delegate_1, this, textOverflow$factory_0());
  };
  protoOf(StyledComponent).set_unicodeBidi_xvmmrx_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.unicodeBidi$delegate_1, this, unicodeBidi$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_unicodeBidi_cmx0ps_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.unicodeBidi$delegate_1, this, unicodeBidi$factory_0());
  };
  protoOf(StyledComponent).set_verticalAlign_cr927n_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.verticalAlign$delegate_1, this, verticalAlign$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_verticalAlign_k2exoa_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.verticalAlign$delegate_1, this, verticalAlign$factory_0());
  };
  protoOf(StyledComponent).set_whiteSpace_koztq1_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.whiteSpace$delegate_1, this, whiteSpace$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_whiteSpace_g2zb4q_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.whiteSpace$delegate_1, this, whiteSpace$factory_0());
  };
  protoOf(StyledComponent).set_wordSpacing_k1kk1i_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.wordSpacing$delegate_1, this, wordSpacing$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_wordSpacing_ak2jyo_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.wordSpacing$delegate_1, this, wordSpacing$factory_0());
  };
  protoOf(StyledComponent).set_fontFamily_pi1455_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.fontFamily$delegate_1, this, fontFamily$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_fontFamily_ulphcs_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.fontFamily$delegate_1, this, fontFamily$factory_0());
  };
  protoOf(StyledComponent).set_fontSize_ozq5eh_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.fontSize$delegate_1, this, fontSize$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_fontSize_pr9n47_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.fontSize$delegate_1, this, fontSize$factory_0());
  };
  protoOf(StyledComponent).set_fontStyle_bzp8ue_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.fontStyle$delegate_1, this, fontStyle$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_fontStyle_h4vaiv_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.fontStyle$delegate_1, this, fontStyle$factory_0());
  };
  protoOf(StyledComponent).set_fontWeight_3x4rur_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.fontWeight$delegate_1, this, fontWeight$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_fontWeight_wbif2o_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.fontWeight$delegate_1, this, fontWeight$factory_0());
  };
  protoOf(StyledComponent).set_fontVariant_8rvq3q_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.fontVariant$delegate_1, this, fontVariant$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_fontVariant_nwvpdf_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.fontVariant$delegate_1, this, fontVariant$factory_0());
  };
  protoOf(StyledComponent).set_float_j9ahnu_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.float$delegate_1, this, float$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_float_irfrjn_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.float$delegate_1, this, float$factory_0());
  };
  protoOf(StyledComponent).set_clear_28bgsx_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.clear$delegate_1, this, clear$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_clear_ips6ck_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.clear$delegate_1, this, clear$factory_0());
  };
  protoOf(StyledComponent).set_wordBreak_iijn6h_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.wordBreak$delegate_1, this, wordBreak$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_wordBreak_mshpbg_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.wordBreak$delegate_1, this, wordBreak$factory_0());
  };
  protoOf(StyledComponent).set_lineBreak_ckkrpt_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.lineBreak$delegate_1, this, lineBreak$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_lineBreak_lmsita_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.lineBreak$delegate_1, this, lineBreak$factory_0());
  };
  protoOf(StyledComponent).set_cursor_64jwj6_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.cursor$delegate_1, this, cursor$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_cursor_c3jujj_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.cursor$delegate_1, this, cursor$factory_0());
  };
  protoOf(StyledComponent).set_flexDirection_k0r79y_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.flexDirection$delegate_1, this, flexDirection$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_flexDirection_hcc6ub_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.flexDirection$delegate_1, this, flexDirection$factory_0());
  };
  protoOf(StyledComponent).set_flexWrap_te3tvl_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.flexWrap$delegate_1, this, flexWrap$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_flexWrap_2yh4yc_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.flexWrap$delegate_1, this, flexWrap$factory_0());
  };
  protoOf(StyledComponent).set_justifyItems_5m2jf8_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.justifyItems$delegate_1, this, justifyItems$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_justifyItems_jcotd3_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.justifyItems$delegate_1, this, justifyItems$factory_0());
  };
  protoOf(StyledComponent).set_justifyContent_920yxn_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.justifyContent$delegate_1, this, justifyContent$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_justifyContent_6wctgu_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.justifyContent$delegate_1, this, justifyContent$factory_0());
  };
  protoOf(StyledComponent).set_alignItems_2x4ueh_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.alignItems$delegate_1, this, alignItems$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_alignItems_x9tow4_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.alignItems$delegate_1, this, alignItems$factory_0());
  };
  protoOf(StyledComponent).set_alignContent_faycwg_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.alignContent$delegate_1, this, alignContent$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_alignContent_7wikg3_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.alignContent$delegate_1, this, alignContent$factory_0());
  };
  protoOf(StyledComponent).set_order_ox9g8a_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.order$delegate_1, this, order$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_order_iwhiqt_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.order$delegate_1, this, order$factory_0());
  };
  protoOf(StyledComponent).set_flexGrow_svs8mq_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.flexGrow$delegate_1, this, flexGrow$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_flexGrow_2yrcej_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.flexGrow$delegate_1, this, flexGrow$factory_0());
  };
  protoOf(StyledComponent).set_flexShrink_aiq37o_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.flexShrink$delegate_1, this, flexShrink$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_flexShrink_34coph_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.flexShrink$delegate_1, this, flexShrink$factory_0());
  };
  protoOf(StyledComponent).set_flexBasis_l67ry_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.flexBasis$delegate_1, this, flexBasis$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_flexBasis_kzhdk4_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.flexBasis$delegate_1, this, flexBasis$factory_0());
  };
  protoOf(StyledComponent).set_alignSelf_g8okn9_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.alignSelf$delegate_1, this, alignSelf$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_alignSelf_xai5dk_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.alignSelf$delegate_1, this, alignSelf$factory_0());
  };
  protoOf(StyledComponent).set_justifySelf_nht07u_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.justifySelf$delegate_1, this, justifySelf$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_justifySelf_uen4od_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.justifySelf$delegate_1, this, justifySelf$factory_0());
  };
  protoOf(StyledComponent).set_gridAutoColumns_byrs18_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridAutoColumns$delegate_1, this, gridAutoColumns$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridAutoColumns_t9qrz3_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridAutoColumns$delegate_1, this, gridAutoColumns$factory_0());
  };
  protoOf(StyledComponent).set_gridAutoRows_d10kgc_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridAutoRows$delegate_1, this, gridAutoRows$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridAutoRows_58a0bt_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridAutoRows$delegate_1, this, gridAutoRows$factory_0());
  };
  protoOf(StyledComponent).set_gridAutoFlow_6hmum7_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridAutoFlow$delegate_1, this, gridAutoFlow$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridAutoFlow_58hql0_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridAutoFlow$delegate_1, this, gridAutoFlow$factory_0());
  };
  protoOf(StyledComponent).set_gridTemplateColumns_1zexbd_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridTemplateColumns$delegate_1, this, gridTemplateColumns$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridTemplateColumns_iity8c_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridTemplateColumns$delegate_1, this, gridTemplateColumns$factory_0());
  };
  protoOf(StyledComponent).set_gridTemplateRows_l4bmtd_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridTemplateRows$delegate_1, this, gridTemplateRows$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridTemplateRows_iytxsu_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridTemplateRows$delegate_1, this, gridTemplateRows$factory_0());
  };
  protoOf(StyledComponent).set_gridTemplateAreas_pc9px2_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridTemplateAreas$delegate_1, this, gridTemplateAreas$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridTemplateAreas_k06mub_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridTemplateAreas$delegate_1, this, gridTemplateAreas$factory_0());
  };
  protoOf(StyledComponent).set_gridColumnGap_lgxj26_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridColumnGap$delegate_1, this, gridColumnGap$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridColumnGap_bswilr_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridColumnGap$delegate_1, this, gridColumnGap$factory_0());
  };
  protoOf(StyledComponent).set_gridRowGap_s61lus_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridRowGap$delegate_1, this, gridRowGap$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridRowGap_970ved_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridRowGap$delegate_1, this, gridRowGap$factory_0());
  };
  protoOf(StyledComponent).set_gridColumnStart_na6msy_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridColumnStart$delegate_1, this, gridColumnStart$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridColumnStart_mkxl0d_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridColumnStart$delegate_1, this, gridColumnStart$factory_0());
  };
  protoOf(StyledComponent).set_gridRowStart_hb6r74_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridRowStart$delegate_1, this, gridRowStart$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridRowStart_shdxux_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridRowStart$delegate_1, this, gridRowStart$factory_0());
  };
  protoOf(StyledComponent).set_gridColumnEnd_5jev79_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridColumnEnd$delegate_1, this, gridColumnEnd$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridColumnEnd_bswjsa_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridColumnEnd$delegate_1, this, gridColumnEnd$factory_0());
  };
  protoOf(StyledComponent).set_gridRowEnd_rcwd03_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridRowEnd$delegate_1, this, gridRowEnd$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridRowEnd_970wkw_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridRowEnd$delegate_1, this, gridRowEnd$factory_0());
  };
  protoOf(StyledComponent).set_gridArea_cwqvqf_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.gridArea$delegate_1, this, gridArea$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_gridArea_qjwif8_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.gridArea$delegate_1, this, gridArea$factory_0());
  };
  protoOf(StyledComponent).set_outline_tccze9_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.outline$delegate_1, this, outline$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_outline_h12qhz_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.outline$delegate_1, this, outline$factory_0());
  };
  protoOf(StyledComponent).set_boxShadow_wldfgd_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.boxShadow$delegate_1, this, boxShadow$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_boxShadow_ksx25e_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.boxShadow$delegate_1, this, boxShadow$factory_0());
  };
  protoOf(StyledComponent).set_boxShadowList_ck6kdn_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.boxShadowList$delegate_1, this, boxShadowList$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_boxShadowList_p96gps_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.boxShadowList$delegate_1, this, boxShadowList$factory_0());
  };
  protoOf(StyledComponent).set_transition_wr68gv_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.transition$delegate_1, this, transition$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_transition_mcca1q_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.transition$delegate_1, this, transition$factory_0());
  };
  protoOf(StyledComponent).set_transitionList_5v6vvd_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.transitionList$delegate_1, this, transitionList$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_transitionList_7wb6k_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.transitionList$delegate_1, this, transitionList$factory_0());
  };
  protoOf(StyledComponent).set_borderRadius_tlfw5x_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.borderRadius$delegate_1, this, borderRadius$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_borderRadius_quu3af_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.borderRadius$delegate_1, this, borderRadius$factory_0());
  };
  protoOf(StyledComponent).set_borderRadiusList_jumjse_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.borderRadiusList$delegate_1, this, borderRadiusList$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_borderRadiusList_hu8axx_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.borderRadiusList$delegate_1, this, borderRadiusList$factory_0());
  };
  protoOf(StyledComponent).set_listStyle_x4n8lv_k$ = function (_set____db54di) {
    return StyledRefreshDelegate__setValue_impl_pb0ln3(this.listStyle$delegate_1, this, listStyle$factory(), _set____db54di);
  };
  protoOf(StyledComponent).get_listStyle_bwumly_k$ = function () {
    return StyledRefreshDelegate__getValue_impl_wx74v9(this.listStyle$delegate_1, this, listStyle$factory_0());
  };
  protoOf(StyledComponent).getSnStyle_ha57og_k$ = function () {
    var tmp0_elvis_lhs = this.snStyleCache_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'io.kvision.core.StyledComponent.getSnStyle.<anonymous>' call
      var s = Object.assign({}, this.propertyStyles_1);
      this.snStyleCache_1 = s;
      tmp = s;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(StyledComponent).getStyle_8ftz8f_k$ = function (name) {
    return this.propertyStyles_1[name];
  };
  protoOf(StyledComponent).setStyle_q2a0in_k$ = function (name, value) {
    this.propertyStyles_1[name] = value;
    this.refresh_6a3uvf_k$();
  };
  protoOf(StyledComponent).removeStyle_q1ngfx_k$ = function (name) {
    delete_0(this.propertyStyles_1, name);
    this.refresh_6a3uvf_k$();
  };
  protoOf(StyledComponent).refresh_6a3uvf_k$ = function () {
    this.snStyleCache_1 = null;
  };
  function _StyledRefreshDelegate___init__impl__ed6iyc(refreshFunction) {
    return refreshFunction;
  }
  function _get_refreshFunction__h8es9q_1($this) {
    return $this;
  }
  function StyledRefreshDelegate__getValue_impl_wx74v9($this, thisRef, property) {
    var value = thisRef.styledPropertyValues_1[property.callableName];
    var tmp;
    if (value != null) {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = value;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = null;
    }
    return tmp;
  }
  function StyledRefreshDelegate__setValue_impl_pb0ln3($this, thisRef, property, value) {
    var oldValue = thisRef.styledPropertyValues_1[property.callableName];
    if (value == null) {
      delete_0(thisRef.styledPropertyValues_1, property.callableName);
    } else {
      thisRef.styledPropertyValues_1[property.callableName] = value;
    }
    if (oldValue != value) {
      _get_refreshFunction__h8es9q_1($this)(value);
      thisRef.refresh_6a3uvf_k$();
    }
  }
  function StyledRefreshDelegate__toString_impl_z4m7cc($this) {
    return 'StyledRefreshDelegate(refreshFunction=' + toString_0($this) + ')';
  }
  function StyledRefreshDelegate__hashCode_impl_e5bxtx($this) {
    return hashCode($this);
  }
  function StyledRefreshDelegate__equals_impl_aiy0f5($this, other) {
    if (!(other instanceof StyledRefreshDelegate))
      return false;
    var tmp0_other_with_cast = other instanceof StyledRefreshDelegate ? other.refreshFunction_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function StyledRefreshDelegate(refreshFunction) {
    this.refreshFunction_1 = refreshFunction;
  }
  protoOf(StyledRefreshDelegate).toString = function () {
    return StyledRefreshDelegate__toString_impl_z4m7cc(this.refreshFunction_1);
  };
  protoOf(StyledRefreshDelegate).hashCode = function () {
    return StyledRefreshDelegate__hashCode_impl_e5bxtx(this.refreshFunction_1);
  };
  protoOf(StyledRefreshDelegate).equals = function (other) {
    return StyledRefreshDelegate__equals_impl_aiy0f5(this.refreshFunction_1, other);
  };
  function width$factory() {
    return getPropertyCallableRef('width', 1, KMutableProperty1, function (receiver) {
      return receiver.get_width_j0q4yl_k$();
    }, function (receiver, value) {
      return receiver.set_width_3hpb1_k$(value);
    });
  }
  function width$factory_0() {
    return getPropertyCallableRef('width', 1, KMutableProperty1, function (receiver) {
      return receiver.get_width_j0q4yl_k$();
    }, function (receiver, value) {
      return receiver.set_width_3hpb1_k$(value);
    });
  }
  function minWidth$factory() {
    return getPropertyCallableRef('minWidth', 1, KMutableProperty1, function (receiver) {
      return receiver.get_minWidth_gh1tnh_k$();
    }, function (receiver, value) {
      return receiver.set_minWidth_lgkrm3_k$(value);
    });
  }
  function minWidth$factory_0() {
    return getPropertyCallableRef('minWidth', 1, KMutableProperty1, function (receiver) {
      return receiver.get_minWidth_gh1tnh_k$();
    }, function (receiver, value) {
      return receiver.set_minWidth_lgkrm3_k$(value);
    });
  }
  function maxWidth$factory() {
    return getPropertyCallableRef('maxWidth', 1, KMutableProperty1, function (receiver) {
      return receiver.get_maxWidth_p6k67p_k$();
    }, function (receiver, value) {
      return receiver.set_maxWidth_ba46bd_k$(value);
    });
  }
  function maxWidth$factory_0() {
    return getPropertyCallableRef('maxWidth', 1, KMutableProperty1, function (receiver) {
      return receiver.get_maxWidth_p6k67p_k$();
    }, function (receiver, value) {
      return receiver.set_maxWidth_ba46bd_k$(value);
    });
  }
  function height$factory() {
    return getPropertyCallableRef('height', 1, KMutableProperty1, function (receiver) {
      return receiver.get_height_e7t92o_k$();
    }, function (receiver, value) {
      return receiver.set_height_z8kom6_k$(value);
    });
  }
  function height$factory_0() {
    return getPropertyCallableRef('height', 1, KMutableProperty1, function (receiver) {
      return receiver.get_height_e7t92o_k$();
    }, function (receiver, value) {
      return receiver.set_height_z8kom6_k$(value);
    });
  }
  function minHeight$factory() {
    return getPropertyCallableRef('minHeight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_minHeight_6azkhc_k$();
    }, function (receiver, value) {
      return receiver.set_minHeight_6sfami_k$(value);
    });
  }
  function minHeight$factory_0() {
    return getPropertyCallableRef('minHeight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_minHeight_6azkhc_k$();
    }, function (receiver, value) {
      return receiver.set_minHeight_6sfami_k$(value);
    });
  }
  function maxHeight$factory() {
    return getPropertyCallableRef('maxHeight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_maxHeight_6gxbsu_k$();
    }, function (receiver, value) {
      return receiver.set_maxHeight_wsun0o_k$(value);
    });
  }
  function maxHeight$factory_0() {
    return getPropertyCallableRef('maxHeight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_maxHeight_6gxbsu_k$();
    }, function (receiver, value) {
      return receiver.set_maxHeight_wsun0o_k$(value);
    });
  }
  function display$factory() {
    return getPropertyCallableRef('display', 1, KMutableProperty1, function (receiver) {
      return receiver.get_display_swvnix_k$();
    }, function (receiver, value) {
      return receiver.set_display_2qo1ly_k$(value);
    });
  }
  function display$factory_0() {
    return getPropertyCallableRef('display', 1, KMutableProperty1, function (receiver) {
      return receiver.get_display_swvnix_k$();
    }, function (receiver, value) {
      return receiver.set_display_2qo1ly_k$(value);
    });
  }
  function position$factory() {
    return getPropertyCallableRef('position', 1, KMutableProperty1, function (receiver) {
      return receiver.get_position_jfponi_k$();
    }, function (receiver, value) {
      return receiver.set_position_18dayj_k$(value);
    });
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KMutableProperty1, function (receiver) {
      return receiver.get_position_jfponi_k$();
    }, function (receiver, value) {
      return receiver.set_position_18dayj_k$(value);
    });
  }
  function top$factory() {
    return getPropertyCallableRef('top', 1, KMutableProperty1, function (receiver) {
      return receiver.get_top_18ivbo_k$();
    }, function (receiver, value) {
      return receiver.set_top_r69qtq_k$(value);
    });
  }
  function top$factory_0() {
    return getPropertyCallableRef('top', 1, KMutableProperty1, function (receiver) {
      return receiver.get_top_18ivbo_k$();
    }, function (receiver, value) {
      return receiver.set_top_r69qtq_k$(value);
    });
  }
  function left$factory() {
    return getPropertyCallableRef('left', 1, KMutableProperty1, function (receiver) {
      return receiver.get_left_woprgw_k$();
    }, function (receiver, value) {
      return receiver.set_left_qygbia_k$(value);
    });
  }
  function left$factory_0() {
    return getPropertyCallableRef('left', 1, KMutableProperty1, function (receiver) {
      return receiver.get_left_woprgw_k$();
    }, function (receiver, value) {
      return receiver.set_left_qygbia_k$(value);
    });
  }
  function right$factory() {
    return getPropertyCallableRef('right', 1, KMutableProperty1, function (receiver) {
      return receiver.get_right_ixz7xv_k$();
    }, function (receiver, value) {
      return receiver.set_right_9od7uh_k$(value);
    });
  }
  function right$factory_0() {
    return getPropertyCallableRef('right', 1, KMutableProperty1, function (receiver) {
      return receiver.get_right_ixz7xv_k$();
    }, function (receiver, value) {
      return receiver.set_right_9od7uh_k$(value);
    });
  }
  function bottom$factory() {
    return getPropertyCallableRef('bottom', 1, KMutableProperty1, function (receiver) {
      return receiver.get_bottom_bj8ras_k$();
    }, function (receiver, value) {
      return receiver.set_bottom_ffkllq_k$(value);
    });
  }
  function bottom$factory_0() {
    return getPropertyCallableRef('bottom', 1, KMutableProperty1, function (receiver) {
      return receiver.get_bottom_bj8ras_k$();
    }, function (receiver, value) {
      return receiver.set_bottom_ffkllq_k$(value);
    });
  }
  function zIndex$factory() {
    return getPropertyCallableRef('zIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.get_zIndex_mbbc75_k$();
    }, function (receiver, value) {
      return receiver.set_zIndex_5yac2u_k$(value);
    });
  }
  function zIndex$factory_0() {
    return getPropertyCallableRef('zIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.get_zIndex_mbbc75_k$();
    }, function (receiver, value) {
      return receiver.set_zIndex_5yac2u_k$(value);
    });
  }
  function overflow$factory() {
    return getPropertyCallableRef('overflow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overflow_n1lnw5_k$();
    }, function (receiver, value) {
      return receiver.set_overflow_7svzdu_k$(value);
    });
  }
  function overflow$factory_0() {
    return getPropertyCallableRef('overflow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overflow_n1lnw5_k$();
    }, function (receiver, value) {
      return receiver.set_overflow_7svzdu_k$(value);
    });
  }
  function overflowX$factory() {
    return getPropertyCallableRef('overflowX', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overflowX_42j0ur_k$();
    }, function (receiver, value) {
      return receiver.set_overflowX_7iyfto_k$(value);
    });
  }
  function overflowX$factory_0() {
    return getPropertyCallableRef('overflowX', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overflowX_42j0ur_k$();
    }, function (receiver, value) {
      return receiver.set_overflowX_7iyfto_k$(value);
    });
  }
  function overflowY$factory() {
    return getPropertyCallableRef('overflowY', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overflowY_42j0uq_k$();
    }, function (receiver, value) {
      return receiver.set_overflowY_17y4pv_k$(value);
    });
  }
  function overflowY$factory_0() {
    return getPropertyCallableRef('overflowY', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overflowY_42j0uq_k$();
    }, function (receiver, value) {
      return receiver.set_overflowY_17y4pv_k$(value);
    });
  }
  function overflowWrap$factory() {
    return getPropertyCallableRef('overflowWrap', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overflowWrap_6lceob_k$();
    }, function (receiver, value) {
      return receiver.set_overflowWrap_r7nla0_k$(value);
    });
  }
  function overflowWrap$factory_0() {
    return getPropertyCallableRef('overflowWrap', 1, KMutableProperty1, function (receiver) {
      return receiver.get_overflowWrap_6lceob_k$();
    }, function (receiver, value) {
      return receiver.set_overflowWrap_r7nla0_k$(value);
    });
  }
  function resize$factory() {
    return getPropertyCallableRef('resize', 1, KMutableProperty1, function (receiver) {
      return receiver.get_resize_iyfwsd_k$();
    }, function (receiver, value) {
      return receiver.set_resize_h86wr4_k$(value);
    });
  }
  function resize$factory_0() {
    return getPropertyCallableRef('resize', 1, KMutableProperty1, function (receiver) {
      return receiver.get_resize_iyfwsd_k$();
    }, function (receiver, value) {
      return receiver.set_resize_h86wr4_k$(value);
    });
  }
  function border$factory() {
    return getPropertyCallableRef('border', 1, KMutableProperty1, function (receiver) {
      return receiver.get_border_bj7585_k$();
    }, function (receiver, value) {
      return receiver.set_border_fseb7l_k$(value);
    });
  }
  function border$factory_0() {
    return getPropertyCallableRef('border', 1, KMutableProperty1, function (receiver) {
      return receiver.get_border_bj7585_k$();
    }, function (receiver, value) {
      return receiver.set_border_fseb7l_k$(value);
    });
  }
  function borderTop$factory() {
    return getPropertyCallableRef('borderTop', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderTop_bs24m8_k$();
    }, function (receiver, value) {
      return receiver.set_borderTop_xjdfqa_k$(value);
    });
  }
  function borderTop$factory_0() {
    return getPropertyCallableRef('borderTop', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderTop_bs24m8_k$();
    }, function (receiver, value) {
      return receiver.set_borderTop_xjdfqa_k$(value);
    });
  }
  function borderRight$factory() {
    return getPropertyCallableRef('borderRight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderRight_q2ozxj_k$();
    }, function (receiver, value) {
      return receiver.set_borderRight_jm71op_k$(value);
    });
  }
  function borderRight$factory_0() {
    return getPropertyCallableRef('borderRight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderRight_q2ozxj_k$();
    }, function (receiver, value) {
      return receiver.set_borderRight_jm71op_k$(value);
    });
  }
  function borderBottom$factory() {
    return getPropertyCallableRef('borderBottom', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderBottom_ji3p34_k$();
    }, function (receiver, value) {
      return receiver.set_borderBottom_619gwm_k$(value);
    });
  }
  function borderBottom$factory_0() {
    return getPropertyCallableRef('borderBottom', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderBottom_ji3p34_k$();
    }, function (receiver, value) {
      return receiver.set_borderBottom_619gwm_k$(value);
    });
  }
  function borderLeft$factory() {
    return getPropertyCallableRef('borderLeft', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderLeft_a04dss_k$();
    }, function (receiver, value) {
      return receiver.set_borderLeft_djnoze_k$(value);
    });
  }
  function borderLeft$factory_0() {
    return getPropertyCallableRef('borderLeft', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderLeft_a04dss_k$();
    }, function (receiver, value) {
      return receiver.set_borderLeft_djnoze_k$(value);
    });
  }
  function margin$factory() {
    return getPropertyCallableRef('margin', 1, KMutableProperty1, function (receiver) {
      return receiver.get_margin_gizxkn_k$();
    }, function (receiver, value) {
      return receiver.set_margin_lv72e3_k$(value);
    });
  }
  function margin$factory_0() {
    return getPropertyCallableRef('margin', 1, KMutableProperty1, function (receiver) {
      return receiver.get_margin_gizxkn_k$();
    }, function (receiver, value) {
      return receiver.set_margin_lv72e3_k$(value);
    });
  }
  function marginTop$factory() {
    return getPropertyCallableRef('marginTop', 1, KMutableProperty1, function (receiver) {
      return receiver.get_marginTop_8ripk2_k$();
    }, function (receiver, value) {
      return receiver.set_marginTop_uelzj8_k$(value);
    });
  }
  function marginTop$factory_0() {
    return getPropertyCallableRef('marginTop', 1, KMutableProperty1, function (receiver) {
      return receiver.get_marginTop_8ripk2_k$();
    }, function (receiver, value) {
      return receiver.set_marginTop_uelzj8_k$(value);
    });
  }
  function marginRight$factory() {
    return getPropertyCallableRef('marginRight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_marginRight_u0qrhh_k$();
    }, function (receiver, value) {
      return receiver.set_marginRight_b0p4mj_k$(value);
    });
  }
  function marginRight$factory_0() {
    return getPropertyCallableRef('marginRight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_marginRight_u0qrhh_k$();
    }, function (receiver, value) {
      return receiver.set_marginRight_b0p4mj_k$(value);
    });
  }
  function marginBottom$factory() {
    return getPropertyCallableRef('marginBottom', 1, KMutableProperty1, function (receiver) {
      return receiver.get_marginBottom_8loou_k$();
    }, function (receiver, value) {
      return receiver.set_marginBottom_q6omk0_k$(value);
    });
  }
  function marginBottom$factory_0() {
    return getPropertyCallableRef('marginBottom', 1, KMutableProperty1, function (receiver) {
      return receiver.get_marginBottom_8loou_k$();
    }, function (receiver, value) {
      return receiver.set_marginBottom_q6omk0_k$(value);
    });
  }
  function marginLeft$factory() {
    return getPropertyCallableRef('marginLeft', 1, KMutableProperty1, function (receiver) {
      return receiver.get_marginLeft_cf6w66_k$();
    }, function (receiver, value) {
      return receiver.set_marginLeft_hqxzqs_k$(value);
    });
  }
  function marginLeft$factory_0() {
    return getPropertyCallableRef('marginLeft', 1, KMutableProperty1, function (receiver) {
      return receiver.get_marginLeft_cf6w66_k$();
    }, function (receiver, value) {
      return receiver.set_marginLeft_hqxzqs_k$(value);
    });
  }
  function padding$factory() {
    return getPropertyCallableRef('padding', 1, KMutableProperty1, function (receiver) {
      return receiver.get_padding_c2ipjs_k$();
    }, function (receiver, value) {
      return receiver.set_padding_5cj5xu_k$(value);
    });
  }
  function padding$factory_0() {
    return getPropertyCallableRef('padding', 1, KMutableProperty1, function (receiver) {
      return receiver.get_padding_c2ipjs_k$();
    }, function (receiver, value) {
      return receiver.set_padding_5cj5xu_k$(value);
    });
  }
  function paddingTop$factory() {
    return getPropertyCallableRef('paddingTop', 1, KMutableProperty1, function (receiver) {
      return receiver.get_paddingTop_iol9mb_k$();
    }, function (receiver, value) {
      return receiver.set_paddingTop_t7d9x7_k$(value);
    });
  }
  function paddingTop$factory_0() {
    return getPropertyCallableRef('paddingTop', 1, KMutableProperty1, function (receiver) {
      return receiver.get_paddingTop_iol9mb_k$();
    }, function (receiver, value) {
      return receiver.set_paddingTop_t7d9x7_k$(value);
    });
  }
  function paddingRight$factory() {
    return getPropertyCallableRef('paddingRight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_paddingRight_gckk44_k$();
    }, function (receiver, value) {
      return receiver.set_paddingRight_6t1ose_k$(value);
    });
  }
  function paddingRight$factory_0() {
    return getPropertyCallableRef('paddingRight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_paddingRight_gckk44_k$();
    }, function (receiver, value) {
      return receiver.set_paddingRight_6t1ose_k$(value);
    });
  }
  function paddingBottom$factory() {
    return getPropertyCallableRef('paddingBottom', 1, KMutableProperty1, function (receiver) {
      return receiver.get_paddingBottom_24qann_k$();
    }, function (receiver, value) {
      return receiver.set_paddingBottom_t7mbgn_k$(value);
    });
  }
  function paddingBottom$factory_0() {
    return getPropertyCallableRef('paddingBottom', 1, KMutableProperty1, function (receiver) {
      return receiver.get_paddingBottom_24qann_k$();
    }, function (receiver, value) {
      return receiver.set_paddingBottom_t7mbgn_k$(value);
    });
  }
  function paddingLeft$factory() {
    return getPropertyCallableRef('paddingLeft', 1, KMutableProperty1, function (receiver) {
      return receiver.get_paddingLeft_axk5v5_k$();
    }, function (receiver, value) {
      return receiver.set_paddingLeft_g1o09h_k$(value);
    });
  }
  function paddingLeft$factory_0() {
    return getPropertyCallableRef('paddingLeft', 1, KMutableProperty1, function (receiver) {
      return receiver.get_paddingLeft_axk5v5_k$();
    }, function (receiver, value) {
      return receiver.set_paddingLeft_g1o09h_k$(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_oq6983_k$(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.get_color_ipu8u2_k$();
    }, function (receiver, value) {
      return receiver.set_color_oq6983_k$(value);
    });
  }
  function opacity$factory() {
    return getPropertyCallableRef('opacity', 1, KMutableProperty1, function (receiver) {
      return receiver.get_opacity_jowogu_k$();
    }, function (receiver, value) {
      return receiver.set_opacity_lnkdgj_k$(value);
    });
  }
  function opacity$factory_0() {
    return getPropertyCallableRef('opacity', 1, KMutableProperty1, function (receiver) {
      return receiver.get_opacity_jowogu_k$();
    }, function (receiver, value) {
      return receiver.set_opacity_lnkdgj_k$(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_fl86pt_k$(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.get_background_stpfw7_k$();
    }, function (receiver, value) {
      return receiver.set_background_fl86pt_k$(value);
    });
  }
  function textDirection$factory() {
    return getPropertyCallableRef('textDirection', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textDirection_cl6v6f_k$();
    }, function (receiver, value) {
      return receiver.set_textDirection_twg66u_k$(value);
    });
  }
  function textDirection$factory_0() {
    return getPropertyCallableRef('textDirection', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textDirection_cl6v6f_k$();
    }, function (receiver, value) {
      return receiver.set_textDirection_twg66u_k$(value);
    });
  }
  function letterSpacing$factory() {
    return getPropertyCallableRef('letterSpacing', 1, KMutableProperty1, function (receiver) {
      return receiver.get_letterSpacing_xp4v84_k$();
    }, function (receiver, value) {
      return receiver.set_letterSpacing_lggd0m_k$(value);
    });
  }
  function letterSpacing$factory_0() {
    return getPropertyCallableRef('letterSpacing', 1, KMutableProperty1, function (receiver) {
      return receiver.get_letterSpacing_xp4v84_k$();
    }, function (receiver, value) {
      return receiver.set_letterSpacing_lggd0m_k$(value);
    });
  }
  function lineHeight$factory() {
    return getPropertyCallableRef('lineHeight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_lineHeight_spcmd8_k$();
    }, function (receiver, value) {
      return receiver.set_lineHeight_n39u4u_k$(value);
    });
  }
  function lineHeight$factory_0() {
    return getPropertyCallableRef('lineHeight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_lineHeight_spcmd8_k$();
    }, function (receiver, value) {
      return receiver.set_lineHeight_n39u4u_k$(value);
    });
  }
  function textAlign$factory() {
    return getPropertyCallableRef('textAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textAlign_93uspd_k$();
    }, function (receiver, value) {
      return receiver.set_textAlign_puln5o_k$(value);
    });
  }
  function textAlign$factory_0() {
    return getPropertyCallableRef('textAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textAlign_93uspd_k$();
    }, function (receiver, value) {
      return receiver.set_textAlign_puln5o_k$(value);
    });
  }
  function textDecoration$factory() {
    return getPropertyCallableRef('textDecoration', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textDecoration_itgjwm_k$();
    }, function (receiver, value) {
      return receiver.set_textDecoration_a64boh_k$(value);
    });
  }
  function textDecoration$factory_0() {
    return getPropertyCallableRef('textDecoration', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textDecoration_itgjwm_k$();
    }, function (receiver, value) {
      return receiver.set_textDecoration_a64boh_k$(value);
    });
  }
  function textIndent$factory() {
    return getPropertyCallableRef('textIndent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textIndent_5mau2q_k$();
    }, function (receiver, value) {
      return receiver.set_textIndent_3mpakw_k$(value);
    });
  }
  function textIndent$factory_0() {
    return getPropertyCallableRef('textIndent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textIndent_5mau2q_k$();
    }, function (receiver, value) {
      return receiver.set_textIndent_3mpakw_k$(value);
    });
  }
  function textShadow$factory() {
    return getPropertyCallableRef('textShadow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textShadow_a9ecs6_k$();
    }, function (receiver, value) {
      return receiver.set_textShadow_a41vmn_k$(value);
    });
  }
  function textShadow$factory_0() {
    return getPropertyCallableRef('textShadow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textShadow_a9ecs6_k$();
    }, function (receiver, value) {
      return receiver.set_textShadow_a41vmn_k$(value);
    });
  }
  function textTransform$factory() {
    return getPropertyCallableRef('textTransform', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textTransform_kqn3iu_k$();
    }, function (receiver, value) {
      return receiver.set_textTransform_36gikj_k$(value);
    });
  }
  function textTransform$factory_0() {
    return getPropertyCallableRef('textTransform', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textTransform_kqn3iu_k$();
    }, function (receiver, value) {
      return receiver.set_textTransform_36gikj_k$(value);
    });
  }
  function textOverflow$factory() {
    return getPropertyCallableRef('textOverflow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textOverflow_8v7btk_k$();
    }, function (receiver, value) {
      return receiver.set_textOverflow_3o6ktn_k$(value);
    });
  }
  function textOverflow$factory_0() {
    return getPropertyCallableRef('textOverflow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_textOverflow_8v7btk_k$();
    }, function (receiver, value) {
      return receiver.set_textOverflow_3o6ktn_k$(value);
    });
  }
  function unicodeBidi$factory() {
    return getPropertyCallableRef('unicodeBidi', 1, KMutableProperty1, function (receiver) {
      return receiver.get_unicodeBidi_cmx0ps_k$();
    }, function (receiver, value) {
      return receiver.set_unicodeBidi_xvmmrx_k$(value);
    });
  }
  function unicodeBidi$factory_0() {
    return getPropertyCallableRef('unicodeBidi', 1, KMutableProperty1, function (receiver) {
      return receiver.get_unicodeBidi_cmx0ps_k$();
    }, function (receiver, value) {
      return receiver.set_unicodeBidi_xvmmrx_k$(value);
    });
  }
  function verticalAlign$factory() {
    return getPropertyCallableRef('verticalAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_verticalAlign_k2exoa_k$();
    }, function (receiver, value) {
      return receiver.set_verticalAlign_cr927n_k$(value);
    });
  }
  function verticalAlign$factory_0() {
    return getPropertyCallableRef('verticalAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_verticalAlign_k2exoa_k$();
    }, function (receiver, value) {
      return receiver.set_verticalAlign_cr927n_k$(value);
    });
  }
  function whiteSpace$factory() {
    return getPropertyCallableRef('whiteSpace', 1, KMutableProperty1, function (receiver) {
      return receiver.get_whiteSpace_g2zb4q_k$();
    }, function (receiver, value) {
      return receiver.set_whiteSpace_koztq1_k$(value);
    });
  }
  function whiteSpace$factory_0() {
    return getPropertyCallableRef('whiteSpace', 1, KMutableProperty1, function (receiver) {
      return receiver.get_whiteSpace_g2zb4q_k$();
    }, function (receiver, value) {
      return receiver.set_whiteSpace_koztq1_k$(value);
    });
  }
  function wordSpacing$factory() {
    return getPropertyCallableRef('wordSpacing', 1, KMutableProperty1, function (receiver) {
      return receiver.get_wordSpacing_ak2jyo_k$();
    }, function (receiver, value) {
      return receiver.set_wordSpacing_k1kk1i_k$(value);
    });
  }
  function wordSpacing$factory_0() {
    return getPropertyCallableRef('wordSpacing', 1, KMutableProperty1, function (receiver) {
      return receiver.get_wordSpacing_ak2jyo_k$();
    }, function (receiver, value) {
      return receiver.set_wordSpacing_k1kk1i_k$(value);
    });
  }
  function fontFamily$factory() {
    return getPropertyCallableRef('fontFamily', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontFamily_ulphcs_k$();
    }, function (receiver, value) {
      return receiver.set_fontFamily_pi1455_k$(value);
    });
  }
  function fontFamily$factory_0() {
    return getPropertyCallableRef('fontFamily', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontFamily_ulphcs_k$();
    }, function (receiver, value) {
      return receiver.set_fontFamily_pi1455_k$(value);
    });
  }
  function fontSize$factory() {
    return getPropertyCallableRef('fontSize', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontSize_pr9n47_k$();
    }, function (receiver, value) {
      return receiver.set_fontSize_ozq5eh_k$(value);
    });
  }
  function fontSize$factory_0() {
    return getPropertyCallableRef('fontSize', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontSize_pr9n47_k$();
    }, function (receiver, value) {
      return receiver.set_fontSize_ozq5eh_k$(value);
    });
  }
  function fontStyle$factory() {
    return getPropertyCallableRef('fontStyle', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontStyle_h4vaiv_k$();
    }, function (receiver, value) {
      return receiver.set_fontStyle_bzp8ue_k$(value);
    });
  }
  function fontStyle$factory_0() {
    return getPropertyCallableRef('fontStyle', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontStyle_h4vaiv_k$();
    }, function (receiver, value) {
      return receiver.set_fontStyle_bzp8ue_k$(value);
    });
  }
  function fontWeight$factory() {
    return getPropertyCallableRef('fontWeight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontWeight_wbif2o_k$();
    }, function (receiver, value) {
      return receiver.set_fontWeight_3x4rur_k$(value);
    });
  }
  function fontWeight$factory_0() {
    return getPropertyCallableRef('fontWeight', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontWeight_wbif2o_k$();
    }, function (receiver, value) {
      return receiver.set_fontWeight_3x4rur_k$(value);
    });
  }
  function fontVariant$factory() {
    return getPropertyCallableRef('fontVariant', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontVariant_nwvpdf_k$();
    }, function (receiver, value) {
      return receiver.set_fontVariant_8rvq3q_k$(value);
    });
  }
  function fontVariant$factory_0() {
    return getPropertyCallableRef('fontVariant', 1, KMutableProperty1, function (receiver) {
      return receiver.get_fontVariant_nwvpdf_k$();
    }, function (receiver, value) {
      return receiver.set_fontVariant_8rvq3q_k$(value);
    });
  }
  function float$factory() {
    return getPropertyCallableRef('float', 1, KMutableProperty1, function (receiver) {
      return receiver.get_float_irfrjn_k$();
    }, function (receiver, value) {
      return receiver.set_float_j9ahnu_k$(value);
    });
  }
  function float$factory_0() {
    return getPropertyCallableRef('float', 1, KMutableProperty1, function (receiver) {
      return receiver.get_float_irfrjn_k$();
    }, function (receiver, value) {
      return receiver.set_float_j9ahnu_k$(value);
    });
  }
  function clear$factory() {
    return getPropertyCallableRef('clear', 1, KMutableProperty1, function (receiver) {
      return receiver.get_clear_ips6ck_k$();
    }, function (receiver, value) {
      return receiver.set_clear_28bgsx_k$(value);
    });
  }
  function clear$factory_0() {
    return getPropertyCallableRef('clear', 1, KMutableProperty1, function (receiver) {
      return receiver.get_clear_ips6ck_k$();
    }, function (receiver, value) {
      return receiver.set_clear_28bgsx_k$(value);
    });
  }
  function wordBreak$factory() {
    return getPropertyCallableRef('wordBreak', 1, KMutableProperty1, function (receiver) {
      return receiver.get_wordBreak_mshpbg_k$();
    }, function (receiver, value) {
      return receiver.set_wordBreak_iijn6h_k$(value);
    });
  }
  function wordBreak$factory_0() {
    return getPropertyCallableRef('wordBreak', 1, KMutableProperty1, function (receiver) {
      return receiver.get_wordBreak_mshpbg_k$();
    }, function (receiver, value) {
      return receiver.set_wordBreak_iijn6h_k$(value);
    });
  }
  function lineBreak$factory() {
    return getPropertyCallableRef('lineBreak', 1, KMutableProperty1, function (receiver) {
      return receiver.get_lineBreak_lmsita_k$();
    }, function (receiver, value) {
      return receiver.set_lineBreak_ckkrpt_k$(value);
    });
  }
  function lineBreak$factory_0() {
    return getPropertyCallableRef('lineBreak', 1, KMutableProperty1, function (receiver) {
      return receiver.get_lineBreak_lmsita_k$();
    }, function (receiver, value) {
      return receiver.set_lineBreak_ckkrpt_k$(value);
    });
  }
  function cursor$factory() {
    return getPropertyCallableRef('cursor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_cursor_c3jujj_k$();
    }, function (receiver, value) {
      return receiver.set_cursor_64jwj6_k$(value);
    });
  }
  function cursor$factory_0() {
    return getPropertyCallableRef('cursor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_cursor_c3jujj_k$();
    }, function (receiver, value) {
      return receiver.set_cursor_64jwj6_k$(value);
    });
  }
  function flexDirection$factory() {
    return getPropertyCallableRef('flexDirection', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexDirection_hcc6ub_k$();
    }, function (receiver, value) {
      return receiver.set_flexDirection_k0r79y_k$(value);
    });
  }
  function flexDirection$factory_0() {
    return getPropertyCallableRef('flexDirection', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexDirection_hcc6ub_k$();
    }, function (receiver, value) {
      return receiver.set_flexDirection_k0r79y_k$(value);
    });
  }
  function flexWrap$factory() {
    return getPropertyCallableRef('flexWrap', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexWrap_2yh4yc_k$();
    }, function (receiver, value) {
      return receiver.set_flexWrap_te3tvl_k$(value);
    });
  }
  function flexWrap$factory_0() {
    return getPropertyCallableRef('flexWrap', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexWrap_2yh4yc_k$();
    }, function (receiver, value) {
      return receiver.set_flexWrap_te3tvl_k$(value);
    });
  }
  function justifyItems$factory() {
    return getPropertyCallableRef('justifyItems', 1, KMutableProperty1, function (receiver) {
      return receiver.get_justifyItems_jcotd3_k$();
    }, function (receiver, value) {
      return receiver.set_justifyItems_5m2jf8_k$(value);
    });
  }
  function justifyItems$factory_0() {
    return getPropertyCallableRef('justifyItems', 1, KMutableProperty1, function (receiver) {
      return receiver.get_justifyItems_jcotd3_k$();
    }, function (receiver, value) {
      return receiver.set_justifyItems_5m2jf8_k$(value);
    });
  }
  function justifyContent$factory() {
    return getPropertyCallableRef('justifyContent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_justifyContent_6wctgu_k$();
    }, function (receiver, value) {
      return receiver.set_justifyContent_920yxn_k$(value);
    });
  }
  function justifyContent$factory_0() {
    return getPropertyCallableRef('justifyContent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_justifyContent_6wctgu_k$();
    }, function (receiver, value) {
      return receiver.set_justifyContent_920yxn_k$(value);
    });
  }
  function alignItems$factory() {
    return getPropertyCallableRef('alignItems', 1, KMutableProperty1, function (receiver) {
      return receiver.get_alignItems_x9tow4_k$();
    }, function (receiver, value) {
      return receiver.set_alignItems_2x4ueh_k$(value);
    });
  }
  function alignItems$factory_0() {
    return getPropertyCallableRef('alignItems', 1, KMutableProperty1, function (receiver) {
      return receiver.get_alignItems_x9tow4_k$();
    }, function (receiver, value) {
      return receiver.set_alignItems_2x4ueh_k$(value);
    });
  }
  function alignContent$factory() {
    return getPropertyCallableRef('alignContent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_alignContent_7wikg3_k$();
    }, function (receiver, value) {
      return receiver.set_alignContent_faycwg_k$(value);
    });
  }
  function alignContent$factory_0() {
    return getPropertyCallableRef('alignContent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_alignContent_7wikg3_k$();
    }, function (receiver, value) {
      return receiver.set_alignContent_faycwg_k$(value);
    });
  }
  function order$factory() {
    return getPropertyCallableRef('order', 1, KMutableProperty1, function (receiver) {
      return receiver.get_order_iwhiqt_k$();
    }, function (receiver, value) {
      return receiver.set_order_ox9g8a_k$(value);
    });
  }
  function order$factory_0() {
    return getPropertyCallableRef('order', 1, KMutableProperty1, function (receiver) {
      return receiver.get_order_iwhiqt_k$();
    }, function (receiver, value) {
      return receiver.set_order_ox9g8a_k$(value);
    });
  }
  function flexGrow$factory() {
    return getPropertyCallableRef('flexGrow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexGrow_2yrcej_k$();
    }, function (receiver, value) {
      return receiver.set_flexGrow_svs8mq_k$(value);
    });
  }
  function flexGrow$factory_0() {
    return getPropertyCallableRef('flexGrow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexGrow_2yrcej_k$();
    }, function (receiver, value) {
      return receiver.set_flexGrow_svs8mq_k$(value);
    });
  }
  function flexShrink$factory() {
    return getPropertyCallableRef('flexShrink', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexShrink_34coph_k$();
    }, function (receiver, value) {
      return receiver.set_flexShrink_aiq37o_k$(value);
    });
  }
  function flexShrink$factory_0() {
    return getPropertyCallableRef('flexShrink', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexShrink_34coph_k$();
    }, function (receiver, value) {
      return receiver.set_flexShrink_aiq37o_k$(value);
    });
  }
  function flexBasis$factory() {
    return getPropertyCallableRef('flexBasis', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexBasis_kzhdk4_k$();
    }, function (receiver, value) {
      return receiver.set_flexBasis_l67ry_k$(value);
    });
  }
  function flexBasis$factory_0() {
    return getPropertyCallableRef('flexBasis', 1, KMutableProperty1, function (receiver) {
      return receiver.get_flexBasis_kzhdk4_k$();
    }, function (receiver, value) {
      return receiver.set_flexBasis_l67ry_k$(value);
    });
  }
  function alignSelf$factory() {
    return getPropertyCallableRef('alignSelf', 1, KMutableProperty1, function (receiver) {
      return receiver.get_alignSelf_xai5dk_k$();
    }, function (receiver, value) {
      return receiver.set_alignSelf_g8okn9_k$(value);
    });
  }
  function alignSelf$factory_0() {
    return getPropertyCallableRef('alignSelf', 1, KMutableProperty1, function (receiver) {
      return receiver.get_alignSelf_xai5dk_k$();
    }, function (receiver, value) {
      return receiver.set_alignSelf_g8okn9_k$(value);
    });
  }
  function justifySelf$factory() {
    return getPropertyCallableRef('justifySelf', 1, KMutableProperty1, function (receiver) {
      return receiver.get_justifySelf_uen4od_k$();
    }, function (receiver, value) {
      return receiver.set_justifySelf_nht07u_k$(value);
    });
  }
  function justifySelf$factory_0() {
    return getPropertyCallableRef('justifySelf', 1, KMutableProperty1, function (receiver) {
      return receiver.get_justifySelf_uen4od_k$();
    }, function (receiver, value) {
      return receiver.set_justifySelf_nht07u_k$(value);
    });
  }
  function gridAutoColumns$factory() {
    return getPropertyCallableRef('gridAutoColumns', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridAutoColumns_t9qrz3_k$();
    }, function (receiver, value) {
      return receiver.set_gridAutoColumns_byrs18_k$(value);
    });
  }
  function gridAutoColumns$factory_0() {
    return getPropertyCallableRef('gridAutoColumns', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridAutoColumns_t9qrz3_k$();
    }, function (receiver, value) {
      return receiver.set_gridAutoColumns_byrs18_k$(value);
    });
  }
  function gridAutoRows$factory() {
    return getPropertyCallableRef('gridAutoRows', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridAutoRows_58a0bt_k$();
    }, function (receiver, value) {
      return receiver.set_gridAutoRows_d10kgc_k$(value);
    });
  }
  function gridAutoRows$factory_0() {
    return getPropertyCallableRef('gridAutoRows', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridAutoRows_58a0bt_k$();
    }, function (receiver, value) {
      return receiver.set_gridAutoRows_d10kgc_k$(value);
    });
  }
  function gridAutoFlow$factory() {
    return getPropertyCallableRef('gridAutoFlow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridAutoFlow_58hql0_k$();
    }, function (receiver, value) {
      return receiver.set_gridAutoFlow_6hmum7_k$(value);
    });
  }
  function gridAutoFlow$factory_0() {
    return getPropertyCallableRef('gridAutoFlow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridAutoFlow_58hql0_k$();
    }, function (receiver, value) {
      return receiver.set_gridAutoFlow_6hmum7_k$(value);
    });
  }
  function gridTemplateColumns$factory() {
    return getPropertyCallableRef('gridTemplateColumns', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridTemplateColumns_iity8c_k$();
    }, function (receiver, value) {
      return receiver.set_gridTemplateColumns_1zexbd_k$(value);
    });
  }
  function gridTemplateColumns$factory_0() {
    return getPropertyCallableRef('gridTemplateColumns', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridTemplateColumns_iity8c_k$();
    }, function (receiver, value) {
      return receiver.set_gridTemplateColumns_1zexbd_k$(value);
    });
  }
  function gridTemplateRows$factory() {
    return getPropertyCallableRef('gridTemplateRows', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridTemplateRows_iytxsu_k$();
    }, function (receiver, value) {
      return receiver.set_gridTemplateRows_l4bmtd_k$(value);
    });
  }
  function gridTemplateRows$factory_0() {
    return getPropertyCallableRef('gridTemplateRows', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridTemplateRows_iytxsu_k$();
    }, function (receiver, value) {
      return receiver.set_gridTemplateRows_l4bmtd_k$(value);
    });
  }
  function gridTemplateAreas$factory() {
    return getPropertyCallableRef('gridTemplateAreas', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridTemplateAreas_k06mub_k$();
    }, function (receiver, value) {
      return receiver.set_gridTemplateAreas_pc9px2_k$(value);
    });
  }
  function gridTemplateAreas$factory_0() {
    return getPropertyCallableRef('gridTemplateAreas', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridTemplateAreas_k06mub_k$();
    }, function (receiver, value) {
      return receiver.set_gridTemplateAreas_pc9px2_k$(value);
    });
  }
  function gridColumnGap$factory() {
    return getPropertyCallableRef('gridColumnGap', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridColumnGap_bswilr_k$();
    }, function (receiver, value) {
      return receiver.set_gridColumnGap_lgxj26_k$(value);
    });
  }
  function gridColumnGap$factory_0() {
    return getPropertyCallableRef('gridColumnGap', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridColumnGap_bswilr_k$();
    }, function (receiver, value) {
      return receiver.set_gridColumnGap_lgxj26_k$(value);
    });
  }
  function gridRowGap$factory() {
    return getPropertyCallableRef('gridRowGap', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridRowGap_970ved_k$();
    }, function (receiver, value) {
      return receiver.set_gridRowGap_s61lus_k$(value);
    });
  }
  function gridRowGap$factory_0() {
    return getPropertyCallableRef('gridRowGap', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridRowGap_970ved_k$();
    }, function (receiver, value) {
      return receiver.set_gridRowGap_s61lus_k$(value);
    });
  }
  function gridColumnStart$factory() {
    return getPropertyCallableRef('gridColumnStart', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridColumnStart_mkxl0d_k$();
    }, function (receiver, value) {
      return receiver.set_gridColumnStart_na6msy_k$(value);
    });
  }
  function gridColumnStart$factory_0() {
    return getPropertyCallableRef('gridColumnStart', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridColumnStart_mkxl0d_k$();
    }, function (receiver, value) {
      return receiver.set_gridColumnStart_na6msy_k$(value);
    });
  }
  function gridRowStart$factory() {
    return getPropertyCallableRef('gridRowStart', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridRowStart_shdxux_k$();
    }, function (receiver, value) {
      return receiver.set_gridRowStart_hb6r74_k$(value);
    });
  }
  function gridRowStart$factory_0() {
    return getPropertyCallableRef('gridRowStart', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridRowStart_shdxux_k$();
    }, function (receiver, value) {
      return receiver.set_gridRowStart_hb6r74_k$(value);
    });
  }
  function gridColumnEnd$factory() {
    return getPropertyCallableRef('gridColumnEnd', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridColumnEnd_bswjsa_k$();
    }, function (receiver, value) {
      return receiver.set_gridColumnEnd_5jev79_k$(value);
    });
  }
  function gridColumnEnd$factory_0() {
    return getPropertyCallableRef('gridColumnEnd', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridColumnEnd_bswjsa_k$();
    }, function (receiver, value) {
      return receiver.set_gridColumnEnd_5jev79_k$(value);
    });
  }
  function gridRowEnd$factory() {
    return getPropertyCallableRef('gridRowEnd', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridRowEnd_970wkw_k$();
    }, function (receiver, value) {
      return receiver.set_gridRowEnd_rcwd03_k$(value);
    });
  }
  function gridRowEnd$factory_0() {
    return getPropertyCallableRef('gridRowEnd', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridRowEnd_970wkw_k$();
    }, function (receiver, value) {
      return receiver.set_gridRowEnd_rcwd03_k$(value);
    });
  }
  function gridArea$factory() {
    return getPropertyCallableRef('gridArea', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridArea_qjwif8_k$();
    }, function (receiver, value) {
      return receiver.set_gridArea_cwqvqf_k$(value);
    });
  }
  function gridArea$factory_0() {
    return getPropertyCallableRef('gridArea', 1, KMutableProperty1, function (receiver) {
      return receiver.get_gridArea_qjwif8_k$();
    }, function (receiver, value) {
      return receiver.set_gridArea_cwqvqf_k$(value);
    });
  }
  function outline$factory() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return receiver.get_outline_h12qhz_k$();
    }, function (receiver, value) {
      return receiver.set_outline_tccze9_k$(value);
    });
  }
  function outline$factory_0() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return receiver.get_outline_h12qhz_k$();
    }, function (receiver, value) {
      return receiver.set_outline_tccze9_k$(value);
    });
  }
  function boxShadow$factory() {
    return getPropertyCallableRef('boxShadow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_boxShadow_ksx25e_k$();
    }, function (receiver, value) {
      return receiver.set_boxShadow_wldfgd_k$(value);
    });
  }
  function boxShadow$factory_0() {
    return getPropertyCallableRef('boxShadow', 1, KMutableProperty1, function (receiver) {
      return receiver.get_boxShadow_ksx25e_k$();
    }, function (receiver, value) {
      return receiver.set_boxShadow_wldfgd_k$(value);
    });
  }
  function boxShadowList$factory() {
    return getPropertyCallableRef('boxShadowList', 1, KMutableProperty1, function (receiver) {
      return receiver.get_boxShadowList_p96gps_k$();
    }, function (receiver, value) {
      return receiver.set_boxShadowList_ck6kdn_k$(value);
    });
  }
  function boxShadowList$factory_0() {
    return getPropertyCallableRef('boxShadowList', 1, KMutableProperty1, function (receiver) {
      return receiver.get_boxShadowList_p96gps_k$();
    }, function (receiver, value) {
      return receiver.set_boxShadowList_ck6kdn_k$(value);
    });
  }
  function transition$factory() {
    return getPropertyCallableRef('transition', 1, KMutableProperty1, function (receiver) {
      return receiver.get_transition_mcca1q_k$();
    }, function (receiver, value) {
      return receiver.set_transition_wr68gv_k$(value);
    });
  }
  function transition$factory_0() {
    return getPropertyCallableRef('transition', 1, KMutableProperty1, function (receiver) {
      return receiver.get_transition_mcca1q_k$();
    }, function (receiver, value) {
      return receiver.set_transition_wr68gv_k$(value);
    });
  }
  function transitionList$factory() {
    return getPropertyCallableRef('transitionList', 1, KMutableProperty1, function (receiver) {
      return receiver.get_transitionList_7wb6k_k$();
    }, function (receiver, value) {
      return receiver.set_transitionList_5v6vvd_k$(value);
    });
  }
  function transitionList$factory_0() {
    return getPropertyCallableRef('transitionList', 1, KMutableProperty1, function (receiver) {
      return receiver.get_transitionList_7wb6k_k$();
    }, function (receiver, value) {
      return receiver.set_transitionList_5v6vvd_k$(value);
    });
  }
  function borderRadius$factory() {
    return getPropertyCallableRef('borderRadius', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderRadius_quu3af_k$();
    }, function (receiver, value) {
      return receiver.set_borderRadius_tlfw5x_k$(value);
    });
  }
  function borderRadius$factory_0() {
    return getPropertyCallableRef('borderRadius', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderRadius_quu3af_k$();
    }, function (receiver, value) {
      return receiver.set_borderRadius_tlfw5x_k$(value);
    });
  }
  function borderRadiusList$factory() {
    return getPropertyCallableRef('borderRadiusList', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderRadiusList_hu8axx_k$();
    }, function (receiver, value) {
      return receiver.set_borderRadiusList_jumjse_k$(value);
    });
  }
  function borderRadiusList$factory_0() {
    return getPropertyCallableRef('borderRadiusList', 1, KMutableProperty1, function (receiver) {
      return receiver.get_borderRadiusList_hu8axx_k$();
    }, function (receiver, value) {
      return receiver.set_borderRadiusList_jumjse_k$(value);
    });
  }
  function listStyle$factory() {
    return getPropertyCallableRef('listStyle', 1, KMutableProperty1, function (receiver) {
      return receiver.get_listStyle_bwumly_k$();
    }, function (receiver, value) {
      return receiver.set_listStyle_x4n8lv_k$(value);
    });
  }
  function listStyle$factory_0() {
    return getPropertyCallableRef('listStyle', 1, KMutableProperty1, function (receiver) {
      return receiver.get_listStyle_bwumly_k$();
    }, function (receiver, value) {
      return receiver.set_listStyle_x4n8lv_k$(value);
    });
  }
  function _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction) {
    return refreshFunction;
  }
  function _get_refreshFunction__h8es9q_2($this) {
    return $this;
  }
  function WidgetRefreshDelegate__getValue_impl_lmjmy2($this, thisRef, property) {
    var value = thisRef.widgetPropertyValues_1[property.callableName];
    var tmp;
    if (value != null) {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = value;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = null;
    }
    return tmp;
  }
  function WidgetRefreshDelegate__setValue_impl_8tnbha($this, thisRef, property, value) {
    var oldValue = thisRef.widgetPropertyValues_1[property.callableName];
    if (value == null) {
      delete_0(thisRef.widgetPropertyValues_1, property.callableName);
    } else {
      thisRef.widgetPropertyValues_1[property.callableName] = value;
    }
    if (oldValue != value) {
      _get_refreshFunction__h8es9q_2($this)(value);
    }
  }
  function WidgetRefreshDelegate__toString_impl_in8x6j($this) {
    return 'WidgetRefreshDelegate(refreshFunction=' + toString_0($this) + ')';
  }
  function WidgetRefreshDelegate__hashCode_impl_ump7zq($this) {
    return hashCode($this);
  }
  function WidgetRefreshDelegate__equals_impl_lglo4u($this, other) {
    if (!(other instanceof WidgetRefreshDelegate))
      return false;
    var tmp0_other_with_cast = other instanceof WidgetRefreshDelegate ? other.refreshFunction_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function WidgetRefreshDelegate(refreshFunction) {
    this.refreshFunction_1 = refreshFunction;
  }
  protoOf(WidgetRefreshDelegate).toString = function () {
    return WidgetRefreshDelegate__toString_impl_in8x6j(this.refreshFunction_1);
  };
  protoOf(WidgetRefreshDelegate).hashCode = function () {
    return WidgetRefreshDelegate__hashCode_impl_ump7zq(this.refreshFunction_1);
  };
  protoOf(WidgetRefreshDelegate).equals = function (other) {
    return WidgetRefreshDelegate__equals_impl_lglo4u(this.refreshFunction_1, other);
  };
  function _get_initialValue__5p7eea_0($this) {
    return $this.initialValue_1;
  }
  function _get_refreshFunction__h8es9q_3($this) {
    return $this.refreshFunction_1;
  }
  function _set_counter__gelo1j($this, _set____db54di) {
    $this.counter_1 = _set____db54di;
  }
  function _get_counter__t0a3kl($this) {
    return $this.counter_1;
  }
  function _set_snAttrsCache__oaji0s($this, _set____db54di) {
    $this.snAttrsCache_1 = _set____db54di;
  }
  function _get_snAttrsCache__v6tte8($this) {
    return $this.snAttrsCache_1;
  }
  function _set_snClassCache__jdnviq($this, _set____db54di) {
    $this.snClassCache_1 = _set____db54di;
  }
  function _get_snClassCache__yxem2u($this) {
    return $this.snClassCache_1;
  }
  function _set_snOnCache__12uhqb($this, _set____db54di) {
    $this.snOnCache_1 = _set____db54di;
  }
  function _get_snOnCache__s7zyo9($this) {
    return $this.snOnCache_1;
  }
  function _set_snHooksCache__6oy1di($this, _set____db54di) {
    $this.snHooksCache_1 = _set____db54di;
  }
  function _get_snHooksCache__8usp6m($this) {
    return $this.snHooksCache_1;
  }
  function _set_beforeDisposeHooks__az1vmh($this, _set____db54di) {
    $this.beforeDisposeHooks_1 = _set____db54di;
  }
  function _get_beforeDisposeHooks__q46v8b($this) {
    return $this.beforeDisposeHooks_1;
  }
  function getSnOpt($this) {
    // Inline function 'io.kvision.utils.snOpt' call
    var block = Widget$getSnOpt$lambda($this);
    // Inline function 'io.kvision.utils.vNodeData' call
    var tmp$ret$0 = {};
    return apply$ref_0(tmp$ret$0)(block);
  }
  function getSnHooksInternal($this) {
    var tmp0_elvis_lhs = $this.snHooksCache_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.getSnHooks_hgackh_k$();
      // Inline function 'io.kvision.core.Widget.getSnHooksInternal.<anonymous>' call
      $this.snHooksCache_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function RefreshDelegateProvider_0($outer, initialValue, refreshFunction) {
    this.$this_1 = $outer;
    this.initialValue_1 = initialValue;
    this.refreshFunction_1 = refreshFunction;
  }
  protoOf(RefreshDelegateProvider_0).provideDelegate_z62loi_k$ = function (thisRef, prop) {
    if (!(this.initialValue_1 == null)) {
      this.$this_1.widgetPropertyValues_1[prop.callableName] = this.initialValue_1;
    }
    return _WidgetRefreshDelegate___init__impl__h6t5er(this.refreshFunction_1);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.KV_JQUERY_EVENT_PREFIX_1 = 'KVJQUERYEVENT##';
    this.counter_1 = 0;
  }
  protoOf(Companion_1).get_KV_JQUERY_EVENT_PREFIX_ph005v_k$ = function () {
    return this.KV_JQUERY_EVENT_PREFIX_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Widget$title$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Widget$id$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Widget$role$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Widget$tabindex$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Widget$draggable$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Widget$buildAttributeSet$ref($boundThis) {
    var l = function (p0) {
      $boundThis.buildAttributeSet_etcqhg_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'buildAttributeSet';
    return l;
  }
  function Widget$snAttrsCache$lambda(this$0) {
    return function () {
      return buildAttributeSet(Widget$buildAttributeSet$ref(this$0));
    };
  }
  function Widget$snAttrsCache$lambda_0(this$0) {
    return function () {
      return !(this$0.lastLanguage_1 == null) && !(this$0.lastLanguage_1 === I18n_getInstance().get_language_cjhhk1_k$());
    };
  }
  function Widget$buildClassSet$ref($boundThis) {
    var l = function (p0) {
      $boundThis.buildClassSet_myme1g_k$(p0);
      return Unit_getInstance();
    };
    l.callableName = 'buildClassSet';
    return l;
  }
  function Widget$snClassCache$lambda(this$0) {
    return function () {
      return buildClassSet(Widget$buildClassSet$ref(this$0));
    };
  }
  function Widget$renderVNode$lambda(this$0) {
    return function ($this$snOpt) {
      $this$snOpt.key = this$0.vnkey_1;
      // Inline function 'kotlin.collections.map' call
      var this_0 = ensureNotNull(this$0.surroundingClasses_1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.renderVNode.<anonymous>.<anonymous>' call
        var tmp$ret$0 = to(item, true);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      // Inline function 'io.kvision.utils.snClasses' call
      // Inline function 'io.kvision.utils.obj' call
      // Inline function 'kotlin.apply' call
      var this_1 = new Object();
      // Inline function 'io.kvision.utils.snClasses.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'io.kvision.utils.snClasses.<anonymous>.<anonymous>' call
        var key = element.component1_7eebsc_k$();
        var value = element.component2_7eebsb_k$();
        this_1[key] = value;
      }
      $this$snOpt.class = this_1;
      return Unit_getInstance();
    };
  }
  function apply$ref($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function Widget$getSnOpt$lambda(this$0) {
    return function ($this$snOpt) {
      $this$snOpt.key = this$0.vnkey_1;
      $this$snOpt.attrs = this$0.snAttrsCache_1.get_value_j01efc_k$();
      // Inline function 'kotlin.js.unsafeCast' call
      $this$snOpt.style = this$0.getSnStyle_ha57og_k$();
      $this$snOpt.class = this$0.snClassCache_1.get_value_j01efc_k$();
      $this$snOpt.on = this$0.getSnOn_18qods_k$();
      $this$snOpt.hook = getSnHooksInternal(this$0);
      return Unit_getInstance();
    };
  }
  function apply$ref_0($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function Widget$getSnOptSimple$lambda(this$0) {
    return function ($this$snOpt) {
      var tmp0_safe_receiver = this$0.vnkey_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.Widget.getSnOptSimple.<anonymous>.<anonymous>' call
        tmp = 'kv_s_' + tmp0_safe_receiver;
      }
      var tmp1_elvis_lhs = tmp;
      $this$snOpt.key = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
      return Unit_getInstance();
    };
  }
  function apply$ref_1($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function Widget$getSnOptContents$lambda(this$0) {
    return function ($this$snOpt) {
      // Inline function 'io.kvision.utils.obj' call
      // Inline function 'kotlin.apply' call
      var this_0 = new Object();
      // Inline function 'io.kvision.core.Widget.getSnOptContents.<anonymous>.<anonymous>' call
      this_0.display = 'contents';
      // Inline function 'kotlin.js.unsafeCast' call
      $this$snOpt.style = this_0;
      var tmp0_safe_receiver = this$0.vnkey_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.core.Widget.getSnOptContents.<anonymous>.<anonymous>' call
        tmp = 'kv_s_' + tmp0_safe_receiver;
      }
      var tmp1_elvis_lhs = tmp;
      $this$snOpt.key = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
      return Unit_getInstance();
    };
  }
  function apply$ref_2($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function Widget$getSnHooks$lambda(this$0) {
    return function (_unused_var__etf5q3, v) {
      this$0.vnode_1 = v;
      this$0.afterCreate_ur4p75_k$(v);
      var tmp0_safe_receiver = this$0.afterCreateHooks_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'io.kvision.core.Widget.getSnHooks.<anonymous>.<anonymous>.<anonymous>' call
          element(v);
        }
        tmp = Unit_getInstance();
      }
      return tmp;
    };
  }
  function Widget$getSnHooks$lambda_0(this$0) {
    return function (v) {
      this$0.vnode_1 = v;
      this$0.afterInsertInternal_48dr5u_k$(v);
      this$0.afterInsert_6ut630_k$(v);
      this$0.bindAllJQueryListeners_3ovqr7_k$();
      var tmp0_safe_receiver = this$0.afterInsertHooks_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'io.kvision.core.Widget.getSnHooks.<anonymous>.<anonymous>.<anonymous>' call
          element(v);
        }
        tmp = Unit_getInstance();
      }
      return tmp;
    };
  }
  function Widget$getSnHooks$lambda_1(this$0) {
    return function (_unused_var__etf5q3, v) {
      this$0.vnode_1 = v;
      this$0.afterPatch_k0achv_k$(v);
      return Unit_getInstance();
    };
  }
  function Widget$getSnHooks$lambda_2(this$0) {
    return function (it) {
      this$0.afterDestroyInternal_ypmf34_k$();
      this$0.afterDestroy_geowxa_k$();
      var tmp0_safe_receiver = this$0.afterDestroyHooks_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'io.kvision.core.Widget.getSnHooks.<anonymous>.<anonymous>.<anonymous>' call
          element();
        }
      }
      this$0.vnode_1 = null;
      return this$0.vnode_1;
    };
  }
  function apply$ref_3($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function apply$ref_4($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function Widget$setDragDropData$lambda$lambda($format, $data) {
    return function (e) {
      var tmp0_safe_receiver = e.dataTransfer;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.setData($format, $data);
      }
      return Unit_getInstance();
    };
  }
  function Widget$setDragDropData$lambda($format, $data) {
    return function ($this$setEventListener) {
      $this$setEventListener.dragstart = Widget$setDragDropData$lambda$lambda($format, $data);
      return Unit_getInstance();
    };
  }
  function Widget$clearDragDropData$lambda($this$setEventListener) {
    $this$setEventListener.dragstart = Widget$clearDragDropData$lambda$lambda;
    return Unit_getInstance();
  }
  function Widget$clearDragDropData$lambda$lambda(it) {
    return Unit_getInstance();
  }
  function Widget$setDropTargetData$lambda($callback, $format) {
    return function (e) {
      var tmp0_safe_receiver = e.dataTransfer;
      $callback(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getData($format));
      return Unit_getInstance();
    };
  }
  function Widget$setDropTarget$lambda$lambda($formats) {
    return function (e) {
      var tmp0_safe_receiver = e.dataTransfer;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.types;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toSet(tmp1_safe_receiver);
      var tmp;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.collections.setOf' call
        tmp = emptySet();
      } else {
        tmp = tmp2_elvis_lhs;
      }
      var types = tmp;
      var tmp_0;
      var tmp_1;
      if ($formats == null) {
        tmp_1 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_1 = !intersect($formats, types).isEmpty_y1axqb_k$();
      }
      if (tmp_1) {
        e.preventDefault();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Widget$setDropTarget$lambda$lambda_0($callback) {
    return function (e) {
      e.preventDefault();
      e.stopPropagation();
      $callback(e);
      return Unit_getInstance();
    };
  }
  function Widget$setDropTarget$lambda($formats, $callback) {
    return function ($this$setEventListener) {
      $this$setEventListener.dragover = Widget$setDropTarget$lambda$lambda($formats);
      $this$setEventListener.drop = Widget$setDropTarget$lambda$lambda_0($callback);
      return Unit_getInstance();
    };
  }
  function Widget$createLabelWithIcon$lambda($iconClasses) {
    return function ($this$snOpt) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $iconClasses;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.createLabelWithIcon.<anonymous>.<anonymous>' call
        var tmp$ret$0 = to(item, true);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      // Inline function 'io.kvision.utils.snClasses' call
      // Inline function 'io.kvision.utils.obj' call
      // Inline function 'kotlin.apply' call
      var this_1 = new Object();
      // Inline function 'io.kvision.utils.snClasses.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'io.kvision.utils.snClasses.<anonymous>.<anonymous>' call
        var key = element.component1_7eebsc_k$();
        var value = element.component2_7eebsb_k$();
        this_1[key] = value;
      }
      $this$snOpt.class = this_1;
      return Unit_getInstance();
    };
  }
  function apply$ref_5($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function Widget$createLabelWithIcon$lambda_0($image) {
    return function ($this$snOpt) {
      // Inline function 'io.kvision.utils.snAttrs' call
      var pairs = mapOf([to('src', $image), to('alt', '')]);
      // Inline function 'io.kvision.utils.obj' call
      // Inline function 'kotlin.apply' call
      var this_0 = new Object();
      // Inline function 'io.kvision.utils.snAttrs.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = pairs.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.utils.snAttrs.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = element.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = element.get_value_j01efc_k$();
        this_0[key] = value;
      }
      $this$snOpt.attrs = this_0;
      return Unit_getInstance();
    };
  }
  function apply$ref_6($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function Widget$refreshOnUpdate$lambda(this$0) {
    return function (it) {
      this$0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Widget$refreshOnUpdate$lambda_0(this$0) {
    return function (it) {
      this$0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Widget(className, init) {
    Companion_getInstance_2();
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    StyledComponent.call(this);
    this.className_1 = className;
    this.widgetPropertyValues_1 = {};
    this.classes_1 = null;
    this.surroundingClasses_1 = null;
    this.attributes_1 = null;
    this.internalListenersMap_1 = null;
    this.listenersMap_1 = null;
    this.listenerCounter_1 = 0;
    this.jqueryListenersMap_1 = null;
    this.parent_1 = null;
    this.visible_1 = true;
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = Widget$title$delegate$lambda(this);
    tmp.title$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction);
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = Widget$id$delegate$lambda(this);
    tmp_0.id$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_0);
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = Widget$role$delegate$lambda(this);
    tmp_1.role$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_1);
    var tmp_2 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_2 = Widget$tabindex$delegate$lambda(this);
    tmp_2.tabindex$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_2);
    var tmp_3 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_3 = Widget$draggable$delegate$lambda(this);
    tmp_3.draggable$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_3);
    this.tooltipOptions_1 = null;
    this.tooltipHooksActive_1 = false;
    this.popoverOptions_1 = null;
    this.popoverHooksActive_1 = false;
    this.kvscope_1 = null;
    this.eventTarget_1 = null;
    this.vnkey_1 = undefined;
    this.vnode_1 = null;
    var tmp_4 = this;
    var tmp_5 = new LazyCache(Widget$snAttrsCache$lambda(this));
    tmp_4.snAttrsCache_1 = tmp_5.clearOn_v5z2ar_k$(Widget$snAttrsCache$lambda_0(this));
    var tmp_6 = this;
    tmp_6.snClassCache_1 = new LazyCache(Widget$snClassCache$lambda(this));
    this.snOnCache_1 = null;
    this.snHooksCache_1 = null;
    this.lastLanguage_1 = null;
    this.afterCreateHooks_1 = null;
    this.afterInsertHooks_1 = null;
    this.afterDestroyHooks_1 = null;
    this.beforeDisposeHooks_1 = null;
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(Widget).get_className_vznk6p_k$ = function () {
    return this.className_1;
  };
  protoOf(Widget).get_widgetPropertyValues_giqduh_k$ = function () {
    return this.widgetPropertyValues_1;
  };
  protoOf(Widget).set_classes_4ify1o_k$ = function (_set____db54di) {
    this.classes_1 = _set____db54di;
  };
  protoOf(Widget).get_classes_n04w8e_k$ = function () {
    return this.classes_1;
  };
  protoOf(Widget).set_surroundingClasses_svvij2_k$ = function (_set____db54di) {
    this.surroundingClasses_1 = _set____db54di;
  };
  protoOf(Widget).get_surroundingClasses_cc08g0_k$ = function () {
    return this.surroundingClasses_1;
  };
  protoOf(Widget).set_attributes_7jhiy8_k$ = function (_set____db54di) {
    this.attributes_1 = _set____db54di;
  };
  protoOf(Widget).get_attributes_htpimj_k$ = function () {
    return this.attributes_1;
  };
  protoOf(Widget).set_internalListenersMap_68qdfn_k$ = function (_set____db54di) {
    this.internalListenersMap_1 = _set____db54di;
  };
  protoOf(Widget).get_internalListenersMap_kxob3c_k$ = function () {
    return this.internalListenersMap_1;
  };
  protoOf(Widget).set_listenersMap_ckzlcq_k$ = function (_set____db54di) {
    this.listenersMap_1 = _set____db54di;
  };
  protoOf(Widget).get_listenersMap_o5l6kb_k$ = function () {
    return this.listenersMap_1;
  };
  protoOf(Widget).set_listenerCounter_rukxm0_k$ = function (_set____db54di) {
    this.listenerCounter_1 = _set____db54di;
  };
  protoOf(Widget).get_listenerCounter_dm1dws_k$ = function () {
    return this.listenerCounter_1;
  };
  protoOf(Widget).set_jqueryListenersMap_z8yzgv_k$ = function (_set____db54di) {
    this.jqueryListenersMap_1 = _set____db54di;
  };
  protoOf(Widget).get_jqueryListenersMap_5s45cs_k$ = function () {
    return this.jqueryListenersMap_1;
  };
  protoOf(Widget).set_parent_58bm75_k$ = function (_set____db54di) {
    this.parent_1 = _set____db54di;
  };
  protoOf(Widget).get_parent_hy4reb_k$ = function () {
    return this.parent_1;
  };
  protoOf(Widget).set_visible_w9mvj4_k$ = function (value) {
    var oldField = this.visible_1;
    this.visible_1 = value;
    if (!(oldField === this.visible_1)) {
      this.refresh_6a3uvf_k$();
    }
  };
  protoOf(Widget).get_visible_8zfvk9_k$ = function () {
    return this.visible_1;
  };
  protoOf(Widget).set_title_ceyuu4_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.title$delegate_1, this, title$factory(), _set____db54di);
  };
  protoOf(Widget).get_title_iz32un_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.title$delegate_1, this, title$factory_0());
  };
  protoOf(Widget).set_id_wyyipr_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.id$delegate_1, this, id$factory(), _set____db54di);
  };
  protoOf(Widget).get_id_kntnx8_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.id$delegate_1, this, id$factory_0());
  };
  protoOf(Widget).set_role_ghksys_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.role$delegate_1, this, role$factory(), _set____db54di);
  };
  protoOf(Widget).get_role_wotsxr_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.role$delegate_1, this, role$factory_0());
  };
  protoOf(Widget).set_tabindex_4zmmtb_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.tabindex$delegate_1, this, tabindex$factory(), _set____db54di);
  };
  protoOf(Widget).get_tabindex_odktuu_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.tabindex$delegate_1, this, tabindex$factory_0());
  };
  protoOf(Widget).set_draggable_fj5qmo_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.draggable$delegate_1, this, draggable$factory(), _set____db54di);
  };
  protoOf(Widget).get_draggable_3h8q90_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.draggable$delegate_1, this, draggable$factory_0());
  };
  protoOf(Widget).set_tooltipOptions_m2j12w_k$ = function (_set____db54di) {
    this.tooltipOptions_1 = _set____db54di;
  };
  protoOf(Widget).get_tooltipOptions_upbtwk_k$ = function () {
    return this.tooltipOptions_1;
  };
  protoOf(Widget).set_tooltipHooksActive_4sbdhh_k$ = function (_set____db54di) {
    this.tooltipHooksActive_1 = _set____db54di;
  };
  protoOf(Widget).get_tooltipHooksActive_s2u8v0_k$ = function () {
    return this.tooltipHooksActive_1;
  };
  protoOf(Widget).set_popoverOptions_smwxd2_k$ = function (_set____db54di) {
    this.popoverOptions_1 = _set____db54di;
  };
  protoOf(Widget).get_popoverOptions_5s2b0i_k$ = function () {
    return this.popoverOptions_1;
  };
  protoOf(Widget).set_popoverHooksActive_sfavyx_k$ = function (_set____db54di) {
    this.popoverHooksActive_1 = _set____db54di;
  };
  protoOf(Widget).get_popoverHooksActive_paawsa_k$ = function () {
    return this.popoverHooksActive_1;
  };
  protoOf(Widget).set_kvscope_ndkzxg_k$ = function (_set____db54di) {
    this.kvscope_1 = _set____db54di;
  };
  protoOf(Widget).get_kvscope_497m00_k$ = function () {
    return this.kvscope_1;
  };
  protoOf(Widget).set_eventTarget_i37bvc_k$ = function (_set____db54di) {
    this.eventTarget_1 = _set____db54di;
  };
  protoOf(Widget).get_eventTarget_ful74y_k$ = function () {
    return this.eventTarget_1;
  };
  protoOf(Widget).set_vnkey_admsdv_k$ = function (_set____db54di) {
    this.vnkey_1 = _set____db54di;
  };
  protoOf(Widget).get_vnkey_j09o5a_k$ = function () {
    return this.vnkey_1;
  };
  protoOf(Widget).set_vnode_p3a487_k$ = function (_set____db54di) {
    this.vnode_1 = _set____db54di;
  };
  protoOf(Widget).get_vnode_j09r2n_k$ = function () {
    return this.vnode_1;
  };
  protoOf(Widget).set_lastLanguage_8p9n2k_k$ = function (_set____db54di) {
    this.lastLanguage_1 = _set____db54di;
  };
  protoOf(Widget).get_lastLanguage_kfoajb_k$ = function () {
    return this.lastLanguage_1;
  };
  protoOf(Widget).set_afterCreateHooks_vtr089_k$ = function (_set____db54di) {
    this.afterCreateHooks_1 = _set____db54di;
  };
  protoOf(Widget).get_afterCreateHooks_hffhjz_k$ = function () {
    return this.afterCreateHooks_1;
  };
  protoOf(Widget).set_afterInsertHooks_c3egp2_k$ = function (_set____db54di) {
    this.afterInsertHooks_1 = _set____db54di;
  };
  protoOf(Widget).get_afterInsertHooks_ayzb5o_k$ = function () {
    return this.afterInsertHooks_1;
  };
  protoOf(Widget).set_afterDestroyHooks_5v8s1h_k$ = function (_set____db54di) {
    this.afterDestroyHooks_1 = _set____db54di;
  };
  protoOf(Widget).get_afterDestroyHooks_e8xnfb_k$ = function () {
    return this.afterDestroyHooks_1;
  };
  protoOf(Widget).useSnabbdomDistinctKey_wmc8hc_k$ = function () {
    var tmp = this;
    var _unary__edvuaz = Companion_getInstance_2().counter_1;
    Companion_getInstance_2().counter_1 = _unary__edvuaz + 1 | 0;
    tmp.vnkey_1 = 'kv_widget_' + _unary__edvuaz;
  };
  protoOf(Widget).addAfterCreateHook_jnuj9o_k$ = function (hook) {
    var tmp0_elvis_lhs = this.afterCreateHooks_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'io.kvision.core.Widget.addAfterCreateHook.<anonymous>' call
      this.useSnabbdomDistinctKey_wmc8hc_k$();
      var tmp_0 = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_0.afterCreateHooks_1 = ArrayList_init_$Create$();
      tmp = ensureNotNull(this.afterCreateHooks_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp.add_utx5q5_k$(hook);
  };
  protoOf(Widget).removeAfterCreateHook_911psh_k$ = function (hook) {
    var tmp0_safe_receiver = this.afterCreateHooks_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.remove_cedx0m_k$(hook);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Widget).clearAfterCreateHooks_xde985_k$ = function () {
    var tmp0_safe_receiver = this.afterCreateHooks_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clear_j9egeb_k$();
    }
  };
  protoOf(Widget).addAfterInsertHook_s83sk1_k$ = function (hook) {
    var tmp0_elvis_lhs = this.afterInsertHooks_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'io.kvision.core.Widget.addAfterInsertHook.<anonymous>' call
      this.useSnabbdomDistinctKey_wmc8hc_k$();
      var tmp_0 = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_0.afterInsertHooks_1 = ArrayList_init_$Create$();
      tmp = ensureNotNull(this.afterInsertHooks_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp.add_utx5q5_k$(hook);
  };
  protoOf(Widget).removeAfterInsertHook_e440cy_k$ = function (hook) {
    var tmp0_safe_receiver = this.afterInsertHooks_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.remove_cedx0m_k$(hook);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Widget).clearAfterInsertHooks_i07bfc_k$ = function () {
    var tmp0_safe_receiver = this.afterInsertHooks_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clear_j9egeb_k$();
    }
  };
  protoOf(Widget).addAfterDestroyHook_7cqxpi_k$ = function (hook) {
    var tmp0_elvis_lhs = this.afterDestroyHooks_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'io.kvision.core.Widget.addAfterDestroyHook.<anonymous>' call
      this.useSnabbdomDistinctKey_wmc8hc_k$();
      var tmp_0 = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_0.afterDestroyHooks_1 = ArrayList_init_$Create$();
      tmp = ensureNotNull(this.afterDestroyHooks_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp.add_utx5q5_k$(hook);
  };
  protoOf(Widget).removeAfterDestroyHook_8vfkv1_k$ = function (hook) {
    var tmp0_safe_receiver = this.afterDestroyHooks_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.remove_cedx0m_k$(hook);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Widget).clearAfterDestroyHooks_h7xzgr_k$ = function () {
    var tmp0_safe_receiver = this.afterDestroyHooks_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clear_j9egeb_k$();
    }
  };
  protoOf(Widget).addBeforeDisposeHook_g5p0gq_k$ = function (hook) {
    var tmp0_elvis_lhs = this.beforeDisposeHooks_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'io.kvision.core.Widget.addBeforeDisposeHook.<anonymous>' call
      var tmp_0 = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp_0.beforeDisposeHooks_1 = ArrayList_init_$Create$();
      tmp = ensureNotNull(this.beforeDisposeHooks_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp.add_utx5q5_k$(hook);
  };
  protoOf(Widget).removeBeforeDisposeHook_lzimbb_k$ = function (hook) {
    var tmp0_safe_receiver = this.beforeDisposeHooks_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.remove_cedx0m_k$(hook);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Widget).clearBeforeDisposeHooks_mx3cfn_k$ = function () {
    var tmp0_safe_receiver = this.beforeDisposeHooks_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clear_j9egeb_k$();
    }
  };
  protoOf(Widget).singleRender_ca7nu0_k$ = function (block) {
    var root = this.getRoot_18r9uw_k$();
    var tmp;
    if (!(root == null)) {
      tmp = root.singleRender_ca7nu0_k$(block);
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(Widget).singleRenderAsync_haca86_k$ = function (block) {
    var root = this.getRoot_18r9uw_k$();
    if (!(root == null)) {
      root.singleRenderAsync_haca86_k$(block);
    } else {
      block();
    }
  };
  protoOf(Widget).renderVNode_r2mn32_k$ = function () {
    var tmp;
    if (this.surroundingClasses_1 == null) {
      tmp = this.render_fgfjvu_k$();
    } else {
      // Inline function 'io.kvision.utils.snOpt' call
      var block = Widget$renderVNode$lambda(this);
      // Inline function 'io.kvision.utils.vNodeData' call
      var tmp$ret$0 = {};
      var opt = apply$ref(tmp$ret$0)(block);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$4 = [this.render_fgfjvu_k$()];
      tmp = h('div', opt, tmp$ret$4);
    }
    return tmp;
  };
  protoOf(Widget).translate_s2ekyc_k$ = function (text) {
    this.lastLanguage_1 = I18n_getInstance().get_language_cjhhk1_k$();
    return I18n_getInstance().trans_c4o9pq_k$(text);
  };
  protoOf(Widget).translate_k8ozsp_k$ = function (text) {
    var tmp;
    if (text == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Widget.translate.<anonymous>' call
      tmp = this.translate_s2ekyc_k$(text);
    }
    return tmp;
  };
  protoOf(Widget).render_fgfjvu_k$ = function () {
    return this.render_ab0tlo_k$('div');
  };
  protoOf(Widget).render_ab0tlo_k$ = function (elementName) {
    return h_0(elementName, getSnOpt(this));
  };
  protoOf(Widget).render_prnnht_k$ = function (elementName, children) {
    return h(elementName, getSnOpt(this), children);
  };
  protoOf(Widget).getSnOptSimple_w3osfo_k$ = function () {
    // Inline function 'io.kvision.utils.snOpt' call
    var block = Widget$getSnOptSimple$lambda(this);
    // Inline function 'io.kvision.utils.vNodeData' call
    var tmp$ret$0 = {};
    return apply$ref_1(tmp$ret$0)(block);
  };
  protoOf(Widget).getSnOptContents_5my8kc_k$ = function () {
    // Inline function 'io.kvision.utils.snOpt' call
    var block = Widget$getSnOptContents$lambda(this);
    // Inline function 'io.kvision.utils.vNodeData' call
    var tmp$ret$0 = {};
    return apply$ref_2(tmp$ret$0)(block);
  };
  protoOf(Widget).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    if (this.classes_1 == null && !(this.className_1 == null)) {
      // Inline function 'io.kvision.utils.set' call
      var this_0 = this.className_1;
      var tmp$ret$0 = toSet_0(split_0(this_0, [' ']));
      classSetBuilder.addAll_kmiuje_k$(tmp$ret$0);
    } else if (!(this.classes_1 == null)) {
      classSetBuilder.addAll_kmiuje_k$(ensureNotNull(this.classes_1));
    }
    if (!this.get_visible_8zfvk9_k$()) {
      classSetBuilder.add_udnk2x_k$('hidden');
    }
  };
  protoOf(Widget).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    if (this.attributes_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp.attributes_1 = LinkedHashMap_init_$Create$();
    }
    attributeSetBuilder.addAll_h65jxg_k$(ensureNotNull(this.attributes_1));
    var tmp0_safe_receiver = this.get_id_kntnx8_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Widget.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('id', tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.get_title_iz32un_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Widget.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('title', this.translate_s2ekyc_k$(tmp1_safe_receiver));
    }
    var tmp2_safe_receiver = this.get_role_wotsxr_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Widget.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('role', tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = this.get_tabindex_odktuu_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.Widget.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('tabindex', tmp3_safe_receiver.toString());
    }
    if (this.get_draggable_3h8q90_k$() === true) {
      attributeSetBuilder.add_lbri6p_k$('draggable', 'true');
    }
  };
  protoOf(Widget).getSnOn_18qods_k$ = function () {
    if (this.internalListenersMap_1 == null && this.listenersMap_1 == null)
      return null;
    var tmp0_safe_receiver = this.internalListenersMap_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.getSnOn.<anonymous>' call
        var tmp_0;
        if (!(element.get_key_18j28a_k$() === 'self')) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !element.get_value_j01efc_k$().isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          destination.put_4fpzoq_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
        }
      }
      tmp = destination;
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(tmp1_safe_receiver.get_size_woubt6_k$());
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = tmp1_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.getSnOn.<anonymous>' call
        // Inline function 'kotlin.collections.mutableMapOf' call
        var internalListeners = LinkedHashMap_init_$Create$();
        internalListeners.putAll_wgg6cj_k$(item.get_value_j01efc_k$());
        var tmp$ret$7 = to(item.get_key_18j28a_k$(), internalListeners);
        destination_0.add_utx5q5_k$(tmp$ret$7);
      }
      tmp_1 = destination_0;
    }
    var tmp2_safe_receiver = tmp_1;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : toMap(tmp2_safe_receiver);
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : toMutableMap(tmp3_safe_receiver);
    var tmp_2;
    if (tmp4_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp_2 = LinkedHashMap_init_$Create$();
    } else {
      tmp_2 = tmp4_elvis_lhs;
    }
    var map = tmp_2;
    var tmp5_safe_receiver = this.listenersMap_1;
    var tmp_3;
    if (tmp5_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = tmp5_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_1.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.getSnOn.<anonymous>' call
        var tmp_4;
        if (!(element_0.get_key_18j28a_k$() === 'self')) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !element_0.get_value_j01efc_k$().isEmpty_y1axqb_k$();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          destination_1.put_4fpzoq_k$(element_0.get_key_18j28a_k$(), element_0.get_value_j01efc_k$());
        }
      }
      tmp_3 = destination_1;
    }
    var tmp6_safe_receiver = tmp_3;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_2 = tmp6_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
        var element_1 = _iterator__ex2g4s_2.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.getSnOn.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var event = element_1.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var listeners = element_1.get_value_j01efc_k$();
        var internalListeners_0 = map.get_wei43m_k$(event);
        if (!(internalListeners_0 == null)) {
          internalListeners_0.putAll_wgg6cj_k$(listeners);
        } else {
          // Inline function 'kotlin.collections.set' call
          map.put_4fpzoq_k$(event, listeners);
        }
      }
    }
    var tmp_5;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!map.isEmpty_y1axqb_k$()) {
      var handlers = emptyOn();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_3 = map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
        var element_2 = _iterator__ex2g4s_3.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.getSnOn.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var event_0 = element_2.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var listeners_0 = element_2.get_value_j01efc_k$();
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_6;
        if (listeners_0.get_size_woubt6_k$() === 1) {
          tmp_6 = first(listeners_0.get_values_ksazhn_k$());
        } else {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_2 = ArrayList_init_$Create$_0(listeners_0.get_size_woubt6_k$());
          // Inline function 'kotlin.collections.iterator' call
          var _iterator__ex2g4s_4 = listeners_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
            var item_0 = _iterator__ex2g4s_4.next_20eer_k$();
            // Inline function 'io.kvision.core.Widget.getSnOn.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$28 = [item_0.get_value_j01efc_k$()];
            destination_2.add_utx5q5_k$(tmp$ret$28);
          }
          // Inline function 'kotlin.collections.toTypedArray' call
          tmp_6 = copyToArray(destination_2);
        }
        handlers[event_0] = tmp_6;
      }
      tmp_5 = handlers;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  };
  protoOf(Widget).getSnHooks_hgackh_k$ = function () {
    // Inline function 'io.kvision.utils.hooks' call
    var hooks = {};
    // Inline function 'kotlin.apply' call
    // Inline function 'io.kvision.core.Widget.getSnHooks.<anonymous>' call
    hooks.create = Widget$getSnHooks$lambda(this);
    hooks.insert = Widget$getSnHooks$lambda_0(this);
    hooks.postpatch = Widget$getSnHooks$lambda_1(this);
    hooks.destroy = Widget$getSnHooks$lambda_2(this);
    return hooks;
  };
  protoOf(Widget).setInternalEventListener_jia4mj_k$ = function (block) {
    if (this.internalListenersMap_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp.internalListenersMap_1 = LinkedHashMap_init_$Create$();
    }
    var _unary__edvuaz = this.listenerCounter_1;
    this.listenerCounter_1 = _unary__edvuaz + 1 | 0;
    var handlerCounter = _unary__edvuaz;
    var blockAsWidget = typeof block === 'function' ? block : THROW_CCE();
    var handlers = on(this);
    apply$ref_3(handlers)(blockAsWidget);
    var _iterator__ex2g4s = iterator(Object.keys(handlers));
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var key = _iterator__ex2g4s.next_20eer_k$();
      if (!(key === 'self')) {
        // Inline function 'kotlin.js.asDynamic' call
        var handler = handlers[key];
        var map = ensureNotNull(this.internalListenersMap_1).get_wei43m_k$(key);
        if (!(map == null)) {
          // Inline function 'kotlin.collections.set' call
          map.put_4fpzoq_k$(handlerCounter, handler);
        } else {
          var tmp4 = ensureNotNull(this.internalListenersMap_1);
          // Inline function 'kotlin.collections.set' call
          var value = mutableMapOf([to(handlerCounter, handler)]);
          tmp4.put_4fpzoq_k$(key, value);
        }
      }
    }
    this.refresh_6a3uvf_k$();
    return handlerCounter;
  };
  protoOf(Widget).setEventListener_4rv3s8_k$ = function (block) {
    if (this.listenersMap_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp.listenersMap_1 = LinkedHashMap_init_$Create$();
    }
    if (this.jqueryListenersMap_1 == null) {
      var tmp_0 = this;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp_0.jqueryListenersMap_1 = LinkedHashMap_init_$Create$();
    }
    this.removeAllJQueryListeners_js15m4_k$();
    var _unary__edvuaz = this.listenerCounter_1;
    this.listenerCounter_1 = _unary__edvuaz + 1 | 0;
    var handlerCounter = _unary__edvuaz;
    var blockAsWidget = typeof block === 'function' ? block : THROW_CCE();
    var tmp0_elvis_lhs = this.eventTarget_1;
    var handlers = on(tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs);
    apply$ref_4(handlers)(blockAsWidget);
    var _iterator__ex2g4s = iterator(Object.keys(handlers));
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var key = _iterator__ex2g4s.next_20eer_k$();
      if (!(key === 'self')) {
        // Inline function 'kotlin.js.asDynamic' call
        var handler = handlers[key];
        if (!startsWith(key, 'KVJQUERYEVENT##')) {
          var map = ensureNotNull(this.listenersMap_1).get_wei43m_k$(key);
          if (!(map == null)) {
            // Inline function 'kotlin.collections.set' call
            map.put_4fpzoq_k$(handlerCounter, handler);
          } else {
            var tmp4 = ensureNotNull(this.listenersMap_1);
            // Inline function 'kotlin.collections.set' call
            var value = mutableMapOf([to(handlerCounter, handler)]);
            tmp4.put_4fpzoq_k$(key, value);
          }
        } else {
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          var jqueryKey = key.substring(15);
          var map_0 = ensureNotNull(this.jqueryListenersMap_1).get_wei43m_k$(jqueryKey);
          if (!(map_0 == null)) {
            // Inline function 'kotlin.collections.set' call
            map_0.put_4fpzoq_k$(handlerCounter, handler);
          } else {
            var tmp12 = ensureNotNull(this.jqueryListenersMap_1);
            // Inline function 'kotlin.collections.set' call
            var value_0 = mutableMapOf([to(handlerCounter, handler)]);
            tmp12.put_4fpzoq_k$(jqueryKey, value_0);
          }
        }
      }
    }
    this.refresh_6a3uvf_k$();
    this.bindAllJQueryListeners_3ovqr7_k$();
    return handlerCounter;
  };
  protoOf(Widget).removeEventListener_9wauwy_k$ = function (id) {
    var tmp0_safe_receiver = this.listenersMap_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.removeEventListener.<anonymous>' call
        element.get_value_j01efc_k$().remove_gppy8k_k$(id);
      }
    }
    this.removeAllJQueryListeners_js15m4_k$();
    var tmp1_safe_receiver = this.jqueryListenersMap_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = tmp1_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.removeEventListener.<anonymous>' call
        element_0.get_value_j01efc_k$().remove_gppy8k_k$(id);
      }
    }
    this.bindAllJQueryListeners_3ovqr7_k$();
    this.refresh_6a3uvf_k$();
  };
  protoOf(Widget).removeEventListeners_vuojmv_k$ = function () {
    var tmp0_safe_receiver = this.listenersMap_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clear_j9egeb_k$();
    }
    this.removeAllJQueryListeners_js15m4_k$();
    var tmp1_safe_receiver = this.jqueryListenersMap_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.clear_j9egeb_k$();
    }
    this.refresh_6a3uvf_k$();
  };
  protoOf(Widget).bindAllJQueryListeners_3ovqr7_k$ = function () {
  };
  protoOf(Widget).removeAllJQueryListeners_js15m4_k$ = function () {
  };
  protoOf(Widget).show_58bemr_k$ = function () {
    this.set_visible_w9mvj4_k$(true);
  };
  protoOf(Widget).hide_o8jt72_k$ = function () {
    this.set_visible_w9mvj4_k$(false);
  };
  protoOf(Widget).toggleVisible_1v2vyq_k$ = function () {
    if (this.get_visible_8zfvk9_k$()) {
      this.hide_o8jt72_k$();
    } else {
      this.show_58bemr_k$();
    }
  };
  protoOf(Widget).addCssClass_ul13bg_k$ = function (css) {
    if (this.classes_1 == null) {
      var tmp = this;
      // Inline function 'io.kvision.utils.mutableSet' call
      var tmp0_safe_receiver = this.className_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'io.kvision.utils.mutableSet' call
        tmp_0 = toMutableSet(split_0(tmp0_safe_receiver, [' ']));
      }
      var tmp1_elvis_lhs = tmp_0;
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mutableSetOf' call
        tmp_1 = LinkedHashSet_init_$Create$();
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      tmp.classes_1 = tmp_1;
    }
    ensureNotNull(this.classes_1).add_utx5q5_k$(css);
    this.refresh_6a3uvf_k$();
  };
  protoOf(Widget).removeCssClass_3dntip_k$ = function (css) {
    if (this.classes_1 == null) {
      var tmp = this;
      // Inline function 'io.kvision.utils.mutableSet' call
      var tmp0_safe_receiver = this.className_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'io.kvision.utils.mutableSet' call
        tmp_0 = toMutableSet(split_0(tmp0_safe_receiver, [' ']));
      }
      var tmp1_elvis_lhs = tmp_0;
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mutableSetOf' call
        tmp_1 = LinkedHashSet_init_$Create$();
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      tmp.classes_1 = tmp_1;
    }
    ensureNotNull(this.classes_1).remove_cedx0m_k$(css);
    this.refresh_6a3uvf_k$();
  };
  protoOf(Widget).hasCssClass_hvhhyj_k$ = function (css) {
    var tmp0_safe_receiver = this.classes_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_aljjnj_k$(css);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Widget).addSurroundingCssClass_h2gyzy_k$ = function (css) {
    if (this.surroundingClasses_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp.surroundingClasses_1 = LinkedHashSet_init_$Create$();
    }
    ensureNotNull(this.surroundingClasses_1).add_utx5q5_k$(css);
    this.refresh_6a3uvf_k$();
  };
  protoOf(Widget).removeSurroundingCssClass_at56kr_k$ = function (css) {
    if (this.surroundingClasses_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp.surroundingClasses_1 = LinkedHashSet_init_$Create$();
    }
    ensureNotNull(this.surroundingClasses_1).remove_cedx0m_k$(css);
    this.refresh_6a3uvf_k$();
  };
  protoOf(Widget).addCssStyle_4edidd_k$ = function (css) {
    this.addCssClass_ul13bg_k$(css.get_cssClassName_8qljcu_k$());
  };
  protoOf(Widget).removeCssStyle_l44kc_k$ = function (css) {
    this.removeCssClass_3dntip_k$(css.get_cssClassName_8qljcu_k$());
  };
  protoOf(Widget).addSurroundingCssStyle_pgxj1f_k$ = function (css) {
    this.addSurroundingCssClass_h2gyzy_k$(css.get_cssClassName_8qljcu_k$());
  };
  protoOf(Widget).removeSurroundingCssStyle_asoqhs_k$ = function (css) {
    this.removeSurroundingCssClass_at56kr_k$(css.get_cssClassName_8qljcu_k$());
  };
  protoOf(Widget).getAttribute_z2kbho_k$ = function (name) {
    var tmp0_safe_receiver = this.attributes_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_wei43m_k$(name);
  };
  protoOf(Widget).setAttribute_gbqua2_k$ = function (name, value) {
    if (this.attributes_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp.attributes_1 = LinkedHashMap_init_$Create$();
    }
    // Inline function 'kotlin.collections.set' call
    ensureNotNull(this.attributes_1).put_4fpzoq_k$(name, value);
    this.refresh_6a3uvf_k$();
  };
  protoOf(Widget).removeAttribute_3xc826_k$ = function (name) {
    if (this.attributes_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp.attributes_1 = LinkedHashMap_init_$Create$();
    }
    ensureNotNull(this.attributes_1).remove_gppy8k_k$(name);
    this.refresh_6a3uvf_k$();
  };
  protoOf(Widget).getElement_acounu_k$ = function () {
    var tmp0_safe_receiver = this.vnode_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.elm;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  };
  protoOf(Widget).getElementD_y85vem_k$ = function () {
    var tmp0_safe_receiver = this.getElement_acounu_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    return tmp;
  };
  protoOf(Widget).clearParent_npr7gn_k$ = function () {
    this.set_parent_58bm75_k$(null);
  };
  protoOf(Widget).refresh_6a3uvf_k$ = function () {
    protoOf(StyledComponent).refresh_6a3uvf_k$.call(this);
    this.snAttrsCache_1.clear_j9egeb_k$();
    this.snClassCache_1.clear_j9egeb_k$();
    this.snOnCache_1 = null;
    this.snHooksCache_1 = null;
    var tmp0_safe_receiver = this.getRoot_18r9uw_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.reRender_8c6ezy_k$();
    }
  };
  protoOf(Widget).afterCreate_ur4p75_k$ = function (node) {
  };
  protoOf(Widget).afterInsertInternal_48dr5u_k$ = function (node) {
  };
  protoOf(Widget).afterInsert_6ut630_k$ = function (node) {
  };
  protoOf(Widget).afterPatch_k0achv_k$ = function (node) {
  };
  protoOf(Widget).afterDestroyInternal_ypmf34_k$ = function () {
  };
  protoOf(Widget).afterDestroy_geowxa_k$ = function () {
  };
  protoOf(Widget).getRoot_18r9uw_k$ = function () {
    var tmp0_safe_receiver = this.get_parent_hy4reb_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getRoot_18r9uw_k$();
  };
  protoOf(Widget).setDragDropData_iy1d4v_k$ = function (format, data) {
    this.set_draggable_fj5qmo_k$(true);
    this.setEventListener_4rv3s8_k$(Widget$setDragDropData$lambda(format, data));
  };
  protoOf(Widget).clearDragDropData_733yhi_k$ = function () {
    this.set_draggable_fj5qmo_k$(false);
    this.setEventListener_4rv3s8_k$(Widget$clearDragDropData$lambda);
  };
  protoOf(Widget).setDropTargetData_llfkgw_k$ = function (format, callback) {
    this.setDropTarget_aotb36_k$(format, Widget$setDropTargetData$lambda(callback, format));
  };
  protoOf(Widget).setDropTarget_aotb36_k$ = function (format, callback) {
    this.setDropTarget_paqceh_k$(setOf(format), callback);
  };
  protoOf(Widget).setDropTarget_paqceh_k$ = function (formats, callback) {
    this.setEventListener_4rv3s8_k$(Widget$setDropTarget$lambda(formats, callback));
  };
  protoOf(Widget).setDropTarget$default_q9y765_k$ = function (formats, callback, $super) {
    formats = formats === VOID ? null : formats;
    var tmp;
    if ($super === VOID) {
      this.setDropTarget_paqceh_k$(formats, callback);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.setDropTarget_paqceh_k$.call(this, formats, callback);
    }
    return tmp;
  };
  protoOf(Widget).createLabelWithIcon_7iayj6_k$ = function (label, icon, image, separator) {
    var translatedLabel = this.translate_s2ekyc_k$(label);
    var tmp;
    if (!(icon == null)) {
      var iconClasses = toSet_0(split_0(icon, [' ']));
      // Inline function 'io.kvision.utils.snOpt' call
      var block = Widget$createLabelWithIcon$lambda(iconClasses);
      // Inline function 'io.kvision.utils.vNodeData' call
      var tmp$ret$0 = {};
      var iconOpt = apply$ref_5(tmp$ret$0)(block);
      var tmp_0;
      if (separator == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [h_0('i', iconOpt), ' ' + translatedLabel];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [h_0('i', iconOpt), KVManager_getInstance().virtualize_d7cntb_k$(separator), translatedLabel];
      }
      tmp = tmp_0;
    } else if (!(image == null)) {
      // Inline function 'io.kvision.utils.snOpt' call
      var block_0 = Widget$createLabelWithIcon$lambda_0(image);
      // Inline function 'io.kvision.utils.vNodeData' call
      var tmp$ret$8 = {};
      var imageOpt = apply$ref_6(tmp$ret$8)(block_0);
      var tmp_1;
      if (separator == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = [h_0('img', imageOpt), ' ' + translatedLabel];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = [h_0('img', imageOpt), KVManager_getInstance().virtualize_d7cntb_k$(separator), translatedLabel];
      }
      tmp = tmp_1;
    } else {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [translatedLabel];
    }
    return tmp;
  };
  protoOf(Widget).createLabelWithIcon$default_ql70x2_k$ = function (label, icon, image, separator, $super) {
    icon = icon === VOID ? null : icon;
    image = image === VOID ? null : image;
    separator = separator === VOID ? null : separator;
    return $super === VOID ? this.createLabelWithIcon_7iayj6_k$(label, icon, image, separator) : $super.createLabelWithIcon_7iayj6_k$.call(this, label, icon, image, separator);
  };
  protoOf(Widget).dispatchEvent_uegfeo_k$ = function (type, eventInitDict) {
    var event = new CustomEvent(type, eventInitDict);
    var tmp0_safe_receiver = this.getElement_acounu_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dispatchEvent(event);
  };
  protoOf(Widget).dispose_3nnxhr_k$ = function () {
    this.afterDestroyInternal_ypmf34_k$();
    this.afterDestroy_geowxa_k$();
    if (!(this.vnode_1 == null)) {
      var tmp0_safe_receiver = this.afterDestroyHooks_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'io.kvision.core.Widget.dispose.<anonymous>' call
          element();
        }
      }
      var tmp1_safe_receiver = this.afterDestroyHooks_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.clear_j9egeb_k$();
      }
    }
    var tmp2_safe_receiver = this.beforeDisposeHooks_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = tmp2_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'io.kvision.core.Widget.dispose.<anonymous>' call
        element_0();
      }
    }
  };
  protoOf(Widget).refreshOnUpdate_xfjdvn_k$ = function (refreshFunction) {
    return _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction);
  };
  protoOf(Widget).refreshOnUpdate_jcsjtp_k$ = function (initialValue, refreshFunction) {
    return new RefreshDelegateProvider_0(this, initialValue, refreshFunction);
  };
  function title$factory() {
    return getPropertyCallableRef('title', 1, KMutableProperty1, function (receiver) {
      return receiver.get_title_iz32un_k$();
    }, function (receiver, value) {
      return receiver.set_title_ceyuu4_k$(value);
    });
  }
  function title$factory_0() {
    return getPropertyCallableRef('title', 1, KMutableProperty1, function (receiver) {
      return receiver.get_title_iz32un_k$();
    }, function (receiver, value) {
      return receiver.set_title_ceyuu4_k$(value);
    });
  }
  function id$factory() {
    return getPropertyCallableRef('id', 1, KMutableProperty1, function (receiver) {
      return receiver.get_id_kntnx8_k$();
    }, function (receiver, value) {
      return receiver.set_id_wyyipr_k$(value);
    });
  }
  function id$factory_0() {
    return getPropertyCallableRef('id', 1, KMutableProperty1, function (receiver) {
      return receiver.get_id_kntnx8_k$();
    }, function (receiver, value) {
      return receiver.set_id_wyyipr_k$(value);
    });
  }
  function role$factory() {
    return getPropertyCallableRef('role', 1, KMutableProperty1, function (receiver) {
      return receiver.get_role_wotsxr_k$();
    }, function (receiver, value) {
      return receiver.set_role_ghksys_k$(value);
    });
  }
  function role$factory_0() {
    return getPropertyCallableRef('role', 1, KMutableProperty1, function (receiver) {
      return receiver.get_role_wotsxr_k$();
    }, function (receiver, value) {
      return receiver.set_role_ghksys_k$(value);
    });
  }
  function tabindex$factory() {
    return getPropertyCallableRef('tabindex', 1, KMutableProperty1, function (receiver) {
      return receiver.get_tabindex_odktuu_k$();
    }, function (receiver, value) {
      return receiver.set_tabindex_4zmmtb_k$(value);
    });
  }
  function tabindex$factory_0() {
    return getPropertyCallableRef('tabindex', 1, KMutableProperty1, function (receiver) {
      return receiver.get_tabindex_odktuu_k$();
    }, function (receiver, value) {
      return receiver.set_tabindex_4zmmtb_k$(value);
    });
  }
  function draggable$factory() {
    return getPropertyCallableRef('draggable', 1, KMutableProperty1, function (receiver) {
      return receiver.get_draggable_3h8q90_k$();
    }, function (receiver, value) {
      return receiver.set_draggable_fj5qmo_k$(value);
    });
  }
  function draggable$factory_0() {
    return getPropertyCallableRef('draggable', 1, KMutableProperty1, function (receiver) {
      return receiver.get_draggable_3h8q90_k$();
    }, function (receiver, value) {
      return receiver.set_draggable_fj5qmo_k$(value);
    });
  }
  function get_KVScope() {
    _init_properties_WidgetSuspendingHandlers_kt__gzvik3();
    return KVScope;
  }
  var KVScope;
  var properties_initialized_WidgetSuspendingHandlers_kt_ifwz05;
  function _init_properties_WidgetSuspendingHandlers_kt__gzvik3() {
    if (!properties_initialized_WidgetSuspendingHandlers_kt_ifwz05) {
      properties_initialized_WidgetSuspendingHandlers_kt_ifwz05 = true;
      KVScope = CoroutineScope(Dispatchers_getInstance().get_Default_goqax4_k$().plus_s13ygv_k$(SupervisorJob()));
    }
  }
  function WidgetWrapper(wrapped, className) {
    className = className === VOID ? null : className;
    SimplePanel.call(this, className);
    this.wrapped_1 = wrapped;
    var tmp0_safe_receiver = this.wrapped_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.set_parent_58bm75_k$(this);
    }
  }
  protoOf(WidgetWrapper).set_wrapped_klntl0_k$ = function (_set____db54di) {
    this.wrapped_1 = _set____db54di;
  };
  protoOf(WidgetWrapper).get_wrapped_64pp2p_k$ = function () {
    return this.wrapped_1;
  };
  protoOf(WidgetWrapper).set_visible_w9mvj4_k$ = function (value) {
    var tmp0_safe_receiver = this.wrapped_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.set_visible_w9mvj4_k$(value);
    }
  };
  protoOf(WidgetWrapper).get_visible_8zfvk9_k$ = function () {
    var tmp0_safe_receiver = this.wrapped_1;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_visible_8zfvk9_k$()) === true;
  };
  protoOf(WidgetWrapper).render_fgfjvu_k$ = function () {
    var tmp0_safe_receiver = this.wrapped_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.core.WidgetWrapper.render.<anonymous>' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [tmp0_safe_receiver.renderVNode_r2mn32_k$()];
      tmp = this.render_prnnht_k$('div', tmp$ret$2);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.render_ab0tlo_k$('div') : tmp1_elvis_lhs;
  };
  protoOf(WidgetWrapper).dispose_3nnxhr_k$ = function () {
    protoOf(SimplePanel).dispose_3nnxhr_k$.call(this);
    var tmp0_safe_receiver = this.wrapped_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clearParent_npr7gn_k$();
    }
    this.wrapped_1 = null;
  };
  function FieldLabel(forId, content, rich, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_LABEL_getInstance(), content, rich, VOID, className);
    this.forId_1 = forId;
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(FieldLabel).get_forId_evcn5c_k$ = function () {
    return this.forId_1;
  };
  protoOf(FieldLabel).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(Tag).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    attributeSetBuilder.add_lbri6p_k$('for', this.forId_1);
  };
  function FieldLabelCheck(forId, content, rich, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    FieldLabel.call(this, forId, content, rich, className);
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(FieldLabelCheck).render_fgfjvu_k$ = function () {
    var tmp;
    if (!(this.get_content_h02jrk_k$() == null)) {
      var tmp0_safe_receiver = this.get_content_h02jrk_k$();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.form.FieldLabelCheck.render.<anonymous>' call
        tmp_0 = this.translate_s2ekyc_k$(tmp0_safe_receiver);
      }
      var translatedContent = tmp_0;
      var tmp_1;
      if (this.get_rich_woto9x_k$()) {
        var tmp_2 = this.get_type_wovaf7_k$().get_tagName_7k7wv_k$();
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp3 = [KVManager_getInstance().virtualize_d7cntb_k$('<span style="display: contents;">' + translatedContent + '<\/span>')];
        // Inline function 'kotlin.collections.plus' call
        var elements = this.childrenVNodes_2corie_k$();
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$6 = tmp3.concat(elements);
        tmp_1 = this.render_prnnht_k$(tmp_2, tmp$ret$6);
      } else {
        var tmp_3 = this.get_type_wovaf7_k$().get_tagName_7k7wv_k$();
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp6 = [translatedContent];
        // Inline function 'kotlin.collections.plus' call
        var elements_0 = this.childrenVNodes_2corie_k$();
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$11 = tmp6.concat(elements_0);
        tmp_1 = this.render_prnnht_k$(tmp_3, tmp$ret$11);
      }
      tmp = tmp_1;
    } else {
      tmp = this.render_prnnht_k$(this.get_type_wovaf7_k$().get_tagName_7k7wv_k$(), this.childrenVNodes_2corie_k$());
    }
    return tmp;
  };
  function _get_panel__cycb77($this) {
    return $this.panel_1;
  }
  function _get_serializer__hdpyrd($this) {
    return $this.serializer_1;
  }
  function _get_customSerializers__hsmxr5($this) {
    return $this.customSerializers_1;
  }
  function _get_dataMap__6ab85d($this) {
    return $this.dataMap_1;
  }
  function _get_jsonFactory__fo2mkv($this) {
    return $this.jsonFactory_1;
  }
  function _get_JsonInstance__o5pqge($this) {
    return $this.JsonInstance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Form$JsonInstance$lambda(this$0) {
    return function ($this$Json) {
      $this$Json.set_encodeDefaults_c5evsg_k$(true);
      $this$Json.set_explicitNulls_mtj2ai_k$(false);
      var tmp = $this$Json.get_serializersModule_piitvg_k$();
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      // Inline function 'io.kvision.form.Form.JsonInstance.<anonymous>.<anonymous>.<anonymous>' call
      builder.contextual_s0h8js_k$(getKClass(Date), DateSerializer_getInstance());
      var tmp0_safe_receiver = this$0.customSerializers_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s = tmp0_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'io.kvision.form.Form.JsonInstance.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.component1' call
          var kclass = element.get_key_18j28a_k$();
          // Inline function 'kotlin.collections.component2' call
          var serializer = element.get_value_j01efc_k$();
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = kclass;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          builder.contextual_s0h8js_k$(tmp_0, serializer);
        }
      }
      var tmp$ret$7 = builder.build_boe8ts_k$();
      $this$Json.set_serializersModule_6xge6s_k$(overwriteWith(tmp, tmp$ret$7));
      return Unit_getInstance();
    };
  }
  function Form$lambda(this$0) {
    return function (it) {
      var json = {};
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = it.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.form.Form.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key = element.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = element.get_value_j01efc_k$();
        var tmp;
        if (value instanceof Date) {
          tmp = toStringF(value);
        } else {
          if (!(value == null) ? isInterface(value, KtList) : false) {
            var tmp1_safe_receiver = isInterface(value, KtList) ? value : null;
            tmp = tmp1_safe_receiver == null ? null : Serialization_getInstance().toObj_ftbqbx_k$(tmp1_safe_receiver, ListSerializer(Companion_getInstance().serializer_9w0wvi_k$()));
          } else {
            tmp = value;
          }
        }
        var v = tmp;
        if (v != null) {
          json[key] = v;
        }
      }
      return ensureNotNull(this$0.JsonInstance_1).decodeFromString_jwu9sq_k$(this$0.serializer_1, JSON.stringify(json));
    };
  }
  function Form$lambda_0(this$0) {
    return function (it) {
      return JSON.parse(ensureNotNull(this$0.JsonInstance_1).encodeToString_k0apqx_k$(this$0.serializer_1, it));
    };
  }
  function Form$getData$lambda(it) {
    return null;
  }
  function Form(panel, serializer, customSerializers) {
    Companion_getInstance_3();
    panel = panel === VOID ? null : panel;
    serializer = serializer === VOID ? null : serializer;
    customSerializers = customSerializers === VOID ? null : customSerializers;
    this.panel_1 = panel;
    this.serializer_1 = serializer;
    this.customSerializers_1 = customSerializers;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.dataMap_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp_0.fields_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.fieldsParams_1 = LinkedHashMap_init_$Create$();
    this.validatorMessage_1 = null;
    this.validator_1 = null;
    var tmp_2 = this;
    var tmp_3;
    if (this.serializer_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.Form.JsonInstance.<anonymous>' call
      var tmp0_elvis_lhs = Serialization_getInstance().get_customConfiguration_clwja4_k$();
      var tmp_4 = tmp0_elvis_lhs == null ? Default_getInstance() : tmp0_elvis_lhs;
      tmp_3 = Json(tmp_4, Form$JsonInstance$lambda(this));
    }
    tmp_2.JsonInstance_1 = tmp_3;
    var tmp_5 = this;
    var tmp_6;
    if (this.serializer_1 == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.Form.<anonymous>' call
      tmp_6 = Form$lambda(this);
    }
    tmp_5.modelFactory_1 = tmp_6;
    var tmp_7 = this;
    var tmp_8;
    if (this.serializer_1 == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.Form.<anonymous>' call
      tmp_8 = Form$lambda_0(this);
    }
    tmp_7.jsonFactory_1 = tmp_8;
  }
  protoOf(Form).get_modelFactory_ftdg5y_k$ = function () {
    return this.modelFactory_1;
  };
  protoOf(Form).get_fields_dbuqbm_k$ = function () {
    return this.fields_1;
  };
  protoOf(Form).get_fieldsParams_t29tvn_k$ = function () {
    return this.fieldsParams_1;
  };
  protoOf(Form).set_validatorMessage_wesiov_k$ = function (_set____db54di) {
    this.validatorMessage_1 = _set____db54di;
  };
  protoOf(Form).get_validatorMessage_si5bv1_k$ = function () {
    return this.validatorMessage_1;
  };
  protoOf(Form).set_validator_lhw33b_k$ = function (_set____db54di) {
    this.validator_1 = _set____db54di;
  };
  protoOf(Form).get_validator_oe0chq_k$ = function () {
    return this.validator_1;
  };
  protoOf(Form).add_chia0b_k$ = function (key, control, required, requiredMessage, validatorMessage, validator) {
    // Inline function 'kotlin.collections.set' call
    this.fields_1.put_4fpzoq_k$(key, control);
    var tmp3 = this.fieldsParams_1;
    // Inline function 'kotlin.collections.set' call
    var value = new FieldParams(required, requiredMessage, validatorMessage, validator);
    tmp3.put_4fpzoq_k$(key, value);
  };
  protoOf(Form).add$default_gkbyb0_k$ = function (key, control, required, requiredMessage, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_chia0b_k$(key, control, required, requiredMessage, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_chia0b_k$.call(this, key, control, required, requiredMessage, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(Form).add_s5y4va_k$ = function (key, control, required, requiredMessage, validatorMessage, validator) {
    this.add_chia0b_k$(key.callableName, control, required, requiredMessage, validatorMessage, validator);
  };
  protoOf(Form).add$default_yxs5hd_k$ = function (key, control, required, requiredMessage, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_s5y4va_k$(key, control, required, requiredMessage, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_s5y4va_k$.call(this, key, control, required, requiredMessage, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(Form).addCustom_l1jtge_k$ = function (key, control, required, requiredMessage, validatorMessage, validator) {
    this.add_chia0b_k$(key.callableName, control, required, requiredMessage, validatorMessage, validator);
  };
  protoOf(Form).addCustom$default_6qic2n_k$ = function (key, control, required, requiredMessage, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.addCustom_l1jtge_k$(key, control, required, requiredMessage, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addCustom_l1jtge_k$.call(this, key, control, required, requiredMessage, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(Form).add_m02o4t_k$ = function (key, control, required, requiredMessage, validatorMessage, validator) {
    this.add_chia0b_k$(key.callableName, control, required, requiredMessage, validatorMessage, validator);
  };
  protoOf(Form).add$default_1me784_k$ = function (key, control, required, requiredMessage, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_m02o4t_k$(key, control, required, requiredMessage, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_m02o4t_k$.call(this, key, control, required, requiredMessage, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(Form).add_5zrrfx_k$ = function (key, control, required, requiredMessage, validatorMessage, validator) {
    this.add_chia0b_k$(key.callableName, control, required, requiredMessage, validatorMessage, validator);
  };
  protoOf(Form).add$default_y2v8k4_k$ = function (key, control, required, requiredMessage, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_5zrrfx_k$(key, control, required, requiredMessage, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_5zrrfx_k$.call(this, key, control, required, requiredMessage, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(Form).add_d6r0yl_k$ = function (key, control, required, requiredMessage, validatorMessage, validator) {
    this.add_chia0b_k$(key.callableName, control, required, requiredMessage, validatorMessage, validator);
  };
  protoOf(Form).add$default_rvf07c_k$ = function (key, control, required, requiredMessage, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_d6r0yl_k$(key, control, required, requiredMessage, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_d6r0yl_k$.call(this, key, control, required, requiredMessage, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(Form).add_xmyjpk_k$ = function (key, control, required, requiredMessage, validatorMessage, validator) {
    this.add_chia0b_k$(key.callableName, control, required, requiredMessage, validatorMessage, validator);
  };
  protoOf(Form).add$default_bc0zyh_k$ = function (key, control, required, requiredMessage, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_xmyjpk_k$(key, control, required, requiredMessage, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_xmyjpk_k$.call(this, key, control, required, requiredMessage, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(Form).add_3wiq3a_k$ = function (key, control, required, requiredMessage, validatorMessage, validator) {
    this.add_chia0b_k$(key.callableName, control, required, requiredMessage, validatorMessage, validator);
  };
  protoOf(Form).add$default_bdtp6t_k$ = function (key, control, required, requiredMessage, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_3wiq3a_k$(key, control, required, requiredMessage, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_3wiq3a_k$.call(this, key, control, required, requiredMessage, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(Form).remove_faolt4_k$ = function (key) {
    this.fields_1.remove_gppy8k_k$(key.callableName);
  };
  protoOf(Form).remove_6241ba_k$ = function (key) {
    this.fields_1.remove_gppy8k_k$(key);
  };
  protoOf(Form).removeAll_c84dd9_k$ = function () {
    this.fields_1.clear_j9egeb_k$();
  };
  protoOf(Form).getControl_3gz93v_k$ = function (key) {
    return this.fields_1.get_wei43m_k$(key.callableName);
  };
  protoOf(Form).getControl_2hhasz_k$ = function (key) {
    return this.fields_1.get_wei43m_k$(key);
  };
  protoOf(Form).getFirstControl_tpbqpp_k$ = function () {
    var tmp0 = this.fields_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.form.Form.getFirstControl.<anonymous>' call
        var result = element.get_value_j01efc_k$();
        if (!(result == null)) {
          tmp$ret$2 = result;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    return tmp$ret$2;
  };
  protoOf(Form).get_we1ady_k$ = function (key) {
    var tmp0_safe_receiver = this.getControl_3gz93v_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getValue_wjkqt7_k$();
  };
  protoOf(Form).get_6bo4tg_k$ = function (key) {
    var tmp0_safe_receiver = this.getControl_2hhasz_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getValue_wjkqt7_k$();
  };
  protoOf(Form).setData_rkuapn_k$ = function (model) {
    this.dataMap_1.clear_j9egeb_k$();
    if (!(this.jsonFactory_1 == null)) {
      var json = this.jsonFactory_1(model);
      // Inline function 'kotlin.js.unsafeCast' call
      var keys = Object.keys(json);
      var inductionVariable = 0;
      var last = keys.length;
      while (inductionVariable < last) {
        var key = keys[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var jsonValue = json[key];
        if (jsonValue != null) {
          var formField = this.fields_1.get_wei43m_k$(key);
          if (!(formField == null) ? isInterface(formField, DateFormControl) : false) {
            // Inline function 'kotlin.js.unsafeCast' call
            formField.set_value_v1vabv_k$(toDateF(jsonValue));
          } else {
            if (!(formField == null) ? isInterface(formField, KFilesFormControl) : false) {
              formField.set_value_v1vabv_k$(Serialization_getInstance().get_plain_iwxfa9_k$().decodeFromString_jwu9sq_k$(ListSerializer(Companion_getInstance().serializer_9w0wvi_k$()), JSON.stringify(jsonValue)));
            } else {
              if (!(formField == null)) {
                formField.setValue_caf2zk_k$(jsonValue);
              } else {
                // Inline function 'kotlin.collections.set' call
                this.dataMap_1.put_4fpzoq_k$(key, jsonValue);
              }
            }
          }
        } else {
          var tmp0_safe_receiver = this.fields_1.get_wei43m_k$(key);
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.setValue_caf2zk_k$(null);
          }
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this.fields_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.form.Form.setData.<anonymous>' call
        if (!contains(keys, element.get_key_18j28a_k$())) {
          element.get_value_j01efc_k$().setValue_caf2zk_k$(null);
        }
      }
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var map = model;
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'io.kvision.form.Form.setData.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var key_0 = element_0.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = element_0.get_value_j01efc_k$();
        if (!(value == null)) {
          var formField_0 = this.fields_1.get_wei43m_k$(key_0);
          if (!(formField_0 == null)) {
            formField_0.setValue_caf2zk_k$(value);
          } else {
            // Inline function 'kotlin.collections.set' call
            this.dataMap_1.put_4fpzoq_k$(key_0, value);
          }
        } else {
          var tmp0_safe_receiver_0 = this.fields_1.get_wei43m_k$(key_0);
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.setValue_caf2zk_k$(null);
          }
        }
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = this.fields_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
        // Inline function 'io.kvision.form.Form.setData.<anonymous>' call
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var key_1 = element_1.get_key_18j28a_k$();
        if (!(isInterface(map, KtMap) ? map : THROW_CCE()).containsKey_aw81wo_k$(key_1)) {
          element_1.get_value_j01efc_k$().setValue_caf2zk_k$(null);
        }
      }
    }
  };
  protoOf(Form).clearData_20qzi1_k$ = function () {
    this.dataMap_1.clear_j9egeb_k$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.fields_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.form.Form.clearData.<anonymous>' call
      element.get_value_j01efc_k$().setValue_caf2zk_k$(null);
    }
  };
  protoOf(Form).getData_190hy8_k$ = function () {
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = this.fields_1.get_entries_p20ztl_k$();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.form.Form.getData.<anonymous>' call
      var tmp = element.get_key_18j28a_k$();
      // Inline function 'io.kvision.form.Form.getData.<anonymous>' call
      var tmp$ret$1 = element.get_value_j01efc_k$().getValue_wjkqt7_k$();
      destination.put_4fpzoq_k$(tmp, tmp$ret$1);
    }
    var map = plus(this.dataMap_1, destination);
    var tmp0_safe_receiver = this.modelFactory_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = tmp0_safe_receiver(withDefault(map, Form$getData$lambda));
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = map;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  };
  protoOf(Form).getDataJson_72zye0_k$ = function () {
    var tmp;
    if (!(this.serializer_1 == null)) {
      tmp = JSON.parse(ensureNotNull(this.JsonInstance_1).encodeToString_k0apqx_k$(this.serializer_1, this.getData_190hy8_k$()));
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.getData_190hy8_k$();
      tmp = asJson(tmp$ret$1);
    }
    return tmp;
  };
  protoOf(Form).validate_drw3ap_k$ = function (markFields) {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = this.fieldsParams_1;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'io.kvision.form.Form.validate.<anonymous>' call
      var tmp0_safe_receiver = this.fields_1.get_wei43m_k$(element.get_key_18j28a_k$());
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.form.Form.validate.<anonymous>.<anonymous>' call
        var tmp_0 = element.get_value_j01efc_k$();
        var fieldsParams = tmp_0 instanceof FieldParams ? tmp_0 : null;
        var tmp1_elvis_lhs = fieldsParams == null ? null : fieldsParams.required_1;
        var required = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        var requiredError = tmp0_safe_receiver.getValue_wjkqt7_k$() == null && tmp0_safe_receiver.get_visible_8zfvk9_k$() && required;
        var tmp_1;
        if (requiredError) {
          if (markFields) {
            var tmp_2 = I18n_getInstance();
            var tmp3_elvis_lhs = tmp_2.trans_netp7j_k$(fieldsParams == null ? null : fieldsParams.requiredMessage_1);
            tmp0_safe_receiver.set_validatorError_mn8p6k_k$(tmp3_elvis_lhs == null ? 'Value is required' : tmp3_elvis_lhs);
          }
          tmp_1 = true;
        } else {
          var tmp_3;
          if (!tmp0_safe_receiver.get_visible_8zfvk9_k$()) {
            tmp_3 = true;
          } else {
            var tmp5_safe_receiver = fieldsParams == null ? null : fieldsParams.validator_1;
            var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver(tmp0_safe_receiver);
            tmp_3 = tmp6_elvis_lhs == null ? true : tmp6_elvis_lhs;
          }
          var validatorPassed = tmp_3;
          if (markFields) {
            var tmp_4;
            if (!validatorPassed) {
              var tmp_5 = I18n_getInstance();
              var tmp8_safe_receiver = fieldsParams == null ? null : fieldsParams.validatorMessage_1;
              var tmp9_elvis_lhs = tmp_5.trans_netp7j_k$(tmp8_safe_receiver == null ? null : tmp8_safe_receiver(tmp0_safe_receiver));
              tmp_4 = tmp9_elvis_lhs == null ? 'Invalid value' : tmp9_elvis_lhs;
            } else {
              tmp_4 = null;
            }
            tmp0_safe_receiver.set_validatorError_mn8p6k_k$(tmp_4);
          }
          tmp_1 = !validatorPassed;
        }
        tmp = tmp_1;
      }
      var tmp0_safe_receiver_0 = tmp;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.add_utx5q5_k$(tmp0_safe_receiver_0);
      }
    }
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'io.kvision.form.Form.validate.<anonymous>' call
        if (element_0) {
          tmp$ret$8 = element_0;
          break $l$block;
        }
      }
      tmp$ret$8 = null;
    }
    var fieldWithError = tmp$ret$8;
    var tmp0_safe_receiver_1 = this.validator_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1(this);
    var validatorPassed_0 = tmp1_elvis_lhs_0 == null ? true : tmp1_elvis_lhs_0;
    var tmp2_safe_receiver = this.panel_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp_6;
      if (!validatorPassed_0) {
        var tmp_7 = I18n_getInstance();
        var tmp3_safe_receiver = this.validatorMessage_1;
        var tmp4_elvis_lhs = tmp_7.trans_netp7j_k$(tmp3_safe_receiver == null ? null : tmp3_safe_receiver(this));
        tmp_6 = tmp4_elvis_lhs == null ? 'Invalid form data' : tmp4_elvis_lhs;
      } else {
        tmp_6 = null;
      }
      tmp2_safe_receiver.set_validatorError_n6rur3_k$(tmp_6);
    }
    return fieldWithError == null && validatorPassed_0;
  };
  protoOf(Form).validate$default_yyh8d3_k$ = function (markFields, $super) {
    markFields = markFields === VOID ? true : markFields;
    return $super === VOID ? this.validate_drw3ap_k$(markFields) : $super.validate_drw3ap_k$.call(this, markFields);
  };
  protoOf(Form).validate_gljfin_k$ = function (key, markField) {
    return this.validate_pojtkv_k$(key.callableName, markField);
  };
  protoOf(Form).validate$default_w99bwj_k$ = function (key, markField, $super) {
    markField = markField === VOID ? true : markField;
    return $super === VOID ? this.validate_gljfin_k$(key, markField) : $super.validate_gljfin_k$.call(this, key, markField);
  };
  protoOf(Form).validate_pojtkv_k$ = function (key, markField) {
    var control = this.fields_1.get_wei43m_k$(key);
    var tmp = this.fieldsParams_1.get_wei43m_k$(key);
    var fieldParams = tmp instanceof FieldParams ? tmp : null;
    var tmp_0;
    if (!(control == null) && !(fieldParams == null)) {
      var required = fieldParams.required_1;
      var requiredError = control.getValue_wjkqt7_k$() == null && control.get_visible_8zfvk9_k$() && required;
      var tmp_1;
      if (requiredError) {
        if (markField) {
          var tmp0_elvis_lhs = I18n_getInstance().trans_netp7j_k$(fieldParams.requiredMessage_1);
          control.set_validatorError_mn8p6k_k$(tmp0_elvis_lhs == null ? 'Value is required' : tmp0_elvis_lhs);
        }
        tmp_1 = false;
      } else {
        var tmp_2;
        if (!control.get_visible_8zfvk9_k$()) {
          tmp_2 = true;
        } else {
          var tmp1_safe_receiver = fieldParams.validator_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(control);
          tmp_2 = tmp2_elvis_lhs == null ? true : tmp2_elvis_lhs;
        }
        var validatorPassed = tmp_2;
        if (markField) {
          var tmp_3;
          if (!validatorPassed) {
            var tmp_4 = I18n_getInstance();
            var tmp3_safe_receiver = fieldParams.validatorMessage_1;
            var tmp4_elvis_lhs = tmp_4.trans_netp7j_k$(tmp3_safe_receiver == null ? null : tmp3_safe_receiver(control));
            tmp_3 = tmp4_elvis_lhs == null ? 'Invalid value' : tmp4_elvis_lhs;
          } else {
            tmp_3 = null;
          }
          control.set_validatorError_mn8p6k_k$(tmp_3);
        }
        tmp_1 = validatorPassed;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(Form).validate$default_inub05_k$ = function (key, markField, $super) {
    markField = markField === VOID ? true : markField;
    return $super === VOID ? this.validate_pojtkv_k$(key, markField) : $super.validate_pojtkv_k$.call(this, key, markField);
  };
  protoOf(Form).clearValidation_10m85y_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.fieldsParams_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.form.Form.clearValidation.<anonymous>' call
      var tmp0_safe_receiver = this.fields_1.get_wei43m_k$(element.get_key_18j28a_k$());
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.form.Form.clearValidation.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.set_validatorError_mn8p6k_k$(null);
      }
    }
    var tmp0_safe_receiver_0 = this.panel_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.set_validatorError_n6rur3_k$(null);
    }
  };
  function FieldParams(required, requiredMessage, validatorMessage, validator) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    this.required_1 = required;
    this.requiredMessage_1 = requiredMessage;
    this.validatorMessage_1 = validatorMessage;
    this.validator_1 = validator;
  }
  protoOf(FieldParams).get_required_wq3z3c_k$ = function () {
    return this.required_1;
  };
  protoOf(FieldParams).get_requiredMessage_1efdkv_k$ = function () {
    return this.requiredMessage_1;
  };
  protoOf(FieldParams).get_validatorMessage_hvlmua_k$ = function () {
    return this.validatorMessage_1;
  };
  protoOf(FieldParams).get_validator_9u7pef_k$ = function () {
    return this.validator_1;
  };
  protoOf(FieldParams).component1_7eebsc_k$ = function () {
    return this.required_1;
  };
  protoOf(FieldParams).component2_7eebsb_k$ = function () {
    return this.requiredMessage_1;
  };
  protoOf(FieldParams).component3_7eebsa_k$ = function () {
    return this.validatorMessage_1;
  };
  protoOf(FieldParams).component4_7eebs9_k$ = function () {
    return this.validator_1;
  };
  protoOf(FieldParams).copy_b2bqk2_k$ = function (required, requiredMessage, validatorMessage, validator) {
    return new FieldParams(required, requiredMessage, validatorMessage, validator);
  };
  protoOf(FieldParams).copy$default_qr890q_k$ = function (required, requiredMessage, validatorMessage, validator, $super) {
    required = required === VOID ? this.required_1 : required;
    requiredMessage = requiredMessage === VOID ? this.requiredMessage_1 : requiredMessage;
    validatorMessage = validatorMessage === VOID ? this.validatorMessage_1 : validatorMessage;
    validator = validator === VOID ? this.validator_1 : validator;
    return $super === VOID ? this.copy_b2bqk2_k$(required, requiredMessage, validatorMessage, validator) : $super.copy_b2bqk2_k$.call(this, required, requiredMessage, validatorMessage, validator);
  };
  protoOf(FieldParams).toString = function () {
    return 'FieldParams(required=' + this.required_1 + ', requiredMessage=' + this.requiredMessage_1 + ', validatorMessage=' + toString_1(this.validatorMessage_1) + ', validator=' + toString_1(this.validator_1) + ')';
  };
  protoOf(FieldParams).hashCode = function () {
    var result = getBooleanHashCode(this.required_1);
    result = imul(result, 31) + (this.requiredMessage_1 == null ? 0 : getStringHashCode(this.requiredMessage_1)) | 0;
    result = imul(result, 31) + (this.validatorMessage_1 == null ? 0 : hashCode(this.validatorMessage_1)) | 0;
    result = imul(result, 31) + (this.validator_1 == null ? 0 : hashCode(this.validator_1)) | 0;
    return result;
  };
  protoOf(FieldParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FieldParams))
      return false;
    var tmp0_other_with_cast = other instanceof FieldParams ? other : THROW_CCE();
    if (!(this.required_1 === tmp0_other_with_cast.required_1))
      return false;
    if (!(this.requiredMessage_1 == tmp0_other_with_cast.requiredMessage_1))
      return false;
    if (!equals(this.validatorMessage_1, tmp0_other_with_cast.validatorMessage_1))
      return false;
    if (!equals(this.validator_1, tmp0_other_with_cast.validator_1))
      return false;
    return true;
  };
  function asJson(_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.get_entries_p20ztl_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.form.asJson.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var tmp = item.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var tmp$ret$1 = item.get_value_j01efc_k$();
      var tmp$ret$2 = to(tmp, tmp$ret$1);
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var array = copyToArray(destination);
    return json(array.slice());
  }
  function BoolFormControl() {
  }
  function FormControl() {
  }
  function FormInput() {
  }
  function StringFormControl() {
  }
  function KFilesFormControl$getValueAsString$lambda(it) {
    return it.get_name_woqyms_k$();
  }
  function KFilesFormControl() {
  }
  function NumberFormControl() {
  }
  var ValidationStatus_VALID_instance;
  var ValidationStatus_INVALID_instance;
  function values_41() {
    return [ValidationStatus_VALID_getInstance(), ValidationStatus_INVALID_getInstance()];
  }
  function valueOf_41(value) {
    switch (value) {
      case 'VALID':
        return ValidationStatus_VALID_getInstance();
      case 'INVALID':
        return ValidationStatus_INVALID_getInstance();
      default:
        ValidationStatus_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_41() {
    if ($ENTRIES_41 == null)
      $ENTRIES_41 = enumEntries(values_41());
    return $ENTRIES_41;
  }
  var ValidationStatus_entriesInitialized;
  function ValidationStatus_initEntries() {
    if (ValidationStatus_entriesInitialized)
      return Unit_getInstance();
    ValidationStatus_entriesInitialized = true;
    ValidationStatus_VALID_instance = new ValidationStatus('VALID', 0, 'is-valid');
    ValidationStatus_INVALID_instance = new ValidationStatus('INVALID', 1, 'is-invalid');
  }
  var $ENTRIES_41;
  function ValidationStatus(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(ValidationStatus).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function GenericNonNullableFormControl() {
  }
  var InputSize_LARGE_instance;
  var InputSize_SMALL_instance;
  function values_42() {
    return [InputSize_LARGE_getInstance(), InputSize_SMALL_getInstance()];
  }
  function valueOf_42(value) {
    switch (value) {
      case 'LARGE':
        return InputSize_LARGE_getInstance();
      case 'SMALL':
        return InputSize_SMALL_getInstance();
      default:
        InputSize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_42() {
    if ($ENTRIES_42 == null)
      $ENTRIES_42 = enumEntries(values_42());
    return $ENTRIES_42;
  }
  var InputSize_entriesInitialized;
  function InputSize_initEntries() {
    if (InputSize_entriesInitialized)
      return Unit_getInstance();
    InputSize_entriesInitialized = true;
    InputSize_LARGE_instance = new InputSize('LARGE', 0, 'form-control-lg');
    InputSize_SMALL_instance = new InputSize('SMALL', 1, 'form-control-sm');
  }
  var $ENTRIES_42;
  function InputSize(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(InputSize).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function DateFormControl() {
  }
  function GenericFormControl() {
  }
  function TriStateFormControl() {
  }
  function GenericFormComponent() {
  }
  function ValidationStatus_VALID_getInstance() {
    ValidationStatus_initEntries();
    return ValidationStatus_VALID_instance;
  }
  function ValidationStatus_INVALID_getInstance() {
    ValidationStatus_initEntries();
    return ValidationStatus_INVALID_instance;
  }
  function InputSize_LARGE_getInstance() {
    InputSize_initEntries();
    return InputSize_LARGE_instance;
  }
  function InputSize_SMALL_getInstance() {
    InputSize_initEntries();
    return InputSize_SMALL_instance;
  }
  function _get_type__deia8h_0($this) {
    return $this.type_1;
  }
  function _set_currentFieldset__312dcs($this, _set____db54di) {
    $this.currentFieldset_1 = _set____db54di;
  }
  function _get_currentFieldset__72nu5s($this) {
    return $this.currentFieldset_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function FormPanel$method$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$action$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$enctype$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$name$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$target$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$novalidate$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$autocomplete$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$condensed$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$horizRatio$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$add$lambda($control) {
    return function ($this$FieldsetPanel) {
      $this$FieldsetPanel.add_rekwpt_k$($control);
      return Unit_getInstance();
    };
  }
  function FormPanel$setData$lambda(this$0, $model) {
    return function () {
      this$0.form_1.setData_rkuapn_k$($model);
      return Unit_getInstance();
    };
  }
  function FormPanel$clearData$lambda(this$0) {
    return function () {
      this$0.form_1.clearData_20qzi1_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel$validate$lambda(this$0, $markFields) {
    return function () {
      return this$0.form_1.validate_drw3ap_k$($markFields);
    };
  }
  function FormPanel$validate$lambda_0(this$0, $key, $markField) {
    return function () {
      return this$0.form_1.validate_pojtkv_k$($key, $markField);
    };
  }
  function FormPanel$clearValidation$lambda(this$0) {
    return function () {
      this$0.form_1.clearValidation_10m85y_k$();
      return Unit_getInstance();
    };
  }
  function FormPanel(method, action, enctype, type, condensed, horizRatio, className, serializer, customSerializers) {
    Companion_getInstance_4();
    method = method === VOID ? null : method;
    action = action === VOID ? null : action;
    enctype = enctype === VOID ? null : enctype;
    type = type === VOID ? null : type;
    condensed = condensed === VOID ? false : condensed;
    horizRatio = horizRatio === VOID ? FormHorizontalRatio_RATIO_2_getInstance() : horizRatio;
    className = className === VOID ? null : className;
    serializer = serializer === VOID ? null : serializer;
    customSerializers = customSerializers === VOID ? null : customSerializers;
    SimplePanel.call(this, className);
    this.type_1 = type;
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = FormPanel$method$delegate$lambda(this);
    tmp.method$delegate_1 = (new RefreshDelegateProvider_0(this, method, refreshFunction)).provideDelegate_z62loi_k$(this, method$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = FormPanel$action$delegate$lambda(this);
    tmp_0.action$delegate_1 = (new RefreshDelegateProvider_0(this, action, refreshFunction_0)).provideDelegate_z62loi_k$(this, action$factory());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = FormPanel$enctype$delegate$lambda(this);
    tmp_1.enctype$delegate_1 = (new RefreshDelegateProvider_0(this, enctype, refreshFunction_1)).provideDelegate_z62loi_k$(this, enctype$factory());
    var tmp_2 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_2 = FormPanel$name$delegate$lambda(this);
    tmp_2.name$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_2);
    var tmp_3 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_3 = FormPanel$target$delegate$lambda(this);
    tmp_3.target$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_3);
    var tmp_4 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_4 = FormPanel$novalidate$delegate$lambda(this);
    tmp_4.novalidate$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_4);
    var tmp_5 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_5 = FormPanel$autocomplete$delegate$lambda(this);
    tmp_5.autocomplete$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_5);
    var tmp_6 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_6 = FormPanel$condensed$delegate$lambda(this);
    tmp_6.condensed$delegate_1 = (new RefreshDelegateProvider_0(this, condensed, refreshFunction_6)).provideDelegate_z62loi_k$(this, condensed$factory());
    var tmp_7 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_7 = FormPanel$horizRatio$delegate$lambda(this);
    tmp_7.horizRatio$delegate_1 = (new RefreshDelegateProvider_0(this, horizRatio, refreshFunction_7)).provideDelegate_z62loi_k$(this, horizRatio$factory());
    this.form_1 = new Form(this, serializer, customSerializers);
    var tmp_8 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new Div(VOID, VOID, VOID, 'alert alert-danger');
    // Inline function 'io.kvision.form.FormPanel.validationAlert.<anonymous>' call
    this_0.set_role_ghksys_k$('alert');
    this_0.set_visible_w9mvj4_k$(false);
    tmp_8.validationAlert_1 = this_0;
    this.currentFieldset_1 = null;
    this.addPrivate_g3v94y_k$(this.validationAlert_1);
  }
  protoOf(FormPanel).set_method_a5ie7s_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.method$delegate_1, this, method$factory_0(), _set____db54di);
  };
  protoOf(FormPanel).get_method_gl8esq_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.method$delegate_1, this, method$factory_1());
  };
  protoOf(FormPanel).set_action_goi58_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.action$delegate_1, this, action$factory_0(), _set____db54di);
  };
  protoOf(FormPanel).get_action_avldmn_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.action$delegate_1, this, action$factory_1());
  };
  protoOf(FormPanel).set_enctype_qkddeg_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.enctype$delegate_1, this, enctype$factory_0(), _set____db54di);
  };
  protoOf(FormPanel).get_enctype_pbbvth_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.enctype$delegate_1, this, enctype$factory_1());
  };
  protoOf(FormPanel).set_name_wkmnld_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.name$delegate_1, this, name$factory(), _set____db54di);
  };
  protoOf(FormPanel).get_name_woqyms_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.name$delegate_1, this, name$factory_0());
  };
  protoOf(FormPanel).set_target_9eq888_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.target$delegate_1, this, target$factory(), _set____db54di);
  };
  protoOf(FormPanel).get_target_juba8q_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.target$delegate_1, this, target$factory_0());
  };
  protoOf(FormPanel).set_novalidate_q6ozjo_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.novalidate$delegate_1, this, novalidate$factory(), _set____db54di);
  };
  protoOf(FormPanel).get_novalidate_pkvrmo_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.novalidate$delegate_1, this, novalidate$factory_0());
  };
  protoOf(FormPanel).set_autocomplete_vb1zln_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.autocomplete$delegate_1, this, autocomplete$factory(), _set____db54di);
  };
  protoOf(FormPanel).get_autocomplete_9bbtn3_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.autocomplete$delegate_1, this, autocomplete$factory_0());
  };
  protoOf(FormPanel).set_condensed_81w2ut_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.condensed$delegate_1, this, condensed$factory_0(), _set____db54di);
  };
  protoOf(FormPanel).get_condensed_5skwaq_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.condensed$delegate_1, this, condensed$factory_1());
  };
  protoOf(FormPanel).set_horizRatio_49u9mg_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.horizRatio$delegate_1, this, horizRatio$factory_0(), _set____db54di);
  };
  protoOf(FormPanel).get_horizRatio_2bqbeg_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.horizRatio$delegate_1, this, horizRatio$factory_1());
  };
  protoOf(FormPanel).set_validatorMessage_5jqii2_k$ = function (value) {
    this.form_1.set_validatorMessage_wesiov_k$(value);
  };
  protoOf(FormPanel).get_validatorMessage_hvlmua_k$ = function () {
    return this.form_1.get_validatorMessage_si5bv1_k$();
  };
  protoOf(FormPanel).set_validator_va4epo_k$ = function (value) {
    this.form_1.set_validator_lhw33b_k$(value);
  };
  protoOf(FormPanel).get_validator_9u7pef_k$ = function () {
    return this.form_1.get_validator_oe0chq_k$();
  };
  protoOf(FormPanel).set_validatorError_n6rur3_k$ = function (value) {
    this.validationAlert_1.set_content_i5lrjv_k$(value);
    this.validationAlert_1.set_visible_w9mvj4_k$(!(value == null));
    this.refresh_6a3uvf_k$();
  };
  protoOf(FormPanel).get_validatorError_d9q45o_k$ = function () {
    return this.validationAlert_1.get_content_h02jrk_k$();
  };
  protoOf(FormPanel).get_form_wom58t_k$ = function () {
    return this.form_1;
  };
  protoOf(FormPanel).get_validationAlert_wx27ba_k$ = function () {
    return this.validationAlert_1;
  };
  protoOf(FormPanel).render_fgfjvu_k$ = function () {
    return this.render_prnnht_k$('form', this.childrenVNodes_2corie_k$());
  };
  protoOf(FormPanel).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    if (!(this.type_1 == null)) {
      classSetBuilder.add_udnk2x_k$(this.type_1.formType_1);
      if (equals(this.type_1, FormType_HORIZONTAL_getInstance())) {
        classSetBuilder.add_udnk2x_k$('container-fluid');
      }
    }
    if (this.get_condensed_5skwaq_k$()) {
      classSetBuilder.add_udnk2x_k$('kv-form-condensed');
    }
  };
  protoOf(FormPanel).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(SimplePanel).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    attributeSetBuilder.add_qyhf6x_k$(this.get_method_gl8esq_k$());
    var tmp0_safe_receiver = this.get_action_avldmn_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.FormPanel.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('action', tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.get_enctype_pbbvth_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.FormPanel.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('enctype', tmp1_safe_receiver.enctype_1);
    }
    var tmp2_safe_receiver = this.get_name_woqyms_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.FormPanel.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('name', tmp2_safe_receiver);
    }
    attributeSetBuilder.add_qyhf6x_k$(this.get_target_juba8q_k$());
    if (this.get_autocomplete_9bbtn3_k$() === false) {
      attributeSetBuilder.add_lbri6p_k$('autocomplete', 'off');
    }
    if (this.get_novalidate_pkvrmo_k$() === true) {
      attributeSetBuilder.add$default_4n2esg_k$('novalidate');
    }
  };
  protoOf(FormPanel).add_2iwp1g_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator) {
    var tmp0_subject = this.type_1;
    switch (tmp0_subject == null ? -1 : tmp0_subject.get_ordinal_ip24qg_k$()) {
      case 0:
        control.styleForInlineFormPanel_1ffnb3_k$();
        break;
      case 1:
        control.styleForHorizontalFormPanel_9yitfk_k$(this.get_horizRatio_2bqbeg_k$());
        break;
      default:
        control.styleForVerticalFormPanel_h0pd36_k$();
        break;
    }
    if (required) {
      control.get_flabel_ddfcrb_k$().addCssClass_ul13bg_k$('required-label');
    }
    if (legend == null) {
      protoOf(SimplePanel).add_rekwpt_k$.call(this, control);
    } else {
      var tmp;
      if (this.currentFieldset_1 == null) {
        tmp = true;
      } else {
        var tmp1_safe_receiver = this.currentFieldset_1;
        tmp = !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_legend_g3yfbq_k$()) == legend);
      }
      if (tmp) {
        var tmp_0 = this;
        tmp_0.currentFieldset_1 = new FieldsetPanel(legend, VOID, FormPanel$add$lambda(control));
        protoOf(SimplePanel).add_rekwpt_k$.call(this, ensureNotNull(this.currentFieldset_1));
      } else {
        var tmp2_safe_receiver = this.currentFieldset_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.add_rekwpt_k$(control);
        }
      }
    }
    this.form_1.add_chia0b_k$(key, control, required, requiredMessage, validatorMessage, validator);
  };
  protoOf(FormPanel).add$default_5vi13j_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    legend = legend === VOID ? null : legend;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_2iwp1g_k$(key, control, required, requiredMessage, legend, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_2iwp1g_k$.call(this, key, control, required, requiredMessage, legend, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(FormPanel).add_rekwpt_k$ = function (child) {
    if (isInterface(child, FormControl)) {
      var tmp0_subject = this.type_1;
      switch (tmp0_subject == null ? -1 : tmp0_subject.get_ordinal_ip24qg_k$()) {
        case 0:
          child.styleForInlineFormPanel_1ffnb3_k$();
          break;
        case 1:
          child.styleForHorizontalFormPanel_9yitfk_k$(this.get_horizRatio_2bqbeg_k$());
          break;
        default:
          child.styleForVerticalFormPanel_h0pd36_k$();
          break;
      }
    }
    protoOf(SimplePanel).add_rekwpt_k$.call(this, child);
  };
  protoOf(FormPanel).add_fueoqp_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator) {
    this.add_2iwp1g_k$(key.callableName, control, required, requiredMessage, legend, validatorMessage, validator);
  };
  protoOf(FormPanel).add$default_nrpp98_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    legend = legend === VOID ? null : legend;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_fueoqp_k$(key, control, required, requiredMessage, legend, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_fueoqp_k$.call(this, key, control, required, requiredMessage, legend, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(FormPanel).addCustom_bac5c9_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator) {
    this.add_2iwp1g_k$(key.callableName, control, required, requiredMessage, legend, validatorMessage, validator);
  };
  protoOf(FormPanel).addCustom$default_fnkfum_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    legend = legend === VOID ? null : legend;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.addCustom_bac5c9_k$(key, control, required, requiredMessage, legend, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.addCustom_bac5c9_k$.call(this, key, control, required, requiredMessage, legend, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(FormPanel).add_8272ek_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator) {
    this.add_2iwp1g_k$(key.callableName, control, required, requiredMessage, legend, validatorMessage, validator);
  };
  protoOf(FormPanel).add$default_9g081j_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    legend = legend === VOID ? null : legend;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_8272ek_k$(key, control, required, requiredMessage, legend, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_8272ek_k$.call(this, key, control, required, requiredMessage, legend, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(FormPanel).add_7rs8pg_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator) {
    this.add_2iwp1g_k$(key.callableName, control, required, requiredMessage, legend, validatorMessage, validator);
  };
  protoOf(FormPanel).add$default_skklh3_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    legend = legend === VOID ? null : legend;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_7rs8pg_k$(key, control, required, requiredMessage, legend, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_7rs8pg_k$.call(this, key, control, required, requiredMessage, legend, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(FormPanel).add_2thut2_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator) {
    this.add_2iwp1g_k$(key.callableName, control, required, requiredMessage, legend, validatorMessage, validator);
  };
  protoOf(FormPanel).add$default_ya5fbv_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    legend = legend === VOID ? null : legend;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_2thut2_k$(key, control, required, requiredMessage, legend, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_2thut2_k$.call(this, key, control, required, requiredMessage, legend, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(FormPanel).add_s9f1wh_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator) {
    this.add_2iwp1g_k$(key.callableName, control, required, requiredMessage, legend, validatorMessage, validator);
  };
  protoOf(FormPanel).add$default_4rfprg_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    legend = legend === VOID ? null : legend;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_s9f1wh_k$(key, control, required, requiredMessage, legend, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_s9f1wh_k$.call(this, key, control, required, requiredMessage, legend, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(FormPanel).add_scloqr_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator) {
    this.add_2iwp1g_k$(key.callableName, control, required, requiredMessage, legend, validatorMessage, validator);
  };
  protoOf(FormPanel).add$default_rwxfjc_k$ = function (key, control, required, requiredMessage, legend, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    legend = legend === VOID ? null : legend;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    var tmp;
    if ($super === VOID) {
      this.add_scloqr_k$(key, control, required, requiredMessage, legend, validatorMessage, validator);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_scloqr_k$.call(this, key, control, required, requiredMessage, legend, validatorMessage, validator);
    }
    return tmp;
  };
  protoOf(FormPanel).bind_y6n2bs_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) {
    var tmp1_subject = layoutType == null ? this.type_1 : layoutType;
    switch (tmp1_subject == null ? -1 : tmp1_subject.get_ordinal_ip24qg_k$()) {
      case 0:
        _this__u8e3s4.styleForInlineFormPanel_1ffnb3_k$();
        break;
      case 1:
        _this__u8e3s4.styleForHorizontalFormPanel_9yitfk_k$(this.get_horizRatio_2bqbeg_k$());
        break;
      default:
        _this__u8e3s4.styleForVerticalFormPanel_h0pd36_k$();
        break;
    }
    if (required) {
      _this__u8e3s4.get_flabel_ddfcrb_k$().addCssClass_ul13bg_k$('required-label');
    }
    this.form_1.add_chia0b_k$(key, _this__u8e3s4, required, requiredMessage, validatorMessage, validator);
    return _this__u8e3s4;
  };
  protoOf(FormPanel).bind$default_22ilj7_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    layoutType = layoutType === VOID ? null : layoutType;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    return $super === VOID ? this.bind_y6n2bs_k$(_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) : $super.bind_y6n2bs_k$.call(this, _this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind_3bum2x_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) {
    return this.bind_y6n2bs_k$(_this__u8e3s4, key.callableName, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind$default_hkdqdu_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    layoutType = layoutType === VOID ? null : layoutType;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    return $super === VOID ? this.bind_3bum2x_k$(_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) : $super.bind_3bum2x_k$.call(this, _this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bindCustom_6t78fd_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) {
    return this.bind_y6n2bs_k$(_this__u8e3s4, key.callableName, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bindCustom$default_pybjzo_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    layoutType = layoutType === VOID ? null : layoutType;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    return $super === VOID ? this.bindCustom_6t78fd_k$(_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) : $super.bindCustom_6t78fd_k$.call(this, _this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind_g9o4dw_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) {
    return this.bind_y6n2bs_k$(_this__u8e3s4, key.callableName, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind$default_s3ws6h_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    layoutType = layoutType === VOID ? null : layoutType;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    return $super === VOID ? this.bind_g9o4dw_k$(_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) : $super.bind_g9o4dw_k$.call(this, _this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind_o55n8_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) {
    return this.bind_y6n2bs_k$(_this__u8e3s4, key.callableName, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind$default_4y6wkf_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    layoutType = layoutType === VOID ? null : layoutType;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    return $super === VOID ? this.bind_o55n8_k$(_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) : $super.bind_o55n8_k$.call(this, _this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind_p1zn7k_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) {
    return this.bind_y6n2bs_k$(_this__u8e3s4, key.callableName, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind$default_wxc6cl_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    layoutType = layoutType === VOID ? null : layoutType;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    return $super === VOID ? this.bind_p1zn7k_k$(_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) : $super.bind_p1zn7k_k$.call(this, _this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind_zc4e7t_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) {
    return this.bind_y6n2bs_k$(_this__u8e3s4, key.callableName, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind$default_ayjy4_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    layoutType = layoutType === VOID ? null : layoutType;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    return $super === VOID ? this.bind_zc4e7t_k$(_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) : $super.bind_zc4e7t_k$.call(this, _this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind_7r10p9_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) {
    return this.bind_y6n2bs_k$(_this__u8e3s4, key.callableName, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).bind$default_ub7cz6_k$ = function (_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator, $super) {
    required = required === VOID ? false : required;
    requiredMessage = requiredMessage === VOID ? null : requiredMessage;
    layoutType = layoutType === VOID ? null : layoutType;
    validatorMessage = validatorMessage === VOID ? null : validatorMessage;
    validator = validator === VOID ? null : validator;
    return $super === VOID ? this.bind_7r10p9_k$(_this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator) : $super.bind_7r10p9_k$.call(this, _this__u8e3s4, key, required, requiredMessage, layoutType, validatorMessage, validator);
  };
  protoOf(FormPanel).remove_faolt4_k$ = function (key) {
    this.remove_6241ba_k$(key.callableName);
  };
  protoOf(FormPanel).remove_6241ba_k$ = function (key) {
    var tmp0_safe_receiver = this.form_1.getControl_2hhasz_k$(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.FormPanel.remove.<anonymous>' call
      var parent = tmp0_safe_receiver.get_parent_hy4reb_k$();
      if (parent instanceof FieldsetPanel) {
        parent.remove_j7k0x0_k$(tmp0_safe_receiver);
      } else {
        protoOf(SimplePanel).remove_j7k0x0_k$.call(this, tmp0_safe_receiver);
      }
    }
    this.form_1.remove_6241ba_k$(key);
  };
  protoOf(FormPanel).removeAll_c84dd9_k$ = function () {
    protoOf(SimplePanel).removeAll_c84dd9_k$.call(this);
    this.form_1.removeAll_c84dd9_k$();
  };
  protoOf(FormPanel).unbind_j9axoa_k$ = function (key) {
    this.unbind_9o07e4_k$(key.callableName);
  };
  protoOf(FormPanel).unbind_9o07e4_k$ = function (key) {
    this.form_1.remove_6241ba_k$(key);
  };
  protoOf(FormPanel).getControl_3gz93v_k$ = function (key) {
    return this.getControl_2hhasz_k$(key.callableName);
  };
  protoOf(FormPanel).getControl_2hhasz_k$ = function (key) {
    return this.form_1.getControl_2hhasz_k$(key);
  };
  protoOf(FormPanel).get_4000jw_k$ = function (key) {
    return this.get_kvdhjm_k$(key.callableName);
  };
  protoOf(FormPanel).get_kvdhjm_k$ = function (key) {
    var tmp0_safe_receiver = this.getControl_2hhasz_k$(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getValue_wjkqt7_k$();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  };
  protoOf(FormPanel).setData_rkuapn_k$ = function (model) {
    this.singleRender_ca7nu0_k$(FormPanel$setData$lambda(this, model));
  };
  protoOf(FormPanel).clearData_20qzi1_k$ = function () {
    this.singleRender_ca7nu0_k$(FormPanel$clearData$lambda(this));
  };
  protoOf(FormPanel).getData_190hy8_k$ = function () {
    return this.form_1.getData_190hy8_k$();
  };
  protoOf(FormPanel).getDataJson_72zye0_k$ = function () {
    return this.form_1.getDataJson_72zye0_k$();
  };
  protoOf(FormPanel).validate_drw3ap_k$ = function (markFields) {
    return this.singleRender_ca7nu0_k$(FormPanel$validate$lambda(this, markFields));
  };
  protoOf(FormPanel).validate$default_e8et1u_k$ = function (markFields, $super) {
    markFields = markFields === VOID ? true : markFields;
    return $super === VOID ? this.validate_drw3ap_k$(markFields) : $super.validate_drw3ap_k$.call(this, markFields);
  };
  protoOf(FormPanel).validate_gljfin_k$ = function (key, markField) {
    return this.validate_pojtkv_k$(key.callableName, markField);
  };
  protoOf(FormPanel).validate$default_8tuu60_k$ = function (key, markField, $super) {
    markField = markField === VOID ? true : markField;
    return $super === VOID ? this.validate_gljfin_k$(key, markField) : $super.validate_gljfin_k$.call(this, key, markField);
  };
  protoOf(FormPanel).validate_pojtkv_k$ = function (key, markField) {
    return this.singleRender_ca7nu0_k$(FormPanel$validate$lambda_0(this, key, markField));
  };
  protoOf(FormPanel).validate$default_a6ohbu_k$ = function (key, markField, $super) {
    markField = markField === VOID ? true : markField;
    return $super === VOID ? this.validate_pojtkv_k$(key, markField) : $super.validate_pojtkv_k$.call(this, key, markField);
  };
  protoOf(FormPanel).clearValidation_10m85y_k$ = function () {
    this.singleRender_ca7nu0_k$(FormPanel$clearValidation$lambda(this));
  };
  protoOf(FormPanel).submit_dyf39k_k$ = function () {
    var tmp = this.getElement_acounu_k$();
    var tmp0_safe_receiver = tmp instanceof HTMLFormElement ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.submit();
    }
  };
  protoOf(FormPanel).reset_5u6xz3_k$ = function () {
    var tmp = this.getElement_acounu_k$();
    var tmp0_safe_receiver = tmp instanceof HTMLFormElement ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.reset();
    }
  };
  protoOf(FormPanel).checkValidity_gffuqi_k$ = function () {
    var tmp = this.getElement_acounu_k$();
    var tmp0_safe_receiver = tmp instanceof HTMLFormElement ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.checkValidity();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(FormPanel).reportValidity_id6pom_k$ = function () {
    var tmp = this.getElement_acounu_k$();
    var tmp0_safe_receiver = tmp instanceof HTMLFormElement ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.reportValidity();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(FormPanel).focus_of07w8_k$ = function () {
    var tmp0_safe_receiver = this.form_1.getFirstControl_tpbqpp_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.focus_of07w8_k$();
    }
  };
  var FormHorizontalRatio_RATIO_2_instance;
  var FormHorizontalRatio_RATIO_3_instance;
  var FormHorizontalRatio_RATIO_4_instance;
  var FormHorizontalRatio_RATIO_5_instance;
  var FormHorizontalRatio_RATIO_6_instance;
  var FormHorizontalRatio_RATIO_7_instance;
  var FormHorizontalRatio_RATIO_8_instance;
  var FormHorizontalRatio_RATIO_9_instance;
  var FormHorizontalRatio_RATIO_10_instance;
  function values_43() {
    return [FormHorizontalRatio_RATIO_2_getInstance(), FormHorizontalRatio_RATIO_3_getInstance(), FormHorizontalRatio_RATIO_4_getInstance(), FormHorizontalRatio_RATIO_5_getInstance(), FormHorizontalRatio_RATIO_6_getInstance(), FormHorizontalRatio_RATIO_7_getInstance(), FormHorizontalRatio_RATIO_8_getInstance(), FormHorizontalRatio_RATIO_9_getInstance(), FormHorizontalRatio_RATIO_10_getInstance()];
  }
  function valueOf_43(value) {
    switch (value) {
      case 'RATIO_2':
        return FormHorizontalRatio_RATIO_2_getInstance();
      case 'RATIO_3':
        return FormHorizontalRatio_RATIO_3_getInstance();
      case 'RATIO_4':
        return FormHorizontalRatio_RATIO_4_getInstance();
      case 'RATIO_5':
        return FormHorizontalRatio_RATIO_5_getInstance();
      case 'RATIO_6':
        return FormHorizontalRatio_RATIO_6_getInstance();
      case 'RATIO_7':
        return FormHorizontalRatio_RATIO_7_getInstance();
      case 'RATIO_8':
        return FormHorizontalRatio_RATIO_8_getInstance();
      case 'RATIO_9':
        return FormHorizontalRatio_RATIO_9_getInstance();
      case 'RATIO_10':
        return FormHorizontalRatio_RATIO_10_getInstance();
      default:
        FormHorizontalRatio_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_43() {
    if ($ENTRIES_43 == null)
      $ENTRIES_43 = enumEntries(values_43());
    return $ENTRIES_43;
  }
  var FormHorizontalRatio_entriesInitialized;
  function FormHorizontalRatio_initEntries() {
    if (FormHorizontalRatio_entriesInitialized)
      return Unit_getInstance();
    FormHorizontalRatio_entriesInitialized = true;
    FormHorizontalRatio_RATIO_2_instance = new FormHorizontalRatio('RATIO_2', 0, 2, 10);
    FormHorizontalRatio_RATIO_3_instance = new FormHorizontalRatio('RATIO_3', 1, 3, 9);
    FormHorizontalRatio_RATIO_4_instance = new FormHorizontalRatio('RATIO_4', 2, 4, 8);
    FormHorizontalRatio_RATIO_5_instance = new FormHorizontalRatio('RATIO_5', 3, 5, 7);
    FormHorizontalRatio_RATIO_6_instance = new FormHorizontalRatio('RATIO_6', 4, 6, 6);
    FormHorizontalRatio_RATIO_7_instance = new FormHorizontalRatio('RATIO_7', 5, 7, 5);
    FormHorizontalRatio_RATIO_8_instance = new FormHorizontalRatio('RATIO_8', 6, 8, 4);
    FormHorizontalRatio_RATIO_9_instance = new FormHorizontalRatio('RATIO_9', 7, 9, 3);
    FormHorizontalRatio_RATIO_10_instance = new FormHorizontalRatio('RATIO_10', 8, 10, 2);
  }
  var $ENTRIES_43;
  function FormHorizontalRatio(name, ordinal, labels, fields) {
    Enum.call(this, name, ordinal);
    this.labels_1 = labels;
    this.fields_1 = fields;
  }
  protoOf(FormHorizontalRatio).get_labels_g1o1zc_k$ = function () {
    return this.labels_1;
  };
  protoOf(FormHorizontalRatio).get_fields_dbuqbm_k$ = function () {
    return this.fields_1;
  };
  var FormMethod_GET_instance;
  var FormMethod_POST_instance;
  function values_44() {
    return [FormMethod_GET_getInstance(), FormMethod_POST_getInstance()];
  }
  function valueOf_44(value) {
    switch (value) {
      case 'GET':
        return FormMethod_GET_getInstance();
      case 'POST':
        return FormMethod_POST_getInstance();
      default:
        FormMethod_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_44() {
    if ($ENTRIES_44 == null)
      $ENTRIES_44 = enumEntries(values_44());
    return $ENTRIES_44;
  }
  var FormMethod_entriesInitialized;
  function FormMethod_initEntries() {
    if (FormMethod_entriesInitialized)
      return Unit_getInstance();
    FormMethod_entriesInitialized = true;
    FormMethod_GET_instance = new FormMethod('GET', 0, 'get');
    FormMethod_POST_instance = new FormMethod('POST', 1, 'post');
  }
  var $ENTRIES_44;
  function FormMethod(name, ordinal, attributeValue) {
    Enum.call(this, name, ordinal);
    this.attributeValue_1 = attributeValue;
  }
  protoOf(FormMethod).get_attributeValue_rxe0u_k$ = function () {
    return this.attributeValue_1;
  };
  protoOf(FormMethod).get_attributeName_p6lq76_k$ = function () {
    return 'method';
  };
  var FormEnctype_URLENCODED_instance;
  var FormEnctype_MULTIPART_instance;
  var FormEnctype_PLAIN_instance;
  function values_45() {
    return [FormEnctype_URLENCODED_getInstance(), FormEnctype_MULTIPART_getInstance(), FormEnctype_PLAIN_getInstance()];
  }
  function valueOf_45(value) {
    switch (value) {
      case 'URLENCODED':
        return FormEnctype_URLENCODED_getInstance();
      case 'MULTIPART':
        return FormEnctype_MULTIPART_getInstance();
      case 'PLAIN':
        return FormEnctype_PLAIN_getInstance();
      default:
        FormEnctype_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_45() {
    if ($ENTRIES_45 == null)
      $ENTRIES_45 = enumEntries(values_45());
    return $ENTRIES_45;
  }
  var FormEnctype_entriesInitialized;
  function FormEnctype_initEntries() {
    if (FormEnctype_entriesInitialized)
      return Unit_getInstance();
    FormEnctype_entriesInitialized = true;
    FormEnctype_URLENCODED_instance = new FormEnctype('URLENCODED', 0, 'application/x-www-form-urlencoded');
    FormEnctype_MULTIPART_instance = new FormEnctype('MULTIPART', 1, 'multipart/form-data');
    FormEnctype_PLAIN_instance = new FormEnctype('PLAIN', 2, 'text/plain');
  }
  var $ENTRIES_45;
  function FormEnctype(name, ordinal, enctype) {
    Enum.call(this, name, ordinal);
    this.enctype_1 = enctype;
  }
  protoOf(FormEnctype).get_enctype_lg3uf4_k$ = function () {
    return this.enctype_1;
  };
  var FormType_INLINE_instance;
  var FormType_HORIZONTAL_instance;
  function values_46() {
    return [FormType_INLINE_getInstance(), FormType_HORIZONTAL_getInstance()];
  }
  function valueOf_46(value) {
    switch (value) {
      case 'INLINE':
        return FormType_INLINE_getInstance();
      case 'HORIZONTAL':
        return FormType_HORIZONTAL_getInstance();
      default:
        FormType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_46() {
    if ($ENTRIES_46 == null)
      $ENTRIES_46 = enumEntries(values_46());
    return $ENTRIES_46;
  }
  var FormType_entriesInitialized;
  function FormType_initEntries() {
    if (FormType_entriesInitialized)
      return Unit_getInstance();
    FormType_entriesInitialized = true;
    FormType_INLINE_instance = new FormType('INLINE', 0, 'form-inline');
    FormType_HORIZONTAL_instance = new FormType('HORIZONTAL', 1, 'form-horizontal');
  }
  var $ENTRIES_46;
  function FormType(name, ordinal, formType) {
    Enum.call(this, name, ordinal);
    this.formType_1 = formType;
  }
  protoOf(FormType).get_formType_t1qqh0_k$ = function () {
    return this.formType_1;
  };
  var FormTarget_BLANK_instance;
  var FormTarget_SELF_instance;
  var FormTarget_PARENT_instance;
  var FormTarget_TOP_instance;
  function values_47() {
    return [FormTarget_BLANK_getInstance(), FormTarget_SELF_getInstance(), FormTarget_PARENT_getInstance(), FormTarget_TOP_getInstance()];
  }
  function valueOf_47(value) {
    switch (value) {
      case 'BLANK':
        return FormTarget_BLANK_getInstance();
      case 'SELF':
        return FormTarget_SELF_getInstance();
      case 'PARENT':
        return FormTarget_PARENT_getInstance();
      case 'TOP':
        return FormTarget_TOP_getInstance();
      default:
        FormTarget_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_47() {
    if ($ENTRIES_47 == null)
      $ENTRIES_47 = enumEntries(values_47());
    return $ENTRIES_47;
  }
  var FormTarget_entriesInitialized;
  function FormTarget_initEntries() {
    if (FormTarget_entriesInitialized)
      return Unit_getInstance();
    FormTarget_entriesInitialized = true;
    FormTarget_BLANK_instance = new FormTarget('BLANK', 0, '_blank');
    FormTarget_SELF_instance = new FormTarget('SELF', 1, '_self');
    FormTarget_PARENT_instance = new FormTarget('PARENT', 2, '_parent');
    FormTarget_TOP_instance = new FormTarget('TOP', 3, '_top');
  }
  var $ENTRIES_47;
  function FormTarget(name, ordinal, attributeValue) {
    Enum.call(this, name, ordinal);
    this.attributeValue_1 = attributeValue;
  }
  protoOf(FormTarget).get_attributeValue_rxe0u_k$ = function () {
    return this.attributeValue_1;
  };
  protoOf(FormTarget).get_attributeName_p6lq76_k$ = function () {
    return 'target';
  };
  function FormHorizontalRatio_RATIO_2_getInstance() {
    FormHorizontalRatio_initEntries();
    return FormHorizontalRatio_RATIO_2_instance;
  }
  function FormHorizontalRatio_RATIO_3_getInstance() {
    FormHorizontalRatio_initEntries();
    return FormHorizontalRatio_RATIO_3_instance;
  }
  function FormHorizontalRatio_RATIO_4_getInstance() {
    FormHorizontalRatio_initEntries();
    return FormHorizontalRatio_RATIO_4_instance;
  }
  function FormHorizontalRatio_RATIO_5_getInstance() {
    FormHorizontalRatio_initEntries();
    return FormHorizontalRatio_RATIO_5_instance;
  }
  function FormHorizontalRatio_RATIO_6_getInstance() {
    FormHorizontalRatio_initEntries();
    return FormHorizontalRatio_RATIO_6_instance;
  }
  function FormHorizontalRatio_RATIO_7_getInstance() {
    FormHorizontalRatio_initEntries();
    return FormHorizontalRatio_RATIO_7_instance;
  }
  function FormHorizontalRatio_RATIO_8_getInstance() {
    FormHorizontalRatio_initEntries();
    return FormHorizontalRatio_RATIO_8_instance;
  }
  function FormHorizontalRatio_RATIO_9_getInstance() {
    FormHorizontalRatio_initEntries();
    return FormHorizontalRatio_RATIO_9_instance;
  }
  function FormHorizontalRatio_RATIO_10_getInstance() {
    FormHorizontalRatio_initEntries();
    return FormHorizontalRatio_RATIO_10_instance;
  }
  function FormMethod_GET_getInstance() {
    FormMethod_initEntries();
    return FormMethod_GET_instance;
  }
  function FormMethod_POST_getInstance() {
    FormMethod_initEntries();
    return FormMethod_POST_instance;
  }
  function FormEnctype_URLENCODED_getInstance() {
    FormEnctype_initEntries();
    return FormEnctype_URLENCODED_instance;
  }
  function FormEnctype_MULTIPART_getInstance() {
    FormEnctype_initEntries();
    return FormEnctype_MULTIPART_instance;
  }
  function FormEnctype_PLAIN_getInstance() {
    FormEnctype_initEntries();
    return FormEnctype_PLAIN_instance;
  }
  function FormType_INLINE_getInstance() {
    FormType_initEntries();
    return FormType_INLINE_instance;
  }
  function FormType_HORIZONTAL_getInstance() {
    FormType_initEntries();
    return FormType_HORIZONTAL_instance;
  }
  function FormTarget_BLANK_getInstance() {
    FormTarget_initEntries();
    return FormTarget_BLANK_instance;
  }
  function FormTarget_SELF_getInstance() {
    FormTarget_initEntries();
    return FormTarget_SELF_instance;
  }
  function FormTarget_PARENT_getInstance() {
    FormTarget_initEntries();
    return FormTarget_PARENT_instance;
  }
  function FormTarget_TOP_getInstance() {
    FormTarget_initEntries();
    return FormTarget_TOP_instance;
  }
  function method$factory() {
    return getPropertyCallableRef('method', 1, KMutableProperty1, function (receiver) {
      return receiver.get_method_gl8esq_k$();
    }, function (receiver, value) {
      return receiver.set_method_a5ie7s_k$(value);
    });
  }
  function action$factory() {
    return getPropertyCallableRef('action', 1, KMutableProperty1, function (receiver) {
      return receiver.get_action_avldmn_k$();
    }, function (receiver, value) {
      return receiver.set_action_goi58_k$(value);
    });
  }
  function enctype$factory() {
    return getPropertyCallableRef('enctype', 1, KMutableProperty1, function (receiver) {
      return receiver.get_enctype_pbbvth_k$();
    }, function (receiver, value) {
      return receiver.set_enctype_qkddeg_k$(value);
    });
  }
  function condensed$factory() {
    return getPropertyCallableRef('condensed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_condensed_5skwaq_k$();
    }, function (receiver, value) {
      return receiver.set_condensed_81w2ut_k$(value);
    });
  }
  function horizRatio$factory() {
    return getPropertyCallableRef('horizRatio', 1, KMutableProperty1, function (receiver) {
      return receiver.get_horizRatio_2bqbeg_k$();
    }, function (receiver, value) {
      return receiver.set_horizRatio_49u9mg_k$(value);
    });
  }
  function method$factory_0() {
    return getPropertyCallableRef('method', 1, KMutableProperty1, function (receiver) {
      return receiver.get_method_gl8esq_k$();
    }, function (receiver, value) {
      return receiver.set_method_a5ie7s_k$(value);
    });
  }
  function method$factory_1() {
    return getPropertyCallableRef('method', 1, KMutableProperty1, function (receiver) {
      return receiver.get_method_gl8esq_k$();
    }, function (receiver, value) {
      return receiver.set_method_a5ie7s_k$(value);
    });
  }
  function action$factory_0() {
    return getPropertyCallableRef('action', 1, KMutableProperty1, function (receiver) {
      return receiver.get_action_avldmn_k$();
    }, function (receiver, value) {
      return receiver.set_action_goi58_k$(value);
    });
  }
  function action$factory_1() {
    return getPropertyCallableRef('action', 1, KMutableProperty1, function (receiver) {
      return receiver.get_action_avldmn_k$();
    }, function (receiver, value) {
      return receiver.set_action_goi58_k$(value);
    });
  }
  function enctype$factory_0() {
    return getPropertyCallableRef('enctype', 1, KMutableProperty1, function (receiver) {
      return receiver.get_enctype_pbbvth_k$();
    }, function (receiver, value) {
      return receiver.set_enctype_qkddeg_k$(value);
    });
  }
  function enctype$factory_1() {
    return getPropertyCallableRef('enctype', 1, KMutableProperty1, function (receiver) {
      return receiver.get_enctype_pbbvth_k$();
    }, function (receiver, value) {
      return receiver.set_enctype_qkddeg_k$(value);
    });
  }
  function name$factory() {
    return getPropertyCallableRef('name', 1, KMutableProperty1, function (receiver) {
      return receiver.get_name_woqyms_k$();
    }, function (receiver, value) {
      return receiver.set_name_wkmnld_k$(value);
    });
  }
  function name$factory_0() {
    return getPropertyCallableRef('name', 1, KMutableProperty1, function (receiver) {
      return receiver.get_name_woqyms_k$();
    }, function (receiver, value) {
      return receiver.set_name_wkmnld_k$(value);
    });
  }
  function target$factory() {
    return getPropertyCallableRef('target', 1, KMutableProperty1, function (receiver) {
      return receiver.get_target_juba8q_k$();
    }, function (receiver, value) {
      return receiver.set_target_9eq888_k$(value);
    });
  }
  function target$factory_0() {
    return getPropertyCallableRef('target', 1, KMutableProperty1, function (receiver) {
      return receiver.get_target_juba8q_k$();
    }, function (receiver, value) {
      return receiver.set_target_9eq888_k$(value);
    });
  }
  function novalidate$factory() {
    return getPropertyCallableRef('novalidate', 1, KMutableProperty1, function (receiver) {
      return receiver.get_novalidate_pkvrmo_k$();
    }, function (receiver, value) {
      return receiver.set_novalidate_q6ozjo_k$(value);
    });
  }
  function novalidate$factory_0() {
    return getPropertyCallableRef('novalidate', 1, KMutableProperty1, function (receiver) {
      return receiver.get_novalidate_pkvrmo_k$();
    }, function (receiver, value) {
      return receiver.set_novalidate_q6ozjo_k$(value);
    });
  }
  function autocomplete$factory() {
    return getPropertyCallableRef('autocomplete', 1, KMutableProperty1, function (receiver) {
      return receiver.get_autocomplete_9bbtn3_k$();
    }, function (receiver, value) {
      return receiver.set_autocomplete_vb1zln_k$(value);
    });
  }
  function autocomplete$factory_0() {
    return getPropertyCallableRef('autocomplete', 1, KMutableProperty1, function (receiver) {
      return receiver.get_autocomplete_9bbtn3_k$();
    }, function (receiver, value) {
      return receiver.set_autocomplete_vb1zln_k$(value);
    });
  }
  function condensed$factory_0() {
    return getPropertyCallableRef('condensed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_condensed_5skwaq_k$();
    }, function (receiver, value) {
      return receiver.set_condensed_81w2ut_k$(value);
    });
  }
  function condensed$factory_1() {
    return getPropertyCallableRef('condensed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_condensed_5skwaq_k$();
    }, function (receiver, value) {
      return receiver.set_condensed_81w2ut_k$(value);
    });
  }
  function horizRatio$factory_0() {
    return getPropertyCallableRef('horizRatio', 1, KMutableProperty1, function (receiver) {
      return receiver.get_horizRatio_2bqbeg_k$();
    }, function (receiver, value) {
      return receiver.set_horizRatio_49u9mg_k$(value);
    });
  }
  function horizRatio$factory_1() {
    return getPropertyCallableRef('horizRatio', 1, KMutableProperty1, function (receiver) {
      return receiver.get_horizRatio_2bqbeg_k$();
    }, function (receiver, value) {
      return receiver.set_horizRatio_49u9mg_k$(value);
    });
  }
  function InvalidFeedback(content, rich) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    Tag.call(this, TAG_DIV_getInstance(), content, rich, VOID, 'invalid-feedback');
  }
  function _get_idc__e6a609($this) {
    return $this.idc_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.counter_1 = 0;
  }
  protoOf(Companion_4).set_counter_lagg9g_k$ = function (_set____db54di) {
    this.counter_1 = _set____db54di;
  };
  protoOf(Companion_4).get_counter_5zq0k8_k$ = function () {
    return this.counter_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function CheckBox$inline$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckBox$reversed$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckBox$labelFirst$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckBox$flabel$lambda(this$0) {
    return function ($this$FieldLabelCheck) {
      $this$FieldLabelCheck.set_parent_58bm75_k$(this$0);
      span($this$FieldLabelCheck);
      return Unit_getInstance();
    };
  }
  function CheckBox$onClick$lambda$lambda($handler, $this_setEventListener) {
    return function (e) {
      $handler($this_setEventListener.self, e);
      return Unit_getInstance();
    };
  }
  function CheckBox$onClick$lambda($handler) {
    return function ($this$setEventListener) {
      $this$setEventListener.click = CheckBox$onClick$lambda$lambda($handler, $this$setEventListener);
      return Unit_getInstance();
    };
  }
  function CheckBox(value, name, labelFirst, label, rich, init) {
    Companion_getInstance_5();
    value = value === VOID ? false : value;
    name = name === VOID ? null : name;
    labelFirst = labelFirst === VOID ? false : labelFirst;
    label = label === VOID ? null : label;
    rich = rich === VOID ? false : rich;
    init = init === VOID ? null : init;
    SimplePanel.call(this, 'form-check');
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = CheckBox$inline$delegate$lambda(this);
    tmp.inline$delegate_1 = (new RefreshDelegateProvider_0(this, false, refreshFunction)).provideDelegate_z62loi_k$(this, inline$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = CheckBox$reversed$delegate$lambda(this);
    tmp_0.reversed$delegate_1 = (new RefreshDelegateProvider_0(this, false, refreshFunction_0)).provideDelegate_z62loi_k$(this, reversed$factory());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = CheckBox$labelFirst$delegate$lambda(this);
    tmp_1.labelFirst$delegate_1 = (new RefreshDelegateProvider_0(this, labelFirst, refreshFunction_1)).provideDelegate_z62loi_k$(this, labelFirst$factory());
    this.idc_1 = 'kv_form_checkbox_' + Companion_getInstance_5().counter_1;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new CheckBoxInput(value);
    // Inline function 'io.kvision.form.check.CheckBox.input.<anonymous>' call
    this_0.set_parent_58bm75_k$(this);
    this_0.set_id_wyyipr_k$(this.idc_1);
    this_0.set_name_wkmnld_k$(name);
    tmp_2.input_1 = this_0;
    var tmp_3 = this;
    tmp_3.flabel_1 = new FieldLabelCheck(this.idc_1, label, rich, 'form-check-label', CheckBox$flabel$lambda(this));
    var tmp_4 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new InvalidFeedback();
    // Inline function 'io.kvision.form.check.CheckBox.invalidFeedback.<anonymous>' call
    this_1.set_parent_58bm75_k$(this);
    this_1.set_visible_w9mvj4_k$(false);
    tmp_4.invalidFeedback_1 = this_1;
    this.input_1.set_eventTarget_i37bvc_k$(this);
    var _unary__edvuaz = Companion_getInstance_5().counter_1;
    Companion_getInstance_5().counter_1 = _unary__edvuaz + 1 | 0;
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(CheckBox).set_value_70roch_k$ = function (value) {
    this.input_1.set_value_70roch_k$(value);
  };
  protoOf(CheckBox).set_value_v1vabv_k$ = function (_set____db54di) {
    return this.set_value_70roch_k$((!(_set____db54di == null) ? typeof _set____db54di === 'boolean' : false) ? _set____db54di : THROW_CCE());
  };
  protoOf(CheckBox).get_value_j01efc_k$ = function () {
    return this.input_1.get_value_j01efc_k$();
  };
  protoOf(CheckBox).set_startValue_f1ay1j_k$ = function (value) {
    this.input_1.set_startValue_f1ay1j_k$(value);
  };
  protoOf(CheckBox).get_startValue_ooysvs_k$ = function () {
    return this.input_1.get_startValue_ooysvs_k$();
  };
  protoOf(CheckBox).set_label_ck9rls_k$ = function (value) {
    this.flabel_1.set_content_i5lrjv_k$(value);
  };
  protoOf(CheckBox).get_label_iuj8p7_k$ = function () {
    return this.flabel_1.get_content_h02jrk_k$();
  };
  protoOf(CheckBox).set_rich_1alg2s_k$ = function (value) {
    this.flabel_1.set_rich_1alg2s_k$(value);
  };
  protoOf(CheckBox).get_rich_woto9x_k$ = function () {
    return this.flabel_1.get_rich_woto9x_k$();
  };
  protoOf(CheckBox).set_style_cafvrn_k$ = function (value) {
    this.input_1.set_style_cafvrn_k$(value);
  };
  protoOf(CheckBox).get_style_iyqetk_k$ = function () {
    return this.input_1.get_style_iyqetk_k$();
  };
  protoOf(CheckBox).set_circled_mf5tdu_k$ = function (value) {
    this.input_1.set_circled_mf5tdu_k$(value);
  };
  protoOf(CheckBox).get_circled_e7p9yj_k$ = function () {
    return this.input_1.get_circled_e7p9yj_k$();
  };
  protoOf(CheckBox).set_inline_x67j3z_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.inline$delegate_1, this, inline$factory_0(), _set____db54di);
  };
  protoOf(CheckBox).get_inline_etuzdu_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.inline$delegate_1, this, inline$factory_1());
  };
  protoOf(CheckBox).set_reversed_agljue_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.reversed$delegate_1, this, reversed$factory_0(), _set____db54di);
  };
  protoOf(CheckBox).get_reversed_yup56z_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.reversed$delegate_1, this, reversed$factory_1());
  };
  protoOf(CheckBox).set_labelFirst_q3ot2c_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.labelFirst$delegate_1, this, labelFirst$factory_0(), _set____db54di);
  };
  protoOf(CheckBox).get_labelFirst_n6uzdx_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.labelFirst$delegate_1, this, labelFirst$factory_1());
  };
  protoOf(CheckBox).set_indeterminate_291tzd_k$ = function (value) {
    this.input_1.set_indeterminate_291tzd_k$(value);
  };
  protoOf(CheckBox).get_indeterminate_997h5e_k$ = function () {
    return this.input_1.get_indeterminate_997h5e_k$();
  };
  protoOf(CheckBox).get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  protoOf(CheckBox).get_flabel_ddfcrb_k$ = function () {
    return this.flabel_1;
  };
  protoOf(CheckBox).get_invalidFeedback_fj7eer_k$ = function () {
    return this.invalidFeedback_1;
  };
  protoOf(CheckBox).render_fgfjvu_k$ = function () {
    var childrenList = this.get_labelFirst_n6uzdx_k$() ? listOf([this.flabel_1, this.input_1, this.invalidFeedback_1]) : listOf([this.input_1, this.flabel_1, this.invalidFeedback_1]);
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = childrenList.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'io.kvision.form.check.CheckBox.render.<anonymous>' call
      var tmp0_safe_receiver = element.get_visible_8zfvk9_k$() ? element.renderVNode_r2mn32_k$() : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var children = copyToArray(destination);
    return this.render_prnnht_k$('div', children);
  };
  protoOf(CheckBox).setEventListener_4rv3s8_k$ = function (block) {
    return this.input_1.setEventListener_4rv3s8_k$(block);
  };
  protoOf(CheckBox).removeEventListener_9wauwy_k$ = function (id) {
    this.input_1.removeEventListener_9wauwy_k$(id);
  };
  protoOf(CheckBox).removeEventListeners_vuojmv_k$ = function () {
    this.input_1.removeEventListeners_vuojmv_k$();
  };
  protoOf(CheckBox).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    if (this.get_inline_etuzdu_k$()) {
      classSetBuilder.add_udnk2x_k$('form-check-inline');
    }
    if (this.get_reversed_yup56z_k$()) {
      classSetBuilder.add_udnk2x_k$('form-check-reverse');
    }
    if (!(this.get_validatorError_og9qg1_k$() == null)) {
      classSetBuilder.add_udnk2x_k$('kv-text-danger');
    }
  };
  protoOf(CheckBox).onClick_fp1x22_k$ = function (handler) {
    return this.setEventListener_4rv3s8_k$(CheckBox$onClick$lambda(handler));
  };
  protoOf(CheckBox).focus_of07w8_k$ = function () {
    this.input_1.focus_of07w8_k$();
  };
  protoOf(CheckBox).blur_exr7u1_k$ = function () {
    this.input_1.blur_exr7u1_k$();
  };
  protoOf(CheckBox).styleForHorizontalFormPanel_9yitfk_k$ = function (horizontalRatio) {
    if (this.get_labelFirst_n6uzdx_k$()) {
      styleForHorizontalFormPanel.call(this, horizontalRatio);
      this.addCssClass_ul13bg_k$('form-group');
      this.addCssClass_ul13bg_k$('kv-mb-3');
      this.removeCssClass_3dntip_k$('form-check');
    } else {
      this.addCssClass_ul13bg_k$('form-group');
      this.addCssClass_ul13bg_k$('kv-mb-3');
      this.addSurroundingCssClass_h2gyzy_k$('row');
      this.addCssClass_ul13bg_k$('offset-sm-' + horizontalRatio.get_labels_g1o1zc_k$());
      this.addCssClass_ul13bg_k$('col-sm-' + horizontalRatio.get_fields_dbuqbm_k$());
    }
  };
  protoOf(CheckBox).styleForInlineFormPanel_1ffnb3_k$ = function () {
    this.addCssClass_ul13bg_k$('form-group');
  };
  protoOf(CheckBox).styleForVerticalFormPanel_h0pd36_k$ = function () {
    this.addCssClass_ul13bg_k$('form-group');
    this.addCssClass_ul13bg_k$('kv-mb-3');
  };
  protoOf(CheckBox).dispose_3nnxhr_k$ = function () {
    protoOf(SimplePanel).dispose_3nnxhr_k$.call(this);
    this.input_1.dispose_3nnxhr_k$();
    this.flabel_1.dispose_3nnxhr_k$();
    this.invalidFeedback_1.dispose_3nnxhr_k$();
  };
  protoOf(CheckBox).getState_wi99ln_k$ = function () {
    return this.input_1.getState_wi99ln_k$();
  };
  protoOf(CheckBox).subscribe_x45vei_k$ = function (observer) {
    return this.input_1.subscribe_x45vei_k$(observer);
  };
  protoOf(CheckBox).subscribe_i8u9zb_k$ = function (observer) {
    return this.subscribe_x45vei_k$(observer);
  };
  protoOf(CheckBox).subscribe_go603e_k$ = function (observer) {
    return this.subscribe_x45vei_k$(observer);
  };
  protoOf(CheckBox).setState_o1xiu2_k$ = function (state) {
    this.input_1.setState_o1xiu2_k$(state);
  };
  protoOf(CheckBox).setState_otrcj3_k$ = function (state) {
    return this.setState_o1xiu2_k$((!(state == null) ? typeof state === 'boolean' : false) ? state : THROW_CCE());
  };
  function checkBox(_this__u8e3s4, value, name, labelFirst, label, rich, init) {
    value = value === VOID ? false : value;
    name = name === VOID ? null : name;
    labelFirst = labelFirst === VOID ? false : labelFirst;
    label = label === VOID ? null : label;
    rich = rich === VOID ? false : rich;
    init = init === VOID ? null : init;
    var checkBox = new CheckBox(value, name, labelFirst, label, rich, init);
    _this__u8e3s4.add_rekwpt_k$(checkBox);
    return checkBox;
  }
  function inline$factory() {
    return getPropertyCallableRef('inline', 1, KMutableProperty1, function (receiver) {
      return receiver.get_inline_etuzdu_k$();
    }, function (receiver, value) {
      return receiver.set_inline_x67j3z_k$(value);
    });
  }
  function reversed$factory() {
    return getPropertyCallableRef('reversed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_reversed_yup56z_k$();
    }, function (receiver, value) {
      return receiver.set_reversed_agljue_k$(value);
    });
  }
  function labelFirst$factory() {
    return getPropertyCallableRef('labelFirst', 1, KMutableProperty1, function (receiver) {
      return receiver.get_labelFirst_n6uzdx_k$();
    }, function (receiver, value) {
      return receiver.set_labelFirst_q3ot2c_k$(value);
    });
  }
  function inline$factory_0() {
    return getPropertyCallableRef('inline', 1, KMutableProperty1, function (receiver) {
      return receiver.get_inline_etuzdu_k$();
    }, function (receiver, value) {
      return receiver.set_inline_x67j3z_k$(value);
    });
  }
  function inline$factory_1() {
    return getPropertyCallableRef('inline', 1, KMutableProperty1, function (receiver) {
      return receiver.get_inline_etuzdu_k$();
    }, function (receiver, value) {
      return receiver.set_inline_x67j3z_k$(value);
    });
  }
  function reversed$factory_0() {
    return getPropertyCallableRef('reversed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_reversed_yup56z_k$();
    }, function (receiver, value) {
      return receiver.set_reversed_agljue_k$(value);
    });
  }
  function reversed$factory_1() {
    return getPropertyCallableRef('reversed', 1, KMutableProperty1, function (receiver) {
      return receiver.get_reversed_yup56z_k$();
    }, function (receiver, value) {
      return receiver.set_reversed_agljue_k$(value);
    });
  }
  function labelFirst$factory_0() {
    return getPropertyCallableRef('labelFirst', 1, KMutableProperty1, function (receiver) {
      return receiver.get_labelFirst_n6uzdx_k$();
    }, function (receiver, value) {
      return receiver.set_labelFirst_q3ot2c_k$(value);
    });
  }
  function labelFirst$factory_1() {
    return getPropertyCallableRef('labelFirst', 1, KMutableProperty1, function (receiver) {
      return receiver.get_labelFirst_n6uzdx_k$();
    }, function (receiver, value) {
      return receiver.set_labelFirst_q3ot2c_k$(value);
    });
  }
  function CheckBoxInput$indeterminate$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it) {
        this$0.set_value_70roch_k$(false);
        tmp = Unit_getInstance();
      }
      this$0.refreshState_mh59ye_k$();
      var _iterator__ex2g4s = this$0.get_observers_pupmq4_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.form.check.CheckBoxInput.indeterminate$delegate.<anonymous>.<anonymous>' call
        element(this$0.get_value_j01efc_k$());
      }
      return Unit_getInstance();
    };
  }
  function CheckBoxInput$circled$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckBoxInput(value, className, init) {
    value = value === VOID ? false : value;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    CheckInput.call(this, CheckInputType_CHECKBOX_getInstance(), value, className);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = CheckBoxInput$indeterminate$delegate$lambda(this);
    tmp.indeterminate$delegate_1 = (new RefreshDelegateProvider_0(this, false, refreshFunction)).provideDelegate_z62loi_k$(this, indeterminate$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = CheckBoxInput$circled$delegate$lambda(this);
    tmp_0.circled$delegate_1 = (new RefreshDelegateProvider_0(this, false, refreshFunction_0)).provideDelegate_z62loi_k$(this, circled$factory());
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(CheckBoxInput).set_indeterminate_291tzd_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.indeterminate$delegate_1, this, indeterminate$factory_0(), _set____db54di);
  };
  protoOf(CheckBoxInput).get_indeterminate_997h5e_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.indeterminate$delegate_1, this, indeterminate$factory_1());
  };
  protoOf(CheckBoxInput).set_circled_mf5tdu_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.circled$delegate_1, this, circled$factory_0(), _set____db54di);
  };
  protoOf(CheckBoxInput).get_circled_e7p9yj_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.circled$delegate_1, this, circled$factory_1());
  };
  protoOf(CheckBoxInput).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(CheckInput).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    if (this.get_circled_e7p9yj_k$()) {
      classSetBuilder.add_udnk2x_k$('kv-checkbox-circle');
    }
  };
  protoOf(CheckBoxInput).refreshState_mh59ye_k$ = function () {
    protoOf(CheckInput).refreshState_mh59ye_k$.call(this);
    var tmp0_safe_receiver = this.getElementD_y85vem_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.indeterminate = this.get_indeterminate_997h5e_k$();
    }
  };
  protoOf(CheckBoxInput).changeValue_hkbezb_k$ = function (eventType) {
    this.set_indeterminate_291tzd_k$(false);
    protoOf(CheckInput).changeValue_hkbezb_k$.call(this, eventType);
  };
  function indeterminate$factory() {
    return getPropertyCallableRef('indeterminate', 1, KMutableProperty1, function (receiver) {
      return receiver.get_indeterminate_997h5e_k$();
    }, function (receiver, value) {
      return receiver.set_indeterminate_291tzd_k$(value);
    });
  }
  function circled$factory() {
    return getPropertyCallableRef('circled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_circled_e7p9yj_k$();
    }, function (receiver, value) {
      return receiver.set_circled_mf5tdu_k$(value);
    });
  }
  function indeterminate$factory_0() {
    return getPropertyCallableRef('indeterminate', 1, KMutableProperty1, function (receiver) {
      return receiver.get_indeterminate_997h5e_k$();
    }, function (receiver, value) {
      return receiver.set_indeterminate_291tzd_k$(value);
    });
  }
  function indeterminate$factory_1() {
    return getPropertyCallableRef('indeterminate', 1, KMutableProperty1, function (receiver) {
      return receiver.get_indeterminate_997h5e_k$();
    }, function (receiver, value) {
      return receiver.set_indeterminate_291tzd_k$(value);
    });
  }
  function circled$factory_0() {
    return getPropertyCallableRef('circled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_circled_e7p9yj_k$();
    }, function (receiver, value) {
      return receiver.set_circled_mf5tdu_k$(value);
    });
  }
  function circled$factory_1() {
    return getPropertyCallableRef('circled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_circled_e7p9yj_k$();
    }, function (receiver, value) {
      return receiver.set_circled_mf5tdu_k$(value);
    });
  }
  var CheckStyle_PRIMARY_instance;
  var CheckStyle_SECONDARY_instance;
  var CheckStyle_SUCCESS_instance;
  var CheckStyle_DANGER_instance;
  var CheckStyle_WARNING_instance;
  var CheckStyle_INFO_instance;
  var CheckStyle_LIGHT_instance;
  var CheckStyle_DARK_instance;
  function values_48() {
    return [CheckStyle_PRIMARY_getInstance(), CheckStyle_SECONDARY_getInstance(), CheckStyle_SUCCESS_getInstance(), CheckStyle_DANGER_getInstance(), CheckStyle_WARNING_getInstance(), CheckStyle_INFO_getInstance(), CheckStyle_LIGHT_getInstance(), CheckStyle_DARK_getInstance()];
  }
  function valueOf_48(value) {
    switch (value) {
      case 'PRIMARY':
        return CheckStyle_PRIMARY_getInstance();
      case 'SECONDARY':
        return CheckStyle_SECONDARY_getInstance();
      case 'SUCCESS':
        return CheckStyle_SUCCESS_getInstance();
      case 'DANGER':
        return CheckStyle_DANGER_getInstance();
      case 'WARNING':
        return CheckStyle_WARNING_getInstance();
      case 'INFO':
        return CheckStyle_INFO_getInstance();
      case 'LIGHT':
        return CheckStyle_LIGHT_getInstance();
      case 'DARK':
        return CheckStyle_DARK_getInstance();
      default:
        CheckStyle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_48() {
    if ($ENTRIES_48 == null)
      $ENTRIES_48 = enumEntries(values_48());
    return $ENTRIES_48;
  }
  var CheckStyle_entriesInitialized;
  function CheckStyle_initEntries() {
    if (CheckStyle_entriesInitialized)
      return Unit_getInstance();
    CheckStyle_entriesInitialized = true;
    CheckStyle_PRIMARY_instance = new CheckStyle('PRIMARY', 0, 'kv-check-primary');
    CheckStyle_SECONDARY_instance = new CheckStyle('SECONDARY', 1, 'kv-check-secondary');
    CheckStyle_SUCCESS_instance = new CheckStyle('SUCCESS', 2, 'kv-check-success');
    CheckStyle_DANGER_instance = new CheckStyle('DANGER', 3, 'kv-check-danger');
    CheckStyle_WARNING_instance = new CheckStyle('WARNING', 4, 'kv-check-warning');
    CheckStyle_INFO_instance = new CheckStyle('INFO', 5, 'kv-check-info');
    CheckStyle_LIGHT_instance = new CheckStyle('LIGHT', 6, 'kv-check-light');
    CheckStyle_DARK_instance = new CheckStyle('DARK', 7, 'kv-check-dark');
  }
  var $ENTRIES_48;
  function CheckStyle(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(CheckStyle).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function CheckInput$value$delegate$lambda(this$0) {
    return function (it) {
      this$0.refreshState_mh59ye_k$();
      var _iterator__ex2g4s = this$0.observers_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.form.check.CheckInput.value$delegate.<anonymous>.<anonymous>' call
        element(it);
      }
      return Unit_getInstance();
    };
  }
  function CheckInput$startValue$delegate$lambda(this$0) {
    return function (it) {
      this$0.set_value_70roch_k$(it);
      this$0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckInput$type$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckInput$style$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckInput$name$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckInput$disabled$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckInput$extraValue$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckInput$size$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckInput$validationStatus$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function CheckInput$lambda$lambda(this$0) {
    return function (it) {
      this$0.changeValue_hkbezb_k$('click');
      return Unit_getInstance();
    };
  }
  function CheckInput$lambda$lambda_0(this$0) {
    return function (it) {
      this$0.changeValue_hkbezb_k$('change');
      return Unit_getInstance();
    };
  }
  function CheckInput$lambda(this$0) {
    return function ($this$setInternalEventListener) {
      $this$setInternalEventListener.click = CheckInput$lambda$lambda(this$0);
      $this$setInternalEventListener.change = CheckInput$lambda$lambda_0(this$0);
      return Unit_getInstance();
    };
  }
  function CheckInput$onClick$lambda$lambda($handler, $this_setEventListener) {
    return function (e) {
      $handler($this_setEventListener.self, e);
      return Unit_getInstance();
    };
  }
  function CheckInput$onClick$lambda($handler) {
    return function ($this$setEventListener) {
      $this$setEventListener.click = CheckInput$onClick$lambda$lambda($handler, $this$setEventListener);
      return Unit_getInstance();
    };
  }
  function CheckInput$subscribe$lambda(this$0, $observer) {
    return function () {
      var tmp0 = this$0.observers_1;
      var element = $observer;
      tmp0.remove_cedx0m_k$(element);
      return Unit_getInstance();
    };
  }
  function CheckInput(type, value, className) {
    type = type === VOID ? CheckInputType_CHECKBOX_getInstance() : type;
    value = value === VOID ? false : value;
    className = className === VOID ? null : className;
    Widget.call(this, className);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.observers_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = CheckInput$value$delegate$lambda(this);
    tmp_0.value$delegate_1 = (new RefreshDelegateProvider_0(this, value, refreshFunction)).provideDelegate_z62loi_k$(this, value$factory());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = CheckInput$startValue$delegate$lambda(this);
    tmp_1.startValue$delegate_1 = (new RefreshDelegateProvider_0(this, value, refreshFunction_0)).provideDelegate_z62loi_k$(this, startValue$factory());
    var tmp_2 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = CheckInput$type$delegate$lambda(this);
    tmp_2.type$delegate_1 = (new RefreshDelegateProvider_0(this, type, refreshFunction_1)).provideDelegate_z62loi_k$(this, type$factory());
    var tmp_3 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_2 = CheckInput$style$delegate$lambda(this);
    tmp_3.style$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_2);
    var tmp_4 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_3 = CheckInput$name$delegate$lambda(this);
    tmp_4.name$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_3);
    var tmp_5 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_4 = CheckInput$disabled$delegate$lambda(this);
    tmp_5.disabled$delegate_1 = (new RefreshDelegateProvider_0(this, false, refreshFunction_4)).provideDelegate_z62loi_k$(this, disabled$factory());
    var tmp_6 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_5 = CheckInput$extraValue$delegate$lambda(this);
    tmp_6.extraValue$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_5);
    var tmp_7 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_6 = CheckInput$size$delegate$lambda(this);
    tmp_7.size$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_6);
    var tmp_8 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_7 = CheckInput$validationStatus$delegate$lambda(this);
    tmp_8.validationStatus$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_7);
    this.useSnabbdomDistinctKey_wmc8hc_k$();
    this.setInternalEventListener_jia4mj_k$(CheckInput$lambda(this));
  }
  protoOf(CheckInput).get_observers_pupmq4_k$ = function () {
    return this.observers_1;
  };
  protoOf(CheckInput).set_value_70roch_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.value$delegate_1, this, value$factory_0(), _set____db54di);
  };
  protoOf(CheckInput).set_value_v1vabv_k$ = function (_set____db54di) {
    return this.set_value_70roch_k$((!(_set____db54di == null) ? typeof _set____db54di === 'boolean' : false) ? _set____db54di : THROW_CCE());
  };
  protoOf(CheckInput).get_value_j01efc_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.value$delegate_1, this, value$factory_1());
  };
  protoOf(CheckInput).set_startValue_f1ay1j_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.startValue$delegate_1, this, startValue$factory_0(), _set____db54di);
  };
  protoOf(CheckInput).get_startValue_ooysvs_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.startValue$delegate_1, this, startValue$factory_1());
  };
  protoOf(CheckInput).set_type_7m8lgb_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.type$delegate_1, this, type$factory_0(), _set____db54di);
  };
  protoOf(CheckInput).get_type_wovaf7_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.type$delegate_1, this, type$factory_1());
  };
  protoOf(CheckInput).set_style_cafvrn_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.style$delegate_1, this, style$factory(), _set____db54di);
  };
  protoOf(CheckInput).get_style_iyqetk_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.style$delegate_1, this, style$factory_0());
  };
  protoOf(CheckInput).set_name_wkmnld_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.name$delegate_1, this, name$factory_1(), _set____db54di);
  };
  protoOf(CheckInput).get_name_woqyms_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.name$delegate_1, this, name$factory_2());
  };
  protoOf(CheckInput).set_disabled_rhu918_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.disabled$delegate_1, this, disabled$factory_0(), _set____db54di);
  };
  protoOf(CheckInput).get_disabled_rbmjej_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.disabled$delegate_1, this, disabled$factory_1());
  };
  protoOf(CheckInput).set_extraValue_kztp21_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.extraValue$delegate_1, this, extraValue$factory(), _set____db54di);
  };
  protoOf(CheckInput).get_extraValue_7y9yd2_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.extraValue$delegate_1, this, extraValue$factory_0());
  };
  protoOf(CheckInput).set_size_duu2i7_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.size$delegate_1, this, size$factory(), _set____db54di);
  };
  protoOf(CheckInput).get_size_woubt6_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.size$delegate_1, this, size$factory_0());
  };
  protoOf(CheckInput).set_validationStatus_hx0grd_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.validationStatus$delegate_1, this, validationStatus$factory(), _set____db54di);
  };
  protoOf(CheckInput).get_validationStatus_he6hkc_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.validationStatus$delegate_1, this, validationStatus$factory_0());
  };
  protoOf(CheckInput).render_fgfjvu_k$ = function () {
    return this.render_ab0tlo_k$('input');
  };
  protoOf(CheckInput).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(Widget).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    classSetBuilder.add_udnk2x_k$('form-check-input');
    classSetBuilder.add_9rsi26_k$(this.get_validationStatus_he6hkc_k$());
    classSetBuilder.add_9rsi26_k$(this.get_size_woubt6_k$());
    classSetBuilder.add_9rsi26_k$(this.get_style_iyqetk_k$());
  };
  protoOf(CheckInput).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(Widget).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    attributeSetBuilder.add_lbri6p_k$('type', this.get_type_wovaf7_k$().type_1);
    if (this.get_startValue_ooysvs_k$()) {
      attributeSetBuilder.add$default_4n2esg_k$('checked');
    }
    var tmp0_safe_receiver = this.get_name_woqyms_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.check.CheckInput.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('name', tmp0_safe_receiver);
    }
    if (this.get_disabled_rbmjej_k$()) {
      attributeSetBuilder.add$default_4n2esg_k$('disabled');
    }
    var tmp1_safe_receiver = this.get_extraValue_7y9yd2_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.check.CheckInput.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('value', tmp1_safe_receiver);
    }
  };
  protoOf(CheckInput).afterInsert_6ut630_k$ = function (node) {
    this.refreshState_mh59ye_k$();
  };
  protoOf(CheckInput).refreshState_mh59ye_k$ = function () {
    var tmp0_safe_receiver = this.getElementD_y85vem_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.checked;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = tmp1_safe_receiver;
    }
    var v = tmp;
    if (!(this.get_value_j01efc_k$() === v)) {
      var tmp2_safe_receiver = this.getElementD_y85vem_k$();
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.checked = this.get_value_j01efc_k$();
      }
    }
  };
  protoOf(CheckInput).changeValue_hkbezb_k$ = function (eventType) {
    var tmp0_safe_receiver = this.getElementD_y85vem_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.checked;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = tmp1_safe_receiver;
    }
    var v = tmp;
    var newValue = v === true;
    if (!(this.get_value_j01efc_k$() === newValue)) {
      this.set_value_70roch_k$(newValue);
    }
  };
  protoOf(CheckInput).onClick_ldm0ex_k$ = function (handler) {
    return this.setEventListener_4rv3s8_k$(CheckInput$onClick$lambda(handler));
  };
  protoOf(CheckInput).getState_wi99ln_k$ = function () {
    return this.get_value_j01efc_k$();
  };
  protoOf(CheckInput).subscribe_x45vei_k$ = function (observer) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.observers_1.add_utx5q5_k$(observer);
    observer(this.get_value_j01efc_k$());
    return CheckInput$subscribe$lambda(this, observer);
  };
  protoOf(CheckInput).subscribe_i8u9zb_k$ = function (observer) {
    return this.subscribe_x45vei_k$(observer);
  };
  protoOf(CheckInput).subscribe_go603e_k$ = function (observer) {
    return this.subscribe_x45vei_k$(observer);
  };
  protoOf(CheckInput).setState_o1xiu2_k$ = function (state) {
    this.set_value_70roch_k$(state);
  };
  protoOf(CheckInput).setState_otrcj3_k$ = function (state) {
    return this.setState_o1xiu2_k$((!(state == null) ? typeof state === 'boolean' : false) ? state : THROW_CCE());
  };
  var CheckInputType_CHECKBOX_instance;
  var CheckInputType_RADIO_instance;
  function values_49() {
    return [CheckInputType_CHECKBOX_getInstance(), CheckInputType_RADIO_getInstance()];
  }
  function valueOf_49(value) {
    switch (value) {
      case 'CHECKBOX':
        return CheckInputType_CHECKBOX_getInstance();
      case 'RADIO':
        return CheckInputType_RADIO_getInstance();
      default:
        CheckInputType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_49() {
    if ($ENTRIES_49 == null)
      $ENTRIES_49 = enumEntries(values_49());
    return $ENTRIES_49;
  }
  var CheckInputType_entriesInitialized;
  function CheckInputType_initEntries() {
    if (CheckInputType_entriesInitialized)
      return Unit_getInstance();
    CheckInputType_entriesInitialized = true;
    CheckInputType_CHECKBOX_instance = new CheckInputType('CHECKBOX', 0, 'checkbox');
    CheckInputType_RADIO_instance = new CheckInputType('RADIO', 1, 'radio');
  }
  var $ENTRIES_49;
  function CheckInputType(name, ordinal, type) {
    Enum.call(this, name, ordinal);
    this.type_1 = type;
  }
  protoOf(CheckInputType).get_type_t5wobc_k$ = function () {
    return this.type_1;
  };
  function CheckStyle_PRIMARY_getInstance() {
    CheckStyle_initEntries();
    return CheckStyle_PRIMARY_instance;
  }
  function CheckStyle_SECONDARY_getInstance() {
    CheckStyle_initEntries();
    return CheckStyle_SECONDARY_instance;
  }
  function CheckStyle_SUCCESS_getInstance() {
    CheckStyle_initEntries();
    return CheckStyle_SUCCESS_instance;
  }
  function CheckStyle_DANGER_getInstance() {
    CheckStyle_initEntries();
    return CheckStyle_DANGER_instance;
  }
  function CheckStyle_WARNING_getInstance() {
    CheckStyle_initEntries();
    return CheckStyle_WARNING_instance;
  }
  function CheckStyle_INFO_getInstance() {
    CheckStyle_initEntries();
    return CheckStyle_INFO_instance;
  }
  function CheckStyle_LIGHT_getInstance() {
    CheckStyle_initEntries();
    return CheckStyle_LIGHT_instance;
  }
  function CheckStyle_DARK_getInstance() {
    CheckStyle_initEntries();
    return CheckStyle_DARK_instance;
  }
  function CheckInputType_CHECKBOX_getInstance() {
    CheckInputType_initEntries();
    return CheckInputType_CHECKBOX_instance;
  }
  function CheckInputType_RADIO_getInstance() {
    CheckInputType_initEntries();
    return CheckInputType_RADIO_instance;
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_70roch_k$(value);
    });
  }
  function startValue$factory() {
    return getPropertyCallableRef('startValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_startValue_ooysvs_k$();
    }, function (receiver, value) {
      return receiver.set_startValue_f1ay1j_k$(value);
    });
  }
  function type$factory() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_7m8lgb_k$(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_rhu918_k$(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_70roch_k$(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_70roch_k$(value);
    });
  }
  function startValue$factory_0() {
    return getPropertyCallableRef('startValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_startValue_ooysvs_k$();
    }, function (receiver, value) {
      return receiver.set_startValue_f1ay1j_k$(value);
    });
  }
  function startValue$factory_1() {
    return getPropertyCallableRef('startValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_startValue_ooysvs_k$();
    }, function (receiver, value) {
      return receiver.set_startValue_f1ay1j_k$(value);
    });
  }
  function type$factory_0() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_7m8lgb_k$(value);
    });
  }
  function type$factory_1() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_7m8lgb_k$(value);
    });
  }
  function style$factory() {
    return getPropertyCallableRef('style', 1, KMutableProperty1, function (receiver) {
      return receiver.get_style_iyqetk_k$();
    }, function (receiver, value) {
      return receiver.set_style_cafvrn_k$(value);
    });
  }
  function style$factory_0() {
    return getPropertyCallableRef('style', 1, KMutableProperty1, function (receiver) {
      return receiver.get_style_iyqetk_k$();
    }, function (receiver, value) {
      return receiver.set_style_cafvrn_k$(value);
    });
  }
  function name$factory_1() {
    return getPropertyCallableRef('name', 1, KMutableProperty1, function (receiver) {
      return receiver.get_name_woqyms_k$();
    }, function (receiver, value) {
      return receiver.set_name_wkmnld_k$(value);
    });
  }
  function name$factory_2() {
    return getPropertyCallableRef('name', 1, KMutableProperty1, function (receiver) {
      return receiver.get_name_woqyms_k$();
    }, function (receiver, value) {
      return receiver.set_name_wkmnld_k$(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_rhu918_k$(value);
    });
  }
  function disabled$factory_1() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_rhu918_k$(value);
    });
  }
  function extraValue$factory() {
    return getPropertyCallableRef('extraValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_extraValue_7y9yd2_k$();
    }, function (receiver, value) {
      return receiver.set_extraValue_kztp21_k$(value);
    });
  }
  function extraValue$factory_0() {
    return getPropertyCallableRef('extraValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_extraValue_7y9yd2_k$();
    }, function (receiver, value) {
      return receiver.set_extraValue_kztp21_k$(value);
    });
  }
  function size$factory() {
    return getPropertyCallableRef('size', 1, KMutableProperty1, function (receiver) {
      return receiver.get_size_woubt6_k$();
    }, function (receiver, value) {
      return receiver.set_size_duu2i7_k$(value);
    });
  }
  function size$factory_0() {
    return getPropertyCallableRef('size', 1, KMutableProperty1, function (receiver) {
      return receiver.get_size_woubt6_k$();
    }, function (receiver, value) {
      return receiver.set_size_duu2i7_k$(value);
    });
  }
  function validationStatus$factory() {
    return getPropertyCallableRef('validationStatus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_validationStatus_he6hkc_k$();
    }, function (receiver, value) {
      return receiver.set_validationStatus_hx0grd_k$(value);
    });
  }
  function validationStatus$factory_0() {
    return getPropertyCallableRef('validationStatus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_validationStatus_he6hkc_k$();
    }, function (receiver, value) {
      return receiver.set_validationStatus_hx0grd_k$(value);
    });
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.counter_1 = 0;
  }
  protoOf(Companion_5).set_counter_lagg9g_k$ = function (_set____db54di) {
    this.counter_1 = _set____db54di;
  };
  protoOf(Companion_5).get_counter_5zq0k8_k$ = function () {
    return this.counter_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function AbstractText(label, rich, floating, className) {
    Companion_getInstance_6();
    label = label === VOID ? null : label;
    rich = rich === VOID ? false : rich;
    floating = floating === VOID ? false : floating;
    className = className === VOID ? null : className;
    var tmp;
    if (className == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.text.AbstractText.<init>.<anonymous>' call
      tmp = className + ' ';
    }
    var tmp1_elvis_lhs = tmp;
    SimplePanel.call(this, (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + (floating ? 'form-floating kv-mb-3' : 'form-group kv-mb-3'));
    this.floating_1 = floating;
    this.idc_1 = 'kv_form_text_' + Companion_getInstance_6().counter_1;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new FieldLabel(this.idc_1, label, rich, 'form-label');
    // Inline function 'io.kvision.form.text.AbstractText.flabel.<anonymous>' call
    this_0.set_visible_w9mvj4_k$(!(label == null));
    tmp_0.flabel_1 = this_0;
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new InvalidFeedback();
    // Inline function 'io.kvision.form.text.AbstractText.invalidFeedback.<anonymous>' call
    this_1.set_visible_w9mvj4_k$(false);
    tmp_1.invalidFeedback_1 = this_1;
    var _unary__edvuaz = Companion_getInstance_6().counter_1;
    Companion_getInstance_6().counter_1 = _unary__edvuaz + 1 | 0;
  }
  protoOf(AbstractText).get_floating_1fu5lb_k$ = function () {
    return this.floating_1;
  };
  protoOf(AbstractText).set_value_utlds3_k$ = function (value) {
    var tmp = this.get_input_it4gip_k$();
    var tmp_0;
    if (value == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.ifEmpty' call
      var tmp_1;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(value) === 0) {
        // Inline function 'io.kvision.form.text.AbstractText.<set-value>.<anonymous>' call
        tmp_1 = null;
      } else {
        tmp_1 = value;
      }
      tmp_0 = tmp_1;
    }
    tmp.set_value_utlds3_k$(tmp_0);
  };
  protoOf(AbstractText).set_value_v1vabv_k$ = function (_set____db54di) {
    return this.set_value_utlds3_k$((_set____db54di == null ? true : typeof _set____db54di === 'string') ? _set____db54di : THROW_CCE());
  };
  protoOf(AbstractText).get_value_j01efc_k$ = function () {
    return this.get_input_it4gip_k$().get_value_j01efc_k$();
  };
  protoOf(AbstractText).set_startValue_lvb9d7_k$ = function (value) {
    this.get_input_it4gip_k$().set_startValue_lvb9d7_k$(value);
  };
  protoOf(AbstractText).get_startValue_ooysvs_k$ = function () {
    return this.get_input_it4gip_k$().get_startValue_ooysvs_k$();
  };
  protoOf(AbstractText).set_placeholder_heqcsh_k$ = function (value) {
    this.get_input_it4gip_k$().set_placeholder_heqcsh_k$(value);
  };
  protoOf(AbstractText).get_placeholder_nsdr0q_k$ = function () {
    return this.get_input_it4gip_k$().get_placeholder_nsdr0q_k$();
  };
  protoOf(AbstractText).set_maxlength_9qgj5a_k$ = function (value) {
    this.get_input_it4gip_k$().set_maxlength_9qgj5a_k$(value);
  };
  protoOf(AbstractText).get_maxlength_aks9lt_k$ = function () {
    return this.get_input_it4gip_k$().get_maxlength_aks9lt_k$();
  };
  protoOf(AbstractText).set_autofocus_w05tl8_k$ = function (value) {
    this.get_input_it4gip_k$().set_autofocus_w05tl8_k$(value);
  };
  protoOf(AbstractText).get_autofocus_yxqmg0_k$ = function () {
    return this.get_input_it4gip_k$().get_autofocus_yxqmg0_k$();
  };
  protoOf(AbstractText).set_readonly_jx0941_k$ = function (value) {
    this.get_input_it4gip_k$().set_readonly_jx0941_k$(value);
  };
  protoOf(AbstractText).get_readonly_ow59u3_k$ = function () {
    return this.get_input_it4gip_k$().get_readonly_ow59u3_k$();
  };
  protoOf(AbstractText).set_label_ck9rls_k$ = function (value) {
    this.flabel_1.set_content_i5lrjv_k$(value);
    this.flabel_1.set_visible_w9mvj4_k$(!(value == null));
  };
  protoOf(AbstractText).get_label_iuj8p7_k$ = function () {
    return this.flabel_1.get_content_h02jrk_k$();
  };
  protoOf(AbstractText).set_rich_1alg2s_k$ = function (value) {
    this.flabel_1.set_rich_1alg2s_k$(value);
  };
  protoOf(AbstractText).get_rich_woto9x_k$ = function () {
    return this.flabel_1.get_rich_woto9x_k$();
  };
  protoOf(AbstractText).set_maskOptions_mn7510_k$ = function (value) {
    this.get_input_it4gip_k$().set_maskOptions_mn7510_k$(value);
  };
  protoOf(AbstractText).get_maskOptions_je1w2x_k$ = function () {
    return this.get_input_it4gip_k$().get_maskOptions_je1w2x_k$();
  };
  protoOf(AbstractText).get_idc_18j3r5_k$ = function () {
    return this.idc_1;
  };
  protoOf(AbstractText).get_flabel_ddfcrb_k$ = function () {
    return this.flabel_1;
  };
  protoOf(AbstractText).get_invalidFeedback_fj7eer_k$ = function () {
    return this.invalidFeedback_1;
  };
  protoOf(AbstractText).floatingPlaceholder_4usgcd_k$ = function () {
    if (this.floating_1 && this.get_placeholder_nsdr0q_k$() == null && !(this.get_label_iuj8p7_k$() == null)) {
      var tmp0_elvis_lhs = this.get_label_iuj8p7_k$();
      this.set_placeholder_heqcsh_k$(tmp0_elvis_lhs == null ? 'Enter data' : tmp0_elvis_lhs);
    }
  };
  protoOf(AbstractText).styleForHorizontalFormPanel_9yitfk_k$ = function (horizontalRatio) {
    if (!this.floating_1) {
      this.addCssClass_ul13bg_k$('row');
      this.addCssClass_ul13bg_k$('kv-control-horiz');
      this.flabel_1.addCssClass_ul13bg_k$('col-sm-' + horizontalRatio.get_labels_g1o1zc_k$());
      this.flabel_1.addCssClass_ul13bg_k$('col-form-label');
      this.get_input_it4gip_k$().addSurroundingCssClass_h2gyzy_k$('col-sm-' + horizontalRatio.get_fields_dbuqbm_k$());
      this.invalidFeedback_1.addCssClass_ul13bg_k$('offset-sm-' + horizontalRatio.get_labels_g1o1zc_k$());
      this.invalidFeedback_1.addCssClass_ul13bg_k$('col-sm-' + horizontalRatio.get_fields_dbuqbm_k$());
    }
  };
  protoOf(AbstractText).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    if (!(this.get_validatorError_og9qg1_k$() == null)) {
      classSetBuilder.add_udnk2x_k$('kv-text-danger');
    }
  };
  protoOf(AbstractText).setEventListener_4rv3s8_k$ = function (block) {
    return this.get_input_it4gip_k$().setEventListener_4rv3s8_k$(block);
  };
  protoOf(AbstractText).removeEventListener_9wauwy_k$ = function (id) {
    this.get_input_it4gip_k$().removeEventListener_9wauwy_k$(id);
  };
  protoOf(AbstractText).removeEventListeners_vuojmv_k$ = function () {
    this.get_input_it4gip_k$().removeEventListeners_vuojmv_k$();
  };
  protoOf(AbstractText).focus_of07w8_k$ = function () {
    this.get_input_it4gip_k$().focus_of07w8_k$();
  };
  protoOf(AbstractText).blur_exr7u1_k$ = function () {
    this.get_input_it4gip_k$().blur_exr7u1_k$();
  };
  protoOf(AbstractText).getState_wi99ln_k$ = function () {
    return this.get_input_it4gip_k$().getState_wi99ln_k$();
  };
  protoOf(AbstractText).subscribe_srqeqc_k$ = function (observer) {
    return this.get_input_it4gip_k$().subscribe_srqeqc_k$(observer);
  };
  protoOf(AbstractText).subscribe_i8u9zb_k$ = function (observer) {
    return this.subscribe_srqeqc_k$(observer);
  };
  protoOf(AbstractText).subscribe_go603e_k$ = function (observer) {
    return this.subscribe_srqeqc_k$(observer);
  };
  protoOf(AbstractText).setState_i5i93c_k$ = function (state) {
    this.get_input_it4gip_k$().setState_i5i93c_k$(state);
  };
  protoOf(AbstractText).setState_otrcj3_k$ = function (state) {
    return this.setState_i5i93c_k$((state == null ? true : typeof state === 'string') ? state : THROW_CCE());
  };
  function AbstractTextInput$value$delegate$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it === '') {
        this$0.set_value_utlds3_k$(null);
        tmp = Unit_getInstance();
      } else {
        this$0.refreshState_mh59ye_k$();
        var _iterator__ex2g4s = this$0.observers_1.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'io.kvision.form.text.AbstractTextInput.value$delegate.<anonymous>.<anonymous>' call
          element(it);
        }
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$startValue$delegate$lambda(this$0) {
    return function (it) {
      this$0.set_value_utlds3_k$(it);
      this$0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$placeholder$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$name$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$maxlength$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$disabled$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$autofocus$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$readonly$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$size$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$validationStatus$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$lambda($this$setInternalEventListener) {
    $this$setInternalEventListener.input = AbstractTextInput$lambda$lambda($this$setInternalEventListener);
    return Unit_getInstance();
  }
  function AbstractTextInput$lambda$lambda($this_setInternalEventListener) {
    return function (it) {
      $this_setInternalEventListener.self.changeValue_gjh39t_k$();
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$installMask$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.form.text.AbstractTextInput.installMask.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = this$0.get_maskOptions_je1w2x_k$();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.maskNumericValue_uvrmru_k$(it);
        tmp = tmp1_elvis_lhs == null ? it : tmp1_elvis_lhs;
      }
      var tmp1_safe_receiver = tmp;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.text.ifEmpty' call
        var tmp_1;
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(tmp1_safe_receiver) === 0) {
          // Inline function 'io.kvision.form.text.AbstractTextInput.installMask.<anonymous>.<anonymous>' call
          tmp_1 = null;
        } else {
          tmp_1 = tmp1_safe_receiver;
        }
        tmp_0 = tmp_1;
      }
      var v = tmp_0;
      var tmp_2;
      if (!(this$0.get_value_j01efc_k$() == v)) {
        this$0.set_value_utlds3_k$(v);
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AbstractTextInput$subscribe$lambda(this$0, $observer) {
    return function () {
      var tmp0 = this$0.observers_1;
      var element = $observer;
      tmp0.remove_cedx0m_k$(element);
      return Unit_getInstance();
    };
  }
  function AbstractTextInput(value, maxlength, className) {
    value = value === VOID ? null : value;
    maxlength = maxlength === VOID ? null : maxlength;
    className = className === VOID ? null : className;
    Widget.call(this, className);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.observers_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    var tmp_1;
    if (value == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.ifEmpty' call
      var tmp_2;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(value) === 0) {
        // Inline function 'io.kvision.form.text.AbstractTextInput.value$delegate.<anonymous>' call
        tmp_2 = null;
      } else {
        tmp_2 = value;
      }
      tmp_1 = tmp_2;
    }
    var tmp2 = tmp_1;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = AbstractTextInput$value$delegate$lambda(this);
    tmp_0.value$delegate_1 = (new RefreshDelegateProvider_0(this, tmp2, refreshFunction)).provideDelegate_z62loi_k$(this, value$factory_2());
    var tmp_3 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = AbstractTextInput$startValue$delegate$lambda(this);
    tmp_3.startValue$delegate_1 = (new RefreshDelegateProvider_0(this, value, refreshFunction_0)).provideDelegate_z62loi_k$(this, startValue$factory_2());
    var tmp_4 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = AbstractTextInput$placeholder$delegate$lambda(this);
    tmp_4.placeholder$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_1);
    var tmp_5 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_2 = AbstractTextInput$name$delegate$lambda(this);
    tmp_5.name$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_2);
    var tmp_6 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_3 = AbstractTextInput$maxlength$delegate$lambda(this);
    tmp_6.maxlength$delegate_1 = (new RefreshDelegateProvider_0(this, maxlength, refreshFunction_3)).provideDelegate_z62loi_k$(this, maxlength$factory());
    var tmp_7 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_4 = AbstractTextInput$disabled$delegate$lambda(this);
    tmp_7.disabled$delegate_1 = (new RefreshDelegateProvider_0(this, false, refreshFunction_4)).provideDelegate_z62loi_k$(this, disabled$factory_2());
    var tmp_8 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_5 = AbstractTextInput$autofocus$delegate$lambda(this);
    tmp_8.autofocus$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_5);
    var tmp_9 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_6 = AbstractTextInput$readonly$delegate$lambda(this);
    tmp_9.readonly$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_6);
    var tmp_10 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_7 = AbstractTextInput$size$delegate$lambda(this);
    tmp_10.size$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_7);
    var tmp_11 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_8 = AbstractTextInput$validationStatus$delegate$lambda(this);
    tmp_11.validationStatus$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_8);
    this.maskOptions_1 = null;
    this.mask_1 = null;
    this.useSnabbdomDistinctKey_wmc8hc_k$();
    this.setInternalEventListener_jia4mj_k$(AbstractTextInput$lambda);
  }
  protoOf(AbstractTextInput).get_observers_pupmq4_k$ = function () {
    return this.observers_1;
  };
  protoOf(AbstractTextInput).set_value_utlds3_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.value$delegate_1, this, value$factory_3(), _set____db54di);
  };
  protoOf(AbstractTextInput).set_value_v1vabv_k$ = function (_set____db54di) {
    return this.set_value_utlds3_k$((_set____db54di == null ? true : typeof _set____db54di === 'string') ? _set____db54di : THROW_CCE());
  };
  protoOf(AbstractTextInput).get_value_j01efc_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.value$delegate_1, this, value$factory_4());
  };
  protoOf(AbstractTextInput).set_startValue_lvb9d7_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.startValue$delegate_1, this, startValue$factory_3(), _set____db54di);
  };
  protoOf(AbstractTextInput).get_startValue_ooysvs_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.startValue$delegate_1, this, startValue$factory_4());
  };
  protoOf(AbstractTextInput).set_placeholder_heqcsh_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.placeholder$delegate_1, this, placeholder$factory(), _set____db54di);
  };
  protoOf(AbstractTextInput).get_placeholder_nsdr0q_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.placeholder$delegate_1, this, placeholder$factory_0());
  };
  protoOf(AbstractTextInput).set_name_wkmnld_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.name$delegate_1, this, name$factory_3(), _set____db54di);
  };
  protoOf(AbstractTextInput).get_name_woqyms_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.name$delegate_1, this, name$factory_4());
  };
  protoOf(AbstractTextInput).set_maxlength_9qgj5a_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.maxlength$delegate_1, this, maxlength$factory_0(), _set____db54di);
  };
  protoOf(AbstractTextInput).get_maxlength_aks9lt_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.maxlength$delegate_1, this, maxlength$factory_1());
  };
  protoOf(AbstractTextInput).set_disabled_rhu918_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.disabled$delegate_1, this, disabled$factory_3(), _set____db54di);
  };
  protoOf(AbstractTextInput).get_disabled_rbmjej_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.disabled$delegate_1, this, disabled$factory_4());
  };
  protoOf(AbstractTextInput).set_autofocus_w05tl8_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.autofocus$delegate_1, this, autofocus$factory(), _set____db54di);
  };
  protoOf(AbstractTextInput).get_autofocus_yxqmg0_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.autofocus$delegate_1, this, autofocus$factory_0());
  };
  protoOf(AbstractTextInput).set_readonly_jx0941_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.readonly$delegate_1, this, readonly$factory(), _set____db54di);
  };
  protoOf(AbstractTextInput).get_readonly_ow59u3_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.readonly$delegate_1, this, readonly$factory_0());
  };
  protoOf(AbstractTextInput).set_size_duu2i7_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.size$delegate_1, this, size$factory_1(), _set____db54di);
  };
  protoOf(AbstractTextInput).get_size_woubt6_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.size$delegate_1, this, size$factory_2());
  };
  protoOf(AbstractTextInput).set_validationStatus_hx0grd_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.validationStatus$delegate_1, this, validationStatus$factory_1(), _set____db54di);
  };
  protoOf(AbstractTextInput).get_validationStatus_he6hkc_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.validationStatus$delegate_1, this, validationStatus$factory_2());
  };
  protoOf(AbstractTextInput).set_maskOptions_mn7510_k$ = function (value) {
    if (!(this.maskOptions_1 == null)) {
      this.uninstallMask_qy142q_k$();
    }
    this.maskOptions_1 = value;
    this.installMask_iqt1zr_k$();
    this.refreshState_mh59ye_k$();
  };
  protoOf(AbstractTextInput).get_maskOptions_je1w2x_k$ = function () {
    return this.maskOptions_1;
  };
  protoOf(AbstractTextInput).set_mask_djmyzq_k$ = function (_set____db54di) {
    this.mask_1 = _set____db54di;
  };
  protoOf(AbstractTextInput).get_mask_woqbsl_k$ = function () {
    return this.mask_1;
  };
  protoOf(AbstractTextInput).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(Widget).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    classSetBuilder.add_9rsi26_k$(this.get_validationStatus_he6hkc_k$());
    classSetBuilder.add_9rsi26_k$(this.get_size_woubt6_k$());
  };
  protoOf(AbstractTextInput).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(Widget).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    var tmp0_safe_receiver = this.get_placeholder_nsdr0q_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.text.AbstractTextInput.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('placeholder', this.translate_s2ekyc_k$(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = this.get_name_woqyms_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.text.AbstractTextInput.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('name', tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = this.get_autofocus_yxqmg0_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.text.AbstractTextInput.buildAttributeSet.<anonymous>' call
      if (tmp2_safe_receiver) {
        attributeSetBuilder.add$default_4n2esg_k$('autofocus');
      }
    }
    var tmp3_safe_receiver = this.get_maxlength_aks9lt_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.text.AbstractTextInput.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('maxlength', '' + tmp3_safe_receiver);
    }
    var tmp4_safe_receiver = this.get_readonly_ow59u3_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.text.AbstractTextInput.buildAttributeSet.<anonymous>' call
      if (tmp4_safe_receiver) {
        attributeSetBuilder.add$default_4n2esg_k$('readonly');
      }
    }
    if (this.get_disabled_rbmjej_k$()) {
      attributeSetBuilder.add$default_4n2esg_k$('disabled');
    }
  };
  protoOf(AbstractTextInput).afterInsert_6ut630_k$ = function (node) {
    this.installMask_iqt1zr_k$();
    this.refreshState_mh59ye_k$();
  };
  protoOf(AbstractTextInput).afterDestroy_geowxa_k$ = function () {
    this.uninstallMask_qy142q_k$();
  };
  protoOf(AbstractTextInput).refreshState_mh59ye_k$ = function () {
    if (this.mask_1 == null) {
      var tmp0_safe_receiver = this.getElementD_y85vem_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = tmp1_safe_receiver;
      }
      var v = tmp;
      var tmp_0;
      if (!(v == this.get_value_j01efc_k$())) {
        var tmp_1;
        // Inline function 'kotlin.text.isNullOrEmpty' call
        if (v == null || charSequenceLength(v) === 0) {
          tmp_1 = this.get_value_j01efc_k$() == null;
        } else {
          tmp_1 = false;
        }
        tmp_0 = !tmp_1;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp2_safe_receiver = this.getElementD_y85vem_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          tmp2_safe_receiver.value = this.get_value_j01efc_k$();
        }
      }
    } else {
      var tmp3_safe_receiver = this.getElementD_y85vem_k$();
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.value = this.get_value_j01efc_k$();
      }
      ensureNotNull(this.mask_1).refresh_6a3uvf_k$();
      var tmp4_safe_receiver = this.mask_1;
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.getValue_wjkqt7_k$();
      var tmp_2;
      if (tmp5_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.form.text.AbstractTextInput.refreshState.<anonymous>' call
        var tmp0_safe_receiver_0 = this.get_maskOptions_je1w2x_k$();
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.maskNumericValue_uvrmru_k$(tmp5_safe_receiver);
        tmp_2 = tmp1_elvis_lhs == null ? tmp5_safe_receiver : tmp1_elvis_lhs;
      }
      var tmp6_safe_receiver = tmp_2;
      var tmp_3;
      if (tmp6_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.text.ifEmpty' call
        var tmp_4;
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(tmp6_safe_receiver) === 0) {
          // Inline function 'io.kvision.form.text.AbstractTextInput.refreshState.<anonymous>' call
          tmp_4 = null;
        } else {
          tmp_4 = tmp6_safe_receiver;
        }
        tmp_3 = tmp_4;
      }
      var v_0 = tmp_3;
      if (!(this.get_value_j01efc_k$() == v_0)) {
        this.set_value_utlds3_k$(v_0);
      }
    }
  };
  protoOf(AbstractTextInput).changeValue_gjh39t_k$ = function () {
    if (this.mask_1 == null) {
      var tmp0_safe_receiver = this.getElementD_y85vem_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = tmp1_safe_receiver;
      }
      var v = tmp;
      if (!(v == null) && !(v === '')) {
        this.set_value_utlds3_k$(v);
      } else {
        this.set_value_utlds3_k$(null);
      }
    }
  };
  protoOf(AbstractTextInput).installMask_iqt1zr_k$ = function () {
    if (!(this.getElement_acounu_k$() == null) && !(this.get_maskOptions_je1w2x_k$() == null)) {
      if (MaskManager_getInstance().get_factory_gsiw2n_k$() == null)
        throw IllegalStateException_init_$Create$_0('Input mask module has not been initialized');
      var tmp = this;
      var tmp_0 = ensureNotNull(MaskManager_getInstance().get_factory_gsiw2n_k$());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = this.getElement_acounu_k$();
      tmp.mask_1 = tmp_0.createMask_ahmdb8_k$(tmp$ret$1, ensureNotNull(this.get_maskOptions_je1w2x_k$()));
      var tmp_1 = ensureNotNull(this.mask_1);
      tmp_1.onChange_li5o3l_k$(AbstractTextInput$installMask$lambda(this));
    }
  };
  protoOf(AbstractTextInput).uninstallMask_qy142q_k$ = function () {
    var tmp0_safe_receiver = this.mask_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.destroy_evhcfe_k$();
    }
    this.mask_1 = null;
  };
  protoOf(AbstractTextInput).getState_wi99ln_k$ = function () {
    return this.get_value_j01efc_k$();
  };
  protoOf(AbstractTextInput).subscribe_srqeqc_k$ = function (observer) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.observers_1.add_utx5q5_k$(observer);
    observer(this.get_value_j01efc_k$());
    return AbstractTextInput$subscribe$lambda(this, observer);
  };
  protoOf(AbstractTextInput).subscribe_i8u9zb_k$ = function (observer) {
    return this.subscribe_srqeqc_k$(observer);
  };
  protoOf(AbstractTextInput).subscribe_go603e_k$ = function (observer) {
    return this.subscribe_srqeqc_k$(observer);
  };
  protoOf(AbstractTextInput).setState_i5i93c_k$ = function (state) {
    this.set_value_utlds3_k$(state);
  };
  protoOf(AbstractTextInput).setState_otrcj3_k$ = function (state) {
    return this.setState_i5i93c_k$((state == null ? true : typeof state === 'string') ? state : THROW_CCE());
  };
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_utlds3_k$(value);
    });
  }
  function startValue$factory_2() {
    return getPropertyCallableRef('startValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_startValue_ooysvs_k$();
    }, function (receiver, value) {
      return receiver.set_startValue_lvb9d7_k$(value);
    });
  }
  function maxlength$factory() {
    return getPropertyCallableRef('maxlength', 1, KMutableProperty1, function (receiver) {
      return receiver.get_maxlength_aks9lt_k$();
    }, function (receiver, value) {
      return receiver.set_maxlength_9qgj5a_k$(value);
    });
  }
  function disabled$factory_2() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_rhu918_k$(value);
    });
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_utlds3_k$(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_utlds3_k$(value);
    });
  }
  function startValue$factory_3() {
    return getPropertyCallableRef('startValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_startValue_ooysvs_k$();
    }, function (receiver, value) {
      return receiver.set_startValue_lvb9d7_k$(value);
    });
  }
  function startValue$factory_4() {
    return getPropertyCallableRef('startValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_startValue_ooysvs_k$();
    }, function (receiver, value) {
      return receiver.set_startValue_lvb9d7_k$(value);
    });
  }
  function placeholder$factory() {
    return getPropertyCallableRef('placeholder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_placeholder_nsdr0q_k$();
    }, function (receiver, value) {
      return receiver.set_placeholder_heqcsh_k$(value);
    });
  }
  function placeholder$factory_0() {
    return getPropertyCallableRef('placeholder', 1, KMutableProperty1, function (receiver) {
      return receiver.get_placeholder_nsdr0q_k$();
    }, function (receiver, value) {
      return receiver.set_placeholder_heqcsh_k$(value);
    });
  }
  function name$factory_3() {
    return getPropertyCallableRef('name', 1, KMutableProperty1, function (receiver) {
      return receiver.get_name_woqyms_k$();
    }, function (receiver, value) {
      return receiver.set_name_wkmnld_k$(value);
    });
  }
  function name$factory_4() {
    return getPropertyCallableRef('name', 1, KMutableProperty1, function (receiver) {
      return receiver.get_name_woqyms_k$();
    }, function (receiver, value) {
      return receiver.set_name_wkmnld_k$(value);
    });
  }
  function maxlength$factory_0() {
    return getPropertyCallableRef('maxlength', 1, KMutableProperty1, function (receiver) {
      return receiver.get_maxlength_aks9lt_k$();
    }, function (receiver, value) {
      return receiver.set_maxlength_9qgj5a_k$(value);
    });
  }
  function maxlength$factory_1() {
    return getPropertyCallableRef('maxlength', 1, KMutableProperty1, function (receiver) {
      return receiver.get_maxlength_aks9lt_k$();
    }, function (receiver, value) {
      return receiver.set_maxlength_9qgj5a_k$(value);
    });
  }
  function disabled$factory_3() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_rhu918_k$(value);
    });
  }
  function disabled$factory_4() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_rhu918_k$(value);
    });
  }
  function autofocus$factory() {
    return getPropertyCallableRef('autofocus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_autofocus_yxqmg0_k$();
    }, function (receiver, value) {
      return receiver.set_autofocus_w05tl8_k$(value);
    });
  }
  function autofocus$factory_0() {
    return getPropertyCallableRef('autofocus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_autofocus_yxqmg0_k$();
    }, function (receiver, value) {
      return receiver.set_autofocus_w05tl8_k$(value);
    });
  }
  function readonly$factory() {
    return getPropertyCallableRef('readonly', 1, KMutableProperty1, function (receiver) {
      return receiver.get_readonly_ow59u3_k$();
    }, function (receiver, value) {
      return receiver.set_readonly_jx0941_k$(value);
    });
  }
  function readonly$factory_0() {
    return getPropertyCallableRef('readonly', 1, KMutableProperty1, function (receiver) {
      return receiver.get_readonly_ow59u3_k$();
    }, function (receiver, value) {
      return receiver.set_readonly_jx0941_k$(value);
    });
  }
  function size$factory_1() {
    return getPropertyCallableRef('size', 1, KMutableProperty1, function (receiver) {
      return receiver.get_size_woubt6_k$();
    }, function (receiver, value) {
      return receiver.set_size_duu2i7_k$(value);
    });
  }
  function size$factory_2() {
    return getPropertyCallableRef('size', 1, KMutableProperty1, function (receiver) {
      return receiver.get_size_woubt6_k$();
    }, function (receiver, value) {
      return receiver.set_size_duu2i7_k$(value);
    });
  }
  function validationStatus$factory_1() {
    return getPropertyCallableRef('validationStatus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_validationStatus_he6hkc_k$();
    }, function (receiver, value) {
      return receiver.set_validationStatus_hx0grd_k$(value);
    });
  }
  function validationStatus$factory_2() {
    return getPropertyCallableRef('validationStatus', 1, KMutableProperty1, function (receiver) {
      return receiver.get_validationStatus_he6hkc_k$();
    }, function (receiver, value) {
      return receiver.set_validationStatus_hx0grd_k$(value);
    });
  }
  function MaskFactory() {
  }
  function MaskManager() {
    MaskManager_instance = this;
    this.factory_1 = null;
  }
  protoOf(MaskManager).set_factory_4ukst4_k$ = function (_set____db54di) {
    this.factory_1 = _set____db54di;
  };
  protoOf(MaskManager).get_factory_gsiw2n_k$ = function () {
    return this.factory_1;
  };
  var MaskManager_instance;
  function MaskManager_getInstance() {
    if (MaskManager_instance == null)
      new MaskManager();
    return MaskManager_instance;
  }
  function Mask() {
  }
  function MaskOptions() {
  }
  function Password(value, name, label, rich, floating, init) {
    value = value === VOID ? null : value;
    name = name === VOID ? null : name;
    label = label === VOID ? null : label;
    rich = rich === VOID ? false : rich;
    floating = floating === VOID ? false : floating;
    init = init === VOID ? null : init;
    Text.call(this, InputType_PASSWORD_getInstance(), value, name, null, label, rich, floating);
    if (init == null)
      null;
    else
      init(this);
    this.floatingPlaceholder_4usgcd_k$();
  }
  function Text(type, value, name, maxlength, label, rich, floating, init) {
    type = type === VOID ? InputType_TEXT_getInstance() : type;
    value = value === VOID ? null : value;
    name = name === VOID ? null : name;
    maxlength = maxlength === VOID ? null : maxlength;
    label = label === VOID ? null : label;
    rich = rich === VOID ? false : rich;
    floating = floating === VOID ? false : floating;
    init = init === VOID ? null : init;
    AbstractText.call(this, label, rich, floating);
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new TextInput(type, value, maxlength);
    // Inline function 'io.kvision.form.text.Text.input.<anonymous>' call
    this_0.set_id_wyyipr_k$(this.get_idc_18j3r5_k$());
    this_0.set_name_wkmnld_k$(name);
    tmp.input_1 = this_0;
    this.input_1.set_eventTarget_i37bvc_k$(this);
    if (!floating) {
      this.addPrivate_g3v94y_k$(this.get_flabel_ddfcrb_k$());
      this.addPrivate_g3v94y_k$(this.input_1);
    } else {
      this.addPrivate_g3v94y_k$(this.input_1);
      this.addPrivate_g3v94y_k$(this.get_flabel_ddfcrb_k$());
    }
    this.addPrivate_g3v94y_k$(this.get_invalidFeedback_fj7eer_k$());
    if (init == null)
      null;
    else
      init(this);
    this.floatingPlaceholder_4usgcd_k$();
  }
  protoOf(Text).set_type_kolurh_k$ = function (value) {
    this.input_1.set_type_kolurh_k$(value);
  };
  protoOf(Text).get_type_wovaf7_k$ = function () {
    return this.input_1.get_type_wovaf7_k$();
  };
  protoOf(Text).set_autocomplete_m8rt9o_k$ = function (value) {
    this.input_1.set_autocomplete_m8rt9o_k$(value);
  };
  protoOf(Text).get_autocomplete_9bbtn3_k$ = function () {
    return this.input_1.get_autocomplete_9bbtn3_k$();
  };
  protoOf(Text).get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  function text(_this__u8e3s4, type, value, name, maxlength, label, rich, floating, init) {
    type = type === VOID ? InputType_TEXT_getInstance() : type;
    value = value === VOID ? null : value;
    name = name === VOID ? null : name;
    maxlength = maxlength === VOID ? null : maxlength;
    label = label === VOID ? null : label;
    rich = rich === VOID ? false : rich;
    floating = floating === VOID ? false : floating;
    init = init === VOID ? null : init;
    var text = new Text(type, value, name, maxlength, label, rich, floating, init);
    _this__u8e3s4.add_rekwpt_k$(text);
    return text;
  }
  function TextInput$type$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function TextInput$autocomplete$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function TextInput(type, value, maxlength, className, init) {
    type = type === VOID ? InputType_TEXT_getInstance() : type;
    value = value === VOID ? null : value;
    maxlength = maxlength === VOID ? null : maxlength;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var tmp;
    if (className == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.text.TextInput.<init>.<anonymous>' call
      tmp = className + ' ';
    }
    var tmp1_elvis_lhs = tmp;
    AbstractTextInput.call(this, value, maxlength, (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + 'form-control');
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = TextInput$type$delegate$lambda(this);
    tmp_0.type$delegate_1 = (new RefreshDelegateProvider_0(this, type, refreshFunction)).provideDelegate_z62loi_k$(this, type$factory_2());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = TextInput$autocomplete$delegate$lambda(this);
    tmp_1.autocomplete$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_0);
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(TextInput).set_type_kolurh_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.type$delegate_1, this, type$factory_3(), _set____db54di);
  };
  protoOf(TextInput).get_type_wovaf7_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.type$delegate_1, this, type$factory_4());
  };
  protoOf(TextInput).set_autocomplete_m8rt9o_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.autocomplete$delegate_1, this, autocomplete$factory_1(), _set____db54di);
  };
  protoOf(TextInput).get_autocomplete_9bbtn3_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.autocomplete$delegate_1, this, autocomplete$factory_2());
  };
  protoOf(TextInput).render_fgfjvu_k$ = function () {
    return this.render_ab0tlo_k$('input');
  };
  protoOf(TextInput).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(AbstractTextInput).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    if (this.get_type_wovaf7_k$().equals(InputType_COLOR_getInstance())) {
      classSetBuilder.add_udnk2x_k$('form-control-color');
    }
  };
  protoOf(TextInput).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(AbstractTextInput).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    attributeSetBuilder.add_lbri6p_k$('type', this.get_type_wovaf7_k$().get_type_t5wobc_k$());
    var tmp0_safe_receiver = this.get_startValue_ooysvs_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.text.TextInput.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('value', tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.get_autocomplete_9bbtn3_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.form.text.TextInput.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('autocomplete', tmp1_safe_receiver.get_type_wovaf7_k$());
    }
  };
  function textInput(_this__u8e3s4, type, value, maxlength, className, init) {
    type = type === VOID ? InputType_TEXT_getInstance() : type;
    value = value === VOID ? null : value;
    maxlength = maxlength === VOID ? null : maxlength;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var textInput = new TextInput(type, value, maxlength, className, init);
    _this__u8e3s4.add_rekwpt_k$(textInput);
    return textInput;
  }
  function type$factory_2() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_kolurh_k$(value);
    });
  }
  function type$factory_3() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_kolurh_k$(value);
    });
  }
  function type$factory_4() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_kolurh_k$(value);
    });
  }
  function autocomplete$factory_1() {
    return getPropertyCallableRef('autocomplete', 1, KMutableProperty1, function (receiver) {
      return receiver.get_autocomplete_9bbtn3_k$();
    }, function (receiver, value) {
      return receiver.set_autocomplete_m8rt9o_k$(value);
    });
  }
  function autocomplete$factory_2() {
    return getPropertyCallableRef('autocomplete', 1, KMutableProperty1, function (receiver) {
      return receiver.get_autocomplete_9bbtn3_k$();
    }, function (receiver, value) {
      return receiver.set_autocomplete_m8rt9o_k$(value);
    });
  }
  var ButtonType_BUTTON_instance;
  var ButtonType_SUBMIT_instance;
  var ButtonType_RESET_instance;
  function values_50() {
    return [ButtonType_BUTTON_getInstance(), ButtonType_SUBMIT_getInstance(), ButtonType_RESET_getInstance()];
  }
  function valueOf_50(value) {
    switch (value) {
      case 'BUTTON':
        return ButtonType_BUTTON_getInstance();
      case 'SUBMIT':
        return ButtonType_SUBMIT_getInstance();
      case 'RESET':
        return ButtonType_RESET_getInstance();
      default:
        ButtonType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_50() {
    if ($ENTRIES_50 == null)
      $ENTRIES_50 = enumEntries(values_50());
    return $ENTRIES_50;
  }
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_getInstance();
    ButtonType_entriesInitialized = true;
    ButtonType_BUTTON_instance = new ButtonType('BUTTON', 0, 'button');
    ButtonType_SUBMIT_instance = new ButtonType('SUBMIT', 1, 'submit');
    ButtonType_RESET_instance = new ButtonType('RESET', 2, 'reset');
  }
  var $ENTRIES_50;
  function ButtonType(name, ordinal, buttonType) {
    Enum.call(this, name, ordinal);
    this.buttonType_1 = buttonType;
  }
  protoOf(ButtonType).get_buttonType_xxxis6_k$ = function () {
    return this.buttonType_1;
  };
  function Button$text$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$icon$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$style$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$type$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$disabled$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$image$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$size$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$block$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$separator$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$labelFirst$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Button$onClick$lambda$lambda($handler, $this_setEventListener) {
    return function (e) {
      $handler($this_setEventListener.self, e);
      return Unit_getInstance();
    };
  }
  function Button$onClick$lambda($handler) {
    return function ($this$setEventListener) {
      $this$setEventListener.click = Button$onClick$lambda$lambda($handler, $this$setEventListener);
      return Unit_getInstance();
    };
  }
  function Button(text, icon, style, type, disabled, separator, labelFirst, className, init) {
    icon = icon === VOID ? null : icon;
    style = style === VOID ? ButtonStyle_PRIMARY_getInstance() : style;
    type = type === VOID ? ButtonType_BUTTON_getInstance() : type;
    disabled = disabled === VOID ? false : disabled;
    separator = separator === VOID ? null : separator;
    labelFirst = labelFirst === VOID ? true : labelFirst;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = Button$text$delegate$lambda(this);
    tmp.text$delegate_1 = (new RefreshDelegateProvider_0(this, text, refreshFunction)).provideDelegate_z62loi_k$(this, text$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = Button$icon$delegate$lambda(this);
    tmp_0.icon$delegate_1 = (new RefreshDelegateProvider_0(this, icon, refreshFunction_0)).provideDelegate_z62loi_k$(this, icon$factory());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = Button$style$delegate$lambda(this);
    tmp_1.style$delegate_1 = (new RefreshDelegateProvider_0(this, style, refreshFunction_1)).provideDelegate_z62loi_k$(this, style$factory_1());
    var tmp_2 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_2 = Button$type$delegate$lambda(this);
    tmp_2.type$delegate_1 = (new RefreshDelegateProvider_0(this, type, refreshFunction_2)).provideDelegate_z62loi_k$(this, type$factory_5());
    var tmp_3 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_3 = Button$disabled$delegate$lambda(this);
    tmp_3.disabled$delegate_1 = (new RefreshDelegateProvider_0(this, disabled, refreshFunction_3)).provideDelegate_z62loi_k$(this, disabled$factory_5());
    var tmp_4 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_4 = Button$image$delegate$lambda(this);
    tmp_4.image$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_4);
    var tmp_5 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_5 = Button$size$delegate$lambda(this);
    tmp_5.size$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_5);
    var tmp_6 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_6 = Button$block$delegate$lambda(this);
    tmp_6.block$delegate_1 = (new RefreshDelegateProvider_0(this, false, refreshFunction_6)).provideDelegate_z62loi_k$(this, block$factory());
    var tmp_7 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_7 = Button$separator$delegate$lambda(this);
    tmp_7.separator$delegate_1 = (new RefreshDelegateProvider_0(this, separator, refreshFunction_7)).provideDelegate_z62loi_k$(this, separator$factory());
    var tmp_8 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_8 = Button$labelFirst$delegate$lambda(this);
    tmp_8.labelFirst$delegate_1 = (new RefreshDelegateProvider_0(this, labelFirst, refreshFunction_8)).provideDelegate_z62loi_k$(this, labelFirst$factory_2());
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(Button).set_text_oy06f4_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.text$delegate_1, this, text$factory_0(), _set____db54di);
  };
  protoOf(Button).get_text_wouvsm_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.text$delegate_1, this, text$factory_1());
  };
  protoOf(Button).set_icon_t78tsv_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.icon$delegate_1, this, icon$factory_0(), _set____db54di);
  };
  protoOf(Button).get_icon_wont8i_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.icon$delegate_1, this, icon$factory_1());
  };
  protoOf(Button).set_style_x72dio_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.style$delegate_1, this, style$factory_2(), _set____db54di);
  };
  protoOf(Button).get_style_iyqetk_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.style$delegate_1, this, style$factory_3());
  };
  protoOf(Button).set_type_rmoq57_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.type$delegate_1, this, type$factory_6(), _set____db54di);
  };
  protoOf(Button).get_type_wovaf7_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.type$delegate_1, this, type$factory_7());
  };
  protoOf(Button).set_disabled_rhu918_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.disabled$delegate_1, this, disabled$factory_6(), _set____db54di);
  };
  protoOf(Button).get_disabled_rbmjej_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.disabled$delegate_1, this, disabled$factory_7());
  };
  protoOf(Button).set_image_f7p9g9_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.image$delegate_1, this, image$factory(), _set____db54di);
  };
  protoOf(Button).get_image_it3i2a_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.image$delegate_1, this, image$factory_0());
  };
  protoOf(Button).set_size_wi2upv_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.size$delegate_1, this, size$factory_3(), _set____db54di);
  };
  protoOf(Button).get_size_woubt6_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.size$delegate_1, this, size$factory_4());
  };
  protoOf(Button).set_block_7gwl97_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.block$delegate_1, this, block$factory_0(), _set____db54di);
  };
  protoOf(Button).get_block_ip8l7o_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.block$delegate_1, this, block$factory_1());
  };
  protoOf(Button).set_separator_fi7cb3_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.separator$delegate_1, this, separator$factory_0(), _set____db54di);
  };
  protoOf(Button).get_separator_xuwon8_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.separator$delegate_1, this, separator$factory_1());
  };
  protoOf(Button).set_labelFirst_q3ot2c_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.labelFirst$delegate_1, this, labelFirst$factory_3(), _set____db54di);
  };
  protoOf(Button).get_labelFirst_n6uzdx_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.labelFirst$delegate_1, this, labelFirst$factory_4());
  };
  protoOf(Button).render_fgfjvu_k$ = function () {
    var t = this.createLabelWithIcon_7iayj6_k$(this.get_text_wouvsm_k$(), this.get_icon_wont8i_k$(), this.get_image_it3i2a_k$(), this.get_separator_xuwon8_k$());
    var tmp;
    if (this.get_labelFirst_n6uzdx_k$()) {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.childrenVNodes_2corie_k$();
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = t.concat(elements);
      tmp = this.render_prnnht_k$('button', tmp$ret$1);
    } else {
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = this.childrenVNodes_2corie_k$().concat(t);
      tmp = this.render_prnnht_k$('button', tmp$ret$3);
    }
    return tmp;
  };
  protoOf(Button).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    classSetBuilder.add_udnk2x_k$('btn');
    classSetBuilder.add_9rsi26_k$(this.get_style_iyqetk_k$());
    classSetBuilder.add_9rsi26_k$(this.get_size_woubt6_k$());
    if (this.get_block_ip8l7o_k$()) {
      classSetBuilder.add_udnk2x_k$('btn-block');
    }
  };
  protoOf(Button).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(SimplePanel).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    attributeSetBuilder.add_lbri6p_k$('type', this.get_type_wovaf7_k$().buttonType_1);
    if (this.get_disabled_rbmjej_k$()) {
      attributeSetBuilder.add$default_4n2esg_k$('disabled');
    }
  };
  protoOf(Button).onClick_br9hmj_k$ = function (handler) {
    return this.setEventListener_4rv3s8_k$(Button$onClick$lambda(handler));
  };
  function button(_this__u8e3s4, text, icon, style, type, disabled, separator, labelFirst, className, init) {
    icon = icon === VOID ? null : icon;
    style = style === VOID ? ButtonStyle_PRIMARY_getInstance() : style;
    type = type === VOID ? ButtonType_BUTTON_getInstance() : type;
    disabled = disabled === VOID ? false : disabled;
    separator = separator === VOID ? null : separator;
    labelFirst = labelFirst === VOID ? true : labelFirst;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var button = new Button(text, icon, style, type, disabled, separator, labelFirst, className, init);
    _this__u8e3s4.add_rekwpt_k$(button);
    return button;
  }
  var ButtonStyle_PRIMARY_instance;
  var ButtonStyle_SECONDARY_instance;
  var ButtonStyle_SUCCESS_instance;
  var ButtonStyle_DANGER_instance;
  var ButtonStyle_WARNING_instance;
  var ButtonStyle_INFO_instance;
  var ButtonStyle_LIGHT_instance;
  var ButtonStyle_DARK_instance;
  var ButtonStyle_LINK_instance;
  var ButtonStyle_OUTLINEPRIMARY_instance;
  var ButtonStyle_OUTLINESECONDARY_instance;
  var ButtonStyle_OUTLINESUCCESS_instance;
  var ButtonStyle_OUTLINEDANGER_instance;
  var ButtonStyle_OUTLINEWARNING_instance;
  var ButtonStyle_OUTLINEINFO_instance;
  var ButtonStyle_OUTLINELIGHT_instance;
  var ButtonStyle_OUTLINEDARK_instance;
  function values_51() {
    return [ButtonStyle_PRIMARY_getInstance(), ButtonStyle_SECONDARY_getInstance(), ButtonStyle_SUCCESS_getInstance(), ButtonStyle_DANGER_getInstance(), ButtonStyle_WARNING_getInstance(), ButtonStyle_INFO_getInstance(), ButtonStyle_LIGHT_getInstance(), ButtonStyle_DARK_getInstance(), ButtonStyle_LINK_getInstance(), ButtonStyle_OUTLINEPRIMARY_getInstance(), ButtonStyle_OUTLINESECONDARY_getInstance(), ButtonStyle_OUTLINESUCCESS_getInstance(), ButtonStyle_OUTLINEDANGER_getInstance(), ButtonStyle_OUTLINEWARNING_getInstance(), ButtonStyle_OUTLINEINFO_getInstance(), ButtonStyle_OUTLINELIGHT_getInstance(), ButtonStyle_OUTLINEDARK_getInstance()];
  }
  function valueOf_51(value) {
    switch (value) {
      case 'PRIMARY':
        return ButtonStyle_PRIMARY_getInstance();
      case 'SECONDARY':
        return ButtonStyle_SECONDARY_getInstance();
      case 'SUCCESS':
        return ButtonStyle_SUCCESS_getInstance();
      case 'DANGER':
        return ButtonStyle_DANGER_getInstance();
      case 'WARNING':
        return ButtonStyle_WARNING_getInstance();
      case 'INFO':
        return ButtonStyle_INFO_getInstance();
      case 'LIGHT':
        return ButtonStyle_LIGHT_getInstance();
      case 'DARK':
        return ButtonStyle_DARK_getInstance();
      case 'LINK':
        return ButtonStyle_LINK_getInstance();
      case 'OUTLINEPRIMARY':
        return ButtonStyle_OUTLINEPRIMARY_getInstance();
      case 'OUTLINESECONDARY':
        return ButtonStyle_OUTLINESECONDARY_getInstance();
      case 'OUTLINESUCCESS':
        return ButtonStyle_OUTLINESUCCESS_getInstance();
      case 'OUTLINEDANGER':
        return ButtonStyle_OUTLINEDANGER_getInstance();
      case 'OUTLINEWARNING':
        return ButtonStyle_OUTLINEWARNING_getInstance();
      case 'OUTLINEINFO':
        return ButtonStyle_OUTLINEINFO_getInstance();
      case 'OUTLINELIGHT':
        return ButtonStyle_OUTLINELIGHT_getInstance();
      case 'OUTLINEDARK':
        return ButtonStyle_OUTLINEDARK_getInstance();
      default:
        ButtonStyle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_51() {
    if ($ENTRIES_51 == null)
      $ENTRIES_51 = enumEntries(values_51());
    return $ENTRIES_51;
  }
  var ButtonStyle_entriesInitialized;
  function ButtonStyle_initEntries() {
    if (ButtonStyle_entriesInitialized)
      return Unit_getInstance();
    ButtonStyle_entriesInitialized = true;
    ButtonStyle_PRIMARY_instance = new ButtonStyle('PRIMARY', 0, 'btn-primary');
    ButtonStyle_SECONDARY_instance = new ButtonStyle('SECONDARY', 1, 'btn-secondary');
    ButtonStyle_SUCCESS_instance = new ButtonStyle('SUCCESS', 2, 'btn-success');
    ButtonStyle_DANGER_instance = new ButtonStyle('DANGER', 3, 'btn-danger');
    ButtonStyle_WARNING_instance = new ButtonStyle('WARNING', 4, 'btn-warning');
    ButtonStyle_INFO_instance = new ButtonStyle('INFO', 5, 'btn-info');
    ButtonStyle_LIGHT_instance = new ButtonStyle('LIGHT', 6, 'btn-light');
    ButtonStyle_DARK_instance = new ButtonStyle('DARK', 7, 'btn-dark');
    ButtonStyle_LINK_instance = new ButtonStyle('LINK', 8, 'btn-link');
    ButtonStyle_OUTLINEPRIMARY_instance = new ButtonStyle('OUTLINEPRIMARY', 9, 'btn-outline-primary');
    ButtonStyle_OUTLINESECONDARY_instance = new ButtonStyle('OUTLINESECONDARY', 10, 'btn-outline-secondary');
    ButtonStyle_OUTLINESUCCESS_instance = new ButtonStyle('OUTLINESUCCESS', 11, 'btn-outline-success');
    ButtonStyle_OUTLINEDANGER_instance = new ButtonStyle('OUTLINEDANGER', 12, 'btn-outline-danger');
    ButtonStyle_OUTLINEWARNING_instance = new ButtonStyle('OUTLINEWARNING', 13, 'btn-outline-warning');
    ButtonStyle_OUTLINEINFO_instance = new ButtonStyle('OUTLINEINFO', 14, 'btn-outline-info');
    ButtonStyle_OUTLINELIGHT_instance = new ButtonStyle('OUTLINELIGHT', 15, 'btn-outline-light');
    ButtonStyle_OUTLINEDARK_instance = new ButtonStyle('OUTLINEDARK', 16, 'btn-outline-dark');
  }
  var $ENTRIES_51;
  function ButtonStyle(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(ButtonStyle).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  var ButtonSize_LARGE_instance;
  var ButtonSize_SMALL_instance;
  var ButtonSize_XSMALL_instance;
  function values_52() {
    return [ButtonSize_LARGE_getInstance(), ButtonSize_SMALL_getInstance(), ButtonSize_XSMALL_getInstance()];
  }
  function valueOf_52(value) {
    switch (value) {
      case 'LARGE':
        return ButtonSize_LARGE_getInstance();
      case 'SMALL':
        return ButtonSize_SMALL_getInstance();
      case 'XSMALL':
        return ButtonSize_XSMALL_getInstance();
      default:
        ButtonSize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_52() {
    if ($ENTRIES_52 == null)
      $ENTRIES_52 = enumEntries(values_52());
    return $ENTRIES_52;
  }
  var ButtonSize_entriesInitialized;
  function ButtonSize_initEntries() {
    if (ButtonSize_entriesInitialized)
      return Unit_getInstance();
    ButtonSize_entriesInitialized = true;
    ButtonSize_LARGE_instance = new ButtonSize('LARGE', 0, 'btn-lg');
    ButtonSize_SMALL_instance = new ButtonSize('SMALL', 1, 'btn-sm');
    ButtonSize_XSMALL_instance = new ButtonSize('XSMALL', 2, 'btn-xsm');
  }
  var $ENTRIES_52;
  function ButtonSize(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(ButtonSize).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function ButtonType_BUTTON_getInstance() {
    ButtonType_initEntries();
    return ButtonType_BUTTON_instance;
  }
  function ButtonType_SUBMIT_getInstance() {
    ButtonType_initEntries();
    return ButtonType_SUBMIT_instance;
  }
  function ButtonType_RESET_getInstance() {
    ButtonType_initEntries();
    return ButtonType_RESET_instance;
  }
  function ButtonStyle_PRIMARY_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_PRIMARY_instance;
  }
  function ButtonStyle_SECONDARY_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_SECONDARY_instance;
  }
  function ButtonStyle_SUCCESS_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_SUCCESS_instance;
  }
  function ButtonStyle_DANGER_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_DANGER_instance;
  }
  function ButtonStyle_WARNING_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_WARNING_instance;
  }
  function ButtonStyle_INFO_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_INFO_instance;
  }
  function ButtonStyle_LIGHT_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_LIGHT_instance;
  }
  function ButtonStyle_DARK_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_DARK_instance;
  }
  function ButtonStyle_LINK_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_LINK_instance;
  }
  function ButtonStyle_OUTLINEPRIMARY_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_OUTLINEPRIMARY_instance;
  }
  function ButtonStyle_OUTLINESECONDARY_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_OUTLINESECONDARY_instance;
  }
  function ButtonStyle_OUTLINESUCCESS_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_OUTLINESUCCESS_instance;
  }
  function ButtonStyle_OUTLINEDANGER_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_OUTLINEDANGER_instance;
  }
  function ButtonStyle_OUTLINEWARNING_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_OUTLINEWARNING_instance;
  }
  function ButtonStyle_OUTLINEINFO_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_OUTLINEINFO_instance;
  }
  function ButtonStyle_OUTLINELIGHT_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_OUTLINELIGHT_instance;
  }
  function ButtonStyle_OUTLINEDARK_getInstance() {
    ButtonStyle_initEntries();
    return ButtonStyle_OUTLINEDARK_instance;
  }
  function ButtonSize_LARGE_getInstance() {
    ButtonSize_initEntries();
    return ButtonSize_LARGE_instance;
  }
  function ButtonSize_SMALL_getInstance() {
    ButtonSize_initEntries();
    return ButtonSize_SMALL_instance;
  }
  function ButtonSize_XSMALL_getInstance() {
    ButtonSize_initEntries();
    return ButtonSize_XSMALL_instance;
  }
  function text$factory() {
    return getPropertyCallableRef('text', 1, KMutableProperty1, function (receiver) {
      return receiver.get_text_wouvsm_k$();
    }, function (receiver, value) {
      return receiver.set_text_oy06f4_k$(value);
    });
  }
  function icon$factory() {
    return getPropertyCallableRef('icon', 1, KMutableProperty1, function (receiver) {
      return receiver.get_icon_wont8i_k$();
    }, function (receiver, value) {
      return receiver.set_icon_t78tsv_k$(value);
    });
  }
  function style$factory_1() {
    return getPropertyCallableRef('style', 1, KMutableProperty1, function (receiver) {
      return receiver.get_style_iyqetk_k$();
    }, function (receiver, value) {
      return receiver.set_style_x72dio_k$(value);
    });
  }
  function type$factory_5() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_rmoq57_k$(value);
    });
  }
  function disabled$factory_5() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_rhu918_k$(value);
    });
  }
  function block$factory() {
    return getPropertyCallableRef('block', 1, KMutableProperty1, function (receiver) {
      return receiver.get_block_ip8l7o_k$();
    }, function (receiver, value) {
      return receiver.set_block_7gwl97_k$(value);
    });
  }
  function separator$factory() {
    return getPropertyCallableRef('separator', 1, KMutableProperty1, function (receiver) {
      return receiver.get_separator_xuwon8_k$();
    }, function (receiver, value) {
      return receiver.set_separator_fi7cb3_k$(value);
    });
  }
  function labelFirst$factory_2() {
    return getPropertyCallableRef('labelFirst', 1, KMutableProperty1, function (receiver) {
      return receiver.get_labelFirst_n6uzdx_k$();
    }, function (receiver, value) {
      return receiver.set_labelFirst_q3ot2c_k$(value);
    });
  }
  function text$factory_0() {
    return getPropertyCallableRef('text', 1, KMutableProperty1, function (receiver) {
      return receiver.get_text_wouvsm_k$();
    }, function (receiver, value) {
      return receiver.set_text_oy06f4_k$(value);
    });
  }
  function text$factory_1() {
    return getPropertyCallableRef('text', 1, KMutableProperty1, function (receiver) {
      return receiver.get_text_wouvsm_k$();
    }, function (receiver, value) {
      return receiver.set_text_oy06f4_k$(value);
    });
  }
  function icon$factory_0() {
    return getPropertyCallableRef('icon', 1, KMutableProperty1, function (receiver) {
      return receiver.get_icon_wont8i_k$();
    }, function (receiver, value) {
      return receiver.set_icon_t78tsv_k$(value);
    });
  }
  function icon$factory_1() {
    return getPropertyCallableRef('icon', 1, KMutableProperty1, function (receiver) {
      return receiver.get_icon_wont8i_k$();
    }, function (receiver, value) {
      return receiver.set_icon_t78tsv_k$(value);
    });
  }
  function style$factory_2() {
    return getPropertyCallableRef('style', 1, KMutableProperty1, function (receiver) {
      return receiver.get_style_iyqetk_k$();
    }, function (receiver, value) {
      return receiver.set_style_x72dio_k$(value);
    });
  }
  function style$factory_3() {
    return getPropertyCallableRef('style', 1, KMutableProperty1, function (receiver) {
      return receiver.get_style_iyqetk_k$();
    }, function (receiver, value) {
      return receiver.set_style_x72dio_k$(value);
    });
  }
  function type$factory_6() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_rmoq57_k$(value);
    });
  }
  function type$factory_7() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_rmoq57_k$(value);
    });
  }
  function disabled$factory_6() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_rhu918_k$(value);
    });
  }
  function disabled$factory_7() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_disabled_rbmjej_k$();
    }, function (receiver, value) {
      return receiver.set_disabled_rhu918_k$(value);
    });
  }
  function image$factory() {
    return getPropertyCallableRef('image', 1, KMutableProperty1, function (receiver) {
      return receiver.get_image_it3i2a_k$();
    }, function (receiver, value) {
      return receiver.set_image_f7p9g9_k$(value);
    });
  }
  function image$factory_0() {
    return getPropertyCallableRef('image', 1, KMutableProperty1, function (receiver) {
      return receiver.get_image_it3i2a_k$();
    }, function (receiver, value) {
      return receiver.set_image_f7p9g9_k$(value);
    });
  }
  function size$factory_3() {
    return getPropertyCallableRef('size', 1, KMutableProperty1, function (receiver) {
      return receiver.get_size_woubt6_k$();
    }, function (receiver, value) {
      return receiver.set_size_wi2upv_k$(value);
    });
  }
  function size$factory_4() {
    return getPropertyCallableRef('size', 1, KMutableProperty1, function (receiver) {
      return receiver.get_size_woubt6_k$();
    }, function (receiver, value) {
      return receiver.set_size_wi2upv_k$(value);
    });
  }
  function block$factory_0() {
    return getPropertyCallableRef('block', 1, KMutableProperty1, function (receiver) {
      return receiver.get_block_ip8l7o_k$();
    }, function (receiver, value) {
      return receiver.set_block_7gwl97_k$(value);
    });
  }
  function block$factory_1() {
    return getPropertyCallableRef('block', 1, KMutableProperty1, function (receiver) {
      return receiver.get_block_ip8l7o_k$();
    }, function (receiver, value) {
      return receiver.set_block_7gwl97_k$(value);
    });
  }
  function separator$factory_0() {
    return getPropertyCallableRef('separator', 1, KMutableProperty1, function (receiver) {
      return receiver.get_separator_xuwon8_k$();
    }, function (receiver, value) {
      return receiver.set_separator_fi7cb3_k$(value);
    });
  }
  function separator$factory_1() {
    return getPropertyCallableRef('separator', 1, KMutableProperty1, function (receiver) {
      return receiver.get_separator_xuwon8_k$();
    }, function (receiver, value) {
      return receiver.set_separator_fi7cb3_k$(value);
    });
  }
  function labelFirst$factory_3() {
    return getPropertyCallableRef('labelFirst', 1, KMutableProperty1, function (receiver) {
      return receiver.get_labelFirst_n6uzdx_k$();
    }, function (receiver, value) {
      return receiver.set_labelFirst_q3ot2c_k$(value);
    });
  }
  function labelFirst$factory_4() {
    return getPropertyCallableRef('labelFirst', 1, KMutableProperty1, function (receiver) {
      return receiver.get_labelFirst_n6uzdx_k$();
    }, function (receiver, value) {
      return receiver.set_labelFirst_q3ot2c_k$(value);
    });
  }
  function div(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var div = new Div(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(div);
    return div;
  }
  function Div(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_DIV_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function H1(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_H1_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function h1(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var h1 = new H1(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(h1);
    return h1;
  }
  function h2(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var h2 = new H2(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(h2);
    return h2;
  }
  function H2(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_H2_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function h3(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var h3 = new H3(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(h3);
    return h3;
  }
  function H3(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_H3_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function H4(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_H4_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function h4(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var h4 = new H4(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(h4);
    return h4;
  }
  function H5(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_H5_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function h5(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var h5 = new H5(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(h5);
    return h5;
  }
  function h6(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var h6 = new H6(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(h6);
    return h6;
  }
  function H6(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_H6_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function icon(_this__u8e3s4, icon, init) {
    init = init === VOID ? null : init;
    var i = new Icon(icon, init);
    _this__u8e3s4.add_rekwpt_k$(i);
    return i;
  }
  function Icon$icon$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Icon(icon, init) {
    init = init === VOID ? null : init;
    Tag.call(this, TAG_SPAN_getInstance());
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = Icon$icon$delegate$lambda(this);
    tmp.icon$delegate_1 = (new RefreshDelegateProvider_0(this, icon, refreshFunction)).provideDelegate_z62loi_k$(this, icon$factory_2());
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(Icon).set_icon_ecshbo_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.icon$delegate_1, this, icon$factory_3(), _set____db54di);
  };
  protoOf(Icon).get_icon_wont8i_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.icon$delegate_1, this, icon$factory_4());
  };
  protoOf(Icon).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(Tag).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    classSetBuilder.addAll_kmiuje_k$(split_0(this.get_icon_wont8i_k$(), [' ']));
  };
  function icon$factory_2() {
    return getPropertyCallableRef('icon', 1, KMutableProperty1, function (receiver) {
      return receiver.get_icon_wont8i_k$();
    }, function (receiver, value) {
      return receiver.set_icon_ecshbo_k$(value);
    });
  }
  function icon$factory_3() {
    return getPropertyCallableRef('icon', 1, KMutableProperty1, function (receiver) {
      return receiver.get_icon_wont8i_k$();
    }, function (receiver, value) {
      return receiver.set_icon_ecshbo_k$(value);
    });
  }
  function icon$factory_4() {
    return getPropertyCallableRef('icon', 1, KMutableProperty1, function (receiver) {
      return receiver.get_icon_wont8i_k$();
    }, function (receiver, value) {
      return receiver.set_icon_ecshbo_k$(value);
    });
  }
  function image(_this__u8e3s4, src, alt, responsive, shape, centered, className, init) {
    alt = alt === VOID ? null : alt;
    responsive = responsive === VOID ? false : responsive;
    shape = shape === VOID ? null : shape;
    centered = centered === VOID ? false : centered;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var image = new Image(src, alt, responsive, shape, centered, className, init);
    _this__u8e3s4.add_rekwpt_k$(image);
    return image;
  }
  function Image$src$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Image$alt$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Image$responsive$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Image$shape$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Image$centered$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Image(src, alt, responsive, shape, centered, className, init) {
    alt = alt === VOID ? null : alt;
    responsive = responsive === VOID ? false : responsive;
    shape = shape === VOID ? null : shape;
    centered = centered === VOID ? false : centered;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Widget.call(this, className);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = Image$src$delegate$lambda(this);
    tmp.src$delegate_1 = (new RefreshDelegateProvider_0(this, src, refreshFunction)).provideDelegate_z62loi_k$(this, src$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = Image$alt$delegate$lambda(this);
    tmp_0.alt$delegate_1 = (new RefreshDelegateProvider_0(this, alt, refreshFunction_0)).provideDelegate_z62loi_k$(this, alt$factory());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = Image$responsive$delegate$lambda(this);
    tmp_1.responsive$delegate_1 = (new RefreshDelegateProvider_0(this, responsive, refreshFunction_1)).provideDelegate_z62loi_k$(this, responsive$factory());
    var tmp_2 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_2 = Image$shape$delegate$lambda(this);
    tmp_2.shape$delegate_1 = (new RefreshDelegateProvider_0(this, shape, refreshFunction_2)).provideDelegate_z62loi_k$(this, shape$factory());
    var tmp_3 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_3 = Image$centered$delegate$lambda(this);
    tmp_3.centered$delegate_1 = (new RefreshDelegateProvider_0(this, centered, refreshFunction_3)).provideDelegate_z62loi_k$(this, centered$factory());
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(Image).set_src_vqknu8_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.src$delegate_1, this, src$factory_0(), _set____db54di);
  };
  protoOf(Image).get_src_18iw05_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.src$delegate_1, this, src$factory_1());
  };
  protoOf(Image).set_alt_i9cyk5_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.alt$delegate_1, this, alt$factory_0(), _set____db54di);
  };
  protoOf(Image).get_alt_18j9hc_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.alt$delegate_1, this, alt$factory_1());
  };
  protoOf(Image).set_responsive_6w9l18_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.responsive$delegate_1, this, responsive$factory_0(), _set____db54di);
  };
  protoOf(Image).get_responsive_un7bnn_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.responsive$delegate_1, this, responsive$factory_1());
  };
  protoOf(Image).set_shape_i86x7h_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.shape$delegate_1, this, shape$factory_0(), _set____db54di);
  };
  protoOf(Image).get_shape_iyi9a0_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.shape$delegate_1, this, shape$factory_1());
  };
  protoOf(Image).set_centered_ahf858_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.centered$delegate_1, this, centered$factory_0(), _set____db54di);
  };
  protoOf(Image).get_centered_p4nzb1_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.centered$delegate_1, this, centered$factory_1());
  };
  protoOf(Image).render_fgfjvu_k$ = function () {
    return this.render_ab0tlo_k$('img');
  };
  protoOf(Image).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(Widget).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    var tmp0_safe_receiver = this.get_src_18iw05_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.html.Image.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('src', tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.get_alt_18j9hc_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.html.Image.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('alt', this.translate_s2ekyc_k$(tmp1_safe_receiver));
    }
  };
  protoOf(Image).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(Widget).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    if (this.get_responsive_un7bnn_k$()) {
      classSetBuilder.add_udnk2x_k$('img-fluid');
    }
    if (this.get_centered_p4nzb1_k$()) {
      classSetBuilder.add_udnk2x_k$('center-block');
    }
    classSetBuilder.add_9rsi26_k$(this.get_shape_iyi9a0_k$());
  };
  var ImageShape_ROUNDED_instance;
  var ImageShape_CIRCLE_instance;
  var ImageShape_THUMBNAIL_instance;
  function values_53() {
    return [ImageShape_ROUNDED_getInstance(), ImageShape_CIRCLE_getInstance(), ImageShape_THUMBNAIL_getInstance()];
  }
  function valueOf_53(value) {
    switch (value) {
      case 'ROUNDED':
        return ImageShape_ROUNDED_getInstance();
      case 'CIRCLE':
        return ImageShape_CIRCLE_getInstance();
      case 'THUMBNAIL':
        return ImageShape_THUMBNAIL_getInstance();
      default:
        ImageShape_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_53() {
    if ($ENTRIES_53 == null)
      $ENTRIES_53 = enumEntries(values_53());
    return $ENTRIES_53;
  }
  var ImageShape_entriesInitialized;
  function ImageShape_initEntries() {
    if (ImageShape_entriesInitialized)
      return Unit_getInstance();
    ImageShape_entriesInitialized = true;
    ImageShape_ROUNDED_instance = new ImageShape('ROUNDED', 0, 'rounded');
    ImageShape_CIRCLE_instance = new ImageShape('CIRCLE', 1, 'rounded-circle');
    ImageShape_THUMBNAIL_instance = new ImageShape('THUMBNAIL', 2, 'img-thumbnail');
  }
  var $ENTRIES_53;
  function ImageShape(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(ImageShape).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function ImageShape_ROUNDED_getInstance() {
    ImageShape_initEntries();
    return ImageShape_ROUNDED_instance;
  }
  function ImageShape_CIRCLE_getInstance() {
    ImageShape_initEntries();
    return ImageShape_CIRCLE_instance;
  }
  function ImageShape_THUMBNAIL_getInstance() {
    ImageShape_initEntries();
    return ImageShape_THUMBNAIL_instance;
  }
  function src$factory() {
    return getPropertyCallableRef('src', 1, KMutableProperty1, function (receiver) {
      return receiver.get_src_18iw05_k$();
    }, function (receiver, value) {
      return receiver.set_src_vqknu8_k$(value);
    });
  }
  function alt$factory() {
    return getPropertyCallableRef('alt', 1, KMutableProperty1, function (receiver) {
      return receiver.get_alt_18j9hc_k$();
    }, function (receiver, value) {
      return receiver.set_alt_i9cyk5_k$(value);
    });
  }
  function responsive$factory() {
    return getPropertyCallableRef('responsive', 1, KMutableProperty1, function (receiver) {
      return receiver.get_responsive_un7bnn_k$();
    }, function (receiver, value) {
      return receiver.set_responsive_6w9l18_k$(value);
    });
  }
  function shape$factory() {
    return getPropertyCallableRef('shape', 1, KMutableProperty1, function (receiver) {
      return receiver.get_shape_iyi9a0_k$();
    }, function (receiver, value) {
      return receiver.set_shape_i86x7h_k$(value);
    });
  }
  function centered$factory() {
    return getPropertyCallableRef('centered', 1, KMutableProperty1, function (receiver) {
      return receiver.get_centered_p4nzb1_k$();
    }, function (receiver, value) {
      return receiver.set_centered_ahf858_k$(value);
    });
  }
  function src$factory_0() {
    return getPropertyCallableRef('src', 1, KMutableProperty1, function (receiver) {
      return receiver.get_src_18iw05_k$();
    }, function (receiver, value) {
      return receiver.set_src_vqknu8_k$(value);
    });
  }
  function src$factory_1() {
    return getPropertyCallableRef('src', 1, KMutableProperty1, function (receiver) {
      return receiver.get_src_18iw05_k$();
    }, function (receiver, value) {
      return receiver.set_src_vqknu8_k$(value);
    });
  }
  function alt$factory_0() {
    return getPropertyCallableRef('alt', 1, KMutableProperty1, function (receiver) {
      return receiver.get_alt_18j9hc_k$();
    }, function (receiver, value) {
      return receiver.set_alt_i9cyk5_k$(value);
    });
  }
  function alt$factory_1() {
    return getPropertyCallableRef('alt', 1, KMutableProperty1, function (receiver) {
      return receiver.get_alt_18j9hc_k$();
    }, function (receiver, value) {
      return receiver.set_alt_i9cyk5_k$(value);
    });
  }
  function responsive$factory_0() {
    return getPropertyCallableRef('responsive', 1, KMutableProperty1, function (receiver) {
      return receiver.get_responsive_un7bnn_k$();
    }, function (receiver, value) {
      return receiver.set_responsive_6w9l18_k$(value);
    });
  }
  function responsive$factory_1() {
    return getPropertyCallableRef('responsive', 1, KMutableProperty1, function (receiver) {
      return receiver.get_responsive_un7bnn_k$();
    }, function (receiver, value) {
      return receiver.set_responsive_6w9l18_k$(value);
    });
  }
  function shape$factory_0() {
    return getPropertyCallableRef('shape', 1, KMutableProperty1, function (receiver) {
      return receiver.get_shape_iyi9a0_k$();
    }, function (receiver, value) {
      return receiver.set_shape_i86x7h_k$(value);
    });
  }
  function shape$factory_1() {
    return getPropertyCallableRef('shape', 1, KMutableProperty1, function (receiver) {
      return receiver.get_shape_iyi9a0_k$();
    }, function (receiver, value) {
      return receiver.set_shape_i86x7h_k$(value);
    });
  }
  function centered$factory_0() {
    return getPropertyCallableRef('centered', 1, KMutableProperty1, function (receiver) {
      return receiver.get_centered_p4nzb1_k$();
    }, function (receiver, value) {
      return receiver.set_centered_ahf858_k$(value);
    });
  }
  function centered$factory_1() {
    return getPropertyCallableRef('centered', 1, KMutableProperty1, function (receiver) {
      return receiver.get_centered_p4nzb1_k$();
    }, function (receiver, value) {
      return receiver.set_centered_ahf858_k$(value);
    });
  }
  var InputType_TEXT_instance;
  var InputType_PASSWORD_instance;
  var InputType_EMAIL_instance;
  var InputType_TEL_instance;
  var InputType_COLOR_instance;
  var InputType_SEARCH_instance;
  var InputType_URL_instance;
  var InputType_HIDDEN_instance;
  var InputType_BUTTON_instance;
  var InputType_CHECKBOX_instance;
  var InputType_DATE_instance;
  var InputType_DATETIME_LOCAL_instance;
  var InputType_FILE_instance;
  var InputType_IMAGE_instance;
  var InputType_MONTH_instance;
  var InputType_NUMBER_instance;
  var InputType_RADIO_instance;
  var InputType_RANGE_instance;
  var InputType_RESET_instance;
  var InputType_SUBMIT_instance;
  var InputType_TIME_instance;
  var InputType_WEEK_instance;
  function values_54() {
    return [InputType_TEXT_getInstance(), InputType_PASSWORD_getInstance(), InputType_EMAIL_getInstance(), InputType_TEL_getInstance(), InputType_COLOR_getInstance(), InputType_SEARCH_getInstance(), InputType_URL_getInstance(), InputType_HIDDEN_getInstance(), InputType_BUTTON_getInstance(), InputType_CHECKBOX_getInstance(), InputType_DATE_getInstance(), InputType_DATETIME_LOCAL_getInstance(), InputType_FILE_getInstance(), InputType_IMAGE_getInstance(), InputType_MONTH_getInstance(), InputType_NUMBER_getInstance(), InputType_RADIO_getInstance(), InputType_RANGE_getInstance(), InputType_RESET_getInstance(), InputType_SUBMIT_getInstance(), InputType_TIME_getInstance(), InputType_WEEK_getInstance()];
  }
  function valueOf_54(value) {
    switch (value) {
      case 'TEXT':
        return InputType_TEXT_getInstance();
      case 'PASSWORD':
        return InputType_PASSWORD_getInstance();
      case 'EMAIL':
        return InputType_EMAIL_getInstance();
      case 'TEL':
        return InputType_TEL_getInstance();
      case 'COLOR':
        return InputType_COLOR_getInstance();
      case 'SEARCH':
        return InputType_SEARCH_getInstance();
      case 'URL':
        return InputType_URL_getInstance();
      case 'HIDDEN':
        return InputType_HIDDEN_getInstance();
      case 'BUTTON':
        return InputType_BUTTON_getInstance();
      case 'CHECKBOX':
        return InputType_CHECKBOX_getInstance();
      case 'DATE':
        return InputType_DATE_getInstance();
      case 'DATETIME_LOCAL':
        return InputType_DATETIME_LOCAL_getInstance();
      case 'FILE':
        return InputType_FILE_getInstance();
      case 'IMAGE':
        return InputType_IMAGE_getInstance();
      case 'MONTH':
        return InputType_MONTH_getInstance();
      case 'NUMBER':
        return InputType_NUMBER_getInstance();
      case 'RADIO':
        return InputType_RADIO_getInstance();
      case 'RANGE':
        return InputType_RANGE_getInstance();
      case 'RESET':
        return InputType_RESET_getInstance();
      case 'SUBMIT':
        return InputType_SUBMIT_getInstance();
      case 'TIME':
        return InputType_TIME_getInstance();
      case 'WEEK':
        return InputType_WEEK_getInstance();
      default:
        InputType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_54() {
    if ($ENTRIES_54 == null)
      $ENTRIES_54 = enumEntries(values_54());
    return $ENTRIES_54;
  }
  var InputType_entriesInitialized;
  function InputType_initEntries() {
    if (InputType_entriesInitialized)
      return Unit_getInstance();
    InputType_entriesInitialized = true;
    InputType_TEXT_instance = new InputType('TEXT', 0, 'text');
    InputType_PASSWORD_instance = new InputType('PASSWORD', 1, 'password');
    InputType_EMAIL_instance = new InputType('EMAIL', 2, 'email');
    InputType_TEL_instance = new InputType('TEL', 3, 'tel');
    InputType_COLOR_instance = new InputType('COLOR', 4, 'color');
    InputType_SEARCH_instance = new InputType('SEARCH', 5, 'search');
    InputType_URL_instance = new InputType('URL', 6, 'url');
    InputType_HIDDEN_instance = new InputType('HIDDEN', 7, 'hidden');
    InputType_BUTTON_instance = new InputType('BUTTON', 8, 'button');
    InputType_CHECKBOX_instance = new InputType('CHECKBOX', 9, 'checkbox');
    InputType_DATE_instance = new InputType('DATE', 10, 'date');
    InputType_DATETIME_LOCAL_instance = new InputType('DATETIME_LOCAL', 11, 'datetime-local');
    InputType_FILE_instance = new InputType('FILE', 12, 'file');
    InputType_IMAGE_instance = new InputType('IMAGE', 13, 'image');
    InputType_MONTH_instance = new InputType('MONTH', 14, 'month');
    InputType_NUMBER_instance = new InputType('NUMBER', 15, 'number');
    InputType_RADIO_instance = new InputType('RADIO', 16, 'radio');
    InputType_RANGE_instance = new InputType('RANGE', 17, 'range');
    InputType_RESET_instance = new InputType('RESET', 18, 'reset');
    InputType_SUBMIT_instance = new InputType('SUBMIT', 19, 'submit');
    InputType_TIME_instance = new InputType('TIME', 20, 'time');
    InputType_WEEK_instance = new InputType('WEEK', 21, 'week');
  }
  var $ENTRIES_54;
  function InputType(name, ordinal, type) {
    Enum.call(this, name, ordinal);
    this.type_1 = type;
  }
  protoOf(InputType).get_type_t5wobc_k$ = function () {
    return this.type_1;
  };
  var Autocomplete_OFF_instance;
  var Autocomplete_ON_instance;
  var Autocomplete_NAME_instance;
  var Autocomplete_HONORIFIC_PREFIX_instance;
  var Autocomplete_GIVEN_NAME_instance;
  var Autocomplete_ADDITIONAL_NAME_instance;
  var Autocomplete_FAMILY_NAME_instance;
  var Autocomplete_HONORIFIC_SUFFIX_instance;
  var Autocomplete_NICKNAME_instance;
  var Autocomplete_USERNAME_instance;
  var Autocomplete_NEW_PASSWORD_instance;
  var Autocomplete_CURRENT_PASSWORD_instance;
  var Autocomplete_ONE_TIME_CODE_instance;
  var Autocomplete_ORGANIZATION_TITLE_instance;
  var Autocomplete_ORGANIZATION_instance;
  var Autocomplete_STREET_ADDRESS_instance;
  var Autocomplete_ADDRESS_LINE1_instance;
  var Autocomplete_ADDRESS_LINE2_instance;
  var Autocomplete_ADDRESS_LINE3_instance;
  var Autocomplete_ADDRESS_LEVEL4_instance;
  var Autocomplete_ADDRESS_LEVEL3_instance;
  var Autocomplete_ADDRESS_LEVEL2_instance;
  var Autocomplete_ADDRESS_LEVEL1_instance;
  var Autocomplete_COUNTRY_instance;
  var Autocomplete_COUNTRY_NAME_instance;
  var Autocomplete_POSTAL_CODE_instance;
  var Autocomplete_CC_NAME_instance;
  var Autocomplete_CC_GIVEN_NAME_instance;
  var Autocomplete_CC_ADDITIONAL_NAME_instance;
  var Autocomplete_CC_FAMILY_NAME_instance;
  var Autocomplete_CC_NUMBER_instance;
  var Autocomplete_CC_EXP_instance;
  var Autocomplete_CC_EXP_MONTH_instance;
  var Autocomplete_CC_EXP_YEAR_instance;
  var Autocomplete_CC_CSC_instance;
  var Autocomplete_CC_TYPE_instance;
  var Autocomplete_TRANSACTION_CURRENCY_instance;
  var Autocomplete_TRANSACTION_AMOUNT_instance;
  var Autocomplete_LANGUAGE_instance;
  var Autocomplete_BDAY_instance;
  var Autocomplete_BDAY_DAY_instance;
  var Autocomplete_BDAY_MONTH_instance;
  var Autocomplete_BDAY_YEAR_instance;
  var Autocomplete_SEX_instance;
  var Autocomplete_URL_instance;
  var Autocomplete_PHOTO_instance;
  function values_55() {
    return [Autocomplete_OFF_getInstance(), Autocomplete_ON_getInstance(), Autocomplete_NAME_getInstance(), Autocomplete_HONORIFIC_PREFIX_getInstance(), Autocomplete_GIVEN_NAME_getInstance(), Autocomplete_ADDITIONAL_NAME_getInstance(), Autocomplete_FAMILY_NAME_getInstance(), Autocomplete_HONORIFIC_SUFFIX_getInstance(), Autocomplete_NICKNAME_getInstance(), Autocomplete_USERNAME_getInstance(), Autocomplete_NEW_PASSWORD_getInstance(), Autocomplete_CURRENT_PASSWORD_getInstance(), Autocomplete_ONE_TIME_CODE_getInstance(), Autocomplete_ORGANIZATION_TITLE_getInstance(), Autocomplete_ORGANIZATION_getInstance(), Autocomplete_STREET_ADDRESS_getInstance(), Autocomplete_ADDRESS_LINE1_getInstance(), Autocomplete_ADDRESS_LINE2_getInstance(), Autocomplete_ADDRESS_LINE3_getInstance(), Autocomplete_ADDRESS_LEVEL4_getInstance(), Autocomplete_ADDRESS_LEVEL3_getInstance(), Autocomplete_ADDRESS_LEVEL2_getInstance(), Autocomplete_ADDRESS_LEVEL1_getInstance(), Autocomplete_COUNTRY_getInstance(), Autocomplete_COUNTRY_NAME_getInstance(), Autocomplete_POSTAL_CODE_getInstance(), Autocomplete_CC_NAME_getInstance(), Autocomplete_CC_GIVEN_NAME_getInstance(), Autocomplete_CC_ADDITIONAL_NAME_getInstance(), Autocomplete_CC_FAMILY_NAME_getInstance(), Autocomplete_CC_NUMBER_getInstance(), Autocomplete_CC_EXP_getInstance(), Autocomplete_CC_EXP_MONTH_getInstance(), Autocomplete_CC_EXP_YEAR_getInstance(), Autocomplete_CC_CSC_getInstance(), Autocomplete_CC_TYPE_getInstance(), Autocomplete_TRANSACTION_CURRENCY_getInstance(), Autocomplete_TRANSACTION_AMOUNT_getInstance(), Autocomplete_LANGUAGE_getInstance(), Autocomplete_BDAY_getInstance(), Autocomplete_BDAY_DAY_getInstance(), Autocomplete_BDAY_MONTH_getInstance(), Autocomplete_BDAY_YEAR_getInstance(), Autocomplete_SEX_getInstance(), Autocomplete_URL_getInstance(), Autocomplete_PHOTO_getInstance()];
  }
  function valueOf_55(value) {
    switch (value) {
      case 'OFF':
        return Autocomplete_OFF_getInstance();
      case 'ON':
        return Autocomplete_ON_getInstance();
      case 'NAME':
        return Autocomplete_NAME_getInstance();
      case 'HONORIFIC_PREFIX':
        return Autocomplete_HONORIFIC_PREFIX_getInstance();
      case 'GIVEN_NAME':
        return Autocomplete_GIVEN_NAME_getInstance();
      case 'ADDITIONAL_NAME':
        return Autocomplete_ADDITIONAL_NAME_getInstance();
      case 'FAMILY_NAME':
        return Autocomplete_FAMILY_NAME_getInstance();
      case 'HONORIFIC_SUFFIX':
        return Autocomplete_HONORIFIC_SUFFIX_getInstance();
      case 'NICKNAME':
        return Autocomplete_NICKNAME_getInstance();
      case 'USERNAME':
        return Autocomplete_USERNAME_getInstance();
      case 'NEW_PASSWORD':
        return Autocomplete_NEW_PASSWORD_getInstance();
      case 'CURRENT_PASSWORD':
        return Autocomplete_CURRENT_PASSWORD_getInstance();
      case 'ONE_TIME_CODE':
        return Autocomplete_ONE_TIME_CODE_getInstance();
      case 'ORGANIZATION_TITLE':
        return Autocomplete_ORGANIZATION_TITLE_getInstance();
      case 'ORGANIZATION':
        return Autocomplete_ORGANIZATION_getInstance();
      case 'STREET_ADDRESS':
        return Autocomplete_STREET_ADDRESS_getInstance();
      case 'ADDRESS_LINE1':
        return Autocomplete_ADDRESS_LINE1_getInstance();
      case 'ADDRESS_LINE2':
        return Autocomplete_ADDRESS_LINE2_getInstance();
      case 'ADDRESS_LINE3':
        return Autocomplete_ADDRESS_LINE3_getInstance();
      case 'ADDRESS_LEVEL4':
        return Autocomplete_ADDRESS_LEVEL4_getInstance();
      case 'ADDRESS_LEVEL3':
        return Autocomplete_ADDRESS_LEVEL3_getInstance();
      case 'ADDRESS_LEVEL2':
        return Autocomplete_ADDRESS_LEVEL2_getInstance();
      case 'ADDRESS_LEVEL1':
        return Autocomplete_ADDRESS_LEVEL1_getInstance();
      case 'COUNTRY':
        return Autocomplete_COUNTRY_getInstance();
      case 'COUNTRY_NAME':
        return Autocomplete_COUNTRY_NAME_getInstance();
      case 'POSTAL_CODE':
        return Autocomplete_POSTAL_CODE_getInstance();
      case 'CC_NAME':
        return Autocomplete_CC_NAME_getInstance();
      case 'CC_GIVEN_NAME':
        return Autocomplete_CC_GIVEN_NAME_getInstance();
      case 'CC_ADDITIONAL_NAME':
        return Autocomplete_CC_ADDITIONAL_NAME_getInstance();
      case 'CC_FAMILY_NAME':
        return Autocomplete_CC_FAMILY_NAME_getInstance();
      case 'CC_NUMBER':
        return Autocomplete_CC_NUMBER_getInstance();
      case 'CC_EXP':
        return Autocomplete_CC_EXP_getInstance();
      case 'CC_EXP_MONTH':
        return Autocomplete_CC_EXP_MONTH_getInstance();
      case 'CC_EXP_YEAR':
        return Autocomplete_CC_EXP_YEAR_getInstance();
      case 'CC_CSC':
        return Autocomplete_CC_CSC_getInstance();
      case 'CC_TYPE':
        return Autocomplete_CC_TYPE_getInstance();
      case 'TRANSACTION_CURRENCY':
        return Autocomplete_TRANSACTION_CURRENCY_getInstance();
      case 'TRANSACTION_AMOUNT':
        return Autocomplete_TRANSACTION_AMOUNT_getInstance();
      case 'LANGUAGE':
        return Autocomplete_LANGUAGE_getInstance();
      case 'BDAY':
        return Autocomplete_BDAY_getInstance();
      case 'BDAY_DAY':
        return Autocomplete_BDAY_DAY_getInstance();
      case 'BDAY_MONTH':
        return Autocomplete_BDAY_MONTH_getInstance();
      case 'BDAY_YEAR':
        return Autocomplete_BDAY_YEAR_getInstance();
      case 'SEX':
        return Autocomplete_SEX_getInstance();
      case 'URL':
        return Autocomplete_URL_getInstance();
      case 'PHOTO':
        return Autocomplete_PHOTO_getInstance();
      default:
        Autocomplete_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_55() {
    if ($ENTRIES_55 == null)
      $ENTRIES_55 = enumEntries(values_55());
    return $ENTRIES_55;
  }
  var Autocomplete_entriesInitialized;
  function Autocomplete_initEntries() {
    if (Autocomplete_entriesInitialized)
      return Unit_getInstance();
    Autocomplete_entriesInitialized = true;
    Autocomplete_OFF_instance = new Autocomplete('OFF', 0, 'off');
    Autocomplete_ON_instance = new Autocomplete('ON', 1, 'on');
    Autocomplete_NAME_instance = new Autocomplete('NAME', 2, 'name');
    Autocomplete_HONORIFIC_PREFIX_instance = new Autocomplete('HONORIFIC_PREFIX', 3, 'honorific-prefix');
    Autocomplete_GIVEN_NAME_instance = new Autocomplete('GIVEN_NAME', 4, 'given-name');
    Autocomplete_ADDITIONAL_NAME_instance = new Autocomplete('ADDITIONAL_NAME', 5, 'additional-name');
    Autocomplete_FAMILY_NAME_instance = new Autocomplete('FAMILY_NAME', 6, 'family-name');
    Autocomplete_HONORIFIC_SUFFIX_instance = new Autocomplete('HONORIFIC_SUFFIX', 7, 'honorific-suffix');
    Autocomplete_NICKNAME_instance = new Autocomplete('NICKNAME', 8, 'nickname');
    Autocomplete_USERNAME_instance = new Autocomplete('USERNAME', 9, 'username');
    Autocomplete_NEW_PASSWORD_instance = new Autocomplete('NEW_PASSWORD', 10, 'new-password');
    Autocomplete_CURRENT_PASSWORD_instance = new Autocomplete('CURRENT_PASSWORD', 11, 'current-password');
    Autocomplete_ONE_TIME_CODE_instance = new Autocomplete('ONE_TIME_CODE', 12, 'one-time-code');
    Autocomplete_ORGANIZATION_TITLE_instance = new Autocomplete('ORGANIZATION_TITLE', 13, 'organization-title');
    Autocomplete_ORGANIZATION_instance = new Autocomplete('ORGANIZATION', 14, 'organization');
    Autocomplete_STREET_ADDRESS_instance = new Autocomplete('STREET_ADDRESS', 15, 'street-address');
    Autocomplete_ADDRESS_LINE1_instance = new Autocomplete('ADDRESS_LINE1', 16, 'address-line1');
    Autocomplete_ADDRESS_LINE2_instance = new Autocomplete('ADDRESS_LINE2', 17, 'address-line2');
    Autocomplete_ADDRESS_LINE3_instance = new Autocomplete('ADDRESS_LINE3', 18, 'address-line3');
    Autocomplete_ADDRESS_LEVEL4_instance = new Autocomplete('ADDRESS_LEVEL4', 19, 'address-level4');
    Autocomplete_ADDRESS_LEVEL3_instance = new Autocomplete('ADDRESS_LEVEL3', 20, 'address-level3');
    Autocomplete_ADDRESS_LEVEL2_instance = new Autocomplete('ADDRESS_LEVEL2', 21, 'address-level2');
    Autocomplete_ADDRESS_LEVEL1_instance = new Autocomplete('ADDRESS_LEVEL1', 22, 'address-level1');
    Autocomplete_COUNTRY_instance = new Autocomplete('COUNTRY', 23, 'country');
    Autocomplete_COUNTRY_NAME_instance = new Autocomplete('COUNTRY_NAME', 24, 'country-name');
    Autocomplete_POSTAL_CODE_instance = new Autocomplete('POSTAL_CODE', 25, 'postal-code');
    Autocomplete_CC_NAME_instance = new Autocomplete('CC_NAME', 26, 'cc-name');
    Autocomplete_CC_GIVEN_NAME_instance = new Autocomplete('CC_GIVEN_NAME', 27, 'cc-given-name');
    Autocomplete_CC_ADDITIONAL_NAME_instance = new Autocomplete('CC_ADDITIONAL_NAME', 28, 'cc-additional-name');
    Autocomplete_CC_FAMILY_NAME_instance = new Autocomplete('CC_FAMILY_NAME', 29, 'cc-family-name');
    Autocomplete_CC_NUMBER_instance = new Autocomplete('CC_NUMBER', 30, 'cc-number');
    Autocomplete_CC_EXP_instance = new Autocomplete('CC_EXP', 31, 'cc-exp');
    Autocomplete_CC_EXP_MONTH_instance = new Autocomplete('CC_EXP_MONTH', 32, 'cc-exp-month');
    Autocomplete_CC_EXP_YEAR_instance = new Autocomplete('CC_EXP_YEAR', 33, 'cc-exp-year');
    Autocomplete_CC_CSC_instance = new Autocomplete('CC_CSC', 34, 'cc-csc');
    Autocomplete_CC_TYPE_instance = new Autocomplete('CC_TYPE', 35, 'cc-type');
    Autocomplete_TRANSACTION_CURRENCY_instance = new Autocomplete('TRANSACTION_CURRENCY', 36, 'transaction-currency');
    Autocomplete_TRANSACTION_AMOUNT_instance = new Autocomplete('TRANSACTION_AMOUNT', 37, 'transaction-amount');
    Autocomplete_LANGUAGE_instance = new Autocomplete('LANGUAGE', 38, 'language');
    Autocomplete_BDAY_instance = new Autocomplete('BDAY', 39, 'bday');
    Autocomplete_BDAY_DAY_instance = new Autocomplete('BDAY_DAY', 40, 'bday-day');
    Autocomplete_BDAY_MONTH_instance = new Autocomplete('BDAY_MONTH', 41, 'bday-month');
    Autocomplete_BDAY_YEAR_instance = new Autocomplete('BDAY_YEAR', 42, 'bday-year');
    Autocomplete_SEX_instance = new Autocomplete('SEX', 43, 'sex');
    Autocomplete_URL_instance = new Autocomplete('URL', 44, 'url');
    Autocomplete_PHOTO_instance = new Autocomplete('PHOTO', 45, 'photo');
  }
  var $ENTRIES_55;
  function Autocomplete(name, ordinal, type) {
    Enum.call(this, name, ordinal);
    this.type_1 = type;
  }
  protoOf(Autocomplete).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  function InputType_TEXT_getInstance() {
    InputType_initEntries();
    return InputType_TEXT_instance;
  }
  function InputType_PASSWORD_getInstance() {
    InputType_initEntries();
    return InputType_PASSWORD_instance;
  }
  function InputType_EMAIL_getInstance() {
    InputType_initEntries();
    return InputType_EMAIL_instance;
  }
  function InputType_TEL_getInstance() {
    InputType_initEntries();
    return InputType_TEL_instance;
  }
  function InputType_COLOR_getInstance() {
    InputType_initEntries();
    return InputType_COLOR_instance;
  }
  function InputType_SEARCH_getInstance() {
    InputType_initEntries();
    return InputType_SEARCH_instance;
  }
  function InputType_URL_getInstance() {
    InputType_initEntries();
    return InputType_URL_instance;
  }
  function InputType_HIDDEN_getInstance() {
    InputType_initEntries();
    return InputType_HIDDEN_instance;
  }
  function InputType_BUTTON_getInstance() {
    InputType_initEntries();
    return InputType_BUTTON_instance;
  }
  function InputType_CHECKBOX_getInstance() {
    InputType_initEntries();
    return InputType_CHECKBOX_instance;
  }
  function InputType_DATE_getInstance() {
    InputType_initEntries();
    return InputType_DATE_instance;
  }
  function InputType_DATETIME_LOCAL_getInstance() {
    InputType_initEntries();
    return InputType_DATETIME_LOCAL_instance;
  }
  function InputType_FILE_getInstance() {
    InputType_initEntries();
    return InputType_FILE_instance;
  }
  function InputType_IMAGE_getInstance() {
    InputType_initEntries();
    return InputType_IMAGE_instance;
  }
  function InputType_MONTH_getInstance() {
    InputType_initEntries();
    return InputType_MONTH_instance;
  }
  function InputType_NUMBER_getInstance() {
    InputType_initEntries();
    return InputType_NUMBER_instance;
  }
  function InputType_RADIO_getInstance() {
    InputType_initEntries();
    return InputType_RADIO_instance;
  }
  function InputType_RANGE_getInstance() {
    InputType_initEntries();
    return InputType_RANGE_instance;
  }
  function InputType_RESET_getInstance() {
    InputType_initEntries();
    return InputType_RESET_instance;
  }
  function InputType_SUBMIT_getInstance() {
    InputType_initEntries();
    return InputType_SUBMIT_instance;
  }
  function InputType_TIME_getInstance() {
    InputType_initEntries();
    return InputType_TIME_instance;
  }
  function InputType_WEEK_getInstance() {
    InputType_initEntries();
    return InputType_WEEK_instance;
  }
  function Autocomplete_OFF_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_OFF_instance;
  }
  function Autocomplete_ON_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ON_instance;
  }
  function Autocomplete_NAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_NAME_instance;
  }
  function Autocomplete_HONORIFIC_PREFIX_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_HONORIFIC_PREFIX_instance;
  }
  function Autocomplete_GIVEN_NAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_GIVEN_NAME_instance;
  }
  function Autocomplete_ADDITIONAL_NAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ADDITIONAL_NAME_instance;
  }
  function Autocomplete_FAMILY_NAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_FAMILY_NAME_instance;
  }
  function Autocomplete_HONORIFIC_SUFFIX_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_HONORIFIC_SUFFIX_instance;
  }
  function Autocomplete_NICKNAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_NICKNAME_instance;
  }
  function Autocomplete_USERNAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_USERNAME_instance;
  }
  function Autocomplete_NEW_PASSWORD_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_NEW_PASSWORD_instance;
  }
  function Autocomplete_CURRENT_PASSWORD_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CURRENT_PASSWORD_instance;
  }
  function Autocomplete_ONE_TIME_CODE_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ONE_TIME_CODE_instance;
  }
  function Autocomplete_ORGANIZATION_TITLE_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ORGANIZATION_TITLE_instance;
  }
  function Autocomplete_ORGANIZATION_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ORGANIZATION_instance;
  }
  function Autocomplete_STREET_ADDRESS_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_STREET_ADDRESS_instance;
  }
  function Autocomplete_ADDRESS_LINE1_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ADDRESS_LINE1_instance;
  }
  function Autocomplete_ADDRESS_LINE2_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ADDRESS_LINE2_instance;
  }
  function Autocomplete_ADDRESS_LINE3_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ADDRESS_LINE3_instance;
  }
  function Autocomplete_ADDRESS_LEVEL4_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ADDRESS_LEVEL4_instance;
  }
  function Autocomplete_ADDRESS_LEVEL3_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ADDRESS_LEVEL3_instance;
  }
  function Autocomplete_ADDRESS_LEVEL2_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ADDRESS_LEVEL2_instance;
  }
  function Autocomplete_ADDRESS_LEVEL1_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_ADDRESS_LEVEL1_instance;
  }
  function Autocomplete_COUNTRY_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_COUNTRY_instance;
  }
  function Autocomplete_COUNTRY_NAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_COUNTRY_NAME_instance;
  }
  function Autocomplete_POSTAL_CODE_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_POSTAL_CODE_instance;
  }
  function Autocomplete_CC_NAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_NAME_instance;
  }
  function Autocomplete_CC_GIVEN_NAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_GIVEN_NAME_instance;
  }
  function Autocomplete_CC_ADDITIONAL_NAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_ADDITIONAL_NAME_instance;
  }
  function Autocomplete_CC_FAMILY_NAME_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_FAMILY_NAME_instance;
  }
  function Autocomplete_CC_NUMBER_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_NUMBER_instance;
  }
  function Autocomplete_CC_EXP_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_EXP_instance;
  }
  function Autocomplete_CC_EXP_MONTH_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_EXP_MONTH_instance;
  }
  function Autocomplete_CC_EXP_YEAR_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_EXP_YEAR_instance;
  }
  function Autocomplete_CC_CSC_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_CSC_instance;
  }
  function Autocomplete_CC_TYPE_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_CC_TYPE_instance;
  }
  function Autocomplete_TRANSACTION_CURRENCY_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_TRANSACTION_CURRENCY_instance;
  }
  function Autocomplete_TRANSACTION_AMOUNT_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_TRANSACTION_AMOUNT_instance;
  }
  function Autocomplete_LANGUAGE_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_LANGUAGE_instance;
  }
  function Autocomplete_BDAY_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_BDAY_instance;
  }
  function Autocomplete_BDAY_DAY_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_BDAY_DAY_instance;
  }
  function Autocomplete_BDAY_MONTH_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_BDAY_MONTH_instance;
  }
  function Autocomplete_BDAY_YEAR_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_BDAY_YEAR_instance;
  }
  function Autocomplete_SEX_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_SEX_instance;
  }
  function Autocomplete_URL_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_URL_instance;
  }
  function Autocomplete_PHOTO_getInstance() {
    Autocomplete_initEntries();
    return Autocomplete_PHOTO_instance;
  }
  function li(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var li = new Li(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(li);
    return li;
  }
  function Li(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_LI_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.useDataNavigoForLinks_1 = false;
  }
  protoOf(Companion_6).set_useDataNavigoForLinks_1p2pi5_k$ = function (_set____db54di) {
    this.useDataNavigoForLinks_1 = _set____db54di;
  };
  protoOf(Companion_6).get_useDataNavigoForLinks_plcd3u_k$ = function () {
    return this.useDataNavigoForLinks_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Link$label$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Link$url$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Link$icon$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Link$image$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Link$separator$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Link$labelFirst$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Link$target$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Link$dataNavigo$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Link$onClick$lambda$lambda($handler, $this_setEventListener) {
    return function (e) {
      $handler($this_setEventListener.self, e);
      return Unit_getInstance();
    };
  }
  function Link$onClick$lambda($handler) {
    return function ($this$setEventListener) {
      $this$setEventListener.click = Link$onClick$lambda$lambda($handler, $this$setEventListener);
      return Unit_getInstance();
    };
  }
  function Link(label, url, icon, image, separator, labelFirst, target, dataNavigo, className, init) {
    Companion_getInstance_7();
    url = url === VOID ? null : url;
    icon = icon === VOID ? null : icon;
    image = image === VOID ? null : image;
    separator = separator === VOID ? null : separator;
    labelFirst = labelFirst === VOID ? true : labelFirst;
    target = target === VOID ? null : target;
    dataNavigo = dataNavigo === VOID ? null : dataNavigo;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = Link$label$delegate$lambda(this);
    tmp.label$delegate_1 = (new RefreshDelegateProvider_0(this, label, refreshFunction)).provideDelegate_z62loi_k$(this, label$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = Link$url$delegate$lambda(this);
    tmp_0.url$delegate_1 = (new RefreshDelegateProvider_0(this, url, refreshFunction_0)).provideDelegate_z62loi_k$(this, url$factory());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = Link$icon$delegate$lambda(this);
    tmp_1.icon$delegate_1 = (new RefreshDelegateProvider_0(this, icon, refreshFunction_1)).provideDelegate_z62loi_k$(this, icon$factory_5());
    var tmp_2 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_2 = Link$image$delegate$lambda(this);
    tmp_2.image$delegate_1 = (new RefreshDelegateProvider_0(this, image, refreshFunction_2)).provideDelegate_z62loi_k$(this, image$factory_1());
    var tmp_3 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_3 = Link$separator$delegate$lambda(this);
    tmp_3.separator$delegate_1 = (new RefreshDelegateProvider_0(this, separator, refreshFunction_3)).provideDelegate_z62loi_k$(this, separator$factory_2());
    var tmp_4 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_4 = Link$labelFirst$delegate$lambda(this);
    tmp_4.labelFirst$delegate_1 = (new RefreshDelegateProvider_0(this, labelFirst, refreshFunction_4)).provideDelegate_z62loi_k$(this, labelFirst$factory_5());
    var tmp_5 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_5 = Link$target$delegate$lambda(this);
    tmp_5.target$delegate_1 = (new RefreshDelegateProvider_0(this, target, refreshFunction_5)).provideDelegate_z62loi_k$(this, target$factory_1());
    var tmp_6 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_6 = Link$dataNavigo$delegate$lambda(this);
    tmp_6.dataNavigo$delegate_1 = (new RefreshDelegateProvider_0(this, dataNavigo, refreshFunction_6)).provideDelegate_z62loi_k$(this, dataNavigo$factory());
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(Link).set_label_nnic99_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.label$delegate_1, this, label$factory_0(), _set____db54di);
  };
  protoOf(Link).get_label_iuj8p7_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.label$delegate_1, this, label$factory_1());
  };
  protoOf(Link).set_url_fvthdx_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.url$delegate_1, this, url$factory_0(), _set____db54di);
  };
  protoOf(Link).get_url_18iuii_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.url$delegate_1, this, url$factory_1());
  };
  protoOf(Link).set_icon_t78tsv_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.icon$delegate_1, this, icon$factory_6(), _set____db54di);
  };
  protoOf(Link).get_icon_wont8i_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.icon$delegate_1, this, icon$factory_7());
  };
  protoOf(Link).set_image_f7p9g9_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.image$delegate_1, this, image$factory_2(), _set____db54di);
  };
  protoOf(Link).get_image_it3i2a_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.image$delegate_1, this, image$factory_3());
  };
  protoOf(Link).set_separator_fi7cb3_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.separator$delegate_1, this, separator$factory_3(), _set____db54di);
  };
  protoOf(Link).get_separator_xuwon8_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.separator$delegate_1, this, separator$factory_4());
  };
  protoOf(Link).set_labelFirst_q3ot2c_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.labelFirst$delegate_1, this, labelFirst$factory_6(), _set____db54di);
  };
  protoOf(Link).get_labelFirst_n6uzdx_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.labelFirst$delegate_1, this, labelFirst$factory_7());
  };
  protoOf(Link).set_target_l2qxfb_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.target$delegate_1, this, target$factory_2(), _set____db54di);
  };
  protoOf(Link).get_target_juba8q_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.target$delegate_1, this, target$factory_3());
  };
  protoOf(Link).set_dataNavigo_uqcbez_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.dataNavigo$delegate_1, this, dataNavigo$factory_0(), _set____db54di);
  };
  protoOf(Link).get_dataNavigo_1pkdun_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.dataNavigo$delegate_1, this, dataNavigo$factory_1());
  };
  protoOf(Link).render_fgfjvu_k$ = function () {
    var t = this.createLabelWithIcon_7iayj6_k$(this.get_label_iuj8p7_k$(), this.get_icon_wont8i_k$(), this.get_image_it3i2a_k$(), this.get_separator_xuwon8_k$());
    var tmp;
    if (this.get_labelFirst_n6uzdx_k$()) {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.childrenVNodes_2corie_k$();
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = t.concat(elements);
      tmp = this.render_prnnht_k$('a', tmp$ret$1);
    } else {
      // Inline function 'kotlin.collections.plus' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = this.childrenVNodes_2corie_k$().concat(t);
      tmp = this.render_prnnht_k$('a', tmp$ret$3);
    }
    return tmp;
  };
  protoOf(Link).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(SimplePanel).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    var tmp0_safe_receiver = this.get_url_18iuii_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.html.Link.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('href', tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = this.get_target_juba8q_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.html.Link.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('target', tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = this.get_dataNavigo_1pkdun_k$();
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.html.Link.buildAttributeSet.<anonymous>' call
      attributeSetBuilder.add_lbri6p_k$('data-navigo', tmp2_safe_receiver ? 'data-navigo' : 'false');
      tmp = Unit_getInstance();
    }
    if (tmp == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'io.kvision.html.Link.buildAttributeSet.<anonymous>' call
      if (Companion_getInstance_7().useDataNavigoForLinks_1) {
        attributeSetBuilder.add$default_4n2esg_k$('data-navigo');
      }
    }
  };
  protoOf(Link).onClick_3koad9_k$ = function (handler) {
    return this.setEventListener_4rv3s8_k$(Link$onClick$lambda(handler));
  };
  function label$factory() {
    return getPropertyCallableRef('label', 1, KMutableProperty1, function (receiver) {
      return receiver.get_label_iuj8p7_k$();
    }, function (receiver, value) {
      return receiver.set_label_nnic99_k$(value);
    });
  }
  function url$factory() {
    return getPropertyCallableRef('url', 1, KMutableProperty1, function (receiver) {
      return receiver.get_url_18iuii_k$();
    }, function (receiver, value) {
      return receiver.set_url_fvthdx_k$(value);
    });
  }
  function icon$factory_5() {
    return getPropertyCallableRef('icon', 1, KMutableProperty1, function (receiver) {
      return receiver.get_icon_wont8i_k$();
    }, function (receiver, value) {
      return receiver.set_icon_t78tsv_k$(value);
    });
  }
  function image$factory_1() {
    return getPropertyCallableRef('image', 1, KMutableProperty1, function (receiver) {
      return receiver.get_image_it3i2a_k$();
    }, function (receiver, value) {
      return receiver.set_image_f7p9g9_k$(value);
    });
  }
  function separator$factory_2() {
    return getPropertyCallableRef('separator', 1, KMutableProperty1, function (receiver) {
      return receiver.get_separator_xuwon8_k$();
    }, function (receiver, value) {
      return receiver.set_separator_fi7cb3_k$(value);
    });
  }
  function labelFirst$factory_5() {
    return getPropertyCallableRef('labelFirst', 1, KMutableProperty1, function (receiver) {
      return receiver.get_labelFirst_n6uzdx_k$();
    }, function (receiver, value) {
      return receiver.set_labelFirst_q3ot2c_k$(value);
    });
  }
  function target$factory_1() {
    return getPropertyCallableRef('target', 1, KMutableProperty1, function (receiver) {
      return receiver.get_target_juba8q_k$();
    }, function (receiver, value) {
      return receiver.set_target_l2qxfb_k$(value);
    });
  }
  function dataNavigo$factory() {
    return getPropertyCallableRef('dataNavigo', 1, KMutableProperty1, function (receiver) {
      return receiver.get_dataNavigo_1pkdun_k$();
    }, function (receiver, value) {
      return receiver.set_dataNavigo_uqcbez_k$(value);
    });
  }
  function label$factory_0() {
    return getPropertyCallableRef('label', 1, KMutableProperty1, function (receiver) {
      return receiver.get_label_iuj8p7_k$();
    }, function (receiver, value) {
      return receiver.set_label_nnic99_k$(value);
    });
  }
  function label$factory_1() {
    return getPropertyCallableRef('label', 1, KMutableProperty1, function (receiver) {
      return receiver.get_label_iuj8p7_k$();
    }, function (receiver, value) {
      return receiver.set_label_nnic99_k$(value);
    });
  }
  function url$factory_0() {
    return getPropertyCallableRef('url', 1, KMutableProperty1, function (receiver) {
      return receiver.get_url_18iuii_k$();
    }, function (receiver, value) {
      return receiver.set_url_fvthdx_k$(value);
    });
  }
  function url$factory_1() {
    return getPropertyCallableRef('url', 1, KMutableProperty1, function (receiver) {
      return receiver.get_url_18iuii_k$();
    }, function (receiver, value) {
      return receiver.set_url_fvthdx_k$(value);
    });
  }
  function icon$factory_6() {
    return getPropertyCallableRef('icon', 1, KMutableProperty1, function (receiver) {
      return receiver.get_icon_wont8i_k$();
    }, function (receiver, value) {
      return receiver.set_icon_t78tsv_k$(value);
    });
  }
  function icon$factory_7() {
    return getPropertyCallableRef('icon', 1, KMutableProperty1, function (receiver) {
      return receiver.get_icon_wont8i_k$();
    }, function (receiver, value) {
      return receiver.set_icon_t78tsv_k$(value);
    });
  }
  function image$factory_2() {
    return getPropertyCallableRef('image', 1, KMutableProperty1, function (receiver) {
      return receiver.get_image_it3i2a_k$();
    }, function (receiver, value) {
      return receiver.set_image_f7p9g9_k$(value);
    });
  }
  function image$factory_3() {
    return getPropertyCallableRef('image', 1, KMutableProperty1, function (receiver) {
      return receiver.get_image_it3i2a_k$();
    }, function (receiver, value) {
      return receiver.set_image_f7p9g9_k$(value);
    });
  }
  function separator$factory_3() {
    return getPropertyCallableRef('separator', 1, KMutableProperty1, function (receiver) {
      return receiver.get_separator_xuwon8_k$();
    }, function (receiver, value) {
      return receiver.set_separator_fi7cb3_k$(value);
    });
  }
  function separator$factory_4() {
    return getPropertyCallableRef('separator', 1, KMutableProperty1, function (receiver) {
      return receiver.get_separator_xuwon8_k$();
    }, function (receiver, value) {
      return receiver.set_separator_fi7cb3_k$(value);
    });
  }
  function labelFirst$factory_6() {
    return getPropertyCallableRef('labelFirst', 1, KMutableProperty1, function (receiver) {
      return receiver.get_labelFirst_n6uzdx_k$();
    }, function (receiver, value) {
      return receiver.set_labelFirst_q3ot2c_k$(value);
    });
  }
  function labelFirst$factory_7() {
    return getPropertyCallableRef('labelFirst', 1, KMutableProperty1, function (receiver) {
      return receiver.get_labelFirst_n6uzdx_k$();
    }, function (receiver, value) {
      return receiver.set_labelFirst_q3ot2c_k$(value);
    });
  }
  function target$factory_2() {
    return getPropertyCallableRef('target', 1, KMutableProperty1, function (receiver) {
      return receiver.get_target_juba8q_k$();
    }, function (receiver, value) {
      return receiver.set_target_l2qxfb_k$(value);
    });
  }
  function target$factory_3() {
    return getPropertyCallableRef('target', 1, KMutableProperty1, function (receiver) {
      return receiver.get_target_juba8q_k$();
    }, function (receiver, value) {
      return receiver.set_target_l2qxfb_k$(value);
    });
  }
  function dataNavigo$factory_0() {
    return getPropertyCallableRef('dataNavigo', 1, KMutableProperty1, function (receiver) {
      return receiver.get_dataNavigo_1pkdun_k$();
    }, function (receiver, value) {
      return receiver.set_dataNavigo_uqcbez_k$(value);
    });
  }
  function dataNavigo$factory_1() {
    return getPropertyCallableRef('dataNavigo', 1, KMutableProperty1, function (receiver) {
      return receiver.get_dataNavigo_1pkdun_k$();
    }, function (receiver, value) {
      return receiver.set_dataNavigo_uqcbez_k$(value);
    });
  }
  var ListType_UL_instance;
  var ListType_OL_instance;
  var ListType_UNSTYLED_instance;
  var ListType_INLINE_instance;
  var ListType_DL_instance;
  var ListType_DL_HORIZ_instance;
  function values_56() {
    return [ListType_UL_getInstance(), ListType_OL_getInstance(), ListType_UNSTYLED_getInstance(), ListType_INLINE_getInstance(), ListType_DL_getInstance(), ListType_DL_HORIZ_getInstance()];
  }
  function valueOf_56(value) {
    switch (value) {
      case 'UL':
        return ListType_UL_getInstance();
      case 'OL':
        return ListType_OL_getInstance();
      case 'UNSTYLED':
        return ListType_UNSTYLED_getInstance();
      case 'INLINE':
        return ListType_INLINE_getInstance();
      case 'DL':
        return ListType_DL_getInstance();
      case 'DL_HORIZ':
        return ListType_DL_HORIZ_getInstance();
      default:
        ListType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_56() {
    if ($ENTRIES_56 == null)
      $ENTRIES_56 = enumEntries(values_56());
    return $ENTRIES_56;
  }
  var ListType_entriesInitialized;
  function ListType_initEntries() {
    if (ListType_entriesInitialized)
      return Unit_getInstance();
    ListType_entriesInitialized = true;
    ListType_UL_instance = new ListType('UL', 0, 'ul');
    ListType_OL_instance = new ListType('OL', 1, 'ol');
    ListType_UNSTYLED_instance = new ListType('UNSTYLED', 2, 'ul');
    ListType_INLINE_instance = new ListType('INLINE', 3, 'ul');
    ListType_DL_instance = new ListType('DL', 4, 'dl');
    ListType_DL_HORIZ_instance = new ListType('DL_HORIZ', 5, 'dl');
  }
  var $ENTRIES_56;
  function ListType(name, ordinal, tagName) {
    Enum.call(this, name, ordinal);
    this.tagName_1 = tagName;
  }
  protoOf(ListType).get_tagName_7k7wv_k$ = function () {
    return this.tagName_1;
  };
  function element($this, name, value, rich, inline) {
    var translatedValue = $this.translate_s2ekyc_k$(value);
    var tmp;
    if (inline) {
      // Inline function 'io.kvision.utils.snOpt' call
      var block = ListTag$element$lambda;
      // Inline function 'io.kvision.utils.vNodeData' call
      var tmp$ret$0 = {};
      tmp = apply$ref_8(tmp$ret$0)(block);
    } else {
      // Inline function 'io.kvision.utils.snOpt' call
      var block_0 = ListTag$element$lambda_0;
      // Inline function 'io.kvision.utils.vNodeData' call
      var tmp$ret$2 = {};
      tmp = apply$ref_9(tmp$ret$2)(block_0);
    }
    var opt = tmp;
    var tmp_0;
    if (rich) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = [KVManager_getInstance().virtualize_d7cntb_k$('<span style="display: contents;">' + translatedValue + '<\/span>')];
      tmp_0 = h(name, opt, tmp$ret$6);
    } else {
      tmp_0 = h_1(name, opt, translatedValue);
    }
    return tmp_0;
  }
  function ListTag$type$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function ListTag$elements$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function ListTag$rich$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function ListTag$childrenVNodes$lambda($this$snOpt) {
    // Inline function 'io.kvision.utils.snClasses' call
    var pairs = listOf_0(to('list-inline-item', true));
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.utils.snClasses.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pairs.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.utils.snClasses.<anonymous>.<anonymous>' call
      var key = element.component1_7eebsc_k$();
      var value = element.component2_7eebsb_k$();
      this_0[key] = value;
    }
    $this$snOpt.class = this_0;
    return Unit_getInstance();
  }
  function apply$ref_7($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function ListTag$element$lambda($this$snOpt) {
    // Inline function 'io.kvision.utils.snClasses' call
    var pairs = listOf_0(to('list-inline-item', true));
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.utils.snClasses.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pairs.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.utils.snClasses.<anonymous>.<anonymous>' call
      var key = element.component1_7eebsc_k$();
      var value = element.component2_7eebsb_k$();
      this_0[key] = value;
    }
    $this$snOpt.class = this_0;
    return Unit_getInstance();
  }
  function apply$ref_8($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function ListTag$element$lambda_0($this$snOpt) {
    return Unit_getInstance();
  }
  function apply$ref_9($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function ListTag(type, elements, rich, className, init) {
    elements = elements === VOID ? null : elements;
    rich = rich === VOID ? false : rich;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = ListTag$type$delegate$lambda(this);
    tmp.type$delegate_1 = (new RefreshDelegateProvider_0(this, type, refreshFunction)).provideDelegate_z62loi_k$(this, type$factory_8());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = ListTag$elements$delegate$lambda(this);
    tmp_0.elements$delegate_1 = (new RefreshDelegateProvider_0(this, elements, refreshFunction_0)).provideDelegate_z62loi_k$(this, elements$factory());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = ListTag$rich$delegate$lambda(this);
    tmp_1.rich$delegate_1 = (new RefreshDelegateProvider_0(this, rich, refreshFunction_1)).provideDelegate_z62loi_k$(this, rich$factory());
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(ListTag).set_type_2kfr1h_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.type$delegate_1, this, type$factory_9(), _set____db54di);
  };
  protoOf(ListTag).get_type_wovaf7_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.type$delegate_1, this, type$factory_10());
  };
  protoOf(ListTag).set_elements_l7o2gl_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.elements$delegate_1, this, elements$factory_0(), _set____db54di);
  };
  protoOf(ListTag).get_elements_vxwh8g_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.elements$delegate_1, this, elements$factory_1());
  };
  protoOf(ListTag).set_rich_1alg2s_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.rich$delegate_1, this, rich$factory_0(), _set____db54di);
  };
  protoOf(ListTag).get_rich_woto9x_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.rich$delegate_1, this, rich$factory_1());
  };
  protoOf(ListTag).render_fgfjvu_k$ = function () {
    var tmp;
    switch (this.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
      case 0:
      case 1:
      case 2:
      case 3:
        var tmp1_safe_receiver = this.get_elements_vxwh8g_k$();
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
          var _iterator__ex2g4s = tmp1_safe_receiver.iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var item = _iterator__ex2g4s.next_20eer_k$();
            // Inline function 'io.kvision.html.ListTag.render.<anonymous>' call
            var tmp$ret$0 = element(this, 'li', item, this.get_rich_woto9x_k$(), this.get_type_wovaf7_k$().equals(ListType_INLINE_getInstance()));
            destination.add_utx5q5_k$(tmp$ret$0);
          }
          tmp_0 = destination;
        }

        tmp = tmp_0;
        break;
      case 4:
      case 5:
        var tmp2_safe_receiver = this.get_elements_vxwh8g_k$();
        var tmp_1;
        if (tmp2_safe_receiver == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.collections.mapIndexed' call
          // Inline function 'kotlin.collections.mapIndexedTo' call
          var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_safe_receiver, 10));
          var index = 0;
          var _iterator__ex2g4s_0 = tmp2_safe_receiver.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
            var item_0 = _iterator__ex2g4s_0.next_20eer_k$();
            var _unary__edvuaz = index;
            index = _unary__edvuaz + 1 | 0;
            // Inline function 'io.kvision.html.ListTag.render.<anonymous>' call
            var index_0 = checkIndexOverflow(_unary__edvuaz);
            var tmp$ret$3 = element(this, (index_0 % 2 | 0) === 0 ? 'dt' : 'dd', item_0, this.get_rich_woto9x_k$(), false);
            destination_0.add_utx5q5_k$(tmp$ret$3);
          }
          tmp_1 = destination_0;
        }

        tmp = tmp_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var tmp3_safe_receiver = tmp;
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_2 = copyToArray(tmp3_safe_receiver);
    }
    var childrenElements = tmp_2;
    var tmp_3;
    if (!(childrenElements == null)) {
      var tmp_4 = this.get_type_wovaf7_k$().tagName_1;
      // Inline function 'kotlin.collections.plus' call
      var elements = this.childrenVNodes_2corie_k$();
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$8 = childrenElements.concat(elements);
      tmp_3 = this.render_prnnht_k$(tmp_4, tmp$ret$8);
    } else {
      tmp_3 = this.render_prnnht_k$(this.get_type_wovaf7_k$().tagName_1, this.childrenVNodes_2corie_k$());
    }
    return tmp_3;
  };
  protoOf(ListTag).childrenVNodes_2corie_k$ = function () {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.getChildren_97y0zv_k$();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.html.ListTag.childrenVNodes.<anonymous>' call
      if (element.get_visible_8zfvk9_k$()) {
        destination.add_utx5q5_k$(element);
      }
    }
    var childrenElements = destination;
    var tmp;
    switch (this.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
      case 0:
      case 1:
      case 2:
      case 3:
        // Inline function 'kotlin.collections.map' call

        // Inline function 'kotlin.collections.mapTo' call

        var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(childrenElements, 10));
        var _iterator__ex2g4s_0 = childrenElements.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var item = _iterator__ex2g4s_0.next_20eer_k$();
          // Inline function 'io.kvision.html.ListTag.childrenVNodes.<anonymous>' call
          var tmp_0;
          var tmp_1;
          var tmp_2;
          if (item instanceof Tag) {
            tmp_2 = item.get_type_wovaf7_k$().equals(TAG_LI_getInstance()) || item.get_type_wovaf7_k$().equals(TAG_OL_getInstance()) || item.get_type_wovaf7_k$().equals(TAG_UL_getInstance());
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp_1 = true;
          } else {
            tmp_1 = item instanceof ListTag;
          }
          if (tmp_1) {
            tmp_0 = item.renderVNode_r2mn32_k$();
          } else {
            var tmp_3;
            if (this.get_type_wovaf7_k$().equals(ListType_INLINE_getInstance())) {
              // Inline function 'io.kvision.utils.snOpt' call
              var block = ListTag$childrenVNodes$lambda;
              // Inline function 'io.kvision.utils.vNodeData' call
              var tmp$ret$3 = {};
              var opt = apply$ref_7(tmp$ret$3)(block);
              // Inline function 'kotlin.arrayOf' call
              // Inline function 'kotlin.js.unsafeCast' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$7 = [item.renderVNode_r2mn32_k$()];
              tmp_3 = h('li', opt, tmp$ret$7);
            } else {
              // Inline function 'kotlin.arrayOf' call
              // Inline function 'kotlin.js.unsafeCast' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$10 = [item.renderVNode_r2mn32_k$()];
              tmp_3 = h_2('li', tmp$ret$10);
            }
            tmp_0 = tmp_3;
          }
          var tmp$ret$11 = tmp_0;
          destination_0.add_utx5q5_k$(tmp$ret$11);
        }

        tmp = destination_0;
        break;
      case 4:
      case 5:
        // Inline function 'kotlin.collections.mapIndexed' call

        // Inline function 'kotlin.collections.mapIndexedTo' call

        var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(childrenElements, 10));
        var index = 0;
        var _iterator__ex2g4s_1 = childrenElements.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
          var item_0 = _iterator__ex2g4s_1.next_20eer_k$();
          var _unary__edvuaz = index;
          index = _unary__edvuaz + 1 | 0;
          // Inline function 'io.kvision.html.ListTag.childrenVNodes.<anonymous>' call
          var index_0 = checkIndexOverflow(_unary__edvuaz);
          var tmp_4;
          var tmp_5;
          if (item_0 instanceof Tag) {
            var tmp_6;
            if (item_0.get_type_wovaf7_k$().equals(TAG_LI_getInstance()) || item_0.get_type_wovaf7_k$().equals(TAG_OL_getInstance()) || item_0.get_type_wovaf7_k$().equals(TAG_UL_getInstance())) {
              tmp_6 = true;
            } else {
              tmp_6 = item_0 instanceof ListTag;
            }
            tmp_5 = tmp_6;
          } else {
            tmp_5 = false;
          }
          if (tmp_5) {
            tmp_4 = item_0.renderVNode_r2mn32_k$();
          } else {
            var tmp_7 = (index_0 % 2 | 0) === 0 ? 'dt' : 'dd';
            // Inline function 'kotlin.arrayOf' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$16 = [item_0.renderVNode_r2mn32_k$()];
            tmp_4 = h_2(tmp_7, tmp$ret$16);
          }
          var tmp$ret$17 = tmp_4;
          destination_1.add_utx5q5_k$(tmp$ret$17);
        }

        tmp = destination_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var res = tmp;
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(res);
  };
  protoOf(ListTag).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    switch (this.get_type_wovaf7_k$().get_ordinal_ip24qg_k$()) {
      case 2:
        classSetBuilder.add_udnk2x_k$('list-unstyled');
        break;
      case 3:
        classSetBuilder.add_udnk2x_k$('list-inline');
        break;
      case 5:
        classSetBuilder.add_udnk2x_k$('dl-horizontal');
        break;
      default:
        break;
    }
  };
  function ListType_UL_getInstance() {
    ListType_initEntries();
    return ListType_UL_instance;
  }
  function ListType_OL_getInstance() {
    ListType_initEntries();
    return ListType_OL_instance;
  }
  function ListType_UNSTYLED_getInstance() {
    ListType_initEntries();
    return ListType_UNSTYLED_instance;
  }
  function ListType_INLINE_getInstance() {
    ListType_initEntries();
    return ListType_INLINE_instance;
  }
  function ListType_DL_getInstance() {
    ListType_initEntries();
    return ListType_DL_instance;
  }
  function ListType_DL_HORIZ_getInstance() {
    ListType_initEntries();
    return ListType_DL_HORIZ_instance;
  }
  function type$factory_8() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_2kfr1h_k$(value);
    });
  }
  function elements$factory() {
    return getPropertyCallableRef('elements', 1, KMutableProperty1, function (receiver) {
      return receiver.get_elements_vxwh8g_k$();
    }, function (receiver, value) {
      return receiver.set_elements_l7o2gl_k$(value);
    });
  }
  function rich$factory() {
    return getPropertyCallableRef('rich', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rich_woto9x_k$();
    }, function (receiver, value) {
      return receiver.set_rich_1alg2s_k$(value);
    });
  }
  function type$factory_9() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_2kfr1h_k$(value);
    });
  }
  function type$factory_10() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_2kfr1h_k$(value);
    });
  }
  function elements$factory_0() {
    return getPropertyCallableRef('elements', 1, KMutableProperty1, function (receiver) {
      return receiver.get_elements_vxwh8g_k$();
    }, function (receiver, value) {
      return receiver.set_elements_l7o2gl_k$(value);
    });
  }
  function elements$factory_1() {
    return getPropertyCallableRef('elements', 1, KMutableProperty1, function (receiver) {
      return receiver.get_elements_vxwh8g_k$();
    }, function (receiver, value) {
      return receiver.set_elements_l7o2gl_k$(value);
    });
  }
  function rich$factory_0() {
    return getPropertyCallableRef('rich', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rich_woto9x_k$();
    }, function (receiver, value) {
      return receiver.set_rich_1alg2s_k$(value);
    });
  }
  function rich$factory_1() {
    return getPropertyCallableRef('rich', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rich_woto9x_k$();
    }, function (receiver, value) {
      return receiver.set_rich_1alg2s_k$(value);
    });
  }
  function ol(_this__u8e3s4, elements, rich, className, init) {
    elements = elements === VOID ? null : elements;
    rich = rich === VOID ? false : rich;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var ol = new Ol(elements, rich, className, init);
    _this__u8e3s4.add_rekwpt_k$(ol);
    return ol;
  }
  function Ol(elements, rich, className, init) {
    elements = elements === VOID ? null : elements;
    rich = rich === VOID ? false : rich;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    ListTag.call(this, ListType_OL_getInstance(), elements, rich, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function p(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var p = new P(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(p);
    return p;
  }
  function P(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_P_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function Span(content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_SPAN_getInstance(), content, rich, align, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function span(_this__u8e3s4, content, rich, align, className, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var span = new Span(content, rich, align, className, init);
    _this__u8e3s4.add_rekwpt_k$(span);
    return span;
  }
  var TAG_A_instance;
  var TAG_ABBR_instance;
  var TAG_ADDRESS_instance;
  var TAG_AREA_instance;
  var TAG_ARTICLE_instance;
  var TAG_ASIDE_instance;
  var TAG_AUDIO_instance;
  var TAG_B_instance;
  var TAG_BASE_instance;
  var TAG_BDI_instance;
  var TAG_BDO_instance;
  var TAG_BLOCKQUOTE_instance;
  var TAG_BODY_instance;
  var TAG_BR_instance;
  var TAG_BUTTON_instance;
  var TAG_CANVAS_instance;
  var TAG_CAPTION_instance;
  var TAG_CITE_instance;
  var TAG_CODE_instance;
  var TAG_COL_instance;
  var TAG_COLGROUP_instance;
  var TAG_DATA_instance;
  var TAG_DATALIST_instance;
  var TAG_DD_instance;
  var TAG_DEL_instance;
  var TAG_DETAILS_instance;
  var TAG_DFN_instance;
  var TAG_DIALOG_instance;
  var TAG_DIV_instance;
  var TAG_DL_instance;
  var TAG_DT_instance;
  var TAG_EM_instance;
  var TAG_EMBED_instance;
  var TAG_FIELDSET_instance;
  var TAG_FIGCAPTION_instance;
  var TAG_FIGURE_instance;
  var TAG_FOOTER_instance;
  var TAG_FORM_instance;
  var TAG_H1_instance;
  var TAG_H2_instance;
  var TAG_H3_instance;
  var TAG_H4_instance;
  var TAG_H5_instance;
  var TAG_H6_instance;
  var TAG_HEAD_instance;
  var TAG_HEADER_instance;
  var TAG_HGROUP_instance;
  var TAG_HR_instance;
  var TAG_HTML_instance;
  var TAG_I_instance;
  var TAG_IFRAME_instance;
  var TAG_IMG_instance;
  var TAG_INPUT_instance;
  var TAG_INS_instance;
  var TAG_KBD_instance;
  var TAG_LABEL_instance;
  var TAG_LEGEND_instance;
  var TAG_LI_instance;
  var TAG_LINK_instance;
  var TAG_MAIN_instance;
  var TAG_MAP_instance;
  var TAG_MARK_instance;
  var TAG_MATH_instance;
  var TAG_MENU_instance;
  var TAG_MENUITEM_instance;
  var TAG_META_instance;
  var TAG_METER_instance;
  var TAG_NAV_instance;
  var TAG_NOSCRIPT_instance;
  var TAG_OBJECT_instance;
  var TAG_OL_instance;
  var TAG_OPTGROUP_instance;
  var TAG_OPTION_instance;
  var TAG_OUTPUT_instance;
  var TAG_P_instance;
  var TAG_PARAM_instance;
  var TAG_PICTURE_instance;
  var TAG_PRE_instance;
  var TAG_PROGRESS_instance;
  var TAG_Q_instance;
  var TAG_RB_instance;
  var TAG_RP_instance;
  var TAG_RT_instance;
  var TAG_RTC_instance;
  var TAG_RUBY_instance;
  var TAG_S_instance;
  var TAG_SAMP_instance;
  var TAG_SCRIPT_instance;
  var TAG_SECTION_instance;
  var TAG_SELECT_instance;
  var TAG_SLOT_instance;
  var TAG_SMALL_instance;
  var TAG_SOURCE_instance;
  var TAG_SPAN_instance;
  var TAG_STRONG_instance;
  var TAG_STYLE_instance;
  var TAG_SUB_instance;
  var TAG_SUMMARY_instance;
  var TAG_SUP_instance;
  var TAG_SVG_instance;
  var TAG_TABLE_instance;
  var TAG_TBODY_instance;
  var TAG_TD_instance;
  var TAG_TEMPLATE_instance;
  var TAG_TEXTAREA_instance;
  var TAG_TFOOT_instance;
  var TAG_TH_instance;
  var TAG_THEAD_instance;
  var TAG_TIME_instance;
  var TAG_TITLE_instance;
  var TAG_TR_instance;
  var TAG_TRACK_instance;
  var TAG_U_instance;
  var TAG_UL_instance;
  var TAG_VAR_instance;
  var TAG_VIDEO_instance;
  var TAG_WBR_instance;
  function values_57() {
    return [TAG_A_getInstance(), TAG_ABBR_getInstance(), TAG_ADDRESS_getInstance(), TAG_AREA_getInstance(), TAG_ARTICLE_getInstance(), TAG_ASIDE_getInstance(), TAG_AUDIO_getInstance(), TAG_B_getInstance(), TAG_BASE_getInstance(), TAG_BDI_getInstance(), TAG_BDO_getInstance(), TAG_BLOCKQUOTE_getInstance(), TAG_BODY_getInstance(), TAG_BR_getInstance(), TAG_BUTTON_getInstance(), TAG_CANVAS_getInstance(), TAG_CAPTION_getInstance(), TAG_CITE_getInstance(), TAG_CODE_getInstance(), TAG_COL_getInstance(), TAG_COLGROUP_getInstance(), TAG_DATA_getInstance(), TAG_DATALIST_getInstance(), TAG_DD_getInstance(), TAG_DEL_getInstance(), TAG_DETAILS_getInstance(), TAG_DFN_getInstance(), TAG_DIALOG_getInstance(), TAG_DIV_getInstance(), TAG_DL_getInstance(), TAG_DT_getInstance(), TAG_EM_getInstance(), TAG_EMBED_getInstance(), TAG_FIELDSET_getInstance(), TAG_FIGCAPTION_getInstance(), TAG_FIGURE_getInstance(), TAG_FOOTER_getInstance(), TAG_FORM_getInstance(), TAG_H1_getInstance(), TAG_H2_getInstance(), TAG_H3_getInstance(), TAG_H4_getInstance(), TAG_H5_getInstance(), TAG_H6_getInstance(), TAG_HEAD_getInstance(), TAG_HEADER_getInstance(), TAG_HGROUP_getInstance(), TAG_HR_getInstance(), TAG_HTML_getInstance(), TAG_I_getInstance(), TAG_IFRAME_getInstance(), TAG_IMG_getInstance(), TAG_INPUT_getInstance(), TAG_INS_getInstance(), TAG_KBD_getInstance(), TAG_LABEL_getInstance(), TAG_LEGEND_getInstance(), TAG_LI_getInstance(), TAG_LINK_getInstance(), TAG_MAIN_getInstance(), TAG_MAP_getInstance(), TAG_MARK_getInstance(), TAG_MATH_getInstance(), TAG_MENU_getInstance(), TAG_MENUITEM_getInstance(), TAG_META_getInstance(), TAG_METER_getInstance(), TAG_NAV_getInstance(), TAG_NOSCRIPT_getInstance(), TAG_OBJECT_getInstance(), TAG_OL_getInstance(), TAG_OPTGROUP_getInstance(), TAG_OPTION_getInstance(), TAG_OUTPUT_getInstance(), TAG_P_getInstance(), TAG_PARAM_getInstance(), TAG_PICTURE_getInstance(), TAG_PRE_getInstance(), TAG_PROGRESS_getInstance(), TAG_Q_getInstance(), TAG_RB_getInstance(), TAG_RP_getInstance(), TAG_RT_getInstance(), TAG_RTC_getInstance(), TAG_RUBY_getInstance(), TAG_S_getInstance(), TAG_SAMP_getInstance(), TAG_SCRIPT_getInstance(), TAG_SECTION_getInstance(), TAG_SELECT_getInstance(), TAG_SLOT_getInstance(), TAG_SMALL_getInstance(), TAG_SOURCE_getInstance(), TAG_SPAN_getInstance(), TAG_STRONG_getInstance(), TAG_STYLE_getInstance(), TAG_SUB_getInstance(), TAG_SUMMARY_getInstance(), TAG_SUP_getInstance(), TAG_SVG_getInstance(), TAG_TABLE_getInstance(), TAG_TBODY_getInstance(), TAG_TD_getInstance(), TAG_TEMPLATE_getInstance(), TAG_TEXTAREA_getInstance(), TAG_TFOOT_getInstance(), TAG_TH_getInstance(), TAG_THEAD_getInstance(), TAG_TIME_getInstance(), TAG_TITLE_getInstance(), TAG_TR_getInstance(), TAG_TRACK_getInstance(), TAG_U_getInstance(), TAG_UL_getInstance(), TAG_VAR_getInstance(), TAG_VIDEO_getInstance(), TAG_WBR_getInstance()];
  }
  function valueOf_57(value) {
    switch (value) {
      case 'A':
        return TAG_A_getInstance();
      case 'ABBR':
        return TAG_ABBR_getInstance();
      case 'ADDRESS':
        return TAG_ADDRESS_getInstance();
      case 'AREA':
        return TAG_AREA_getInstance();
      case 'ARTICLE':
        return TAG_ARTICLE_getInstance();
      case 'ASIDE':
        return TAG_ASIDE_getInstance();
      case 'AUDIO':
        return TAG_AUDIO_getInstance();
      case 'B':
        return TAG_B_getInstance();
      case 'BASE':
        return TAG_BASE_getInstance();
      case 'BDI':
        return TAG_BDI_getInstance();
      case 'BDO':
        return TAG_BDO_getInstance();
      case 'BLOCKQUOTE':
        return TAG_BLOCKQUOTE_getInstance();
      case 'BODY':
        return TAG_BODY_getInstance();
      case 'BR':
        return TAG_BR_getInstance();
      case 'BUTTON':
        return TAG_BUTTON_getInstance();
      case 'CANVAS':
        return TAG_CANVAS_getInstance();
      case 'CAPTION':
        return TAG_CAPTION_getInstance();
      case 'CITE':
        return TAG_CITE_getInstance();
      case 'CODE':
        return TAG_CODE_getInstance();
      case 'COL':
        return TAG_COL_getInstance();
      case 'COLGROUP':
        return TAG_COLGROUP_getInstance();
      case 'DATA':
        return TAG_DATA_getInstance();
      case 'DATALIST':
        return TAG_DATALIST_getInstance();
      case 'DD':
        return TAG_DD_getInstance();
      case 'DEL':
        return TAG_DEL_getInstance();
      case 'DETAILS':
        return TAG_DETAILS_getInstance();
      case 'DFN':
        return TAG_DFN_getInstance();
      case 'DIALOG':
        return TAG_DIALOG_getInstance();
      case 'DIV':
        return TAG_DIV_getInstance();
      case 'DL':
        return TAG_DL_getInstance();
      case 'DT':
        return TAG_DT_getInstance();
      case 'EM':
        return TAG_EM_getInstance();
      case 'EMBED':
        return TAG_EMBED_getInstance();
      case 'FIELDSET':
        return TAG_FIELDSET_getInstance();
      case 'FIGCAPTION':
        return TAG_FIGCAPTION_getInstance();
      case 'FIGURE':
        return TAG_FIGURE_getInstance();
      case 'FOOTER':
        return TAG_FOOTER_getInstance();
      case 'FORM':
        return TAG_FORM_getInstance();
      case 'H1':
        return TAG_H1_getInstance();
      case 'H2':
        return TAG_H2_getInstance();
      case 'H3':
        return TAG_H3_getInstance();
      case 'H4':
        return TAG_H4_getInstance();
      case 'H5':
        return TAG_H5_getInstance();
      case 'H6':
        return TAG_H6_getInstance();
      case 'HEAD':
        return TAG_HEAD_getInstance();
      case 'HEADER':
        return TAG_HEADER_getInstance();
      case 'HGROUP':
        return TAG_HGROUP_getInstance();
      case 'HR':
        return TAG_HR_getInstance();
      case 'HTML':
        return TAG_HTML_getInstance();
      case 'I':
        return TAG_I_getInstance();
      case 'IFRAME':
        return TAG_IFRAME_getInstance();
      case 'IMG':
        return TAG_IMG_getInstance();
      case 'INPUT':
        return TAG_INPUT_getInstance();
      case 'INS':
        return TAG_INS_getInstance();
      case 'KBD':
        return TAG_KBD_getInstance();
      case 'LABEL':
        return TAG_LABEL_getInstance();
      case 'LEGEND':
        return TAG_LEGEND_getInstance();
      case 'LI':
        return TAG_LI_getInstance();
      case 'LINK':
        return TAG_LINK_getInstance();
      case 'MAIN':
        return TAG_MAIN_getInstance();
      case 'MAP':
        return TAG_MAP_getInstance();
      case 'MARK':
        return TAG_MARK_getInstance();
      case 'MATH':
        return TAG_MATH_getInstance();
      case 'MENU':
        return TAG_MENU_getInstance();
      case 'MENUITEM':
        return TAG_MENUITEM_getInstance();
      case 'META':
        return TAG_META_getInstance();
      case 'METER':
        return TAG_METER_getInstance();
      case 'NAV':
        return TAG_NAV_getInstance();
      case 'NOSCRIPT':
        return TAG_NOSCRIPT_getInstance();
      case 'OBJECT':
        return TAG_OBJECT_getInstance();
      case 'OL':
        return TAG_OL_getInstance();
      case 'OPTGROUP':
        return TAG_OPTGROUP_getInstance();
      case 'OPTION':
        return TAG_OPTION_getInstance();
      case 'OUTPUT':
        return TAG_OUTPUT_getInstance();
      case 'P':
        return TAG_P_getInstance();
      case 'PARAM':
        return TAG_PARAM_getInstance();
      case 'PICTURE':
        return TAG_PICTURE_getInstance();
      case 'PRE':
        return TAG_PRE_getInstance();
      case 'PROGRESS':
        return TAG_PROGRESS_getInstance();
      case 'Q':
        return TAG_Q_getInstance();
      case 'RB':
        return TAG_RB_getInstance();
      case 'RP':
        return TAG_RP_getInstance();
      case 'RT':
        return TAG_RT_getInstance();
      case 'RTC':
        return TAG_RTC_getInstance();
      case 'RUBY':
        return TAG_RUBY_getInstance();
      case 'S':
        return TAG_S_getInstance();
      case 'SAMP':
        return TAG_SAMP_getInstance();
      case 'SCRIPT':
        return TAG_SCRIPT_getInstance();
      case 'SECTION':
        return TAG_SECTION_getInstance();
      case 'SELECT':
        return TAG_SELECT_getInstance();
      case 'SLOT':
        return TAG_SLOT_getInstance();
      case 'SMALL':
        return TAG_SMALL_getInstance();
      case 'SOURCE':
        return TAG_SOURCE_getInstance();
      case 'SPAN':
        return TAG_SPAN_getInstance();
      case 'STRONG':
        return TAG_STRONG_getInstance();
      case 'STYLE':
        return TAG_STYLE_getInstance();
      case 'SUB':
        return TAG_SUB_getInstance();
      case 'SUMMARY':
        return TAG_SUMMARY_getInstance();
      case 'SUP':
        return TAG_SUP_getInstance();
      case 'SVG':
        return TAG_SVG_getInstance();
      case 'TABLE':
        return TAG_TABLE_getInstance();
      case 'TBODY':
        return TAG_TBODY_getInstance();
      case 'TD':
        return TAG_TD_getInstance();
      case 'TEMPLATE':
        return TAG_TEMPLATE_getInstance();
      case 'TEXTAREA':
        return TAG_TEXTAREA_getInstance();
      case 'TFOOT':
        return TAG_TFOOT_getInstance();
      case 'TH':
        return TAG_TH_getInstance();
      case 'THEAD':
        return TAG_THEAD_getInstance();
      case 'TIME':
        return TAG_TIME_getInstance();
      case 'TITLE':
        return TAG_TITLE_getInstance();
      case 'TR':
        return TAG_TR_getInstance();
      case 'TRACK':
        return TAG_TRACK_getInstance();
      case 'U':
        return TAG_U_getInstance();
      case 'UL':
        return TAG_UL_getInstance();
      case 'VAR':
        return TAG_VAR_getInstance();
      case 'VIDEO':
        return TAG_VIDEO_getInstance();
      case 'WBR':
        return TAG_WBR_getInstance();
      default:
        TAG_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_57() {
    if ($ENTRIES_57 == null)
      $ENTRIES_57 = enumEntries(values_57());
    return $ENTRIES_57;
  }
  var TAG_entriesInitialized;
  function TAG_initEntries() {
    if (TAG_entriesInitialized)
      return Unit_getInstance();
    TAG_entriesInitialized = true;
    TAG_A_instance = new TAG('A', 0, 'a');
    TAG_ABBR_instance = new TAG('ABBR', 1, 'abbr');
    TAG_ADDRESS_instance = new TAG('ADDRESS', 2, 'address');
    TAG_AREA_instance = new TAG('AREA', 3, 'area');
    TAG_ARTICLE_instance = new TAG('ARTICLE', 4, 'article');
    TAG_ASIDE_instance = new TAG('ASIDE', 5, 'aside');
    TAG_AUDIO_instance = new TAG('AUDIO', 6, 'audio');
    TAG_B_instance = new TAG('B', 7, 'b');
    TAG_BASE_instance = new TAG('BASE', 8, 'base');
    TAG_BDI_instance = new TAG('BDI', 9, 'bdi');
    TAG_BDO_instance = new TAG('BDO', 10, 'bdo');
    TAG_BLOCKQUOTE_instance = new TAG('BLOCKQUOTE', 11, 'blockquote');
    TAG_BODY_instance = new TAG('BODY', 12, 'body');
    TAG_BR_instance = new TAG('BR', 13, 'br');
    TAG_BUTTON_instance = new TAG('BUTTON', 14, 'button');
    TAG_CANVAS_instance = new TAG('CANVAS', 15, 'canvas');
    TAG_CAPTION_instance = new TAG('CAPTION', 16, 'caption');
    TAG_CITE_instance = new TAG('CITE', 17, 'cite');
    TAG_CODE_instance = new TAG('CODE', 18, 'code');
    TAG_COL_instance = new TAG('COL', 19, 'col');
    TAG_COLGROUP_instance = new TAG('COLGROUP', 20, 'colgroup');
    TAG_DATA_instance = new TAG('DATA', 21, 'data');
    TAG_DATALIST_instance = new TAG('DATALIST', 22, 'datalist');
    TAG_DD_instance = new TAG('DD', 23, 'dd');
    TAG_DEL_instance = new TAG('DEL', 24, 'del');
    TAG_DETAILS_instance = new TAG('DETAILS', 25, 'details');
    TAG_DFN_instance = new TAG('DFN', 26, 'dfn');
    TAG_DIALOG_instance = new TAG('DIALOG', 27, 'dialog');
    TAG_DIV_instance = new TAG('DIV', 28, 'div');
    TAG_DL_instance = new TAG('DL', 29, 'dl');
    TAG_DT_instance = new TAG('DT', 30, 'dt');
    TAG_EM_instance = new TAG('EM', 31, 'em');
    TAG_EMBED_instance = new TAG('EMBED', 32, 'embed');
    TAG_FIELDSET_instance = new TAG('FIELDSET', 33, 'fieldset');
    TAG_FIGCAPTION_instance = new TAG('FIGCAPTION', 34, 'figcaption');
    TAG_FIGURE_instance = new TAG('FIGURE', 35, 'figure');
    TAG_FOOTER_instance = new TAG('FOOTER', 36, 'footer');
    TAG_FORM_instance = new TAG('FORM', 37, 'form');
    TAG_H1_instance = new TAG('H1', 38, 'h1');
    TAG_H2_instance = new TAG('H2', 39, 'h2');
    TAG_H3_instance = new TAG('H3', 40, 'h3');
    TAG_H4_instance = new TAG('H4', 41, 'h4');
    TAG_H5_instance = new TAG('H5', 42, 'h5');
    TAG_H6_instance = new TAG('H6', 43, 'h6');
    TAG_HEAD_instance = new TAG('HEAD', 44, 'head');
    TAG_HEADER_instance = new TAG('HEADER', 45, 'header');
    TAG_HGROUP_instance = new TAG('HGROUP', 46, 'hgroup');
    TAG_HR_instance = new TAG('HR', 47, 'hr');
    TAG_HTML_instance = new TAG('HTML', 48, 'html');
    TAG_I_instance = new TAG('I', 49, 'i');
    TAG_IFRAME_instance = new TAG('IFRAME', 50, 'iframe');
    TAG_IMG_instance = new TAG('IMG', 51, 'img');
    TAG_INPUT_instance = new TAG('INPUT', 52, 'input');
    TAG_INS_instance = new TAG('INS', 53, 'ins');
    TAG_KBD_instance = new TAG('KBD', 54, 'kbd');
    TAG_LABEL_instance = new TAG('LABEL', 55, 'label');
    TAG_LEGEND_instance = new TAG('LEGEND', 56, 'legend');
    TAG_LI_instance = new TAG('LI', 57, 'li');
    TAG_LINK_instance = new TAG('LINK', 58, 'link');
    TAG_MAIN_instance = new TAG('MAIN', 59, 'main');
    TAG_MAP_instance = new TAG('MAP', 60, 'map');
    TAG_MARK_instance = new TAG('MARK', 61, 'mark');
    TAG_MATH_instance = new TAG('MATH', 62, 'math');
    TAG_MENU_instance = new TAG('MENU', 63, 'menu');
    TAG_MENUITEM_instance = new TAG('MENUITEM', 64, 'menuitem');
    TAG_META_instance = new TAG('META', 65, 'meta');
    TAG_METER_instance = new TAG('METER', 66, 'meter');
    TAG_NAV_instance = new TAG('NAV', 67, 'nav');
    TAG_NOSCRIPT_instance = new TAG('NOSCRIPT', 68, 'noscript');
    TAG_OBJECT_instance = new TAG('OBJECT', 69, 'object');
    TAG_OL_instance = new TAG('OL', 70, 'ol');
    TAG_OPTGROUP_instance = new TAG('OPTGROUP', 71, 'optgroup');
    TAG_OPTION_instance = new TAG('OPTION', 72, 'option');
    TAG_OUTPUT_instance = new TAG('OUTPUT', 73, 'output');
    TAG_P_instance = new TAG('P', 74, 'p');
    TAG_PARAM_instance = new TAG('PARAM', 75, 'param');
    TAG_PICTURE_instance = new TAG('PICTURE', 76, 'picture');
    TAG_PRE_instance = new TAG('PRE', 77, 'pre');
    TAG_PROGRESS_instance = new TAG('PROGRESS', 78, 'progress');
    TAG_Q_instance = new TAG('Q', 79, 'q');
    TAG_RB_instance = new TAG('RB', 80, 'rb');
    TAG_RP_instance = new TAG('RP', 81, 'rp');
    TAG_RT_instance = new TAG('RT', 82, 'rt');
    TAG_RTC_instance = new TAG('RTC', 83, 'rtc');
    TAG_RUBY_instance = new TAG('RUBY', 84, 'ruby');
    TAG_S_instance = new TAG('S', 85, 's');
    TAG_SAMP_instance = new TAG('SAMP', 86, 'samp');
    TAG_SCRIPT_instance = new TAG('SCRIPT', 87, 'script');
    TAG_SECTION_instance = new TAG('SECTION', 88, 'section');
    TAG_SELECT_instance = new TAG('SELECT', 89, 'select');
    TAG_SLOT_instance = new TAG('SLOT', 90, 'slot');
    TAG_SMALL_instance = new TAG('SMALL', 91, 'small');
    TAG_SOURCE_instance = new TAG('SOURCE', 92, 'source');
    TAG_SPAN_instance = new TAG('SPAN', 93, 'span');
    TAG_STRONG_instance = new TAG('STRONG', 94, 'strong');
    TAG_STYLE_instance = new TAG('STYLE', 95, 'style');
    TAG_SUB_instance = new TAG('SUB', 96, 'sub');
    TAG_SUMMARY_instance = new TAG('SUMMARY', 97, 'summary');
    TAG_SUP_instance = new TAG('SUP', 98, 'sup');
    TAG_SVG_instance = new TAG('SVG', 99, 'svg');
    TAG_TABLE_instance = new TAG('TABLE', 100, 'table');
    TAG_TBODY_instance = new TAG('TBODY', 101, 'tbody');
    TAG_TD_instance = new TAG('TD', 102, 'td');
    TAG_TEMPLATE_instance = new TAG('TEMPLATE', 103, 'template');
    TAG_TEXTAREA_instance = new TAG('TEXTAREA', 104, 'textarea');
    TAG_TFOOT_instance = new TAG('TFOOT', 105, 'tfoot');
    TAG_TH_instance = new TAG('TH', 106, 'th');
    TAG_THEAD_instance = new TAG('THEAD', 107, 'thead');
    TAG_TIME_instance = new TAG('TIME', 108, 'time');
    TAG_TITLE_instance = new TAG('TITLE', 109, 'title');
    TAG_TR_instance = new TAG('TR', 110, 'tr');
    TAG_TRACK_instance = new TAG('TRACK', 111, 'track');
    TAG_U_instance = new TAG('U', 112, 'u');
    TAG_UL_instance = new TAG('UL', 113, 'ul');
    TAG_VAR_instance = new TAG('VAR', 114, 'var');
    TAG_VIDEO_instance = new TAG('VIDEO', 115, 'video');
    TAG_WBR_instance = new TAG('WBR', 116, 'wbr');
  }
  var $ENTRIES_57;
  function TAG(name, ordinal, tagName) {
    Enum.call(this, name, ordinal);
    this.tagName_1 = tagName;
  }
  protoOf(TAG).get_tagName_7k7wv_k$ = function () {
    return this.tagName_1;
  };
  var Align_LEFT_instance;
  var Align_START_instance;
  var Align_CENTER_instance;
  var Align_RIGHT_instance;
  var Align_END_instance;
  var Align_WRAP_instance;
  var Align_NOWRAP_instance;
  var Align_JUSTIFY_instance;
  function values_58() {
    return [Align_LEFT_getInstance(), Align_START_getInstance(), Align_CENTER_getInstance(), Align_RIGHT_getInstance(), Align_END_getInstance(), Align_WRAP_getInstance(), Align_NOWRAP_getInstance(), Align_JUSTIFY_getInstance()];
  }
  function valueOf_58(value) {
    switch (value) {
      case 'LEFT':
        return Align_LEFT_getInstance();
      case 'START':
        return Align_START_getInstance();
      case 'CENTER':
        return Align_CENTER_getInstance();
      case 'RIGHT':
        return Align_RIGHT_getInstance();
      case 'END':
        return Align_END_getInstance();
      case 'WRAP':
        return Align_WRAP_getInstance();
      case 'NOWRAP':
        return Align_NOWRAP_getInstance();
      case 'JUSTIFY':
        return Align_JUSTIFY_getInstance();
      default:
        Align_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_58() {
    if ($ENTRIES_58 == null)
      $ENTRIES_58 = enumEntries(values_58());
    return $ENTRIES_58;
  }
  var Align_entriesInitialized;
  function Align_initEntries() {
    if (Align_entriesInitialized)
      return Unit_getInstance();
    Align_entriesInitialized = true;
    Align_LEFT_instance = new Align('LEFT', 0, 'kv-text-left');
    Align_START_instance = new Align('START', 1, 'kv-text-start');
    Align_CENTER_instance = new Align('CENTER', 2, 'kv-text-center');
    Align_RIGHT_instance = new Align('RIGHT', 3, 'kv-text-right');
    Align_END_instance = new Align('END', 4, 'kv-text-end');
    Align_WRAP_instance = new Align('WRAP', 5, 'kv-text-wrap');
    Align_NOWRAP_instance = new Align('NOWRAP', 6, 'kv-text-nowrap');
    Align_JUSTIFY_instance = new Align('JUSTIFY', 7, 'kv-text-justify');
  }
  var $ENTRIES_58;
  function Align(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(Align).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function Tag$type$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Tag$content$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Tag$rich$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Tag$align$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Tag$template$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Tag$templates$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Tag(type, content, rich, align, className, attributes, init) {
    content = content === VOID ? null : content;
    rich = rich === VOID ? false : rich;
    align = align === VOID ? null : align;
    className = className === VOID ? null : className;
    attributes = attributes === VOID ? null : attributes;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = Tag$type$delegate$lambda(this);
    tmp.type$delegate_1 = (new RefreshDelegateProvider_0(this, type, refreshFunction)).provideDelegate_z62loi_k$(this, type$factory_11());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = Tag$content$delegate$lambda(this);
    tmp_0.content$delegate_1 = (new RefreshDelegateProvider_0(this, content, refreshFunction_0)).provideDelegate_z62loi_k$(this, content$factory());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = Tag$rich$delegate$lambda(this);
    tmp_1.rich$delegate_1 = (new RefreshDelegateProvider_0(this, rich, refreshFunction_1)).provideDelegate_z62loi_k$(this, rich$factory_2());
    var tmp_2 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_2 = Tag$align$delegate$lambda(this);
    tmp_2.align$delegate_1 = (new RefreshDelegateProvider_0(this, align, refreshFunction_2)).provideDelegate_z62loi_k$(this, align$factory());
    this.templateDataObj_1 = null;
    var tmp_3 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_3 = Tag$template$delegate$lambda(this);
    tmp_3.template$delegate_1 = _WidgetRefreshDelegate___init__impl__h6t5er(refreshFunction_3);
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mapOf' call
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var initialValue = emptyMap();
    var refreshFunction_4 = Tag$templates$delegate$lambda(this);
    tmp_4.templates$delegate_1 = (new RefreshDelegateProvider_0(this, initialValue, refreshFunction_4)).provideDelegate_z62loi_k$(this, templates$factory());
    if (!(attributes == null)) {
      if (this.get_attributes_htpimj_k$() == null) {
        // Inline function 'kotlin.collections.mutableMapOf' call
        var tmp$ret$7 = LinkedHashMap_init_$Create$();
        this.set_attributes_7jhiy8_k$(tmp$ret$7);
      }
      // Inline function 'kotlin.collections.plusAssign' call
      ensureNotNull(this.get_attributes_htpimj_k$()).putAll_wgg6cj_k$(attributes);
    }
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(Tag).set_type_um17n3_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.type$delegate_1, this, type$factory_12(), _set____db54di);
  };
  protoOf(Tag).get_type_wovaf7_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.type$delegate_1, this, type$factory_13());
  };
  protoOf(Tag).set_content_i5lrjv_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.content$delegate_1, this, content$factory_0(), _set____db54di);
  };
  protoOf(Tag).get_content_h02jrk_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.content$delegate_1, this, content$factory_1());
  };
  protoOf(Tag).set_rich_1alg2s_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.rich$delegate_1, this, rich$factory_3(), _set____db54di);
  };
  protoOf(Tag).get_rich_woto9x_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.rich$delegate_1, this, rich$factory_4());
  };
  protoOf(Tag).set_align_odqfc5_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.align$delegate_1, this, align$factory_0(), _set____db54di);
  };
  protoOf(Tag).get_align_iooo9o_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.align$delegate_1, this, align$factory_1());
  };
  protoOf(Tag).set_templateDataObj_9197dl_k$ = function (_set____db54di) {
    this.templateDataObj_1 = _set____db54di;
  };
  protoOf(Tag).get_templateDataObj_u8d8eu_k$ = function () {
    return this.templateDataObj_1;
  };
  protoOf(Tag).set_template_azxhyd_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.template$delegate_1, this, template$factory(), _set____db54di);
  };
  protoOf(Tag).get_template_hdczer_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.template$delegate_1, this, template$factory_0());
  };
  protoOf(Tag).set_templates_fvcr6p_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.templates$delegate_1, this, templates$factory_0(), _set____db54di);
  };
  protoOf(Tag).get_templates_tqpy0g_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.templates$delegate_1, this, templates$factory_1());
  };
  protoOf(Tag).render_fgfjvu_k$ = function () {
    if (!(this.get_templateDataObj_u8d8eu_k$() == null) && !(this.get_lastLanguage_kfoajb_k$() == null) && !(this.get_lastLanguage_kfoajb_k$() === I18n_getInstance().get_language_cjhhk1_k$())) {
      var tmp0_safe_receiver = this.getRoot_18r9uw_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.html.Tag.render.<anonymous>' call
        var _unary__edvuaz = tmp0_safe_receiver.get_singleRenderers_o7kjmc_k$();
        tmp0_safe_receiver.set_singleRenderers_cnmleg_k$(_unary__edvuaz + 1 | 0);
      }
      this.set_templateData_amf8aa_k$(this.get_templateDataObj_u8d8eu_k$());
      var tmp1_safe_receiver = this.getRoot_18r9uw_k$();
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.html.Tag.render.<anonymous>' call
        var _unary__edvuaz_0 = tmp1_safe_receiver.get_singleRenderers_o7kjmc_k$();
        tmp1_safe_receiver.set_singleRenderers_cnmleg_k$(_unary__edvuaz_0 - 1 | 0);
      }
    }
    var tmp;
    if (!(this.get_content_h02jrk_k$() == null)) {
      var tmp2_safe_receiver = this.get_content_h02jrk_k$();
      var tmp_0;
      if (tmp2_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.html.Tag.render.<anonymous>' call
        tmp_0 = this.translate_s2ekyc_k$(tmp2_safe_receiver);
      }
      var translatedContent = tmp_0;
      var tmp_1;
      if (this.get_rich_woto9x_k$()) {
        var tmp_2 = this.get_type_wovaf7_k$().tagName_1;
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp7 = [KVManager_getInstance().virtualize_d7cntb_k$('<span style="display: contents;">' + translatedContent + '<\/span>')];
        // Inline function 'kotlin.collections.plus' call
        var elements = this.childrenVNodes_2corie_k$();
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$10 = tmp7.concat(elements);
        tmp_1 = this.render_prnnht_k$(tmp_2, tmp$ret$10);
      } else {
        var tmp_3 = this.get_type_wovaf7_k$().tagName_1;
        var tmp10 = this.childrenVNodes_2corie_k$();
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.collections.plus' call
        var elements_0 = [translatedContent];
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$15 = tmp10.concat(elements_0);
        tmp_1 = this.render_prnnht_k$(tmp_3, tmp$ret$15);
      }
      tmp = tmp_1;
    } else {
      tmp = this.render_prnnht_k$(this.get_type_wovaf7_k$().tagName_1, this.childrenVNodes_2corie_k$());
    }
    return tmp;
  };
  protoOf(Tag).focus_of07w8_k$ = function () {
    var tmp2_safe_receiver = this.getElement_acounu_k$();
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp2_safe_receiver;
    }
    var tmp3_safe_receiver = tmp;
    if (equals(tmp3_safe_receiver == null ? null : tmp3_safe_receiver.getAttribute('tabindex'), undefined)) {
      var tmp0_safe_receiver = this.getElement_acounu_k$();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = tmp_0;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.setAttribute('tabindex', '-1');
      }
    }
    protoOf(SimplePanel).focus_of07w8_k$.call(this);
  };
  protoOf(Tag).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    classSetBuilder.add_9rsi26_k$(this.get_align_iooo9o_k$());
  };
  protoOf(Tag).unaryPlus_76unot_k$ = function (_this__u8e3s4) {
    this.add_rekwpt_k$(new TextNode(_this__u8e3s4, this.get_rich_woto9x_k$()));
  };
  function TAG_A_getInstance() {
    TAG_initEntries();
    return TAG_A_instance;
  }
  function TAG_ABBR_getInstance() {
    TAG_initEntries();
    return TAG_ABBR_instance;
  }
  function TAG_ADDRESS_getInstance() {
    TAG_initEntries();
    return TAG_ADDRESS_instance;
  }
  function TAG_AREA_getInstance() {
    TAG_initEntries();
    return TAG_AREA_instance;
  }
  function TAG_ARTICLE_getInstance() {
    TAG_initEntries();
    return TAG_ARTICLE_instance;
  }
  function TAG_ASIDE_getInstance() {
    TAG_initEntries();
    return TAG_ASIDE_instance;
  }
  function TAG_AUDIO_getInstance() {
    TAG_initEntries();
    return TAG_AUDIO_instance;
  }
  function TAG_B_getInstance() {
    TAG_initEntries();
    return TAG_B_instance;
  }
  function TAG_BASE_getInstance() {
    TAG_initEntries();
    return TAG_BASE_instance;
  }
  function TAG_BDI_getInstance() {
    TAG_initEntries();
    return TAG_BDI_instance;
  }
  function TAG_BDO_getInstance() {
    TAG_initEntries();
    return TAG_BDO_instance;
  }
  function TAG_BLOCKQUOTE_getInstance() {
    TAG_initEntries();
    return TAG_BLOCKQUOTE_instance;
  }
  function TAG_BODY_getInstance() {
    TAG_initEntries();
    return TAG_BODY_instance;
  }
  function TAG_BR_getInstance() {
    TAG_initEntries();
    return TAG_BR_instance;
  }
  function TAG_BUTTON_getInstance() {
    TAG_initEntries();
    return TAG_BUTTON_instance;
  }
  function TAG_CANVAS_getInstance() {
    TAG_initEntries();
    return TAG_CANVAS_instance;
  }
  function TAG_CAPTION_getInstance() {
    TAG_initEntries();
    return TAG_CAPTION_instance;
  }
  function TAG_CITE_getInstance() {
    TAG_initEntries();
    return TAG_CITE_instance;
  }
  function TAG_CODE_getInstance() {
    TAG_initEntries();
    return TAG_CODE_instance;
  }
  function TAG_COL_getInstance() {
    TAG_initEntries();
    return TAG_COL_instance;
  }
  function TAG_COLGROUP_getInstance() {
    TAG_initEntries();
    return TAG_COLGROUP_instance;
  }
  function TAG_DATA_getInstance() {
    TAG_initEntries();
    return TAG_DATA_instance;
  }
  function TAG_DATALIST_getInstance() {
    TAG_initEntries();
    return TAG_DATALIST_instance;
  }
  function TAG_DD_getInstance() {
    TAG_initEntries();
    return TAG_DD_instance;
  }
  function TAG_DEL_getInstance() {
    TAG_initEntries();
    return TAG_DEL_instance;
  }
  function TAG_DETAILS_getInstance() {
    TAG_initEntries();
    return TAG_DETAILS_instance;
  }
  function TAG_DFN_getInstance() {
    TAG_initEntries();
    return TAG_DFN_instance;
  }
  function TAG_DIALOG_getInstance() {
    TAG_initEntries();
    return TAG_DIALOG_instance;
  }
  function TAG_DIV_getInstance() {
    TAG_initEntries();
    return TAG_DIV_instance;
  }
  function TAG_DL_getInstance() {
    TAG_initEntries();
    return TAG_DL_instance;
  }
  function TAG_DT_getInstance() {
    TAG_initEntries();
    return TAG_DT_instance;
  }
  function TAG_EM_getInstance() {
    TAG_initEntries();
    return TAG_EM_instance;
  }
  function TAG_EMBED_getInstance() {
    TAG_initEntries();
    return TAG_EMBED_instance;
  }
  function TAG_FIELDSET_getInstance() {
    TAG_initEntries();
    return TAG_FIELDSET_instance;
  }
  function TAG_FIGCAPTION_getInstance() {
    TAG_initEntries();
    return TAG_FIGCAPTION_instance;
  }
  function TAG_FIGURE_getInstance() {
    TAG_initEntries();
    return TAG_FIGURE_instance;
  }
  function TAG_FOOTER_getInstance() {
    TAG_initEntries();
    return TAG_FOOTER_instance;
  }
  function TAG_FORM_getInstance() {
    TAG_initEntries();
    return TAG_FORM_instance;
  }
  function TAG_H1_getInstance() {
    TAG_initEntries();
    return TAG_H1_instance;
  }
  function TAG_H2_getInstance() {
    TAG_initEntries();
    return TAG_H2_instance;
  }
  function TAG_H3_getInstance() {
    TAG_initEntries();
    return TAG_H3_instance;
  }
  function TAG_H4_getInstance() {
    TAG_initEntries();
    return TAG_H4_instance;
  }
  function TAG_H5_getInstance() {
    TAG_initEntries();
    return TAG_H5_instance;
  }
  function TAG_H6_getInstance() {
    TAG_initEntries();
    return TAG_H6_instance;
  }
  function TAG_HEAD_getInstance() {
    TAG_initEntries();
    return TAG_HEAD_instance;
  }
  function TAG_HEADER_getInstance() {
    TAG_initEntries();
    return TAG_HEADER_instance;
  }
  function TAG_HGROUP_getInstance() {
    TAG_initEntries();
    return TAG_HGROUP_instance;
  }
  function TAG_HR_getInstance() {
    TAG_initEntries();
    return TAG_HR_instance;
  }
  function TAG_HTML_getInstance() {
    TAG_initEntries();
    return TAG_HTML_instance;
  }
  function TAG_I_getInstance() {
    TAG_initEntries();
    return TAG_I_instance;
  }
  function TAG_IFRAME_getInstance() {
    TAG_initEntries();
    return TAG_IFRAME_instance;
  }
  function TAG_IMG_getInstance() {
    TAG_initEntries();
    return TAG_IMG_instance;
  }
  function TAG_INPUT_getInstance() {
    TAG_initEntries();
    return TAG_INPUT_instance;
  }
  function TAG_INS_getInstance() {
    TAG_initEntries();
    return TAG_INS_instance;
  }
  function TAG_KBD_getInstance() {
    TAG_initEntries();
    return TAG_KBD_instance;
  }
  function TAG_LABEL_getInstance() {
    TAG_initEntries();
    return TAG_LABEL_instance;
  }
  function TAG_LEGEND_getInstance() {
    TAG_initEntries();
    return TAG_LEGEND_instance;
  }
  function TAG_LI_getInstance() {
    TAG_initEntries();
    return TAG_LI_instance;
  }
  function TAG_LINK_getInstance() {
    TAG_initEntries();
    return TAG_LINK_instance;
  }
  function TAG_MAIN_getInstance() {
    TAG_initEntries();
    return TAG_MAIN_instance;
  }
  function TAG_MAP_getInstance() {
    TAG_initEntries();
    return TAG_MAP_instance;
  }
  function TAG_MARK_getInstance() {
    TAG_initEntries();
    return TAG_MARK_instance;
  }
  function TAG_MATH_getInstance() {
    TAG_initEntries();
    return TAG_MATH_instance;
  }
  function TAG_MENU_getInstance() {
    TAG_initEntries();
    return TAG_MENU_instance;
  }
  function TAG_MENUITEM_getInstance() {
    TAG_initEntries();
    return TAG_MENUITEM_instance;
  }
  function TAG_META_getInstance() {
    TAG_initEntries();
    return TAG_META_instance;
  }
  function TAG_METER_getInstance() {
    TAG_initEntries();
    return TAG_METER_instance;
  }
  function TAG_NAV_getInstance() {
    TAG_initEntries();
    return TAG_NAV_instance;
  }
  function TAG_NOSCRIPT_getInstance() {
    TAG_initEntries();
    return TAG_NOSCRIPT_instance;
  }
  function TAG_OBJECT_getInstance() {
    TAG_initEntries();
    return TAG_OBJECT_instance;
  }
  function TAG_OL_getInstance() {
    TAG_initEntries();
    return TAG_OL_instance;
  }
  function TAG_OPTGROUP_getInstance() {
    TAG_initEntries();
    return TAG_OPTGROUP_instance;
  }
  function TAG_OPTION_getInstance() {
    TAG_initEntries();
    return TAG_OPTION_instance;
  }
  function TAG_OUTPUT_getInstance() {
    TAG_initEntries();
    return TAG_OUTPUT_instance;
  }
  function TAG_P_getInstance() {
    TAG_initEntries();
    return TAG_P_instance;
  }
  function TAG_PARAM_getInstance() {
    TAG_initEntries();
    return TAG_PARAM_instance;
  }
  function TAG_PICTURE_getInstance() {
    TAG_initEntries();
    return TAG_PICTURE_instance;
  }
  function TAG_PRE_getInstance() {
    TAG_initEntries();
    return TAG_PRE_instance;
  }
  function TAG_PROGRESS_getInstance() {
    TAG_initEntries();
    return TAG_PROGRESS_instance;
  }
  function TAG_Q_getInstance() {
    TAG_initEntries();
    return TAG_Q_instance;
  }
  function TAG_RB_getInstance() {
    TAG_initEntries();
    return TAG_RB_instance;
  }
  function TAG_RP_getInstance() {
    TAG_initEntries();
    return TAG_RP_instance;
  }
  function TAG_RT_getInstance() {
    TAG_initEntries();
    return TAG_RT_instance;
  }
  function TAG_RTC_getInstance() {
    TAG_initEntries();
    return TAG_RTC_instance;
  }
  function TAG_RUBY_getInstance() {
    TAG_initEntries();
    return TAG_RUBY_instance;
  }
  function TAG_S_getInstance() {
    TAG_initEntries();
    return TAG_S_instance;
  }
  function TAG_SAMP_getInstance() {
    TAG_initEntries();
    return TAG_SAMP_instance;
  }
  function TAG_SCRIPT_getInstance() {
    TAG_initEntries();
    return TAG_SCRIPT_instance;
  }
  function TAG_SECTION_getInstance() {
    TAG_initEntries();
    return TAG_SECTION_instance;
  }
  function TAG_SELECT_getInstance() {
    TAG_initEntries();
    return TAG_SELECT_instance;
  }
  function TAG_SLOT_getInstance() {
    TAG_initEntries();
    return TAG_SLOT_instance;
  }
  function TAG_SMALL_getInstance() {
    TAG_initEntries();
    return TAG_SMALL_instance;
  }
  function TAG_SOURCE_getInstance() {
    TAG_initEntries();
    return TAG_SOURCE_instance;
  }
  function TAG_SPAN_getInstance() {
    TAG_initEntries();
    return TAG_SPAN_instance;
  }
  function TAG_STRONG_getInstance() {
    TAG_initEntries();
    return TAG_STRONG_instance;
  }
  function TAG_STYLE_getInstance() {
    TAG_initEntries();
    return TAG_STYLE_instance;
  }
  function TAG_SUB_getInstance() {
    TAG_initEntries();
    return TAG_SUB_instance;
  }
  function TAG_SUMMARY_getInstance() {
    TAG_initEntries();
    return TAG_SUMMARY_instance;
  }
  function TAG_SUP_getInstance() {
    TAG_initEntries();
    return TAG_SUP_instance;
  }
  function TAG_SVG_getInstance() {
    TAG_initEntries();
    return TAG_SVG_instance;
  }
  function TAG_TABLE_getInstance() {
    TAG_initEntries();
    return TAG_TABLE_instance;
  }
  function TAG_TBODY_getInstance() {
    TAG_initEntries();
    return TAG_TBODY_instance;
  }
  function TAG_TD_getInstance() {
    TAG_initEntries();
    return TAG_TD_instance;
  }
  function TAG_TEMPLATE_getInstance() {
    TAG_initEntries();
    return TAG_TEMPLATE_instance;
  }
  function TAG_TEXTAREA_getInstance() {
    TAG_initEntries();
    return TAG_TEXTAREA_instance;
  }
  function TAG_TFOOT_getInstance() {
    TAG_initEntries();
    return TAG_TFOOT_instance;
  }
  function TAG_TH_getInstance() {
    TAG_initEntries();
    return TAG_TH_instance;
  }
  function TAG_THEAD_getInstance() {
    TAG_initEntries();
    return TAG_THEAD_instance;
  }
  function TAG_TIME_getInstance() {
    TAG_initEntries();
    return TAG_TIME_instance;
  }
  function TAG_TITLE_getInstance() {
    TAG_initEntries();
    return TAG_TITLE_instance;
  }
  function TAG_TR_getInstance() {
    TAG_initEntries();
    return TAG_TR_instance;
  }
  function TAG_TRACK_getInstance() {
    TAG_initEntries();
    return TAG_TRACK_instance;
  }
  function TAG_U_getInstance() {
    TAG_initEntries();
    return TAG_U_instance;
  }
  function TAG_UL_getInstance() {
    TAG_initEntries();
    return TAG_UL_instance;
  }
  function TAG_VAR_getInstance() {
    TAG_initEntries();
    return TAG_VAR_instance;
  }
  function TAG_VIDEO_getInstance() {
    TAG_initEntries();
    return TAG_VIDEO_instance;
  }
  function TAG_WBR_getInstance() {
    TAG_initEntries();
    return TAG_WBR_instance;
  }
  function Align_LEFT_getInstance() {
    Align_initEntries();
    return Align_LEFT_instance;
  }
  function Align_START_getInstance() {
    Align_initEntries();
    return Align_START_instance;
  }
  function Align_CENTER_getInstance() {
    Align_initEntries();
    return Align_CENTER_instance;
  }
  function Align_RIGHT_getInstance() {
    Align_initEntries();
    return Align_RIGHT_instance;
  }
  function Align_END_getInstance() {
    Align_initEntries();
    return Align_END_instance;
  }
  function Align_WRAP_getInstance() {
    Align_initEntries();
    return Align_WRAP_instance;
  }
  function Align_NOWRAP_getInstance() {
    Align_initEntries();
    return Align_NOWRAP_instance;
  }
  function Align_JUSTIFY_getInstance() {
    Align_initEntries();
    return Align_JUSTIFY_instance;
  }
  function type$factory_11() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_um17n3_k$(value);
    });
  }
  function content$factory() {
    return getPropertyCallableRef('content', 1, KMutableProperty1, function (receiver) {
      return receiver.get_content_h02jrk_k$();
    }, function (receiver, value) {
      return receiver.set_content_i5lrjv_k$(value);
    });
  }
  function rich$factory_2() {
    return getPropertyCallableRef('rich', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rich_woto9x_k$();
    }, function (receiver, value) {
      return receiver.set_rich_1alg2s_k$(value);
    });
  }
  function align$factory() {
    return getPropertyCallableRef('align', 1, KMutableProperty1, function (receiver) {
      return receiver.get_align_iooo9o_k$();
    }, function (receiver, value) {
      return receiver.set_align_odqfc5_k$(value);
    });
  }
  function templates$factory() {
    return getPropertyCallableRef('templates', 1, KMutableProperty1, function (receiver) {
      return receiver.get_templates_tqpy0g_k$();
    }, function (receiver, value) {
      return receiver.set_templates_fvcr6p_k$(value);
    });
  }
  function type$factory_12() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_um17n3_k$(value);
    });
  }
  function type$factory_13() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_um17n3_k$(value);
    });
  }
  function content$factory_0() {
    return getPropertyCallableRef('content', 1, KMutableProperty1, function (receiver) {
      return receiver.get_content_h02jrk_k$();
    }, function (receiver, value) {
      return receiver.set_content_i5lrjv_k$(value);
    });
  }
  function content$factory_1() {
    return getPropertyCallableRef('content', 1, KMutableProperty1, function (receiver) {
      return receiver.get_content_h02jrk_k$();
    }, function (receiver, value) {
      return receiver.set_content_i5lrjv_k$(value);
    });
  }
  function rich$factory_3() {
    return getPropertyCallableRef('rich', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rich_woto9x_k$();
    }, function (receiver, value) {
      return receiver.set_rich_1alg2s_k$(value);
    });
  }
  function rich$factory_4() {
    return getPropertyCallableRef('rich', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rich_woto9x_k$();
    }, function (receiver, value) {
      return receiver.set_rich_1alg2s_k$(value);
    });
  }
  function align$factory_0() {
    return getPropertyCallableRef('align', 1, KMutableProperty1, function (receiver) {
      return receiver.get_align_iooo9o_k$();
    }, function (receiver, value) {
      return receiver.set_align_odqfc5_k$(value);
    });
  }
  function align$factory_1() {
    return getPropertyCallableRef('align', 1, KMutableProperty1, function (receiver) {
      return receiver.get_align_iooo9o_k$();
    }, function (receiver, value) {
      return receiver.set_align_odqfc5_k$(value);
    });
  }
  function template$factory() {
    return getPropertyCallableRef('template', 1, KMutableProperty1, function (receiver) {
      return receiver.get_template_hdczer_k$();
    }, function (receiver, value) {
      return receiver.set_template_azxhyd_k$(value);
    });
  }
  function template$factory_0() {
    return getPropertyCallableRef('template', 1, KMutableProperty1, function (receiver) {
      return receiver.get_template_hdczer_k$();
    }, function (receiver, value) {
      return receiver.set_template_azxhyd_k$(value);
    });
  }
  function templates$factory_0() {
    return getPropertyCallableRef('templates', 1, KMutableProperty1, function (receiver) {
      return receiver.get_templates_tqpy0g_k$();
    }, function (receiver, value) {
      return receiver.set_templates_fvcr6p_k$(value);
    });
  }
  function templates$factory_1() {
    return getPropertyCallableRef('templates', 1, KMutableProperty1, function (receiver) {
      return receiver.get_templates_tqpy0g_k$();
    }, function (receiver, value) {
      return receiver.set_templates_fvcr6p_k$(value);
    });
  }
  function TagMarker() {
  }
  protoOf(TagMarker).equals = function (other) {
    if (!(other instanceof TagMarker))
      return false;
    other instanceof TagMarker || THROW_CCE();
    return true;
  };
  protoOf(TagMarker).hashCode = function () {
    return 0;
  };
  protoOf(TagMarker).toString = function () {
    return '@io.kvision.html.TagMarker(' + ')';
  };
  function Template() {
  }
  function TextNode$content$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function TextNode$rich$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function TextNode(content, rich, init) {
    rich = rich === VOID ? false : rich;
    init = init === VOID ? null : init;
    Widget.call(this);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = TextNode$content$delegate$lambda(this);
    tmp.content$delegate_1 = (new RefreshDelegateProvider_0(this, content, refreshFunction)).provideDelegate_z62loi_k$(this, content$factory_2());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = TextNode$rich$delegate$lambda(this);
    tmp_0.rich$delegate_1 = (new RefreshDelegateProvider_0(this, rich, refreshFunction_0)).provideDelegate_z62loi_k$(this, rich$factory_5());
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(TextNode).set_content_lzqutq_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.content$delegate_1, this, content$factory_3(), _set____db54di);
  };
  protoOf(TextNode).get_content_h02jrk_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.content$delegate_1, this, content$factory_4());
  };
  protoOf(TextNode).set_rich_1alg2s_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.rich$delegate_1, this, rich$factory_6(), _set____db54di);
  };
  protoOf(TextNode).get_rich_woto9x_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.rich$delegate_1, this, rich$factory_7());
  };
  protoOf(TextNode).getElement_acounu_k$ = function () {
    return null;
  };
  protoOf(TextNode).render_fgfjvu_k$ = function () {
    var translatedContent = this.translate_s2ekyc_k$(this.get_content_h02jrk_k$());
    var tmp;
    if (this.get_rich_woto9x_k$()) {
      tmp = KVManager_getInstance().virtualize_d7cntb_k$('<span style="display: contents;">' + translatedContent + '<\/span>');
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = translatedContent;
    }
    return tmp;
  };
  function content$factory_2() {
    return getPropertyCallableRef('content', 1, KMutableProperty1, function (receiver) {
      return receiver.get_content_h02jrk_k$();
    }, function (receiver, value) {
      return receiver.set_content_lzqutq_k$(value);
    });
  }
  function rich$factory_5() {
    return getPropertyCallableRef('rich', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rich_woto9x_k$();
    }, function (receiver, value) {
      return receiver.set_rich_1alg2s_k$(value);
    });
  }
  function content$factory_3() {
    return getPropertyCallableRef('content', 1, KMutableProperty1, function (receiver) {
      return receiver.get_content_h02jrk_k$();
    }, function (receiver, value) {
      return receiver.set_content_lzqutq_k$(value);
    });
  }
  function content$factory_4() {
    return getPropertyCallableRef('content', 1, KMutableProperty1, function (receiver) {
      return receiver.get_content_h02jrk_k$();
    }, function (receiver, value) {
      return receiver.set_content_lzqutq_k$(value);
    });
  }
  function rich$factory_6() {
    return getPropertyCallableRef('rich', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rich_woto9x_k$();
    }, function (receiver, value) {
      return receiver.set_rich_1alg2s_k$(value);
    });
  }
  function rich$factory_7() {
    return getPropertyCallableRef('rich', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rich_woto9x_k$();
    }, function (receiver, value) {
      return receiver.set_rich_1alg2s_k$(value);
    });
  }
  function ul(_this__u8e3s4, elements, rich, className, init) {
    elements = elements === VOID ? null : elements;
    rich = rich === VOID ? false : rich;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var ul = new Ul(elements, rich, className, init);
    _this__u8e3s4.add_rekwpt_k$(ul);
    return ul;
  }
  function Ul(elements, rich, className, init) {
    elements = elements === VOID ? null : elements;
    rich = rich === VOID ? false : rich;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    ListTag.call(this, ListType_UL_getInstance(), elements, rich, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function _get_defaultLanguage__md4goo($this) {
    return $this.defaultLanguage_1;
  }
  function I18n() {
    I18n_instance = this;
    this.manager_1 = new SimpleI18nManager();
    this.defaultLanguage_1 = split_0(window.navigator.language, ['-']).get_c1px32_k$(0);
    this.language_1 = this.defaultLanguage_1;
  }
  protoOf(I18n).set_manager_3oin29_k$ = function (_set____db54di) {
    this.manager_1 = _set____db54di;
  };
  protoOf(I18n).get_manager_f2uh1g_k$ = function () {
    return this.manager_1;
  };
  protoOf(I18n).set_language_m1uex7_k$ = function (value) {
    this.language_1 = value;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = Companion_getInstance_8().get_roots_iy382w_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.i18n.I18n.<set-language>.<anonymous>' call
      element.restart_nz0dof_k$();
    }
  };
  protoOf(I18n).get_language_cjhhk1_k$ = function () {
    return this.language_1;
  };
  protoOf(I18n).gettext_fnjyej_k$ = function (key, args) {
    return this.manager_1.gettext_fnjyej_k$(key, args.slice());
  };
  protoOf(I18n).ngettext_92uof3_k$ = function (singularKey, pluralKey, value, args) {
    return this.manager_1.ngettext_92uof3_k$(singularKey, pluralKey, value, args.slice());
  };
  protoOf(I18n).detectDecimalSeparator_qhe63d_k$ = function () {
    var tmp;
    try {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1 = (1.1).toLocaleString(this.language_1);
      tmp = last_0(dropLast(tmp$ret$1, 1));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = _Char___init__impl__6a9atx(46);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(I18n).detectThousandsSeparator_xu4jli_k$ = function () {
    var tmp;
    try {
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      var thousand = (1000).toLocaleString(this.language_1);
      var tmp_0;
      if (thousand.length === 5) {
        tmp_0 = charSequenceGet(thousand, 1);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  var I18n_instance;
  function I18n_getInstance() {
    if (I18n_instance == null)
      new I18n();
    return I18n_instance;
  }
  function I18nManager() {
  }
  function SimpleI18nManager() {
  }
  protoOf(SimpleI18nManager).gettext_fnjyej_k$ = function (key, args) {
    return key;
  };
  protoOf(SimpleI18nManager).ngettext_92uof3_k$ = function (singularKey, pluralKey, value, args) {
    return singularKey;
  };
  function FieldsetPanel(legend, className, init) {
    legend = legend === VOID ? null : legend;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var tmp;
    if (className == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.panel.FieldsetPanel.<init>.<anonymous>' call
      tmp = className + ' ';
    }
    var tmp1_elvis_lhs = tmp;
    SimplePanel.call(this, (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + 'kv_fieldset');
    this.legendComponent_1 = new Tag(TAG_LEGEND_getInstance(), legend);
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(FieldsetPanel).set_legend_3qms6r_k$ = function (value) {
    this.legendComponent_1.set_content_i5lrjv_k$(value);
  };
  protoOf(FieldsetPanel).get_legend_g3yfbq_k$ = function () {
    return this.legendComponent_1.get_content_h02jrk_k$();
  };
  protoOf(FieldsetPanel).get_legendComponent_8m2s1z_k$ = function () {
    return this.legendComponent_1;
  };
  protoOf(FieldsetPanel).render_fgfjvu_k$ = function () {
    var childrenVNodes = this.childrenVNodes_2corie_k$();
    // Inline function 'kotlin.js.asDynamic' call
    childrenVNodes.unshift(this.legendComponent_1.renderVNode_r2mn32_k$());
    return this.render_prnnht_k$('fieldset', childrenVNodes);
  };
  function _get_useWrappers__qfktpy($this) {
    return $this.useWrappers_1;
  }
  function refreshSpacing($this) {
    $this.singleRender_ca7nu0_k$(FlexPanel$refreshSpacing$lambda($this));
  }
  function applySpacing($this, wrapper) {
    if ($this.useWrappers_1) {
      wrapper.set_marginTop_uelzj8_k$(null);
      wrapper.set_marginRight_b0p4mj_k$(null);
      wrapper.set_marginBottom_q6omk0_k$(null);
      wrapper.set_marginLeft_hqxzqs_k$(null);
    }
    var tmp0_safe_receiver = $this.get_spacing_w0flpi_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.panel.FlexPanel.applySpacing.<anonymous>' call
      var tmp0_subject = $this.get_flexDirection_hcc6ub_k$();
      switch (tmp0_subject == null ? -1 : tmp0_subject.get_ordinal_ip24qg_k$()) {
        case 2:
          wrapper.set_marginBottom_q6omk0_k$(get_px(tmp0_safe_receiver));
          break;
        case 1:
          if (equals($this.get_justifyContent_6wctgu_k$(), JustifyContent_FLEXEND_getInstance())) {
            wrapper.set_marginRight_b0p4mj_k$(get_px(tmp0_safe_receiver));
          } else {
            wrapper.set_marginLeft_hqxzqs_k$(get_px(tmp0_safe_receiver));
          }

          break;
        case 3:
          wrapper.set_marginTop_uelzj8_k$(get_px(tmp0_safe_receiver));
          break;
        default:
          if (equals($this.get_justifyContent_6wctgu_k$(), JustifyContent_FLEXEND_getInstance())) {
            wrapper.set_marginLeft_hqxzqs_k$(get_px(tmp0_safe_receiver));
          } else {
            wrapper.set_marginRight_b0p4mj_k$(get_px(tmp0_safe_receiver));
          }

          break;
      }
    }
  }
  function FlexPanel$spacing$delegate$lambda(this$0) {
    return function (it) {
      refreshSpacing(this$0);
      this$0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function FlexPanel$options$1(this$0, $order, $grow, $shrink, $basis, $alignSelf, $className) {
    this.this$0__1 = this$0;
    this.$order_1 = $order;
    this.$grow_1 = $grow;
    this.$shrink_1 = $shrink;
    this.$basis_1 = $basis;
    this.$alignSelf_1 = $alignSelf;
    this.$className_1 = $className;
    this.$$delegate_0__1 = this$0;
  }
  protoOf(FlexPanel$options$1).add_rekwpt_k$ = function (child) {
    this.this$0__1.add_r1xfwi_k$(child, this.$order_1, this.$grow_1, this.$shrink_1, this.$basis_1, this.$alignSelf_1, this.$className_1);
  };
  protoOf(FlexPanel$options$1).add_t9z7x3_k$ = function (position, child) {
    this.$$delegate_0__1.add_t9z7x3_k$(position, child);
  };
  protoOf(FlexPanel$options$1).addAll_a94ixq_k$ = function (children) {
    this.$$delegate_0__1.addAll_a94ixq_k$(children);
  };
  protoOf(FlexPanel$options$1).invoke_hkydh0_k$ = function (children) {
    this.$$delegate_0__1.invoke_hkydh0_k$(children);
  };
  protoOf(FlexPanel$options$1).remove_j7k0x0_k$ = function (child) {
    this.$$delegate_0__1.remove_j7k0x0_k$(child);
  };
  protoOf(FlexPanel$options$1).removeAt_rql1ap_k$ = function (position) {
    this.$$delegate_0__1.removeAt_rql1ap_k$(position);
  };
  protoOf(FlexPanel$options$1).removeAll_c84dd9_k$ = function () {
    this.$$delegate_0__1.removeAll_c84dd9_k$();
  };
  protoOf(FlexPanel$options$1).disposeAll_hpz7bi_k$ = function () {
    this.$$delegate_0__1.disposeAll_hpz7bi_k$();
  };
  protoOf(FlexPanel$options$1).getChildren_97y0zv_k$ = function () {
    return this.$$delegate_0__1.getChildren_97y0zv_k$();
  };
  protoOf(FlexPanel$options$1).unaryPlus_76unot_k$ = function (_this__u8e3s4) {
    this.$$delegate_0__1.unaryPlus_76unot_k$(_this__u8e3s4);
  };
  protoOf(FlexPanel$options$1).set_parent_58bm75_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_parent_58bm75_k$(_set____db54di);
  };
  protoOf(FlexPanel$options$1).get_parent_hy4reb_k$ = function () {
    return this.$$delegate_0__1.get_parent_hy4reb_k$();
  };
  protoOf(FlexPanel$options$1).set_visible_w9mvj4_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_visible_w9mvj4_k$(_set____db54di);
  };
  protoOf(FlexPanel$options$1).get_visible_8zfvk9_k$ = function () {
    return this.$$delegate_0__1.get_visible_8zfvk9_k$();
  };
  protoOf(FlexPanel$options$1).addCssClass_ul13bg_k$ = function (css) {
    this.$$delegate_0__1.addCssClass_ul13bg_k$(css);
  };
  protoOf(FlexPanel$options$1).addCssStyle_4edidd_k$ = function (css) {
    this.$$delegate_0__1.addCssStyle_4edidd_k$(css);
  };
  protoOf(FlexPanel$options$1).removeCssClass_3dntip_k$ = function (css) {
    this.$$delegate_0__1.removeCssClass_3dntip_k$(css);
  };
  protoOf(FlexPanel$options$1).hasCssClass_hvhhyj_k$ = function (css) {
    return this.$$delegate_0__1.hasCssClass_hvhhyj_k$(css);
  };
  protoOf(FlexPanel$options$1).removeCssStyle_l44kc_k$ = function (css) {
    this.$$delegate_0__1.removeCssStyle_l44kc_k$(css);
  };
  protoOf(FlexPanel$options$1).addSurroundingCssClass_h2gyzy_k$ = function (css) {
    this.$$delegate_0__1.addSurroundingCssClass_h2gyzy_k$(css);
  };
  protoOf(FlexPanel$options$1).addSurroundingCssStyle_pgxj1f_k$ = function (css) {
    this.$$delegate_0__1.addSurroundingCssStyle_pgxj1f_k$(css);
  };
  protoOf(FlexPanel$options$1).removeSurroundingCssClass_at56kr_k$ = function (css) {
    this.$$delegate_0__1.removeSurroundingCssClass_at56kr_k$(css);
  };
  protoOf(FlexPanel$options$1).removeSurroundingCssStyle_asoqhs_k$ = function (css) {
    this.$$delegate_0__1.removeSurroundingCssStyle_asoqhs_k$(css);
  };
  protoOf(FlexPanel$options$1).getAttribute_z2kbho_k$ = function (name) {
    return this.$$delegate_0__1.getAttribute_z2kbho_k$(name);
  };
  protoOf(FlexPanel$options$1).setAttribute_gbqua2_k$ = function (name, value) {
    this.$$delegate_0__1.setAttribute_gbqua2_k$(name, value);
  };
  protoOf(FlexPanel$options$1).removeAttribute_3xc826_k$ = function (name) {
    this.$$delegate_0__1.removeAttribute_3xc826_k$(name);
  };
  protoOf(FlexPanel$options$1).renderVNode_r2mn32_k$ = function () {
    return this.$$delegate_0__1.renderVNode_r2mn32_k$();
  };
  protoOf(FlexPanel$options$1).getElement_acounu_k$ = function () {
    return this.$$delegate_0__1.getElement_acounu_k$();
  };
  protoOf(FlexPanel$options$1).getElementD_y85vem_k$ = function () {
    return this.$$delegate_0__1.getElementD_y85vem_k$();
  };
  protoOf(FlexPanel$options$1).clearParent_npr7gn_k$ = function () {
    this.$$delegate_0__1.clearParent_npr7gn_k$();
  };
  protoOf(FlexPanel$options$1).getRoot_18r9uw_k$ = function () {
    return this.$$delegate_0__1.getRoot_18r9uw_k$();
  };
  protoOf(FlexPanel$options$1).dispose_3nnxhr_k$ = function () {
    this.$$delegate_0__1.dispose_3nnxhr_k$();
  };
  protoOf(FlexPanel$options$1).focus_of07w8_k$ = function () {
    this.$$delegate_0__1.focus_of07w8_k$();
  };
  protoOf(FlexPanel$options$1).blur_exr7u1_k$ = function () {
    this.$$delegate_0__1.blur_exr7u1_k$();
  };
  protoOf(FlexPanel$options$1).addAfterCreateHook_jnuj9o_k$ = function (hook) {
    return this.$$delegate_0__1.addAfterCreateHook_jnuj9o_k$(hook);
  };
  protoOf(FlexPanel$options$1).removeAfterCreateHook_911psh_k$ = function (hook) {
    return this.$$delegate_0__1.removeAfterCreateHook_911psh_k$(hook);
  };
  protoOf(FlexPanel$options$1).clearAfterCreateHooks_xde985_k$ = function () {
    this.$$delegate_0__1.clearAfterCreateHooks_xde985_k$();
  };
  protoOf(FlexPanel$options$1).addAfterInsertHook_s83sk1_k$ = function (hook) {
    return this.$$delegate_0__1.addAfterInsertHook_s83sk1_k$(hook);
  };
  protoOf(FlexPanel$options$1).removeAfterInsertHook_e440cy_k$ = function (hook) {
    return this.$$delegate_0__1.removeAfterInsertHook_e440cy_k$(hook);
  };
  protoOf(FlexPanel$options$1).clearAfterInsertHooks_i07bfc_k$ = function () {
    this.$$delegate_0__1.clearAfterInsertHooks_i07bfc_k$();
  };
  protoOf(FlexPanel$options$1).addAfterDestroyHook_7cqxpi_k$ = function (hook) {
    return this.$$delegate_0__1.addAfterDestroyHook_7cqxpi_k$(hook);
  };
  protoOf(FlexPanel$options$1).removeAfterDestroyHook_8vfkv1_k$ = function (hook) {
    return this.$$delegate_0__1.removeAfterDestroyHook_8vfkv1_k$(hook);
  };
  protoOf(FlexPanel$options$1).clearAfterDestroyHooks_h7xzgr_k$ = function () {
    this.$$delegate_0__1.clearAfterDestroyHooks_h7xzgr_k$();
  };
  protoOf(FlexPanel$options$1).addBeforeDisposeHook_g5p0gq_k$ = function (hook) {
    return this.$$delegate_0__1.addBeforeDisposeHook_g5p0gq_k$(hook);
  };
  protoOf(FlexPanel$options$1).removeBeforeDisposeHook_lzimbb_k$ = function (hook) {
    return this.$$delegate_0__1.removeBeforeDisposeHook_lzimbb_k$(hook);
  };
  protoOf(FlexPanel$options$1).clearBeforeDisposeHooks_mx3cfn_k$ = function () {
    this.$$delegate_0__1.clearBeforeDisposeHooks_mx3cfn_k$();
  };
  protoOf(FlexPanel$options$1).singleRender_ca7nu0_k$ = function (block) {
    return this.$$delegate_0__1.singleRender_ca7nu0_k$(block);
  };
  protoOf(FlexPanel$options$1).singleRenderAsync_haca86_k$ = function (block) {
    this.$$delegate_0__1.singleRenderAsync_haca86_k$(block);
  };
  function FlexPanel$refreshSpacing$lambda(this$0) {
    return function () {
      var _iterator__ex2g4s = this$0.getChildren_97y0zv_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.FlexPanel.refreshSpacing.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        applySpacing(this$0, element);
      }
      return Unit_getInstance();
    };
  }
  function FlexPanel$addAll$lambda($children, this$0) {
    return function () {
      var _iterator__ex2g4s = $children.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.FlexPanel.addAll.<anonymous>.<anonymous>' call
        this$0.add$default_tx8n1w_k$(element, null);
      }
      return Unit_getInstance();
    };
  }
  function FlexPanel(direction, wrap, justify, alignItems, alignContent, spacing, useWrappers, className, init) {
    direction = direction === VOID ? null : direction;
    wrap = wrap === VOID ? null : wrap;
    justify = justify === VOID ? null : justify;
    alignItems = alignItems === VOID ? null : alignItems;
    alignContent = alignContent === VOID ? null : alignContent;
    spacing = spacing === VOID ? null : spacing;
    useWrappers = useWrappers === VOID ? false : useWrappers;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    this.useWrappers_1 = useWrappers;
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = FlexPanel$spacing$delegate$lambda(this);
    tmp.spacing$delegate_1 = (new RefreshDelegateProvider_0(this, spacing, refreshFunction)).provideDelegate_z62loi_k$(this, spacing$factory());
    this.set_display_2qo1ly_k$(Display_FLEX_getInstance());
    this.set_flexDirection_k0r79y_k$(direction);
    this.set_flexWrap_te3tvl_k$(wrap);
    this.set_justifyContent_920yxn_k$(justify);
    this.set_alignItems_2x4ueh_k$(alignItems);
    this.set_alignContent_faycwg_k$(alignContent);
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(FlexPanel).set_spacing_60vowb_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.spacing$delegate_1, this, spacing$factory_0(), _set____db54di);
  };
  protoOf(FlexPanel).get_spacing_w0flpi_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.spacing$delegate_1, this, spacing$factory_1());
  };
  protoOf(FlexPanel).add_r1xfwi_k$ = function (child, order, grow, shrink, basis, alignSelf, className) {
    var tmp;
    if (!this.useWrappers_1) {
      tmp = child;
    } else {
      tmp = new WidgetWrapper(child, className);
    }
    var wrapper = tmp;
    if (!(this.get_spacing_w0flpi_k$() == null)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      applySpacing(this, wrapper);
    }
    var tmp0_safe_receiver = wrapper instanceof Widget ? wrapper : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.panel.FlexPanel.add.<anonymous>' call
      tmp0_safe_receiver.set_order_ox9g8a_k$(order);
      tmp0_safe_receiver.set_flexGrow_svs8mq_k$(grow);
      tmp0_safe_receiver.set_flexShrink_aiq37o_k$(shrink);
      tmp0_safe_receiver.set_flexBasis_l67ry_k$(basis);
      tmp0_safe_receiver.set_alignSelf_g8okn9_k$(alignSelf);
    }
    this.addInternal_sa14da_k$(wrapper);
  };
  protoOf(FlexPanel).add$default_tx8n1w_k$ = function (child, order, grow, shrink, basis, alignSelf, className, $super) {
    order = order === VOID ? null : order;
    grow = grow === VOID ? null : grow;
    shrink = shrink === VOID ? null : shrink;
    basis = basis === VOID ? null : basis;
    alignSelf = alignSelf === VOID ? null : alignSelf;
    className = className === VOID ? null : className;
    var tmp;
    if ($super === VOID) {
      this.add_r1xfwi_k$(child, order, grow, shrink, basis, alignSelf, className);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_r1xfwi_k$.call(this, child, order, grow, shrink, basis, alignSelf, className);
    }
    return tmp;
  };
  protoOf(FlexPanel).add_jzys98_k$ = function (position, child, order, grow, shrink, basis, alignSelf, className) {
    var tmp;
    if (!this.useWrappers_1) {
      tmp = child;
    } else {
      tmp = new WidgetWrapper(child, className);
    }
    var wrapper = tmp;
    if (!(this.get_spacing_w0flpi_k$() == null)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      applySpacing(this, wrapper);
    }
    var tmp0_safe_receiver = wrapper instanceof Widget ? wrapper : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.panel.FlexPanel.add.<anonymous>' call
      tmp0_safe_receiver.set_order_ox9g8a_k$(order);
      tmp0_safe_receiver.set_flexGrow_svs8mq_k$(grow);
      tmp0_safe_receiver.set_flexShrink_aiq37o_k$(shrink);
      tmp0_safe_receiver.set_flexBasis_l67ry_k$(basis);
      tmp0_safe_receiver.set_alignSelf_g8okn9_k$(alignSelf);
    }
    this.addInternal_9c012y_k$(position, wrapper);
  };
  protoOf(FlexPanel).add$default_rofq08_k$ = function (position, child, order, grow, shrink, basis, alignSelf, className, $super) {
    order = order === VOID ? null : order;
    grow = grow === VOID ? null : grow;
    shrink = shrink === VOID ? null : shrink;
    basis = basis === VOID ? null : basis;
    alignSelf = alignSelf === VOID ? null : alignSelf;
    className = className === VOID ? null : className;
    var tmp;
    if ($super === VOID) {
      this.add_jzys98_k$(position, child, order, grow, shrink, basis, alignSelf, className);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_jzys98_k$.call(this, position, child, order, grow, shrink, basis, alignSelf, className);
    }
    return tmp;
  };
  protoOf(FlexPanel).options_zho56q_k$ = function (order, grow, shrink, basis, alignSelf, className, builder) {
    builder(new FlexPanel$options$1(this, order, grow, shrink, basis, alignSelf, className));
  };
  protoOf(FlexPanel).options$default_tcomgc_k$ = function (order, grow, shrink, basis, alignSelf, className, builder, $super) {
    order = order === VOID ? null : order;
    grow = grow === VOID ? null : grow;
    shrink = shrink === VOID ? null : shrink;
    basis = basis === VOID ? null : basis;
    alignSelf = alignSelf === VOID ? null : alignSelf;
    className = className === VOID ? null : className;
    var tmp;
    if ($super === VOID) {
      this.options_zho56q_k$(order, grow, shrink, basis, alignSelf, className, builder);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.options_zho56q_k$.call(this, order, grow, shrink, basis, alignSelf, className, builder);
    }
    return tmp;
  };
  protoOf(FlexPanel).add_rekwpt_k$ = function (child) {
    this.add$default_tx8n1w_k$(child, null);
  };
  protoOf(FlexPanel).add_t9z7x3_k$ = function (position, child) {
    this.add$default_rofq08_k$(position, child, null);
  };
  protoOf(FlexPanel).addAll_a94ixq_k$ = function (children) {
    this.singleRender_ca7nu0_k$(FlexPanel$addAll$lambda(children, this));
  };
  protoOf(FlexPanel).remove_j7k0x0_k$ = function (child) {
    if (!(this.get_children_4cwbp4_k$() == null)) {
      if (ensureNotNull(this.get_children_4cwbp4_k$()).contains_aljjnj_k$(child)) {
        protoOf(SimplePanel).remove_j7k0x0_k$.call(this, child);
      } else {
        // Inline function 'kotlin.collections.find' call
        var tmp0 = ensureNotNull(this.get_children_4cwbp4_k$());
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var element = _iterator__ex2g4s.next_20eer_k$();
            // Inline function 'io.kvision.panel.FlexPanel.remove.<anonymous>' call
            var tmp0_safe_receiver = element instanceof WidgetWrapper ? element : null;
            if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_wrapped_64pp2p_k$(), child)) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        var tmp0_safe_receiver_0 = tmp$ret$1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'io.kvision.panel.FlexPanel.remove.<anonymous>' call
          protoOf(SimplePanel).remove_j7k0x0_k$.call(this, tmp0_safe_receiver_0);
          tmp0_safe_receiver_0.dispose_3nnxhr_k$();
        }
      }
    }
  };
  protoOf(FlexPanel).removeAll_c84dd9_k$ = function () {
    var tmp0_safe_receiver = this.get_children_4cwbp4_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.FlexPanel.removeAll.<anonymous>' call
        item.clearParent_npr7gn_k$();
        var tmp0_safe_receiver_0 = item instanceof WidgetWrapper ? item : null;
        var tmp;
        if (tmp0_safe_receiver_0 == null) {
          tmp = null;
        } else {
          tmp0_safe_receiver_0.dispose_3nnxhr_k$();
          tmp = Unit_getInstance();
        }
        var tmp$ret$0 = tmp;
        destination.add_utx5q5_k$(tmp$ret$0);
      }
    }
    var tmp1_safe_receiver = this.get_children_4cwbp4_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.clear_j9egeb_k$();
    }
    this.set_children_3shjjk_k$(null);
    this.refresh_6a3uvf_k$();
  };
  protoOf(FlexPanel).disposeAll_hpz7bi_k$ = function () {
    var tmp0_safe_receiver = this.get_children_4cwbp4_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.FlexPanel.disposeAll.<anonymous>' call
        var tmp0_safe_receiver_0 = item instanceof WidgetWrapper ? item : null;
        var tmp;
        if (tmp0_safe_receiver_0 == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'io.kvision.panel.FlexPanel.disposeAll.<anonymous>.<anonymous>' call
          var tmp0_safe_receiver_1 = tmp0_safe_receiver_0.get_wrapped_64pp2p_k$();
          var tmp_0;
          if (tmp0_safe_receiver_1 == null) {
            tmp_0 = null;
          } else {
            tmp0_safe_receiver_1.dispose_3nnxhr_k$();
            tmp_0 = Unit_getInstance();
          }
          tmp = tmp_0;
        }
        var tmp$ret$2 = tmp;
        destination.add_utx5q5_k$(tmp$ret$2);
      }
    }
    this.removeAll_c84dd9_k$();
  };
  protoOf(FlexPanel).dispose_3nnxhr_k$ = function () {
    var tmp0_safe_receiver = this.get_children_4cwbp4_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.FlexPanel.dispose.<anonymous>' call
        var tmp0_safe_receiver_0 = item instanceof WidgetWrapper ? item : null;
        var tmp;
        if (tmp0_safe_receiver_0 == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'io.kvision.panel.FlexPanel.dispose.<anonymous>.<anonymous>' call
          var tmp0_safe_receiver_1 = tmp0_safe_receiver_0.get_wrapped_64pp2p_k$();
          var tmp_0;
          if (tmp0_safe_receiver_1 == null) {
            tmp_0 = null;
          } else {
            tmp0_safe_receiver_1.dispose_3nnxhr_k$();
            tmp_0 = Unit_getInstance();
          }
          tmp = tmp_0;
        }
        var tmp$ret$2 = tmp;
        destination.add_utx5q5_k$(tmp$ret$2);
      }
    }
    protoOf(SimplePanel).dispose_3nnxhr_k$.call(this);
  };
  function spacing$factory() {
    return getPropertyCallableRef('spacing', 1, KMutableProperty1, function (receiver) {
      return receiver.get_spacing_w0flpi_k$();
    }, function (receiver, value) {
      return receiver.set_spacing_60vowb_k$(value);
    });
  }
  function spacing$factory_0() {
    return getPropertyCallableRef('spacing', 1, KMutableProperty1, function (receiver) {
      return receiver.get_spacing_w0flpi_k$();
    }, function (receiver, value) {
      return receiver.set_spacing_60vowb_k$(value);
    });
  }
  function spacing$factory_1() {
    return getPropertyCallableRef('spacing', 1, KMutableProperty1, function (receiver) {
      return receiver.get_spacing_w0flpi_k$();
    }, function (receiver, value) {
      return receiver.set_spacing_60vowb_k$(value);
    });
  }
  function _get_useWrappers__qfktpy_0($this) {
    return $this.useWrappers_1;
  }
  function GridPanel$options$1(this$0, $columnStart, $rowStart, $columnEnd, $rowEnd, $area, $justifySelf, $alignSelf, $className) {
    this.this$0__1 = this$0;
    this.$columnStart_1 = $columnStart;
    this.$rowStart_1 = $rowStart;
    this.$columnEnd_1 = $columnEnd;
    this.$rowEnd_1 = $rowEnd;
    this.$area_1 = $area;
    this.$justifySelf_1 = $justifySelf;
    this.$alignSelf_1 = $alignSelf;
    this.$className_1 = $className;
    this.$$delegate_0__1 = this$0;
  }
  protoOf(GridPanel$options$1).add_rekwpt_k$ = function (child) {
    this.this$0__1.add_ha8v7p_k$(child, this.$columnStart_1, this.$rowStart_1, this.$columnEnd_1, this.$rowEnd_1, this.$area_1, this.$justifySelf_1, this.$alignSelf_1, this.$className_1);
  };
  protoOf(GridPanel$options$1).add_t9z7x3_k$ = function (position, child) {
    this.$$delegate_0__1.add_t9z7x3_k$(position, child);
  };
  protoOf(GridPanel$options$1).addAll_a94ixq_k$ = function (children) {
    this.$$delegate_0__1.addAll_a94ixq_k$(children);
  };
  protoOf(GridPanel$options$1).invoke_hkydh0_k$ = function (children) {
    this.$$delegate_0__1.invoke_hkydh0_k$(children);
  };
  protoOf(GridPanel$options$1).remove_j7k0x0_k$ = function (child) {
    this.$$delegate_0__1.remove_j7k0x0_k$(child);
  };
  protoOf(GridPanel$options$1).removeAt_rql1ap_k$ = function (position) {
    this.$$delegate_0__1.removeAt_rql1ap_k$(position);
  };
  protoOf(GridPanel$options$1).removeAll_c84dd9_k$ = function () {
    this.$$delegate_0__1.removeAll_c84dd9_k$();
  };
  protoOf(GridPanel$options$1).disposeAll_hpz7bi_k$ = function () {
    this.$$delegate_0__1.disposeAll_hpz7bi_k$();
  };
  protoOf(GridPanel$options$1).getChildren_97y0zv_k$ = function () {
    return this.$$delegate_0__1.getChildren_97y0zv_k$();
  };
  protoOf(GridPanel$options$1).unaryPlus_76unot_k$ = function (_this__u8e3s4) {
    this.$$delegate_0__1.unaryPlus_76unot_k$(_this__u8e3s4);
  };
  protoOf(GridPanel$options$1).set_parent_58bm75_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_parent_58bm75_k$(_set____db54di);
  };
  protoOf(GridPanel$options$1).get_parent_hy4reb_k$ = function () {
    return this.$$delegate_0__1.get_parent_hy4reb_k$();
  };
  protoOf(GridPanel$options$1).set_visible_w9mvj4_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_visible_w9mvj4_k$(_set____db54di);
  };
  protoOf(GridPanel$options$1).get_visible_8zfvk9_k$ = function () {
    return this.$$delegate_0__1.get_visible_8zfvk9_k$();
  };
  protoOf(GridPanel$options$1).addCssClass_ul13bg_k$ = function (css) {
    this.$$delegate_0__1.addCssClass_ul13bg_k$(css);
  };
  protoOf(GridPanel$options$1).addCssStyle_4edidd_k$ = function (css) {
    this.$$delegate_0__1.addCssStyle_4edidd_k$(css);
  };
  protoOf(GridPanel$options$1).removeCssClass_3dntip_k$ = function (css) {
    this.$$delegate_0__1.removeCssClass_3dntip_k$(css);
  };
  protoOf(GridPanel$options$1).hasCssClass_hvhhyj_k$ = function (css) {
    return this.$$delegate_0__1.hasCssClass_hvhhyj_k$(css);
  };
  protoOf(GridPanel$options$1).removeCssStyle_l44kc_k$ = function (css) {
    this.$$delegate_0__1.removeCssStyle_l44kc_k$(css);
  };
  protoOf(GridPanel$options$1).addSurroundingCssClass_h2gyzy_k$ = function (css) {
    this.$$delegate_0__1.addSurroundingCssClass_h2gyzy_k$(css);
  };
  protoOf(GridPanel$options$1).addSurroundingCssStyle_pgxj1f_k$ = function (css) {
    this.$$delegate_0__1.addSurroundingCssStyle_pgxj1f_k$(css);
  };
  protoOf(GridPanel$options$1).removeSurroundingCssClass_at56kr_k$ = function (css) {
    this.$$delegate_0__1.removeSurroundingCssClass_at56kr_k$(css);
  };
  protoOf(GridPanel$options$1).removeSurroundingCssStyle_asoqhs_k$ = function (css) {
    this.$$delegate_0__1.removeSurroundingCssStyle_asoqhs_k$(css);
  };
  protoOf(GridPanel$options$1).getAttribute_z2kbho_k$ = function (name) {
    return this.$$delegate_0__1.getAttribute_z2kbho_k$(name);
  };
  protoOf(GridPanel$options$1).setAttribute_gbqua2_k$ = function (name, value) {
    this.$$delegate_0__1.setAttribute_gbqua2_k$(name, value);
  };
  protoOf(GridPanel$options$1).removeAttribute_3xc826_k$ = function (name) {
    this.$$delegate_0__1.removeAttribute_3xc826_k$(name);
  };
  protoOf(GridPanel$options$1).renderVNode_r2mn32_k$ = function () {
    return this.$$delegate_0__1.renderVNode_r2mn32_k$();
  };
  protoOf(GridPanel$options$1).getElement_acounu_k$ = function () {
    return this.$$delegate_0__1.getElement_acounu_k$();
  };
  protoOf(GridPanel$options$1).getElementD_y85vem_k$ = function () {
    return this.$$delegate_0__1.getElementD_y85vem_k$();
  };
  protoOf(GridPanel$options$1).clearParent_npr7gn_k$ = function () {
    this.$$delegate_0__1.clearParent_npr7gn_k$();
  };
  protoOf(GridPanel$options$1).getRoot_18r9uw_k$ = function () {
    return this.$$delegate_0__1.getRoot_18r9uw_k$();
  };
  protoOf(GridPanel$options$1).dispose_3nnxhr_k$ = function () {
    this.$$delegate_0__1.dispose_3nnxhr_k$();
  };
  protoOf(GridPanel$options$1).focus_of07w8_k$ = function () {
    this.$$delegate_0__1.focus_of07w8_k$();
  };
  protoOf(GridPanel$options$1).blur_exr7u1_k$ = function () {
    this.$$delegate_0__1.blur_exr7u1_k$();
  };
  protoOf(GridPanel$options$1).addAfterCreateHook_jnuj9o_k$ = function (hook) {
    return this.$$delegate_0__1.addAfterCreateHook_jnuj9o_k$(hook);
  };
  protoOf(GridPanel$options$1).removeAfterCreateHook_911psh_k$ = function (hook) {
    return this.$$delegate_0__1.removeAfterCreateHook_911psh_k$(hook);
  };
  protoOf(GridPanel$options$1).clearAfterCreateHooks_xde985_k$ = function () {
    this.$$delegate_0__1.clearAfterCreateHooks_xde985_k$();
  };
  protoOf(GridPanel$options$1).addAfterInsertHook_s83sk1_k$ = function (hook) {
    return this.$$delegate_0__1.addAfterInsertHook_s83sk1_k$(hook);
  };
  protoOf(GridPanel$options$1).removeAfterInsertHook_e440cy_k$ = function (hook) {
    return this.$$delegate_0__1.removeAfterInsertHook_e440cy_k$(hook);
  };
  protoOf(GridPanel$options$1).clearAfterInsertHooks_i07bfc_k$ = function () {
    this.$$delegate_0__1.clearAfterInsertHooks_i07bfc_k$();
  };
  protoOf(GridPanel$options$1).addAfterDestroyHook_7cqxpi_k$ = function (hook) {
    return this.$$delegate_0__1.addAfterDestroyHook_7cqxpi_k$(hook);
  };
  protoOf(GridPanel$options$1).removeAfterDestroyHook_8vfkv1_k$ = function (hook) {
    return this.$$delegate_0__1.removeAfterDestroyHook_8vfkv1_k$(hook);
  };
  protoOf(GridPanel$options$1).clearAfterDestroyHooks_h7xzgr_k$ = function () {
    this.$$delegate_0__1.clearAfterDestroyHooks_h7xzgr_k$();
  };
  protoOf(GridPanel$options$1).addBeforeDisposeHook_g5p0gq_k$ = function (hook) {
    return this.$$delegate_0__1.addBeforeDisposeHook_g5p0gq_k$(hook);
  };
  protoOf(GridPanel$options$1).removeBeforeDisposeHook_lzimbb_k$ = function (hook) {
    return this.$$delegate_0__1.removeBeforeDisposeHook_lzimbb_k$(hook);
  };
  protoOf(GridPanel$options$1).clearBeforeDisposeHooks_mx3cfn_k$ = function () {
    this.$$delegate_0__1.clearBeforeDisposeHooks_mx3cfn_k$();
  };
  protoOf(GridPanel$options$1).singleRender_ca7nu0_k$ = function (block) {
    return this.$$delegate_0__1.singleRender_ca7nu0_k$(block);
  };
  protoOf(GridPanel$options$1).singleRenderAsync_haca86_k$ = function (block) {
    this.$$delegate_0__1.singleRenderAsync_haca86_k$(block);
  };
  function GridPanel$addAll$lambda($children, this$0) {
    return function () {
      var _iterator__ex2g4s = $children.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.GridPanel.addAll.<anonymous>.<anonymous>' call
        this$0.add$default_nbz148_k$(element, null, null);
      }
      return Unit_getInstance();
    };
  }
  function GridPanel(autoColumns, autoRows, autoFlow, templateColumns, templateRows, templateAreas, columnGap, rowGap, justifyItems, alignItems, justifyContent, alignContent, useWrappers, className, init) {
    autoColumns = autoColumns === VOID ? null : autoColumns;
    autoRows = autoRows === VOID ? null : autoRows;
    autoFlow = autoFlow === VOID ? null : autoFlow;
    templateColumns = templateColumns === VOID ? null : templateColumns;
    templateRows = templateRows === VOID ? null : templateRows;
    templateAreas = templateAreas === VOID ? null : templateAreas;
    columnGap = columnGap === VOID ? null : columnGap;
    rowGap = rowGap === VOID ? null : rowGap;
    justifyItems = justifyItems === VOID ? null : justifyItems;
    alignItems = alignItems === VOID ? null : alignItems;
    justifyContent = justifyContent === VOID ? null : justifyContent;
    alignContent = alignContent === VOID ? null : alignContent;
    useWrappers = useWrappers === VOID ? false : useWrappers;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    this.useWrappers_1 = useWrappers;
    this.set_display_2qo1ly_k$(Display_GRID_getInstance());
    this.set_gridAutoColumns_byrs18_k$(autoColumns);
    this.set_gridAutoRows_d10kgc_k$(autoRows);
    this.set_gridAutoFlow_6hmum7_k$(autoFlow);
    this.set_gridTemplateColumns_1zexbd_k$(templateColumns);
    this.set_gridTemplateRows_l4bmtd_k$(templateRows);
    this.set_gridTemplateAreas_pc9px2_k$(templateAreas);
    this.set_gridColumnGap_lgxj26_k$(columnGap);
    this.set_gridRowGap_s61lus_k$(rowGap);
    this.set_justifyItems_5m2jf8_k$(justifyItems);
    this.set_alignItems_2x4ueh_k$(alignItems);
    this.set_justifyContent_920yxn_k$(justifyContent);
    this.set_alignContent_faycwg_k$(alignContent);
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(GridPanel).add_ha8v7p_k$ = function (child, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className) {
    var tmp;
    if (!this.useWrappers_1) {
      tmp = child;
    } else {
      tmp = new WidgetWrapper(child, className);
    }
    var wrapper = tmp;
    var tmp0_safe_receiver = wrapper instanceof Widget ? wrapper : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.panel.GridPanel.add.<anonymous>' call
      tmp0_safe_receiver.set_gridColumnStart_na6msy_k$(columnStart);
      tmp0_safe_receiver.set_gridRowStart_hb6r74_k$(rowStart);
      tmp0_safe_receiver.set_gridColumnEnd_5jev79_k$(columnEnd);
      tmp0_safe_receiver.set_gridRowEnd_rcwd03_k$(rowEnd);
      tmp0_safe_receiver.set_gridArea_cwqvqf_k$(area);
      tmp0_safe_receiver.set_justifySelf_nht07u_k$(justifySelf);
      tmp0_safe_receiver.set_alignSelf_g8okn9_k$(alignSelf);
    }
    this.addInternal_sa14da_k$(wrapper);
  };
  protoOf(GridPanel).add$default_nbz148_k$ = function (child, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className, $super) {
    columnStart = columnStart === VOID ? null : columnStart;
    rowStart = rowStart === VOID ? null : rowStart;
    columnEnd = columnEnd === VOID ? null : columnEnd;
    rowEnd = rowEnd === VOID ? null : rowEnd;
    area = area === VOID ? null : area;
    justifySelf = justifySelf === VOID ? null : justifySelf;
    alignSelf = alignSelf === VOID ? null : alignSelf;
    className = className === VOID ? null : className;
    var tmp;
    if ($super === VOID) {
      this.add_ha8v7p_k$(child, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_ha8v7p_k$.call(this, child, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className);
    }
    return tmp;
  };
  protoOf(GridPanel).add_1gyey9_k$ = function (position, child, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className) {
    var tmp;
    if (!this.useWrappers_1) {
      tmp = child;
    } else {
      tmp = new WidgetWrapper(child, className);
    }
    var wrapper = tmp;
    var tmp0_safe_receiver = wrapper instanceof Widget ? wrapper : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.panel.GridPanel.add.<anonymous>' call
      tmp0_safe_receiver.set_gridColumnStart_na6msy_k$(columnStart);
      tmp0_safe_receiver.set_gridRowStart_hb6r74_k$(rowStart);
      tmp0_safe_receiver.set_gridColumnEnd_5jev79_k$(columnEnd);
      tmp0_safe_receiver.set_gridRowEnd_rcwd03_k$(rowEnd);
      tmp0_safe_receiver.set_gridArea_cwqvqf_k$(area);
      tmp0_safe_receiver.set_justifySelf_nht07u_k$(justifySelf);
      tmp0_safe_receiver.set_alignSelf_g8okn9_k$(alignSelf);
    }
    this.addInternal_9c012y_k$(position, wrapper);
  };
  protoOf(GridPanel).add$default_4k3wjo_k$ = function (position, child, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className, $super) {
    columnStart = columnStart === VOID ? null : columnStart;
    rowStart = rowStart === VOID ? null : rowStart;
    columnEnd = columnEnd === VOID ? null : columnEnd;
    rowEnd = rowEnd === VOID ? null : rowEnd;
    area = area === VOID ? null : area;
    justifySelf = justifySelf === VOID ? null : justifySelf;
    alignSelf = alignSelf === VOID ? null : alignSelf;
    className = className === VOID ? null : className;
    var tmp;
    if ($super === VOID) {
      this.add_1gyey9_k$(position, child, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.add_1gyey9_k$.call(this, position, child, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className);
    }
    return tmp;
  };
  protoOf(GridPanel).options_jf7pnj_k$ = function (columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className, builder) {
    builder(new GridPanel$options$1(this, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className));
  };
  protoOf(GridPanel).options$default_3qy5yi_k$ = function (columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className, builder, $super) {
    columnStart = columnStart === VOID ? null : columnStart;
    rowStart = rowStart === VOID ? null : rowStart;
    columnEnd = columnEnd === VOID ? null : columnEnd;
    rowEnd = rowEnd === VOID ? null : rowEnd;
    area = area === VOID ? null : area;
    justifySelf = justifySelf === VOID ? null : justifySelf;
    alignSelf = alignSelf === VOID ? null : alignSelf;
    className = className === VOID ? null : className;
    var tmp;
    if ($super === VOID) {
      this.options_jf7pnj_k$(columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className, builder);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.options_jf7pnj_k$.call(this, columnStart, rowStart, columnEnd, rowEnd, area, justifySelf, alignSelf, className, builder);
    }
    return tmp;
  };
  protoOf(GridPanel).add_rekwpt_k$ = function (child) {
    this.add$default_nbz148_k$(child, null, null);
  };
  protoOf(GridPanel).add_t9z7x3_k$ = function (position, child) {
    this.add$default_4k3wjo_k$(position, child, null, null);
  };
  protoOf(GridPanel).addAll_a94ixq_k$ = function (children) {
    this.singleRender_ca7nu0_k$(GridPanel$addAll$lambda(children, this));
  };
  protoOf(GridPanel).remove_j7k0x0_k$ = function (child) {
    if (!(this.get_children_4cwbp4_k$() == null)) {
      if (ensureNotNull(this.get_children_4cwbp4_k$()).contains_aljjnj_k$(child)) {
        protoOf(SimplePanel).remove_j7k0x0_k$.call(this, child);
      } else {
        // Inline function 'kotlin.collections.find' call
        var tmp0 = ensureNotNull(this.get_children_4cwbp4_k$());
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var element = _iterator__ex2g4s.next_20eer_k$();
            // Inline function 'io.kvision.panel.GridPanel.remove.<anonymous>' call
            var tmp0_safe_receiver = element instanceof WidgetWrapper ? element : null;
            if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_wrapped_64pp2p_k$(), child)) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        var tmp0_safe_receiver_0 = tmp$ret$1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'io.kvision.panel.GridPanel.remove.<anonymous>' call
          protoOf(SimplePanel).remove_j7k0x0_k$.call(this, tmp0_safe_receiver_0);
          tmp0_safe_receiver_0.dispose_3nnxhr_k$();
        }
      }
    }
  };
  protoOf(GridPanel).removeAll_c84dd9_k$ = function () {
    var tmp0_safe_receiver = this.get_children_4cwbp4_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.GridPanel.removeAll.<anonymous>' call
        item.clearParent_npr7gn_k$();
        var tmp0_safe_receiver_0 = item instanceof WidgetWrapper ? item : null;
        var tmp;
        if (tmp0_safe_receiver_0 == null) {
          tmp = null;
        } else {
          tmp0_safe_receiver_0.dispose_3nnxhr_k$();
          tmp = Unit_getInstance();
        }
        var tmp$ret$0 = tmp;
        destination.add_utx5q5_k$(tmp$ret$0);
      }
    }
    var tmp1_safe_receiver = this.get_children_4cwbp4_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.clear_j9egeb_k$();
    }
    this.set_children_3shjjk_k$(null);
    this.refresh_6a3uvf_k$();
  };
  protoOf(GridPanel).disposeAll_hpz7bi_k$ = function () {
    var tmp0_safe_receiver = this.get_children_4cwbp4_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.GridPanel.disposeAll.<anonymous>' call
        var tmp0_safe_receiver_0 = item instanceof WidgetWrapper ? item : null;
        var tmp;
        if (tmp0_safe_receiver_0 == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'io.kvision.panel.GridPanel.disposeAll.<anonymous>.<anonymous>' call
          var tmp0_safe_receiver_1 = tmp0_safe_receiver_0.get_wrapped_64pp2p_k$();
          var tmp_0;
          if (tmp0_safe_receiver_1 == null) {
            tmp_0 = null;
          } else {
            tmp0_safe_receiver_1.dispose_3nnxhr_k$();
            tmp_0 = Unit_getInstance();
          }
          tmp = tmp_0;
        }
        var tmp$ret$2 = tmp;
        destination.add_utx5q5_k$(tmp$ret$2);
      }
    }
    this.removeAll_c84dd9_k$();
  };
  protoOf(GridPanel).dispose_3nnxhr_k$ = function () {
    var tmp0_safe_receiver = this.get_children_4cwbp4_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.GridPanel.dispose.<anonymous>' call
        var tmp0_safe_receiver_0 = item instanceof WidgetWrapper ? item : null;
        var tmp;
        if (tmp0_safe_receiver_0 == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'io.kvision.panel.GridPanel.dispose.<anonymous>.<anonymous>' call
          var tmp0_safe_receiver_1 = tmp0_safe_receiver_0.get_wrapped_64pp2p_k$();
          var tmp_0;
          if (tmp0_safe_receiver_1 == null) {
            tmp_0 = null;
          } else {
            tmp0_safe_receiver_1.dispose_3nnxhr_k$();
            tmp_0 = Unit_getInstance();
          }
          tmp = tmp_0;
        }
        var tmp$ret$2 = tmp;
        destination.add_utx5q5_k$(tmp$ret$2);
      }
    }
    protoOf(SimplePanel).dispose_3nnxhr_k$.call(this);
  };
  function gridPanel(_this__u8e3s4, autoColumns, autoRows, autoFlow, templateColumns, templateRows, templateAreas, columnGap, rowGap, justifyItems, alignItems, justifyContent, alignContent, useWrappers, className, init) {
    autoColumns = autoColumns === VOID ? null : autoColumns;
    autoRows = autoRows === VOID ? null : autoRows;
    autoFlow = autoFlow === VOID ? null : autoFlow;
    templateColumns = templateColumns === VOID ? null : templateColumns;
    templateRows = templateRows === VOID ? null : templateRows;
    templateAreas = templateAreas === VOID ? null : templateAreas;
    columnGap = columnGap === VOID ? null : columnGap;
    rowGap = rowGap === VOID ? null : rowGap;
    justifyItems = justifyItems === VOID ? null : justifyItems;
    alignItems = alignItems === VOID ? null : alignItems;
    justifyContent = justifyContent === VOID ? null : justifyContent;
    alignContent = alignContent === VOID ? null : alignContent;
    useWrappers = useWrappers === VOID ? false : useWrappers;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var gridPanel = new GridPanel(autoColumns, autoRows, autoFlow, templateColumns, templateRows, templateAreas, columnGap, rowGap, justifyItems, alignItems, justifyContent, alignContent, useWrappers, className, init);
    _this__u8e3s4.add_rekwpt_k$(gridPanel);
    return gridPanel;
  }
  function HPanel(wrap, justify, alignItems, spacing, useWrappers, className, init) {
    wrap = wrap === VOID ? null : wrap;
    justify = justify === VOID ? null : justify;
    alignItems = alignItems === VOID ? null : alignItems;
    spacing = spacing === VOID ? null : spacing;
    useWrappers = useWrappers === VOID ? false : useWrappers;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    FlexPanel.call(this, null, wrap, justify, alignItems, null, spacing, useWrappers, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function hPanel(_this__u8e3s4, wrap, justify, alignItems, spacing, useWrappers, className, init) {
    wrap = wrap === VOID ? null : wrap;
    justify = justify === VOID ? null : justify;
    alignItems = alignItems === VOID ? null : alignItems;
    spacing = spacing === VOID ? null : spacing;
    useWrappers = useWrappers === VOID ? false : useWrappers;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var hpanel = new HPanel(wrap, justify, alignItems, spacing, useWrappers, className, init);
    _this__u8e3s4.add_rekwpt_k$(hpanel);
    return hpanel;
  }
  function root(_this__u8e3s4, id, containerType, addRow, init) {
    containerType = containerType === VOID ? ContainerType_NONE_getInstance() : containerType;
    addRow = addRow === VOID ? !containerType.equals(ContainerType_FIXED_getInstance()) && !containerType.equals(ContainerType_NONE_getInstance()) : addRow;
    init = init === VOID ? null : init;
    return Root_init_$Create$(id, containerType, addRow, init);
  }
  function _get_modals__cy1x23($this) {
    return $this.modals_1;
  }
  function _get_containerType__mo8t06($this) {
    return $this.containerType_1;
  }
  function _get_addRow__isrhde($this) {
    return $this.addRow_1;
  }
  function _get_contextMenus__8nyu8q($this) {
    return $this.contextMenus_1;
  }
  function _set_rootVnode__2jyq0h($this, _set____db54di) {
    $this.rootVnode_1 = _set____db54di;
  }
  function _get_rootVnode__qqvqe3($this) {
    return $this.rootVnode_1;
  }
  function _set_elementName__cohb5u($this, _set____db54di) {
    $this.elementName_1 = _set____db54di;
  }
  function _get_elementName__hlwv62($this) {
    return $this.elementName_1;
  }
  function _set_asyncBuffer__wbspcn($this, _set____db54di) {
    $this.asyncBuffer_1 = _set____db54di;
  }
  function _get_asyncBuffer__21ej0r($this) {
    return $this.asyncBuffer_1;
  }
  function _set_asyncTimer__mhjjaq($this, _set____db54di) {
    $this.asyncTimer_1 = _set____db54di;
  }
  function _get_asyncTimer__xhbxj6($this) {
    return $this.asyncTimer_1;
  }
  function _set_stylesCached__wlaqer($this, _set____db54di) {
    $this.stylesCached_1 = _set____db54di;
  }
  function _get_stylesCached__mw2l09($this) {
    return $this.stylesCached_1;
  }
  function _get_isFirstRoot__amiadz($this) {
    return $this.isFirstRoot_1;
  }
  function Root_init_$Init$(id, containerType, addRow, init, $this) {
    containerType = containerType === VOID ? ContainerType_NONE_getInstance() : containerType;
    addRow = addRow === VOID ? !containerType.equals(ContainerType_FIXED_getInstance()) && !containerType.equals(ContainerType_NONE_getInstance()) : addRow;
    init = init === VOID ? null : init;
    SimplePanel.call($this);
    Root.call($this);
    $this.containerType_1 = containerType;
    $this.addRow_1 = addRow;
    var element = document.getElementById(id);
    if (!(element == null)) {
      getPropertiesFromElement($this, element);
      $this.rootVnode_1 = KVManager_getInstance().patch_qexiis_k$(id, $this.renderVNode_r2mn32_k$());
    }
    $this.set_id_wyyipr_k$(id);
    if (init == null)
      null;
    else
      init($this);
    return $this;
  }
  function Root_init_$Create$(id, containerType, addRow, init) {
    return Root_init_$Init$(id, containerType, addRow, init, objectCreate(protoOf(Root)));
  }
  function Root_init_$Init$_0(element, containerType, addRow, init, $this) {
    containerType = containerType === VOID ? ContainerType_NONE_getInstance() : containerType;
    addRow = addRow === VOID ? !containerType.equals(ContainerType_FIXED_getInstance()) && !containerType.equals(ContainerType_NONE_getInstance()) : addRow;
    init = init === VOID ? null : init;
    SimplePanel.call($this);
    Root.call($this);
    $this.containerType_1 = containerType;
    $this.addRow_1 = addRow;
    getPropertiesFromElement($this, element);
    $this.rootVnode_1 = KVManager_getInstance().patch_yfthds_k$(element, $this.renderVNode_r2mn32_k$());
    var _unary__edvuaz = Companion_getInstance_8().counter_1;
    Companion_getInstance_8().counter_1 = _unary__edvuaz + 1 | 0;
    $this.set_id_wyyipr_k$('kv_root_' + _unary__edvuaz);
    if (init == null)
      null;
    else
      init($this);
    return $this;
  }
  function Root_init_$Create$_0(element, containerType, addRow, init) {
    return Root_init_$Init$_0(element, containerType, addRow, init, objectCreate(protoOf(Root)));
  }
  function getPropertiesFromElement($this, element) {
    $this.elementName_1 = element.nodeName;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = asList_0(element.attributes).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.panel.Root.getPropertiesFromElement.<anonymous>' call
      if (!(element_0.name === 'id')) {
        $this.setAttribute_gbqua2_k$(element_0.name, element_0.value);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = asList_0(element.classList).iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_1 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'io.kvision.panel.Root.getPropertiesFromElement.<anonymous>' call
      $this.addCssClass_ul13bg_k$(element_1);
    }
  }
  function stylesVNodes($this) {
    var tmp;
    if ($this.isFirstRoot_1) {
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!Companion_getInstance_1().get_styles_swambk_k$().isEmpty_y1axqb_k$()) {
        var tmp_1;
        if (!($this.stylesCached_1 == null)) {
          tmp_1 = ensureNotNull($this.stylesCached_1);
        } else {
          // Inline function 'kotlin.collections.groupBy' call
          var tmp0 = Companion_getInstance_1().get_styles_swambk_k$();
          // Inline function 'kotlin.collections.groupByTo' call
          var destination = LinkedHashMap_init_$Create$();
          var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
          while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
            var element = _iterator__ex2g4s.next_20eer_k$();
            // Inline function 'io.kvision.panel.Root.stylesVNodes.<anonymous>' call
            var key = element.get_mediaQuery_bp0atp_k$();
            // Inline function 'kotlin.collections.getOrPut' call
            var value = destination.get_wei43m_k$(key);
            var tmp_2;
            if (value == null) {
              // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
              var answer = ArrayList_init_$Create$();
              destination.put_4fpzoq_k$(key, answer);
              tmp_2 = answer;
            } else {
              tmp_2 = value;
            }
            var list = tmp_2;
            list.add_utx5q5_k$(element);
          }
          var groupByMediaQuery = destination;
          var tmp_3 = $this;
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_0 = ArrayList_init_$Create$_0(groupByMediaQuery.get_size_woubt6_k$());
          // Inline function 'kotlin.collections.iterator' call
          var _iterator__ex2g4s_0 = groupByMediaQuery.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
            var item = _iterator__ex2g4s_0.next_20eer_k$();
            // Inline function 'io.kvision.panel.Root.stylesVNodes.<anonymous>' call
            // Inline function 'kotlin.collections.component1' call
            var media = item.get_key_18j28a_k$();
            // Inline function 'kotlin.collections.component2' call
            var styles = item.get_value_j01efc_k$();
            var tmp_4;
            if (media == null) {
              tmp_4 = joinToString(styles, '\n', VOID, VOID, VOID, VOID, Root$stylesVNodes$lambda);
            } else {
              var tmp_5 = '@media (' + media + ') {\n';
              tmp_4 = tmp_5 + joinToString(styles, '\n', VOID, VOID, VOID, VOID, Root$stylesVNodes$lambda_0) + '\n}';
            }
            var tmp$ret$9 = tmp_4;
            destination_0.add_utx5q5_k$(tmp$ret$9);
          }
          tmp_3.stylesCached_1 = joinToString(destination_0, '\n\n');
          tmp_1 = ensureNotNull($this.stylesCached_1);
        }
        var stylesDesc = tmp_1;
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$14 = ['\n' + stylesDesc + '\n'];
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [h_2('style', tmp$ret$14)];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      }
      tmp = tmp_0;
    } else {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [];
    }
    return tmp;
  }
  function modalsVNodes($this) {
    var tmp;
    if ($this.isFirstRoot_1) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_8().modals_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.Root.modalsVNodes.<anonymous>' call
        if (element.get_visible_8zfvk9_k$()) {
          destination.add_utx5q5_k$(element);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
      var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'io.kvision.panel.Root.modalsVNodes.<anonymous>' call
        var tmp$ret$3 = item.renderVNode_r2mn32_k$();
        destination_0.add_utx5q5_k$(tmp$ret$3);
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(destination_0);
    } else {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [];
    }
    return tmp;
  }
  function contextMenusVNodes($this) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this.contextMenus_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.panel.Root.contextMenusVNodes.<anonymous>' call
      if (element.get_visible_8zfvk9_k$()) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'io.kvision.panel.Root.contextMenusVNodes.<anonymous>' call
      var tmp$ret$3 = item.renderVNode_r2mn32_k$();
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination_0);
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.counter_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.modals_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.roots_1 = ArrayList_init_$Create$();
  }
  protoOf(Companion_7).set_counter_lagg9g_k$ = function (_set____db54di) {
    this.counter_1 = _set____db54di;
  };
  protoOf(Companion_7).get_counter_5zq0k8_k$ = function () {
    return this.counter_1;
  };
  protoOf(Companion_7).disposeAllRoots_fs2xup_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.roots_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.panel.Companion.disposeAllRoots.<anonymous>' call
      element.dispose_3nnxhr_k$();
    }
    this.roots_1.clear_j9egeb_k$();
  };
  protoOf(Companion_7).get_roots_iy382w_k$ = function () {
    return this.roots_1;
  };
  protoOf(Companion_7).getFirstRoot_21g3y4_k$ = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.roots_1.isEmpty_y1axqb_k$()) {
      tmp = this.roots_1.get_c1px32_k$(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Companion_7).getLastRoot_a875zi_k$ = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.roots_1.isEmpty_y1axqb_k$()) {
      tmp = this.roots_1.get_c1px32_k$(this.roots_1.get_size_woubt6_k$() - 1 | 0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Companion_7).addModal_6q4vcr_k$ = function (modal) {
    this.modals_1.add_utx5q5_k$(modal);
  };
  protoOf(Companion_7).removeModal_czgnry_k$ = function (modal) {
    this.modals_1.remove_cedx0m_k$(modal);
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Root$render$lambda($this$snOpt) {
    // Inline function 'io.kvision.utils.snClasses' call
    var pairs = listOf_0(to('row', true));
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.utils.snClasses.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pairs.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.utils.snClasses.<anonymous>.<anonymous>' call
      var key = element.component1_7eebsc_k$();
      var value = element.component2_7eebsb_k$();
      this_0[key] = value;
    }
    $this$snOpt.class = this_0;
    return Unit_getInstance();
  }
  function apply$ref_10($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function Root$addContextMenu$lambda$lambda($contextMenu) {
    return function (e) {
      var tmp;
      // Inline function 'kotlin.js.asDynamic' call
      if (!e.dropDownCM) {
        $contextMenu.hide_o8jt72_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Root$addContextMenu$lambda($contextMenu) {
    return function ($this$setInternalEventListener) {
      $this$setInternalEventListener.click = Root$addContextMenu$lambda$lambda($contextMenu);
      return Unit_getInstance();
    };
  }
  function Root$stylesVNodes$lambda(it) {
    return it.generateStyle_vh3gof_k$();
  }
  function Root$stylesVNodes$lambda_0(it) {
    return it.generateStyle_vh3gof_k$();
  }
  function Root$singleRenderAsync$lambda($block) {
    return function () {
      $block();
      return Unit_getInstance();
    };
  }
  function Root$singleRenderAsync$lambda$lambda(this$0) {
    return function () {
      var _iterator__ex2g4s = this$0.asyncBuffer_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.Root.singleRenderAsync.<anonymous>.<anonymous>.<anonymous>' call
        element();
      }
      this$0.asyncBuffer_1.clear_j9egeb_k$();
      return Unit_getInstance();
    };
  }
  function Root$singleRenderAsync$lambda_0(this$0) {
    return function () {
      this$0.singleRender_ca7nu0_k$(Root$singleRenderAsync$lambda$lambda(this$0));
      this$0.asyncTimer_1 = null;
      return Unit_getInstance();
    };
  }
  protoOf(Root).set_singleRenderers_cnmleg_k$ = function (_set____db54di) {
    this.singleRenderers_1 = _set____db54di;
  };
  protoOf(Root).get_singleRenderers_o7kjmc_k$ = function () {
    return this.singleRenderers_1;
  };
  protoOf(Root).set_synchronousMode_j2qayu_k$ = function (_set____db54di) {
    this.synchronousMode_1 = _set____db54di;
  };
  protoOf(Root).get_synchronousMode_5pq7j7_k$ = function () {
    return this.synchronousMode_1;
  };
  protoOf(Root).set_disableRendering_w9nmbw_k$ = function (value) {
    this.disableRendering_1 = value;
    if (!this.disableRendering_1) {
      this.reRender_8c6ezy_k$();
    }
  };
  protoOf(Root).get_disableRendering_cucbbh_k$ = function () {
    return this.disableRendering_1;
  };
  protoOf(Root).render_fgfjvu_k$ = function () {
    var tmp;
    if (this.addRow_1) {
      var tmp_0 = '' + this.elementName_1 + '#' + this.get_id_kntnx8_k$();
      var tmp2 = stylesVNodes(this);
      // Inline function 'io.kvision.utils.snOpt' call
      var block = Root$render$lambda;
      // Inline function 'io.kvision.utils.vNodeData' call
      var tmp$ret$0 = {};
      var tmp$ret$1 = apply$ref_10(tmp$ret$0)(block);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.collections.plus' call
      var elements = [h('div', tmp$ret$1, this.childrenVNodes_2corie_k$())];
      // Inline function 'kotlin.js.asDynamic' call
      var tmp4 = tmp2.concat(elements);
      // Inline function 'kotlin.collections.plus' call
      var elements_0 = modalsVNodes(this);
      // Inline function 'kotlin.js.asDynamic' call
      var tmp6 = tmp4.concat(elements_0);
      // Inline function 'kotlin.collections.plus' call
      var elements_1 = contextMenusVNodes(this);
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$10 = tmp6.concat(elements_1);
      tmp = this.render_prnnht_k$(tmp_0, tmp$ret$10);
    } else {
      var tmp_1 = '' + this.elementName_1 + '#' + this.get_id_kntnx8_k$();
      var tmp8 = stylesVNodes(this);
      // Inline function 'kotlin.collections.plus' call
      var elements_2 = this.childrenVNodes_2corie_k$();
      // Inline function 'kotlin.js.asDynamic' call
      var tmp10 = tmp8.concat(elements_2);
      // Inline function 'kotlin.collections.plus' call
      var elements_3 = modalsVNodes(this);
      // Inline function 'kotlin.js.asDynamic' call
      var tmp12 = tmp10.concat(elements_3);
      // Inline function 'kotlin.collections.plus' call
      var elements_4 = contextMenusVNodes(this);
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$16 = tmp12.concat(elements_4);
      tmp = this.render_prnnht_k$(tmp_1, tmp$ret$16);
    }
    return tmp;
  };
  protoOf(Root).addContextMenu_kgrl5y_k$ = function (contextMenu) {
    this.contextMenus_1.add_utx5q5_k$(contextMenu);
    contextMenu.set_parent_58bm75_k$(this);
    this.setInternalEventListener_jia4mj_k$(Root$addContextMenu$lambda(contextMenu));
    this.refresh_6a3uvf_k$();
  };
  protoOf(Root).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    if (!this.containerType_1.equals(ContainerType_NONE_getInstance())) {
      classSetBuilder.add_udnk2x_k$(this.containerType_1.type_1);
    }
  };
  protoOf(Root).reRender_8c6ezy_k$ = function () {
    if (this.singleRenderers_1 === 0 && !this.disableRendering_1 && !(this.rootVnode_1 == null)) {
      this.rootVnode_1 = KVManager_getInstance().patch_5fv7el_k$(ensureNotNull(this.rootVnode_1), this.renderVNode_r2mn32_k$());
    }
  };
  protoOf(Root).singleRender_ca7nu0_k$ = function (block) {
    this.singleRenderers_1 = this.singleRenderers_1 + 1 | 0;
    var result = block();
    this.singleRenderers_1 = this.singleRenderers_1 - 1 | 0;
    this.reRender_8c6ezy_k$();
    return result;
  };
  protoOf(Root).singleRenderAsync_haca86_k$ = function (block) {
    if (this.synchronousMode_1) {
      this.singleRender_ca7nu0_k$(Root$singleRenderAsync$lambda(block));
    } else {
      this.asyncBuffer_1.add_utx5q5_k$(block);
      if (!(this.asyncTimer_1 == null)) {
        window.clearTimeout(ensureNotNull(this.asyncTimer_1));
      }
      var tmp = this;
      var tmp_0 = window;
      tmp.asyncTimer_1 = tmp_0.setTimeout(Root$singleRenderAsync$lambda_0(this), 0);
    }
  };
  protoOf(Root).restart_nz0dof_k$ = function () {
    if (!(this.rootVnode_1 == null)) {
      this.rootVnode_1 = KVManager_getInstance().patch_5fv7el_k$(ensureNotNull(this.rootVnode_1), h_3('div'));
      this.rootVnode_1 = KVManager_getInstance().patch_5fv7el_k$(ensureNotNull(this.rootVnode_1), this.renderVNode_r2mn32_k$());
    }
  };
  protoOf(Root).clearStylesCache_s7vjew_k$ = function () {
    this.stylesCached_1 = null;
  };
  protoOf(Root).getRoot_18r9uw_k$ = function () {
    return this;
  };
  protoOf(Root).dispose_3nnxhr_k$ = function () {
    protoOf(SimplePanel).dispose_3nnxhr_k$.call(this);
    Companion_getInstance_8().roots_1.remove_cedx0m_k$(this);
    if (this.isFirstRoot_1) {
      Companion_getInstance_1().get_styles_swambk_k$().clear_j9egeb_k$();
      Companion_getInstance_8().modals_1.clear_j9egeb_k$();
    }
  };
  function Root() {
    Companion_getInstance_8();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.contextMenus_1 = ArrayList_init_$Create$();
    this.rootVnode_1 = null;
    this.elementName_1 = null;
    this.singleRenderers_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.asyncBuffer_1 = ArrayList_init_$Create$();
    this.asyncTimer_1 = null;
    this.stylesCached_1 = null;
    this.isFirstRoot_1 = Companion_getInstance_8().roots_1.isEmpty_y1axqb_k$();
    this.synchronousMode_1 = false;
    this.disableRendering_1 = false;
    Companion_getInstance_8().roots_1.add_utx5q5_k$(this);
    if (this.isFirstRoot_1) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = Companion_getInstance_8().modals_1.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.Root.<anonymous>' call
        element.set_parent_58bm75_k$(this);
      }
    }
  }
  var ContainerType_NONE_instance;
  var ContainerType_FIXED_instance;
  var ContainerType_FLUID_instance;
  var ContainerType_SM_instance;
  var ContainerType_MD_instance;
  var ContainerType_LG_instance;
  var ContainerType_XL_instance;
  var ContainerType_XXL_instance;
  function values_59() {
    return [ContainerType_NONE_getInstance(), ContainerType_FIXED_getInstance(), ContainerType_FLUID_getInstance(), ContainerType_SM_getInstance(), ContainerType_MD_getInstance(), ContainerType_LG_getInstance(), ContainerType_XL_getInstance(), ContainerType_XXL_getInstance()];
  }
  function valueOf_59(value) {
    switch (value) {
      case 'NONE':
        return ContainerType_NONE_getInstance();
      case 'FIXED':
        return ContainerType_FIXED_getInstance();
      case 'FLUID':
        return ContainerType_FLUID_getInstance();
      case 'SM':
        return ContainerType_SM_getInstance();
      case 'MD':
        return ContainerType_MD_getInstance();
      case 'LG':
        return ContainerType_LG_getInstance();
      case 'XL':
        return ContainerType_XL_getInstance();
      case 'XXL':
        return ContainerType_XXL_getInstance();
      default:
        ContainerType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_59() {
    if ($ENTRIES_59 == null)
      $ENTRIES_59 = enumEntries(values_59());
    return $ENTRIES_59;
  }
  var ContainerType_entriesInitialized;
  function ContainerType_initEntries() {
    if (ContainerType_entriesInitialized)
      return Unit_getInstance();
    ContainerType_entriesInitialized = true;
    ContainerType_NONE_instance = new ContainerType('NONE', 0, '');
    ContainerType_FIXED_instance = new ContainerType('FIXED', 1, 'container');
    ContainerType_FLUID_instance = new ContainerType('FLUID', 2, 'container-fluid');
    ContainerType_SM_instance = new ContainerType('SM', 3, 'container-sm');
    ContainerType_MD_instance = new ContainerType('MD', 4, 'container-md');
    ContainerType_LG_instance = new ContainerType('LG', 5, 'container-lg');
    ContainerType_XL_instance = new ContainerType('XL', 6, 'container-xl');
    ContainerType_XXL_instance = new ContainerType('XXL', 7, 'container-xxl');
  }
  var $ENTRIES_59;
  function ContainerType(name, ordinal, type) {
    Enum.call(this, name, ordinal);
    this.type_1 = type;
  }
  protoOf(ContainerType).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  function ContainerType_NONE_getInstance() {
    ContainerType_initEntries();
    return ContainerType_NONE_instance;
  }
  function ContainerType_FIXED_getInstance() {
    ContainerType_initEntries();
    return ContainerType_FIXED_instance;
  }
  function ContainerType_FLUID_getInstance() {
    ContainerType_initEntries();
    return ContainerType_FLUID_instance;
  }
  function ContainerType_SM_getInstance() {
    ContainerType_initEntries();
    return ContainerType_SM_instance;
  }
  function ContainerType_MD_getInstance() {
    ContainerType_initEntries();
    return ContainerType_MD_instance;
  }
  function ContainerType_LG_getInstance() {
    ContainerType_initEntries();
    return ContainerType_LG_instance;
  }
  function ContainerType_XL_getInstance() {
    ContainerType_initEntries();
    return ContainerType_XL_instance;
  }
  function ContainerType_XXL_getInstance() {
    ContainerType_initEntries();
    return ContainerType_XXL_instance;
  }
  function SimplePanel$childrenVNodes$lambda(c) {
    return c.get_visible_8zfvk9_k$();
  }
  function SimplePanel$childrenVNodes$lambda_0(c) {
    return c.renderVNode_r2mn32_k$();
  }
  function SimplePanel$childrenVNodes$lambda_1(c) {
    return c.get_visible_8zfvk9_k$();
  }
  function SimplePanel$childrenVNodes$lambda_2(c) {
    return c.renderVNode_r2mn32_k$();
  }
  function SimplePanel$childrenVNodes$lambda_3(c) {
    return c.get_visible_8zfvk9_k$();
  }
  function SimplePanel$childrenVNodes$lambda_4(c) {
    return c.renderVNode_r2mn32_k$();
  }
  function SimplePanel(className, init) {
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Widget.call(this, className);
    this.privateChildren_1 = null;
    this.children_1 = null;
    this._archivedState_1 = null;
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(SimplePanel).set_privateChildren_ytwrc7_k$ = function (_set____db54di) {
    this.privateChildren_1 = _set____db54di;
  };
  protoOf(SimplePanel).get_privateChildren_bukxtz_k$ = function () {
    return this.privateChildren_1;
  };
  protoOf(SimplePanel).set_children_3shjjk_k$ = function (_set____db54di) {
    this.children_1 = _set____db54di;
  };
  protoOf(SimplePanel).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(SimplePanel).set__archivedState_c6a8vx_k$ = function (_set____db54di) {
    this._archivedState_1 = _set____db54di;
  };
  protoOf(SimplePanel).get__archivedState_baedw9_k$ = function () {
    return this._archivedState_1;
  };
  protoOf(SimplePanel).render_fgfjvu_k$ = function () {
    return this.render_prnnht_k$('div', this.childrenVNodes_2corie_k$());
  };
  protoOf(SimplePanel).childrenVNodes_2corie_k$ = function () {
    var tmp;
    if (this.privateChildren_1 == null && this.children_1 == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else if (this.privateChildren_1 == null && !(this.children_1 == null)) {
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = ensureNotNull(this.children_1);
      // Inline function 'kotlin.js.asDynamic' call
      tmp = copyToArray(this_0).filter(SimplePanel$childrenVNodes$lambda).map(SimplePanel$childrenVNodes$lambda_0);
    } else if (!(this.privateChildren_1 == null) && this.children_1 == null) {
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_1 = ensureNotNull(this.privateChildren_1);
      // Inline function 'kotlin.js.asDynamic' call
      tmp = copyToArray(this_1).filter(SimplePanel$childrenVNodes$lambda_1).map(SimplePanel$childrenVNodes$lambda_2);
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = plus_0(ensureNotNull(this.privateChildren_1), ensureNotNull(this.children_1));
      // Inline function 'kotlin.js.asDynamic' call
      tmp = copyToArray(this_2).filter(SimplePanel$childrenVNodes$lambda_3).map(SimplePanel$childrenVNodes$lambda_4);
    }
    return tmp;
  };
  protoOf(SimplePanel).addPrivate_g3v94y_k$ = function (child) {
    if (this.privateChildren_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp.privateChildren_1 = ArrayList_init_$Create$();
    }
    ensureNotNull(this.privateChildren_1).add_utx5q5_k$(child);
    var tmp0_safe_receiver = child.get_parent_hy4reb_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.remove_j7k0x0_k$(child);
    }
    child.set_parent_58bm75_k$(this);
    this.refresh_6a3uvf_k$();
  };
  protoOf(SimplePanel).removeAllPrivate_l2166i_k$ = function () {
    var tmp0_safe_receiver = this.privateChildren_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        item.clearParent_npr7gn_k$();
        destination.add_utx5q5_k$(Unit_getInstance());
      }
    }
    this.privateChildren_1 = null;
    this.refresh_6a3uvf_k$();
  };
  protoOf(SimplePanel).disposeAllPrivate_skqp8x_k$ = function () {
    var tmp0_safe_receiver = this.privateChildren_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.SimplePanel.disposeAllPrivate.<anonymous>' call
        element.dispose_3nnxhr_k$();
      }
    }
    this.removeAllPrivate_l2166i_k$();
  };
  protoOf(SimplePanel).addInternal_sa14da_k$ = function (child) {
    if (this.children_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp.children_1 = ArrayList_init_$Create$();
    }
    ensureNotNull(this.children_1).add_utx5q5_k$(child);
    var tmp0_safe_receiver = child.get_parent_hy4reb_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.remove_j7k0x0_k$(child);
    }
    child.set_parent_58bm75_k$(this);
    this.refresh_6a3uvf_k$();
  };
  protoOf(SimplePanel).addInternal_9c012y_k$ = function (position, child) {
    if (this.children_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp.children_1 = ArrayList_init_$Create$();
    }
    ensureNotNull(this.children_1).add_dl6gt3_k$(position, child);
    var tmp0_safe_receiver = child.get_parent_hy4reb_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.remove_j7k0x0_k$(child);
    }
    child.set_parent_58bm75_k$(this);
    this.refresh_6a3uvf_k$();
  };
  protoOf(SimplePanel).add_rekwpt_k$ = function (child) {
    this.addInternal_sa14da_k$(child);
  };
  protoOf(SimplePanel).add_t9z7x3_k$ = function (position, child) {
    this.addInternal_9c012y_k$(position, child);
  };
  protoOf(SimplePanel).addAll_a94ixq_k$ = function (children) {
    if (this.children_1 == null) {
      var tmp = this;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp.children_1 = ArrayList_init_$Create$();
    }
    ensureNotNull(this.children_1).addAll_4lagoh_k$(children);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(children, 10));
    var _iterator__ex2g4s = children.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp0_safe_receiver = item.get_parent_hy4reb_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.remove_j7k0x0_k$(item);
      }
      item.set_parent_58bm75_k$(this);
      destination.add_utx5q5_k$(Unit_getInstance());
    }
    this.refresh_6a3uvf_k$();
  };
  protoOf(SimplePanel).remove_j7k0x0_k$ = function (child) {
    if (!(this.children_1 == null) && ensureNotNull(this.children_1).remove_cedx0m_k$(child)) {
      child.clearParent_npr7gn_k$();
      this.refresh_6a3uvf_k$();
    }
  };
  protoOf(SimplePanel).removeAt_rql1ap_k$ = function (position) {
    var tmp0_safe_receiver = this.children_1;
    var child = tmp0_safe_receiver == null ? null : getOrNull(tmp0_safe_receiver, position);
    if (!(child == null)) {
      var tmp1_safe_receiver = this.children_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.removeAt_6niowx_k$(position);
      child.clearParent_npr7gn_k$();
      this.refresh_6a3uvf_k$();
    }
  };
  protoOf(SimplePanel).removeAll_c84dd9_k$ = function () {
    var tmp0_safe_receiver = this.children_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        item.clearParent_npr7gn_k$();
        destination.add_utx5q5_k$(Unit_getInstance());
      }
    }
    this.children_1 = null;
    this.refresh_6a3uvf_k$();
  };
  protoOf(SimplePanel).disposeAll_hpz7bi_k$ = function () {
    var tmp0_safe_receiver = this.children_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.SimplePanel.disposeAll.<anonymous>' call
        element.dispose_3nnxhr_k$();
      }
    }
    this.removeAll_c84dd9_k$();
  };
  protoOf(SimplePanel).getChildren_97y0zv_k$ = function () {
    var tmp0_elvis_lhs = this.children_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(SimplePanel).dispose_3nnxhr_k$ = function () {
    protoOf(Widget).dispose_3nnxhr_k$.call(this);
    var tmp0_safe_receiver = this.children_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.panel.SimplePanel.dispose.<anonymous>' call
        element.dispose_3nnxhr_k$();
      }
    }
    var tmp1_safe_receiver = this.privateChildren_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'io.kvision.panel.SimplePanel.dispose.<anonymous>' call
        element_0.dispose_3nnxhr_k$();
      }
    }
    var tmp2_safe_receiver = this.children_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_safe_receiver, 10));
      var _iterator__ex2g4s_1 = tmp2_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s_1.next_20eer_k$();
        item.clearParent_npr7gn_k$();
        destination.add_utx5q5_k$(Unit_getInstance());
      }
    }
    var tmp3_safe_receiver = this.children_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.clear_j9egeb_k$();
    }
    this.children_1 = null;
    var tmp4_safe_receiver = this.privateChildren_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp4_safe_receiver, 10));
      var _iterator__ex2g4s_2 = tmp4_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
        var item_0 = _iterator__ex2g4s_2.next_20eer_k$();
        item_0.clearParent_npr7gn_k$();
        destination_0.add_utx5q5_k$(Unit_getInstance());
      }
    }
    var tmp5_safe_receiver = this.privateChildren_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.clear_j9egeb_k$();
    }
    this.privateChildren_1 = null;
  };
  function stackPanel(_this__u8e3s4, activateLast, className, init) {
    activateLast = activateLast === VOID ? true : activateLast;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var stackPanel = new StackPanel(activateLast, className, init);
    _this__u8e3s4.add_rekwpt_k$(stackPanel);
    return stackPanel;
  }
  function _get_activateLast__mbzvb6($this) {
    return $this.activateLast_1;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.counter_1 = 0;
  }
  protoOf(Companion_8).set_counter_lagg9g_k$ = function (_set____db54di) {
    this.counter_1 = _set____db54di;
  };
  protoOf(Companion_8).get_counter_5zq0k8_k$ = function () {
    return this.counter_1;
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function StackPanel$activeIndex$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function StackPanel$add$lambda(this$0, $currentIndex) {
    return function (_unused_var__etf5q3) {
      this$0.set_activeChild_xxdgo0_k$(ensureNotNull(this$0.childrenMap_1.get_wei43m_k$($currentIndex)));
      return Unit_getInstance();
    };
  }
  function StackPanel$route$1(this$0, $route) {
    this.this$0__1 = this$0;
    this.$route_1 = $route;
    this.$$delegate_0__1 = this$0;
  }
  protoOf(StackPanel$route$1).add_rekwpt_k$ = function (child) {
    this.this$0__1.add_cxqxwb_k$(child, this.$route_1);
  };
  protoOf(StackPanel$route$1).add_t9z7x3_k$ = function (position, child) {
    this.$$delegate_0__1.add_t9z7x3_k$(position, child);
  };
  protoOf(StackPanel$route$1).addAll_a94ixq_k$ = function (children) {
    this.$$delegate_0__1.addAll_a94ixq_k$(children);
  };
  protoOf(StackPanel$route$1).invoke_hkydh0_k$ = function (children) {
    this.$$delegate_0__1.invoke_hkydh0_k$(children);
  };
  protoOf(StackPanel$route$1).remove_j7k0x0_k$ = function (child) {
    this.$$delegate_0__1.remove_j7k0x0_k$(child);
  };
  protoOf(StackPanel$route$1).removeAt_rql1ap_k$ = function (position) {
    this.$$delegate_0__1.removeAt_rql1ap_k$(position);
  };
  protoOf(StackPanel$route$1).removeAll_c84dd9_k$ = function () {
    this.$$delegate_0__1.removeAll_c84dd9_k$();
  };
  protoOf(StackPanel$route$1).disposeAll_hpz7bi_k$ = function () {
    this.$$delegate_0__1.disposeAll_hpz7bi_k$();
  };
  protoOf(StackPanel$route$1).getChildren_97y0zv_k$ = function () {
    return this.$$delegate_0__1.getChildren_97y0zv_k$();
  };
  protoOf(StackPanel$route$1).unaryPlus_76unot_k$ = function (_this__u8e3s4) {
    this.$$delegate_0__1.unaryPlus_76unot_k$(_this__u8e3s4);
  };
  protoOf(StackPanel$route$1).set_parent_58bm75_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_parent_58bm75_k$(_set____db54di);
  };
  protoOf(StackPanel$route$1).get_parent_hy4reb_k$ = function () {
    return this.$$delegate_0__1.get_parent_hy4reb_k$();
  };
  protoOf(StackPanel$route$1).set_visible_w9mvj4_k$ = function (_set____db54di) {
    this.$$delegate_0__1.set_visible_w9mvj4_k$(_set____db54di);
  };
  protoOf(StackPanel$route$1).get_visible_8zfvk9_k$ = function () {
    return this.$$delegate_0__1.get_visible_8zfvk9_k$();
  };
  protoOf(StackPanel$route$1).addCssClass_ul13bg_k$ = function (css) {
    this.$$delegate_0__1.addCssClass_ul13bg_k$(css);
  };
  protoOf(StackPanel$route$1).addCssStyle_4edidd_k$ = function (css) {
    this.$$delegate_0__1.addCssStyle_4edidd_k$(css);
  };
  protoOf(StackPanel$route$1).removeCssClass_3dntip_k$ = function (css) {
    this.$$delegate_0__1.removeCssClass_3dntip_k$(css);
  };
  protoOf(StackPanel$route$1).hasCssClass_hvhhyj_k$ = function (css) {
    return this.$$delegate_0__1.hasCssClass_hvhhyj_k$(css);
  };
  protoOf(StackPanel$route$1).removeCssStyle_l44kc_k$ = function (css) {
    this.$$delegate_0__1.removeCssStyle_l44kc_k$(css);
  };
  protoOf(StackPanel$route$1).addSurroundingCssClass_h2gyzy_k$ = function (css) {
    this.$$delegate_0__1.addSurroundingCssClass_h2gyzy_k$(css);
  };
  protoOf(StackPanel$route$1).addSurroundingCssStyle_pgxj1f_k$ = function (css) {
    this.$$delegate_0__1.addSurroundingCssStyle_pgxj1f_k$(css);
  };
  protoOf(StackPanel$route$1).removeSurroundingCssClass_at56kr_k$ = function (css) {
    this.$$delegate_0__1.removeSurroundingCssClass_at56kr_k$(css);
  };
  protoOf(StackPanel$route$1).removeSurroundingCssStyle_asoqhs_k$ = function (css) {
    this.$$delegate_0__1.removeSurroundingCssStyle_asoqhs_k$(css);
  };
  protoOf(StackPanel$route$1).getAttribute_z2kbho_k$ = function (name) {
    return this.$$delegate_0__1.getAttribute_z2kbho_k$(name);
  };
  protoOf(StackPanel$route$1).setAttribute_gbqua2_k$ = function (name, value) {
    this.$$delegate_0__1.setAttribute_gbqua2_k$(name, value);
  };
  protoOf(StackPanel$route$1).removeAttribute_3xc826_k$ = function (name) {
    this.$$delegate_0__1.removeAttribute_3xc826_k$(name);
  };
  protoOf(StackPanel$route$1).renderVNode_r2mn32_k$ = function () {
    return this.$$delegate_0__1.renderVNode_r2mn32_k$();
  };
  protoOf(StackPanel$route$1).getElement_acounu_k$ = function () {
    return this.$$delegate_0__1.getElement_acounu_k$();
  };
  protoOf(StackPanel$route$1).getElementD_y85vem_k$ = function () {
    return this.$$delegate_0__1.getElementD_y85vem_k$();
  };
  protoOf(StackPanel$route$1).clearParent_npr7gn_k$ = function () {
    this.$$delegate_0__1.clearParent_npr7gn_k$();
  };
  protoOf(StackPanel$route$1).getRoot_18r9uw_k$ = function () {
    return this.$$delegate_0__1.getRoot_18r9uw_k$();
  };
  protoOf(StackPanel$route$1).dispose_3nnxhr_k$ = function () {
    this.$$delegate_0__1.dispose_3nnxhr_k$();
  };
  protoOf(StackPanel$route$1).focus_of07w8_k$ = function () {
    this.$$delegate_0__1.focus_of07w8_k$();
  };
  protoOf(StackPanel$route$1).blur_exr7u1_k$ = function () {
    this.$$delegate_0__1.blur_exr7u1_k$();
  };
  protoOf(StackPanel$route$1).addAfterCreateHook_jnuj9o_k$ = function (hook) {
    return this.$$delegate_0__1.addAfterCreateHook_jnuj9o_k$(hook);
  };
  protoOf(StackPanel$route$1).removeAfterCreateHook_911psh_k$ = function (hook) {
    return this.$$delegate_0__1.removeAfterCreateHook_911psh_k$(hook);
  };
  protoOf(StackPanel$route$1).clearAfterCreateHooks_xde985_k$ = function () {
    this.$$delegate_0__1.clearAfterCreateHooks_xde985_k$();
  };
  protoOf(StackPanel$route$1).addAfterInsertHook_s83sk1_k$ = function (hook) {
    return this.$$delegate_0__1.addAfterInsertHook_s83sk1_k$(hook);
  };
  protoOf(StackPanel$route$1).removeAfterInsertHook_e440cy_k$ = function (hook) {
    return this.$$delegate_0__1.removeAfterInsertHook_e440cy_k$(hook);
  };
  protoOf(StackPanel$route$1).clearAfterInsertHooks_i07bfc_k$ = function () {
    this.$$delegate_0__1.clearAfterInsertHooks_i07bfc_k$();
  };
  protoOf(StackPanel$route$1).addAfterDestroyHook_7cqxpi_k$ = function (hook) {
    return this.$$delegate_0__1.addAfterDestroyHook_7cqxpi_k$(hook);
  };
  protoOf(StackPanel$route$1).removeAfterDestroyHook_8vfkv1_k$ = function (hook) {
    return this.$$delegate_0__1.removeAfterDestroyHook_8vfkv1_k$(hook);
  };
  protoOf(StackPanel$route$1).clearAfterDestroyHooks_h7xzgr_k$ = function () {
    this.$$delegate_0__1.clearAfterDestroyHooks_h7xzgr_k$();
  };
  protoOf(StackPanel$route$1).addBeforeDisposeHook_g5p0gq_k$ = function (hook) {
    return this.$$delegate_0__1.addBeforeDisposeHook_g5p0gq_k$(hook);
  };
  protoOf(StackPanel$route$1).removeBeforeDisposeHook_lzimbb_k$ = function (hook) {
    return this.$$delegate_0__1.removeBeforeDisposeHook_lzimbb_k$(hook);
  };
  protoOf(StackPanel$route$1).clearBeforeDisposeHooks_mx3cfn_k$ = function () {
    this.$$delegate_0__1.clearBeforeDisposeHooks_mx3cfn_k$();
  };
  protoOf(StackPanel$route$1).singleRender_ca7nu0_k$ = function (block) {
    return this.$$delegate_0__1.singleRender_ca7nu0_k$(block);
  };
  protoOf(StackPanel$route$1).singleRenderAsync_haca86_k$ = function (block) {
    this.$$delegate_0__1.singleRenderAsync_haca86_k$(block);
  };
  function StackPanel(activateLast, className, init) {
    Companion_getInstance_9();
    activateLast = activateLast === VOID ? true : activateLast;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    this.activateLast_1 = activateLast;
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = StackPanel$activeIndex$delegate$lambda(this);
    tmp.activeIndex$delegate_1 = (new RefreshDelegateProvider_0(this, -1, refreshFunction)).provideDelegate_z62loi_k$(this, activeIndex$factory());
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.childrenMap_1 = LinkedHashMap_init_$Create$();
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(StackPanel).set_activeIndex_2mqwdj_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.activeIndex$delegate_1, this, activeIndex$factory_0(), _set____db54di);
  };
  protoOf(StackPanel).get_activeIndex_3txs71_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.activeIndex$delegate_1, this, activeIndex$factory_1());
  };
  protoOf(StackPanel).set_activeChild_xxdgo0_k$ = function (value) {
    var tmp0_safe_receiver = this.get_children_4cwbp4_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : indexOf(tmp0_safe_receiver, value);
    this.set_activeIndex_2mqwdj_k$(tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs);
  };
  protoOf(StackPanel).get_activeChild_3xc9tf_k$ = function () {
    var tmp0_safe_receiver = this.get_children_4cwbp4_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_c1px32_k$(this.get_activeIndex_3txs71_k$());
  };
  protoOf(StackPanel).get_childrenMap_v3zq47_k$ = function () {
    return this.childrenMap_1;
  };
  protoOf(StackPanel).childrenVNodes_2corie_k$ = function () {
    var tmp;
    var tmp_0;
    if (!(this.get_children_4cwbp4_k$() == null)) {
      var containsUpper = ensureNotNull(this.get_children_4cwbp4_k$()).get_size_woubt6_k$() - 1 | 0;
      var containsArg = this.get_activeIndex_3txs71_k$();
      tmp_0 = 0 <= containsArg ? containsArg <= containsUpper : false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [ensureNotNull(this.get_children_4cwbp4_k$()).get_c1px32_k$(this.get_activeIndex_3txs71_k$()).renderVNode_r2mn32_k$()];
    } else {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = [];
    }
    return tmp;
  };
  protoOf(StackPanel).add_cxqxwb_k$ = function (panel, route) {
    this.add_rekwpt_k$(panel);
    var _unary__edvuaz = Companion_getInstance_9().counter_1;
    Companion_getInstance_9().counter_1 = _unary__edvuaz + 1 | 0;
    var currentIndex = _unary__edvuaz;
    // Inline function 'kotlin.collections.set' call
    this.childrenMap_1.put_4fpzoq_k$(currentIndex, panel);
    var tmp = RoutingManager_getInstance().getRouter_cqyofz_k$();
    tmp.kvOn_ic624w_k$(route, StackPanel$add$lambda(this, currentIndex));
  };
  protoOf(StackPanel).route_kez6ia_k$ = function (route, builder) {
    builder(new StackPanel$route$1(this, route));
  };
  protoOf(StackPanel).add_rekwpt_k$ = function (child) {
    protoOf(SimplePanel).add_rekwpt_k$.call(this, child);
    if (this.activateLast_1) {
      this.set_activeIndex_2mqwdj_k$(ensureNotNull(this.get_children_4cwbp4_k$()).get_size_woubt6_k$() - 1 | 0);
    } else if (this.get_activeIndex_3txs71_k$() === -1) {
      this.set_activeIndex_2mqwdj_k$(0);
    }
  };
  protoOf(StackPanel).add_t9z7x3_k$ = function (position, child) {
    protoOf(SimplePanel).add_t9z7x3_k$.call(this, position, child);
    if (this.activateLast_1) {
      this.set_activeIndex_2mqwdj_k$(ensureNotNull(this.get_children_4cwbp4_k$()).get_size_woubt6_k$() - 1 | 0);
    } else if (this.get_activeIndex_3txs71_k$() === -1) {
      this.set_activeIndex_2mqwdj_k$(0);
    }
  };
  protoOf(StackPanel).addAll_a94ixq_k$ = function (children) {
    protoOf(SimplePanel).addAll_a94ixq_k$.call(this, children);
    if (this.activateLast_1) {
      this.set_activeIndex_2mqwdj_k$(ensureNotNull(this.get_children_4cwbp4_k$()).get_size_woubt6_k$() - 1 | 0);
    } else if (this.get_activeIndex_3txs71_k$() === -1) {
      this.set_activeIndex_2mqwdj_k$(0);
    }
  };
  protoOf(StackPanel).remove_j7k0x0_k$ = function (child) {
    protoOf(SimplePanel).remove_j7k0x0_k$.call(this, child);
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.childrenMap_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.panel.StackPanel.remove.<anonymous>' call
      if (equals(element.get_value_j01efc_k$(), child)) {
        destination.put_4fpzoq_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
      }
    }
    var tmp0_safe_receiver = firstOrNull(destination.get_keys_wop4xp_k$());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.panel.StackPanel.remove.<anonymous>' call
      this.childrenMap_1.remove_gppy8k_k$(tmp0_safe_receiver);
    }
    if (!(this.get_children_4cwbp4_k$() == null) && this.get_activeIndex_3txs71_k$() > (ensureNotNull(this.get_children_4cwbp4_k$()).get_size_woubt6_k$() - 1 | 0)) {
      this.set_activeIndex_2mqwdj_k$(ensureNotNull(this.get_children_4cwbp4_k$()).get_size_woubt6_k$() - 1 | 0);
    }
  };
  protoOf(StackPanel).removeAt_rql1ap_k$ = function (position) {
    var tmp0_safe_receiver = this.get_children_4cwbp4_k$();
    var child = tmp0_safe_receiver == null ? null : getOrNull(tmp0_safe_receiver, position);
    if (!(child == null)) {
      this.remove_j7k0x0_k$(child);
    }
  };
  protoOf(StackPanel).removeAll_c84dd9_k$ = function () {
    protoOf(SimplePanel).removeAll_c84dd9_k$.call(this);
    this.childrenMap_1.clear_j9egeb_k$();
    if (!(this.get_children_4cwbp4_k$() == null) && this.get_activeIndex_3txs71_k$() > (ensureNotNull(this.get_children_4cwbp4_k$()).get_size_woubt6_k$() - 1 | 0)) {
      this.set_activeIndex_2mqwdj_k$(ensureNotNull(this.get_children_4cwbp4_k$()).get_size_woubt6_k$() - 1 | 0);
    }
  };
  function activeIndex$factory() {
    return getPropertyCallableRef('activeIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.get_activeIndex_3txs71_k$();
    }, function (receiver, value) {
      return receiver.set_activeIndex_2mqwdj_k$(value);
    });
  }
  function activeIndex$factory_0() {
    return getPropertyCallableRef('activeIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.get_activeIndex_3txs71_k$();
    }, function (receiver, value) {
      return receiver.set_activeIndex_2mqwdj_k$(value);
    });
  }
  function activeIndex$factory_1() {
    return getPropertyCallableRef('activeIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.get_activeIndex_3txs71_k$();
    }, function (receiver, value) {
      return receiver.set_activeIndex_2mqwdj_k$(value);
    });
  }
  function VPanel(justify, alignItems, spacing, useWrappers, className, init) {
    justify = justify === VOID ? null : justify;
    alignItems = alignItems === VOID ? null : alignItems;
    spacing = spacing === VOID ? null : spacing;
    useWrappers = useWrappers === VOID ? false : useWrappers;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    FlexPanel.call(this, FlexDirection_COLUMN_getInstance(), null, justify, alignItems, null, spacing, useWrappers, className);
    if (init == null)
      null;
    else
      init(this);
  }
  function vPanel(_this__u8e3s4, justify, alignItems, spacing, useWrappers, className, init) {
    justify = justify === VOID ? null : justify;
    alignItems = alignItems === VOID ? null : alignItems;
    spacing = spacing === VOID ? null : spacing;
    useWrappers = useWrappers === VOID ? false : useWrappers;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var vpanel = new VPanel(justify, alignItems, spacing, useWrappers, className, init);
    _this__u8e3s4.add_rekwpt_k$(vpanel);
    return vpanel;
  }
  function KVRouter() {
  }
  function RoutingManager() {
    RoutingManager_instance = this;
    this.routerFactory_1 = new DummyRouterFactory();
  }
  protoOf(RoutingManager).set_routerFactory_xubq9x_k$ = function (_set____db54di) {
    this.routerFactory_1 = _set____db54di;
  };
  protoOf(RoutingManager).get_routerFactory_bflpp4_k$ = function () {
    return this.routerFactory_1;
  };
  protoOf(RoutingManager).initRouter_f4tktl_k$ = function () {
    this.routerFactory_1.initRouter_f4tktl_k$();
  };
  protoOf(RoutingManager).shutdownRouter_acl6kx_k$ = function () {
    this.routerFactory_1.shutdownRouter_acl6kx_k$();
  };
  protoOf(RoutingManager).getRouter_cqyofz_k$ = function () {
    return this.routerFactory_1.getRouter_cqyofz_k$();
  };
  var RoutingManager_instance;
  function RoutingManager_getInstance() {
    if (RoutingManager_instance == null)
      new RoutingManager();
    return RoutingManager_instance;
  }
  function RouterFactory() {
  }
  function _get_router__abi2am($this) {
    return $this.router_1;
  }
  function DummyRouterFactory() {
    this.router_1 = new DummyRouter();
  }
  protoOf(DummyRouterFactory).getRouter_cqyofz_k$ = function () {
    return this.router_1;
  };
  protoOf(DummyRouterFactory).initRouter_f4tktl_k$ = function () {
  };
  protoOf(DummyRouterFactory).shutdownRouter_acl6kx_k$ = function () {
  };
  function DummyRouter() {
  }
  protoOf(DummyRouter).kvNavigate_rz6nrm_k$ = function (route) {
  };
  protoOf(DummyRouter).kvOn_ic624w_k$ = function (route, handler) {
    return this;
  };
  protoOf(DummyRouter).kvOff_k5foy4_k$ = function (handler) {
  };
  protoOf(DummyRouter).kvResolve_9bjbjl_k$ = function () {
  };
  protoOf(DummyRouter).kvDestroy_oi5mbj_k$ = function () {
  };
  function get_attributesModule() {
    _init_properties_Modules_kt__cej1lh();
    return attributesModule;
  }
  var attributesModule;
  function get_classModule() {
    _init_properties_Modules_kt__cej1lh();
    return classModule;
  }
  var classModule;
  function get_propsModule() {
    _init_properties_Modules_kt__cej1lh();
    return propsModule;
  }
  var propsModule;
  function get_styleModule() {
    _init_properties_Modules_kt__cej1lh();
    return styleModule;
  }
  var styleModule;
  function get_eventListenersModule() {
    _init_properties_Modules_kt__cej1lh();
    return eventListenersModule;
  }
  var eventListenersModule;
  var properties_initialized_Modules_kt_u8e0yf;
  function _init_properties_Modules_kt__cej1lh() {
    if (!properties_initialized_Modules_kt_u8e0yf) {
      properties_initialized_Modules_kt_u8e0yf = true;
      attributesModule = modulesExt.attributesModule;
      classModule = modulesExt.classModule;
      propsModule = modulesExt.propsModule;
      styleModule = modulesExt.styleModule;
      eventListenersModule = modulesExt.eventListenersModule;
    }
  }
  function MutableState() {
  }
  function ObservableState() {
  }
  function ObservableValue$value$$inlined$observable$1($initialValue, this$0) {
    this.this$0__1 = this$0;
    ObservableProperty.call(this, $initialValue);
  }
  protoOf(ObservableValue$value$$inlined$observable$1).afterChange_239zsc_k$ = function (property, oldValue, newValue) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.this$0__1.observers_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.state.ObservableValue.value$delegate.<anonymous>.<anonymous>' call
      destination.add_utx5q5_k$(item);
    }
    var copy = destination;
    var _iterator__ex2g4s_0 = copy.iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'io.kvision.state.ObservableValue.value$delegate.<anonymous>.<anonymous>' call
      if (this.this$0__1.observers_1.contains_aljjnj_k$(element)) {
        element(newValue);
      }
    }
    return Unit_getInstance();
  };
  protoOf(ObservableValue$value$$inlined$observable$1).afterChange_l5zxww_k$ = function (property, oldValue, newValue) {
    var tmp = (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
    return this.afterChange_239zsc_k$(property, tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  function ObservableValue$subscribe$lambda(this$0, $observer) {
    return function () {
      var tmp0 = this$0.observers_1;
      var element = $observer;
      tmp0.remove_cedx0m_k$(element);
      return Unit_getInstance();
    };
  }
  function ObservableValue(value) {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.observers_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.properties.Delegates.observable' call
    Delegates_getInstance();
    tmp_0.value$delegate_1 = new ObservableValue$value$$inlined$observable$1(value, this);
  }
  protoOf(ObservableValue).get_observers_pupmq4_k$ = function () {
    return this.observers_1;
  };
  protoOf(ObservableValue).set_value_v1vabv_k$ = function (_set____db54di) {
    return this.value$delegate_1.setValue_b1qg0h_k$(this, value$factory_5(), _set____db54di);
  };
  protoOf(ObservableValue).get_value_j01efc_k$ = function () {
    return this.value$delegate_1.getValue_4u4kqi_k$(this, value$factory_6());
  };
  protoOf(ObservableValue).getState_wi99ln_k$ = function () {
    return this.get_value_j01efc_k$();
  };
  protoOf(ObservableValue).setState_yqp4r4_k$ = function (state) {
    this.set_value_v1vabv_k$(state);
  };
  protoOf(ObservableValue).setState_otrcj3_k$ = function (state) {
    return this.setState_yqp4r4_k$((state == null ? true : !(state == null)) ? state : THROW_CCE());
  };
  protoOf(ObservableValue).subscribe_i8u9zb_k$ = function (observer) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.observers_1.add_utx5q5_k$(observer);
    observer(this.get_value_j01efc_k$());
    return ObservableValue$subscribe$lambda(this, observer);
  };
  protoOf(ObservableValue).subscribe_go603e_k$ = function (observer) {
    return this.subscribe_i8u9zb_k$(observer);
  };
  function value$factory_5() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_v1vabv_k$(value);
    });
  }
  function value$factory_6() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_v1vabv_k$(value);
    });
  }
  function toStringF(_this__u8e3s4, format) {
    format = format === VOID ? get_KV_DEFAULT_DATE_FORMAT() : format;
    return KVManager_getInstance().get_fecha_8fyu3t_k$().format(_this__u8e3s4, format);
  }
  function toDateF(_this__u8e3s4, format) {
    format = format === VOID ? get_KV_DEFAULT_DATE_FORMAT() : format;
    var result = KVManager_getInstance().get_fecha_8fyu3t_k$().parse(_this__u8e3s4, format);
    return result ? result : new Date();
  }
  function DateSerializer() {
    DateSerializer_instance = this;
    this.descriptor_1 = buildClassSerialDescriptor('kotlin.js.Date', []);
  }
  protoOf(DateSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(DateSerializer).deserialize_sy6x50_k$ = function (decoder) {
    var str = decoder.decodeString_x3hxsx_k$();
    var tmp;
    if (str.length === 10) {
      tmp = toDateF(str + ' 00:00:00');
    } else {
      tmp = toDateF(str);
    }
    return tmp;
  };
  protoOf(DateSerializer).serialize_97gbl1_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(toStringF(value));
  };
  protoOf(DateSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_97gbl1_k$(encoder, value instanceof Date ? value : THROW_CCE());
  };
  var DateSerializer_instance;
  function DateSerializer_getInstance() {
    if (DateSerializer_instance == null)
      new DateSerializer();
    return DateSerializer_instance;
  }
  function obj(init) {
    var tmp = {};
    // Inline function 'kotlin.apply' call
    var this_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    init(this_0);
    return this_0;
  }
  function obj_0(init) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    init(this_0);
    return this_0;
  }
  function delete_0(thing, key) {
    delete(thing[key]);
  }
  function createInstance(_this__u8e3s4, args) {
    var jsClassConstructor = _this__u8e3s4;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = plus_1(listOf_0(null), args);
    var argsArray = copyToArray(this_0);
    // Inline function 'kotlin.js.unsafeCast' call
    return new (Function.prototype.bind.apply(jsClassConstructor, argsArray))();
  }
  function Serialization$plain$lambda($this$Json) {
    $this$Json.set_serializersModule_6xge6s_k$(serializersModuleOf(getKClass(Date), DateSerializer_getInstance()));
    return Unit_getInstance();
  }
  function Serialization() {
    Serialization_instance = this;
    var tmp = this;
    tmp.plain_1 = Json(VOID, Serialization$plain$lambda);
    this.customConfiguration_1 = null;
  }
  protoOf(Serialization).get_plain_iwxfa9_k$ = function () {
    return this.plain_1;
  };
  protoOf(Serialization).set_customConfiguration_nnkh1x_k$ = function (_set____db54di) {
    this.customConfiguration_1 = _set____db54di;
  };
  protoOf(Serialization).get_customConfiguration_clwja4_k$ = function () {
    return this.customConfiguration_1;
  };
  protoOf(Serialization).toObj_ftbqbx_k$ = function (_this__u8e3s4, serializer) {
    var tmp = JSON;
    var tmp0_elvis_lhs = this.customConfiguration_1;
    return tmp.parse((tmp0_elvis_lhs == null ? this.plain_1 : tmp0_elvis_lhs).encodeToString_k0apqx_k$(serializer, _this__u8e3s4));
  };
  var Serialization_instance;
  function Serialization_getInstance() {
    if (Serialization_instance == null)
      new Serialization();
    return Serialization_instance;
  }
  function on(target) {
    var obj = {};
    obj['self'] = target;
    return obj;
  }
  function hooks() {
    return {};
  }
  function snClasses(pairs) {
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.utils.snClasses.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pairs.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.utils.snClasses.<anonymous>.<anonymous>' call
      var key = element.component1_7eebsc_k$();
      var value = element.component2_7eebsb_k$();
      this_0[key] = value;
    }
    return this_0;
  }
  function emptyOn() {
    return {};
  }
  function snAttrs(pairs) {
    // Inline function 'io.kvision.utils.obj' call
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'io.kvision.utils.snAttrs.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = pairs.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'io.kvision.utils.snAttrs.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = element.get_value_j01efc_k$();
      this_0[key] = value;
    }
    return this_0;
  }
  function snOpt(block) {
    // Inline function 'io.kvision.utils.vNodeData' call
    var tmp$ret$0 = {};
    return apply$ref_11(tmp$ret$0)(block);
  }
  function vNodeData() {
    return {};
  }
  function apply$ref_11($boundThis) {
    var l = function (p0) {
      return apply($boundThis, p0);
    };
    l.callableName = 'apply';
    return l;
  }
  function get_auto() {
    _init_properties_Utils_kt__jo07cx();
    return auto;
  }
  var auto;
  function get_normal() {
    _init_properties_Utils_kt__jo07cx();
    return normal;
  }
  var normal;
  function get_hex() {
    _init_properties_Utils_kt__jo07cx();
    return hex;
  }
  var hex;
  function get_set(_this__u8e3s4) {
    _init_properties_Utils_kt__jo07cx();
    return toSet_0(split_0(_this__u8e3s4, [' ']));
  }
  function get_px(_this__u8e3s4) {
    _init_properties_Utils_kt__jo07cx();
    return new Pair(_this__u8e3s4, UNIT_px_getInstance());
  }
  function get_perc(_this__u8e3s4) {
    _init_properties_Utils_kt__jo07cx();
    return new Pair(_this__u8e3s4, UNIT_perc_getInstance());
  }
  function get_mutableSet(_this__u8e3s4) {
    _init_properties_Utils_kt__jo07cx();
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = null;
    } else {
      // Inline function 'io.kvision.utils.mutableSet' call
      tmp = toMutableSet(split_0(_this__u8e3s4, [' ']));
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp_0 = LinkedHashSet_init_$Create$();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function toHexString(_this__u8e3s4) {
    _init_properties_Utils_kt__jo07cx();
    var result = '';
    var num = _this__u8e3s4;
    var inductionVariable = 0;
    if (inductionVariable < 6)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = get_hex()[num & 15] + result;
        num = num >> 4;
      }
       while (inductionVariable < 6);
    return result;
  }
  function asString(_this__u8e3s4) {
    _init_properties_Utils_kt__jo07cx();
    switch (_this__u8e3s4.get_second_jf7fjx_k$().get_ordinal_ip24qg_k$()) {
      case 14:
        return 'auto';
      case 15:
        return 'normal';
      default:
        return toString_0(_this__u8e3s4.get_first_irdx8n_k$()) + _this__u8e3s4.get_second_jf7fjx_k$().get_unit_tlhtb2_k$();
    }
  }
  function get_mutableSet_0(_this__u8e3s4) {
    _init_properties_Utils_kt__jo07cx();
    return toMutableSet(split_0(_this__u8e3s4, [' ']));
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      auto = new Pair(0, UNIT_auto_getInstance());
      normal = new Pair(0, UNIT_normal_getInstance());
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    }
  }
  //region block: post-declaration
  protoOf(AttributeSetBuilderImpl).add$default_4n2esg_k$ = add$default;
  protoOf(AttributeSetBuilderImpl).add_qyhf6x_k$ = add;
  protoOf(AttributeSetBuilderImpl).addAll_h65jxg_k$ = addAll;
  protoOf(ClassSetBuilderImpl).add_9rsi26_k$ = add_0;
  protoOf(LazyCache).clearOn_v5z2ar_k$ = clearOn;
  protoOf(Widget).focus_of07w8_k$ = focus;
  protoOf(Widget).blur_exr7u1_k$ = blur;
  protoOf(SimplePanel).invoke_hkydh0_k$ = invoke;
  protoOf(SimplePanel).unaryPlus_76unot_k$ = unaryPlus;
  protoOf(Tag).set_templateData_amf8aa_k$ = set_templateData;
  protoOf(Tag).get_templateData_blsneb_k$ = get_templateData;
  protoOf(CheckBox).setValue_caf2zk_k$ = setValue_0;
  protoOf(CheckBox).getValue_wjkqt7_k$ = getValue;
  protoOf(CheckBox).getValueAsString_j4qkse_k$ = getValueAsString;
  protoOf(CheckBox).set_disabled_rhu918_k$ = set_disabled;
  protoOf(CheckBox).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(CheckBox).set_size_duu2i7_k$ = set_size;
  protoOf(CheckBox).get_size_woubt6_k$ = get_size;
  protoOf(CheckBox).set_name_wkmnld_k$ = set_name;
  protoOf(CheckBox).get_name_woqyms_k$ = get_name;
  protoOf(CheckBox).set_validationStatus_hx0grd_k$ = set_validationStatus;
  protoOf(CheckBox).get_validationStatus_he6hkc_k$ = get_validationStatus;
  protoOf(CheckBox).set_validatorError_mn8p6k_k$ = set_validatorError;
  protoOf(CheckBox).get_validatorError_og9qg1_k$ = get_validatorError;
  protoOf(AbstractText).setValue_caf2zk_k$ = setValue_2;
  protoOf(AbstractText).getValueAsString_j4qkse_k$ = getValueAsString_1;
  protoOf(AbstractText).getValue_wjkqt7_k$ = getValue_0;
  protoOf(AbstractText).set_disabled_rhu918_k$ = set_disabled;
  protoOf(AbstractText).get_disabled_rbmjej_k$ = get_disabled;
  protoOf(AbstractText).set_size_duu2i7_k$ = set_size;
  protoOf(AbstractText).get_size_woubt6_k$ = get_size;
  protoOf(AbstractText).set_name_wkmnld_k$ = set_name;
  protoOf(AbstractText).get_name_woqyms_k$ = get_name;
  protoOf(AbstractText).set_validationStatus_hx0grd_k$ = set_validationStatus;
  protoOf(AbstractText).get_validationStatus_he6hkc_k$ = get_validationStatus;
  protoOf(AbstractText).set_validatorError_mn8p6k_k$ = set_validatorError;
  protoOf(AbstractText).get_validatorError_og9qg1_k$ = get_validatorError;
  protoOf(AbstractText).styleForVerticalFormPanel_h0pd36_k$ = styleForVerticalFormPanel;
  protoOf(AbstractText).styleForInlineFormPanel_1ffnb3_k$ = styleForInlineFormPanel;
  protoOf(I18n).tr_8q01fg_k$ = tr;
  protoOf(I18n).ntr_8gt1sk_k$ = ntr;
  protoOf(I18n).trans_c4o9pq_k$ = trans;
  protoOf(I18n).trans_netp7j_k$ = trans_0;
  protoOf(SimpleI18nManager).tr_8q01fg_k$ = tr;
  protoOf(SimpleI18nManager).ntr_8gt1sk_k$ = ntr;
  protoOf(SimpleI18nManager).trans_c4o9pq_k$ = trans;
  protoOf(SimpleI18nManager).trans_netp7j_k$ = trans_0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AlignContent_CENTER_getInstance;
  _.$_$.b = AlignItems_CENTER_getInstance;
  _.$_$.c = AlignItems_START_getInstance;
  _.$_$.d = BorderStyle_NONE_getInstance;
  _.$_$.e = Col_DARKSLATEGRAY_getInstance;
  _.$_$.f = Display_BLOCK_getInstance;
  _.$_$.g = Display_FLEX_getInstance;
  _.$_$.h = FlexWrap_WRAP_getInstance;
  _.$_$.i = FontWeight_BOLD_getInstance;
  _.$_$.j = FontWeight_LIGHTER_getInstance;
  _.$_$.k = FontWeight_NORMAL_getInstance;
  _.$_$.l = JustifyContent_SPACEBETWEEN_getInstance;
  _.$_$.m = ListStyleType_NONE_getInstance;
  _.$_$.n = Overflow_HIDDEN_getInstance;
  _.$_$.o = TextAlign_CENTER_getInstance;
  _.$_$.p = TextAlign_LEFT_getInstance;
  _.$_$.q = TextOverflow_ELLIPSIS_getInstance;
  _.$_$.r = WhiteSpace_NOWRAP_getInstance;
  _.$_$.s = ButtonStyle_LIGHT_getInstance;
  _.$_$.t = ButtonStyle_PRIMARY_getInstance;
  _.$_$.u = ButtonType_BUTTON_getInstance;
  _.$_$.v = ButtonType_SUBMIT_getInstance;
  _.$_$.w = ImageShape_CIRCLE_getInstance;
  _.$_$.x = InputType_NUMBER_getInstance;
  _.$_$.y = TAG_FORM_getInstance;
  _.$_$.z = TAG_H6_getInstance;
  _.$_$.a1 = ContainerType_FLUID_getInstance;
  _.$_$.b1 = add$default;
  _.$_$.c1 = WidgetRefreshDelegate__getValue_impl_lmjmy2;
  _.$_$.d1 = WidgetRefreshDelegate__setValue_impl_8tnbha;
  _.$_$.e1 = Companion_getInstance_0;
  _.$_$.f1 = MaskManager_getInstance;
  _.$_$.g1 = I18n_getInstance;
  _.$_$.h1 = Companion_getInstance_8;
  _.$_$.i1 = RoutingManager_getInstance;
  _.$_$.j1 = CoreModule_getInstance;
  _.$_$.k1 = addAll;
  _.$_$.l1 = add;
  _.$_$.m1 = AttributeSetBuilder;
  _.$_$.n1 = Background;
  _.$_$.o1 = Border;
  _.$_$.p1 = add_0;
  _.$_$.q1 = ClassSetBuilder;
  _.$_$.r1 = Container;
  _.$_$.s1 = CssClass;
  _.$_$.t1 = DomAttribute;
  _.$_$.u1 = ListStyle;
  _.$_$.v1 = RefreshDelegateProvider_0;
  _.$_$.w1 = checkBox;
  _.$_$.x1 = MaskFactory;
  _.$_$.y1 = MaskOptions;
  _.$_$.z1 = Mask;
  _.$_$.a2 = Password;
  _.$_$.b2 = Text;
  _.$_$.c2 = textInput;
  _.$_$.d2 = text;
  _.$_$.e2 = FormPanel;
  _.$_$.f2 = Button;
  _.$_$.g2 = H3;
  _.$_$.h2 = Link;
  _.$_$.i2 = Tag;
  _.$_$.j2 = button;
  _.$_$.k2 = div;
  _.$_$.l2 = h1;
  _.$_$.m2 = h2;
  _.$_$.n2 = h3;
  _.$_$.o2 = h4;
  _.$_$.p2 = h5;
  _.$_$.q2 = h6;
  _.$_$.r2 = icon;
  _.$_$.s2 = image;
  _.$_$.t2 = li;
  _.$_$.u2 = ol;
  _.$_$.v2 = p;
  _.$_$.w2 = span;
  _.$_$.x2 = ul;
  _.$_$.y2 = ntr;
  _.$_$.z2 = trans_0;
  _.$_$.a3 = trans;
  _.$_$.b3 = tr;
  _.$_$.c3 = I18nManager;
  _.$_$.d3 = SimplePanel;
  _.$_$.e3 = VPanel;
  _.$_$.f3 = gridPanel;
  _.$_$.g3 = hPanel;
  _.$_$.h3 = root;
  _.$_$.i3 = stackPanel;
  _.$_$.j3 = vPanel;
  _.$_$.k3 = KVRouter;
  _.$_$.l3 = RouterFactory;
  _.$_$.m3 = ObservableValue;
  _.$_$.n3 = get_auto;
  _.$_$.o3 = createInstance;
  _.$_$.p3 = get_perc;
  _.$_$.q3 = get_px;
  _.$_$.r3 = Application;
  _.$_$.s3 = ModuleInitializer;
  _.$_$.t3 = startApplication;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision.js.map
