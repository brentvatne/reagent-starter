// Compiled by ClojureScript 0.0-2496
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__5558 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__5558,(0),null);
var parts = cljs.core.nthnext.call(null,vec__5558,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__5560__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__3636__auto___5561 = self__.p;
if(cljs.core.truth_(or__3636__auto___5561)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__5560 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5560__delegate.call(this,self__,a);};
G__5560.cljs$lang$maxFixedArity = 1;
G__5560.cljs$lang$applyTo = (function (arglist__5562){
var self__ = cljs.core.first(arglist__5562);
var a = cljs.core.rest(arglist__5562);
return G__5560__delegate(self__,a);
});
G__5560.cljs$core$IFn$_invoke$arity$variadic = G__5560__delegate;
return G__5560;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args5559){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args5559)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__5563__delegate = function (a){
var _ = this;
var or__3636__auto___5564 = self__.p;
if(cljs.core.truth_(or__3636__auto___5564)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__5563 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5563__delegate.call(this,a);};
G__5563.cljs$lang$maxFixedArity = 0;
G__5563.cljs$lang$applyTo = (function (arglist__5565){
var a = cljs.core.seq(arglist__5565);
return G__5563__delegate(a);
});
G__5563.cljs$core$IFn$_invoke$arity$variadic = G__5563__delegate;
return G__5563;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.clj_ifn_QMARK_ = (function clj_ifn_QMARK_(x){
var or__3636__auto__ = cljs.core.ifn_QMARK_.call(null,x);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var G__5569 = x;
if(G__5569){
var bit__4317__auto__ = (G__5569.cljs$lang$protocol_mask$partition1$ & (256));
if((bit__4317__auto__) || (G__5569.cljs$core$IMultiFn$)){
return true;
} else {
if((!G__5569.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__5569);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMultiFn,G__5569);
}
}
});
reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util.doc_node_type = (9);
reagent.impl.util.react_id_name = "data-reactid";
reagent.impl.util.get_react_node = (function get_react_node(cont){
if((cont == null)){
return null;
} else {
if((reagent.impl.util.doc_node_type === (cont["nodeType"]))){
return (cont["documentElement"]);
} else {
return (cont["firstChild"]);
}
}
});
reagent.impl.util.get_root_id = (function get_root_id(cont){
var G__5571 = reagent.impl.util.get_react_node.call(null,cont);
var G__5571__$1 = (((G__5571 == null))?null:(G__5571["getAttribute"])(reagent.impl.util.react_id_name));
return G__5571__$1;
});
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
try{return (React["renderComponent"])(comp.call(null),container);
}catch (e5574){if((e5574 instanceof Object)){
var e = e5574;
try{(React["unmountComponentAtNode"])(container);
}catch (e5575){if((e5575 instanceof Object)){
var e_5576__$1 = e5575;
if(typeof console !== 'undefined'){
console.log(e_5576__$1);
} else {
}
} else {
throw e5575;

}
}
var temp__4126__auto___5577 = reagent.impl.util.get_react_node.call(null,container);
if(cljs.core.truth_(temp__4126__auto___5577)){
var n_5578 = temp__4126__auto___5577;
(n_5578["removeAttribute"])(reagent.impl.util.react_id_name);

(n_5578["innerHTML"] = "");
} else {
}

throw e;
} else {
throw e5574;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
return (React["renderComponent"])(comp.call(null),container,(function (){
var id_5579 = reagent.impl.util.get_root_id.call(null,container);
if((id_5579 == null)){
} else {
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,id_5579,((function (id_5579){
return (function (){
return reagent.impl.util.re_render_component.call(null,comp,container);
});})(id_5579))
);
}

if((callback == null)){
return null;
} else {
return callback.call(null);
}
}));
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
var id_5580 = reagent.impl.util.get_root_id.call(null,container);
if((id_5580 == null)){
} else {
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,id_5580);
}

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var _STAR_always_update_STAR_5586_5591 = reagent.impl.util._STAR_always_update_STAR_;
try{reagent.impl.util._STAR_always_update_STAR_ = true;

var seq__5587_5592 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__5588_5593 = null;
var count__5589_5594 = (0);
var i__5590_5595 = (0);
while(true){
if((i__5590_5595 < count__5589_5594)){
var f_5596 = cljs.core._nth.call(null,chunk__5588_5593,i__5590_5595);
f_5596.call(null);

var G__5597 = seq__5587_5592;
var G__5598 = chunk__5588_5593;
var G__5599 = count__5589_5594;
var G__5600 = (i__5590_5595 + (1));
seq__5587_5592 = G__5597;
chunk__5588_5593 = G__5598;
count__5589_5594 = G__5599;
i__5590_5595 = G__5600;
continue;
} else {
var temp__4126__auto___5601 = cljs.core.seq.call(null,seq__5587_5592);
if(temp__4126__auto___5601){
var seq__5587_5602__$1 = temp__4126__auto___5601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5587_5602__$1)){
var c__4423__auto___5603 = cljs.core.chunk_first.call(null,seq__5587_5602__$1);
var G__5604 = cljs.core.chunk_rest.call(null,seq__5587_5602__$1);
var G__5605 = c__4423__auto___5603;
var G__5606 = cljs.core.count.call(null,c__4423__auto___5603);
var G__5607 = (0);
seq__5587_5592 = G__5604;
chunk__5588_5593 = G__5605;
count__5589_5594 = G__5606;
i__5590_5595 = G__5607;
continue;
} else {
var f_5608 = cljs.core.first.call(null,seq__5587_5602__$1);
f_5608.call(null);

var G__5609 = cljs.core.next.call(null,seq__5587_5602__$1);
var G__5610 = null;
var G__5611 = (0);
var G__5612 = (0);
seq__5587_5592 = G__5609;
chunk__5588_5593 = G__5610;
count__5589_5594 = G__5611;
i__5590_5595 = G__5612;
continue;
}
} else {
}
}
break;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_5586_5591;
}
return "Updated";
});
reagent.impl.util._not_found = (function (){var obj5614 = {};
return obj5614;
})();
reagent.impl.util.identical_ish_QMARK_ = (function identical_ish_QMARK_(x,y){
return (cljs.core.keyword_identical_QMARK_.call(null,x,y)) || ((((x instanceof cljs.core.Symbol)) || ((cljs.core.type.call(null,x) === reagent.impl.util.partial_ifn))) && (cljs.core._EQ_.call(null,x,y)));
});
reagent.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){
var or__3636__auto__ = (x === y);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var and__3624__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__3624__auto__){
var and__3624__auto____$1 = cljs.core.map_QMARK_.call(null,y);
if(and__3624__auto____$1){
var and__3624__auto____$2 = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));
if(and__3624__auto____$2){
return cljs.core.reduce_kv.call(null,((function (and__3624__auto____$2,and__3624__auto____$1,and__3624__auto__,or__3636__auto__){
return (function (res,k,v){
var yv = cljs.core.get.call(null,y,k,reagent.impl.util._not_found);
if(cljs.core.truth_((function (){var or__3636__auto____$1 = (v === yv);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
var or__3636__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,yv);
if(or__3636__auto____$2){
return or__3636__auto____$2;
} else {
var and__3624__auto____$3 = cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",-496642736));
if(and__3624__auto____$3){
return shallow_equal_maps.call(null,v,yv);
} else {
return and__3624__auto____$3;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__3624__auto____$2,and__3624__auto____$1,and__3624__auto__,or__3636__auto__))
,true,x);
} else {
return and__3624__auto____$2;
}
} else {
return and__3624__auto____$1;
}
} else {
return and__3624__auto__;
}
}
});
reagent.impl.util.equal_args = (function equal_args(v1,v2){
if(cljs.core.vector_QMARK_.call(null,v1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v1","v1",-2141311508,null))))].join('')));
}

if(cljs.core.vector_QMARK_.call(null,v2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v2","v2",1875554983,null))))].join('')));
}

var or__3636__auto__ = (v1 === v2);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var and__3624__auto__ = (cljs.core.count.call(null,v1) === cljs.core.count.call(null,v2));
if(and__3624__auto__){
return cljs.core.reduce_kv.call(null,((function (and__3624__auto__,or__3636__auto__){
return (function (res,k,v){
var v_SINGLEQUOTE_ = cljs.core.nth.call(null,v2,k);
if(cljs.core.truth_((function (){var or__3636__auto____$1 = (v === v_SINGLEQUOTE_);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
var or__3636__auto____$2 = reagent.impl.util.identical_ish_QMARK_.call(null,v,v_SINGLEQUOTE_);
if(or__3636__auto____$2){
return or__3636__auto____$2;
} else {
var and__3624__auto____$1 = cljs.core.map_QMARK_.call(null,v);
if(and__3624__auto____$1){
return reagent.impl.util.shallow_equal_maps.call(null,v,v_SINGLEQUOTE_);
} else {
return and__3624__auto____$1;
}
}
}
})())){
return res;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__3624__auto__,or__3636__auto__))
,true,v1);
} else {
return and__3624__auto__;
}
}
});
