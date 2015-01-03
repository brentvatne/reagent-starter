(ns myproject.core.test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:use [jayq.core :only [$ html]])
  (:require [reagent.core :as r :refer [atom]]
            [cemerick.cljs.test :as t]
            [myproject.core :as subject]))

(enable-console-print!)

(defn render-string [component]
  (r/render-component-to-string component))

(defn render [component]
  ($ (render-string component)))

(deftest child-component
  (is (= (.text (render [subject/child-component "Some name"]))
         "Hi, I am Some name")))

(deftest parent-component
  (is (= (.text (render [subject/parent-component]))
         "Hi, I am Brent")))

(run-tests)
