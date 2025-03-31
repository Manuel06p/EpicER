(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'epicer-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'epicer-common'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'epicer-common'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'epicer-common'.");
    }
    globalThis['epicer-common'] = factory(typeof globalThis['epicer-common'] === 'undefined' ? {} : globalThis['epicer-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.dd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ac;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var THROW_CCE = kotlin_kotlin.$_$.ug;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var initMetadataForObject = kotlin_kotlin.$_$.ec;
  var VOID = kotlin_kotlin.$_$.g;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var objectCreate = kotlin_kotlin.$_$.cd;
  var getStringHashCode = kotlin_kotlin.$_$.xb;
  var initMetadataForClass = kotlin_kotlin.$_$.zb;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NewUserDTO, 'NewUserDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  //endregion
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.user.NewUserDTO', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('username', false);
    tmp0_serialDesc.addElement_5pzumi_k$('password', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_a25kpo_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.username_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.password_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 2, value.name_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_a25kpo_k$(encoder, value instanceof NewUserDTO ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return NewUserDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function NewUserDTO_init_$Init$(seen0, username, password, name, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance().descriptor_1);
    }
    $this.username_1 = username;
    $this.password_1 = password;
    $this.name_1 = name;
    return $this;
  }
  function NewUserDTO_init_$Create$(seen0, username, password, name, serializationConstructorMarker) {
    return NewUserDTO_init_$Init$(seen0, username, password, name, serializationConstructorMarker, objectCreate(protoOf(NewUserDTO)));
  }
  function NewUserDTO(username, password, name) {
    Companion_getInstance();
    this.username_1 = username;
    this.password_1 = password;
    this.name_1 = name;
  }
  protoOf(NewUserDTO).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(NewUserDTO).get_password_bodifw_k$ = function () {
    return this.password_1;
  };
  protoOf(NewUserDTO).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(NewUserDTO).component1_7eebsc_k$ = function () {
    return this.username_1;
  };
  protoOf(NewUserDTO).component2_7eebsb_k$ = function () {
    return this.password_1;
  };
  protoOf(NewUserDTO).component3_7eebsa_k$ = function () {
    return this.name_1;
  };
  protoOf(NewUserDTO).copy_nc7k0r_k$ = function (username, password, name) {
    return new NewUserDTO(username, password, name);
  };
  protoOf(NewUserDTO).copy$default_wtrnkp_k$ = function (username, password, name, $super) {
    username = username === VOID ? this.username_1 : username;
    password = password === VOID ? this.password_1 : password;
    name = name === VOID ? this.name_1 : name;
    return $super === VOID ? this.copy_nc7k0r_k$(username, password, name) : $super.copy_nc7k0r_k$.call(this, username, password, name);
  };
  protoOf(NewUserDTO).toString = function () {
    return 'NewUserDTO(username=' + this.username_1 + ', password=' + this.password_1 + ', name=' + this.name_1 + ')';
  };
  protoOf(NewUserDTO).hashCode = function () {
    var result = getStringHashCode(this.username_1);
    result = imul(result, 31) + getStringHashCode(this.password_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    return result;
  };
  protoOf(NewUserDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NewUserDTO))
      return false;
    var tmp0_other_with_cast = other instanceof NewUserDTO ? other : THROW_CCE();
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    if (!(this.password_1 === tmp0_other_with_cast.password_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NewUserDTO;
  //endregion
  return _;
}));

//# sourceMappingURL=epicer-common.js.map
