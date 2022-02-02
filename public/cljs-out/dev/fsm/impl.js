// Compiled by ClojureScript 1.10.773 {}
goog.provide('fsm.impl');
goog.require('cljs.core');
goog.require('fsm.protocols');
fsm.impl.from_QMARK_ = (function fsm$impl$from_QMARK_(prev,state){
if(cljs.core.set_QMARK_.call(null,prev)){
return prev.call(null,state);
} else {
if((prev instanceof cljs.core.Keyword)){
return cljs.core._EQ_.call(null,prev,state);
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
var G__29749 = arguments.length;
switch (G__29749) {
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
fsm.protocols._add_effect.call(null,sm,key,fn_3);

return sm;
}));

(fsm.impl.add_effect.cljs$core$IFn$_invoke$arity$5 = (function (sm,key,from,to,fn_3){
return fsm.impl.add_effect.call(null,sm,key,(function (sm__$1,old,new$){
if(cljs.core.truth_((function (){var and__4115__auto__ = fsm.impl.from_QMARK_.call(null,from,new cljs.core.Keyword("fsm","state","fsm/state",-1988589875).cljs$core$IFn$_invoke$arity$1(old));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,to,new cljs.core.Keyword("fsm","state","fsm/state",-1988589875).cljs$core$IFn$_invoke$arity$1(new$));
} else {
return and__4115__auto__;
}
})())){
return fn_3.call(null,sm__$1,old,new$);
} else {
return null;
}
}));
}));

(fsm.impl.add_effect.cljs$lang$maxFixedArity = 5);

fsm.impl.transition = (function fsm$impl$transition(var_args){
var G__29754 = arguments.length;
switch (G__29754) {
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
fsm.protocols._transition.call(null,sm,event,(function (p1__29752_SHARP_){
return cljs.core.merge.call(null,p1__29752_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fsm","last-event","fsm/last-event",2067060890),event], null));
}).call(null,(function (p1__29751_SHARP_){
return cljs.core.dissoc.call(null,p1__29751_SHARP_,new cljs.core.Keyword("fsm","state","fsm/state",-1988589875));
}).call(null,((cljs.core.fn_QMARK_.call(null,payload))?payload.call(null,sm):payload))));

return sm;
}));

(fsm.impl.transition.cljs$core$IFn$_invoke$arity$2 = (function (sm,event){
return fsm.impl.transition.call(null,sm,event,null);
}));

(fsm.impl.transition.cljs$lang$maxFixedArity = 3);

/**
 * Return the current state of the given state machine
 */
fsm.impl.current_state = (function fsm$impl$current_state(sm){
return fsm.protocols._current_state.call(null,sm);
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

(fsm.impl.AtomStateMachine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k29757,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__29761 = k29757;
var G__29761__$1 = (((G__29761 instanceof cljs.core.Keyword))?G__29761.fqn:null);
switch (G__29761__$1) {
case "states":
return self__.states;

break;
case "*state":
return self__._STAR_state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29757,else__4383__auto__);

}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__29762){
var vec__29763 = p__29762;
var k__4403__auto__ = cljs.core.nth.call(null,vec__29763,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__29763,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#fsm.impl.AtomStateMachine{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"states","states",1389013542),self__.states],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*state","*state",471581315),self__._STAR_state],null))], null),self__.__extmap));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29756){
var self__ = this;
var G__29756__$1 = this;
return (new cljs.core.RecordIter((0),G__29756__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.Keyword(null,"*state","*state",471581315)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (479424173 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29758,other29759){
var self__ = this;
var this29758__$1 = this;
return (((!((other29759 == null)))) && ((this29758__$1.constructor === other29759.constructor)) && (cljs.core._EQ_.call(null,this29758__$1.states,other29759.states)) && (cljs.core._EQ_.call(null,this29758__$1._STAR_state,other29759._STAR_state)) && (cljs.core._EQ_.call(null,this29758__$1.__extmap,other29759.__extmap)));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*state","*state",471581315),null,new cljs.core.Keyword(null,"states","states",1389013542),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__29756){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__29766 = cljs.core.keyword_identical_QMARK_;
var expr__29767 = k__4388__auto__;
if(cljs.core.truth_(pred__29766.call(null,new cljs.core.Keyword(null,"states","states",1389013542),expr__29767))){
return (new fsm.impl.AtomStateMachine(G__29756,self__._STAR_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29766.call(null,new cljs.core.Keyword(null,"*state","*state",471581315),expr__29767))){
return (new fsm.impl.AtomStateMachine(self__.states,G__29756,self__.__meta,self__.__extmap,null));
} else {
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__29756),null));
}
}
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"states","states",1389013542),self__.states,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*state","*state",471581315),self__._STAR_state,null))], null),self__.__extmap));
}));

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$ = cljs.core.PROTOCOL_SENTINEL);

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$_transition$arity$3 = (function (_,event,payload){
var self__ = this;
var ___$1 = this;
var current = cljs.core.deref.call(null,self__._STAR_state);
var next = cljs.core.get_in.call(null,self__.states,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fsm","state","fsm/state",-1988589875).cljs$core$IFn$_invoke$arity$1(current),event], null),new cljs.core.Keyword("fsm.impl","not-found","fsm.impl/not-found",-1231039966));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fsm.impl","not-found","fsm.impl/not-found",-1231039966),next)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,self__._STAR_state,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fsm","state","fsm/state",-1988589875),next], null),payload));
}
}));

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$_add_effect$arity$3 = (function (this$,key,fn_3){
var self__ = this;
var this$__$1 = this;
return cljs.core.add_watch.call(null,self__._STAR_state,key,(function (_,___$1,old,new$){
return fn_3.call(null,this$__$1,old,new$);
}));
}));

(fsm.impl.AtomStateMachine.prototype.fsm$protocols$StateMachine$_current_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__._STAR_state);
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__29756){
var self__ = this;
var this__4379__auto____$1 = this;
return (new fsm.impl.AtomStateMachine(self__.states,self__._STAR_state,G__29756,self__.__extmap,self__.__hash));
}));

(fsm.impl.AtomStateMachine.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(fsm.impl.AtomStateMachine.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"states","states",-1265422227,null),new cljs.core.Symbol(null,"*state","*state",2112112842,null)], null);
}));

(fsm.impl.AtomStateMachine.cljs$lang$type = true);

(fsm.impl.AtomStateMachine.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"fsm.impl/AtomStateMachine",null,(1),null));
}));

(fsm.impl.AtomStateMachine.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"fsm.impl/AtomStateMachine");
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
fsm.impl.map__GT_AtomStateMachine = (function fsm$impl$map__GT_AtomStateMachine(G__29760){
var extmap__4419__auto__ = (function (){var G__29769 = cljs.core.dissoc.call(null,G__29760,new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.Keyword(null,"*state","*state",471581315));
if(cljs.core.record_QMARK_.call(null,G__29760)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__29769);
} else {
return G__29769;
}
})();
return (new fsm.impl.AtomStateMachine(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(G__29760),new cljs.core.Keyword(null,"*state","*state",471581315).cljs$core$IFn$_invoke$arity$1(G__29760),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

fsm.impl.create_state_machine = (function fsm$impl$create_state_machine(_STAR_initial_state,states){
return fsm.impl.__GT_AtomStateMachine.call(null,states,_STAR_initial_state);
});

//# sourceMappingURL=impl.js.map
