(ns ch03-hello-compiler.hello)

(defn ^:export main []
  (.write js/document "<p>Hello, ClojureScript compiler!</p>"))