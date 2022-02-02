// Compiled by ClojureScript 1.10.773 {}
goog.provide('fsm.dev');
goog.require('cljs.core');
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
return (function (event,p__29784){
var vec__29785 = p__29784;
var k = cljs.core.nth.call(null,vec__29785,(0),null);
var fn_1 = cljs.core.nth.call(null,vec__29785,(1),null);
return fsm.core.transition.call(null,counter,event,(function (sm){
return cljs.core.update.call(null,fsm.core.current_state.call(null,sm),k,fn_1);
}));
});
});
fsm.dev.application = (function fsm$dev$application(counter){
var state = fsm.core.current_state.call(null,counter);
var map__29788 = state;
var map__29788__$1 = (((((!((map__29788 == null))))?(((((map__29788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29788):map__29788);
var count = cljs.core.get.call(null,map__29788__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var disabled_QMARK_ = cljs.core.get.call(null,map__29788__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var dispatch = fsm.dev.dispatcher.call(null,counter);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.application","div.application",841854112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app__column","div.app__column",-836240979),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.counter","div.counter",70055257),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.counter__value","h1.counter__value",-1498571516),count], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.counter__buttons","div.counter__buttons",-1664080938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"disable",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,(cljs.core.truth_(disabled_QMARK_)?new cljs.core.Keyword("fsm.dev","enable","fsm.dev/enable",1953488829):new cljs.core.Keyword("fsm.dev","disable","fsm.dev/disable",1215329061)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not], null));
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(state))?"enable":"disable")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword("fsm.dev","inc","fsm.dev/inc",-813785381),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc], null));
})], null),"+"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword("fsm.dev","dec","fsm.dev/dec",-1702981951),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.dec], null));
})], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dispatch.call(null,new cljs.core.Keyword("fsm.dev","reset","fsm.dev/reset",-1169159683),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.constantly.call(null,(0))], null));
})], null),"reset"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#audit-log","div#audit-log",832864911)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app__column.fsm_state","div.app__column.fsm_state",1448695960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29790_29794 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29791_29795 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29792_29796 = true;
var _STAR_print_fn_STAR__temp_val__29793_29797 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29792_29796);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29793_29797);

try{cljs.pprint.pprint.call(null,state);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29791_29795);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29790_29794);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null)], null)], null)], null)], null);
});
fsm.dev.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fsm.dev","counter","fsm.dev/counter",1373276048),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 3, [null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fsm.dev","init","fsm.dev/init",1915080253),new cljs.core.Keyword("fsm.dev","counting","fsm.dev/counting",1583887785)], null),new cljs.core.Keyword("fsm.dev","counting","fsm.dev/counting",1583887785),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fsm.dev","inc","fsm.dev/inc",-813785381),new cljs.core.Keyword("fsm.dev","counting","fsm.dev/counting",1583887785),new cljs.core.Keyword("fsm.dev","dec","fsm.dev/dec",-1702981951),new cljs.core.Keyword("fsm.dev","counting","fsm.dev/counting",1583887785),new cljs.core.Keyword("fsm.dev","reset","fsm.dev/reset",-1169159683),new cljs.core.Keyword("fsm.dev","counting","fsm.dev/counting",1583887785),new cljs.core.Keyword("fsm.dev","disable","fsm.dev/disable",1215329061),new cljs.core.Keyword("fsm.dev","disabled","fsm.dev/disabled",-1025364227)], null),new cljs.core.Keyword("fsm.dev","disabled","fsm.dev/disabled",-1025364227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fsm.dev","enable","fsm.dev/enable",1953488829),new cljs.core.Keyword("fsm.dev","counting","fsm.dev/counting",1583887785)], null)], null),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(0),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false], null)], null),new cljs.core.Keyword("fsm.dev","ui","fsm.dev/ui",36897294),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter","counter",804008177),integrant.core.ref.call(null,new cljs.core.Keyword("fsm.dev","counter","fsm.dev/counter",1373276048))], null)], null);
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
return fsm.dev.write_log.call(null,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29798_29802 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29799_29803 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29800_29804 = true;
var _STAR_print_fn_STAR__temp_val__29801_29805 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29800_29804);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29801_29805);

try{cljs.pprint.pprint.call(null,state);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29799_29803);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29798_29802);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
});
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword("fsm.dev","counter","fsm.dev/counter",1373276048),(function (_,p__29806){
var map__29807 = p__29806;
var map__29807__$1 = (((((!((map__29807 == null))))?(((((map__29807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29807):map__29807);
var states = cljs.core.get.call(null,map__29807__$1,new cljs.core.Keyword(null,"states","states",1389013542));
var initial_state = cljs.core.get.call(null,map__29807__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
return fsm.core.transition.call(null,fsm.core.add_effect.call(null,fsm.core.add_effect.call(null,fsm.core.add_effect.call(null,fsm.core.create_state_machine.call(null,states,initial_state,reagent.core.atom),new cljs.core.Keyword("fsm.dev","log","fsm.dev/log",51839253),fsm.dev.on_change),new cljs.core.Keyword("fsm.dev","disabled","fsm.dev/disabled",-1025364227),new cljs.core.Keyword("fsm.dev","counting","fsm.dev/counting",1583887785),new cljs.core.Keyword("fsm.dev","disabled","fsm.dev/disabled",-1025364227),(function (){
return fsm.dev.write_log.call(null,"Disabled");
})),new cljs.core.Keyword("fsm.dev","enabled","fsm.dev/enabled",1838729331),new cljs.core.Keyword("fsm.dev","disabled","fsm.dev/disabled",-1025364227),new cljs.core.Keyword("fsm.dev","counting","fsm.dev/counting",1583887785),(function (){
return fsm.dev.write_log.call(null,"Enabled");
})),new cljs.core.Keyword("fsm.dev","init","fsm.dev/init",1915080253),fsm.core.current_state);
}));
cljs.core._add_method.call(null,integrant.core.resume_key,new cljs.core.Keyword("fsm.dev","counter","fsm.dev/counter",1373276048),(function (_,___$1,___$2,prev){
return prev;
}));
cljs.core._add_method.call(null,integrant.core.init_key,new cljs.core.Keyword("fsm.dev","ui","fsm.dev/ui",36897294),(function (_,p__29809){
var map__29810 = p__29809;
var map__29810__$1 = (((((!((map__29810 == null))))?(((((map__29810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29810):map__29810);
var counter = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsm.dev.application,counter], null),document.getElementById("application"));
}));
if((typeof fsm !== 'undefined') && (typeof fsm.dev !== 'undefined') && (typeof fsm.dev.system !== 'undefined')){
} else {
fsm.dev.system = integrant.core.init.call(null,fsm.dev.config);
}
fsm.dev.restart = (function fsm$dev$restart(){
integrant.core.suspend_BANG_.call(null,fsm.dev.system);

return integrant.core.resume.call(null,fsm.dev.config,fsm.dev.system);
});
fsm.dev.after_reload = (function fsm$dev$after_reload(){
return fsm.dev.restart.call(null);
});

//# sourceMappingURL=dev.js.map
