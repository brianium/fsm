// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__14416 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14417 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14417);

try{var G__14418 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__14419 = container;
var G__14420 = (function (){
var _STAR_always_update_STAR__orig_val__14421 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__14422 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__14422);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14421);
}});
return reagent.dom.global$module$react_dom.render(G__14418,G__14419,G__14420);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__14416);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__14424 = arguments.length;
switch (G__14424) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__14425 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__14429_14445 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__14430_14446 = null;
var count__14431_14447 = (0);
var i__14432_14448 = (0);
while(true){
if((i__14432_14448 < count__14431_14447)){
var vec__14439_14449 = chunk__14430_14446.cljs$core$IIndexed$_nth$arity$2(null,i__14432_14448);
var container_14450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439_14449,(0),null);
var comp_14451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439_14449,(1),null);
reagent.dom.re_render_component(comp_14451,container_14450);


var G__14452 = seq__14429_14445;
var G__14453 = chunk__14430_14446;
var G__14454 = count__14431_14447;
var G__14455 = (i__14432_14448 + (1));
seq__14429_14445 = G__14452;
chunk__14430_14446 = G__14453;
count__14431_14447 = G__14454;
i__14432_14448 = G__14455;
continue;
} else {
var temp__5753__auto___14456 = cljs.core.seq(seq__14429_14445);
if(temp__5753__auto___14456){
var seq__14429_14457__$1 = temp__5753__auto___14456;
if(cljs.core.chunked_seq_QMARK_(seq__14429_14457__$1)){
var c__4556__auto___14458 = cljs.core.chunk_first(seq__14429_14457__$1);
var G__14459 = cljs.core.chunk_rest(seq__14429_14457__$1);
var G__14460 = c__4556__auto___14458;
var G__14461 = cljs.core.count(c__4556__auto___14458);
var G__14462 = (0);
seq__14429_14445 = G__14459;
chunk__14430_14446 = G__14460;
count__14431_14447 = G__14461;
i__14432_14448 = G__14462;
continue;
} else {
var vec__14442_14463 = cljs.core.first(seq__14429_14457__$1);
var container_14464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14442_14463,(0),null);
var comp_14465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14442_14463,(1),null);
reagent.dom.re_render_component(comp_14465,container_14464);


var G__14466 = cljs.core.next(seq__14429_14457__$1);
var G__14467 = null;
var G__14468 = (0);
var G__14469 = (0);
seq__14429_14445 = G__14466;
chunk__14430_14446 = G__14467;
count__14431_14447 = G__14468;
i__14432_14448 = G__14469;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
