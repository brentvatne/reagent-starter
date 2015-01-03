(defproject base-reagent-app "0.1.0-SNAPSHOT"
  :description "xxxx frontend"
  :url "http://github.com/xxxx/yyyy"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [com.facebook/react "0.11.2"]
                 [reagent "0.4.3"]
                 [reagent-utils "0.1.0"]
                 [jayq "2.5.2"]
                 [org.clojure/clojurescript "0.0-2511" :scope "provided"]
                 [leiningen "2.5.0"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :cljsbuild {:builds
    {:app    {:source-paths ["src"]
              :compiler {:output-to     "dist/main-none.js"
                         :output-dir    "dist/out-none"
                         :externs       ["react/externs/react.js"]
                         :optimizations :none
                         :pretty-print  true}}
     :simple {:source-paths ["src"]
              :compiler {:output-to     "dist/main-simple.js"
                         :output-dir    "dist/out-simple"
                         :externs       ["react/externs/react.js"]
                         :optimizations :simple
                         :pretty-print  true}}}})
