// Compiled by ClojureScript 0.0-2496
goog.provide('myproject.core');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('reagent.core');
myproject.core.child = (function child(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hi, I am ",name], null);
});
myproject.core.childcaller = (function childcaller(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [myproject.core.child,"Foo Bar"], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [myproject.core.childcaller], null),document.getElementById("app"));
