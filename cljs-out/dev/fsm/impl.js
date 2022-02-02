// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('fsm.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fsm.protocols');
fsm.impl.from_QMARK_ = (function fsm$impl$from_QMARK_(prev,state){
if(cljs.core.set_QMARK_(prev)){
return (prev.cljs$core$IFn$_invoke$arity$1 ? prev.cljs$core$IFn$_invoke$arity$1(state) : prev.call(null,state));
} else {
if((prev instanceof cljs.core.Keyword)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev,state);
} else {
if((prev == null)){
return (state == null);
} else {
return null;

}
}
}
});
fsm.impl.add_effect = (function fsm$impl$add_effect(var_args){
var G__14371 = arguments.length;
switch (G__14371) {
case 3:
return fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$3 = (function (sm,key,fn_3){
fsm.protocols._add_effect(sm,key,fn_3);

return sm;
}));

(fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$5 = (function (sm,key,from,to,fn_3){
return fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$3(sm,key,(function (sm__$1,old,new$){
if(cljs.core.truth_((function (){var and__4115__auto__ = fsm.impl.from_QMARK_(from,cljs.core.cst$kw$fsm_SLASH_state.cljs$core$IFn$_invoke$arity$1(old));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.cst$kw$fsm_SLASH_state.cljs$core$IFn$_invoke$arity$1(new$));
} else {
return and__4115__auto__;
}
})())){
return (fn_3.cljs$core$IFn$_invoke$arity$3 ? fn_3.cljs$core$IFn$_invoke$arity$3(sm__$1,old,new$) : fn_3.call(null,sm__$1,old,new$));
} else {
return null;
}
}));
}));

(fsm.impl.add_effect.cljs$lang$maxFixedArity = 5);

fsm.impl.transition = (function fsm$impl$transition(var_args){
var G__14376 = arguments.length;
switch (G__14376) {
case 3:
return fsm.impl.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fsm.impl.transition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(fsm.impl.transition.cljs$core$IFn$_invoke$arity$3 = (function (sm,event,payload){
fsm.protocols._transition(sm,event,(function (){var G__14378 = (function (){var G__14380 = ((cljs.core.fn_QMARK_(payload))?(payload.cljs$core$IFn$_invoke$arity$1 ? payload.cljs$core$IFn$_invoke$arity$1(sm) : payload.call(null,sm)):payload);
var fexpr__14379 = (function (p1__14373_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14373_SHARP_,cljs.core.cst$kw$fsm_SLASH_state);
});
return fexpr__14379(G__14380);
})();
var fexpr__14377 = (function (p1__14374_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14374_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fsm_SLASH_last_DASH_event,event], null)], 0));
});
return fexpr__14377(G__14378);
})());

return sm;
}));

(fsm.impl.transition.cljs$core$IFn$_invoke$arity$2 = (function (sm,event){
return fsm.impl.transition.cljs$core$IFn$_invoke$arity$3(sm,event,null);
}));

(fsm.impl.transition.cljs$lang$maxFixedArity = 3);

/**
 * Return the current state of the given state machine
 */
fsm.impl.current_state = (function fsm$impl$current_state(sm){
return fsm.protocols._current_state(sm);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {fsm.protocols.StateMachine}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fsm.impl.AtomStateMachine = (function (states,_STAR_state,__meta,__extmap,__hash){
this.states = states;
this._STAR_state = _STAR_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(fsm.impl.AtomStateMachine.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k14383,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__14387 = k14383;
var G__14387__$1 = (((G__14387 instanceof cljs.core.Keyword))?G__14387.fqn:null);
switch (G__14387__$1) {
case "states":
return self__.states;

break;
case "*state":
return self__._STAR_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14383,else__4383__auto__);

}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__14388){
var vec__14389 = p__14388;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14389,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14389,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#fsm.impl.AtomStateMachine{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$states,self__.states],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_STAR_state,self__._STAR_state],null))], null),self__.__extmap));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14382){
var self__ = this;
var G__14382__$1 = this;
return (new cljs.core.RecordIter((0),G__14382__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$states,cljs.core.cst$kw$_STAR_state], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__14392 = (function (coll__4377__auto__){
return (479424173 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__14392(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14384,other14385){
var self__ = this;
var this14384__$1 = this;
return (((!((other14385 == null)))) && ((this14384__$1.constructor === other14385.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14384__$1.states,other14385.states)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14384__$1._STAR_state,other14385._STAR_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14384__$1.__extmap,other14385.__extmap)));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_STAR_state,null,cljs.core.cst$kw$states,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__14382){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__14393 = cljs.core.keyword_identical_QMARK_;
var expr__14394 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__14396 = cljs.core.cst$kw$states;
var G__14397 = expr__14394;
return (pred__14393.cljs$core$IFn$_invoke$arity$2 ? pred__14393.cljs$core$IFn$_invoke$arity$2(G__14396,G__14397) : pred__14393.call(null,G__14396,G__14397));
})())){
return (new fsm.impl.AtomStateMachine(G__14382,self__._STAR_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14398 = cljs.core.cst$kw$_STAR_state;
var G__14399 = expr__14394;
return (pred__14393.cljs$core$IFn$_invoke$arity$2 ? pred__14393.cljs$core$IFn$_invoke$arity$2(G__14398,G__14399) : pred__14393.call(null,G__14398,G__14399));
})())){
return (new fsm.impl.AtomStateMachine(self__.states,G__14382,self__.__meta,self__.__extmap,null));
} else {
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__14382),null));
}
}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$states,self__.states,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$_STAR_state,self__._STAR_state,null))], null),self__.__extmap));
}));

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$ = cljs.core.PROTOCOL_SENTINEL);

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$_transition$arity$3 = (function (_,event,payload){
var self__ = this;
var ___$1 = this;
var current = cljs.core.deref(self__._STAR_state);
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(self__.states,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fsm_SLASH_state.cljs$core$IFn$_invoke$arity$1(current),event], null),cljs.core.cst$kw$fsm$impl_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fsm$impl_SLASH_not_DASH_found,next)){
return null;
} else {
return cljs.core.reset_BANG_(self__._STAR_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fsm_SLASH_state,next], null),payload], 0)));
}
}));

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$_add_effect$arity$3 = (function (this$,key,fn_3){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch(self__._STAR_state,key,(function (_,___$1,old,new$){
return (fn_3.cljs$core$IFn$_invoke$arity$3 ? fn_3.cljs$core$IFn$_invoke$arity$3(this$__$1,old,new$) : fn_3.call(null,this$__$1,old,new$));
}));
}));

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$_current_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__._STAR_state);
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__14382){
var self__ = this;
var this__4379__auto____$1 = this;
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,G__14382,self__.__extmap,self__.__hash));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(fsm.impl.AtomStateMachine.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$states,cljs.core.cst$sym$_STAR_state], null);
}));

(fsm.impl.AtomStateMachine.cljs$lang$type = true);

(fsm.impl.AtomStateMachine.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"fsm.impl/AtomStateMachine",null,(1),null));
}));

(fsm.impl.AtomStateMachine.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"fsm.impl/AtomStateMachine");
}));

/**
 * Positional factory function for fsm.impl/AtomStateMachine.
 */
fsm.impl.__GT_AtomStateMachine = (function fsm$impl$__GT_AtomStateMachine(states,_STAR_state){
return (new fsm.impl.AtomStateMachine(states,_STAR_state,null,null,null));
});

/**
 * Factory function for fsm.impl/AtomStateMachine, taking a map of keywords to field values.
 */
fsm.impl.map__GT_AtomStateMachine = (function fsm$impl$map__GT_AtomStateMachine(G__14386){
var extmap__4419__auto__ = (function (){var G__14400 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14386,cljs.core.cst$kw$states,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_STAR_state], 0));
if(cljs.core.record_QMARK_(G__14386)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14400);
} else {
return G__14400;
}
})();
return (new fsm.impl.AtomStateMachine(cljs.core.cst$kw$states.cljs$core$IFn$_invoke$arity$1(G__14386),cljs.core.cst$kw$_STAR_state.cljs$core$IFn$_invoke$arity$1(G__14386),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

fsm.impl.create_state_machine = (function fsm$impl$create_state_machine(_STAR_initial_state,states){
return fsm.impl.__GT_AtomStateMachine(states,_STAR_initial_state);
});
