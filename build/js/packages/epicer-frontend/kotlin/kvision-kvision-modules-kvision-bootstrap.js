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
  var protoOf = kotlin_kotlin.$_$.jb;
  var ModuleInitializer = kotlin_io_kvision_kvision.$_$.g3;
  var initMetadataForObject = kotlin_kotlin.$_$.la;
  var VOID = kotlin_kotlin.$_$.f;
  var THROW_IAE = kotlin_kotlin.$_$.we;
  var enumEntries = kotlin_kotlin.$_$.l9;
  var Unit_getInstance = kotlin_kotlin.$_$.d5;
  var Enum = kotlin_kotlin.$_$.he;
  var CssClass = kotlin_io_kvision_kvision.$_$.m1;
  var initMetadataForClass = kotlin_kotlin.$_$.ga;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ha;
  var SimplePanel = kotlin_io_kvision_kvision.$_$.t2;
  var Display_BLOCK_getInstance = kotlin_io_kvision_kvision.$_$.e;
  var get_auto = kotlin_io_kvision_kvision.$_$.c3;
  var Companion_getInstance = kotlin_io_kvision_kvision.$_$.b1;
  var numberToInt = kotlin_kotlin.$_$.gb;
  var get_px = kotlin_io_kvision_kvision.$_$.e3;
  var DomAttribute = kotlin_io_kvision_kvision.$_$.n1;
  var ButtonStyle_PRIMARY_getInstance = kotlin_io_kvision_kvision.$_$.o;
  var WidgetRefreshDelegate__setValue_impl_8tnbha = kotlin_io_kvision_kvision.$_$.x;
  var WidgetRefreshDelegate__getValue_impl_lmjmy2 = kotlin_io_kvision_kvision.$_$.w;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var Link = kotlin_io_kvision_kvision.$_$.a2;
  var RefreshDelegateProvider = kotlin_io_kvision_kvision.$_$.o1;
  var ButtonStyle_LIGHT_getInstance = kotlin_io_kvision_kvision.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.ve;
  var KMutableProperty1 = kotlin_kotlin.$_$.yb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.da;
  var add = kotlin_io_kvision_kvision.$_$.j1;
  var ClassSetBuilder = kotlin_io_kvision_kvision.$_$.k1;
  var add$default = kotlin_io_kvision_kvision.$_$.v;
  var add_0 = kotlin_io_kvision_kvision.$_$.f1;
  var addAll = kotlin_io_kvision_kvision.$_$.e1;
  var AttributeSetBuilder = kotlin_io_kvision_kvision.$_$.g1;
  var Button = kotlin_io_kvision_kvision.$_$.y1;
  var ButtonType_BUTTON_getInstance = kotlin_io_kvision_kvision.$_$.p;
  var Tag = kotlin_io_kvision_kvision.$_$.b2;
  var TAG_H6_getInstance = kotlin_io_kvision_kvision.$_$.t;
  var TAG_FORM_getInstance = kotlin_io_kvision_kvision.$_$.s;
  var ContainerType_FLUID_getInstance = kotlin_io_kvision_kvision.$_$.u;
  var equals = kotlin_kotlin.$_$.z9;
  var ensureNotNull = kotlin_kotlin.$_$.nf;
  var span = kotlin_io_kvision_kvision.$_$.n2;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(BootstrapCssModule, 'BootstrapCssModule', VOID, VOID, [ModuleInitializer]);
  initMetadataForObject(BootstrapModule, 'BootstrapModule', VOID, VOID, [ModuleInitializer]);
  initMetadataForClass(BsBgColor, 'BsBgColor', VOID, Enum, [CssClass, Enum]);
  initMetadataForClass(BsBorder, 'BsBorder', VOID, Enum, [CssClass, Enum]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ContextMenu, 'ContextMenu', ContextMenu, SimplePanel);
  initMetadataForClass(AutoClose, 'AutoClose', VOID, Enum, [DomAttribute, Enum]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DropDown, 'DropDown', VOID, SimplePanel);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(DD, 'DD', VOID, Enum);
  initMetadataForClass(DropDownButton$buildClassSet$1, VOID, VOID, VOID, [ClassSetBuilder]);
  initMetadataForClass(DropDownButton$buildAttributeSet$1, VOID, VOID, VOID, [AttributeSetBuilder]);
  initMetadataForClass(DropDownButton, 'DropDownButton', VOID, Button);
  initMetadataForClass(DropDownMenu, 'DropDownMenu', VOID, SimplePanel);
  initMetadataForClass(Header, 'Header', Header, Tag);
  initMetadataForClass(Separator, 'Separator', Separator, SimplePanel);
  initMetadataForClass(Nav, 'Nav', Nav, SimplePanel);
  initMetadataForClass(NavForm, 'NavForm', NavForm, Tag);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Navbar, 'Navbar', Navbar, SimplePanel);
  initMetadataForClass(NavbarExpand, 'NavbarExpand', VOID, Enum, [CssClass, Enum]);
  initMetadataForClass(NavbarType, 'NavbarType', VOID, Enum, [CssClass, Enum]);
  initMetadataForClass(NavbarColor, 'NavbarColor', VOID, Enum);
  initMetadataForClass(NavbarButton, 'NavbarButton', VOID, SimplePanel);
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
  var BsBgColor_PRIMARY_instance;
  var BsBgColor_PRIMARYSUBTLE_instance;
  var BsBgColor_SECONDARY_instance;
  var BsBgColor_SECONDARYSUBTLE_instance;
  var BsBgColor_SUCCESS_instance;
  var BsBgColor_SUCCESSSUBTLE_instance;
  var BsBgColor_DANGER_instance;
  var BsBgColor_DANGERSUBTLE_instance;
  var BsBgColor_WARNING_instance;
  var BsBgColor_WARNINGSUBTLE_instance;
  var BsBgColor_INFO_instance;
  var BsBgColor_INFOSUBTLE_instance;
  var BsBgColor_LIGHT_instance;
  var BsBgColor_LIGHTSUBTLE_instance;
  var BsBgColor_DARK_instance;
  var BsBgColor_DARKSUBTLE_instance;
  var BsBgColor_BODY_instance;
  var BsBgColor_BODYSECONDARY_instance;
  var BsBgColor_BODYTERTIARY_instance;
  var BsBgColor_BLACK_instance;
  var BsBgColor_WHITE_instance;
  var BsBgColor_TRANSPARENT_instance;
  function values() {
    return [BsBgColor_PRIMARY_getInstance(), BsBgColor_PRIMARYSUBTLE_getInstance(), BsBgColor_SECONDARY_getInstance(), BsBgColor_SECONDARYSUBTLE_getInstance(), BsBgColor_SUCCESS_getInstance(), BsBgColor_SUCCESSSUBTLE_getInstance(), BsBgColor_DANGER_getInstance(), BsBgColor_DANGERSUBTLE_getInstance(), BsBgColor_WARNING_getInstance(), BsBgColor_WARNINGSUBTLE_getInstance(), BsBgColor_INFO_getInstance(), BsBgColor_INFOSUBTLE_getInstance(), BsBgColor_LIGHT_getInstance(), BsBgColor_LIGHTSUBTLE_getInstance(), BsBgColor_DARK_getInstance(), BsBgColor_DARKSUBTLE_getInstance(), BsBgColor_BODY_getInstance(), BsBgColor_BODYSECONDARY_getInstance(), BsBgColor_BODYTERTIARY_getInstance(), BsBgColor_BLACK_getInstance(), BsBgColor_WHITE_getInstance(), BsBgColor_TRANSPARENT_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'PRIMARY':
        return BsBgColor_PRIMARY_getInstance();
      case 'PRIMARYSUBTLE':
        return BsBgColor_PRIMARYSUBTLE_getInstance();
      case 'SECONDARY':
        return BsBgColor_SECONDARY_getInstance();
      case 'SECONDARYSUBTLE':
        return BsBgColor_SECONDARYSUBTLE_getInstance();
      case 'SUCCESS':
        return BsBgColor_SUCCESS_getInstance();
      case 'SUCCESSSUBTLE':
        return BsBgColor_SUCCESSSUBTLE_getInstance();
      case 'DANGER':
        return BsBgColor_DANGER_getInstance();
      case 'DANGERSUBTLE':
        return BsBgColor_DANGERSUBTLE_getInstance();
      case 'WARNING':
        return BsBgColor_WARNING_getInstance();
      case 'WARNINGSUBTLE':
        return BsBgColor_WARNINGSUBTLE_getInstance();
      case 'INFO':
        return BsBgColor_INFO_getInstance();
      case 'INFOSUBTLE':
        return BsBgColor_INFOSUBTLE_getInstance();
      case 'LIGHT':
        return BsBgColor_LIGHT_getInstance();
      case 'LIGHTSUBTLE':
        return BsBgColor_LIGHTSUBTLE_getInstance();
      case 'DARK':
        return BsBgColor_DARK_getInstance();
      case 'DARKSUBTLE':
        return BsBgColor_DARKSUBTLE_getInstance();
      case 'BODY':
        return BsBgColor_BODY_getInstance();
      case 'BODYSECONDARY':
        return BsBgColor_BODYSECONDARY_getInstance();
      case 'BODYTERTIARY':
        return BsBgColor_BODYTERTIARY_getInstance();
      case 'BLACK':
        return BsBgColor_BLACK_getInstance();
      case 'WHITE':
        return BsBgColor_WHITE_getInstance();
      case 'TRANSPARENT':
        return BsBgColor_TRANSPARENT_getInstance();
      default:
        BsBgColor_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BsBgColor_entriesInitialized;
  function BsBgColor_initEntries() {
    if (BsBgColor_entriesInitialized)
      return Unit_getInstance();
    BsBgColor_entriesInitialized = true;
    BsBgColor_PRIMARY_instance = new BsBgColor('PRIMARY', 0, 'bg-primary');
    BsBgColor_PRIMARYSUBTLE_instance = new BsBgColor('PRIMARYSUBTLE', 1, 'bg-primary-subtle');
    BsBgColor_SECONDARY_instance = new BsBgColor('SECONDARY', 2, 'bg-secondary');
    BsBgColor_SECONDARYSUBTLE_instance = new BsBgColor('SECONDARYSUBTLE', 3, 'bg-secondary-subtle');
    BsBgColor_SUCCESS_instance = new BsBgColor('SUCCESS', 4, 'bg-success');
    BsBgColor_SUCCESSSUBTLE_instance = new BsBgColor('SUCCESSSUBTLE', 5, 'bg-success-subtle');
    BsBgColor_DANGER_instance = new BsBgColor('DANGER', 6, 'bg-danger');
    BsBgColor_DANGERSUBTLE_instance = new BsBgColor('DANGERSUBTLE', 7, 'bg-danger-subtle');
    BsBgColor_WARNING_instance = new BsBgColor('WARNING', 8, 'bg-warning');
    BsBgColor_WARNINGSUBTLE_instance = new BsBgColor('WARNINGSUBTLE', 9, 'bg-warning-subtle');
    BsBgColor_INFO_instance = new BsBgColor('INFO', 10, 'bg-info');
    BsBgColor_INFOSUBTLE_instance = new BsBgColor('INFOSUBTLE', 11, 'bg-info-subtle');
    BsBgColor_LIGHT_instance = new BsBgColor('LIGHT', 12, 'bg-light');
    BsBgColor_LIGHTSUBTLE_instance = new BsBgColor('LIGHTSUBTLE', 13, 'bg-light-subtle');
    BsBgColor_DARK_instance = new BsBgColor('DARK', 14, 'bg-dark');
    BsBgColor_DARKSUBTLE_instance = new BsBgColor('DARKSUBTLE', 15, 'bg-dark-subtle');
    BsBgColor_BODY_instance = new BsBgColor('BODY', 16, 'bg-body');
    BsBgColor_BODYSECONDARY_instance = new BsBgColor('BODYSECONDARY', 17, 'bg-body-secondary');
    BsBgColor_BODYTERTIARY_instance = new BsBgColor('BODYTERTIARY', 18, 'bg-body-tertiary');
    BsBgColor_BLACK_instance = new BsBgColor('BLACK', 19, 'bg-black');
    BsBgColor_WHITE_instance = new BsBgColor('WHITE', 20, 'bg-white');
    BsBgColor_TRANSPARENT_instance = new BsBgColor('TRANSPARENT', 21, 'bg-transparent');
  }
  var $ENTRIES;
  function BsBgColor(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(BsBgColor).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function addBsBorder(_this__u8e3s4, bsBorder) {
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = bsBorder.length;
    while (inductionVariable < last) {
      var element = bsBorder[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.kvision.core.addBsBorder.<anonymous>' call
      _this__u8e3s4.addCssClass_ul13bg_k$(element.className_1);
    }
  }
  var BsBorder_BORDER_instance;
  var BsBorder_BORDERTOP_instance;
  var BsBorder_BORDERBOTTOM_instance;
  var BsBorder_BORDERRIGHT_instance;
  var BsBorder_BORDERLEFT_instance;
  var BsBorder_BORDER_0_instance;
  var BsBorder_BORDERTOP_0_instance;
  var BsBorder_BORDERBOTTOM_0_instance;
  var BsBorder_BORDERRIGHT_0_instance;
  var BsBorder_BORDERLEFT_0_instance;
  var BsBorder_BORDERPRIMARY_instance;
  var BsBorder_BORDERPRIMARYSUBTLE_instance;
  var BsBorder_BORDERSECONDARY_instance;
  var BsBorder_BORDERSECONDARYSUBTLE_instance;
  var BsBorder_BORDERSUCCESS_instance;
  var BsBorder_BORDERSUCCESSSUBTLE_instance;
  var BsBorder_BORDERDANGER_instance;
  var BsBorder_BORDERDANGERSUBTLE_instance;
  var BsBorder_BORDERWARNING_instance;
  var BsBorder_BORDERWARNINGSUBTLE_instance;
  var BsBorder_BORDERINFO_instance;
  var BsBorder_BORDERINFOSUBTLE_instance;
  var BsBorder_BORDERLIGHT_instance;
  var BsBorder_BORDERLIGHTSUBTLE_instance;
  var BsBorder_BORDERDARK_instance;
  var BsBorder_BORDERDARKSUBTLE_instance;
  var BsBorder_BORDERWHITE_instance;
  var BsBorder_BORDERBLACK_instance;
  function values_0() {
    return [BsBorder_BORDER_getInstance(), BsBorder_BORDERTOP_getInstance(), BsBorder_BORDERBOTTOM_getInstance(), BsBorder_BORDERRIGHT_getInstance(), BsBorder_BORDERLEFT_getInstance(), BsBorder_BORDER_0_getInstance(), BsBorder_BORDERTOP_0_getInstance(), BsBorder_BORDERBOTTOM_0_getInstance(), BsBorder_BORDERRIGHT_0_getInstance(), BsBorder_BORDERLEFT_0_getInstance(), BsBorder_BORDERPRIMARY_getInstance(), BsBorder_BORDERPRIMARYSUBTLE_getInstance(), BsBorder_BORDERSECONDARY_getInstance(), BsBorder_BORDERSECONDARYSUBTLE_getInstance(), BsBorder_BORDERSUCCESS_getInstance(), BsBorder_BORDERSUCCESSSUBTLE_getInstance(), BsBorder_BORDERDANGER_getInstance(), BsBorder_BORDERDANGERSUBTLE_getInstance(), BsBorder_BORDERWARNING_getInstance(), BsBorder_BORDERWARNINGSUBTLE_getInstance(), BsBorder_BORDERINFO_getInstance(), BsBorder_BORDERINFOSUBTLE_getInstance(), BsBorder_BORDERLIGHT_getInstance(), BsBorder_BORDERLIGHTSUBTLE_getInstance(), BsBorder_BORDERDARK_getInstance(), BsBorder_BORDERDARKSUBTLE_getInstance(), BsBorder_BORDERWHITE_getInstance(), BsBorder_BORDERBLACK_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'BORDER':
        return BsBorder_BORDER_getInstance();
      case 'BORDERTOP':
        return BsBorder_BORDERTOP_getInstance();
      case 'BORDERBOTTOM':
        return BsBorder_BORDERBOTTOM_getInstance();
      case 'BORDERRIGHT':
        return BsBorder_BORDERRIGHT_getInstance();
      case 'BORDERLEFT':
        return BsBorder_BORDERLEFT_getInstance();
      case 'BORDER_0':
        return BsBorder_BORDER_0_getInstance();
      case 'BORDERTOP_0':
        return BsBorder_BORDERTOP_0_getInstance();
      case 'BORDERBOTTOM_0':
        return BsBorder_BORDERBOTTOM_0_getInstance();
      case 'BORDERRIGHT_0':
        return BsBorder_BORDERRIGHT_0_getInstance();
      case 'BORDERLEFT_0':
        return BsBorder_BORDERLEFT_0_getInstance();
      case 'BORDERPRIMARY':
        return BsBorder_BORDERPRIMARY_getInstance();
      case 'BORDERPRIMARYSUBTLE':
        return BsBorder_BORDERPRIMARYSUBTLE_getInstance();
      case 'BORDERSECONDARY':
        return BsBorder_BORDERSECONDARY_getInstance();
      case 'BORDERSECONDARYSUBTLE':
        return BsBorder_BORDERSECONDARYSUBTLE_getInstance();
      case 'BORDERSUCCESS':
        return BsBorder_BORDERSUCCESS_getInstance();
      case 'BORDERSUCCESSSUBTLE':
        return BsBorder_BORDERSUCCESSSUBTLE_getInstance();
      case 'BORDERDANGER':
        return BsBorder_BORDERDANGER_getInstance();
      case 'BORDERDANGERSUBTLE':
        return BsBorder_BORDERDANGERSUBTLE_getInstance();
      case 'BORDERWARNING':
        return BsBorder_BORDERWARNING_getInstance();
      case 'BORDERWARNINGSUBTLE':
        return BsBorder_BORDERWARNINGSUBTLE_getInstance();
      case 'BORDERINFO':
        return BsBorder_BORDERINFO_getInstance();
      case 'BORDERINFOSUBTLE':
        return BsBorder_BORDERINFOSUBTLE_getInstance();
      case 'BORDERLIGHT':
        return BsBorder_BORDERLIGHT_getInstance();
      case 'BORDERLIGHTSUBTLE':
        return BsBorder_BORDERLIGHTSUBTLE_getInstance();
      case 'BORDERDARK':
        return BsBorder_BORDERDARK_getInstance();
      case 'BORDERDARKSUBTLE':
        return BsBorder_BORDERDARKSUBTLE_getInstance();
      case 'BORDERWHITE':
        return BsBorder_BORDERWHITE_getInstance();
      case 'BORDERBLACK':
        return BsBorder_BORDERBLACK_getInstance();
      default:
        BsBorder_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var BsBorder_entriesInitialized;
  function BsBorder_initEntries() {
    if (BsBorder_entriesInitialized)
      return Unit_getInstance();
    BsBorder_entriesInitialized = true;
    BsBorder_BORDER_instance = new BsBorder('BORDER', 0, 'border');
    BsBorder_BORDERTOP_instance = new BsBorder('BORDERTOP', 1, 'border-top');
    BsBorder_BORDERBOTTOM_instance = new BsBorder('BORDERBOTTOM', 2, 'border-bottom');
    BsBorder_BORDERRIGHT_instance = new BsBorder('BORDERRIGHT', 3, 'border-end');
    BsBorder_BORDERLEFT_instance = new BsBorder('BORDERLEFT', 4, 'border-start');
    BsBorder_BORDER_0_instance = new BsBorder('BORDER_0', 5, 'border-0');
    BsBorder_BORDERTOP_0_instance = new BsBorder('BORDERTOP_0', 6, 'border-top-0');
    BsBorder_BORDERBOTTOM_0_instance = new BsBorder('BORDERBOTTOM_0', 7, 'border-bottom-0');
    BsBorder_BORDERRIGHT_0_instance = new BsBorder('BORDERRIGHT_0', 8, 'border-end-0');
    BsBorder_BORDERLEFT_0_instance = new BsBorder('BORDERLEFT_0', 9, 'border-start-0');
    BsBorder_BORDERPRIMARY_instance = new BsBorder('BORDERPRIMARY', 10, 'border-primary');
    BsBorder_BORDERPRIMARYSUBTLE_instance = new BsBorder('BORDERPRIMARYSUBTLE', 11, 'border-primary-subtle');
    BsBorder_BORDERSECONDARY_instance = new BsBorder('BORDERSECONDARY', 12, 'border-secondary');
    BsBorder_BORDERSECONDARYSUBTLE_instance = new BsBorder('BORDERSECONDARYSUBTLE', 13, 'border-secondary-subtle');
    BsBorder_BORDERSUCCESS_instance = new BsBorder('BORDERSUCCESS', 14, 'border-success');
    BsBorder_BORDERSUCCESSSUBTLE_instance = new BsBorder('BORDERSUCCESSSUBTLE', 15, 'border-success-subtle');
    BsBorder_BORDERDANGER_instance = new BsBorder('BORDERDANGER', 16, 'border-danger');
    BsBorder_BORDERDANGERSUBTLE_instance = new BsBorder('BORDERDANGERSUBTLE', 17, 'border-danger-subtle');
    BsBorder_BORDERWARNING_instance = new BsBorder('BORDERWARNING', 18, 'border-warning');
    BsBorder_BORDERWARNINGSUBTLE_instance = new BsBorder('BORDERWARNINGSUBTLE', 19, 'border-warning-subtle');
    BsBorder_BORDERINFO_instance = new BsBorder('BORDERINFO', 20, 'border-info');
    BsBorder_BORDERINFOSUBTLE_instance = new BsBorder('BORDERINFOSUBTLE', 21, 'border-info-subtle');
    BsBorder_BORDERLIGHT_instance = new BsBorder('BORDERLIGHT', 22, 'border-light');
    BsBorder_BORDERLIGHTSUBTLE_instance = new BsBorder('BORDERLIGHTSUBTLE', 23, 'border-light-subtle');
    BsBorder_BORDERDARK_instance = new BsBorder('BORDERDARK', 24, 'border-dark');
    BsBorder_BORDERDARKSUBTLE_instance = new BsBorder('BORDERDARKSUBTLE', 25, 'border-dark-subtle');
    BsBorder_BORDERWHITE_instance = new BsBorder('BORDERWHITE', 26, 'border-white');
    BsBorder_BORDERBLACK_instance = new BsBorder('BORDERBLACK', 27, 'border-black');
  }
  var $ENTRIES_0;
  function BsBorder(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(BsBorder).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  function addBsBgColor(_this__u8e3s4, bsBgColor) {
    _this__u8e3s4.addCssClass_ul13bg_k$(bsBgColor.className_1);
  }
  function removeBsBgColor(_this__u8e3s4, bsBgColor) {
    _this__u8e3s4.removeCssClass_3dntip_k$(bsBgColor.className_1);
  }
  function BsBgColor_PRIMARY_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_PRIMARY_instance;
  }
  function BsBgColor_PRIMARYSUBTLE_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_PRIMARYSUBTLE_instance;
  }
  function BsBgColor_SECONDARY_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_SECONDARY_instance;
  }
  function BsBgColor_SECONDARYSUBTLE_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_SECONDARYSUBTLE_instance;
  }
  function BsBgColor_SUCCESS_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_SUCCESS_instance;
  }
  function BsBgColor_SUCCESSSUBTLE_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_SUCCESSSUBTLE_instance;
  }
  function BsBgColor_DANGER_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_DANGER_instance;
  }
  function BsBgColor_DANGERSUBTLE_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_DANGERSUBTLE_instance;
  }
  function BsBgColor_WARNING_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_WARNING_instance;
  }
  function BsBgColor_WARNINGSUBTLE_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_WARNINGSUBTLE_instance;
  }
  function BsBgColor_INFO_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_INFO_instance;
  }
  function BsBgColor_INFOSUBTLE_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_INFOSUBTLE_instance;
  }
  function BsBgColor_LIGHT_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_LIGHT_instance;
  }
  function BsBgColor_LIGHTSUBTLE_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_LIGHTSUBTLE_instance;
  }
  function BsBgColor_DARK_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_DARK_instance;
  }
  function BsBgColor_DARKSUBTLE_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_DARKSUBTLE_instance;
  }
  function BsBgColor_BODY_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_BODY_instance;
  }
  function BsBgColor_BODYSECONDARY_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_BODYSECONDARY_instance;
  }
  function BsBgColor_BODYTERTIARY_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_BODYTERTIARY_instance;
  }
  function BsBgColor_BLACK_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_BLACK_instance;
  }
  function BsBgColor_WHITE_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_WHITE_instance;
  }
  function BsBgColor_TRANSPARENT_getInstance() {
    BsBgColor_initEntries();
    return BsBgColor_TRANSPARENT_instance;
  }
  function BsBorder_BORDER_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDER_instance;
  }
  function BsBorder_BORDERTOP_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERTOP_instance;
  }
  function BsBorder_BORDERBOTTOM_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERBOTTOM_instance;
  }
  function BsBorder_BORDERRIGHT_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERRIGHT_instance;
  }
  function BsBorder_BORDERLEFT_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERLEFT_instance;
  }
  function BsBorder_BORDER_0_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDER_0_instance;
  }
  function BsBorder_BORDERTOP_0_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERTOP_0_instance;
  }
  function BsBorder_BORDERBOTTOM_0_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERBOTTOM_0_instance;
  }
  function BsBorder_BORDERRIGHT_0_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERRIGHT_0_instance;
  }
  function BsBorder_BORDERLEFT_0_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERLEFT_0_instance;
  }
  function BsBorder_BORDERPRIMARY_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERPRIMARY_instance;
  }
  function BsBorder_BORDERPRIMARYSUBTLE_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERPRIMARYSUBTLE_instance;
  }
  function BsBorder_BORDERSECONDARY_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERSECONDARY_instance;
  }
  function BsBorder_BORDERSECONDARYSUBTLE_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERSECONDARYSUBTLE_instance;
  }
  function BsBorder_BORDERSUCCESS_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERSUCCESS_instance;
  }
  function BsBorder_BORDERSUCCESSSUBTLE_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERSUCCESSSUBTLE_instance;
  }
  function BsBorder_BORDERDANGER_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERDANGER_instance;
  }
  function BsBorder_BORDERDANGERSUBTLE_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERDANGERSUBTLE_instance;
  }
  function BsBorder_BORDERWARNING_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERWARNING_instance;
  }
  function BsBorder_BORDERWARNINGSUBTLE_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERWARNINGSUBTLE_instance;
  }
  function BsBorder_BORDERINFO_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERINFO_instance;
  }
  function BsBorder_BORDERINFOSUBTLE_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERINFOSUBTLE_instance;
  }
  function BsBorder_BORDERLIGHT_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERLIGHT_instance;
  }
  function BsBorder_BORDERLIGHTSUBTLE_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERLIGHTSUBTLE_instance;
  }
  function BsBorder_BORDERDARK_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERDARK_instance;
  }
  function BsBorder_BORDERDARKSUBTLE_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERDARKSUBTLE_instance;
  }
  function BsBorder_BORDERWHITE_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERWHITE_instance;
  }
  function BsBorder_BORDERBLACK_getInstance() {
    BsBorder_initEntries();
    return BsBorder_BORDERBLACK_instance;
  }
  function Companion() {
    Companion_instance = this;
    this.DEFAULT_FIXED_POS_X_1 = 5;
    this.DEFAULT_FIXED_POS_Y_1 = 5;
  }
  protoOf(Companion).get_DEFAULT_FIXED_POS_X_tw51k5_k$ = function () {
    return this.DEFAULT_FIXED_POS_X_1;
  };
  protoOf(Companion).get_DEFAULT_FIXED_POS_Y_tw51k4_k$ = function () {
    return this.DEFAULT_FIXED_POS_Y_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ContextMenu(element, fixedPosition, className, init) {
    Companion_getInstance_0();
    element = element === VOID ? null : element;
    fixedPosition = fixedPosition === VOID ? false : fixedPosition;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var tmp;
    if (className == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.dropdown.ContextMenu.<init>.<anonymous>' call
      tmp = className + ' ';
    }
    var tmp1_elvis_lhs = tmp;
    SimplePanel.call(this, (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + 'dropdown-menu');
    this.fixedPosition_1 = fixedPosition;
    this.hide_o8jt72_k$();
    this.set_display_2qo1ly_k$(Display_BLOCK_getInstance());
    this.set_width_3hpb1_k$(get_auto());
    var tmp1_elvis_lhs_0 = element == null ? null : element.getRoot_18r9uw_k$();
    var root = tmp1_elvis_lhs_0 == null ? Companion_getInstance().getLastRoot_a875zi_k$() : tmp1_elvis_lhs_0;
    if (!(root == null)) {
      root.addContextMenu_kgrl5y_k$(this);
    } else {
      console.log('At least one Root object is required to create a context menu!');
    }
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(ContextMenu).get_fixedPosition_vwxr4k_k$ = function () {
    return this.fixedPosition_1;
  };
  protoOf(ContextMenu).positionMenu_a77qsa_k$ = function (mouseEvent) {
    if (this.fixedPosition_1) {
      this.set_top_r69qtq_k$(get_px(5));
      this.set_left_qygbia_k$(get_px(5));
    } else {
      this.set_top_r69qtq_k$(get_px(numberToInt(mouseEvent.pageY)));
      this.set_left_qygbia_k$(get_px(numberToInt(mouseEvent.pageX)));
    }
    this.show_58bemr_k$();
  };
  var AutoClose_TRUE_instance;
  var AutoClose_OUTSIDE_instance;
  var AutoClose_INSIDE_instance;
  var AutoClose_FALSE_instance;
  function values_1() {
    return [AutoClose_TRUE_getInstance(), AutoClose_OUTSIDE_getInstance(), AutoClose_INSIDE_getInstance(), AutoClose_FALSE_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'TRUE':
        return AutoClose_TRUE_getInstance();
      case 'OUTSIDE':
        return AutoClose_OUTSIDE_getInstance();
      case 'INSIDE':
        return AutoClose_INSIDE_getInstance();
      case 'FALSE':
        return AutoClose_FALSE_getInstance();
      default:
        AutoClose_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var AutoClose_entriesInitialized;
  function AutoClose_initEntries() {
    if (AutoClose_entriesInitialized)
      return Unit_getInstance();
    AutoClose_entriesInitialized = true;
    AutoClose_TRUE_instance = new AutoClose('TRUE', 0, 'true');
    AutoClose_OUTSIDE_instance = new AutoClose('OUTSIDE', 1, 'outside');
    AutoClose_INSIDE_instance = new AutoClose('INSIDE', 2, 'inside');
    AutoClose_FALSE_instance = new AutoClose('FALSE', 3, 'false');
  }
  var $ENTRIES_1;
  function AutoClose(name, ordinal, attributeValue) {
    Enum.call(this, name, ordinal);
    this.attributeValue_1 = attributeValue;
  }
  protoOf(AutoClose).get_attributeValue_rxe0u_k$ = function () {
    return this.attributeValue_1;
  };
  protoOf(AutoClose).get_attributeName_p6lq76_k$ = function () {
    return 'data-bs-auto-close';
  };
  function dropDown(_this__u8e3s4, text, elements, icon, style, direction, disabled, forNavbar, forDropDown, dark, rightAligned, autoClose, arrowVisible, className, init) {
    elements = elements === VOID ? null : elements;
    icon = icon === VOID ? null : icon;
    style = style === VOID ? ButtonStyle_PRIMARY_getInstance() : style;
    direction = direction === VOID ? Direction_DROPDOWN_getInstance() : direction;
    disabled = disabled === VOID ? false : disabled;
    forNavbar = forNavbar === VOID ? false : forNavbar;
    forDropDown = forDropDown === VOID ? false : forDropDown;
    dark = dark === VOID ? false : dark;
    rightAligned = rightAligned === VOID ? false : rightAligned;
    autoClose = autoClose === VOID ? AutoClose_TRUE_getInstance() : autoClose;
    arrowVisible = arrowVisible === VOID ? true : arrowVisible;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var dropDown = new DropDown(text, elements, icon, style, direction, disabled, forNavbar, forDropDown, dark, rightAligned, autoClose, arrowVisible, className, init);
    _this__u8e3s4.add_rekwpt_k$(dropDown);
    return dropDown;
  }
  function _set_elements__x18af4($this, _set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha($this.elements$delegate_1, $this, elements$factory_0(), _set____db54di);
  }
  function _get_elements__k8byyc($this) {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2($this.elements$delegate_1, $this, elements$factory_1());
  }
  function _get_idc__e6a609($this) {
    return $this.idc_1;
  }
  function setChildrenFromElements($this) {
    $this.menu_1.disposeAll_hpz7bi_k$();
    var tmp0_safe_receiver = _get_elements__k8byyc($this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.dropdown.DropDown.setChildrenFromElements.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var _iterator__ex2g4s = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'io.kvision.dropdown.DropDown.setChildrenFromElements.<anonymous>.<anonymous>' call
        var tmp0_subject = item.get_second_jf7fjx_k$();
        var tmp;
        if (tmp0_subject === DD_HEADER_getInstance().option_1) {
          tmp = new Header(item.get_first_irdx8n_k$());
        } else if (tmp0_subject === DD_SEPARATOR_getInstance().option_1) {
          tmp = new Separator();
        } else if (tmp0_subject === DD_DISABLED_getInstance().option_1) {
          // Inline function 'kotlin.apply' call
          var this_0 = new Link(item.get_first_irdx8n_k$(), 'javascript:void(0)', VOID, VOID, VOID, VOID, VOID, VOID, 'dropdown-item disabled');
          // Inline function 'io.kvision.dropdown.DropDown.setChildrenFromElements.<anonymous>.<anonymous>.<anonymous>' call
          this_0.set_tabindex_4zmmtb_k$(-1);
          this_0.setAttribute_gbqua2_k$('aria-disabled', 'true');
          tmp = this_0;
        } else {
          tmp = new Link(item.get_first_irdx8n_k$(), item.get_second_jf7fjx_k$(), VOID, VOID, VOID, VOID, VOID, VOID, 'dropdown-item');
        }
        var tmp$ret$1 = tmp;
        destination.add_utx5q5_k$(tmp$ret$1);
      }
      var c = destination;
      $this.menu_1.addAll_a94ixq_k$(c);
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.counter_1 = 0;
  }
  protoOf(Companion_0).set_counter_q5rd57_k$ = function (_set____db54di) {
    this.counter_1 = _set____db54di;
  };
  protoOf(Companion_0).get_counter_qxszvd_k$ = function () {
    return this.counter_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DropDown$elements$delegate$lambda(this$0) {
    return function (it) {
      setChildrenFromElements(this$0);
      return Unit_getInstance();
    };
  }
  function DropDown$direction$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function DropDown(text, elements, icon, style, direction, disabled, forNavbar, forDropDown, dark, rightAligned, autoClose, arrowVisible, className, init) {
    Companion_getInstance_1();
    elements = elements === VOID ? null : elements;
    icon = icon === VOID ? null : icon;
    style = style === VOID ? ButtonStyle_PRIMARY_getInstance() : style;
    direction = direction === VOID ? Direction_DROPDOWN_getInstance() : direction;
    disabled = disabled === VOID ? false : disabled;
    forNavbar = forNavbar === VOID ? false : forNavbar;
    forDropDown = forDropDown === VOID ? false : forDropDown;
    dark = dark === VOID ? false : dark;
    rightAligned = rightAligned === VOID ? false : rightAligned;
    autoClose = autoClose === VOID ? AutoClose_TRUE_getInstance() : autoClose;
    arrowVisible = arrowVisible === VOID ? true : arrowVisible;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    this.forNavbar_1 = forNavbar;
    this.forDropDown_1 = forDropDown;
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = DropDown$elements$delegate$lambda(this);
    tmp.elements$delegate_1 = (new RefreshDelegateProvider(this, elements, refreshFunction)).provideDelegate_z62loi_k$(this, elements$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = DropDown$direction$delegate$lambda(this);
    tmp_0.direction$delegate_1 = (new RefreshDelegateProvider(this, direction, refreshFunction_0)).provideDelegate_z62loi_k$(this, direction$factory());
    this.idc_1 = 'kv_dropdown_' + Companion_getInstance_1().counter_1;
    this.button_1 = new DropDownButton(this.idc_1, text, icon, style, disabled, this.forNavbar_1, this.forDropDown_1, autoClose, arrowVisible);
    this.menu_1 = new DropDownMenu(this.idc_1, dark, rightAligned);
    if (this.forDropDown_1) {
      this.set_style_x72dio_k$(ButtonStyle_LIGHT_getInstance());
      this.set_direction_m21v2o_k$(Direction_DROPEND_getInstance());
    }
    setChildrenFromElements(this);
    this.addPrivate_g3v94y_k$(this.button_1);
    this.addPrivate_g3v94y_k$(this.menu_1);
    var _unary__edvuaz = Companion_getInstance_1().counter_1;
    Companion_getInstance_1().counter_1 = _unary__edvuaz + 1 | 0;
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(DropDown).get_forNavbar_nsq4cw_k$ = function () {
    return this.forNavbar_1;
  };
  protoOf(DropDown).get_forDropDown_r2i2sx_k$ = function () {
    return this.forDropDown_1;
  };
  protoOf(DropDown).set_text_oy06f4_k$ = function (value) {
    this.button_1.set_text_oy06f4_k$(value);
  };
  protoOf(DropDown).get_text_wouvsm_k$ = function () {
    return this.button_1.get_text_wouvsm_k$();
  };
  protoOf(DropDown).set_icon_t78tsv_k$ = function (value) {
    this.button_1.set_icon_t78tsv_k$(value);
  };
  protoOf(DropDown).get_icon_wont8i_k$ = function () {
    return this.button_1.get_icon_wont8i_k$();
  };
  protoOf(DropDown).set_style_x72dio_k$ = function (value) {
    this.button_1.set_style_x72dio_k$(value);
  };
  protoOf(DropDown).get_style_iyqetk_k$ = function () {
    return this.button_1.get_style_iyqetk_k$();
  };
  protoOf(DropDown).set_size_wi2upv_k$ = function (value) {
    this.button_1.set_size_wi2upv_k$(value);
  };
  protoOf(DropDown).get_size_woubt6_k$ = function () {
    return this.button_1.get_size_woubt6_k$();
  };
  protoOf(DropDown).set_block_7gwl97_k$ = function (value) {
    this.button_1.set_block_7gwl97_k$(value);
  };
  protoOf(DropDown).get_block_ip8l7o_k$ = function () {
    return this.button_1.get_block_ip8l7o_k$();
  };
  protoOf(DropDown).set_disabled_rhu918_k$ = function (value) {
    this.button_1.set_disabled_rhu918_k$(value);
  };
  protoOf(DropDown).get_disabled_rbmjej_k$ = function () {
    return this.button_1.get_disabled_rbmjej_k$();
  };
  protoOf(DropDown).set_image_f7p9g9_k$ = function (value) {
    this.button_1.set_image_f7p9g9_k$(value);
  };
  protoOf(DropDown).get_image_it3i2a_k$ = function () {
    return this.button_1.get_image_it3i2a_k$();
  };
  protoOf(DropDown).set_dark_179ngi_k$ = function (value) {
    this.menu_1.set_dark_179ngi_k$(value);
  };
  protoOf(DropDown).get_dark_wokkvz_k$ = function () {
    return this.menu_1.get_dark_wokkvz_k$();
  };
  protoOf(DropDown).set_rightAligned_gk0aa8_k$ = function (value) {
    this.menu_1.set_rightAligned_gk0aa8_k$(value);
  };
  protoOf(DropDown).get_rightAligned_n4xy41_k$ = function () {
    return this.menu_1.get_rightAligned_n4xy41_k$();
  };
  protoOf(DropDown).set_direction_m21v2o_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.direction$delegate_1, this, direction$factory_0(), _set____db54di);
  };
  protoOf(DropDown).get_direction_7ekune_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.direction$delegate_1, this, direction$factory_1());
  };
  protoOf(DropDown).set_autoClose_omj8lf_k$ = function (value) {
    this.button_1.set_autoClose_omj8lf_k$(value);
  };
  protoOf(DropDown).get_autoClose_zh13c0_k$ = function () {
    return this.button_1.get_autoClose_zh13c0_k$();
  };
  protoOf(DropDown).set_arrowVisible_87een_k$ = function (value) {
    this.button_1.set_arrowVisible_87een_k$(value);
  };
  protoOf(DropDown).get_arrowVisible_9vrw4y_k$ = function () {
    return this.button_1.get_arrowVisible_9vrw4y_k$();
  };
  protoOf(DropDown).set_width_3hpb1_k$ = function (value) {
    protoOf(SimplePanel).set_width_3hpb1_k$.call(this, value);
    this.button_1.set_width_3hpb1_k$(value);
  };
  protoOf(DropDown).get_width_j0q4yl_k$ = function () {
    return protoOf(SimplePanel).get_width_j0q4yl_k$.call(this);
  };
  protoOf(DropDown).get_button_bmjiuz_k$ = function () {
    return this.button_1;
  };
  protoOf(DropDown).buttonId_iboetv_k$ = function () {
    return this.button_1.get_id_kntnx8_k$();
  };
  protoOf(DropDown).get_menu_woqenc_k$ = function () {
    return this.menu_1;
  };
  protoOf(DropDown).add_rekwpt_k$ = function (child) {
    this.menu_1.add_rekwpt_k$(child);
  };
  protoOf(DropDown).add_t9z7x3_k$ = function (position, child) {
    this.menu_1.add_t9z7x3_k$(position, child);
  };
  protoOf(DropDown).addAll_a94ixq_k$ = function (children) {
    this.menu_1.addAll_a94ixq_k$(children);
  };
  protoOf(DropDown).remove_j7k0x0_k$ = function (child) {
    this.menu_1.remove_j7k0x0_k$(child);
  };
  protoOf(DropDown).removeAt_rql1ap_k$ = function (position) {
    this.menu_1.removeAt_rql1ap_k$(position);
  };
  protoOf(DropDown).removeAll_c84dd9_k$ = function () {
    this.menu_1.removeAll_c84dd9_k$();
  };
  protoOf(DropDown).disposeAll_hpz7bi_k$ = function () {
    this.menu_1.disposeAll_hpz7bi_k$();
  };
  protoOf(DropDown).getChildren_97y0zv_k$ = function () {
    return this.menu_1.getChildren_97y0zv_k$();
  };
  protoOf(DropDown).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    if (this.forNavbar_1) {
      classSetBuilder.add_udnk2x_k$('nav-item');
    }
    classSetBuilder.add_udnk2x_k$(this.get_direction_7ekune_k$().direction_1);
  };
  protoOf(DropDown).toggle_krk03g_k$ = function () {
    // Inline function 'io.kvision.utils.obj' call
    var tmp = {};
    // Inline function 'kotlin.apply' call
    var this_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'io.kvision.dropdown.DropDown.toggle.<anonymous>' call
    this_0.bubbles = true;
    this.button_1.dispatchEvent_uegfeo_k$('click', this_0);
  };
  var Direction_DROPDOWN_instance;
  var Direction_DROPUP_instance;
  var Direction_DROPSTART_instance;
  var Direction_DROPEND_instance;
  function values_2() {
    return [Direction_DROPDOWN_getInstance(), Direction_DROPUP_getInstance(), Direction_DROPSTART_getInstance(), Direction_DROPEND_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'DROPDOWN':
        return Direction_DROPDOWN_getInstance();
      case 'DROPUP':
        return Direction_DROPUP_getInstance();
      case 'DROPSTART':
        return Direction_DROPSTART_getInstance();
      case 'DROPEND':
        return Direction_DROPEND_getInstance();
      default:
        Direction_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_getInstance();
    Direction_entriesInitialized = true;
    Direction_DROPDOWN_instance = new Direction('DROPDOWN', 0, 'dropdown');
    Direction_DROPUP_instance = new Direction('DROPUP', 1, 'dropup');
    Direction_DROPSTART_instance = new Direction('DROPSTART', 2, 'dropstart');
    Direction_DROPEND_instance = new Direction('DROPEND', 3, 'dropend');
  }
  var $ENTRIES_2;
  function Direction(name, ordinal, direction) {
    Enum.call(this, name, ordinal);
    this.direction_1 = direction;
  }
  protoOf(Direction).get_direction_qtk7sa_k$ = function () {
    return this.direction_1;
  };
  var DD_HEADER_instance;
  var DD_DISABLED_instance;
  var DD_SEPARATOR_instance;
  function values_3() {
    return [DD_HEADER_getInstance(), DD_DISABLED_getInstance(), DD_SEPARATOR_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'HEADER':
        return DD_HEADER_getInstance();
      case 'DISABLED':
        return DD_DISABLED_getInstance();
      case 'SEPARATOR':
        return DD_SEPARATOR_getInstance();
      default:
        DD_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var DD_entriesInitialized;
  function DD_initEntries() {
    if (DD_entriesInitialized)
      return Unit_getInstance();
    DD_entriesInitialized = true;
    DD_HEADER_instance = new DD('HEADER', 0, 'DD#HEADER');
    DD_DISABLED_instance = new DD('DISABLED', 1, 'DD#DISABLED');
    DD_SEPARATOR_instance = new DD('SEPARATOR', 2, 'DD#SEPARATOR');
  }
  var $ENTRIES_3;
  function DD(name, ordinal, option) {
    Enum.call(this, name, ordinal);
    this.option_1 = option;
  }
  protoOf(DD).get_option_hpdev2_k$ = function () {
    return this.option_1;
  };
  function AutoClose_TRUE_getInstance() {
    AutoClose_initEntries();
    return AutoClose_TRUE_instance;
  }
  function AutoClose_OUTSIDE_getInstance() {
    AutoClose_initEntries();
    return AutoClose_OUTSIDE_instance;
  }
  function AutoClose_INSIDE_getInstance() {
    AutoClose_initEntries();
    return AutoClose_INSIDE_instance;
  }
  function AutoClose_FALSE_getInstance() {
    AutoClose_initEntries();
    return AutoClose_FALSE_instance;
  }
  function Direction_DROPDOWN_getInstance() {
    Direction_initEntries();
    return Direction_DROPDOWN_instance;
  }
  function Direction_DROPUP_getInstance() {
    Direction_initEntries();
    return Direction_DROPUP_instance;
  }
  function Direction_DROPSTART_getInstance() {
    Direction_initEntries();
    return Direction_DROPSTART_instance;
  }
  function Direction_DROPEND_getInstance() {
    Direction_initEntries();
    return Direction_DROPEND_instance;
  }
  function DD_HEADER_getInstance() {
    DD_initEntries();
    return DD_HEADER_instance;
  }
  function DD_DISABLED_getInstance() {
    DD_initEntries();
    return DD_DISABLED_instance;
  }
  function DD_SEPARATOR_getInstance() {
    DD_initEntries();
    return DD_SEPARATOR_instance;
  }
  function elements$factory() {
    return getPropertyCallableRef('elements', 1, KMutableProperty1, function (receiver) {
      return _get_elements__k8byyc(receiver);
    }, function (receiver, value) {
      return _set_elements__x18af4(receiver, value);
    });
  }
  function direction$factory() {
    return getPropertyCallableRef('direction', 1, KMutableProperty1, function (receiver) {
      return receiver.get_direction_7ekune_k$();
    }, function (receiver, value) {
      return receiver.set_direction_m21v2o_k$(value);
    });
  }
  function elements$factory_0() {
    return getPropertyCallableRef('elements', 1, KMutableProperty1, function (receiver) {
      return _get_elements__k8byyc(receiver);
    }, function (receiver, value) {
      return _set_elements__x18af4(receiver, value);
    });
  }
  function elements$factory_1() {
    return getPropertyCallableRef('elements', 1, KMutableProperty1, function (receiver) {
      return _get_elements__k8byyc(receiver);
    }, function (receiver, value) {
      return _set_elements__x18af4(receiver, value);
    });
  }
  function direction$factory_0() {
    return getPropertyCallableRef('direction', 1, KMutableProperty1, function (receiver) {
      return receiver.get_direction_7ekune_k$();
    }, function (receiver, value) {
      return receiver.set_direction_m21v2o_k$(value);
    });
  }
  function direction$factory_1() {
    return getPropertyCallableRef('direction', 1, KMutableProperty1, function (receiver) {
      return receiver.get_direction_7ekune_k$();
    }, function (receiver, value) {
      return receiver.set_direction_m21v2o_k$(value);
    });
  }
  function DropDownButton$autoClose$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function DropDownButton$arrowVisible$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function DropDownButton$lambda$lambda(this$0) {
    return function (e) {
      var tmp;
      var tmp0_safe_receiver = this$0.get_parent_hy4reb_k$();
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_parent_hy4reb_k$();
      if (tmp_0 instanceof ContextMenu) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp = e.dropDownCM = true;
      } else {
        if (this$0.forDropDown_1) {
          e.stopPropagation();
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function DropDownButton$lambda(this$0) {
    return function ($this$setInternalEventListener) {
      $this$setInternalEventListener.click = DropDownButton$lambda$lambda(this$0);
      return Unit_getInstance();
    };
  }
  function DropDownButton$buildClassSet$1($classSetBuilder) {
    this.$classSetBuilder_1 = $classSetBuilder;
  }
  protoOf(DropDownButton$buildClassSet$1).add_udnk2x_k$ = function (value) {
    if (!(value === 'btn') && !(value === 'btn-primary')) {
      this.$classSetBuilder_1.add_udnk2x_k$(value);
    }
  };
  protoOf(DropDownButton$buildClassSet$1).addAll_kmiuje_k$ = function (values) {
    this.$classSetBuilder_1.addAll_kmiuje_k$(values);
  };
  function DropDownButton$buildAttributeSet$1($attributeSetBuilder) {
    this.$attributeSetBuilder_1 = $attributeSetBuilder;
  }
  protoOf(DropDownButton$buildAttributeSet$1).add_lbri6p_k$ = function (name, value) {
    if (!(name === 'type')) {
      this.$attributeSetBuilder_1.add_lbri6p_k$(name, value);
    }
  };
  function DropDownButton(id, text, icon, style, disabled, forNavbar, forDropDown, autoClose, arrowVisible, className) {
    icon = icon === VOID ? null : icon;
    style = style === VOID ? ButtonStyle_PRIMARY_getInstance() : style;
    disabled = disabled === VOID ? false : disabled;
    forNavbar = forNavbar === VOID ? false : forNavbar;
    forDropDown = forDropDown === VOID ? false : forDropDown;
    autoClose = autoClose === VOID ? AutoClose_TRUE_getInstance() : autoClose;
    arrowVisible = arrowVisible === VOID ? false : arrowVisible;
    className = className === VOID ? null : className;
    Button.call(this, text, icon, style, ButtonType_BUTTON_getInstance(), disabled, null, true, className);
    this.forNavbar_1 = forNavbar;
    this.forDropDown_1 = forDropDown;
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = DropDownButton$autoClose$delegate$lambda(this);
    tmp.autoClose$delegate_1 = (new RefreshDelegateProvider(this, autoClose, refreshFunction)).provideDelegate_z62loi_k$(this, autoClose$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = DropDownButton$arrowVisible$delegate$lambda(this);
    tmp_0.arrowVisible$delegate_1 = (new RefreshDelegateProvider(this, arrowVisible, refreshFunction_0)).provideDelegate_z62loi_k$(this, arrowVisible$factory());
    this.set_id_wyyipr_k$(id);
    if (!this.forNavbar_1 && !this.forDropDown_1) {
      this.set_role_ghksys_k$('button');
    }
    this.setInternalEventListener_jia4mj_k$(DropDownButton$lambda(this));
  }
  protoOf(DropDownButton).get_forNavbar_nsq4cw_k$ = function () {
    return this.forNavbar_1;
  };
  protoOf(DropDownButton).get_forDropDown_r2i2sx_k$ = function () {
    return this.forDropDown_1;
  };
  protoOf(DropDownButton).set_autoClose_omj8lf_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.autoClose$delegate_1, this, autoClose$factory_0(), _set____db54di);
  };
  protoOf(DropDownButton).get_autoClose_zh13c0_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.autoClose$delegate_1, this, autoClose$factory_1());
  };
  protoOf(DropDownButton).set_arrowVisible_87een_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.arrowVisible$delegate_1, this, arrowVisible$factory_0(), _set____db54di);
  };
  protoOf(DropDownButton).get_arrowVisible_9vrw4y_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.arrowVisible$delegate_1, this, arrowVisible$factory_1());
  };
  protoOf(DropDownButton).render_fgfjvu_k$ = function () {
    var text = this.createLabelWithIcon$default_ql70x2_k$(this.get_text_wouvsm_k$(), this.get_icon_wont8i_k$(), this.get_image_it3i2a_k$());
    var tmp;
    if (this.forNavbar_1 || this.forDropDown_1) {
      tmp = this.render_prnnht_k$('a', text);
    } else {
      tmp = this.render_prnnht_k$('button', text);
    }
    return tmp;
  };
  protoOf(DropDownButton).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    classSetBuilder.add_udnk2x_k$('dropdown-toggle');
    if (this.forNavbar_1) {
      // Inline function 'kotlin.run' call
      // Inline function 'io.kvision.dropdown.DropDownButton.buildClassSet.<anonymous>' call
      protoOf(Button).buildClassSet_myme1g_k$.call(this, new DropDownButton$buildClassSet$1(classSetBuilder));
      classSetBuilder.add_udnk2x_k$('nav-link');
    } else if (this.forDropDown_1) {
      protoOf(Button).buildClassSet_myme1g_k$.call(this, classSetBuilder);
      classSetBuilder.add_udnk2x_k$('dropdown-item');
    } else {
      protoOf(Button).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    }
    if (!this.get_arrowVisible_9vrw4y_k$()) {
      classSetBuilder.add_udnk2x_k$('kv-dropdown-no-arrow');
    }
  };
  protoOf(DropDownButton).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    var tmp;
    if (this.forDropDown_1 || this.forNavbar_1) {
      tmp = new DropDownButton$buildAttributeSet$1(attributeSetBuilder);
    } else {
      tmp = attributeSetBuilder;
    }
    protoOf(Button).buildAttributeSet_etcqhg_k$.call(this, tmp);
    attributeSetBuilder.add_lbri6p_k$('data-bs-toggle', 'dropdown');
    attributeSetBuilder.add_lbri6p_k$('aria-haspopup', 'true');
    attributeSetBuilder.add_lbri6p_k$('aria-expanded', 'false');
    attributeSetBuilder.add_lbri6p_k$('href', 'javascript:void(0)');
    attributeSetBuilder.add_qyhf6x_k$(this.get_autoClose_zh13c0_k$());
  };
  function autoClose$factory() {
    return getPropertyCallableRef('autoClose', 1, KMutableProperty1, function (receiver) {
      return receiver.get_autoClose_zh13c0_k$();
    }, function (receiver, value) {
      return receiver.set_autoClose_omj8lf_k$(value);
    });
  }
  function arrowVisible$factory() {
    return getPropertyCallableRef('arrowVisible', 1, KMutableProperty1, function (receiver) {
      return receiver.get_arrowVisible_9vrw4y_k$();
    }, function (receiver, value) {
      return receiver.set_arrowVisible_87een_k$(value);
    });
  }
  function autoClose$factory_0() {
    return getPropertyCallableRef('autoClose', 1, KMutableProperty1, function (receiver) {
      return receiver.get_autoClose_zh13c0_k$();
    }, function (receiver, value) {
      return receiver.set_autoClose_omj8lf_k$(value);
    });
  }
  function autoClose$factory_1() {
    return getPropertyCallableRef('autoClose', 1, KMutableProperty1, function (receiver) {
      return receiver.get_autoClose_zh13c0_k$();
    }, function (receiver, value) {
      return receiver.set_autoClose_omj8lf_k$(value);
    });
  }
  function arrowVisible$factory_0() {
    return getPropertyCallableRef('arrowVisible', 1, KMutableProperty1, function (receiver) {
      return receiver.get_arrowVisible_9vrw4y_k$();
    }, function (receiver, value) {
      return receiver.set_arrowVisible_87een_k$(value);
    });
  }
  function arrowVisible$factory_1() {
    return getPropertyCallableRef('arrowVisible', 1, KMutableProperty1, function (receiver) {
      return receiver.get_arrowVisible_9vrw4y_k$();
    }, function (receiver, value) {
      return receiver.set_arrowVisible_87een_k$(value);
    });
  }
  function _get_ariaId__pidy13($this) {
    return $this.ariaId_1;
  }
  function DropDownMenu$dark$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function DropDownMenu$rightAligned$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function DropDownMenu(ariaId, dark, rightAligned) {
    dark = dark === VOID ? false : dark;
    rightAligned = rightAligned === VOID ? false : rightAligned;
    SimplePanel.call(this, 'dropdown-menu');
    this.ariaId_1 = ariaId;
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = DropDownMenu$dark$delegate$lambda(this);
    tmp.dark$delegate_1 = (new RefreshDelegateProvider(this, dark, refreshFunction)).provideDelegate_z62loi_k$(this, dark$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = DropDownMenu$rightAligned$delegate$lambda(this);
    tmp_0.rightAligned$delegate_1 = (new RefreshDelegateProvider(this, rightAligned, refreshFunction_0)).provideDelegate_z62loi_k$(this, rightAligned$factory());
  }
  protoOf(DropDownMenu).set_dark_179ngi_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.dark$delegate_1, this, dark$factory_0(), _set____db54di);
  };
  protoOf(DropDownMenu).get_dark_wokkvz_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.dark$delegate_1, this, dark$factory_1());
  };
  protoOf(DropDownMenu).set_rightAligned_gk0aa8_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.rightAligned$delegate_1, this, rightAligned$factory_0(), _set____db54di);
  };
  protoOf(DropDownMenu).get_rightAligned_n4xy41_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.rightAligned$delegate_1, this, rightAligned$factory_1());
  };
  protoOf(DropDownMenu).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(SimplePanel).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    attributeSetBuilder.add_lbri6p_k$('aria-labelledby', this.ariaId_1);
    if (this.get_dark_wokkvz_k$()) {
      attributeSetBuilder.add_lbri6p_k$('data-bs-theme', 'dark');
    }
  };
  protoOf(DropDownMenu).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    if (this.get_rightAligned_n4xy41_k$()) {
      classSetBuilder.add_udnk2x_k$('dropdown-menu-end');
    }
  };
  function dark$factory() {
    return getPropertyCallableRef('dark', 1, KMutableProperty1, function (receiver) {
      return receiver.get_dark_wokkvz_k$();
    }, function (receiver, value) {
      return receiver.set_dark_179ngi_k$(value);
    });
  }
  function rightAligned$factory() {
    return getPropertyCallableRef('rightAligned', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rightAligned_n4xy41_k$();
    }, function (receiver, value) {
      return receiver.set_rightAligned_gk0aa8_k$(value);
    });
  }
  function dark$factory_0() {
    return getPropertyCallableRef('dark', 1, KMutableProperty1, function (receiver) {
      return receiver.get_dark_wokkvz_k$();
    }, function (receiver, value) {
      return receiver.set_dark_179ngi_k$(value);
    });
  }
  function dark$factory_1() {
    return getPropertyCallableRef('dark', 1, KMutableProperty1, function (receiver) {
      return receiver.get_dark_wokkvz_k$();
    }, function (receiver, value) {
      return receiver.set_dark_179ngi_k$(value);
    });
  }
  function rightAligned$factory_0() {
    return getPropertyCallableRef('rightAligned', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rightAligned_n4xy41_k$();
    }, function (receiver, value) {
      return receiver.set_rightAligned_gk0aa8_k$(value);
    });
  }
  function rightAligned$factory_1() {
    return getPropertyCallableRef('rightAligned', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rightAligned_n4xy41_k$();
    }, function (receiver, value) {
      return receiver.set_rightAligned_gk0aa8_k$(value);
    });
  }
  function Header(content, className) {
    content = content === VOID ? null : content;
    className = className === VOID ? null : className;
    var tmp = TAG_H6_getInstance();
    var tmp_0;
    if (className == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.dropdown.Header.<init>.<anonymous>' call
      tmp_0 = className + ' ';
    }
    var tmp1_elvis_lhs = tmp_0;
    Tag.call(this, tmp, content, VOID, VOID, (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + 'dropdown-header');
  }
  function Separator(className) {
    className = className === VOID ? null : className;
    var tmp;
    if (className == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.dropdown.Separator.<init>.<anonymous>' call
      tmp = className + ' ';
    }
    var tmp1_elvis_lhs = tmp;
    SimplePanel.call(this, (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + 'dropdown-divider');
  }
  function Nav$rightAlign$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Nav(rightAlign, className, init) {
    rightAlign = rightAlign === VOID ? false : rightAlign;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = Nav$rightAlign$delegate$lambda(this);
    tmp.rightAlign$delegate_1 = (new RefreshDelegateProvider(this, rightAlign, refreshFunction)).provideDelegate_z62loi_k$(this, rightAlign$factory());
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(Nav).set_rightAlign_rljb8x_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.rightAlign$delegate_1, this, rightAlign$factory_0(), _set____db54di);
  };
  protoOf(Nav).get_rightAlign_rg20gi_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.rightAlign$delegate_1, this, rightAlign$factory_1());
  };
  protoOf(Nav).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    classSetBuilder.add_udnk2x_k$('navbar-nav');
    if (this.get_rightAlign_rg20gi_k$()) {
      classSetBuilder.add_udnk2x_k$('ms-auto');
    }
  };
  function nav(_this__u8e3s4, rightAlign, className, init) {
    rightAlign = rightAlign === VOID ? false : rightAlign;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var nav = new Nav(rightAlign, className, init);
    _this__u8e3s4.add_rekwpt_k$(nav);
    return nav;
  }
  function navLink(_this__u8e3s4, label, url, icon, image, dataNavigo, className, init) {
    url = url === VOID ? null : url;
    icon = icon === VOID ? null : icon;
    image = image === VOID ? null : image;
    dataNavigo = dataNavigo === VOID ? null : dataNavigo;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var tmp;
    if (className == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'io.kvision.navbar.navLink.<anonymous>' call
      tmp = className + ' ';
    }
    var tmp1_elvis_lhs = tmp;
    var link = new Link(label, url, icon, image, null, true, null, dataNavigo, (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + 'nav-item nav-link', init);
    _this__u8e3s4.add_rekwpt_k$(link);
    return link;
  }
  function rightAlign$factory() {
    return getPropertyCallableRef('rightAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rightAlign_rg20gi_k$();
    }, function (receiver, value) {
      return receiver.set_rightAlign_rljb8x_k$(value);
    });
  }
  function rightAlign$factory_0() {
    return getPropertyCallableRef('rightAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rightAlign_rg20gi_k$();
    }, function (receiver, value) {
      return receiver.set_rightAlign_rljb8x_k$(value);
    });
  }
  function rightAlign$factory_1() {
    return getPropertyCallableRef('rightAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rightAlign_rg20gi_k$();
    }, function (receiver, value) {
      return receiver.set_rightAlign_rljb8x_k$(value);
    });
  }
  function navForm(_this__u8e3s4, rightAlign, className, init) {
    rightAlign = rightAlign === VOID ? false : rightAlign;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var navForm = new NavForm(rightAlign, className, init);
    _this__u8e3s4.add_rekwpt_k$(navForm);
    return navForm;
  }
  function NavForm$rightAlign$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function NavForm(rightAlign, className, init) {
    rightAlign = rightAlign === VOID ? false : rightAlign;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    Tag.call(this, TAG_FORM_getInstance(), VOID, VOID, VOID, className);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = NavForm$rightAlign$delegate$lambda(this);
    tmp.rightAlign$delegate_1 = (new RefreshDelegateProvider(this, rightAlign, refreshFunction)).provideDelegate_z62loi_k$(this, rightAlign$factory_2());
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(NavForm).set_rightAlign_rljb8x_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.rightAlign$delegate_1, this, rightAlign$factory_3(), _set____db54di);
  };
  protoOf(NavForm).get_rightAlign_rg20gi_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.rightAlign$delegate_1, this, rightAlign$factory_4());
  };
  protoOf(NavForm).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(Tag).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    classSetBuilder.add_udnk2x_k$('form-inline');
    if (this.get_rightAlign_rg20gi_k$()) {
      classSetBuilder.add_udnk2x_k$('ms-auto');
    }
  };
  function rightAlign$factory_2() {
    return getPropertyCallableRef('rightAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rightAlign_rg20gi_k$();
    }, function (receiver, value) {
      return receiver.set_rightAlign_rljb8x_k$(value);
    });
  }
  function rightAlign$factory_3() {
    return getPropertyCallableRef('rightAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rightAlign_rg20gi_k$();
    }, function (receiver, value) {
      return receiver.set_rightAlign_rljb8x_k$(value);
    });
  }
  function rightAlign$factory_4() {
    return getPropertyCallableRef('rightAlign', 1, KMutableProperty1, function (receiver) {
      return receiver.get_rightAlign_rg20gi_k$();
    }, function (receiver, value) {
      return receiver.set_rightAlign_rljb8x_k$(value);
    });
  }
  function navbar(_this__u8e3s4, label, link, type, expand, nColor, bgColor, collapseOnClick, dataNavigo, containerType, className, init) {
    label = label === VOID ? null : label;
    link = link === VOID ? null : link;
    type = type === VOID ? null : type;
    expand = expand === VOID ? NavbarExpand_LG_getInstance() : expand;
    nColor = nColor === VOID ? null : nColor;
    bgColor = bgColor === VOID ? BsBgColor_BODYTERTIARY_getInstance() : bgColor;
    collapseOnClick = collapseOnClick === VOID ? false : collapseOnClick;
    dataNavigo = dataNavigo === VOID ? null : dataNavigo;
    containerType = containerType === VOID ? ContainerType_FLUID_getInstance() : containerType;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    var navbar = new Navbar(label, link, type, expand, nColor, bgColor, collapseOnClick, dataNavigo, containerType, className, init);
    _this__u8e3s4.add_rekwpt_k$(navbar);
    return navbar;
  }
  function _get_idc__e6a609_0($this) {
    return $this.idc_1;
  }
  function _get_toggler__f1he7n($this) {
    return $this.toggler_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.counter_1 = 0;
  }
  protoOf(Companion_1).set_counter_q5rd57_k$ = function (_set____db54di) {
    this.counter_1 = _set____db54di;
  };
  protoOf(Companion_1).get_counter_qxszvd_k$ = function () {
    return this.counter_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Navbar$type$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Navbar$expand$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Navbar$nColor$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Navbar$bgColor$delegate$lambda($tmp0) {
    return function (it) {
      $tmp0.refresh_6a3uvf_k$();
      return Unit_getInstance();
    };
  }
  function Navbar$container$lambda(this$0) {
    return function ($this$SimplePanel) {
      $this$SimplePanel.set_id_wyyipr_k$(this$0.idc_1);
      return Unit_getInstance();
    };
  }
  function Navbar$lambda$lambda(this$0) {
    return function (it) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var target = it.target;
      var tmp;
      if (target.matches('a.nav-item.nav-link') || target.matches('a.dropdown-item')) {
        var tmp_0;
        var tmp0_safe_receiver = this$0.container_1.getElement_acounu_k$();
        var tmp_1;
        if (tmp0_safe_receiver == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = tmp0_safe_receiver;
        }
        var tmp1_safe_receiver = tmp_1;
        if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.matches('.show')) === true) {
          // Inline function 'io.kvision.utils.obj' call
          var tmp_2 = {};
          // Inline function 'kotlin.apply' call
          var this_0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          // Inline function 'io.kvision.navbar.Navbar.<anonymous>.<anonymous>.<anonymous>' call
          this_0.bubbles = true;
          this$0.toggler_1.dispatchEvent_uegfeo_k$('click', this_0);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function Navbar$lambda(this$0) {
    return function ($this$setInternalEventListener) {
      $this$setInternalEventListener.click = Navbar$lambda$lambda(this$0);
      return Unit_getInstance();
    };
  }
  function Navbar(label, link, type, expand, nColor, bgColor, collapseOnClick, dataNavigo, containerType, className, init) {
    Companion_getInstance_2();
    label = label === VOID ? null : label;
    link = link === VOID ? null : link;
    type = type === VOID ? null : type;
    expand = expand === VOID ? NavbarExpand_LG_getInstance() : expand;
    nColor = nColor === VOID ? null : nColor;
    bgColor = bgColor === VOID ? BsBgColor_BODYTERTIARY_getInstance() : bgColor;
    collapseOnClick = collapseOnClick === VOID ? false : collapseOnClick;
    dataNavigo = dataNavigo === VOID ? null : dataNavigo;
    containerType = containerType === VOID ? ContainerType_FLUID_getInstance() : containerType;
    className = className === VOID ? null : className;
    init = init === VOID ? null : init;
    SimplePanel.call(this, className);
    var tmp = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction = Navbar$type$delegate$lambda(this);
    tmp.type$delegate_1 = (new RefreshDelegateProvider(this, type, refreshFunction)).provideDelegate_z62loi_k$(this, type$factory());
    var tmp_0 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_0 = Navbar$expand$delegate$lambda(this);
    tmp_0.expand$delegate_1 = (new RefreshDelegateProvider(this, expand, refreshFunction_0)).provideDelegate_z62loi_k$(this, expand$factory());
    var tmp_1 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_1 = Navbar$nColor$delegate$lambda(this);
    tmp_1.nColor$delegate_1 = (new RefreshDelegateProvider(this, nColor, refreshFunction_1)).provideDelegate_z62loi_k$(this, nColor$factory());
    var tmp_2 = this;
    // Inline function 'io.kvision.core.Widget.refreshOnUpdate' call
    var refreshFunction_2 = Navbar$bgColor$delegate$lambda(this);
    tmp_2.bgColor$delegate_1 = (new RefreshDelegateProvider(this, bgColor, refreshFunction_2)).provideDelegate_z62loi_k$(this, bgColor$factory());
    this.idc_1 = 'kv_navbar_' + Companion_getInstance_2().counter_1;
    var tmp_3 = this;
    tmp_3.brandLink_1 = new Link(label == null ? '' : label, link, VOID, VOID, VOID, VOID, VOID, dataNavigo, 'navbar-brand');
    this.toggler_1 = new NavbarButton(this.idc_1);
    var tmp_4 = this;
    tmp_4.container_1 = new SimplePanel('collapse navbar-collapse', Navbar$container$lambda(this));
    this.extContainer_1 = new SimplePanel(containerType.get_type_wovaf7_k$());
    this.extContainer_1.add_rekwpt_k$(this.brandLink_1);
    this.extContainer_1.add_rekwpt_k$(this.toggler_1);
    this.extContainer_1.add_rekwpt_k$(this.container_1);
    this.addPrivate_g3v94y_k$(this.extContainer_1);
    if (label == null) {
      this.brandLink_1.hide_o8jt72_k$();
    }
    var _unary__edvuaz = Companion_getInstance_2().counter_1;
    Companion_getInstance_2().counter_1 = _unary__edvuaz + 1 | 0;
    if (collapseOnClick) {
      this.setInternalEventListener_jia4mj_k$(Navbar$lambda(this));
    }
    if (init == null)
      null;
    else
      init(this);
  }
  protoOf(Navbar).set_label_ck9rls_k$ = function (value) {
    if (!(value == null)) {
      this.brandLink_1.set_label_nnic99_k$(value);
      this.brandLink_1.show_58bemr_k$();
    } else {
      this.brandLink_1.hide_o8jt72_k$();
    }
  };
  protoOf(Navbar).get_label_iuj8p7_k$ = function () {
    return this.brandLink_1.get_visible_8zfvk9_k$() ? this.brandLink_1.get_label_iuj8p7_k$() : null;
  };
  protoOf(Navbar).set_link_jegc2o_k$ = function (value) {
    this.brandLink_1.set_url_fvthdx_k$(value);
  };
  protoOf(Navbar).get_link_wopumb_k$ = function () {
    return this.brandLink_1.get_url_18iuii_k$();
  };
  protoOf(Navbar).set_dataNavigo_uqcbez_k$ = function (value) {
    this.brandLink_1.set_dataNavigo_uqcbez_k$(value);
  };
  protoOf(Navbar).get_dataNavigo_1pkdun_k$ = function () {
    return this.brandLink_1.get_dataNavigo_1pkdun_k$();
  };
  protoOf(Navbar).set_type_hvq0bu_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.type$delegate_1, this, type$factory_0(), _set____db54di);
  };
  protoOf(Navbar).get_type_wovaf7_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.type$delegate_1, this, type$factory_1());
  };
  protoOf(Navbar).set_expand_2qx822_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.expand$delegate_1, this, expand$factory_0(), _set____db54di);
  };
  protoOf(Navbar).get_expand_d38tr7_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.expand$delegate_1, this, expand$factory_1());
  };
  protoOf(Navbar).set_nColor_g4rmoj_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.nColor$delegate_1, this, nColor$factory_0(), _set____db54di);
  };
  protoOf(Navbar).get_nColor_gjhx26_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.nColor$delegate_1, this, nColor$factory_1());
  };
  protoOf(Navbar).set_bgColor_fl7n9f_k$ = function (_set____db54di) {
    return WidgetRefreshDelegate__setValue_impl_8tnbha(this.bgColor$delegate_1, this, bgColor$factory_0(), _set____db54di);
  };
  protoOf(Navbar).get_bgColor_24ewuj_k$ = function () {
    return WidgetRefreshDelegate__getValue_impl_lmjmy2(this.bgColor$delegate_1, this, bgColor$factory_1());
  };
  protoOf(Navbar).get_brandLink_4icknc_k$ = function () {
    return this.brandLink_1;
  };
  protoOf(Navbar).get_container_ihyj1o_k$ = function () {
    return this.container_1;
  };
  protoOf(Navbar).get_extContainer_u9c9dv_k$ = function () {
    return this.extContainer_1;
  };
  protoOf(Navbar).render_fgfjvu_k$ = function () {
    return this.render_prnnht_k$('nav', this.childrenVNodes_2corie_k$());
  };
  protoOf(Navbar).add_rekwpt_k$ = function (child) {
    this.container_1.add_rekwpt_k$(child);
  };
  protoOf(Navbar).add_t9z7x3_k$ = function (position, child) {
    this.container_1.add_t9z7x3_k$(position, child);
  };
  protoOf(Navbar).addAll_a94ixq_k$ = function (children) {
    this.container_1.addAll_a94ixq_k$(children);
  };
  protoOf(Navbar).remove_j7k0x0_k$ = function (child) {
    this.container_1.remove_j7k0x0_k$(child);
  };
  protoOf(Navbar).removeAt_rql1ap_k$ = function (position) {
    this.container_1.removeAt_rql1ap_k$(position);
  };
  protoOf(Navbar).removeAll_c84dd9_k$ = function () {
    this.container_1.removeAll_c84dd9_k$();
  };
  protoOf(Navbar).disposeAll_hpz7bi_k$ = function () {
    this.container_1.disposeAll_hpz7bi_k$();
  };
  protoOf(Navbar).getChildren_97y0zv_k$ = function () {
    return this.container_1.getChildren_97y0zv_k$();
  };
  protoOf(Navbar).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(SimplePanel).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    if (equals(this.get_nColor_gjhx26_k$(), NavbarColor_DARK_getInstance())) {
      attributeSetBuilder.add_lbri6p_k$('data-bs-theme', 'dark');
    }
  };
  protoOf(Navbar).buildClassSet_myme1g_k$ = function (classSetBuilder) {
    protoOf(SimplePanel).buildClassSet_myme1g_k$.call(this, classSetBuilder);
    classSetBuilder.add_udnk2x_k$('navbar');
    classSetBuilder.add_9rsi26_k$(this.get_type_wovaf7_k$());
    classSetBuilder.add_9rsi26_k$(this.get_expand_d38tr7_k$());
    if (equals(this.get_nColor_gjhx26_k$(), NavbarColor_LIGHT_getInstance())) {
      classSetBuilder.add_udnk2x_k$(ensureNotNull(this.get_nColor_gjhx26_k$()).navbarColor_1);
    }
    classSetBuilder.add_udnk2x_k$(this.get_bgColor_24ewuj_k$().get_className_8cmv0a_k$());
  };
  var NavbarExpand_ALWAYS_instance;
  var NavbarExpand_XL_instance;
  var NavbarExpand_LG_instance;
  var NavbarExpand_MD_instance;
  var NavbarExpand_SM_instance;
  var NavbarExpand_XXL_instance;
  function values_4() {
    return [NavbarExpand_ALWAYS_getInstance(), NavbarExpand_XL_getInstance(), NavbarExpand_LG_getInstance(), NavbarExpand_MD_getInstance(), NavbarExpand_SM_getInstance(), NavbarExpand_XXL_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'ALWAYS':
        return NavbarExpand_ALWAYS_getInstance();
      case 'XL':
        return NavbarExpand_XL_getInstance();
      case 'LG':
        return NavbarExpand_LG_getInstance();
      case 'MD':
        return NavbarExpand_MD_getInstance();
      case 'SM':
        return NavbarExpand_SM_getInstance();
      case 'XXL':
        return NavbarExpand_XXL_getInstance();
      default:
        NavbarExpand_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var NavbarExpand_entriesInitialized;
  function NavbarExpand_initEntries() {
    if (NavbarExpand_entriesInitialized)
      return Unit_getInstance();
    NavbarExpand_entriesInitialized = true;
    NavbarExpand_ALWAYS_instance = new NavbarExpand('ALWAYS', 0, 'navbar-expand');
    NavbarExpand_XL_instance = new NavbarExpand('XL', 1, 'navbar-expand-xl');
    NavbarExpand_LG_instance = new NavbarExpand('LG', 2, 'navbar-expand-lg');
    NavbarExpand_MD_instance = new NavbarExpand('MD', 3, 'navbar-expand-md');
    NavbarExpand_SM_instance = new NavbarExpand('SM', 4, 'navbar-expand-sm');
    NavbarExpand_XXL_instance = new NavbarExpand('XXL', 5, 'navbar-expand-xxl');
  }
  var $ENTRIES_4;
  function NavbarExpand(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(NavbarExpand).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  var NavbarType_FIXEDTOP_instance;
  var NavbarType_FIXEDBOTTOM_instance;
  var NavbarType_STICKYTOP_instance;
  function values_5() {
    return [NavbarType_FIXEDTOP_getInstance(), NavbarType_FIXEDBOTTOM_getInstance(), NavbarType_STICKYTOP_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'FIXEDTOP':
        return NavbarType_FIXEDTOP_getInstance();
      case 'FIXEDBOTTOM':
        return NavbarType_FIXEDBOTTOM_getInstance();
      case 'STICKYTOP':
        return NavbarType_STICKYTOP_getInstance();
      default:
        NavbarType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var NavbarType_entriesInitialized;
  function NavbarType_initEntries() {
    if (NavbarType_entriesInitialized)
      return Unit_getInstance();
    NavbarType_entriesInitialized = true;
    NavbarType_FIXEDTOP_instance = new NavbarType('FIXEDTOP', 0, 'fixed-top');
    NavbarType_FIXEDBOTTOM_instance = new NavbarType('FIXEDBOTTOM', 1, 'fixed-bottom');
    NavbarType_STICKYTOP_instance = new NavbarType('STICKYTOP', 2, 'sticky-top');
  }
  var $ENTRIES_5;
  function NavbarType(name, ordinal, className) {
    Enum.call(this, name, ordinal);
    this.className_1 = className;
  }
  protoOf(NavbarType).get_className_8cmv0a_k$ = function () {
    return this.className_1;
  };
  var NavbarColor_LIGHT_instance;
  var NavbarColor_DARK_instance;
  function values_6() {
    return [NavbarColor_LIGHT_getInstance(), NavbarColor_DARK_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'LIGHT':
        return NavbarColor_LIGHT_getInstance();
      case 'DARK':
        return NavbarColor_DARK_getInstance();
      default:
        NavbarColor_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var NavbarColor_entriesInitialized;
  function NavbarColor_initEntries() {
    if (NavbarColor_entriesInitialized)
      return Unit_getInstance();
    NavbarColor_entriesInitialized = true;
    NavbarColor_LIGHT_instance = new NavbarColor('LIGHT', 0, 'navbar-light');
    NavbarColor_DARK_instance = new NavbarColor('DARK', 1, 'navbar-dark');
  }
  var $ENTRIES_6;
  function NavbarColor(name, ordinal, navbarColor) {
    Enum.call(this, name, ordinal);
    this.navbarColor_1 = navbarColor;
  }
  protoOf(NavbarColor).get_navbarColor_myyr8e_k$ = function () {
    return this.navbarColor_1;
  };
  function _get_idc__e6a609_1($this) {
    return $this.idc_1;
  }
  function _get_toggle__itd7w7($this) {
    return $this.toggle_1;
  }
  function NavbarButton(idc, toggle) {
    toggle = toggle === VOID ? 'Toggle navigation' : toggle;
    SimplePanel.call(this, 'navbar-toggler');
    this.idc_1 = idc;
    this.toggle_1 = toggle;
    span(this, VOID, VOID, VOID, 'navbar-toggler-icon');
  }
  protoOf(NavbarButton).render_fgfjvu_k$ = function () {
    return this.render_prnnht_k$('button', this.childrenVNodes_2corie_k$());
  };
  protoOf(NavbarButton).buildAttributeSet_etcqhg_k$ = function (attributeSetBuilder) {
    protoOf(SimplePanel).buildAttributeSet_etcqhg_k$.call(this, attributeSetBuilder);
    attributeSetBuilder.add_lbri6p_k$('type', 'button');
    attributeSetBuilder.add_lbri6p_k$('data-bs-toggle', 'collapse');
    attributeSetBuilder.add_lbri6p_k$('data-bs-target', '#' + this.idc_1);
    attributeSetBuilder.add_lbri6p_k$('aria-controls', this.idc_1);
    attributeSetBuilder.add_lbri6p_k$('aria-expanded', 'false');
    attributeSetBuilder.add_lbri6p_k$('aria-label', this.toggle_1);
  };
  function NavbarExpand_ALWAYS_getInstance() {
    NavbarExpand_initEntries();
    return NavbarExpand_ALWAYS_instance;
  }
  function NavbarExpand_XL_getInstance() {
    NavbarExpand_initEntries();
    return NavbarExpand_XL_instance;
  }
  function NavbarExpand_LG_getInstance() {
    NavbarExpand_initEntries();
    return NavbarExpand_LG_instance;
  }
  function NavbarExpand_MD_getInstance() {
    NavbarExpand_initEntries();
    return NavbarExpand_MD_instance;
  }
  function NavbarExpand_SM_getInstance() {
    NavbarExpand_initEntries();
    return NavbarExpand_SM_instance;
  }
  function NavbarExpand_XXL_getInstance() {
    NavbarExpand_initEntries();
    return NavbarExpand_XXL_instance;
  }
  function NavbarType_FIXEDTOP_getInstance() {
    NavbarType_initEntries();
    return NavbarType_FIXEDTOP_instance;
  }
  function NavbarType_FIXEDBOTTOM_getInstance() {
    NavbarType_initEntries();
    return NavbarType_FIXEDBOTTOM_instance;
  }
  function NavbarType_STICKYTOP_getInstance() {
    NavbarType_initEntries();
    return NavbarType_STICKYTOP_instance;
  }
  function NavbarColor_LIGHT_getInstance() {
    NavbarColor_initEntries();
    return NavbarColor_LIGHT_instance;
  }
  function NavbarColor_DARK_getInstance() {
    NavbarColor_initEntries();
    return NavbarColor_DARK_instance;
  }
  function type$factory() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_hvq0bu_k$(value);
    });
  }
  function expand$factory() {
    return getPropertyCallableRef('expand', 1, KMutableProperty1, function (receiver) {
      return receiver.get_expand_d38tr7_k$();
    }, function (receiver, value) {
      return receiver.set_expand_2qx822_k$(value);
    });
  }
  function nColor$factory() {
    return getPropertyCallableRef('nColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_nColor_gjhx26_k$();
    }, function (receiver, value) {
      return receiver.set_nColor_g4rmoj_k$(value);
    });
  }
  function bgColor$factory() {
    return getPropertyCallableRef('bgColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_bgColor_24ewuj_k$();
    }, function (receiver, value) {
      return receiver.set_bgColor_fl7n9f_k$(value);
    });
  }
  function type$factory_0() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_hvq0bu_k$(value);
    });
  }
  function type$factory_1() {
    return getPropertyCallableRef('type', 1, KMutableProperty1, function (receiver) {
      return receiver.get_type_wovaf7_k$();
    }, function (receiver, value) {
      return receiver.set_type_hvq0bu_k$(value);
    });
  }
  function expand$factory_0() {
    return getPropertyCallableRef('expand', 1, KMutableProperty1, function (receiver) {
      return receiver.get_expand_d38tr7_k$();
    }, function (receiver, value) {
      return receiver.set_expand_2qx822_k$(value);
    });
  }
  function expand$factory_1() {
    return getPropertyCallableRef('expand', 1, KMutableProperty1, function (receiver) {
      return receiver.get_expand_d38tr7_k$();
    }, function (receiver, value) {
      return receiver.set_expand_2qx822_k$(value);
    });
  }
  function nColor$factory_0() {
    return getPropertyCallableRef('nColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_nColor_gjhx26_k$();
    }, function (receiver, value) {
      return receiver.set_nColor_g4rmoj_k$(value);
    });
  }
  function nColor$factory_1() {
    return getPropertyCallableRef('nColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_nColor_gjhx26_k$();
    }, function (receiver, value) {
      return receiver.set_nColor_g4rmoj_k$(value);
    });
  }
  function bgColor$factory_0() {
    return getPropertyCallableRef('bgColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_bgColor_24ewuj_k$();
    }, function (receiver, value) {
      return receiver.set_bgColor_fl7n9f_k$(value);
    });
  }
  function bgColor$factory_1() {
    return getPropertyCallableRef('bgColor', 1, KMutableProperty1, function (receiver) {
      return receiver.get_bgColor_24ewuj_k$();
    }, function (receiver, value) {
      return receiver.set_bgColor_fl7n9f_k$(value);
    });
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
        var tmp0 = get_entries_7();
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
  function values_7() {
    return [Theme_AUTO_getInstance(), Theme_LIGHT_getInstance(), Theme_DARK_getInstance()];
  }
  function valueOf_7(value) {
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
  function get_entries_7() {
    if ($ENTRIES_7 == null)
      $ENTRIES_7 = enumEntries(values_7());
    return $ENTRIES_7;
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
  var $ENTRIES_7;
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
  //region block: post-declaration
  protoOf(DropDownButton$buildClassSet$1).add_9rsi26_k$ = add;
  protoOf(DropDownButton$buildAttributeSet$1).add$default_4n2esg_k$ = add$default;
  protoOf(DropDownButton$buildAttributeSet$1).add_qyhf6x_k$ = add_0;
  protoOf(DropDownButton$buildAttributeSet$1).addAll_h65jxg_k$ = addAll;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BsBgColor_BODYSECONDARY_getInstance;
  _.$_$.b = BsBorder_BORDERDARK_getInstance;
  _.$_$.c = NavbarExpand_ALWAYS_getInstance;
  _.$_$.d = ThemeManager_getInstance;
  _.$_$.e = BootstrapCssModule_getInstance;
  _.$_$.f = BootstrapModule_getInstance;
  _.$_$.g = addBsBgColor;
  _.$_$.h = addBsBorder;
  _.$_$.i = removeBsBgColor;
  _.$_$.j = dropDown;
  _.$_$.k = Navbar;
  _.$_$.l = navForm;
  _.$_$.m = navLink;
  _.$_$.n = navbar;
  _.$_$.o = nav;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-bootstrap.js.map
