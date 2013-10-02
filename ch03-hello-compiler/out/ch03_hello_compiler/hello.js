goog.provide('ch03_hello_compiler.hello');
goog.require('cljs.core');
ch03_hello_compiler.hello.main = (function main(){
return document.write("<p>Hello, ClojureScript compiler!</p>");
});
goog.exportSymbol('ch03_hello_compiler.hello.main', ch03_hello_compiler.hello.main);
