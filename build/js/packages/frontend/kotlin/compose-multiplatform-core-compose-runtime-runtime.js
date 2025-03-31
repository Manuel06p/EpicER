(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-runtime-runtime'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-runtime-runtime'.");
    }
    globalThis['compose-multiplatform-core-compose-runtime-runtime'] = factory(typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.y6;
  var initMetadataForInterface = kotlin_kotlin.$_$.k6;
  var Unit_instance = kotlin_kotlin.$_$.f2;
  var initMetadataForClass = kotlin_kotlin.$_$.h6;
  var VOID = kotlin_kotlin.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.k9;
  var Companion_instance = kotlin_kotlin.$_$.e2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w1;
  var createFailure = kotlin_kotlin.$_$.r9;
  var intercepted = kotlin_kotlin.$_$.b5;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var get = kotlin_kotlin.$_$.k5;
  var fold = kotlin_kotlin.$_$.j5;
  var minusKey = kotlin_kotlin.$_$.l5;
  var plus = kotlin_kotlin.$_$.n5;
  var toString = kotlin_kotlin.$_$.a7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var isInterface = kotlin_kotlin.$_$.q6;
  var equals = kotlin_kotlin.$_$.b6;
  var hashCode = kotlin_kotlin.$_$.g6;
  var rotateLeft = kotlin_kotlin.$_$.w9;
  var Enum = kotlin_kotlin.$_$.d9;
  var rotateRight = kotlin_kotlin.$_$.x9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var fill = kotlin_kotlin.$_$.j3;
  var MutableIntIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.a;
  var emptyList = kotlin_kotlin.$_$.h3;
  var Long = kotlin_kotlin.$_$.h9;
  var sortWith = kotlin_kotlin.$_$.o4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var to = kotlin_kotlin.$_$.ba;
  var initMetadataForCompanion = kotlin_kotlin.$_$.i6;
  var IllegalStateException = kotlin_kotlin.$_$.g9;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.e1;
  var captureStack = kotlin_kotlin.$_$.v5;
  var defineProp = kotlin_kotlin.$_$.a6;
  var MutableIntObjectMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.c;
  var lazy = kotlin_kotlin.$_$.t9;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var MutableScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.h;
  var mutableListOf = kotlin_kotlin.$_$.d4;
  var KtMutableList = kotlin_kotlin.$_$.r2;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.g;
  var compareTo = kotlin_kotlin.$_$.z5;
  var FunctionAdapter = kotlin_kotlin.$_$.s5;
  var Comparator = kotlin_kotlin.$_$.c9;
  var KProperty1 = kotlin_kotlin.$_$.j7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.e6;
  var MutableIntList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.b;
  var isArray = kotlin_kotlin.$_$.o6;
  var KtSet = kotlin_kotlin.$_$.t2;
  var mutableScatterSetOf_0 = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.l;
  var KtMap = kotlin_kotlin.$_$.p2;
  var Exception = kotlin_kotlin.$_$.f9;
  var plus_0 = kotlin_kotlin.$_$.f4;
  var initMetadataForObject = kotlin_kotlin.$_$.m6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var toString_0 = kotlin_kotlin.$_$.aa;
  var Element = kotlin_kotlin.$_$.m5;
  var getStringHashCode = kotlin_kotlin.$_$.f6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var MutableObjectIntMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.e;
  var ScatterSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.i;
  var fill_0 = kotlin_kotlin.$_$.l3;
  var CoroutineImpl = kotlin_kotlin.$_$.o5;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z4;
  var initMetadataForLambda = kotlin_kotlin.$_$.l6;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var addAll = kotlin_kotlin.$_$.v2;
  var toList = kotlin_kotlin.$_$.s4;
  var flatten = kotlin_kotlin.$_$.n3;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.u;
  var CancellationException = kotlin_kotlin.$_$.y4;
  var addSuppressed = kotlin_kotlin.$_$.o9;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.g;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.j6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var removeFirst = kotlin_kotlin.$_$.l4;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var arrayCopy = kotlin_kotlin.$_$.w2;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.f;
  var anyToString = kotlin_kotlin.$_$.t5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.y;
  var MutableIntSet = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.d;
  var first = kotlin_kotlin.$_$.m3;
  var last = kotlin_kotlin.$_$.w3;
  var copyOf = kotlin_kotlin.$_$.d3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var plus_1 = kotlin_kotlin.$_$.j4;
  var coerceAtMost = kotlin_kotlin.$_$.c7;
  var coerceAtLeast = kotlin_kotlin.$_$.b7;
  var copyOf_0 = kotlin_kotlin.$_$.c3;
  var ensureNotNull = kotlin_kotlin.$_$.s9;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var RandomAccess = kotlin_kotlin.$_$.s2;
  var SequenceScope = kotlin_kotlin.$_$.k7;
  var numberRangeToNumber = kotlin_kotlin.$_$.u6;
  var until = kotlin_kotlin.$_$.f7;
  var iterator = kotlin_kotlin.$_$.o7;
  var Collection = kotlin_kotlin.$_$.m2;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableSetOf = kotlin_kotlin.$_$.e4;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var AbstractList = kotlin_kotlin.$_$.h2;
  var KtList = kotlin_kotlin.$_$.n2;
  var arrayIterator = kotlin_kotlin.$_$.u5;
  var AbstractMutableList = kotlin_kotlin.$_$.j2;
  var MutableIterable = kotlin_kotlin.$_$.q2;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var copyOfRange = kotlin_kotlin.$_$.b3;
  var indexOf = kotlin_kotlin.$_$.q3;
  var AbstractMap = kotlin_kotlin.$_$.i2;
  var Entry = kotlin_kotlin.$_$.o2;
  var AbstractSet = kotlin_kotlin.$_$.k2;
  var AbstractCollection = kotlin_kotlin.$_$.g2;
  var objectCreate = kotlin_kotlin.$_$.x6;
  var step = kotlin_kotlin.$_$.e7;
  var countOneBits = kotlin_kotlin.$_$.p9;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var toString_1 = kotlin_kotlin.$_$.v8;
  var longArray = kotlin_kotlin.$_$.t6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var Char = kotlin_kotlin.$_$.b9;
  var isCharSequence = kotlin_kotlin.$_$.p6;
  var minus = kotlin_kotlin.$_$.c4;
  var contains = kotlin_kotlin.$_$.a3;
  var plus_2 = kotlin_kotlin.$_$.i4;
  var primitiveArrayConcat = kotlin_kotlin.$_$.d;
  var singleOrNull = kotlin_kotlin.$_$.n4;
  var intArrayIterator = kotlin_kotlin.$_$.n6;
  var toIntArray = kotlin_kotlin.$_$.r4;
  var sequence = kotlin_kotlin.$_$.q7;
  var countTrailingZeroBits = kotlin_kotlin.$_$.q9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.z2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var println = kotlin_kotlin.$_$.r5;
  var printStackTrace = kotlin_kotlin.$_$.v9;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.f;
  var toDuration = kotlin_kotlin.$_$.z8;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.t1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.v;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.r;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  initMetadataForInterface(Applier, 'Applier');
  initMetadataForClass(OffsetApplier, 'OffsetApplier', VOID, VOID, [Applier]);
  initMetadataForClass(AbstractApplier, 'AbstractApplier', VOID, VOID, [Applier]);
  initMetadataForClass(FrameAwaiter, 'FrameAwaiter');
  function get_key() {
    return Key_instance_0;
  }
  initMetadataForInterface(MonotonicFrameClock, 'MonotonicFrameClock', VOID, VOID, [Element], [1]);
  initMetadataForClass(BroadcastFrameClock, 'BroadcastFrameClock', BroadcastFrameClock, VOID, [MonotonicFrameClock], [1]);
  initMetadataForInterface(ComposeNodeLifecycleCallback, 'ComposeNodeLifecycleCallback');
  initMetadataForClass(Invalidation, 'Invalidation');
  initMetadataForInterface(RememberObserver, 'RememberObserver');
  initMetadataForInterface(ReusableRememberObserver, 'ReusableRememberObserver', VOID, VOID, [RememberObserver]);
  initMetadataForClass(CompositionContextHolder, 'CompositionContextHolder', VOID, VOID, [ReusableRememberObserver]);
  initMetadataForClass(ComposerImpl$derivedStateObserver$1);
  function changed(value) {
    return this.x1u(value);
  }
  function changed_0(value) {
    return this.y1u(value);
  }
  function changedInstance(value) {
    return this.j1l(value);
  }
  initMetadataForInterface(Composer, 'Composer');
  initMetadataForClass(ComposerImpl, 'ComposerImpl', VOID, VOID, [Composer]);
  initMetadataForClass(Composer$Companion$Empty$1);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InvalidationResult, 'InvalidationResult', VOID, Enum);
  initMetadataForClass(MovableContentStateReference, 'MovableContentStateReference');
  initMetadataForClass(MovableContentState, 'MovableContentState');
  initMetadataForClass(MovableContent, 'MovableContent');
  initMetadataForClass(ComposeRuntimeError, 'ComposeRuntimeError', VOID, IllegalStateException);
  initMetadataForClass(ProvidedValue, 'ProvidedValue');
  initMetadataForClass(RememberObserverHolder, 'RememberObserverHolder');
  initMetadataForClass(Pending, 'Pending');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(GroupInfo, 'GroupInfo');
  initMetadataForClass(MutableScatterMultiMap, 'MutableScatterMultiMap');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(RememberEventDispatcher, 'RememberEventDispatcher');
  initMetadataForInterface(RecomposeScopeOwner, 'RecomposeScopeOwner');
  initMetadataForClass(CompositionImpl, 'CompositionImpl', VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(CompositionObserverHolder, 'CompositionObserverHolder', CompositionObserverHolder);
  initMetadataForObject(ComposableSingletons$CompositionKt, 'ComposableSingletons$CompositionKt');
  initMetadataForObject(ScopeInvalidated, 'ScopeInvalidated');
  initMetadataForClass(CompositionImplServiceKey$1);
  initMetadataForClass(CompositionContext, 'CompositionContext');
  initMetadataForClass(CompositionLocal, 'CompositionLocal');
  initMetadataForClass(ProvidableCompositionLocal, 'ProvidableCompositionLocal', VOID, CompositionLocal);
  initMetadataForClass(StaticProvidableCompositionLocal, 'StaticProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForClass(DynamicProvidableCompositionLocal, 'DynamicProvidableCompositionLocal', VOID, ProvidableCompositionLocal);
  initMetadataForInterface(PersistentCompositionLocalMap, 'PersistentCompositionLocalMap', VOID, VOID, [KtMap]);
  initMetadataForInterface(DerivedState, 'DerivedState');
  initMetadataForClass(DisposableEffectScope, 'DisposableEffectScope', DisposableEffectScope);
  initMetadataForClass(LaunchedEffectImpl, 'LaunchedEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(LeftCompositionCancellationException, 'LeftCompositionCancellationException', LeftCompositionCancellationException, PlatformOptimizedCancellationException);
  initMetadataForClass(DisposableEffectImpl, 'DisposableEffectImpl', VOID, VOID, [RememberObserver]);
  initMetadataForClass(JoinedKey, 'JoinedKey');
  initMetadataForObject(Key, 'Key');
  initMetadataForClass(OpaqueKey, 'OpaqueKey');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(RecomposeScopeImpl, 'RecomposeScopeImpl');
  initMetadataForLambda(Recomposer$recompositionRunner$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(State, 'State', VOID, Enum);
  initMetadataForClass(RecomposerInfoImpl, 'RecomposerInfoImpl');
  initMetadataForClass(RecomposerErrorState, 'RecomposerErrorState');
  initMetadataForCompanion(Companion_2);
  initMetadataForLambda(Recomposer$runRecomposeAndApplyChanges$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Recomposer$recompositionRunner$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitWorkAvailableCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(Recomposer, 'Recomposer', VOID, CompositionContext, VOID, [0, 1, 2]);
  initMetadataForClass(SlotTable, 'SlotTable', SlotTable);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SlotWriter, 'SlotWriter');
  initMetadataForClass(Anchor, 'Anchor');
  initMetadataForClass(GroupSourceInformation, 'GroupSourceInformation');
  initMetadataForClass(SlotReader, 'SlotReader');
  initMetadataForClass(GroupIterator, 'GroupIterator');
  initMetadataForClass(SlotTableGroup, 'SlotTableGroup');
  initMetadataForClass(PrioritySet, 'PrioritySet', PrioritySet);
  initMetadataForClass(KeyInfo, 'KeyInfo');
  initMetadataForClass(SourceInformationGroupIterator, 'SourceInformationGroupIterator');
  initMetadataForClass(SourceInformationGroupPath, 'SourceInformationGroupPath');
  initMetadataForClass(AnchoredGroupPath, 'AnchoredGroupPath', VOID, SourceInformationGroupPath);
  initMetadataForClass(SourceInformationSlotTableGroup, 'SourceInformationSlotTableGroup');
  initMetadataForClass(RelativeGroupPath, 'RelativeGroupPath', VOID, SourceInformationGroupPath);
  function merge(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(SnapshotMutationPolicy, 'SnapshotMutationPolicy');
  initMetadataForObject(StructuralEqualityPolicy, 'StructuralEqualityPolicy', VOID, VOID, [SnapshotMutationPolicy]);
  initMetadataForClass(StateRecord, 'StateRecord');
  initMetadataForClass(StateStateRecord, 'StateStateRecord', VOID, StateRecord);
  function mergeRecords(previous, current, applied) {
    return null;
  }
  initMetadataForInterface(StateObject, 'StateObject');
  initMetadataForClass(StateObjectImpl, 'StateObjectImpl', VOID, VOID, [StateObject]);
  initMetadataForClass(SnapshotMutableStateImpl, 'SnapshotMutableStateImpl', VOID, StateObjectImpl);
  initMetadataForClass(SnapshotThreadLocal, 'SnapshotThreadLocal', SnapshotThreadLocal);
  initMetadataForClass(IntStack, 'IntStack', IntStack);
  initMetadataForClass(Stack, 'Stack', Stack);
  initMetadataForInterface(ValueHolder, 'ValueHolder');
  initMetadataForClass(LazyValueHolder, 'LazyValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(DynamicValueHolder, 'DynamicValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(StaticValueHolder, 'StaticValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(ComputedValueHolder, 'ComputedValueHolder', VOID, VOID, [ValueHolder]);
  initMetadataForClass(OperationsDebugStringFormattable, 'OperationsDebugStringFormattable');
  initMetadataForClass(ChangeList, 'ChangeList', ChangeList, OperationsDebugStringFormattable);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ComposerChangeListWriter, 'ComposerChangeListWriter');
  initMetadataForClass(FixupList, 'FixupList', FixupList, OperationsDebugStringFormattable);
  initMetadataForClass(Operation, 'Operation');
  initMetadataForObject(Ups, 'Ups', VOID, Operation);
  initMetadataForObject(Downs, 'Downs', VOID, Operation);
  initMetadataForObject(AdvanceSlotsBy, 'AdvanceSlotsBy', VOID, Operation);
  initMetadataForObject(Remember, 'Remember', VOID, Operation);
  initMetadataForObject(AppendValue, 'AppendValue', VOID, Operation);
  initMetadataForObject(TrimParentValues, 'TrimParentValues', VOID, Operation);
  initMetadataForObject(UpdateValue, 'UpdateValue', VOID, Operation);
  initMetadataForObject(UpdateAnchoredValue, 'UpdateAnchoredValue', VOID, Operation);
  initMetadataForObject(UpdateAuxData, 'UpdateAuxData', VOID, Operation);
  initMetadataForObject(EnsureRootGroupStarted, 'EnsureRootGroupStarted', VOID, Operation);
  initMetadataForObject(EnsureGroupStarted, 'EnsureGroupStarted', VOID, Operation);
  initMetadataForObject(RemoveCurrentGroup, 'RemoveCurrentGroup', VOID, Operation);
  initMetadataForObject(MoveCurrentGroup, 'MoveCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCurrentGroup, 'EndCurrentGroup', VOID, Operation);
  initMetadataForObject(SkipToEndOfCurrentGroup, 'SkipToEndOfCurrentGroup', VOID, Operation);
  initMetadataForObject(EndCompositionScope, 'EndCompositionScope', VOID, Operation);
  initMetadataForObject(UseCurrentNode, 'UseCurrentNode', VOID, Operation);
  initMetadataForObject(UpdateNode, 'UpdateNode', VOID, Operation);
  initMetadataForObject(RemoveNode, 'RemoveNode', VOID, Operation);
  initMetadataForObject(MoveNode, 'MoveNode', VOID, Operation);
  initMetadataForObject(InsertSlots, 'InsertSlots', VOID, Operation);
  initMetadataForObject(InsertSlotsWithFixups, 'InsertSlotsWithFixups', VOID, Operation);
  initMetadataForObject(InsertNodeFixup, 'InsertNodeFixup', VOID, Operation);
  initMetadataForObject(PostInsertNodeFixup, 'PostInsertNodeFixup', VOID, Operation);
  initMetadataForObject(ResetSlots, 'ResetSlots', VOID, Operation);
  initMetadataForObject(DetermineMovableContentNodeIndex, 'DetermineMovableContentNodeIndex', VOID, Operation);
  initMetadataForObject(CopyNodesToNewAnchorLocation, 'CopyNodesToNewAnchorLocation', VOID, Operation);
  initMetadataForObject(CopySlotTableToAnchorLocation, 'CopySlotTableToAnchorLocation', VOID, Operation);
  initMetadataForObject(EndMovableContentPlacement, 'EndMovableContentPlacement', VOID, Operation);
  initMetadataForObject(ReleaseMovableGroupAtCurrent, 'ReleaseMovableGroupAtCurrent', VOID, Operation);
  initMetadataForObject(ApplyChangeList, 'ApplyChangeList', VOID, Operation);
  initMetadataForClass(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1, VOID, VOID, VOID, [RecomposeScopeOwner]);
  initMetadataForClass(OpIterator, 'OpIterator');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Operations, 'Operations', Operations, OperationsDebugStringFormattable);
  initMetadataForClass(MutableVector, 'MutableVector', VOID, VOID, [RandomAccess]);
  initMetadataForLambda(ScatterSetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ScatterSetWrapper, 'ScatterSetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScopeMap, 'ScopeMap', ScopeMap);
  initMetadataForClass(AbstractListIterator, 'AbstractListIterator');
  initMetadataForClass(SingleElementListIterator, 'SingleElementListIterator', VOID, AbstractListIterator);
  initMetadataForClass(AbstractPersistentList, 'AbstractPersistentList', VOID, AbstractList, [KtList, Collection, AbstractList]);
  initMetadataForClass(BufferIterator, 'BufferIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVector, 'PersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(PersistentVectorBuilder, 'PersistentVectorBuilder', VOID, AbstractMutableList, [AbstractMutableList, KtMutableList, MutableIterable, Collection]);
  initMetadataForClass(PersistentVectorIterator, 'PersistentVectorIterator', VOID, AbstractListIterator);
  initMetadataForClass(PersistentVectorMutableIterator, 'PersistentVectorMutableIterator', VOID, AbstractListIterator);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(SmallPersistentVector, 'SmallPersistentVector', VOID, AbstractPersistentList, [KtList, Collection, AbstractPersistentList]);
  initMetadataForClass(TrieIterator, 'TrieIterator', VOID, AbstractListIterator);
  initMetadataForClass(ObjectRef, 'ObjectRef');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(PersistentHashMap, 'PersistentHashMap', VOID, AbstractMap, [AbstractMap, KtMap]);
  initMetadataForClass(PersistentHashMapBaseIterator, 'PersistentHashMapBaseIterator');
  initMetadataForClass(PersistentHashMapKeysIterator, 'PersistentHashMapKeysIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapValuesIterator, 'PersistentHashMapValuesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(PersistentHashMapEntriesIterator, 'PersistentHashMapEntriesIterator', VOID, PersistentHashMapBaseIterator);
  initMetadataForClass(TrieNodeBaseIterator, 'TrieNodeBaseIterator');
  initMetadataForClass(TrieNodeKeysIterator, 'TrieNodeKeysIterator', TrieNodeKeysIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeValuesIterator, 'TrieNodeValuesIterator', TrieNodeValuesIterator, TrieNodeBaseIterator);
  initMetadataForClass(TrieNodeEntriesIterator, 'TrieNodeEntriesIterator', TrieNodeEntriesIterator, TrieNodeBaseIterator);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(PersistentHashMapKeys, 'PersistentHashMapKeys', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(PersistentHashMapValues, 'PersistentHashMapValues', VOID, AbstractCollection, [Collection, AbstractCollection]);
  initMetadataForClass(PersistentHashMapEntries, 'PersistentHashMapEntries', VOID, AbstractSet, [KtSet, Collection, AbstractSet]);
  initMetadataForClass(ModificationResult, 'ModificationResult');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(TrieNode, 'TrieNode');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(PersistentOrderedSet, 'PersistentOrderedSet', VOID, AbstractSet, [AbstractSet, KtSet, Collection]);
  initMetadataForClass(Links, 'Links', Links_init_$Create$);
  initMetadataForClass(PersistentOrderedSetIterator, 'PersistentOrderedSetIterator');
  initMetadataForObject(EndOfChain, 'EndOfChain');
  initMetadataForObject(ListImplementation, 'ListImplementation');
  initMetadataForClass(MutabilityOwnership, 'MutabilityOwnership', MutabilityOwnership);
  initMetadataForClass(IntRef, 'IntRef', IntRef);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(PersistentCompositionLocalHashMap, 'PersistentCompositionLocalHashMap', VOID, PersistentHashMap, [PersistentHashMap, PersistentCompositionLocalMap]);
  initMetadataForClass(ThreadMap, 'ThreadMap');
  initMetadataForInterface(ObserverHandle, 'ObserverHandle');
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0, 'sam$androidx_compose_runtime_snapshots_ObserverHandle$0', VOID, VOID, [ObserverHandle, FunctionAdapter]);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Snapshot, 'Snapshot');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(MutableSnapshot, 'MutableSnapshot', VOID, Snapshot);
  initMetadataForClass(SnapshotApplyResult, 'SnapshotApplyResult');
  initMetadataForObject(Success, 'Success', VOID, SnapshotApplyResult);
  initMetadataForClass(Failure, 'Failure', VOID, SnapshotApplyResult);
  initMetadataForClass(GlobalSnapshot, 'GlobalSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(NestedMutableSnapshot, 'NestedMutableSnapshot', VOID, MutableSnapshot);
  initMetadataForClass(SnapshotDoubleIndexHeap, 'SnapshotDoubleIndexHeap', SnapshotDoubleIndexHeap);
  initMetadataForCompanion(Companion_13);
  initMetadataForLambda(SnapshotIdSet$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SnapshotIdSet, 'SnapshotIdSet');
  initMetadataForClass(StateListStateRecord, 'StateListStateRecord', VOID, StateRecord);
  initMetadataForClass(SnapshotStateList, 'SnapshotStateList', SnapshotStateList, VOID, [StateObject, KtMutableList, RandomAccess]);
  initMetadataForClass(StateListIterator, 'StateListIterator');
  initMetadataForClass(SnapshotWeakSet, 'SnapshotWeakSet', SnapshotWeakSet);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  initMetadataForClass(ComposableLambdaImpl, 'ComposableLambdaImpl');
  initMetadataForClass(MonotonicClockImpl, 'MonotonicClockImpl', MonotonicClockImpl, VOID, [MonotonicFrameClock], [1]);
  initMetadataForObject(Trace, 'Trace');
  initMetadataForClass(IntMap, 'IntMap', IntMap);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function Applier() {
  }
  function OffsetApplier(applier, offset) {
    this.o1h_1 = applier;
    this.p1h_1 = offset;
    this.q1h_1 = 0;
  }
  protoOf(OffsetApplier).f1h = function () {
    return this.o1h_1.f1h();
  };
  protoOf(OffsetApplier).i1h = function (node) {
    this.q1h_1 = this.q1h_1 + 1 | 0;
    this.o1h_1.i1h(node);
  };
  protoOf(OffsetApplier).j1h = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.q1h_1 > 0)) {
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      var tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.q1h_1 = this.q1h_1 - 1 | 0;
    this.o1h_1.j1h();
  };
  protoOf(OffsetApplier).k1h = function (index, instance) {
    this.o1h_1.k1h(index + (this.q1h_1 === 0 ? this.p1h_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).l1h = function (index, instance) {
    this.o1h_1.l1h(index + (this.q1h_1 === 0 ? this.p1h_1 : 0) | 0, instance);
  };
  protoOf(OffsetApplier).m1h = function (index, count) {
    this.o1h_1.m1h(index + (this.q1h_1 === 0 ? this.p1h_1 : 0) | 0, count);
  };
  protoOf(OffsetApplier).n1h = function (from, to, count) {
    var effectiveOffset = this.q1h_1 === 0 ? this.p1h_1 : 0;
    this.o1h_1.n1h(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  function AbstractApplier(root) {
    this.r1h_1 = root;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s1h_1 = ArrayList_init_$Create$();
    this.t1h_1 = this.r1h_1;
  }
  protoOf(AbstractApplier).u1h = function (_set____db54di) {
    this.t1h_1 = _set____db54di;
  };
  protoOf(AbstractApplier).f1h = function () {
    return this.t1h_1;
  };
  protoOf(AbstractApplier).v1h = function (node) {
    this.s1h_1.e(this.f1h());
    this.u1h(node);
  };
  protoOf(AbstractApplier).i1h = function (node) {
    return this.v1h((node == null ? true : !(node == null)) ? node : THROW_CCE());
  };
  protoOf(AbstractApplier).j1h = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.s1h_1.p()) {
      // Inline function 'androidx.compose.runtime.AbstractApplier.up.<anonymous>' call
      var tmp$ret$1 = 'empty stack';
      throwIllegalStateException(tmp$ret$1);
    }
    this.u1h(this.s1h_1.b2(this.s1h_1.j() - 1 | 0));
  };
  function FrameAwaiter(onFrame, continuation) {
    this.w1h_1 = onFrame;
    this.x1h_1 = continuation;
  }
  protoOf(FrameAwaiter).y1h = function (timeNanos) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      // Inline function 'kotlin.Companion.success' call
      var value = this.w1h_1(timeNanos);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp$ret$3 = tmp;
    this.x1h_1.j9(tmp$ret$3);
  };
  function fail($this, cause) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.a1i_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>' call
    if (!($this.b1i_1 == null))
      return Unit_instance;
    $this.b1i_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = $this.c1i_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var this_1 = item.x1h_1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        this_1.j9(tmp$ret$0);
      }
       while (inductionVariable <= last);
    $this.c1i_1.y1();
    $this.e1i_1.g1i(0);
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.a1i_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>.<anonymous>' call
      this$0.c1i_1.v1($awaiter);
      if (this$0.c1i_1.p()) {
        this$0.e1i_1.g1i(0);
      }
      return Unit_instance;
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    onNewAwaiters = onNewAwaiters === VOID ? null : onNewAwaiters;
    this.z1h_1 = onNewAwaiters;
    this.a1i_1 = new Object();
    this.b1i_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c1i_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.d1i_1 = ArrayList_init_$Create$();
    this.e1i_1 = new AtomicInt(0);
  }
  protoOf(BroadcastFrameClock).h1i = function () {
    return !(this.e1i_1.zo() === 0);
  };
  protoOf(BroadcastFrameClock).i1i = function (timeNanos) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.a1i_1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.sendFrame.<anonymous>' call
    var toResume = this.c1i_1;
    this.c1i_1 = this.d1i_1;
    this.d1i_1 = toResume;
    this.e1i_1.g1i(0);
    var inductionVariable = 0;
    var last = toResume.j();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.o(i).y1h(timeNanos);
      }
       while (inductionVariable < last);
    toResume.y1();
  };
  protoOf(BroadcastFrameClock).j1i = function (onFrame, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.nm();
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = new FrameAwaiter(onFrame, cancellable);
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.a1i_1;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.b1i_1;
      if (!(cause == null)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.j9(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      var hadAwaiters = !this.c1i_1.p();
      this.c1i_1.e(awaiter);
      if (!hadAwaiters) {
        this.e1i_1.g1i(1);
      }
      var hasNewAwaiters = !hadAwaiters;
      cancellable.el(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters && !(this.z1h_1 == null)) {
        try {
          this.z1h_1();
        } catch ($p) {
          if ($p instanceof Error) {
            var t = $p;
            fail(this, t);
          } else {
            throw $p;
          }
        }
      }
    }
    return cancellable.nk();
  };
  function invalidApplier() {
    var message = 'Invalid applier';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ComposeNodeLifecycleCallback() {
  }
  function get_compositionTracer() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionTracer;
  }
  var compositionTracer;
  function get_invocation() {
    _init_properties_Composer_kt__bmp4g0();
    return invocation;
  }
  var invocation;
  function get_provider() {
    _init_properties_Composer_kt__bmp4g0();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    _init_properties_Composer_kt__bmp4g0();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  var providerValues;
  var providerMaps;
  function get_reference() {
    _init_properties_Composer_kt__bmp4g0();
    return reference;
  }
  var reference;
  function get_InvalidationLocationAscending() {
    _init_properties_Composer_kt__bmp4g0();
    return InvalidationLocationAscending;
  }
  var InvalidationLocationAscending;
  function Invalidation(scope, location, instances) {
    this.n1i_1 = scope;
    this.o1i_1 = location;
    this.p1i_1 = instances;
  }
  protoOf(Invalidation).q1i = function () {
    return this.n1i_1.z1i(this.p1i_1);
  };
  function startRoot($this) {
    $this.l1j_1 = 0;
    $this.h1k_1 = $this.c1j_1.d1l();
    startGroup($this, 100);
    $this.b1j_1.e1l();
    $this.u1j_1 = $this.b1j_1.f1l();
    $this.x1j_1.i1l(asInt($this.w1j_1));
    $this.w1j_1 = $this.j1l($this.u1j_1);
    $this.l1k_1 = null;
    if (!$this.p1j_1) {
      $this.p1j_1 = $this.b1j_1.k1l();
    }
    if (!$this.c1k_1) {
      $this.c1k_1 = $this.b1j_1.l1l();
    }
    var tmp0_safe_receiver = read($this.u1j_1, get_LocalInspectionTables());
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.startRoot.<anonymous>' call
      tmp0_safe_receiver.e($this.c1j_1);
      $this.b1j_1.m1l(tmp0_safe_receiver);
    }
    startGroup($this, $this.b1j_1.n1l());
  }
  function endRoot($this) {
    endGroup($this);
    $this.b1j_1.o1l();
    endGroup($this);
    $this.n1k_1.b1m();
    finalizeCompose($this);
    $this.h1k_1.r1m();
    $this.q1j_1 = false;
    $this.w1j_1 = asBool($this.x1j_1.s1m());
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.h1j_1.y1();
    $this.m1j_1.y1();
    $this.t1j_1.y1();
    $this.x1j_1.y1();
    $this.v1j_1 = null;
    $this.p1k_1.y1();
    $this.r1k_1 = 0;
    $this.a1k_1 = 0;
    $this.r1j_1 = false;
    $this.q1k_1 = false;
    $this.y1j_1 = false;
    $this.f1k_1 = false;
    $this.q1j_1 = false;
    $this.z1j_1 = -1;
    if (!$this.h1k_1.i1m_1) {
      $this.h1k_1.r1m();
    }
    if (!$this.j1k_1.s1n_1) {
      forceFreshInsertTable($this);
    }
  }
  function startGroup($this, key) {
    return start($this, key, null, Companion_getInstance_0().u1n_1, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, Companion_getInstance_0().u1n_1, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    $this.k1j_1 = $this.k1j_1 + $this.h1k_1.x1n() | 0;
  }
  function updateSlot($this, value) {
    $this.y1n();
    $this.z1n(value);
  }
  function rememberObserverAnchor($this) {
    var tmp;
    if ($this.q1k_1) {
      var tmp_0;
      if (get_isAfterFirstChild($this.j1k_1)) {
        var group = $this.j1k_1.p1n_1 - 1 | 0;
        var parent = $this.j1k_1.a1o(group);
        while (!(parent === $this.j1k_1.r1n_1) && parent >= 0) {
          group = parent;
          parent = $this.j1k_1.a1o(group);
        }
        tmp_0 = $this.j1k_1.b1o(group);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (get_isAfterFirstChild_0($this.h1k_1)) {
        var group_0 = $this.h1k_1.j1m_1 - 1 | 0;
        var parent_0 = $this.h1k_1.a1o(group_0);
        while (!(parent_0 === $this.h1k_1.l1m_1) && parent_0 >= 0) {
          group_0 = parent_0;
          parent_0 = $this.h1k_1.a1o(group_0);
        }
        tmp_1 = $this.h1k_1.b1o(group_0);
      } else {
        tmp_1 = null;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function currentCompositionLocalScope($this) {
    var tmp0_safe_receiver = $this.l1k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    return currentCompositionLocalScope_0($this, $this.h1k_1.l1m_1);
  }
  function currentCompositionLocalScope_0($this, group) {
    if ($this.q1k_1 && $this.k1k_1) {
      var current = $this.j1k_1.r1n_1;
      while (current > 0) {
        if ($this.j1k_1.d1o(current) === 202 && equals($this.j1k_1.e1o(current), get_compositionLocalMap())) {
          var tmp = $this.j1k_1.c1o(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentCompositionLocalMap) : false) ? tmp : THROW_CCE();
          $this.l1k_1 = providers;
          return providers;
        }
        current = $this.j1k_1.a1o(current);
      }
    }
    if ($this.h1k_1.j() > 0) {
      var current_0 = group;
      while (current_0 > 0) {
        if ($this.h1k_1.d1o(current_0) === 202 && equals($this.h1k_1.e1o(current_0), get_compositionLocalMap())) {
          var tmp0_safe_receiver = $this.v1j_1;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o(current_0);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            var tmp_1 = $this.h1k_1.c1o(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentCompositionLocalMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.l1k_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.h1k_1.a1o(current_0);
      }
    }
    $this.l1k_1 = $this.u1j_1;
    return $this.u1j_1;
  }
  function recordProviderUpdate($this, providers) {
    var tmp0_elvis_lhs = $this.v1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordProviderUpdate.<anonymous>' call
      var newProviderUpdates = new IntMap();
      $this.v1j_1 = newProviderUpdates;
      tmp = newProviderUpdates;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var providerUpdates = tmp;
    providerUpdates.g1o($this.h1k_1.j1m_1, providers);
  }
  function ensureWriter($this) {
    if ($this.j1k_1.s1n_1) {
      $this.j1k_1 = $this.i1k_1.h1o();
      $this.j1k_1.i1o();
      $this.k1k_1 = false;
      $this.l1k_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.j1k_1.s1n_1);
    forceFreshInsertTable($this);
  }
  function forceFreshInsertTable($this) {
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = new SlotTable();
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    if ($this.c1k_1) {
      this_0.j1o();
    }
    if ($this.b1j_1.l1o()) {
      this_0.k1o();
    }
    tmp.i1k_1 = this_0;
    var tmp_0 = $this;
    // Inline function 'kotlin.also' call
    var this_1 = $this.i1k_1.h1o();
    // Inline function 'androidx.compose.runtime.ComposerImpl.forceFreshInsertTable.<anonymous>' call
    this_1.m1o(true);
    tmp_0.j1k_1 = this_1;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.h1k_1.q1o();
    } else {
      if (!(data == null) && !($this.h1k_1.o1o() === data)) {
        $this.n1k_1.n1o(data);
      }
      $this.h1k_1.p1o();
    }
  }
  function start($this, key, objectKey, kind, data) {
    validateNodeNotExpected($this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = $this.l1j_1;
    if (objectKey == null)
      if (!(data == null) && key === 207 && !equals(data, Companion_getInstance().r1o_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(data);
        var tmp = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = $this.r1k_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.r1k_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = $this.r1k_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.r1k_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (objectKey instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = objectKey.m2_1;
        var tmp_1 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = $this.r1k_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.r1k_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_1 = hashCode(objectKey);
        var tmp_2 = $this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = $this.r1k_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.r1k_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    if (objectKey == null) {
      $this.l1j_1 = $this.l1j_1 + 1 | 0;
    }
    // Inline function 'androidx.compose.runtime.GroupKind.isNode' call
    var isNode = !(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().u1n_1));
    if ($this.q1k_1) {
      $this.h1k_1.s1o();
      var startIndex = $this.j1k_1.p1n_1;
      if (isNode) {
        $this.j1k_1.v1o(key, Companion_getInstance().r1o_1);
      } else if (!(data == null)) {
        var tmp_3 = $this.j1k_1;
        tmp_3.u1o(key, objectKey == null ? Companion_getInstance().r1o_1 : objectKey, data);
      } else {
        var tmp_4 = $this.j1k_1;
        tmp_4.t1o(key, objectKey == null ? Companion_getInstance().r1o_1 : objectKey);
      }
      var tmp4_safe_receiver = $this.i1j_1;
      if (tmp4_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp4_safe_receiver.c1p(insertKeyInfo, $this.j1j_1 - tmp4_safe_receiver.x1o_1 | 0);
        tmp4_safe_receiver.d1p(insertKeyInfo);
      }
      enterGroup($this, isNode, null);
      return Unit_instance;
    }
    var tmp_5;
    // Inline function 'androidx.compose.runtime.GroupKind.isReusable' call
    if (!!(_GroupKind___get_value__impl__cf5pqe(kind) === _GroupKind___get_value__impl__cf5pqe(Companion_getInstance_0().v1n_1))) {
      tmp_5 = $this.y1j_1;
    } else {
      tmp_5 = false;
    }
    var forceReplace = tmp_5;
    if ($this.i1j_1 == null) {
      var slotKey = $this.h1k_1.e1p();
      if (!forceReplace && slotKey === key && equals(objectKey, $this.h1k_1.g1p())) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.i1j_1 = new Pending($this.h1k_1.f1p(), $this.j1j_1);
      }
    }
    var pending = $this.i1j_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.h1p(key, objectKey);
      if (!forceReplace && !(keyInfo == null)) {
        pending.d1p(keyInfo);
        var location = keyInfo.l1p_1;
        $this.j1j_1 = pending.o1p(keyInfo) + pending.x1o_1 | 0;
        var relativePosition = pending.p1p(keyInfo);
        var currentRelativePosition = relativePosition - pending.y1o_1 | 0;
        pending.q1p(relativePosition, pending.y1o_1);
        $this.n1k_1.r1p(location);
        $this.h1k_1.s1p(location);
        if (currentRelativePosition > 0) {
          $this.n1k_1.t1p(currentRelativePosition);
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.h1k_1.s1o();
        $this.q1k_1 = true;
        $this.l1k_1 = null;
        ensureWriter($this);
        $this.j1k_1.i1p();
        var startIndex_0 = $this.j1k_1.p1n_1;
        if (isNode) {
          $this.j1k_1.v1o(key, Companion_getInstance().r1o_1);
        } else if (!(data == null)) {
          var tmp_6 = $this.j1k_1;
          tmp_6.u1o(key, objectKey == null ? Companion_getInstance().r1o_1 : objectKey, data);
        } else {
          var tmp_7 = $this.j1k_1;
          tmp_7.t1o(key, objectKey == null ? Companion_getInstance().r1o_1 : objectKey);
        }
        $this.o1k_1 = $this.j1k_1.b1o(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.c1p(insertKeyInfo_0, $this.j1j_1 - pending.x1o_1 | 0);
        pending.d1p(insertKeyInfo_0);
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$12 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$12, isNode ? 0 : $this.j1j_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.h1j_1.u1p($this.i1j_1);
    $this.i1j_1 = newPending;
    $this.m1j_1.i1l($this.k1j_1);
    $this.m1j_1.i1l($this.l1j_1);
    $this.m1j_1.i1l($this.j1j_1);
    if (isNode)
      $this.j1j_1 = 0;
    $this.k1j_1 = 0;
    $this.l1j_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.h1j_1.s1m();
    if (!(previousPending == null) && !inserting) {
      previousPending.y1o_1 = previousPending.y1o_1 + 1 | 0;
    }
    $this.i1j_1 = previousPending;
    $this.j1j_1 = $this.m1j_1.s1m() + expectedNodeCount | 0;
    $this.l1j_1 = $this.m1j_1.s1m();
    $this.k1j_1 = $this.m1j_1.s1m() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    var rGroupIndex = $this.m1j_1.v1p() - 1 | 0;
    if ($this.q1k_1) {
      var parent = $this.j1k_1.r1n_1;
      var tmp1 = $this.j1k_1.d1o(parent);
      var tmp3 = $this.j1k_1.e1o(parent);
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var data = $this.j1k_1.c1o(parent);
      if (tmp3 == null)
        if (!(data == null) && tmp1 === 207 && !equals(data, Companion_getInstance().r1o_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(data);
          var tmp = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_0 = $this.r1k_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_1 = rotateRight(this_0, 3) ^ groupKey;
          tmp.r1k_1 = rotateRight(this_1, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_0 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_2 = $this.r1k_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_3 = rotateRight(this_2, 3) ^ tmp1;
          tmp_0.r1k_1 = rotateRight(this_3, 3);
        }
       else {
        if (tmp3 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = tmp3.m2_1;
          var tmp_1 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_4 = $this.r1k_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_5 = rotateRight(this_4, 3) ^ groupKey_0;
          tmp_1.r1k_1 = rotateRight(this_5, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = hashCode(tmp3);
          var tmp_2 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_6 = $this.r1k_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_7 = rotateRight(this_6, 3) ^ groupKey_1;
          tmp_2.r1k_1 = rotateRight(this_7, 3);
        }
      }
    } else {
      var parent_0 = $this.h1k_1.l1m_1;
      var tmp6 = $this.h1k_1.d1o(parent_0);
      var tmp8 = $this.h1k_1.e1o(parent_0);
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      var data_0 = $this.h1k_1.c1o(parent_0);
      if (tmp8 == null)
        if (!(data_0 == null) && tmp6 === 207 && !equals(data_0, Companion_getInstance().r1o_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_2 = hashCode(data_0);
          var tmp_3 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = $this.r1k_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_9 = rotateRight(this_8, 3) ^ groupKey_2;
          tmp_3.r1k_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = $this.r1k_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_11 = rotateRight(this_10, 3) ^ tmp6;
          tmp_4.r1k_1 = rotateRight(this_11, 3);
        }
       else {
        if (tmp8 instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_3 = tmp8.m2_1;
          var tmp_5 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = $this.r1k_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_13 = rotateRight(this_12, 3) ^ groupKey_3;
          tmp_5.r1k_1 = rotateRight(this_13, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_4 = hashCode(tmp8);
          var tmp_6 = $this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = $this.r1k_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_15 = rotateRight(this_14, 3) ^ groupKey_4;
          tmp_6.r1k_1 = rotateRight(this_15, 3);
        }
      }
    }
    var expectedNodeCount = $this.k1j_1;
    var pending = $this.i1j_1;
    if (!(pending == null) && pending.w1o_1.j() > 0) {
      var previous = pending.w1o_1;
      var current = pending.w1p();
      var usedKeys = fastToSet(current);
      // Inline function 'kotlin.collections.mutableSetOf' call
      var placedKeys = LinkedHashSet_init_$Create$();
      var currentIndex = 0;
      var currentEnd = current.j();
      var previousIndex = 0;
      var previousEnd = previous.j();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.o(previousIndex);
        if (!usedKeys.r(previousInfo)) {
          var deleteOffset = pending.o1p(previousInfo);
          $this.n1k_1.x1p(deleteOffset + pending.x1o_1 | 0, previousInfo.m1p_1);
          pending.y1p(previousInfo.l1p_1, 0);
          $this.n1k_1.r1p(previousInfo.l1p_1);
          $this.h1k_1.s1p(previousInfo.l1p_1);
          recordDelete($this);
          $this.h1k_1.x1n();
          removeRange($this.s1j_1, previousInfo.l1p_1, previousInfo.l1p_1 + $this.h1k_1.z1p(previousInfo.l1p_1) | 0);
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.r(previousInfo)) {
          previousIndex = previousIndex + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.o(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.o1p(currentInfo);
            placedKeys.e(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.a1q(currentInfo);
              $this.n1k_1.b1q(nodePosition + pending.x1o_1 | 0, nodeOffset + pending.x1o_1 | 0, updatedCount);
              pending.c1q(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            previousIndex = previousIndex + 1 | 0;
          }
          currentIndex = currentIndex + 1 | 0;
          nodeOffset = nodeOffset + pending.a1q(currentInfo) | 0;
        }
      }
      $this.n1k_1.d1q();
      if (previous.j() > 0) {
        $this.n1k_1.r1p($this.h1k_1.e1q());
        $this.h1k_1.i1o();
      }
    }
    var removeIndex = $this.j1j_1;
    while (!$this.h1k_1.f1q()) {
      var startSlot = $this.h1k_1.j1m_1;
      recordDelete($this);
      var nodesToRemove = $this.h1k_1.x1n();
      $this.n1k_1.x1p(removeIndex, nodesToRemove);
      removeRange($this.s1j_1, startSlot, $this.h1k_1.j1m_1);
    }
    var inserting = $this.q1k_1;
    if (inserting) {
      if (isNode) {
        $this.p1k_1.l1q();
        expectedNodeCount = 1;
      }
      $this.h1k_1.m1q();
      var parentGroup = $this.j1k_1.r1n_1;
      $this.j1k_1.n1q();
      if (!$this.h1k_1.q1q()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.j1k_1.o1q();
        $this.j1k_1.m1o(true);
        recordInsert($this, $this.o1k_1);
        $this.q1k_1 = false;
        if (!$this.c1j_1.p1q()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        $this.n1k_1.g1q();
      }
      var remainingSlots = $this.h1k_1.h1q();
      if (remainingSlots > 0) {
        $this.n1k_1.i1q(remainingSlots);
      }
      $this.n1k_1.j1q();
      var parentGroup_0 = $this.h1k_1.l1m_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.h1k_1.k1q();
      $this.n1k_1.d1q();
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.f1k_1;
    $this.f1k_1 = true;
    var recomposed = false;
    var parent = $this.h1k_1.l1m_1;
    var end = parent + $this.h1k_1.z1p(parent) | 0;
    var recomposeIndex = $this.j1j_1;
    var recomposeCompoundKey = $this.r1k_1;
    var oldGroupNodeCount = $this.k1j_1;
    var oldRGroupIndex = $this.l1j_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.s1j_1, $this.h1k_1.j1m_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.o1i_1;
      removeLocation($this.s1j_1, location);
      if (firstInRange_0.q1i()) {
        recomposed = true;
        $this.h1k_1.s1p(location);
        var newGroup = $this.h1k_1.j1m_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.j1j_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.l1j_1 = rGroupIndexOf($this, newGroup);
        var newParent = $this.h1k_1.a1o(newGroup);
        $this.r1k_1 = compoundKeyOf($this, newParent, rGroupIndexOf($this, newParent), parent, recomposeCompoundKey);
        $this.l1k_1 = null;
        firstInRange_0.n1i_1.s1q($this);
        $this.l1k_1 = null;
        $this.h1k_1.t1q(parent);
      } else {
        $this.e1k_1.u1p(firstInRange_0.n1i_1);
        firstInRange_0.n1i_1.r1q();
        $this.e1k_1.s1m();
      }
      firstInRange_0 = firstInRange($this.s1j_1, $this.h1k_1.j1m_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.h1k_1.i1o();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.j1j_1 = recomposeIndex + parentGroupNodes | 0;
      $this.k1j_1 = oldGroupNodeCount + parentGroupNodes | 0;
      $this.l1j_1 = oldRGroupIndex;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.r1k_1 = recomposeCompoundKey;
    $this.f1k_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.h1j_1.j() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.h1j_1.u1q(pendingIndex);
            if (!(pending == null) && pending.y1p(current, newCurrentNodes)) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.h1k_1.l1m_1;
        } else {
          if ($this.h1k_1.v1q(current))
            break $l$loop_0;
          current = $this.h1k_1.a1o(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.h1k_1.a1o(group);
    $l$loop: while (!(anchorGroup === recomposeGroup) && !$this.h1k_1.v1q(anchorGroup)) {
      anchorGroup = $this.h1k_1.a1o(anchorGroup);
    }
    var index = $this.h1k_1.v1q(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.h1k_1.w1q(group) | 0) | 0;
    loop: while (index < nodeIndexLimit && current !== groupLocation) {
      current = current + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.h1k_1.z1p(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + ($this.h1k_1.v1q(current) ? 1 : updatedNodeCount($this, current)) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function rGroupIndexOf($this, group) {
    var result = 0;
    var parent = $this.h1k_1.a1o(group);
    var child = parent + 1 | 0;
    while (child < group) {
      if (!$this.h1k_1.x1q(child)) {
        result = result + 1 | 0;
      }
      child = child + $this.h1k_1.z1p(child) | 0;
    }
    return result;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.o1j_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp = tmp0_safe_receiver.j1b(group) ? tmp0_safe_receiver.o(group) : 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.n1j_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.h1k_1.w1q(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.o1j_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = new MutableIntIntMap();
          $this.o1j_1 = newCounts;
          tmp = newCounts;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        virtualCounts.i1b(group, count);
      } else {
        var tmp1_elvis_lhs = $this.n1j_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.run' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.h1k_1.j());
          fill(newCounts_0, -1);
          $this.n1j_1 = newCounts_0;
          tmp_0 = newCounts_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.n1j_1 = null;
    $this.o1j_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.h1k_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 && !(current === nearestCommonRoot)) {
      if (reader.v1q(current)) {
        $this.n1k_1.g1q();
      }
      current = reader.a1o(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 && !(group === nearestCommonRoot)) {
      doRecordDownsFor($this, $this.h1k_1.a1o(group), nearestCommonRoot);
      if ($this.h1k_1.v1q(group)) {
        $this.n1k_1.y1q(nodeAt($this.h1k_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, rGroupIndex, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.h1k_1, $this, group);
      var tmp_0;
      if (groupKey === 126665345) {
        tmp_0 = groupKey;
      } else {
        var parent = $this.h1k_1.a1o(group);
        var parentKey = parent === recomposeGroup ? recomposeKey : compoundKeyOf($this, parent, rGroupIndexOf($this, parent), recomposeGroup, recomposeKey);
        var effectiveRGroupIndex = $this.h1k_1.x1q(group) ? 0 : rGroupIndex;
        // Inline function 'androidx.compose.runtime.rol' call
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = rotateLeft(parentKey, 3) ^ groupKey;
        tmp_0 = rotateLeft(this_0, 3) ^ effectiveRGroupIndex;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.x1q(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.e1o(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.m2_1;
        } else {
          if (tmp0_safe_receiver instanceof MovableContent) {
            tmp_1 = 126665345;
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var it = _this__u8e3s4.d1o(group);
      var tmp_2;
      if (it === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.c1o(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp_3 = equals(tmp0_safe_receiver_0, Companion_getInstance().r1o_1) ? it : hashCode(tmp0_safe_receiver_0);
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? it : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = it;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.k1j_1 = $this.h1k_1.z1q();
    $this.h1k_1.i1o();
  }
  function addRecomposeScope($this) {
    if ($this.q1k_1) {
      var tmp = $this.g1j_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.e1k_1.u1p(scope);
      $this.z1n(scope);
      scope.d1r($this.b1k_1);
    } else {
      var invalidation = removeLocation($this.s1j_1, $this.h1k_1.l1m_1);
      var slot = $this.h1k_1.i();
      var tmp_0;
      if (equals(slot, Companion_getInstance().r1o_1)) {
        var tmp_1 = $this.g1j_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.z1n(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      var tmp_2;
      if (!(invalidation == null)) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = scope_0.a1r();
        // Inline function 'androidx.compose.runtime.ComposerImpl.addRecomposeScope.<anonymous>' call
        if (this_0) {
          scope_0.b1r(false);
        }
        tmp_2 = this_0;
      }
      scope_0.c1r(tmp_2);
      $this.e1k_1.u1p(scope_0);
      scope_0.d1r($this.b1k_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.e1r(126665345, content);
    updateSlot($this, parameter);
    var savedCompoundKeyHash = $this.r1k_1;
    try {
      $this.r1k_1 = 126665345;
      if ($this.q1k_1) {
        $this.j1k_1.f1r();
      }
      var providersChanged = $this.q1k_1 ? false : !equals($this.h1k_1.o1o(), locals);
      if (providersChanged) {
        recordProviderUpdate($this, locals);
      }
      start($this, 202, get_compositionLocalMap(), Companion_getInstance_0().u1n_1, locals);
      $this.l1k_1 = null;
      if ($this.q1k_1 && !force) {
        $this.k1k_1 = true;
        var anchor = $this.j1k_1.b1o($this.j1k_1.a1o($this.j1k_1.r1n_1));
        var reference = new MovableContentStateReference(content, parameter, $this.g1j_1, $this.i1k_1, anchor, emptyList(), currentCompositionLocalScope($this));
        $this.b1j_1.g1r(reference);
      } else {
        var savedProvidersInvalid = $this.w1j_1;
        $this.w1j_1 = providersChanged;
        invokeComposable($this, ComposableLambda$invoke$ref(composableLambdaInstance(316014703, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.w1j_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.l1k_1 = null;
      $this.r1k_1 = savedCompoundKeyHash;
      $this.h1r();
    }
  }
  function insertMovableContentGuarded($this, references) {
    var tmp0 = $this.n1k_1;
    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
    var newChangeList = $this.f1j_1;
    var previousChangeList = tmp0.q1l_1;
    try {
      tmp0.q1l_1 = newChangeList;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>' call
      $this.n1k_1.i1r();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
          var to = item.te();
          var from = item.ue();
          var anchor = to.n1r_1;
          var location = to.m1r_1.q1r(anchor);
          var effectiveNodeIndex = new IntRef();
          $this.n1k_1.r1r(effectiveNodeIndex, anchor);
          if (from == null) {
            var toSlotTable = to.m1r_1;
            if (equals(toSlotTable, $this.i1k_1)) {
              createFreshInsertTable($this);
            }
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader = to.m1r_1.d1l();
            var tmp;
            try {
              reader.s1p(location);
              $this.n1k_1.w1r(location);
              var offsetChanges = new ChangeList();
              recomposeMovableContent$default($this, VOID, VOID, VOID, VOID, ComposerImpl$insertMovableContentGuarded$lambda($this, offsetChanges, reader, to));
              $this.n1k_1.x1r(offsetChanges, effectiveNodeIndex);
              tmp = Unit_instance;
            }finally {
              reader.r1m();
            }
          } else {
            var resolvedState = $this.b1j_1.s1r(from);
            var tmp1_elvis_lhs = resolvedState == null ? null : resolvedState.t1r_1;
            var fromTable = tmp1_elvis_lhs == null ? from.m1r_1 : tmp1_elvis_lhs;
            var tmp3_safe_receiver = resolvedState == null ? null : resolvedState.t1r_1;
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.b1o(0);
            var fromAnchor = tmp4_elvis_lhs == null ? from.n1r_1 : tmp4_elvis_lhs;
            var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!nodesToInsert.p()) {
              $this.n1k_1.u1r(nodesToInsert, effectiveNodeIndex);
              if (equals(to.m1r_1, $this.c1j_1)) {
                var group = $this.c1j_1.q1r(anchor);
                updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.j() | 0);
              }
            }
            $this.n1k_1.v1r(resolvedState, $this.b1j_1, from, to);
            // Inline function 'androidx.compose.runtime.SlotTable.read' call
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
            var reader_0 = fromTable.d1l();
            var tmp_0;
            try {
              $l$block: {
                // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                var savedReader = $this.h1k_1;
                var savedCountOverrides = $this.n1j_1;
                var savedProviderUpdates = $this.v1j_1;
                $this.n1j_1 = null;
                $this.v1j_1 = null;
                try {
                  $this.h1k_1 = reader_0;
                  // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var newLocation = fromTable.q1r(fromAnchor);
                  reader_0.s1p(newLocation);
                  $this.n1k_1.w1r(newLocation);
                  var offsetChanges_0 = new ChangeList();
                  // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
                  var this_0 = $this.n1k_1;
                  var previousChangeList_0 = this_0.q1l_1;
                  try {
                    this_0.q1l_1 = offsetChanges_0;
                    // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
                    var this_1 = $this.n1k_1;
                    var previousImplicitRootStart = this_1.t1l_1;
                    try {
                      this_1.t1l_1 = false;
                      // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                      var tmp_1 = reader_0.j1m_1;
                      var tmp_2 = from.o1r_1;
                      recomposeMovableContent($this, from.l1r_1, to.l1r_1, tmp_1, tmp_2, ComposerImpl$insertMovableContentGuarded$lambda_0($this, to));
                    }finally {
                      this_1.t1l_1 = previousImplicitRootStart;
                    }
                  }finally {
                    this_0.q1l_1 = previousChangeList_0;
                  }
                  $this.n1k_1.x1r(offsetChanges_0, effectiveNodeIndex);
                  break $l$block;
                }finally {
                  $this.h1k_1 = savedReader;
                  $this.n1j_1 = savedCountOverrides;
                  $this.v1j_1 = savedProviderUpdates;
                }
              }
              tmp_0 = Unit_instance;
            }finally {
              reader_0.r1m();
            }
          }
          $this.n1k_1.y1r();
        }
         while (inductionVariable <= last);
      $this.n1k_1.z1r();
      $this.n1k_1.w1r(0);
    }finally {
      tmp0.q1l_1 = previousChangeList;
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedIsComposing = $this.f1k_1;
    var savedNodeIndex = $this.j1j_1;
    try {
      $this.f1k_1 = true;
      $this.j1j_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.o(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.te();
          var instances = item.ue();
          if (!(instances == null)) {
            $this.a1s(scope, instances);
          } else {
            $this.a1s(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (from == null) {
        tmp = null;
      } else {
        tmp = from.b1s(to, index == null ? -1 : index, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.f1k_1 = savedIsComposing;
      $this.j1j_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $super) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    index = index === VOID ? null : index;
    invalidations = invalidations === VOID ? emptyList() : invalidations;
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function doCompose($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.f1k_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
      var tmp$ret$0 = 'Reentrant composition is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp1 = 'Compose:recompose';
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_instance.c1s(tmp1);
      try {
        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>' call
        $this.b1k_1 = currentSnapshot().h1s();
        $this.v1j_1 = null;
        // Inline function 'androidx.collection.ScatterMap.forEach' call
        var this_0 = invalidationsRequested.i1s_1;
        var k = this_0.p1d_1;
        var v = this_0.q1d_1;
        $l$block_0: {
          // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
          var m = this_0.o1d_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                      var tmp = k[index];
                      var tmp1_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      var tmp_0 = v[index];
                      var tmp2 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      $l$block: {
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
                        if (!(tmp1_0 instanceof RecomposeScopeImpl))
                          THROW_CCE();
                        var tmp0_safe_receiver = tmp1_0.t1i_1;
                        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1s_1;
                        var tmp_1;
                        if (tmp1_elvis_lhs == null) {
                          break $l$block;
                        } else {
                          tmp_1 = tmp1_elvis_lhs;
                        }
                        var location = tmp_1;
                        // Inline function 'kotlin.takeUnless' call
                        var tmp_2;
                        // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>.<anonymous>' call
                        if (!(tmp2 === ScopeInvalidated_instance)) {
                          tmp_2 = tmp2;
                        } else {
                          tmp_2 = null;
                        }
                        var tmp$ret$5 = tmp_2;
                        $this.s1j_1.e(new Invalidation(tmp1_0, location, tmp$ret$5));
                      }
                    }
                    slot = slot.c3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block_0;
                }
              }
            }
             while (!(i === lastIndex));
        }
        sortWith($this.s1j_1, get_InvalidationLocationAscending());
        $this.j1j_1 = 0;
        var complete = false;
        $this.f1k_1 = true;
        try {
          startRoot($this);
          var savedContent = $this.y1n();
          if (!(savedContent === content) && !(content == null)) {
            $this.z1n((content == null ? true : !(content == null)) ? content : THROW_CCE());
          }
          // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations' call
          var observer = $this.d1k_1;
          var observers = derivedStateObservers_0();
          try {
            observers.n1s(observer);
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose.<anonymous>.<anonymous>' call
            if (!(content == null)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, content);
              endGroup($this);
            } else if (($this.q1j_1 || $this.w1j_1) && !(savedContent == null) && !equals(savedContent, Companion_getInstance().r1o_1)) {
              startGroup_0($this, 200, get_invocation());
              invokeComposable($this, (!(savedContent == null) ? typeof savedContent === 'function' : false) ? savedContent : THROW_CCE());
              endGroup($this);
            } else {
              $this.o1s();
            }
          }finally {
            // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
            var tmp$ret$7 = observers.m1s_1 - 1 | 0;
            observers.b2(tmp$ret$7);
          }
          endRoot($this);
          complete = true;
        }finally {
          $this.f1k_1 = false;
          $this.s1j_1.y1();
          if (!complete) {
            abortRoot($this);
          }
          createFreshInsertTable($this);
        }
        break $l$block_1;
      }finally {
        Trace_instance.p1s(token);
      }
    }
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.q1s(_this__u8e3s4.l1m_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.q1s(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.r1j_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.r1j_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.r1j_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      var tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  }
  function recordInsert($this, anchor) {
    if ($this.p1k_1.p()) {
      $this.n1k_1.s1s(anchor, $this.i1k_1);
    } else {
      $this.n1k_1.r1s(anchor, $this.i1k_1, $this.p1k_1);
      $this.p1k_1 = new FixupList();
    }
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.h1k_1.j1m_1);
    $this.n1k_1.t1s();
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    $this.n1k_1.d1q();
  }
  function reportAllMovableContent($this) {
    if ($this.c1j_1.v1s()) {
      var changes = new ChangeList();
      $this.m1k_1 = changes;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var reader = $this.c1j_1.d1l();
      var tmp;
      try {
        $this.h1k_1 = reader;
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withChangeList' call
        var this_0 = $this.n1k_1;
        var previousChangeList = this_0.q1l_1;
        try {
          this_0.q1l_1 = changes;
          // Inline function 'androidx.compose.runtime.ComposerImpl.reportAllMovableContent.<anonymous>.<anonymous>' call
          reportFreeMovableContent($this, 0);
          $this.n1k_1.u1s();
        }finally {
          this_0.q1l_1 = previousChangeList;
        }
        tmp = Unit_instance;
      }finally {
        reader.r1m();
      }
    }
  }
  function finalizeCompose($this) {
    $this.n1k_1.w1s();
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!$this.h1j_1.p()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      var tmp$ret$0 = 'Start/end imbalance';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.i1j_1 = null;
    $this.j1j_1 = 0;
    $this.k1j_1 = 0;
    $this.r1k_1 = 0;
    $this.r1j_1 = false;
    $this.n1k_1.x1s();
    $this.e1k_1.y1();
    clearUpdatedNodeCounts($this);
  }
  function CompositionContextHolder() {
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var reader = this$0.h1k_1;
    var tmp;
    if (reader.o1t(group)) {
      var key = reader.d1o(group);
      var objectKey = reader.e1o(group);
      var tmp_0;
      var tmp_1;
      if (key === 126665345) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = reader.z1s(group, 0);
        var anchor = reader.b1o(group);
        var end = group + reader.z1p(group) | 0;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var this_0 = filterToRange(this$0.s1j_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(this_0.j());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var element = to(item.n1i_1, item.p1i_1);
            target.e(element);
          }
           while (inductionVariable <= last);
        var invalidations = target;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.g1j_1, this$0.c1j_1, anchor, invalidations, currentCompositionLocalScope_0(this$0, group));
        this$0.b1j_1.k1t(reference);
        this$0.n1k_1.l1t();
        this$0.n1k_1.m1t(this$0.g1j_1, this$0.b1j_1, reference);
        var tmp_2;
        if (needsNodeDelete) {
          this$0.n1k_1.n1t(nodeIndex, group);
          tmp_2 = 0;
        } else {
          tmp_2 = reader.w1q(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 && equals(objectKey, get_reference())) {
          var tmp_3 = reader.z1s(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.a1t_1;
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s = compositionContext.g1t_1.g();
            while (_iterator__ex2g4s.h()) {
              var element_0 = _iterator__ex2g4s.i();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element_0);
              this$0.b1j_1.j1t(element_0.g1j_1);
            }
          }
          tmp_0 = reader.w1q(group);
        } else {
          if (reader.v1q(group)) {
            tmp_0 = 1;
          } else {
            tmp_0 = reader.w1q(group);
          }
        }
      }
      tmp = tmp_0;
    } else if (reader.y1s(group)) {
      var size = reader.z1p(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = reader.v1q(current);
        if (isNode) {
          this$0.n1k_1.d1q();
          this$0.n1k_1.y1q(reader.q1s(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode || needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          this$0.n1k_1.d1q();
          this$0.n1k_1.g1q();
        }
        current = current + reader.z1p(current) | 0;
      }
      tmp = reader.v1q(group) ? 1 : runningNodeCount;
    } else if (reader.v1q(group)) {
      tmp = 1;
    } else {
      tmp = reader.w1q(group);
    }
    return tmp;
  }
  function ComposerImpl$derivedStateObserver$1(this$0) {
    this.p1t_1 = this$0;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C3293@126183L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
        if (isTraceInProgress()) {
          traceEventStart(316014703, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:3293)');
        }
        $content.r1t_1($parameter, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.i1o();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda(this$0, $offsetChanges, $reader, $to) {
    return function () {
      var tmp0 = this$0.n1k_1;
      var newChangeList = $offsetChanges;
      var previousChangeList = tmp0.q1l_1;
      var tmp;
      try {
        tmp0.q1l_1 = newChangeList;
        var tmp0_0 = this$0;
        var tmp1 = $reader;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
          var savedReader = tmp0_0.h1k_1;
          var savedCountOverrides = tmp0_0.n1j_1;
          var savedProviderUpdates = tmp0_0.v1j_1;
          tmp0_0.n1j_1 = null;
          tmp0_0.v1j_1 = null;
          try {
            tmp0_0.h1k_1 = tmp1;
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.withoutImplicitRootStart' call
            var this_0 = this$0.n1k_1;
            var previousImplicitRootStart = this_0.t1l_1;
            try {
              this_0.t1l_1 = false;
              // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              invokeMovableContentLambda(this$0, $to.j1r_1, $to.p1r_1, $to.k1r_1, true);
            }finally {
              this_0.t1l_1 = previousImplicitRootStart;
            }
            break $l$block;
          }finally {
            tmp0_0.h1k_1 = savedReader;
            tmp0_0.n1j_1 = savedCountOverrides;
            tmp0_0.v1j_1 = savedProviderUpdates;
          }
        }
        tmp = Unit_instance;
      }finally {
        tmp0.q1l_1 = previousChangeList;
      }
      return Unit_instance;
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.j1r_1, $to.p1r_1, $to.k1r_1, true);
      return Unit_instance;
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.a1j_1 = applier;
    this.b1j_1 = parentContext;
    this.c1j_1 = slotTable;
    this.d1j_1 = abandonSet;
    this.e1j_1 = changes;
    this.f1j_1 = lateChanges;
    this.g1j_1 = composition;
    this.h1j_1 = new Stack();
    this.i1j_1 = null;
    this.j1j_1 = 0;
    this.k1j_1 = 0;
    this.l1j_1 = 0;
    this.m1j_1 = new IntStack();
    this.n1j_1 = null;
    this.o1j_1 = null;
    this.p1j_1 = false;
    this.q1j_1 = false;
    this.r1j_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s1j_1 = ArrayList_init_$Create$();
    this.t1j_1 = new IntStack();
    this.u1j_1 = persistentCompositionLocalHashMapOf();
    this.v1j_1 = null;
    this.w1j_1 = false;
    this.x1j_1 = new IntStack();
    this.y1j_1 = false;
    this.z1j_1 = -1;
    this.a1k_1 = 0;
    this.b1k_1 = 0;
    this.c1k_1 = this.b1j_1.l1l() || this.b1j_1.l1o();
    var tmp_0 = this;
    tmp_0.d1k_1 = new ComposerImpl$derivedStateObserver$1(this);
    this.e1k_1 = new Stack();
    this.f1k_1 = false;
    this.g1k_1 = false;
    var tmp_1 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.c1j_1.d1l();
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    this_0.r1m();
    tmp_1.h1k_1 = this_0;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new SlotTable();
    // Inline function 'androidx.compose.runtime.ComposerImpl.insertTable.<anonymous>' call
    if (this.b1j_1.l1l()) {
      this_1.j1o();
    }
    if (this.b1j_1.l1o()) {
      this_1.k1o();
    }
    tmp_2.i1k_1 = this_1;
    var tmp_3 = this;
    // Inline function 'kotlin.also' call
    var this_2 = this.i1k_1.h1o();
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    this_2.m1o(true);
    tmp_3.j1k_1 = this_2;
    this.k1k_1 = false;
    this.l1k_1 = null;
    this.m1k_1 = null;
    this.n1k_1 = new ComposerChangeListWriter(this, this.e1j_1);
    var tmp_4 = this;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = this.i1k_1.d1l();
    var tmp_5;
    try {
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp_5 = reader.b1o(0);
    }finally {
      reader.r1m();
    }
    tmp_4.o1k_1 = tmp_5;
    this.p1k_1 = new FixupList();
    this.q1k_1 = false;
    this.r1k_1 = 0;
  }
  protoOf(ComposerImpl).t1t = function () {
    return this.a1j_1;
  };
  protoOf(ComposerImpl).u1t = function () {
    return this.a1k_1 > 0;
  };
  protoOf(ComposerImpl).v1t = function () {
    return this.b1j_1.w1t();
  };
  protoOf(ComposerImpl).x1t = function (key) {
    return start(this, key, null, Companion_getInstance_0().u1n_1, null);
  };
  protoOf(ComposerImpl).y1t = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).z1t = function (key) {
    var pending = this.i1j_1;
    if (!(pending == null)) {
      start(this, key, null, Companion_getInstance_0().u1n_1, null);
      return Unit_instance;
    }
    validateNodeNotExpected(this);
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
    var rGroupIndex = this.l1j_1;
    if (null == null)
      if (!(null == null) && key === 207 && !equals(null, Companion_getInstance().r1o_1)) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash = hashCode(null);
        var tmp = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_0 = this.r1k_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_1 = rotateLeft(this_0, 3) ^ keyHash;
        tmp.r1k_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var tmp_0 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_2 = this.r1k_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_3 = rotateLeft(this_2, 3) ^ key;
        tmp_0.r1k_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
      }
     else {
      if (null instanceof Enum) {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_0 = null.m2_1;
        var tmp_1 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_4 = this.r1k_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
        tmp_1.r1k_1 = rotateLeft(this_5, 3) ^ 0;
      } else {
        // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
        var keyHash_1 = hashCode(null);
        var tmp_2 = this;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_6 = this.r1k_1;
        // Inline function 'androidx.compose.runtime.rol' call
        var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
        tmp_2.r1k_1 = rotateLeft(this_7, 3) ^ 0;
      }
    }
    this.l1j_1 = this.l1j_1 + 1 | 0;
    var reader = this.h1k_1;
    if (this.q1k_1) {
      reader.s1o();
      this.j1k_1.t1o(key, Companion_getInstance().r1o_1);
      enterGroup(this, false, null);
      return Unit_instance;
    }
    var slotKey = reader.e1p();
    if (slotKey === key && !reader.a1u()) {
      reader.p1o();
      enterGroup(this, false, null);
      return Unit_instance;
    }
    if (!reader.f1q()) {
      var removeIndex = this.j1j_1;
      var startSlot = reader.j1m_1;
      recordDelete(this);
      var nodesToRemove = reader.x1n();
      this.n1k_1.x1p(removeIndex, nodesToRemove);
      removeRange(this.s1j_1, startSlot, reader.j1m_1);
    }
    reader.s1o();
    this.q1k_1 = true;
    this.l1k_1 = null;
    ensureWriter(this);
    var writer = this.j1k_1;
    writer.i1p();
    var startIndex = writer.p1n_1;
    writer.t1o(key, Companion_getInstance().r1o_1);
    this.o1k_1 = writer.b1o(startIndex);
    enterGroup(this, false, null);
  };
  protoOf(ComposerImpl).b1u = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).c1u = function () {
    return start(this, -127, null, Companion_getInstance_0().u1n_1, null);
  };
  protoOf(ComposerImpl).d1u = function () {
    endGroup(this);
    var scope = this.e1u();
    if (!(scope == null) && scope.w1p()) {
      scope.f1u(true);
    }
  };
  protoOf(ComposerImpl).g1u = function () {
    var tmp;
    if (!this.s1t() || this.w1j_1) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = this.e1u();
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1u()) === true;
    }
    return tmp;
  };
  protoOf(ComposerImpl).e1r = function (key, dataKey) {
    return start(this, key, dataKey, Companion_getInstance_0().u1n_1, null);
  };
  protoOf(ComposerImpl).h1r = function () {
    return endGroup(this);
  };
  protoOf(ComposerImpl).h1u = function () {
    this.v1j_1 = null;
  };
  protoOf(ComposerImpl).i1u = function () {
    return this.q1k_1;
  };
  protoOf(ComposerImpl).s1t = function () {
    var tmp;
    var tmp_0;
    if (!this.q1k_1 && !this.y1j_1 && !this.w1j_1) {
      var tmp0_safe_receiver = this.e1u();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1u()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.q1j_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).q1o = function () {
    start(this, 125, null, Companion_getInstance_0().v1n_1, null);
    this.r1j_1 = true;
  };
  protoOf(ComposerImpl).k1u = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.q1k_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      var tmp$ret$0 = 'createNode() can only be called when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var insertIndex = this.m1j_1.l1u();
    var groupAnchor = this.j1k_1.b1o(this.j1k_1.r1n_1);
    this.k1j_1 = this.k1j_1 + 1 | 0;
    this.p1k_1.m1u(factory, insertIndex, groupAnchor);
  };
  protoOf(ComposerImpl).n1u = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.q1k_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      var tmp$ret$0 = 'useNode() called while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var node = _get_node__db0vwp(this.h1k_1, this);
    this.n1k_1.y1q(node);
    var tmp;
    if (this.y1j_1) {
      tmp = !(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.n1k_1.o1u(node);
    }
  };
  protoOf(ComposerImpl).p1u = function () {
    return end(this, true);
  };
  protoOf(ComposerImpl).q1u = function (value, block) {
    if (this.q1k_1) {
      this.p1k_1.s1u(value, block);
    } else {
      this.n1k_1.r1u(value, block);
    }
  };
  protoOf(ComposerImpl).y1n = function () {
    var tmp;
    if (this.q1k_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().r1o_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      var it = this.h1k_1.i();
      var tmp_0;
      var tmp_1;
      if (this.y1j_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().r1o_1;
      } else {
        tmp_0 = it;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).t1u = function () {
    var tmp;
    if (this.q1k_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance().r1o_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlotForCache.<anonymous>' call
      var it = this.h1k_1.i();
      var tmp_0;
      var tmp_1;
      if (this.y1j_1) {
        tmp_1 = !(!(it == null) ? isInterface(it, ReusableRememberObserver) : false);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = Companion_getInstance().r1o_1;
      } else {
        if (it instanceof RememberObserverHolder) {
          tmp_0 = it.u1u_1;
        } else {
          tmp_0 = it;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ComposerImpl).j1l = function (value) {
    var tmp;
    if (!equals(this.y1n(), value)) {
      this.z1n(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).w1u = function (value) {
    var tmp;
    if (!(this.y1n() === value)) {
      this.z1n(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ComposerImpl).x1u = function (value) {
    var next = this.y1n();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.z1n(value);
    return true;
  };
  protoOf(ComposerImpl).y1u = function (value) {
    var next = this.y1n();
    if (!(next == null) ? typeof next === 'number' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.z1n(value);
    return true;
  };
  protoOf(ComposerImpl).z1n = function (value) {
    if (this.q1k_1) {
      this.j1k_1.e1v(value);
    } else {
      if (this.h1k_1.q1m_1) {
        var groupSlotIndex = this.h1k_1.a1v() - 1 | 0;
        if (this.n1k_1.d1v()) {
          this.n1k_1.c1v(value, this.h1k_1.b1o(this.h1k_1.l1m_1), groupSlotIndex);
        } else {
          this.n1k_1.b1v(value, groupSlotIndex);
        }
      } else {
        this.n1k_1.z1u(this.h1k_1.b1o(this.h1k_1.l1m_1), value);
      }
    }
  };
  protoOf(ComposerImpl).f1v = function (value) {
    var tmp;
    if (!(value == null) ? isInterface(value, RememberObserver) : false) {
      if (this.q1k_1) {
        this.n1k_1.g1v(value);
      }
      this.d1j_1.e(value);
      tmp = new RememberObserverHolder(value, rememberObserverAnchor(this));
    } else {
      tmp = value;
    }
    var toStore = tmp;
    this.z1n(toStore);
  };
  protoOf(ComposerImpl).h1v = function (value) {
    var parentScope = currentCompositionLocalScope(this);
    startGroup_0(this, 201, get_provider());
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.startProvider.<anonymous>' call
    var it = this.i1v();
    var tmp;
    if (equals(it, Companion_getInstance().r1o_1)) {
      tmp = null;
    } else {
      tmp = (!(it == null) ? isInterface(it, ValueHolder) : false) ? it : THROW_CCE();
    }
    var oldState = tmp;
    var tmp_0 = value.j1v_1;
    var local = tmp_0 instanceof CompositionLocal ? tmp_0 : THROW_CCE();
    var state = local.s1v(value instanceof ProvidedValue ? value : THROW_CCE(), oldState);
    var change = !equals(state, oldState);
    if (change) {
      this.t1v(state);
    }
    var providers;
    var invalid;
    if (this.q1k_1) {
      var tmp_1;
      if (value.q1v_1 || !contains_0(parentScope, local)) {
        tmp_1 = parentScope.u1v(local, state);
      } else {
        tmp_1 = parentScope;
      }
      providers = tmp_1;
      invalid = false;
      this.k1k_1 = true;
    } else {
      var tmp_2 = this.h1k_1.c1o(this.h1k_1.j1m_1);
      var oldScope = (!(tmp_2 == null) ? isInterface(tmp_2, PersistentCompositionLocalMap) : false) ? tmp_2 : THROW_CCE();
      providers = (!this.s1t() || change) && (value.q1v_1 || !contains_0(parentScope, local)) ? parentScope.u1v(local, state) : oldScope;
      invalid = this.y1j_1 || !(oldScope === providers);
    }
    if (invalid && !this.q1k_1) {
      recordProviderUpdate(this, providers);
    }
    this.x1j_1.i1l(asInt(this.w1j_1));
    this.w1j_1 = invalid;
    this.l1k_1 = providers;
    start(this, 202, get_compositionLocalMap(), Companion_getInstance_0().u1n_1, providers);
  };
  protoOf(ComposerImpl).v1v = function () {
    endGroup(this);
    endGroup(this);
    this.w1j_1 = asBool(this.x1j_1.s1m());
    this.l1k_1 = null;
  };
  protoOf(ComposerImpl).w1v = function (key) {
    return read(currentCompositionLocalScope(this), key);
  };
  protoOf(ComposerImpl).e1u = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    var it = this.e1k_1;
    return this.a1k_1 === 0 && it.l1f() ? it.l1u() : null;
  };
  protoOf(ComposerImpl).a1s = function (scope, instance) {
    var tmp0_elvis_lhs = scope.t1i_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var slotTable = this.h1k_1.c1m_1;
    var location = anchor.x1v(slotTable);
    if (this.f1k_1 && location >= this.h1k_1.j1m_1) {
      insertIfMissing(this.s1j_1, location, scope, instance);
      return true;
    }
    return false;
  };
  protoOf(ComposerImpl).o1s = function () {
    if (this.s1j_1.p()) {
      skipGroup(this);
    } else {
      var reader = this.h1k_1;
      var key = reader.e1p();
      var dataKey = reader.g1p();
      var aux = reader.o1o();
      var rGroupIndex = this.l1j_1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().r1o_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash = hashCode(aux);
          var tmp = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_0 = this.r1k_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_1 = rotateLeft(this_0, 3) ^ keyHash;
          tmp.r1k_1 = rotateLeft(this_1, 3) ^ rGroupIndex;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var tmp_0 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_2 = this.r1k_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_3 = rotateLeft(this_2, 3) ^ key;
          tmp_0.r1k_1 = rotateLeft(this_3, 3) ^ rGroupIndex;
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_0 = dataKey.m2_1;
          var tmp_1 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_4 = this.r1k_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_5 = rotateLeft(this_4, 3) ^ keyHash_0;
          tmp_1.r1k_1 = rotateLeft(this_5, 3) ^ 0;
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeEnterGroupKeyHash' call
          var keyHash_1 = hashCode(dataKey);
          var tmp_2 = this;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_6 = this.r1k_1;
          // Inline function 'androidx.compose.runtime.rol' call
          var this_7 = rotateLeft(this_6, 3) ^ keyHash_1;
          tmp_2.r1k_1 = rotateLeft(this_7, 3) ^ 0;
        }
      }
      startReaderGroup(this, reader.y1v(), null);
      recomposeToGroupEnd(this);
      reader.k1q();
      // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroup' call
      if (dataKey == null)
        if (!(aux == null) && key === 207 && !equals(aux, Companion_getInstance().r1o_1)) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey = hashCode(aux);
          var tmp_3 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_8 = this.r1k_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_9 = rotateRight(this_8, 3) ^ groupKey;
          tmp_3.r1k_1 = rotateRight(this_9, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var tmp_4 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_10 = this.r1k_1 ^ rGroupIndex;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_11 = rotateRight(this_10, 3) ^ key;
          tmp_4.r1k_1 = rotateRight(this_11, 3);
        }
       else {
        if (dataKey instanceof Enum) {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_0 = dataKey.m2_1;
          var tmp_5 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_12 = this.r1k_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_13 = rotateRight(this_12, 3) ^ groupKey_0;
          tmp_5.r1k_1 = rotateRight(this_13, 3);
        } else {
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateCompoundKeyWhenWeExitGroupKeyHash' call
          var groupKey_1 = hashCode(dataKey);
          var tmp_6 = this;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_14 = this.r1k_1 ^ 0;
          // Inline function 'androidx.compose.runtime.ror' call
          var this_15 = rotateRight(this_14, 3) ^ groupKey_1;
          tmp_6.r1k_1 = rotateRight(this_15, 3);
        }
      }
    }
  };
  protoOf(ComposerImpl).i1o = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.k1j_1 === 0)) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp0_safe_receiver = this.e1u();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z1v();
    }
    if (this.s1j_1.p()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  protoOf(ComposerImpl).a1w = function (key) {
    this.z1t(key);
    addRecomposeScope(this);
    return this;
  };
  protoOf(ComposerImpl).b1w = function () {
    var scope = this.e1k_1.l1f() ? this.e1k_1.s1m() : null;
    if (scope != null) {
      scope.c1r(false);
    }
    var tmp2_safe_receiver = scope == null ? null : scope.c1w(this.b1k_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.ComposerImpl.endRestartGroup.<anonymous>' call
      this.n1k_1.d1w(tmp2_safe_receiver, this.g1j_1);
    }
    var tmp;
    if (!(scope == null) && !scope.f1w() && (scope.w1p() || this.p1j_1)) {
      if (scope.t1i_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.q1k_1) {
          tmp_1 = this.j1k_1.b1o(this.j1k_1.r1n_1);
        } else {
          tmp_1 = this.h1k_1.b1o(this.h1k_1.l1m_1);
        }
        tmp_0.t1i_1 = tmp_1;
      }
      scope.e1w(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  protoOf(ComposerImpl).g1w = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  protoOf(ComposerImpl).h1w = function (sourceInformation) {
    if (this.q1k_1 && this.c1k_1) {
      this.j1k_1.i1w(sourceInformation);
    }
  };
  protoOf(ComposerImpl).j1w = function (key, sourceInformation) {
    if (this.q1k_1 && this.c1k_1) {
      this.j1k_1.k1w(key, sourceInformation);
    }
  };
  protoOf(ComposerImpl).l1w = function () {
    if (this.q1k_1 && this.c1k_1) {
      this.j1k_1.m1w();
    }
  };
  protoOf(ComposerImpl).n1w = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.e1j_1.p()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    doCompose(this, invalidationsRequested, content);
  };
  protoOf(ComposerImpl).p1w = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.f1k_1) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      var tmp$ret$0 = 'Preparing a composition while composing is not supported';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.f1k_1 = true;
    try {
      block();
    }finally {
      this.f1k_1 = false;
    }
  };
  protoOf(ComposerImpl).q1w = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.e1j_1.p()) {
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      var tmp$ret$0 = 'Expected applyChanges() to have been called';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.j() > 0) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp_0 = !this.s1j_1.p();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.q1j_1;
    }
    if (tmp) {
      doCompose(this, invalidationsRequested, null);
      return this.e1j_1.l1f();
    }
    return false;
  };
  protoOf(ComposerImpl).r1w = function () {
    return this.e1u();
  };
  protoOf(ComposerImpl).i1v = function () {
    return this.t1u();
  };
  protoOf(ComposerImpl).t1v = function (value) {
    return this.f1v(value);
  };
  protoOf(ComposerImpl).s1w = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.t1w(true);
    }
  };
  function Composer$Companion$Empty$1() {
  }
  protoOf(Composer$Companion$Empty$1).toString = function () {
    return 'Empty';
  };
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.r1o_1 = new Composer$Companion$Empty$1();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Composer() {
  }
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_instance;
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function composeRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'androidx.compose.runtime.SlotWriter.forAllData' call
    var group = _this__u8e3s4.p1n_1;
    var address = access$groupIndexToAddress(_this__u8e3s4, group);
    var start = access$dataIndex(_this__u8e3s4, access$_get_groups__7d4n3r(_this__u8e3s4), address);
    var end = access$dataIndex(_this__u8e3s4, access$_get_groups__7d4n3r(_this__u8e3s4), access$groupIndexToAddress(_this__u8e3s4, _this__u8e3s4.p1n_1 + _this__u8e3s4.z1p(_this__u8e3s4.p1n_1) | 0));
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>' call
        var slot_0 = access$_get_slots__7x4q9w(_this__u8e3s4)[access$dataIndexToDataAddress(_this__u8e3s4, slot)];
        if (!(slot_0 == null) ? isInterface(slot_0, ComposeNodeLifecycleCallback) : false) {
          var endRelativeOrder = _this__u8e3s4.u1w() - slot | 0;
          rememberManager.v1w(slot_0, endRelativeOrder, -1, -1);
        }
        if (slot_0 instanceof RememberObserverHolder) {
          var endRelativeSlotIndex = _this__u8e3s4.u1w() - slot | 0;
          // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
          var anchor = slot_0.v1u_1;
          var priority = -1;
          var endRelativeAfter = -1;
          if (!(anchor == null) && anchor.x1w()) {
            priority = _this__u8e3s4.q1r(anchor);
            endRelativeAfter = _this__u8e3s4.u1w() - _this__u8e3s4.w1w(priority) | 0;
          }
          var tmp2 = priority;
          // Inline function 'androidx.compose.runtime.removeCurrentGroup.<anonymous>.<anonymous>' call
          var endRelativeAfter_0 = endRelativeAfter;
          rememberManager.y1w(slot_0.u1u_1, endRelativeSlotIndex, tmp2, endRelativeAfter_0);
        }
        if (slot_0 instanceof RecomposeScopeImpl) {
          slot_0.z1w();
        }
      }
       while (inductionVariable < end);
    _this__u8e3s4.a1x();
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.j1r_1 = content;
    this.k1r_1 = parameter;
    this.l1r_1 = composition;
    this.m1r_1 = slotTable;
    this.n1r_1 = anchor;
    this.o1r_1 = invalidations;
    this.p1r_1 = locals;
  }
  function runtimeCheck(value) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!value) {
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      var tmp$ret$0 = 'Check failed';
      composeImmediateRuntimeError(tmp$ret$0);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.t1r_1 = slotTable;
  }
  function sourceInformation(composer, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.h1w(sourceInformation);
  }
  function isTraceInProgress() {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    var it = get_compositionTracer();
    return !(it == null) && it.b1x();
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c1x(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    _init_properties_Composer_kt__bmp4g0();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d1x();
    }
  }
  function MovableContent() {
  }
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, ComposeRuntimeError);
    this.e1x_1 = message;
  }
  protoOf(ComposeRuntimeError).f1 = function () {
    return this.e1x_1;
  };
  function ProvidedValue(compositionLocal, value, explicitNull, mutationPolicy, state, compute, isDynamic) {
    this.j1v_1 = compositionLocal;
    this.k1v_1 = explicitNull;
    this.l1v_1 = mutationPolicy;
    this.m1v_1 = state;
    this.n1v_1 = compute;
    this.o1v_1 = isDynamic;
    this.p1v_1 = value;
    this.q1v_1 = true;
  }
  protoOf(ProvidedValue).e2 = function () {
    var tmp = this.p1v_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ProvidedValue).f1x = function () {
    var tmp;
    if (this.k1v_1) {
      tmp = (null == null ? true : !(null == null)) ? null : THROW_CCE();
    } else if (!(this.m1v_1 == null)) {
      tmp = this.m1v_1.e2();
    } else if (!(this.p1v_1 == null)) {
      tmp = this.p1v_1;
    } else {
      composeRuntimeError('Unexpected form of a provided value');
    }
    return tmp;
  };
  protoOf(ProvidedValue).g1x = function () {
    return (this.k1v_1 || !(this.e2() == null)) && !this.o1v_1;
  };
  function RememberObserverHolder(wrapped, after) {
    this.u1u_1 = wrapped;
    this.v1u_1 = after;
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMultiMap(multiMap(this$0.w1o_1.j()));
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var it = this_0.h1x_1;
      var inductionVariable = 0;
      var last = this$0.w1o_1.j();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.w1o_1.o(index);
          MutableScatterMultiMap__put_impl_1qpnrt(it, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      var tmp$ret$0 = this_0.h1x_1;
      return new MutableScatterMultiMap(tmp$ret$0);
    };
  }
  function Pending(keyInfos, startIndex) {
    this.w1o_1 = keyInfos;
    this.x1o_1 = startIndex;
    this.y1o_1 = 0;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.x1o_1 >= 0)) {
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      var tmp$ret$0 = 'Invalid start index';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z1o_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var result = new MutableIntObjectMap();
    var inductionVariable = 0;
    var last = this.w1o_1.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.w1o_1.o(index);
        result.f1c(keyInfo.l1p_1, new GroupInfo(index, runningNodeIndex, keyInfo.m1p_1));
        runningNodeIndex = runningNodeIndex + keyInfo.m1p_1 | 0;
      }
       while (inductionVariable < last);
    tmp_0.a1p_1 = result;
    var tmp_1 = this;
    tmp_1.b1p_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  protoOf(Pending).i1x = function () {
    var tmp0 = this.b1p_1;
    // Inline function 'kotlin.getValue' call
    keyMap$factory();
    return tmp0.e2().h1x_1;
  };
  protoOf(Pending).h1p = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return MutableScatterMultiMap__pop_impl_h6qh61(this.i1x(), joinedKey);
  };
  protoOf(Pending).d1p = function (keyInfo) {
    return this.z1o_1.e(keyInfo);
  };
  protoOf(Pending).w1p = function () {
    return this.z1o_1;
  };
  protoOf(Pending).q1p = function (from, to) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.a1p_1;
      var v = this_0.w1b_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.u1b_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp = v[index];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.j1x_1;
                    if (position === from)
                      group.j1x_1 = to;
                    else if (to <= position ? position < from : false)
                      group.j1x_1 = position + 1 | 0;
                  }
                  slot = slot.c3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.a1p_1;
      var v_0 = this_2.w1b_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.u1b_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.e3(this_3.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.j1x_1;
                    if (position_0 === from)
                      group_0.j1x_1 = to;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.j1x_1 = position_0 - 1 | 0;
                  }
                  slot_0 = slot_0.c3(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).c1q = function (from, to, count) {
    if (from > to) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_0 = this.a1p_1;
      var v = this_0.w1b_1;
      $l$block: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m = this_0.u1b_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp = v[index];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var group = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    var position = group.k1x_1;
                    if (from <= position ? position < (from + count | 0) : false)
                      group.k1x_1 = to + (position - from | 0) | 0;
                    else if (to <= position ? position < from : false)
                      group.k1x_1 = position + count | 0;
                  }
                  slot = slot.c3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    } else if (to > from) {
      // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
      var this_2 = this.a1p_1;
      var v_0 = this_2.w1b_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
        var m_0 = this_2.u1b_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.e3(this_3.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                    var tmp_0 = v_0[index_0];
                    // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
                    var group_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    var position_0 = group_0.k1x_1;
                    if (from <= position_0 ? position_0 < (from + count | 0) : false)
                      group_0.k1x_1 = to + (position_0 - from | 0) | 0;
                    else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
                      group_0.k1x_1 = position_0 - count | 0;
                  }
                  slot_0 = slot_0.c3(8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
  };
  protoOf(Pending).c1p = function (keyInfo, insertIndex) {
    this.a1p_1.f1c(keyInfo.l1p_1, new GroupInfo(-1, insertIndex, 0));
  };
  protoOf(Pending).y1p = function (group, newCount) {
    var groupInfo = this.a1p_1.o(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.k1x_1;
      var difference = newCount - groupInfo.l1x_1 | 0;
      groupInfo.l1x_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'androidx.collection.IntObjectMap.forEachValue' call
        var this_0 = this.a1p_1;
        var v = this_0.w1b_1;
        $l$block: {
          // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
          var m = this_0.u1b_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index_0 = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.IntObjectMap.forEachValue.<anonymous>' call
                      var tmp = v[index_0];
                      // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
                      var childGroupInfo = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (childGroupInfo.k1x_1 >= index && !equals(childGroupInfo, groupInfo)) {
                        var newIndex = childGroupInfo.k1x_1 + difference | 0;
                        if (newIndex >= 0)
                          childGroupInfo.k1x_1 = newIndex;
                      }
                    }
                    slot = slot.c3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      }
      return true;
    }
    return false;
  };
  protoOf(Pending).p1p = function (keyInfo) {
    var tmp0_safe_receiver = this.a1p_1.o(keyInfo.l1p_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1x_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).o1p = function (keyInfo) {
    var tmp0_safe_receiver = this.a1p_1.o(keyInfo.l1p_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1x_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  protoOf(Pending).a1q = function (keyInfo) {
    var tmp0_safe_receiver = this.a1p_1.o(keyInfo.l1p_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1x_1;
    return tmp1_elvis_lhs == null ? keyInfo.m1p_1 : tmp1_elvis_lhs;
  };
  function _GroupKind___init__impl__iwqg06(value) {
    return value;
  }
  function _GroupKind___get_value__impl__cf5pqe($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.u1n_1 = _GroupKind___init__impl__iwqg06(0);
    this.v1n_1 = _GroupKind___init__impl__iwqg06(1);
    this.w1n_1 = _GroupKind___init__impl__iwqg06(2);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function removeRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var validation = _this__u8e3s4.o(index);
      if (validation.o1i_1 < end) {
        _this__u8e3s4.b2(index);
      } else
        break $l$loop;
    }
  }
  function asInt(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4 ? 1 : 0;
  }
  function asBool(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4 === 0);
  }
  function ReusableRememberObserver() {
  }
  function get_isAfterFirstChild(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.p1n_1 > (_this__u8e3s4.r1n_1 + 1 | 0);
  }
  function get_isAfterFirstChild_0(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return _this__u8e3s4.j1m_1 > (_this__u8e3s4.l1m_1 + 1 | 0);
  }
  function firstInRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.j()) {
      var firstInvalidation = _this__u8e3s4.o(index);
      if (firstInvalidation.o1i_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.b2(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    _init_properties_Composer_kt__bmp4g0();
    if (a === b)
      return a;
    if (a === common || b === common)
      return common;
    if (_this__u8e3s4.a1o(a) === b)
      return b;
    if (_this__u8e3s4.a1o(b) === a)
      return a;
    if (_this__u8e3s4.a1o(a) === _this__u8e3s4.a1o(b))
      return _this__u8e3s4.a1o(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var times = aDistance - bDistance | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.a1o(currentA);
      }
       while (inductionVariable < times);
    // Inline function 'kotlin.repeat' call
    var times_0 = bDistance - aDistance | 0;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.a1o(currentB);
      }
       while (inductionVariable_0 < times_0);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.a1o(currentA);
      currentB = _this__u8e3s4.a1o(currentB);
    }
    return currentA;
  }
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    _init_properties_Composer_kt__bmp4g0();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        tmp_0 = instance;
      } else {
        tmp_0 = null;
      }
      var tmp$ret$1 = tmp_0;
      _this__u8e3s4.a2(tmp, new Invalidation(scope, location, tmp$ret$1));
    } else {
      var invalidation = _this__u8e3s4.o(index);
      if (!(instance == null) ? isInterface(instance, DerivedState) : false) {
        var oldInstance = invalidation.p1i_1;
        if (oldInstance == null)
          invalidation.p1i_1 = instance;
        else {
          if (oldInstance instanceof MutableScatterSet) {
            if (!(oldInstance instanceof MutableScatterSet))
              THROW_CCE();
            oldInstance.e(instance);
          } else {
            invalidation.p1i_1 = mutableScatterSetOf(oldInstance, instance);
          }
        }
      } else {
        invalidation.p1i_1 = null;
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var reader = _this__u8e3s4.d1l();
    var tmp;
    try {
      var index = _this__u8e3s4.q1r(anchor);
      collectNodesFrom$_anonymous_$collectFromGroup_lmwduz(reader, result, index);
      tmp = Unit_instance;
    }finally {
      reader.r1m();
    }
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.j()) {
      var invalidation = _this__u8e3s4.o(index);
      if (invalidation.o1i_1 < end) {
        result.e(invalidation);
      } else
        break $l$loop;
      index = index + 1 | 0;
    }
    return result;
  }
  function composeImmediateRuntimeError(message) {
    _init_properties_Composer_kt__bmp4g0();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.j1x_1 = slotIndex;
    this.k1x_1 = nodeIndex;
    this.l1x_1 = nodeCount;
  }
  function _MutableScatterMultiMap___init__impl__s8ohqe(map) {
    return map;
  }
  function _MutableScatterMultiMap___get_map__impl__38gkgh($this) {
    return $this;
  }
  function MutableScatterMultiMap__put_impl_1qpnrt($this, key, value) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = _MutableScatterMultiMap___get_map__impl__38gkgh($this);
    var index = this_0.a1e(key);
    var inserting = index < 0;
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.q1d_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.put.<anonymous>' call
    var previous = tmp;
    var tmp_1;
    if (previous == null) {
      tmp_1 = value;
    } else {
      if (!(previous == null) ? isInterface(previous, KtMutableList) : false) {
        var list = (!(previous == null) ? isInterface(previous, KtMutableList) : false) ? previous : THROW_CCE();
        list.e(value);
        tmp_1 = list;
      } else {
        tmp_1 = mutableListOf([previous, value]);
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.p1d_1[insertionIndex] = key;
      this_0.q1d_1[insertionIndex] = computedValue;
    } else {
      this_0.q1d_1[index] = computedValue;
    }
  }
  function MutableScatterMultiMap__pop_impl_h6qh61($this, key) {
    var tmp0_safe_receiver = _MutableScatterMultiMap___get_map__impl__38gkgh($this).h2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.MutableScatterMultiMap.pop.<anonymous>' call
      var tmp_0;
      if (isInterface(tmp0_safe_receiver, KtMutableList)) {
        var list = isInterface(tmp0_safe_receiver, KtMutableList) ? tmp0_safe_receiver : THROW_CCE();
        var result = list.b2(0);
        if (list.p()) {
          _MutableScatterMultiMap___get_map__impl__38gkgh($this).b5(key);
        }
        tmp_0 = result;
      } else {
        _MutableScatterMultiMap___get_map__impl__38gkgh($this).b5(key);
        tmp_0 = tmp0_safe_receiver;
      }
      var tmp_1 = tmp_0;
      tmp = !(tmp_1 == null) ? tmp_1 : THROW_CCE();
    }
    return tmp;
  }
  function MutableScatterMultiMap__toString_impl_ksvnwa($this) {
    return 'MutableScatterMultiMap(map=' + $this.toString() + ')';
  }
  function MutableScatterMultiMap__hashCode_impl_sh2h9z($this) {
    return $this.hashCode();
  }
  function MutableScatterMultiMap__equals_impl_j6710t($this, other) {
    if (!(other instanceof MutableScatterMultiMap))
      return false;
    var tmp0_other_with_cast = other instanceof MutableScatterMultiMap ? other.h1x_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function MutableScatterMultiMap(map) {
    this.h1x_1 = map;
  }
  protoOf(MutableScatterMultiMap).toString = function () {
    return MutableScatterMultiMap__toString_impl_ksvnwa(this.h1x_1);
  };
  protoOf(MutableScatterMultiMap).hashCode = function () {
    return MutableScatterMultiMap__hashCode_impl_sh2h9z(this.h1x_1);
  };
  protoOf(MutableScatterMultiMap).equals = function (other) {
    return MutableScatterMultiMap__equals_impl_j6710t(this.h1x_1, other);
  };
  function get_joinedKey(_this__u8e3s4) {
    _init_properties_Composer_kt__bmp4g0();
    return !(_this__u8e3s4.k1p_1 == null) ? new JoinedKey(_this__u8e3s4.j1p_1, _this__u8e3s4.k1p_1) : _this__u8e3s4.j1p_1;
  }
  function multiMap(initialCapacity) {
    _init_properties_Composer_kt__bmp4g0();
    return _MutableScatterMultiMap___init__impl__s8ohqe(new MutableScatterMap(initialCapacity));
  }
  function findInsertLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    var it = findLocation(_this__u8e3s4, location);
    return it < 0 ? -(it + 1 | 0) | 0 : it;
  }
  function findLocation(_this__u8e3s4, location) {
    _init_properties_Composer_kt__bmp4g0();
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.o(mid);
      var cmp = compareTo(midVal.o1i_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    _init_properties_Composer_kt__bmp4g0();
    var count = 0;
    var current = index;
    while (current > 0 && !(current === root)) {
      current = _this__u8e3s4.a1o(current);
      count = count + 1 | 0;
    }
    return count;
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    _init_properties_Composer_kt__bmp4g0();
    composer.j1w(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    _init_properties_Composer_kt__bmp4g0();
    composer.l1w();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this);
    if ($this$with.i1u() || !equals($this$with.i1v(), value)) {
      $this$with.t1v(value);
      _Updater___get_composer__impl__9ty7av($this).q1u(value, block);
    }
    return Unit_instance;
  }
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.m1x_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).n1x = function (a, b) {
    return this.m1x_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.n1x(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).j3 = function () {
    return this.m1x_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.j3(), other.j3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.j3());
  };
  function collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, group) {
    if ($reader.v1q(group)) {
      result.e($reader.q1s(group));
    } else {
      var current = group + 1 | 0;
      var end = group + $reader.z1p(group) | 0;
      while (current < end) {
        collectNodesFrom$_anonymous_$collectFromGroup_lmwduz($reader, result, current);
        current = current + $reader.z1p(current) | 0;
      }
    }
  }
  function InvalidationLocationAscending$lambda(i1, i2) {
    _init_properties_Composer_kt__bmp4g0();
    return compareTo(i1.o1i_1, i2.o1i_1);
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return new MutableScatterMultiMap(receiver.i1x());
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function _init_properties_Composer_kt__bmp4g0() {
    if (!properties_initialized_Composer_kt_89qzc2) {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
      var tmp = InvalidationLocationAscending$lambda;
      InvalidationLocationAscending = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function get_PendingApplyNoModifications() {
    _init_properties_Composition_kt__t5pjw8();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  var CompositionImplServiceKey;
  function recordLeaving($this, instance, endRelativeOrder, priority, endRelativeAfter) {
    processPendingLeaving($this, endRelativeOrder);
    if (0 <= endRelativeAfter ? endRelativeAfter < endRelativeOrder : false) {
      $this.t1x_1.e(instance);
      $this.u1x_1.r1b(priority);
      $this.v1x_1.r1b(endRelativeAfter);
    } else {
      $this.q1x_1.e(instance);
    }
  }
  function processPendingLeaving($this, endRelativeOrder) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.t1x_1.p()) {
      var index = 0;
      var toAdd = null;
      var toAddAfter = null;
      var toAddPriority = null;
      while (index < $this.v1x_1.j()) {
        if (endRelativeOrder <= $this.v1x_1.o(index)) {
          var instance = $this.t1x_1.b2(index);
          var endRelativeAfter = $this.v1x_1.b2(index);
          var priority = $this.u1x_1.b2(index);
          if (toAdd == null) {
            toAdd = mutableListOf([instance]);
            // Inline function 'kotlin.also' call
            var this_0 = new MutableIntList();
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_0.r1b(endRelativeAfter);
            toAddAfter = this_0;
            // Inline function 'kotlin.also' call
            var this_1 = new MutableIntList();
            // Inline function 'androidx.compose.runtime.RememberEventDispatcher.processPendingLeaving.<anonymous>' call
            this_1.r1b(priority);
            toAddPriority = this_1;
          } else {
            if (!(toAddPriority instanceof MutableIntList))
              THROW_CCE();
            if (!(toAddAfter instanceof MutableIntList))
              THROW_CCE();
            toAdd.e(instance);
            toAddAfter.r1b(endRelativeAfter);
            toAddPriority.r1b(priority);
          }
        } else {
          index = index + 1 | 0;
        }
      }
      if (!(toAdd == null)) {
        if (!(toAddPriority instanceof MutableIntList))
          THROW_CCE();
        if (!(toAddAfter instanceof MutableIntList))
          THROW_CCE();
        var inductionVariable = 0;
        var last = toAdd.j() - 1 | 0;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var inductionVariable_0 = i + 1 | 0;
            var last_0 = toAdd.j();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var iAfter = toAddAfter.o(i);
                var jAfter = toAddAfter.o(j);
                if (iAfter < jAfter || (jAfter === iAfter && toAddPriority.o(i) < toAddPriority.o(j))) {
                  swap(toAdd, i, j);
                  swap_0(toAddPriority, i, j);
                  swap_0(toAddAfter, i, j);
                }
              }
               while (inductionVariable_0 < last_0);
          }
           while (inductionVariable < last);
        $this.q1x_1.n(toAdd);
      }
    }
  }
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.o1y_1.u1t();
  }
  function composeInitial($this, content) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.r1y_1) {
      // Inline function 'androidx.compose.runtime.CompositionImpl.composeInitial.<anonymous>' call
      var tmp$ret$0 = 'The composition is disposed';
      throwIllegalStateException(tmp$ret$0);
    }
    $this.s1y_1 = content;
    $this.w1x_1.t1y($this, $this.s1y_1);
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.y1x_1.b12(get_PendingApplyNoModifications());
    if (toRecord != null) {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
          addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked_0($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.y1x_1));
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.y1x_1.b12(null);
    if (!equals(toRecord, get_PendingApplyNoModifications())) {
      if (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) {
        addPendingInvalidationsLocked_0($this, (!(toRecord == null) ? isInterface(toRecord, KtSet) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked_0($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + toString($this.y1x_1));
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, value, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.c1y_1.i1s_1.h2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.h1f_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.g1f_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (!$this.i1y_1.w1y(value, scope) && !scope.x1y(value).equals(InvalidationResult_IGNORED_getInstance())) {
                        if (scope.v1y() && !forgetConditionalScopes) {
                          $this.e1y_1.e(scope);
                        } else {
                          $this.d1y_1.e(scope);
                        }
                      }
                    }
                    slot = slot.c3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (!$this.i1y_1.w1y(value, scope_0) && !scope_0.x1y(value).equals(InvalidationResult_IGNORED_getInstance())) {
          if (scope_0.v1y() && !forgetConditionalScopes) {
            $this.e1y_1.e(scope_0);
          } else {
            $this.d1y_1.e(scope_0);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked_0($this, values, forgetConditionalScopes) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.y1y_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.h1f_1;
      var tmp$ret$5;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.g1f_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_0 = k[index];
                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (value instanceof RecomposeScopeImpl) {
                      value.x1y(null);
                    } else {
                      addPendingInvalidationsLocked($this, value, forgetConditionalScopes);
                      // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
                      var value_0 = $this.f1y_1.i1s_1.h2(value);
                      if (value_0 != null) {
                        if (value_0 instanceof MutableScatterSet) {
                          // Inline function 'androidx.collection.ScatterSet.forEach' call
                          var this_2 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
                          // Inline function 'kotlin.contracts.contract' call
                          var k_0 = this_2.h1f_1;
                          $l$block: {
                            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                            // Inline function 'kotlin.contracts.contract' call
                            var m_0 = this_2.g1f_1;
                            var lastIndex_0 = m_0.length - 2 | 0;
                            var inductionVariable_1 = 0;
                            if (inductionVariable_1 <= lastIndex_0)
                              do {
                                var i_0 = inductionVariable_1;
                                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                var slot_0 = m_0[i_0];
                                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                var this_3 = slot_0;
                                if (!this_3.e3(this_3.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                  var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                  var inductionVariable_2 = 0;
                                  if (inductionVariable_2 < bitCount_0)
                                    do {
                                      var j_0 = inductionVariable_2;
                                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                      // Inline function 'androidx.collection.isFull' call
                                      if (slot_0.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                        var index_0 = (i_0 << 3) + j_0 | 0;
                                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                                        var tmp_1 = k_0[index_0];
                                        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                                        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                                        addPendingInvalidationsLocked($this, it, forgetConditionalScopes);
                                      }
                                      slot_0 = slot_0.c3(8);
                                    }
                                     while (inductionVariable_2 < bitCount_0);
                                  if (!(bitCount_0 === 8)) {
                                    break $l$block;
                                  }
                                }
                              }
                               while (!(i_0 === lastIndex_0));
                          }
                        } else {
                          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                          var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
                          addPendingInvalidationsLocked($this, it_0, forgetConditionalScopes);
                        }
                      }
                    }
                  }
                  slot = slot.c3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$5 = Unit_instance;
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$5;
    } else {
      var _iterator__ex2g4s = values.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
        if (element instanceof RecomposeScopeImpl) {
          element.x1y(null);
        } else {
          addPendingInvalidationsLocked($this, element, forgetConditionalScopes);
          // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
          var value_1 = $this.f1y_1.i1s_1.h2(element);
          if (value_1 != null) {
            if (value_1 instanceof MutableScatterSet) {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_4 = value_1 instanceof MutableScatterSet ? value_1 : THROW_CCE();
              // Inline function 'kotlin.contracts.contract' call
              var k_1 = this_4.h1f_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_1 = this_4.g1f_1;
                var lastIndex_1 = m_1.length - 2 | 0;
                var inductionVariable_3 = 0;
                if (inductionVariable_3 <= lastIndex_1)
                  do {
                    var i_1 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var slot_1 = m_1[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_5 = slot_1;
                    if (!this_5.e3(this_5.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_4 = 0;
                      if (inductionVariable_4 < bitCount_1)
                        do {
                          var j_1 = inductionVariable_4;
                          inductionVariable_4 = inductionVariable_4 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_1.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                            var index_1 = (i_1 << 3) + j_1 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            var tmp_2 = k_1[index_1];
                            // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                            var it_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                            addPendingInvalidationsLocked($this, it_1, forgetConditionalScopes);
                          }
                          slot_1 = slot_1.c3(8);
                        }
                         while (inductionVariable_4 < bitCount_1);
                      if (!(bitCount_1 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex_1));
              }
            } else {
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
              var it_2 = !(value_1 == null) ? value_1 : THROW_CCE();
              addPendingInvalidationsLocked($this, it_2, forgetConditionalScopes);
            }
          }
        }
      }
      tmp = Unit_instance;
    }
    var conditionallyInvalidatedScopes = $this.e1y_1;
    var invalidatedScopes = $this.d1y_1;
    if (forgetConditionalScopes && conditionallyInvalidatedScopes.l1f()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_6 = $this.c1y_1.i1s_1;
      $l$block_3: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_2 = this_6.o1d_1;
        var lastIndex_2 = m_2.length - 2 | 0;
        var inductionVariable_5 = 0;
        if (inductionVariable_5 <= lastIndex_2)
          do {
            var i_2 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            var slot_2 = m_2[i_2];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_7 = slot_2;
            if (!this_7.e3(this_7.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_2 = 8 - (~(i_2 - lastIndex_2 | 0) >>> 31 | 0) | 0;
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < bitCount_2)
                do {
                  var j_2 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_2.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_2 = (i_2 << 3) + j_2 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    var tmp_3 = this_6.p1d_1[index_2];
                    (tmp_3 == null ? true : !(tmp_3 == null)) || THROW_CCE();
                    var tmp_4 = this_6.q1d_1[index_2];
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var value_2 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
                    var tmp_5;
                    if (value_2 instanceof MutableScatterSet) {
                      var set = value_2 instanceof MutableScatterSet ? value_2 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements = set.h1f_1;
                      $l$block_2: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_3 = set.g1f_1;
                        var lastIndex_3 = m_3.length - 2 | 0;
                        var inductionVariable_7 = 0;
                        if (inductionVariable_7 <= lastIndex_3)
                          do {
                            var i_3 = inductionVariable_7;
                            inductionVariable_7 = inductionVariable_7 + 1 | 0;
                            var slot_3 = m_3[i_3];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_8 = slot_3;
                            if (!this_8.e3(this_8.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_3 = 8 - (~(i_3 - lastIndex_3 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_8 = 0;
                              if (inductionVariable_8 < bitCount_3)
                                do {
                                  var j_3 = inductionVariable_8;
                                  inductionVariable_8 = inductionVariable_8 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_3.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                    var index_3 = (i_3 << 3) + j_3 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    var tmp_6 = elements[index_3];
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var scope = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
                                    if (conditionallyInvalidatedScopes.r(scope) || invalidatedScopes.r(scope)) {
                                      set.v1g(index_3);
                                    }
                                  }
                                  slot_3 = slot_3.c3(8);
                                }
                                 while (inductionVariable_8 < bitCount_3);
                              if (!(bitCount_3 === 8)) {
                                break $l$block_2;
                              }
                            }
                          }
                           while (!(i_3 === lastIndex_3));
                      }
                      tmp_5 = set.p();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_0 = !(value_2 == null) ? value_2 : THROW_CCE();
                      tmp_5 = conditionallyInvalidatedScopes.r(scope_0) || invalidatedScopes.r(scope_0);
                    }
                    if (tmp_5) {
                      this_6.h1c(index_2);
                    }
                  }
                  slot_2 = slot_2.c3(8);
                }
                 while (inductionVariable_6 < bitCount_2);
              if (!(bitCount_2 === 8)) {
                break $l$block_3;
              }
            }
          }
           while (!(i_2 === lastIndex_2));
      }
      conditionallyInvalidatedScopes.y1();
      cleanUpDerivedStateObservations($this);
    } else if (invalidatedScopes.l1f()) {
      // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
      // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
      var this_9 = $this.c1y_1.i1s_1;
      $l$block_5: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_4 = this_9.o1d_1;
        var lastIndex_4 = m_4.length - 2 | 0;
        var inductionVariable_9 = 0;
        if (inductionVariable_9 <= lastIndex_4)
          do {
            var i_4 = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            var slot_4 = m_4[i_4];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_10 = slot_4;
            if (!this_10.e3(this_10.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_4 = 8 - (~(i_4 - lastIndex_4 | 0) >>> 31 | 0) | 0;
              var inductionVariable_10 = 0;
              if (inductionVariable_10 < bitCount_4)
                do {
                  var j_4 = inductionVariable_10;
                  inductionVariable_10 = inductionVariable_10 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_4.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_4 = (i_4 << 3) + j_4 | 0;
                    // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                    var tmp_7 = this_9.p1d_1[index_4];
                    (tmp_7 == null ? true : !(tmp_7 == null)) || THROW_CCE();
                    var tmp_8 = this_9.q1d_1[index_4];
                    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                    var value_3 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
                    var tmp_9;
                    if (value_3 instanceof MutableScatterSet) {
                      var set_0 = value_3 instanceof MutableScatterSet ? value_3 : THROW_CCE();
                      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                      var elements_0 = set_0.h1f_1;
                      $l$block_4: {
                        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                        // Inline function 'kotlin.contracts.contract' call
                        var m_5 = set_0.g1f_1;
                        var lastIndex_5 = m_5.length - 2 | 0;
                        var inductionVariable_11 = 0;
                        if (inductionVariable_11 <= lastIndex_5)
                          do {
                            var i_5 = inductionVariable_11;
                            inductionVariable_11 = inductionVariable_11 + 1 | 0;
                            var slot_5 = m_5[i_5];
                            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                            var this_11 = slot_5;
                            if (!this_11.e3(this_11.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                              var bitCount_5 = 8 - (~(i_5 - lastIndex_5 | 0) >>> 31 | 0) | 0;
                              var inductionVariable_12 = 0;
                              if (inductionVariable_12 < bitCount_5)
                                do {
                                  var j_5 = inductionVariable_12;
                                  inductionVariable_12 = inductionVariable_12 + 1 | 0;
                                  // Inline function 'androidx.collection.isFull' call
                                  if (slot_5.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                    var index_5 = (i_5 << 3) + j_5 | 0;
                                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                    var tmp_10 = elements_0[index_5];
                                    // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                                    var scope_1 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
                                    if (invalidatedScopes.r(scope_1)) {
                                      set_0.v1g(index_5);
                                    }
                                  }
                                  slot_5 = slot_5.c3(8);
                                }
                                 while (inductionVariable_12 < bitCount_5);
                              if (!(bitCount_5 === 8)) {
                                break $l$block_4;
                              }
                            }
                          }
                           while (!(i_5 === lastIndex_5));
                      }
                      tmp_9 = set_0.p();
                    } else {
                      // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
                      var scope_2 = !(value_3 == null) ? value_3 : THROW_CCE();
                      tmp_9 = invalidatedScopes.r(scope_2);
                    }
                    if (tmp_9) {
                      this_9.h1c(index_4);
                    }
                  }
                  slot_4 = slot_4.c3(8);
                }
                 while (inductionVariable_10 < bitCount_4);
              if (!(bitCount_4 === 8)) {
                break $l$block_5;
              }
            }
          }
           while (!(i_4 === lastIndex_4));
      }
      cleanUpDerivedStateObservations($this);
      invalidatedScopes.y1();
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = $this.f1y_1.i1s_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.o1d_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  var tmp = this_0.p1d_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.q1d_1[index];
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                    var elements = set.h1f_1;
                    $l$block: {
                      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                      // Inline function 'kotlin.contracts.contract' call
                      var m_0 = set.g1f_1;
                      var lastIndex_0 = m_0.length - 2 | 0;
                      var inductionVariable_1 = 0;
                      if (inductionVariable_1 <= lastIndex_0)
                        do {
                          var i_0 = inductionVariable_1;
                          inductionVariable_1 = inductionVariable_1 + 1 | 0;
                          var slot_0 = m_0[i_0];
                          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                          var this_2 = slot_0;
                          if (!this_2.e3(this_2.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                            var inductionVariable_2 = 0;
                            if (inductionVariable_2 < bitCount_0)
                              do {
                                var j_0 = inductionVariable_2;
                                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                // Inline function 'androidx.collection.isFull' call
                                if (slot_0.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                  var index_0 = (i_0 << 3) + j_0 | 0;
                                  // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                  var tmp_2 = elements[index_0];
                                  // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                                  var derivedState = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                                  if (!$this.c1y_1.z1y(derivedState)) {
                                    set.v1g(index_0);
                                  }
                                }
                                slot_0 = slot_0.c3(8);
                              }
                               while (inductionVariable_2 < bitCount_0);
                            if (!(bitCount_0 === 8)) {
                              break $l$block;
                            }
                          }
                        }
                         while (!(i_0 === lastIndex_0));
                    }
                    tmp_1 = set.p();
                  } else {
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    var derivedState_0 = !(value == null) ? value : THROW_CCE();
                    tmp_1 = !$this.c1y_1.z1y(derivedState_0);
                  }
                  if (tmp_1) {
                    this_0.h1c(index);
                  }
                }
                slot = slot.c3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i === lastIndex));
    }
    if ($this.e1y_1.l1f()) {
      // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
      var this_3 = $this.e1y_1;
      var elements_0 = this_3.h1f_1;
      $l$block_1: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_1 = this_3.g1f_1;
        var lastIndex_1 = m_1.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_1)
          do {
            var i_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_1 = m_1[i_1];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_4 = slot_1;
            if (!this_4.e3(this_4.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_1)
                do {
                  var j_1 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_1.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_1 = (i_1 << 3) + j_1 | 0;
                    // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                    var tmp_3 = elements_0[index_1];
                    // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
                    if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).v1y()) {
                      this_3.v1g(index_1);
                    }
                  }
                  slot_1 = slot_1.c3(8);
                }
                 while (inductionVariable_4 < bitCount_1);
              if (!(bitCount_1 === 8)) {
                break $l$block_1;
              }
            }
          }
           while (!(i_1 === lastIndex_1));
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = $this.c1y_1.i1s_1.h2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.h1f_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.g1f_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
                      var scope = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      if (scope.x1y(value).equals(InvalidationResult_IMMINENT_getInstance())) {
                        $this.i1y_1.a1z(value, scope);
                      }
                    }
                    slot = slot.c3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
        var scope_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        if (scope_0.x1y(value).equals(InvalidationResult_IMMINENT_getInstance())) {
          $this.i1y_1.a1z(value, scope_0);
        }
      }
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.a1y_1);
    try {
      if (changes.p())
        return Unit_instance;
      var tmp0 = 'Compose:applyChanges';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.c1s(tmp0);
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>' call
          $this.x1x_1.g1h();
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var writer = $this.b1y_1.h1o();
          var normalClose = false;
          var tmp;
          try {
            changes.b1z($this.x1x_1, writer, manager);
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
            normalClose = true;
            tmp = Unit_instance;
          }finally {
            writer.m1o(normalClose);
          }
          $this.x1x_1.h1h();
          break $l$block;
        }finally {
          Trace_instance.p1s(token);
        }
      }
      manager.c1z();
      manager.d1z();
      if ($this.k1y_1) {
        var tmp1 = 'Compose:unobserve';
        $l$block_2: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_instance.c1s(tmp1);
          try {
            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>' call
            $this.k1y_1 = false;
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf' call
            // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
            var this_0 = $this.c1y_1.i1s_1;
            $l$block_1: {
              // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
              var m = this_0.o1d_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                          var tmp_0 = this_0.p1d_1[index];
                          (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
                          var tmp_1 = this_0.q1d_1[index];
                          // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScopeIf.<anonymous>' call
                          var value = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                          var tmp_2;
                          if (value instanceof MutableScatterSet) {
                            var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                            // Inline function 'androidx.collection.MutableScatterSet.removeIf' call
                            var elements = set.h1f_1;
                            $l$block_0: {
                              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                              // Inline function 'kotlin.contracts.contract' call
                              var m_0 = set.g1f_1;
                              var lastIndex_0 = m_0.length - 2 | 0;
                              var inductionVariable_1 = 0;
                              if (inductionVariable_1 <= lastIndex_0)
                                do {
                                  var i_0 = inductionVariable_1;
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var slot_0 = m_0[i_0];
                                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                                  var this_2 = slot_0;
                                  if (!this_2.e3(this_2.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                                    var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                                    var inductionVariable_2 = 0;
                                    if (inductionVariable_2 < bitCount_0)
                                      do {
                                        var j_0 = inductionVariable_2;
                                        inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                        // Inline function 'androidx.collection.isFull' call
                                        if (slot_0.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                                          var index_0 = (i_0 << 3) + j_0 | 0;
                                          // Inline function 'androidx.collection.MutableScatterSet.removeIf.<anonymous>' call
                                          var tmp_3 = elements[index_0];
                                          // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                                          if (!((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE()).x1w()) {
                                            set.v1g(index_0);
                                          }
                                        }
                                        slot_0 = slot_0.c3(8);
                                      }
                                       while (inductionVariable_2 < bitCount_0);
                                    if (!(bitCount_0 === 8)) {
                                      break $l$block_0;
                                    }
                                  }
                                }
                                 while (!(i_0 === lastIndex_0));
                            }
                            tmp_2 = set.p();
                          } else {
                            // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                            tmp_2 = !(!(value == null) ? value : THROW_CCE()).x1w();
                          }
                          if (tmp_2) {
                            this_0.h1c(index);
                          }
                        }
                        slot = slot.c3(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_1;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            cleanUpDerivedStateObservations($this);
            break $l$block_2;
          }finally {
            Trace_instance.p1s(token_0);
          }
        }
      }
    }finally {
      if ($this.h1y_1.p()) {
        manager.e1z();
      }
    }
  }
  function tryImminentInvalidation($this, scope, instance) {
    return $this.f1z() && $this.o1y_1.a1s(scope, instance);
  }
  function invalidateChecked($this, scope, anchor, instance) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.z1x_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.l1y_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.b1y_1.g1z($this.m1y_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var delegate = tmp;
    if (delegate == null) {
      if (tryImminentInvalidation($this, scope, instance)) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      var observer_0 = observer($this);
      if (instance == null) {
        $this.j1y_1.h1z(scope, ScopeInvalidated_instance);
      } else {
        var tmp_1;
        if (observer_0 == null) {
          tmp_1 = !(!(instance == null) ? isInterface(instance, DerivedState) : false);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          $this.j1y_1.h1z(scope, ScopeInvalidated_instance);
        } else {
          var tmp2 = $this.j1y_1;
          var tmp$ret$5;
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf' call
            // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
            var value = tmp2.i1s_1.h2(scope);
            if (value != null) {
              if (value instanceof MutableScatterSet) {
                // Inline function 'androidx.collection.ScatterSet.forEach' call
                var this_0 = value instanceof MutableScatterSet ? value : THROW_CCE();
                // Inline function 'kotlin.contracts.contract' call
                var k = this_0.h1f_1;
                $l$block_0: {
                  // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                  // Inline function 'kotlin.contracts.contract' call
                  var m = this_0.g1f_1;
                  var lastIndex = m.length - 2 | 0;
                  var inductionVariable = 0;
                  if (inductionVariable <= lastIndex)
                    do {
                      var i = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      var slot = m[i];
                      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                      var this_1 = slot;
                      if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                        var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                        var inductionVariable_0 = 0;
                        if (inductionVariable_0 < bitCount)
                          do {
                            var j = inductionVariable_0;
                            inductionVariable_0 = inductionVariable_0 + 1 | 0;
                            // Inline function 'androidx.collection.isFull' call
                            if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                              var index = (i << 3) + j | 0;
                              // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                              var tmp_2 = k[index];
                              // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                              // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                              if (((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()) === ScopeInvalidated_instance) {
                                tmp$ret$5 = true;
                                break $l$block_1;
                              }
                            }
                            slot = slot.c3(8);
                          }
                           while (inductionVariable_0 < bitCount);
                        if (!(bitCount === 8)) {
                          break $l$block_0;
                        }
                      }
                    }
                     while (!(i === lastIndex));
                }
              } else {
                // Inline function 'androidx.compose.runtime.collection.ScopeMap.anyScopeOf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
                if ((!(value == null) ? value : THROW_CCE()) === ScopeInvalidated_instance) {
                  tmp$ret$5 = true;
                  break $l$block_1;
                }
              }
            }
            tmp$ret$5 = false;
          }
          if (!tmp$ret$5) {
            $this.j1y_1.a1z(scope, instance);
          }
        }
      }
    }
    var delegate_0 = delegate;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.w1x_1.i1z($this);
    return $this.f1z() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.j1y_1;
    $this.j1y_1 = new ScopeMap();
    return invalidations;
  }
  function observer($this) {
    var holder = $this.n1y_1;
    var tmp;
    if (holder.l1z_1) {
      tmp = holder.k1z_1;
    } else {
      var parentHolder = $this.w1x_1.j1z();
      var parentObserver = parentHolder == null ? null : parentHolder.k1z_1;
      if (!equals(parentObserver, holder.k1z_1)) {
        holder.k1z_1 = parentObserver;
      }
      tmp = parentObserver;
    }
    return tmp;
  }
  function RememberEventDispatcher(abandoning) {
    this.o1x_1 = abandoning;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p1x_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.q1x_1 = ArrayList_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.r1x_1 = ArrayList_init_$Create$();
    this.s1x_1 = null;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.t1x_1 = ArrayList_init_$Create$();
    this.u1x_1 = new MutableIntList();
    this.v1x_1 = new MutableIntList();
  }
  protoOf(RememberEventDispatcher).m1z = function (instance) {
    this.p1x_1.e(instance);
  };
  protoOf(RememberEventDispatcher).y1w = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).v1w = function (instance, endRelativeOrder, priority, endRelativeAfter) {
    var tmp0_elvis_lhs = this.s1x_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'androidx.compose.runtime.RememberEventDispatcher.releasing.<anonymous>' call
      this.s1x_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var releasing = tmp;
    releasing.a1h(instance);
    recordLeaving(this, instance, endRelativeOrder, priority, endRelativeAfter);
  };
  protoOf(RememberEventDispatcher).c1z = function () {
    processPendingLeaving(this, -2147483648);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.q1x_1.p()) {
      var tmp1 = 'Compose:onForgotten';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.c1s(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>' call
          var releasing = this.s1x_1;
          var inductionVariable = this.q1x_1.j() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.q1x_1.o(i);
              if (isInterface(instance, RememberObserver)) {
                this.o1x_1.v1(instance);
                instance.n1z();
              }
              if (isInterface(instance, ComposeNodeLifecycleCallback)) {
                if (!(releasing == null) && releasing.r(instance)) {
                  instance.m1i();
                } else {
                  instance.l1i();
                }
              }
            }
             while (0 <= inductionVariable);
          break $l$block;
        }finally {
          Trace_instance.p1s(token);
        }
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.p1x_1.p()) {
      var tmp3 = 'Compose:onRemembered';
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_instance.c1s(tmp3);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.p1x_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = this_0.j() - 1 | 0;
          if (inductionVariable_0 <= last)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = this_0.o(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.o1x_1.v1(item);
              item.o1z();
            }
             while (inductionVariable_0 <= last);
          break $l$block_0;
        }finally {
          Trace_instance.p1s(token_0);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).d1z = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.r1x_1.p()) {
      var tmp1 = 'Compose:sideeffects';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.c1s(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var this_0 = this.r1x_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = this_0.j() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = this_0.o(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.r1x_1.y1();
          break $l$block;
        }finally {
          Trace_instance.p1s(token);
        }
      }
    }
  };
  protoOf(RememberEventDispatcher).e1z = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.o1x_1.p()) {
      var tmp1 = 'Compose:abandons';
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_instance.c1s(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchAbandons.<anonymous>' call
          var iterator = this.o1x_1.g();
          while (iterator.h()) {
            var instance = iterator.i();
            iterator.z3();
            instance.p1z();
          }
          break $l$block;
        }finally {
          Trace_instance.p1s(token);
        }
      }
    }
  };
  function CompositionImpl(parent, applier, recomposeContext) {
    recomposeContext = recomposeContext === VOID ? null : recomposeContext;
    this.w1x_1 = parent;
    this.x1x_1 = applier;
    this.y1x_1 = new AtomicReference(null);
    this.z1x_1 = new Object();
    this.a1y_1 = (new MutableScatterSet()).e1h();
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SlotTable();
    // Inline function 'androidx.compose.runtime.CompositionImpl.slotTable.<anonymous>' call
    if (this.w1x_1.l1o()) {
      this_0.k1o();
    }
    if (this.w1x_1.l1l()) {
      this_0.j1o();
    }
    tmp.b1y_1 = this_0;
    this.c1y_1 = new ScopeMap();
    this.d1y_1 = new MutableScatterSet();
    this.e1y_1 = new MutableScatterSet();
    this.f1y_1 = new ScopeMap();
    this.g1y_1 = new ChangeList();
    this.h1y_1 = new ChangeList();
    this.i1y_1 = new ScopeMap();
    this.j1y_1 = new ScopeMap();
    this.k1y_1 = false;
    this.l1y_1 = null;
    this.m1y_1 = 0;
    this.n1y_1 = new CompositionObserverHolder();
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = new ComposerImpl(this.x1x_1, this.w1x_1, this.b1y_1, this.a1y_1, this.g1y_1, this.h1y_1, this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.w1x_1.q1z(this_1);
    tmp_0.o1y_1 = this_1;
    this.p1y_1 = recomposeContext;
    var tmp_1 = this;
    var tmp_2 = this.w1x_1;
    tmp_1.q1y_1 = tmp_2 instanceof Recomposer;
    this.r1y_1 = false;
    this.s1y_1 = ComposableSingletons$CompositionKt_getInstance().r1z_1;
  }
  protoOf(CompositionImpl).f1z = function () {
    return this.o1y_1.f1k_1;
  };
  protoOf(CompositionImpl).t1z = function () {
    return this.r1y_1;
  };
  protoOf(CompositionImpl).u1z = function (content) {
    composeInitial(this, content);
  };
  protoOf(CompositionImpl).v1z = function (content) {
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        this.z1x_1;
        // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>' call
        drainPendingModificationsForCompositionLocked(this);
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.composeContent.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (!(observer_0 == null)) {
            var tmp_2 = invalidations.w1z();
            observer_0.x1z(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          this.o1y_1.n1w(invalidations, content);
          var tmp_3;
          if (observer_0 == null) {
            tmp_3 = null;
          } else {
            observer_0.y1z(this);
            tmp_3 = Unit_instance;
          }
          tmp_1 = tmp_3;
        } catch ($p) {
          var tmp_4;
          if ($p instanceof Exception) {
            var e = $p;
            this.j1y_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_5;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_5 = !this.a1y_1.p();
        } else {
          tmp_5 = false;
        }
        if (tmp_5) {
          (new RememberEventDispatcher(this.a1y_1)).e1z();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.z1z();
        throw e_0;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).a20 = function (values) {
    $l$loop: while (true) {
      var old = this.y1x_1.zo();
      var tmp;
      if (old == null ? true : equals(old, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(old == null) ? isInterface(old, KtSet) : false) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp = [old, values];
        } else {
          if (!(old == null) ? isArray(old) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var message = 'corrupt pendingModifications: ' + toString(this.y1x_1);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      var new_0 = tmp;
      if (this.y1x_1.a12(old, new_0)) {
        if (old == null) {
          // Inline function 'androidx.compose.runtime.synchronized' call
          this.z1x_1;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordModificationsOf.<anonymous>' call
          drainPendingModificationsLocked(this);
        }
        break $l$loop;
      }
    }
  };
  protoOf(CompositionImpl).b20 = function (values) {
    // Inline function 'androidx.compose.runtime.collection.fastForEach' call
    var tmp;
    if (values instanceof ScatterSetWrapper) {
      var this_0 = values.y1y_1;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.h1f_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.g1f_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_0 = k[index];
                    // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
                    var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    if (this.c1y_1.z1y(value) || this.f1y_1.z1y(value))
                      return true;
                  }
                  slot = slot.c3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                tmp$ret$2 = Unit_instance;
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp = tmp$ret$2;
    } else {
      var _iterator__ex2g4s = values.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.compose.runtime.CompositionImpl.observesAnyOf.<anonymous>' call
        if (this.c1y_1.z1y(element) || this.f1y_1.z1y(element))
          return true;
      }
      tmp = Unit_instance;
    }
    return false;
  };
  protoOf(CompositionImpl).c20 = function (block) {
    return this.o1y_1.p1w(block);
  };
  protoOf(CompositionImpl).d20 = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.o1y_1.e1u();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>' call
        tmp0_safe_receiver.t1w(true);
        var alreadyRead = tmp0_safe_receiver.e20(value);
        if (!alreadyRead) {
          if (value instanceof StateObjectImpl) {
            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
            var tmp$ret$0 = _ReaderKind___init__impl__jqeebu(1);
            value.g20(tmp$ret$0);
          }
          this.c1y_1.a1z(value, tmp0_safe_receiver);
          if (isInterface(value, DerivedState)) {
            var record = value.h20();
            this.f1y_1.i20(value);
            // Inline function 'androidx.collection.ObjectIntMap.forEachKey' call
            var this_0 = record.j20();
            var k = this_0.u1c_1;
            $l$block: {
              // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
              var m = this_0.t1c_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_1 = slot;
                  if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ObjectIntMap.forEachKey.<anonymous>' call
                          var tmp = k[index];
                          // Inline function 'androidx.compose.runtime.CompositionImpl.recordReadOf.<anonymous>.<anonymous>' call
                          var dependency = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                          if (dependency instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$3 = _ReaderKind___init__impl__jqeebu(1);
                            dependency.g20(tmp$ret$3);
                          }
                          this.f1y_1.a1z(dependency, value);
                        }
                        slot = slot.c3(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp0_safe_receiver.l20(value, record.k20());
          }
        }
      }
    }
  };
  protoOf(CompositionImpl).m20 = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1x_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>' call
    invalidateScopeOfLocked(this, value);
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.forEachScopeOf' call
    var value_0 = this.f1y_1.i1s_1.h2(value);
    if (value_0 != null) {
      if (value_0 instanceof MutableScatterSet) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        var this_0 = value_0 instanceof MutableScatterSet ? value_0 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var k = this_0.h1f_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = this_0.g1f_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      invalidateScopeOfLocked(this, it);
                    }
                    slot = slot.c3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
      } else {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
        var it_0 = !(value_0 == null) ? value_0 : THROW_CCE();
        invalidateScopeOfLocked(this, it_0);
      }
    }
    return Unit_instance;
  };
  protoOf(CompositionImpl).n20 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1x_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var observer_0 = observer(this);
          if (observer_0 == null)
            null;
          else {
            var tmp_2 = invalidations.w1z();
            observer_0.x1z(this, isInterface(tmp_2, KtMap) ? tmp_2 : THROW_CCE());
          }
          // Inline function 'kotlin.also' call
          var this_0 = this.o1y_1.q1w(invalidations);
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!this_0) {
            drainPendingModificationsLocked(this);
          }
          if (observer_0 == null)
            null;
          else {
            observer_0.y1z(this);
          }
          tmp_1 = this_0;
        } catch ($p) {
          var tmp_3;
          if ($p instanceof Exception) {
            var e = $p;
            this.j1y_1 = invalidations;
            throw e;
          } else {
            throw $p;
          }
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp_0 = tmp_1;
      }finally {
        var tmp_4;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_4 = !this.a1y_1.p();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          (new RememberEventDispatcher(this.a1y_1)).e1z();
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_5;
      if ($p instanceof Exception) {
        var e_0 = $p;
        this.z1z();
        throw e_0;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(CompositionImpl).o20 = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          if (!equals(item.re_1.l1r_1, this)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        this.o1y_1.g1w(references);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.a1y_1.p();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.a1y_1)).e1z();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.z1z();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).p20 = function (state) {
    var manager = new RememberEventDispatcher(this.a1y_1);
    var slotTable = state.t1r_1;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.h1o();
    var normalClose = false;
    var tmp;
    try {
      removeCurrentGroup(writer, manager);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.m1o(normalClose);
    }
    manager.c1z();
  };
  protoOf(CompositionImpl).q20 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1x_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChanges.<anonymous>' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        applyChangesInLocked(this, this.g1y_1);
        drainPendingModificationsLocked(this);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.a1y_1.p();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.a1y_1)).e1z();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.z1z();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).r20 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1x_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.applyLateChanges.<anonymous>' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        if (this.h1y_1.l1f()) {
          applyChangesInLocked(this, this.h1y_1);
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.a1y_1.p();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.a1y_1)).e1z();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.z1z();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).s20 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1x_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.changesApplied.<anonymous>' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    try {
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp;
      try {
        this.o1y_1.h1u();
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!this.a1y_1.p()) {
          (new RememberEventDispatcher(this.a1y_1)).e1z();
        }
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp = Unit_instance;
      }finally {
        var tmp_0;
        if (!success) {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_0 = !this.a1y_1.p();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          (new RememberEventDispatcher(this.a1y_1)).e1z();
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        this.z1z();
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(CompositionImpl).z1z = function () {
    this.y1x_1.g17(null);
    this.g1y_1.y1();
    this.h1y_1.y1();
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.a1y_1.p()) {
      (new RememberEventDispatcher(this.a1y_1)).e1z();
    }
  };
  protoOf(CompositionImpl).t20 = function () {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.z1x_1;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.b1y_1.u1k_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.u20();
      }
    }
  };
  protoOf(CompositionImpl).b1s = function (to, groupIndex, block) {
    var tmp;
    if (!(to == null) && !equals(to, this) && groupIndex >= 0) {
      var tmp_0 = this;
      tmp_0.l1y_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.m1y_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.l1y_1 = null;
        this.m1y_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  protoOf(CompositionImpl).v20 = function (scope, instance) {
    if (scope.w20()) {
      scope.e1w(true);
    }
    var anchor = scope.t1i_1;
    if (anchor == null || !anchor.x1w())
      return InvalidationResult_IGNORED_getInstance();
    if (!this.b1y_1.x20(anchor)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.z1x_1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidate.<anonymous>' call
      var delegate = this.l1y_1;
      if ((delegate == null ? null : tryImminentInvalidation(delegate, scope, instance)) === true)
        return InvalidationResult_IMMINENT_getInstance();
      return InvalidationResult_IGNORED_getInstance();
    }
    if (!scope.y20())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  protoOf(CompositionImpl).z20 = function (scope) {
    this.k1y_1 = true;
  };
  protoOf(CompositionImpl).a21 = function (instance, scope) {
    this.c1y_1.w1y(instance, scope);
  };
  protoOf(CompositionImpl).b21 = function (state) {
    if (!this.c1y_1.z1y(state)) {
      this.f1y_1.i20(state);
    }
  };
  function CompositionObserverHolder(observer, root) {
    observer = observer === VOID ? null : observer;
    root = root === VOID ? false : root;
    this.k1z_1 = observer;
    this.l1z_1 = root;
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:623)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.q1t(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 3) === 2) || !$composer_0.s1t()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:757)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.i1o();
    }
    return Unit_instance;
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.r1z_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.s1z_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function ScopeInvalidated() {
  }
  var ScopeInvalidated_instance;
  function ScopeInvalidated_getInstance() {
    return ScopeInvalidated_instance;
  }
  function swap(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.o(a);
    _this__u8e3s4.z1(a, _this__u8e3s4.o(b));
    _this__u8e3s4.z1(b, item);
  }
  function swap_0(_this__u8e3s4, a, b) {
    _init_properties_Composition_kt__t5pjw8();
    var item = _this__u8e3s4.o(a);
    _this__u8e3s4.t1b(a, _this__u8e3s4.o(b));
    _this__u8e3s4.t1b(b, item);
  }
  function ControlledComposition(applier, parent) {
    _init_properties_Composition_kt__t5pjw8();
    return new CompositionImpl(parent, applier);
  }
  function CompositionImplServiceKey$1() {
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function _init_properties_Composition_kt__t5pjw8() {
    if (!properties_initialized_Composition_kt_u7hvq2) {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
      CompositionImplServiceKey = new CompositionImplServiceKey$1();
    }
  }
  function get_EmptyPersistentCompositionLocalMap() {
    _init_properties_CompositionContext_kt__4g1p1h();
    return EmptyPersistentCompositionLocalMap;
  }
  var EmptyPersistentCompositionLocalMap;
  function CompositionContext() {
  }
  protoOf(CompositionContext).j1z = function () {
    return null;
  };
  protoOf(CompositionContext).m1l = function (table) {
  };
  protoOf(CompositionContext).q1z = function (composer) {
  };
  protoOf(CompositionContext).f1l = function () {
    return get_EmptyPersistentCompositionLocalMap();
  };
  protoOf(CompositionContext).e1l = function () {
  };
  protoOf(CompositionContext).o1l = function () {
  };
  protoOf(CompositionContext).s1r = function (reference) {
    return null;
  };
  var properties_initialized_CompositionContext_kt_mk393b;
  function _init_properties_CompositionContext_kt__4g1p1h() {
    if (!properties_initialized_CompositionContext_kt_mk393b) {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyPersistentCompositionLocalMap = persistentCompositionLocalHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.r1v_1 = new LazyValueHolder(defaultFactory);
  }
  protoOf(CompositionLocal).d21 = function () {
    return this.r1v_1;
  };
  function valueHolderOf($this, value) {
    var tmp;
    if (value.o1v_1) {
      var tmp1_elvis_lhs = value.m1v_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp_1 = value.e2();
        var tmp0_elvis_lhs = value.l1v_1;
        tmp_0 = mutableStateOf(tmp_1, tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs);
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = new DynamicValueHolder(tmp_0);
    } else if (!(value.n1v_1 == null)) {
      tmp = new ComputedValueHolder(value.n1v_1);
    } else if (!(value.m1v_1 == null)) {
      tmp = new DynamicValueHolder(value.m1v_1);
    } else {
      tmp = new StaticValueHolder(value.f1x());
    }
    return tmp;
  }
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  protoOf(ProvidableCompositionLocal).g21 = function (value) {
    return this.f21(value);
  };
  protoOf(ProvidableCompositionLocal).s1v = function (value, previous) {
    var tmp;
    if (previous instanceof DynamicValueHolder) {
      var tmp_0;
      if (value.o1v_1) {
        previous.j21_1.o11(value.f1x());
        tmp_0 = previous;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    } else {
      if (previous instanceof StaticValueHolder) {
        tmp = value.g1x() && equals(value.f1x(), previous.i21_1) ? previous : null;
      } else {
        if (previous instanceof ComputedValueHolder) {
          tmp = value.n1v_1 === previous.h21_1 ? previous : null;
        } else {
          tmp = null;
        }
      }
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? valueHolderOf(this, value) : tmp1_elvis_lhs;
  };
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  protoOf(StaticProvidableCompositionLocal).f21 = function (value) {
    return new ProvidedValue(this, value, value === null, null, null, null, false);
  };
  function compositionLocalOf(policy, defaultFactory) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function CompositionLocalProvider(value, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.a1w(-1350970552);
    sourceInformation($composer_0, 'C(CompositionLocalProvider)P(1)400@17486L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1350970552, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider (CompositionLocal.kt:398)');
    }
    $composer_0.h1v(value);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.v1v();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(CompositionLocalProvider$lambda(value, content, $changed));
    }
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.n21_1 = policy;
  }
  protoOf(DynamicProvidableCompositionLocal).f21 = function (value) {
    return new ProvidedValue(this, value, value === null, this.n21_1, null, null, true);
  };
  function CompositionLocalProvider$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      CompositionLocalProvider($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PersistentCompositionLocalMap() {
  }
  function read(_this__u8e3s4, key) {
    // Inline function 'kotlin.collections.getOrElse' call
    var key_0 = key instanceof CompositionLocal ? key : THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.h2(key_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.read.<anonymous>' call
      tmp = key.d21();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = tmp.o21(_this__u8e3s4);
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  }
  function contains_0(_this__u8e3s4, key) {
    return _this__u8e3s4.f2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    _init_properties_DerivedState_kt__eqt0x8();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  function derivedStateObservers_0() {
    _init_properties_DerivedState_kt__eqt0x8();
    var tmp0_elvis_lhs = get_derivedStateObservers().zo();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = Array(0);
      // Inline function 'kotlin.also' call
      var this_0 = new MutableVector(tmp$ret$0, 0);
      // Inline function 'androidx.compose.runtime.derivedStateObservers.<anonymous>' call
      get_derivedStateObservers().s21(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function _init_properties_DerivedState_kt__eqt0x8() {
    if (!properties_initialized_DerivedState_kt_scch8q) {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    _init_properties_Effects_kt__be5lps();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function DisposableEffectScope() {
  }
  function LaunchedEffect(key1, block, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1179185413, 'C(LaunchedEffect)P(1)338@14267L58:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1179185413, $changed, -1, 'androidx.compose.runtime.LaunchedEffect (Effects.kt:336)');
    }
    var applyContext = $composer_0.v1t();
    sourceInformationMarkerStart($composer_0, 2064962644, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.j1l(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (invalid || it === Companion_getInstance().r1o_1) {
      // Inline function 'androidx.compose.runtime.LaunchedEffect.<anonymous>' call
      var value = new LaunchedEffectImpl(applyContext, block);
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function LaunchedEffectImpl(parentCoroutineContext, task) {
    this.t21_1 = task;
    this.u21_1 = CoroutineScope(parentCoroutineContext);
    this.v21_1 = null;
  }
  protoOf(LaunchedEffectImpl).o1z = function () {
    var tmp0_safe_receiver = this.v21_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      cancel(tmp0_safe_receiver, 'Old job was still running!');
    }
    this.v21_1 = launch(this.u21_1, VOID, VOID, this.t21_1);
  };
  protoOf(LaunchedEffectImpl).n1z = function () {
    var tmp0_safe_receiver = this.v21_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.uj(new LeftCompositionCancellationException());
    }
    this.v21_1 = null;
  };
  protoOf(LaunchedEffectImpl).p1z = function () {
    var tmp0_safe_receiver = this.v21_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.uj(new LeftCompositionCancellationException());
    }
    this.v21_1 = null;
  };
  function LeftCompositionCancellationException() {
    PlatformOptimizedCancellationException.call(this, 'The coroutine scope left the composition');
    captureStack(this, LeftCompositionCancellationException);
  }
  function DisposableEffect(key1, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1371986847, 'C(DisposableEffect)P(1)155@6197L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1371986847, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:154)');
    }
    sourceInformationMarkerStart($composer_0, 1176203671, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.j1l(key1);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (invalid || it === Companion_getInstance().r1o_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffectImpl(effect) {
    this.w21_1 = effect;
    this.x21_1 = null;
  }
  protoOf(DisposableEffectImpl).o1z = function () {
    this.x21_1 = this.w21_1(get_InternalDisposableEffectScope());
  };
  protoOf(DisposableEffectImpl).n1z = function () {
    var tmp0_safe_receiver = this.x21_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.om();
    }
    this.x21_1 = null;
  };
  protoOf(DisposableEffectImpl).p1z = function () {
  };
  function DisposableEffect_0(keys, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1307627122, 'C(DisposableEffect)P(1)276@11903L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1307627122, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:275)');
    }
    // Inline function 'androidx.compose.runtime.remember' call
    var keys_0 = keys.slice();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, -568225417, 'CC(remember)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var inductionVariable = 0;
    var last = keys_0.length;
    while (inductionVariable < last) {
      var key = keys_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_1.j1l(key));
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = invalid;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.i1v();
    var tmp;
    if (invalid_0 || it === Companion_getInstance().r1o_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_1.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function DisposableEffect_1(key1, key2, effect, $composer, $changed) {
    _init_properties_Effects_kt__be5lps();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1429097729, 'C(DisposableEffect)P(1,2)195@8083L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(1429097729, $changed, -1, 'androidx.compose.runtime.DisposableEffect (Effects.kt:194)');
    }
    sourceInformationMarkerStart($composer_0, 1176264029, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.j1l(key1) | $composer_0.j1l(key2));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (invalid || it === Companion_getInstance().r1o_1) {
      // Inline function 'androidx.compose.runtime.DisposableEffect.<anonymous>' call
      var value = new DisposableEffectImpl(effect);
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    (tmp_0 == null ? true : !(tmp_0 == null)) || THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  var properties_initialized_Effects_kt_cj8kem;
  function _init_properties_Effects_kt__be5lps() {
    if (!properties_initialized_Effects_kt_cj8kem) {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.m2_1;
    } else {
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.y21_1 = left;
    this.z21_1 = right;
  }
  protoOf(JoinedKey).hashCode = function () {
    return imul(hashCodeOf(this, this.y21_1), 31) + hashCodeOf(this, this.z21_1) | 0;
  };
  protoOf(JoinedKey).toString = function () {
    return 'JoinedKey(left=' + toString_0(this.y21_1) + ', right=' + toString_0(this.z21_1) + ')';
  };
  protoOf(JoinedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.y21_1, tmp0_other_with_cast.y21_1))
      return false;
    if (!equals(this.z21_1, tmp0_other_with_cast.z21_1))
      return false;
    return true;
  };
  function Key() {
  }
  var Key_instance_0;
  function Key_getInstance() {
    return Key_instance_0;
  }
  function MonotonicFrameClock() {
  }
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.l9(Key_instance_0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function OpaqueKey(key) {
    this.a22_1 = key;
  }
  protoOf(OpaqueKey).toString = function () {
    return 'OpaqueKey(key=' + this.a22_1 + ')';
  };
  protoOf(OpaqueKey).hashCode = function () {
    return getStringHashCode(this.a22_1);
  };
  protoOf(OpaqueKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.a22_1 === tmp0_other_with_cast.a22_1))
      return false;
    return true;
  };
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  var callbackLock;
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.r1i_1 = $this.r1i_1 | 32;
    } else {
      $this.r1i_1 = $this.r1i_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.r1i_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.r1i_1 = $this.r1i_1 | 16;
    } else {
      $this.r1i_1 = $this.r1i_1 & -17;
    }
  }
  function checkDerivedStateChanged(_this__u8e3s4, $this, dependencies) {
    if (!isInterface(_this__u8e3s4, DerivedState))
      THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.p21();
    var policy = tmp0_elvis_lhs == null ? structuralEqualityPolicy() : tmp0_elvis_lhs;
    return !policy.b22(_this__u8e3s4.h20().k20(), dependencies.h2(_this__u8e3s4));
  }
  function Companion_1() {
  }
  protoOf(Companion_1).c22 = function (slots, anchors, newOwner) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.p()) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = anchors.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = anchors.o(index);
          // Inline function 'androidx.compose.runtime.Companion.adoptAnchoredScopes.<anonymous>' call
          var tmp = slots.d22(item, 0);
          var recomposeScope = tmp instanceof RecomposeScopeImpl ? tmp : null;
          if (recomposeScope == null)
            null;
          else {
            recomposeScope.e22(newOwner);
          }
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Companion_1).f22 = function (slots, anchors) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors.p()) {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.Companion.hasAnchoredRecomposeScopes.<anonymous>' call
            var tmp_0;
            if (slots.x20(item)) {
              var tmp_1 = slots.g22(slots.q1r(item), 0);
              tmp_0 = tmp_1 instanceof RecomposeScopeImpl;
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$2 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $instances) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.w1i_1 === $token && $instances.equals(this$0.x1i_1)) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var this_0 = $instances;
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
          var m = this_0.t1c_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < bitCount)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.collection.isFull' call
                    if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.MutableObjectIntMap.removeIf.<anonymous>' call
                      var tmp_1 = this_0.u1c_1[index];
                      var tmp1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
                      var shouldRemove = !(this_0.v1c_1[index] === $token);
                      if (shouldRemove) {
                        composition.a21(tmp1, this$0);
                        if (isInterface(tmp1, DerivedState)) {
                          composition.b21(tmp1);
                          var tmp0_safe_receiver = this$0.y1i_1;
                          if (tmp0_safe_receiver == null)
                            null;
                          else
                            tmp0_safe_receiver.b5(tmp1);
                        }
                      }
                      if (shouldRemove) {
                        this_0.f1d(index);
                      }
                    }
                    slot = slot.c3(8);
                  }
                   while (inductionVariable_0 < bitCount);
                if (!(bitCount === 8)) {
                  tmp$ret$3 = Unit_instance;
                  break $l$block;
                }
              }
            }
             while (!(i === lastIndex));
        }
        tmp = tmp$ret$3;
      }
      return Unit_instance;
    };
  }
  function RecomposeScopeImpl(owner) {
    this.r1i_1 = 0;
    this.s1i_1 = owner;
    this.t1i_1 = null;
    this.u1i_1 = null;
    this.v1i_1 = null;
    this.w1i_1 = 0;
    this.x1i_1 = null;
    this.y1i_1 = null;
  }
  protoOf(RecomposeScopeImpl).x1w = function () {
    var tmp;
    if (!(this.s1i_1 == null)) {
      var tmp0_safe_receiver = this.t1i_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1w();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(RecomposeScopeImpl).y20 = function () {
    return !(this.u1i_1 == null);
  };
  protoOf(RecomposeScopeImpl).t1w = function (value) {
    if (value) {
      this.r1i_1 = this.r1i_1 | 1;
    } else {
      this.r1i_1 = this.r1i_1 & -2;
    }
  };
  protoOf(RecomposeScopeImpl).w1p = function () {
    return !((this.r1i_1 & 1) === 0);
  };
  protoOf(RecomposeScopeImpl).f1u = function (value) {
    if (value) {
      this.r1i_1 = this.r1i_1 | 2;
    } else {
      this.r1i_1 = this.r1i_1 & -3;
    }
  };
  protoOf(RecomposeScopeImpl).w20 = function () {
    return !((this.r1i_1 & 2) === 0);
  };
  protoOf(RecomposeScopeImpl).e1w = function (value) {
    if (value) {
      this.r1i_1 = this.r1i_1 | 4;
    } else {
      this.r1i_1 = this.r1i_1 & -5;
    }
  };
  protoOf(RecomposeScopeImpl).g1u = function () {
    return !((this.r1i_1 & 4) === 0);
  };
  protoOf(RecomposeScopeImpl).c1r = function (value) {
    if (value) {
      this.r1i_1 = this.r1i_1 | 8;
    } else {
      this.r1i_1 = this.r1i_1 & -9;
    }
  };
  protoOf(RecomposeScopeImpl).j1u = function () {
    return !((this.r1i_1 & 8) === 0);
  };
  protoOf(RecomposeScopeImpl).s1q = function (composer) {
    var block = this.u1i_1;
    var observer = this.v1i_1;
    if (!(observer == null) && !(block == null)) {
      observer.h22(this);
      try {
        block(composer, 1);
      }finally {
        observer.i22(this);
      }
      return Unit_instance;
    }
    if ((block == null ? null : block(composer, 1)) == null) {
      // Inline function 'kotlin.error' call
      var message = 'Invalid restart scope';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  protoOf(RecomposeScopeImpl).x1y = function (value) {
    var tmp0_safe_receiver = this.s1i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v20(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  protoOf(RecomposeScopeImpl).z1w = function () {
    var tmp0_safe_receiver = this.s1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.z20(this);
    }
    this.s1i_1 = null;
    this.x1i_1 = null;
    this.y1i_1 = null;
    var tmp1_safe_receiver = this.v1i_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.j22(this);
    }
  };
  protoOf(RecomposeScopeImpl).e22 = function (owner) {
    this.s1i_1 = owner;
  };
  protoOf(RecomposeScopeImpl).u20 = function () {
    var tmp0_safe_receiver = this.s1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.v20(this, null);
  };
  protoOf(RecomposeScopeImpl).l21 = function (block) {
    this.u1i_1 = block;
  };
  protoOf(RecomposeScopeImpl).b1r = function (value) {
    if (value) {
      this.r1i_1 = this.r1i_1 | 64;
    } else {
      this.r1i_1 = this.r1i_1 & -65;
    }
  };
  protoOf(RecomposeScopeImpl).a1r = function () {
    return !((this.r1i_1 & 64) === 0);
  };
  protoOf(RecomposeScopeImpl).f1w = function () {
    return !((this.r1i_1 & 16) === 0);
  };
  protoOf(RecomposeScopeImpl).d1r = function (token) {
    this.w1i_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  protoOf(RecomposeScopeImpl).z1v = function () {
    _set_skipped__p8q2c5(this, true);
  };
  protoOf(RecomposeScopeImpl).e20 = function (instance) {
    if (_get_rereading__g2iruw(this))
      return false;
    var tmp0_elvis_lhs = this.x1i_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableObjectIntMap();
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.x1i_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedInstances = tmp;
    var token = trackedInstances.e1d(instance, this.w1i_1, -1);
    if (token === this.w1i_1) {
      return true;
    }
    return false;
  };
  protoOf(RecomposeScopeImpl).l20 = function (instance, value) {
    var tmp0_elvis_lhs = this.y1i_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableScatterMap();
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordDerivedStateValue.<anonymous>' call
      this.y1i_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    trackedDependencies.z1d(instance, value);
  };
  protoOf(RecomposeScopeImpl).v1y = function () {
    return !(this.y1i_1 == null);
  };
  protoOf(RecomposeScopeImpl).z1i = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.y1i_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (isInterface(instances, DerivedState)) {
      tmp_0 = checkDerivedStateChanged(instances, this, trackedDependencies);
    } else {
      if (instances instanceof ScatterSet) {
        var tmp_1;
        if (instances.l1f()) {
          var tmp$ret$3;
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.any' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.collection.ScatterSet.forEach' call
            // Inline function 'kotlin.contracts.contract' call
            var k = instances.h1f_1;
            $l$block_0: {
              // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
              // Inline function 'kotlin.contracts.contract' call
              var m = instances.g1f_1;
              var lastIndex = m.length - 2 | 0;
              var inductionVariable = 0;
              if (inductionVariable <= lastIndex)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var slot = m[i];
                  // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                  var this_0 = slot;
                  if (!this_0.e3(this_0.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                    var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                    var inductionVariable_0 = 0;
                    if (inductionVariable_0 < bitCount)
                      do {
                        var j = inductionVariable_0;
                        inductionVariable_0 = inductionVariable_0 + 1 | 0;
                        // Inline function 'androidx.collection.isFull' call
                        if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                          var index = (i << 3) + j | 0;
                          // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                          var tmp_2 = k[index];
                          // Inline function 'androidx.collection.ScatterSet.any.<anonymous>' call
                          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
                          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                          var tmp_3;
                          if (!(!(it == null) ? isInterface(it, DerivedState) : false)) {
                            tmp_3 = true;
                          } else {
                            tmp_3 = checkDerivedStateChanged(it, this, trackedDependencies);
                          }
                          if (tmp_3) {
                            tmp$ret$3 = true;
                            break $l$block;
                          }
                        }
                        slot = slot.c3(8);
                      }
                       while (inductionVariable_0 < bitCount);
                    if (!(bitCount === 8)) {
                      break $l$block_0;
                    }
                  }
                }
                 while (!(i === lastIndex));
            }
            tmp$ret$3 = false;
          }
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = true;
      }
    }
    return tmp_0;
  };
  protoOf(RecomposeScopeImpl).r1q = function () {
    var tmp0_safe_receiver = this.s1i_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.x1i_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>' call
        _set_rereading__pnqtpo(this, true);
        try {
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver_0.u1c_1;
          var v = tmp0_safe_receiver_0.v1c_1;
          $l$block: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver_0.t1c_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.e3(this_0.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        var tmp_0 = k[index];
                        var tmp1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
                        v[index];
                        tmp0_safe_receiver.d20(tmp1);
                      }
                      slot = slot.c3(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block;
                  }
                }
              }
               while (!(i === lastIndex));
          }
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp = Unit_instance;
      }
    }
  };
  protoOf(RecomposeScopeImpl).c1w = function (token) {
    var tmp0_safe_receiver = this.x1i_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.f1w()) {
        var tmp$ret$3;
        $l$block: {
          // Inline function 'androidx.collection.ObjectIntMap.any' call
          // Inline function 'androidx.collection.ObjectIntMap.forEach' call
          var k = tmp0_safe_receiver.u1c_1;
          var v = tmp0_safe_receiver.v1c_1;
          $l$block_0: {
            // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
            var m = tmp0_safe_receiver.t1c_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_0 = slot;
                if (!this_0.e3(this_0.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                        var tmp_2 = k[index];
                        (tmp_2 == null ? true : !(tmp_2 == null)) || THROW_CCE();
                        // Inline function 'androidx.collection.ObjectIntMap.any.<anonymous>' call
                        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
                        if (!(v[index] === token)) {
                          tmp$ret$3 = true;
                          break $l$block;
                        }
                      }
                      slot = slot.c3(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp$ret$3 = false;
        }
        tmp_1 = tmp$ret$3;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function RecomposeScopeOwner() {
  }
  function updateChangedFlags(flags) {
    _init_properties_RecomposeScopeImpl_kt__t15emj();
    var lowBits = flags & 306783378;
    var highBits = flags & 613566756;
    return flags & -920350135 | (lowBits | highBits >> 1) | lowBits << 1 & highBits;
  }
  var properties_initialized_RecomposeScopeImpl_kt_pxgdx3;
  function _init_properties_RecomposeScopeImpl_kt__t15emj() {
    if (!properties_initialized_RecomposeScopeImpl_kt_pxgdx3) {
      properties_initialized_RecomposeScopeImpl_kt_pxgdx3 = true;
      callbackLock = new Object();
    }
  }
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_instance;
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.k22_1.e2();
      var new_0 = old.e(info);
      if (old === new_0 || $this.k22_1.p11(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.k22_1.e2();
      var new_0 = old.v1(info);
      if (old === new_0 || $this.k22_1.p11(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(this$0, toRecompose, toInsert, toApply, toLateApply, toComplete, modifiedValues, alreadyComposed) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>' call
    toRecompose.y1();
    toInsert.y1();
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = toApply.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = toApply.o(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
        item.z1z();
        recordFailedCompositionLocked(this$0, item);
      }
       while (inductionVariable <= last);
    toApply.y1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = toLateApply.h1f_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = toLateApply.g1f_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= lastIndex)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.e3(this_0.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < bitCount)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index_0 = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index_0];
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  it.z1z();
                  recordFailedCompositionLocked(this$0, it);
                }
                slot = slot.c3(8);
              }
               while (inductionVariable_1 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    toLateApply.y1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_0 = toComplete.h1f_1;
    $l$block_0: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_0 = toComplete.g1f_1;
      var lastIndex_0 = m_0.length - 2 | 0;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 <= lastIndex_0)
        do {
          var i_0 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var slot_0 = m_0[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot_0;
          if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
            var inductionVariable_3 = 0;
            if (inductionVariable_3 < bitCount_0)
              do {
                var j_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_0.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index_1 = (i_0 << 3) + j_0 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp_0 = k_0[index_1];
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).s20();
                }
                slot_0 = slot_0.c3(8);
              }
               while (inductionVariable_3 < bitCount_0);
            if (!(bitCount_0 === 8)) {
              break $l$block_0;
            }
          }
        }
         while (!(i_0 === lastIndex_0));
    }
    toComplete.y1();
    modifiedValues.y1();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k_1 = alreadyComposed.h1f_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m_1 = alreadyComposed.g1f_1;
      var lastIndex_1 = m_1.length - 2 | 0;
      var inductionVariable_4 = 0;
      if (inductionVariable_4 <= lastIndex_1)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var slot_1 = m_1[i_1];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_2 = slot_1;
          if (!this_2.e3(this_2.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount_1 = 8 - (~(i_1 - lastIndex_1 | 0) >>> 31 | 0) | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < bitCount_1)
              do {
                var j_1 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot_1.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index_2 = (i_1 << 3) + j_1 | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp_1 = k_1[index_2];
                  // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.clearRecompositionState.<anonymous>.<anonymous>' call
                  var it_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                  it_0.z1z();
                  recordFailedCompositionLocked(this$0, it_0);
                }
                slot_1 = slot_1.c3(8);
              }
               while (inductionVariable_5 < bitCount_1);
            if (!(bitCount_1 === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i_1 === lastIndex_1));
    }
    alreadyComposed.y1();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.y1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var this_0 = this$0.w22_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.o(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.e(item);
      }
       while (inductionVariable <= last);
    this$0.w22_1.y1();
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $modifiedValues, $alreadyComposed, $toInsert, $toApply, $modifiedValuesSet, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (_get_hasBroadcastFrameClockAwaiters__y6inql(this$0)) {
        var tmp0 = 'Recomposer:animation';
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_instance.c1s(tmp0);
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>' call
            this$0.n22_1.i1i(frameTime);
            Companion_instance_12.l23();
            break $l$block;
          }finally {
            Trace_instance.p1s(token);
          }
        }
        tmp = Unit_instance;
      }
      var tmp1 = 'Recomposer:recompose';
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_instance.c1s(tmp1);
        try {
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>' call
          recordComposerModifications(this$0);
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.o22_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.MutableVector.forEach' call
          var this_0 = this$0.u22_1;
          // Inline function 'kotlin.contracts.contract' call
          var size = this_0.m1s_1;
          if (size > 0) {
            var i = 0;
            var tmp_0 = this_0.k1s_1;
            var content = isArray(tmp_0) ? tmp_0 : THROW_CCE();
            do {
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var it = content[i];
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.e(it);
              i = i + 1 | 0;
            }
             while (i < size);
          }
          this$0.u22_1.y1();
          $modifiedValues.y1();
          $alreadyComposed.y1();
          $l$loop: while (true) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!$toRecompose.p()) {
              tmp_1 = true;
            } else {
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp_1 = !$toInsert.p();
            }
            if (!tmp_1) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_1 = $toRecompose;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable = 0;
              var last = this_1.j() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_1.o(index);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var tmp0_safe_receiver = performRecompose(this$0, item, $modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    // Inline function 'kotlin.let' call
                    // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toApply.e(tmp0_safe_receiver);
                  }
                  $alreadyComposed.e(item);
                }
                 while (inductionVariable <= last);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e = $p;
                processCompositionError$default(this$0, e, VOID, true);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.y1();
            }
            if ($modifiedValues.l1f() || this$0.u22_1.l1f()) {
              // Inline function 'androidx.compose.runtime.synchronized' call
              this$0.o22_1;
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_2 = _get_knownCompositions__y8veaj(this$0);
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = this_2.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_2.o(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!$alreadyComposed.r(item_0) && item_0.b20($modifiedValuesSet)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.e(item_0);
                  }
                }
                 while (inductionVariable_0 <= last_0);
              // Inline function 'androidx.compose.runtime.collection.MutableVector.removeIf' call
              var this_3 = this$0.u22_1;
              var gap = 0;
              var size_0 = this_3.m1s_1;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < size_0)
                $l$loop_0: do {
                  var i_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var tmp_2 = this_3.k1s_1[i_0];
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  var value = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
                  var tmp_3;
                  if (!$alreadyComposed.r(value) && !$toRecompose.r(value)) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.e(value);
                    tmp_3 = true;
                  } else {
                    tmp_3 = false;
                  }
                  if (tmp_3) {
                    gap = gap + 1 | 0;
                    continue $l$loop_0;
                  }
                  if (gap > 0) {
                    this_3.k1s_1[i_0 - gap | 0] = this_3.k1s_1[i_0];
                  }
                }
                 while (inductionVariable_1 < size_0);
              fill_0(this_3.k1s_1, null, size_0 - gap | 0, size_0);
              this_3.m23(size_0 - gap | 0);
            }
            if ($toRecompose.p()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_1: while (true) {
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  if (!!$toInsert.p()) {
                    break $l$loop_1;
                  }
                  $toLateApply.b1h(performInsertValues(this$0, $toInsert, $modifiedValues));
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  var e_0 = $p;
                  processCompositionError$default(this$0, e_0, VOID, true);
                  invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                  return Unit_instance;
                } else {
                  throw $p;
                }
              }
            }
          }
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$toApply.p()) {
            var tmp0_this = this$0;
            tmp0_this.m22_1 = tmp0_this.m22_1.x2();
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_4 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_1 = this_4.j() - 1 | 0;
              if (inductionVariable_2 <= last_1)
                do {
                  var index_1 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_1 = this_4.o(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  $toComplete.e(item_1);
                }
                 while (inductionVariable_2 <= last_1);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              var this_5 = $toApply;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_3 = 0;
              var last_2 = this_5.j() - 1 | 0;
              if (inductionVariable_3 <= last_2)
                do {
                  var index_2 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  var item_2 = this_5.o(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.q20();
                }
                 while (inductionVariable_3 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_1 = $p;
                processCompositionError$default(this$0, e_1);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.y1();
            }
          }
          if ($toLateApply.l1f()) {
            try {
              $toComplete.d1h($toLateApply);
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_6 = $toLateApply;
              // Inline function 'kotlin.contracts.contract' call
              var k = this_6.h1f_1;
              $l$block_0: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m = this_6.g1f_1;
                var lastIndex = m.length - 2 | 0;
                var inductionVariable_4 = 0;
                if (inductionVariable_4 <= lastIndex)
                  do {
                    var i_1 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var slot = m[i_1];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_7 = slot;
                    if (!this_7.e3(this_7.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount = 8 - (~(i_1 - lastIndex | 0) >>> 31 | 0) | 0;
                      var inductionVariable_5 = 0;
                      if (inductionVariable_5 < bitCount)
                        do {
                          var j = inductionVariable_5;
                          inductionVariable_5 = inductionVariable_5 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                            var index_3 = (i_1 << 3) + j | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            var tmp_4 = k[index_3];
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            ((tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE()).r20();
                          }
                          slot = slot.c3(8);
                        }
                         while (inductionVariable_5 < bitCount);
                      if (!(bitCount === 8)) {
                        break $l$block_0;
                      }
                    }
                  }
                   while (!(i_1 === lastIndex));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_2 = $p;
                processCompositionError$default(this$0, e_2);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.y1();
            }
          }
          if ($toComplete.l1f()) {
            try {
              // Inline function 'androidx.collection.ScatterSet.forEach' call
              var this_8 = $toComplete;
              // Inline function 'kotlin.contracts.contract' call
              var k_0 = this_8.h1f_1;
              $l$block_1: {
                // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
                // Inline function 'kotlin.contracts.contract' call
                var m_0 = this_8.g1f_1;
                var lastIndex_0 = m_0.length - 2 | 0;
                var inductionVariable_6 = 0;
                if (inductionVariable_6 <= lastIndex_0)
                  do {
                    var i_2 = inductionVariable_6;
                    inductionVariable_6 = inductionVariable_6 + 1 | 0;
                    var slot_0 = m_0[i_2];
                    // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                    var this_9 = slot_0;
                    if (!this_9.e3(this_9.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                      var bitCount_0 = 8 - (~(i_2 - lastIndex_0 | 0) >>> 31 | 0) | 0;
                      var inductionVariable_7 = 0;
                      if (inductionVariable_7 < bitCount_0)
                        do {
                          var j_0 = inductionVariable_7;
                          inductionVariable_7 = inductionVariable_7 + 1 | 0;
                          // Inline function 'androidx.collection.isFull' call
                          if (slot_0.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                            var index_4 = (i_2 << 3) + j_0 | 0;
                            // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                            var tmp_5 = k_0[index_4];
                            // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                            ((tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE()).s20();
                          }
                          slot_0 = slot_0.c3(8);
                        }
                         while (inductionVariable_7 < bitCount_0);
                      if (!(bitCount_0 === 8)) {
                        break $l$block_1;
                      }
                    }
                  }
                   while (!(i_2 === lastIndex_0));
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                var e_3 = $p;
                processCompositionError$default(this$0, e_3);
                invoke$clearRecompositionState(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete, $modifiedValues, $alreadyComposed);
                return Unit_instance;
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.y1();
            }
          }
          // Inline function 'androidx.compose.runtime.synchronized' call
          this$0.o22_1;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          deriveStateLocked(this$0);
          Companion_instance_12.n23();
          $alreadyComposed.y1();
          $modifiedValues.y1();
          this$0.a23_1 = null;
          break $l$block_2;
        }finally {
          Trace_instance.p1s(token_0);
        }
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.o22_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.g23_1.e2().n2(State_Idle_getInstance()) >= 0) {
        var snapshotInvalidations = this$0.t22_1;
        // Inline function 'androidx.compose.runtime.collection.fastForEach' call
        var tmp_0;
        if (changed instanceof ScatterSetWrapper) {
          var this_0 = changed.y1y_1;
          // Inline function 'kotlin.contracts.contract' call
          var k = this_0.h1f_1;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = this_0.g1f_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_1 = slot;
                if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
                  var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
                  var inductionVariable_0 = 0;
                  if (inductionVariable_0 < bitCount)
                    do {
                      var j = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      // Inline function 'androidx.collection.isFull' call
                      if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                        var index = (i << 3) + j | 0;
                        // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                        var tmp_1 = k[index];
                        var tmp1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                        $l$block: {
                          // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                          var tmp_2;
                          if (tmp1 instanceof StateObjectImpl) {
                            // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                            var tmp$ret$2 = _ReaderKind___init__impl__jqeebu(1);
                            tmp_2 = !tmp1.o23(tmp$ret$2);
                          } else {
                            tmp_2 = false;
                          }
                          if (tmp_2) {
                            break $l$block;
                          }
                          snapshotInvalidations.e(tmp1);
                        }
                      }
                      slot = slot.c3(8);
                    }
                     while (inductionVariable_0 < bitCount);
                  if (!(bitCount === 8)) {
                    tmp$ret$4 = Unit_instance;
                    break $l$block_0;
                  }
                }
              }
               while (!(i === lastIndex));
          }
          tmp_0 = tmp$ret$4;
        } else {
          var _iterator__ex2g4s = changed.g();
          while (_iterator__ex2g4s.h()) {
            var element = _iterator__ex2g4s.i();
            $l$block_1: {
              // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_3;
              if (element instanceof StateObjectImpl) {
                // Inline function 'androidx.compose.runtime.snapshots.Companion.Composition' call
                var tmp$ret$5 = _ReaderKind___init__impl__jqeebu(1);
                tmp_3 = !element.o23(tmp$ret$5);
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                break $l$block_1;
              }
              snapshotInvalidations.e(element);
            }
          }
          tmp_0 = Unit_instance;
        }
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      var tmp0_safe_receiver = tmp;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$10 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.j9(tmp$ret$10);
      }
      return Unit_instance;
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.x23_1 = $block;
    this.y23_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda$slambda).q13 = function ($this$coroutineScope, $completion) {
    var tmp = this.r13($this$coroutineScope, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).s9 = function (p1, $completion) {
    return this.q13((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        switch (tmp) {
          case 0:
            this.z8_1 = 2;
            this.y8_1 = 1;
            suspendResult = this.x23_1(this.z23_1, this.y23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z8_1 === 2) {
          throw e;
        } else {
          this.y8_1 = this.z8_1;
          this.b9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda$slambda).r13 = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.x23_1, this.y23_1, completion);
    i.z23_1 = $this$coroutineScope;
    return i;
  };
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.q13($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_knownCompositions__y8veaj($this) {
    var tmp0_elvis_lhs = $this.s22_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.runtime.Recomposer.<get-knownCompositions>.<anonymous>' call
      var compositions = $this.r22_1;
      var newCache = compositions.p() ? emptyList() : ArrayList_init_$Create$_1(compositions);
      $this.s22_1 = newCache;
      tmp = newCache;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) {
    return !$this.f23_1 && $this.n22_1.h1i();
  }
  function _get_hasBroadcastFrameClockAwaiters__y6inql($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasBroadcastFrameClockAwaiters>.<anonymous>' call
    return _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function deriveStateLocked($this) {
    if ($this.g23_1.e2().n2(State_ShuttingDown_getInstance()) <= 0) {
      clearKnownCompositionsLocked($this);
      $this.t22_1 = new MutableScatterSet();
      $this.u22_1.y1();
      $this.v22_1.y1();
      $this.w22_1.y1();
      $this.z22_1 = null;
      var tmp0_safe_receiver = $this.b23_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.dl();
      $this.b23_1 = null;
      $this.e23_1 = null;
      return null;
    }
    var tmp;
    if (!($this.e23_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.p22_1 == null) {
        $this.t22_1 = new MutableScatterSet();
        $this.u22_1.y1();
        tmp = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this) ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        if ($this.u22_1.l1f() || $this.t22_1.l1f()) {
          tmp_3 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_3 = !$this.v22_1.p();
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp_2 = !$this.w22_1.p();
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.c23_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.g23_1.o11(newState);
    var tmp_4;
    if (newState.equals(State_PendingWork_getInstance())) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.b23_1;
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.b23_1 = null;
      tmp_4 = this_0;
    } else {
      tmp_4 = null;
    }
    return tmp_4;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    if (!$this.d23_1) {
      tmp = true;
    } else {
      var tmp1 = $this.h23_1.bp();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var _iterator__ex2g4s = tmp1.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          if (element.ni()) {
            tmp$ret$3 = true;
            break $l$block;
          }
        }
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.a24_1 = $outer;
  }
  function RecomposerErrorState(recoverable, cause) {
    this.b24_1 = recoverable;
    this.c24_1 = cause;
  }
  function recordComposerModifications($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if ($this.t22_1.p())
      return _get_hasFrameWorkLocked__1gtyf7($this);
    // Inline function 'kotlin.also' call
    var this_0 = wrapIntoSet($this.t22_1);
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
    $this.t22_1 = new MutableScatterSet();
    var changes = this_0;
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    var compositions = _get_knownCompositions__y8veaj($this);
    var complete = false;
    try {
      // Inline function 'kotlin.run' call
      $l$block: {
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = compositions.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = compositions.o(index);
            // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>.<anonymous>' call
            item.a20(changes);
            if ($this.g23_1.e2().n2(State_ShuttingDown_getInstance()) <= 0) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.o22_1;
      // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
      $this.t22_1 = new MutableScatterSet();
      complete = true;
    }finally {
      if (!complete) {
        // Inline function 'androidx.compose.runtime.synchronized' call
        $this.o22_1;
        // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
        $this.t22_1.y1g(changes);
      }
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModifications.<anonymous>' call
    if (!(deriveStateLocked($this) == null)) {
      // Inline function 'kotlin.error' call
      var message = 'called outside of runRecomposeAndApplyChanges';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_hasFrameWorkLocked__1gtyf7($this);
  }
  function registerRunnerJob($this, callingJob) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.q22_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    if ($this.g23_1.e2().n2(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      var message = 'Recomposer shut down';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!($this.p22_1 == null)) {
      // Inline function 'kotlin.error' call
      var message_0 = 'Recomposer already running';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    $this.p22_1 = callingJob;
    deriveStateLocked($this);
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_2().l22_1.zo()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.o22_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      logError('Error was captured in composition while live edit was enabled.', e);
      $this.v22_1.y1();
      $this.u22_1.y1();
      $this.t22_1 = new MutableScatterSet();
      $this.w22_1.y1();
      $this.x22_1.y1();
      $this.y22_1.y1();
      $this.e23_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        recordFailedCompositionLocked($this, failedInitialComposition);
      }
      deriveStateLocked($this);
    } else {
      // Inline function 'androidx.compose.runtime.synchronized' call
      $this.o22_1;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      var errorState = $this.e23_1;
      if (errorState == null) {
        $this.e23_1 = new RecomposerErrorState(false, e);
      } else {
        throw errorState.c24_1;
      }
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $super) {
    failedInitialComposition = failedInitialComposition === VOID ? null : failedInitialComposition;
    recoverable = recoverable === VOID ? false : recoverable;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function clearKnownCompositionsLocked($this) {
    $this.r22_1.y1();
    $this.s22_1 = emptyList();
  }
  function removeKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.minusAssign' call
    $this.r22_1.v1(composition);
    $this.s22_1 = null;
  }
  function addKnownCompositionLocked($this, composition) {
    // Inline function 'kotlin.collections.plusAssign' call
    $this.r22_1.e(composition);
    $this.s22_1 = null;
  }
  function recordFailedCompositionLocked($this, composition) {
    var tmp0_elvis_lhs = $this.z22_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'androidx.compose.runtime.Recomposer.recordFailedCompositionLocked.<anonymous>' call
      $this.z22_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var failedCompositions = tmp;
    if (!failedCompositions.r(composition)) {
      // Inline function 'kotlin.collections.plusAssign' call
      failedCompositions.e(composition);
    }
    removeKnownCompositionLocked($this, composition);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    return $this.t22_1.l1f() || $this.u22_1.l1f() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function awaitWorkAvailable($this, $completion) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  }
  function recompositionRunner($this, block, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.e9();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.n22_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $completion);
  }
  function performInitialMovableContentInserts($this, composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>' call
    var tmp0 = $this.w22_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          if (equals(item.l1r_1, composition)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1)
      return Unit_instance;
    // Inline function 'kotlin.collections.mutableListOf' call
    var toInsert = ArrayList_init_$Create$();
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.p()) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    var tmp;
    if (composition.f1z() || composition.t1z()) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.a23_1;
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r(composition)) === true;
    }
    if (tmp)
      return null;
    var tmp_0;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_instance_12.m24(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.n24();
          try {
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            if ((modifiedValues == null ? null : modifiedValues.l1f()) === true) {
              composition.c20(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$1 = composition.n20();
            break $l$block;
          }finally {
            snapshot.o24(previous);
          }
        }
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$1) {
      tmp_0 = composition;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  }
  function performInsertValues($this, references, modifiedValues) {
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$(references.j());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.o(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        var key = item.l1r_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.h2(key);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          var answer = ArrayList_init_$Create$();
          destination.a5(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.e(item);
      }
       while (inductionVariable <= last);
    var tasks = destination;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = tasks.k2().g();
    while (tmp0_iterator.h()) {
      var tmp1_loop_parameter = tmp0_iterator.i();
      // Inline function 'kotlin.collections.component1' call
      var composition = tmp1_loop_parameter.d2();
      // Inline function 'kotlin.collections.component2' call
      var refs = tmp1_loop_parameter.e2();
      runtimeCheck(!composition.f1z());
      $l$block_2: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.m24(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          $l$block_1: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.n24();
            try {
              // Inline function 'androidx.compose.runtime.synchronized' call
              $this.o22_1;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.j());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.j() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.o(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  var element = to(item_0, removeLastMultiValue($this.x22_1, item_0.j1r_1));
                  target.e(element);
                }
                 while (inductionVariable_0 <= last_0);
              var pairs = target;
              var tmp_0;
              var tmp_1;
              var tmp$ret$12;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_1 = 0;
                var last_1 = pairs.j() - 1 | 0;
                if (inductionVariable_1 <= last_1)
                  do {
                    var index_1 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var item_1 = pairs.o(index_1);
                    // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_1.se_1 == null)) {
                      tmp$ret$12 = false;
                      break $l$block;
                    }
                  }
                   while (inductionVariable_1 <= last_1);
                tmp$ret$12 = true;
              }
              if (tmp$ret$12) {
                tmp_1 = true;
              } else {
                var tmp$ret$14;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                  // Inline function 'kotlin.contracts.contract' call
                  var inductionVariable_2 = 0;
                  var last_2 = pairs.j() - 1 | 0;
                  if (inductionVariable_2 <= last_2)
                    do {
                      var index_2 = inductionVariable_2;
                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                      var item_2 = pairs.o(index_2);
                      // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
                      // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                      if (!!(item_2.se_1 == null)) {
                        tmp$ret$14 = false;
                        break $l$block_0;
                      }
                    }
                     while (inductionVariable_2 <= last_2);
                  tmp$ret$14 = true;
                }
                tmp_1 = tmp$ret$14;
              }
              if (tmp_1) {
                tmp_0 = pairs;
              } else {
                // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull' call
                // Inline function 'kotlin.contracts.contract' call
                var target_0 = ArrayList_init_$Create$_0(pairs.j());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_3 = 0;
                var last_3 = pairs.j() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = pairs.o(index_3);
                    // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    var tmp0_safe_receiver = item_3.se_1 == null ? item_3.re_1 : null;
                    if (tmp0_safe_receiver == null)
                      null;
                    else {
                      // Inline function 'kotlin.let' call
                      // Inline function 'androidx.compose.runtime.snapshots.fastMapNotNull.<anonymous>.<anonymous>' call
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_0.e(tmp0_safe_receiver);
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                var toReturn = target_0;
                // Inline function 'androidx.compose.runtime.synchronized' call
                $this.o22_1;
                // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.collections.plusAssign' call
                var this_0 = $this.w22_1;
                addAll(this_0, toReturn);
                // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var target_1 = ArrayList_init_$Create$_0(pairs.j());
                // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_4 = 0;
                var last_4 = pairs.j() - 1 | 0;
                if (inductionVariable_4 <= last_4)
                  do {
                    var index_4 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var item_4 = pairs.o(index_4);
                    // Inline function 'androidx.compose.runtime.snapshots.fastFilterIndexed.<anonymous>' call
                    // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
                    if (!(item_4.se_1 == null)) {
                      // Inline function 'kotlin.collections.plusAssign' call
                      target_1.e(item_4);
                    }
                  }
                   while (inductionVariable_4 <= last_4);
                tmp_0 = target_1;
              }
              var toInsert = tmp_0;
              composition.o20(toInsert);
              break $l$block_1;
            }finally {
              snapshot.o24(previous);
            }
          }
          break $l$block_2;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.i2());
  }
  function discardUnusedValues($this) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    $this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.x22_1.p()) {
      var references = flatten($this.x22_1.j2());
      $this.x22_1.y1();
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.j());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.j() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var element = to(item, $this.y22_1.h2(item));
          target.e(element);
        }
         while (inductionVariable <= last);
      var unusedValues = target;
      $this.y22_1.y1();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    var unusedValues_0 = tmp;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.j() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.o(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.te();
        var state = item_0.ue();
        if (!(state == null)) {
          reference.l1r_1.p20(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.c25();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var message = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }finally {
      snapshot.om();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    return $this.u22_1.l1f() || _get_hasBroadcastFrameClockAwaitersLocked__7l4pm1($this);
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.k22_1 = MutableStateFlow(persistentSetOf());
    this.l22_1 = new AtomicReference(false);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.y1();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this$0.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.fillToInsert.<anonymous>' call
    var iterator = this$0.w22_1.g();
    while (iterator.h()) {
      var value = iterator.i();
      if (equals(value.l1r_1, $composition)) {
        toInsert.e(value);
        iterator.z3();
      }
    }
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.o22_1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = deriveStateLocked(this$0);
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.g23_1.e2().n2(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.q22_1);
      if (this_0 == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
        this_0.j9(tmp$ret$3);
      }
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.o22_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1;
        if (runnerJobCause == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.takeIf' call
          var tmp_2;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!(runnerJobCause instanceof CancellationException)) {
            tmp_2 = runnerJobCause;
          } else {
            tmp_2 = null;
          }
          tmp_1 = tmp_2;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
        }
        tmp_0 = tmp0_safe_receiver;
      }
      tmp.q22_1 = tmp_0;
      this$0.g23_1.o11(State_ShutDown_getInstance());
      return Unit_instance;
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      // Inline function 'androidx.compose.runtime.synchronized' call
      this$0.o22_1;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.p22_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.g23_1.o11(State_ShuttingDown_getInstance());
        if (!this$0.d23_1) {
          runnerJob.uj(cancellation);
        } else if (!(this$0.b23_1 == null)) {
          continuationToResume = this$0.b23_1;
        }
        this$0.b23_1 = null;
        tmp = runnerJob.pj(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.q22_1 = cancellation;
        this$0.g23_1.o11(State_ShutDown_getInstance());
        tmp = Unit_instance;
      }
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
        tmp0_safe_receiver.j9(tmp$ret$2);
      }
      return Unit_instance;
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.l25_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).w25 = function ($this$recompositionRunner, parentFrameClock, $completion) {
    var tmp = this.x25($this$recompositionRunner, parentFrameClock, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).y25 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE();
    return this.w25(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        switch (tmp) {
          case 0:
            this.z8_1 = 6;
            var tmp_0 = this;
            tmp_0.o25_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.p25_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.q25_1 = ArrayList_init_$Create$();
            this.r25_1 = mutableScatterSetOf_0();
            this.s25_1 = mutableScatterSetOf_0();
            this.t25_1 = new MutableScatterSet();
            this.u25_1 = wrapIntoSet(this.t25_1);
            this.v25_1 = mutableScatterSetOf_0();
            this.y8_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.l25_1)) {
              this.y8_1 = 5;
              continue $sm;
            }

            this.y8_1 = 2;
            suspendResult = awaitWorkAvailable(this.l25_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!recordComposerModifications(this.l25_1)) {
              this.y8_1 = 1;
              continue $sm;
            } else {
              this.y8_1 = 3;
              continue $sm;
            }

          case 3:
            this.y8_1 = 4;
            suspendResult = this.n25_1.j1i(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.l25_1, this.o25_1, this.t25_1, this.v25_1, this.p25_1, this.q25_1, this.u25_1, this.r25_1, this.s25_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            discardUnusedValues(this.l25_1);
            this.y8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z8_1 === 6) {
          throw e;
        } else {
          this.y8_1 = this.z8_1;
          this.b9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$runRecomposeAndApplyChanges$slambda).x25 = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.l25_1, completion);
    i.m25_1 = $this$recompositionRunner;
    i.n25_1 = parentFrameClock;
    return i;
  };
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $completion) {
      return i.w25($this$recompositionRunner, parentFrameClock, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.h26_1 = this$0;
    this.i26_1 = $block;
    this.j26_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Recomposer$recompositionRunner$slambda).q13 = function ($this$withContext, $completion) {
    var tmp = this.r13($this$withContext, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(Recomposer$recompositionRunner$slambda).s9 = function (p1, $completion) {
    return this.q13((!(p1 == null) ? isInterface(p1, CoroutineScope_0) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Recomposer$recompositionRunner$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        switch (tmp) {
          case 0:
            this.z8_1 = 5;
            this.l26_1 = get_job(this.k26_1.mi());
            registerRunnerJob(this.h26_1, this.l26_1);
            var tmp_0 = this;
            var tmp_1 = Companion_instance_12;
            tmp_0.m26_1 = tmp_1.o26(Recomposer$recompositionRunner$slambda$lambda(this.h26_1));
            addRunning(Companion_getInstance_2(), this.h26_1.j23_1);
            this.y8_1 = 1;
            continue $sm;
          case 1:
            this.z8_1 = 4;
            this.h26_1.o22_1;
            var this_0 = _get_knownCompositions__y8veaj(this.h26_1);
            var inductionVariable = 0;
            var last = this_0.j() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this_0.o(index);
                item.t20();
              }
               while (inductionVariable <= last);
            this.y8_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.i26_1, this.j26_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n26_1 = suspendResult;
            this.z8_1 = 5;
            this.y8_1 = 3;
            continue $sm;
          case 3:
            this.z8_1 = 5;
            this.m26_1.om();
            this.h26_1.o22_1;
            if (this.h26_1.p22_1 === this.l26_1) {
              this.h26_1.p22_1 = null;
            }

            deriveStateLocked(this.h26_1);
            removeRunning(Companion_getInstance_2(), this.h26_1.j23_1);
            return Unit_instance;
          case 4:
            this.z8_1 = 5;
            var t = this.b9_1;
            this.m26_1.om();
            this.h26_1.o22_1;
            if (this.h26_1.p22_1 === this.l26_1) {
              this.h26_1.p22_1 = null;
            }

            deriveStateLocked(this.h26_1);
            removeRunning(Companion_getInstance_2(), this.h26_1.j23_1);
            throw t;
          case 5:
            throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z8_1 === 5) {
          throw e;
        } else {
          this.y8_1 = this.z8_1;
          this.b9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Recomposer$recompositionRunner$slambda).r13 = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.h26_1, this.i26_1, this.j26_1, completion);
    i.k26_1 = $this$withContext;
    return i;
  };
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $completion) {
      return i.q13($this$withContext, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      var this_0 = $modifiedValues;
      // Inline function 'kotlin.contracts.contract' call
      var k = this_0.h1f_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this_0.g1f_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index];
                    // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    $composition.m20(it);
                  }
                  slot = slot.c3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      return Unit_instance;
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.d20(value);
      return Unit_instance;
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.m20(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.e(value);
      return Unit_instance;
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l24_1 = _this__u8e3s4;
  }
  protoOf($awaitWorkAvailableCOROUTINE$1).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        switch (tmp) {
          case 0:
            this.z8_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.l24_1)) {
              this.y8_1 = 1;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.nm();
              this.l24_1.o22_1;
              var tmp_0;
              if (_get_hasSchedulingWork__b617oy(this.l24_1)) {
                tmp_0 = cancellable;
              } else {
                this.l24_1.b23_1 = cancellable;
                tmp_0 = null;
              }
              var tmp0_safe_receiver = tmp_0;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.j9(_Result___init__impl__xyqfz8(Unit_instance));
              }
              suspendResult = returnIfSuspended(cancellable.nk(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y8_1 = 2;
              continue $sm;
            }

          case 1:
            this.y8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z8_1 === 3) {
          throw e;
        } else {
          this.y8_1 = this.z8_1;
          this.b9_1 = e;
        }
      }
     while (true);
  };
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_2();
    CompositionContext.call(this);
    this.m22_1 = new Long(0, 0);
    var tmp = this;
    tmp.n22_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    this.o22_1 = new Object();
    this.p22_1 = null;
    this.q22_1 = null;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.r22_1 = ArrayList_init_$Create$();
    this.s22_1 = null;
    this.t22_1 = new MutableScatterSet();
    var tmp_1 = this;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1 = Array(16);
    tmp_1.u22_1 = new MutableVector(tmp$ret$1, 0);
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.v22_1 = ArrayList_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.w22_1 = ArrayList_init_$Create$();
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.x22_1 = LinkedHashMap_init_$Create$();
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.y22_1 = LinkedHashMap_init_$Create$();
    this.z22_1 = null;
    this.a23_1 = null;
    this.b23_1 = null;
    this.c23_1 = 0;
    this.d23_1 = false;
    this.e23_1 = null;
    this.f23_1 = false;
    this.g23_1 = MutableStateFlow(State_Inactive_getInstance());
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var this_0 = Job(effectCoroutineContext.l9(Key_instance));
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    this_0.pj(Recomposer$effectJob$lambda(this));
    tmp_6.h23_1 = this_0;
    this.i23_1 = effectCoroutineContext.mg(this.n22_1).mg(this.h23_1);
    this.j23_1 = new RecomposerInfoImpl(this);
  }
  protoOf(Recomposer).w1t = function () {
    return this.i23_1;
  };
  protoOf(Recomposer).p26 = function ($completion) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $completion);
  };
  protoOf(Recomposer).t1y = function (composition, content) {
    var composerWasComposing = composition.f1z();
    try {
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_instance_12.m24(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.n24();
            try {
              composition.v1z(content);
              break $l$block;
            }finally {
              snapshot.o24(previous);
            }
          }
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        processCompositionError(this, e, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.n23();
    }
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.composeInitial.<anonymous>' call
    if (this.g23_1.e2().n2(State_ShuttingDown_getInstance()) > 0) {
      if (!_get_knownCompositions__y8veaj(this).r(composition)) {
        addKnownCompositionLocked(this, composition);
      }
    }
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_0 = $p;
        processCompositionError(this, e_0, composition, true);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    try {
      composition.q20();
      composition.r20();
    } catch ($p) {
      if ($p instanceof Exception) {
        var e_1 = $p;
        processCompositionError$default(this, e_1);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_instance_12.n23();
    }
  };
  protoOf(Recomposer).n1l = function () {
    return 1000;
  };
  protoOf(Recomposer).l1o = function () {
    return Companion_getInstance_2().l22_1.zo();
  };
  protoOf(Recomposer).k1l = function () {
    return false;
  };
  protoOf(Recomposer).l1l = function () {
    return false;
  };
  protoOf(Recomposer).m1l = function (table) {
  };
  protoOf(Recomposer).i1z = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.u22_1.me(composition)) {
      // Inline function 'androidx.compose.runtime.collection.MutableVector.plusAssign' call
      this.u22_1.n1s(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.j9(tmp$ret$2);
    }
  };
  protoOf(Recomposer).g1r = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    // Inline function 'kotlin.collections.plusAssign' call
    this.w22_1.e(reference);
    var tmp0_safe_receiver = deriveStateLocked(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      tmp0_safe_receiver.j9(tmp$ret$2);
    }
  };
  protoOf(Recomposer).k1t = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    addMultiValue(this.x22_1, reference.j1r_1, reference);
  };
  protoOf(Recomposer).c21 = function (reference, data) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateReleased.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.y22_1.a5(reference, data);
  };
  protoOf(Recomposer).j1t = function (composition) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>' call
    var tmp0_elvis_lhs = this.a23_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mutableSetOf' call
      // Inline function 'kotlin.also' call
      var this_0 = LinkedHashSet_init_$Create$();
      // Inline function 'androidx.compose.runtime.Recomposer.reportRemovedComposition.<anonymous>.<anonymous>' call
      this.a23_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var compositionsRemoved = tmp;
    compositionsRemoved.e(composition);
  };
  protoOf(Recomposer).s1r = function (reference) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.o22_1;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    return this.y22_1.b5(reference);
  };
  function removeLastMultiValue(_this__u8e3s4, key) {
    _init_properties_Recomposer_kt__nj7w3x();
    var tmp0_safe_receiver = _this__u8e3s4.h2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = removeFirst(tmp0_safe_receiver);
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.p()) {
        _this__u8e3s4.b5(key);
      }
      tmp = this_0;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    _init_properties_Recomposer_kt__nj7w3x();
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.h2(key);
    var tmp;
    if (value_0 == null) {
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var answer = ArrayList_init_$Create$();
      _this__u8e3s4.a5(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    return tmp.e(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function _init_properties_Recomposer_kt__nj7w3x() {
    if (!properties_initialized_Recomposer_kt_k8q2ph) {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  function tryAnchor($this, index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.y1k_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.tryAnchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to crate an anchor for location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return (0 <= index ? index < $this.t1k_1 : false) ? find($this.a1l_1, index, $this.t1k_1) : null;
  }
  function SlotTable() {
    this.s1k_1 = new Int32Array(0);
    this.t1k_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(0);
    while (tmp_0 < 0) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.u1k_1 = tmp_1;
    this.v1k_1 = 0;
    this.w1k_1 = 0;
    this.x1k_1 = new Object();
    this.y1k_1 = false;
    this.z1k_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp_2.a1l_1 = ArrayList_init_$Create$();
    this.b1l_1 = null;
    this.c1l_1 = null;
  }
  protoOf(SlotTable).p1q = function () {
    return this.t1k_1 === 0;
  };
  protoOf(SlotTable).d1l = function () {
    if (this.y1k_1) {
      // Inline function 'kotlin.error' call
      var message = 'Cannot read while a writer is pending';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.w1k_1 = this.w1k_1 + 1 | 0;
    return new SlotReader(this);
  };
  protoOf(SlotTable).h1o = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.y1k_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.w1k_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      var tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    this.y1k_1 = true;
    this.z1k_1 = this.z1k_1 + 1 | 0;
    return new SlotWriter(this);
  };
  protoOf(SlotTable).b1o = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.y1k_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$0 = 'use active SlotWriter to create an anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.t1k_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var tmp$ret$1 = 'Parameter index is out of range';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var tmp0 = this.a1l_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.t1k_1;
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp0.a2(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.o(location);
    }
    return tmp;
  };
  protoOf(SlotTable).q1r = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.y1k_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!anchor.x1w()) {
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      var tmp$ret$1 = 'Anchor refers to a group that was removed';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return anchor.j1s_1;
  };
  protoOf(SlotTable).x20 = function (anchor) {
    var tmp;
    if (anchor.x1w()) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      var it = search(this.a1l_1, anchor.j1s_1, this.t1k_1);
      tmp = (it >= 0 && equals(this.a1l_1.o(it), anchor));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).g1z = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.y1k_1) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$0 = 'Writer is active';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= groupIndex ? groupIndex < this.t1k_1 : false)) {
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      var tmp$ret$1 = 'Invalid group index';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    var tmp;
    if (this.x20(anchor)) {
      var containsUpper = groupIndex + groupSize(this.s1k_1, groupIndex) | 0;
      var containsArg = anchor.j1s_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SlotTable).q26 = function (reader, sourceInformationMap) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(reader.c1m_1 === this && this.w1k_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected reader close()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.w1k_1 = this.w1k_1 - 1 | 0;
    if (!(sourceInformationMap == null)) {
      // Inline function 'androidx.compose.runtime.synchronized' call
      this.x1k_1;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var thisMap = this.b1l_1;
      if (!(thisMap == null)) {
        thisMap.r5(sourceInformationMap);
      } else {
        this.b1l_1 = sourceInformationMap;
      }
    }
  };
  protoOf(SlotTable).r26 = function (writer, groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(writer.w1m_1 === this && this.y1k_1)) {
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      var tmp$ret$0 = 'Unexpected writer close()';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.y1k_1 = false;
    this.s26(groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap);
  };
  protoOf(SlotTable).s26 = function (groups, groupsSize, slots, slotsSize, anchors, sourceInformationMap, calledByMap) {
    this.s1k_1 = groups;
    this.t1k_1 = groupsSize;
    this.u1k_1 = slots;
    this.v1k_1 = slotsSize;
    this.a1l_1 = anchors;
    this.b1l_1 = sourceInformationMap;
    this.c1l_1 = calledByMap;
  };
  protoOf(SlotTable).v1s = function () {
    return this.t1k_1 > 0 && containsMark(this.s1k_1, 0);
  };
  protoOf(SlotTable).t26 = function (group) {
    var tmp0_safe_receiver = this.b1l_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = tryAnchor(this, group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotTable.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.h2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SlotTable).k1o = function () {
    this.c1l_1 = new MutableIntObjectMap();
  };
  protoOf(SlotTable).j1o = function () {
    this.b1l_1 = HashMap_init_$Create$_0();
  };
  protoOf(SlotTable).g22 = function (group, slotIndex) {
    var start = slotAnchor(this.s1k_1, group);
    var end = (group + 1 | 0) < this.t1k_1 ? dataAnchor(this.s1k_1, group + 1 | 0) : this.u1k_1.length;
    var len = end - start | 0;
    var tmp;
    if (0 <= slotIndex ? slotIndex < len : false) {
      return this.u1k_1[start + slotIndex | 0];
    } else {
      tmp = Companion_getInstance().r1o_1;
    }
    return tmp;
  };
  protoOf(SlotTable).g = function () {
    return new GroupIterator(this, 0, this.t1k_1);
  };
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup) {
    var groupsToMove = fromWriter.z1p(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.p1n_1);
    if (fromWriter.c1n_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.g1n_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.x1m_1;
    var currentGroup = toWriter.p1n_1;
    var tmp0 = fromWriter.x1m_1;
    var tmp2 = imul(currentGroup, 5);
    var tmp3 = imul(fromIndex, 5);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = imul(sourceGroupsEnd, 5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp2, tmp3, endIndex);
    var slots = toWriter.y1m_1;
    var currentSlot = toWriter.e1n_1;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = fromWriter.y1m_1;
    arrayCopy(this_0, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    var parent = toWriter.r1n_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    var dataIndexDelta = currentSlot - dataIndex_0(groups, toWriter, currentGroup) | 0;
    var slotsGapOwner = toWriter.i1n_1;
    var slotsGapLen = toWriter.h1n_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataIndex = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        var newDataAnchor = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.g1n_1, slotsGapLen, slotsCapacity);
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          slotsGapOwner = slotsGapOwner + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.i1n_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.z1m_1, fromIndex, fromWriter.u26());
    var endAnchors = locationOf(fromWriter.z1m_1, sourceGroupsEnd, fromWriter.u26());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.z1m_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.o(anchorIndex);
          sourceAnchor.j1s_1 = sourceAnchor.j1s_1 + anchorDelta | 0;
          anchors.e(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.z1m_1, toWriter.p1n_1, toWriter.u26());
      toWriter.z1m_1.w1(insertLocation, anchors);
      sourceAnchors.c2(startAnchors, endAnchors).y1();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!anchors_0.p()) {
      var sourceSourceInformationMap = fromWriter.a1n_1;
      var destinationSourceInformation = toWriter.a1n_1;
      if (!(sourceSourceInformationMap == null) && !(destinationSourceInformation == null)) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last = anchors_0.j() - 1 | 0;
        if (inductionVariable_1 <= last)
          do {
            var index = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item = anchors_0.o(index);
            // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
            var information = sourceSourceInformationMap.h2(item);
            if (!(information == null)) {
              sourceSourceInformationMap.b5(item);
              // Inline function 'kotlin.collections.set' call
              destinationSourceInformation.a5(item, information);
            }
          }
           while (inductionVariable_1 <= last);
      }
    }
    var toWriterParent = toWriter.r1n_1;
    var tmp4_safe_receiver = sourceInformationOf(toWriter, parent);
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var predecessor = -1;
      var child = toWriterParent + 1 | 0;
      var endGroup = toWriter.p1n_1;
      while (child < endGroup) {
        predecessor = child;
        child = child + groupSize(toWriter.x1m_1, child) | 0;
      }
      tmp4_safe_receiver.b27(toWriter, predecessor, endGroup);
    }
    var parentGroup = fromWriter.a1o(fromIndex);
    var tmp_1;
    if (!removeSourceGroup) {
      tmp_1 = false;
    } else if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.p1o();
        fromWriter.c27(parentGroup - fromWriter.p1n_1 | 0);
        fromWriter.p1o();
      }
      fromWriter.c27(fromIndex - fromWriter.p1n_1 | 0);
      var anchorsRemoved = fromWriter.a1x();
      if (needsStartGroups) {
        fromWriter.i1o();
        fromWriter.n1q();
        fromWriter.i1o();
        fromWriter.n1q();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved_1) {
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      var tmp$ret$14 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$14);
    }
    toWriter.k1n_1 = toWriter.k1n_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.p1n_1 = currentGroup + groupsToMove | 0;
      toWriter.e1n_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function moveGroup$default($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup, $super) {
    removeSourceGroup = removeSourceGroup === VOID ? true : removeSourceGroup;
    return moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor, removeSourceGroup);
  }
  function rawUpdate($this, value) {
    var result = $this.d27();
    $this.e27(value);
    return result;
  }
  function groupSourceInformationFor($this, parent, sourceInformation) {
    var tmp0_safe_receiver = $this.a1n_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.getOrPut' call
      var key = $this.b1o(parent);
      var value = tmp0_safe_receiver.h2(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'androidx.compose.runtime.SlotWriter.groupSourceInformationFor.<anonymous>' call
        var result = new GroupSourceInformation(0, sourceInformation, 0);
        if (sourceInformation == null) {
          var child = parent + 1 | 0;
          var end = $this.p1n_1;
          while (child < end) {
            result.f27($this, child);
            child = child + groupSize($this.x1m_1, child) | 0;
          }
        }
        var answer = result;
        tmp0_safe_receiver.a5(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _get_currentGroupSlotIndex__p1glxf($this) {
    var tmp = $this.e1n_1 - $this.g27($this.r1n_1) | 0;
    var tmp0_safe_receiver = $this.o1n_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o($this.r1n_1);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j();
    return tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var previousParent = $this.r1n_1;
    var inserting = $this.j1n_1 > 0;
    $this.n1n_1.i1l($this.k1n_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      var current = $this.p1n_1;
      var newCurrentSlot = dataIndex_0($this.x1m_1, $this, groupIndexToAddress($this, current));
      insertGroups($this, 1);
      $this.e1n_1 = newCurrentSlot;
      $this.f1n_1 = newCurrentSlot;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance().r1o_1);
      var hasAux = !isNode && !(aux === Companion_getInstance().r1o_1);
      var tmp0_gapLen = $this.h1n_1;
      var tmp1_gapStart = $this.g1n_1;
      var tmp2_capacity = $this.y1m_1.length;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var anchor = dataIndexToDataAnchor($this, newCurrentSlot, tmp1_gapStart, tmp0_gapLen, tmp2_capacity);
      var tmp_1;
      if (anchor >= 0 && $this.i1n_1 < current) {
        var slotsSize = $this.y1m_1.length - $this.h1n_1 | 0;
        tmp_1 = -((slotsSize - anchor | 0) + 1 | 0) | 0;
      } else {
        tmp_1 = anchor;
      }
      var dataAnchor = tmp_1;
      initGroup($this.x1m_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.r1n_1, dataAnchor);
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.y1m_1;
        var currentSlot = $this.e1n_1;
        if (isNode) {
          var tmp3 = currentSlot;
          currentSlot = tmp3 + 1 | 0;
          slots[tmp3] = aux;
        }
        if (hasObjectKey) {
          var tmp4 = currentSlot;
          currentSlot = tmp4 + 1 | 0;
          slots[tmp4] = objectKey;
        }
        if (hasAux) {
          var tmp5 = currentSlot;
          currentSlot = tmp5 + 1 | 0;
          slots[tmp5] = aux;
        }
        $this.e1n_1 = currentSlot;
      }
      $this.k1n_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.r1n_1 = current;
      $this.p1n_1 = newCurrent;
      if (previousParent >= 0) {
        var tmp6_safe_receiver = sourceInformationOf($this, previousParent);
        if (tmp6_safe_receiver == null)
          null;
        else {
          tmp6_safe_receiver.f27($this, current);
        }
      }
      tmp_0 = newCurrent;
    } else {
      $this.l1n_1.i1l(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.p1n_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance().r1o_1)) {
        if (isNode) {
          $this.i27(aux);
        } else {
          $this.h27(aux);
        }
      }
      $this.e1n_1 = slotIndex($this.x1m_1, $this, currentGroupAddress);
      $this.f1n_1 = dataIndex_0($this.x1m_1, $this, groupIndexToAddress($this, $this.p1n_1 + 1 | 0));
      $this.k1n_1 = nodeCount($this.x1m_1, currentGroupAddress);
      $this.r1n_1 = currentGroup;
      $this.p1n_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.x1m_1, currentGroupAddress) | 0;
    }
    tmp.q1n_1 = tmp_0;
  }
  function Companion_3() {
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function containsGroupMark($this, group) {
    return group >= 0 && containsMark($this.x1m_1, groupIndexToAddress($this, group));
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 && containsAnyMark($this.x1m_1, groupIndexToAddress($this, group));
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.t1n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.recalculateMarks.<anonymous>' call
      while (tmp0_safe_receiver.l1f()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.k27(), tmp0_safe_receiver);
      }
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.t1n_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = new PrioritySet();
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.t1n_1 = this_0;
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.l27(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.x1m_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.x1m_1, groupAddress, containsAnyMarks);
      var parent = $this.a1o(group);
      if (parent >= 0) {
        set.l27(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.z1p(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.x1m_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.z1p(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.m1n_1.i1l((_get_capacity__a9k9f3($this) - $this.d1n_1 | 0) - $this.q1n_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.d1n_1 | 0) - $this.m1n_1.s1m() | 0;
    $this.q1n_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.c1n_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.x1m_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.x1m_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.d1n_1;
    var gapStart = $this.c1n_1;
    if (!(gapStart === index)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!$this.z1m_1.p()) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.x1m_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          // Inline function 'kotlin.collections.copyInto' call
          var destinationOffset = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, groups, destinationOffset, groupPhysicalAddress, groupPhysicalGapStart);
        } else {
          var tmp9 = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = groupPhysicalAddress + groupPhysicalGapLen | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = groups;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, groups, groupPhysicalGapStart, tmp9, endIndex);
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.x1m_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.x1m_1, groupAddress, newAnchor);
        }
        groupAddress = groupAddress + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.c1n_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.h1n_1;
    var gapStart = $this.g1n_1;
    var slotsGapOwner = $this.i1n_1;
    if (!(gapStart === index)) {
      var slots = $this.y1m_1;
      if (index < gapStart) {
        // Inline function 'kotlin.collections.copyInto' call
        var destinationOffset = index + gapLen | 0;
        arrayCopy(slots, slots, destinationOffset, index, gapStart);
      } else {
        var tmp8 = gapStart + gapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp8, endIndex);
      }
    }
    var tmp10 = group + 1 | 0;
    // Inline function 'kotlin.math.min' call
    var b = $this.u26();
    var newSlotsGapOwner = Math.min(tmp10, b);
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.y1m_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.c1n_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.x1m_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor >= 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            composeImmediateRuntimeError(tmp$ret$3);
          }
          updateDataAnchor($this.x1m_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          updateAddress = updateAddress + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.d1n_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.x1m_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(anchor_0 < 0)) {
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            var tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            composeImmediateRuntimeError(tmp$ret$4);
          }
          updateDataAnchor($this.x1m_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          updateAddress_0 = updateAddress_0 + 1 | 0;
          if (updateAddress_0 === $this.c1n_1)
            updateAddress_0 = updateAddress_0 + $this.d1n_1 | 0;
        }
      }
      $this.i1n_1 = newSlotsGapOwner;
    }
    $this.g1n_1 = index;
  }
  function clearSlotGap($this) {
    var slotsGapStart = $this.g1n_1;
    var slotsGapEnd = slotsGapStart + $this.h1n_1 | 0;
    fill_0($this.y1m_1, null, slotsGapStart, slotsGapEnd);
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.p1n_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.c1n_1;
      var gapLen = $this.d1n_1;
      var oldCapacity = $this.x1m_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.x1m_1;
        var tmp0 = imul(oldCapacity, 2);
        // Inline function 'kotlin.math.max' call
        var b = oldSize + size | 0;
        // Inline function 'kotlin.math.max' call
        var a = Math.max(tmp0, b);
        var newCapacity = Math.max(a, 32);
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = imul(gapStart, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, newGroups, 0, 0, endIndex);
        var tmp11 = imul(newGapEndAddress, 5);
        var tmp12 = imul(oldGapEndAddress, 5);
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_0 = imul(oldCapacity, 5);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = groups;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, newGroups, tmp11, tmp12, endIndex_0);
        $this.x1m_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.q1n_1;
      if (currentEnd >= gapStart)
        $this.q1n_1 = currentEnd + size | 0;
      $this.c1n_1 = gapStart + size | 0;
      $this.d1n_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.i1n_1 < gapStart ? 0 : $this.g1n_1, $this.h1n_1, $this.y1m_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.x1m_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.i1n_1;
      if (slotsGapOwner >= gapStart) {
        $this.i1n_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.e1n_1, group);
      var gapStart = $this.g1n_1;
      var gapLen = $this.h1n_1;
      if (gapLen < size) {
        var slots = $this.y1m_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        var tmp0 = imul(oldCapacity, 2);
        // Inline function 'kotlin.math.max' call
        var b = oldSize + size | 0;
        // Inline function 'kotlin.math.max' call
        var a = Math.max(tmp0, b);
        var newCapacity = Math.max(a, 32);
        var tmp = 0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_0 = Array(newCapacity);
        while (tmp < newCapacity) {
          tmp_0[tmp] = null;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_0;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        $this.y1m_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.f1n_1;
      if (currentDataEnd >= gapStart)
        $this.f1n_1 = currentDataEnd + size | 0;
      $this.g1n_1 = gapStart + size | 0;
      $this.h1n_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.z1m_1;
      moveGroupGapTo($this, start);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!anchors.p()) {
        anchorsRemoved = removeAnchors($this, start, len, $this.a1n_1);
      }
      $this.c1n_1 = start;
      var previousGapLen = $this.d1n_1;
      var newGapLen = previousGapLen + len | 0;
      $this.d1n_1 = newGapLen;
      var slotsGapOwner = $this.i1n_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        // Inline function 'kotlin.math.max' call
        var b = slotsGapOwner - len | 0;
        tmp_0.i1n_1 = Math.max(start, b);
      }
      if ($this.q1n_1 >= $this.c1n_1) {
        $this.q1n_1 = $this.q1n_1 - len | 0;
      }
      var parent = $this.r1n_1;
      if (containsGroupMark($this, parent)) {
        updateContainsMark($this, parent);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function sourceInformationOf($this, group) {
    var tmp0_safe_receiver = $this.a1n_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.m27(group);
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotWriter.sourceInformationOf.<anonymous>.<anonymous>' call
        tmp_0 = tmp0_safe_receiver.h2(tmp0_safe_receiver_0);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.h1n_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.g1n_1 = start;
      $this.h1n_1 = gapLen + len | 0;
      fill_0($this.y1m_1, null, start, start + len | 0);
      var currentDataEnd = $this.f1n_1;
      if (currentDataEnd >= start)
        $this.f1n_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(address < $this.x1m_1.length && isNode($this.x1m_1, address))) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      var tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    $this.y1m_1[dataIndexToDataAddress($this, nodeIndex($this.x1m_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.d1n_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.z1m_1, previousGapStart, size);
      $l$loop_0: while (index < $this.z1m_1.j()) {
        var anchor = $this.z1m_1.o(index);
        var location = anchor.j1s_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.j1s_1 = size + location | 0;
            index = index + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.z1m_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.z1m_1.j()) {
        var anchor_0 = $this.z1m_1.o(index_0);
        var location_0 = anchor_0.j1s_1;
        if (location_0 >= 0) {
          anchor_0.j1s_1 = -(size - location_0 | 0) | 0;
          index_0 = index_0 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size, sourceInformationMap) {
    var gapLen = $this.d1n_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    var it = locationOf($this.z1m_1, gapStart + size | 0, groupsSize);
    var index = it >= $this.z1m_1.j() ? it - 1 | 0 : it;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.z1m_1.o(index);
      var location = $this.q1r(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.j1s_1 = -2147483648;
          if (sourceInformationMap == null)
            null;
          else
            sourceInformationMap.b5(anchor);
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        index = index - 1 | 0;
      } else
        break $l$loop;
    }
    // Inline function 'kotlin.also' call
    var this_0 = removeAnchorStart < removeAnchorEnd;
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (this_0) {
      $this.z1m_1.c2(removeAnchorStart, removeAnchorEnd).y1();
    }
    return this_0;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.u26();
    var index = locationOf($this.z1m_1, originalLocation, groupsSize);
    // Inline function 'kotlin.collections.mutableListOf' call
    var removedAnchors = ArrayList_init_$Create$();
    if (index >= 0) {
      $l$loop: while (index < $this.z1m_1.j()) {
        var anchor = $this.z1m_1.o(index);
        var location = $this.q1r(anchor);
        if (location >= originalLocation && location < end) {
          removedAnchors.e(anchor);
          $this.z1m_1.b2(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.o(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.q1r(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.c1n_1) {
          item.j1s_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.j1s_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.z1m_1, newAnchorIndex, groupsSize);
        $this.z1m_1.a2(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.x1m_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.c1n_1 ? index : index + $this.d1n_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.g1n_1 ? dataIndex : dataIndex + $this.h1n_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.x1m_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.y1m_1.length - $this.h1n_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.h1n_1, $this.y1m_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.y1m_1.length - $this.h1n_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.h1n_1, $this.y1m_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.g1n_1, $this.h1n_1, $this.y1m_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.u26() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.u26() + index | 0) - -2 | 0;
  }
  function access$_get_groups__7d4n3r($this) {
    return $this.x1m_1;
  }
  function access$_get_slots__7x4q9w($this) {
    return $this.y1m_1;
  }
  function access$groupIndexToAddress($this, index) {
    return groupIndexToAddress($this, index);
  }
  function access$dataIndexToDataAddress($this, dataIndex) {
    return dataIndexToDataAddress($this, dataIndex);
  }
  function access$dataIndex($this, $receiver, address) {
    return dataIndex_0($receiver, $this, address);
  }
  function SlotWriter(table) {
    this.w1m_1 = table;
    this.x1m_1 = this.w1m_1.s1k_1;
    this.y1m_1 = this.w1m_1.u1k_1;
    this.z1m_1 = this.w1m_1.a1l_1;
    this.a1n_1 = this.w1m_1.b1l_1;
    this.b1n_1 = this.w1m_1.c1l_1;
    this.c1n_1 = this.w1m_1.t1k_1;
    this.d1n_1 = (this.x1m_1.length / 5 | 0) - this.w1m_1.t1k_1 | 0;
    this.e1n_1 = 0;
    this.f1n_1 = 0;
    this.g1n_1 = this.w1m_1.v1k_1;
    this.h1n_1 = this.y1m_1.length - this.w1m_1.v1k_1 | 0;
    this.i1n_1 = this.w1m_1.t1k_1;
    this.j1n_1 = 0;
    this.k1n_1 = 0;
    this.l1n_1 = new IntStack();
    this.m1n_1 = new IntStack();
    this.n1n_1 = new IntStack();
    this.o1n_1 = null;
    this.p1n_1 = 0;
    this.q1n_1 = this.w1m_1.t1k_1;
    this.r1n_1 = -1;
    this.s1n_1 = false;
    this.t1n_1 = null;
  }
  protoOf(SlotWriter).u1w = function () {
    return this.y1m_1.length - this.h1n_1 | 0;
  };
  protoOf(SlotWriter).y1v = function () {
    return this.p1n_1 < this.q1n_1 && isNode(this.x1m_1, groupIndexToAddress(this, this.p1n_1));
  };
  protoOf(SlotWriter).n27 = function () {
    return !(this.a1n_1 == null);
  };
  protoOf(SlotWriter).o27 = function () {
    return !(this.b1n_1 == null);
  };
  protoOf(SlotWriter).v1q = function (index) {
    return isNode(this.x1m_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).w1q = function (index) {
    return nodeCount(this.x1m_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).d1o = function (index) {
    return key(this.x1m_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).e1o = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.x1m_1, address) ? this.y1m_1[objectKeyIndex(this.x1m_1, address)] : null;
  };
  protoOf(SlotWriter).z1p = function (index) {
    return groupSize(this.x1m_1, groupIndexToAddress(this, index));
  };
  protoOf(SlotWriter).c1o = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.x1m_1, address) ? this.y1m_1[auxIndex(this.x1m_1, this, address)] : Companion_getInstance().r1o_1;
  };
  protoOf(SlotWriter).p27 = function (index) {
    return index > this.r1n_1 && index < this.q1n_1 || (this.r1n_1 === 0 && index === 0);
  };
  protoOf(SlotWriter).q27 = function (index) {
    return this.r27(index, this.p1n_1);
  };
  protoOf(SlotWriter).r27 = function (index, group) {
    var tmp;
    if (group === this.r1n_1) {
      tmp = this.q1n_1;
    } else if (group > this.l1n_1.t27(0)) {
      tmp = group + this.z1p(group) | 0;
    } else {
      var openIndex = this.l1n_1.s27(group);
      tmp = openIndex < 0 ? group + this.z1p(group) | 0 : (_get_capacity__a9k9f3(this) - this.d1n_1 | 0) - this.m1n_1.u1q(openIndex) | 0;
    }
    var end = tmp;
    return index > group && index < end;
  };
  protoOf(SlotWriter).q1s = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.x1m_1, address) ? this.y1m_1[dataIndexToDataAddress(this, nodeIndex(this.x1m_1, this, address))] : null;
  };
  protoOf(SlotWriter).u27 = function (anchor) {
    return this.q1s(anchor.v27(this));
  };
  protoOf(SlotWriter).a1o = function (index) {
    return parent(this.x1m_1, this, index);
  };
  protoOf(SlotWriter).m1o = function (normalClose) {
    this.s1n_1 = true;
    if (normalClose && this.l1n_1.p()) {
      moveGroupGapTo(this, this.u26());
      moveSlotGapTo(this, this.y1m_1.length - this.h1n_1 | 0, this.c1n_1);
      clearSlotGap(this);
      recalculateMarks(this);
    }
    this.w1m_1.r26(this, this.x1m_1, this.c1n_1, this.y1m_1, this.g1n_1, this.z1m_1, this.a1n_1, this.b1n_1);
  };
  protoOf(SlotWriter).w27 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1n_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      var tmp$ret$0 = 'Cannot reset when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    recalculateMarks(this);
    this.p1n_1 = 0;
    this.q1n_1 = _get_capacity__a9k9f3(this) - this.d1n_1 | 0;
    this.e1n_1 = 0;
    this.f1n_1 = 0;
    this.k1n_1 = 0;
  };
  protoOf(SlotWriter).e1v = function (value) {
    if (this.j1n_1 > 0 && !(this.e1n_1 === this.g1n_1)) {
      var tmp0_elvis_lhs = this.o1n_1;
      // Inline function 'kotlin.also' call
      var this_0 = tmp0_elvis_lhs == null ? new MutableIntObjectMap() : tmp0_elvis_lhs;
      // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
      this.o1n_1 = this_0;
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var key = this.r1n_1;
      var tmp0_elvis_lhs_0 = this_0.o(key);
      var tmp;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'androidx.compose.runtime.SlotWriter.update.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_1 = new MutableObjectList();
        // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut.<anonymous>' call
        this_0.f1c(key, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs_0;
      }
      var deferred = tmp;
      deferred.e(value);
      return Companion_getInstance().r1o_1;
    }
    return rawUpdate(this, value);
  };
  protoOf(SlotWriter).x27 = function (anchor, value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1n_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.appendSlot.<anonymous>' call
      var tmp$ret$0 = 'Can only append a slot if not current inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var previousCurrentSlot = this.e1n_1;
    var previousCurrentSlotEnd = this.f1n_1;
    var anchorIndex = this.q1r(anchor);
    var slotIndex = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, anchorIndex + 1 | 0));
    this.e1n_1 = slotIndex;
    this.f1n_1 = slotIndex;
    insertSlots(this, 1, anchorIndex);
    if (previousCurrentSlot >= slotIndex) {
      previousCurrentSlot = previousCurrentSlot + 1 | 0;
      previousCurrentSlotEnd = previousCurrentSlotEnd + 1 | 0;
    }
    this.y1m_1[slotIndex] = value;
    this.e1n_1 = previousCurrentSlot;
    this.f1n_1 = previousCurrentSlotEnd;
  };
  protoOf(SlotWriter).y27 = function (count) {
    runtimeCheck(count > 0);
    var parent = this.r1n_1;
    var groupSlotStart = slotIndex(this.x1m_1, this, groupIndexToAddress(this, parent));
    var groupSlotEnd = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, parent + 1 | 0));
    var removeStart = groupSlotEnd - count | 0;
    runtimeCheck(removeStart >= groupSlotStart);
    removeSlots(this, removeStart, count, parent);
    var currentSlot = this.e1n_1;
    if (currentSlot >= groupSlotStart) {
      this.e1n_1 = currentSlot - count | 0;
    }
  };
  protoOf(SlotWriter).h27 = function (value) {
    var address = groupIndexToAddress(this, this.p1n_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!hasAux(this.x1m_1, address)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      var tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.y1m_1[dataIndexToDataAddress(this, auxIndex(this.x1m_1, this, address))] = value;
  };
  protoOf(SlotWriter).i1w = function (sourceInformation) {
    if (this.j1n_1 > 0) {
      groupSourceInformationFor(this, this.r1n_1, sourceInformation);
    }
  };
  protoOf(SlotWriter).k1w = function (key, value) {
    if (this.j1n_1 > 0) {
      var tmp0_safe_receiver = this.b1n_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        add_0(tmp0_safe_receiver, key, this.d1o(this.r1n_1));
      }
      var tmp1_safe_receiver = groupSourceInformationFor(this, this.r1n_1, null);
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.z27(key, value, _get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).m1w = function () {
    if (this.j1n_1 > 0) {
      var tmp0_safe_receiver = groupSourceInformationFor(this, this.r1n_1, null);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.a28(_get_currentGroupSlotIndex__p1glxf(this));
      }
    }
  };
  protoOf(SlotWriter).i27 = function (value) {
    return updateNodeOfGroup(this, this.p1n_1, value);
  };
  protoOf(SlotWriter).b28 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.v27(this), value);
  };
  protoOf(SlotWriter).e27 = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.e1n_1 <= this.f1n_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      var tmp$ret$0 = 'Writing to an invalid slot';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.y1m_1[dataIndexToDataAddress(this, this.e1n_1 - 1 | 0)] = value;
  };
  protoOf(SlotWriter).c28 = function (index, value) {
    return this.d28(this.p1n_1, index, value);
  };
  protoOf(SlotWriter).e28 = function (group, index) {
    var address = groupIndexToAddress(this, group);
    var slotsStart = slotIndex(this.x1m_1, this, address);
    var slotsEnd = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, group + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(slotsIndex >= slotsStart && slotsIndex < slotsEnd)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.slotIndexOfGroupSlotIndex.<anonymous>' call
      var tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + group;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    return slotsIndex;
  };
  protoOf(SlotWriter).d28 = function (group, index, value) {
    var slotsIndex = this.e28(group, index);
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.y1m_1[slotAddress];
    this.y1m_1[slotAddress] = value;
    return result;
  };
  protoOf(SlotWriter).d27 = function () {
    if (this.j1n_1 > 0) {
      insertSlots(this, 1, this.r1n_1);
    }
    var tmp = this.y1m_1;
    var tmp1 = this.e1n_1;
    this.e1n_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  protoOf(SlotWriter).d22 = function (anchor, index) {
    return this.f28(this.q1r(anchor), index);
  };
  protoOf(SlotWriter).f28 = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.x1m_1, this, address);
    var slotsEnd = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance().r1o_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.y1m_1[slotAddress];
  };
  protoOf(SlotWriter).g27 = function (groupIndex) {
    return slotIndex(this.x1m_1, this, groupIndexToAddress(this, groupIndex));
  };
  protoOf(SlotWriter).g28 = function (groupIndex) {
    return dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
  };
  protoOf(SlotWriter).w1w = function (groupIndex) {
    return dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, groupIndex + this.z1p(groupIndex) | 0));
  };
  protoOf(SlotWriter).c27 = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(amount >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$0 = 'Cannot seek backwards';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1n_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$1 = 'Cannot call seek() while inserting';
      throwIllegalStateException(tmp$ret$1);
    }
    if (amount === 0)
      return Unit_instance;
    var index = this.p1n_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= this.r1n_1 && index <= this.q1n_1)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      var tmp$ret$2 = 'Cannot seek outside the current group (' + this.r1n_1 + '-' + this.q1n_1 + ')';
      composeImmediateRuntimeError(tmp$ret$2);
    }
    this.p1n_1 = index;
    var newSlot = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, index));
    this.e1n_1 = newSlot;
    this.f1n_1 = newSlot;
  };
  protoOf(SlotWriter).i1o = function () {
    var newGroup = this.q1n_1;
    this.p1n_1 = newGroup;
    this.e1n_1 = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, newGroup));
  };
  protoOf(SlotWriter).i1p = function () {
    var tmp1 = this.j1n_1;
    this.j1n_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).o1q = function () {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1n_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end insert';
      throwIllegalStateException(tmp$ret$0);
    }
    this.j1n_1 = this.j1n_1 - 1 | 0;
    if (this.j1n_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.n1n_1.j() === this.l1n_1.j())) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        var tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        composeImmediateRuntimeError(tmp$ret$1);
      }
      restoreCurrentGroupEnd(this);
    }
  };
  protoOf(SlotWriter).p1o = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1n_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      var tmp$ret$0 = 'Key must be supplied when inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    startGroup_1(this, 0, Companion_getInstance().r1o_1, false, Companion_getInstance().r1o_1);
  };
  protoOf(SlotWriter).t1o = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance().r1o_1);
  };
  protoOf(SlotWriter).v1o = function (key, objectKey) {
    return startGroup_1(this, key, objectKey, true, Companion_getInstance().r1o_1);
  };
  protoOf(SlotWriter).u1o = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  protoOf(SlotWriter).n1q = function () {
    var inserting = this.j1n_1 > 0;
    var currentGroup = this.p1n_1;
    var currentGroupEnd = this.q1n_1;
    var groupIndex = this.r1n_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.k1n_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.x1m_1, groupAddress);
    if (inserting) {
      var deferredSlotWrites = this.o1n_1;
      var tmp1_safe_receiver = deferredSlotWrites == null ? null : deferredSlotWrites.o(groupIndex);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        // Inline function 'androidx.collection.ObjectList.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var content = tmp1_safe_receiver.h1d_1;
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.i1d_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp = content[i];
            // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>.<anonymous>' call
            var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
            rawUpdate(this, value);
          }
           while (inductionVariable < last);
        deferredSlotWrites.g1c(groupIndex);
      }
      updateGroupSize(this.x1m_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.x1m_1, groupAddress, newNodes);
      this.k1n_1 = this.n1n_1.s1m() + (isNode_0 ? 1 : newNodes) | 0;
      this.r1n_1 = parent(this.x1m_1, this, groupIndex);
      var nextAddress = this.r1n_1 < 0 ? this.u26() : groupIndexToAddress(this, this.r1n_1 + 1 | 0);
      var newCurrentSlot = nextAddress < 0 ? 0 : dataIndex_0(this.x1m_1, this, nextAddress);
      this.e1n_1 = newCurrentSlot;
      this.f1n_1 = newCurrentSlot;
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(currentGroup === currentGroupEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        var tmp$ret$2 = 'Expected to be at the end of a group';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      var oldGroupSize = groupSize(this.x1m_1, groupAddress);
      var oldNodes = nodeCount(this.x1m_1, groupAddress);
      updateGroupSize(this.x1m_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.x1m_1, groupAddress, newNodes);
      var newParent = this.l1n_1.s1m();
      restoreCurrentGroupEnd(this);
      this.r1n_1 = newParent;
      var groupParent = parent(this.x1m_1, this, groupIndex);
      this.k1n_1 = this.n1n_1.s1m();
      if (groupParent === newParent) {
        this.k1n_1 = this.k1n_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) || !(nodesDelta === 0)) {
          var current = groupParent;
          while (!(current === 0) && !(current === newParent) && (!(nodesDelta === 0) || !(groupSizeDelta === 0))) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.x1m_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.x1m_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.x1m_1, currentAddress, nodeCount(this.x1m_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.x1m_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.x1m_1, this, current);
          }
        }
        this.k1n_1 = this.k1n_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  protoOf(SlotWriter).h28 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1n_1 <= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      var tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var parent = this.r1n_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(index >= parent && index < this.q1n_1)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        var tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        composeImmediateRuntimeError(tmp$ret$1);
      }
      var oldCurrent = this.p1n_1;
      var oldCurrentSlot = this.e1n_1;
      var oldCurrentSlotEnd = this.f1n_1;
      this.p1n_1 = index;
      this.p1o();
      this.p1n_1 = oldCurrent;
      this.e1n_1 = oldCurrentSlot;
      this.f1n_1 = oldCurrentSlotEnd;
    }
  };
  protoOf(SlotWriter).i28 = function (anchor) {
    return this.h28(anchor.v27(this));
  };
  protoOf(SlotWriter).x1n = function () {
    var groupAddress = groupIndexToAddress(this, this.p1n_1);
    var newGroup = this.p1n_1 + groupSize(this.x1m_1, groupAddress) | 0;
    this.p1n_1 = newGroup;
    this.e1n_1 = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.x1m_1, groupAddress) ? 1 : nodeCount(this.x1m_1, groupAddress);
  };
  protoOf(SlotWriter).a1x = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1n_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot remove group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var oldGroup = this.p1n_1;
    var oldSlot = this.e1n_1;
    var dataStart = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, oldGroup));
    var count = this.x1n();
    var tmp0_safe_receiver = sourceInformationOf(this, this.r1n_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      var tmp0_safe_receiver_0 = this.m27(oldGroup);
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>.<anonymous>' call
        tmp = tmp0_safe_receiver.j28(tmp0_safe_receiver_0);
      }
    }
    var tmp1_safe_receiver = this.t1n_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      while (tmp1_safe_receiver.l1f() && tmp1_safe_receiver.l1u() >= oldGroup) {
        tmp1_safe_receiver.k27();
      }
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.p1n_1 - oldGroup | 0);
    removeSlots(this, dataStart, this.e1n_1 - dataStart | 0, oldGroup - 1 | 0);
    this.p1n_1 = oldGroup;
    this.e1n_1 = oldSlot;
    this.k1n_1 = this.k1n_1 - count | 0;
    return anchorsRemoved;
  };
  protoOf(SlotWriter).k28 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j1n_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot move a group while inserting';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(offset >= 0)) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$1 = 'Parameter offset is out of bounds';
      composeImmediateRuntimeError(tmp$ret$1);
    }
    if (offset === 0)
      return Unit_instance;
    var current = this.p1n_1;
    var parent = this.r1n_1;
    var parentEnd = this.q1n_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.x1m_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(groupToMove <= parentEnd)) {
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        var tmp$ret$2 = 'Parameter offset is out of bounds';
        composeImmediateRuntimeError(tmp$ret$2);
      }
      count = count - 1 | 0;
    }
    var moveLen = groupSize(this.x1m_1, groupIndexToAddress(this, groupToMove));
    var destinationSlot = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, this.p1n_1));
    var dataStart = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.x1m_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    // Inline function 'kotlin.math.max' call
    var a = this.p1n_1 - 1 | 0;
    var tmp$ret$3 = Math.max(a, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.x1m_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    var tmp7 = imul(currentAddress, 5);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = moveLocationOffset + imul(moveLen, 5) | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = groups;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, groups, tmp7, moveLocationOffset, endIndex);
    if (moveDataLen > 0) {
      var slots = this.y1m_1;
      var tmp13 = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex_0 = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, destinationSlot, tmp13, endIndex_0);
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - destinationSlot | 0;
    var slotsGapStart = this.g1n_1;
    var slotsGapLen = this.h1n_1;
    var slotsCapacity = this.y1m_1.length;
    var slotsGapOwner = this.i1n_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!anchorsRemoved) {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      var tmp$ret$10 = 'Unexpectedly removed anchors';
      composeImmediateRuntimeError(tmp$ret$10);
    }
    fixParentAnchorsFor(this, parent, this.q1n_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  protoOf(SlotWriter).l28 = function (anchor, offset, writer) {
    runtimeCheck(writer.j1n_1 > 0);
    runtimeCheck(this.j1n_1 === 0);
    runtimeCheck(anchor.x1w());
    var location = this.q1r(anchor) + offset | 0;
    var currentGroup = this.p1n_1;
    runtimeCheck(currentGroup <= location ? location < this.q1n_1 : false);
    var parent = this.a1o(location);
    var size = this.z1p(location);
    var nodes = this.v1q(location) ? 1 : this.w1q(location);
    var result = moveGroup$default(Companion_instance_4, this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.x1m_1, currentAddress, groupSize(this.x1m_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.x1m_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.x1m_1, currentAddress, nodeCount(this.x1m_1, currentAddress) - nodes | 0);
        }
      }
      current = this.a1o(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.k1n_1 >= nodes);
      this.k1n_1 = this.k1n_1 - nodes | 0;
    }
    return result;
  };
  protoOf(SlotWriter).m28 = function (table, index, removeSourceGroup) {
    runtimeCheck(this.j1n_1 > 0);
    if (index === 0 && this.p1n_1 === 0 && this.w1m_1.t1k_1 === 0 && groupSize(table.s1k_1, index) === table.t1k_1) {
      var myGroups = this.x1m_1;
      var mySlots = this.y1m_1;
      var myAnchors = this.z1m_1;
      var mySourceInformation = this.a1n_1;
      var myCallInformation = this.b1n_1;
      var groups = table.s1k_1;
      var groupsSize = table.t1k_1;
      var slots = table.u1k_1;
      var slotsSize = table.v1k_1;
      var sourceInformation = table.b1l_1;
      var callInformation = table.c1l_1;
      this.x1m_1 = groups;
      this.y1m_1 = slots;
      this.z1m_1 = table.a1l_1;
      this.c1n_1 = groupsSize;
      this.d1n_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.g1n_1 = slotsSize;
      this.h1n_1 = slots.length - slotsSize | 0;
      this.i1n_1 = groupsSize;
      this.a1n_1 = sourceInformation;
      this.b1n_1 = callInformation;
      table.s26(myGroups, 0, mySlots, 0, myAnchors, mySourceInformation, myCallInformation);
      return this.z1m_1;
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.h1o();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = moveGroup(Companion_instance_4, writer, index, this, true, true, removeSourceGroup);
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = this_0;
    }finally {
      writer.m1o(normalClose);
    }
    return tmp;
  };
  protoOf(SlotWriter).n28 = function (offset, table, index) {
    runtimeCheck(this.j1n_1 <= 0 && this.z1p(this.p1n_1 + offset | 0) === 1);
    var previousCurrentGroup = this.p1n_1;
    var previousCurrentSlot = this.e1n_1;
    var previousCurrentSlotEnd = this.f1n_1;
    this.c27(offset);
    this.p1o();
    this.i1p();
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = table.h1o();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      // Inline function 'kotlin.also' call
      var this_0 = moveGroup$default(Companion_instance_4, writer, index, this, false, true);
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = this_0;
    }finally {
      writer.m1o(normalClose);
    }
    var anchors = tmp;
    this.o1q();
    this.n1q();
    this.p1n_1 = previousCurrentGroup;
    this.e1n_1 = previousCurrentSlot;
    this.f1n_1 = previousCurrentSlotEnd;
    return anchors;
  };
  protoOf(SlotWriter).b1o = function (index) {
    var tmp0 = this.z1m_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.u26();
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      var anchor = new Anchor(index <= this.c1n_1 ? index : -(this.u26() - index | 0) | 0);
      tmp0.a2(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.o(location);
    }
    return tmp;
  };
  protoOf(SlotWriter).o28 = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.x1m_1, groupAddress)) {
      updateMark(this.x1m_1, groupAddress, true);
      if (!containsMark(this.x1m_1, groupAddress)) {
        updateContainsMark(this, this.a1o(group));
      }
    }
  };
  protoOf(SlotWriter).f1r = function (group, $super) {
    group = group === VOID ? this.r1n_1 : group;
    var tmp;
    if ($super === VOID) {
      this.o28(group);
      tmp = Unit_instance;
    } else {
      tmp = $super.o28.call(this, group);
    }
    return tmp;
  };
  protoOf(SlotWriter).q1r = function (anchor) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    var it = anchor.j1s_1;
    return it < 0 ? this.u26() + it | 0 : it;
  };
  protoOf(SlotWriter).toString = function () {
    return 'SlotWriter(current = ' + this.p1n_1 + ' end=' + this.q1n_1 + ' size = ' + this.u26() + ' ' + ('gap=' + this.c1n_1 + '-' + (this.c1n_1 + this.d1n_1 | 0) + ')');
  };
  protoOf(SlotWriter).m27 = function (group) {
    return (0 <= group ? group < this.u26() : false) ? find(this.z1m_1, group, this.u26()) : null;
  };
  protoOf(SlotWriter).u26 = function () {
    return _get_capacity__a9k9f3(this) - this.d1n_1 | 0;
  };
  function Anchor(loc) {
    this.j1s_1 = loc;
  }
  protoOf(Anchor).x1w = function () {
    return !(this.j1s_1 === -2147483648);
  };
  protoOf(Anchor).x1v = function (slots) {
    return slots.q1r(this);
  };
  protoOf(Anchor).v27 = function (writer) {
    return writer.q1r(this);
  };
  protoOf(Anchor).toString = function () {
    return anyToString(this) + '{ location = ' + this.j1s_1 + ' }';
  };
  function openInformation($this) {
    var tmp0_safe_receiver = $this.y26_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.fastLastOrNull' call
        var index = tmp0_safe_receiver.j() - 1 | 0;
        while (index >= 0) {
          var value = tmp0_safe_receiver.o(index);
          // Inline function 'androidx.compose.runtime.GroupSourceInformation.openInformation.<anonymous>.<anonymous>' call
          var tmp_0;
          if (value instanceof GroupSourceInformation) {
            tmp_0 = !value.z26_1;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = value;
            break $l$block;
          }
          index = index - 1 | 0;
        }
        tmp$ret$1 = null;
      }
      tmp = tmp$ret$1;
    }
    var tmp_1 = tmp;
    var tmp1_safe_receiver = tmp_1 instanceof GroupSourceInformation ? tmp_1 : null;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : openInformation(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? $this : tmp2_elvis_lhs;
  }
  function add($this, group) {
    var tmp0_elvis_lhs = $this.y26_1;
    var groups = tmp0_elvis_lhs == null ? ArrayList_init_$Create$() : tmp0_elvis_lhs;
    $this.y26_1 = groups;
    groups.e(group);
  }
  function hasAnchor($this, anchor) {
    var tmp0_safe_receiver = $this.y26_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.hasAnchor.<anonymous>' call
            var tmp_0;
            if (equals(item, anchor)) {
              tmp_0 = true;
            } else {
              var tmp_1;
              if (item instanceof GroupSourceInformation) {
                tmp_1 = hasAnchor(item, anchor);
              } else {
                tmp_1 = false;
              }
              tmp_0 = tmp_1;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    return tmp === true;
  }
  function GroupSourceInformation(key, sourceInformation, dataStartOffset) {
    this.v26_1 = key;
    this.w26_1 = sourceInformation;
    this.x26_1 = dataStartOffset;
    this.y26_1 = null;
    this.z26_1 = false;
    this.a27_1 = 0;
  }
  protoOf(GroupSourceInformation).z27 = function (key, sourceInformation, dataOffset) {
    add(openInformation(this), new GroupSourceInformation(key, sourceInformation, dataOffset));
  };
  protoOf(GroupSourceInformation).a28 = function (dataOffset) {
    openInformation(this).hp(dataOffset);
  };
  protoOf(GroupSourceInformation).f27 = function (writer, group) {
    add(openInformation(this), writer.b1o(group));
  };
  protoOf(GroupSourceInformation).p28 = function (table, group) {
    add(openInformation(this), table.b1o(group));
  };
  protoOf(GroupSourceInformation).b27 = function (writer, predecessor, group) {
    var tmp0_elvis_lhs = this.y26_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayList_init_$Create$();
      // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
      this.y26_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var groups = tmp;
    var tmp_0;
    if (predecessor >= 0) {
      var anchor = writer.m27(predecessor);
      var tmp_1;
      if (!(anchor == null)) {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'androidx.compose.runtime.fastIndexOf' call
          var index = 0;
          var size = groups.j();
          while (index < size) {
            var value = groups.o(index);
            // Inline function 'androidx.compose.runtime.GroupSourceInformation.addGroupAfter.<anonymous>' call
            var tmp_2;
            if (equals(value, anchor)) {
              tmp_2 = true;
            } else {
              var tmp_3;
              if (value instanceof GroupSourceInformation) {
                tmp_3 = hasAnchor(value, anchor);
              } else {
                tmp_3 = false;
              }
              tmp_2 = tmp_3;
            }
            if (tmp_2) {
              tmp$ret$2 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$2 = -1;
        }
        tmp_1 = tmp$ret$2;
      } else {
        tmp_1 = 0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = 0;
    }
    var index_0 = tmp_0;
    groups.a2(index_0, writer.b1o(group));
  };
  protoOf(GroupSourceInformation).hp = function (dataOffset) {
    this.z26_1 = true;
    this.a27_1 = dataOffset;
  };
  protoOf(GroupSourceInformation).j28 = function (anchor) {
    var groups = this.y26_1;
    if (!(groups == null)) {
      var index = groups.j() - 1 | 0;
      while (index >= 0) {
        var item = groups.o(index);
        if (item instanceof Anchor) {
          if (equals(item, anchor)) {
            groups.b2(index);
          }
        } else {
          if (item instanceof GroupSourceInformation)
            if (!item.j28(anchor)) {
              groups.b2(index);
            }
        }
        index = index - 1 | 0;
      }
      if (groups.p()) {
        this.y26_1 = null;
        return false;
      }
      return true;
    }
    return true;
  };
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.f1m_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().r1o_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.f1m_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance().r1o_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.f1m_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.c1m_1 = table;
    this.d1m_1 = this.c1m_1.s1k_1;
    this.e1m_1 = this.c1m_1.t1k_1;
    this.f1m_1 = this.c1m_1.u1k_1;
    this.g1m_1 = this.c1m_1.v1k_1;
    this.h1m_1 = null;
    this.i1m_1 = false;
    this.j1m_1 = 0;
    this.k1m_1 = this.e1m_1;
    this.l1m_1 = -1;
    this.m1m_1 = new IntStack();
    this.n1m_1 = 0;
    this.o1m_1 = 0;
    this.p1m_1 = 0;
    this.q1m_1 = false;
  }
  protoOf(SlotReader).j = function () {
    return this.e1m_1;
  };
  protoOf(SlotReader).a1o = function (index) {
    return parentAnchor(this.d1m_1, index);
  };
  protoOf(SlotReader).y1v = function () {
    return isNode(this.d1m_1, this.j1m_1);
  };
  protoOf(SlotReader).v1q = function (index) {
    return isNode(this.d1m_1, index);
  };
  protoOf(SlotReader).w1q = function (index) {
    return nodeCount(this.d1m_1, index);
  };
  protoOf(SlotReader).q1s = function (index) {
    return isNode(this.d1m_1, index) ? node(this.d1m_1, this, index) : null;
  };
  protoOf(SlotReader).f1q = function () {
    return this.q1q() || this.j1m_1 === this.k1m_1;
  };
  protoOf(SlotReader).q1q = function () {
    return this.n1m_1 > 0;
  };
  protoOf(SlotReader).q28 = function () {
    return groupSize(this.d1m_1, this.j1m_1);
  };
  protoOf(SlotReader).z1p = function (index) {
    return groupSize(this.d1m_1, index);
  };
  protoOf(SlotReader).e1q = function () {
    return this.k1m_1;
  };
  protoOf(SlotReader).e1p = function () {
    var tmp;
    if (this.j1m_1 < this.k1m_1) {
      tmp = key(this.d1m_1, this.j1m_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(SlotReader).d1o = function (index) {
    return key(this.d1m_1, index);
  };
  protoOf(SlotReader).a1v = function () {
    return this.o1m_1 - slotAnchor(this.d1m_1, this.l1m_1) | 0;
  };
  protoOf(SlotReader).x1q = function (index) {
    return hasObjectKey(this.d1m_1, index);
  };
  protoOf(SlotReader).a1u = function () {
    return this.j1m_1 < this.k1m_1 && hasObjectKey(this.d1m_1, this.j1m_1);
  };
  protoOf(SlotReader).g1p = function () {
    return this.j1m_1 < this.k1m_1 ? objectKey(this.d1m_1, this, this.j1m_1) : null;
  };
  protoOf(SlotReader).e1o = function (index) {
    return objectKey(this.d1m_1, this, index);
  };
  protoOf(SlotReader).o1o = function () {
    return this.j1m_1 < this.k1m_1 ? aux(this.d1m_1, this, this.j1m_1) : 0;
  };
  protoOf(SlotReader).c1o = function (index) {
    return aux(this.d1m_1, this, index);
  };
  protoOf(SlotReader).o1t = function (index) {
    return hasMark(this.d1m_1, index);
  };
  protoOf(SlotReader).y1s = function (index) {
    return containsMark(this.d1m_1, index);
  };
  protoOf(SlotReader).z1q = function () {
    return this.l1m_1 >= 0 ? nodeCount(this.d1m_1, this.l1m_1) : 0;
  };
  protoOf(SlotReader).h1q = function () {
    return this.p1m_1 - this.o1m_1 | 0;
  };
  protoOf(SlotReader).z1s = function (group, index) {
    var start = slotAnchor(this.d1m_1, group);
    var next = group + 1 | 0;
    var end = next < this.e1m_1 ? dataAnchor(this.d1m_1, next) : this.g1m_1;
    var address = start + index | 0;
    return address < end ? this.f1m_1[address] : Companion_getInstance().r1o_1;
  };
  protoOf(SlotReader).i = function () {
    if (this.n1m_1 > 0 || this.o1m_1 >= this.p1m_1) {
      this.q1m_1 = false;
      return Companion_getInstance().r1o_1;
    }
    this.q1m_1 = true;
    var tmp1 = this.o1m_1;
    this.o1m_1 = tmp1 + 1 | 0;
    return this.f1m_1[tmp1];
  };
  protoOf(SlotReader).s1o = function () {
    this.n1m_1 = this.n1m_1 + 1 | 0;
  };
  protoOf(SlotReader).m1q = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n1m_1 > 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      var tmp$ret$0 = 'Unbalanced begin/end empty';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.n1m_1 = this.n1m_1 - 1 | 0;
  };
  protoOf(SlotReader).r1m = function () {
    this.i1m_1 = true;
    this.c1m_1.q26(this, this.h1m_1);
  };
  protoOf(SlotReader).p1o = function () {
    if (this.n1m_1 <= 0) {
      var parent = this.l1m_1;
      var currentGroup = this.j1m_1;
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(parentAnchor(this.d1m_1, currentGroup) === parent)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        var tmp$ret$0 = 'Invalid slot table detected';
        throwIllegalArgumentException(tmp$ret$0);
      }
      var tmp0_safe_receiver = this.h1m_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h2(this.b1o(parent));
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.p28(this.c1m_1, currentGroup);
      }
      var currentSlotStack = this.m1m_1;
      var currentSlot = this.o1m_1;
      var currentEndSlot = this.p1m_1;
      if (currentSlot === 0 && currentEndSlot === 0) {
        currentSlotStack.i1l(-1);
      } else {
        currentSlotStack.i1l(currentSlot);
      }
      this.l1m_1 = currentGroup;
      this.k1m_1 = currentGroup + groupSize(this.d1m_1, currentGroup) | 0;
      this.j1m_1 = currentGroup + 1 | 0;
      this.o1m_1 = slotAnchor(this.d1m_1, currentGroup);
      this.p1m_1 = currentGroup >= (this.e1m_1 - 1 | 0) ? this.g1m_1 : dataAnchor(this.d1m_1, currentGroup + 1 | 0);
    }
  };
  protoOf(SlotReader).q1o = function () {
    if (this.n1m_1 <= 0) {
      // Inline function 'androidx.compose.runtime.requirePrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isNode(this.d1m_1, this.j1m_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        var tmp$ret$0 = 'Expected a node group';
        throwIllegalArgumentException(tmp$ret$0);
      }
      this.p1o();
    }
  };
  protoOf(SlotReader).x1n = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n1m_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var count = isNode(this.d1m_1, this.j1m_1) ? 1 : nodeCount(this.d1m_1, this.j1m_1);
    this.j1m_1 = this.j1m_1 + groupSize(this.d1m_1, this.j1m_1) | 0;
    return count;
  };
  protoOf(SlotReader).i1o = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n1m_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      var tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.j1m_1 = this.k1m_1;
    this.o1m_1 = 0;
    this.p1m_1 = 0;
  };
  protoOf(SlotReader).s1p = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.n1m_1 === 0)) {
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      var tmp$ret$0 = 'Cannot reposition while in an empty region';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.j1m_1 = index;
    var parent = index < this.e1m_1 ? parentAnchor(this.d1m_1, index) : -1;
    this.l1m_1 = parent;
    if (parent < 0)
      this.k1m_1 = this.e1m_1;
    else
      this.k1m_1 = parent + groupSize(this.d1m_1, parent) | 0;
    this.o1m_1 = 0;
    this.p1m_1 = 0;
  };
  protoOf(SlotReader).t1q = function (index) {
    var newCurrentEnd = index + groupSize(this.d1m_1, index) | 0;
    var current = this.j1m_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(current >= index && current <= newCurrentEnd)) {
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      var tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.l1m_1 = index;
    this.k1m_1 = newCurrentEnd;
    this.o1m_1 = 0;
    this.p1m_1 = 0;
  };
  protoOf(SlotReader).k1q = function () {
    if (this.n1m_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.j1m_1 === this.k1m_1)) {
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        var tmp$ret$0 = 'endGroup() not called at the end of a group';
        composeImmediateRuntimeError(tmp$ret$0);
      }
      var parent = parentAnchor(this.d1m_1, this.l1m_1);
      this.l1m_1 = parent;
      this.k1m_1 = parent < 0 ? this.e1m_1 : parent + groupSize(this.d1m_1, parent) | 0;
      var currentSlotStack = this.m1m_1;
      var newCurrentSlot = currentSlotStack.s1m();
      if (newCurrentSlot < 0) {
        this.o1m_1 = 0;
        this.p1m_1 = 0;
      } else {
        this.o1m_1 = newCurrentSlot;
        this.p1m_1 = parent >= (this.e1m_1 - 1 | 0) ? this.g1m_1 : dataAnchor(this.d1m_1, parent + 1 | 0);
      }
    }
  };
  protoOf(SlotReader).f1p = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    if (this.n1m_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.j1m_1;
    while (childIndex < this.k1m_1) {
      var tmp = key(this.d1m_1, childIndex);
      var tmp_0 = objectKey(this.d1m_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.d1m_1, childIndex) ? 1 : nodeCount(this.d1m_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.e(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.d1m_1, childIndex) | 0;
    }
    return result;
  };
  protoOf(SlotReader).toString = function () {
    return 'SlotReader(current=' + this.j1m_1 + ', key=' + this.e1p() + ', ' + ('parent=' + this.l1m_1 + ', end=' + this.k1m_1 + ')');
  };
  protoOf(SlotReader).b1o = function (index) {
    var tmp0 = this.c1m_1.a1l_1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var effectiveSize = this.e1m_1;
    var location = search(tmp0, index, effectiveSize);
    var tmp;
    if (location < 0) {
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      var anchor = new Anchor(index);
      tmp0.a2(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0.o(location);
    }
    return tmp;
  };
  function find(_this__u8e3s4, index, effectiveSize) {
    var location = search(_this__u8e3s4, index, effectiveSize);
    return location >= 0 ? _this__u8e3s4.o(location) : null;
  }
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.j() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      var it = _this__u8e3s4.o(mid).j1s_1;
      var midVal = it < 0 ? effectiveSize + it | 0 : it;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function slotAnchor(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 28) | 0;
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    var slot = imul(address, 5);
    return _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 30) | 0;
  }
  function auxIndex_0(_this__u8e3s4, address) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    var slot = imul(address, 5);
    return slot >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[slot + 4 | 0] + countOneBits_0(_this__u8e3s4[slot + 1 | 0] >> 29) | 0;
  }
  function validateRead($this) {
    if (!($this.r28_1.z1k_1 === $this.u28_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.r28_1 = table;
    this.s28_1 = end;
    this.t28_1 = start;
    this.u28_1 = this.r28_1.z1k_1;
    if (this.r28_1.y1k_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  protoOf(GroupIterator).h = function () {
    return this.t28_1 < this.s28_1;
  };
  protoOf(GroupIterator).i = function () {
    validateRead(this);
    var group = this.t28_1;
    this.t28_1 = this.t28_1 + groupSize(this.r28_1.s1k_1, group) | 0;
    return new SlotTableGroup(this.r28_1, group, this.u28_1);
  };
  function validateRead_0($this) {
    if (!($this.v28_1.z1k_1 === $this.x28_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    version = version === VOID ? table.z1k_1 : version;
    this.v28_1 = table;
    this.w28_1 = group;
    this.x28_1 = version;
  }
  protoOf(SlotTableGroup).g = function () {
    validateRead_0(this);
    var tmp0_safe_receiver = this.v28_1.t26(this.w28_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTableGroup.iterator.<anonymous>' call
      tmp = new SourceInformationGroupIterator(this.v28_1, this.w28_1, tmp0_safe_receiver, new AnchoredGroupPath(this.w28_1));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? new GroupIterator(this.v28_1, this.w28_1 + 1 | 0, this.w28_1 + groupSize(this.v28_1.s1k_1, this.w28_1) | 0) : tmp1_elvis_lhs;
  };
  function add_0(_this__u8e3s4, key, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.o(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new MutableIntSet();
      // Inline function 'androidx.compose.runtime.add.<anonymous>' call
      _this__u8e3s4.f1c(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.r1b(value);
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 && value < 67108863);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet(list) {
    var tmp;
    if (list === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$();
    } else {
      tmp = list;
    }
    list = tmp;
    this.j27_1 = list;
  }
  protoOf(PrioritySet).l27 = function (value) {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.j27_1.p()) {
      tmp = this.j27_1.o(0) === value || this.j27_1.o(this.j27_1.j() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_instance;
    var index = this.j27_1.j();
    this.j27_1.e(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.j27_1.o(parent);
      if (value > parentValue) {
        this.j27_1.z1(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.j27_1.z1(index, value);
  };
  protoOf(PrioritySet).l1f = function () {
    // Inline function 'kotlin.collections.isNotEmpty' call
    return !this.j27_1.p();
  };
  protoOf(PrioritySet).l1u = function () {
    return first(this.j27_1);
  };
  protoOf(PrioritySet).k27 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.j27_1.j() > 0)) {
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      var tmp$ret$0 = 'Set is empty';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    var value = this.j27_1.o(0);
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.j27_1.p()) {
        tmp = this.j27_1.o(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.j27_1.z1(0, last(this.j27_1));
      this.j27_1.b2(this.j27_1.j() - 1 | 0);
      var index = 0;
      var size = this.j27_1.j();
      var max = this.j27_1.j() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.j27_1.o(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.j27_1.o(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.j27_1.o(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.j27_1.z1(index, rightValue);
              this.j27_1.z1(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.j27_1.z1(index, leftValue);
          this.j27_1.z1(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    var it = search(_this__u8e3s4, index, effectiveSize);
    return it >= 0 ? it : -(it + 1 | 0) | 0;
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function countOneBits_0(value) {
    switch (value) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.j1p_1 = key;
    this.k1p_1 = objectKey;
    this.l1p_1 = location;
    this.m1p_1 = nodes;
    this.n1p_1 = index;
  }
  function SourceInformationGroupIterator(table, parent, group, path) {
    this.y28_1 = table;
    this.z28_1 = parent;
    this.a29_1 = group;
    this.b29_1 = path;
    this.c29_1 = this.y28_1.z1k_1;
    this.d29_1 = 0;
  }
  protoOf(SourceInformationGroupIterator).h = function () {
    var tmp0_safe_receiver = this.a29_1.y26_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SourceInformationGroupIterator.hasNext.<anonymous>' call
      tmp = this.d29_1 < tmp0_safe_receiver.j();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(SourceInformationGroupIterator).i = function () {
    var tmp2_safe_receiver = this.a29_1.y26_1;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp1 = this.d29_1;
      this.d29_1 = tmp1 + 1 | 0;
      tmp = tmp2_safe_receiver.o(tmp1);
    }
    var group = tmp;
    var tmp_0;
    if (group instanceof Anchor) {
      tmp_0 = new SlotTableGroup(this.y28_1, group.j1s_1, this.c29_1);
    } else {
      if (group instanceof GroupSourceInformation) {
        tmp_0 = new SourceInformationSlotTableGroup(this.y28_1, this.z28_1, group, new RelativeGroupPath(this.b29_1, this.d29_1 - 1 | 0));
      } else {
        composeRuntimeError('Unexpected group information structure');
      }
    }
    return tmp_0;
  };
  function AnchoredGroupPath(group) {
    SourceInformationGroupPath.call(this);
    this.e29_1 = group;
  }
  function SourceInformationGroupPath() {
  }
  function SourceInformationSlotTableGroup(table, parent, sourceInformation, identityPath) {
    this.f29_1 = table;
    this.g29_1 = parent;
    this.h29_1 = sourceInformation;
    this.i29_1 = identityPath;
    this.j29_1 = this.h29_1.v26_1;
    this.k29_1 = this;
  }
  protoOf(SourceInformationSlotTableGroup).g = function () {
    return new SourceInformationGroupIterator(this.f29_1, this.g29_1, this.h29_1, this.i29_1);
  };
  function RelativeGroupPath(parent, index) {
    SourceInformationGroupPath.call(this);
    this.l29_1 = parent;
    this.m29_1 = index;
  }
  function SnapshotMutationPolicy() {
  }
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_instance;
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
  }
  protoOf(StructuralEqualityPolicy).o29 = function (a, b) {
    return equals(a, b);
  };
  protoOf(StructuralEqualityPolicy).b22 = function (a, b) {
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    return this.o29(tmp, (b == null ? true : !(b == null)) ? b : THROW_CCE());
  };
  protoOf(StructuralEqualityPolicy).toString = function () {
    return 'StructuralEqualityPolicy';
  };
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    return StructuralEqualityPolicy_instance;
  }
  function mutableStateOf(value, policy) {
    policy = policy === VOID ? structuralEqualityPolicy() : policy;
    return createSnapshotMutableState(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.r29_1 = myValue;
  }
  protoOf(StateStateRecord).s29 = function (value) {
    var tmp = this;
    tmp.r29_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).r29_1;
  };
  protoOf(StateStateRecord).t29 = function () {
    return new StateStateRecord(this.r29_1);
  };
  function SnapshotMutableStateImpl(value, policy) {
    StateObjectImpl.call(this);
    this.v29_1 = policy;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new StateStateRecord(value);
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>' call
    if (Companion_instance_12.z29()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateStateRecord(value);
      // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.next.<anonymous>.<anonymous>' call
      this_1.x29_1 = 1;
      tmp_0.y29_1 = this_1;
    }
    tmp.w29_1 = this_0;
  }
  protoOf(SnapshotMutableStateImpl).p21 = function () {
    return this.v29_1;
  };
  protoOf(SnapshotMutableStateImpl).o11 = function (value) {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.w29_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.<set-value>.<anonymous>' call
    var it = current(this_0);
    if (!this.p21().b22(it.r29_1, value)) {
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var this_1 = this.w29_1;
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_instance_12.f1h();
      overwritableRecord(this_1, this, snapshot, it).r29_1 = value;
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
    }
    return Unit_instance;
  };
  protoOf(SnapshotMutableStateImpl).e2 = function () {
    return readable_0(this.w29_1, this).r29_1;
  };
  protoOf(SnapshotMutableStateImpl).a2a = function () {
    return this.w29_1;
  };
  protoOf(SnapshotMutableStateImpl).b2a = function (value) {
    var tmp = this;
    tmp.w29_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotMutableStateImpl).c2a = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.p21().b22(currentRecord.r29_1, appliedRecord.r29_1)) {
      tmp = current;
    } else {
      var merged = this.p21().n29(previousRecord.r29_1, currentRecord.r29_1, appliedRecord.r29_1);
      var tmp_0;
      if (!(merged == null)) {
        // Inline function 'kotlin.also' call
        var this_0 = appliedRecord.t29();
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (this_0 instanceof StateStateRecord ? this_0 : THROW_CCE()).r29_1 = merged;
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotMutableStateImpl).toString = function () {
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = this.w29_1;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var it = current(this_0);
    return 'MutableState(value=' + toString_0(it.r29_1) + ')@' + hashCode(this);
  };
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function SnapshotThreadLocal() {
    this.q21_1 = new AtomicReference(get_emptyThreadMap());
    this.r21_1 = new Object();
  }
  protoOf(SnapshotThreadLocal).zo = function () {
    var tmp = this.q21_1.zo().g2a(currentThreadId());
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SnapshotThreadLocal).s21 = function (value) {
    var key = currentThreadId();
    // Inline function 'androidx.compose.runtime.synchronized' call
    this.r21_1;
    // Inline function 'androidx.compose.runtime.SnapshotThreadLocal.set.<anonymous>' call
    var current = this.q21_1.zo();
    if (current.h2a(key, value))
      return Unit_instance;
    this.q21_1.g17(current.i2a(key, value));
  };
  function IntStack() {
    this.g1l_1 = new Int32Array(10);
    this.h1l_1 = 0;
  }
  protoOf(IntStack).j = function () {
    return this.h1l_1;
  };
  protoOf(IntStack).i1l = function (value) {
    if (this.h1l_1 >= this.g1l_1.length) {
      this.g1l_1 = copyOf(this.g1l_1, imul(this.g1l_1.length, 2));
    }
    var tmp = this.g1l_1;
    var tmp1 = this.h1l_1;
    this.h1l_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  protoOf(IntStack).s1m = function () {
    var tmp = this.g1l_1;
    this.h1l_1 = this.h1l_1 - 1 | 0;
    return tmp[this.h1l_1];
  };
  protoOf(IntStack).t27 = function (default_0) {
    return this.h1l_1 > 0 ? this.l1u() : default_0;
  };
  protoOf(IntStack).l1u = function () {
    return this.g1l_1[this.h1l_1 - 1 | 0];
  };
  protoOf(IntStack).v1p = function () {
    return this.g1l_1[this.h1l_1 - 2 | 0];
  };
  protoOf(IntStack).u1q = function (index) {
    return this.g1l_1[index];
  };
  protoOf(IntStack).p = function () {
    return this.h1l_1 === 0;
  };
  protoOf(IntStack).y1 = function () {
    this.h1l_1 = 0;
  };
  protoOf(IntStack).s27 = function (value) {
    var inductionVariable = 0;
    var last = this.h1l_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.g1l_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  function Stack() {
    this.t1m_1 = ArrayList_init_$Create$();
  }
  protoOf(Stack).j = function () {
    return this.t1m_1.j();
  };
  protoOf(Stack).u1p = function (value) {
    return this.t1m_1.e(value);
  };
  protoOf(Stack).s1m = function () {
    return this.t1m_1.b2(this.j() - 1 | 0);
  };
  protoOf(Stack).l1u = function () {
    return this.t1m_1.o(this.j() - 1 | 0);
  };
  protoOf(Stack).u1q = function (index) {
    return this.t1m_1.o(index);
  };
  protoOf(Stack).p = function () {
    return this.t1m_1.p();
  };
  protoOf(Stack).l1f = function () {
    return !this.p();
  };
  protoOf(Stack).y1 = function () {
    return this.t1m_1.y1();
  };
  protoOf(Stack).j5 = function () {
    var tmp = 0;
    var tmp_0 = this.t1m_1.j();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = this.t1m_1.o(tmp_2);
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  function ValueHolder() {
  }
  function _get_current__qcrdxk($this) {
    var tmp0 = $this.j2a_1;
    // Inline function 'kotlin.getValue' call
    current$factory();
    return tmp0.e2();
  }
  function LazyValueHolder(valueProducer) {
    this.j2a_1 = lazy(valueProducer);
  }
  protoOf(LazyValueHolder).o21 = function (map) {
    return _get_current__qcrdxk(this);
  };
  function DynamicValueHolder(state) {
    this.j21_1 = state;
  }
  protoOf(DynamicValueHolder).o21 = function (map) {
    return this.j21_1.e2();
  };
  protoOf(DynamicValueHolder).toString = function () {
    return 'DynamicValueHolder(state=' + toString(this.j21_1) + ')';
  };
  protoOf(DynamicValueHolder).hashCode = function () {
    return hashCode(this.j21_1);
  };
  protoOf(DynamicValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DynamicValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof DynamicValueHolder ? other : THROW_CCE();
    if (!equals(this.j21_1, tmp0_other_with_cast.j21_1))
      return false;
    return true;
  };
  function StaticValueHolder(value) {
    this.i21_1 = value;
  }
  protoOf(StaticValueHolder).o21 = function (map) {
    return this.i21_1;
  };
  protoOf(StaticValueHolder).toString = function () {
    return 'StaticValueHolder(value=' + toString_0(this.i21_1) + ')';
  };
  protoOf(StaticValueHolder).hashCode = function () {
    return this.i21_1 == null ? 0 : hashCode(this.i21_1);
  };
  protoOf(StaticValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.i21_1, tmp0_other_with_cast.i21_1))
      return false;
    return true;
  };
  function ComputedValueHolder(compute) {
    this.h21_1 = compute;
  }
  protoOf(ComputedValueHolder).o21 = function (map) {
    return this.h21_1(map);
  };
  protoOf(ComputedValueHolder).toString = function () {
    return 'ComputedValueHolder(compute=' + toString(this.h21_1) + ')';
  };
  protoOf(ComputedValueHolder).hashCode = function () {
    return hashCode(this.h21_1);
  };
  protoOf(ComputedValueHolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedValueHolder ? other : THROW_CCE();
    if (!equals(this.h21_1, tmp0_other_with_cast.h21_1))
      return false;
    return true;
  };
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function ChangeList() {
    OperationsDebugStringFormattable.call(this);
    this.o1w_1 = new Operations();
  }
  protoOf(ChangeList).p = function () {
    return this.o1w_1.p();
  };
  protoOf(ChangeList).l1f = function () {
    return this.o1w_1.l1f();
  };
  protoOf(ChangeList).y1 = function () {
    this.o1w_1.y1();
  };
  protoOf(ChangeList).b1z = function (applier, slots, rememberManager) {
    return this.o1w_1.s2a(applier, slots, rememberManager);
  };
  protoOf(ChangeList).t2a = function (value) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = Remember_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemember.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    Remember_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).z2a = function (value, groupSlotIndex) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    UpdateValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    UpdateValue_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).a2b = function (value, anchor, groupSlotIndex) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateAnchoredValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAnchoredValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, groupSlotIndex);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).b2b = function (anchor, value) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = AppendValue_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAppendValue.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    AppendValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    AppendValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, value);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).c2b = function (count) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = TrimParentValues_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushTrimValues.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    TrimParentValues_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).d2b = function () {
    this.o1w_1.e2b(ResetSlots_getInstance());
  };
  protoOf(ChangeList).f2b = function (data) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateAuxData_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateAuxData.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    UpdateAuxData_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, data);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).g2b = function () {
    this.o1w_1.e2b(EnsureRootGroupStarted_getInstance());
  };
  protoOf(ChangeList).h2b = function (anchor) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = EnsureGroupStarted_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEnsureGroupStarted.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    EnsureGroupStarted_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).i2b = function () {
    this.o1w_1.e2b(EndCurrentGroup_getInstance());
  };
  protoOf(ChangeList).j2b = function () {
    this.o1w_1.e2b(SkipToEndOfCurrentGroup_getInstance());
  };
  protoOf(ChangeList).k2b = function () {
    this.o1w_1.e2b(RemoveCurrentGroup_getInstance());
  };
  protoOf(ChangeList).l2b = function (anchor, from) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertSlots_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    InsertSlots_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    InsertSlots_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).m2b = function (anchor, from, fixups) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertSlotsWithFixups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushInsertSlots.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, anchor);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    InsertSlotsWithFixups_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, fixups);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).n2b = function (offset) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = MoveCurrentGroup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveCurrentGroup.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    MoveCurrentGroup_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, offset);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).o2b = function (action, composition) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = EndCompositionScope_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushEndCompositionScope.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    EndCompositionScope_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, action);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    EndCompositionScope_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, composition);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).p2b = function (node) {
    if (!(node == null) ? isInterface(node, ComposeNodeLifecycleCallback) : false) {
      this.o1w_1.e2b(UseCurrentNode_getInstance());
    }
  };
  protoOf(ChangeList).q2b = function (value, block) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUpdateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).r2b = function (removeFrom, moveCount) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = RemoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushRemoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    RemoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, removeFrom);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    RemoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, moveCount);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).s2b = function (to, from, count) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = MoveNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushMoveNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    MoveNode_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(1);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, to);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    MoveNode_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, from);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    MoveNode_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$2, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).t2b = function (distance) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = AdvanceSlotsBy_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushAdvanceSlotsBy.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    AdvanceSlotsBy_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, distance);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).u2b = function (count) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = Ups_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushUps.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    Ups_getInstance();
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$0, count);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$5 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$5);
    }
  };
  protoOf(ChangeList).v2b = function (nodes) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(nodes.length === 0)) {
      var tmp1 = this.o1w_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = Downs_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      tmp1.u2a(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDowns.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(tmp1);
      // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
      Downs_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, nodes);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(access$_get_pushedIntMask__wrtr8x(tmp1) === access$createExpectedArgMask(tmp1, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp1) === access$createExpectedArgMask(tmp1, operation.w2a_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.v2a_1;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_0.f8(', ');
              }
              this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_0.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.w2a_1;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_1.f8(', ');
              }
              this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_1.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).w2b = function (effectiveNodeIndexOut, anchor) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = DetermineMovableContentNodeIndex_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushDetermineMovableContentNodeIndex.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, effectiveNodeIndexOut);
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    DetermineMovableContentNodeIndex_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, anchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  protoOf(ChangeList).x2b = function (nodes, effectiveNodeIndex) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!nodes.p()) {
      var tmp1 = this.o1w_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = CopyNodesToNewAnchorLocation_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      tmp1.u2a(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopyNodesToNewAnchorLocation.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(tmp1);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, nodes);
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
      CopyNodesToNewAnchorLocation_getInstance();
      var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(access$_get_pushedIntMask__wrtr8x(tmp1) === access$createExpectedArgMask(tmp1, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp1) === access$createExpectedArgMask(tmp1, operation.w2a_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.v2a_1;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_0.f8(', ');
              }
              this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_0.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.w2a_1;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp1)) === 0)) {
              if (missingIntCount > 0) {
                this_1.f8(', ');
              }
              this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_1.toString();
        var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$7);
      }
    }
  };
  protoOf(ChangeList).y2b = function (resolvedState, parentContext, from, to) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = CopySlotTableToAnchorLocation_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushCopySlotTableToAnchorLocation.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, resolvedState);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(3);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, to);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    CopySlotTableToAnchorLocation_getInstance();
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$3, from);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$8 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$8);
    }
  };
  protoOf(ChangeList).z2b = function (composition, parentContext, reference) {
    var tmp0 = this.o1w_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = ReleaseMovableGroupAtCurrent_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushReleaseMovableGroupAtCurrent.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, composition);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, parentContext);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    ReleaseMovableGroupAtCurrent_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, reference);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
  };
  protoOf(ChangeList).a2c = function () {
    this.o1w_1.e2b(EndMovableContentPlacement_getInstance());
  };
  protoOf(ChangeList).b2c = function (changeList, effectiveNodeIndex) {
    if (changeList.l1f()) {
      var tmp0 = this.o1w_1;
      // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
      var operation = ApplyChangeList_getInstance();
      // Inline function 'kotlin.contracts.contract' call
      tmp0.u2a(operation);
      // Inline function 'androidx.compose.runtime.changelist.ChangeList.pushExecuteOperationsIn.<anonymous>' call
      var $this$push = _WriteScope___init__impl__4xwato(tmp0);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
      ApplyChangeList_getInstance();
      var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, changeList);
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      ApplyChangeList_getInstance();
      var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
      WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$1, effectiveNodeIndex);
      // Inline function 'androidx.compose.runtime.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
        var missingIntCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times = operation.v2a_1;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
              if (missingIntCount > 0) {
                this_0.f8(', ');
              }
              this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
              missingIntCount = missingIntCount + 1 | 0;
            }
          }
           while (inductionVariable < times);
        var missingInts = this_0.toString();
        var missingObjectCount = 0;
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.apply' call
        var this_1 = StringBuilder_init_$Create$();
        // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.repeat' call
        var times_0 = operation.w2a_1;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < times_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
            if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
              if (missingIntCount > 0) {
                this_1.f8(', ');
              }
              this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
              missingObjectCount = missingObjectCount + 1 | 0;
            }
          }
           while (inductionVariable_0 < times_0);
        var missingObjects = this_1.toString();
        var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
        throwIllegalStateException(tmp$ret$6);
      }
    }
  };
  function _get_reader__fd8dw8($this) {
    return $this.p1l_1.h1k_1;
  }
  function pushApplierOperationPreamble($this) {
    pushPendingUpsAndDowns($this);
  }
  function pushSlotEditingOperationPreamble($this) {
    realizeOperationLocation$default($this);
    $this.l1t();
  }
  function pushSlotTableOperationPreamble($this, useParentSlot) {
    realizeOperationLocation($this, useParentSlot);
  }
  function pushSlotTableOperationPreamble$default($this, useParentSlot, $super) {
    useParentSlot = useParentSlot === VOID ? false : useParentSlot;
    return pushSlotTableOperationPreamble($this, useParentSlot);
  }
  function ensureRootStarted($this) {
    if (!$this.r1l_1 && $this.t1l_1) {
      pushSlotTableOperationPreamble$default($this);
      $this.q1l_1.g2b();
      $this.r1l_1 = true;
    }
  }
  function ensureGroupStarted($this, anchor) {
    pushSlotTableOperationPreamble$default($this);
    $this.q1l_1.h2b(anchor);
    $this.r1l_1 = true;
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? _get_reader__fd8dw8($this).l1m_1 : _get_reader__fd8dw8($this).j1m_1;
    var distance = location - $this.u1l_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(distance >= 0)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.realizeOperationLocation.<anonymous>' call
      var tmp$ret$0 = 'Tried to seek backward';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (distance > 0) {
      $this.q1l_1.t2b(distance);
      $this.u1l_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $super) {
    forParent = forParent === VOID ? false : forParent;
    return realizeOperationLocation($this, forParent);
  }
  function realizeNodeMovementOperations($this) {
    if ($this.a1m_1 > 0) {
      if ($this.x1l_1 >= 0) {
        realizeRemoveNode($this, $this.x1l_1, $this.a1m_1);
        $this.x1l_1 = -1;
      } else {
        realizeMoveNode($this, $this.z1l_1, $this.y1l_1, $this.a1m_1);
        $this.y1l_1 = -1;
        $this.z1l_1 = -1;
      }
      $this.a1m_1 = 0;
    }
  }
  function realizeRemoveNode($this, removeFrom, moveCount) {
    pushApplierOperationPreamble($this);
    $this.q1l_1.r2b(removeFrom, moveCount);
  }
  function realizeMoveNode($this, to, from, count) {
    pushApplierOperationPreamble($this);
    $this.q1l_1.s2b(to, from, count);
  }
  function pushPendingUpsAndDowns($this) {
    if ($this.v1l_1 > 0) {
      $this.q1l_1.u2b($this.v1l_1);
      $this.v1l_1 = 0;
    }
    if ($this.w1l_1.l1f()) {
      $this.q1l_1.v2b($this.w1l_1.j5());
      $this.w1l_1.y1();
    }
  }
  function Companion_4() {
    this.c2c_1 = -2;
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function ComposerChangeListWriter(composer, changeList) {
    this.p1l_1 = composer;
    this.q1l_1 = changeList;
    this.r1l_1 = false;
    this.s1l_1 = new IntStack();
    this.t1l_1 = true;
    this.u1l_1 = 0;
    this.v1l_1 = 0;
    this.w1l_1 = new Stack();
    this.x1l_1 = -1;
    this.y1l_1 = -1;
    this.z1l_1 = -1;
    this.a1m_1 = 0;
  }
  protoOf(ComposerChangeListWriter).r1p = function (location) {
    this.u1l_1 = this.u1l_1 + (location - _get_reader__fd8dw8(this).j1m_1 | 0) | 0;
  };
  protoOf(ComposerChangeListWriter).w1r = function (location) {
    this.u1l_1 = location;
  };
  protoOf(ComposerChangeListWriter).l1t = function () {
    if (_get_reader__fd8dw8(this).j() > 0) {
      var reader = _get_reader__fd8dw8(this);
      var location = reader.l1m_1;
      if (!(this.s1l_1.t27(-2) === location)) {
        ensureRootStarted(this);
        if (location > 0) {
          var anchor = reader.b1o(location);
          this.s1l_1.i1l(location);
          ensureGroupStarted(this, anchor);
        }
      }
    }
  };
  protoOf(ComposerChangeListWriter).d1v = function () {
    return (_get_reader__fd8dw8(this).l1m_1 - this.u1l_1 | 0) < 0;
  };
  protoOf(ComposerChangeListWriter).g1v = function (value) {
    this.q1l_1.t2a(value);
  };
  protoOf(ComposerChangeListWriter).b1v = function (value, groupSlotIndex) {
    pushSlotTableOperationPreamble(this, true);
    this.q1l_1.z2a(value, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).c1v = function (value, anchor, groupSlotIndex) {
    this.q1l_1.a2b(value, anchor, groupSlotIndex);
  };
  protoOf(ComposerChangeListWriter).z1u = function (anchor, value) {
    this.q1l_1.b2b(anchor, value);
  };
  protoOf(ComposerChangeListWriter).i1q = function (count) {
    if (count > 0) {
      pushSlotEditingOperationPreamble(this);
      this.q1l_1.c2b(count);
    }
  };
  protoOf(ComposerChangeListWriter).i1r = function () {
    this.q1l_1.d2b();
  };
  protoOf(ComposerChangeListWriter).n1o = function (data) {
    pushSlotTableOperationPreamble$default(this);
    this.q1l_1.f2b(data);
  };
  protoOf(ComposerChangeListWriter).b1m = function () {
    if (this.r1l_1) {
      pushSlotTableOperationPreamble$default(this);
      pushSlotTableOperationPreamble$default(this);
      this.q1l_1.i2b();
      this.r1l_1 = false;
    }
  };
  protoOf(ComposerChangeListWriter).j1q = function () {
    var location = _get_reader__fd8dw8(this).l1m_1;
    var currentStartedGroup = this.s1l_1.t27(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(currentStartedGroup <= location)) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.endCurrentGroup.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    if (this.s1l_1.t27(-1) === location) {
      pushSlotTableOperationPreamble$default(this);
      this.s1l_1.s1m();
      this.q1l_1.i2b();
    }
  };
  protoOf(ComposerChangeListWriter).y1r = function () {
    this.q1l_1.j2b();
  };
  protoOf(ComposerChangeListWriter).t1s = function () {
    pushSlotEditingOperationPreamble(this);
    this.q1l_1.k2b();
    this.u1l_1 = this.u1l_1 + _get_reader__fd8dw8(this).q28() | 0;
  };
  protoOf(ComposerChangeListWriter).s1s = function (anchor, from) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.q1l_1.l2b(anchor, from);
  };
  protoOf(ComposerChangeListWriter).r1s = function (anchor, from, fixups) {
    pushPendingUpsAndDowns(this);
    pushSlotEditingOperationPreamble(this);
    realizeNodeMovementOperations(this);
    this.q1l_1.m2b(anchor, from, fixups);
  };
  protoOf(ComposerChangeListWriter).t1p = function (offset) {
    pushSlotEditingOperationPreamble(this);
    this.q1l_1.n2b(offset);
  };
  protoOf(ComposerChangeListWriter).d1w = function (action, composition) {
    this.q1l_1.o2b(action, composition);
  };
  protoOf(ComposerChangeListWriter).o1u = function (node) {
    pushApplierOperationPreamble(this);
    this.q1l_1.p2b(node);
  };
  protoOf(ComposerChangeListWriter).r1u = function (value, block) {
    pushApplierOperationPreamble(this);
    this.q1l_1.q2b(value, block);
  };
  protoOf(ComposerChangeListWriter).x1p = function (nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(nodeIndex >= 0)) {
        // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.removeNode.<anonymous>' call
        var tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        composeImmediateRuntimeError(tmp$ret$0);
      }
      if (this.x1l_1 === nodeIndex) {
        this.a1m_1 = this.a1m_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.x1l_1 = nodeIndex;
        this.a1m_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).b1q = function (from, to, count) {
    if (count > 0) {
      if (this.a1m_1 > 0 && this.y1l_1 === (from - this.a1m_1 | 0) && this.z1l_1 === (to - this.a1m_1 | 0)) {
        this.a1m_1 = this.a1m_1 + count | 0;
      } else {
        realizeNodeMovementOperations(this);
        this.y1l_1 = from;
        this.z1l_1 = to;
        this.a1m_1 = count;
      }
    }
  };
  protoOf(ComposerChangeListWriter).u1s = function () {
    pushPendingUpsAndDowns(this);
    if (this.r1l_1) {
      this.y1r();
      this.b1m();
    }
  };
  protoOf(ComposerChangeListWriter).d1q = function () {
    realizeNodeMovementOperations(this);
  };
  protoOf(ComposerChangeListWriter).n1t = function (nodeIndex, group) {
    this.d1q();
    pushPendingUpsAndDowns(this);
    var nodeCount = _get_reader__fd8dw8(this).v1q(group) ? 1 : _get_reader__fd8dw8(this).w1q(group);
    if (nodeCount > 0) {
      this.x1p(nodeIndex, nodeCount);
    }
  };
  protoOf(ComposerChangeListWriter).g1q = function () {
    realizeNodeMovementOperations(this);
    if (this.w1l_1.l1f()) {
      this.w1l_1.s1m();
    } else {
      this.v1l_1 = this.v1l_1 + 1 | 0;
    }
  };
  protoOf(ComposerChangeListWriter).y1q = function (node) {
    realizeNodeMovementOperations(this);
    this.w1l_1.u1p(node);
  };
  protoOf(ComposerChangeListWriter).r1r = function (effectiveNodeIndexOut, anchor) {
    pushPendingUpsAndDowns(this);
    this.q1l_1.w2b(effectiveNodeIndexOut, anchor);
  };
  protoOf(ComposerChangeListWriter).u1r = function (nodes, effectiveNodeIndex) {
    this.q1l_1.x2b(nodes, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).v1r = function (resolvedState, parentContext, from, to) {
    this.q1l_1.y2b(resolvedState, parentContext, from, to);
  };
  protoOf(ComposerChangeListWriter).m1t = function (composition, parentContext, reference) {
    this.q1l_1.z2b(composition, parentContext, reference);
  };
  protoOf(ComposerChangeListWriter).z1r = function () {
    this.q1l_1.a2c();
    this.u1l_1 = 0;
  };
  protoOf(ComposerChangeListWriter).x1r = function (other, effectiveNodeIndex) {
    this.q1l_1.b2c(other, effectiveNodeIndex);
  };
  protoOf(ComposerChangeListWriter).w1s = function () {
    pushPendingUpsAndDowns(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.s1l_1.p()) {
      // Inline function 'androidx.compose.runtime.changelist.ComposerChangeListWriter.finalizeComposition.<anonymous>' call
      var tmp$ret$0 = 'Missed recording an endGroup()';
      composeImmediateRuntimeError(tmp$ret$0);
    }
  };
  protoOf(ComposerChangeListWriter).x1s = function () {
    this.r1l_1 = false;
    this.s1l_1.y1();
    this.u1l_1 = 0;
  };
  function FixupList() {
    OperationsDebugStringFormattable.call(this);
    this.u1m_1 = new Operations();
    this.v1m_1 = new Operations();
  }
  protoOf(FixupList).p = function () {
    return this.u1m_1.p();
  };
  protoOf(FixupList).y1 = function () {
    this.v1m_1.y1();
    this.u1m_1.y1();
  };
  protoOf(FixupList).d2c = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.v1m_1.p()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.executeAndFlushAllPendingFixups.<anonymous>' call
      var tmp$ret$0 = 'FixupList has pending fixup operations that were not realized. Were there mismatched insertNode() and endNodeInsert() calls?';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.u1m_1.s2a(applier, slots, rememberManager);
  };
  protoOf(FixupList).m1u = function (factory, insertIndex, groupAnchor) {
    var tmp0 = this.u1m_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = InsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    InsertNodeFixup_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, factory);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    InsertNodeFixup_getInstance();
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push, tmp$ret$1, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    InsertNodeFixup_getInstance();
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$2, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$7 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$7);
    }
    var tmp3 = this.v1m_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation_0 = PostInsertNodeFixup_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp3.u2a(operation_0);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.createAndInsertNode.<anonymous>' call
    var $this$push_0 = _WriteScope___init__impl__4xwato(tmp3);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$8 = _IntParameter___init__impl__oy5xkp(0);
    WriteScope__setInt_impl_yt2o8b($this$push_0, tmp$ret$8, insertIndex);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    PostInsertNodeFixup_getInstance();
    var tmp$ret$9 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push_0, tmp$ret$9, groupAnchor);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp3) === access$createExpectedArgMask(tmp3, operation_0.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp3) === access$createExpectedArgMask(tmp3, operation_0.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_2 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_1 = operation_0.v2a_1;
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < times_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_1 & access$_get_pushedIntMask__wrtr8x(tmp3)) === 0)) {
            if (missingIntCount_0 > 0) {
              this_2.f8(', ');
            }
            this_2.f8(operation_0.x2a(_IntParameter___init__impl__oy5xkp(index_1)));
            missingIntCount_0 = missingIntCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_1 < times_1);
      var missingInts_0 = this_2.toString();
      var missingObjectCount_0 = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_3 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_2 = operation_0.w2a_1;
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < times_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_2 & access$_get_pushedObjectMask__8x586f(tmp3)) === 0)) {
            if (missingIntCount_0 > 0) {
              this_3.f8(', ');
            }
            this_3.f8(operation_0.y2a(_ObjectParameter___init__impl__iyg1ip(index_2)));
            missingObjectCount_0 = missingObjectCount_0 + 1 | 0;
          }
        }
         while (inductionVariable_2 < times_2);
      var missingObjects_0 = this_3.toString();
      var tmp$ret$14 = 'Error while pushing ' + operation_0.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount_0 + ' int arguments (' + missingInts_0 + ') ') + ('and ' + missingObjectCount_0 + ' object arguments (' + missingObjects_0 + ').');
      throwIllegalStateException(tmp$ret$14);
    }
  };
  protoOf(FixupList).l1q = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.v1m_1.l1f()) {
      // Inline function 'androidx.compose.runtime.changelist.FixupList.endNodeInsert.<anonymous>' call
      var tmp$ret$0 = 'Cannot end node insertion, there are no pending operations that can be realized.';
      composeImmediateRuntimeError(tmp$ret$0);
    }
    this.v1m_1.e2c(this.u1m_1);
  };
  protoOf(FixupList).s1u = function (value, block) {
    var tmp0 = this.u1m_1;
    // Inline function 'androidx.compose.runtime.changelist.Operations.push' call
    var operation = UpdateNode_getInstance();
    // Inline function 'kotlin.contracts.contract' call
    tmp0.u2a(operation);
    // Inline function 'androidx.compose.runtime.changelist.FixupList.updateNode.<anonymous>' call
    var $this$push = _WriteScope___init__impl__4xwato(tmp0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    UpdateNode_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    WriteScope__setObject_impl_rr41y9($this$push, tmp$ret$0, value);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    UpdateNode_getInstance();
    var tmp = _ObjectParameter___init__impl__iyg1ip(1);
    WriteScope__setObject_impl_rr41y9($this$push, tmp, typeof block === 'function' ? block : THROW_CCE());
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(access$_get_pushedIntMask__wrtr8x(tmp0) === access$createExpectedArgMask(tmp0, operation.v2a_1) && access$_get_pushedObjectMask__8x586f(tmp0) === access$createExpectedArgMask(tmp0, operation.w2a_1))) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var missingIntCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times = operation.v2a_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index & access$_get_pushedIntMask__wrtr8x(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_0.f8(', ');
            }
            this_0.f8(operation.x2a(_IntParameter___init__impl__oy5xkp(index)));
            missingIntCount = missingIntCount + 1 | 0;
          }
        }
         while (inductionVariable < times);
      var missingInts = this_0.toString();
      var missingObjectCount = 0;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.repeat' call
      var times_0 = operation.w2a_1;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < times_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>.<anonymous>.<anonymous>' call
          if (!((1 << index_0 & access$_get_pushedObjectMask__8x586f(tmp0)) === 0)) {
            if (missingIntCount > 0) {
              this_1.f8(', ');
            }
            this_1.f8(operation.y2a(_ObjectParameter___init__impl__iyg1ip(index_0)));
            missingObjectCount = missingObjectCount + 1 | 0;
          }
        }
         while (inductionVariable_0 < times_0);
      var missingObjects = this_1.toString();
      var tmp$ret$6 = 'Error while pushing ' + operation.toString() + '. Not all arguments were provided. ' + ('Missing ' + missingIntCount + ' int arguments (' + missingInts + ') ') + ('and ' + missingObjectCount + ' object arguments (' + missingObjects + ').');
      throwIllegalStateException(tmp$ret$6);
    }
  };
  function _IntParameter___init__impl__oy5xkp(offset) {
    return offset;
  }
  function _IntParameter___get_offset__impl__xsdcin($this) {
    return $this;
  }
  function _ObjectParameter___init__impl__iyg1ip(offset) {
    return offset;
  }
  function _ObjectParameter___get_offset__impl__x7fx93($this) {
    return $this;
  }
  function Ups() {
    Ups_instance = this;
    Operation.call(this, 1);
  }
  protoOf(Ups).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).x2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Ups).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Ups.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.i2c(tmp$ret$0);
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Ups.execute.<anonymous>' call
        applier.j1h();
      }
       while (inductionVariable < times);
  };
  var Ups_instance;
  function Ups_getInstance() {
    if (Ups_instance == null)
      new Ups();
    return Ups_instance;
  }
  function Downs() {
    Downs_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Downs).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'nodes';
    } else {
      tmp = protoOf(Operation).y2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Downs).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    // Inline function 'androidx.compose.runtime.changelist.Downs.Nodes' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var nodes = _this__u8e3s4.m2c(tmp$ret$0);
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        nodeApplier.i1h(nodes[index]);
      }
       while (inductionVariable <= last);
  };
  var Downs_instance;
  function Downs_getInstance() {
    if (Downs_instance == null)
      new Downs();
    return Downs_instance;
  }
  function AdvanceSlotsBy() {
    AdvanceSlotsBy_instance = this;
    Operation.call(this, 1);
  }
  protoOf(AdvanceSlotsBy).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'distance';
    } else {
      tmp = protoOf(Operation).x2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(AdvanceSlotsBy).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AdvanceSlotsBy.Distance' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.c27(_this__u8e3s4.i2c(tmp$ret$0));
  };
  var AdvanceSlotsBy_instance;
  function AdvanceSlotsBy_getInstance() {
    if (AdvanceSlotsBy_instance == null)
      new AdvanceSlotsBy();
    return AdvanceSlotsBy_instance;
  }
  function Remember() {
    Remember_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(Remember).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).y2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(Remember).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Remember.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    rememberManager.m1z(_this__u8e3s4.m2c(tmp$ret$0));
  };
  var Remember_instance;
  function Remember_getInstance() {
    if (Remember_instance == null)
      new Remember();
    return Remember_instance;
  }
  function AppendValue() {
    AppendValue_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(AppendValue).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'value';
      } else {
        tmp = protoOf(Operation).y2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(AppendValue).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.AppendValue.Value' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var value = _this__u8e3s4.m2c(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.m1z(value.u1u_1);
    }
    slots.x27(anchor, value);
  };
  var AppendValue_instance;
  function AppendValue_getInstance() {
    if (AppendValue_instance == null)
      new AppendValue();
    return AppendValue_instance;
  }
  function TrimParentValues() {
    TrimParentValues_instance = this;
    Operation.call(this, 1);
  }
  protoOf(TrimParentValues).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'count';
    } else {
      tmp = protoOf(Operation).x2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(TrimParentValues).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.Count' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var count = _this__u8e3s4.i2c(tmp$ret$0);
    var slotsSize = slots.u1w();
    // Inline function 'androidx.compose.runtime.SlotWriter.forEachTailSlot' call
    var groupIndex = slots.r1n_1;
    var slotsStart = slots.g27(groupIndex);
    var slotsEnd = slots.g28(groupIndex);
    // Inline function 'kotlin.math.max' call
    var b = slotsEnd - count | 0;
    var inductionVariable = Math.max(slotsStart, b);
    if (inductionVariable < slotsEnd)
      do {
        var slotIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.TrimParentValues.execute.<anonymous>' call
        var value = access$_get_slots__7x4q9w(slots)[access$dataIndexToDataAddress(slots, slotIndex)];
        if (value instanceof RememberObserverHolder) {
          var endRelativeOrder = slotsSize - slotIndex | 0;
          rememberManager.y1w(value.u1u_1, endRelativeOrder, -1, -1);
        } else {
          if (value instanceof RecomposeScopeImpl) {
            value.z1w();
          }
        }
      }
       while (inductionVariable < slotsEnd);
    slots.y27(count);
  };
  var TrimParentValues_instance;
  function TrimParentValues_getInstance() {
    if (TrimParentValues_instance == null)
      new TrimParentValues();
    return TrimParentValues_instance;
  }
  function UpdateValue() {
    UpdateValue_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(UpdateValue).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).x2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      tmp = protoOf(Operation).y2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateValue).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateValue.GroupSlotIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.i2c(tmp$ret$1);
    if (value instanceof RememberObserverHolder) {
      rememberManager.m1z(value.u1u_1);
    }
    var previous = slots.c28(groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeOrder = slots.u1w() - slots.e28(slots.p1n_1, groupSlotIndex) | 0;
      rememberManager.y1w(previous.u1u_1, endRelativeOrder, -1, -1);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.z1w();
      }
    }
  };
  var UpdateValue_instance;
  function UpdateValue_getInstance() {
    if (UpdateValue_instance == null)
      new UpdateValue();
    return UpdateValue_instance;
  }
  function UpdateAnchoredValue() {
    UpdateAnchoredValue_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(UpdateAnchoredValue).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'groupSlotIndex';
    } else {
      tmp = protoOf(Operation).x2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
      UpdateAnchoredValue_getInstance();
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).y2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateAnchoredValue).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Value' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.Anchor' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var anchor = _this__u8e3s4.m2c(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.GroupSlotIndex' call
    UpdateAnchoredValue_getInstance();
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var groupSlotIndex = _this__u8e3s4.i2c(tmp$ret$2);
    if (value instanceof RememberObserverHolder) {
      rememberManager.m1z(value.u1u_1);
    }
    var groupIndex = slots.q1r(anchor);
    var previous = slots.d28(groupIndex, groupSlotIndex, value);
    if (previous instanceof RememberObserverHolder) {
      var endRelativeSlotOrder = slots.u1w() - slots.e28(groupIndex, groupSlotIndex) | 0;
      // Inline function 'androidx.compose.runtime.withAfterAnchorInfo' call
      var anchor_0 = previous.v1u_1;
      var priority = -1;
      var endRelativeAfter = -1;
      if (!(anchor_0 == null) && anchor_0.x1w()) {
        priority = slots.q1r(anchor_0);
        endRelativeAfter = slots.u1w() - slots.w1w(priority) | 0;
      }
      var tmp5 = priority;
      // Inline function 'androidx.compose.runtime.changelist.UpdateAnchoredValue.execute.<anonymous>' call
      var endRelativeAfter_0 = endRelativeAfter;
      rememberManager.y1w(previous.u1u_1, endRelativeSlotOrder, tmp5, endRelativeAfter_0);
    } else {
      if (previous instanceof RecomposeScopeImpl) {
        previous.z1w();
      }
    }
  };
  var UpdateAnchoredValue_instance;
  function UpdateAnchoredValue_getInstance() {
    if (UpdateAnchoredValue_instance == null)
      new UpdateAnchoredValue();
    return UpdateAnchoredValue_instance;
  }
  function UpdateAuxData() {
    UpdateAuxData_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(UpdateAuxData).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'data';
    } else {
      tmp = protoOf(Operation).y2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(UpdateAuxData).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateAuxData.Data' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.h27(_this__u8e3s4.m2c(tmp$ret$0));
  };
  var UpdateAuxData_instance;
  function UpdateAuxData_getInstance() {
    if (UpdateAuxData_instance == null)
      new UpdateAuxData();
    return UpdateAuxData_instance;
  }
  function EnsureRootGroupStarted() {
    EnsureRootGroupStarted_instance = this;
    Operation.call(this);
  }
  protoOf(EnsureRootGroupStarted).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.h28(0);
  };
  var EnsureRootGroupStarted_instance;
  function EnsureRootGroupStarted_getInstance() {
    if (EnsureRootGroupStarted_instance == null)
      new EnsureRootGroupStarted();
    return EnsureRootGroupStarted_instance;
  }
  function EnsureGroupStarted() {
    EnsureGroupStarted_instance = this;
    Operation.call(this, VOID, 1);
  }
  protoOf(EnsureGroupStarted).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      tmp = protoOf(Operation).y2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(EnsureGroupStarted).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EnsureGroupStarted.Anchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    slots.i28(_this__u8e3s4.m2c(tmp$ret$0));
  };
  var EnsureGroupStarted_instance;
  function EnsureGroupStarted_getInstance() {
    if (EnsureGroupStarted_instance == null)
      new EnsureGroupStarted();
    return EnsureGroupStarted_instance;
  }
  function RemoveCurrentGroup() {
    RemoveCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(RemoveCurrentGroup).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    removeCurrentGroup(slots, rememberManager);
  };
  var RemoveCurrentGroup_instance;
  function RemoveCurrentGroup_getInstance() {
    if (RemoveCurrentGroup_instance == null)
      new RemoveCurrentGroup();
    return RemoveCurrentGroup_instance;
  }
  function MoveCurrentGroup() {
    MoveCurrentGroup_instance = this;
    Operation.call(this, 1);
  }
  protoOf(MoveCurrentGroup).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'offset';
    } else {
      tmp = protoOf(Operation).x2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(MoveCurrentGroup).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveCurrentGroup.Offset' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    slots.k28(_this__u8e3s4.i2c(tmp$ret$0));
  };
  var MoveCurrentGroup_instance;
  function MoveCurrentGroup_getInstance() {
    if (MoveCurrentGroup_instance == null)
      new MoveCurrentGroup();
    return MoveCurrentGroup_instance;
  }
  function EndCurrentGroup() {
    EndCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(EndCurrentGroup).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.n1q();
  };
  var EndCurrentGroup_instance;
  function EndCurrentGroup_getInstance() {
    if (EndCurrentGroup_instance == null)
      new EndCurrentGroup();
    return EndCurrentGroup_instance;
  }
  function SkipToEndOfCurrentGroup() {
    SkipToEndOfCurrentGroup_instance = this;
    Operation.call(this);
  }
  protoOf(SkipToEndOfCurrentGroup).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.i1o();
  };
  var SkipToEndOfCurrentGroup_instance;
  function SkipToEndOfCurrentGroup_getInstance() {
    if (SkipToEndOfCurrentGroup_instance == null)
      new SkipToEndOfCurrentGroup();
    return SkipToEndOfCurrentGroup_instance;
  }
  function EndCompositionScope() {
    EndCompositionScope_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(EndCompositionScope).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'composition';
      } else {
        tmp = protoOf(Operation).y2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(EndCompositionScope).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Action' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var action = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.EndCompositionScope.Composition' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var composition = _this__u8e3s4.m2c(tmp$ret$1);
    action(composition);
  };
  var EndCompositionScope_instance;
  function EndCompositionScope_getInstance() {
    if (EndCompositionScope_instance == null)
      new EndCompositionScope();
    return EndCompositionScope_instance;
  }
  function UseCurrentNode() {
    UseCurrentNode_instance = this;
    Operation.call(this);
  }
  protoOf(UseCurrentNode).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    var tmp = applier.f1h();
    ((!(tmp == null) ? isInterface(tmp, ComposeNodeLifecycleCallback) : false) ? tmp : THROW_CCE()).k1i();
  };
  var UseCurrentNode_instance;
  function UseCurrentNode_getInstance() {
    if (UseCurrentNode_instance == null)
      new UseCurrentNode();
    return UseCurrentNode_instance;
  }
  function UpdateNode() {
    UpdateNode_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(UpdateNode).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'value';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'block';
      } else {
        tmp = protoOf(Operation).y2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(UpdateNode).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Value' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var value = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.UpdateNode.Block' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var block = _this__u8e3s4.m2c(tmp$ret$1);
    block(applier.f1h(), value);
  };
  var UpdateNode_instance;
  function UpdateNode_getInstance() {
    if (UpdateNode_instance == null)
      new UpdateNode();
    return UpdateNode_instance;
  }
  function RemoveNode() {
    RemoveNode_instance = this;
    Operation.call(this, 2);
  }
  protoOf(RemoveNode).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'removeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'count';
      } else {
        tmp = protoOf(Operation).x2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(RemoveNode).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.RemoveIndex' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.i2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.RemoveNode.Count' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    applier.m1h(tmp, _this__u8e3s4.i2c(tmp$ret$1));
  };
  var RemoveNode_instance;
  function RemoveNode_getInstance() {
    if (RemoveNode_instance == null)
      new RemoveNode();
    return RemoveNode_instance;
  }
  function MoveNode() {
    MoveNode_instance = this;
    Operation.call(this, 3);
  }
  protoOf(MoveNode).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'from';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
      if (parameter === _IntParameter___init__impl__oy5xkp(1)) {
        tmp = 'to';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
        if (parameter === _IntParameter___init__impl__oy5xkp(2)) {
          tmp = 'count';
        } else {
          tmp = protoOf(Operation).x2a.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(MoveNode).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.From' call
    var tmp$ret$0 = _IntParameter___init__impl__oy5xkp(0);
    var tmp = _this__u8e3s4.i2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.To' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(1);
    var tmp_0 = _this__u8e3s4.i2c(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.MoveNode.Count' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(2);
    applier.n1h(tmp, tmp_0, _this__u8e3s4.i2c(tmp$ret$2));
  };
  var MoveNode_instance;
  function MoveNode_getInstance() {
    if (MoveNode_instance == null)
      new MoveNode();
    return MoveNode_instance;
  }
  function InsertSlots() {
    InsertSlots_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(InsertSlots).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        tmp = protoOf(Operation).y2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertSlots).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlots.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.m2c(tmp$ret$1);
    slots.i1p();
    slots.m28(insertTable, anchor.x1v(insertTable), false);
    slots.o1q();
  };
  var InsertSlots_instance;
  function InsertSlots_getInstance() {
    if (InsertSlots_instance == null)
      new InsertSlots();
    return InsertSlots_instance;
  }
  function InsertSlotsWithFixups() {
    InsertSlotsWithFixups_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(InsertSlotsWithFixups).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'anchor';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'from';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'fixups';
        } else {
          tmp = protoOf(Operation).y2a.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(InsertSlotsWithFixups).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.FromSlotTable' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var insertTable = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var anchor = _this__u8e3s4.m2c(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertSlotsWithFixups.Fixups' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    var fixups = _this__u8e3s4.m2c(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = insertTable.h1o();
    var normalClose = false;
    var tmp;
    try {
      fixups.d2c(applier, writer, rememberManager);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = Unit_instance;
    }finally {
      writer.m1o(normalClose);
    }
    slots.i1p();
    slots.m28(insertTable, anchor.x1v(insertTable), false);
    slots.o1q();
  };
  var InsertSlotsWithFixups_instance;
  function InsertSlotsWithFixups_getInstance() {
    if (InsertSlotsWithFixups_instance == null)
      new InsertSlotsWithFixups();
    return InsertSlotsWithFixups_instance;
  }
  function InsertNodeFixup() {
    InsertNodeFixup_instance = this;
    Operation.call(this, 1, 2);
  }
  protoOf(InsertNodeFixup).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).x2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'factory';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'groupAnchor';
      } else {
        tmp = protoOf(Operation).y2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(InsertNodeFixup).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.Factory' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var node = _this__u8e3s4.m2c(tmp$ret$0)();
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.GroupAnchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var groupAnchor = _this__u8e3s4.m2c(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.InsertNodeFixup.InsertIndex' call
    var tmp$ret$2 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.i2c(tmp$ret$2);
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    slots.b28(groupAnchor, node);
    nodeApplier.k1h(insertIndex, node);
    nodeApplier.i1h(node);
  };
  var InsertNodeFixup_instance;
  function InsertNodeFixup_getInstance() {
    if (InsertNodeFixup_instance == null)
      new InsertNodeFixup();
    return InsertNodeFixup_instance;
  }
  function PostInsertNodeFixup() {
    PostInsertNodeFixup_instance = this;
    Operation.call(this, 1, 1);
  }
  protoOf(PostInsertNodeFixup).x2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    if (parameter === _IntParameter___init__impl__oy5xkp(0)) {
      tmp = 'insertIndex';
    } else {
      tmp = protoOf(Operation).x2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'groupAnchor';
    } else {
      tmp = protoOf(Operation).y2a.call(this, parameter);
    }
    return tmp;
  };
  protoOf(PostInsertNodeFixup).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.GroupAnchor' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var groupAnchor = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.PostInsertNodeFixup.InsertIndex' call
    var tmp$ret$1 = _IntParameter___init__impl__oy5xkp(0);
    var insertIndex = _this__u8e3s4.i2c(tmp$ret$1);
    applier.j1h();
    var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
    var nodeToInsert = slots.u27(groupAnchor);
    nodeApplier.l1h(insertIndex, nodeToInsert);
  };
  var PostInsertNodeFixup_instance;
  function PostInsertNodeFixup_getInstance() {
    if (PostInsertNodeFixup_instance == null)
      new PostInsertNodeFixup();
    return PostInsertNodeFixup_instance;
  }
  function ResetSlots() {
    ResetSlots_instance = this;
    Operation.call(this);
  }
  protoOf(ResetSlots).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    slots.w27();
  };
  var ResetSlots_instance;
  function ResetSlots_getInstance() {
    if (ResetSlots_instance == null)
      new ResetSlots();
    return ResetSlots_instance;
  }
  function DetermineMovableContentNodeIndex() {
    DetermineMovableContentNodeIndex_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(DetermineMovableContentNodeIndex).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndexOut';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'anchor';
      } else {
        tmp = protoOf(Operation).y2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(DetermineMovableContentNodeIndex).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.EffectiveNodeIndexOut' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndexOut = _this__u8e3s4.m2c(tmp$ret$0);
    var tmp = effectiveNodeIndexOut;
    // Inline function 'androidx.compose.runtime.changelist.DetermineMovableContentNodeIndex.Anchor' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.m2c(tmp$ret$1);
    tmp.j2e_1 = positionToInsert(slots, tmp_0, isInterface(applier, Applier) ? applier : THROW_CCE());
  };
  var DetermineMovableContentNodeIndex_instance;
  function DetermineMovableContentNodeIndex_getInstance() {
    if (DetermineMovableContentNodeIndex_instance == null)
      new DetermineMovableContentNodeIndex();
    return DetermineMovableContentNodeIndex_instance;
  }
  function CopyNodesToNewAnchorLocation() {
    CopyNodesToNewAnchorLocation_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(CopyNodesToNewAnchorLocation).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'effectiveNodeIndex';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'nodes';
      } else {
        tmp = protoOf(Operation).y2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(CopyNodesToNewAnchorLocation).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var effectiveNodeIndex = _this__u8e3s4.m2c(tmp$ret$0).j2e_1;
    // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.Nodes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var nodesToInsert = _this__u8e3s4.m2c(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.snapshots.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nodesToInsert.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nodesToInsert.o(index);
        // Inline function 'androidx.compose.runtime.changelist.CopyNodesToNewAnchorLocation.execute.<anonymous>' call
        if (!isInterface(applier, Applier))
          THROW_CCE();
        applier.l1h(effectiveNodeIndex + index | 0, item);
        applier.k1h(effectiveNodeIndex + index | 0, item);
      }
       while (inductionVariable <= last);
  };
  var CopyNodesToNewAnchorLocation_instance;
  function CopyNodesToNewAnchorLocation_getInstance() {
    if (CopyNodesToNewAnchorLocation_instance == null)
      new CopyNodesToNewAnchorLocation();
    return CopyNodesToNewAnchorLocation_instance;
  }
  function CopySlotTableToAnchorLocation() {
    CopySlotTableToAnchorLocation_instance = this;
    Operation.call(this, VOID, 4);
  }
  protoOf(CopySlotTableToAnchorLocation).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'resolvedState';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'resolvedCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'from';
        } else {
          // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
          if (parameter === _ObjectParameter___init__impl__iyg1ip(3)) {
            tmp = 'to';
          } else {
            tmp = protoOf(Operation).y2a.call(this, parameter);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(CopySlotTableToAnchorLocation).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.From' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(2);
    var from = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.To' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(3);
    var to = _this__u8e3s4.m2c(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ParentCompositionContext' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(1);
    var parentCompositionContext = _this__u8e3s4.m2c(tmp$ret$2);
    // Inline function 'androidx.compose.runtime.changelist.CopySlotTableToAnchorLocation.ResolvedState' call
    var tmp$ret$3 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp0_elvis_lhs = _this__u8e3s4.m2c(tmp$ret$3);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? parentCompositionContext.s1r(from) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      composeRuntimeError('Could not resolve state for movable content');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var resolvedState = tmp;
    var anchors = slots.n28(1, resolvedState.t1r_1, 2);
    var tmp_0 = Companion_instance_2;
    var tmp_1 = to.l1r_1;
    tmp_0.c22(slots, anchors, isInterface(tmp_1, RecomposeScopeOwner) ? tmp_1 : THROW_CCE());
  };
  var CopySlotTableToAnchorLocation_instance;
  function CopySlotTableToAnchorLocation_getInstance() {
    if (CopySlotTableToAnchorLocation_instance == null)
      new CopySlotTableToAnchorLocation();
    return CopySlotTableToAnchorLocation_instance;
  }
  function EndMovableContentPlacement() {
    EndMovableContentPlacement_instance = this;
    Operation.call(this);
  }
  protoOf(EndMovableContentPlacement).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    positionToParentOf(slots, isInterface(applier, Applier) ? applier : THROW_CCE(), 0);
    slots.n1q();
  };
  var EndMovableContentPlacement_instance;
  function EndMovableContentPlacement_getInstance() {
    if (EndMovableContentPlacement_instance == null)
      new EndMovableContentPlacement();
    return EndMovableContentPlacement_instance;
  }
  function ReleaseMovableGroupAtCurrent() {
    ReleaseMovableGroupAtCurrent_instance = this;
    Operation.call(this, VOID, 3);
  }
  protoOf(ReleaseMovableGroupAtCurrent).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'composition';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'parentCompositionContext';
      } else {
        // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
        if (parameter === _ObjectParameter___init__impl__iyg1ip(2)) {
          tmp = 'reference';
        } else {
          tmp = protoOf(Operation).y2a.call(this, parameter);
        }
      }
    }
    return tmp;
  };
  protoOf(ReleaseMovableGroupAtCurrent).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Composition' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.m2c(tmp$ret$0);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.ParentCompositionContext' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp_0 = _this__u8e3s4.m2c(tmp$ret$1);
    // Inline function 'androidx.compose.runtime.changelist.ReleaseMovableGroupAtCurrent.Reference' call
    var tmp$ret$2 = _ObjectParameter___init__impl__iyg1ip(2);
    releaseMovableGroupAtCurrent(tmp, tmp_0, _this__u8e3s4.m2c(tmp$ret$2), slots);
  };
  var ReleaseMovableGroupAtCurrent_instance;
  function ReleaseMovableGroupAtCurrent_getInstance() {
    if (ReleaseMovableGroupAtCurrent_instance == null)
      new ReleaseMovableGroupAtCurrent();
    return ReleaseMovableGroupAtCurrent_instance;
  }
  function ApplyChangeList() {
    ApplyChangeList_instance = this;
    Operation.call(this, VOID, 2);
  }
  protoOf(ApplyChangeList).y2a = function (parameter) {
    var tmp;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    if (parameter === _ObjectParameter___init__impl__iyg1ip(0)) {
      tmp = 'changes';
    } else {
      // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
      if (parameter === _ObjectParameter___init__impl__iyg1ip(1)) {
        tmp = 'effectiveNodeIndex';
      } else {
        tmp = protoOf(Operation).y2a.call(this, parameter);
      }
    }
    return tmp;
  };
  protoOf(ApplyChangeList).h2c = function (_this__u8e3s4, applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.EffectiveNodeIndex' call
    var tmp$ret$0 = _ObjectParameter___init__impl__iyg1ip(1);
    var tmp0_safe_receiver = _this__u8e3s4.m2c(tmp$ret$0);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2e_1;
    var effectiveNodeIndex = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.runtime.changelist.ApplyChangeList.Changes' call
    var tmp$ret$1 = _ObjectParameter___init__impl__iyg1ip(0);
    var tmp = _this__u8e3s4.m2c(tmp$ret$1);
    var tmp_0;
    if (effectiveNodeIndex > 0) {
      tmp_0 = new OffsetApplier(applier, effectiveNodeIndex);
    } else {
      tmp_0 = applier;
    }
    tmp.b1z(tmp_0, slots, rememberManager);
  };
  var ApplyChangeList_instance;
  function ApplyChangeList_getInstance() {
    if (ApplyChangeList_instance == null)
      new ApplyChangeList();
    return ApplyChangeList_instance;
  }
  function Operation(ints, objects) {
    ints = ints === VOID ? 0 : ints;
    objects = objects === VOID ? 0 : objects;
    this.v2a_1 = ints;
    this.w2a_1 = objects;
  }
  protoOf(Operation).j2c = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = getKClassFromExpression(this).ma();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Operation).x2a = function (parameter) {
    return 'IntParameter(' + _IntParameter___get_offset__impl__xsdcin(parameter) + ')';
  };
  protoOf(Operation).y2a = function (parameter) {
    return 'ObjectParameter(' + _ObjectParameter___get_offset__impl__x7fx93(parameter) + ')';
  };
  protoOf(Operation).toString = function () {
    return this.j2c();
  };
  function positionToInsert(slots, anchor, applier) {
    var destination = slots.q1r(anchor);
    runtimeCheck(slots.p1n_1 < destination);
    positionToParentOf(slots, applier, destination);
    var nodeIndex = currentNodeIndex(slots);
    while (slots.p1n_1 < destination) {
      if (slots.q27(destination)) {
        if (slots.y1v()) {
          applier.i1h(slots.q1s(slots.p1n_1));
          nodeIndex = 0;
        }
        slots.p1o();
      } else
        nodeIndex = nodeIndex + slots.x1n() | 0;
    }
    runtimeCheck(slots.p1n_1 === destination);
    return nodeIndex;
  }
  function positionToParentOf(slots, applier, index) {
    while (!slots.p27(index)) {
      slots.i1o();
      if (slots.v1q(slots.r1n_1)) {
        applier.j1h();
      }
      slots.n1q();
    }
  }
  function releaseMovableGroupAtCurrent(composition, parentContext, reference, slots) {
    var slotTable = new SlotTable();
    if (slots.n27()) {
      slotTable.j1o();
    }
    if (slots.o27()) {
      slotTable.k1o();
    }
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var writer = slotTable.h1o();
    var normalClose = false;
    var tmp;
    try {
      // Inline function 'androidx.compose.runtime.changelist.releaseMovableGroupAtCurrent.<anonymous>' call
      writer.i1p();
      writer.t1o(126665345, reference.j1r_1);
      writer.f1r();
      writer.e1v(reference.k1r_1);
      var anchors = slots.l28(reference.n1r_1, 1, writer);
      writer.x1n();
      writer.n1q();
      writer.o1q();
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
      normalClose = true;
      tmp = anchors;
    }finally {
      writer.m1o(normalClose);
    }
    var anchors_0 = tmp;
    var state = new MovableContentState(slotTable);
    if (Companion_instance_2.f22(slotTable, anchors_0)) {
      var movableContentRecomposeScopeOwner = new releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1(composition, reference);
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var writer_0 = slotTable.h1o();
      var normalClose_0 = false;
      var tmp_0;
      try {
        Companion_instance_2.c22(writer_0, anchors_0, movableContentRecomposeScopeOwner);
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>.<anonymous>' call
        normalClose_0 = true;
        tmp_0 = Unit_instance;
      }finally {
        writer_0.m1o(normalClose_0);
      }
    }
    parentContext.c21(reference, state);
  }
  function currentNodeIndex(slots) {
    var original = slots.p1n_1;
    var current = slots.r1n_1;
    while (current >= 0 && !slots.v1q(current)) {
      current = slots.a1o(current);
    }
    var index = 0;
    current = current + 1 | 0;
    while (current < original) {
      if (slots.r27(original, current)) {
        if (slots.v1q(current))
          index = 0;
        current = current + 1 | 0;
      } else {
        index = index + (slots.v1q(current) ? 1 : slots.w1q(current)) | 0;
        current = current + slots.z1p(current) | 0;
      }
    }
    return index;
  }
  function releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1($composition, $reference) {
    this.u2e_1 = $composition;
    this.v2e_1 = $reference;
  }
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).v20 = function (scope, instance) {
    var tmp = this.u2e_1;
    var tmp0_safe_receiver = isInterface(tmp, RecomposeScopeOwner) ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v20(scope, instance);
    var result = tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
    if (result.equals(InvalidationResult_IGNORED_getInstance())) {
      var tmp2_this = this.v2e_1;
      tmp2_this.o1r_1 = plus_1(tmp2_this.o1r_1, to(scope, instance));
      return InvalidationResult_SCHEDULED_getInstance();
    }
    return result;
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).z20 = function (scope) {
  };
  protoOf(releaseMovableGroupAtCurrent$movableContentRecomposeScopeOwner$1).d20 = function (value) {
  };
  function OperationsDebugStringFormattable() {
  }
  function _WriteScope___init__impl__4xwato(stack) {
    return stack;
  }
  function _get_stack__b8zp2v($this) {
    return $this;
  }
  function _WriteScope___get_operation__impl__krvgwa($this) {
    return peekOperation(_get_stack__b8zp2v($this));
  }
  function WriteScope__setInt_impl_yt2o8b($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _IntParameter___get_offset__impl__xsdcin(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.q2a_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setInt.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).x2a(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.q2a_1 = $this$with.q2a_1 | mask;
    $this$with.m2a_1[topIntIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function WriteScope__setObject_impl_rr41y9($this, parameter, value) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>' call
    var $this$with = _get_stack__b8zp2v($this);
    var mask = 1 << _ObjectParameter___get_offset__impl__x7fx93(parameter);
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(($this$with.r2a_1 & mask) === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.WriteScope.setObject.<anonymous>.<anonymous>' call
      var tmp$ret$0 = 'Already pushed argument ' + _WriteScope___get_operation__impl__krvgwa($this).y2a(parameter);
      throwIllegalStateException(tmp$ret$0);
    }
    $this$with.r2a_1 = $this$with.r2a_1 | mask;
    $this$with.o2a_1[topObjectIndexOf($this$with, parameter)] = value;
    return Unit_instance;
  }
  function determineNewSize($this, currentSize, requiredSize) {
    var resizeAmount = coerceAtMost(currentSize, 1024);
    return coerceAtLeast(currentSize + resizeAmount | 0, requiredSize);
  }
  function ensureIntArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.m2a_1.length;
    if (requiredSize > currentSize) {
      $this.m2a_1 = copyOf($this.m2a_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function ensureObjectArgsSizeAtLeast($this, requiredSize) {
    var currentSize = $this.o2a_1.length;
    if (requiredSize > currentSize) {
      $this.o2a_1 = copyOf_0($this.o2a_1, determineNewSize($this, currentSize, requiredSize));
    }
  }
  function createExpectedArgMask($this, paramCount) {
    return paramCount === 0 ? 0 : -1 >>> (32 - paramCount | 0) | 0;
  }
  function peekOperation($this) {
    return ensureNotNull($this.k2a_1[$this.l2a_1 - 1 | 0]);
  }
  function topIntIndexOf($this, parameter) {
    return ($this.n2a_1 - peekOperation($this).v2a_1 | 0) + _IntParameter___get_offset__impl__xsdcin(parameter) | 0;
  }
  function topObjectIndexOf($this, parameter) {
    return ($this.p2a_1 - peekOperation($this).w2a_1 | 0) + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0;
  }
  function OpIterator($outer) {
    this.z2e_1 = $outer;
    this.w2e_1 = 0;
    this.x2e_1 = 0;
    this.y2e_1 = 0;
  }
  protoOf(OpIterator).i = function () {
    if (this.w2e_1 >= this.z2e_1.l2a_1)
      return false;
    var op = this.a2f();
    this.x2e_1 = this.x2e_1 + op.v2a_1 | 0;
    this.y2e_1 = this.y2e_1 + op.w2a_1 | 0;
    this.w2e_1 = this.w2e_1 + 1 | 0;
    return this.w2e_1 < this.z2e_1.l2a_1;
  };
  protoOf(OpIterator).a2f = function () {
    return ensureNotNull(this.z2e_1.k2a_1[this.w2e_1]);
  };
  protoOf(OpIterator).i2c = function (parameter) {
    return this.z2e_1.m2a_1[this.x2e_1 + _IntParameter___get_offset__impl__xsdcin(parameter) | 0];
  };
  protoOf(OpIterator).m2c = function (parameter) {
    var tmp = this.z2e_1.o2a_1[this.y2e_1 + _ObjectParameter___get_offset__impl__x7fx93(parameter) | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function Companion_5() {
    this.b2f_1 = 1024;
    this.c2f_1 = 16;
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    return Companion_instance_6;
  }
  function access$_get_pushedIntMask__wrtr8x($this) {
    return $this.q2a_1;
  }
  function access$_get_pushedObjectMask__8x586f($this) {
    return $this.r2a_1;
  }
  function access$createExpectedArgMask($this, paramCount) {
    return createExpectedArgMask($this, paramCount);
  }
  function Operations() {
    OperationsDebugStringFormattable.call(this);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.k2a_1 = Array(16);
    this.l2a_1 = 0;
    this.m2a_1 = new Int32Array(16);
    this.n2a_1 = 0;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.o2a_1 = Array(16);
    this.p2a_1 = 0;
    this.q2a_1 = 0;
    this.r2a_1 = 0;
  }
  protoOf(Operations).j = function () {
    return this.l2a_1;
  };
  protoOf(Operations).p = function () {
    return this.j() === 0;
  };
  protoOf(Operations).l1f = function () {
    return !(this.j() === 0);
  };
  protoOf(Operations).y1 = function () {
    this.l2a_1 = 0;
    this.n2a_1 = 0;
    fill_0(this.o2a_1, null, 0, this.p2a_1);
    this.p2a_1 = 0;
  };
  protoOf(Operations).u2a = function (operation) {
    this.q2a_1 = 0;
    this.r2a_1 = 0;
    if (this.l2a_1 === this.k2a_1.length) {
      var resizeAmount = coerceAtMost(this.l2a_1, 1024);
      this.k2a_1 = copyOf_0(this.k2a_1, this.l2a_1 + resizeAmount | 0);
    }
    ensureIntArgsSizeAtLeast(this, this.n2a_1 + operation.v2a_1 | 0);
    ensureObjectArgsSizeAtLeast(this, this.p2a_1 + operation.w2a_1 | 0);
    var tmp = this.k2a_1;
    var tmp1 = this.l2a_1;
    this.l2a_1 = tmp1 + 1 | 0;
    tmp[tmp1] = operation;
    this.n2a_1 = this.n2a_1 + operation.v2a_1 | 0;
    this.p2a_1 = this.p2a_1 + operation.w2a_1 | 0;
  };
  protoOf(Operations).e2b = function (operation) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(operation.v2a_1 === 0 && operation.w2a_1 === 0)) {
      // Inline function 'androidx.compose.runtime.changelist.Operations.push.<anonymous>' call
      var tmp$ret$0 = 'Cannot push ' + operation.toString() + ' without arguments because it expects ' + ('' + operation.v2a_1 + ' ints and ' + operation.w2a_1 + ' objects.');
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.u2a(operation);
  };
  protoOf(Operations).e2c = function (other) {
    if (this.p()) {
      throw NoSuchElementException_init_$Create$('Cannot pop(), because the stack is empty.');
    }
    var tmp = this.k2a_1;
    this.l2a_1 = this.l2a_1 - 1 | 0;
    var op = ensureNotNull(tmp[this.l2a_1]);
    this.k2a_1[this.l2a_1] = null;
    other.u2a(op);
    var thisObjIdx = this.p2a_1;
    var otherObjIdx = other.p2a_1;
    // Inline function 'kotlin.repeat' call
    var times = op.w2a_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherObjIdx = otherObjIdx - 1 | 0;
        thisObjIdx = thisObjIdx - 1 | 0;
        other.o2a_1[otherObjIdx] = this.o2a_1[thisObjIdx];
        this.o2a_1[thisObjIdx] = null;
      }
       while (inductionVariable < times);
    var thisIntIdx = this.n2a_1;
    var otherIntIdx = other.n2a_1;
    // Inline function 'kotlin.repeat' call
    var times_0 = op.v2a_1;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < times_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.changelist.Operations.popInto.<anonymous>' call
        otherIntIdx = otherIntIdx - 1 | 0;
        thisIntIdx = thisIntIdx - 1 | 0;
        other.m2a_1[otherIntIdx] = this.m2a_1[thisIntIdx];
        this.m2a_1[thisIntIdx] = 0;
      }
       while (inductionVariable_0 < times_0);
    this.p2a_1 = this.p2a_1 - op.w2a_1 | 0;
    this.n2a_1 = this.n2a_1 - op.v2a_1 | 0;
  };
  protoOf(Operations).s2a = function (applier, slots, rememberManager) {
    // Inline function 'androidx.compose.runtime.changelist.Operations.drain' call
    // Inline function 'androidx.compose.runtime.changelist.Operations.forEach' call
    if (this.l1f()) {
      var iterator = new OpIterator(this);
      do {
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.changelist.Operations.executeAndFlushAllPendingOperations.<anonymous>.<anonymous>' call
        iterator.a2f().h2c(iterator, applier, slots, rememberManager);
      }
       while (iterator.i());
    }
    this.y1();
  };
  protoOf(Operations).toString = function () {
    return protoOf(OperationsDebugStringFormattable).toString.call(this);
  };
  function MutableVector(content, size) {
    this.k1s_1 = content;
    this.l1s_1 = null;
    this.m1s_1 = size;
  }
  protoOf(MutableVector).n1s = function (element) {
    this.s1b(this.m1s_1 + 1 | 0);
    this.k1s_1[this.m1s_1] = element;
    this.m1s_1 = this.m1s_1 + 1 | 0;
    return true;
  };
  protoOf(MutableVector).y1 = function () {
    var content = this.k1s_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var inductionVariable = this.m1s_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        content[i] = null;
      }
       while (0 <= inductionVariable);
    this.m1s_1 = 0;
  };
  protoOf(MutableVector).me = function (element) {
    var inductionVariable = 0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    var last = this.m1s_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.collection.MutableVector.get' call
        var index = i;
        var tmp = this.k1s_1[index];
        var tmp$ret$1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (equals(tmp$ret$1, element))
          return true;
      }
       while (!(i === last));
    return false;
  };
  protoOf(MutableVector).s1b = function (capacity) {
    var oldContent = this.k1s_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.math.max' call
      var b = imul(oldContent.length, 2);
      var newSize = Math.max(capacity, b);
      this.k1s_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableVector).l1f = function () {
    return !(this.m1s_1 === 0);
  };
  protoOf(MutableVector).b2 = function (index) {
    var content = this.k1s_1;
    var tmp = content[index];
    var item = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    if (!(index === (this.m1s_1 - 1 | 0))) {
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.m1s_1;
      arrayCopy(content, content, index, tmp4, endIndex);
    }
    this.m1s_1 = this.m1s_1 - 1 | 0;
    content[this.m1s_1] = null;
    return item;
  };
  protoOf(MutableVector).m23 = function (newSize) {
    this.m1s_1 = newSize;
  };
  function wrapIntoSet(_this__u8e3s4) {
    return new ScatterSetWrapper(_this__u8e3s4);
  }
  function ScatterSetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.l2f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSetWrapper$iterator$slambda).g2g = function ($this$iterator, $completion) {
    var tmp = this.h2g($this$iterator, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(ScatterSetWrapper$iterator$slambda).s9 = function (p1, $completion) {
    return this.g2g(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        switch (tmp) {
          case 0:
            this.z8_1 = 11;
            var tmp_0 = this;
            tmp_0.n2f_1 = this.l2f_1.y1y_1;
            this.o2f_1 = this.n2f_1;
            this.p2f_1 = this.o2f_1.h1f_1;
            var tmp_1 = this;
            tmp_1.q2f_1 = this.o2f_1;
            this.y8_1 = 1;
            continue $sm;
          case 1:
            this.s2f_1 = this.q2f_1;
            this.t2f_1 = this.s2f_1.g1f_1;
            this.u2f_1 = this.t2f_1.length - 2 | 0;
            this.v2f_1 = numberRangeToNumber(0, this.u2f_1).g();
            this.y8_1 = 2;
            continue $sm;
          case 2:
            if (!this.v2f_1.h()) {
              this.y8_1 = 9;
              continue $sm;
            }

            this.w2f_1 = this.v2f_1.i();
            this.x2f_1 = this.t2f_1[this.w2f_1];
            var this_0 = this.x2f_1;
            if (!this_0.e3(this_0.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.y2f_1 = 8 - (~(this.w2f_1 - this.u2f_1 | 0) >>> 31 | 0) | 0;
              this.z2f_1 = until(0, this.y2f_1).g();
              this.y8_1 = 3;
              continue $sm;
            } else {
              this.y8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.z2f_1.h()) {
              this.y8_1 = 6;
              continue $sm;
            }

            this.a2g_1 = this.z2f_1.i();
            if (this.x2f_1.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
              this.b2g_1 = (this.w2f_1 << 3) + this.a2g_1 | 0;
              var tmp_2 = this;
              tmp_2.c2g_1 = this.b2g_1;
              this.d2g_1 = this.c2g_1;
              var tmp_3 = this;
              var tmp_4 = this.p2f_1[this.d2g_1];
              tmp_3.e2g_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.f2g_1 = this.e2g_1;
              this.y8_1 = 4;
              suspendResult = this.m2f_1.ve(this.f2g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y8_1 = 5;
              continue $sm;
            }

          case 4:
            this.y8_1 = 5;
            continue $sm;
          case 5:
            this.x2f_1 = this.x2f_1.c3(8);
            this.y8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.y2f_1 === 8)) {
              this.r2f_1 = Unit_instance;
              this.y8_1 = 10;
              continue $sm;
            } else {
              this.y8_1 = 7;
              continue $sm;
            }

          case 7:
            this.y8_1 = 8;
            continue $sm;
          case 8:
            this.y8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.y8_1 = 1;
              continue $sm;
            }

            this.y8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z8_1 === 11) {
          throw e;
        } else {
          this.y8_1 = this.z8_1;
          this.b9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSetWrapper$iterator$slambda).h2g = function ($this$iterator, completion) {
    var i = new ScatterSetWrapper$iterator$slambda(this.l2f_1, completion);
    i.m2f_1 = $this$iterator;
    return i;
  };
  function ScatterSetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.g2g($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ScatterSetWrapper(set) {
    this.y1y_1 = set;
  }
  protoOf(ScatterSetWrapper).j = function () {
    return this.y1y_1.j();
  };
  protoOf(ScatterSetWrapper).p = function () {
    return this.y1y_1.p();
  };
  protoOf(ScatterSetWrapper).g = function () {
    return iterator(ScatterSetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(ScatterSetWrapper).i2g = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.p();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        // Inline function 'androidx.compose.runtime.collection.ScatterSetWrapper.containsAll.<anonymous>' call
        if (!this.y1y_1.r(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ScatterSetWrapper).u1 = function (elements) {
    return this.i2g(elements);
  };
  protoOf(ScatterSetWrapper).me = function (element) {
    return this.y1y_1.r(element);
  };
  protoOf(ScatterSetWrapper).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.me((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ScopeMap() {
    this.i1s_1 = mutableScatterMapOf();
  }
  protoOf(ScopeMap).j = function () {
    return this.i1s_1.j();
  };
  protoOf(ScopeMap).a1z = function (key, scope) {
    // Inline function 'androidx.collection.MutableScatterMap.compute' call
    var this_0 = this.i1s_1;
    var index = this_0.a1e(key);
    var inserting = index < 0;
    var tmp;
    if (inserting) {
      tmp = null;
    } else {
      var tmp_0 = this_0.q1d_1[index];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    // Inline function 'androidx.compose.runtime.collection.ScopeMap.add.<anonymous>' call
    var value = tmp;
    var tmp_1;
    if (value == null) {
      tmp_1 = scope;
    } else {
      if (value instanceof MutableScatterSet) {
        (value instanceof MutableScatterSet ? value : THROW_CCE()).e(scope);
        tmp_1 = value;
      } else {
        var tmp_2;
        if (!(value === scope)) {
          var set = new MutableScatterSet();
          set.e(!(value == null) ? value : THROW_CCE());
          set.e(scope);
          tmp_2 = set;
        } else {
          tmp_2 = value;
        }
        tmp_1 = tmp_2;
      }
    }
    var computedValue = tmp_1;
    if (inserting) {
      var insertionIndex = ~index;
      this_0.p1d_1[insertionIndex] = key;
      this_0.q1d_1[insertionIndex] = computedValue;
    } else {
      this_0.q1d_1[index] = computedValue;
    }
  };
  protoOf(ScopeMap).h1z = function (key, value) {
    this.i1s_1.z1d(key, value);
  };
  protoOf(ScopeMap).z1y = function (element) {
    return this.i1s_1.f2(element);
  };
  protoOf(ScopeMap).w1y = function (key, scope) {
    var tmp0_elvis_lhs = this.i1s_1.h2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp_0;
    if (value instanceof MutableScatterSet) {
      var set = value instanceof MutableScatterSet ? value : THROW_CCE();
      var removed = set.v1(scope);
      if (removed && set.p()) {
        this.i1s_1.b5(key);
      }
      return removed;
    } else {
      if (equals(value, scope)) {
        this.i1s_1.b5(key);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
    }
    return tmp_0;
  };
  protoOf(ScopeMap).i20 = function (scope) {
    // Inline function 'androidx.collection.MutableScatterMap.removeIf' call
    var this_0 = this.i1s_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.o1d_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.MutableScatterMap.removeIf.<anonymous>' call
                  var tmp = this_0.p1d_1[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = this_0.q1d_1[index];
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.removeScope.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    set.v1(scope);
                    tmp_1 = set.p();
                  } else {
                    tmp_1 = value === scope;
                  }
                  if (tmp_1) {
                    this_0.h1c(index);
                  }
                }
                slot = slot.c3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
  };
  protoOf(ScopeMap).w1z = function () {
    // Inline function 'kotlin.collections.hashMapOf' call
    var result = HashMap_init_$Create$_0();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.i1s_1;
    var k = this_0.p1d_1;
    var v = this_0.q1d_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.o1d_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.e3(this_1.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.compose.runtime.collection.ScopeMap.asMap.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp1_0 = !(tmp1 == null) ? tmp1 : THROW_CCE();
                  var tmp_1;
                  if (value instanceof MutableScatterSet) {
                    var set = value instanceof MutableScatterSet ? value : THROW_CCE();
                    tmp_1 = set.n1f();
                  } else {
                    tmp_1 = mutableSetOf([!(value == null) ? value : THROW_CCE()]);
                  }
                  // Inline function 'kotlin.collections.set' call
                  var value_0 = tmp_1;
                  result.a5(tmp1_0, value_0);
                }
                slot = slot.c3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  };
  function persistentSetOf() {
    return Companion_getInstance_9().k2g();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.n2g_1 = element;
  }
  protoOf(SingleElementListIterator).i = function () {
    this.q2g();
    this.o2g_1 = this.o2g_1 + 1 | 0;
    return this.n2g_1;
  };
  protoOf(SingleElementListIterator).k4 = function () {
    this.r2g();
    this.o2g_1 = this.o2g_1 - 1 | 0;
    return this.n2g_1;
  };
  function AbstractListIterator(index, size) {
    this.o2g_1 = index;
    this.p2g_1 = size;
  }
  protoOf(AbstractListIterator).h = function () {
    return this.o2g_1 < this.p2g_1;
  };
  protoOf(AbstractListIterator).j4 = function () {
    return this.o2g_1 > 0;
  };
  protoOf(AbstractListIterator).l4 = function () {
    return this.o2g_1 - 1 | 0;
  };
  protoOf(AbstractListIterator).q2g = function () {
    if (!this.h())
      throw NoSuchElementException_init_$Create$_0();
  };
  protoOf(AbstractListIterator).r2g = function () {
    if (!this.j4())
      throw NoSuchElementException_init_$Create$_0();
  };
  function AbstractPersistentList$removeAll$lambda($elements) {
    return function (it) {
      return $elements.r(it);
    };
  }
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  protoOf(AbstractPersistentList).n = function (elements) {
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.s2g();
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    this_0.n(elements);
    return this_0.t2g();
  };
  protoOf(AbstractPersistentList).v1 = function (element) {
    var index = this.s(element);
    if (!(index === -1)) {
      return this.b2(index);
    }
    return this;
  };
  protoOf(AbstractPersistentList).x1 = function (elements) {
    return this.u2g(AbstractPersistentList$removeAll$lambda(elements));
  };
  protoOf(AbstractPersistentList).r = function (element) {
    return !(this.s(element) === -1);
  };
  protoOf(AbstractPersistentList).g = function () {
    return this.t1();
  };
  protoOf(AbstractPersistentList).t1 = function () {
    return this.q(0);
  };
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.y2g_1 = buffer;
  }
  protoOf(BufferIterator).i = function () {
    if (!this.h()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var tmp1 = this.o2g_1;
    this.o2g_1 = tmp1 + 1 | 0;
    return this.y2g_1[tmp1];
  };
  protoOf(BufferIterator).k4 = function () {
    if (!this.j4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.o2g_1 = this.o2g_1 - 1 | 0;
    return this.y2g_1[this.o2g_1];
  };
  function rootSize($this) {
    return rootSize_1($this.b2h_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.b2h_1 >> 5 > 1 << $this.c2h_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.c2h_1 + 5 | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.b2h_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.c2h_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.b2h_1 + 1 | 0, $this.c2h_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.b2h_1 - 1 | 0, shift);
    var tmp1_elvis_lhs = root == null ? null : copyOf_0(root, 32);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp = Array(32);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === 5) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - 5 | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.b2h_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.a2h_1, 32);
    if (tailSize < 32) {
      var tmp0 = $this.a2h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = tailIndex + 1 | 0;
      arrayCopy(tmp0, newTail, destinationOffset, tailIndex, tailSize);
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.b2h_1 + 1 | 0, $this.c2h_1);
    }
    var lastElement = $this.a2h_1[31];
    var tmp5 = $this.a2h_1;
    var tmp7 = tailIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = tailSize - 1 | 0;
    arrayCopy(tmp5, newTail, tmp7, tailIndex, endIndex);
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = Array(32);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, destinationOffset, bufferIndex, 31);
      elementCarry.d2h_1 = root[31];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.d2h_1, elementCarry);
      }
       while (inductionVariable < 32);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.b2h_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.a2h_1, 32);
    if (index < (tailSize - 1 | 0)) {
      var tmp0 = $this.a2h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(tmp0, newTail, index, startIndex, tailSize);
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === 33 ? copyOf_0(root, 32) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.d2h_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - 5 | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.d2h_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var newRoot = copyOf_0(root, 32);
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        // Inline function 'kotlin.arrayOfNulls' call
        tmp = Array(32);
      } else {
        tmp = copyOf_0(root, 32);
      }
      var newRoot = tmp;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, newRoot, bufferIndex, startIndex, 32);
      newRoot[31] = tailCarry.d2h_1;
      tailCarry.d2h_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, 32);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.a2h_1;
    }
    var buffer = $this.z2g_1;
    var shift = $this.c2h_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, 32);
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.z2g_1 = root;
    this.a2h_1 = tail;
    this.b2h_1 = size;
    this.c2h_1 = rootShift;
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.b2h_1 > 32)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      var tmp$ret$0 = 'Trie-based persistent vector should have at least ' + ('33 elements, got ' + this.b2h_1);
      throwIllegalArgumentException(tmp$ret$0);
    }
    assert((this.b2h_1 - rootSize_1(this.b2h_1) | 0) <= coerceAtMost(this.a2h_1.length, 32));
  }
  protoOf(PersistentVector).j = function () {
    return this.b2h_1;
  };
  protoOf(PersistentVector).e = function (element) {
    var tailSize = this.b2h_1 - rootSize(this) | 0;
    if (tailSize < 32) {
      var newTail = copyOf_0(this.a2h_1, 32);
      newTail[tailSize] = element;
      return new PersistentVector(this.z2g_1, newTail, this.b2h_1 + 1 | 0, this.c2h_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.z2g_1, this.a2h_1, newTail_0);
  };
  protoOf(PersistentVector).v2g = function (index, element) {
    ListImplementation_instance.e2h(index, this.b2h_1);
    if (index === this.b2h_1) {
      return this.e(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.z2g_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.z2g_1, this.c2h_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.d2h_1);
  };
  protoOf(PersistentVector).b2 = function (index) {
    ListImplementation_instance.f2h(index, this.b2h_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.z2g_1, rootSize_0, this.c2h_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.z2g_1, this.c2h_1, index, new ObjectRef(this.a2h_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.c2h_1, 0);
  };
  protoOf(PersistentVector).u2g = function (predicate) {
    // Inline function 'kotlin.also' call
    var this_0 = this.s2g();
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.removeAll.<anonymous>' call
    this_0.p2h(predicate);
    return this_0.t2g();
  };
  protoOf(PersistentVector).s2g = function () {
    return new PersistentVectorBuilder(this, this.z2g_1, this.a2h_1, this.c2h_1);
  };
  protoOf(PersistentVector).q = function (index) {
    ListImplementation_instance.e2h(index, this.b2h_1);
    var tmp = this.a2h_1;
    return new PersistentVectorIterator(this.z2g_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.b2h_1, (this.c2h_1 / 5 | 0) + 1 | 0);
  };
  protoOf(PersistentVector).o = function (index) {
    ListImplementation_instance.f2h(index, this.b2h_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVector).z1 = function (index, element) {
    ListImplementation_instance.f2h(index, this.b2h_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.a2h_1, 32);
      newTail[index & 31] = element;
      return new PersistentVector(this.z2g_1, newTail, this.b2h_1, this.c2h_1);
    }
    var newRoot = setInRoot(this, this.z2g_1, this.c2h_1, index, element);
    return new PersistentVector(newRoot, this.a2h_1, this.b2h_1, this.c2h_1);
  };
  function rootSize_0($this) {
    if ($this.o2h_1 <= 32) {
      return 0;
    }
    return rootSize_1($this.o2h_1);
  }
  function tailSize($this, size) {
    if (size <= 32) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.o2h_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === 33 && buffer[32] === $this.l2h_1;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    var tmp1 = mutableBuffer($this);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = coerceAtMost(buffer.length, 32);
    arrayCopy(buffer, tmp1, 0, 0, endIndex);
    return tmp1;
  }
  function makeMutableShiftingRight($this, buffer, distance) {
    if (isMutable($this, buffer)) {
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = 32 - distance | 0;
      arrayCopy(buffer, buffer, distance, 0, endIndex);
      return buffer;
    }
    var tmp6 = mutableBuffer($this);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = 32 - distance | 0;
    arrayCopy(buffer, tmp6, distance, 0, endIndex_0);
    return tmp6;
  }
  function mutableBufferWith($this, element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = Array(33);
    buffer[0] = element;
    buffer[32] = $this.l2h_1;
    return buffer;
  }
  function mutableBuffer($this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = Array(33);
    buffer[32] = $this.l2h_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.o2h_1 >> 5 > 1 << $this.k2h_1) {
      $this.m2h_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.k2h_1 + 5 | 0);
      $this.n2h_1 = newTail;
      $this.k2h_1 = $this.k2h_1 + 5 | 0;
      $this.o2h_1 = $this.o2h_1 + 1 | 0;
      tmp = Unit_instance;
    } else if (root == null) {
      $this.m2h_1 = filledTail;
      $this.n2h_1 = newTail;
      $this.o2h_1 = $this.o2h_1 + 1 | 0;
      tmp = Unit_instance;
    } else {
      $this.m2h_1 = pushTail_0($this, root, filledTail, $this.k2h_1);
      $this.n2h_1 = newTail;
      $this.o2h_1 = $this.o2h_1 + 1 | 0;
      tmp = Unit_instance;
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.o2h_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 5) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - 5 | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < 32 && sourceIterator.h()) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.i();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> 5 < 1 << $this.k2h_1 ? pushBuffers($this, root, rootSize, $this.k2h_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.h()) {
      $this.k2h_1 = $this.k2h_1 + 5 | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.k2h_1, $this.k2h_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!buffersIterator.h()) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var tmp$ret$0 = 'invalid buffersIterator';
      throwIllegalArgumentException(tmp$ret$0);
    }
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.pushBuffers.<anonymous>' call
      var tmp$ret$1 = 'negative shift';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (shift === 0) {
      return buffersIterator.i();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - 5 | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < 32) {
        tmp_1 = buffersIterator.h();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - 5 | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.n2h_1);
    if (tailSize < 32) {
      var tmp0 = $this.n2h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = index + 1 | 0;
      arrayCopy(tmp0, mutableTail, destinationOffset, index, tailSize);
      mutableTail[index] = element;
      $this.m2h_1 = root;
      $this.n2h_1 = mutableTail;
      $this.o2h_1 = $this.o2h_1 + 1 | 0;
    } else {
      var lastElement = $this.n2h_1[31];
      var tmp5 = $this.n2h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = index + 1 | 0;
      arrayCopy(tmp5, mutableTail, destinationOffset_0, index, 31);
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.d2h_1 = root[31];
      var tmp1 = makeMutable($this, root);
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = bufferIndex + 1 | 0;
      arrayCopy(root, tmp1, destinationOffset, bufferIndex, 31);
      var mutableRoot = tmp1;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    if (inductionVariable < 32)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.d2h_1, elementCarry);
      }
       while (inductionVariable < 32);
    return mutableRoot_0;
  }
  function insertIntoRoot_1($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp0 = $this.m2h_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.insertIntoRoot.<anonymous>' call
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var startLeafIndex = index >> 5;
    var startLeaf = shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (rootSize_0($this) >> 5) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex | 0) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    splitToBuffers($this, elements, index, startLeaf, 32, buffers, newNullBuffers, newNextBuffer);
  }
  function shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp0 = $this.m2h_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.shiftLeafBuffers.<anonymous>' call
        var message = 'root is null';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var leafCount = rootSize_0($this) >> 5;
    var leafBufferIterator_0 = leafBufferIterator($this, leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (!(leafBufferIterator_0.l4() === startLeafIndex)) {
      var currentBuffer = leafBufferIterator_0.k4();
      var tmp2 = buffer;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = 32 - rightShift | 0;
      arrayCopy(currentBuffer, tmp2, 0, startIndex, 32);
      buffer = makeMutableShiftingRight($this, currentBuffer, rightShift);
      bufferIndex = bufferIndex - 1 | 0;
      buffers[bufferIndex] = buffer;
    }
    return leafBufferIterator_0.k4();
  }
  function splitToBuffers($this, elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(nullBuffers >= 1)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.splitToBuffers.<anonymous>' call
      var tmp$ret$0 = 'requires at least one nullBuffer';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var firstBuffer = makeMutable($this, startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & 31;
    var endBufferEndIndex = ((index + elements.j() | 0) - 1 | 0) & 31;
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < 32) {
      var tmp2 = newNextBuffer;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = endBufferEndIndex + 1 | 0;
      arrayCopy(firstBuffer, tmp2, destinationOffset, startBufferStartIndex, startBufferSize);
    } else {
      var toCopyToLast = ((endBufferEndIndex + elementsToShift | 0) - 32 | 0) + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = mutableBuffer($this);
        newNullBuffers = newNullBuffers - 1 | 0;
        buffers[newNullBuffers] = newNextBuffer;
      }
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, nextBuffer, 0, startIndex, startBufferSize);
      var tmp12 = newNextBuffer;
      var tmp13 = endBufferEndIndex + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, tmp12, tmp13, startBufferStartIndex, endIndex);
    }
    var elementsIterator = elements.g();
    copyToBuffer($this, firstBuffer, startBufferStartIndex, elementsIterator);
    var inductionVariable = 1;
    var last = newNullBuffers;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffers[i] = copyToBuffer($this, mutableBuffer($this), 0, elementsIterator);
      }
       while (inductionVariable < last);
    copyToBuffer($this, newNextBuffer, 0, elementsIterator);
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.n2h_1;
    }
    var buffer = ensureNotNull($this.m2h_1);
    var shift = $this.k2h_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - 5 | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.o2h_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.n2h_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.n2h_1[index];
      var tmp0 = $this.n2h_1;
      var tmp1 = makeMutable($this, $this.n2h_1);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index + 1 | 0;
      arrayCopy(tmp0, tmp1, index, startIndex, tailSize);
      var mutableTail = tmp1;
      mutableTail[tailSize - 1 | 0] = null;
      $this.m2h_1 = root;
      $this.n2h_1 = mutableTail;
      $this.o2h_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.k2h_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var tmp1 = makeMutable($this, root);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = bufferIndex + 1 | 0;
      arrayCopy(root, tmp1, bufferIndex, startIndex, 32);
      var mutableRoot = tmp1;
      mutableRoot[31] = tailCarry.d2h_1;
      tailCarry.d2h_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = 31;
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - 5 | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.m2h_1 = null;
      var tmp = $this;
      var tmp_0;
      if (root == null) {
        // Inline function 'kotlin.emptyArray' call
        tmp_0 = [];
      } else {
        tmp_0 = root;
      }
      tmp.n2h_1 = tmp_0;
      $this.o2h_1 = rootSize;
      $this.k2h_1 = shift;
      return Unit_instance;
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.d2h_1;
    tmp_1.n2h_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.o2h_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.m2h_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.k2h_1 = shift - 5 | 0;
    } else {
      $this.m2h_1 = newRoot;
      $this.k2h_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === 5) {
      tailCarry.d2h_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - 5 | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null && bufferIndex === 0) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function removeAll($this, predicate) {
    var tailSize = tailSize_0($this);
    var bufferRef = new ObjectRef(null);
    if ($this.m2h_1 == null) {
      return !(removeAllFromTail($this, predicate, tailSize, bufferRef) === tailSize);
    }
    var leafIterator = leafBufferIterator($this, 0);
    var bufferSize = 32;
    while (bufferSize === 32 && leafIterator.h()) {
      bufferSize = removeAll_0($this, predicate, leafIterator.i(), 32, bufferRef);
    }
    if (bufferSize === 32) {
      assert(!leafIterator.h());
      var newTailSize = removeAllFromTail($this, predicate, tailSize, bufferRef);
      if (newTailSize === 0) {
        pullLastBufferFromRoot_0($this, $this.m2h_1, $this.o2h_1, $this.k2h_1);
      }
      return !(newTailSize === tailSize);
    }
    var unaffectedElementsCount = leafIterator.l4() << 5;
    // Inline function 'kotlin.collections.mutableListOf' call
    var buffers = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var recyclableBuffers = ArrayList_init_$Create$();
    while (leafIterator.h()) {
      var leaf = leafIterator.i();
      bufferSize = recyclableRemoveAll($this, predicate, leaf, 32, bufferSize, bufferRef, recyclableBuffers, buffers);
    }
    var newTailSize_0 = recyclableRemoveAll($this, predicate, $this.n2h_1, tailSize, bufferSize, bufferRef, recyclableBuffers, buffers);
    var tmp = bufferRef.d2h_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize_0, 32);
    var newRoot = buffers.p() ? ensureNotNull($this.m2h_1) : pushBuffers($this, $this.m2h_1, unaffectedElementsCount, $this.k2h_1, buffers.g());
    var newRootSize = unaffectedElementsCount + (buffers.j() << 5) | 0;
    $this.m2h_1 = retainFirst($this, newRoot, newRootSize);
    $this.n2h_1 = newTail;
    $this.o2h_1 = newRootSize + newTailSize_0 | 0;
    return true;
  }
  function retainFirst($this, root, size) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((size & 31) === 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.retainFirst.<anonymous>' call
      var tmp$ret$0 = 'invalid size';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (size === 0) {
      $this.k2h_1 = 0;
      return null;
    }
    var lastIndex = size - 1 | 0;
    var newRoot = root;
    while (lastIndex >> $this.k2h_1 === 0) {
      $this.k2h_1 = $this.k2h_1 - 5 | 0;
      var tmp = newRoot[0];
      newRoot = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    }
    return nullifyAfter($this, newRoot, lastIndex, $this.k2h_1);
  }
  function nullifyAfter($this, root, index, shift) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shift >= 0)) {
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.nullifyAfter.<anonymous>' call
      var tmp$ret$0 = 'shift should be positive';
      throwIllegalArgumentException(tmp$ret$0);
    }
    if (shift === 0) {
      return root;
    }
    var lastIndex = indexSegment(index, shift);
    var tmp = root[lastIndex];
    var newChild = nullifyAfter($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), index, shift - 5 | 0);
    var newRoot = root;
    if (lastIndex < 31 && !(newRoot[lastIndex + 1 | 0] == null)) {
      if (isMutable($this, newRoot)) {
        fill_0(newRoot, null, lastIndex + 1 | 0, 32);
      }
      var tmp1 = newRoot;
      var tmp2 = mutableBuffer($this);
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = lastIndex + 1 | 0;
      arrayCopy(tmp1, tmp2, 0, 0, endIndex);
      newRoot = tmp2;
    }
    if (!(newChild === newRoot[lastIndex])) {
      newRoot = makeMutable($this, newRoot);
      newRoot[lastIndex] = newChild;
    }
    return newRoot;
  }
  function removeAllFromTail($this, predicate, tailSize, bufferRef) {
    var newTailSize = removeAll_0($this, predicate, $this.n2h_1, tailSize, bufferRef);
    if (newTailSize === tailSize) {
      assert(bufferRef.d2h_1 === $this.n2h_1);
      return tailSize;
    }
    var tmp = bufferRef.d2h_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    fill_0(newTail, null, newTailSize, tailSize);
    $this.n2h_1 = newTail;
    $this.o2h_1 = $this.o2h_1 - (tailSize - newTailSize | 0) | 0;
    return newTailSize;
  }
  function removeAll_0($this, predicate, buffer, bufferSize, bufferRef) {
    var newBuffer = buffer;
    var newBufferSize = bufferSize;
    var anyRemoved = false;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = buffer[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            newBuffer = makeMutable($this, buffer);
            newBufferSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var tmp1 = newBufferSize;
          newBufferSize = tmp1 + 1 | 0;
          tmp_0[tmp1] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.d2h_1 = newBuffer;
    return newBufferSize;
  }
  function recyclableRemoveAll($this, predicate, buffer, bufferSize, toBufferSize, bufferRef, recyclableBuffers, buffers) {
    if (isMutable($this, buffer)) {
      recyclableBuffers.e(buffer);
    }
    var tmp = bufferRef.d2h_1;
    var toBuffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var newToBuffer = toBuffer;
    var newToBufferSize = toBufferSize;
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_0 = buffer[index];
        var element = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        if (!predicate(element)) {
          if (newToBufferSize === 32) {
            var tmp_1;
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!recyclableBuffers.p()) {
              tmp_1 = recyclableBuffers.b2(recyclableBuffers.j() - 1 | 0);
            } else {
              tmp_1 = mutableBuffer($this);
            }
            newToBuffer = tmp_1;
            newToBufferSize = 0;
          }
          var tmp_2 = newToBuffer;
          var tmp1 = newToBufferSize;
          newToBufferSize = tmp1 + 1 | 0;
          tmp_2[tmp1] = element;
        }
      }
       while (inductionVariable < bufferSize);
    bufferRef.d2h_1 = newToBuffer;
    if (!(toBuffer === bufferRef.d2h_1)) {
      buffers.e(toBuffer);
    }
    return newToBufferSize;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        $this.d4_1 = $this.d4_1 + 1 | 0;
      }
      oldElementCarry.d2h_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - 5 | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    var tmp0 = $this.m2h_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVectorBuilder.leafBufferIterator.<anonymous>' call
        var message = 'Invalid root';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var root = tmp$ret$1;
    var leafCount = rootSize_0($this) >> 5;
    ListImplementation_instance.e2h(index, leafCount);
    if ($this.k2h_1 === 0) {
      return new SingleElementListIterator(root, index);
    }
    var trieHeight = $this.k2h_1 / 5 | 0;
    return new TrieIterator(root, index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder$removeAll$lambda($elements) {
    return function (it) {
      return $elements.r(it);
    };
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.h2h_1 = vector;
    this.i2h_1 = vectorRoot;
    this.j2h_1 = vectorTail;
    this.k2h_1 = rootShift;
    this.l2h_1 = new MutabilityOwnership();
    this.m2h_1 = this.i2h_1;
    this.n2h_1 = this.j2h_1;
    this.o2h_1 = this.h2h_1.j();
  }
  protoOf(PersistentVectorBuilder).j = function () {
    return this.o2h_1;
  };
  protoOf(PersistentVectorBuilder).q2h = function () {
    return this.d4_1;
  };
  protoOf(PersistentVectorBuilder).t2g = function () {
    var tmp = this;
    var tmp_0;
    if (this.m2h_1 === this.i2h_1 && this.n2h_1 === this.j2h_1) {
      tmp_0 = this.h2h_1;
    } else {
      this.l2h_1 = new MutabilityOwnership();
      this.i2h_1 = this.m2h_1;
      this.j2h_1 = this.n2h_1;
      var tmp_1;
      if (this.m2h_1 == null) {
        var tmp_2;
        // Inline function 'kotlin.collections.isEmpty' call
        if (this.n2h_1.length === 0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.n2h_1, this.o2h_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.m2h_1), this.n2h_1, this.o2h_1, this.k2h_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.h2h_1 = tmp_0;
    return this.h2h_1;
  };
  protoOf(PersistentVectorBuilder).e = function (element) {
    this.d4_1 = this.d4_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < 32) {
      var mutableTail = makeMutable(this, this.n2h_1);
      mutableTail[tailSize] = element;
      this.n2h_1 = mutableTail;
      this.o2h_1 = this.o2h_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.m2h_1, this.n2h_1, newTail);
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).n = function (elements) {
    if (elements.p()) {
      return false;
    }
    this.d4_1 = this.d4_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.g();
    if ((32 - tailSize | 0) >= elements.j()) {
      this.n2h_1 = copyToBuffer(this, makeMutable(this, this.n2h_1), tailSize, elementsIterator);
      this.o2h_1 = this.o2h_1 + elements.j() | 0;
    } else {
      var buffersSize = ((elements.j() + tailSize | 0) - 1 | 0) / 32 | 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var buffers = Array(buffersSize);
      buffers[0] = copyToBuffer(this, makeMutable(this, this.n2h_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.m2h_1;
      var tmp_1 = rootSize_0(this);
      tmp.m2h_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.n2h_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      this.o2h_1 = this.o2h_1 + elements.j() | 0;
    }
    return true;
  };
  protoOf(PersistentVectorBuilder).a2 = function (index, element) {
    ListImplementation_instance.e2h(index, this.o2h_1);
    if (index === this.o2h_1) {
      this.e(element);
      return Unit_instance;
    }
    this.d4_1 = this.d4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.m2h_1, index - rootSize | 0, element);
      return Unit_instance;
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.m2h_1), this.k2h_1, index, element, elementCarry);
    var tmp = elementCarry.d2h_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
  };
  protoOf(PersistentVectorBuilder).w1 = function (index, elements) {
    ListImplementation_instance.e2h(index, this.o2h_1);
    if (index === this.o2h_1) {
      return this.n(elements);
    }
    if (elements.p()) {
      return false;
    }
    this.d4_1 = this.d4_1 + 1 | 0;
    var unaffectedElementsCount = index >> 5 << 5;
    var buffersSize = (((this.o2h_1 - unaffectedElementsCount | 0) + elements.j() | 0) - 1 | 0) / 32 | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & 31;
      var endIndex = ((index + elements.j() | 0) - 1 | 0) & 31;
      var tmp0 = this.n2h_1;
      var tmp1 = makeMutable(this, this.n2h_1);
      var tmp2 = endIndex + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex_0 = tailSize_0(this);
      arrayCopy(tmp0, tmp1, tmp2, startIndex, endIndex_0);
      var newTail = tmp1;
      copyToBuffer(this, newTail, startIndex, elements.g());
      this.n2h_1 = newTail;
      this.o2h_1 = this.o2h_1 + elements.j() | 0;
      return true;
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var buffers = Array(buffersSize);
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.o2h_1 + elements.j() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.n2h_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.n2h_1, rightShift);
      insertIntoRoot_1(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      var tmp6 = this.n2h_1;
      var tmp7 = mutableBuffer(this);
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex_0 = tailSize_1 - newTailSize | 0;
      arrayCopy(tmp6, tmp7, 0, startIndex_0, tailSize_1);
      newTail_0 = tmp7;
      var rightShift_0 = 32 - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.n2h_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_1(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.m2h_1;
    tmp.m2h_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.n2h_1 = newTail_0;
    this.o2h_1 = this.o2h_1 + elements.j() | 0;
    return true;
  };
  protoOf(PersistentVectorBuilder).o = function (index) {
    ListImplementation_instance.f2h(index, this.o2h_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & 31];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).b2 = function (index) {
    ListImplementation_instance.f2h(index, this.o2h_1);
    this.d4_1 = this.d4_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.m2h_1, rootSize, this.k2h_1, index - rootSize | 0);
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.n2h_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.m2h_1), this.k2h_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.k2h_1, 0);
    var tmp_0 = elementCarry.d2h_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).x1 = function (elements) {
    return this.p2h(PersistentVectorBuilder$removeAll$lambda(elements));
  };
  protoOf(PersistentVectorBuilder).p2h = function (predicate) {
    var anyRemoved = removeAll(this, predicate);
    if (anyRemoved) {
      this.d4_1 = this.d4_1 + 1 | 0;
    }
    return anyRemoved;
  };
  protoOf(PersistentVectorBuilder).z1 = function (index, element) {
    ListImplementation_instance.f2h(index, this.o2h_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.n2h_1);
      if (!(mutableTail === this.n2h_1)) {
        this.d4_1 = this.d4_1 + 1 | 0;
      }
      var tailIndex = index & 31;
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.n2h_1 = mutableTail;
      return (oldElement == null ? true : !(oldElement == null)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.m2h_1 = setInRoot_0(this, ensureNotNull(this.m2h_1), this.k2h_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.d2h_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(PersistentVectorBuilder).g = function () {
    return this.t1();
  };
  protoOf(PersistentVectorBuilder).t1 = function () {
    return this.q(0);
  };
  protoOf(PersistentVectorBuilder).q = function (index) {
    ListImplementation_instance.e2h(index, this.o2h_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.t2h_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.u2h_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  protoOf(PersistentVectorIterator).i = function () {
    this.q2g();
    if (this.u2h_1.h()) {
      this.o2g_1 = this.o2g_1 + 1 | 0;
      return this.u2h_1.i();
    }
    var tmp3 = this.o2g_1;
    this.o2g_1 = tmp3 + 1 | 0;
    return this.t2h_1[tmp3 - this.u2h_1.p2g_1 | 0];
  };
  protoOf(PersistentVectorIterator).k4 = function () {
    this.r2g();
    if (this.o2g_1 > this.u2h_1.p2g_1) {
      this.o2g_1 = this.o2g_1 - 1 | 0;
      return this.t2h_1[this.o2g_1 - this.u2h_1.p2g_1 | 0];
    }
    this.o2g_1 = this.o2g_1 - 1 | 0;
    return this.u2h_1.k4();
  };
  function reset($this) {
    $this.p2g_1 = $this.c2i_1.o2h_1;
    $this.d2i_1 = $this.c2i_1.q2h();
    $this.f2i_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.c2i_1.m2h_1;
    if (root == null) {
      $this.e2i_1 = null;
      return Unit_instance;
    }
    var trieSize = rootSize_1($this.c2i_1.o2h_1);
    var trieIndex = coerceAtMost($this.o2g_1, trieSize);
    var trieHeight = ($this.c2i_1.k2h_1 / 5 | 0) + 1 | 0;
    if ($this.e2i_1 == null) {
      $this.e2i_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.e2i_1).g2i(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.d2i_1 === $this.c2i_1.q2h()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.f2i_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.o2h_1);
    this.c2i_1 = builder;
    this.d2i_1 = this.c2i_1.q2h();
    this.e2i_1 = null;
    this.f2i_1 = -1;
    setupTrieIterator(this);
  }
  protoOf(PersistentVectorMutableIterator).k4 = function () {
    checkForComodification(this);
    this.r2g();
    this.f2i_1 = this.o2g_1 - 1 | 0;
    var tmp1_elvis_lhs = this.e2i_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.c2i_1.n2h_1;
      this.o2g_1 = this.o2g_1 - 1 | 0;
      var tmp_1 = tmp_0[this.o2g_1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.o2g_1 > trieIterator.p2g_1) {
      var tmp_2 = this.c2i_1.n2h_1;
      this.o2g_1 = this.o2g_1 - 1 | 0;
      var tmp_3 = tmp_2[this.o2g_1 - trieIterator.p2g_1 | 0];
      return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    this.o2g_1 = this.o2g_1 - 1 | 0;
    return trieIterator.k4();
  };
  protoOf(PersistentVectorMutableIterator).i = function () {
    checkForComodification(this);
    this.q2g();
    this.f2i_1 = this.o2g_1;
    var tmp2_elvis_lhs = this.e2i_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.c2i_1.n2h_1;
      var tmp1 = this.o2g_1;
      this.o2g_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.h()) {
      this.o2g_1 = this.o2g_1 + 1 | 0;
      return trieIterator.i();
    }
    var tmp_2 = this.c2i_1.n2h_1;
    var tmp6 = this.o2g_1;
    this.o2g_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.p2g_1 | 0];
    return (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
  };
  protoOf(PersistentVectorMutableIterator).z3 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.c2i_1.b2(this.f2i_1);
    if (this.f2i_1 < this.o2g_1)
      this.o2g_1 = this.f2i_1;
    reset(this);
  };
  function bufferOfSize($this, size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.h2i_1 = new SmallPersistentVector(tmp$ret$0);
  }
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_6();
    AbstractPersistentList.call(this);
    this.i2i_1 = buffer;
    assert(this.i2i_1.length <= 32);
  }
  protoOf(SmallPersistentVector).j = function () {
    return this.i2i_1.length;
  };
  protoOf(SmallPersistentVector).e = function (element) {
    if (this.j() < 32) {
      var newBuffer = copyOf_0(this.i2i_1, this.j() + 1 | 0);
      newBuffer[this.j()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.i2i_1, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).n = function (elements) {
    if ((this.j() + elements.j() | 0) <= 32) {
      var newBuffer = copyOf_0(this.i2i_1, this.j() + elements.j() | 0);
      var index = this.j();
      var tmp0_iterator = elements.g();
      while (tmp0_iterator.h()) {
        var element = tmp0_iterator.i();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    // Inline function 'kotlin.apply' call
    var this_0 = this.s2g();
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    this_0.n(elements);
    return this_0.t2g();
  };
  protoOf(SmallPersistentVector).u2g = function (predicate) {
    var newBuffer = this.i2i_1;
    var newSize = this.j();
    var anyRemoved = false;
    var inductionVariable = 0;
    var last = this.j();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.i2i_1[index];
        var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        if (predicate(element)) {
          if (!anyRemoved) {
            // Inline function 'kotlin.collections.copyOf' call
            // Inline function 'kotlin.js.asDynamic' call
            newBuffer = this.i2i_1.slice();
            newSize = index;
            anyRemoved = true;
          }
        } else if (anyRemoved) {
          var tmp_0 = newBuffer;
          var tmp1 = newSize;
          newSize = tmp1 + 1 | 0;
          tmp_0[tmp1] = element;
        }
      }
       while (inductionVariable < last);
    var tmp2_subject = newSize;
    return tmp2_subject === this.j() ? this : tmp2_subject === 0 ? Companion_getInstance_6().h2i_1 : new SmallPersistentVector(copyOfRange(newBuffer, 0, newSize));
  };
  protoOf(SmallPersistentVector).v2g = function (index, element) {
    ListImplementation_instance.e2h(index, this.j());
    if (index === this.j()) {
      return this.e(element);
    }
    if (this.j() < 32) {
      var newBuffer = bufferOfSize(this, this.j() + 1 | 0);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.i2i_1;
      arrayCopy(this_0, newBuffer, 0, 0, index);
      var tmp5 = this.i2i_1;
      var tmp7 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.j();
      arrayCopy(tmp5, newBuffer, tmp7, index, endIndex);
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var root = this.i2i_1.slice();
    var tmp11 = this.i2i_1;
    var tmp13 = index + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.j() - 1 | 0;
    arrayCopy(tmp11, root, tmp13, index, endIndex_0);
    root[index] = element;
    var tail = presizedBufferWith(this.i2i_1[31]);
    return new PersistentVector(root, tail, this.j() + 1 | 0, 0);
  };
  protoOf(SmallPersistentVector).b2 = function (index) {
    ListImplementation_instance.f2h(index, this.j());
    if (this.j() === 1) {
      return Companion_getInstance_6().h2i_1;
    }
    var newBuffer = copyOf_0(this.i2i_1, this.j() - 1 | 0);
    var tmp0 = this.i2i_1;
    var tmp3 = index + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.j();
    arrayCopy(tmp0, newBuffer, index, tmp3, endIndex);
    return new SmallPersistentVector(newBuffer);
  };
  protoOf(SmallPersistentVector).s2g = function () {
    return new PersistentVectorBuilder(this, null, this.i2i_1, 0);
  };
  protoOf(SmallPersistentVector).s = function (element) {
    return indexOf(this.i2i_1, element);
  };
  protoOf(SmallPersistentVector).q = function (index) {
    ListImplementation_instance.e2h(index, this.j());
    var tmp = this.i2i_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.j());
  };
  protoOf(SmallPersistentVector).o = function (index) {
    ListImplementation_instance.f2h(index, this.j());
    var tmp = this.i2i_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SmallPersistentVector).z1 = function (index, element) {
    ListImplementation_instance.f2h(index, this.j());
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = this.i2i_1.slice();
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  function fillPath($this, index, startLevel) {
    var shift = imul($this.x2h_1 - startLevel | 0, 5);
    var i = startLevel;
    while (i < $this.x2h_1) {
      var tmp = $this.y2h_1;
      var tmp_0 = i;
      var tmp_1 = $this.y2h_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - 5 | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.o2g_1, shift) === indexPredicate) {
      shift = shift + 5 | 0;
    }
    if (shift > 0) {
      var level = ($this.x2h_1 - 1 | 0) - (shift / 5 | 0) | 0;
      fillPath($this, $this.o2g_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.o2g_1 & 31;
    var tmp = $this.y2h_1[$this.x2h_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.x2h_1 = height;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size_0 = this.x2h_1;
    tmp.y2h_1 = Array(size_0);
    this.z2h_1 = index === size;
    this.y2h_1[0] = root;
    fillPath(this, index - (this.z2h_1 ? 1 : 0) | 0, 1);
  }
  protoOf(TrieIterator).g2i = function (root, index, size, height) {
    this.o2g_1 = index;
    this.p2g_1 = size;
    this.x2h_1 = height;
    if (this.y2h_1.length < height) {
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.y2h_1 = Array(height);
    }
    this.y2h_1[0] = root;
    this.z2h_1 = index === size;
    fillPath(this, index - (this.z2h_1 ? 1 : 0) | 0, 1);
  };
  protoOf(TrieIterator).i = function () {
    if (!this.h()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    var result = elementAtCurrentIndex(this);
    this.o2g_1 = this.o2g_1 + 1 | 0;
    if (this.o2g_1 === this.p2g_1) {
      this.z2h_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  protoOf(TrieIterator).k4 = function () {
    if (!this.j4()) {
      throw NoSuchElementException_init_$Create$_0();
    }
    this.o2g_1 = this.o2g_1 - 1 | 0;
    if (this.z2h_1) {
      this.z2h_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, 31);
    return elementAtCurrentIndex(this);
  };
  function persistentVectorOf() {
    return Companion_getInstance_6().h2i_1;
  }
  function presizedBufferWith(element) {
    // Inline function 'kotlin.arrayOfNulls' call
    var buffer = Array(32);
    buffer[0] = element;
    return buffer;
  }
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.d2h_1 = value;
  }
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.j2i_1 = new PersistentHashMap(Companion_getInstance_8().k2i_1, 0);
  }
  protoOf(Companion_7).l2i = function () {
    var tmp = this.j2i_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_7();
    AbstractMap.call(this);
    this.o2i_1 = node;
    this.p2i_1 = size;
  }
  protoOf(PersistentHashMap).j = function () {
    return this.p2i_1;
  };
  protoOf(PersistentHashMap).i2 = function () {
    return new PersistentHashMapKeys(this);
  };
  protoOf(PersistentHashMap).j2 = function () {
    return new PersistentHashMapValues(this);
  };
  protoOf(PersistentHashMap).k2 = function () {
    return createEntries(this);
  };
  protoOf(PersistentHashMap).f2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.o2i_1.u2i(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).h2 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.o2i_1.v2i(tmp$ret$0, key, 0);
  };
  protoOf(PersistentHashMap).a5 = function (key, value) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.o2i_1.w2i(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.x2i_1, this.j() + newNodeResult.y2i_1 | 0);
  };
  protoOf(PersistentHashMap).b5 = function (key) {
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.o2i_1.z2i(tmp$ret$0, key, 0);
    if (this.o2i_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_7().l2i();
    }
    return new PersistentHashMap(newNode, this.j() - 1 | 0);
  };
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeKeysIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapValuesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeValuesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(8);
    while (tmp < 8) {
      tmp_0[tmp] = new TrieNodeEntriesIterator();
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_0);
  }
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.a2j_1[pathIndex].g2j()) {
      return pathIndex;
    }
    if ($this.a2j_1[pathIndex].k2j()) {
      var node = $this.a2j_1[pathIndex].h2j();
      if (pathIndex === 6) {
        $this.a2j_1[pathIndex + 1 | 0].j2j(node.t2i_1, node.t2i_1.length);
      } else {
        $this.a2j_1[pathIndex + 1 | 0].j2j(node.t2i_1, imul(2, node.i2j()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.a2j_1[$this.b2j_1].g2j()) {
      return Unit_instance;
    }
    var inductionVariable = $this.b2j_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 && $this.a2j_1[i].k2j()) {
          $this.a2j_1[i].l2j();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.b2j_1 = result;
          return Unit_instance;
        }
        if (i > 0) {
          $this.a2j_1[i - 1 | 0].l2j();
        }
        $this.a2j_1[i].j2j(Companion_getInstance_8().k2i_1.t2i_1, 0);
      }
       while (0 <= inductionVariable);
    $this.c2j_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.h())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.a2j_1 = path;
    this.b2j_1 = 0;
    this.c2j_1 = true;
    this.a2j_1[0].j2j(node.t2i_1, imul(2, node.i2j()));
    this.b2j_1 = 0;
    ensureNextEntryIsReady(this);
  }
  protoOf(PersistentHashMapBaseIterator).h = function () {
    return this.c2j_1;
  };
  protoOf(PersistentHashMapBaseIterator).i = function () {
    checkHasNext(this);
    var result = this.a2j_1[this.b2j_1].i();
    ensureNextEntryIsReady(this);
    return result;
  };
  function TrieNodeBaseIterator() {
    this.d2j_1 = Companion_getInstance_8().k2i_1.t2i_1;
    this.e2j_1 = 0;
    this.f2j_1 = 0;
  }
  protoOf(TrieNodeBaseIterator).m2j = function (buffer, dataSize, index) {
    this.d2j_1 = buffer;
    this.e2j_1 = dataSize;
    this.f2j_1 = index;
  };
  protoOf(TrieNodeBaseIterator).j2j = function (buffer, dataSize) {
    this.m2j(buffer, dataSize, 0);
  };
  protoOf(TrieNodeBaseIterator).g2j = function () {
    return this.f2j_1 < this.e2j_1;
  };
  protoOf(TrieNodeBaseIterator).k2j = function () {
    assert(this.f2j_1 >= this.e2j_1);
    return this.f2j_1 < this.d2j_1.length;
  };
  protoOf(TrieNodeBaseIterator).h2j = function () {
    assert(this.k2j());
    var tmp = this.d2j_1[this.f2j_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNodeBaseIterator).l2j = function () {
    assert(this.k2j());
    this.f2j_1 = this.f2j_1 + 1 | 0;
  };
  protoOf(TrieNodeBaseIterator).h = function () {
    return this.g2j();
  };
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeKeysIterator).i = function () {
    assert(this.g2j());
    this.f2j_1 = this.f2j_1 + 2 | 0;
    var tmp = this.d2j_1[this.f2j_1 - 2 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeValuesIterator).i = function () {
    assert(this.g2j());
    this.f2j_1 = this.f2j_1 + 2 | 0;
    var tmp = this.d2j_1[this.f2j_1 - 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  protoOf(TrieNodeEntriesIterator).i = function () {
    assert(this.g2j());
    this.f2j_1 = this.f2j_1 + 2 | 0;
    var tmp = this.d2j_1[this.f2j_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var tmp_1 = this.d2j_1[this.f2j_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
  };
  function MapEntry(key, value) {
    this.w2j_1 = key;
    this.x2j_1 = value;
  }
  protoOf(MapEntry).d2 = function () {
    return this.w2j_1;
  };
  protoOf(MapEntry).e2 = function () {
    return this.x2j_1;
  };
  protoOf(MapEntry).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.d2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.e2();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(MapEntry).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp = (equals(tmp0_safe_receiver.d2(), this.d2()) && equals(tmp0_safe_receiver.e2(), this.e2()));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(MapEntry).toString = function () {
    return toString_0(this.d2()) + '=' + toString_0(this.e2());
  };
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.y2j_1 = map;
  }
  protoOf(PersistentHashMapKeys).j = function () {
    return this.y2j_1.j();
  };
  protoOf(PersistentHashMapKeys).q5 = function (element) {
    return this.y2j_1.f2(element);
  };
  protoOf(PersistentHashMapKeys).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.q5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapKeys).g = function () {
    return new PersistentHashMapKeysIterator(this.y2j_1.o2i_1);
  };
  function PersistentHashMapValues(map) {
    AbstractCollection.call(this);
    this.z2j_1 = map;
  }
  protoOf(PersistentHashMapValues).j = function () {
    return this.z2j_1.j();
  };
  protoOf(PersistentHashMapValues).x5 = function (element) {
    return this.z2j_1.g2(element);
  };
  protoOf(PersistentHashMapValues).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.x5((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapValues).g = function () {
    return new PersistentHashMapValuesIterator(this.z2j_1.o2i_1);
  };
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.a2k_1 = map;
  }
  protoOf(PersistentHashMapEntries).j = function () {
    return this.a2k_1.j();
  };
  protoOf(PersistentHashMapEntries).b2k = function (element) {
    var tmp = !(element == null) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.a2k_1.h2(element.d2());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp_0 = equals(tmp0_safe_receiver, element.e2());
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.e2() == null && this.a2k_1.f2(element.d2()) : tmp1_elvis_lhs;
  };
  protoOf(PersistentHashMapEntries).r = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.b2k((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(PersistentHashMapEntries).g = function () {
    return new PersistentHashMapEntriesIterator(this.a2k_1.o2i_1);
  };
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, objectCreate(protoOf(TrieNode)));
  }
  function ModificationResult(node, sizeDelta) {
    this.x2i_1 = node;
    this.y2i_1 = sizeDelta;
  }
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.r2i_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.t2i_1[keyIndex];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.t2i_1[keyIndex + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.c2k(positionMask);
    var newBuffer = insertEntryAtIndex($this.t2i_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.q2i_1 | positionMask, $this.r2i_1, newBuffer);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newBuffer = $this.t2i_1.slice();
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.q2i_1, $this.r2i_1, newBuffer);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.t2i_1;
    if (newNodeBuffer.length === 2 && newNode.r2i_1 === 0) {
      if ($this.t2i_1.length === 1) {
        newNode.q2i_1 = $this.r2i_1;
        return newNode;
      }
      var keyIndex = $this.c2k(positionMask);
      var newBuffer = replaceNodeWithEntry($this.t2i_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.q2i_1 ^ positionMask, $this.r2i_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.t2i_1, $this.t2i_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.q2i_1, $this.r2i_1, newBuffer_0);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.t2i_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.t2i_1, nodeIndex);
    return TrieNode_init_$Create$($this.q2i_1, $this.r2i_1 ^ positionMask, newBuffer);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = storedKey == null ? null : hashCode(storedKey);
    var storedKeyHash = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.d2k(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.t2i_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.q2i_1 ^ positionMask, $this.r2i_1 | positionMask, newBuffer);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [key1, value1, key2, value2];
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key1, value1, key2, value2];
      } else {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = [key2, value2, key1, value1];
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$11 = [node];
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.t2i_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.t2i_1, keyIndex);
    return TrieNode_init_$Create$($this.q2i_1 ^ positionMask, $this.r2i_1, newBuffer);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.t2i_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.t2i_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.t2i_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.t2i_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.t2i_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.t2i_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          // Inline function 'kotlin.collections.copyOf' call
          // Inline function 'kotlin.js.asDynamic' call
          var newBuffer = $this.t2i_1.slice();
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.t2i_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.t2i_1.length), 2);
    var inductionVariable = progression.z_1;
    var last = progression.a1_1;
    var step_0 = progression.b1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function Companion_8() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    tmp.k2i_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  var Companion_instance_9;
  function Companion_getInstance_8() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_8();
    this.q2i_1 = dataMap;
    this.r2i_1 = nodeMap;
    this.s2i_1 = ownedBy;
    this.t2i_1 = buffer;
  }
  protoOf(TrieNode).i2j = function () {
    return countOneBits(this.q2i_1);
  };
  protoOf(TrieNode).e2k = function (positionMask) {
    return !((this.q2i_1 & positionMask) === 0);
  };
  protoOf(TrieNode).c2k = function (positionMask) {
    return imul(2, countOneBits(this.q2i_1 & (positionMask - 1 | 0)));
  };
  protoOf(TrieNode).d2k = function (positionMask) {
    return (this.t2i_1.length - 1 | 0) - countOneBits(this.r2i_1 & (positionMask - 1 | 0)) | 0;
  };
  protoOf(TrieNode).f2k = function (nodeIndex) {
    var tmp = this.t2i_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  protoOf(TrieNode).u2i = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.e2k(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.c2k(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.f2k(this.d2k(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.u2i(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  protoOf(TrieNode).v2i = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.e2k(keyPositionMask)) {
      var keyIndex = this.c2k(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.f2k(this.d2k(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.v2i(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  protoOf(TrieNode).w2i = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.e2k(keyPositionMask)) {
      var keyIndex = this.c2k(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.d2k(keyPositionMask);
      var targetNode = this.f2k(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.w2i(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var node = putResult.x2i_1;
      tmp_2.x2i_1 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, node);
      return putResult;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  protoOf(TrieNode).z2i = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.e2k(keyPositionMask)) {
      var keyIndex = this.c2k(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.d2k(keyPositionMask);
      var targetNode = this.f2k(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.z2i(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length + 2 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp8 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp8, keyIndex, endIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp2 = nodeIndex + 2 | 0;
    var tmp3 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp2, tmp3, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, destinationOffset, keyIndex, nodeIndex);
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 1 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    var tmp9 = nodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp9, endIndex);
    return newBuffer;
  }
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var startIndex = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, startIndex, nodeIndex);
    newBuffer[newNodeIndex] = newNode;
    var tmp13 = newNodeIndex + 1 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp13, nodeIndex, endIndex);
    return newBuffer;
  }
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = _this__u8e3s4.length - 2 | 0;
    var newBuffer = Array(size);
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    var tmp9 = keyIndex + 2 | 0;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp9, endIndex);
    return newBuffer;
  }
  function Companion_9() {
    Companion_instance_10 = this;
    this.j2g_1 = new PersistentOrderedSet(EndOfChain_instance, EndOfChain_instance, Companion_getInstance_7().l2i());
  }
  protoOf(Companion_9).k2g = function () {
    return this.j2g_1;
  };
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_9();
    AbstractSet.call(this);
    this.g2k_1 = firstElement;
    this.h2k_1 = lastElement;
    this.i2k_1 = hashMap;
  }
  protoOf(PersistentOrderedSet).j = function () {
    return this.i2k_1.j();
  };
  protoOf(PersistentOrderedSet).r = function (element) {
    return this.i2k_1.f2(element);
  };
  protoOf(PersistentOrderedSet).e = function (element) {
    if (this.i2k_1.f2(element)) {
      return this;
    }
    if (this.p()) {
      var newMap = this.i2k_1.a5(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.h2k_1;
    var lastElement = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.i2k_1.h2(lastElement));
    var newMap_0 = this.i2k_1.a5(lastElement, lastLinks.l2k(element)).a5(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.g2k_1, element, newMap_0);
  };
  protoOf(PersistentOrderedSet).v1 = function (element) {
    var tmp0_elvis_lhs = this.i2k_1.h2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.i2k_1.b5(element);
    if (links.m2k()) {
      var tmp0 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key = links.j2k_1;
      var tmp$ret$0 = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).h2(key);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.j2k_1;
      newMap = tmp_0.a5((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE(), previousLinks.l2k(links.k2k_1));
    }
    if (links.o2k()) {
      var tmp2 = newMap;
      // Inline function 'kotlin.collections.get' call
      var key_0 = links.k2k_1;
      var tmp$ret$1 = (isInterface(tmp2, KtMap) ? tmp2 : THROW_CCE()).h2(key_0);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.k2k_1;
      newMap = tmp_2.a5((tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE(), nextLinks.n2k(links.j2k_1));
    }
    var newFirstElement = !links.m2k() ? links.k2k_1 : this.g2k_1;
    var newLastElement = !links.o2k() ? links.j2k_1 : this.h2k_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  protoOf(PersistentOrderedSet).g = function () {
    return new PersistentOrderedSetIterator(this.g2k_1, this.i2k_1);
  };
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_instance, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(objectCreate(protoOf(Links)));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_instance);
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, objectCreate(protoOf(Links)));
  }
  function Links(previous, next) {
    this.j2k_1 = previous;
    this.k2k_1 = next;
  }
  protoOf(Links).l2k = function (newNext) {
    return new Links(this.j2k_1, newNext);
  };
  protoOf(Links).n2k = function (newPrevious) {
    return new Links(newPrevious, this.k2k_1);
  };
  protoOf(Links).o2k = function () {
    return !(this.k2k_1 === EndOfChain_instance);
  };
  protoOf(Links).m2k = function () {
    return !(this.j2k_1 === EndOfChain_instance);
  };
  function checkHasNext_0($this) {
    if (!$this.h())
      throw NoSuchElementException_init_$Create$_0();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.p2k_1 = nextElement;
    this.q2k_1 = map;
    this.r2k_1 = 0;
  }
  protoOf(PersistentOrderedSetIterator).h = function () {
    return this.r2k_1 < this.q2k_1.j();
  };
  protoOf(PersistentOrderedSetIterator).i = function () {
    checkHasNext_0(this);
    var tmp = this.p2k_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.r2k_1 = this.r2k_1 + 1 | 0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.q2k_1.h2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + toString_0(result) + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp_0.p2k_1 = tmp_1.k2k_1;
    return result;
  };
  function EndOfChain() {
  }
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    return EndOfChain_instance;
  }
  function ListImplementation() {
  }
  protoOf(ListImplementation).f2h = function (index, size) {
    if (index < 0 || index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(ListImplementation).e2h = function (index, size) {
    if (index < 0 || index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  function assert(condition) {
  }
  function get_lambdaKey() {
    _init_properties_ComposableLambda_kt__wilkc();
    return lambdaKey;
  }
  var lambdaKey;
  function composableLambdaInstance(key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    return new ComposableLambdaImpl(key, tracked, block);
  }
  function replacableWith(_this__u8e3s4, other) {
    _init_properties_ComposableLambda_kt__wilkc();
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = !_this__u8e3s4.x1w() || equals(_this__u8e3s4, other) || equals(_this__u8e3s4.t1i_1, other.t1i_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    _init_properties_ComposableLambda_kt__wilkc();
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function rememberComposableLambda(key, tracked, block, $composer, $changed) {
    _init_properties_ComposableLambda_kt__wilkc();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1573003438, 'C(rememberComposableLambda)P(1,2)*628@13280L54:ComposableLambda.kt#9drcc');
    if (isTraceInProgress()) {
      traceEventStart(-1573003438, $changed, -1, 'androidx.compose.runtime.internal.rememberComposableLambda (ComposableLambda.kt:628)');
    }
    sourceInformationMarkerStart($composer_0, 1920923313, 'CC(remember):ComposableLambda.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.i1v();
    var tmp;
    if (false || it === Companion_getInstance().r1o_1) {
      // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
      var value = new ComposableLambdaImpl(key, tracked, block);
      $composer_0.t1v(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.internal.rememberComposableLambda.<anonymous>' call
    tmp1_group.x2k(block);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function composableLambda(composer, key, tracked, block) {
    _init_properties_ComposableLambda_kt__wilkc();
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp$ret$0 = rotateLeft(key, 1);
    composer.e1r(tmp$ret$0, get_lambdaKey());
    var slot = composer.i1v();
    var tmp;
    if (slot === Companion_getInstance().r1o_1) {
      var value = new ComposableLambdaImpl(key, tracked, block);
      composer.t1v(value);
      tmp = value;
    } else {
      if (!(slot instanceof ComposableLambdaImpl))
        THROW_CCE();
      slot.x2k(block);
      tmp = slot;
    }
    var result = tmp;
    composer.h1r();
    return result;
  }
  var properties_initialized_ComposableLambda_kt_u87f2i;
  function _init_properties_ComposableLambda_kt__wilkc() {
    if (!properties_initialized_ComposableLambda_kt_u87f2i) {
      properties_initialized_ComposableLambda_kt_u87f2i = true;
      lambdaKey = new Object();
    }
  }
  function IntRef(element) {
    element = element === VOID ? 0 : element;
    this.j2e_1 = element;
  }
  protoOf(IntRef).toString = function () {
    return 'IntRef(element = ' + this.j2e_1 + ')@' + toString_1(hashCode(this), 16);
  };
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = Companion_getInstance_8().k2i_1;
    tmp.y2k_1 = new PersistentCompositionLocalHashMap(tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE(), 0);
  }
  var Companion_instance_11;
  function Companion_getInstance_10() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function PersistentCompositionLocalHashMap(node, size) {
    Companion_getInstance_10();
    PersistentHashMap.call(this, node, size);
  }
  protoOf(PersistentCompositionLocalHashMap).k2 = function () {
    return protoOf(PersistentHashMap).k2.call(this);
  };
  protoOf(PersistentCompositionLocalHashMap).u1v = function (key, value) {
    var tmp0_elvis_lhs = this.o2i_1.w2i(hashCode(key), key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentCompositionLocalHashMap(newNodeResult.x2i_1, this.j() + newNodeResult.y2i_1 | 0);
  };
  function persistentCompositionLocalHashMapOf() {
    return Companion_getInstance_10().y2k_1;
  }
  function get_emptyThreadMap() {
    _init_properties_ThreadMap_jvm_kt__b3bhkj();
    return emptyThreadMap;
  }
  var emptyThreadMap;
  function find_0($this, key) {
    var high = $this.d2a_1 - 1 | 0;
    var tmp0_subject = high;
    if (tmp0_subject === -1)
      return -1;
    else if (tmp0_subject === 0)
      return $this.e2a_1[0].equals(key) ? 0 : $this.e2a_1[0].y(key) > 0 ? -2 : -1;
    var low = 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.e2a_1[mid];
      var comparison = midVal.t2(key);
      if (comparison.y(new Long(0, 0)) < 0)
        low = mid + 1 | 0;
      else if (comparison.y(new Long(0, 0)) > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function ThreadMap(size, keys, values) {
    this.d2a_1 = size;
    this.e2a_1 = keys;
    this.f2a_1 = values;
  }
  protoOf(ThreadMap).g2a = function (key) {
    var index = find_0(this, key);
    return index >= 0 ? this.f2a_1[index] : null;
  };
  protoOf(ThreadMap).h2a = function (key, value) {
    var index = find_0(this, key);
    if (index < 0)
      return false;
    this.f2a_1[index] = value;
    return true;
  };
  protoOf(ThreadMap).i2a = function (key, value) {
    var size = this.d2a_1;
    // Inline function 'kotlin.collections.count' call
    var count = 0;
    var indexedObject = this.f2a_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.internal.ThreadMap.newWith.<anonymous>' call
      if (!(element == null)) {
        count = count + 1 | 0;
      }
    }
    var newSize = count + 1 | 0;
    var newKeys = longArray(newSize);
    // Inline function 'kotlin.arrayOfNulls' call
    var newValues = Array(newSize);
    if (newSize > 1) {
      var dest = 0;
      var source = 0;
      $l$loop: while (dest < newSize && source < size) {
        var oldKey = this.e2a_1[source];
        var oldValue = this.f2a_1[source];
        if (oldKey.y(key) > 0) {
          newKeys[dest] = key;
          newValues[dest] = value;
          dest = dest + 1 | 0;
          break $l$loop;
        }
        if (!(oldValue == null)) {
          newKeys[dest] = oldKey;
          newValues[dest] = oldValue;
          dest = dest + 1 | 0;
        }
        source = source + 1 | 0;
      }
      if (source === size) {
        newKeys[newSize - 1 | 0] = key;
        newValues[newSize - 1 | 0] = value;
      } else {
        while (dest < newSize) {
          var oldKey_0 = this.e2a_1[source];
          var oldValue_0 = this.f2a_1[source];
          if (!(oldValue_0 == null)) {
            newKeys[dest] = oldKey_0;
            newValues[dest] = oldValue_0;
            dest = dest + 1 | 0;
          }
          source = source + 1 | 0;
        }
      }
    } else {
      newKeys[0] = key;
      newValues[0] = value;
    }
    return new ThreadMap(newSize, newKeys, newValues);
  };
  var properties_initialized_ThreadMap_jvm_kt_y907p1;
  function _init_properties_ThreadMap_jvm_kt__b3bhkj() {
    if (!properties_initialized_ThreadMap_jvm_kt_y907p1) {
      properties_initialized_ThreadMap_jvm_kt_y907p1 = true;
      var tmp = longArray(0);
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      emptyThreadMap = new ThreadMap(0, tmp, tmp$ret$0);
    }
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastToSet(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = HashSet_init_$Create$(_this__u8e3s4.j());
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.o(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        this_0.e(item);
      }
       while (inductionVariable <= last);
    return this_0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.f(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.j() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.o(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.f(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.f(truncated);
    }
    buffer.f(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.f(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.f(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.g8(element.h1_1);
        } else {
          _this__u8e3s4.f(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    _init_properties_Snapshot_kt__l6n1ng();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    _init_properties_Snapshot_kt__l6n1ng();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    _init_properties_Snapshot_kt__l6n1ng();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    _init_properties_Snapshot_kt__l6n1ng();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pinningTable;
  }
  var pinningTable;
  function get_extraStateObjects() {
    _init_properties_Snapshot_kt__l6n1ng();
    return extraStateObjects;
  }
  var extraStateObjects;
  function set_applyObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    applyObservers = _set____db54di;
  }
  function get_applyObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return applyObservers;
  }
  var applyObservers;
  function set_globalWriteObservers(_set____db54di) {
    _init_properties_Snapshot_kt__l6n1ng();
    globalWriteObservers = _set____db54di;
  }
  function get_globalWriteObservers() {
    _init_properties_Snapshot_kt__l6n1ng();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    _init_properties_Snapshot_kt__l6n1ng();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function get_pendingApplyObserverCount() {
    _init_properties_Snapshot_kt__l6n1ng();
    return pendingApplyObserverCount;
  }
  var pendingApplyObserverCount;
  function StateObject() {
  }
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.d2l_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).om = function () {
    return this.d2l_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).j3 = function () {
    return this.d2l_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.j3(), other.j3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0).hashCode = function () {
    return hashCode(this.j3());
  };
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.e2l_1 = function_0;
  }
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).om = function () {
    return this.e2l_1();
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).j3 = function () {
    return this.e2l_1;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ObserverHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.j3(), other.j3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0).hashCode = function () {
    return hashCode(this.j3());
  };
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_applyObservers(minus(get_applyObservers(), $observer));
      return Unit_instance;
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_globalWriteObservers(minus(get_globalWriteObservers(), $observer));
      advanceGlobalSnapshot_0();
      return Unit_instance;
    };
  }
  function Companion_11() {
    this.k23_1 = 1;
  }
  protoOf(Companion_11).f1h = function () {
    return currentSnapshot();
  };
  protoOf(Companion_11).z29 = function () {
    return !(get_threadSnapshot().zo() == null);
  };
  protoOf(Companion_11).m24 = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f2l(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Cannot create a mutable snapshot of an read-only snapshot';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(Companion_11).o26 = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_applyObservers(plus_1(get_applyObservers(), observer));
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  protoOf(Companion_11).g2l = function (observer) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    set_globalWriteObservers(plus_1(get_globalWriteObservers(), observer));
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  protoOf(Companion_11).n23 = function () {
    return currentSnapshot().h2l();
  };
  protoOf(Companion_11).l23 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().zo().i2l();
    var changes = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1f()) === true;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  var Companion_instance_12;
  function Companion_getInstance_11() {
    return Companion_instance_12;
  }
  function access$_get_pinningTrackingHandle__7vwthz($this) {
    return $this.g1s_1;
  }
  function Snapshot(id, invalid) {
    this.d1s_1 = invalid;
    this.e1s_1 = id;
    this.f1s_1 = false;
    this.g1s_1 = !(id === 0) ? trackPinning(id, this.j2l()) : -1;
  }
  protoOf(Snapshot).k2l = function (_set____db54di) {
    this.d1s_1 = _set____db54di;
  };
  protoOf(Snapshot).j2l = function () {
    return this.d1s_1;
  };
  protoOf(Snapshot).l2l = function (_set____db54di) {
    this.e1s_1 = _set____db54di;
  };
  protoOf(Snapshot).h1s = function () {
    return this.e1s_1;
  };
  protoOf(Snapshot).m2l = function (value) {
    // Inline function 'kotlin.error' call
    var message = 'Updating write count is not supported for this snapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(Snapshot).n2l = function () {
    return 0;
  };
  protoOf(Snapshot).om = function () {
    this.f1s_1 = true;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.p2l();
  };
  protoOf(Snapshot).n24 = function () {
    var previous = get_threadSnapshot().zo();
    get_threadSnapshot().s21(this);
    return previous;
  };
  protoOf(Snapshot).o24 = function (snapshot) {
    get_threadSnapshot().s21(snapshot);
  };
  protoOf(Snapshot).t2l = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.u2l();
    this.v2l();
  };
  protoOf(Snapshot).u2l = function () {
    set_openSnapshots(get_openSnapshots().a2m(this.h1s()));
  };
  protoOf(Snapshot).v2l = function () {
    this.p2l();
  };
  protoOf(Snapshot).b2m = function () {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!this.f1s_1) {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      var tmp$ret$0 = 'Cannot use a disposed snapshot';
      throwIllegalArgumentException(tmp$ret$0);
    }
  };
  protoOf(Snapshot).p2l = function () {
    if (this.g1s_1 >= 0) {
      releasePinningLocked(this.g1s_1);
      this.g1s_1 = -1;
    }
  };
  protoOf(Snapshot).c2m = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.g1s_1;
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.g1s_1 = -1;
    return this_0;
  };
  function ObserverHandle() {
  }
  function validateNotApplied($this) {
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!$this.b25_1) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      var tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      throwIllegalStateException(tmp$ret$0);
    }
  }
  function validateNotAppliedOrPinned($this) {
    var tmp;
    if (!$this.b25_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp = access$_get_pinningTrackingHandle__7vwthz($this) >= 0;
    }
    // Inline function 'androidx.compose.runtime.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      var tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      throwIllegalStateException(tmp$ret$1);
    }
  }
  function abandon($this) {
    var modified = $this.i2l();
    if (!(modified == null)) {
      validateNotApplied($this);
      $this.d2m(null);
      var id = $this.h1s();
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = modified.h1f_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = modified.g1f_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.e3(this_0.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index];
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.abandon.<anonymous>' call
                    var current = ((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()).a2a();
                    while (!(current == null)) {
                      if (current.x29_1 === id || contains($this.y24_1, current.x29_1)) {
                        current.x29_1 = 0;
                      }
                      current = current.y29_1;
                    }
                  }
                  slot = slot.c3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    $this.t2l();
  }
  function releasePreviouslyPinnedSnapshotsLocked($this) {
    var inductionVariable = 0;
    var last = $this.z24_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked($this.z24_1[index]);
      }
       while (inductionVariable <= last);
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.e2m_1 = new Int32Array(0);
  }
  var Companion_instance_13;
  function Companion_getInstance_12() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Companion_getInstance_12();
    Snapshot.call(this, id, invalid);
    this.t24_1 = readObserver;
    this.u24_1 = writeObserver;
    this.v24_1 = 0;
    this.w24_1 = null;
    this.x24_1 = null;
    this.y24_1 = Companion_getInstance_13().f2m_1;
    this.z24_1 = Companion_getInstance_12().e2m_1;
    this.a25_1 = 1;
    this.b25_1 = false;
  }
  protoOf(MutableSnapshot).q2l = function () {
    return this.t24_1;
  };
  protoOf(MutableSnapshot).r2l = function () {
    return this.u24_1;
  };
  protoOf(MutableSnapshot).f2l = function (readObserver, writeObserver) {
    this.b2m();
    validateNotAppliedOrPinned(this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.g2m(this.h1s());
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().h2m(newId));
    var currentInvalid = this.j2l();
    this.k2l(currentInvalid.h2m(newId));
    // Inline function 'kotlin.also' call
    var this_0 = new NestedMutableSnapshot(newId, addRange(currentInvalid, this.h1s() + 1 | 0, newId), mergedReadObserver(readObserver, this.q2l()), mergedWriteObserver(writeObserver, this.r2l()), this);
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.b25_1 && !this.f1s_1) {
      var previousId = this.h1s();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0_0 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey();
      access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(tmp0_0 + 1 | 0);
      this.l2l(tmp0_0);
      access$_set_openSnapshots_$tSnapshotKt_9lk9nh(access$_get_openSnapshots_$tSnapshotKt_7cpqp5().h2m(this.h1s()));
      this.k2l(addRange(this.j2l(), previousId + 1 | 0, this.h1s()));
    }
    return this_0;
  };
  protoOf(MutableSnapshot).c25 = function () {
    var modified = this.i2l();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().zo(), this, get_openSnapshots().a2m(get_currentGlobalSnapshot().zo().h1s())) : null;
    var observers = emptyList();
    var globalModified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.j() === 0) {
      this.u2l();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().zo();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var previousModified = previousGlobalSnapshot.i2l();
      if (!(previousModified == null) && previousModified.l1f()) {
        observers = get_applyObservers();
        globalModified = previousModified;
      }
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().zo();
      var result = this.i2m(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().a2m(previousGlobalSnapshot_0.h1s()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.u2l();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var previousModified_0 = previousGlobalSnapshot_0.i2l();
      this.d2m(null);
      previousGlobalSnapshot_0.d2m(null);
      observers = get_applyObservers();
      globalModified = previousModified_0;
    }
    this.b25_1 = true;
    if (!(globalModified == null)) {
      var nonNullGlobalModified = wrapIntoSet(ensureNotNull(globalModified));
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!nonNullGlobalModified.p()) {
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        var this_0 = observers;
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = this_0.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = this_0.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
            item(nonNullGlobalModified, this);
          }
           while (inductionVariable <= last);
      }
    }
    if (!(modified == null) && modified.l1f()) {
      var modifiedSet = wrapIntoSet(modified);
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var this_1 = observers;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = this_1.j() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = this_1.o(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modifiedSet, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.v2l();
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver = globalModified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver.h1f_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver.g1f_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot;
            if (!this_2.e3(this_2.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount)
                do {
                  var j = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_1 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index_1];
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.c3(8);
                }
                 while (inductionVariable_2 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    if (modified == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k_0 = modified.h1f_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m_0 = modified.g1f_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_3 = slot_0;
            if (!this_3.e3(this_3.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_4 = 0;
              if (inductionVariable_4 < bitCount_0)
                do {
                  var j_0 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot_0.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_2 = (i_0 << 3) + j_0 | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_0 = k_0[index_2];
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
                    var it_0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                    processForUnusedRecordsLocked(it_0);
                  }
                  slot_0 = slot_0.c3(8);
                }
                 while (inductionVariable_4 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    var tmp2_safe_receiver = this.x24_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_5 = 0;
      var last_1 = tmp2_safe_receiver.j() - 1 | 0;
      if (inductionVariable_5 <= last_1)
        do {
          var index_3 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var item_1 = tmp2_safe_receiver.o(index_3);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>.<anonymous>' call
          processForUnusedRecordsLocked(item_1);
        }
         while (inductionVariable_5 <= last_1);
    }
    this.x24_1 = null;
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).o2l = function () {
    return false;
  };
  protoOf(MutableSnapshot).om = function () {
    if (!this.f1s_1) {
      protoOf(Snapshot).om.call(this);
      this.j2m(this);
    }
  };
  protoOf(MutableSnapshot).k2m = function (snapshot) {
    this.a25_1 = this.a25_1 + 1 | 0;
  };
  protoOf(MutableSnapshot).j2m = function (snapshot) {
    // Inline function 'androidx.compose.runtime.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a25_1 > 0)) {
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.nestedDeactivated.<anonymous>' call
      var tmp$ret$0 = 'no pending nested snapshots';
      throwIllegalArgumentException(tmp$ret$0);
    }
    this.a25_1 = this.a25_1 - 1 | 0;
    if (this.a25_1 === 0) {
      if (!this.b25_1) {
        abandon(this);
      }
    }
  };
  protoOf(MutableSnapshot).h2l = function () {
    if (this.b25_1 || this.f1s_1)
      return Unit_instance;
    this.l2m();
  };
  protoOf(MutableSnapshot).u2l = function () {
    set_openSnapshots(get_openSnapshots().a2m(this.h1s()).m2m(this.y24_1));
  };
  protoOf(MutableSnapshot).v2l = function () {
    releasePreviouslyPinnedSnapshotsLocked(this);
    protoOf(Snapshot).v2l.call(this);
  };
  protoOf(MutableSnapshot).i2m = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.j2l().h2m(this.h1s()).n2m(this.y24_1);
    var modified = ensureNotNull(this.i2l());
    var statesToRemove = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.h1f_1;
    $l$block_2: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.g1f_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.e3(this_0.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  $l$block_1: {
                    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
                    var first = tmp1.a2a();
                    var tmp0_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, this.h1s(), start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_1;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (previous.x29_1 === 1) {
                      break $l$block_1;
                    }
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, this.h1s(), this.j2l());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var tmp4_elvis_lhs = optimisticMerges == null ? null : optimisticMerges.h2(current);
                      var tmp_3;
                      if (tmp4_elvis_lhs == null) {
                        // Inline function 'kotlin.run' call
                        // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                        tmp_3 = tmp1.c2a(previous, current, applied);
                      } else {
                        tmp_3 = tmp4_elvis_lhs;
                      }
                      var merged = tmp_3;
                      if (merged == null)
                        return new Failure(this);
                      else if (!equals(merged, applied))
                        if (equals(merged, current)) {
                          var tmp6_elvis_lhs = mergedRecords;
                          var tmp_4;
                          if (tmp6_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_1 = ArrayList_init_$Create$();
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_1;
                            tmp_4 = this_1;
                          } else {
                            tmp_4 = tmp6_elvis_lhs;
                          }
                          tmp_4.e(to(tmp1, current.t29()));
                          var tmp7_elvis_lhs = statesToRemove;
                          var tmp_5;
                          if (tmp7_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_2 = ArrayList_init_$Create$();
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            statesToRemove = this_2;
                            tmp_5 = this_2;
                          } else {
                            tmp_5 = tmp7_elvis_lhs;
                          }
                          tmp_5.e(tmp1);
                        } else {
                          var tmp8_elvis_lhs = mergedRecords;
                          var tmp_6;
                          if (tmp8_elvis_lhs == null) {
                            // Inline function 'kotlin.collections.mutableListOf' call
                            // Inline function 'kotlin.also' call
                            var this_3 = ArrayList_init_$Create$();
                            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
                            mergedRecords = this_3;
                            tmp_6 = this_3;
                          } else {
                            tmp_6 = tmp8_elvis_lhs;
                          }
                          tmp_6.e(!equals(merged, previous) ? to(tmp1, merged) : to(tmp1, previous.t29()));
                        }
                    }
                  }
                }
                slot = slot.c3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_2;
            }
          }
        }
         while (!(i === lastIndex));
    }
    var tmp0_safe_receiver = mergedRecords;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      this.l2m();
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_1 = 0;
      var last = tmp0_safe_receiver.j() - 1 | 0;
      if (inductionVariable_1 <= last)
        do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item = tmp0_safe_receiver.o(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var state = item.te();
          var stateRecord = item.ue();
          stateRecord.x29_1 = this.h1s();
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          // Inline function 'androidx.compose.runtime.synchronized' call
          get_lock();
          stateRecord.y29_1 = state.a2a();
          state.b2a(stateRecord);
        }
         while (inductionVariable_1 <= last);
    }
    var tmp1_safe_receiver = statesToRemove;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_0 = tmp1_safe_receiver.j() - 1 | 0;
      if (inductionVariable_2 <= last_0)
        do {
          var index_1 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_0 = tmp1_safe_receiver.o(index_1);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          modified.v1(item_0);
        }
         while (inductionVariable_2 <= last_0);
      var mergedList = this.x24_1;
      this.x24_1 = mergedList == null ? tmp1_safe_receiver : plus_2(mergedList, tmp1_safe_receiver);
    }
    return Success_getInstance();
  };
  protoOf(MutableSnapshot).l2m = function () {
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.g2m(this.h1s());
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.b25_1 && !this.f1s_1) {
      var previousId = this.h1s();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      var tmp0 = access$_get_nextSnapshotId_$tSnapshotKt_vxgvey();
      access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(tmp0 + 1 | 0);
      this.l2l(tmp0);
      access$_set_openSnapshots_$tSnapshotKt_9lk9nh(access$_get_openSnapshots_$tSnapshotKt_7cpqp5().h2m(this.h1s()));
      this.k2l(addRange(this.j2l(), previousId + 1 | 0, this.h1s()));
    }
    return Unit_instance;
  };
  protoOf(MutableSnapshot).g2m = function (id) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.y24_1 = this.y24_1.h2m(id);
  };
  protoOf(MutableSnapshot).o2m = function (id) {
    if (id >= 0) {
      var tmp = this;
      // Inline function 'kotlin.collections.plus' call
      var tmp1 = this.z24_1;
      // Inline function 'kotlin.intArrayOf' call
      // Inline function 'kotlin.collections.plus' call
      var elements = new Int32Array([id]);
      tmp.z24_1 = primitiveArrayConcat([tmp1, elements]);
    }
  };
  protoOf(MutableSnapshot).p2m = function (handles) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (handles.length === 0)
      return Unit_instance;
    var pinned = this.z24_1;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isEmpty' call
    if (pinned.length === 0) {
      tmp_0 = handles;
    } else {
      // Inline function 'kotlin.collections.plus' call
      tmp_0 = primitiveArrayConcat([pinned, handles]);
    }
    tmp.z24_1 = tmp_0;
  };
  protoOf(MutableSnapshot).q2m = function (snapshots) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.y24_1 = this.y24_1.n2m(snapshots);
  };
  protoOf(MutableSnapshot).s2l = function (state) {
    var tmp0_elvis_lhs = this.i2l();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf_0();
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.d2m(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.e(state);
  };
  protoOf(MutableSnapshot).m2l = function (_set____db54di) {
    this.v24_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).n2l = function () {
    return this.v24_1;
  };
  protoOf(MutableSnapshot).d2m = function (_set____db54di) {
    this.w24_1 = _set____db54di;
  };
  protoOf(MutableSnapshot).i2l = function () {
    return this.w24_1;
  };
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
  }
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.r2m_1 = snapshot;
  }
  function SnapshotApplyResult() {
  }
  function GlobalSnapshot$_init_$lambda_36kgl8($it) {
    return function (state) {
      var this_0 = $it;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.j() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.o(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      return new MutableSnapshot(tmp0, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
    var it = get_globalWriteObservers();
    var tmp0_elvis_lhs = singleOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = GlobalSnapshot$_init_$lambda_36kgl8(it);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp$ret$4 = tmp;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$4);
  }
  protoOf(GlobalSnapshot).f2l = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  protoOf(GlobalSnapshot).h2l = function () {
    advanceGlobalSnapshot_0();
  };
  protoOf(GlobalSnapshot).f2n = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).j2m = function (snapshot) {
    return this.f2n(snapshot);
  };
  protoOf(GlobalSnapshot).g2n = function (snapshot) {
    unsupported();
  };
  protoOf(GlobalSnapshot).k2m = function (snapshot) {
    return this.g2n(snapshot);
  };
  protoOf(GlobalSnapshot).c25 = function () {
    var message = 'Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(GlobalSnapshot).om = function () {
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    this.p2l();
  };
  function StateRecord() {
    this.x29_1 = currentSnapshot().h1s();
    this.y29_1 = null;
  }
  function trackPinning(id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var pinned = invalid.h2n(id);
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    return get_pinningTable().r1b(pinned);
  }
  function releasePinningLocked(handle) {
    _init_properties_Snapshot_kt__l6n1ng();
    get_pinningTable().n2n(handle);
  }
  function currentSnapshot() {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp0_elvis_lhs = get_threadSnapshot().zo();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().zo() : tmp0_elvis_lhs;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    mergeReadObserver = mergeReadObserver === VOID ? true : mergeReadObserver;
    _init_properties_Snapshot_kt__l6n1ng();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if (!(readObserver == null) && !(parentObserver_0 == null) && !(readObserver === parentObserver_0)) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      tmp = readObserver == null ? parentObserver_0 : readObserver;
    }
    return tmp;
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp;
    if (!(writeObserver == null) && !(parentObserver == null) && !(writeObserver === parentObserver)) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      tmp = writeObserver == null ? parentObserver : writeObserver;
    }
    return tmp;
  }
  function advanceGlobalSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var modified = null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().zo();
    modified = previousGlobalSnapshot.i2l();
    if (!(modified == null)) {
      get_pendingApplyObserverCount().r1b(1);
    }
    var result = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    var tmp0_safe_receiver = modified;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
      try {
        var observers = get_applyObservers();
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = observers.j() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = observers.o(index);
            // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
            item(wrapIntoSet(tmp0_safe_receiver), previousGlobalSnapshot);
          }
           while (inductionVariable <= last);
      }finally {
        get_pendingApplyObserverCount().r1b(-1);
      }
    }
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    checkAndOverwriteUnusedRecordsLocked();
    var tmp0_safe_receiver_0 = modified;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = tmp0_safe_receiver_0.h1f_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = tmp0_safe_receiver_0.g1f_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= lastIndex)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_0 = slot;
            if (!this_0.e3(this_0.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_1 = 0;
              if (inductionVariable_1 < bitCount)
                do {
                  var j = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp_1 = k[index_0];
                    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>.<anonymous>' call
                    var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
                    processForUnusedRecordsLocked(it);
                  }
                  slot = slot.c3(8);
                }
                 while (inductionVariable_1 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
      tmp_0 = Unit_instance;
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.c2o_1) {
      $this.c2o_1 = true;
      $this.b2o_1.j2m($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.b2o_1 = parent;
    this.c2o_1 = false;
    this.b2o_1.k2m(this);
  }
  protoOf(NestedMutableSnapshot).om = function () {
    if (!this.f1s_1) {
      protoOf(MutableSnapshot).om.call(this);
      deactivate(this);
    }
  };
  protoOf(NestedMutableSnapshot).c25 = function () {
    if (this.b2o_1.b25_1 || this.b2o_1.f1s_1)
      return new Failure(this);
    var modified = this.i2l();
    var id = this.h1s();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.b2o_1, this, this.b2o_1.j2l()) : null;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    validateOpen(this);
    if (modified == null || modified.j() === 0) {
      this.t2l();
    } else {
      var result = this.i2m(this.b2o_1.h1s(), optimisticMerges_0, this.b2o_1.j2l());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_safe_receiver = this.b2o_1.i2l();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.c1h(modified);
        tmp = tmp0_safe_receiver;
      }
      if (tmp == null) {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.b2o_1.d2m(modified);
        this.d2m(null);
      }
    }
    if (this.b2o_1.h1s() < id) {
      this.b2o_1.l2m();
    }
    this.b2o_1.k2l(this.b2o_1.j2l().a2m(id).m2m(this.y24_1));
    this.b2o_1.g2m(id);
    this.b2o_1.o2m(this.c2m());
    this.b2o_1.q2m(this.y24_1);
    this.b2o_1.p2m(this.z24_1);
    this.b25_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  function addRange(_this__u8e3s4, from, until) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.h2m(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    _init_properties_Snapshot_kt__l6n1ng();
    var modified = applyingSnapshot.i2l();
    var id = currentSnapshot.h1s();
    if (modified == null)
      return null;
    var start = applyingSnapshot.j2l().h2m(applyingSnapshot.h1s()).n2m(applyingSnapshot.y24_1);
    var result = null;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = modified.h1f_1;
    $l$block_1: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = modified.g1f_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.e3(this_0.a3().b3(7)).e3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.e3(new Long(255, 0)).y(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  $l$block_0: {
                    // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
                    var first = tmp1.a2a();
                    var tmp0_elvis_lhs = readable(first, id, invalidSnapshots);
                    var tmp_0;
                    if (tmp0_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_0 = tmp0_elvis_lhs;
                    }
                    var current = tmp_0;
                    var tmp1_elvis_lhs = readable(first, id, start);
                    var tmp_1;
                    if (tmp1_elvis_lhs == null) {
                      break $l$block_0;
                    } else {
                      tmp_1 = tmp1_elvis_lhs;
                    }
                    var previous = tmp_1;
                    if (!equals(current, previous)) {
                      var tmp2_elvis_lhs = readable(first, applyingSnapshot.h1s(), applyingSnapshot.j2l());
                      var tmp_2;
                      if (tmp2_elvis_lhs == null) {
                        readError();
                      } else {
                        tmp_2 = tmp2_elvis_lhs;
                      }
                      var applied = tmp_2;
                      var merged = tmp1.c2a(previous, current, applied);
                      if (!(merged == null)) {
                        var tmp3_elvis_lhs = result;
                        var tmp_3;
                        if (tmp3_elvis_lhs == null) {
                          // Inline function 'kotlin.collections.hashMapOf' call
                          // Inline function 'kotlin.also' call
                          var this_1 = HashMap_init_$Create$_0();
                          // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>.<anonymous>' call
                          result = this_1;
                          tmp_3 = this_1;
                        } else {
                          tmp_3 = tmp3_elvis_lhs;
                        }
                        // Inline function 'kotlin.collections.set' call
                        tmp_3.a5(current, merged);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                slot = slot.c3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block_1;
            }
          }
        }
         while (!(i === lastIndex));
    }
    return result;
  }
  function validateOpen(snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var openSnapshots = get_openSnapshots();
    if (!openSnapshots.o(snapshot.h1s())) {
      var tmp = snapshot.h1s();
      var tmp_0 = snapshot.f1s_1;
      var tmp0_safe_receiver = snapshot instanceof MutableSnapshot ? snapshot : null;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b25_1;
      var tmp_1 = toString(tmp1_elvis_lhs == null ? 'read-only' : tmp1_elvis_lhs);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.validateOpen.<anonymous>' call
      // Inline function 'kotlin.error' call
      var message = 'Snapshot is not open: id=' + tmp + ', disposed=' + tmp_0 + ', applied=' + tmp_1 + ', lowestPin=' + get_pinningTable().d2o(-1);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    _init_properties_Snapshot_kt__l6n1ng();
    var result = block(get_openSnapshots().a2m(previousGlobalSnapshot.h1s()));
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().a2m(previousGlobalSnapshot.h1s()));
    get_currentGlobalSnapshot().g17(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.om();
    set_openSnapshots(get_openSnapshots().h2m(globalId));
    return result;
  }
  function checkAndOverwriteUnusedRecordsLocked() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotWeakSet.removeIf' call
    var this_0 = get_extraStateObjects();
    var size = this_0.e2o_1;
    var currentUsed = 0;
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var entry = this_0.g2o_1[i];
        var value = entry == null ? null : entry.zo();
        var tmp;
        if (!(value == null)) {
          // Inline function 'androidx.compose.runtime.snapshots.checkAndOverwriteUnusedRecordsLocked.<anonymous>' call
          tmp = !!overwriteUnusedRecordsLocked(value);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (!(currentUsed === i)) {
            this_0.g2o_1[currentUsed] = entry;
            this_0.f2o_1[currentUsed] = this_0.f2o_1[i];
          }
          currentUsed = currentUsed + 1 | 0;
        }
      }
       while (inductionVariable < size);
    var inductionVariable_0 = currentUsed;
    if (inductionVariable_0 < size)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.g2o_1[i_0] = null;
        this_0.f2o_1[i_0] = 0;
      }
       while (inductionVariable_0 < size);
    if (!(currentUsed === size)) {
      this_0.e2o_1 = currentUsed;
    }
  }
  function processForUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (overwriteUnusedRecordsLocked(state)) {
      get_extraStateObjects().i2o(state);
    }
  }
  function readable(r, id, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.x29_1 < current.x29_1 ? current : candidate;
      }
      current = current.y29_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.error' call
    var message = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function takeNewSnapshot(block) {
    _init_properties_Snapshot_kt__l6n1ng();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function overwriteUnusedRecordsLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.a2a();
    var overwriteRecord = null;
    var validRecord = null;
    var reuseLimit = get_pinningTable().d2o(get_nextSnapshotId());
    var retainedRecords = 0;
    while (!(current == null)) {
      var currentId = current.x29_1;
      if (!(currentId === 0)) {
        if (currentId < reuseLimit) {
          if (validRecord == null) {
            validRecord = current;
            retainedRecords = retainedRecords + 1 | 0;
          } else {
            var tmp;
            if (current.x29_1 < validRecord.x29_1) {
              tmp = current;
            } else {
              var result = validRecord;
              validRecord = current;
              tmp = result;
            }
            var recordToOverwrite = tmp;
            if (overwriteRecord == null) {
              var tmp0 = state.a2a();
              var tmp$ret$1;
              $l$block: {
                // Inline function 'androidx.compose.runtime.snapshots.findYoungestOr' call
                var current_0 = tmp0;
                var youngest = tmp0;
                while (!(current_0 == null)) {
                  // Inline function 'androidx.compose.runtime.snapshots.overwriteUnusedRecordsLocked.<anonymous>' call
                  if (current_0.x29_1 >= reuseLimit) {
                    tmp$ret$1 = current_0;
                    break $l$block;
                  }
                  if (youngest.x29_1 < current_0.x29_1)
                    youngest = current_0;
                  current_0 = current_0.y29_1;
                }
                tmp$ret$1 = youngest;
              }
              overwriteRecord = tmp$ret$1;
            }
            recordToOverwrite.x29_1 = 0;
            recordToOverwrite.s29(overwriteRecord);
          }
        } else {
          retainedRecords = retainedRecords + 1 | 0;
        }
      }
      current = current.y29_1;
    }
    return retainedRecords > 1;
  }
  function valid(data, snapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return valid_0(snapshot, data.x29_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    _init_properties_Snapshot_kt__l6n1ng();
    return !(candidateSnapshot === 0) && candidateSnapshot <= currentSnapshot && !invalid.o(candidateSnapshot);
  }
  function readable_0(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var snapshot = Companion_instance_12.f1h();
    var tmp0_safe_receiver = snapshot.q2l();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.h1s(), snapshot.j2l());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_instance_12.f1h();
      var tmp_0 = state.a2a();
      var tmp0_elvis_lhs = readable(tmp_0 instanceof StateRecord ? tmp_0 : THROW_CCE(), syncSnapshot.h1s(), syncSnapshot.j2l());
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        readError();
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function current(r) {
    _init_properties_Snapshot_kt__l6n1ng();
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var snapshot = Companion_instance_12.f1h();
    var tmp0_elvis_lhs = readable(r, snapshot.h1s(), snapshot.j2l());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      var syncSnapshot = Companion_instance_12.f1h();
      tmp = readable(r, syncSnapshot.h1s(), syncSnapshot.j2l());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function notifyWrite(snapshot, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    snapshot.m2l(snapshot.n2l() + 1 | 0);
    var tmp1_safe_receiver = snapshot.r2l();
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.o2l()) {
      snapshot.s2l(state);
    }
    var id = snapshot.h1s();
    if (candidate.x29_1 === id)
      return candidate;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.overwritableRecord.<anonymous>' call
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.x29_1 = id;
    if (!(candidate.x29_1 === 1)) {
      snapshot.s2l(state);
    }
    return newData;
  }
  function newOverwritableRecordLocked(_this__u8e3s4, state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var tmp = usedLocked(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      tmp0_safe_receiver.x29_1 = 2147483647;
      tmp_0 = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.t29();
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecordLocked.<anonymous>' call
      this_0.x29_1 = 2147483647;
      this_0.y29_1 = state.a2a();
      state.b2a(this_0 instanceof StateRecord ? this_0 : THROW_CCE());
      var tmp_2 = this_0;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function usedLocked(state) {
    _init_properties_Snapshot_kt__l6n1ng();
    var current = state.a2a();
    var validRecord = null;
    var reuseLimit = get_pinningTable().d2o(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_13().f2m_1;
    while (!(current == null)) {
      var currentId = current.x29_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.x29_1 < validRecord.x29_1 ? current : validRecord;
        }
      }
      current = current.y29_1;
    }
    return null;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    if (snapshot.o2l()) {
      snapshot.s2l(state);
    }
    var id = snapshot.h1s();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.j2l());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.x29_1 === snapshot.h1s())
      return readData;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writableRecord.<anonymous>' call
    var tmp0_elvis_lhs_0 = readable(state.a2a(), id, snapshot.j2l());
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      readError();
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    var newReadData = tmp_0;
    var tmp_1 = newReadData.x29_1 === id ? newReadData : newWritableRecordLocked(newReadData, state, snapshot);
    var newData = tmp_1 instanceof StateRecord ? tmp_1 : THROW_CCE();
    if (!(readData.x29_1 === 1)) {
      snapshot.s2l(state);
    }
    return newData;
  }
  function newWritableRecordLocked(_this__u8e3s4, state, snapshot) {
    _init_properties_Snapshot_kt__l6n1ng();
    var newData = newOverwritableRecordLocked(_this__u8e3s4, state);
    newData.s29(_this__u8e3s4);
    newData.x29_1 = snapshot.h1s();
    return newData;
  }
  function access$_get_openSnapshots_$tSnapshotKt_7cpqp5() {
    return get_openSnapshots();
  }
  function access$_set_openSnapshots_$tSnapshotKt_9lk9nh(_set____db54di) {
    return set_openSnapshots(_set____db54di);
  }
  function access$_get_nextSnapshotId_$tSnapshotKt_vxgvey() {
    return get_nextSnapshotId();
  }
  function access$_set_nextSnapshotId_$tSnapshotKt_xcaltq(_set____db54di) {
    return set_nextSnapshotId(_set____db54di);
  }
  function emptyLambda$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_instance;
    };
  }
  function advanceGlobalSnapshot$lambda(it) {
    _init_properties_Snapshot_kt__l6n1ng();
    return Unit_instance;
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      set_openSnapshots(get_openSnapshots().h2m(result.h1s()));
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function _init_properties_Snapshot_kt__l6n1ng() {
    if (!properties_initialized_Snapshot_kt_2vlcoq) {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = new Object();
      openSnapshots = Companion_getInstance_13().f2m_1;
      nextSnapshotId = 2;
      pinningTable = new SnapshotDoubleIndexHeap();
      extraStateObjects = new SnapshotWeakSet();
      applyObservers = emptyList();
      globalWriteObservers = emptyList();
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      // Inline function 'kotlin.also' call
      var this_0 = new GlobalSnapshot(tmp0, Companion_getInstance_13().f2m_1);
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().h2m(this_0.h1s()));
      currentGlobalSnapshot = new AtomicReference(this_0);
      snapshotInitializer = get_currentGlobalSnapshot().zo();
      pendingApplyObserverCount = new AtomicInt(0);
    }
  }
  function shiftUp($this, index) {
    var values = $this.j2n_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap_1($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.j2n_1;
    var half = $this.i2n_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.i2n_1 && values[right] < values[left]) {
        if (values[right] < values[current]) {
          swap_1($this, right, current);
          current = right;
        } else
          return Unit_instance;
      } else if (values[left] < values[current]) {
        swap_1($this, left, current);
        current = left;
      } else
        return Unit_instance;
    }
  }
  function swap_1($this, a, b) {
    var values = $this.j2n_1;
    var index = $this.k2n_1;
    var handles = $this.l2n_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.j2n_1.length;
    if (atLeast <= capacity)
      return Unit_instance;
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    var tmp0 = $this.j2n_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = tmp0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, newValues, 0, 0, endIndex);
    var tmp5 = $this.k2n_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = tmp5.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp5;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, newIndex, 0, 0, endIndex_0);
    $this.j2n_1 = newValues;
    $this.k2n_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.l2n_1.length;
    if ($this.m2n_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = tmp_2 + 1 | 0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      var tmp0 = $this.l2n_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = tmp0.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_3, newHandles, 0, 0, endIndex);
      $this.l2n_1 = newHandles;
    }
    var handle = $this.m2n_1;
    $this.m2n_1 = $this.l2n_1[$this.m2n_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.l2n_1[handle] = $this.m2n_1;
    $this.m2n_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.i2n_1 = 0;
    this.j2n_1 = new Int32Array(16);
    this.k2n_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = new Int32Array(16);
    while (tmp_0 < 16) {
      var tmp_2 = tmp_0;
      tmp_1[tmp_2] = tmp_2 + 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.l2n_1 = tmp_1;
    this.m2n_1 = 0;
  }
  protoOf(SnapshotDoubleIndexHeap).d2o = function (default_0) {
    return this.i2n_1 > 0 ? this.j2n_1[0] : default_0;
  };
  protoOf(SnapshotDoubleIndexHeap).r1b = function (value) {
    ensure(this, this.i2n_1 + 1 | 0);
    var tmp1 = this.i2n_1;
    this.i2n_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.j2n_1[i] = value;
    this.k2n_1[i] = handle;
    this.l2n_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  protoOf(SnapshotDoubleIndexHeap).n2n = function (handle) {
    var i = this.l2n_1[handle];
    swap_1(this, i, this.i2n_1 - 1 | 0);
    this.i2n_1 = this.i2n_1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  function Companion_13() {
    Companion_instance_14 = this;
    this.f2m_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  var Companion_instance_14;
  function Companion_getInstance_13() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function access$_get_upperSet__2kurhn($this) {
    return $this.w2l_1;
  }
  function access$_get_lowerSet__9mjss6($this) {
    return $this.x2l_1;
  }
  function access$_get_lowerBound__ou44uq($this) {
    return $this.y2l_1;
  }
  function access$_get_belowBound__uc78e($this) {
    return $this.z2l_1;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.r2o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SnapshotIdSet$iterator$slambda).a2p = function ($this$sequence, $completion) {
    var tmp = this.b2p($this$sequence, $completion);
    tmp.a9_1 = Unit_instance;
    tmp.b9_1 = null;
    return tmp.g9();
  };
  protoOf(SnapshotIdSet$iterator$slambda).s9 = function (p1, $completion) {
    return this.a2p(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SnapshotIdSet$iterator$slambda).g9 = function () {
    var suspendResult = this.a9_1;
    $sm: do
      try {
        var tmp = this.y8_1;
        switch (tmp) {
          case 0:
            this.z8_1 = 15;
            this.t2o_1 = this.r2o_1.z2l_1;
            if (!(this.t2o_1 == null)) {
              this.u2o_1 = intArrayIterator(this.t2o_1);
              this.y8_1 = 1;
              continue $sm;
            } else {
              this.y8_1 = 4;
              continue $sm;
            }

          case 1:
            if (!this.u2o_1.h()) {
              this.y8_1 = 3;
              continue $sm;
            }

            this.v2o_1 = this.u2o_1.i();
            this.y8_1 = 2;
            suspendResult = this.s2o_1.ve(this.v2o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y8_1 = 1;
            continue $sm;
          case 3:
            this.y8_1 = 4;
            continue $sm;
          case 4:
            if (!this.r2o_1.x2l_1.equals(new Long(0, 0))) {
              this.w2o_1 = until(0, 64).g();
              this.y8_1 = 5;
              continue $sm;
            } else {
              this.y8_1 = 9;
              continue $sm;
            }

          case 5:
            if (!this.w2o_1.h()) {
              this.y8_1 = 8;
              continue $sm;
            }

            this.x2o_1 = this.w2o_1.i();
            if (!this.r2o_1.x2l_1.e3((new Long(1, 0)).b3(this.x2o_1)).equals(new Long(0, 0))) {
              this.y8_1 = 6;
              suspendResult = this.s2o_1.ve(this.x2o_1 + this.r2o_1.y2l_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y8_1 = 7;
              continue $sm;
            }

          case 6:
            this.y8_1 = 7;
            continue $sm;
          case 7:
            this.y8_1 = 5;
            continue $sm;
          case 8:
            this.y8_1 = 9;
            continue $sm;
          case 9:
            if (!this.r2o_1.w2l_1.equals(new Long(0, 0))) {
              this.y2o_1 = until(0, 64).g();
              this.y8_1 = 10;
              continue $sm;
            } else {
              this.y8_1 = 14;
              continue $sm;
            }

          case 10:
            if (!this.y2o_1.h()) {
              this.y8_1 = 13;
              continue $sm;
            }

            this.z2o_1 = this.y2o_1.i();
            if (!this.r2o_1.w2l_1.e3((new Long(1, 0)).b3(this.z2o_1)).equals(new Long(0, 0))) {
              this.y8_1 = 11;
              suspendResult = this.s2o_1.ve((this.z2o_1 + 64 | 0) + this.r2o_1.y2l_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.y8_1 = 12;
              continue $sm;
            }

          case 11:
            this.y8_1 = 12;
            continue $sm;
          case 12:
            this.y8_1 = 10;
            continue $sm;
          case 13:
            this.y8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            throw this.b9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.z8_1 === 15) {
          throw e;
        } else {
          this.y8_1 = this.z8_1;
          this.b9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SnapshotIdSet$iterator$slambda).b2p = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.r2o_1, completion);
    i.s2o_1 = $this$sequence;
    return i;
  };
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.a2p($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_13();
    this.w2l_1 = upperSet;
    this.x2l_1 = lowerSet;
    this.y2l_1 = lowerBound;
    this.z2l_1 = belowBound;
  }
  protoOf(SnapshotIdSet).o = function (bit) {
    var offset = bit - this.y2l_1 | 0;
    if (offset >= 0 && offset < 64) {
      return !(new Long(1, 0)).b3(offset).e3(this.x2l_1).equals(new Long(0, 0));
    } else if (offset >= 64 && offset < 128) {
      return !(new Long(1, 0)).b3(offset - 64 | 0).e3(this.w2l_1).equals(new Long(0, 0));
    } else if (offset > 0) {
      return false;
    } else {
      var tmp0_safe_receiver = this.z2l_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
        tmp = binarySearch(tmp0_safe_receiver, bit) >= 0;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    }
  };
  protoOf(SnapshotIdSet).h2m = function (bit) {
    var offset = bit - this.y2l_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).b3(offset);
      if (this.x2l_1.e3(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.w2l_1, this.x2l_1.f3(mask), this.y2l_1, this.z2l_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).b3(offset - 64 | 0);
      if (this.w2l_1.e3(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.w2l_1.f3(mask_0), this.x2l_1, this.y2l_1, this.z2l_1);
      }
    } else if (offset >= 128) {
      if (!this.o(bit)) {
        var newUpperSet = this.w2l_1;
        var newLowerSet = this.x2l_1;
        var newLowerBound = this.y2l_1;
        var newBelowBound = null;
        var targetLowerBound = imul((bit + 1 | 0) / 64 | 0, 64);
        $l$loop: while (newLowerBound < targetLowerBound) {
          if (!newLowerSet.equals(new Long(0, 0))) {
            if (newBelowBound == null) {
              // Inline function 'kotlin.collections.mutableListOf' call
              // Inline function 'kotlin.apply' call
              var this_0 = ArrayList_init_$Create$();
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
              var tmp0_safe_receiver = this.z2l_1;
              if (tmp0_safe_receiver == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>' call
                // Inline function 'kotlin.collections.forEach' call
                var inductionVariable = 0;
                var last = tmp0_safe_receiver.length;
                while (inductionVariable < last) {
                  var element = tmp0_safe_receiver[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                  this_0.e(element);
                }
              }
              newBelowBound = this_0;
            }
            // Inline function 'kotlin.repeat' call
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < 64)
              do {
                var index = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                if (!newLowerSet.e3((new Long(1, 0)).b3(index)).equals(new Long(0, 0))) {
                  newBelowBound.e(index + newLowerBound | 0);
                }
              }
               while (inductionVariable_0 < 64);
          }
          if (newUpperSet.equals(new Long(0, 0))) {
            newLowerBound = targetLowerBound;
            newLowerSet = new Long(0, 0);
            break $l$loop;
          }
          newLowerSet = newUpperSet;
          newUpperSet = new Long(0, 0);
          newLowerBound = newLowerBound + 64 | 0;
        }
        var tmp = newUpperSet;
        var tmp_0 = newLowerSet;
        var tmp_1 = newLowerBound;
        var tmp0_safe_receiver_0 = newBelowBound;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
        return (new SnapshotIdSet(tmp, tmp_0, tmp_1, tmp1_elvis_lhs == null ? this.z2l_1 : tmp1_elvis_lhs)).h2m(bit);
      }
    } else {
      var tmp2_elvis_lhs = this.z2l_1;
      var tmp_2;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.intArrayOf' call
        var tmp$ret$3 = new Int32Array([bit]);
        return new SnapshotIdSet(this.w2l_1, this.x2l_1, this.y2l_1, tmp$ret$3);
      } else {
        tmp_2 = tmp2_elvis_lhs;
      }
      var array = tmp_2;
      var location = binarySearch(array, bit);
      if (location < 0) {
        var insertLocation = -(location + 1 | 0) | 0;
        var newSize = array.length + 1 | 0;
        var newBelowBound_0 = new Int32Array(newSize);
        // Inline function 'kotlin.collections.copyInto' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_3, newBelowBound_0, 0, 0, insertLocation);
        var tmp12 = insertLocation + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = newSize - 1 | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = array;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_4, newBelowBound_0, tmp12, insertLocation, endIndex);
        newBelowBound_0[insertLocation] = bit;
        return new SnapshotIdSet(this.w2l_1, this.x2l_1, this.y2l_1, newBelowBound_0);
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).a2m = function (bit) {
    var offset = bit - this.y2l_1 | 0;
    if (offset >= 0 && offset < 64) {
      var mask = (new Long(1, 0)).b3(offset);
      if (!this.x2l_1.e3(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.w2l_1, this.x2l_1.e3(mask.a3()), this.y2l_1, this.z2l_1);
      }
    } else if (offset >= 64 && offset < 128) {
      var mask_0 = (new Long(1, 0)).b3(offset - 64 | 0);
      if (!this.w2l_1.e3(mask_0).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.w2l_1.e3(mask_0.a3()), this.x2l_1, this.y2l_1, this.z2l_1);
      }
    } else if (offset < 0) {
      var array = this.z2l_1;
      if (!(array == null)) {
        var location = binarySearch(array, bit);
        if (location >= 0) {
          var newSize = array.length - 1 | 0;
          if (newSize === 0) {
            return new SnapshotIdSet(this.w2l_1, this.x2l_1, this.y2l_1, null);
          }
          var newBelowBound = new Int32Array(newSize);
          if (location > 0) {
            // Inline function 'kotlin.collections.copyInto' call
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp, newBelowBound, 0, 0, location);
          }
          if (location < newSize) {
            var tmp8 = location + 1 | 0;
            // Inline function 'kotlin.collections.copyInto' call
            var endIndex = newSize + 1 | 0;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_0 = array;
            // Inline function 'kotlin.js.unsafeCast' call
            // Inline function 'kotlin.js.asDynamic' call
            arrayCopy(tmp_0, newBelowBound, location, tmp8, endIndex);
          }
          return new SnapshotIdSet(this.w2l_1, this.x2l_1, this.y2l_1, newBelowBound);
        }
      }
    }
    return this;
  };
  protoOf(SnapshotIdSet).m2m = function (bits) {
    if (bits === Companion_getInstance_13().f2m_1)
      return this;
    if (this === Companion_getInstance_13().f2m_1)
      return Companion_getInstance_13().f2m_1;
    var tmp;
    if (bits.y2l_1 === this.y2l_1 && bits.z2l_1 === this.z2l_1) {
      tmp = new SnapshotIdSet(this.w2l_1.e3(bits.w2l_1.a3()), this.x2l_1.e3(bits.x2l_1.a3()), this.y2l_1, this.z2l_1);
    } else {
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
      var accumulator = this;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
      var belowBound = access$_get_belowBound__uc78e(bits);
      if (!(belowBound == null)) {
        var inductionVariable = 0;
        var last = belowBound.length;
        while (inductionVariable < last) {
          var element = belowBound[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
          accumulator = accumulator.a2m(element);
        }
      }
      if (!access$_get_lowerSet__9mjss6(bits).equals(new Long(0, 0))) {
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 64)
          do {
            var index = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!access$_get_lowerSet__9mjss6(bits).e3((new Long(1, 0)).b3(index)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_0 = index + access$_get_lowerBound__ou44uq(bits) | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.a2m(element_0);
            }
          }
           while (inductionVariable_0 < 64);
      }
      if (!access$_get_upperSet__2kurhn(bits).equals(new Long(0, 0))) {
        var inductionVariable_1 = 0;
        if (inductionVariable_1 < 64)
          do {
            var index_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (!access$_get_upperSet__2kurhn(bits).e3((new Long(1, 0)).b3(index_0)).equals(new Long(0, 0))) {
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
              var element_1 = (index_0 + 64 | 0) + access$_get_lowerBound__ou44uq(bits) | 0;
              // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
              accumulator = accumulator.a2m(element_1);
            }
          }
           while (inductionVariable_1 < 64);
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).n2m = function (bits) {
    if (bits === Companion_getInstance_13().f2m_1)
      return this;
    if (this === Companion_getInstance_13().f2m_1)
      return bits;
    var tmp;
    if (bits.y2l_1 === this.y2l_1 && bits.z2l_1 === this.z2l_1) {
      tmp = new SnapshotIdSet(this.w2l_1.f3(bits.w2l_1), this.x2l_1.f3(bits.x2l_1), this.y2l_1, this.z2l_1);
    } else {
      var tmp_0;
      if (this.z2l_1 == null) {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator = bits;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound = access$_get_belowBound__uc78e(this);
        if (!(belowBound == null)) {
          var inductionVariable = 0;
          var last = belowBound.length;
          while (inductionVariable < last) {
            var element = belowBound[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator = accumulator.h2m(element);
          }
        }
        if (!access$_get_lowerSet__9mjss6(this).equals(new Long(0, 0))) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 64)
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!access$_get_lowerSet__9mjss6(this).e3((new Long(1, 0)).b3(index)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_0 = index + access$_get_lowerBound__ou44uq(this) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.h2m(element_0);
              }
            }
             while (inductionVariable_0 < 64);
        }
        if (!access$_get_upperSet__2kurhn(this).equals(new Long(0, 0))) {
          var inductionVariable_1 = 0;
          if (inductionVariable_1 < 64)
            do {
              var index_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              if (!access$_get_upperSet__2kurhn(this).e3((new Long(1, 0)).b3(index_0)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_1 = (index_0 + 64 | 0) + access$_get_lowerBound__ou44uq(this) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator = accumulator.h2m(element_1);
              }
            }
             while (inductionVariable_1 < 64);
        }
        tmp_0 = accumulator;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold' call
        var accumulator_0 = this;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastForEach' call
        var belowBound_0 = access$_get_belowBound__uc78e(bits);
        if (!(belowBound_0 == null)) {
          var inductionVariable_2 = 0;
          var last_0 = belowBound_0.length;
          while (inductionVariable_2 < last_0) {
            var element_2 = belowBound_0[inductionVariable_2];
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
            accumulator_0 = accumulator_0.h2m(element_2);
          }
        }
        if (!access$_get_lowerSet__9mjss6(bits).equals(new Long(0, 0))) {
          var inductionVariable_3 = 0;
          if (inductionVariable_3 < 64)
            do {
              var index_1 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              if (!access$_get_lowerSet__9mjss6(bits).e3((new Long(1, 0)).b3(index_1)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_3 = index_1 + access$_get_lowerBound__ou44uq(bits) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.h2m(element_3);
              }
            }
             while (inductionVariable_3 < 64);
        }
        if (!access$_get_upperSet__2kurhn(bits).equals(new Long(0, 0))) {
          var inductionVariable_4 = 0;
          if (inductionVariable_4 < 64)
            do {
              var index_2 = inductionVariable_4;
              inductionVariable_4 = inductionVariable_4 + 1 | 0;
              if (!access$_get_upperSet__2kurhn(bits).e3((new Long(1, 0)).b3(index_2)).equals(new Long(0, 0))) {
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.fastFold.<anonymous>' call
                var element_4 = (index_2 + 64 | 0) + access$_get_lowerBound__ou44uq(bits) | 0;
                // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
                accumulator_0 = accumulator_0.h2m(element_4);
              }
            }
             while (inductionVariable_4 < 64);
        }
        tmp_0 = accumulator_0;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SnapshotIdSet).g = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).g();
  };
  protoOf(SnapshotIdSet).h2n = function (default_0) {
    var belowBound = this.z2l_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.x2l_1.equals(new Long(0, 0)))
      return this.y2l_1 + countTrailingZeroBits(this.x2l_1) | 0;
    if (!this.w2l_1.equals(new Long(0, 0)))
      return (this.y2l_1 + 64 | 0) + countTrailingZeroBits(this.w2l_1) | 0;
    return default_0;
  };
  protoOf(SnapshotIdSet).toString = function () {
    var tmp = anyToString(this);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var _iterator__ex2g4s = this.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      var tmp$ret$0 = item.toString();
      destination.e(tmp$ret$0);
    }
    return tmp + ' [' + fastJoinToString(destination) + ']';
  };
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function get_sync() {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    return sync;
  }
  var sync;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.e2p_1 = list;
    this.f2p_1 = 0;
    this.g2p_1 = 0;
  }
  protoOf(StateListStateRecord).s29 = function (value) {
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_sync();
    // Inline function 'androidx.compose.runtime.snapshots.StateListStateRecord.assign.<anonymous>' call
    var tmp = this;
    tmp.e2p_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).e2p_1;
    this.f2p_1 = value.f2p_1;
    this.g2p_1 = value.g2p_1;
  };
  protoOf(StateListStateRecord).t29 = function () {
    return new StateListStateRecord(this.e2p_1);
  };
  function mutateBoolean($this, block) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = $this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.f2p_1;
      oldList = current_0.e2p_1;
      var builder = ensureNotNull(oldList).s2g();
      result = block(builder);
      var newList = builder.t2g();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        var tmp_1 = $this.h2p_1;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var this_1 = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_lock();
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_instance_12.f1h();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var $this$writable = writableRecord(this_1, $this, snapshot);
        // Inline function 'androidx.compose.runtime.synchronized' call
        get_sync();
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp_2;
        if ($this$writable.f2p_1 === currentModification) {
          $this$writable.e2p_1 = newList;
          $this$writable.f2p_1 = $this$writable.f2p_1 + 1 | 0;
          $this$writable.g2p_1 = $this$writable.g2p_1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        // Inline function 'kotlin.also' call
        var this_2 = tmp_2;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, $this);
        tmp_0 = this_2;
      }
      if (tmp_0)
        break $l$loop;
    }
    return result;
  }
  function SnapshotStateList$addAll$lambda($index, $elements) {
    return function (it) {
      return it.w1($index, $elements);
    };
  }
  function SnapshotStateList() {
    var tmp = this;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>' call
    var list = persistentListOf();
    // Inline function 'kotlin.also' call
    var this_0 = new StateListStateRecord(list);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>.<anonymous>' call
    if (Companion_instance_12.z29()) {
      var tmp_0 = this_0;
      // Inline function 'kotlin.also' call
      var this_1 = new StateListStateRecord(list);
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.firstStateRecord.<anonymous>.<anonymous>.<anonymous>' call
      this_1.x29_1 = 1;
      tmp_0.y29_1 = this_1;
    }
    tmp.h2p_1 = this_0;
  }
  protoOf(SnapshotStateList).a2a = function () {
    return this.h2p_1;
  };
  protoOf(SnapshotStateList).b2a = function (value) {
    value.y29_1 = this.h2p_1;
    var tmp = this;
    tmp.h2p_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  protoOf(SnapshotStateList).i2p = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    var tmp = this.h2p_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-structure>.<anonymous>' call
    return current(this_0).g2p_1;
  };
  protoOf(SnapshotStateList).j2p = function () {
    var tmp = this.h2p_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  protoOf(SnapshotStateList).j = function () {
    return this.j2p().e2p_1.j();
  };
  protoOf(SnapshotStateList).me = function (element) {
    return this.j2p().e2p_1.r(element);
  };
  protoOf(SnapshotStateList).r = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.me((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).o = function (index) {
    return this.j2p().e2p_1.o(index);
  };
  protoOf(SnapshotStateList).k2p = function (element) {
    return this.j2p().e2p_1.s(element);
  };
  protoOf(SnapshotStateList).s = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.k2p((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).p = function () {
    return this.j2p().e2p_1.p();
  };
  protoOf(SnapshotStateList).g = function () {
    return this.t1();
  };
  protoOf(SnapshotStateList).t1 = function () {
    return new StateListIterator(this, 0);
  };
  protoOf(SnapshotStateList).q = function (index) {
    return new StateListIterator(this, index);
  };
  protoOf(SnapshotStateList).toString = function () {
    var tmp = this.h2p_1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.toString.<anonymous>' call
    var it = current(this_0);
    return 'SnapshotStateList(value=' + toString(it.e2p_1) + ')@' + hashCode(this);
  };
  protoOf(SnapshotStateList).n1s = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.f2p_1;
      oldList = current_0.e2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).e(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.f1h();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.f2p_1 === currentModification) {
        $this$writable.e2p_1 = newList;
        if (true) {
          $this$writable.g2p_1 = $this$writable.g2p_1 + 1 | 0;
        }
        $this$writable.f2p_1 = $this$writable.f2p_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).e = function (element) {
    return this.n1s((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).l2p = function (index, element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.f2p_1;
      oldList = current_0.e2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var newList = ensureNotNull(oldList).v2g(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.f1h();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.f2p_1 === currentModification) {
        $this$writable.e2p_1 = newList;
        if (true) {
          $this$writable.g2p_1 = $this$writable.g2p_1 + 1 | 0;
        }
        $this$writable.f2p_1 = $this$writable.f2p_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return Unit_instance;
  };
  protoOf(SnapshotStateList).a2 = function (index, element) {
    return this.l2p(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).m2p = function (index, elements) {
    return mutateBoolean(this, SnapshotStateList$addAll$lambda(index, elements));
  };
  protoOf(SnapshotStateList).w1 = function (index, elements) {
    return this.m2p(index, elements);
  };
  protoOf(SnapshotStateList).n2p = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.f2p_1;
      oldList = current_0.e2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var newList = ensureNotNull(oldList).n(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.f1h();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.f2p_1 === currentModification) {
        $this$writable.e2p_1 = newList;
        if (true) {
          $this$writable.g2p_1 = $this$writable.g2p_1 + 1 | 0;
        }
        $this$writable.f2p_1 = $this$writable.f2p_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).n = function (elements) {
    return this.n2p(elements);
  };
  protoOf(SnapshotStateList).y1 = function () {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    var tmp = this.h2p_1;
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_lock();
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_instance_12.f1h();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var $this$writable = writableRecord(this_0, this, snapshot);
    // Inline function 'androidx.compose.runtime.synchronized' call
    get_sync();
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    $this$writable.e2p_1 = persistentListOf();
    $this$writable.f2p_1 = $this$writable.f2p_1 + 1 | 0;
    $this$writable.g2p_1 = $this$writable.g2p_1 + 1 | 0;
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
  };
  protoOf(SnapshotStateList).o2p = function (element) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.f2p_1;
      oldList = current_0.e2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var newList = ensureNotNull(oldList).v1(element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.f1h();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.f2p_1 === currentModification) {
        $this$writable.e2p_1 = newList;
        if (true) {
          $this$writable.g2p_1 = $this$writable.g2p_1 + 1 | 0;
        }
        $this$writable.f2p_1 = $this$writable.f2p_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).v1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.o2p((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(SnapshotStateList).p2p = function (elements) {
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_0 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_0);
      currentModification = current_0.f2p_1;
      oldList = current_0.e2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAll.<anonymous>' call
      var newList = ensureNotNull(oldList).x1(elements);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_1 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.f1h();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_1, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.f2p_1 === currentModification) {
        $this$writable.e2p_1 = newList;
        if (true) {
          $this$writable.g2p_1 = $this$writable.g2p_1 + 1 | 0;
        }
        $this$writable.f2p_1 = $this$writable.f2p_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_2 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_2) {
        result = true;
        break $l$loop_0;
      }
    }
    return result;
  };
  protoOf(SnapshotStateList).x1 = function (elements) {
    return this.p2p(elements);
  };
  protoOf(SnapshotStateList).b2 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.o(index);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.f2p_1;
      oldList = current_0.e2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).b2(index);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.f1h();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.f2p_1 === currentModification) {
        $this$writable.e2p_1 = newList;
        if (true) {
          $this$writable.g2p_1 = $this$writable.g2p_1 + 1 | 0;
        }
        $this$writable.f2p_1 = $this$writable.f2p_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_3 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).q2p = function (index, element) {
    // Inline function 'kotlin.also' call
    var this_0 = this.o(index);
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var this_1 = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var current_0 = current(this_1);
      currentModification = current_0.f2p_1;
      oldList = current_0.e2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var newList = ensureNotNull(oldList).z1(index, element);
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp_0 = this.h2p_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var this_2 = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_lock();
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_instance_12.f1h();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var $this$writable = writableRecord(this_2, this, snapshot);
      // Inline function 'androidx.compose.runtime.synchronized' call
      get_sync();
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_1;
      if ($this$writable.f2p_1 === currentModification) {
        $this$writable.e2p_1 = newList;
        if (false) {
          $this$writable.g2p_1 = $this$writable.g2p_1 + 1 | 0;
        }
        $this$writable.f2p_1 = $this$writable.f2p_1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      // Inline function 'kotlin.also' call
      var this_3 = tmp_1;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      if (this_3) {
        result = true;
        break $l$loop_0;
      }
    }
    return this_0;
  };
  protoOf(SnapshotStateList).z1 = function (index, element) {
    return this.q2p(index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function validateModification($this) {
    if (!($this.r2p_1.i2p() === $this.u2p_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.r2p_1 = list;
    this.s2p_1 = offset - 1 | 0;
    this.t2p_1 = -1;
    this.u2p_1 = this.r2p_1.i2p();
  }
  protoOf(StateListIterator).k4 = function () {
    validateModification(this);
    validateRange(this.s2p_1, this.r2p_1.j());
    this.t2p_1 = this.s2p_1;
    // Inline function 'kotlin.also' call
    var this_0 = this.r2p_1.o(this.s2p_1);
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    this.s2p_1 = this.s2p_1 - 1 | 0;
    return this_0;
  };
  protoOf(StateListIterator).l4 = function () {
    return this.s2p_1;
  };
  protoOf(StateListIterator).h = function () {
    return this.s2p_1 < (this.r2p_1.j() - 1 | 0);
  };
  protoOf(StateListIterator).i = function () {
    validateModification(this);
    var newIndex = this.s2p_1 + 1 | 0;
    this.t2p_1 = newIndex;
    validateRange(newIndex, this.r2p_1.j());
    // Inline function 'kotlin.also' call
    var this_0 = this.r2p_1.o(newIndex);
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.s2p_1 = newIndex;
    return this_0;
  };
  protoOf(StateListIterator).z3 = function () {
    validateModification(this);
    this.r2p_1.b2(this.s2p_1);
    this.s2p_1 = this.s2p_1 - 1 | 0;
    this.t2p_1 = -1;
    this.u2p_1 = this.r2p_1.i2p();
  };
  function validateRange(index, size) {
    _init_properties_SnapshotStateList_kt__mu1ud5();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function _init_properties_SnapshotStateList_kt__mu1ud5() {
    if (!properties_initialized_SnapshotStateList_kt_lcuarf) {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync = new Object();
    }
  }
  var sync_0;
  function unsupported() {
    _init_properties_SnapshotStateMap_kt__p43o8h();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function _init_properties_SnapshotStateMap_kt__p43o8h() {
    if (!properties_initialized_SnapshotStateMap_kt_9i73ip) {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_0 = new Object();
    }
  }
  function find_1($this, value, hash) {
    var low = 0;
    var high = $this.e2o_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midHash = $this.f2o_1[mid];
      if (midHash < hash)
        low = mid + 1 | 0;
      else if (midHash > hash)
        high = mid - 1 | 0;
      else {
        var tmp0_safe_receiver = $this.g2o_1[mid];
        var midVal = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zo();
        if (value === midVal)
          return mid;
        return findExactIndex($this, mid, value, hash);
      }
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!($this.f2o_1[i] === valueHash)) {
          break $l$loop;
        }
        var tmp1_safe_receiver = $this.g2o_1[i];
        var v = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zo();
        if (v === value) {
          return i;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.e2o_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (!($this.f2o_1[i_0] === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
        var tmp3_safe_receiver = $this.g2o_1[i_0];
        var v_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.zo();
        if (v_0 === value) {
          return i_0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.e2o_1 + 1 | 0) | 0;
  }
  function SnapshotWeakSet() {
    this.e2o_1 = 0;
    this.f2o_1 = new Int32Array(16);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.g2o_1 = Array(16);
  }
  protoOf(SnapshotWeakSet).i2o = function (value) {
    var index;
    var size = this.e2o_1;
    var hash = identityHashCode(value);
    if (size > 0) {
      index = find_1(this, value, hash);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    var capacity = this.g2o_1.length;
    if (size === capacity) {
      var newCapacity = imul(capacity, 2);
      // Inline function 'kotlin.arrayOfNulls' call
      var newValues = Array(newCapacity);
      var newHashes = new Int32Array(newCapacity);
      var tmp1 = this.g2o_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = insertIndex + 1 | 0;
      arrayCopy(tmp1, newValues, destinationOffset, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = this.g2o_1;
      arrayCopy(this_0, newValues, 0, 0, insertIndex);
      var tmp11 = this.f2o_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_0 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp11;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, newHashes, destinationOffset_0, insertIndex, size);
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this.f2o_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, newHashes, 0, 0, insertIndex);
      this.g2o_1 = newValues;
      this.f2o_1 = newHashes;
    } else {
      var tmp21 = this.g2o_1;
      var tmp22 = this.g2o_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_1 = insertIndex + 1 | 0;
      arrayCopy(tmp21, tmp22, destinationOffset_1, insertIndex, size);
      var tmp26 = this.f2o_1;
      var tmp27 = this.f2o_1;
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset_2 = insertIndex + 1 | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = tmp26;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_1, tmp27, destinationOffset_2, insertIndex, size);
    }
    this.g2o_1[insertIndex] = new WeakReference(value);
    this.f2o_1[insertIndex] = hash;
    this.e2o_1 = this.e2o_1 + 1 | 0;
    return true;
  };
  function StateObjectImpl() {
    this.f20_1 = new AtomicInt(0);
  }
  protoOf(StateObjectImpl).g20 = function (reader) {
    do {
      var old = _ReaderKind___init__impl__jqeebu(this.f20_1.zo());
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
      var this_0 = old;
      if (!((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0))
        return Unit_instance;
      // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.withReadIn' call
      var this_1 = old;
      var new_0 = _ReaderKind___init__impl__jqeebu(_ReaderKind___get_mask__impl__gmhzqb(this_1) | _ReaderKind___get_mask__impl__gmhzqb(reader));
    }
     while (!this.f20_1.v2p(_ReaderKind___get_mask__impl__gmhzqb(old), _ReaderKind___get_mask__impl__gmhzqb(new_0)));
  };
  protoOf(StateObjectImpl).o23 = function (reader) {
    // Inline function 'androidx.compose.runtime.snapshots.ReaderKind.isReadIn' call
    var this_0 = _ReaderKind___init__impl__jqeebu(this.f20_1.zo());
    return !((_ReaderKind___get_mask__impl__gmhzqb(this_0) & _ReaderKind___get_mask__impl__gmhzqb(reader)) === 0);
  };
  function _ReaderKind___init__impl__jqeebu(mask) {
    mask = mask === VOID ? 0 : mask;
    return mask;
  }
  function _ReaderKind___get_mask__impl__gmhzqb($this) {
    return $this;
  }
  function Companion_14() {
  }
  var Companion_instance_15;
  function Companion_getInstance_14() {
    return Companion_instance_15;
  }
  function get_LocalInspectionTables() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    _init_properties_InspectionTables_kt__ovfk2v();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function _init_properties_InspectionTables_kt__ovfk2v() {
    if (!properties_initialized_InspectionTables_kt_tgdbmt) {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function AtomicReference(value) {
    this.u1y_1 = value;
  }
  protoOf(AtomicReference).zo = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.u1y_1;
  };
  protoOf(AtomicReference).g17 = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicReference.set.<set-delegate>' call
    this.u1y_1 = value;
  };
  protoOf(AtomicReference).b12 = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_getAndSet' call
    var oldValue = this.u1y_1;
    // Inline function 'androidx.compose.runtime.AtomicReference.getAndSet.<set-delegate>' call
    this.u1y_1 = value;
    return oldValue;
  };
  protoOf(AtomicReference).a12 = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.u1y_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicReference.compareAndSet.<set-delegate>' call
        this.u1y_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function AtomicInt(value) {
    this.f1i_1 = value;
  }
  protoOf(AtomicInt).zo = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.f1i_1;
  };
  protoOf(AtomicInt).g1i = function (value) {
    // Inline function 'kotlinx.atomicfu.atomicfu_setValue' call
    // Inline function 'androidx.compose.runtime.AtomicInt.set.<set-delegate>' call
    this.f1i_1 = value;
  };
  protoOf(AtomicInt).r1b = function (amount) {
    // Inline function 'kotlinx.atomicfu.atomicfu_addAndGet' call
    // Inline function 'androidx.compose.runtime.AtomicInt.add.<set-delegate>' call
    this.f1i_1 = this.f1i_1 + amount | 0;
    return this.f1i_1;
  };
  protoOf(AtomicInt).v2p = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.f1i_1, expect)) {
        // Inline function 'androidx.compose.runtime.AtomicInt.compareAndSet.<set-delegate>' call
        this.f1i_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function trackWrite($this) {
    if ($this.t2k_1) {
      var scope = $this.v2k_1;
      if (!(scope == null)) {
        scope.u20();
        $this.v2k_1 = null;
      }
      var scopes = $this.w2k_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.j();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.o(index);
            item.u20();
          }
           while (inductionVariable < last);
        scopes.y1();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.t2k_1) {
      var scope = composer.r1w();
      if (!(scope == null)) {
        composer.s1w(scope);
        var lastScope = $this.v2k_1;
        if (replacableWith(lastScope, scope)) {
          $this.v2k_1 = scope;
        } else {
          var lastScopes = $this.w2k_1;
          if (lastScopes == null) {
            // Inline function 'kotlin.collections.mutableListOf' call
            var newScopes = ArrayList_init_$Create$();
            $this.w2k_1 = newScopes;
            newScopes.e(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.j();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.o(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.z1(index, scope);
                  return Unit_instance;
                }
              }
               while (inductionVariable < last);
            lastScopes.e(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.q1t(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.w2p($p1, nc, updateChangedFlags($changed) | 1);
      return Unit_instance;
    };
  }
  function ComposableLambdaImpl(key, tracked, block) {
    this.s2k_1 = key;
    this.t2k_1 = tracked;
    this.u2k_1 = block;
    this.v2k_1 = null;
    this.w2k_1 = null;
  }
  protoOf(ComposableLambdaImpl).x2k = function (block) {
    if (!equals(this.u2k_1, block)) {
      var oldBlockNull = this.u2k_1 == null;
      this.u2k_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  protoOf(ComposableLambdaImpl).q1t = function (c, changed) {
    var c_0 = c.a1w(this.s2k_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.j1l(this) ? differentBits(0) : sameBits(0));
    var tmp = this.u2k_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  protoOf(ComposableLambdaImpl).w2p = function (p1, c, changed) {
    var c_0 = c.a1w(this.s2k_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.j1l(this) ? differentBits(1) : sameBits(1));
    var tmp = this.u2k_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.b1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l21(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  function set_nextHash(_set____db54di) {
    _init_properties_ActualJs_js_kt__rh77u6();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function logError(message, e) {
    _init_properties_ActualJs_js_kt__rh77u6();
    println(message);
    printStackTrace(e);
  }
  function currentThreadId() {
    _init_properties_ActualJs_js_kt__rh77u6();
    return new Long(0, 0);
  }
  function identityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $continuation) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      this_0.j9(tmp$ret$0);
      return Unit_instance;
    };
  }
  function MonotonicClockImpl() {
  }
  protoOf(MonotonicClockImpl).j1i = function (onFrame, $completion) {
    // Inline function 'kotlin.coroutines.suspendCoroutine.<anonymous>' call
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    // Inline function 'androidx.compose.runtime.MonotonicClockImpl.withFrameNanos.<anonymous>' call
    var tmp = window;
    tmp.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(onFrame, safe));
    return safe.q9();
  };
  function memoizeIdentityHashCode(instance) {
    _init_properties_ActualJs_js_kt__rh77u6();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function _init_properties_ActualJs_js_kt__rh77u6() {
    if (!properties_initialized_ActualJs_js_kt_azbr3k) {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
  }
  protoOf(Trace).c1s = function (name) {
    return null;
  };
  protoOf(Trace).p1s = function (token) {
  };
  var Trace_instance;
  function Trace_getInstance() {
    return Trace_instance;
  }
  function invokeComposable(composer, composable) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    composable(composer, 1);
  }
  function createSnapshotMutableState(value, policy) {
    return new SnapshotMutableStateImpl(value, policy);
  }
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function IntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.f1o_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(IntMap).o = function (key) {
    return this.f1o_1.h2(key);
  };
  protoOf(IntMap).g1o = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.f1o_1.a5(key, value);
  };
  function WeakReference(reference) {
    this.h2o_1 = reference;
  }
  protoOf(WeakReference).zo = function () {
    return this.h2o_1;
  };
  //region block: post-declaration
  protoOf(OffsetApplier).g1h = onBeginChanges;
  protoOf(OffsetApplier).h1h = onEndChanges;
  protoOf(AbstractApplier).g1h = onBeginChanges;
  protoOf(AbstractApplier).h1h = onEndChanges;
  protoOf(BroadcastFrameClock).d2 = get_key;
  protoOf(BroadcastFrameClock).l9 = get;
  protoOf(BroadcastFrameClock).lg = fold;
  protoOf(BroadcastFrameClock).kg = minusKey;
  protoOf(BroadcastFrameClock).mg = plus;
  defineProp(protoOf(ComposeRuntimeError), 'message', function () {
    return this.f1();
  });
  protoOf(StructuralEqualityPolicy).n29 = merge;
  protoOf(StateObjectImpl).c2a = mergeRecords;
  protoOf(SnapshotStateList).c2a = mergeRecords;
  protoOf(MonotonicClockImpl).d2 = get_key;
  protoOf(MonotonicClockImpl).l9 = get;
  protoOf(MonotonicClockImpl).lg = fold;
  protoOf(MonotonicClockImpl).kg = minusKey;
  protoOf(MonotonicClockImpl).mg = plus;
  //endregion
  //region block: init
  ScopeInvalidated_instance = new ScopeInvalidated();
  Key_instance_0 = new Key();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  StructuralEqualityPolicy_instance = new StructuralEqualityPolicy();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  EndOfChain_instance = new EndOfChain();
  ListImplementation_instance = new ListImplementation();
  Companion_instance_12 = new Companion_11();
  Companion_instance_15 = new Companion_14();
  Trace_instance = new Trace();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = rememberComposableLambda;
  _.$_$.d = AbstractApplier;
  _.$_$.e = CompositionLocalProvider;
  _.$_$.f = ControlledComposition;
  _.$_$.g = get_DefaultMonotonicFrameClock;
  _.$_$.h = DisposableEffect_0;
  _.$_$.i = DisposableEffect_1;
  _.$_$.j = DisposableEffect;
  _.$_$.k = LaunchedEffect;
  _.$_$.l = Recomposer;
  _.$_$.m = compositionLocalOf;
  _.$_$.n = invalidApplier;
  _.$_$.o = isTraceInProgress;
  _.$_$.p = mutableStateListOf;
  _.$_$.q = mutableStateOf;
  _.$_$.r = sourceInformationMarkerEnd;
  _.$_$.s = sourceInformationMarkerStart;
  _.$_$.t = staticCompositionLocalOf;
  _.$_$.u = traceEventEnd;
  _.$_$.v = traceEventStart;
  _.$_$.w = updateChangedFlags;
  _.$_$.x = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.y = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.z = _Updater___init__impl__rbfxm8;
  _.$_$.a1 = Updater__set_impl_v7kwss;
  _.$_$.b1 = Companion_instance_12;
  _.$_$.c1 = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-runtime-runtime.js.map
