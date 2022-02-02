// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__18310__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18311__i = 0, G__18311__a = new Array(arguments.length -  0);
while (G__18311__i < G__18311__a.length) {G__18311__a[G__18311__i] = arguments[G__18311__i + 0]; ++G__18311__i;}
  args = new cljs.core.IndexedSeq(G__18311__a,0,null);
} 
return G__18310__delegate.call(this,args);};
G__18310.cljs$lang$maxFixedArity = 0;
G__18310.cljs$lang$applyTo = (function (arglist__18312){
var args = cljs.core.seq(arglist__18312);
return G__18310__delegate(args);
});
G__18310.cljs$core$IFn$_invoke$arity$variadic = G__18310__delegate;
return G__18310;
})()
);

(o.error = (function() { 
var G__18313__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18314__i = 0, G__18314__a = new Array(arguments.length -  0);
while (G__18314__i < G__18314__a.length) {G__18314__a[G__18314__i] = arguments[G__18314__i + 0]; ++G__18314__i;}
  args = new cljs.core.IndexedSeq(G__18314__a,0,null);
} 
return G__18313__delegate.call(this,args);};
G__18313.cljs$lang$maxFixedArity = 0;
G__18313.cljs$lang$applyTo = (function (arglist__18315){
var args = cljs.core.seq(arglist__18315);
return G__18313__delegate(args);
});
G__18313.cljs$core$IFn$_invoke$arity$variadic = G__18313__delegate;
return G__18313;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
