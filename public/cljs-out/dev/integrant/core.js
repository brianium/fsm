// Compiled by ClojureScript 1.10.773 {}
goog.provide('integrant.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('weavejester.dependency');

/**
 * @interface
 */
integrant.core.RefLike = function(){};

var integrant$core$RefLike$ref_key$dyn_23257 = (function (r){
var x__4428__auto__ = (((r == null))?null:r);
var m__4429__auto__ = (integrant.core.ref_key[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,r);
} else {
var m__4426__auto__ = (integrant.core.ref_key["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,r);
} else {
throw cljs.core.missing_protocol.call(null,"RefLike.ref-key",r);
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
return integrant$core$RefLike$ref_key$dyn_23257.call(null,r);
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

(integrant.core.Ref.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23259,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23263 = k23259;
var G__23263__$1 = (((G__23263 instanceof cljs.core.Keyword))?G__23263.fqn:null);
switch (G__23263__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23259,else__4383__auto__);

}
}));

(integrant.core.Ref.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23264){
var vec__23265 = p__23264;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23265,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23265,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
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
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#integrant.core.Ref{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23258){
var self__ = this;
var G__23258__$1 = this;
return (new cljs.core.RecordIter((0),G__23258__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2146506987 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(integrant.core.Ref.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23260,other23261){
var self__ = this;
var this23260__$1 = this;
return (((!((other23261 == null)))) && ((this23260__$1.constructor === other23261.constructor)) && (cljs.core._EQ_.call(null,this23260__$1.key,other23261.key)) && (cljs.core._EQ_.call(null,this23260__$1.__extmap,other23261.__extmap)));
}));

(integrant.core.Ref.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(integrant.core.Ref.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23258){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23268 = cljs.core.keyword_identical_QMARK_;
var expr__23269 = k__4388__auto__;
if(cljs.core.truth_(pred__23268.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__23269))){
return (new integrant.core.Ref(G__23258,self__.__meta,self__.__extmap,null));
} else {
return (new integrant.core.Ref(self__.key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23258),null));
}
}));

(integrant.core.Ref.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(integrant.core.Ref.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23258){
var self__ = this;
var this__4379__auto____$1 = this;
return (new integrant.core.Ref(self__.key,G__23258,self__.__extmap,self__.__hash));
}));

(integrant.core.Ref.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(integrant.core.Ref.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(integrant.core.Ref.cljs$lang$type = true);

(integrant.core.Ref.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"integrant.core/Ref",null,(1),null));
}));

(integrant.core.Ref.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"integrant.core/Ref");
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
integrant.core.map__GT_Ref = (function integrant$core$map__GT_Ref(G__23262){
var extmap__4419__auto__ = (function (){var G__23271 = cljs.core.dissoc.call(null,G__23262,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_.call(null,G__23262)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23271);
} else {
return G__23271;
}
})();
return (new integrant.core.Ref(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__23262),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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

(integrant.core.RefSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23274,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23278 = k23274;
var G__23278__$1 = (((G__23278 instanceof cljs.core.Keyword))?G__23278.fqn:null);
switch (G__23278__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23274,else__4383__auto__);

}
}));

(integrant.core.RefSet.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__23279){
var vec__23280 = p__23279;
var k__4403__auto__ = cljs.core.nth.call(null,vec__23280,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__23280,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
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
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#integrant.core.RefSet{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23273){
var self__ = this;
var G__23273__$1 = this;
return (new cljs.core.RecordIter((0),G__23273__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1045019366 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(integrant.core.RefSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23275,other23276){
var self__ = this;
var this23275__$1 = this;
return (((!((other23276 == null)))) && ((this23275__$1.constructor === other23276.constructor)) && (cljs.core._EQ_.call(null,this23275__$1.key,other23276.key)) && (cljs.core._EQ_.call(null,this23275__$1.__extmap,other23276.__extmap)));
}));

(integrant.core.RefSet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new integrant.core.RefSet(self__.key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(integrant.core.RefSet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23273){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23283 = cljs.core.keyword_identical_QMARK_;
var expr__23284 = k__4388__auto__;
if(cljs.core.truth_(pred__23283.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__23284))){
return (new integrant.core.RefSet(G__23273,self__.__meta,self__.__extmap,null));
} else {
return (new integrant.core.RefSet(self__.key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__23273),null));
}
}));

(integrant.core.RefSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(integrant.core.RefSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23273){
var self__ = this;
var this__4379__auto____$1 = this;
return (new integrant.core.RefSet(self__.key,G__23273,self__.__extmap,self__.__hash));
}));

(integrant.core.RefSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(integrant.core.RefSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(integrant.core.RefSet.cljs$lang$type = true);

(integrant.core.RefSet.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"integrant.core/RefSet",null,(1),null));
}));

(integrant.core.RefSet.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"integrant.core/RefSet");
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
integrant.core.map__GT_RefSet = (function integrant$core$map__GT_RefSet(G__23277){
var extmap__4419__auto__ = (function (){var G__23286 = cljs.core.dissoc.call(null,G__23277,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_.call(null,G__23277)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__23286);
} else {
return G__23286;
}
})();
return (new integrant.core.RefSet(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__23277),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

integrant.core.composite_key_QMARK_ = (function integrant$core$composite_key_QMARK_(keys){
return ((cljs.core.vector_QMARK_.call(null,keys)) && (cljs.core.every_QMARK_.call(null,cljs.core.qualified_keyword_QMARK_,keys)));
});
/**
 * Returns true if the key is a keyword or valid composite key.
 */
integrant.core.valid_config_key_QMARK_ = (function integrant$core$valid_config_key_QMARK_(key){
return ((cljs.core.qualified_keyword_QMARK_.call(null,key)) || (integrant.core.composite_key_QMARK_.call(null,key)));
});
/**
 * Create a reference to a top-level key in a config map.
 */
integrant.core.ref = (function integrant$core$ref(key){
if(integrant.core.valid_config_key_QMARK_.call(null,key)){
} else {
throw (new Error("Assert failed: (valid-config-key? key)"));
}

return integrant.core.__GT_Ref.call(null,key);
});
/**
 * Create a set of references to all matching top-level keys in a config map.
 */
integrant.core.refset = (function integrant$core$refset(key){
if(integrant.core.valid_config_key_QMARK_.call(null,key)){
} else {
throw (new Error("Assert failed: (valid-config-key? key)"));
}

return integrant.core.__GT_RefSet.call(null,key);
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
return cljs.core.native_satisfies_QMARK_.call(null,integrant.core.RefLike,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,integrant.core.RefLike,x);
}
});
integrant.core.depth_search = (function integrant$core$depth_search(pred_QMARK_,coll){
return cljs.core.filter.call(null,pred_QMARK_,cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.seq,coll));
});
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.composite_keyword !== 'undefined')){
} else {
/**
 * Return a unique keyword that is derived from an ordered collection of
 *   keywords. The function will return the same keyword for the same collection.
 */
integrant.core.composite_keyword = cljs.core.memoize.call(null,(function (kws){
var parts = (function (){var iter__4529__auto__ = (function integrant$core$iter__23289(s__23290){
return (new cljs.core.LazySeq(null,(function (){
var s__23290__$1 = s__23290;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__23290__$1);
if(temp__5753__auto__){
var s__23290__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23290__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23290__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23292 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23291 = (0);
while(true){
if((i__23291 < size__4528__auto__)){
var kw = cljs.core._nth.call(null,c__4527__auto__,i__23291);
cljs.core.chunk_append.call(null,b__23292,[cljs.core.namespace.call(null,kw),".",cljs.core.name.call(null,kw)].join(''));

var G__23297 = (i__23291 + (1));
i__23291 = G__23297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23292),integrant$core$iter__23289.call(null,cljs.core.chunk_rest.call(null,s__23290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23292),null);
}
} else {
var kw = cljs.core.first.call(null,s__23290__$2);
return cljs.core.cons.call(null,[cljs.core.namespace.call(null,kw),".",cljs.core.name.call(null,kw)].join(''),integrant$core$iter__23289.call(null,cljs.core.rest.call(null,s__23290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,kws);
})();
var prefix = [clojure.string.join.call(null,"+",parts),"_"].join('');
var composite = cljs.core.keyword.call(null,"integrant.composite",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,prefix)));
var seq__23293_23298 = cljs.core.seq.call(null,kws);
var chunk__23294_23299 = null;
var count__23295_23300 = (0);
var i__23296_23301 = (0);
while(true){
if((i__23296_23301 < count__23295_23300)){
var kw_23302 = cljs.core._nth.call(null,chunk__23294_23299,i__23296_23301);
cljs.core.derive.call(null,composite,kw_23302);


var G__23303 = seq__23293_23298;
var G__23304 = chunk__23294_23299;
var G__23305 = count__23295_23300;
var G__23306 = (i__23296_23301 + (1));
seq__23293_23298 = G__23303;
chunk__23294_23299 = G__23304;
count__23295_23300 = G__23305;
i__23296_23301 = G__23306;
continue;
} else {
var temp__5753__auto___23307 = cljs.core.seq.call(null,seq__23293_23298);
if(temp__5753__auto___23307){
var seq__23293_23308__$1 = temp__5753__auto___23307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23293_23308__$1)){
var c__4556__auto___23309 = cljs.core.chunk_first.call(null,seq__23293_23308__$1);
var G__23310 = cljs.core.chunk_rest.call(null,seq__23293_23308__$1);
var G__23311 = c__4556__auto___23309;
var G__23312 = cljs.core.count.call(null,c__4556__auto___23309);
var G__23313 = (0);
seq__23293_23298 = G__23310;
chunk__23294_23299 = G__23311;
count__23295_23300 = G__23312;
i__23296_23301 = G__23313;
continue;
} else {
var kw_23314 = cljs.core.first.call(null,seq__23293_23308__$1);
cljs.core.derive.call(null,composite,kw_23314);


var G__23315 = cljs.core.next.call(null,seq__23293_23308__$1);
var G__23316 = null;
var G__23317 = (0);
var G__23318 = (0);
seq__23293_23298 = G__23315;
chunk__23294_23299 = G__23316;
count__23295_23300 = G__23317;
i__23296_23301 = G__23318;
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
if(cljs.core.vector_QMARK_.call(null,k)){
return integrant.core.composite_keyword.call(null,k);
} else {
return k;
}
});
integrant.core.ambiguous_key_exception = (function integrant$core$ambiguous_key_exception(config,key,matching_keys){
return cljs.core.ex_info.call(null,["Ambiguous key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". Found multiple candidates: ",clojure.string.join.call(null,", ",matching_keys)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","ambiguous-key","integrant.core/ambiguous-key",953529055),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"matching-keys","matching-keys",-1609370737),matching_keys], null));
});
/**
 * Return true if a key is derived from candidate keyword or vector of
 *   keywords.
 */
integrant.core.derived_from_QMARK_ = (function integrant$core$derived_from_QMARK_(key,candidate){
var key__$1 = integrant.core.normalize_key.call(null,key);
if(cljs.core.vector_QMARK_.call(null,candidate)){
return cljs.core.every_QMARK_.call(null,(function (p1__23319_SHARP_){
return cljs.core.isa_QMARK_.call(null,key__$1,p1__23319_SHARP_);
}),candidate);
} else {
return cljs.core.isa_QMARK_.call(null,key__$1,candidate);
}
});
/**
 * Return a seq of all entries in a map, m, where the key is derived from the
 *   a candidate key, k. If there are no matching keys, nil is returned. The
 *   candidate key may be a keyword, or vector of keywords.
 */
integrant.core.find_derived = (function integrant$core$find_derived(m,k){
return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__23320_SHARP_){
return ((cljs.core._EQ_.call(null,cljs.core.key.call(null,p1__23320_SHARP_),k)) || (integrant.core.derived_from_QMARK_.call(null,cljs.core.key.call(null,p1__23320_SHARP_),k)));
}),m));
});
/**
 * Return the map entry in a map, m, where the key is derived from the keyword,
 *   k. If there are no matching keys, nil is returned. If there is more than one
 *   matching key, an ambiguous key exception is raised.
 */
integrant.core.find_derived_1 = (function integrant$core$find_derived_1(m,k){
var kvs = integrant.core.find_derived.call(null,m,k);
if(cljs.core.next.call(null,kvs)){
throw integrant.core.ambiguous_key_exception.call(null,m,k,cljs.core.map.call(null,cljs.core.key,kvs));
} else {
}

return cljs.core.first.call(null,kvs);
});
integrant.core.find_derived_refs = (function integrant$core$find_derived_refs(config,v,include_refsets_QMARK_){
return cljs.core.mapcat.call(null,(function (p1__23321_SHARP_){
return cljs.core.map.call(null,cljs.core.key,integrant.core.find_derived.call(null,config,p1__23321_SHARP_));
}),cljs.core.map.call(null,integrant.core.ref_key,integrant.core.depth_search.call(null,(cljs.core.truth_(include_refsets_QMARK_)?integrant.core.reflike_QMARK_:integrant.core.ref_QMARK_),v)));
});
/**
 * Return a dependency graph of all the refs and refsets in a config. Resolves
 *   derived dependencies. Takes the following options:
 * 
 *   `:include-refsets?`
 *   : whether to include refsets in the dependency graph (defaults to true)
 */
integrant.core.dependency_graph = (function integrant$core$dependency_graph(var_args){
var G__23325 = arguments.length;
switch (G__23325) {
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
return integrant.core.dependency_graph.call(null,config,cljs.core.PersistentArrayMap.EMPTY);
}));

(integrant.core.dependency_graph.cljs$core$IFn$_invoke$arity$2 = (function (config,p__23326){
var map__23327 = p__23326;
var map__23327__$1 = (((((!((map__23327 == null))))?(((((map__23327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23327):map__23327);
var include_refsets_QMARK_ = cljs.core.get.call(null,map__23327__$1,new cljs.core.Keyword(null,"include-refsets?","include-refsets?",-1173964472),true);
var find_refs = (function integrant$core$find_refs(v){
return integrant.core.find_derived_refs.call(null,config,v,include_refsets_QMARK_);
});
return cljs.core.reduce_kv.call(null,(function (g,k,v){
return cljs.core.reduce.call(null,(function (p1__23322_SHARP_,p2__23323_SHARP_){
return weavejester.dependency.depend.call(null,p1__23322_SHARP_,k,p2__23323_SHARP_);
}),g,find_refs.call(null,v));
}),weavejester.dependency.graph.call(null),config);
}));

(integrant.core.dependency_graph.cljs$lang$maxFixedArity = 2);

/**
 * Create a key comparator from the dependency graph of a configuration map.
 *   The comparator is deterministic; it will always result in the same key
 *   order.
 */
integrant.core.key_comparator = (function integrant$core$key_comparator(graph){
return weavejester.dependency.topo_comparator.call(null,(function (p1__23330_SHARP_,p2__23331_SHARP_){
return cljs.core.compare.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23330_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23331_SHARP_));
}),graph);
});
integrant.core.find_keys = (function integrant$core$find_keys(config,keys,f){
var graph = integrant.core.dependency_graph.call(null,config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-refsets?","include-refsets?",-1173964472),false], null));
var keyset = cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (p1__23332_SHARP_){
return cljs.core.map.call(null,cljs.core.key,integrant.core.find_derived.call(null,config,p1__23332_SHARP_));
}),keys));
return cljs.core.sort.call(null,integrant.core.key_comparator.call(null,integrant.core.dependency_graph.call(null,config)),clojure.set.union.call(null,keyset,f.call(null,graph,keyset)));
});
integrant.core.dependent_keys = (function integrant$core$dependent_keys(config,keys){
return integrant.core.find_keys.call(null,config,keys,weavejester.dependency.transitive_dependencies_set);
});
integrant.core.reverse_dependent_keys = (function integrant$core$reverse_dependent_keys(config,keys){
return cljs.core.reverse.call(null,integrant.core.find_keys.call(null,config,keys,weavejester.dependency.transitive_dependents_set));
});
integrant.core.missing_refs_exception = (function integrant$core$missing_refs_exception(config,refs){
return cljs.core.ex_info.call(null,["Missing definitions for refs: ",clojure.string.join.call(null,", ",refs)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","missing-refs","integrant.core/missing-refs",-232418620),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"missing-refs","missing-refs",-2034637127),refs], null));
});
integrant.core.ambiguous_refs = (function integrant$core$ambiguous_refs(config){
return cljs.core.filter.call(null,(function (p1__23334_SHARP_){
return cljs.core.next.call(null,integrant.core.find_derived.call(null,config,p1__23334_SHARP_));
}),cljs.core.map.call(null,integrant.core.ref_key,integrant.core.depth_search.call(null,integrant.core.ref_QMARK_,config)));
});
integrant.core.missing_refs = (function integrant$core$missing_refs(config){
return cljs.core.remove.call(null,(function (p1__23335_SHARP_){
return integrant.core.find_derived.call(null,config,p1__23335_SHARP_);
}),cljs.core.map.call(null,integrant.core.ref_key,integrant.core.depth_search.call(null,integrant.core.ref_QMARK_,config)));
});
integrant.core.invalid_composite_keys = (function integrant$core$invalid_composite_keys(config){
return cljs.core.remove.call(null,integrant.core.composite_key_QMARK_,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,config)));
});
integrant.core.invalid_composite_key_exception = (function integrant$core$invalid_composite_key_exception(config,key){
return cljs.core.ex_info.call(null,["Invalid composite key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),". Every keyword must be namespaced."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","invalid-composite-key","integrant.core/invalid-composite-key",-858672303),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
});
integrant.core.resolve_ref = (function integrant$core$resolve_ref(config,resolvef,ref){
var vec__23336 = cljs.core.first.call(null,integrant.core.find_derived.call(null,config,integrant.core.ref_key.call(null,ref)));
var k = cljs.core.nth.call(null,vec__23336,(0),null);
var v = cljs.core.nth.call(null,vec__23336,(1),null);
return resolvef.call(null,k,v);
});
integrant.core.resolve_refset = (function integrant$core$resolve_refset(config,resolvef,refset){
return cljs.core.set.call(null,(function (){var iter__4529__auto__ = (function integrant$core$resolve_refset_$_iter__23339(s__23340){
return (new cljs.core.LazySeq(null,(function (){
var s__23340__$1 = s__23340;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__23340__$1);
if(temp__5753__auto__){
var s__23340__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23340__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23340__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23342 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23341 = (0);
while(true){
if((i__23341 < size__4528__auto__)){
var vec__23343 = cljs.core._nth.call(null,c__4527__auto__,i__23341);
var k = cljs.core.nth.call(null,vec__23343,(0),null);
var v = cljs.core.nth.call(null,vec__23343,(1),null);
cljs.core.chunk_append.call(null,b__23342,resolvef.call(null,k,v));

var G__23349 = (i__23341 + (1));
i__23341 = G__23349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23342),integrant$core$resolve_refset_$_iter__23339.call(null,cljs.core.chunk_rest.call(null,s__23340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23342),null);
}
} else {
var vec__23346 = cljs.core.first.call(null,s__23340__$2);
var k = cljs.core.nth.call(null,vec__23346,(0),null);
var v = cljs.core.nth.call(null,vec__23346,(1),null);
return cljs.core.cons.call(null,resolvef.call(null,k,v),integrant$core$resolve_refset_$_iter__23339.call(null,cljs.core.rest.call(null,s__23340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,integrant.core.find_derived.call(null,config,integrant.core.ref_key.call(null,refset)));
})());
});
integrant.core.expand_key = (function integrant$core$expand_key(config,resolvef,value){
return clojure.walk.postwalk.call(null,(function (p1__23350_SHARP_){
if(integrant.core.ref_QMARK_.call(null,p1__23350_SHARP_)){
return integrant.core.resolve_ref.call(null,config,resolvef,p1__23350_SHARP_);
} else {
if(integrant.core.refset_QMARK_.call(null,p1__23350_SHARP_)){
return integrant.core.resolve_refset.call(null,config,resolvef,p1__23350_SHARP_);
} else {
return p1__23350_SHARP_;

}
}
}),value);
});
integrant.core.run_exception = (function integrant$core$run_exception(system,completed,remaining,f,k,v,t){
return cljs.core.ex_info.call(null,["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when running system"].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","run-threw-exception","integrant.core/run-threw-exception",1175352467),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"completed-keys","completed-keys",-988226740),cljs.core.reverse.call(null,completed),new cljs.core.Keyword(null,"remaining-keys","remaining-keys",-607706590),cljs.core.rest.call(null,remaining),new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null),t);
});
integrant.core.try_run_action = (function integrant$core$try_run_action(system,completed,remaining,f,k){
var v = system.call(null,k);
try{return f.call(null,k,v);
}catch (e23351){var t = e23351;
throw integrant.core.run_exception.call(null,system,completed,remaining,f,k,v,t);
}});
integrant.core.run_loop = (function integrant$core$run_loop(system,keys,f){
var completed = cljs.core.List.EMPTY;
var remaining = keys;
while(true){
if(cljs.core.seq.call(null,remaining)){
var k = cljs.core.first.call(null,remaining);
integrant.core.try_run_action.call(null,system,completed,remaining,f,k);

var G__23352 = cljs.core.cons.call(null,k,completed);
var G__23353 = cljs.core.rest.call(null,remaining);
completed = G__23352;
remaining = G__23353;
continue;
} else {
return null;
}
break;
}
});
integrant.core.system_origin = (function integrant$core$system_origin(system){
return cljs.core.select_keys.call(null,new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,system)),cljs.core.keys.call(null,system));
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.run_BANG_ = (function integrant$core$run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__23354 = system;
var G__23354__$1 = (((G__23354 == null))?null:cljs.core.meta.call(null,G__23354));
if((G__23354__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__23354__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop.call(null,system,integrant.core.dependent_keys.call(null,integrant.core.system_origin.call(null,system),keys),f);
});
/**
 * Apply a side-effectful function f to each key value pair in a system map.
 *   Keys are traversed in reverse dependency order. The function should take two
 *   arguments, a key and value.
 */
integrant.core.reverse_run_BANG_ = (function integrant$core$reverse_run_BANG_(system,keys,f){
if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__23355 = system;
var G__23355__$1 = (((G__23355 == null))?null:cljs.core.meta.call(null,G__23355));
if((G__23355__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__23355__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.run_loop.call(null,system,integrant.core.reverse_dependent_keys.call(null,integrant.core.system_origin.call(null,system),keys),f);
});
/**
 * Reduce all the key value pairs in system map in dependency order, starting
 *   from an initial value. The function should take three arguments: the
 *   accumulator, the current key and the current value.
 */
integrant.core.fold = (function integrant$core$fold(system,f,val){
var graph = integrant.core.dependency_graph.call(null,integrant.core.system_origin.call(null,system));
return cljs.core.reduce.call(null,(function (p1__23356_SHARP_,p2__23357_SHARP_){
return f.call(null,p1__23356_SHARP_,p2__23357_SHARP_,system.call(null,p2__23357_SHARP_));
}),val,cljs.core.sort.call(null,integrant.core.key_comparator.call(null,graph),cljs.core.keys.call(null,system)));
});
integrant.core.build_exception = (function integrant$core$build_exception(system,f,k,v,t){
return cljs.core.ex_info.call(null,["Error on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system"].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","build-threw-exception","integrant.core/build-threw-exception",-205617592),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null),t);
});
integrant.core.try_build_action = (function integrant$core$try_build_action(system,f,k,v){
try{return f.call(null,k,v);
}catch (e23358){var t = e23358;
throw integrant.core.build_exception.call(null,system,f,k,v,t);
}});
integrant.core.build_key = (function integrant$core$build_key(f,assertf,resolvef,system,p__23359){
var vec__23360 = p__23359;
var k = cljs.core.nth.call(null,vec__23360,(0),null);
var v = cljs.core.nth.call(null,vec__23360,(1),null);
var v_SINGLEQUOTE_ = integrant.core.expand_key.call(null,system,resolvef,v);
assertf.call(null,system,k,v_SINGLEQUOTE_);

return cljs.core.vary_meta.call(null,cljs.core.assoc.call(null,system,k,integrant.core.try_build_action.call(null,system,f,k,v_SINGLEQUOTE_)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("integrant.core","build","integrant.core/build",-1937237701),k], null),v_SINGLEQUOTE_);
});
/**
 * Apply a function f to each key value pair in a configuration map. Keys are
 *   traversed in dependency order, and any references in the value expanded. The
 *   function should take two arguments, a key and value, and return a new value.
 *   An optional fourth argument, assertf, may be supplied to provide an assertion
 *   check on the system, key and expanded value.
 */
integrant.core.build = (function integrant$core$build(var_args){
var G__23364 = arguments.length;
switch (G__23364) {
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
return integrant.core.build.call(null,config,keys,f,(function (_,___$1,___$2){
return null;
}));
}));

(integrant.core.build.cljs$core$IFn$_invoke$arity$4 = (function (config,keys,f,assertf){
return integrant.core.build.call(null,config,keys,f,assertf,(function (_,v){
return v;
}));
}));

(integrant.core.build.cljs$core$IFn$_invoke$arity$5 = (function (config,keys,f,assertf,resolvef){
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var relevant_keys = integrant.core.dependent_keys.call(null,config,keys);
var relevant_config = cljs.core.select_keys.call(null,config,relevant_keys);
var temp__5753__auto___23366 = cljs.core.first.call(null,integrant.core.invalid_composite_keys.call(null,config));
if(cljs.core.truth_(temp__5753__auto___23366)){
var invalid_key_23367 = temp__5753__auto___23366;
throw integrant.core.invalid_composite_key_exception.call(null,config,invalid_key_23367);
} else {
}

var temp__5753__auto___23368 = cljs.core.first.call(null,integrant.core.ambiguous_refs.call(null,relevant_config));
if(cljs.core.truth_(temp__5753__auto___23368)){
var ref_23369 = temp__5753__auto___23368;
throw integrant.core.ambiguous_key_exception.call(null,config,ref_23369,cljs.core.map.call(null,cljs.core.key,integrant.core.find_derived.call(null,config,ref_23369)));
} else {
}

var temp__5753__auto___23370 = cljs.core.seq.call(null,integrant.core.missing_refs.call(null,relevant_config));
if(temp__5753__auto___23370){
var refs_23371 = temp__5753__auto___23370;
throw integrant.core.missing_refs_exception.call(null,config,refs_23371);
} else {
}

return cljs.core.reduce.call(null,cljs.core.partial.call(null,integrant.core.build_key,f,assertf,resolvef),cljs.core.with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839),config], null)),cljs.core.map.call(null,(function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,config.call(null,k)], null);
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
integrant.core.resolve_key = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","resolve-key"),(function (key,value){
return integrant.core.normalize_key.call(null,key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.resolve_key,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,v){
return v;
}));
/**
 * Replace all refs with the values they correspond to.
 */
integrant.core.expand = (function integrant$core$expand(config){
return integrant.core.build.call(null,config,cljs.core.keys.call(null,config),(function (_,v){
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
integrant.core.prep_key = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","prep-key"),(function (key,value){
return integrant.core.normalize_key.call(null,key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.prep_key,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,v){
return v;
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.init_key !== 'undefined')){
} else {
/**
 * Turn a config value associated with a key into a concrete implementation.
 *   For example, a database URL might be turned into a database connection.
 */
integrant.core.init_key = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","init-key"),(function (key,value){
return integrant.core.normalize_key.call(null,key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
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
integrant.core.halt_key_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","halt-key!"),(function (key,value){
return integrant.core.normalize_key.call(null,key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.halt_key_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,v){
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
integrant.core.resume_key = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","resume-key"),(function (key,value,old_value,old_impl){
return integrant.core.normalize_key.call(null,key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.resume_key,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v,_,___$1){
return integrant.core.init_key.call(null,k,v);
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.suspend_key_BANG_ !== 'undefined')){
} else {
/**
 * Suspend a running implementation associated with a key, so that it may be
 *   eventually passed to resume-key. By default this multimethod calls halt-key!,
 *   but it may be customized to do things like keep a server running, but buffer
 *   incoming requests until the server is resumed.
 */
integrant.core.suspend_key_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","suspend-key!"),(function (key,value){
return integrant.core.normalize_key.call(null,key);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.suspend_key_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (k,v){
return integrant.core.halt_key_BANG_.call(null,k,v);
}));
if((typeof integrant !== 'undefined') && (typeof integrant.core !== 'undefined') && (typeof integrant.core.pre_init_spec !== 'undefined')){
} else {
/**
 * Return a spec for the supplied key that is used to check the associated
 *   value before the key is initiated.
 */
integrant.core.pre_init_spec = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"integrant.core","pre-init-spec"),integrant.core.normalize_key,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,integrant.core.pre_init_spec,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
integrant.core.spec_exception = (function integrant$core$spec_exception(system,k,v,spec,ed){
return cljs.core.ex_info.call(null,["Spec failed on key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," when building system\n",(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23376_23380 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23377_23381 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23378_23382 = true;
var _STAR_print_fn_STAR__temp_val__23379_23383 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23378_23382);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23379_23383);

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23377_23381);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23376_23380);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("integrant.core","build-failed-spec","integrant.core/build-failed-spec",1167262590),new cljs.core.Keyword(null,"system","system",-29381724),system,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"explain","explain",484226146),ed], null));
});
integrant.core.assert_pre_init_spec = (function integrant$core$assert_pre_init_spec(system,key,value){
var temp__5753__auto__ = integrant.core.pre_init_spec.call(null,key);
if(cljs.core.truth_(temp__5753__auto__)){
var spec = temp__5753__auto__;
if(cljs.spec.alpha.valid_QMARK_.call(null,spec,value)){
return null;
} else {
throw integrant.core.spec_exception.call(null,system,key,value,spec,cljs.spec.alpha.explain_data.call(null,spec,value));
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
var G__23385 = arguments.length;
switch (G__23385) {
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
return integrant.core.prep.call(null,config,cljs.core.keys.call(null,config));
}));

(integrant.core.prep.cljs$core$IFn$_invoke$arity$2 = (function (config,keys){
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var keyset = cljs.core.set.call(null,keys);
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,(cljs.core.truth_(keyset.call(null,k))?integrant.core.prep_key.call(null,k,v):v));
}),cljs.core.PersistentArrayMap.EMPTY,config);
}));

(integrant.core.prep.cljs$lang$maxFixedArity = 2);

/**
 * Turn a config map into an system map. Keys are traversed in dependency
 *   order, initiated via the init-key multimethod, then the refs associated with
 *   the key are expanded.
 */
integrant.core.init = (function integrant$core$init(var_args){
var G__23388 = arguments.length;
switch (G__23388) {
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
return integrant.core.init.call(null,config,cljs.core.keys.call(null,config));
}));

(integrant.core.init.cljs$core$IFn$_invoke$arity$2 = (function (config,keys){
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

return integrant.core.build.call(null,config,keys,integrant.core.init_key,integrant.core.assert_pre_init_spec,integrant.core.resolve_key);
}));

(integrant.core.init.cljs$lang$maxFixedArity = 2);

/**
 * Halt a system map by applying halt-key! in reverse dependency order.
 */
integrant.core.halt_BANG_ = (function integrant$core$halt_BANG_(var_args){
var G__23391 = arguments.length;
switch (G__23391) {
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
return integrant.core.halt_BANG_.call(null,system,cljs.core.keys.call(null,system));
}));

(integrant.core.halt_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__23392 = system;
var G__23392__$1 = (((G__23392 == null))?null:cljs.core.meta.call(null,G__23392));
if((G__23392__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__23392__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_.call(null,system,keys,integrant.core.halt_key_BANG_);
}));

(integrant.core.halt_BANG_.cljs$lang$maxFixedArity = 2);

integrant.core.missing_keys = (function integrant$core$missing_keys(system,ks){
return cljs.core.remove.call(null,cljs.core.set.call(null,ks),cljs.core.keys.call(null,system));
});
integrant.core.halt_missing_keys_BANG_ = (function integrant$core$halt_missing_keys_BANG_(config,system,keys){
var graph = integrant.core.dependency_graph.call(null,new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,system)));
var missing_keys = integrant.core.missing_keys.call(null,system,integrant.core.dependent_keys.call(null,config,keys));
var seq__23394 = cljs.core.seq.call(null,cljs.core.sort.call(null,integrant.core.key_comparator.call(null,graph),missing_keys));
var chunk__23395 = null;
var count__23396 = (0);
var i__23397 = (0);
while(true){
if((i__23397 < count__23396)){
var k = cljs.core._nth.call(null,chunk__23395,i__23397);
integrant.core.halt_key_BANG_.call(null,k,system.call(null,k));


var G__23398 = seq__23394;
var G__23399 = chunk__23395;
var G__23400 = count__23396;
var G__23401 = (i__23397 + (1));
seq__23394 = G__23398;
chunk__23395 = G__23399;
count__23396 = G__23400;
i__23397 = G__23401;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__23394);
if(temp__5753__auto__){
var seq__23394__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23394__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23394__$1);
var G__23402 = cljs.core.chunk_rest.call(null,seq__23394__$1);
var G__23403 = c__4556__auto__;
var G__23404 = cljs.core.count.call(null,c__4556__auto__);
var G__23405 = (0);
seq__23394 = G__23402;
chunk__23395 = G__23403;
count__23396 = G__23404;
i__23397 = G__23405;
continue;
} else {
var k = cljs.core.first.call(null,seq__23394__$1);
integrant.core.halt_key_BANG_.call(null,k,system.call(null,k));


var G__23406 = cljs.core.next.call(null,seq__23394__$1);
var G__23407 = null;
var G__23408 = (0);
var G__23409 = (0);
seq__23394 = G__23406;
chunk__23395 = G__23407;
count__23396 = G__23408;
i__23397 = G__23409;
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
var G__23411 = arguments.length;
switch (G__23411) {
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
return integrant.core.resume.call(null,config,system,cljs.core.keys.call(null,config));
}));

(integrant.core.resume.cljs$core$IFn$_invoke$arity$3 = (function (config,system,keys){
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__23412 = system;
var G__23412__$1 = (((G__23412 == null))?null:cljs.core.meta.call(null,G__23412));
if((G__23412__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__23412__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

integrant.core.halt_missing_keys_BANG_.call(null,config,system,keys);

return integrant.core.build.call(null,config,keys,(function (k,v){
if(cljs.core.contains_QMARK_.call(null,system,k)){
return integrant.core.resume_key.call(null,k,v,cljs.core.get.call(null,new cljs.core.Keyword("integrant.core","build","integrant.core/build",-1937237701).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,system)),k),system.call(null,k));
} else {
return integrant.core.init_key.call(null,k,v);
}
}),integrant.core.assert_pre_init_spec,integrant.core.resolve_key);
}));

(integrant.core.resume.cljs$lang$maxFixedArity = 3);

/**
 * Suspend a system map by applying suspend-key! in reverse dependency order.
 */
integrant.core.suspend_BANG_ = (function integrant$core$suspend_BANG_(var_args){
var G__23415 = arguments.length;
switch (G__23415) {
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
return integrant.core.suspend_BANG_.call(null,system,cljs.core.keys.call(null,system));
}));

(integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (system,keys){
if(cljs.core.map_QMARK_.call(null,system)){
} else {
throw (new Error("Assert failed: (map? system)"));
}

if(cljs.core.truth_((function (){var G__23416 = system;
var G__23416__$1 = (((G__23416 == null))?null:cljs.core.meta.call(null,G__23416));
if((G__23416__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("integrant.core","origin","integrant.core/origin",-1025941839).cljs$core$IFn$_invoke$arity$1(G__23416__$1);
}
})())){
} else {
throw (new Error("Assert failed: (some-> system meta :integrant.core/origin)"));
}

return integrant.core.reverse_run_BANG_.call(null,system,keys,integrant.core.suspend_key_BANG_);
}));

(integrant.core.suspend_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=core.js.map
