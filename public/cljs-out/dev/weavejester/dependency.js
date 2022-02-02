// Compiled by ClojureScript 1.10.773 {}
goog.provide('weavejester.dependency');
goog.require('cljs.core');
goog.require('clojure.set');

/**
 * @interface
 */
weavejester.dependency.DependencyGraph = function(){};

var weavejester$dependency$DependencyGraph$immediate_dependencies$dyn_18238 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.immediate_dependencies[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node);
} else {
var m__4426__auto__ = (weavejester.dependency.immediate_dependencies["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependencies",graph);
}
}
});
/**
 * Returns the set of immediate dependencies of node.
 */
weavejester.dependency.immediate_dependencies = (function weavejester$dependency$immediate_dependencies(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$immediate_dependencies$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraph$immediate_dependencies$dyn_18238.call(null,graph,node);
}
});

var weavejester$dependency$DependencyGraph$immediate_dependents$dyn_18239 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.immediate_dependents[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node);
} else {
var m__4426__auto__ = (weavejester.dependency.immediate_dependents["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.immediate-dependents",graph);
}
}
});
/**
 * Returns the set of immediate dependents of node.
 */
weavejester.dependency.immediate_dependents = (function weavejester$dependency$immediate_dependents(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$immediate_dependents$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraph$immediate_dependents$dyn_18239.call(null,graph,node);
}
});

var weavejester$dependency$DependencyGraph$transitive_dependencies$dyn_18240 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.transitive_dependencies[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node);
} else {
var m__4426__auto__ = (weavejester.dependency.transitive_dependencies["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependencies",graph);
}
}
});
/**
 * Returns the set of all things which node depends on, directly or
 *  transitively.
 */
weavejester.dependency.transitive_dependencies = (function weavejester$dependency$transitive_dependencies(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$transitive_dependencies$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraph$transitive_dependencies$dyn_18240.call(null,graph,node);
}
});

var weavejester$dependency$DependencyGraph$transitive_dependencies_set$dyn_18241 = (function (graph,node_set){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.transitive_dependencies_set[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node_set);
} else {
var m__4426__auto__ = (weavejester.dependency.transitive_dependencies_set["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node_set);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependencies-set",graph);
}
}
});
/**
 * Returns the set of all things which any node in node-set depends
 *  on, directly or transitively.
 */
weavejester.dependency.transitive_dependencies_set = (function weavejester$dependency$transitive_dependencies_set(graph,node_set){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$transitive_dependencies_set$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$transitive_dependencies_set$arity$2(graph,node_set);
} else {
return weavejester$dependency$DependencyGraph$transitive_dependencies_set$dyn_18241.call(null,graph,node_set);
}
});

var weavejester$dependency$DependencyGraph$transitive_dependents$dyn_18242 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.transitive_dependents[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node);
} else {
var m__4426__auto__ = (weavejester.dependency.transitive_dependents["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependents",graph);
}
}
});
/**
 * Returns the set of all things which depend upon node, directly or
 *  transitively.
 */
weavejester.dependency.transitive_dependents = (function weavejester$dependency$transitive_dependents(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$transitive_dependents$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraph$transitive_dependents$dyn_18242.call(null,graph,node);
}
});

var weavejester$dependency$DependencyGraph$transitive_dependents_set$dyn_18243 = (function (graph,node_set){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.transitive_dependents_set[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node_set);
} else {
var m__4426__auto__ = (weavejester.dependency.transitive_dependents_set["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node_set);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.transitive-dependents-set",graph);
}
}
});
/**
 * Returns the set of all things which depend upon any node in
 *  node-set, directly or transitively.
 */
weavejester.dependency.transitive_dependents_set = (function weavejester$dependency$transitive_dependents_set(graph,node_set){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$transitive_dependents_set$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraph$transitive_dependents_set$arity$2(graph,node_set);
} else {
return weavejester$dependency$DependencyGraph$transitive_dependents_set$dyn_18243.call(null,graph,node_set);
}
});

var weavejester$dependency$DependencyGraph$nodes$dyn_18244 = (function (graph){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.nodes[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph);
} else {
var m__4426__auto__ = (weavejester.dependency.nodes["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraph.nodes",graph);
}
}
});
/**
 * Returns the set of all nodes in graph.
 */
weavejester.dependency.nodes = (function weavejester$dependency$nodes(graph){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraph$nodes$arity$1 == null)))))){
return graph.weavejester$dependency$DependencyGraph$nodes$arity$1(graph);
} else {
return weavejester$dependency$DependencyGraph$nodes$dyn_18244.call(null,graph);
}
});


/**
 * @interface
 */
weavejester.dependency.DependencyGraphUpdate = function(){};

var weavejester$dependency$DependencyGraphUpdate$depend$dyn_18245 = (function (graph,node,dep){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.depend[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node,dep);
} else {
var m__4426__auto__ = (weavejester.dependency.depend["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node,dep);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.depend",graph);
}
}
});
/**
 * Returns a new graph with a dependency from node to dep ("node depends
 *  on dep"). Forbids circular dependencies.
 */
weavejester.dependency.depend = (function weavejester$dependency$depend(graph,node,dep){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraphUpdate$depend$arity$3 == null)))))){
return graph.weavejester$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else {
return weavejester$dependency$DependencyGraphUpdate$depend$dyn_18245.call(null,graph,node,dep);
}
});

var weavejester$dependency$DependencyGraphUpdate$remove_edge$dyn_18246 = (function (graph,node,dep){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.remove_edge[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node,dep);
} else {
var m__4426__auto__ = (weavejester.dependency.remove_edge["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node,dep);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-edge",graph);
}
}
});
/**
 * Returns a new graph with the dependency from node to dep removed.
 */
weavejester.dependency.remove_edge = (function weavejester$dependency$remove_edge(graph,node,dep){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraphUpdate$remove_edge$arity$3 == null)))))){
return graph.weavejester$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else {
return weavejester$dependency$DependencyGraphUpdate$remove_edge$dyn_18246.call(null,graph,node,dep);
}
});

var weavejester$dependency$DependencyGraphUpdate$remove_all$dyn_18247 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.remove_all[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node);
} else {
var m__4426__auto__ = (weavejester.dependency.remove_all["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-all",graph);
}
}
});
/**
 * Returns a new dependency graph with all references to node removed.
 */
weavejester.dependency.remove_all = (function weavejester$dependency$remove_all(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraphUpdate$remove_all$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraphUpdate$remove_all$dyn_18247.call(null,graph,node);
}
});

var weavejester$dependency$DependencyGraphUpdate$remove_node$dyn_18248 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (weavejester.dependency.remove_node[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,graph,node);
} else {
var m__4426__auto__ = (weavejester.dependency.remove_node["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,graph,node);
} else {
throw cljs.core.missing_protocol.call(null,"DependencyGraphUpdate.remove-node",graph);
}
}
});
/**
 * Removes the node from the dependency graph without removing it as a
 *  dependency of other nodes. That is, removes all outgoing edges from
 *  node.
 */
weavejester.dependency.remove_node = (function weavejester$dependency$remove_node(graph,node){
if((((!((graph == null)))) && ((!((graph.weavejester$dependency$DependencyGraphUpdate$remove_node$arity$2 == null)))))){
return graph.weavejester$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else {
return weavejester$dependency$DependencyGraphUpdate$remove_node$dyn_18248.call(null,graph,node);
}
});

weavejester.dependency.remove_from_map = (function weavejester$dependency$remove_from_map(amap,x){
return cljs.core.reduce.call(null,(function (m,p__18249){
var vec__18250 = p__18249;
var k = cljs.core.nth.call(null,vec__18250,(0),null);
var vs = cljs.core.nth.call(null,vec__18250,(1),null);
return cljs.core.assoc.call(null,m,k,cljs.core.disj.call(null,vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,amap,x));
});
/**
 * Recursively expands the set of dependency relationships starting
 *   at (get neighbors x), for each x in node-set
 */
weavejester.dependency.transitive = (function weavejester$dependency$transitive(neighbors,node_set){
var unexpanded = cljs.core.mapcat.call(null,neighbors,node_set);
var expanded = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5751__auto__ = cljs.core.seq.call(null,unexpanded);
if(temp__5751__auto__){
var vec__18256 = temp__5751__auto__;
var seq__18257 = cljs.core.seq.call(null,vec__18256);
var first__18258 = cljs.core.first.call(null,seq__18257);
var seq__18257__$1 = cljs.core.next.call(null,seq__18257);
var node = first__18258;
var more = seq__18257__$1;
if(cljs.core.contains_QMARK_.call(null,expanded,node)){
var G__18259 = more;
var G__18260 = expanded;
unexpanded = G__18259;
expanded = G__18260;
continue;
} else {
var G__18261 = cljs.core.concat.call(null,more,neighbors.call(null,node));
var G__18262 = cljs.core.conj.call(null,expanded,node);
unexpanded = G__18261;
expanded = G__18262;
continue;
}
} else {
return expanded;
}
break;
}
});
weavejester.dependency.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {weavejester.dependency.DependencyGraph}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {weavejester.dependency.DependencyGraphUpdate}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
weavejester.dependency.MapDependencyGraph = (function (dependencies,dependents,__meta,__extmap,__hash){
this.dependencies = dependencies;
this.dependents = dependents;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18264,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18268 = k18264;
var G__18268__$1 = (((G__18268 instanceof cljs.core.Keyword))?G__18268.fqn:null);
switch (G__18268__$1) {
case "dependencies":
return self__.dependencies;

break;
case "dependents":
return self__.dependents;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18264,else__4383__auto__);

}
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__18269){
var vec__18270 = p__18269;
var k__4403__auto__ = cljs.core.nth.call(null,vec__18270,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__18270,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#weavejester.dependency.MapDependencyGraph{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents],null))], null),self__.__extmap));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18263){
var self__ = this;
var G__18263__$1 = this;
return (new cljs.core.RecordIter((0),G__18263__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,self__.__extmap,self__.__hash));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-592853898 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18265,other18266){
var self__ = this;
var this18265__$1 = this;
return (((!((other18266 == null)))) && ((this18265__$1.constructor === other18266.constructor)) && (cljs.core._EQ_.call(null,this18265__$1.dependencies,other18266.dependencies)) && (cljs.core._EQ_.call(null,this18265__$1.dependents,other18266.dependents)) && (cljs.core._EQ_.call(null,this18265__$1.__extmap,other18266.__extmap)));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dependents","dependents",136812837),null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18263){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18273 = cljs.core.keyword_identical_QMARK_;
var expr__18274 = k__4388__auto__;
if(cljs.core.truth_(pred__18273.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),expr__18274))){
return (new weavejester.dependency.MapDependencyGraph(G__18263,self__.dependents,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18273.call(null,new cljs.core.Keyword(null,"dependents","dependents",136812837),expr__18274))){
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,G__18263,self__.__meta,self__.__extmap,null));
} else {
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__18263),null));
}
}
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents,null))], null),self__.__extmap));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$ = cljs.core.PROTOCOL_SENTINEL);

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.call(null,self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.call(null,self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return weavejester.dependency.transitive.call(null,self__.dependencies,cljs.core.PersistentHashSet.createAsIfByAssoc([node]));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$transitive_dependencies_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return weavejester.dependency.transitive.call(null,self__.dependencies,node_set);
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return weavejester.dependency.transitive.call(null,self__.dependents,cljs.core.PersistentHashSet.createAsIfByAssoc([node]));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$transitive_dependents_set$arity$2 = (function (graph,node_set){
var self__ = this;
var graph__$1 = this;
return weavejester.dependency.transitive.call(null,self__.dependents,node_set);
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraph$nodes$arity$1 = (function (graph){
var self__ = this;
var graph__$1 = this;
return clojure.set.union.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependencies)),cljs.core.set.call(null,cljs.core.keys.call(null,self__.dependents)));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18263){
var self__ = this;
var this__4379__auto____$1 = this;
return (new weavejester.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,G__18263,self__.__extmap,self__.__hash));
}));

(weavejester.dependency.MapDependencyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$ = cljs.core.PROTOCOL_SENTINEL);

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.call(null,node,dep);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return weavejester.dependency.depends_QMARK_.call(null,graph__$1,dep,node);
}
})())){
throw cljs.core.ex_info.call(null,["Circular dependency between ",cljs.core.pr_str.call(null,node)," and ",cljs.core.pr_str.call(null,dep)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("weavejester.dependency","circular-dependency","weavejester.dependency/circular-dependency",463394013),new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"dependency","dependency",1300131203),dep], null));
} else {
}

return (new weavejester.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),weavejester.dependency.set_conj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),weavejester.dependency.set_conj,node),null,null,null));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
return (new weavejester.dependency.MapDependencyGraph(cljs.core.update_in.call(null,self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.call(null,self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node),null,null,null));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new weavejester.dependency.MapDependencyGraph(weavejester.dependency.remove_from_map.call(null,self__.dependencies,node),weavejester.dependency.remove_from_map.call(null,self__.dependents,node),null,null,null));
}));

(weavejester.dependency.MapDependencyGraph.prototype.weavejester$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new weavejester.dependency.MapDependencyGraph(cljs.core.dissoc.call(null,self__.dependencies,node),self__.dependents,null,null,null));
}));

(weavejester.dependency.MapDependencyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dependencies","dependencies",-1546371164,null),new cljs.core.Symbol(null,"dependents","dependents",1777344364,null)], null);
}));

(weavejester.dependency.MapDependencyGraph.cljs$lang$type = true);

(weavejester.dependency.MapDependencyGraph.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"weavejester.dependency/MapDependencyGraph",null,(1),null));
}));

(weavejester.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"weavejester.dependency/MapDependencyGraph");
}));

/**
 * Positional factory function for weavejester.dependency/MapDependencyGraph.
 */
weavejester.dependency.__GT_MapDependencyGraph = (function weavejester$dependency$__GT_MapDependencyGraph(dependencies,dependents){
return (new weavejester.dependency.MapDependencyGraph(dependencies,dependents,null,null,null));
});

/**
 * Factory function for weavejester.dependency/MapDependencyGraph, taking a map of keywords to field values.
 */
weavejester.dependency.map__GT_MapDependencyGraph = (function weavejester$dependency$map__GT_MapDependencyGraph(G__18267){
var extmap__4419__auto__ = (function (){var G__18276 = cljs.core.dissoc.call(null,G__18267,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837));
if(cljs.core.record_QMARK_.call(null,G__18267)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__18276);
} else {
return G__18276;
}
})();
return (new weavejester.dependency.MapDependencyGraph(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(G__18267),new cljs.core.Keyword(null,"dependents","dependents",136812837).cljs$core$IFn$_invoke$arity$1(G__18267),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

/**
 * Returns a new, empty, dependency graph.
 */
weavejester.dependency.graph = (function weavejester$dependency$graph(){
return weavejester.dependency.__GT_MapDependencyGraph.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * True if x is directly or transitively dependent on y.
 */
weavejester.dependency.depends_QMARK_ = (function weavejester$dependency$depends_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_.call(null,weavejester.dependency.transitive_dependencies.call(null,graph,x),y);
});
/**
 * True if y is a dependent of x.
 */
weavejester.dependency.dependent_QMARK_ = (function weavejester$dependency$dependent_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_.call(null,weavejester.dependency.transitive_dependents.call(null,graph,x),y);
});
/**
 * Returns a topologically-sorted list of nodes in graph. Takes an
 *   optional comparator to provide secondary sorting when the order of
 *   nodes is ambiguous.
 */
weavejester.dependency.topo_sort = (function weavejester$dependency$topo_sort(var_args){
var G__18282 = arguments.length;
switch (G__18282) {
case 1:
return weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return weavejester.dependency.topo_sort.call(null,cljs.core.constantly.call(null,(0)),graph);
}));

(weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (comp,graph){
var sorted = cljs.core.List.EMPTY;
var g = graph;
var todo = cljs.core.set.call(null,cljs.core.filter.call(null,((function (sorted,g){
return (function (p1__18278_SHARP_){
return cljs.core.empty_QMARK_.call(null,weavejester.dependency.immediate_dependents.call(null,graph,p1__18278_SHARP_));
});})(sorted,g))
,weavejester.dependency.nodes.call(null,graph)));
while(true){
if(cljs.core.empty_QMARK_.call(null,todo)){
return sorted;
} else {
var vec__18289 = cljs.core.sort.call(null,((function (sorted,g,todo){
return (function (p1__18280_SHARP_,p2__18279_SHARP_){
return comp.call(null,p2__18279_SHARP_,p1__18280_SHARP_);
});})(sorted,g,todo))
,todo);
var seq__18290 = cljs.core.seq.call(null,vec__18289);
var first__18291 = cljs.core.first.call(null,seq__18290);
var seq__18290__$1 = cljs.core.next.call(null,seq__18290);
var node = first__18291;
var more = seq__18290__$1;
var deps = weavejester.dependency.immediate_dependencies.call(null,g,node);
var vec__18292 = (function (){var deps__$1 = deps;
var g__$1 = g;
var add = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,deps__$1)){
var d = cljs.core.first.call(null,deps__$1);
var g_SINGLEQUOTE_ = weavejester.dependency.remove_edge.call(null,g__$1,node,d);
if(cljs.core.empty_QMARK_.call(null,weavejester.dependency.immediate_dependents.call(null,g_SINGLEQUOTE_,d))){
var G__18296 = cljs.core.rest.call(null,deps__$1);
var G__18297 = g_SINGLEQUOTE_;
var G__18298 = cljs.core.conj.call(null,add,d);
deps__$1 = G__18296;
g__$1 = G__18297;
add = G__18298;
continue;
} else {
var G__18299 = cljs.core.rest.call(null,deps__$1);
var G__18300 = g_SINGLEQUOTE_;
var G__18301 = add;
deps__$1 = G__18299;
g__$1 = G__18300;
add = G__18301;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();
var add = cljs.core.nth.call(null,vec__18292,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__18292,(1),null);
var G__18302 = cljs.core.cons.call(null,node,sorted);
var G__18303 = weavejester.dependency.remove_node.call(null,g_SINGLEQUOTE_,node);
var G__18304 = clojure.set.union.call(null,cljs.core.set.call(null,more),cljs.core.set.call(null,add));
sorted = G__18302;
g = G__18303;
todo = G__18304;
continue;
}
break;
}
}));

(weavejester.dependency.topo_sort.cljs$lang$maxFixedArity = 2);

weavejester.dependency.max_number = Number.MAX_VALUE;
/**
 * Returns a comparator fn which produces a topological sort based on
 *   the dependencies in graph. Nodes not present in the graph will sort
 *   after nodes in the graph. Takes an optional secondary comparator to
 *   provide secondary sorting when the order of nodes is ambiguous.
 */
weavejester.dependency.topo_comparator = (function weavejester$dependency$topo_comparator(var_args){
var G__18306 = arguments.length;
switch (G__18306) {
case 1:
return weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return weavejester.dependency.topo_comparator.call(null,cljs.core.constantly.call(null,(0)),graph);
}));

(weavejester.dependency.topo_comparator.cljs$core$IFn$_invoke$arity$2 = (function (comp,graph){
var pos = cljs.core.zipmap.call(null,weavejester.dependency.topo_sort.call(null,comp,graph),cljs.core.range.call(null));
return (function (a,b){
var pos_a = cljs.core.get.call(null,pos,a);
var pos_b = cljs.core.get.call(null,pos,b);
if((((pos_a == null)) && ((pos_b == null)))){
return comp.call(null,a,b);
} else {
return cljs.core.compare.call(null,(function (){var or__4126__auto__ = pos_a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return weavejester.dependency.max_number;
}
})(),(function (){var or__4126__auto__ = pos_b;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return weavejester.dependency.max_number;
}
})());
}
});
}));

(weavejester.dependency.topo_comparator.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=dependency.js.map
