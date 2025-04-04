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
  var protoOf = kotlin_kotlin.$_$.eb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ca;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var THROW_CCE = kotlin_kotlin.$_$.pe;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var initMetadataForObject = kotlin_kotlin.$_$.ga;
  var VOID = kotlin_kotlin.$_$.e;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var objectCreate = kotlin_kotlin.$_$.db;
  var getStringHashCode = kotlin_kotlin.$_$.z9;
  var initMetadataForClass = kotlin_kotlin.$_$.ba;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TokenDTO, 'TokenDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LoginUserDTO, 'LoginUserDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.TokenDTO', this, 1);
    tmp0_serialDesc.addElement_5pzumi_k$('token', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_8za4rg_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.token_1);
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
    var tmp5_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_1xqz0n_k$(tmp0_desc);
    return TokenDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function TokenDTO_init_$Init$(seen0, token, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance().descriptor_1);
    }
    $this.token_1 = token;
    return $this;
  }
  function TokenDTO_init_$Create$(seen0, token, serializationConstructorMarker) {
    return TokenDTO_init_$Init$(seen0, token, serializationConstructorMarker, objectCreate(protoOf(TokenDTO)));
  }
  function TokenDTO(token) {
    Companion_getInstance();
    this.token_1 = token;
  }
  protoOf(TokenDTO).get_token_iz6pxs_k$ = function () {
    return this.token_1;
  };
  protoOf(TokenDTO).component1_7eebsc_k$ = function () {
    return this.token_1;
  };
  protoOf(TokenDTO).copy_a35qlh_k$ = function (token) {
    return new TokenDTO(token);
  };
  protoOf(TokenDTO).copy$default_pakinr_k$ = function (token, $super) {
    token = token === VOID ? this.token_1 : token;
    return $super === VOID ? this.copy_a35qlh_k$(token) : $super.copy_a35qlh_k$.call(this, token);
  };
  protoOf(TokenDTO).toString = function () {
    return 'TokenDTO(token=' + this.token_1 + ')';
  };
  protoOf(TokenDTO).hashCode = function () {
    return getStringHashCode(this.token_1);
  };
  protoOf(TokenDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TokenDTO))
      return false;
    var tmp0_other_with_cast = other instanceof TokenDTO ? other : THROW_CCE();
    if (!(this.token_1 === tmp0_other_with_cast.token_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.user.LoginUserDTO', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('username', false);
    tmp0_serialDesc.addElement_5pzumi_k$('password', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).serialize_c5j6c3_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.username_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.password_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_c5j6c3_k$(encoder, value instanceof LoginUserDTO ? value : THROW_CCE());
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
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
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function LoginUserDTO_init_$Init$(seen0, username, password, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().descriptor_1);
    }
    $this.username_1 = username;
    $this.password_1 = password;
    return $this;
  }
  function LoginUserDTO_init_$Create$(seen0, username, password, serializationConstructorMarker) {
    return LoginUserDTO_init_$Init$(seen0, username, password, serializationConstructorMarker, objectCreate(protoOf(LoginUserDTO)));
  }
  function LoginUserDTO(username, password) {
    Companion_getInstance_0();
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
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LoginUserDTO;
  _.$_$.b = TokenDTO;
  _.$_$.c = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=epicer-common.js.map
