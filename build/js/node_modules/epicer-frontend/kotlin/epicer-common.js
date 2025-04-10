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
  var protoOf = kotlin_kotlin.$_$.jb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ha;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var THROW_CCE = kotlin_kotlin.$_$.ve;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var initMetadataForObject = kotlin_kotlin.$_$.la;
  var VOID = kotlin_kotlin.$_$.f;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var objectCreate = kotlin_kotlin.$_$.ib;
  var getStringHashCode = kotlin_kotlin.$_$.ea;
  var initMetadataForClass = kotlin_kotlin.$_$.ga;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var toString = kotlin_kotlin.$_$.xf;
  var getNumberHashCode = kotlin_kotlin.$_$.ca;
  var equals = kotlin_kotlin.$_$.z9;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var toString_0 = kotlin_kotlin.$_$.mb;
  var hashCode = kotlin_kotlin.$_$.fa;
  var LocalDateTimeIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TokenDTO, 'TokenDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BaseRecipeDTO, 'BaseRecipeDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FullIngredientDTO, 'FullIngredientDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FullIngredientInRecipeDTO, 'FullIngredientInRecipeDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FullRecipeDTO, 'FullRecipeDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FullSectionDTO, 'FullSectionDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FullStepDTO, 'FullStepDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FullUnitDTO, 'FullUnitDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BaseUserDTO, 'BaseUserDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LoginUserDTO, 'LoginUserDTO', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
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
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 1, $serializer_getInstance_7(), value.baseUserDTO_1);
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
      tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, $serializer_getInstance_7(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 1, $serializer_getInstance_7(), tmp5_local1);
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
    return [StringSerializer_getInstance(), $serializer_getInstance_7()];
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.recipe.BaseRecipeDTO', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('imageId', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).serialize_o61psb_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.name_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, IntSerializer_getInstance(), value.imageId_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_o61psb_k$(encoder, value instanceof BaseRecipeDTO ? value : THROW_CCE());
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return BaseRecipeDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function BaseRecipeDTO_init_$Init$(seen0, id, name, imageId, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_0().descriptor_1);
    }
    $this.id_1 = id;
    $this.name_1 = name;
    $this.imageId_1 = imageId;
    return $this;
  }
  function BaseRecipeDTO_init_$Create$(seen0, id, name, imageId, serializationConstructorMarker) {
    return BaseRecipeDTO_init_$Init$(seen0, id, name, imageId, serializationConstructorMarker, objectCreate(protoOf(BaseRecipeDTO)));
  }
  function BaseRecipeDTO(id, name, imageId) {
    Companion_getInstance_0();
    this.id_1 = id;
    this.name_1 = name;
    this.imageId_1 = imageId;
  }
  protoOf(BaseRecipeDTO).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(BaseRecipeDTO).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(BaseRecipeDTO).get_imageId_wvvawd_k$ = function () {
    return this.imageId_1;
  };
  protoOf(BaseRecipeDTO).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(BaseRecipeDTO).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(BaseRecipeDTO).component3_7eebsa_k$ = function () {
    return this.imageId_1;
  };
  protoOf(BaseRecipeDTO).copy_mliyz0_k$ = function (id, name, imageId) {
    return new BaseRecipeDTO(id, name, imageId);
  };
  protoOf(BaseRecipeDTO).copy$default_94v5l9_k$ = function (id, name, imageId, $super) {
    id = id === VOID ? this.id_1 : id;
    name = name === VOID ? this.name_1 : name;
    imageId = imageId === VOID ? this.imageId_1 : imageId;
    return $super === VOID ? this.copy_mliyz0_k$(id, name, imageId) : $super.copy_mliyz0_k$.call(this, id, name, imageId);
  };
  protoOf(BaseRecipeDTO).toString = function () {
    return 'BaseRecipeDTO(id=' + this.id_1 + ', name=' + this.name_1 + ', imageId=' + this.imageId_1 + ')';
  };
  protoOf(BaseRecipeDTO).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + (this.imageId_1 == null ? 0 : this.imageId_1) | 0;
    return result;
  };
  protoOf(BaseRecipeDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BaseRecipeDTO))
      return false;
    var tmp0_other_with_cast = other instanceof BaseRecipeDTO ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.imageId_1 == tmp0_other_with_cast.imageId_1))
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
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.recipe.FullIngredientDTO', this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('nameSingular', false);
    tmp0_serialDesc.addElement_5pzumi_k$('namePlural', false);
    tmp0_serialDesc.addElement_5pzumi_k$('imageId', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).serialize_4ra0p8_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.nameSingular_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.namePlural_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, IntSerializer_getInstance(), value.imageId_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_4ra0p8_k$(encoder, value instanceof FullIngredientDTO ? value : THROW_CCE());
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return FullIngredientDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function FullIngredientDTO_init_$Init$(seen0, id, nameSingular, namePlural, imageId, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_1().descriptor_1);
    }
    $this.id_1 = id;
    $this.nameSingular_1 = nameSingular;
    $this.namePlural_1 = namePlural;
    $this.imageId_1 = imageId;
    return $this;
  }
  function FullIngredientDTO_init_$Create$(seen0, id, nameSingular, namePlural, imageId, serializationConstructorMarker) {
    return FullIngredientDTO_init_$Init$(seen0, id, nameSingular, namePlural, imageId, serializationConstructorMarker, objectCreate(protoOf(FullIngredientDTO)));
  }
  function FullIngredientDTO(id, nameSingular, namePlural, imageId) {
    Companion_getInstance_1();
    this.id_1 = id;
    this.nameSingular_1 = nameSingular;
    this.namePlural_1 = namePlural;
    this.imageId_1 = imageId;
  }
  protoOf(FullIngredientDTO).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(FullIngredientDTO).get_nameSingular_ufd0cr_k$ = function () {
    return this.nameSingular_1;
  };
  protoOf(FullIngredientDTO).get_namePlural_y2zlhk_k$ = function () {
    return this.namePlural_1;
  };
  protoOf(FullIngredientDTO).get_imageId_wvvawd_k$ = function () {
    return this.imageId_1;
  };
  protoOf(FullIngredientDTO).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(FullIngredientDTO).component2_7eebsb_k$ = function () {
    return this.nameSingular_1;
  };
  protoOf(FullIngredientDTO).component3_7eebsa_k$ = function () {
    return this.namePlural_1;
  };
  protoOf(FullIngredientDTO).component4_7eebs9_k$ = function () {
    return this.imageId_1;
  };
  protoOf(FullIngredientDTO).copy_hcomt7_k$ = function (id, nameSingular, namePlural, imageId) {
    return new FullIngredientDTO(id, nameSingular, namePlural, imageId);
  };
  protoOf(FullIngredientDTO).copy$default_mdrqi2_k$ = function (id, nameSingular, namePlural, imageId, $super) {
    id = id === VOID ? this.id_1 : id;
    nameSingular = nameSingular === VOID ? this.nameSingular_1 : nameSingular;
    namePlural = namePlural === VOID ? this.namePlural_1 : namePlural;
    imageId = imageId === VOID ? this.imageId_1 : imageId;
    return $super === VOID ? this.copy_hcomt7_k$(id, nameSingular, namePlural, imageId) : $super.copy_hcomt7_k$.call(this, id, nameSingular, namePlural, imageId);
  };
  protoOf(FullIngredientDTO).toString = function () {
    return 'FullIngredientDTO(id=' + this.id_1 + ', nameSingular=' + this.nameSingular_1 + ', namePlural=' + this.namePlural_1 + ', imageId=' + this.imageId_1 + ')';
  };
  protoOf(FullIngredientDTO).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.nameSingular_1) | 0;
    result = imul(result, 31) + (this.namePlural_1 == null ? 0 : getStringHashCode(this.namePlural_1)) | 0;
    result = imul(result, 31) + (this.imageId_1 == null ? 0 : this.imageId_1) | 0;
    return result;
  };
  protoOf(FullIngredientDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FullIngredientDTO))
      return false;
    var tmp0_other_with_cast = other instanceof FullIngredientDTO ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.nameSingular_1 === tmp0_other_with_cast.nameSingular_1))
      return false;
    if (!(this.namePlural_1 == tmp0_other_with_cast.namePlural_1))
      return false;
    if (!(this.imageId_1 == tmp0_other_with_cast.imageId_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.recipe.FullIngredientInRecipeDTO', this, 5);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('notes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('quantity', false);
    tmp0_serialDesc.addElement_5pzumi_k$('unit', false);
    tmp0_serialDesc.addElement_5pzumi_k$('ingredient', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).serialize_9dfq4h_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.notes_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, DoubleSerializer_getInstance(), value.quantity_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, $serializer_getInstance_6(), value.unit_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 4, $serializer_getInstance_1(), value.ingredient_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_2).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_9dfq4h_k$(encoder, value instanceof FullIngredientInRecipeDTO ? value : THROW_CCE());
  };
  protoOf($serializer_2).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp9_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp9_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, $serializer_getInstance_6(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, $serializer_getInstance_1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, DoubleSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, $serializer_getInstance_6(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, $serializer_getInstance_1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.endStructure_1xqz0n_k$(tmp0_desc);
    return FullIngredientInRecipeDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_2).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_2).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable($serializer_getInstance_6()), $serializer_getInstance_1()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function FullIngredientInRecipeDTO_init_$Init$(seen0, id, notes, quantity, unit, ingredient, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_2().descriptor_1);
    }
    $this.id_1 = id;
    $this.notes_1 = notes;
    $this.quantity_1 = quantity;
    $this.unit_1 = unit;
    $this.ingredient_1 = ingredient;
    return $this;
  }
  function FullIngredientInRecipeDTO_init_$Create$(seen0, id, notes, quantity, unit, ingredient, serializationConstructorMarker) {
    return FullIngredientInRecipeDTO_init_$Init$(seen0, id, notes, quantity, unit, ingredient, serializationConstructorMarker, objectCreate(protoOf(FullIngredientInRecipeDTO)));
  }
  function FullIngredientInRecipeDTO(id, notes, quantity, unit, ingredient) {
    Companion_getInstance_2();
    this.id_1 = id;
    this.notes_1 = notes;
    this.quantity_1 = quantity;
    this.unit_1 = unit;
    this.ingredient_1 = ingredient;
  }
  protoOf(FullIngredientInRecipeDTO).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(FullIngredientInRecipeDTO).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(FullIngredientInRecipeDTO).get_quantity_hz47ro_k$ = function () {
    return this.quantity_1;
  };
  protoOf(FullIngredientInRecipeDTO).get_unit_wovp3h_k$ = function () {
    return this.unit_1;
  };
  protoOf(FullIngredientInRecipeDTO).get_ingredient_nl550m_k$ = function () {
    return this.ingredient_1;
  };
  protoOf(FullIngredientInRecipeDTO).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(FullIngredientInRecipeDTO).component2_7eebsb_k$ = function () {
    return this.notes_1;
  };
  protoOf(FullIngredientInRecipeDTO).component3_7eebsa_k$ = function () {
    return this.quantity_1;
  };
  protoOf(FullIngredientInRecipeDTO).component4_7eebs9_k$ = function () {
    return this.unit_1;
  };
  protoOf(FullIngredientInRecipeDTO).component5_7eebs8_k$ = function () {
    return this.ingredient_1;
  };
  protoOf(FullIngredientInRecipeDTO).copy_gr2nlf_k$ = function (id, notes, quantity, unit, ingredient) {
    return new FullIngredientInRecipeDTO(id, notes, quantity, unit, ingredient);
  };
  protoOf(FullIngredientInRecipeDTO).copy$default_3c5qrg_k$ = function (id, notes, quantity, unit, ingredient, $super) {
    id = id === VOID ? this.id_1 : id;
    notes = notes === VOID ? this.notes_1 : notes;
    quantity = quantity === VOID ? this.quantity_1 : quantity;
    unit = unit === VOID ? this.unit_1 : unit;
    ingredient = ingredient === VOID ? this.ingredient_1 : ingredient;
    return $super === VOID ? this.copy_gr2nlf_k$(id, notes, quantity, unit, ingredient) : $super.copy_gr2nlf_k$.call(this, id, notes, quantity, unit, ingredient);
  };
  protoOf(FullIngredientInRecipeDTO).toString = function () {
    return 'FullIngredientInRecipeDTO(id=' + this.id_1 + ', notes=' + this.notes_1 + ', quantity=' + this.quantity_1 + ', unit=' + toString(this.unit_1) + ', ingredient=' + this.ingredient_1.toString() + ')';
  };
  protoOf(FullIngredientInRecipeDTO).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + (this.notes_1 == null ? 0 : getStringHashCode(this.notes_1)) | 0;
    result = imul(result, 31) + (this.quantity_1 == null ? 0 : getNumberHashCode(this.quantity_1)) | 0;
    result = imul(result, 31) + (this.unit_1 == null ? 0 : this.unit_1.hashCode()) | 0;
    result = imul(result, 31) + this.ingredient_1.hashCode() | 0;
    return result;
  };
  protoOf(FullIngredientInRecipeDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FullIngredientInRecipeDTO))
      return false;
    var tmp0_other_with_cast = other instanceof FullIngredientInRecipeDTO ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.notes_1 == tmp0_other_with_cast.notes_1))
      return false;
    if (!equals(this.quantity_1, tmp0_other_with_cast.quantity_1))
      return false;
    if (!equals(this.unit_1, tmp0_other_with_cast.unit_1))
      return false;
    if (!this.ingredient_1.equals(tmp0_other_with_cast.ingredient_1))
      return false;
    return true;
  };
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, null, new ArrayListSerializer($serializer_getInstance_2()), new ArrayListSerializer($serializer_getInstance_4())];
  }
  protoOf(Companion_3).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.recipe.FullRecipeDTO', this, 7);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('description', false);
    tmp0_serialDesc.addElement_5pzumi_k$('portions', false);
    tmp0_serialDesc.addElement_5pzumi_k$('imageId', false);
    tmp0_serialDesc.addElement_5pzumi_k$('ingredientsInRecipe', false);
    tmp0_serialDesc.addElement_5pzumi_k$('sections', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).serialize_jyy9op_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().$childSerializers_1;
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.name_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.description_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, IntSerializer_getInstance(), value.portions_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 4, IntSerializer_getInstance(), value.imageId_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 5, tmp2_cached[5], value.ingredientsInRecipe_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 6, tmp2_cached[6], value.sections_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_3).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_jyy9op_k$(encoder, value instanceof FullRecipeDTO ? value : THROW_CCE());
  };
  protoOf($serializer_3).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp12_cached = Companion_getInstance_3().$childSerializers_1;
    if (tmp11_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp11_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, tmp12_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, tmp12_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, tmp12_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.endStructure_1xqz0n_k$(tmp0_desc);
    return FullRecipeDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_3).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_3).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_3().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), tmp0_cached[5], tmp0_cached[6]];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function FullRecipeDTO_init_$Init$(seen0, id, name, description, portions, imageId, ingredientsInRecipe, sections, serializationConstructorMarker, $this) {
    if (!(127 === (127 & seen0))) {
      throwMissingFieldException(seen0, 127, $serializer_getInstance_3().descriptor_1);
    }
    $this.id_1 = id;
    $this.name_1 = name;
    $this.description_1 = description;
    $this.portions_1 = portions;
    $this.imageId_1 = imageId;
    $this.ingredientsInRecipe_1 = ingredientsInRecipe;
    $this.sections_1 = sections;
    return $this;
  }
  function FullRecipeDTO_init_$Create$(seen0, id, name, description, portions, imageId, ingredientsInRecipe, sections, serializationConstructorMarker) {
    return FullRecipeDTO_init_$Init$(seen0, id, name, description, portions, imageId, ingredientsInRecipe, sections, serializationConstructorMarker, objectCreate(protoOf(FullRecipeDTO)));
  }
  function FullRecipeDTO(id, name, description, portions, imageId, ingredientsInRecipe, sections) {
    Companion_getInstance_3();
    this.id_1 = id;
    this.name_1 = name;
    this.description_1 = description;
    this.portions_1 = portions;
    this.imageId_1 = imageId;
    this.ingredientsInRecipe_1 = ingredientsInRecipe;
    this.sections_1 = sections;
  }
  protoOf(FullRecipeDTO).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(FullRecipeDTO).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(FullRecipeDTO).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(FullRecipeDTO).get_portions_jqwgy3_k$ = function () {
    return this.portions_1;
  };
  protoOf(FullRecipeDTO).get_imageId_wvvawd_k$ = function () {
    return this.imageId_1;
  };
  protoOf(FullRecipeDTO).get_ingredientsInRecipe_3mm3yk_k$ = function () {
    return this.ingredientsInRecipe_1;
  };
  protoOf(FullRecipeDTO).get_sections_g4k5xl_k$ = function () {
    return this.sections_1;
  };
  protoOf(FullRecipeDTO).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(FullRecipeDTO).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(FullRecipeDTO).component3_7eebsa_k$ = function () {
    return this.description_1;
  };
  protoOf(FullRecipeDTO).component4_7eebs9_k$ = function () {
    return this.portions_1;
  };
  protoOf(FullRecipeDTO).component5_7eebs8_k$ = function () {
    return this.imageId_1;
  };
  protoOf(FullRecipeDTO).component6_7eebs7_k$ = function () {
    return this.ingredientsInRecipe_1;
  };
  protoOf(FullRecipeDTO).component7_7eebs6_k$ = function () {
    return this.sections_1;
  };
  protoOf(FullRecipeDTO).copy_3og063_k$ = function (id, name, description, portions, imageId, ingredientsInRecipe, sections) {
    return new FullRecipeDTO(id, name, description, portions, imageId, ingredientsInRecipe, sections);
  };
  protoOf(FullRecipeDTO).copy$default_l7b1o6_k$ = function (id, name, description, portions, imageId, ingredientsInRecipe, sections, $super) {
    id = id === VOID ? this.id_1 : id;
    name = name === VOID ? this.name_1 : name;
    description = description === VOID ? this.description_1 : description;
    portions = portions === VOID ? this.portions_1 : portions;
    imageId = imageId === VOID ? this.imageId_1 : imageId;
    ingredientsInRecipe = ingredientsInRecipe === VOID ? this.ingredientsInRecipe_1 : ingredientsInRecipe;
    sections = sections === VOID ? this.sections_1 : sections;
    return $super === VOID ? this.copy_3og063_k$(id, name, description, portions, imageId, ingredientsInRecipe, sections) : $super.copy_3og063_k$.call(this, id, name, description, portions, imageId, ingredientsInRecipe, sections);
  };
  protoOf(FullRecipeDTO).toString = function () {
    return 'FullRecipeDTO(id=' + this.id_1 + ', name=' + this.name_1 + ', description=' + this.description_1 + ', portions=' + this.portions_1 + ', imageId=' + this.imageId_1 + ', ingredientsInRecipe=' + toString_0(this.ingredientsInRecipe_1) + ', sections=' + toString_0(this.sections_1) + ')';
  };
  protoOf(FullRecipeDTO).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + (this.description_1 == null ? 0 : getStringHashCode(this.description_1)) | 0;
    result = imul(result, 31) + (this.portions_1 == null ? 0 : this.portions_1) | 0;
    result = imul(result, 31) + (this.imageId_1 == null ? 0 : this.imageId_1) | 0;
    result = imul(result, 31) + hashCode(this.ingredientsInRecipe_1) | 0;
    result = imul(result, 31) + hashCode(this.sections_1) | 0;
    return result;
  };
  protoOf(FullRecipeDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FullRecipeDTO))
      return false;
    var tmp0_other_with_cast = other instanceof FullRecipeDTO ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.description_1 == tmp0_other_with_cast.description_1))
      return false;
    if (!(this.portions_1 == tmp0_other_with_cast.portions_1))
      return false;
    if (!(this.imageId_1 == tmp0_other_with_cast.imageId_1))
      return false;
    if (!equals(this.ingredientsInRecipe_1, tmp0_other_with_cast.ingredientsInRecipe_1))
      return false;
    if (!equals(this.sections_1, tmp0_other_with_cast.sections_1))
      return false;
    return true;
  };
  function _get_$childSerializers__r2zwns_0($this) {
    return $this.$childSerializers_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, new ArrayListSerializer($serializer_getInstance_5())];
  }
  protoOf(Companion_4).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.recipe.FullSectionDTO', this, 5);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('index', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('description', false);
    tmp0_serialDesc.addElement_5pzumi_k$('steps', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).serialize_fxrdf6_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().$childSerializers_1;
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 1, value.index_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.name_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.description_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 4, tmp2_cached[4], value.steps_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_4).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_fxrdf6_k$(encoder, value instanceof FullSectionDTO ? value : THROW_CCE());
  };
  protoOf($serializer_4).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp10_cached = Companion_getInstance_4().$childSerializers_1;
    if (tmp9_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp9_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.endStructure_1xqz0n_k$(tmp0_desc);
    return FullSectionDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_4).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_4).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_4().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[4]];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function FullSectionDTO_init_$Init$(seen0, id, index, name, description, steps, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_4().descriptor_1);
    }
    $this.id_1 = id;
    $this.index_1 = index;
    $this.name_1 = name;
    $this.description_1 = description;
    $this.steps_1 = steps;
    return $this;
  }
  function FullSectionDTO_init_$Create$(seen0, id, index, name, description, steps, serializationConstructorMarker) {
    return FullSectionDTO_init_$Init$(seen0, id, index, name, description, steps, serializationConstructorMarker, objectCreate(protoOf(FullSectionDTO)));
  }
  function FullSectionDTO(id, index, name, description, steps) {
    Companion_getInstance_4();
    this.id_1 = id;
    this.index_1 = index;
    this.name_1 = name;
    this.description_1 = description;
    this.steps_1 = steps;
  }
  protoOf(FullSectionDTO).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(FullSectionDTO).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(FullSectionDTO).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(FullSectionDTO).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(FullSectionDTO).get_steps_iyq03i_k$ = function () {
    return this.steps_1;
  };
  protoOf(FullSectionDTO).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(FullSectionDTO).component2_7eebsb_k$ = function () {
    return this.index_1;
  };
  protoOf(FullSectionDTO).component3_7eebsa_k$ = function () {
    return this.name_1;
  };
  protoOf(FullSectionDTO).component4_7eebs9_k$ = function () {
    return this.description_1;
  };
  protoOf(FullSectionDTO).component5_7eebs8_k$ = function () {
    return this.steps_1;
  };
  protoOf(FullSectionDTO).copy_yrjd31_k$ = function (id, index, name, description, steps) {
    return new FullSectionDTO(id, index, name, description, steps);
  };
  protoOf(FullSectionDTO).copy$default_6hhwur_k$ = function (id, index, name, description, steps, $super) {
    id = id === VOID ? this.id_1 : id;
    index = index === VOID ? this.index_1 : index;
    name = name === VOID ? this.name_1 : name;
    description = description === VOID ? this.description_1 : description;
    steps = steps === VOID ? this.steps_1 : steps;
    return $super === VOID ? this.copy_yrjd31_k$(id, index, name, description, steps) : $super.copy_yrjd31_k$.call(this, id, index, name, description, steps);
  };
  protoOf(FullSectionDTO).toString = function () {
    return 'FullSectionDTO(id=' + this.id_1 + ', index=' + this.index_1 + ', name=' + this.name_1 + ', description=' + this.description_1 + ', steps=' + toString_0(this.steps_1) + ')';
  };
  protoOf(FullSectionDTO).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + this.index_1 | 0;
    result = imul(result, 31) + (this.name_1 == null ? 0 : getStringHashCode(this.name_1)) | 0;
    result = imul(result, 31) + (this.description_1 == null ? 0 : getStringHashCode(this.description_1)) | 0;
    result = imul(result, 31) + hashCode(this.steps_1) | 0;
    return result;
  };
  protoOf(FullSectionDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FullSectionDTO))
      return false;
    var tmp0_other_with_cast = other instanceof FullSectionDTO ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.index_1 === tmp0_other_with_cast.index_1))
      return false;
    if (!(this.name_1 == tmp0_other_with_cast.name_1))
      return false;
    if (!(this.description_1 == tmp0_other_with_cast.description_1))
      return false;
    if (!equals(this.steps_1, tmp0_other_with_cast.steps_1))
      return false;
    return true;
  };
  function _get_$childSerializers__r2zwns_1($this) {
    return $this.$childSerializers_1;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, null, new ArrayListSerializer(IntSerializer_getInstance()), new ArrayListSerializer($serializer_getInstance_2())];
  }
  protoOf(Companion_5).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.recipe.FullStepDTO', this, 6);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('index', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('description', false);
    tmp0_serialDesc.addElement_5pzumi_k$('images', false);
    tmp0_serialDesc.addElement_5pzumi_k$('ingredientsInRecipe', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).serialize_hreayh_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().$childSerializers_1;
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 1, value.index_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 2, StringSerializer_getInstance(), value.name_1);
    tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.description_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 4, tmp2_cached[4], value.images_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 5, tmp2_cached[5], value.ingredientsInRecipe_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_5).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_hreayh_k$(encoder, value instanceof FullStepDTO ? value : THROW_CCE());
  };
  protoOf($serializer_5).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp11_cached = Companion_getInstance_5().$childSerializers_1;
    if (tmp10_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp10_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.endStructure_1xqz0n_k$(tmp0_desc);
    return FullStepDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_5).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_5).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_5().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[4], tmp0_cached[5]];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function FullStepDTO_init_$Init$(seen0, id, index, name, description, images, ingredientsInRecipe, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_5().descriptor_1);
    }
    $this.id_1 = id;
    $this.index_1 = index;
    $this.name_1 = name;
    $this.description_1 = description;
    $this.images_1 = images;
    $this.ingredientsInRecipe_1 = ingredientsInRecipe;
    return $this;
  }
  function FullStepDTO_init_$Create$(seen0, id, index, name, description, images, ingredientsInRecipe, serializationConstructorMarker) {
    return FullStepDTO_init_$Init$(seen0, id, index, name, description, images, ingredientsInRecipe, serializationConstructorMarker, objectCreate(protoOf(FullStepDTO)));
  }
  function FullStepDTO(id, index, name, description, images, ingredientsInRecipe) {
    Companion_getInstance_5();
    this.id_1 = id;
    this.index_1 = index;
    this.name_1 = name;
    this.description_1 = description;
    this.images_1 = images;
    this.ingredientsInRecipe_1 = ingredientsInRecipe;
  }
  protoOf(FullStepDTO).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(FullStepDTO).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(FullStepDTO).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(FullStepDTO).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(FullStepDTO).get_images_et448x_k$ = function () {
    return this.images_1;
  };
  protoOf(FullStepDTO).get_ingredientsInRecipe_3mm3yk_k$ = function () {
    return this.ingredientsInRecipe_1;
  };
  protoOf(FullStepDTO).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(FullStepDTO).component2_7eebsb_k$ = function () {
    return this.index_1;
  };
  protoOf(FullStepDTO).component3_7eebsa_k$ = function () {
    return this.name_1;
  };
  protoOf(FullStepDTO).component4_7eebs9_k$ = function () {
    return this.description_1;
  };
  protoOf(FullStepDTO).component5_7eebs8_k$ = function () {
    return this.images_1;
  };
  protoOf(FullStepDTO).component6_7eebs7_k$ = function () {
    return this.ingredientsInRecipe_1;
  };
  protoOf(FullStepDTO).copy_ptcd6v_k$ = function (id, index, name, description, images, ingredientsInRecipe) {
    return new FullStepDTO(id, index, name, description, images, ingredientsInRecipe);
  };
  protoOf(FullStepDTO).copy$default_6dyz55_k$ = function (id, index, name, description, images, ingredientsInRecipe, $super) {
    id = id === VOID ? this.id_1 : id;
    index = index === VOID ? this.index_1 : index;
    name = name === VOID ? this.name_1 : name;
    description = description === VOID ? this.description_1 : description;
    images = images === VOID ? this.images_1 : images;
    ingredientsInRecipe = ingredientsInRecipe === VOID ? this.ingredientsInRecipe_1 : ingredientsInRecipe;
    return $super === VOID ? this.copy_ptcd6v_k$(id, index, name, description, images, ingredientsInRecipe) : $super.copy_ptcd6v_k$.call(this, id, index, name, description, images, ingredientsInRecipe);
  };
  protoOf(FullStepDTO).toString = function () {
    return 'FullStepDTO(id=' + this.id_1 + ', index=' + this.index_1 + ', name=' + this.name_1 + ', description=' + this.description_1 + ', images=' + toString_0(this.images_1) + ', ingredientsInRecipe=' + toString_0(this.ingredientsInRecipe_1) + ')';
  };
  protoOf(FullStepDTO).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + this.index_1 | 0;
    result = imul(result, 31) + (this.name_1 == null ? 0 : getStringHashCode(this.name_1)) | 0;
    result = imul(result, 31) + (this.description_1 == null ? 0 : getStringHashCode(this.description_1)) | 0;
    result = imul(result, 31) + hashCode(this.images_1) | 0;
    result = imul(result, 31) + hashCode(this.ingredientsInRecipe_1) | 0;
    return result;
  };
  protoOf(FullStepDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FullStepDTO))
      return false;
    var tmp0_other_with_cast = other instanceof FullStepDTO ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.index_1 === tmp0_other_with_cast.index_1))
      return false;
    if (!(this.name_1 == tmp0_other_with_cast.name_1))
      return false;
    if (!(this.description_1 == tmp0_other_with_cast.description_1))
      return false;
    if (!equals(this.images_1, tmp0_other_with_cast.images_1))
      return false;
    if (!equals(this.ingredientsInRecipe_1, tmp0_other_with_cast.ingredientsInRecipe_1))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_6 = this;
  }
  protoOf(Companion_6).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.recipe.FullUnitDTO', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('shortName', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).serialize_izimgx_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.name_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 2, value.shortName_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_6).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_izimgx_k$(encoder, value instanceof FullUnitDTO ? value : THROW_CCE());
  };
  protoOf($serializer_6).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
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
            tmp4_local0 = tmp7_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
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
    return FullUnitDTO_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_6).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function FullUnitDTO_init_$Init$(seen0, id, name, shortName, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_6().descriptor_1);
    }
    $this.id_1 = id;
    $this.name_1 = name;
    $this.shortName_1 = shortName;
    return $this;
  }
  function FullUnitDTO_init_$Create$(seen0, id, name, shortName, serializationConstructorMarker) {
    return FullUnitDTO_init_$Init$(seen0, id, name, shortName, serializationConstructorMarker, objectCreate(protoOf(FullUnitDTO)));
  }
  function FullUnitDTO(id, name, shortName) {
    Companion_getInstance_6();
    this.id_1 = id;
    this.name_1 = name;
    this.shortName_1 = shortName;
  }
  protoOf(FullUnitDTO).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(FullUnitDTO).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(FullUnitDTO).get_shortName_p10yo2_k$ = function () {
    return this.shortName_1;
  };
  protoOf(FullUnitDTO).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(FullUnitDTO).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(FullUnitDTO).component3_7eebsa_k$ = function () {
    return this.shortName_1;
  };
  protoOf(FullUnitDTO).copy_hrd73x_k$ = function (id, name, shortName) {
    return new FullUnitDTO(id, name, shortName);
  };
  protoOf(FullUnitDTO).copy$default_9td0im_k$ = function (id, name, shortName, $super) {
    id = id === VOID ? this.id_1 : id;
    name = name === VOID ? this.name_1 : name;
    shortName = shortName === VOID ? this.shortName_1 : shortName;
    return $super === VOID ? this.copy_hrd73x_k$(id, name, shortName) : $super.copy_hrd73x_k$.call(this, id, name, shortName);
  };
  protoOf(FullUnitDTO).toString = function () {
    return 'FullUnitDTO(id=' + this.id_1 + ', name=' + this.name_1 + ', shortName=' + this.shortName_1 + ')';
  };
  protoOf(FullUnitDTO).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.shortName_1) | 0;
    return result;
  };
  protoOf(FullUnitDTO).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FullUnitDTO))
      return false;
    var tmp0_other_with_cast = other instanceof FullUnitDTO ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.shortName_1 === tmp0_other_with_cast.shortName_1))
      return false;
    return true;
  };
  function _get_$childSerializers__r2zwns_2($this) {
    return $this.$childSerializers_1;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, new ArrayListSerializer(StringSerializer_getInstance()), null];
  }
  protoOf(Companion_7).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.user.BaseUserDTO', this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('username', false);
    tmp0_serialDesc.addElement_5pzumi_k$('name', false);
    tmp0_serialDesc.addElement_5pzumi_k$('roles', false);
    tmp0_serialDesc.addElement_5pzumi_k$('created_at', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).serialize_t0a3cb_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().$childSerializers_1;
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.username_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.name_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 2, tmp2_cached[2], value.roles_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 3, LocalDateTimeIso8601Serializer_getInstance(), value.created_at_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_7).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_t0a3cb_k$(encoder, value instanceof BaseUserDTO ? value : THROW_CCE());
  };
  protoOf($serializer_7).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp9_cached = Companion_getInstance_7().$childSerializers_1;
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
  protoOf($serializer_7).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_7).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_7().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2], LocalDateTimeIso8601Serializer_getInstance()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function BaseUserDTO_init_$Init$(seen0, username, name, roles, created_at, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_7().descriptor_1);
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
    Companion_getInstance_7();
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
    return 'BaseUserDTO(username=' + this.username_1 + ', name=' + this.name_1 + ', roles=' + toString_0(this.roles_1) + ', created_at=' + this.created_at_1.toString() + ')';
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
  function Companion_8() {
    Companion_instance_8 = this;
  }
  protoOf(Companion_8).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('epicer.common.dto.user.LoginUserDTO', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('username', false);
    tmp0_serialDesc.addElement_5pzumi_k$('password', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).serialize_c5j6c3_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value.username_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.password_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_8).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_c5j6c3_k$(encoder, value instanceof LoginUserDTO ? value : THROW_CCE());
  };
  protoOf($serializer_8).deserialize_sy6x50_k$ = function (decoder) {
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
  protoOf($serializer_8).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_8).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function LoginUserDTO_init_$Init$(seen0, username, password, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_8().descriptor_1);
    }
    $this.username_1 = username;
    $this.password_1 = password;
    return $this;
  }
  function LoginUserDTO_init_$Create$(seen0, username, password, serializationConstructorMarker) {
    return LoginUserDTO_init_$Init$(seen0, username, password, serializationConstructorMarker, objectCreate(protoOf(LoginUserDTO)));
  }
  function LoginUserDTO(username, password) {
    Companion_getInstance_8();
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
  protoOf($serializer_2).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_3).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_4).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_5).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_6).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_7).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_8).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BaseRecipeDTO;
  _.$_$.b = FullRecipeDTO;
  _.$_$.c = BaseUserDTO;
  _.$_$.d = LoginUserDTO;
  _.$_$.e = TokenDTO;
  _.$_$.f = Companion_getInstance_7;
  _.$_$.g = Companion_getInstance_8;
  //endregion
  return _;
}));

//# sourceMappingURL=epicer-common.js.map
