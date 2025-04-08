(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-common-remote'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kvision-kvision-modules-kvision-common-remote'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-common-remote'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kvision-kvision-modules-kvision-common-remote'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'kvision-kvision-modules-kvision-common-remote'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'kvision-kvision-modules-kvision-common-remote'.");
    }
    globalThis['kvision-kvision-modules-kvision-common-remote'] = factory(typeof globalThis['kvision-kvision-modules-kvision-common-remote'] === 'undefined' ? {} : globalThis['kvision-kvision-modules-kvision-common-remote'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Exception = kotlin_kotlin.$_$.ee;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.i1;
  var captureStack = kotlin_kotlin.$_$.o9;
  var protoOf = kotlin_kotlin.$_$.fb;
  var initMetadataForClass = kotlin_kotlin.$_$.ca;
  var VOID = kotlin_kotlin.$_$.f;
  var getKClass = kotlin_kotlin.$_$.e;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.mf;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.da;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.h1;
  var objectCreate = kotlin_kotlin.$_$.eb;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var Unit_getInstance = kotlin_kotlin.$_$.c5;
  var Companion_getInstance = kotlin_kotlin.$_$.x4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.p1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var ClassCastException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.j1;
  var createFailure = kotlin_kotlin.$_$.hf;
  var arrayOf = kotlin_kotlin.$_$.ff;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var THROW_CCE = kotlin_kotlin.$_$.qe;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var isInterface = kotlin_kotlin.$_$.qa;
  var toString = kotlin_kotlin.$_$.ib;
  var Result = kotlin_kotlin.$_$.oe;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.w2;
  var RuntimeException = kotlin_kotlin.$_$.pe;
  var ArithmeticException = kotlin_kotlin.$_$.ud;
  var NoSuchElementException = kotlin_kotlin.$_$.ke;
  var ClassCastException = kotlin_kotlin.$_$.wd;
  var NullPointerException = kotlin_kotlin.$_$.le;
  var NumberFormatException = kotlin_kotlin.$_$.me;
  var UnsupportedOperationException = kotlin_kotlin.$_$.cf;
  var ConcurrentModificationException = kotlin_kotlin.$_$.zd;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.ie;
  var IllegalStateException = kotlin_kotlin.$_$.he;
  var IllegalArgumentException = kotlin_kotlin.$_$.ge;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.y2;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var initMetadataForObject = kotlin_kotlin.$_$.ha;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var getStringHashCode = kotlin_kotlin.$_$.aa;
  var getBooleanHashCode = kotlin_kotlin.$_$.y9;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var overwriteWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.p2;
  var charArrayOf = kotlin_kotlin.$_$.p9;
  var split = kotlin_kotlin.$_$.vc;
  var charSequenceGet = kotlin_kotlin.$_$.r9;
  var split_0 = kotlin_kotlin.$_$.wc;
  var dropLast = kotlin_kotlin.$_$.dc;
  var toInt = kotlin_kotlin.$_$.gd;
  var takeLast = kotlin_kotlin.$_$.bd;
  var abs = kotlin_kotlin.$_$.jb;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ServiceException, 'ServiceException', VOID, Exception);
  initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
  initMetadataForClass(AbstractServiceException, 'AbstractServiceException', VOID, Exception, VOID, VOID, VOID, {0: Companion_getInstance_0});
  initMetadataForClass(ResultSerializer, 'ResultSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ExceptionJson, 'ExceptionJson', ExceptionJson, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForObject(RemoteSerialization, 'RemoteSerialization');
  initMetadataForObject(JsonDateSerializer, 'JsonDateSerializer', VOID, VOID, [KSerializer]);
  //endregion
  function ServiceException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ServiceException);
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.$cachedSerializer$delegate_1.get_value_j01efc_k$();
  }
  function AbstractServiceException$Companion$_anonymous__57qtot() {
    var tmp = getKClass(AbstractServiceException);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy(tmp_0, AbstractServiceException$Companion$_anonymous__57qtot);
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).serializer_nv39qc_k$ = function (typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AbstractServiceException_init_$Init$(seen0, serializationConstructorMarker, $this) {
    Exception_init_$Init$_0($this);
    return $this;
  }
  function AbstractServiceException_init_$Create$(seen0, serializationConstructorMarker) {
    var tmp = AbstractServiceException_init_$Init$(seen0, serializationConstructorMarker, objectCreate(protoOf(AbstractServiceException)));
    captureStack(tmp, AbstractServiceException_init_$Create$);
    return tmp;
  }
  function AbstractServiceException() {
    Companion_getInstance_0();
    Exception_init_$Init$('AbstractServiceException', this);
    captureStack(this, AbstractServiceException);
  }
  function _get_tSerializer__4018t1($this) {
    return $this.tSerializer_1;
  }
  function ResultSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.element$default_ey7ac9_k$('value', this$0.tSerializer_1.get_descriptor_wjt6a0_k$(), VOID, true);
      $this$buildClassSerialDescriptor.element$default_ey7ac9_k$('error', buildClassSerialDescriptor('io.kvision.remote.ExceptionJson', []), VOID, true);
      return Unit_getInstance();
    };
  }
  function ResultSerializer(tSerializer) {
    this.tSerializer_1 = tSerializer;
    var tmp = this;
    var tmp_0 = [this.tSerializer_1.get_descriptor_wjt6a0_k$()];
    tmp.descriptor_1 = buildClassSerialDescriptor('kotlin.Result', tmp_0, ResultSerializer$descriptor$lambda(this));
  }
  protoOf(ResultSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(ResultSerializer).deserialize_wct1mv_k$ = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.descriptor_1;
    var composite = decoder.beginStructure_yljocp_k$(descriptor);
    // Inline function 'io.kvision.remote.ResultSerializer.deserialize.<anonymous>' call
    var r = null;
    $l$loop: while (true) {
      var index = composite.decodeElementIndex_bstkhp_k$(this.descriptor_1);
      var tmp;
      switch (index) {
        case 0:
          var v = composite.decodeSerializableElement$default_j0zaoi_k$(this.descriptor_1, index, this.tSerializer_1);
          // Inline function 'kotlin.Companion.success' call

          Companion_getInstance();
          tmp = _Result___init__impl__xyqfz8(v);
          break;
        case 1:
          var exceptionJson = composite.decodeSerializableElement$default_j0zaoi_k$(this.descriptor_1, index, Companion_getInstance_1().serializer_9w0wvi_k$());
          var tmp_0;
          if (exceptionJson.isServiceException_1) {
            Companion_getInstance();
            var tmp0_elvis_lhs = exceptionJson.message_1;
            // Inline function 'kotlin.Companion.failure' call
            var exception = new ServiceException(tmp0_elvis_lhs == null ? 'Service exception' : tmp0_elvis_lhs);
            tmp_0 = _Result___init__impl__xyqfz8(createFailure(exception));
          } else if (!(exceptionJson.serialized_1 == null)) {
            var tmp4 = RemoteSerialization_getInstance().getJson$default_1einae_k$();
            // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
            var string = exceptionJson.serialized_1;
            // Inline function 'kotlinx.serialization.serializer' call
            var this_0 = tmp4.get_serializersModule_piitvg_k$();
            // Inline function 'kotlinx.serialization.internal.cast' call
            var this_1 = serializer(this_0, createKType(getKClass(AbstractServiceException), arrayOf([]), false));
            var tmp$ret$3 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
            var abstractServiceException = tmp4.decodeFromString_jwu9sq_k$(tmp$ret$3, string);
            // Inline function 'kotlin.Companion.failure' call
            Companion_getInstance();
            tmp_0 = _Result___init__impl__xyqfz8(createFailure(abstractServiceException));
          } else {
            var exception_0;
            switch (exceptionJson.type_1) {
              case 'IllegalArgumentException':
                exception_0 = IllegalArgumentException_init_$Create$(exceptionJson.message_1);
                break;
              case 'IllegalStateException':
                exception_0 = IllegalStateException_init_$Create$(exceptionJson.message_1);
                break;
              case 'NullPointerException':
                exception_0 = NullPointerException_init_$Create$(exceptionJson.message_1);
                break;
              case 'UnsupportedOperationException':
                exception_0 = UnsupportedOperationException_init_$Create$(exceptionJson.message_1);
                break;
              case 'IndexOutOfBoundsException':
                exception_0 = IndexOutOfBoundsException_init_$Create$(exceptionJson.message_1);
                break;
              case 'NoSuchElementException':
                exception_0 = NoSuchElementException_init_$Create$(exceptionJson.message_1);
                break;
              case 'ArithmeticException':
                exception_0 = ArithmeticException_init_$Create$(exceptionJson.message_1);
                break;
              case 'NumberFormatException':
                exception_0 = NumberFormatException_init_$Create$(exceptionJson.message_1);
                break;
              case 'ClassCastException':
                exception_0 = ClassCastException_init_$Create$(exceptionJson.message_1);
                break;
              case 'RuntimeException':
                exception_0 = RuntimeException_init_$Create$(exceptionJson.message_1);
                break;
              default:
                exception_0 = Exception_init_$Create$(exceptionJson.message_1);
                break;
            }
            Companion_getInstance();
            // Inline function 'kotlin.Companion.failure' call
            var exception_1 = exception_0;
            tmp_0 = _Result___init__impl__xyqfz8(createFailure(exception_1));
          }

          tmp = tmp_0;
          break;
        case -1:
          break $l$loop;
        default:
          var message = 'Unexpected index: ' + index;
          throw IllegalStateException_init_$Create$(toString(message));
      }
      r = new Result(tmp);
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!!(r == null)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var result = r;
    composite.endStructure_1xqz0n_k$(descriptor);
    return result.value_1;
  };
  protoOf(ResultSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return new Result(this.deserialize_wct1mv_k$(decoder));
  };
  protoOf(ResultSerializer).serialize_aycbvj_k$ = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.descriptor_1;
    var composite = encoder.beginStructure_yljocp_k$(descriptor);
    // Inline function 'io.kvision.remote.ResultSerializer.serialize.<anonymous>' call
    // Inline function 'kotlin.fold' call
    var exception = Result__exceptionOrNull_impl_p6xea9(value);
    if (exception == null) {
      var tmp = _Result___get_value__impl__bjfvqg(value);
      // Inline function 'io.kvision.remote.ResultSerializer.serialize.<anonymous>.<anonymous>' call
      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      composite.encodeSerializableElement_isqxcl_k$(this.descriptor_1, 0, this.tSerializer_1, it);
    } else {
      // Inline function 'io.kvision.remote.ResultSerializer.serialize.<anonymous>.<anonymous>' call
      if (exception instanceof ServiceException) {
        composite.encodeSerializableElement_isqxcl_k$(this.descriptor_1, 1, Companion_getInstance_1().serializer_9w0wvi_k$(), new ExceptionJson(exception.message, VOID, true));
      } else {
        if (exception instanceof AbstractServiceException) {
          // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
          var this_0 = RemoteSerialization_getInstance().getJson$default_1einae_k$();
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.get_serializersModule_piitvg_k$();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(AbstractServiceException), arrayOf([]), false));
          var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var serialized = this_0.encodeToString_k0apqx_k$(tmp$ret$1, exception);
          composite.encodeSerializableElement_isqxcl_k$(this.descriptor_1, 1, Companion_getInstance_1().serializer_9w0wvi_k$(), new ExceptionJson(VOID, VOID, VOID, serialized));
        } else {
          var tmp_0;
          if (exception instanceof IllegalArgumentException) {
            tmp_0 = 'IllegalArgumentException';
          } else {
            if (exception instanceof IllegalStateException) {
              tmp_0 = 'IllegalStateException';
            } else {
              if (exception instanceof IndexOutOfBoundsException) {
                tmp_0 = 'IndexOutOfBoundsException';
              } else {
                if (exception instanceof ConcurrentModificationException) {
                  tmp_0 = 'ConcurrentModificationException';
                } else {
                  if (exception instanceof UnsupportedOperationException) {
                    tmp_0 = 'UnsupportedOperationException';
                  } else {
                    if (exception instanceof NumberFormatException) {
                      tmp_0 = 'NumberFormatException';
                    } else {
                      if (exception instanceof NullPointerException) {
                        tmp_0 = 'NullPointerException';
                      } else {
                        if (exception instanceof ClassCastException) {
                          tmp_0 = 'ClassCastException';
                        } else {
                          if (exception instanceof NoSuchElementException) {
                            tmp_0 = 'NoSuchElementException';
                          } else {
                            if (exception instanceof ArithmeticException) {
                              tmp_0 = 'ArithmeticException';
                            } else {
                              if (exception instanceof RuntimeException) {
                                tmp_0 = 'RuntimeException';
                              } else {
                                tmp_0 = null;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          var type = tmp_0;
          composite.encodeSerializableElement_isqxcl_k$(this.descriptor_1, 1, Companion_getInstance_1().serializer_9w0wvi_k$(), new ExceptionJson(exception.message, type));
        }
      }
    }
    composite.endStructure_1xqz0n_k$(descriptor);
  };
  protoOf(ResultSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_aycbvj_k$(encoder, value instanceof Result ? value.value_1 : THROW_CCE());
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('io.kvision.remote.ExceptionJson', this, 4);
    tmp0_serialDesc.addElement_5pzumi_k$('message', true);
    tmp0_serialDesc.addElement_5pzumi_k$('type', true);
    tmp0_serialDesc.addElement_5pzumi_k$('isServiceException', true);
    tmp0_serialDesc.addElement_5pzumi_k$('serialized', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_2a4pm6_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value.message_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 0, StringSerializer_getInstance(), value.message_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.type_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 1, StringSerializer_getInstance(), value.type_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.isServiceException_1 === false)) {
      tmp1_output.encodeBooleanElement_ydht7q_k$(tmp0_desc, 2, value.isServiceException_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 3) ? true : !(value.serialized_1 == null)) {
      tmp1_output.encodeNullableSerializableElement_5lquiv_k$(tmp0_desc, 3, StringSerializer_getInstance(), value.serialized_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_2a4pm6_k$(encoder, value instanceof ExceptionJson ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp8_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.decodeBooleanElement_vuyhtj_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.decodeNullableSerializableElement_k2y6ab_k$(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.endStructure_1xqz0n_k$(tmp0_desc);
    return ExceptionJson_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function ExceptionJson_init_$Init$(seen0, message, type, isServiceException, serialized, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this.message_1 = null;
    else
      $this.message_1 = message;
    if (0 === (seen0 & 2))
      $this.type_1 = null;
    else
      $this.type_1 = type;
    if (0 === (seen0 & 4))
      $this.isServiceException_1 = false;
    else
      $this.isServiceException_1 = isServiceException;
    if (0 === (seen0 & 8))
      $this.serialized_1 = null;
    else
      $this.serialized_1 = serialized;
    return $this;
  }
  function ExceptionJson_init_$Create$(seen0, message, type, isServiceException, serialized, serializationConstructorMarker) {
    return ExceptionJson_init_$Init$(seen0, message, type, isServiceException, serialized, serializationConstructorMarker, objectCreate(protoOf(ExceptionJson)));
  }
  function ExceptionJson(message, type, isServiceException, serialized) {
    Companion_getInstance_1();
    message = message === VOID ? null : message;
    type = type === VOID ? null : type;
    isServiceException = isServiceException === VOID ? false : isServiceException;
    serialized = serialized === VOID ? null : serialized;
    this.message_1 = message;
    this.type_1 = type;
    this.isServiceException_1 = isServiceException;
    this.serialized_1 = serialized;
  }
  protoOf(ExceptionJson).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  protoOf(ExceptionJson).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(ExceptionJson).get_isServiceException_iuc2jx_k$ = function () {
    return this.isServiceException_1;
  };
  protoOf(ExceptionJson).get_serialized_u29zhv_k$ = function () {
    return this.serialized_1;
  };
  protoOf(ExceptionJson).component1_7eebsc_k$ = function () {
    return this.message_1;
  };
  protoOf(ExceptionJson).component2_7eebsb_k$ = function () {
    return this.type_1;
  };
  protoOf(ExceptionJson).component3_7eebsa_k$ = function () {
    return this.isServiceException_1;
  };
  protoOf(ExceptionJson).component4_7eebs9_k$ = function () {
    return this.serialized_1;
  };
  protoOf(ExceptionJson).copy_2j3pbd_k$ = function (message, type, isServiceException, serialized) {
    return new ExceptionJson(message, type, isServiceException, serialized);
  };
  protoOf(ExceptionJson).copy$default_48s1hq_k$ = function (message, type, isServiceException, serialized, $super) {
    message = message === VOID ? this.message_1 : message;
    type = type === VOID ? this.type_1 : type;
    isServiceException = isServiceException === VOID ? this.isServiceException_1 : isServiceException;
    serialized = serialized === VOID ? this.serialized_1 : serialized;
    return $super === VOID ? this.copy_2j3pbd_k$(message, type, isServiceException, serialized) : $super.copy_2j3pbd_k$.call(this, message, type, isServiceException, serialized);
  };
  protoOf(ExceptionJson).toString = function () {
    return 'ExceptionJson(message=' + this.message_1 + ', type=' + this.type_1 + ', isServiceException=' + this.isServiceException_1 + ', serialized=' + this.serialized_1 + ')';
  };
  protoOf(ExceptionJson).hashCode = function () {
    var result = this.message_1 == null ? 0 : getStringHashCode(this.message_1);
    result = imul(result, 31) + (this.type_1 == null ? 0 : getStringHashCode(this.type_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isServiceException_1) | 0;
    result = imul(result, 31) + (this.serialized_1 == null ? 0 : getStringHashCode(this.serialized_1)) | 0;
    return result;
  };
  protoOf(ExceptionJson).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExceptionJson))
      return false;
    var tmp0_other_with_cast = other instanceof ExceptionJson ? other : THROW_CCE();
    if (!(this.message_1 == tmp0_other_with_cast.message_1))
      return false;
    if (!(this.type_1 == tmp0_other_with_cast.type_1))
      return false;
    if (!(this.isServiceException_1 === tmp0_other_with_cast.isServiceException_1))
      return false;
    if (!(this.serialized_1 == tmp0_other_with_cast.serialized_1))
      return false;
    return true;
  };
  function RemoteSerialization$plain$lambda($this$Json) {
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    // Inline function 'io.kvision.remote.RemoteSerialization.plain.<anonymous>.<anonymous>' call
    builder.contextual_s0h8js_k$(getKClass(Date), JsonDateSerializer_getInstance());
    var tmp = getKClass(Result);
    builder.contextual_lh3eph_k$(tmp, RemoteSerialization$plain$lambda$lambda);
    var tmp$ret$0 = builder.build_boe8ts_k$();
    $this$Json.set_serializersModule_6xge6s_k$(tmp$ret$0);
    return Unit_getInstance();
  }
  function RemoteSerialization$plain$lambda$lambda(args) {
    return new ResultSerializer(args.get_c1px32_k$(0));
  }
  function RemoteSerialization$getJson$lambda$lambda(args) {
    return new ResultSerializer(args.get_c1px32_k$(0));
  }
  function RemoteSerialization$getJson$lambda($serializersModules) {
    return function ($this$Json) {
      $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
      var tmp = $this$Json.get_serializersModule_piitvg_k$();
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      // Inline function 'io.kvision.remote.RemoteSerialization.getJson.<anonymous>.<anonymous>' call
      builder.contextual_s0h8js_k$(getKClass(Date), JsonDateSerializer_getInstance());
      var tmp_0 = getKClass(Result);
      builder.contextual_lh3eph_k$(tmp_0, RemoteSerialization$getJson$lambda$lambda);
      var tmp0_safe_receiver = RemoteSerialization_getInstance().exceptionsSerializersModule_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'io.kvision.remote.RemoteSerialization.getJson.<anonymous>.<anonymous>.<anonymous>' call
        builder.include_ys61s4_k$(tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $serializersModules;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = tmp1_safe_receiver.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'io.kvision.remote.RemoteSerialization.getJson.<anonymous>.<anonymous>.<anonymous>' call
          builder.include_ys61s4_k$(element);
        }
      }
      var tmp$ret$1 = builder.build_boe8ts_k$();
      $this$Json.set_serializersModule_6xge6s_k$(overwriteWith(tmp, tmp$ret$1));
      return Unit_getInstance();
    };
  }
  function RemoteSerialization() {
    RemoteSerialization_instance = this;
    var tmp = this;
    tmp.plain_1 = Json(VOID, RemoteSerialization$plain$lambda);
    this.exceptionsSerializersModule_1 = null;
    this.customConfiguration_1 = null;
  }
  protoOf(RemoteSerialization).get_plain_iwxfa9_k$ = function () {
    return this.plain_1;
  };
  protoOf(RemoteSerialization).set_exceptionsSerializersModule_rv7l8x_k$ = function (_set____db54di) {
    this.exceptionsSerializersModule_1 = _set____db54di;
  };
  protoOf(RemoteSerialization).get_exceptionsSerializersModule_vjzh0g_k$ = function () {
    return this.exceptionsSerializersModule_1;
  };
  protoOf(RemoteSerialization).set_customConfiguration_nnkh1x_k$ = function (_set____db54di) {
    this.customConfiguration_1 = _set____db54di;
  };
  protoOf(RemoteSerialization).get_customConfiguration_clwja4_k$ = function () {
    return this.customConfiguration_1;
  };
  protoOf(RemoteSerialization).toObj_ftbqbx_k$ = function (_this__u8e3s4, serializer) {
    return JSON.parse(this.getJson$default_1einae_k$().encodeToString_k0apqx_k$(serializer, _this__u8e3s4));
  };
  protoOf(RemoteSerialization).getJson_rs89sx_k$ = function (serializersModules) {
    var tmp;
    if (this.exceptionsSerializersModule_1 == null && this.customConfiguration_1 == null && serializersModules == null) {
      tmp = this.plain_1;
    } else {
      var tmp0_elvis_lhs = this.customConfiguration_1;
      var tmp_0 = tmp0_elvis_lhs == null ? Default_getInstance() : tmp0_elvis_lhs;
      tmp = Json(tmp_0, RemoteSerialization$getJson$lambda(serializersModules));
    }
    return tmp;
  };
  protoOf(RemoteSerialization).getJson$default_1einae_k$ = function (serializersModules, $super) {
    serializersModules = serializersModules === VOID ? null : serializersModules;
    return $super === VOID ? this.getJson_rs89sx_k$(serializersModules) : $super.getJson_rs89sx_k$.call(this, serializersModules);
  };
  var RemoteSerialization_instance;
  function RemoteSerialization_getInstance() {
    if (RemoteSerialization_instance == null)
      new RemoteSerialization();
    return RemoteSerialization_instance;
  }
  function JsonDateSerializer() {
    JsonDateSerializer_instance = this;
    this.descriptor_1 = buildClassSerialDescriptor('kotlin.js.Date', []);
  }
  protoOf(JsonDateSerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(JsonDateSerializer).deserialize_sy6x50_k$ = function (decoder) {
    return toDateInternal(decoder.decodeString_x3hxsx_k$());
  };
  protoOf(JsonDateSerializer).serialize_97gbl1_k$ = function (encoder, value) {
    encoder.encodeString_424b5v_k$(toStringInternal(value));
  };
  protoOf(JsonDateSerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_97gbl1_k$(encoder, value instanceof Date ? value : THROW_CCE());
  };
  var JsonDateSerializer_instance;
  function JsonDateSerializer_getInstance() {
    if (JsonDateSerializer_instance == null)
      new JsonDateSerializer();
    return JsonDateSerializer_instance;
  }
  function toDateInternal(_this__u8e3s4) {
    var zoneTab = split(_this__u8e3s4, charArrayOf([_Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93)]));
    var dateStr = zoneTab.get_c1px32_k$(0);
    var dt = split(dateStr, charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(84), _Char___init__impl__6a9atx(45), _Char___init__impl__6a9atx(43)]));
    var utcCheck = charSequenceGet(dateStr, dateStr.length - 1 | 0) === _Char___init__impl__6a9atx(90);
    var ds = utcCheck ? split_0(dropLast(dt.get_c1px32_k$(5), 1), ['.']) : split_0(dt.get_c1px32_k$(5), ['.']);
    var tzCheck = charSequenceGet(dateStr, dateStr.length - 6 | 0);
    var tmp;
    if (!utcCheck && !(tzCheck === _Char___init__impl__6a9atx(45)) && !(tzCheck === _Char___init__impl__6a9atx(43))) {
      tmp = new Date(toInt(dt.get_c1px32_k$(0)), toInt(dt.get_c1px32_k$(1)) - 1 | 0, toInt(dt.get_c1px32_k$(2)), toInt(dt.get_c1px32_k$(3)), toInt(dt.get_c1px32_k$(4)), toInt(ds.get_c1px32_k$(0)), ds.get_size_woubt6_k$() === 2 ? toInt(ds.get_c1px32_k$(1)) : 0);
    } else {
      var sign = utcCheck || tzCheck === _Char___init__impl__6a9atx(43) ? 1 : -1;
      var tmp_0 = Date;
      var tmp_1 = toInt(dt.get_c1px32_k$(0));
      var tmp_2 = toInt(dt.get_c1px32_k$(1)) - 1 | 0;
      var tmp_3 = toInt(dt.get_c1px32_k$(2));
      var tmp_4;
      if (utcCheck) {
        tmp_4 = toInt(dt.get_c1px32_k$(3));
      } else {
        tmp_4 = toInt(dt.get_c1px32_k$(3)) - imul(sign, toInt(dt.get_c1px32_k$(6))) | 0;
      }
      tmp = new Date(tmp_0.UTC(tmp_1, tmp_2, tmp_3, tmp_4, toInt(dt.get_c1px32_k$(4)), toInt(ds.get_c1px32_k$(0)), ds.get_size_woubt6_k$() === 2 ? toInt(ds.get_c1px32_k$(1)) : 0));
    }
    return tmp;
  }
  function toStringInternal(_this__u8e3s4) {
    var tzOffset = _this__u8e3s4.getTimezoneOffset() / 60 | 0;
    var sign = tzOffset > 0 ? '-' : '+';
    var tz = (new Intl.DateTimeFormat()).resolvedOptions().timeZone;
    var tmp = '' + _this__u8e3s4.getFullYear() + '-' + takeLast('0' + (_this__u8e3s4.getMonth() + 1 | 0), 2) + '-' + takeLast('0' + _this__u8e3s4.getDate(), 2) + 'T' + takeLast('0' + _this__u8e3s4.getHours(), 2) + ':' + takeLast('0' + _this__u8e3s4.getMinutes(), 2) + ':' + takeLast('0' + _this__u8e3s4.getSeconds(), 2) + '.' + takeLast('00' + _this__u8e3s4.getMilliseconds(), 3) + sign;
    // Inline function 'kotlin.math.absoluteValue' call
    var tmp$ret$0 = abs(tzOffset);
    return tmp + takeLast('0' + tmp$ret$0, 2) + ':00' + (tz != undefined ? '[' + tz + ']' : '');
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  return _;
}));

//# sourceMappingURL=kvision-kvision-modules-kvision-common-remote.js.map
