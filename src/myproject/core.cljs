(ns myproject.core
    (:require [reagent.core :as reagent :refer [atom]]
              [goog.events :as events]
              [goog.history.EventType :as EventType])
    (:import goog.History))

(defn child-component [name]
  [:p "Hi, I am " name])

(defn parent-component []
  [child-component "Brent"])

(defn ^:export main [container-id]
  (reagent/render-component [parent-component]
                             (.getElementById js/document container-id)))
