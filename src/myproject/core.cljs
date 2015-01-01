(ns myproject.core
    (:require [reagent.core :as reagent :refer [atom]]
              [goog.events :as events]
              [goog.history.EventType :as EventType])
    (:import goog.History))

(defn child [name]
  [:p "Hi, I am " name])

(defn childcaller []
  [child "Foo Bar"])

(reagent/render-component [childcaller]
                           (.getElementById js/document "app"))
