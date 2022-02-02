// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('fsm.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
fsm.protocols.StateMachine = function(){};

var fsm$protocols$StateMachine$_add_effect$dyn_14365 = (function (_,key,fn_3){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (fsm.protocols._add_effect[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,key,fn_3) : m__4429__auto__.call(null,_,key,fn_3));
} else {
var m__4426__auto__ = (fsm.protocols._add_effect["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,key,fn_3) : m__4426__auto__.call(null,_,key,fn_3));
} else {
throw cljs.core.missing_protocol("StateMachine.-add-effect",_);
}
}
});
/**
 * Add a side effect that is invoked when a change to state happens. Is called with the state machine, previous, and next state
 */
fsm.protocols._add_effect = (function fsm$protocols$_add_effect(_,key,fn_3){
if((((!((_ == null)))) && ((!((_.fsm$protocols$StateMachine$_add_effect$arity$3 == null)))))){
return _.fsm$protocols$StateMachine$_add_effect$arity$3(_,key,fn_3);
} else {
return fsm$protocols$StateMachine$_add_effect$dyn_14365(_,key,fn_3);
}
});

var fsm$protocols$StateMachine$_transition$dyn_14366 = (function (_,event,payload){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (fsm.protocols._transition[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,event,payload) : m__4429__auto__.call(null,_,event,payload));
} else {
var m__4426__auto__ = (fsm.protocols._transition["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,event,payload) : m__4426__auto__.call(null,_,event,payload));
} else {
throw cljs.core.missing_protocol("StateMachine.-transition",_);
}
}
});
/**
 * Transition the state machine to a new state
 */
fsm.protocols._transition = (function fsm$protocols$_transition(_,event,payload){
if((((!((_ == null)))) && ((!((_.fsm$protocols$StateMachine$_transition$arity$3 == null)))))){
return _.fsm$protocols$StateMachine$_transition$arity$3(_,event,payload);
} else {
return fsm$protocols$StateMachine$_transition$dyn_14366(_,event,payload);
}
});

var fsm$protocols$StateMachine$_current_state$dyn_14367 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (fsm.protocols._current_state[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (fsm.protocols._current_state["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("StateMachine.-current-state",_);
}
}
});
/**
 * Return the current state of the state machine
 */
fsm.protocols._current_state = (function fsm$protocols$_current_state(_){
if((((!((_ == null)))) && ((!((_.fsm$protocols$StateMachine$_current_state$arity$1 == null)))))){
return _.fsm$protocols$StateMachine$_current_state$arity$1(_);
} else {
return fsm$protocols$StateMachine$_current_state$dyn_14367(_);
}
});

