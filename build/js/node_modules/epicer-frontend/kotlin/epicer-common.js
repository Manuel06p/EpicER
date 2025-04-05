(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './Kotlin-DateTime-library-kotlinx-datetime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'epicer-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'epicer-common'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'epicer-common'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'epicer-common'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'epicer-common'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'epicer-common'.");
    }
    globalThis['epicer-common'] = factory(typeof globalThis['epicer-common'] === 'undefined' ? {} : globalThis['epicer-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['Kotlin-DateTime-library-kotlinx-datetime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_datetime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.eb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ca;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var THROW_CCE = kotlin_kotlin.$_$.pe;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var initMetadataForObject = kotlin_kotlin.$_$.ga;
  var VOID = kotlin_kotlin.$_$.e;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var objectCreate = kotlin_kotlin.$_$.db;
  var getStringHashCode = kotlin_kotlin.$_$.z9;
  var initMetadataForClass = kotlin_kotlin.$_$.ba;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var LocalDateTimeIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var toString = kotlin_kotlin.$_$.hb;
  var hashCode = kotlin_kotlin.$_$.aa;
  var equals = kotlin_kotlin.$_$.v9;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TokenDTO, 'TokenDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BaseUserDTO, 'BaseUserDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LoginUserDTO, 'LoginUserDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.TokenDTO', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('token', false);
    tmp0_serialDesc.addElement_5pzumi_k$('baseUserDTO', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_8za4rg_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.token_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, $serializer_getInstance_0(), value.baseUserDTO_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_8za4rg_k$(encoder, value instanceof TokenDTO ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return TokenDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_0()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function TokenDTO_init_$Init$(seen0, token, baseUserDTO, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().descriptor_1);
    }
    $this.token_1 = token;
    $this.baseUserDTO_1 = baseUserDTO;
    return $this;
  }
  function TokenDTO_init_$Create$(seen0, token, baseUserDTO, serializationConstructorMarker) {
    return TokenDTO_init_$Init$(seen0, token, baseUserDTO, serializationConstructorMarker, objectCreate(protoOf(TokenDTO)));
  }
  function TokenDTO(token, baseUserDTO) {
    Companion_getInstance();
    this.token_1 = token;
    this.baseUserDTO_1 = baseUserDTO;
  }
  protoOf(TokenDTO).get_token_iz6pxs_k$ = function () {
    return this.token_1;
  };
  protoOf(TokenDTO).get_baseUserDTO_liaq92_k$ = function () {
    return this.baseUserDTO_1;
  };
  protoOf(TokenDTO).component1_7eebsc_k$ = function () {
    return this.token_1;
  };
  protoOf(TokenDTO).component2_7eebsb_k$ = function () {
    return this.baseUserDTO_1;
  };
  protoOf(TokenDTO).copy_m0bhbh_k$ = function (token, baseUserDTO) {
    return new TokenDTO(token, baseUserDTO);
  };
  protoOf(TokenDTO).copy$default_tjo0nu_k$ = function (token, baseUserDTO, $super) {
    token = token === VOID ? this.token_1 : token;
    baseUserDTO = baseUserDTO === VOID ? this.baseUserDTO_1 : baseUserDTO;
    return $super === VOID ? this.copy_m0bhbh_k$(token, baseUserDTO) : $super.copy_m0bhbh_k$.call(this, token, baseUserDTO);
  };
  protoOf(TokenDTO).toString = function () {
    return 'TokenDTO(token=' + this.token_1 + ', baseUserDTO=' + this.baseUserDTO_1.toString() + ')';
  };
  protoOf(TokenDTO).hashCode = function () {
    var result = getStringHashCode(this.token_1);
    result = imul(result, 31) + this.baseUserDTO_1.hashCode() | 0;
    return result;
  };
  protoOf(TokenDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TokenDTO))
      return false;
    var tmp0_other_with_cast = other instanceof TokenDTO ? other : THROW_CCE();
    if (!(this.token_1 === tmp0_other_with_cast.token_1))
      return false;
    if (!this.baseUserDTO_1.equals(tmp0_other_with_cast.baseUserDTO_1))
      return false;
    return true;
  };
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, new ArrayListSerializer(StringSerializer_getInstance()), null];
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.user.BaseUserDTO', this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('username', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('roles', false);
    tmp0_serialDesc.addElement_5pzumi_k$('created_at', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).serialize_t0a3cb_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().$childSerializers_1;
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.username_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.name_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 2, tmp2_cached[2], value.roles_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 3, LocalDateTimeIso8601Serializer_getInstance(), value.created_at_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_t0a3cb_k$(encoder, value instanceof BaseUserDTO ? value : THROW_CCE());
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp9_cached = Companion_getInstance_0().$childSerializers_1;
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, LocalDateTimeIso8601Serializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, LocalDateTimeIso8601Serializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BaseUserDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_0().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2], LocalDateTimeIso8601Serializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function BaseUserDTO_init_$Init$(seen0, username, name, roles, created_at, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_0().descriptor_1);
    }
    $this.username_1 = username;
    $this.name_1 = name;
    $this.roles_1 = roles;
    $this.created_at_1 = created_at;
    return $this;
  }
  function BaseUserDTO_init_$Create$(seen0, username, name, roles, created_at, serializationConstructorMarker) {
    return BaseUserDTO_init_$Init$(seen0, username, name, roles, created_at, serializationConstructorMarker, objectCreate(protoOf(BaseUserDTO)));
  }
  function BaseUserDTO(username, name, roles, created_at) {
    Companion_getInstance_0();
    this.username_1 = username;
    this.name_1 = name;
    this.roles_1 = roles;
    this.created_at_1 = created_at;
  }
  protoOf(BaseUserDTO).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(BaseUserDTO).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(BaseUserDTO).get_roles_iy35hw_k$ = function () {
    return this.roles_1;
  };
  protoOf(BaseUserDTO).get_created_at_2h7xbn_k$ = function () {
    return this.created_at_1;
  };
  protoOf(BaseUserDTO).component1_7eebsc_k$ = function () {
    return this.username_1;
  };
  protoOf(BaseUserDTO).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(BaseUserDTO).component3_7eebsa_k$ = function () {
    return this.roles_1;
  };
  protoOf(BaseUserDTO).component4_7eebs9_k$ = function () {
    return this.created_at_1;
  };
  protoOf(BaseUserDTO).copy_jvsjf2_k$ = function (username, name, roles, created_at) {
    return new BaseUserDTO(username, name, roles, created_at);
  };
  protoOf(BaseUserDTO).copy$default_tj0lve_k$ = function (username, name, roles, created_at, $super) {
    username = username === VOID ? this.username_1 : username;
    name = name === VOID ? this.name_1 : name;
    roles = roles === VOID ? this.roles_1 : roles;
    created_at = created_at === VOID ? this.created_at_1 : created_at;
    return $super === VOID ? this.copy_jvsjf2_k$(username, name, roles, created_at) : $super.copy_jvsjf2_k$.call(this, username, name, roles, created_at);
  };
  protoOf(BaseUserDTO).toString = function () {
    return 'BaseUserDTO(username=' + this.username_1 + ', name=' + this.name_1 + ', roles=' + toString(this.roles_1) + ', created_at=' + this.created_at_1.toString() + ')';
  };
  protoOf(BaseUserDTO).hashCode = function () {
    var result = getStringHashCode(this.username_1);
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + hashCode(this.roles_1) | 0;
    result = imul(result, 31) + this.created_at_1.hashCode() | 0;
    return result;
  };
  protoOf(BaseUserDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseUserDTO))
      return false;
    var tmp0_other_with_cast = other instanceof BaseUserDTO ? other : THROW_CCE();
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.roles_1, tmp0_other_with_cast.roles_1))
      return false;
    if (!this.created_at_1.equals(tmp0_other_with_cast.created_at_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.user.LoginUserDTO', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('username', false);
    tmp0_serialDesc.addElement_5pzumi_k$('password', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).serialize_c5j6c3_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.username_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.password_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_c5j6c3_k$(encoder, value instanceof LoginUserDTO ? value : THROW_CCE());
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return LoginUserDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function LoginUserDTO_init_$Init$(seen0, username, password, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().descriptor_1);
    }
    $this.username_1 = username;
    $this.password_1 = password;
    return $this;
  }
  function LoginUserDTO_init_$Create$(seen0, username, password, serializationConstructorMarker) {
    return LoginUserDTO_init_$Init$(seen0, username, password, serializationConstructorMarker, objectCreate(protoOf(LoginUserDTO)));
  }
  function LoginUserDTO(username, password) {
    Companion_getInstance_1();
    this.username_1 = username;
    this.password_1 = password;
  }
  protoOf(LoginUserDTO).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(LoginUserDTO).get_password_bodifw_k$ = function () {
    return this.password_1;
  };
  protoOf(LoginUserDTO).component1_7eebsc_k$ = function () {
    return this.username_1;
  };
  protoOf(LoginUserDTO).component2_7eebsb_k$ = function () {
    return this.password_1;
  };
  protoOf(LoginUserDTO).copy_plwnsl_k$ = function (username, password) {
    return new LoginUserDTO(username, password);
  };
  protoOf(LoginUserDTO).copy$default_whmr3t_k$ = function (username, password, $super) {
    username = username === VOID ? this.username_1 : username;
    password = password === VOID ? this.password_1 : password;
    return $super === VOID ? this.copy_plwnsl_k$(username, password) : $super.copy_plwnsl_k$.call(this, username, password);
  };
  protoOf(LoginUserDTO).toString = function () {
    return 'LoginUserDTO(username=' + this.username_1 + ', password=' + this.password_1 + ')';
  };
  protoOf(LoginUserDTO).hashCode = function () {
    var result = getStringHashCode(this.username_1);
    result = imul(result, 31) + getStringHashCode(this.password_1) | 0;
    return result;
  };
  protoOf(LoginUserDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoginUserDTO))
      return false;
    var tmp0_other_with_cast = other instanceof LoginUserDTO ? other : THROW_CCE();
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    if (!(this.password_1 === tmp0_other_with_cast.password_1))
      return false;
    return true;
  };
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BaseUserDTO;
  _.$_$.b = LoginUserDTO;
  _.$_$.c = TokenDTO;
  _.$_$.d = Companion_getInstance_0;
  _.$_$.e = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=epicer-common.js.map
