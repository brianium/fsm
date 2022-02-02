// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('fsm.dev');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('integrant.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('goog.dom');
goog.require('fsm.core');
/**
 * Simple helper for creating a dispatch function in components
 */
fsm.dev.dispatcher = (function fsm$dev$dispatcher(counter){
return (function (event,p__16024){
var vec__16025 = p__16024;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16025,(0),null);
var fn_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16025,(1),null);
return fsm.core.transition.cljs$core$IFn$_invoke$arity$3(counter,event,(function (sm){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(fsm.core.current_state(sm),k,fn_1);
}));
});
});
fsm.dev.application = (function fsm$dev$application(counter){
var state = fsm.core.current_state(counter);
var map__16028 = state;
var map__16028__$1 = (((((!((map__16028 == null))))?(((((map__16028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16028):map__16028);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16028__$1,cljs.core.cst$kw$count);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16028__$1,cljs.core.cst$kw$disabled_QMARK_);
var dispatch = fsm.dev.dispatcher(counter);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$application,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app__column,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$counter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$counter__value,count], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$counter__buttons,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"disable",cljs.core.cst$kw$on_DASH_click,(function (){
var G__16030 = (cljs.core.truth_(disabled_QMARK_)?cljs.core.cst$kw$fsm$dev_SLASH_enable:cljs.core.cst$kw$fsm$dev_SLASH_disable);
var G__16031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$disabled_QMARK_,cljs.core.not], null);
return (dispatch.cljs$core$IFn$_invoke$arity$2 ? dispatch.cljs$core$IFn$_invoke$arity$2(G__16030,G__16031) : dispatch.call(null,G__16030,G__16031));
})], null),(cljs.core.truth_(cljs.core.cst$kw$disabled_QMARK_.cljs$core$IFn$_invoke$arity$1(state))?"enable":"disable")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK_,cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (){
var G__16032 = cljs.core.cst$kw$fsm$dev_SLASH_inc;
var G__16033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$count,cljs.core.inc], null);
return (dispatch.cljs$core$IFn$_invoke$arity$2 ? dispatch.cljs$core$IFn$_invoke$arity$2(G__16032,G__16033) : dispatch.call(null,G__16032,G__16033));
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK_,cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (){
var G__16034 = cljs.core.cst$kw$fsm$dev_SLASH_dec;
var G__16035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$count,cljs.core.dec], null);
return (dispatch.cljs$core$IFn$_invoke$arity$2 ? dispatch.cljs$core$IFn$_invoke$arity$2(G__16034,G__16035) : dispatch.call(null,G__16034,G__16035));
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK_,cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (){
var G__16036 = cljs.core.cst$kw$fsm$dev_SLASH_reset;
var G__16037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$count,cljs.core.constantly((0))], null);
return (dispatch.cljs$core$IFn$_invoke$arity$2 ? dispatch.cljs$core$IFn$_invoke$arity$2(G__16036,G__16037) : dispatch.call(null,G__16036,G__16037));
})], null),"reset"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_audit_DASH_log], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app__column$fsm_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16038_16042 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16039_16043 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16040_16044 = true;
var _STAR_print_fn_STAR__temp_val__16041_16045 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16040_16044);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16041_16045);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(state);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16039_16043);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16038_16042);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null)], null)], null)], null)], null);
});
fsm.dev.config = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm$dev_SLASH_counter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$states,new cljs.core.PersistentArrayMap(null, 3, [null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fsm$dev_SLASH_init,cljs.core.cst$kw$fsm$dev_SLASH_counting], null),cljs.core.cst$kw$fsm$dev_SLASH_counting,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fsm$dev_SLASH_inc,cljs.core.cst$kw$fsm$dev_SLASH_counting,cljs.core.cst$kw$fsm$dev_SLASH_dec,cljs.core.cst$kw$fsm$dev_SLASH_counting,cljs.core.cst$kw$fsm$dev_SLASH_reset,cljs.core.cst$kw$fsm$dev_SLASH_counting,cljs.core.cst$kw$fsm$dev_SLASH_disable,cljs.core.cst$kw$fsm$dev_SLASH_disabled], null),cljs.core.cst$kw$fsm$dev_SLASH_disabled,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fsm$dev_SLASH_enable,cljs.core.cst$kw$fsm$dev_SLASH_counting], null)], null),cljs.core.cst$kw$initial_DASH_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$count,(0),cljs.core.cst$kw$disabled_QMARK_,false], null)], null),cljs.core.cst$kw$fsm$dev_SLASH_ui,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$counter,integrant.core.ref(cljs.core.cst$kw$fsm$dev_SLASH_counter)], null)], null);
/**
 * A function that is used to write to a fixed #audit-log element
 */
fsm.dev.write_log = (function fsm$dev$write_log(text){
var log = goog.dom.getElement("audit-log");
var p = goog.dom.createElement("p");
var code = goog.dom.createElement("code");
var entry = goog.dom.createTextNode(text);
if(cljs.core.truth_(log)){
goog.dom.appendChild(code,entry);

goog.dom.appendChild(p,code);

return goog.dom.insertChildAt(log,p,(0));
} else {
return null;
}
});
/**
 * Let's write to a log for every state change
 */
fsm.dev.on_change = (function fsm$dev$on_change(_,___$1,state){
return fsm.dev.write_log((function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16046_16050 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16047_16051 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16048_16052 = true;
var _STAR_print_fn_STAR__temp_val__16049_16053 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16048_16052);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16049_16053);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(state);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16047_16051);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16046_16050);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
});
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fsm$dev_SLASH_counter,(function (_,p__16054){
var map__16055 = p__16054;
var map__16055__$1 = (((((!((map__16055 == null))))?(((((map__16055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16055):map__16055);
var states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,cljs.core.cst$kw$states);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,cljs.core.cst$kw$initial_DASH_state);
return fsm.core.transition.cljs$core$IFn$_invoke$arity$3(fsm.core.add_effect.cljs$core$IFn$_invoke$arity$5(fsm.core.add_effect.cljs$core$IFn$_invoke$arity$5(fsm.core.add_effect.cljs$core$IFn$_invoke$arity$3(fsm.core.create_state_machine.cljs$core$IFn$_invoke$arity$3(states,initial_state,reagent.core.atom),cljs.core.cst$kw$fsm$dev_SLASH_log,fsm.dev.on_change),cljs.core.cst$kw$fsm$dev_SLASH_disabled,cljs.core.cst$kw$fsm$dev_SLASH_counting,cljs.core.cst$kw$fsm$dev_SLASH_disabled,(function (){
return fsm.dev.write_log("Disabled");
})),cljs.core.cst$kw$fsm$dev_SLASH_enabled,cljs.core.cst$kw$fsm$dev_SLASH_disabled,cljs.core.cst$kw$fsm$dev_SLASH_counting,(function (){
return fsm.dev.write_log("Enabled");
})),cljs.core.cst$kw$fsm$dev_SLASH_init,fsm.core.current_state);
}));
integrant.core.resume_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fsm$dev_SLASH_counter,(function (_,___$1,___$2,prev){
return prev;
}));
integrant.core.init_key.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fsm$dev_SLASH_ui,(function (_,p__16057){
var map__16058 = p__16057;
var map__16058__$1 = (((((!((map__16058 == null))))?(((((map__16058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16058):map__16058);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16058__$1,cljs.core.cst$kw$counter);
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsm.dev.application,counter], null),document.getElementById("application"));
}));
if((typeof fsm !== 'undefined') && (typeof fsm.dev !== 'undefined') && (typeof fsm.dev.system !== 'undefined')){
} else {
fsm.dev.system = integrant.core.init.cljs$core$IFn$_invoke$arity$1(fsm.dev.config);
}
fsm.dev.restart = (function fsm$dev$restart(){
integrant.core.suspend_BANG_.cljs$core$IFn$_invoke$arity$1(fsm.dev.system);

return integrant.core.resume.cljs$core$IFn$_invoke$arity$2(fsm.dev.config,fsm.dev.system);
});
fsm.dev.after_reload = (function fsm$dev$after_reload(){
return fsm.dev.restart();
});
