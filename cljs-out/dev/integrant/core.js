// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('integrant.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('weavejester.dependency');

/**
 * @interface
 */
integrant.core.RefLike = function(){};

var integrant$core$RefLike$ref_key$dyn_15829 = (function (r){
var x__4428__auto__ = (((r == null))?null:r);
var m__4429__auto__ = (integrant.core.ref_key[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(r) : m__4429__auto__.call(null,r));
} else {
var m__4426__auto__ = (integrant.core.ref_key["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(r) : m__4426__auto__.call(null,r));
} else {
throw cljs.core.missing_protocol("RefLike.ref-key",r);
}
}
});
/**
 * Return the key of the reference.
 */
integrant.core.ref_key = (function integrant$core$ref_key(r){
if((((!((r == null)))) && ((!((r.integrant$core$RefLike$ref_key$arity$1 == null)))))){
return r.integrant$core$RefLike$ref_key$arity$1(r);
} else {
return integrant$core$RefLike$ref_key$dyn_15829(r);
}
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
 * @implements {integrant.core.RefLike}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
integrant.core.Ref = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(integrant.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(integrant.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k15831,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__15835 = k15831;
var G__15835__$1 = (((G__15835 instanceof cljs.core.Keyword))?G__15835.fqn:null);
switch (G__15835__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15831,else__4383__auto__);

}
}));

(integrant.core.Ref.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__15836){
var vec__15837 = p__15836;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15837,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(integrant.core.Ref.prototype.integrant$core$RefLike$ = cljs.core.PROTOCOL_SENTINEL);

(integrant.core.Ref.prototype.integrant$core$RefLike$ref_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key;
}));

(integrant.core.Ref.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#integrant.core.Ref{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key,self__.key],null))], null),self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15830){
var self__ = this;
var G__15830__$1 = this;
return (new cljs.core.RecordIter((0),G__15830__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(integrant.core.Ref.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(integrant.core.Ref.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new integrant.core.Ref(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(integrant.core.Ref.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__15840 = (function (coll__4377__auto__){
return (2146506987 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__15840(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(integrant.core.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15832,other15833){
var self__ = this;
var this15832__$1 = this;
return (((!((other15833 == null)))) && ((this15832__$1.constructor === other15833.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.key,other15833.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.__extmap,other15833.__extmap)));
}));

(integrant.core.Ref.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(integrant.core.Ref.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__15830){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__15841 = cljs.core.keyword_identical_QMARK_;
var expr__15842 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__15844 = cljs.core.cst$kw$key;
var G__15845 = expr__15842;
return (pred__15841.cljs$core$IFn$_invoke$arity$2 ? pred__15841.cljs$core$IFn$_invoke$arity$2(G__15844,G__15845) : pred__15841.call(null,G__15844,G__15845));
})())){
return (new integrant.core.Ref(G__15830,self__.__meta,self__.__extmap,null));
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__15830),null));
}
}));

(integrant.core.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$key,self__.key,null))], null),self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__15830){
var self__ = this;
var this__4379__auto____$1 = this;
return (new integrant.core.Ref(self__.key,G__15830,self__.__extmap,self__.__hash));
}));

(integrant.core.Ref.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(integrant.core.Ref.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key], null);
}));

(integrant.core.Ref.cljs$lang$type = true);

(integrant.core.Ref.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"integrant.core/Ref",null,(1),null));
}));

(integrant.core.Ref.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"integrant.core/Ref");
}));

/**
 * Positional factory function for integrant.core/Ref.
 */
integrant.core.__GT_Ref = (function integrant$core$__GT_Ref(key){
return (new integrant.core.Ref(key,null,null,null));
});

/**
 * Factory function for integrant.core/Ref, taking a map of keywords to field values.
 */
integrant.core.map__GT_Ref = (function integrant$core$map__GT_Ref(G__15834){
var extmap__4419__auto__ = (function (){var G__15846 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15834,cljs.core.cst$kw$key);
if(cljs.core.record_QMARK_(G__15834)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15846);
} else {
return G__15846;
}
})();
return (new integrant.core.Ref(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__15834),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {integrant.core.RefLike}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
integrant.core.RefSet = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(integrant.core.RefSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(integrant.core.RefSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k15849,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__15853 = k15849;
var G__15853__$1 = (((G__15853 instanceof cljs.core.Keyword))?G__15853.fqn:null);
switch (G__15853__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15849,else__4383__auto__);

}
}));

(integrant.core.RefSet.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__15854){
var vec__15855 = p__15854;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15855,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(integrant.core.RefSet.prototype.integrant$core$RefLike$ = cljs.core.PROTOCOL_SENTINEL);

(integrant.core.RefSet.prototype.integrant$core$RefLike$ref_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key;
}));

(integrant.core.RefSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#integrant.core.RefSet{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key,self__.key],null))], null),self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15848){
var self__ = this;
var G__15848__$1 = this;
return (new cljs.core.RecordIter((0),G__15848__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(integrant.core.RefSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(integrant.core.RefSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new integrant.core.RefSet(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(integrant.core.RefSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__15858 = (function (coll__4377__auto__){
return (-1045019366 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__15858(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(integrant.core.RefSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15850,other15851){
var self__ = this;
var this15850__$1 = this;
return (((!((other15851 == null)))) && ((this15850__$1.constructor === other15851.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15850__$1.key,other15851.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15850__$1.__extmap,other15851.__extmap)));
}));

(integrant.core.RefSet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new integrant.core.RefSet(self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(integrant.core.RefSet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__15848){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__15859 = cljs.core.keyword_identical_QMARK_;
var expr__15860 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__15862 = cljs.core.cst$kw$key;
var G__15863 = expr__15860;
return (pred__15859.cljs$core$IFn$_invoke$arity$2 ? pred__15859.cljs$core$IFn$_invoke$arity$2(G__15862,G__15863) : pred__15859.call(null,G__15862,G__15863));
})())){
return (new integrant.core.RefSet(G__15848,self__.__meta,self__.__extmap,null));
} else {
return (new integrant.core.RefSet(self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__15848),null));
}
}));

(integrant.core.RefSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$key,self__.key,null))], null),self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__15848){
var self__ = this;
var this__4379__auto____$1 = this;
return (new integrant.core.RefSet(self__.key,G__15848,self__.__extmap,self__.__hash));
}));

(integrant.core.RefSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(integrant.core.RefSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key], null);
}));

(integrant.core.RefSet.cljs$lang$type = true);

(integrant.core.RefSet.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"integrant.core/RefSet",null,(1),null));
}));

(integrant.core.RefSet.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"integrant.core/RefSet");
}));

/**
 * Positional factory function for integrant.core/RefSet.
 */
integrant.core.__GT_RefSet = (function integrant$core$__GT_RefSet(key){
return (new integrant.core.RefSet(key,null,null,null));
});

/**
 * Factory function for integrant.core/RefSet, taking a map of keywords to field values.
 */
integrant.core.map__GT_RefSet = (function integrant$core$map__GT_RefSet(G__15852){
var extmap__4419__auto__ = (function (){var G__15864 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15852,cljs.core.cst$kw$key);
if(cljs.core.record_QMARK_(G__15852)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15864);
} else {
return G__15864;
}
})();
return (new integrant.core.RefSet(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(G__15852),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

integrant.core.composite_key_QMARK_ = (function integrant$core$composite_key_QMARK_(keys){
return ((cljs.core.vector_QMARK_(keys)) && (cljs.core.every_QMARK_(cljs.core.qualified_keyword_QMARK_,keys)));
});
/**
 * Returns true if the key is a keyword or valid composite key.
 */
integrant.core.valid_config_key_QMARK_ = (function integrant$core$valid_config_key_QMARK_(key){
return ((cljs.core.qualified_keyword_QMARK_(key)) || (integrant.core.composite_key_QMARK_(key)));
});
/**
 * Create a reference to a top-level key in a config map.
 */
integrant.core.ref = (function integrant$core$ref(key){
if(integrant.core.valid_config_key_QMARK_(key)){
} else {
throw (new Error("Assert failed: (valid-config-key? key)"));
}

return integrant.core.__GT_Ref(key);
});
/**
 * Create a set of references to all matching top-level keys in a config map.
 */
integrant.core.refset = (function integrant$core$refset(key){
if(integrant.core.valid_config_key_QMARK_(key)){
} else {
throw (new Error("Assert failed: (valid-config-key? key)"));
}

return integrant.core.__GT_RefSet(key);
});
/**
 * Return true if its argument is a ref.
 */
integrant.core.ref_QMARK_ = (function integrant$core$ref_QMARK_(x){
return (x instanceof integrant.core.Ref);
});
/**
 * Return true if its argument is a refset.
 */
integrant.core.refset_QMARK_ = (function integrant$core$refset_QMARK_(x){
return (x instanceof integrant.core.RefSet);
});
/**
 * Return true if its argument is a ref or a refset.
 */
integrant.core.reflike_QMARK_ = (function integrant$core$reflike_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.integrant$core$RefLike$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(integrant.core.RefLike,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(integrant.core.RefLike,x);
}
});
integrant.core.depth_search = (function integrant$core$depth_search(pred_QMARK_,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred_QMARK_,cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,coll));
});
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.composite_keyword !== 'undefined')){
} else {
/**
 * Return a unique keyword that is derived from an ordered collection of
 *   keywords. The function will return the same keyword for the same collection.
 */
integrant.core.composite_keyword = cljs.core.memoize((function (kws){
var parts = (function (){var iter__4529__auto__ = (function integrant$core$iter__15867(s__15868){
return (new cljs.core.LazySeq(null,(function (){
var s__15868__$1 = s__15868;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15868__$1);
if(temp__5753__auto__){
var s__15868__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15868__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15868__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15870 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15869 = (0);
while(true){
if((i__15869 < size__4528__auto__)){
var kw = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__15869);
cljs.core.chunk_append(b__15870,[cljs.core.namespace(kw),".",cljs.core.name(kw)].join(''));

var G__15875 = (i__15869 + (1));
i__15869 = G__15875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15870),integrant$core$iter__15867(cljs.core.chunk_rest(s__15868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15870),null);
}
} else {
var kw = cljs.core.first(s__15868__$2);
return cljs.core.cons([cljs.core.namespace(kw),".",cljs.core.name(kw)].join(''),integrant$core$iter__15867(cljs.core.rest(s__15868__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(kws);
})();
var prefix = [clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",parts),"_"].join('');
var composite = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("integrant.composite",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(prefix)));
var seq__15871_15876 = cljs.core.seq(kws);
var chunk__15872_15877 = null;
var count__15873_15878 = (0);
var i__15874_15879 = (0);
while(true){
if((i__15874_15879 < count__15873_15878)){
var kw_15880 = chunk__15872_15877.cljs$core$IIndexed$_nth$arity$2(null,i__15874_15879);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(composite,kw_15880);


var G__15881 = seq__15871_15876;
var G__15882 = chunk__15872_15877;
var G__15883 = count__15873_15878;
var G__15884 = (i__15874_15879 + (1));
seq__15871_15876 = G__15881;
chunk__15872_15877 = G__15882;
count__15873_15878 = G__15883;
i__15874_15879 = G__15884;
continue;
} else {
var temp__5753__auto___15885 = cljs.core.seq(seq__15871_15876);
if(temp__5753__auto___15885){
var seq__15871_15886__$1 = temp__5753__auto___15885;
if(cljs.core.chunked_seq_QMARK_(seq__15871_15886__$1)){
var c__4556__auto___15887 = cljs.core.chunk_first(seq__15871_15886__$1);
var G__15888 = cljs.core.chunk_rest(seq__15871_15886__$1);
var G__15889 = c__4556__auto___15887;
var G__15890 = cljs.core.count(c__4556__auto___15887);
var G__15891 = (0);
seq__15871_15876 = G__15888;
chunk__15872_15877 = G__15889;
count__15873_15878 = G__15890;
i__15874_15879 = G__15891;
continue;
} else {
var kw_15892 = cljs.core.first(seq__15871_15886__$1);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(composite,kw_15892);


var G__15893 = cljs.core.next(seq__15871_15886__$1);
var G__15894 = null;
var G__15895 = (0);
var G__15896 = (0);
seq__15871_15876 = G__15893;
chunk__15872_15877 = G__15894;
count__15873_15878 = G__15895;
i__15874_15879 = G__15896;
continue;
}
} else {
}
}
break;
}

return composite;
}));
}
integrant.core.normalize_key = (function integrant$core$normalize_key(k){
if(cljs.core.vector_QMARK_(k)){
return (integrant.core.composite_keyword.cljs$core$IFn$_invoke$arity$1 ? integrant.core.composite_keyword.cljs$core$IFn$_invoke$arity$1(k) : integrant.core.composite_keyword.call(null,k));
} else {
return k;
}
});
integrant.core.ambiguous_key_exception = (function integrant$core$ambiguous_key_exception(config,key,matching_keys){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Ambiguous key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". Found multiple candidates: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",matching_keys)].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$reason,cljs.core.cst$kw$integrant$core_SLASH_ambiguous_DASH_key,cljs.core.cst$kw$config,config,cljs.core.cst$kw$key,key,cljs.core.cst$kw$matching_DASH_keys,matching_keys], null));
});
/**
 * Return true if a key is derived from candidate keyword or vector of
 *   keywords.
 */
integrant.core.derived_from_QMARK_ = (function integrant$core$derived_from_QMARK_(key,candidate){
var key__$1 = integrant.core.normalize_key(key);
if(cljs.core.vector_QMARK_(candidate)){
return cljs.core.every_QMARK_((function (p1__15897_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(key__$1,p1__15897_SHARP_);
}),candidate);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(key__$1,candidate);
}
});
/**
 * Return a seq of all entries in a map, m, where the key is derived from the
 *   a candidate key, k. If there are no matching keys, nil is returned. The
 *   candidate key may be a keyword, or vector of keywords.
 */
integrant.core.find_derived = (function integrant$core$find_derived(m,k){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15898_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.key(p1__15898_SHARP_),k)) || (integrant.core.derived_from_QMARK_(cljs.core.key(p1__15898_SHARP_),k)));
}),m));
});
/**
 * Return the map entry in a map, m, where the key is derived from the keyword,
 *   k. If there are no matching keys, nil is returned. If there is more than one
 *   matching key, an ambiguous key exception is raised.
 */
integrant.core.find_derived_1 = (function integrant$core$find_derived_1(m,k){
var kvs = integrant.core.find_derived(m,k);
if(cljs.core.next(kvs)){
throw integrant.core.ambiguous_key_exception(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,kvs));
} else {
}

return cljs.core.first(kvs);
});
integrant.core.find_derived_refs = (function integrant$core$find_derived_refs(config,v,include_refsets_QMARK_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__15899_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,integrant.core.find_derived(config,p1__15899_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(integrant.core.ref_key,integrant.core.depth_search((cljs.core.truth_(include_refsets_QMARK_)?integrant.core.reflike_QMARK_:integrant.core.ref_QMARK_),v))], 0));
});
/**
 * Return a dependency graph of all the refs and refsets in a config. Resolves
 *   derived dependencies. Takes the following options:
 * 
 *   `:include-refsets?`
 *   : whether to include refsets in the dependency graph (defaults to true)
 */
integrant.core.dependency_graph = (function integrant$core$dependency_graph(var_args){
var G__15903 = arguments.length;
switch (G__15903) {
case 1:
return integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2(config,cljs.core.PersistentArrayMap.EMPTY);
}));

(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2 = (function (config,p__15904){
var map__15905 = p__15904;
var map__15905__$1 = (((((!((map__15905 == null))))?(((((map__15905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15905):map__15905);
var include_refsets_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15905__$1,cljs.core.cst$kw$include_DASH_refsets_QMARK_,true);
var find_refs = (function integrant$core$find_refs(v){
return integrant.core.find_derived_refs(config,v,include_refsets_QMARK_);
});
return cljs.core.reduce_kv((function (g,k,v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15900_SHARP_,p2__15901_SHARP_){
return weavejester.dependency.depend(p1__15900_SHARP_,k,p2__15901_SHARP_);
}),g,find_refs(v));
}),weavejester.dependency.graph(),config);
}));

(integrant.core.dependency_graph.cljs$lang$maxFixedArity = 2);

/**
 * Create a key comparator from the dependency graph of a configuration map.
 *   The comparator is deterministic; it will always result in the same key
 *   order.
 */
integrant.core.key_comparator = (function integrant$core$key_comparator(graph){
return weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$2((function (p1__15908_SHARP_,p2__15909_SHARP_){
return cljs.core.compare(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15908_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15909_SHARP_));
}),graph);
});
integrant.core.find_keys = (function integrant$core$find_keys(config,keys,f){
var graph = integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$include_DASH_refsets_QMARK_,false], null));
var keyset = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__15910_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,integrant.core.find_derived(config,p1__15910_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys], 0)));
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(integrant.core.key_comparator(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1(config)),clojure.set.union.cljs$core$IFn$_invoke$arity$2(keyset,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(graph,keyset) : f.call(null,graph,keyset))));
});
integrant.core.dependent_keys = (function integrant$core$dependent_keys(config,keys){
return integrant.core.find_keys(config,keys,weavejester.dependency.transitive_dependencies_set);
});
integrant.core.reverse_dependent_keys = (function integrant$core$reverse_dependent_keys(config,keys){
return cljs.core.reverse(integrant.core.find_keys(config,keys,weavejester.dependency.transitive_dependents_set));
});
integrant.core.missing_refs_exception = (function integrant$core$missing_refs_exception(config,refs){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing definitions for refs: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",refs)].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$integrant$core_SLASH_missing_DASH_refs,cljs.core.cst$kw$config,config,cljs.core.cst$kw$missing_DASH_refs,refs], null));
});
integrant.core.ambiguous_refs = (function integrant$core$ambiguous_refs(config){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15912_SHARP_){
return cljs.core.next(integrant.core.find_derived(config,p1__15912_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(integrant.core.ref_key,integrant.core.depth_search(integrant.core.ref_QMARK_,config)));
});
integrant.core.missing_refs = (function integrant$core$missing_refs(config){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__15913_SHARP_){
return integrant.core.find_derived(config,p1__15913_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(integrant.core.ref_key,integrant.core.depth_search(integrant.core.ref_QMARK_,config)));
});
integrant.core.invalid_composite_keys = (function integrant$core$invalid_composite_keys(config){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(integrant.core.composite_key_QMARK_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,cljs.core.keys(config)));
});
integrant.core.invalid_composite_key_exception = (function integrant$core$invalid_composite_key_exception(config,key){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid composite key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". Every keyword must be namespaced."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$integrant$core_SLASH_invalid_DASH_composite_DASH_key,cljs.core.cst$kw$config,config,cljs.core.cst$kw$key,key], null));
});
integrant.core.resolve_ref = (function integrant$core$resolve_ref(config,resolvef,ref){
var vec__15914 = cljs.core.first(integrant.core.find_derived(config,integrant.core.ref_key(ref)));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15914,(1),null);
return (resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(k,v) : resolvef.call(null,k,v));
});
integrant.core.resolve_refset = (function integrant$core$resolve_refset(config,resolvef,refset){
return cljs.core.set((function (){var iter__4529__auto__ = (function integrant$core$resolve_refset_$_iter__15917(s__15918){
return (new cljs.core.LazySeq(null,(function (){
var s__15918__$1 = s__15918;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__15918__$1);
if(temp__5753__auto__){
var s__15918__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15918__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15918__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15920 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15919 = (0);
while(true){
if((i__15919 < size__4528__auto__)){
var vec__15921 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__15919);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15921,(1),null);
cljs.core.chunk_append(b__15920,(resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(k,v) : resolvef.call(null,k,v)));

var G__15927 = (i__15919 + (1));
i__15919 = G__15927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15920),integrant$core$resolve_refset_$_iter__15917(cljs.core.chunk_rest(s__15918__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15920),null);
}
} else {
var vec__15924 = cljs.core.first(s__15918__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15924,(1),null);
return cljs.core.cons((resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(k,v) : resolvef.call(null,k,v)),integrant$core$resolve_refset_$_iter__15917(cljs.core.rest(s__15918__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(integrant.core.find_derived(config,integrant.core.ref_key(refset)));
})());
});
integrant.core.expand_key = (function integrant$core$expand_key(config,resolvef,value){
return clojure.walk.postwalk((function (p1__15928_SHARP_){
if(integrant.core.ref_QMARK_(p1__15928_SHARP_)){
return integrant.core.resolve_ref(config,resolvef,p1__15928_SHARP_);
} else {
if(integrant.core.refset_QMARK_(p1__15928_SHARP_)){
return integrant.core.resolve_refset(config,resolvef,p1__15928_SHARP_);
} else {
return p1__15928_SHARP_;

}
}
}),value);
});
integrant.core.run_exception = (function integrant$core$run_exception(system,completed,remaining,f,k,v,t){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when running system"].join(''),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$reason,cljs.core.cst$kw$integrant$core_SLASH_run_DASH_threw_DASH_exception,cljs.core.cst$kw$system,system,cljs.core.cst$kw$completed_DASH_keys,cljs.core.reverse(completed),cljs.core.cst$kw$remaining_DASH_keys,cljs.core.rest(remaining),cljs.core.cst$kw$function,f,cljs.core.cst$kw$key,k,cljs.core.cst$kw$value,v], null),t);
});
integrant.core.try_run_action = (function integrant$core$try_run_action(system,completed,remaining,f,k){
var v = (system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k));
try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
}catch (e15929){var t = e15929;
throw integrant.core.run_exception(system,completed,remaining,f,k,v,t);
}});
integrant.core.run_loop = (function integrant$core$run_loop(system,keys,f){
var completed = cljs.core.List.EMPTY;
var remaining = keys;
while(true){
if(cljs.core.seq(remaining)){
var k = cljs.core.first(remaining);
integrant.core.try_run_action(system,completed,remaining,f,k);

var G__15930 = cljs.core.cons(k,completed);
var G__15931 = cljs.core.rest(remaining);
completed = G__15930;
remaining = G__15931;
continue;
} else {
return null;
}
break;
}
});
integrant.core.system_origin = (function integrant$core$system_origin(system){
return cljs.core.select_keys(cljs.core.cst$kw$integrant$core_SLASH_origin.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(system)),cljs.core.keys(system));
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.run_BANG_ = (function integrant$core$run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__15932 = system;
var G__15932__$1 = (((G__15932 == null))?null:cljs.core.meta(G__15932));
if((G__15932__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$integrant$core_SLASH_origin.cljs$core$IFn$_invoke$arity$1(G__15932__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop(system,integrant.core.dependent_keys(integrant.core.system_origin(system),keys),f);
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in reverse dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.reverse_run_BANG_ = (function integrant$core$reverse_run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__15933 = system;
var G__15933__$1 = (((G__15933 == null))?null:cljs.core.meta(G__15933));
if((G__15933__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$integrant$core_SLASH_origin.cljs$core$IFn$_invoke$arity$1(G__15933__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop(system,integrant.core.reverse_dependent_keys(integrant.core.system_origin(system),keys),f);
});
/**
 * Reduce all the key value pairs in system map in dependency order, starting
 *   from an initial value. The function should take three arguments: the
 *   accumulator, the current key and the current value.
 */
integrant.core.fold = (function integrant$core$fold(system,f,val){
var graph = integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1(integrant.core.system_origin(system));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15934_SHARP_,p2__15935_SHARP_){
var G__15936 = p1__15934_SHARP_;
var G__15937 = p2__15935_SHARP_;
var G__15938 = (system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(p2__15935_SHARP_) : system.call(null,p2__15935_SHARP_));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15936,G__15937,G__15938) : f.call(null,G__15936,G__15937,G__15938));
}),val,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(integrant.core.key_comparator(graph),cljs.core.keys(system)));
});
integrant.core.build_exception = (function integrant$core$build_exception(system,f,k,v,t){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system"].join(''),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$integrant$core_SLASH_build_DASH_threw_DASH_exception,cljs.core.cst$kw$system,system,cljs.core.cst$kw$function,f,cljs.core.cst$kw$key,k,cljs.core.cst$kw$value,v], null),t);
});
integrant.core.try_build_action = (function integrant$core$try_build_action(system,f,k,v){
try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
}catch (e15939){var t = e15939;
throw integrant.core.build_exception(system,f,k,v,t);
}});
integrant.core.build_key = (function integrant$core$build_key(f,assertf,resolvef,system,p__15940){
var vec__15941 = p__15940;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15941,(1),null);
var v_SINGLEQUOTE_ = integrant.core.expand_key(system,resolvef,v);
(assertf.cljs$core$IFn$_invoke$arity$3 ? assertf.cljs$core$IFn$_invoke$arity$3(system,k,v_SINGLEQUOTE_) : assertf.call(null,system,k,v_SINGLEQUOTE_));

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,k,integrant.core.try_build_action(system,f,k,v_SINGLEQUOTE_)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integrant$core_SLASH_build,k], null),v_SINGLEQUOTE_);
});
/**
 * Apply a function f to each key value pair in a configuration map. Keys are
 *   traversed in dependency order, and any references in the value expanded. The
 *   function should take two arguments, a key and value, and return a new value.
 *   An optional fourth argument, assertf, may be supplied to provide an assertion
 *   check on the system, key and expanded value.
 */
integrant.core.build = (function integrant$core$build(var_args){
var G__15945 = arguments.length;
switch (G__15945) {
case 3:
return integrant.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return integrant.core.build.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return integrant.core.build.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.build.cljs$core$IFn$_invoke$arity$3 = (function (config,keys,f){
return integrant.core.build.cljs$core$IFn$_invoke$arity$4(config,keys,f,(function (_,___$1,___$2){
return null;
}));
}));

(integrant.core.build.cljs$core$IFn$_invoke$arity$4 = (function (config,keys,f,assertf){
return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,keys,f,assertf,(function (_,v){
return v;
}));
}));

(integrant.core.build.cljs$core$IFn$_invoke$arity$5 = (function (config,keys,f,assertf,resolvef){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var relevant_keys = integrant.core.dependent_keys(config,keys);
var relevant_config = cljs.core.select_keys(config,relevant_keys);
var temp__5753__auto___15947 = cljs.core.first(integrant.core.invalid_composite_keys(config));
if(cljs.core.truth_(temp__5753__auto___15947)){
var invalid_key_15948 = temp__5753__auto___15947;
throw integrant.core.invalid_composite_key_exception(config,invalid_key_15948);
} else {
}

var temp__5753__auto___15949 = cljs.core.first(integrant.core.ambiguous_refs(relevant_config));
if(cljs.core.truth_(temp__5753__auto___15949)){
var ref_15950 = temp__5753__auto___15949;
throw integrant.core.ambiguous_key_exception(config,ref_15950,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,integrant.core.find_derived(config,ref_15950)));
} else {
}

var temp__5753__auto___15951 = cljs.core.seq(integrant.core.missing_refs(relevant_config));
if(temp__5753__auto___15951){
var refs_15952 = temp__5753__auto___15951;
throw integrant.core.missing_refs_exception(config,refs_15952);
} else {
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(integrant.core.build_key,f,assertf,resolvef),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integrant$core_SLASH_origin,config], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(config.cljs$core$IFn$_invoke$arity$1 ? config.cljs$core$IFn$_invoke$arity$1(k) : config.call(null,k))], null);
}),relevant_keys));
}));

(integrant.core.build.cljs$lang$maxFixedArity = 5);

if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.resolve_key !== 'undefined')){
} else {
/**
 * Return a value to substitute for a reference prior to initiation. By default
 *   the value of the key is returned unaltered. This can be used to hide
 *   information that is only necessary to halt or suspend the key.
 */
integrant.core.resolve_key = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15953 = cljs.core.get_global_hierarchy;
return (fexpr__15953.cljs$core$IFn$_invoke$arity$0 ? fexpr__15953.cljs$core$IFn$_invoke$arity$0() : fexpr__15953.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","resolve-key"),(function (key,value){
return integrant.core.normalize_key(key);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
integrant.core.resolve_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,v){
return v;
}));
/**
 * Replace all refs with the values they correspond to.
 */
integrant.core.expand = (function integrant$core$expand(config){
return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,cljs.core.keys(config),(function (_,v){
return v;
}),(function (_,___$1,___$2){
return null;
}),integrant.core.resolve_key);
});
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.prep_key !== 'undefined')){
} else {
/**
 * Prepare the configuration associated with a key for initiation. This is
 *   generally used to add in default values and references. By default the
 *   method returns the value unaltered.
 */
integrant.core.prep_key = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15954 = cljs.core.get_global_hierarchy;
return (fexpr__15954.cljs$core$IFn$_invoke$arity$0 ? fexpr__15954.cljs$core$IFn$_invoke$arity$0() : fexpr__15954.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","prep-key"),(function (key,value){
return integrant.core.normalize_key(key);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
integrant.core.prep_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,v){
return v;
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.init_key !== 'undefined')){
} else {
/**
 * Turn a config value associated with a key into a concrete implementation.
 *   For example, a database URL might be turned into a database connection.
 */
integrant.core.init_key = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15955 = cljs.core.get_global_hierarchy;
return (fexpr__15955.cljs$core$IFn$_invoke$arity$0 ? fexpr__15955.cljs$core$IFn$_invoke$arity$0() : fexpr__15955.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","init-key"),(function (key,value){
return integrant.core.normalize_key(key);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.halt_key_BANG_ !== 'undefined')){
} else {
/**
 * Halt a running or suspended implementation associated with a key. This is
 *   often used for stopping processes or cleaning up resources. For example, a
 *   database connection might be closed. This multimethod must be idempotent.
 *   The return value of this multimethod is discarded.
 */
integrant.core.halt_key_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15956 = cljs.core.get_global_hierarchy;
return (fexpr__15956.cljs$core$IFn$_invoke$arity$0 ? fexpr__15956.cljs$core$IFn$_invoke$arity$0() : fexpr__15956.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","halt-key!"),(function (key,value){
return integrant.core.normalize_key(key);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
integrant.core.halt_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,v){
return null;
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.resume_key !== 'undefined')){
} else {
/**
 * Turn a config value associated with a key into a concrete implementation,
 *   but reuse resources (e.g. connections, running threads, etc) from an existing
 *   implementation. By default this multimethod calls init-key and ignores the
 *   additional argument.
 */
integrant.core.resume_key = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15957 = cljs.core.get_global_hierarchy;
return (fexpr__15957.cljs$core$IFn$_invoke$arity$0 ? fexpr__15957.cljs$core$IFn$_invoke$arity$0() : fexpr__15957.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","resume-key"),(function (key,value,old_value,old_impl){
return integrant.core.normalize_key(key);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
integrant.core.resume_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (k,v,_,___$1){
return (integrant.core.init_key.cljs$core$IFn$_invoke$arity$2 ? integrant.core.init_key.cljs$core$IFn$_invoke$arity$2(k,v) : integrant.core.init_key.call(null,k,v));
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.suspend_key_BANG_ !== 'undefined')){
} else {
/**
 * Suspend a running implementation associated with a key, so that it may be
 *   eventually passed to resume-key. By default this multimethod calls halt-key!,
 *   but it may be customized to do things like keep a server running, but buffer
 *   incoming requests until the server is resumed.
 */
integrant.core.suspend_key_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15958 = cljs.core.get_global_hierarchy;
return (fexpr__15958.cljs$core$IFn$_invoke$arity$0 ? fexpr__15958.cljs$core$IFn$_invoke$arity$0() : fexpr__15958.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","suspend-key!"),(function (key,value){
return integrant.core.normalize_key(key);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
integrant.core.suspend_key_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (k,v){
return (integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2 ? integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2(k,v) : integrant.core.halt_key_BANG_.call(null,k,v));
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.pre_init_spec !== 'undefined')){
} else {
/**
 * Return a spec for the supplied key that is used to check the associated
 *   value before the key is initiated.
 */
integrant.core.pre_init_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__15959 = cljs.core.get_global_hierarchy;
return (fexpr__15959.cljs$core$IFn$_invoke$arity$0 ? fexpr__15959.cljs$core$IFn$_invoke$arity$0() : fexpr__15959.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("integrant.core","pre-init-spec"),integrant.core.normalize_key,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
integrant.core.pre_init_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_){
return null;
}));
integrant.core.spec_exception = (function integrant$core$spec_exception(system,k,v,spec,ed){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Spec failed on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system\n",(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15964_15968 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15965_15969 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15966_15970 = true;
var _STAR_print_fn_STAR__temp_val__15967_15971 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15966_15970);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15967_15971);

try{cljs.spec.alpha.explain_out(ed);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15965_15969);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15964_15968);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join(''),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$reason,cljs.core.cst$kw$integrant$core_SLASH_build_DASH_failed_DASH_spec,cljs.core.cst$kw$system,system,cljs.core.cst$kw$key,k,cljs.core.cst$kw$value,v,cljs.core.cst$kw$spec,spec,cljs.core.cst$kw$explain,ed], null));
});
integrant.core.assert_pre_init_spec = (function integrant$core$assert_pre_init_spec(system,key,value){
var temp__5753__auto__ = (integrant.core.pre_init_spec.cljs$core$IFn$_invoke$arity$1 ? integrant.core.pre_init_spec.cljs$core$IFn$_invoke$arity$1(key) : integrant.core.pre_init_spec.call(null,key));
if(cljs.core.truth_(temp__5753__auto__)){
var spec = temp__5753__auto__;
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,value)){
return null;
} else {
throw integrant.core.spec_exception(system,key,value,spec,cljs.spec.alpha.explain_data(spec,value));
}
} else {
return null;
}
});
/**
 * Prepare a config map for initiation. The prep-key method is applied to each
 *   entry in the map, and the values replaced with the return value. This is used
 *   for adding default values and references to the configuration.
 */
integrant.core.prep = (function integrant$core$prep(var_args){
var G__15973 = arguments.length;
switch (G__15973) {
case 1:
return integrant.core.prep.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.prep.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.prep.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.prep.cljs$core$IFn$_invoke$arity$2(config,cljs.core.keys(config));
}));

(integrant.core.prep.cljs$core$IFn$_invoke$arity$2 = (function (config,keys){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var keyset = cljs.core.set(keys);
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(cljs.core.truth_((keyset.cljs$core$IFn$_invoke$arity$1 ? keyset.cljs$core$IFn$_invoke$arity$1(k) : keyset.call(null,k)))?(integrant.core.prep_key.cljs$core$IFn$_invoke$arity$2 ? integrant.core.prep_key.cljs$core$IFn$_invoke$arity$2(k,v) : integrant.core.prep_key.call(null,k,v)):v));
}),cljs.core.PersistentArrayMap.EMPTY,config);
}));

(integrant.core.prep.cljs$lang$maxFixedArity = 2);

/**
 * Turn a config map into an system map. Keys are traversed in dependency
 *   order, initiated via the init-key multimethod, then the refs associated with
 *   the key are expanded.
 */
integrant.core.init = (function integrant$core$init(var_args){
var G__15976 = arguments.length;
switch (G__15976) {
case 1:
return integrant.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.init.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.init.cljs$core$IFn$_invoke$arity$1 = (function (config){
return integrant.core.init.cljs$core$IFn$_invoke$arity$2(config,cljs.core.keys(config));
}));

(integrant.core.init.cljs$core$IFn$_invoke$arity$2 = (function (config,keys){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,keys,integrant.core.init_key,integrant.core.assert_pre_init_spec,integrant.core.resolve_key);
}));

(integrant.core.init.cljs$lang$maxFixedArity = 2);

/**
 * Halt a system map by applying halt-key! in reverse dependency order.
 */
integrant.core.halt_BANG_ = (function integrant$core$halt_BANG_(var_args){
var G__15979 = arguments.length;
switch (G__15979) {
case 1:
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (system){
return integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
}));

(integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__15980 = system;
var G__15980__$1 = (((G__15980 == null))?null:cljs.core.meta(G__15980));
if((G__15980__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$integrant$core_SLASH_origin.cljs$core$IFn$_invoke$arity$1(G__15980__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_(system,keys,integrant.core.halt_key_BANG_);
}));

(integrant.core.halt_BANG_.cljs$lang$maxFixedArity = 2);

integrant.core.missing_keys = (function integrant$core$missing_keys(system,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ks),cljs.core.keys(system));
});
integrant.core.halt_missing_keys_BANG_ = (function integrant$core$halt_missing_keys_BANG_(config,system,keys){
var graph = integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$integrant$core_SLASH_origin.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(system)));
var missing_keys = integrant.core.missing_keys(system,integrant.core.dependent_keys(config,keys));
var seq__15982 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(integrant.core.key_comparator(graph),missing_keys));
var chunk__15983 = null;
var count__15984 = (0);
var i__15985 = (0);
while(true){
if((i__15985 < count__15984)){
var k = chunk__15983.cljs$core$IIndexed$_nth$arity$2(null,i__15985);
var G__15990_15994 = k;
var G__15991_15995 = (system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k));
(integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2 ? integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2(G__15990_15994,G__15991_15995) : integrant.core.halt_key_BANG_.call(null,G__15990_15994,G__15991_15995));


var G__15996 = seq__15982;
var G__15997 = chunk__15983;
var G__15998 = count__15984;
var G__15999 = (i__15985 + (1));
seq__15982 = G__15996;
chunk__15983 = G__15997;
count__15984 = G__15998;
i__15985 = G__15999;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__15982);
if(temp__5753__auto__){
var seq__15982__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15982__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15982__$1);
var G__16000 = cljs.core.chunk_rest(seq__15982__$1);
var G__16001 = c__4556__auto__;
var G__16002 = cljs.core.count(c__4556__auto__);
var G__16003 = (0);
seq__15982 = G__16000;
chunk__15983 = G__16001;
count__15984 = G__16002;
i__15985 = G__16003;
continue;
} else {
var k = cljs.core.first(seq__15982__$1);
var G__15992_16004 = k;
var G__15993_16005 = (system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k));
(integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2 ? integrant.core.halt_key_BANG_.cljs$core$IFn$_invoke$arity$2(G__15992_16004,G__15993_16005) : integrant.core.halt_key_BANG_.call(null,G__15992_16004,G__15993_16005));


var G__16006 = cljs.core.next(seq__15982__$1);
var G__16007 = null;
var G__16008 = (0);
var G__16009 = (0);
seq__15982 = G__16006;
chunk__15983 = G__16007;
count__15984 = G__16008;
i__15985 = G__16009;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Turn a config map into a system map, reusing resources from an existing
 *   system when it's possible to do so. Keys are traversed in dependency order,
 *   resumed with the resume-key multimethod, then the refs associated with the
 *   key are expanded.
 */
integrant.core.resume = (function integrant$core$resume(var_args){
var G__16011 = arguments.length;
switch (G__16011) {
case 2:
return integrant.core.resume.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return integrant.core.resume.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.resume.cljs$core$IFn$_invoke$arity$2 = (function (config,system){
return integrant.core.resume.cljs$core$IFn$_invoke$arity$3(config,system,cljs.core.keys(config));
}));

(integrant.core.resume.cljs$core$IFn$_invoke$arity$3 = (function (config,system,keys){
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__16012 = system;
var G__16012__$1 = (((G__16012 == null))?null:cljs.core.meta(G__16012));
if((G__16012__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$integrant$core_SLASH_origin.cljs$core$IFn$_invoke$arity$1(G__16012__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

integrant.core.halt_missing_keys_BANG_(config,system,keys);

return integrant.core.build.cljs$core$IFn$_invoke$arity$5(config,keys,(function (k,v){
if(cljs.core.contains_QMARK_(system,k)){
var G__16013 = k;
var G__16014 = v;
var G__16015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$integrant$core_SLASH_build.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(system)),k);
var G__16016 = (system.cljs$core$IFn$_invoke$arity$1 ? system.cljs$core$IFn$_invoke$arity$1(k) : system.call(null,k));
return (integrant.core.resume_key.cljs$core$IFn$_invoke$arity$4 ? integrant.core.resume_key.cljs$core$IFn$_invoke$arity$4(G__16013,G__16014,G__16015,G__16016) : integrant.core.resume_key.call(null,G__16013,G__16014,G__16015,G__16016));
} else {
return (integrant.core.init_key.cljs$core$IFn$_invoke$arity$2 ? integrant.core.init_key.cljs$core$IFn$_invoke$arity$2(k,v) : integrant.core.init_key.call(null,k,v));
}
}),integrant.core.assert_pre_init_spec,integrant.core.resolve_key);
}));

(integrant.core.resume.cljs$lang$maxFixedArity = 3);

/**
 * Suspend a system map by applying suspend-key! in reverse dependency order.
 */
integrant.core.suspend_BANG_ = (function integrant$core$suspend_BANG_(var_args){
var G__16019 = arguments.length;
switch (G__16019) {
case 1:
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (system){
return integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
}));

(integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_(system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__16020 = system;
var G__16020__$1 = (((G__16020 == null))?null:cljs.core.meta(G__16020));
if((G__16020__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$integrant$core_SLASH_origin.cljs$core$IFn$_invoke$arity$1(G__16020__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_(system,keys,integrant.core.suspend_key_BANG_);
}));

(integrant.core.suspend_BANG_.cljs$lang$maxFixedArity = 2);

