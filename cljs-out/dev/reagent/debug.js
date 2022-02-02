// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__13801__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13802__i = 0, G__13802__a = new Array(arguments.length -  0);
while (G__13802__i < G__13802__a.length) {G__13802__a[G__13802__i] = arguments[G__13802__i + 0]; ++G__13802__i;}
  args = new cljs.core.IndexedSeq(G__13802__a,0,null);
} 
return G__13801__delegate.call(this,args);};
G__13801.cljs$lang$maxFixedArity = 0;
G__13801.cljs$lang$applyTo = (function (arglist__13803){
var args = cljs.core.seq(arglist__13803);
return G__13801__delegate(args);
});
G__13801.cljs$core$IFn$_invoke$arity$variadic = G__13801__delegate;
return G__13801;
})()
);

(o.error = (function() { 
var G__13804__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13805__i = 0, G__13805__a = new Array(arguments.length -  0);
while (G__13805__i < G__13805__a.length) {G__13805__a[G__13805__i] = arguments[G__13805__i + 0]; ++G__13805__i;}
  args = new cljs.core.IndexedSeq(G__13805__a,0,null);
} 
return G__13804__delegate.call(this,args);};
G__13804.cljs$lang$maxFixedArity = 0;
G__13804.cljs$lang$applyTo = (function (arglist__13806){
var args = cljs.core.seq(arglist__13806);
return G__13804__delegate(args);
});
G__13804.cljs$core$IFn$_invoke$arity$variadic = G__13804__delegate;
return G__13804;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
