goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__6824 = (((x == null))?null:x);
if((p[goog.typeOf(x__6824)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$lang$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6825__delegate = function (array,i,idxs){
return cljs.core.apply.cljs$lang$arity$3(aget,aget.cljs$lang$arity$2(array,i),idxs);
};
var G__6825 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6825__delegate.call(this, array, i, idxs);
};
G__6825.cljs$lang$maxFixedArity = 2;
G__6825.cljs$lang$applyTo = (function (arglist__6826){
var array = cljs.core.first(arglist__6826);
var i = cljs.core.first(cljs.core.next(arglist__6826));
var idxs = cljs.core.rest(cljs.core.next(arglist__6826));
return G__6825__delegate(array, i, idxs);
});
G__6825.cljs$lang$arity$variadic = G__6825__delegate;
return G__6825;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$lang$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.cljs$lang$arity$3((function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6911 = this$;
if(and__3822__auto____6911)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6911;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__3085__auto____6912 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6913 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6912)]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{var or__3824__auto____6914 = (cljs.core._invoke["_"]);
if(or__3824__auto____6914)
{return or__3824__auto____6914;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6915 = this$;
if(and__3822__auto____6915)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6915;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__3085__auto____6916 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6917 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6916)]);
if(or__3824__auto____6917)
{return or__3824__auto____6917;
} else
{var or__3824__auto____6918 = (cljs.core._invoke["_"]);
if(or__3824__auto____6918)
{return or__3824__auto____6918;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6919 = this$;
if(and__3822__auto____6919)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6919;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__3085__auto____6920 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6921 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6920)]);
if(or__3824__auto____6921)
{return or__3824__auto____6921;
} else
{var or__3824__auto____6922 = (cljs.core._invoke["_"]);
if(or__3824__auto____6922)
{return or__3824__auto____6922;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6923 = this$;
if(and__3822__auto____6923)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6923;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__3085__auto____6924 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6925 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6924)]);
if(or__3824__auto____6925)
{return or__3824__auto____6925;
} else
{var or__3824__auto____6926 = (cljs.core._invoke["_"]);
if(or__3824__auto____6926)
{return or__3824__auto____6926;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6927 = this$;
if(and__3822__auto____6927)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6927;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__3085__auto____6928 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6929 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6928)]);
if(or__3824__auto____6929)
{return or__3824__auto____6929;
} else
{var or__3824__auto____6930 = (cljs.core._invoke["_"]);
if(or__3824__auto____6930)
{return or__3824__auto____6930;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6931 = this$;
if(and__3822__auto____6931)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6931;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__3085__auto____6932 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6933 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6932)]);
if(or__3824__auto____6933)
{return or__3824__auto____6933;
} else
{var or__3824__auto____6934 = (cljs.core._invoke["_"]);
if(or__3824__auto____6934)
{return or__3824__auto____6934;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6935 = this$;
if(and__3822__auto____6935)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6935;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__3085__auto____6936 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6937 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6936)]);
if(or__3824__auto____6937)
{return or__3824__auto____6937;
} else
{var or__3824__auto____6938 = (cljs.core._invoke["_"]);
if(or__3824__auto____6938)
{return or__3824__auto____6938;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6939 = this$;
if(and__3822__auto____6939)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6939;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__3085__auto____6940 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6941 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6940)]);
if(or__3824__auto____6941)
{return or__3824__auto____6941;
} else
{var or__3824__auto____6942 = (cljs.core._invoke["_"]);
if(or__3824__auto____6942)
{return or__3824__auto____6942;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6943 = this$;
if(and__3822__auto____6943)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6943;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__3085__auto____6944 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6945 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6944)]);
if(or__3824__auto____6945)
{return or__3824__auto____6945;
} else
{var or__3824__auto____6946 = (cljs.core._invoke["_"]);
if(or__3824__auto____6946)
{return or__3824__auto____6946;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6947 = this$;
if(and__3822__auto____6947)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6947;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__3085__auto____6948 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6949 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6948)]);
if(or__3824__auto____6949)
{return or__3824__auto____6949;
} else
{var or__3824__auto____6950 = (cljs.core._invoke["_"]);
if(or__3824__auto____6950)
{return or__3824__auto____6950;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6951 = this$;
if(and__3822__auto____6951)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6951;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__3085__auto____6952 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6953 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6952)]);
if(or__3824__auto____6953)
{return or__3824__auto____6953;
} else
{var or__3824__auto____6954 = (cljs.core._invoke["_"]);
if(or__3824__auto____6954)
{return or__3824__auto____6954;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6955 = this$;
if(and__3822__auto____6955)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6955;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__3085__auto____6956 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6957 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6956)]);
if(or__3824__auto____6957)
{return or__3824__auto____6957;
} else
{var or__3824__auto____6958 = (cljs.core._invoke["_"]);
if(or__3824__auto____6958)
{return or__3824__auto____6958;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6959 = this$;
if(and__3822__auto____6959)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6959;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__3085__auto____6960 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6961 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6960)]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{var or__3824__auto____6962 = (cljs.core._invoke["_"]);
if(or__3824__auto____6962)
{return or__3824__auto____6962;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6963 = this$;
if(and__3822__auto____6963)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6963;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__3085__auto____6964 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6965 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6964)]);
if(or__3824__auto____6965)
{return or__3824__auto____6965;
} else
{var or__3824__auto____6966 = (cljs.core._invoke["_"]);
if(or__3824__auto____6966)
{return or__3824__auto____6966;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6967 = this$;
if(and__3822__auto____6967)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6967;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__3085__auto____6968 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6969 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6968)]);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{var or__3824__auto____6970 = (cljs.core._invoke["_"]);
if(or__3824__auto____6970)
{return or__3824__auto____6970;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6971 = this$;
if(and__3822__auto____6971)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6971;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__3085__auto____6972 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6973 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6972)]);
if(or__3824__auto____6973)
{return or__3824__auto____6973;
} else
{var or__3824__auto____6974 = (cljs.core._invoke["_"]);
if(or__3824__auto____6974)
{return or__3824__auto____6974;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6975 = this$;
if(and__3822__auto____6975)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6975;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__3085__auto____6976 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6977 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6976)]);
if(or__3824__auto____6977)
{return or__3824__auto____6977;
} else
{var or__3824__auto____6978 = (cljs.core._invoke["_"]);
if(or__3824__auto____6978)
{return or__3824__auto____6978;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6979 = this$;
if(and__3822__auto____6979)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6979;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__3085__auto____6980 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6981 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6980)]);
if(or__3824__auto____6981)
{return or__3824__auto____6981;
} else
{var or__3824__auto____6982 = (cljs.core._invoke["_"]);
if(or__3824__auto____6982)
{return or__3824__auto____6982;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6983 = this$;
if(and__3822__auto____6983)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6983;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__3085__auto____6984 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6985 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6984)]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{var or__3824__auto____6986 = (cljs.core._invoke["_"]);
if(or__3824__auto____6986)
{return or__3824__auto____6986;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6987 = this$;
if(and__3822__auto____6987)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6987;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__3085__auto____6988 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6989 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6988)]);
if(or__3824__auto____6989)
{return or__3824__auto____6989;
} else
{var or__3824__auto____6990 = (cljs.core._invoke["_"]);
if(or__3824__auto____6990)
{return or__3824__auto____6990;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6991 = this$;
if(and__3822__auto____6991)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6991;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__3085__auto____6992 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6993 = (cljs.core._invoke[goog.typeOf(x__3085__auto____6992)]);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{var or__3824__auto____6994 = (cljs.core._invoke["_"]);
if(or__3824__auto____6994)
{return or__3824__auto____6994;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6999 = coll;
if(and__3822__auto____6999)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6999;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__3085__auto____7000 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7001 = (cljs.core._count[goog.typeOf(x__3085__auto____7000)]);
if(or__3824__auto____7001)
{return or__3824__auto____7001;
} else
{var or__3824__auto____7002 = (cljs.core._count["_"]);
if(or__3824__auto____7002)
{return or__3824__auto____7002;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____7007 = coll;
if(and__3822__auto____7007)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____7007;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__3085__auto____7008 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7009 = (cljs.core._empty[goog.typeOf(x__3085__auto____7008)]);
if(or__3824__auto____7009)
{return or__3824__auto____7009;
} else
{var or__3824__auto____7010 = (cljs.core._empty["_"]);
if(or__3824__auto____7010)
{return or__3824__auto____7010;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____7015 = coll;
if(and__3822__auto____7015)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____7015;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__3085__auto____7016 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7017 = (cljs.core._conj[goog.typeOf(x__3085__auto____7016)]);
if(or__3824__auto____7017)
{return or__3824__auto____7017;
} else
{var or__3824__auto____7018 = (cljs.core._conj["_"]);
if(or__3824__auto____7018)
{return or__3824__auto____7018;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____7027 = coll;
if(and__3822__auto____7027)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____7027;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__3085__auto____7028 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7029 = (cljs.core._nth[goog.typeOf(x__3085__auto____7028)]);
if(or__3824__auto____7029)
{return or__3824__auto____7029;
} else
{var or__3824__auto____7030 = (cljs.core._nth["_"]);
if(or__3824__auto____7030)
{return or__3824__auto____7030;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____7031 = coll;
if(and__3822__auto____7031)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____7031;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__3085__auto____7032 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7033 = (cljs.core._nth[goog.typeOf(x__3085__auto____7032)]);
if(or__3824__auto____7033)
{return or__3824__auto____7033;
} else
{var or__3824__auto____7034 = (cljs.core._nth["_"]);
if(or__3824__auto____7034)
{return or__3824__auto____7034;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____7039 = coll;
if(and__3822__auto____7039)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____7039;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__3085__auto____7040 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7041 = (cljs.core._first[goog.typeOf(x__3085__auto____7040)]);
if(or__3824__auto____7041)
{return or__3824__auto____7041;
} else
{var or__3824__auto____7042 = (cljs.core._first["_"]);
if(or__3824__auto____7042)
{return or__3824__auto____7042;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____7047 = coll;
if(and__3822__auto____7047)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____7047;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__3085__auto____7048 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7049 = (cljs.core._rest[goog.typeOf(x__3085__auto____7048)]);
if(or__3824__auto____7049)
{return or__3824__auto____7049;
} else
{var or__3824__auto____7050 = (cljs.core._rest["_"]);
if(or__3824__auto____7050)
{return or__3824__auto____7050;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____7055 = coll;
if(and__3822__auto____7055)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____7055;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__3085__auto____7056 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7057 = (cljs.core._next[goog.typeOf(x__3085__auto____7056)]);
if(or__3824__auto____7057)
{return or__3824__auto____7057;
} else
{var or__3824__auto____7058 = (cljs.core._next["_"]);
if(or__3824__auto____7058)
{return or__3824__auto____7058;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____7067 = o;
if(and__3822__auto____7067)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____7067;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__3085__auto____7068 = (((o == null))?null:o);
return (function (){var or__3824__auto____7069 = (cljs.core._lookup[goog.typeOf(x__3085__auto____7068)]);
if(or__3824__auto____7069)
{return or__3824__auto____7069;
} else
{var or__3824__auto____7070 = (cljs.core._lookup["_"]);
if(or__3824__auto____7070)
{return or__3824__auto____7070;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____7071 = o;
if(and__3822__auto____7071)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____7071;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__3085__auto____7072 = (((o == null))?null:o);
return (function (){var or__3824__auto____7073 = (cljs.core._lookup[goog.typeOf(x__3085__auto____7072)]);
if(or__3824__auto____7073)
{return or__3824__auto____7073;
} else
{var or__3824__auto____7074 = (cljs.core._lookup["_"]);
if(or__3824__auto____7074)
{return or__3824__auto____7074;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____7079 = coll;
if(and__3822__auto____7079)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____7079;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__3085__auto____7080 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7081 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__3085__auto____7080)]);
if(or__3824__auto____7081)
{return or__3824__auto____7081;
} else
{var or__3824__auto____7082 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____7082)
{return or__3824__auto____7082;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____7087 = coll;
if(and__3822__auto____7087)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____7087;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__3085__auto____7088 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7089 = (cljs.core._assoc[goog.typeOf(x__3085__auto____7088)]);
if(or__3824__auto____7089)
{return or__3824__auto____7089;
} else
{var or__3824__auto____7090 = (cljs.core._assoc["_"]);
if(or__3824__auto____7090)
{return or__3824__auto____7090;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____7095 = coll;
if(and__3822__auto____7095)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____7095;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__3085__auto____7096 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7097 = (cljs.core._dissoc[goog.typeOf(x__3085__auto____7096)]);
if(or__3824__auto____7097)
{return or__3824__auto____7097;
} else
{var or__3824__auto____7098 = (cljs.core._dissoc["_"]);
if(or__3824__auto____7098)
{return or__3824__auto____7098;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____7103 = coll;
if(and__3822__auto____7103)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____7103;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__3085__auto____7104 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7105 = (cljs.core._key[goog.typeOf(x__3085__auto____7104)]);
if(or__3824__auto____7105)
{return or__3824__auto____7105;
} else
{var or__3824__auto____7106 = (cljs.core._key["_"]);
if(or__3824__auto____7106)
{return or__3824__auto____7106;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____7111 = coll;
if(and__3822__auto____7111)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____7111;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__3085__auto____7112 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7113 = (cljs.core._val[goog.typeOf(x__3085__auto____7112)]);
if(or__3824__auto____7113)
{return or__3824__auto____7113;
} else
{var or__3824__auto____7114 = (cljs.core._val["_"]);
if(or__3824__auto____7114)
{return or__3824__auto____7114;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____7119 = coll;
if(and__3822__auto____7119)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____7119;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__3085__auto____7120 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7121 = (cljs.core._disjoin[goog.typeOf(x__3085__auto____7120)]);
if(or__3824__auto____7121)
{return or__3824__auto____7121;
} else
{var or__3824__auto____7122 = (cljs.core._disjoin["_"]);
if(or__3824__auto____7122)
{return or__3824__auto____7122;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____7127 = coll;
if(and__3822__auto____7127)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____7127;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__3085__auto____7128 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7129 = (cljs.core._peek[goog.typeOf(x__3085__auto____7128)]);
if(or__3824__auto____7129)
{return or__3824__auto____7129;
} else
{var or__3824__auto____7130 = (cljs.core._peek["_"]);
if(or__3824__auto____7130)
{return or__3824__auto____7130;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____7135 = coll;
if(and__3822__auto____7135)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____7135;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__3085__auto____7136 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7137 = (cljs.core._pop[goog.typeOf(x__3085__auto____7136)]);
if(or__3824__auto____7137)
{return or__3824__auto____7137;
} else
{var or__3824__auto____7138 = (cljs.core._pop["_"]);
if(or__3824__auto____7138)
{return or__3824__auto____7138;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____7143 = coll;
if(and__3822__auto____7143)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____7143;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__3085__auto____7144 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7145 = (cljs.core._assoc_n[goog.typeOf(x__3085__auto____7144)]);
if(or__3824__auto____7145)
{return or__3824__auto____7145;
} else
{var or__3824__auto____7146 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____7146)
{return or__3824__auto____7146;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____7151 = o;
if(and__3822__auto____7151)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____7151;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__3085__auto____7152 = (((o == null))?null:o);
return (function (){var or__3824__auto____7153 = (cljs.core._deref[goog.typeOf(x__3085__auto____7152)]);
if(or__3824__auto____7153)
{return or__3824__auto____7153;
} else
{var or__3824__auto____7154 = (cljs.core._deref["_"]);
if(or__3824__auto____7154)
{return or__3824__auto____7154;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____7159 = o;
if(and__3822__auto____7159)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____7159;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__3085__auto____7160 = (((o == null))?null:o);
return (function (){var or__3824__auto____7161 = (cljs.core._deref_with_timeout[goog.typeOf(x__3085__auto____7160)]);
if(or__3824__auto____7161)
{return or__3824__auto____7161;
} else
{var or__3824__auto____7162 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____7162)
{return or__3824__auto____7162;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____7167 = o;
if(and__3822__auto____7167)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____7167;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__3085__auto____7168 = (((o == null))?null:o);
return (function (){var or__3824__auto____7169 = (cljs.core._meta[goog.typeOf(x__3085__auto____7168)]);
if(or__3824__auto____7169)
{return or__3824__auto____7169;
} else
{var or__3824__auto____7170 = (cljs.core._meta["_"]);
if(or__3824__auto____7170)
{return or__3824__auto____7170;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____7175 = o;
if(and__3822__auto____7175)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____7175;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__3085__auto____7176 = (((o == null))?null:o);
return (function (){var or__3824__auto____7177 = (cljs.core._with_meta[goog.typeOf(x__3085__auto____7176)]);
if(or__3824__auto____7177)
{return or__3824__auto____7177;
} else
{var or__3824__auto____7178 = (cljs.core._with_meta["_"]);
if(or__3824__auto____7178)
{return or__3824__auto____7178;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____7187 = coll;
if(and__3822__auto____7187)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____7187;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__3085__auto____7188 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7189 = (cljs.core._reduce[goog.typeOf(x__3085__auto____7188)]);
if(or__3824__auto____7189)
{return or__3824__auto____7189;
} else
{var or__3824__auto____7190 = (cljs.core._reduce["_"]);
if(or__3824__auto____7190)
{return or__3824__auto____7190;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____7191 = coll;
if(and__3822__auto____7191)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____7191;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__3085__auto____7192 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7193 = (cljs.core._reduce[goog.typeOf(x__3085__auto____7192)]);
if(or__3824__auto____7193)
{return or__3824__auto____7193;
} else
{var or__3824__auto____7194 = (cljs.core._reduce["_"]);
if(or__3824__auto____7194)
{return or__3824__auto____7194;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____7199 = coll;
if(and__3822__auto____7199)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____7199;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__3085__auto____7200 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7201 = (cljs.core._kv_reduce[goog.typeOf(x__3085__auto____7200)]);
if(or__3824__auto____7201)
{return or__3824__auto____7201;
} else
{var or__3824__auto____7202 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____7202)
{return or__3824__auto____7202;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____7207 = o;
if(and__3822__auto____7207)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____7207;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__3085__auto____7208 = (((o == null))?null:o);
return (function (){var or__3824__auto____7209 = (cljs.core._equiv[goog.typeOf(x__3085__auto____7208)]);
if(or__3824__auto____7209)
{return or__3824__auto____7209;
} else
{var or__3824__auto____7210 = (cljs.core._equiv["_"]);
if(or__3824__auto____7210)
{return or__3824__auto____7210;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____7215 = o;
if(and__3822__auto____7215)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____7215;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__3085__auto____7216 = (((o == null))?null:o);
return (function (){var or__3824__auto____7217 = (cljs.core._hash[goog.typeOf(x__3085__auto____7216)]);
if(or__3824__auto____7217)
{return or__3824__auto____7217;
} else
{var or__3824__auto____7218 = (cljs.core._hash["_"]);
if(or__3824__auto____7218)
{return or__3824__auto____7218;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____7223 = o;
if(and__3822__auto____7223)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____7223;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__3085__auto____7224 = (((o == null))?null:o);
return (function (){var or__3824__auto____7225 = (cljs.core._seq[goog.typeOf(x__3085__auto____7224)]);
if(or__3824__auto____7225)
{return or__3824__auto____7225;
} else
{var or__3824__auto____7226 = (cljs.core._seq["_"]);
if(or__3824__auto____7226)
{return or__3824__auto____7226;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____7231 = coll;
if(and__3822__auto____7231)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____7231;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__3085__auto____7232 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7233 = (cljs.core._rseq[goog.typeOf(x__3085__auto____7232)]);
if(or__3824__auto____7233)
{return or__3824__auto____7233;
} else
{var or__3824__auto____7234 = (cljs.core._rseq["_"]);
if(or__3824__auto____7234)
{return or__3824__auto____7234;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____7239 = coll;
if(and__3822__auto____7239)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____7239;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__3085__auto____7240 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7241 = (cljs.core._sorted_seq[goog.typeOf(x__3085__auto____7240)]);
if(or__3824__auto____7241)
{return or__3824__auto____7241;
} else
{var or__3824__auto____7242 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____7242)
{return or__3824__auto____7242;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____7247 = coll;
if(and__3822__auto____7247)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____7247;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__3085__auto____7248 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7249 = (cljs.core._sorted_seq_from[goog.typeOf(x__3085__auto____7248)]);
if(or__3824__auto____7249)
{return or__3824__auto____7249;
} else
{var or__3824__auto____7250 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____7250)
{return or__3824__auto____7250;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____7255 = coll;
if(and__3822__auto____7255)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____7255;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__3085__auto____7256 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7257 = (cljs.core._entry_key[goog.typeOf(x__3085__auto____7256)]);
if(or__3824__auto____7257)
{return or__3824__auto____7257;
} else
{var or__3824__auto____7258 = (cljs.core._entry_key["_"]);
if(or__3824__auto____7258)
{return or__3824__auto____7258;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____7263 = coll;
if(and__3822__auto____7263)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____7263;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__3085__auto____7264 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7265 = (cljs.core._comparator[goog.typeOf(x__3085__auto____7264)]);
if(or__3824__auto____7265)
{return or__3824__auto____7265;
} else
{var or__3824__auto____7266 = (cljs.core._comparator["_"]);
if(or__3824__auto____7266)
{return or__3824__auto____7266;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____7271 = o;
if(and__3822__auto____7271)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____7271;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__3085__auto____7272 = (((o == null))?null:o);
return (function (){var or__3824__auto____7273 = (cljs.core._pr_seq[goog.typeOf(x__3085__auto____7272)]);
if(or__3824__auto____7273)
{return or__3824__auto____7273;
} else
{var or__3824__auto____7274 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____7274)
{return or__3824__auto____7274;
} else
{throw cljs.core.missing_protocol("IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____7279 = d;
if(and__3822__auto____7279)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____7279;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__3085__auto____7280 = (((d == null))?null:d);
return (function (){var or__3824__auto____7281 = (cljs.core._realized_QMARK_[goog.typeOf(x__3085__auto____7280)]);
if(or__3824__auto____7281)
{return or__3824__auto____7281;
} else
{var or__3824__auto____7282 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____7282)
{return or__3824__auto____7282;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____7287 = this$;
if(and__3822__auto____7287)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____7287;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__3085__auto____7288 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7289 = (cljs.core._notify_watches[goog.typeOf(x__3085__auto____7288)]);
if(or__3824__auto____7289)
{return or__3824__auto____7289;
} else
{var or__3824__auto____7290 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____7290)
{return or__3824__auto____7290;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____7295 = this$;
if(and__3822__auto____7295)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____7295;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__3085__auto____7296 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7297 = (cljs.core._add_watch[goog.typeOf(x__3085__auto____7296)]);
if(or__3824__auto____7297)
{return or__3824__auto____7297;
} else
{var or__3824__auto____7298 = (cljs.core._add_watch["_"]);
if(or__3824__auto____7298)
{return or__3824__auto____7298;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7303 = this$;
if(and__3822__auto____7303)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7303;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__3085__auto____7304 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7305 = (cljs.core._remove_watch[goog.typeOf(x__3085__auto____7304)]);
if(or__3824__auto____7305)
{return or__3824__auto____7305;
} else
{var or__3824__auto____7306 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7306)
{return or__3824__auto____7306;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7311 = coll;
if(and__3822__auto____7311)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7311;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__3085__auto____7312 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7313 = (cljs.core._as_transient[goog.typeOf(x__3085__auto____7312)]);
if(or__3824__auto____7313)
{return or__3824__auto____7313;
} else
{var or__3824__auto____7314 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7314)
{return or__3824__auto____7314;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7319 = tcoll;
if(and__3822__auto____7319)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7319;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__3085__auto____7320 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7321 = (cljs.core._conj_BANG_[goog.typeOf(x__3085__auto____7320)]);
if(or__3824__auto____7321)
{return or__3824__auto____7321;
} else
{var or__3824__auto____7322 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7322)
{return or__3824__auto____7322;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7327 = tcoll;
if(and__3822__auto____7327)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7327;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__3085__auto____7328 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7329 = (cljs.core._persistent_BANG_[goog.typeOf(x__3085__auto____7328)]);
if(or__3824__auto____7329)
{return or__3824__auto____7329;
} else
{var or__3824__auto____7330 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7330)
{return or__3824__auto____7330;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7335 = tcoll;
if(and__3822__auto____7335)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7335;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__3085__auto____7336 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7337 = (cljs.core._assoc_BANG_[goog.typeOf(x__3085__auto____7336)]);
if(or__3824__auto____7337)
{return or__3824__auto____7337;
} else
{var or__3824__auto____7338 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7338)
{return or__3824__auto____7338;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7343 = tcoll;
if(and__3822__auto____7343)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7343;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__3085__auto____7344 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7345 = (cljs.core._dissoc_BANG_[goog.typeOf(x__3085__auto____7344)]);
if(or__3824__auto____7345)
{return or__3824__auto____7345;
} else
{var or__3824__auto____7346 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7346)
{return or__3824__auto____7346;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7351 = tcoll;
if(and__3822__auto____7351)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7351;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__3085__auto____7352 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7353 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__3085__auto____7352)]);
if(or__3824__auto____7353)
{return or__3824__auto____7353;
} else
{var or__3824__auto____7354 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7354)
{return or__3824__auto____7354;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7359 = tcoll;
if(and__3822__auto____7359)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7359;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__3085__auto____7360 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7361 = (cljs.core._pop_BANG_[goog.typeOf(x__3085__auto____7360)]);
if(or__3824__auto____7361)
{return or__3824__auto____7361;
} else
{var or__3824__auto____7362 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7362)
{return or__3824__auto____7362;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7367 = tcoll;
if(and__3822__auto____7367)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7367;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__3085__auto____7368 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7369 = (cljs.core._disjoin_BANG_[goog.typeOf(x__3085__auto____7368)]);
if(or__3824__auto____7369)
{return or__3824__auto____7369;
} else
{var or__3824__auto____7370 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7370)
{return or__3824__auto____7370;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7375 = x;
if(and__3822__auto____7375)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7375;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__3085__auto____7376 = (((x == null))?null:x);
return (function (){var or__3824__auto____7377 = (cljs.core._compare[goog.typeOf(x__3085__auto____7376)]);
if(or__3824__auto____7377)
{return or__3824__auto____7377;
} else
{var or__3824__auto____7378 = (cljs.core._compare["_"]);
if(or__3824__auto____7378)
{return or__3824__auto____7378;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7383 = coll;
if(and__3822__auto____7383)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7383;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__3085__auto____7384 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7385 = (cljs.core._drop_first[goog.typeOf(x__3085__auto____7384)]);
if(or__3824__auto____7385)
{return or__3824__auto____7385;
} else
{var or__3824__auto____7386 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7386)
{return or__3824__auto____7386;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7391 = coll;
if(and__3822__auto____7391)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7391;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__3085__auto____7392 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7393 = (cljs.core._chunked_first[goog.typeOf(x__3085__auto____7392)]);
if(or__3824__auto____7393)
{return or__3824__auto____7393;
} else
{var or__3824__auto____7394 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7394)
{return or__3824__auto____7394;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7399 = coll;
if(and__3822__auto____7399)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7399;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__3085__auto____7400 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7401 = (cljs.core._chunked_rest[goog.typeOf(x__3085__auto____7400)]);
if(or__3824__auto____7401)
{return or__3824__auto____7401;
} else
{var or__3824__auto____7402 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7402)
{return or__3824__auto____7402;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7407 = coll;
if(and__3822__auto____7407)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7407;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__3085__auto____7408 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7409 = (cljs.core._chunked_next[goog.typeOf(x__3085__auto____7408)]);
if(or__3824__auto____7409)
{return or__3824__auto____7409;
} else
{var or__3824__auto____7410 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7410)
{return or__3824__auto____7410;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____7412 = (x === y);
if(or__3824__auto____7412)
{return or__3824__auto____7412;
} else
{return cljs.core._equiv(x,y);
}
});
var _EQ___3 = (function() { 
var G__7413__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__7414 = y;
var G__7415 = cljs.core.first(more);
var G__7416 = cljs.core.next(more);
x = G__7414;
y = G__7415;
more = G__7416;
continue;
}
} else
{return _EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7413 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7413__delegate.call(this, x, y, more);
};
G__7413.cljs$lang$maxFixedArity = 2;
G__7413.cljs$lang$applyTo = (function (arglist__7417){
var x = cljs.core.first(arglist__7417);
var y = cljs.core.first(cljs.core.next(arglist__7417));
var more = cljs.core.rest(cljs.core.next(arglist__7417));
return G__7413__delegate(x, y, more);
});
G__7413.cljs$lang$arity$variadic = G__7413__delegate;
return G__7413;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7418 = null;
var G__7418__2 = (function (o,k){
return null;
});
var G__7418__3 = (function (o,k,not_found){
return not_found;
});
G__7418 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7418__2.call(this,o,k);
case 3:
return G__7418__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7418;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.cljs$lang$arity$variadic(cljs.core.array_seq([k,v], 0));
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.cljs$lang$arity$1(o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7419 = null;
var G__7419__2 = (function (_,f){
return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
});
var G__7419__3 = (function (_,f,start){
return start;
});
G__7419 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7419__2.call(this,_,f);
case 3:
return G__7419__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7419;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.cljs$lang$arity$1("nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.cljs$lang$arity$0();
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7420 = null;
var G__7420__2 = (function (_,n){
return null;
});
var G__7420__3 = (function (_,n,not_found){
return not_found;
});
G__7420 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7420__2.call(this,_,n);
case 3:
return G__7420__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7420;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____7421 = cljs.core.instance_QMARK_(Date,other);
if(and__3822__auto____7421)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7421;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7434 = cljs.core._count(cicoll);
if((cnt__7434 === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__7435 = cljs.core._nth.cljs$lang$arity$2(cicoll,0);
var n__7436 = 1;
while(true){
if((n__7436 < cnt__7434))
{var nval__7437 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7435,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7436)) : f.call(null,val__7435,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7436)));
if(cljs.core.reduced_QMARK_(nval__7437))
{return cljs.core.deref(nval__7437);
} else
{{
var G__7446 = nval__7437;
var G__7447 = (n__7436 + 1);
val__7435 = G__7446;
n__7436 = G__7447;
continue;
}
}
} else
{return val__7435;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7438 = cljs.core._count(cicoll);
var val__7439 = val;
var n__7440 = 0;
while(true){
if((n__7440 < cnt__7438))
{var nval__7441 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7439,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7440)) : f.call(null,val__7439,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7440)));
if(cljs.core.reduced_QMARK_(nval__7441))
{return cljs.core.deref(nval__7441);
} else
{{
var G__7448 = nval__7441;
var G__7449 = (n__7440 + 1);
val__7439 = G__7448;
n__7440 = G__7449;
continue;
}
}
} else
{return val__7439;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7442 = cljs.core._count(cicoll);
var val__7443 = val;
var n__7444 = idx;
while(true){
if((n__7444 < cnt__7442))
{var nval__7445 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7443,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7444)) : f.call(null,val__7443,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7444)));
if(cljs.core.reduced_QMARK_(nval__7445))
{return cljs.core.deref(nval__7445);
} else
{{
var G__7450 = nval__7445;
var G__7451 = (n__7444 + 1);
val__7443 = G__7450;
n__7444 = G__7451;
continue;
}
}
} else
{return val__7443;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7464 = arr.length;
if((arr.length === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__7465 = (arr[0]);
var n__7466 = 1;
while(true){
if((n__7466 < cnt__7464))
{var nval__7467 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7465,(arr[n__7466])) : f.call(null,val__7465,(arr[n__7466])));
if(cljs.core.reduced_QMARK_(nval__7467))
{return cljs.core.deref(nval__7467);
} else
{{
var G__7476 = nval__7467;
var G__7477 = (n__7466 + 1);
val__7465 = G__7476;
n__7466 = G__7477;
continue;
}
}
} else
{return val__7465;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7468 = arr.length;
var val__7469 = val;
var n__7470 = 0;
while(true){
if((n__7470 < cnt__7468))
{var nval__7471 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7469,(arr[n__7470])) : f.call(null,val__7469,(arr[n__7470])));
if(cljs.core.reduced_QMARK_(nval__7471))
{return cljs.core.deref(nval__7471);
} else
{{
var G__7478 = nval__7471;
var G__7479 = (n__7470 + 1);
val__7469 = G__7478;
n__7470 = G__7479;
continue;
}
}
} else
{return val__7469;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7472 = arr.length;
var val__7473 = val;
var n__7474 = idx;
while(true){
if((n__7474 < cnt__7472))
{var nval__7475 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7473,(arr[n__7474])) : f.call(null,val__7473,(arr[n__7474])));
if(cljs.core.reduced_QMARK_(nval__7475))
{return cljs.core.deref(nval__7475);
} else
{{
var G__7480 = nval__7475;
var G__7481 = (n__7474 + 1);
val__7473 = G__7480;
n__7474 = G__7481;
continue;
}
}
} else
{return val__7473;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7482 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7483 = this;
if(((this__7483.i + 1) < this__7483.a.length))
{return (new cljs.core.IndexedSeq(this__7483.a,(this__7483.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7484 = this;
return cljs.core.cons(o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7485 = this;
var c__7486 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7486 > 0))
{return (new cljs.core.RSeq(coll,(c__7486 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7487 = this;
var this__7488 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7488], 0));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7489 = this;
if(cljs.core.counted_QMARK_(this__7489.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__7489.a,f,(this__7489.a[this__7489.i]),(this__7489.i + 1));
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(this__7489.a[this__7489.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7490 = this;
if(cljs.core.counted_QMARK_(this__7490.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__7490.a,f,start,this__7490.i);
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7491 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7492 = this;
return (this__7492.a.length - this__7492.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7493 = this;
return (this__7493.a[this__7493.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7494 = this;
if(((this__7494.i + 1) < this__7494.a.length))
{return (new cljs.core.IndexedSeq(this__7494.a,(this__7494.i + 1)));
} else
{return cljs.core.list.cljs$lang$arity$0();
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7495 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7496 = this;
var i__7497 = (n + this__7496.i);
if((i__7497 < this__7496.a.length))
{return (this__7496.a[i__7497]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7498 = this;
var i__7499 = (n + this__7498.i);
if((i__7499 < this__7498.a.length))
{return (this__7498.a[i__7499]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$lang$arity$2(prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$lang$arity$2(array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$lang$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7500 = null;
var G__7500__2 = (function (array,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(array,f);
});
var G__7500__3 = (function (array,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(array,f,start);
});
G__7500 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7500__2.call(this,array,f);
case 3:
return G__7500__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7500;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7501 = null;
var G__7501__2 = (function (array,k){
return (array[k]);
});
var G__7501__3 = (function (array,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(array,k,not_found);
});
G__7501 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7501__2.call(this,array,k);
case 3:
return G__7501__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7501;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7502 = null;
var G__7502__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7502__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7502 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7502__2.call(this,array,n);
case 3:
return G__7502__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7502;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.cljs$lang$arity$2(array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7503 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7504 = this;
return cljs.core.cons(o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7505 = this;
var this__7506 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7506], 0));
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7507 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7508 = this;
return (this__7508.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7509 = this;
return cljs.core._nth.cljs$lang$arity$2(this__7509.ci,this__7509.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7510 = this;
if((this__7510.i > 0))
{return (new cljs.core.RSeq(this__7510.ci,(this__7510.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7511 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7512 = this;
return (new cljs.core.RSeq(this__7512.ci,this__7512.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7513 = this;
return this__7513.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7517__7518 = coll;
if(G__7517__7518)
{if((function (){var or__3824__auto____7519 = (G__7517__7518.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7519)
{return or__3824__auto____7519;
} else
{return G__7517__7518.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7517__7518.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__7517__7518);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__7517__7518);
}
})())
{return coll;
} else
{return cljs.core._seq(coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7524__7525 = coll;
if(G__7524__7525)
{if((function (){var or__3824__auto____7526 = (G__7524__7525.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7526)
{return or__3824__auto____7526;
} else
{return G__7524__7525.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7524__7525.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7524__7525);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7524__7525);
}
})())
{return cljs.core._first(coll);
} else
{var s__7527 = cljs.core.seq(coll);
if((s__7527 == null))
{return null;
} else
{return cljs.core._first(s__7527);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__7532__7533 = coll;
if(G__7532__7533)
{if((function (){var or__3824__auto____7534 = (G__7532__7533.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7534)
{return or__3824__auto____7534;
} else
{return G__7532__7533.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7532__7533.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7532__7533);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7532__7533);
}
})())
{return cljs.core._rest(coll);
} else
{var s__7535 = cljs.core.seq(coll);
if(!((s__7535 == null)))
{return cljs.core._rest(s__7535);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7539__7540 = coll;
if(G__7539__7540)
{if((function (){var or__3824__auto____7541 = (G__7539__7540.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7541)
{return or__3824__auto____7541;
} else
{return G__7539__7540.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7539__7540.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.INext,G__7539__7540);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.INext,G__7539__7540);
}
})())
{return cljs.core._next(coll);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__7543 = cljs.core.next(s);
if(!((sn__7543 == null)))
{{
var G__7544 = sn__7543;
s = G__7544;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj(coll,x);
});
var conj__3 = (function() { 
var G__7545__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7546 = conj.cljs$lang$arity$2(coll,x);
var G__7547 = cljs.core.first(xs);
var G__7548 = cljs.core.next(xs);
coll = G__7546;
x = G__7547;
xs = G__7548;
continue;
}
} else
{return conj.cljs$lang$arity$2(coll,x);
}
break;
}
};
var G__7545 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7545__delegate.call(this, coll, x, xs);
};
G__7545.cljs$lang$maxFixedArity = 2;
G__7545.cljs$lang$applyTo = (function (arglist__7549){
var coll = cljs.core.first(arglist__7549);
var x = cljs.core.first(cljs.core.next(arglist__7549));
var xs = cljs.core.rest(cljs.core.next(arglist__7549));
return G__7545__delegate(coll, x, xs);
});
G__7545.cljs$lang$arity$variadic = G__7545__delegate;
return G__7545;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty(coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__7552 = cljs.core.seq(coll);
var acc__7553 = 0;
while(true){
if(cljs.core.counted_QMARK_(s__7552))
{return (acc__7553 + cljs.core._count(s__7552));
} else
{{
var G__7554 = cljs.core.next(s__7552);
var G__7555 = (acc__7553 + 1);
s__7552 = G__7554;
acc__7553 = G__7555;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_(coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$2(cljs.core.next(coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$3(cljs.core.next(coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__7562__7563 = coll;
if(G__7562__7563)
{if((function (){var or__3824__auto____7564 = (G__7562__7563.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7564)
{return or__3824__auto____7564;
} else
{return G__7562__7563.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7562__7563.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7562__7563);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7562__7563);
}
})())
{return cljs.core._nth.cljs$lang$arity$2(coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$2(coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__7565__7566 = coll;
if(G__7565__7566)
{if((function (){var or__3824__auto____7567 = (G__7565__7566.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7567)
{return or__3824__auto____7567;
} else
{return G__7565__7566.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7565__7566.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7565__7566);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7565__7566);
}
})())
{return cljs.core._nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.cljs$lang$arity$2(o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.cljs$lang$arity$3(o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc(coll,k,v);
});
var assoc__4 = (function() { 
var G__7570__delegate = function (coll,k,v,kvs){
while(true){
var ret__7569 = assoc.cljs$lang$arity$3(coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7571 = ret__7569;
var G__7572 = cljs.core.first(kvs);
var G__7573 = cljs.core.second(kvs);
var G__7574 = cljs.core.nnext(kvs);
coll = G__7571;
k = G__7572;
v = G__7573;
kvs = G__7574;
continue;
}
} else
{return ret__7569;
}
break;
}
};
var G__7570 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7570__delegate.call(this, coll, k, v, kvs);
};
G__7570.cljs$lang$maxFixedArity = 3;
G__7570.cljs$lang$applyTo = (function (arglist__7575){
var coll = cljs.core.first(arglist__7575);
var k = cljs.core.first(cljs.core.next(arglist__7575));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7575)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7575)));
return G__7570__delegate(coll, k, v, kvs);
});
G__7570.cljs$lang$arity$variadic = G__7570__delegate;
return G__7570;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc(coll,k);
});
var dissoc__3 = (function() { 
var G__7578__delegate = function (coll,k,ks){
while(true){
var ret__7577 = dissoc.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__7579 = ret__7577;
var G__7580 = cljs.core.first(ks);
var G__7581 = cljs.core.next(ks);
coll = G__7579;
k = G__7580;
ks = G__7581;
continue;
}
} else
{return ret__7577;
}
break;
}
};
var G__7578 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7578__delegate.call(this, coll, k, ks);
};
G__7578.cljs$lang$maxFixedArity = 2;
G__7578.cljs$lang$applyTo = (function (arglist__7582){
var coll = cljs.core.first(arglist__7582);
var k = cljs.core.first(cljs.core.next(arglist__7582));
var ks = cljs.core.rest(cljs.core.next(arglist__7582));
return G__7578__delegate(coll, k, ks);
});
G__7578.cljs$lang$arity$variadic = G__7578__delegate;
return G__7578;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta(o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7586__7587 = o;
if(G__7586__7587)
{if((function (){var or__3824__auto____7588 = (G__7586__7587.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7588)
{return or__3824__auto____7588;
} else
{return G__7586__7587.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7586__7587.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__7586__7587);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__7586__7587);
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek(coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop(coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin(coll,k);
});
var disj__3 = (function() { 
var G__7591__delegate = function (coll,k,ks){
while(true){
var ret__7590 = disj.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__7592 = ret__7590;
var G__7593 = cljs.core.first(ks);
var G__7594 = cljs.core.next(ks);
coll = G__7592;
k = G__7593;
ks = G__7594;
continue;
}
} else
{return ret__7590;
}
break;
}
};
var G__7591 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7591__delegate.call(this, coll, k, ks);
};
G__7591.cljs$lang$maxFixedArity = 2;
G__7591.cljs$lang$applyTo = (function (arglist__7595){
var coll = cljs.core.first(arglist__7595);
var k = cljs.core.first(cljs.core.next(arglist__7595));
var ks = cljs.core.rest(cljs.core.next(arglist__7595));
return G__7591__delegate(coll, k, ks);
});
G__7591.cljs$lang$arity$variadic = G__7591__delegate;
return G__7591;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__7597 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7597);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7597;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7599 = (cljs.core.string_hash_cache[k]);
if(!((h__7599 == null)))
{return h__7599;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.cljs$lang$arity$2(o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____7601 = goog.isString(o);
if(and__3822__auto____7601)
{return check_cache;
} else
{return and__3822__auto____7601;
}
})())
{return cljs.core.check_string_hash_cache(o);
} else
{return cljs.core._hash(o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not(cljs.core.seq(coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7605__7606 = x;
if(G__7605__7606)
{if((function (){var or__3824__auto____7607 = (G__7605__7606.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7607)
{return or__3824__auto____7607;
} else
{return G__7605__7606.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7605__7606.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__7605__7606);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__7605__7606);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7611__7612 = x;
if(G__7611__7612)
{if((function (){var or__3824__auto____7613 = (G__7611__7612.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7613)
{return or__3824__auto____7613;
} else
{return G__7611__7612.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7611__7612.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISet,G__7611__7612);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISet,G__7611__7612);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7617__7618 = x;
if(G__7617__7618)
{if((function (){var or__3824__auto____7619 = (G__7617__7618.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7619)
{return or__3824__auto____7619;
} else
{return G__7617__7618.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7617__7618.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__7617__7618);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__7617__7618);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7623__7624 = x;
if(G__7623__7624)
{if((function (){var or__3824__auto____7625 = (G__7623__7624.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7625)
{return or__3824__auto____7625;
} else
{return G__7623__7624.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7623__7624.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__7623__7624);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__7623__7624);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7629__7630 = x;
if(G__7629__7630)
{if((function (){var or__3824__auto____7631 = (G__7629__7630.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7631)
{return or__3824__auto____7631;
} else
{return G__7629__7630.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7629__7630.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__7629__7630);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__7629__7630);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7635__7636 = x;
if(G__7635__7636)
{if((function (){var or__3824__auto____7637 = (G__7635__7636.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7637)
{return or__3824__auto____7637;
} else
{return G__7635__7636.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7635__7636.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7635__7636);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7635__7636);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7641__7642 = x;
if(G__7641__7642)
{if((function (){var or__3824__auto____7643 = (G__7641__7642.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7643)
{return or__3824__auto____7643;
} else
{return G__7641__7642.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7641__7642.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7641__7642);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7641__7642);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7647__7648 = x;
if(G__7647__7648)
{if((function (){var or__3824__auto____7649 = (G__7647__7648.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7649)
{return or__3824__auto____7649;
} else
{return G__7647__7648.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7647__7648.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMap,G__7647__7648);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMap,G__7647__7648);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7653__7654 = x;
if(G__7653__7654)
{if((function (){var or__3824__auto____7655 = (G__7653__7654.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7655)
{return or__3824__auto____7655;
} else
{return G__7653__7654.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7653__7654.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IVector,G__7653__7654);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IVector,G__7653__7654);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7659__7660 = x;
if(G__7659__7660)
{if(cljs.core.truth_((function (){var or__3824__auto____7661 = null;
if(cljs.core.truth_(or__3824__auto____7661))
{return or__3824__auto____7661;
} else
{return G__7659__7660.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7659__7660.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__7659__7660);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__7659__7660);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7662__delegate = function (keyvals){
return cljs.core.apply.cljs$lang$arity$2(goog.object.create,keyvals);
};
var G__7662 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7662__delegate.call(this, keyvals);
};
G__7662.cljs$lang$maxFixedArity = 0;
G__7662.cljs$lang$applyTo = (function (arglist__7663){
var keyvals = cljs.core.seq(arglist__7663);;
return G__7662__delegate(keyvals);
});
G__7662.cljs$lang$arity$variadic = G__7662__delegate;
return G__7662;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7665 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7665.push(key);
}));
return keys__7665;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7669 = i;
var j__7670 = j;
var len__7671 = len;
while(true){
if((len__7671 === 0))
{return to;
} else
{(to[j__7670] = (from[i__7669]));
{
var G__7672 = (i__7669 + 1);
var G__7673 = (j__7670 + 1);
var G__7674 = (len__7671 - 1);
i__7669 = G__7672;
j__7670 = G__7673;
len__7671 = G__7674;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7678 = (i + (len - 1));
var j__7679 = (j + (len - 1));
var len__7680 = len;
while(true){
if((len__7680 === 0))
{return to;
} else
{(to[j__7679] = (from[i__7678]));
{
var G__7681 = (i__7678 - 1);
var G__7682 = (j__7679 - 1);
var G__7683 = (len__7680 - 1);
i__7678 = G__7681;
j__7679 = G__7682;
len__7680 = G__7683;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7687__7688 = s;
if(G__7687__7688)
{if((function (){var or__3824__auto____7689 = (G__7687__7688.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7689)
{return or__3824__auto____7689;
} else
{return G__7687__7688.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7687__7688.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7687__7688);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7687__7688);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7693__7694 = s;
if(G__7693__7694)
{if((function (){var or__3824__auto____7695 = (G__7693__7694.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7695)
{return or__3824__auto____7695;
} else
{return G__7693__7694.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7693__7694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__7693__7694);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__7693__7694);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____7698 = goog.isString(x);
if(and__3822__auto____7698)
{return !((function (){var or__3824__auto____7699 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7699)
{return or__3824__auto____7699;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7698;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7701 = goog.isString(x);
if(and__3822__auto____7701)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7701;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7703 = goog.isString(x);
if(and__3822__auto____7703)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7703;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7708 = cljs.core.fn_QMARK_(f);
if(or__3824__auto____7708)
{return or__3824__auto____7708;
} else
{var G__7709__7710 = f;
if(G__7709__7710)
{if((function (){var or__3824__auto____7711 = (G__7709__7710.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7711)
{return or__3824__auto____7711;
} else
{return G__7709__7710.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7709__7710.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IFn,G__7709__7710);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IFn,G__7709__7710);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7713 = cljs.core.number_QMARK_(n);
if(and__3822__auto____7713)
{return (n == n.toFixed());
} else
{return and__3822__auto____7713;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.cljs$lang$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____7716 = coll;
if(cljs.core.truth_(and__3822__auto____7716))
{var and__3822__auto____7717 = cljs.core.associative_QMARK_(coll);
if(and__3822__auto____7717)
{return cljs.core.contains_QMARK_(coll,k);
} else
{return and__3822__auto____7717;
}
} else
{return and__3822__auto____7716;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.cljs$lang$arity$2(coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7726__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$lang$arity$2(x,y)))
{var s__7722 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7723 = more;
while(true){
var x__7724 = cljs.core.first(xs__7723);
var etc__7725 = cljs.core.next(xs__7723);
if(cljs.core.truth_(xs__7723))
{if(cljs.core.contains_QMARK_(s__7722,x__7724))
{return false;
} else
{{
var G__7727 = cljs.core.conj.cljs$lang$arity$2(s__7722,x__7724);
var G__7728 = etc__7725;
s__7722 = G__7727;
xs__7723 = G__7728;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7726 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7726__delegate.call(this, x, y, more);
};
G__7726.cljs$lang$maxFixedArity = 2;
G__7726.cljs$lang$applyTo = (function (arglist__7729){
var x = cljs.core.first(arglist__7729);
var y = cljs.core.first(cljs.core.next(arglist__7729));
var more = cljs.core.rest(cljs.core.next(arglist__7729));
return G__7726__delegate(x, y, more);
});
G__7726.cljs$lang$arity$variadic = G__7726__delegate;
return G__7726;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__7733__7734 = x;
if(G__7733__7734)
{if(cljs.core.truth_((function (){var or__3824__auto____7735 = null;
if(cljs.core.truth_(or__3824__auto____7735))
{return or__3824__auto____7735;
} else
{return G__7733__7734.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7733__7734.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__7733__7734);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__7733__7734);
}
})())
{return cljs.core._compare(x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7740 = cljs.core.count(xs);
var yl__7741 = cljs.core.count(ys);
if((xl__7740 < yl__7741))
{return -1;
} else
{if((xl__7740 > yl__7741))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.cljs$lang$arity$4(xs,ys,xl__7740,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7742 = cljs.core.compare(cljs.core.nth.cljs$lang$arity$2(xs,n),cljs.core.nth.cljs$lang$arity$2(ys,n));
if((function (){var and__3822__auto____7743 = (d__7742 === 0);
if(and__3822__auto____7743)
{return ((n + 1) < len);
} else
{return and__3822__auto____7743;
}
})())
{{
var G__7744 = xs;
var G__7745 = ys;
var G__7746 = len;
var G__7747 = (n + 1);
xs = G__7744;
ys = G__7745;
len = G__7746;
n = G__7747;
continue;
}
} else
{return d__7742;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$lang$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7749 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y));
if(cljs.core.number_QMARK_(r__7749))
{return r__7749;
} else
{if(cljs.core.truth_(r__7749))
{return -1;
} else
{if(cljs.core.truth_((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(y,x) : f.call(null,y,x))))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$lang$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll))
{var a__7751 = cljs.core.to_array(coll);
goog.array.stableSort(a__7751,cljs.core.fn__GT_comparator(comp));
return cljs.core.seq(a__7751);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$lang$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$lang$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(y) : keyfn.call(null,y)));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____7757 = cljs.core.seq(coll);
if(temp__3971__auto____7757)
{var s__7758 = temp__3971__auto____7757;
return cljs.core.reduce.cljs$lang$arity$3(f,cljs.core.first(s__7758),cljs.core.next(s__7758));
} else
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7759 = val;
var coll__7760 = cljs.core.seq(coll);
while(true){
if(coll__7760)
{var nval__7761 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7759,cljs.core.first(coll__7760)) : f.call(null,val__7759,cljs.core.first(coll__7760)));
if(cljs.core.reduced_QMARK_(nval__7761))
{return cljs.core.deref(nval__7761);
} else
{{
var G__7762 = nval__7761;
var G__7763 = cljs.core.next(coll__7760);
val__7759 = G__7762;
coll__7760 = G__7763;
continue;
}
}
} else
{return val__7759;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7765 = cljs.core.to_array(coll);
goog.array.shuffle(a__7765);
return cljs.core.vec(a__7765);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7772__7773 = coll;
if(G__7772__7773)
{if((function (){var or__3824__auto____7774 = (G__7772__7773.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7774)
{return or__3824__auto____7774;
} else
{return G__7772__7773.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7772__7773.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7772__7773);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7772__7773);
}
})())
{return cljs.core._reduce.cljs$lang$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$2(f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7775__7776 = coll;
if(G__7775__7776)
{if((function (){var or__3824__auto____7777 = (G__7775__7776.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7777)
{return or__3824__auto____7777;
} else
{return G__7775__7776.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7775__7776.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7775__7776);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7775__7776);
}
})())
{return cljs.core._reduce.cljs$lang$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$3(f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce(coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7778 = this;
return this__7778.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_(cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7779__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_PLUS_,(x + y),more);
};
var G__7779 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7779__delegate.call(this, x, y, more);
};
G__7779.cljs$lang$maxFixedArity = 2;
G__7779.cljs$lang$applyTo = (function (arglist__7780){
var x = cljs.core.first(arglist__7780);
var y = cljs.core.first(cljs.core.next(arglist__7780));
var more = cljs.core.rest(cljs.core.next(arglist__7780));
return G__7779__delegate(x, y, more);
});
G__7779.cljs$lang$arity$variadic = G__7779__delegate;
return G__7779;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7781__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_,(x - y),more);
};
var G__7781 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7781__delegate.call(this, x, y, more);
};
G__7781.cljs$lang$maxFixedArity = 2;
G__7781.cljs$lang$applyTo = (function (arglist__7782){
var x = cljs.core.first(arglist__7782);
var y = cljs.core.first(cljs.core.next(arglist__7782));
var more = cljs.core.rest(cljs.core.next(arglist__7782));
return G__7781__delegate(x, y, more);
});
G__7781.cljs$lang$arity$variadic = G__7781__delegate;
return G__7781;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7783__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_STAR_,(x * y),more);
};
var G__7783 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7783__delegate.call(this, x, y, more);
};
G__7783.cljs$lang$maxFixedArity = 2;
G__7783.cljs$lang$applyTo = (function (arglist__7784){
var x = cljs.core.first(arglist__7784);
var y = cljs.core.first(cljs.core.next(arglist__7784));
var more = cljs.core.rest(cljs.core.next(arglist__7784));
return G__7783__delegate(x, y, more);
});
G__7783.cljs$lang$arity$variadic = G__7783__delegate;
return G__7783;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$lang$arity$2(1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7785__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_SLASH_,_SLASH_.cljs$lang$arity$2(x,y),more);
};
var G__7785 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7785__delegate.call(this, x, y, more);
};
G__7785.cljs$lang$maxFixedArity = 2;
G__7785.cljs$lang$applyTo = (function (arglist__7786){
var x = cljs.core.first(arglist__7786);
var y = cljs.core.first(cljs.core.next(arglist__7786));
var more = cljs.core.rest(cljs.core.next(arglist__7786));
return G__7785__delegate(x, y, more);
});
G__7785.cljs$lang$arity$variadic = G__7785__delegate;
return G__7785;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7787__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__7788 = y;
var G__7789 = cljs.core.first(more);
var G__7790 = cljs.core.next(more);
x = G__7788;
y = G__7789;
more = G__7790;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7787 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7787__delegate.call(this, x, y, more);
};
G__7787.cljs$lang$maxFixedArity = 2;
G__7787.cljs$lang$applyTo = (function (arglist__7791){
var x = cljs.core.first(arglist__7791);
var y = cljs.core.first(cljs.core.next(arglist__7791));
var more = cljs.core.rest(cljs.core.next(arglist__7791));
return G__7787__delegate(x, y, more);
});
G__7787.cljs$lang$arity$variadic = G__7787__delegate;
return G__7787;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7792__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__7793 = y;
var G__7794 = cljs.core.first(more);
var G__7795 = cljs.core.next(more);
x = G__7793;
y = G__7794;
more = G__7795;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7792 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7792__delegate.call(this, x, y, more);
};
G__7792.cljs$lang$maxFixedArity = 2;
G__7792.cljs$lang$applyTo = (function (arglist__7796){
var x = cljs.core.first(arglist__7796);
var y = cljs.core.first(cljs.core.next(arglist__7796));
var more = cljs.core.rest(cljs.core.next(arglist__7796));
return G__7792__delegate(x, y, more);
});
G__7792.cljs$lang$arity$variadic = G__7792__delegate;
return G__7792;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7797__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__7798 = y;
var G__7799 = cljs.core.first(more);
var G__7800 = cljs.core.next(more);
x = G__7798;
y = G__7799;
more = G__7800;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7797 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7797__delegate.call(this, x, y, more);
};
G__7797.cljs$lang$maxFixedArity = 2;
G__7797.cljs$lang$applyTo = (function (arglist__7801){
var x = cljs.core.first(arglist__7801);
var y = cljs.core.first(cljs.core.next(arglist__7801));
var more = cljs.core.rest(cljs.core.next(arglist__7801));
return G__7797__delegate(x, y, more);
});
G__7797.cljs$lang$arity$variadic = G__7797__delegate;
return G__7797;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7802__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__7803 = y;
var G__7804 = cljs.core.first(more);
var G__7805 = cljs.core.next(more);
x = G__7803;
y = G__7804;
more = G__7805;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7802 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7802__delegate.call(this, x, y, more);
};
G__7802.cljs$lang$maxFixedArity = 2;
G__7802.cljs$lang$applyTo = (function (arglist__7806){
var x = cljs.core.first(arglist__7806);
var y = cljs.core.first(cljs.core.next(arglist__7806));
var more = cljs.core.rest(cljs.core.next(arglist__7806));
return G__7802__delegate(x, y, more);
});
G__7802.cljs$lang$arity$variadic = G__7802__delegate;
return G__7802;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7807__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(max,((x > y) ? x : y),more);
};
var G__7807 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7807__delegate.call(this, x, y, more);
};
G__7807.cljs$lang$maxFixedArity = 2;
G__7807.cljs$lang$applyTo = (function (arglist__7808){
var x = cljs.core.first(arglist__7808);
var y = cljs.core.first(cljs.core.next(arglist__7808));
var more = cljs.core.rest(cljs.core.next(arglist__7808));
return G__7807__delegate(x, y, more);
});
G__7807.cljs$lang$arity$variadic = G__7807__delegate;
return G__7807;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7809__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(min,((x < y) ? x : y),more);
};
var G__7809 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7809__delegate.call(this, x, y, more);
};
G__7809.cljs$lang$maxFixedArity = 2;
G__7809.cljs$lang$applyTo = (function (arglist__7810){
var x = cljs.core.first(arglist__7810);
var y = cljs.core.first(cljs.core.next(arglist__7810));
var more = cljs.core.rest(cljs.core.next(arglist__7810));
return G__7809__delegate(x, y, more);
});
G__7809.cljs$lang$arity$variadic = G__7809__delegate;
return G__7809;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(q) : Math.floor.call(null,q));
} else
{return (Math.ceil.cljs$lang$arity$1 ? Math.ceil.cljs$lang$arity$1(q) : Math.ceil.call(null,q));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7812 = (n % d);
return cljs.core.fix(((n - rem__7812) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7814 = cljs.core.quot(n,d);
return (n - (d * q__7814));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$lang$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$lang$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7817 = (v - ((v >> 1) & 1431655765));
var v__7818 = ((v__7817 & 858993459) + ((v__7817 >> 2) & 858993459));
return ((((v__7818 + (v__7818 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7819__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__7820 = y;
var G__7821 = cljs.core.first(more);
var G__7822 = cljs.core.next(more);
x = G__7820;
y = G__7821;
more = G__7822;
continue;
}
} else
{return _EQ__EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7819 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7819__delegate.call(this, x, y, more);
};
G__7819.cljs$lang$maxFixedArity = 2;
G__7819.cljs$lang$applyTo = (function (arglist__7823){
var x = cljs.core.first(arglist__7823);
var y = cljs.core.first(cljs.core.next(arglist__7823));
var more = cljs.core.rest(cljs.core.next(arglist__7823));
return G__7819__delegate(x, y, more);
});
G__7819.cljs$lang$arity$variadic = G__7819__delegate;
return G__7819;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7827 = n;
var xs__7828 = cljs.core.seq(coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7829 = xs__7828;
if(and__3822__auto____7829)
{return (n__7827 > 0);
} else
{return and__3822__auto____7829;
}
})()))
{{
var G__7830 = (n__7827 - 1);
var G__7831 = cljs.core.next(xs__7828);
n__7827 = G__7830;
xs__7828 = G__7831;
continue;
}
} else
{return xs__7828;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7832__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7833 = sb.append(str_STAR_.cljs$lang$arity$1(cljs.core.first(more)));
var G__7834 = cljs.core.next(more);
sb = G__7833;
more = G__7834;
continue;
}
} else
{return str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.cljs$lang$arity$1(x))),ys);
};
var G__7832 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7832__delegate.call(this, x, ys);
};
G__7832.cljs$lang$maxFixedArity = 1;
G__7832.cljs$lang$applyTo = (function (arglist__7835){
var x = cljs.core.first(arglist__7835);
var ys = cljs.core.rest(arglist__7835);
return G__7832__delegate(x, ys);
});
G__7832.cljs$lang$arity$variadic = G__7832__delegate;
return G__7832;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_(x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_(x))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic(":",cljs.core.array_seq([x.substring(2,x.length)], 0));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7836__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7837 = sb.append(str.cljs$lang$arity$1(cljs.core.first(more)));
var G__7838 = cljs.core.next(more);
sb = G__7837;
more = G__7838;
continue;
}
} else
{return cljs.core.str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.cljs$lang$arity$1(x))),ys);
};
var G__7836 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7836__delegate.call(this, x, ys);
};
G__7836.cljs$lang$maxFixedArity = 1;
G__7836.cljs$lang$applyTo = (function (arglist__7839){
var x = cljs.core.first(arglist__7839);
var ys = cljs.core.rest(arglist__7839);
return G__7836__delegate(x, ys);
});
G__7836.cljs$lang$arity$variadic = G__7836__delegate;
return G__7836;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.cljs$lang$arity$3(goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7840){
var fmt = cljs.core.first(arglist__7840);
var args = cljs.core.rest(arglist__7840);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_(name))
{name;
} else
{if(cljs.core.keyword_QMARK_(name))
{cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{}
}
return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",name], 0));
});
var symbol__2 = (function (ns,name){
return symbol.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_(name))
{return name;
} else
{if(cljs.core.symbol_QMARK_(name))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",name], 0));
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(function (){var xs__7843 = cljs.core.seq(x);
var ys__7844 = cljs.core.seq(y);
while(true){
if((xs__7843 == null))
{return (ys__7844 == null);
} else
{if((ys__7844 == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(xs__7843),cljs.core.first(ys__7844)))
{{
var G__7845 = cljs.core.next(xs__7843);
var G__7846 = cljs.core.next(ys__7844);
xs__7843 = G__7845;
ys__7844 = G__7846;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__7847_SHARP_,p2__7848_SHARP_){
return cljs.core.hash_combine(p1__7847_SHARP_,cljs.core.hash.cljs$lang$arity$2(p2__7848_SHARP_,false));
}),cljs.core.hash.cljs$lang$arity$2(cljs.core.first(coll),false),cljs.core.next(coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7852 = 0;
var s__7853 = cljs.core.seq(m);
while(true){
if(s__7853)
{var e__7854 = cljs.core.first(s__7853);
{
var G__7855 = ((h__7852 + (cljs.core.hash.cljs$lang$arity$1(cljs.core.key(e__7854)) ^ cljs.core.hash.cljs$lang$arity$1(cljs.core.val(e__7854)))) % 4503599627370496);
var G__7856 = cljs.core.next(s__7853);
h__7852 = G__7855;
s__7853 = G__7856;
continue;
}
} else
{return h__7852;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7860 = 0;
var s__7861 = cljs.core.seq(s);
while(true){
if(s__7861)
{var e__7862 = cljs.core.first(s__7861);
{
var G__7863 = ((h__7860 + cljs.core.hash.cljs$lang$arity$1(e__7862)) % 4503599627370496);
var G__7864 = cljs.core.next(s__7861);
h__7860 = G__7863;
s__7861 = G__7864;
continue;
}
} else
{return h__7860;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7885__7886 = cljs.core.seq(fn_map);
if(G__7885__7886)
{var G__7888__7890 = cljs.core.first(G__7885__7886);
var vec__7889__7891 = G__7888__7890;
var key_name__7892 = cljs.core.nth.cljs$lang$arity$3(vec__7889__7891,0,null);
var f__7893 = cljs.core.nth.cljs$lang$arity$3(vec__7889__7891,1,null);
var G__7885__7894 = G__7885__7886;
var G__7888__7895 = G__7888__7890;
var G__7885__7896 = G__7885__7894;
while(true){
var vec__7897__7898 = G__7888__7895;
var key_name__7899 = cljs.core.nth.cljs$lang$arity$3(vec__7897__7898,0,null);
var f__7900 = cljs.core.nth.cljs$lang$arity$3(vec__7897__7898,1,null);
var G__7885__7901 = G__7885__7896;
var str_name__7902 = cljs.core.name(key_name__7899);
(obj[str_name__7902] = f__7900);
var temp__3974__auto____7903 = cljs.core.next(G__7885__7901);
if(temp__3974__auto____7903)
{var G__7885__7904 = temp__3974__auto____7903;
{
var G__7905 = cljs.core.first(G__7885__7904);
var G__7906 = G__7885__7904;
G__7888__7895 = G__7905;
G__7885__7896 = G__7906;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7907 = this;
var h__2914__auto____7908 = this__7907.__hash;
if(!((h__2914__auto____7908 == null)))
{return h__2914__auto____7908;
} else
{var h__2914__auto____7909 = cljs.core.hash_coll(coll);
this__7907.__hash = h__2914__auto____7909;
return h__2914__auto____7909;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7910 = this;
if((this__7910.count === 1))
{return null;
} else
{return this__7910.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7911 = this;
return (new cljs.core.List(this__7911.meta,o,coll,(this__7911.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7912 = this;
var this__7913 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7913], 0));
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7914 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7915 = this;
return this__7915.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7916 = this;
return this__7916.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7917 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7918 = this;
return this__7918.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7919 = this;
if((this__7919.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7919.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7920 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7921 = this;
return (new cljs.core.List(meta,this__7921.first,this__7921.rest,this__7921.count,this__7921.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7922 = this;
return this__7922.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7923 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7924 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7925 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7926 = this;
return (new cljs.core.List(this__7926.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7927 = this;
var this__7928 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7928], 0));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7929 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7930 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7931 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7932 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7933 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7934 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7935 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7936 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7937 = this;
return this__7937.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7938 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7942__7943 = coll;
if(G__7942__7943)
{if((function (){var or__3824__auto____7944 = (G__7942__7943.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7944)
{return or__3824__auto____7944;
} else
{return G__7942__7943.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7942__7943.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__7942__7943);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__7942__7943);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$1(y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$2(y,z),x);
});
var list__4 = (function() { 
var G__7945__delegate = function (x,y,z,items){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse(items)),z),y),x);
};
var G__7945 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7945__delegate.call(this, x, y, z, items);
};
G__7945.cljs$lang$maxFixedArity = 3;
G__7945.cljs$lang$applyTo = (function (arglist__7946){
var x = cljs.core.first(arglist__7946);
var y = cljs.core.first(cljs.core.next(arglist__7946));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7946)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7946)));
return G__7945__delegate(x, y, z, items);
});
G__7945.cljs$lang$arity$variadic = G__7945__delegate;
return G__7945;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7947 = this;
var h__2914__auto____7948 = this__7947.__hash;
if(!((h__2914__auto____7948 == null)))
{return h__2914__auto____7948;
} else
{var h__2914__auto____7949 = cljs.core.hash_coll(coll);
this__7947.__hash = h__2914__auto____7949;
return h__2914__auto____7949;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7950 = this;
if((this__7950.rest == null))
{return null;
} else
{return cljs.core._seq(this__7950.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7951 = this;
return (new cljs.core.Cons(null,o,coll,this__7951.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7952 = this;
var this__7953 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7953], 0));
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7954 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7955 = this;
return this__7955.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7956 = this;
if((this__7956.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7956.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7957 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7958 = this;
return (new cljs.core.Cons(meta,this__7958.first,this__7958.rest,this__7958.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7959 = this;
return this__7959.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7960 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__7960.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7965 = (coll == null);
if(or__3824__auto____7965)
{return or__3824__auto____7965;
} else
{var G__7966__7967 = coll;
if(G__7966__7967)
{if((function (){var or__3824__auto____7968 = (G__7966__7967.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7968)
{return or__3824__auto____7968;
} else
{return G__7966__7967.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7966__7967.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7966__7967);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7966__7967);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7972__7973 = x;
if(G__7972__7973)
{if((function (){var or__3824__auto____7974 = (G__7972__7973.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7974)
{return or__3824__auto____7974;
} else
{return G__7972__7973.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7972__7973.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IList,G__7972__7973);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IList,G__7972__7973);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7975 = null;
var G__7975__2 = (function (string,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(string,f);
});
var G__7975__3 = (function (string,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(string,f,start);
});
G__7975 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7975__2.call(this,string,f);
case 3:
return G__7975__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7975;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7976 = null;
var G__7976__2 = (function (string,k){
return cljs.core._nth.cljs$lang$arity$2(string,k);
});
var G__7976__3 = (function (string,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(string,k,not_found);
});
G__7976 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7976__2.call(this,string,k);
case 3:
return G__7976__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7976;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7977 = null;
var G__7977__2 = (function (string,n){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7977__3 = (function (string,n,not_found){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7977 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7977__2.call(this,string,n);
case 3:
return G__7977__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7977;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.cljs$lang$arity$2(string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7989 = null;
var G__7989__2 = (function (this_sym7980,coll){
var this__7982 = this;
var this_sym7980__7983 = this;
var ___7984 = this_sym7980__7983;
if((coll == null))
{return null;
} else
{var strobj__7985 = coll.strobj;
if((strobj__7985 == null))
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__7982.k,null);
} else
{return (strobj__7985[this__7982.k]);
}
}
});
var G__7989__3 = (function (this_sym7981,coll,not_found){
var this__7982 = this;
var this_sym7981__7986 = this;
var ___7987 = this_sym7981__7986;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__7982.k,not_found);
}
});
G__7989 = function(this_sym7981,coll,not_found){
switch(arguments.length){
case 2:
return G__7989__2.call(this,this_sym7981,coll);
case 3:
return G__7989__3.call(this,this_sym7981,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7989;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7978,args7979){
var this__7988 = this;
return this_sym7978.call.apply(this_sym7978,[this_sym7978].concat(args7979.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7998 = null;
var G__7998__2 = (function (this_sym7992,coll){
var this_sym7992__7994 = this;
var this__7995 = this_sym7992__7994;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__7995.toString(),null);
});
var G__7998__3 = (function (this_sym7993,coll,not_found){
var this_sym7993__7996 = this;
var this__7997 = this_sym7993__7996;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__7997.toString(),not_found);
});
G__7998 = function(this_sym7993,coll,not_found){
switch(arguments.length){
case 2:
return G__7998__2.call(this,this_sym7993,coll);
case 3:
return G__7998__3.call(this,this_sym7993,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7998;
})()
;
String.prototype.apply = (function (this_sym7990,args7991){
return this_sym7990.call.apply(this_sym7990,[this_sym7990].concat(args7991.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count(args) < 2))
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,null);
} else
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8000 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8000;
} else
{lazy_seq.x = (x__8000.cljs$lang$arity$0 ? x__8000.cljs$lang$arity$0() : x__8000.call(null));
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8001 = this;
var h__2914__auto____8002 = this__8001.__hash;
if(!((h__2914__auto____8002 == null)))
{return h__2914__auto____8002;
} else
{var h__2914__auto____8003 = cljs.core.hash_coll(coll);
this__8001.__hash = h__2914__auto____8003;
return h__2914__auto____8003;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8004 = this;
return cljs.core._seq(coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8005 = this;
return cljs.core.cons(o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8006 = this;
var this__8007 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8007], 0));
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8008 = this;
return cljs.core.seq(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8009 = this;
return cljs.core.first(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8010 = this;
return cljs.core.rest(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8011 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8012 = this;
return (new cljs.core.LazySeq(meta,this__8012.realized,this__8012.x,this__8012.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8013 = this;
return this__8013.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8014 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__8014.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8015 = this;
return this__8015.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8016 = this;
var ___8017 = this;
(this__8016.buf[this__8016.end] = o);
return this__8016.end = (this__8016.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8018 = this;
var ___8019 = this;
var ret__8020 = (new cljs.core.ArrayChunk(this__8018.buf,0,this__8018.end));
this__8018.buf = null;
return ret__8020;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.cljs$lang$arity$1(capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8021 = this;
return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(this__8021.arr[this__8021.off]),(this__8021.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8022 = this;
return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,this__8022.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8023 = this;
if((this__8023.off === this__8023.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8023.arr,(this__8023.off + 1),this__8023.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8024 = this;
return (this__8024.arr[(this__8024.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8025 = this;
if((function (){var and__3822__auto____8026 = (i >= 0);
if(and__3822__auto____8026)
{return (i < (this__8025.end - this__8025.off));
} else
{return and__3822__auto____8026;
}
})())
{return (this__8025.arr[(this__8025.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8027 = this;
return (this__8027.end - this__8027.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.cljs$lang$arity$3(arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.cljs$lang$arity$3(arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__8028 = this;
return cljs.core.cons(o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8029 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8030 = this;
return cljs.core._nth.cljs$lang$arity$2(this__8030.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8031 = this;
if((cljs.core._count(this__8031.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(this__8031.chunk),this__8031.more,this__8031.meta));
} else
{if((this__8031.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8031.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8032 = this;
if((this__8032.more == null))
{return null;
} else
{return this__8032.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8033 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8034 = this;
return (new cljs.core.ChunkedCons(this__8034.chunk,this__8034.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8035 = this;
return this__8035.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8036 = this;
return this__8036.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8037 = this;
if((this__8037.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8037.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__8041__8042 = s;
if(G__8041__8042)
{if(cljs.core.truth_((function (){var or__3824__auto____8043 = null;
if(cljs.core.truth_(or__3824__auto____8043))
{return or__3824__auto____8043;
} else
{return G__8041__8042.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8041__8042.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__8041__8042);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__8041__8042);
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8046 = [];
var s__8047 = s;
while(true){
if(cljs.core.seq(s__8047))
{ary__8046.push(cljs.core.first(s__8047));
{
var G__8048 = cljs.core.next(s__8047);
s__8047 = G__8048;
continue;
}
} else
{return ary__8046;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8052 = cljs.core.make_array.cljs$lang$arity$1(cljs.core.count(coll));
var i__8053 = 0;
var xs__8054 = cljs.core.seq(coll);
while(true){
if(xs__8054)
{(ret__8052[i__8053] = cljs.core.to_array(cljs.core.first(xs__8054)));
{
var G__8055 = (i__8053 + 1);
var G__8056 = cljs.core.next(xs__8054);
i__8053 = G__8055;
xs__8054 = G__8056;
continue;
}
} else
{}
break;
}
return ret__8052;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return long_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__8064 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__8065 = cljs.core.seq(init_val_or_seq);
var i__8066 = 0;
var s__8067 = s__8065;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8068 = s__8067;
if(and__3822__auto____8068)
{return (i__8066 < size);
} else
{return and__3822__auto____8068;
}
})()))
{(a__8064[i__8066] = cljs.core.first(s__8067));
{
var G__8071 = (i__8066 + 1);
var G__8072 = cljs.core.next(s__8067);
i__8066 = G__8071;
s__8067 = G__8072;
continue;
}
} else
{return a__8064;
}
break;
}
} else
{var n__3249__auto____8069 = size;
var i__8070 = 0;
while(true){
if((i__8070 < n__3249__auto____8069))
{(a__8064[i__8070] = init_val_or_seq);
{
var G__8073 = (i__8070 + 1);
i__8070 = G__8073;
continue;
}
} else
{}
break;
}
return a__8064;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return double_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__8081 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__8082 = cljs.core.seq(init_val_or_seq);
var i__8083 = 0;
var s__8084 = s__8082;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8085 = s__8084;
if(and__3822__auto____8085)
{return (i__8083 < size);
} else
{return and__3822__auto____8085;
}
})()))
{(a__8081[i__8083] = cljs.core.first(s__8084));
{
var G__8088 = (i__8083 + 1);
var G__8089 = cljs.core.next(s__8084);
i__8083 = G__8088;
s__8084 = G__8089;
continue;
}
} else
{return a__8081;
}
break;
}
} else
{var n__3249__auto____8086 = size;
var i__8087 = 0;
while(true){
if((i__8087 < n__3249__auto____8086))
{(a__8081[i__8087] = init_val_or_seq);
{
var G__8090 = (i__8087 + 1);
i__8087 = G__8090;
continue;
}
} else
{}
break;
}
return a__8081;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return object_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__8098 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__8099 = cljs.core.seq(init_val_or_seq);
var i__8100 = 0;
var s__8101 = s__8099;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8102 = s__8101;
if(and__3822__auto____8102)
{return (i__8100 < size);
} else
{return and__3822__auto____8102;
}
})()))
{(a__8098[i__8100] = cljs.core.first(s__8101));
{
var G__8105 = (i__8100 + 1);
var G__8106 = cljs.core.next(s__8101);
i__8100 = G__8105;
s__8101 = G__8106;
continue;
}
} else
{return a__8098;
}
break;
}
} else
{var n__3249__auto____8103 = size;
var i__8104 = 0;
while(true){
if((i__8104 < n__3249__auto____8103))
{(a__8098[i__8104] = init_val_or_seq);
{
var G__8107 = (i__8104 + 1);
i__8104 = G__8107;
continue;
}
} else
{}
break;
}
return a__8098;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__8112 = s;
var i__8113 = n;
var sum__8114 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8115 = (i__8113 > 0);
if(and__3822__auto____8115)
{return cljs.core.seq(s__8112);
} else
{return and__3822__auto____8115;
}
})()))
{{
var G__8116 = cljs.core.next(s__8112);
var G__8117 = (i__8113 - 1);
var G__8118 = (sum__8114 + 1);
s__8112 = G__8116;
i__8113 = G__8117;
sum__8114 = G__8118;
continue;
}
} else
{return sum__8114;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8123 = cljs.core.seq(x);
if(s__8123)
{if(cljs.core.chunked_seq_QMARK_(s__8123))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s__8123),concat.cljs$lang$arity$2(cljs.core.chunk_rest(s__8123),y));
} else
{return cljs.core.cons(cljs.core.first(s__8123),concat.cljs$lang$arity$2(cljs.core.rest(s__8123),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__8127__delegate = function (x,y,zs){
var cat__8126 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8125 = cljs.core.seq(xys);
if(xys__8125)
{if(cljs.core.chunked_seq_QMARK_(xys__8125))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__8125),cat(cljs.core.chunk_rest(xys__8125),zs));
} else
{return cljs.core.cons(cljs.core.first(xys__8125),cat(cljs.core.rest(xys__8125),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat(cljs.core.first(zs),cljs.core.next(zs));
} else
{return null;
}
}
}),null));
});
return (cat__8126.cljs$lang$arity$2 ? cat__8126.cljs$lang$arity$2(concat.cljs$lang$arity$2(x,y),zs) : cat__8126.call(null,concat.cljs$lang$arity$2(x,y),zs));
};
var G__8127 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8127__delegate.call(this, x, y, zs);
};
G__8127.cljs$lang$maxFixedArity = 2;
G__8127.cljs$lang$applyTo = (function (arglist__8128){
var x = cljs.core.first(arglist__8128);
var y = cljs.core.first(cljs.core.next(arglist__8128));
var zs = cljs.core.rest(cljs.core.next(arglist__8128));
return G__8127__delegate(x, y, zs);
});
G__8127.cljs$lang$arity$variadic = G__8127__delegate;
return G__8127;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__8129__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__8129 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8129__delegate.call(this, a, b, c, d, more);
};
G__8129.cljs$lang$maxFixedArity = 4;
G__8129.cljs$lang$applyTo = (function (arglist__8130){
var a = cljs.core.first(arglist__8130);
var b = cljs.core.first(cljs.core.next(arglist__8130));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8130)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8130))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8130))));
return G__8129__delegate(a, b, c, d, more);
});
G__8129.cljs$lang$arity$variadic = G__8129__delegate;
return G__8129;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__8172 = cljs.core.seq(args);
if((argc === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var a__8173 = cljs.core._first(args__8172);
var args__8174 = cljs.core._rest(args__8172);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8173);
} else
{return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a__8173) : f.call(null,a__8173));
}
} else
{var b__8175 = cljs.core._first(args__8174);
var args__8176 = cljs.core._rest(args__8174);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8173,b__8175);
} else
{return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a__8173,b__8175) : f.call(null,a__8173,b__8175));
}
} else
{var c__8177 = cljs.core._first(args__8176);
var args__8178 = cljs.core._rest(args__8176);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8173,b__8175,c__8177);
} else
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a__8173,b__8175,c__8177) : f.call(null,a__8173,b__8175,c__8177));
}
} else
{var d__8179 = cljs.core._first(args__8178);
var args__8180 = cljs.core._rest(args__8178);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8173,b__8175,c__8177,d__8179);
} else
{return (f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a__8173,b__8175,c__8177,d__8179) : f.call(null,a__8173,b__8175,c__8177,d__8179));
}
} else
{var e__8181 = cljs.core._first(args__8180);
var args__8182 = cljs.core._rest(args__8180);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8173,b__8175,c__8177,d__8179,e__8181);
} else
{return (f.cljs$lang$arity$5 ? f.cljs$lang$arity$5(a__8173,b__8175,c__8177,d__8179,e__8181) : f.call(null,a__8173,b__8175,c__8177,d__8179,e__8181));
}
} else
{var f__8183 = cljs.core._first(args__8182);
var args__8184 = cljs.core._rest(args__8182);
if((argc === 6))
{if(f__8183.cljs$lang$arity$6)
{return f__8183.cljs$lang$arity$6(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183);
} else
{return (f__8183.cljs$lang$arity$6 ? f__8183.cljs$lang$arity$6(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183));
}
} else
{var g__8185 = cljs.core._first(args__8184);
var args__8186 = cljs.core._rest(args__8184);
if((argc === 7))
{if(f__8183.cljs$lang$arity$7)
{return f__8183.cljs$lang$arity$7(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185);
} else
{return (f__8183.cljs$lang$arity$7 ? f__8183.cljs$lang$arity$7(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185));
}
} else
{var h__8187 = cljs.core._first(args__8186);
var args__8188 = cljs.core._rest(args__8186);
if((argc === 8))
{if(f__8183.cljs$lang$arity$8)
{return f__8183.cljs$lang$arity$8(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187);
} else
{return (f__8183.cljs$lang$arity$8 ? f__8183.cljs$lang$arity$8(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187));
}
} else
{var i__8189 = cljs.core._first(args__8188);
var args__8190 = cljs.core._rest(args__8188);
if((argc === 9))
{if(f__8183.cljs$lang$arity$9)
{return f__8183.cljs$lang$arity$9(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189);
} else
{return (f__8183.cljs$lang$arity$9 ? f__8183.cljs$lang$arity$9(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189));
}
} else
{var j__8191 = cljs.core._first(args__8190);
var args__8192 = cljs.core._rest(args__8190);
if((argc === 10))
{if(f__8183.cljs$lang$arity$10)
{return f__8183.cljs$lang$arity$10(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191);
} else
{return (f__8183.cljs$lang$arity$10 ? f__8183.cljs$lang$arity$10(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191));
}
} else
{var k__8193 = cljs.core._first(args__8192);
var args__8194 = cljs.core._rest(args__8192);
if((argc === 11))
{if(f__8183.cljs$lang$arity$11)
{return f__8183.cljs$lang$arity$11(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193);
} else
{return (f__8183.cljs$lang$arity$11 ? f__8183.cljs$lang$arity$11(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193));
}
} else
{var l__8195 = cljs.core._first(args__8194);
var args__8196 = cljs.core._rest(args__8194);
if((argc === 12))
{if(f__8183.cljs$lang$arity$12)
{return f__8183.cljs$lang$arity$12(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195);
} else
{return (f__8183.cljs$lang$arity$12 ? f__8183.cljs$lang$arity$12(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195));
}
} else
{var m__8197 = cljs.core._first(args__8196);
var args__8198 = cljs.core._rest(args__8196);
if((argc === 13))
{if(f__8183.cljs$lang$arity$13)
{return f__8183.cljs$lang$arity$13(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197);
} else
{return (f__8183.cljs$lang$arity$13 ? f__8183.cljs$lang$arity$13(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197));
}
} else
{var n__8199 = cljs.core._first(args__8198);
var args__8200 = cljs.core._rest(args__8198);
if((argc === 14))
{if(f__8183.cljs$lang$arity$14)
{return f__8183.cljs$lang$arity$14(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199);
} else
{return (f__8183.cljs$lang$arity$14 ? f__8183.cljs$lang$arity$14(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199));
}
} else
{var o__8201 = cljs.core._first(args__8200);
var args__8202 = cljs.core._rest(args__8200);
if((argc === 15))
{if(f__8183.cljs$lang$arity$15)
{return f__8183.cljs$lang$arity$15(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201);
} else
{return (f__8183.cljs$lang$arity$15 ? f__8183.cljs$lang$arity$15(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201));
}
} else
{var p__8203 = cljs.core._first(args__8202);
var args__8204 = cljs.core._rest(args__8202);
if((argc === 16))
{if(f__8183.cljs$lang$arity$16)
{return f__8183.cljs$lang$arity$16(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203);
} else
{return (f__8183.cljs$lang$arity$16 ? f__8183.cljs$lang$arity$16(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203));
}
} else
{var q__8205 = cljs.core._first(args__8204);
var args__8206 = cljs.core._rest(args__8204);
if((argc === 17))
{if(f__8183.cljs$lang$arity$17)
{return f__8183.cljs$lang$arity$17(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205);
} else
{return (f__8183.cljs$lang$arity$17 ? f__8183.cljs$lang$arity$17(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205));
}
} else
{var r__8207 = cljs.core._first(args__8206);
var args__8208 = cljs.core._rest(args__8206);
if((argc === 18))
{if(f__8183.cljs$lang$arity$18)
{return f__8183.cljs$lang$arity$18(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205,r__8207);
} else
{return (f__8183.cljs$lang$arity$18 ? f__8183.cljs$lang$arity$18(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205,r__8207) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205,r__8207));
}
} else
{var s__8209 = cljs.core._first(args__8208);
var args__8210 = cljs.core._rest(args__8208);
if((argc === 19))
{if(f__8183.cljs$lang$arity$19)
{return f__8183.cljs$lang$arity$19(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205,r__8207,s__8209);
} else
{return (f__8183.cljs$lang$arity$19 ? f__8183.cljs$lang$arity$19(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205,r__8207,s__8209) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205,r__8207,s__8209));
}
} else
{var t__8211 = cljs.core._first(args__8210);
var args__8212 = cljs.core._rest(args__8210);
if((argc === 20))
{if(f__8183.cljs$lang$arity$20)
{return f__8183.cljs$lang$arity$20(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205,r__8207,s__8209,t__8211);
} else
{return (f__8183.cljs$lang$arity$20 ? f__8183.cljs$lang$arity$20(a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205,r__8207,s__8209,t__8211) : f__8183.call(null,a__8173,b__8175,c__8177,d__8179,e__8181,f__8183,g__8185,h__8187,i__8189,j__8191,k__8193,l__8195,m__8197,n__8199,o__8201,p__8203,q__8205,r__8207,s__8209,t__8211));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__8227 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8228 = cljs.core.bounded_count(args,(fixed_arity__8227 + 1));
if((bc__8228 <= fixed_arity__8227))
{return cljs.core.apply_to(f,bc__8228,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8229 = cljs.core.list_STAR_.cljs$lang$arity$2(x,args);
var fixed_arity__8230 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8231 = cljs.core.bounded_count(arglist__8229,(fixed_arity__8230 + 1));
if((bc__8231 <= fixed_arity__8230))
{return cljs.core.apply_to(f,bc__8231,arglist__8229);
} else
{return f.cljs$lang$applyTo(arglist__8229);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8229));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8232 = cljs.core.list_STAR_.cljs$lang$arity$3(x,y,args);
var fixed_arity__8233 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8234 = cljs.core.bounded_count(arglist__8232,(fixed_arity__8233 + 1));
if((bc__8234 <= fixed_arity__8233))
{return cljs.core.apply_to(f,bc__8234,arglist__8232);
} else
{return f.cljs$lang$applyTo(arglist__8232);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8232));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8235 = cljs.core.list_STAR_.cljs$lang$arity$4(x,y,z,args);
var fixed_arity__8236 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8237 = cljs.core.bounded_count(arglist__8235,(fixed_arity__8236 + 1));
if((bc__8237 <= fixed_arity__8236))
{return cljs.core.apply_to(f,bc__8237,arglist__8235);
} else
{return f.cljs$lang$applyTo(arglist__8235);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8235));
}
});
var apply__6 = (function() { 
var G__8241__delegate = function (f,a,b,c,d,args){
var arglist__8238 = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity__8239 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8240 = cljs.core.bounded_count(arglist__8238,(fixed_arity__8239 + 1));
if((bc__8240 <= fixed_arity__8239))
{return cljs.core.apply_to(f,bc__8240,arglist__8238);
} else
{return f.cljs$lang$applyTo(arglist__8238);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8238));
}
};
var G__8241 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8241__delegate.call(this, f, a, b, c, d, args);
};
G__8241.cljs$lang$maxFixedArity = 5;
G__8241.cljs$lang$applyTo = (function (arglist__8242){
var f = cljs.core.first(arglist__8242);
var a = cljs.core.first(cljs.core.next(arglist__8242));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8242)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8242))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8242)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8242)))));
return G__8241__delegate(f, a, b, c, d, args);
});
G__8241.cljs$lang$arity$variadic = G__8241__delegate;
return G__8241;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$lang$arity$3(f,cljs.core.meta(obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__8243){
var obj = cljs.core.first(arglist__8243);
var f = cljs.core.first(cljs.core.next(arglist__8243));
var args = cljs.core.rest(cljs.core.next(arglist__8243));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__8244__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(cljs.core._EQ_,x,y,more));
};
var G__8244 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8244__delegate.call(this, x, y, more);
};
G__8244.cljs$lang$maxFixedArity = 2;
G__8244.cljs$lang$applyTo = (function (arglist__8245){
var x = cljs.core.first(arglist__8245);
var y = cljs.core.first(cljs.core.next(arglist__8245));
var more = cljs.core.rest(cljs.core.next(arglist__8245));
return G__8244__delegate(x, y, more);
});
G__8244.cljs$lang$arity$variadic = G__8244__delegate;
return G__8244;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)))))
{{
var G__8246 = pred;
var G__8247 = cljs.core.next(coll);
pred = G__8246;
coll = G__8247;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll))
{var or__3824__auto____8249 = (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)));
if(cljs.core.truth_(or__3824__auto____8249))
{return or__3824__auto____8249;
} else
{{
var G__8250 = pred;
var G__8251 = cljs.core.next(coll);
pred = G__8250;
coll = G__8251;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__8252 = null;
var G__8252__0 = (function (){
return cljs.core.not((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
});
var G__8252__1 = (function (x){
return cljs.core.not((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
});
var G__8252__2 = (function (x,y){
return cljs.core.not((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)));
});
var G__8252__3 = (function() { 
var G__8253__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(f,x,y,zs));
};
var G__8253 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8253__delegate.call(this, x, y, zs);
};
G__8253.cljs$lang$maxFixedArity = 2;
G__8253.cljs$lang$applyTo = (function (arglist__8254){
var x = cljs.core.first(arglist__8254);
var y = cljs.core.first(cljs.core.next(arglist__8254));
var zs = cljs.core.rest(cljs.core.next(arglist__8254));
return G__8253__delegate(x, y, zs);
});
G__8253.cljs$lang$arity$variadic = G__8253__delegate;
return G__8253;
})()
;
G__8252 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8252__0.call(this);
case 1:
return G__8252__1.call(this,x);
case 2:
return G__8252__2.call(this,x,y);
default:
return G__8252__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8252.cljs$lang$maxFixedArity = 2;
G__8252.cljs$lang$applyTo = G__8252__3.cljs$lang$applyTo;
return G__8252;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8255__delegate = function (args){
return x;
};
var G__8255 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8255__delegate.call(this, args);
};
G__8255.cljs$lang$maxFixedArity = 0;
G__8255.cljs$lang$applyTo = (function (arglist__8256){
var args = cljs.core.seq(arglist__8256);;
return G__8255__delegate(args);
});
G__8255.cljs$lang$arity$variadic = G__8255__delegate;
return G__8255;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__8263 = null;
var G__8263__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))) : f.call(null,(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))));
});
var G__8263__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))));
});
var G__8263__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))) : f.call(null,(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))));
});
var G__8263__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))) : f.call(null,(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))));
});
var G__8263__4 = (function() { 
var G__8264__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)) : f.call(null,cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)));
};
var G__8264 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8264__delegate.call(this, x, y, z, args);
};
G__8264.cljs$lang$maxFixedArity = 3;
G__8264.cljs$lang$applyTo = (function (arglist__8265){
var x = cljs.core.first(arglist__8265);
var y = cljs.core.first(cljs.core.next(arglist__8265));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8265)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8265)));
return G__8264__delegate(x, y, z, args);
});
G__8264.cljs$lang$arity$variadic = G__8264__delegate;
return G__8264;
})()
;
G__8263 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8263__0.call(this);
case 1:
return G__8263__1.call(this,x);
case 2:
return G__8263__2.call(this,x,y);
case 3:
return G__8263__3.call(this,x,y,z);
default:
return G__8263__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8263.cljs$lang$maxFixedArity = 3;
G__8263.cljs$lang$applyTo = G__8263__4.cljs$lang$applyTo;
return G__8263;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8266 = null;
var G__8266__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))));
});
var G__8266__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))));
});
var G__8266__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))));
});
var G__8266__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))));
});
var G__8266__4 = (function() { 
var G__8267__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))));
};
var G__8267 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8267__delegate.call(this, x, y, z, args);
};
G__8267.cljs$lang$maxFixedArity = 3;
G__8267.cljs$lang$applyTo = (function (arglist__8268){
var x = cljs.core.first(arglist__8268);
var y = cljs.core.first(cljs.core.next(arglist__8268));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8268)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8268)));
return G__8267__delegate(x, y, z, args);
});
G__8267.cljs$lang$arity$variadic = G__8267__delegate;
return G__8267;
})()
;
G__8266 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8266__0.call(this);
case 1:
return G__8266__1.call(this,x);
case 2:
return G__8266__2.call(this,x,y);
case 3:
return G__8266__3.call(this,x,y,z);
default:
return G__8266__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8266.cljs$lang$maxFixedArity = 3;
G__8266.cljs$lang$applyTo = G__8266__4.cljs$lang$applyTo;
return G__8266;
})()
});
var comp__4 = (function() { 
var G__8269__delegate = function (f1,f2,f3,fs){
var fs__8260 = cljs.core.reverse(cljs.core.list_STAR_.cljs$lang$arity$4(f1,f2,f3,fs));
return (function() { 
var G__8270__delegate = function (args){
var ret__8261 = cljs.core.apply.cljs$lang$arity$2(cljs.core.first(fs__8260),args);
var fs__8262 = cljs.core.next(fs__8260);
while(true){
if(fs__8262)
{{
var G__8271 = cljs.core.first(fs__8262).call(null,ret__8261);
var G__8272 = cljs.core.next(fs__8262);
ret__8261 = G__8271;
fs__8262 = G__8272;
continue;
}
} else
{return ret__8261;
}
break;
}
};
var G__8270 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8270__delegate.call(this, args);
};
G__8270.cljs$lang$maxFixedArity = 0;
G__8270.cljs$lang$applyTo = (function (arglist__8273){
var args = cljs.core.seq(arglist__8273);;
return G__8270__delegate(args);
});
G__8270.cljs$lang$arity$variadic = G__8270__delegate;
return G__8270;
})()
;
};
var G__8269 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8269__delegate.call(this, f1, f2, f3, fs);
};
G__8269.cljs$lang$maxFixedArity = 3;
G__8269.cljs$lang$applyTo = (function (arglist__8274){
var f1 = cljs.core.first(arglist__8274);
var f2 = cljs.core.first(cljs.core.next(arglist__8274));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8274)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8274)));
return G__8269__delegate(f1, f2, f3, fs);
});
G__8269.cljs$lang$arity$variadic = G__8269__delegate;
return G__8269;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__8275__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$3(f,arg1,args);
};
var G__8275 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8275__delegate.call(this, args);
};
G__8275.cljs$lang$maxFixedArity = 0;
G__8275.cljs$lang$applyTo = (function (arglist__8276){
var args = cljs.core.seq(arglist__8276);;
return G__8275__delegate(args);
});
G__8275.cljs$lang$arity$variadic = G__8275__delegate;
return G__8275;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8277__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$4(f,arg1,arg2,args);
};
var G__8277 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8277__delegate.call(this, args);
};
G__8277.cljs$lang$maxFixedArity = 0;
G__8277.cljs$lang$applyTo = (function (arglist__8278){
var args = cljs.core.seq(arglist__8278);;
return G__8277__delegate(args);
});
G__8277.cljs$lang$arity$variadic = G__8277__delegate;
return G__8277;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8279__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,args);
};
var G__8279 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8279__delegate.call(this, args);
};
G__8279.cljs$lang$maxFixedArity = 0;
G__8279.cljs$lang$applyTo = (function (arglist__8280){
var args = cljs.core.seq(arglist__8280);;
return G__8279__delegate(args);
});
G__8279.cljs$lang$arity$variadic = G__8279__delegate;
return G__8279;
})()
;
});
var partial__5 = (function() { 
var G__8281__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8282__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$lang$arity$2(more,args));
};
var G__8282 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8282__delegate.call(this, args);
};
G__8282.cljs$lang$maxFixedArity = 0;
G__8282.cljs$lang$applyTo = (function (arglist__8283){
var args = cljs.core.seq(arglist__8283);;
return G__8282__delegate(args);
});
G__8282.cljs$lang$arity$variadic = G__8282__delegate;
return G__8282;
})()
;
};
var G__8281 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8281__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8281.cljs$lang$maxFixedArity = 4;
G__8281.cljs$lang$applyTo = (function (arglist__8284){
var f = cljs.core.first(arglist__8284);
var arg1 = cljs.core.first(cljs.core.next(arglist__8284));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8284)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8284))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8284))));
return G__8281__delegate(f, arg1, arg2, arg3, more);
});
G__8281.cljs$lang$arity$variadic = G__8281__delegate;
return G__8281;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__8285 = null;
var G__8285__1 = (function (a){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((((a == null))?x:a)) : f.call(null,(((a == null))?x:a)));
});
var G__8285__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),b) : f.call(null,(((a == null))?x:a),b));
});
var G__8285__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),b,c) : f.call(null,(((a == null))?x:a),b,c));
});
var G__8285__4 = (function() { 
var G__8286__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__8286 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8286__delegate.call(this, a, b, c, ds);
};
G__8286.cljs$lang$maxFixedArity = 3;
G__8286.cljs$lang$applyTo = (function (arglist__8287){
var a = cljs.core.first(arglist__8287);
var b = cljs.core.first(cljs.core.next(arglist__8287));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8287)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8287)));
return G__8286__delegate(a, b, c, ds);
});
G__8286.cljs$lang$arity$variadic = G__8286__delegate;
return G__8286;
})()
;
G__8285 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8285__1.call(this,a);
case 2:
return G__8285__2.call(this,a,b);
case 3:
return G__8285__3.call(this,a,b,c);
default:
return G__8285__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8285.cljs$lang$maxFixedArity = 3;
G__8285.cljs$lang$applyTo = G__8285__4.cljs$lang$applyTo;
return G__8285;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8288 = null;
var G__8288__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__8288__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),c) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),c));
});
var G__8288__4 = (function() { 
var G__8289__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8289 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8289__delegate.call(this, a, b, c, ds);
};
G__8289.cljs$lang$maxFixedArity = 3;
G__8289.cljs$lang$applyTo = (function (arglist__8290){
var a = cljs.core.first(arglist__8290);
var b = cljs.core.first(cljs.core.next(arglist__8290));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8290)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8290)));
return G__8289__delegate(a, b, c, ds);
});
G__8289.cljs$lang$arity$variadic = G__8289__delegate;
return G__8289;
})()
;
G__8288 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8288__2.call(this,a,b);
case 3:
return G__8288__3.call(this,a,b,c);
default:
return G__8288__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8288.cljs$lang$maxFixedArity = 3;
G__8288.cljs$lang$applyTo = G__8288__4.cljs$lang$applyTo;
return G__8288;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8291 = null;
var G__8291__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__8291__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)));
});
var G__8291__4 = (function() { 
var G__8292__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8292 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8292__delegate.call(this, a, b, c, ds);
};
G__8292.cljs$lang$maxFixedArity = 3;
G__8292.cljs$lang$applyTo = (function (arglist__8293){
var a = cljs.core.first(arglist__8293);
var b = cljs.core.first(cljs.core.next(arglist__8293));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8293)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8293)));
return G__8292__delegate(a, b, c, ds);
});
G__8292.cljs$lang$arity$variadic = G__8292__delegate;
return G__8292;
})()
;
G__8291 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8291__2.call(this,a,b);
case 3:
return G__8291__3.call(this,a,b,c);
default:
return G__8291__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8291.cljs$lang$maxFixedArity = 3;
G__8291.cljs$lang$applyTo = G__8291__4.cljs$lang$applyTo;
return G__8291;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8309 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8317 = cljs.core.seq(coll);
if(temp__3974__auto____8317)
{var s__8318 = temp__3974__auto____8317;
if(cljs.core.chunked_seq_QMARK_(s__8318))
{var c__8319 = cljs.core.chunk_first(s__8318);
var size__8320 = cljs.core.count(c__8319);
var b__8321 = cljs.core.chunk_buffer(size__8320);
var n__3249__auto____8322 = size__8320;
var i__8323 = 0;
while(true){
if((i__8323 < n__3249__auto____8322))
{cljs.core.chunk_append(b__8321,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__8323),cljs.core._nth.cljs$lang$arity$2(c__8319,i__8323)) : f.call(null,(idx + i__8323),cljs.core._nth.cljs$lang$arity$2(c__8319,i__8323))));
{
var G__8324 = (i__8323 + 1);
i__8323 = G__8324;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8321),mapi((idx + size__8320),cljs.core.chunk_rest(s__8318)));
} else
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__8318)) : f.call(null,idx,cljs.core.first(s__8318))),mapi((idx + 1),cljs.core.rest(s__8318)));
}
} else
{return null;
}
}),null));
});
return (mapi__8309.cljs$lang$arity$2 ? mapi__8309.cljs$lang$arity$2(0,coll) : mapi__8309.call(null,0,coll));
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8334 = cljs.core.seq(coll);
if(temp__3974__auto____8334)
{var s__8335 = temp__3974__auto____8334;
if(cljs.core.chunked_seq_QMARK_(s__8335))
{var c__8336 = cljs.core.chunk_first(s__8335);
var size__8337 = cljs.core.count(c__8336);
var b__8338 = cljs.core.chunk_buffer(size__8337);
var n__3249__auto____8339 = size__8337;
var i__8340 = 0;
while(true){
if((i__8340 < n__3249__auto____8339))
{var x__8341 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__8336,i__8340)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__8336,i__8340)));
if((x__8341 == null))
{} else
{cljs.core.chunk_append(b__8338,x__8341);
}
{
var G__8343 = (i__8340 + 1);
i__8340 = G__8343;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8338),keep(f,cljs.core.chunk_rest(s__8335)));
} else
{var x__8342 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__8335)) : f.call(null,cljs.core.first(s__8335)));
if((x__8342 == null))
{return keep(f,cljs.core.rest(s__8335));
} else
{return cljs.core.cons(x__8342,keep(f,cljs.core.rest(s__8335)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8369 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8379 = cljs.core.seq(coll);
if(temp__3974__auto____8379)
{var s__8380 = temp__3974__auto____8379;
if(cljs.core.chunked_seq_QMARK_(s__8380))
{var c__8381 = cljs.core.chunk_first(s__8380);
var size__8382 = cljs.core.count(c__8381);
var b__8383 = cljs.core.chunk_buffer(size__8382);
var n__3249__auto____8384 = size__8382;
var i__8385 = 0;
while(true){
if((i__8385 < n__3249__auto____8384))
{var x__8386 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__8385),cljs.core._nth.cljs$lang$arity$2(c__8381,i__8385)) : f.call(null,(idx + i__8385),cljs.core._nth.cljs$lang$arity$2(c__8381,i__8385)));
if((x__8386 == null))
{} else
{cljs.core.chunk_append(b__8383,x__8386);
}
{
var G__8388 = (i__8385 + 1);
i__8385 = G__8388;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8383),keepi((idx + size__8382),cljs.core.chunk_rest(s__8380)));
} else
{var x__8387 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__8380)) : f.call(null,idx,cljs.core.first(s__8380)));
if((x__8387 == null))
{return keepi((idx + 1),cljs.core.rest(s__8380));
} else
{return cljs.core.cons(x__8387,keepi((idx + 1),cljs.core.rest(s__8380)));
}
}
} else
{return null;
}
}),null));
});
return (keepi__8369.cljs$lang$arity$2 ? keepi__8369.cljs$lang$arity$2(0,coll) : keepi__8369.call(null,0,coll));
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x)));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3822__auto____8474 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3822__auto____8474))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
} else
{return and__3822__auto____8474;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3822__auto____8475 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3822__auto____8475))
{var and__3822__auto____8476 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(and__3822__auto____8476))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
} else
{return and__3822__auto____8476;
}
} else
{return and__3822__auto____8475;
}
})());
});
var ep1__4 = (function() { 
var G__8545__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____8477 = ep1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____8477))
{return cljs.core.every_QMARK_(p,args);
} else
{return and__3822__auto____8477;
}
})());
};
var G__8545 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8545__delegate.call(this, x, y, z, args);
};
G__8545.cljs$lang$maxFixedArity = 3;
G__8545.cljs$lang$applyTo = (function (arglist__8546){
var x = cljs.core.first(arglist__8546);
var y = cljs.core.first(cljs.core.next(arglist__8546));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8546)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8546)));
return G__8545__delegate(x, y, z, args);
});
G__8545.cljs$lang$arity$variadic = G__8545__delegate;
return G__8545;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3822__auto____8489 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8489))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
} else
{return and__3822__auto____8489;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3822__auto____8490 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8490))
{var and__3822__auto____8491 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____8491))
{var and__3822__auto____8492 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8492))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
} else
{return and__3822__auto____8492;
}
} else
{return and__3822__auto____8491;
}
} else
{return and__3822__auto____8490;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3822__auto____8493 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8493))
{var and__3822__auto____8494 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____8494))
{var and__3822__auto____8495 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3822__auto____8495))
{var and__3822__auto____8496 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8496))
{var and__3822__auto____8497 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3822__auto____8497))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
} else
{return and__3822__auto____8497;
}
} else
{return and__3822__auto____8496;
}
} else
{return and__3822__auto____8495;
}
} else
{return and__3822__auto____8494;
}
} else
{return and__3822__auto____8493;
}
})());
});
var ep2__4 = (function() { 
var G__8547__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____8498 = ep2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____8498))
{return cljs.core.every_QMARK_((function (p1__8344_SHARP_){
var and__3822__auto____8499 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8344_SHARP_) : p1.call(null,p1__8344_SHARP_));
if(cljs.core.truth_(and__3822__auto____8499))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8344_SHARP_) : p2.call(null,p1__8344_SHARP_));
} else
{return and__3822__auto____8499;
}
}),args);
} else
{return and__3822__auto____8498;
}
})());
};
var G__8547 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8547__delegate.call(this, x, y, z, args);
};
G__8547.cljs$lang$maxFixedArity = 3;
G__8547.cljs$lang$applyTo = (function (arglist__8548){
var x = cljs.core.first(arglist__8548);
var y = cljs.core.first(cljs.core.next(arglist__8548));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8548)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8548)));
return G__8547__delegate(x, y, z, args);
});
G__8547.cljs$lang$arity$variadic = G__8547__delegate;
return G__8547;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3822__auto____8518 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8518))
{var and__3822__auto____8519 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8519))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
} else
{return and__3822__auto____8519;
}
} else
{return and__3822__auto____8518;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3822__auto____8520 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8520))
{var and__3822__auto____8521 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8521))
{var and__3822__auto____8522 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3822__auto____8522))
{var and__3822__auto____8523 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____8523))
{var and__3822__auto____8524 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3822__auto____8524))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
} else
{return and__3822__auto____8524;
}
} else
{return and__3822__auto____8523;
}
} else
{return and__3822__auto____8522;
}
} else
{return and__3822__auto____8521;
}
} else
{return and__3822__auto____8520;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3822__auto____8525 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8525))
{var and__3822__auto____8526 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8526))
{var and__3822__auto____8527 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3822__auto____8527))
{var and__3822__auto____8528 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____8528))
{var and__3822__auto____8529 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3822__auto____8529))
{var and__3822__auto____8530 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(and__3822__auto____8530))
{var and__3822__auto____8531 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3822__auto____8531))
{var and__3822__auto____8532 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(and__3822__auto____8532))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
} else
{return and__3822__auto____8532;
}
} else
{return and__3822__auto____8531;
}
} else
{return and__3822__auto____8530;
}
} else
{return and__3822__auto____8529;
}
} else
{return and__3822__auto____8528;
}
} else
{return and__3822__auto____8527;
}
} else
{return and__3822__auto____8526;
}
} else
{return and__3822__auto____8525;
}
})());
});
var ep3__4 = (function() { 
var G__8549__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____8533 = ep3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____8533))
{return cljs.core.every_QMARK_((function (p1__8345_SHARP_){
var and__3822__auto____8534 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8345_SHARP_) : p1.call(null,p1__8345_SHARP_));
if(cljs.core.truth_(and__3822__auto____8534))
{var and__3822__auto____8535 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8345_SHARP_) : p2.call(null,p1__8345_SHARP_));
if(cljs.core.truth_(and__3822__auto____8535))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__8345_SHARP_) : p3.call(null,p1__8345_SHARP_));
} else
{return and__3822__auto____8535;
}
} else
{return and__3822__auto____8534;
}
}),args);
} else
{return and__3822__auto____8533;
}
})());
};
var G__8549 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8549__delegate.call(this, x, y, z, args);
};
G__8549.cljs$lang$maxFixedArity = 3;
G__8549.cljs$lang$applyTo = (function (arglist__8550){
var x = cljs.core.first(arglist__8550);
var y = cljs.core.first(cljs.core.next(arglist__8550));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8550)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8550)));
return G__8549__delegate(x, y, z, args);
});
G__8549.cljs$lang$arity$variadic = G__8549__delegate;
return G__8549;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__8551__delegate = function (p1,p2,p3,ps){
var ps__8536 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_((function (p1__8346_SHARP_){
return (p1__8346_SHARP_.cljs$lang$arity$1 ? p1__8346_SHARP_.cljs$lang$arity$1(x) : p1__8346_SHARP_.call(null,x));
}),ps__8536);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_((function (p1__8347_SHARP_){
var and__3822__auto____8541 = (p1__8347_SHARP_.cljs$lang$arity$1 ? p1__8347_SHARP_.cljs$lang$arity$1(x) : p1__8347_SHARP_.call(null,x));
if(cljs.core.truth_(and__3822__auto____8541))
{return (p1__8347_SHARP_.cljs$lang$arity$1 ? p1__8347_SHARP_.cljs$lang$arity$1(y) : p1__8347_SHARP_.call(null,y));
} else
{return and__3822__auto____8541;
}
}),ps__8536);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_((function (p1__8348_SHARP_){
var and__3822__auto____8542 = (p1__8348_SHARP_.cljs$lang$arity$1 ? p1__8348_SHARP_.cljs$lang$arity$1(x) : p1__8348_SHARP_.call(null,x));
if(cljs.core.truth_(and__3822__auto____8542))
{var and__3822__auto____8543 = (p1__8348_SHARP_.cljs$lang$arity$1 ? p1__8348_SHARP_.cljs$lang$arity$1(y) : p1__8348_SHARP_.call(null,y));
if(cljs.core.truth_(and__3822__auto____8543))
{return (p1__8348_SHARP_.cljs$lang$arity$1 ? p1__8348_SHARP_.cljs$lang$arity$1(z) : p1__8348_SHARP_.call(null,z));
} else
{return and__3822__auto____8543;
}
} else
{return and__3822__auto____8542;
}
}),ps__8536);
});
var epn__4 = (function() { 
var G__8552__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____8544 = epn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____8544))
{return cljs.core.every_QMARK_((function (p1__8349_SHARP_){
return cljs.core.every_QMARK_(p1__8349_SHARP_,args);
}),ps__8536);
} else
{return and__3822__auto____8544;
}
})());
};
var G__8552 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8552__delegate.call(this, x, y, z, args);
};
G__8552.cljs$lang$maxFixedArity = 3;
G__8552.cljs$lang$applyTo = (function (arglist__8553){
var x = cljs.core.first(arglist__8553);
var y = cljs.core.first(cljs.core.next(arglist__8553));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8553)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8553)));
return G__8552__delegate(x, y, z, args);
});
G__8552.cljs$lang$arity$variadic = G__8552__delegate;
return G__8552;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__8551 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8551__delegate.call(this, p1, p2, p3, ps);
};
G__8551.cljs$lang$maxFixedArity = 3;
G__8551.cljs$lang$applyTo = (function (arglist__8554){
var p1 = cljs.core.first(arglist__8554);
var p2 = cljs.core.first(cljs.core.next(arglist__8554));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8554)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8554)));
return G__8551__delegate(p1, p2, p3, ps);
});
G__8551.cljs$lang$arity$variadic = G__8551__delegate;
return G__8551;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
});
var sp1__2 = (function (x,y){
var or__3824__auto____8635 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3824__auto____8635))
{return or__3824__auto____8635;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8636 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3824__auto____8636))
{return or__3824__auto____8636;
} else
{var or__3824__auto____8637 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(or__3824__auto____8637))
{return or__3824__auto____8637;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
}
}
});
var sp1__4 = (function() { 
var G__8706__delegate = function (x,y,z,args){
var or__3824__auto____8638 = sp1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____8638))
{return or__3824__auto____8638;
} else
{return cljs.core.some(p,args);
}
};
var G__8706 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8706__delegate.call(this, x, y, z, args);
};
G__8706.cljs$lang$maxFixedArity = 3;
G__8706.cljs$lang$applyTo = (function (arglist__8707){
var x = cljs.core.first(arglist__8707);
var y = cljs.core.first(cljs.core.next(arglist__8707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8707)));
return G__8706__delegate(x, y, z, args);
});
G__8706.cljs$lang$arity$variadic = G__8706__delegate;
return G__8706;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____8650 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8650))
{return or__3824__auto____8650;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8651 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8651))
{return or__3824__auto____8651;
} else
{var or__3824__auto____8652 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____8652))
{return or__3824__auto____8652;
} else
{var or__3824__auto____8653 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8653))
{return or__3824__auto____8653;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8654 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8654))
{return or__3824__auto____8654;
} else
{var or__3824__auto____8655 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____8655))
{return or__3824__auto____8655;
} else
{var or__3824__auto____8656 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3824__auto____8656))
{return or__3824__auto____8656;
} else
{var or__3824__auto____8657 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8657))
{return or__3824__auto____8657;
} else
{var or__3824__auto____8658 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3824__auto____8658))
{return or__3824__auto____8658;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8708__delegate = function (x,y,z,args){
var or__3824__auto____8659 = sp2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____8659))
{return or__3824__auto____8659;
} else
{return cljs.core.some((function (p1__8389_SHARP_){
var or__3824__auto____8660 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8389_SHARP_) : p1.call(null,p1__8389_SHARP_));
if(cljs.core.truth_(or__3824__auto____8660))
{return or__3824__auto____8660;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8389_SHARP_) : p2.call(null,p1__8389_SHARP_));
}
}),args);
}
};
var G__8708 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8708__delegate.call(this, x, y, z, args);
};
G__8708.cljs$lang$maxFixedArity = 3;
G__8708.cljs$lang$applyTo = (function (arglist__8709){
var x = cljs.core.first(arglist__8709);
var y = cljs.core.first(cljs.core.next(arglist__8709));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8709)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8709)));
return G__8708__delegate(x, y, z, args);
});
G__8708.cljs$lang$arity$variadic = G__8708__delegate;
return G__8708;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____8679 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8679))
{return or__3824__auto____8679;
} else
{var or__3824__auto____8680 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8680))
{return or__3824__auto____8680;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8681 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8681))
{return or__3824__auto____8681;
} else
{var or__3824__auto____8682 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8682))
{return or__3824__auto____8682;
} else
{var or__3824__auto____8683 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3824__auto____8683))
{return or__3824__auto____8683;
} else
{var or__3824__auto____8684 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____8684))
{return or__3824__auto____8684;
} else
{var or__3824__auto____8685 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3824__auto____8685))
{return or__3824__auto____8685;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8686 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8686))
{return or__3824__auto____8686;
} else
{var or__3824__auto____8687 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8687))
{return or__3824__auto____8687;
} else
{var or__3824__auto____8688 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3824__auto____8688))
{return or__3824__auto____8688;
} else
{var or__3824__auto____8689 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____8689))
{return or__3824__auto____8689;
} else
{var or__3824__auto____8690 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3824__auto____8690))
{return or__3824__auto____8690;
} else
{var or__3824__auto____8691 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(or__3824__auto____8691))
{return or__3824__auto____8691;
} else
{var or__3824__auto____8692 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3824__auto____8692))
{return or__3824__auto____8692;
} else
{var or__3824__auto____8693 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(or__3824__auto____8693))
{return or__3824__auto____8693;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8710__delegate = function (x,y,z,args){
var or__3824__auto____8694 = sp3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____8694))
{return or__3824__auto____8694;
} else
{return cljs.core.some((function (p1__8390_SHARP_){
var or__3824__auto____8695 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8390_SHARP_) : p1.call(null,p1__8390_SHARP_));
if(cljs.core.truth_(or__3824__auto____8695))
{return or__3824__auto____8695;
} else
{var or__3824__auto____8696 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8390_SHARP_) : p2.call(null,p1__8390_SHARP_));
if(cljs.core.truth_(or__3824__auto____8696))
{return or__3824__auto____8696;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__8390_SHARP_) : p3.call(null,p1__8390_SHARP_));
}
}
}),args);
}
};
var G__8710 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8710__delegate.call(this, x, y, z, args);
};
G__8710.cljs$lang$maxFixedArity = 3;
G__8710.cljs$lang$applyTo = (function (arglist__8711){
var x = cljs.core.first(arglist__8711);
var y = cljs.core.first(cljs.core.next(arglist__8711));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8711)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8711)));
return G__8710__delegate(x, y, z, args);
});
G__8710.cljs$lang$arity$variadic = G__8710__delegate;
return G__8710;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8712__delegate = function (p1,p2,p3,ps){
var ps__8697 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some((function (p1__8391_SHARP_){
return (p1__8391_SHARP_.cljs$lang$arity$1 ? p1__8391_SHARP_.cljs$lang$arity$1(x) : p1__8391_SHARP_.call(null,x));
}),ps__8697);
});
var spn__2 = (function (x,y){
return cljs.core.some((function (p1__8392_SHARP_){
var or__3824__auto____8702 = (p1__8392_SHARP_.cljs$lang$arity$1 ? p1__8392_SHARP_.cljs$lang$arity$1(x) : p1__8392_SHARP_.call(null,x));
if(cljs.core.truth_(or__3824__auto____8702))
{return or__3824__auto____8702;
} else
{return (p1__8392_SHARP_.cljs$lang$arity$1 ? p1__8392_SHARP_.cljs$lang$arity$1(y) : p1__8392_SHARP_.call(null,y));
}
}),ps__8697);
});
var spn__3 = (function (x,y,z){
return cljs.core.some((function (p1__8393_SHARP_){
var or__3824__auto____8703 = (p1__8393_SHARP_.cljs$lang$arity$1 ? p1__8393_SHARP_.cljs$lang$arity$1(x) : p1__8393_SHARP_.call(null,x));
if(cljs.core.truth_(or__3824__auto____8703))
{return or__3824__auto____8703;
} else
{var or__3824__auto____8704 = (p1__8393_SHARP_.cljs$lang$arity$1 ? p1__8393_SHARP_.cljs$lang$arity$1(y) : p1__8393_SHARP_.call(null,y));
if(cljs.core.truth_(or__3824__auto____8704))
{return or__3824__auto____8704;
} else
{return (p1__8393_SHARP_.cljs$lang$arity$1 ? p1__8393_SHARP_.cljs$lang$arity$1(z) : p1__8393_SHARP_.call(null,z));
}
}
}),ps__8697);
});
var spn__4 = (function() { 
var G__8713__delegate = function (x,y,z,args){
var or__3824__auto____8705 = spn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____8705))
{return or__3824__auto____8705;
} else
{return cljs.core.some((function (p1__8394_SHARP_){
return cljs.core.some(p1__8394_SHARP_,args);
}),ps__8697);
}
};
var G__8713 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8713__delegate.call(this, x, y, z, args);
};
G__8713.cljs$lang$maxFixedArity = 3;
G__8713.cljs$lang$applyTo = (function (arglist__8714){
var x = cljs.core.first(arglist__8714);
var y = cljs.core.first(cljs.core.next(arglist__8714));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8714)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8714)));
return G__8713__delegate(x, y, z, args);
});
G__8713.cljs$lang$arity$variadic = G__8713__delegate;
return G__8713;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8712 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8712__delegate.call(this, p1, p2, p3, ps);
};
G__8712.cljs$lang$maxFixedArity = 3;
G__8712.cljs$lang$applyTo = (function (arglist__8715){
var p1 = cljs.core.first(arglist__8715);
var p2 = cljs.core.first(cljs.core.next(arglist__8715));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8715)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8715)));
return G__8712__delegate(p1, p2, p3, ps);
});
G__8712.cljs$lang$arity$variadic = G__8712__delegate;
return G__8712;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8734 = cljs.core.seq(coll);
if(temp__3974__auto____8734)
{var s__8735 = temp__3974__auto____8734;
if(cljs.core.chunked_seq_QMARK_(s__8735))
{var c__8736 = cljs.core.chunk_first(s__8735);
var size__8737 = cljs.core.count(c__8736);
var b__8738 = cljs.core.chunk_buffer(size__8737);
var n__3249__auto____8739 = size__8737;
var i__8740 = 0;
while(true){
if((i__8740 < n__3249__auto____8739))
{cljs.core.chunk_append(b__8738,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__8736,i__8740)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__8736,i__8740))));
{
var G__8752 = (i__8740 + 1);
i__8740 = G__8752;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8738),map.cljs$lang$arity$2(f,cljs.core.chunk_rest(s__8735)));
} else
{return cljs.core.cons((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__8735)) : f.call(null,cljs.core.first(s__8735))),map.cljs$lang$arity$2(f,cljs.core.rest(s__8735)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8741 = cljs.core.seq(c1);
var s2__8742 = cljs.core.seq(c2);
if((function (){var and__3822__auto____8743 = s1__8741;
if(and__3822__auto____8743)
{return s2__8742;
} else
{return and__3822__auto____8743;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core.first(s1__8741),cljs.core.first(s2__8742)) : f.call(null,cljs.core.first(s1__8741),cljs.core.first(s2__8742))),map.cljs$lang$arity$3(f,cljs.core.rest(s1__8741),cljs.core.rest(s2__8742)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8744 = cljs.core.seq(c1);
var s2__8745 = cljs.core.seq(c2);
var s3__8746 = cljs.core.seq(c3);
if((function (){var and__3822__auto____8747 = s1__8744;
if(and__3822__auto____8747)
{var and__3822__auto____8748 = s2__8745;
if(and__3822__auto____8748)
{return s3__8746;
} else
{return and__3822__auto____8748;
}
} else
{return and__3822__auto____8747;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(cljs.core.first(s1__8744),cljs.core.first(s2__8745),cljs.core.first(s3__8746)) : f.call(null,cljs.core.first(s1__8744),cljs.core.first(s2__8745),cljs.core.first(s3__8746))),map.cljs$lang$arity$4(f,cljs.core.rest(s1__8744),cljs.core.rest(s2__8745),cljs.core.rest(s3__8746)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8753__delegate = function (f,c1,c2,c3,colls){
var step__8751 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8750 = map.cljs$lang$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss__8750))
{return cljs.core.cons(map.cljs$lang$arity$2(cljs.core.first,ss__8750),step(map.cljs$lang$arity$2(cljs.core.rest,ss__8750)));
} else
{return null;
}
}),null));
});
return map.cljs$lang$arity$2((function (p1__8555_SHARP_){
return cljs.core.apply.cljs$lang$arity$2(f,p1__8555_SHARP_);
}),(step__8751.cljs$lang$arity$1 ? step__8751.cljs$lang$arity$1(cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))) : step__8751.call(null,cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0)))));
};
var G__8753 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8753__delegate.call(this, f, c1, c2, c3, colls);
};
G__8753.cljs$lang$maxFixedArity = 4;
G__8753.cljs$lang$applyTo = (function (arglist__8754){
var f = cljs.core.first(arglist__8754);
var c1 = cljs.core.first(cljs.core.next(arglist__8754));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8754)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8754))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8754))));
return G__8753__delegate(f, c1, c2, c3, colls);
});
G__8753.cljs$lang$arity$variadic = G__8753__delegate;
return G__8753;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____8757 = cljs.core.seq(coll);
if(temp__3974__auto____8757)
{var s__8758 = temp__3974__auto____8757;
return cljs.core.cons(cljs.core.first(s__8758),take((n - 1),cljs.core.rest(s__8758)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8764 = (function (n,coll){
while(true){
var s__8762 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3822__auto____8763 = (n > 0);
if(and__3822__auto____8763)
{return s__8762;
} else
{return and__3822__auto____8763;
}
})()))
{{
var G__8765 = (n - 1);
var G__8766 = cljs.core.rest(s__8762);
n = G__8765;
coll = G__8766;
continue;
}
} else
{return s__8762;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__8764.cljs$lang$arity$2 ? step__8764.cljs$lang$arity$2(n,coll) : step__8764.call(null,n,coll));
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$lang$arity$2(1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$lang$arity$3((function (x,_){
return x;
}),s,cljs.core.drop(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8769 = cljs.core.seq(coll);
var lead__8770 = cljs.core.seq(cljs.core.drop(n,coll));
while(true){
if(lead__8770)
{{
var G__8771 = cljs.core.next(s__8769);
var G__8772 = cljs.core.next(lead__8770);
s__8769 = G__8771;
lead__8770 = G__8772;
continue;
}
} else
{return s__8769;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8778 = (function (pred,coll){
while(true){
var s__8776 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3822__auto____8777 = s__8776;
if(and__3822__auto____8777)
{return (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__8776)) : pred.call(null,cljs.core.first(s__8776)));
} else
{return and__3822__auto____8777;
}
})()))
{{
var G__8779 = pred;
var G__8780 = cljs.core.rest(s__8776);
pred = G__8779;
coll = G__8780;
continue;
}
} else
{return s__8776;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__8778.cljs$lang$arity$2 ? step__8778.cljs$lang$arity$2(pred,coll) : step__8778.call(null,pred,coll));
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8783 = cljs.core.seq(coll);
if(temp__3974__auto____8783)
{var s__8784 = temp__3974__auto____8783;
return cljs.core.concat.cljs$lang$arity$2(s__8784,cycle(s__8784));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take(n,coll),cljs.core.drop(n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(x,repeat.cljs$lang$arity$1(x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take(n,repeat.cljs$lang$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take(n,cljs.core.repeat.cljs$lang$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),repeatedly.cljs$lang$arity$1(f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take(n,repeatedly.cljs$lang$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,false,(function (){
return iterate(f,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8789 = cljs.core.seq(c1);
var s2__8790 = cljs.core.seq(c2);
if((function (){var and__3822__auto____8791 = s1__8789;
if(and__3822__auto____8791)
{return s2__8790;
} else
{return and__3822__auto____8791;
}
})())
{return cljs.core.cons(cljs.core.first(s1__8789),cljs.core.cons(cljs.core.first(s2__8790),interleave.cljs$lang$arity$2(cljs.core.rest(s1__8789),cljs.core.rest(s2__8790))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8793__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8792 = cljs.core.map.cljs$lang$arity$2(cljs.core.seq,cljs.core.conj.cljs$lang$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss__8792))
{return cljs.core.concat.cljs$lang$arity$2(cljs.core.map.cljs$lang$arity$2(cljs.core.first,ss__8792),cljs.core.apply.cljs$lang$arity$2(interleave,cljs.core.map.cljs$lang$arity$2(cljs.core.rest,ss__8792)));
} else
{return null;
}
}),null));
};
var G__8793 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8793__delegate.call(this, c1, c2, colls);
};
G__8793.cljs$lang$maxFixedArity = 2;
G__8793.cljs$lang$applyTo = (function (arglist__8794){
var c1 = cljs.core.first(arglist__8794);
var c2 = cljs.core.first(cljs.core.next(arglist__8794));
var colls = cljs.core.rest(cljs.core.next(arglist__8794));
return G__8793__delegate(c1, c2, colls);
});
G__8793.cljs$lang$arity$variadic = G__8793__delegate;
return G__8793;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop(1,cljs.core.interleave.cljs$lang$arity$2(cljs.core.repeat.cljs$lang$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8804 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8802 = cljs.core.seq(coll);
if(temp__3971__auto____8802)
{var coll__8803 = temp__3971__auto____8802;
return cljs.core.cons(cljs.core.first(coll__8803),cat(cljs.core.rest(coll__8803),colls));
} else
{if(cljs.core.seq(colls))
{return cat(cljs.core.first(colls),cljs.core.rest(colls));
} else
{return null;
}
}
}),null));
});
return (cat__8804.cljs$lang$arity$2 ? cat__8804.cljs$lang$arity$2(null,colls) : cat__8804.call(null,null,colls));
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1(cljs.core.map.cljs$lang$arity$2(f,coll));
});
var mapcat__3 = (function() { 
var G__8805__delegate = function (f,coll,colls){
return cljs.core.flatten1(cljs.core.apply.cljs$lang$arity$4(cljs.core.map,f,coll,colls));
};
var G__8805 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8805__delegate.call(this, f, coll, colls);
};
G__8805.cljs$lang$maxFixedArity = 2;
G__8805.cljs$lang$applyTo = (function (arglist__8806){
var f = cljs.core.first(arglist__8806);
var coll = cljs.core.first(cljs.core.next(arglist__8806));
var colls = cljs.core.rest(cljs.core.next(arglist__8806));
return G__8805__delegate(f, coll, colls);
});
G__8805.cljs$lang$arity$variadic = G__8805__delegate;
return G__8805;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8816 = cljs.core.seq(coll);
if(temp__3974__auto____8816)
{var s__8817 = temp__3974__auto____8816;
if(cljs.core.chunked_seq_QMARK_(s__8817))
{var c__8818 = cljs.core.chunk_first(s__8817);
var size__8819 = cljs.core.count(c__8818);
var b__8820 = cljs.core.chunk_buffer(size__8819);
var n__3249__auto____8821 = size__8819;
var i__8822 = 0;
while(true){
if((i__8822 < n__3249__auto____8821))
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__8818,i__8822)) : pred.call(null,cljs.core._nth.cljs$lang$arity$2(c__8818,i__8822)))))
{cljs.core.chunk_append(b__8820,cljs.core._nth.cljs$lang$arity$2(c__8818,i__8822));
} else
{}
{
var G__8825 = (i__8822 + 1);
i__8822 = G__8825;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8820),filter(pred,cljs.core.chunk_rest(s__8817)));
} else
{var f__8823 = cljs.core.first(s__8817);
var r__8824 = cljs.core.rest(s__8817);
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(f__8823) : pred.call(null,f__8823))))
{return cljs.core.cons(f__8823,filter(pred,r__8824));
} else
{return filter(pred,r__8824);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter(cljs.core.complement(pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8828 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(node,(cljs.core.truth_((branch_QMARK_.cljs$lang$arity$1 ? branch_QMARK_.cljs$lang$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$lang$arity$2(walk,(children.cljs$lang$arity$1 ? children.cljs$lang$arity$1(node) : children.call(null,node))):null));
}),null));
});
return (walk__8828.cljs$lang$arity$1 ? walk__8828.cljs$lang$arity$1(root) : walk__8828.call(null,root));
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter((function (p1__8826_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__8826_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8832__8833 = to;
if(G__8832__8833)
{if((function (){var or__3824__auto____8834 = (G__8832__8833.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8834)
{return or__3824__auto____8834;
} else
{return G__8832__8833.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8832__8833.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__8832__8833);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__8832__8833);
}
})())
{return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
return cljs.core.conj_BANG_(v,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(o) : f.call(null,o)));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8835__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$lang$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__8835 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8835__delegate.call(this, f, c1, c2, c3, colls);
};
G__8835.cljs$lang$maxFixedArity = 4;
G__8835.cljs$lang$applyTo = (function (arglist__8836){
var f = cljs.core.first(arglist__8836);
var c1 = cljs.core.first(cljs.core.next(arglist__8836));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8836)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8836))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8836))));
return G__8835__delegate(f, c1, c2, c3, colls);
});
G__8835.cljs$lang$arity$variadic = G__8835__delegate;
return G__8835;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(o) : pred.call(null,o))))
{return cljs.core.conj_BANG_(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$lang$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8843 = cljs.core.seq(coll);
if(temp__3974__auto____8843)
{var s__8844 = temp__3974__auto____8843;
var p__8845 = cljs.core.take(n,s__8844);
if((n === cljs.core.count(p__8845)))
{return cljs.core.cons(p__8845,partition.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__8844)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8846 = cljs.core.seq(coll);
if(temp__3974__auto____8846)
{var s__8847 = temp__3974__auto____8846;
var p__8848 = cljs.core.take(n,s__8847);
if((n === cljs.core.count(p__8848)))
{return cljs.core.cons(p__8848,partition.cljs$lang$arity$4(n,step,pad,cljs.core.drop(step,s__8847)));
} else
{return cljs.core.list.cljs$lang$arity$1(cljs.core.take(n,cljs.core.concat.cljs$lang$arity$2(p__8848,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8853 = cljs.core.lookup_sentinel;
var m__8854 = m;
var ks__8855 = cljs.core.seq(ks);
while(true){
if(ks__8855)
{var m__8856 = cljs.core._lookup.cljs$lang$arity$3(m__8854,cljs.core.first(ks__8855),sentinel__8853);
if((sentinel__8853 === m__8856))
{return not_found;
} else
{{
var G__8857 = sentinel__8853;
var G__8858 = m__8856;
var G__8859 = cljs.core.next(ks__8855);
sentinel__8853 = G__8857;
m__8854 = G__8858;
ks__8855 = G__8859;
continue;
}
}
} else
{return m__8854;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8860,v){
var vec__8865__8866 = p__8860;
var k__8867 = cljs.core.nth.cljs$lang$arity$3(vec__8865__8866,0,null);
var ks__8868 = cljs.core.nthnext(vec__8865__8866,1);
if(cljs.core.truth_(ks__8868))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8867,assoc_in(cljs.core._lookup.cljs$lang$arity$3(m,k__8867,null),ks__8868,v));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8867,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8869,f,args){
var vec__8874__8875 = p__8869;
var k__8876 = cljs.core.nth.cljs$lang$arity$3(vec__8874__8875,0,null);
var ks__8877 = cljs.core.nthnext(vec__8874__8875,1);
if(cljs.core.truth_(ks__8877))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8876,cljs.core.apply.cljs$lang$arity$5(update_in,cljs.core._lookup.cljs$lang$arity$3(m,k__8876,null),ks__8877,f,args));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8876,cljs.core.apply.cljs$lang$arity$3(f,cljs.core._lookup.cljs$lang$arity$3(m,k__8876,null),args));
}
};
var update_in = function (m,p__8869,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8869, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8878){
var m = cljs.core.first(arglist__8878);
var p__8869 = cljs.core.first(cljs.core.next(arglist__8878));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8878)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8878)));
return update_in__delegate(m, p__8869, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8881 = this;
var h__2914__auto____8882 = this__8881.__hash;
if(!((h__2914__auto____8882 == null)))
{return h__2914__auto____8882;
} else
{var h__2914__auto____8883 = cljs.core.hash_coll(coll);
this__8881.__hash = h__2914__auto____8883;
return h__2914__auto____8883;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8884 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8885 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8886 = this;
var new_array__8887 = this__8886.array.slice();
(new_array__8887[k] = v);
return (new cljs.core.Vector(this__8886.meta,new_array__8887,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8918 = null;
var G__8918__2 = (function (this_sym8888,k){
var this__8890 = this;
var this_sym8888__8891 = this;
var coll__8892 = this_sym8888__8891;
return coll__8892.cljs$core$ILookup$_lookup$arity$2(coll__8892,k);
});
var G__8918__3 = (function (this_sym8889,k,not_found){
var this__8890 = this;
var this_sym8889__8893 = this;
var coll__8894 = this_sym8889__8893;
return coll__8894.cljs$core$ILookup$_lookup$arity$3(coll__8894,k,not_found);
});
G__8918 = function(this_sym8889,k,not_found){
switch(arguments.length){
case 2:
return G__8918__2.call(this,this_sym8889,k);
case 3:
return G__8918__3.call(this,this_sym8889,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8918;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8879,args8880){
var this__8895 = this;
return this_sym8879.call.apply(this_sym8879,[this_sym8879].concat(args8880.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8896 = this;
var new_array__8897 = this__8896.array.slice();
new_array__8897.push(o);
return (new cljs.core.Vector(this__8896.meta,new_array__8897,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8898 = this;
var this__8899 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8899], 0));
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8900 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(this__8900.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8901 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(this__8901.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8902 = this;
if((this__8902.array.length > 0))
{var vector_seq__8903 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8902.array.length))
{return cljs.core.cons((this__8902.array[i]),vector_seq((i + 1)));
} else
{return null;
}
}),null));
});
return (vector_seq__8903.cljs$lang$arity$1 ? vector_seq__8903.cljs$lang$arity$1(0) : vector_seq__8903.call(null,0));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8904 = this;
return this__8904.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8905 = this;
var count__8906 = this__8905.array.length;
if((count__8906 > 0))
{return (this__8905.array[(count__8906 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8907 = this;
if((this__8907.array.length > 0))
{var new_array__8908 = this__8907.array.slice();
new_array__8908.pop();
return (new cljs.core.Vector(this__8907.meta,new_array__8908,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8909 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8910 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8911 = this;
return (new cljs.core.Vector(meta,this__8911.array,this__8911.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8912 = this;
return this__8912.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8913 = this;
if((function (){var and__3822__auto____8914 = (0 <= n);
if(and__3822__auto____8914)
{return (n < this__8913.array.length);
} else
{return and__3822__auto____8914;
}
})())
{return (this__8913.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8915 = this;
if((function (){var and__3822__auto____8916 = (0 <= n);
if(and__3822__auto____8916)
{return (n < this__8915.array.length);
} else
{return and__3822__auto____8916;
}
})())
{return (this__8915.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8917 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__8917.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__3032__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.cljs$lang$arity$1(32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8920 = pv.cnt;
if((cnt__8920 < 32))
{return 0;
} else
{return (((cnt__8920 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8926 = level;
var ret__8927 = node;
while(true){
if((ll__8926 === 0))
{return ret__8927;
} else
{var embed__8928 = ret__8927;
var r__8929 = cljs.core.pv_fresh_node(edit);
var ___8930 = cljs.core.pv_aset(r__8929,0,embed__8928);
{
var G__8931 = (ll__8926 - 5);
var G__8932 = r__8929;
ll__8926 = G__8931;
ret__8927 = G__8932;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8938 = cljs.core.pv_clone_node(parent);
var subidx__8939 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset(ret__8938,subidx__8939,tailnode);
return ret__8938;
} else
{var child__8940 = cljs.core.pv_aget(parent,subidx__8939);
if(!((child__8940 == null)))
{var node_to_insert__8941 = push_tail(pv,(level - 5),child__8940,tailnode);
cljs.core.pv_aset(ret__8938,subidx__8939,node_to_insert__8941);
return ret__8938;
} else
{var node_to_insert__8942 = cljs.core.new_path(null,(level - 5),tailnode);
cljs.core.pv_aset(ret__8938,subidx__8939,node_to_insert__8942);
return ret__8938;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8946 = (0 <= i);
if(and__3822__auto____8946)
{return (i < pv.cnt);
} else
{return and__3822__auto____8946;
}
})())
{if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node__8947 = pv.root;
var level__8948 = pv.shift;
while(true){
if((level__8948 > 0))
{{
var G__8949 = cljs.core.pv_aget(node__8947,((i >>> level__8948) & 31));
var G__8950 = (level__8948 - 5);
node__8947 = G__8949;
level__8948 = G__8950;
continue;
}
} else
{return node__8947.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8953 = cljs.core.pv_clone_node(node);
if((level === 0))
{cljs.core.pv_aset(ret__8953,(i & 31),val);
return ret__8953;
} else
{var subidx__8954 = ((i >>> level) & 31);
cljs.core.pv_aset(ret__8953,subidx__8954,do_assoc(pv,(level - 5),cljs.core.pv_aget(node,subidx__8954),i,val));
return ret__8953;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8960 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8961 = pop_tail(pv,(level - 5),cljs.core.pv_aget(node,subidx__8960));
if((function (){var and__3822__auto____8962 = (new_child__8961 == null);
if(and__3822__auto____8962)
{return (subidx__8960 === 0);
} else
{return and__3822__auto____8962;
}
})())
{return null;
} else
{var ret__8963 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__8963,subidx__8960,new_child__8961);
return ret__8963;
}
} else
{if((subidx__8960 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8964 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__8964,subidx__8960,null);
return ret__8964;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8967 = this;
return (new cljs.core.TransientVector(this__8967.cnt,this__8967.shift,cljs.core.tv_editable_root(this__8967.root),cljs.core.tv_editable_tail(this__8967.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8968 = this;
var h__2914__auto____8969 = this__8968.__hash;
if(!((h__2914__auto____8969 == null)))
{return h__2914__auto____8969;
} else
{var h__2914__auto____8970 = cljs.core.hash_coll(coll);
this__8968.__hash = h__2914__auto____8970;
return h__2914__auto____8970;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8971 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8972 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8973 = this;
if((function (){var and__3822__auto____8974 = (0 <= k);
if(and__3822__auto____8974)
{return (k < this__8973.cnt);
} else
{return and__3822__auto____8974;
}
})())
{if((cljs.core.tail_off(coll) <= k))
{var new_tail__8975 = this__8973.tail.slice();
(new_tail__8975[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8973.meta,this__8973.cnt,this__8973.shift,this__8973.root,new_tail__8975,null));
} else
{return (new cljs.core.PersistentVector(this__8973.meta,this__8973.cnt,this__8973.shift,cljs.core.do_assoc(coll,this__8973.shift,this__8973.root,k,v),this__8973.tail,null));
}
} else
{if((k === this__8973.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8973.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9023 = null;
var G__9023__2 = (function (this_sym8976,k){
var this__8978 = this;
var this_sym8976__8979 = this;
var coll__8980 = this_sym8976__8979;
return coll__8980.cljs$core$ILookup$_lookup$arity$2(coll__8980,k);
});
var G__9023__3 = (function (this_sym8977,k,not_found){
var this__8978 = this;
var this_sym8977__8981 = this;
var coll__8982 = this_sym8977__8981;
return coll__8982.cljs$core$ILookup$_lookup$arity$3(coll__8982,k,not_found);
});
G__9023 = function(this_sym8977,k,not_found){
switch(arguments.length){
case 2:
return G__9023__2.call(this,this_sym8977,k);
case 3:
return G__9023__3.call(this,this_sym8977,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9023;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8965,args8966){
var this__8983 = this;
return this_sym8965.call.apply(this_sym8965,[this_sym8965].concat(args8966.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8984 = this;
var step_init__8985 = [0,init];
var i__8986 = 0;
while(true){
if((i__8986 < this__8984.cnt))
{var arr__8987 = cljs.core.array_for(v,i__8986);
var len__8988 = arr__8987.length;
var init__8992 = (function (){var j__8989 = 0;
var init__8990 = (step_init__8985[1]);
while(true){
if((j__8989 < len__8988))
{var init__8991 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__8990,(j__8989 + i__8986),(arr__8987[j__8989])) : f.call(null,init__8990,(j__8989 + i__8986),(arr__8987[j__8989])));
if(cljs.core.reduced_QMARK_(init__8991))
{return init__8991;
} else
{{
var G__9024 = (j__8989 + 1);
var G__9025 = init__8991;
j__8989 = G__9024;
init__8990 = G__9025;
continue;
}
}
} else
{(step_init__8985[0] = len__8988);
(step_init__8985[1] = init__8990);
return init__8990;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__8992))
{return cljs.core.deref(init__8992);
} else
{{
var G__9026 = (i__8986 + (step_init__8985[0]));
i__8986 = G__9026;
continue;
}
}
} else
{return (step_init__8985[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8993 = this;
if(((this__8993.cnt - cljs.core.tail_off(coll)) < 32))
{var new_tail__8994 = this__8993.tail.slice();
new_tail__8994.push(o);
return (new cljs.core.PersistentVector(this__8993.meta,(this__8993.cnt + 1),this__8993.shift,this__8993.root,new_tail__8994,null));
} else
{var root_overflow_QMARK___8995 = ((this__8993.cnt >>> 5) > (1 << this__8993.shift));
var new_shift__8996 = ((root_overflow_QMARK___8995)?(this__8993.shift + 5):this__8993.shift);
var new_root__8998 = ((root_overflow_QMARK___8995)?(function (){var n_r__8997 = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r__8997,0,this__8993.root);
cljs.core.pv_aset(n_r__8997,1,cljs.core.new_path(null,this__8993.shift,(new cljs.core.VectorNode(null,this__8993.tail))));
return n_r__8997;
})():cljs.core.push_tail(coll,this__8993.shift,this__8993.root,(new cljs.core.VectorNode(null,this__8993.tail))));
return (new cljs.core.PersistentVector(this__8993.meta,(this__8993.cnt + 1),new_shift__8996,new_root__8998,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8999 = this;
if((this__8999.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8999.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9000 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9001 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9002 = this;
var this__9003 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9003], 0));
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9004 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9005 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9006 = this;
if((this__9006.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.cljs$lang$arity$3(coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9007 = this;
return this__9007.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9008 = this;
if((this__9008.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9008.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9009 = this;
if((this__9009.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9009.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,this__9009.meta);
} else
{if((1 < (this__9009.cnt - cljs.core.tail_off(coll))))
{return (new cljs.core.PersistentVector(this__9009.meta,(this__9009.cnt - 1),this__9009.shift,this__9009.root,this__9009.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9010 = cljs.core.array_for(coll,(this__9009.cnt - 2));
var nr__9011 = cljs.core.pop_tail(coll,this__9009.shift,this__9009.root);
var new_root__9012 = (((nr__9011 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9011);
var cnt_1__9013 = (this__9009.cnt - 1);
if((function (){var and__3822__auto____9014 = (5 < this__9009.shift);
if(and__3822__auto____9014)
{return (cljs.core.pv_aget(new_root__9012,1) == null);
} else
{return and__3822__auto____9014;
}
})())
{return (new cljs.core.PersistentVector(this__9009.meta,cnt_1__9013,(this__9009.shift - 5),cljs.core.pv_aget(new_root__9012,0),new_tail__9010,null));
} else
{return (new cljs.core.PersistentVector(this__9009.meta,cnt_1__9013,this__9009.shift,new_root__9012,new_tail__9010,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9015 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9016 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9017 = this;
return (new cljs.core.PersistentVector(meta,this__9017.cnt,this__9017.shift,this__9017.root,this__9017.tail,this__9017.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9018 = this;
return this__9018.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9019 = this;
return (cljs.core.array_for(coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9020 = this;
if((function (){var and__3822__auto____9021 = (0 <= n);
if(and__3822__auto____9021)
{return (n < this__9020.cnt);
} else
{return and__3822__auto____9021;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9022 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__9022.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node(null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9027 = xs.length;
var xs__9028 = (((no_clone === true))?xs:xs.slice());
if((l__9027 < 32))
{return (new cljs.core.PersistentVector(null,l__9027,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9028,null));
} else
{var node__9029 = xs__9028.slice(0,32);
var v__9030 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9029,null));
var i__9031 = 32;
var out__9032 = cljs.core._as_transient(v__9030);
while(true){
if((i__9031 < l__9027))
{{
var G__9033 = (i__9031 + 1);
var G__9034 = cljs.core.conj_BANG_(out__9032,(xs__9028[i__9031]));
i__9031 = G__9033;
out__9032 = G__9034;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9032);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec(args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__9035){
var args = cljs.core.seq(arglist__9035);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9036 = this;
if(((this__9036.off + 1) < this__9036.node.length))
{var s__9037 = cljs.core.chunked_seq.cljs$lang$arity$4(this__9036.vec,this__9036.node,this__9036.i,(this__9036.off + 1));
if((s__9037 == null))
{return null;
} else
{return s__9037;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9038 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9039 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9040 = this;
return (this__9040.node[this__9040.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9041 = this;
if(((this__9041.off + 1) < this__9041.node.length))
{var s__9042 = cljs.core.chunked_seq.cljs$lang$arity$4(this__9041.vec,this__9041.node,this__9041.i,(this__9041.off + 1));
if((s__9042 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9042;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9043 = this;
var l__9044 = this__9043.node.length;
var s__9045 = ((((this__9043.i + l__9044) < cljs.core._count(this__9043.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__9043.vec,(this__9043.i + l__9044),0):null);
if((s__9045 == null))
{return null;
} else
{return s__9045;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9046 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9047 = this;
return cljs.core.chunked_seq.cljs$lang$arity$5(this__9047.vec,this__9047.node,this__9047.i,this__9047.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9048 = this;
return this__9048.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9049 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__9049.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9050 = this;
return cljs.core.array_chunk.cljs$lang$arity$2(this__9050.node,this__9050.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9051 = this;
var l__9052 = this__9051.node.length;
var s__9053 = ((((this__9051.i + l__9052) < cljs.core._count(this__9051.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__9051.vec,(this__9051.i + l__9052),0):null);
if((s__9053 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9053;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.cljs$lang$arity$5(vec,cljs.core.array_for(vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.cljs$lang$arity$5(vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9056 = this;
var h__2914__auto____9057 = this__9056.__hash;
if(!((h__2914__auto____9057 == null)))
{return h__2914__auto____9057;
} else
{var h__2914__auto____9058 = cljs.core.hash_coll(coll);
this__9056.__hash = h__2914__auto____9058;
return h__2914__auto____9058;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9059 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9060 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9061 = this;
var v_pos__9062 = (this__9061.start + key);
return (new cljs.core.Subvec(this__9061.meta,cljs.core._assoc(this__9061.v,v_pos__9062,val),this__9061.start,((this__9061.end > (v_pos__9062 + 1)) ? this__9061.end : (v_pos__9062 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9088 = null;
var G__9088__2 = (function (this_sym9063,k){
var this__9065 = this;
var this_sym9063__9066 = this;
var coll__9067 = this_sym9063__9066;
return coll__9067.cljs$core$ILookup$_lookup$arity$2(coll__9067,k);
});
var G__9088__3 = (function (this_sym9064,k,not_found){
var this__9065 = this;
var this_sym9064__9068 = this;
var coll__9069 = this_sym9064__9068;
return coll__9069.cljs$core$ILookup$_lookup$arity$3(coll__9069,k,not_found);
});
G__9088 = function(this_sym9064,k,not_found){
switch(arguments.length){
case 2:
return G__9088__2.call(this,this_sym9064,k);
case 3:
return G__9088__3.call(this,this_sym9064,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9088;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9054,args9055){
var this__9070 = this;
return this_sym9054.call.apply(this_sym9054,[this_sym9054].concat(args9055.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9071 = this;
return (new cljs.core.Subvec(this__9071.meta,cljs.core._assoc_n(this__9071.v,this__9071.end,o),this__9071.start,(this__9071.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9072 = this;
var this__9073 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9073], 0));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9074 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9075 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9076 = this;
var subvec_seq__9077 = (function subvec_seq(i){
if((i === this__9076.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$lang$arity$2(this__9076.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq((i + 1));
}),null)));
}
});
return (subvec_seq__9077.cljs$lang$arity$1 ? subvec_seq__9077.cljs$lang$arity$1(this__9076.start) : subvec_seq__9077.call(null,this__9076.start));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9078 = this;
return (this__9078.end - this__9078.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9079 = this;
return cljs.core._nth.cljs$lang$arity$2(this__9079.v,(this__9079.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9080 = this;
if((this__9080.start === this__9080.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9080.meta,this__9080.v,this__9080.start,(this__9080.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9081 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9082 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9083 = this;
return (new cljs.core.Subvec(meta,this__9083.v,this__9083.start,this__9083.end,this__9083.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9084 = this;
return this__9084.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9085 = this;
return cljs.core._nth.cljs$lang$arity$2(this__9085.v,(this__9085.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9086 = this;
return cljs.core._nth.cljs$lang$arity$3(this__9086.v,(this__9086.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9087 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__9087.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$lang$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__9090 = cljs.core.make_array.cljs$lang$arity$1(32);
cljs.core.array_copy(tl,0,ret__9090,0,tl.length);
return ret__9090;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9094 = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx__9095 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset(ret__9094,subidx__9095,(((level === 5))?tail_node:(function (){var child__9096 = cljs.core.pv_aget(ret__9094,subidx__9095);
if(!((child__9096 == null)))
{return tv_push_tail(tv,(level - 5),child__9096,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9094;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9101 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx__9102 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9103 = tv_pop_tail(tv,(level - 5),cljs.core.pv_aget(node__9101,subidx__9102));
if((function (){var and__3822__auto____9104 = (new_child__9103 == null);
if(and__3822__auto____9104)
{return (subidx__9102 === 0);
} else
{return and__3822__auto____9104;
}
})())
{return null;
} else
{cljs.core.pv_aset(node__9101,subidx__9102,new_child__9103);
return node__9101;
}
} else
{if((subidx__9102 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset(node__9101,subidx__9102,null);
return node__9101;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____9109 = (0 <= i);
if(and__3822__auto____9109)
{return (i < tv.cnt);
} else
{return and__3822__auto____9109;
}
})())
{if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root__9110 = tv.root;
var node__9111 = root__9110;
var level__9112 = tv.shift;
while(true){
if((level__9112 > 0))
{{
var G__9113 = cljs.core.tv_ensure_editable(root__9110.edit,cljs.core.pv_aget(node__9111,((i >>> level__9112) & 31)));
var G__9114 = (level__9112 - 5);
node__9111 = G__9113;
level__9112 = G__9114;
continue;
}
} else
{return node__9111.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__9154 = null;
var G__9154__2 = (function (this_sym9117,k){
var this__9119 = this;
var this_sym9117__9120 = this;
var coll__9121 = this_sym9117__9120;
return coll__9121.cljs$core$ILookup$_lookup$arity$2(coll__9121,k);
});
var G__9154__3 = (function (this_sym9118,k,not_found){
var this__9119 = this;
var this_sym9118__9122 = this;
var coll__9123 = this_sym9118__9122;
return coll__9123.cljs$core$ILookup$_lookup$arity$3(coll__9123,k,not_found);
});
G__9154 = function(this_sym9118,k,not_found){
switch(arguments.length){
case 2:
return G__9154__2.call(this,this_sym9118,k);
case 3:
return G__9154__3.call(this,this_sym9118,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9154;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9115,args9116){
var this__9124 = this;
return this_sym9115.call.apply(this_sym9115,[this_sym9115].concat(args9116.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9125 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9126 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9127 = this;
if(this__9127.root.edit)
{return (cljs.core.array_for(coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9128 = this;
if((function (){var and__3822__auto____9129 = (0 <= n);
if(and__3822__auto____9129)
{return (n < this__9128.cnt);
} else
{return and__3822__auto____9129;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9130 = this;
if(this__9130.root.edit)
{return this__9130.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__9131 = this;
if(this__9131.root.edit)
{if((function (){var and__3822__auto____9132 = (0 <= n);
if(and__3822__auto____9132)
{return (n < this__9131.cnt);
} else
{return and__3822__auto____9132;
}
})())
{if((cljs.core.tail_off(tcoll) <= n))
{(this__9131.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__9137 = (function go(level,node){
var node__9135 = cljs.core.tv_ensure_editable(this__9131.root.edit,node);
if((level === 0))
{cljs.core.pv_aset(node__9135,(n & 31),val);
return node__9135;
} else
{var subidx__9136 = ((n >>> level) & 31);
cljs.core.pv_aset(node__9135,subidx__9136,go((level - 5),cljs.core.pv_aget(node__9135,subidx__9136)));
return node__9135;
}
}).call(null,this__9131.shift,this__9131.root);
this__9131.root = new_root__9137;
return tcoll;
}
} else
{if((n === this__9131.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__9131.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__9138 = this;
if(this__9138.root.edit)
{if((this__9138.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9138.cnt))
{this__9138.cnt = 0;
return tcoll;
} else
{if((((this__9138.cnt - 1) & 31) > 0))
{this__9138.cnt = (this__9138.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__9139 = cljs.core.editable_array_for(tcoll,(this__9138.cnt - 2));
var new_root__9141 = (function (){var nr__9140 = cljs.core.tv_pop_tail(tcoll,this__9138.shift,this__9138.root);
if(!((nr__9140 == null)))
{return nr__9140;
} else
{return (new cljs.core.VectorNode(this__9138.root.edit,cljs.core.make_array.cljs$lang$arity$1(32)));
}
})();
if((function (){var and__3822__auto____9142 = (5 < this__9138.shift);
if(and__3822__auto____9142)
{return (cljs.core.pv_aget(new_root__9141,1) == null);
} else
{return and__3822__auto____9142;
}
})())
{var new_root__9143 = cljs.core.tv_ensure_editable(this__9138.root.edit,cljs.core.pv_aget(new_root__9141,0));
this__9138.root = new_root__9143;
this__9138.shift = (this__9138.shift - 5);
this__9138.cnt = (this__9138.cnt - 1);
this__9138.tail = new_tail__9139;
return tcoll;
} else
{this__9138.root = new_root__9141;
this__9138.cnt = (this__9138.cnt - 1);
this__9138.tail = new_tail__9139;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9144 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9145 = this;
if(this__9145.root.edit)
{if(((this__9145.cnt - cljs.core.tail_off(tcoll)) < 32))
{(this__9145.tail[(this__9145.cnt & 31)] = o);
this__9145.cnt = (this__9145.cnt + 1);
return tcoll;
} else
{var tail_node__9146 = (new cljs.core.VectorNode(this__9145.root.edit,this__9145.tail));
var new_tail__9147 = cljs.core.make_array.cljs$lang$arity$1(32);
(new_tail__9147[0] = o);
this__9145.tail = new_tail__9147;
if(((this__9145.cnt >>> 5) > (1 << this__9145.shift)))
{var new_root_array__9148 = cljs.core.make_array.cljs$lang$arity$1(32);
var new_shift__9149 = (this__9145.shift + 5);
(new_root_array__9148[0] = this__9145.root);
(new_root_array__9148[1] = cljs.core.new_path(this__9145.root.edit,this__9145.shift,tail_node__9146));
this__9145.root = (new cljs.core.VectorNode(this__9145.root.edit,new_root_array__9148));
this__9145.shift = new_shift__9149;
this__9145.cnt = (this__9145.cnt + 1);
return tcoll;
} else
{var new_root__9150 = cljs.core.tv_push_tail(tcoll,this__9145.shift,this__9145.root,tail_node__9146);
this__9145.root = new_root__9150;
this__9145.cnt = (this__9145.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9151 = this;
if(this__9151.root.edit)
{this__9151.root.edit = null;
var len__9152 = (this__9151.cnt - cljs.core.tail_off(tcoll));
var trimmed_tail__9153 = cljs.core.make_array.cljs$lang$arity$1(len__9152);
cljs.core.array_copy(this__9151.tail,0,trimmed_tail__9153,0,len__9152);
return (new cljs.core.PersistentVector(null,this__9151.cnt,this__9151.shift,this__9151.root,trimmed_tail__9153,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9155 = this;
var h__2914__auto____9156 = this__9155.__hash;
if(!((h__2914__auto____9156 == null)))
{return h__2914__auto____9156;
} else
{var h__2914__auto____9157 = cljs.core.hash_coll(coll);
this__9155.__hash = h__2914__auto____9157;
return h__2914__auto____9157;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9158 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__9159 = this;
var this__9160 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9160], 0));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9161 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9162 = this;
return cljs.core._first(this__9162.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9163 = this;
var temp__3971__auto____9164 = cljs.core.next(this__9163.front);
if(temp__3971__auto____9164)
{var f1__9165 = temp__3971__auto____9164;
return (new cljs.core.PersistentQueueSeq(this__9163.meta,f1__9165,this__9163.rear,null));
} else
{if((this__9163.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9163.meta,this__9163.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9166 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9167 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9167.front,this__9167.rear,this__9167.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9168 = this;
return this__9168.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9169 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9169.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9170 = this;
var h__2914__auto____9171 = this__9170.__hash;
if(!((h__2914__auto____9171 == null)))
{return h__2914__auto____9171;
} else
{var h__2914__auto____9172 = cljs.core.hash_coll(coll);
this__9170.__hash = h__2914__auto____9172;
return h__2914__auto____9172;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9173 = this;
if(cljs.core.truth_(this__9173.front))
{return (new cljs.core.PersistentQueue(this__9173.meta,(this__9173.count + 1),this__9173.front,cljs.core.conj.cljs$lang$arity$2((function (){var or__3824__auto____9174 = this__9173.rear;
if(cljs.core.truth_(or__3824__auto____9174))
{return or__3824__auto____9174;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__9173.meta,(this__9173.count + 1),cljs.core.conj.cljs$lang$arity$2(this__9173.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__9175 = this;
var this__9176 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9176], 0));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9177 = this;
var rear__9178 = cljs.core.seq(this__9177.rear);
if(cljs.core.truth_((function (){var or__3824__auto____9179 = this__9177.front;
if(cljs.core.truth_(or__3824__auto____9179))
{return or__3824__auto____9179;
} else
{return rear__9178;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9177.front,cljs.core.seq(rear__9178),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9180 = this;
return this__9180.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9181 = this;
return cljs.core._first(this__9181.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9182 = this;
if(cljs.core.truth_(this__9182.front))
{var temp__3971__auto____9183 = cljs.core.next(this__9182.front);
if(temp__3971__auto____9183)
{var f1__9184 = temp__3971__auto____9183;
return (new cljs.core.PersistentQueue(this__9182.meta,(this__9182.count - 1),f1__9184,this__9182.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__9182.meta,(this__9182.count - 1),cljs.core.seq(this__9182.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9185 = this;
return cljs.core.first(this__9185.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9186 = this;
return cljs.core.rest(cljs.core.seq(coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9187 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9188 = this;
return (new cljs.core.PersistentQueue(meta,this__9188.count,this__9188.front,this__9188.rear,this__9188.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9189 = this;
return this__9189.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9190 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9191 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$lang$arity$2((function (xkv){
return cljs.core._EQ_.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__9194 = array.length;
var i__9195 = 0;
while(true){
if((i__9195 < len__9194))
{if((k === (array[i__9195])))
{return i__9195;
} else
{{
var G__9196 = (i__9195 + incr);
i__9195 = G__9196;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__9199 = cljs.core.hash.cljs$lang$arity$1(a);
var b__9200 = cljs.core.hash.cljs$lang$arity$1(b);
if((a__9199 < b__9200))
{return -1;
} else
{if((a__9199 > b__9200))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__9208 = m.keys;
var len__9209 = ks__9208.length;
var so__9210 = m.strobj;
var out__9211 = cljs.core.with_meta(cljs.core.PersistentHashMap.EMPTY,cljs.core.meta(m));
var i__9212 = 0;
var out__9213 = cljs.core.transient$(out__9211);
while(true){
if((i__9212 < len__9209))
{var k__9214 = (ks__9208[i__9212]);
{
var G__9215 = (i__9212 + 1);
var G__9216 = cljs.core.assoc_BANG_(out__9213,k__9214,(so__9210[k__9214]));
i__9212 = G__9215;
out__9213 = G__9216;
continue;
}
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(out__9213,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__9222 = {};
var l__9223 = ks.length;
var i__9224 = 0;
while(true){
if((i__9224 < l__9223))
{var k__9225 = (ks[i__9224]);
(new_obj__9222[k__9225] = (obj[k__9225]));
{
var G__9226 = (i__9224 + 1);
i__9224 = G__9226;
continue;
}
} else
{}
break;
}
return new_obj__9222;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9229 = this;
return cljs.core.transient$(cljs.core.into(cljs.core.hash_map(),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9230 = this;
var h__2914__auto____9231 = this__9230.__hash;
if(!((h__2914__auto____9231 == null)))
{return h__2914__auto____9231;
} else
{var h__2914__auto____9232 = cljs.core.hash_imap(coll);
this__9230.__hash = h__2914__auto____9232;
return h__2914__auto____9232;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9233 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9234 = this;
if((function (){var and__3822__auto____9235 = goog.isString(k);
if(and__3822__auto____9235)
{return !((cljs.core.scan_array(1,k,this__9234.keys) == null));
} else
{return and__3822__auto____9235;
}
})())
{return (this__9234.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9236 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____9237 = (this__9236.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____9237)
{return or__3824__auto____9237;
} else
{return (this__9236.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
} else
{if(!((cljs.core.scan_array(1,k,this__9236.keys) == null)))
{var new_strobj__9238 = cljs.core.obj_clone(this__9236.strobj,this__9236.keys);
(new_strobj__9238[k] = v);
return (new cljs.core.ObjMap(this__9236.meta,this__9236.keys,new_strobj__9238,(this__9236.update_count + 1),null));
} else
{var new_strobj__9239 = cljs.core.obj_clone(this__9236.strobj,this__9236.keys);
var new_keys__9240 = this__9236.keys.slice();
(new_strobj__9239[k] = v);
new_keys__9240.push(k);
return (new cljs.core.ObjMap(this__9236.meta,new_keys__9240,new_strobj__9239,(this__9236.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9241 = this;
if((function (){var and__3822__auto____9242 = goog.isString(k);
if(and__3822__auto____9242)
{return !((cljs.core.scan_array(1,k,this__9241.keys) == null));
} else
{return and__3822__auto____9242;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__9264 = null;
var G__9264__2 = (function (this_sym9243,k){
var this__9245 = this;
var this_sym9243__9246 = this;
var coll__9247 = this_sym9243__9246;
return coll__9247.cljs$core$ILookup$_lookup$arity$2(coll__9247,k);
});
var G__9264__3 = (function (this_sym9244,k,not_found){
var this__9245 = this;
var this_sym9244__9248 = this;
var coll__9249 = this_sym9244__9248;
return coll__9249.cljs$core$ILookup$_lookup$arity$3(coll__9249,k,not_found);
});
G__9264 = function(this_sym9244,k,not_found){
switch(arguments.length){
case 2:
return G__9264__2.call(this,this_sym9244,k);
case 3:
return G__9264__3.call(this,this_sym9244,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9264;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym9227,args9228){
var this__9250 = this;
return this_sym9227.call.apply(this_sym9227,[this_sym9227].concat(args9228.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9251 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__9252 = this;
var this__9253 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9253], 0));
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9254 = this;
if((this__9254.keys.length > 0))
{return cljs.core.map.cljs$lang$arity$2((function (p1__9217_SHARP_){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([p1__9217_SHARP_,(this__9254.strobj[p1__9217_SHARP_])], 0));
}),this__9254.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9255 = this;
return this__9255.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9256 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9257 = this;
return (new cljs.core.ObjMap(meta,this__9257.keys,this__9257.strobj,this__9257.update_count,this__9257.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9258 = this;
return this__9258.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9259 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,this__9259.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9260 = this;
if((function (){var and__3822__auto____9261 = goog.isString(k);
if(and__3822__auto____9261)
{return !((cljs.core.scan_array(1,k,this__9260.keys) == null));
} else
{return and__3822__auto____9261;
}
})())
{var new_keys__9262 = this__9260.keys.slice();
var new_strobj__9263 = cljs.core.obj_clone(this__9260.strobj,this__9260.keys);
new_keys__9262.splice(cljs.core.scan_array(1,k,new_keys__9262),1);
cljs.core.js_delete(new_strobj__9263,k);
return (new cljs.core.ObjMap(this__9260.meta,new_keys__9262,new_strobj__9263,(this__9260.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9268 = this;
var h__2914__auto____9269 = this__9268.__hash;
if(!((h__2914__auto____9269 == null)))
{return h__2914__auto____9269;
} else
{var h__2914__auto____9270 = cljs.core.hash_imap(coll);
this__9268.__hash = h__2914__auto____9270;
return h__2914__auto____9270;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9271 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9272 = this;
var bucket__9273 = (this__9272.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__9274 = (cljs.core.truth_(bucket__9273)?cljs.core.scan_array(2,k,bucket__9273):null);
if(cljs.core.truth_(i__9274))
{return (bucket__9273[(i__9274 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9275 = this;
var h__9276 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__9277 = (this__9275.hashobj[h__9276]);
if(cljs.core.truth_(bucket__9277))
{var new_bucket__9278 = bucket__9277.slice();
var new_hashobj__9279 = goog.object.clone(this__9275.hashobj);
(new_hashobj__9279[h__9276] = new_bucket__9278);
var temp__3971__auto____9280 = cljs.core.scan_array(2,k,new_bucket__9278);
if(cljs.core.truth_(temp__3971__auto____9280))
{var i__9281 = temp__3971__auto____9280;
(new_bucket__9278[(i__9281 + 1)] = v);
return (new cljs.core.HashMap(this__9275.meta,this__9275.count,new_hashobj__9279,null));
} else
{new_bucket__9278.push(k,v);
return (new cljs.core.HashMap(this__9275.meta,(this__9275.count + 1),new_hashobj__9279,null));
}
} else
{var new_hashobj__9282 = goog.object.clone(this__9275.hashobj);
(new_hashobj__9282[h__9276] = [k,v]);
return (new cljs.core.HashMap(this__9275.meta,(this__9275.count + 1),new_hashobj__9282,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9283 = this;
var bucket__9284 = (this__9283.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__9285 = (cljs.core.truth_(bucket__9284)?cljs.core.scan_array(2,k,bucket__9284):null);
if(cljs.core.truth_(i__9285))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9310 = null;
var G__9310__2 = (function (this_sym9286,k){
var this__9288 = this;
var this_sym9286__9289 = this;
var coll__9290 = this_sym9286__9289;
return coll__9290.cljs$core$ILookup$_lookup$arity$2(coll__9290,k);
});
var G__9310__3 = (function (this_sym9287,k,not_found){
var this__9288 = this;
var this_sym9287__9291 = this;
var coll__9292 = this_sym9287__9291;
return coll__9292.cljs$core$ILookup$_lookup$arity$3(coll__9292,k,not_found);
});
G__9310 = function(this_sym9287,k,not_found){
switch(arguments.length){
case 2:
return G__9310__2.call(this,this_sym9287,k);
case 3:
return G__9310__3.call(this,this_sym9287,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9310;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym9266,args9267){
var this__9293 = this;
return this_sym9266.call.apply(this_sym9266,[this_sym9266].concat(args9267.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9294 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9295 = this;
var this__9296 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9296], 0));
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9297 = this;
if((this__9297.count > 0))
{var hashes__9298 = cljs.core.js_keys(this__9297.hashobj).sort();
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__9265_SHARP_){
return cljs.core.map.cljs$lang$arity$2(cljs.core.vec,cljs.core.partition.cljs$lang$arity$2(2,(this__9297.hashobj[p1__9265_SHARP_])));
}),hashes__9298);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9299 = this;
return this__9299.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9300 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9301 = this;
return (new cljs.core.HashMap(meta,this__9301.count,this__9301.hashobj,this__9301.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9302 = this;
return this__9302.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9303 = this;
return cljs.core.with_meta(cljs.core.HashMap.EMPTY,this__9303.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9304 = this;
var h__9305 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__9306 = (this__9304.hashobj[h__9305]);
var i__9307 = (cljs.core.truth_(bucket__9306)?cljs.core.scan_array(2,k,bucket__9306):null);
if(cljs.core.not(i__9307))
{return coll;
} else
{var new_hashobj__9308 = goog.object.clone(this__9304.hashobj);
if((3 > bucket__9306.length))
{cljs.core.js_delete(new_hashobj__9308,h__9305);
} else
{var new_bucket__9309 = bucket__9306.slice();
new_bucket__9309.splice(i__9307,2);
(new_hashobj__9308[h__9305] = new_bucket__9309);
}
return (new cljs.core.HashMap(this__9304.meta,(this__9304.count - 1),new_hashobj__9308,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9311 = ks.length;
var i__9312 = 0;
var out__9313 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9312 < len__9311))
{{
var G__9314 = (i__9312 + 1);
var G__9315 = cljs.core.assoc.cljs$lang$arity$3(out__9313,(ks[i__9312]),(vs[i__9312]));
i__9312 = G__9314;
out__9313 = G__9315;
continue;
}
} else
{return out__9313;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9319 = m.arr;
var len__9320 = arr__9319.length;
var i__9321 = 0;
while(true){
if((len__9320 <= i__9321))
{return -1;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((arr__9319[i__9321]),k))
{return i__9321;
} else
{if("\uFDD0'else")
{{
var G__9322 = (i__9321 + 2);
i__9321 = G__9322;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9325 = this;
return (new cljs.core.TransientArrayMap({},this__9325.arr.length,this__9325.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9326 = this;
var h__2914__auto____9327 = this__9326.__hash;
if(!((h__2914__auto____9327 == null)))
{return h__2914__auto____9327;
} else
{var h__2914__auto____9328 = cljs.core.hash_imap(coll);
this__9326.__hash = h__2914__auto____9328;
return h__2914__auto____9328;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9329 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9330 = this;
var idx__9331 = cljs.core.array_map_index_of(coll,k);
if((idx__9331 === -1))
{return not_found;
} else
{return (this__9330.arr[(idx__9331 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9332 = this;
var idx__9333 = cljs.core.array_map_index_of(coll,k);
if((idx__9333 === -1))
{if((this__9332.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9332.meta,(this__9332.cnt + 1),(function (){var G__9334__9335 = this__9332.arr.slice();
G__9334__9335.push(k);
G__9334__9335.push(v);
return G__9334__9335;
})(),null));
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(cljs.core.transient$(cljs.core.into(cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9332.arr[(idx__9333 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9332.meta,this__9332.cnt,(function (){var G__9336__9337 = this__9332.arr.slice();
(G__9336__9337[(idx__9333 + 1)] = v);
return G__9336__9337;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9338 = this;
return !((cljs.core.array_map_index_of(coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9370 = null;
var G__9370__2 = (function (this_sym9339,k){
var this__9341 = this;
var this_sym9339__9342 = this;
var coll__9343 = this_sym9339__9342;
return coll__9343.cljs$core$ILookup$_lookup$arity$2(coll__9343,k);
});
var G__9370__3 = (function (this_sym9340,k,not_found){
var this__9341 = this;
var this_sym9340__9344 = this;
var coll__9345 = this_sym9340__9344;
return coll__9345.cljs$core$ILookup$_lookup$arity$3(coll__9345,k,not_found);
});
G__9370 = function(this_sym9340,k,not_found){
switch(arguments.length){
case 2:
return G__9370__2.call(this,this_sym9340,k);
case 3:
return G__9370__3.call(this,this_sym9340,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9370;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9323,args9324){
var this__9346 = this;
return this_sym9323.call.apply(this_sym9323,[this_sym9323].concat(args9324.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9347 = this;
var len__9348 = this__9347.arr.length;
var i__9349 = 0;
var init__9350 = init;
while(true){
if((i__9349 < len__9348))
{var init__9351 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__9350,(this__9347.arr[i__9349]),(this__9347.arr[(i__9349 + 1)])) : f.call(null,init__9350,(this__9347.arr[i__9349]),(this__9347.arr[(i__9349 + 1)])));
if(cljs.core.reduced_QMARK_(init__9351))
{return cljs.core.deref(init__9351);
} else
{{
var G__9371 = (i__9349 + 2);
var G__9372 = init__9351;
i__9349 = G__9371;
init__9350 = G__9372;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9352 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9353 = this;
var this__9354 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9354], 0));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9355 = this;
if((this__9355.cnt > 0))
{var len__9356 = this__9355.arr.length;
var array_map_seq__9357 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9356))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([(this__9355.arr[i]),(this__9355.arr[(i + 1)])], true),array_map_seq((i + 2)));
} else
{return null;
}
}),null));
});
return (array_map_seq__9357.cljs$lang$arity$1 ? array_map_seq__9357.cljs$lang$arity$1(0) : array_map_seq__9357.call(null,0));
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9358 = this;
return this__9358.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9359 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9360 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9360.cnt,this__9360.arr,this__9360.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9361 = this;
return this__9361.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9362 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,this__9362.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9363 = this;
var idx__9364 = cljs.core.array_map_index_of(coll,k);
if((idx__9364 >= 0))
{var len__9365 = this__9363.arr.length;
var new_len__9366 = (len__9365 - 2);
if((new_len__9366 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9367 = cljs.core.make_array.cljs$lang$arity$1(new_len__9366);
var s__9368 = 0;
var d__9369 = 0;
while(true){
if((s__9368 >= len__9365))
{return (new cljs.core.PersistentArrayMap(this__9363.meta,(this__9363.cnt - 1),new_arr__9367,null));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(k,(this__9363.arr[s__9368])))
{{
var G__9373 = (s__9368 + 2);
var G__9374 = d__9369;
s__9368 = G__9373;
d__9369 = G__9374;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9367[d__9369] = (this__9363.arr[s__9368]));
(new_arr__9367[(d__9369 + 1)] = (this__9363.arr[(s__9368 + 1)]));
{
var G__9375 = (s__9368 + 2);
var G__9376 = (d__9369 + 2);
s__9368 = G__9375;
d__9369 = G__9376;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__9377 = cljs.core.count(ks);
var i__9378 = 0;
var out__9379 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9378 < len__9377))
{{
var G__9380 = (i__9378 + 1);
var G__9381 = cljs.core.assoc_BANG_(out__9379,(ks[i__9378]),(vs[i__9378]));
i__9378 = G__9380;
out__9379 = G__9381;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9379);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9382 = this;
if(cljs.core.truth_(this__9382.editable_QMARK_))
{var idx__9383 = cljs.core.array_map_index_of(tcoll,key);
if((idx__9383 >= 0))
{(this__9382.arr[idx__9383] = (this__9382.arr[(this__9382.len - 2)]));
(this__9382.arr[(idx__9383 + 1)] = (this__9382.arr[(this__9382.len - 1)]));
var G__9384__9385 = this__9382.arr;
G__9384__9385.pop();
G__9384__9385.pop();
G__9384__9385;
this__9382.len = (this__9382.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9386 = this;
if(cljs.core.truth_(this__9386.editable_QMARK_))
{var idx__9387 = cljs.core.array_map_index_of(tcoll,key);
if((idx__9387 === -1))
{if(((this__9386.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9386.len = (this__9386.len + 2);
this__9386.arr.push(key);
this__9386.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_(cljs.core.array__GT_transient_hash_map(this__9386.len,this__9386.arr),key,val);
}
} else
{if((val === (this__9386.arr[(idx__9387 + 1)])))
{return tcoll;
} else
{(this__9386.arr[(idx__9387 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9388 = this;
if(cljs.core.truth_(this__9388.editable_QMARK_))
{if((function (){var G__9389__9390 = o;
if(G__9389__9390)
{if((function (){var or__3824__auto____9391 = (G__9389__9390.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9391)
{return or__3824__auto____9391;
} else
{return G__9389__9390.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9389__9390.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9389__9390);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9389__9390);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key(o),cljs.core.val(o));
} else
{var es__9392 = cljs.core.seq(o);
var tcoll__9393 = tcoll;
while(true){
var temp__3971__auto____9394 = cljs.core.first(es__9392);
if(cljs.core.truth_(temp__3971__auto____9394))
{var e__9395 = temp__3971__auto____9394;
{
var G__9401 = cljs.core.next(es__9392);
var G__9402 = tcoll__9393.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9393,cljs.core.key(e__9395),cljs.core.val(e__9395));
es__9392 = G__9401;
tcoll__9393 = G__9402;
continue;
}
} else
{return tcoll__9393;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9396 = this;
if(cljs.core.truth_(this__9396.editable_QMARK_))
{this__9396.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(this__9396.len,2),this__9396.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9397 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9398 = this;
if(cljs.core.truth_(this__9398.editable_QMARK_))
{var idx__9399 = cljs.core.array_map_index_of(tcoll,k);
if((idx__9399 === -1))
{return not_found;
} else
{return (this__9398.arr[(idx__9399 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9400 = this;
if(cljs.core.truth_(this__9400.editable_QMARK_))
{return cljs.core.quot(this__9400.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9405 = cljs.core.transient$(cljs.core.ObjMap.EMPTY);
var i__9406 = 0;
while(true){
if((i__9406 < len))
{{
var G__9407 = cljs.core.assoc_BANG_(out__9405,(arr[i__9406]),(arr[(i__9406 + 1)]));
var G__9408 = (i__9406 + 2);
out__9405 = G__9407;
i__9406 = G__9408;
continue;
}
} else
{return out__9405;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__3032__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.cljs$lang$arity$2(key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__9413__9414 = arr.slice();
(G__9413__9414[i] = a);
return G__9413__9414;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9415__9416 = arr.slice();
(G__9415__9416[i] = a);
(G__9415__9416[j] = b);
return G__9415__9416;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__9418 = cljs.core.make_array.cljs$lang$arity$1((arr.length - 2));
cljs.core.array_copy(arr,0,new_arr__9418,0,(2 * i));
cljs.core.array_copy(arr,(2 * (i + 1)),new_arr__9418,(2 * i),(new_arr__9418.length - (2 * i)));
return new_arr__9418;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__9421 = inode.ensure_editable(edit);
(editable__9421.arr[i] = a);
return editable__9421;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9422 = inode.ensure_editable(edit);
(editable__9422.arr[i] = a);
(editable__9422.arr[j] = b);
return editable__9422;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__9429 = arr.length;
var i__9430 = 0;
var init__9431 = init;
while(true){
if((i__9430 < len__9429))
{var init__9434 = (function (){var k__9432 = (arr[i__9430]);
if(!((k__9432 == null)))
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__9431,k__9432,(arr[(i__9430 + 1)])) : f.call(null,init__9431,k__9432,(arr[(i__9430 + 1)])));
} else
{var node__9433 = (arr[(i__9430 + 1)]);
if(!((node__9433 == null)))
{return node__9433.kv_reduce(f,init__9431);
} else
{return init__9431;
}
}
})();
if(cljs.core.reduced_QMARK_(init__9434))
{return cljs.core.deref(init__9434);
} else
{{
var G__9435 = (i__9430 + 2);
var G__9436 = init__9434;
i__9430 = G__9435;
init__9431 = G__9436;
continue;
}
}
} else
{return init__9431;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9437 = this;
var inode__9438 = this;
if((this__9437.bitmap === bit))
{return null;
} else
{var editable__9439 = inode__9438.ensure_editable(e);
var earr__9440 = editable__9439.arr;
var len__9441 = earr__9440.length;
editable__9439.bitmap = (bit ^ editable__9439.bitmap);
cljs.core.array_copy(earr__9440,(2 * (i + 1)),earr__9440,(2 * i),(len__9441 - (2 * (i + 1))));
(earr__9440[(len__9441 - 2)] = null);
(earr__9440[(len__9441 - 1)] = null);
return editable__9439;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9442 = this;
var inode__9443 = this;
var bit__9444 = (1 << ((hash >>> shift) & 0x01f));
var idx__9445 = cljs.core.bitmap_indexed_node_index(this__9442.bitmap,bit__9444);
if(((this__9442.bitmap & bit__9444) === 0))
{var n__9446 = cljs.core.bit_count(this__9442.bitmap);
if(((2 * n__9446) < this__9442.arr.length))
{var editable__9447 = inode__9443.ensure_editable(edit);
var earr__9448 = editable__9447.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr__9448,(2 * idx__9445),earr__9448,(2 * (idx__9445 + 1)),(2 * (n__9446 - idx__9445)));
(earr__9448[(2 * idx__9445)] = key);
(earr__9448[((2 * idx__9445) + 1)] = val);
editable__9447.bitmap = (editable__9447.bitmap | bit__9444);
return editable__9447;
} else
{if((n__9446 >= 16))
{var nodes__9449 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__9450 = ((hash >>> shift) & 0x01f);
(nodes__9449[jdx__9450] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9451 = 0;
var j__9452 = 0;
while(true){
if((i__9451 < 32))
{if((((this__9442.bitmap >>> i__9451) & 1) === 0))
{{
var G__9505 = (i__9451 + 1);
var G__9506 = j__9452;
i__9451 = G__9505;
j__9452 = G__9506;
continue;
}
} else
{(nodes__9449[i__9451] = ((!(((this__9442.arr[j__9452]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.cljs$lang$arity$1((this__9442.arr[j__9452])),(this__9442.arr[j__9452]),(this__9442.arr[(j__9452 + 1)]),added_leaf_QMARK_):(this__9442.arr[(j__9452 + 1)])));
{
var G__9507 = (i__9451 + 1);
var G__9508 = (j__9452 + 2);
i__9451 = G__9507;
j__9452 = G__9508;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9446 + 1),nodes__9449));
} else
{if("\uFDD0'else")
{var new_arr__9453 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__9446 + 4)));
cljs.core.array_copy(this__9442.arr,0,new_arr__9453,0,(2 * idx__9445));
(new_arr__9453[(2 * idx__9445)] = key);
(new_arr__9453[((2 * idx__9445) + 1)] = val);
cljs.core.array_copy(this__9442.arr,(2 * idx__9445),new_arr__9453,(2 * (idx__9445 + 1)),(2 * (n__9446 - idx__9445)));
added_leaf_QMARK_.val = true;
var editable__9454 = inode__9443.ensure_editable(edit);
editable__9454.arr = new_arr__9453;
editable__9454.bitmap = (editable__9454.bitmap | bit__9444);
return editable__9454;
} else
{return null;
}
}
}
} else
{var key_or_nil__9455 = (this__9442.arr[(2 * idx__9445)]);
var val_or_node__9456 = (this__9442.arr[((2 * idx__9445) + 1)]);
if((key_or_nil__9455 == null))
{var n__9457 = val_or_node__9456.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9457 === val_or_node__9456))
{return inode__9443;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9443,edit,((2 * idx__9445) + 1),n__9457);
}
} else
{if(cljs.core.key_test(key,key_or_nil__9455))
{if((val === val_or_node__9456))
{return inode__9443;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9443,edit,((2 * idx__9445) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$lang$arity$6(inode__9443,edit,(2 * idx__9445),null,((2 * idx__9445) + 1),cljs.core.create_node.cljs$lang$arity$7(edit,(shift + 5),key_or_nil__9455,val_or_node__9456,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9458 = this;
var inode__9459 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__9458.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9460 = this;
var inode__9461 = this;
var bit__9462 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9460.bitmap & bit__9462) === 0))
{return inode__9461;
} else
{var idx__9463 = cljs.core.bitmap_indexed_node_index(this__9460.bitmap,bit__9462);
var key_or_nil__9464 = (this__9460.arr[(2 * idx__9463)]);
var val_or_node__9465 = (this__9460.arr[((2 * idx__9463) + 1)]);
if((key_or_nil__9464 == null))
{var n__9466 = val_or_node__9465.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9466 === val_or_node__9465))
{return inode__9461;
} else
{if(!((n__9466 == null)))
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9461,edit,((2 * idx__9463) + 1),n__9466);
} else
{if((this__9460.bitmap === bit__9462))
{return null;
} else
{if("\uFDD0'else")
{return inode__9461.edit_and_remove_pair(edit,bit__9462,idx__9463);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__9464))
{(removed_leaf_QMARK_[0] = true);
return inode__9461.edit_and_remove_pair(edit,bit__9462,idx__9463);
} else
{if("\uFDD0'else")
{return inode__9461;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9467 = this;
var inode__9468 = this;
if((e === this__9467.edit))
{return inode__9468;
} else
{var n__9469 = cljs.core.bit_count(this__9467.bitmap);
var new_arr__9470 = cljs.core.make_array.cljs$lang$arity$1((((n__9469 < 0))?4:(2 * (n__9469 + 1))));
cljs.core.array_copy(this__9467.arr,0,new_arr__9470,0,(2 * n__9469));
return (new cljs.core.BitmapIndexedNode(e,this__9467.bitmap,new_arr__9470));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9471 = this;
var inode__9472 = this;
return cljs.core.inode_kv_reduce(this__9471.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9473 = this;
var inode__9474 = this;
var bit__9475 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9473.bitmap & bit__9475) === 0))
{return not_found;
} else
{var idx__9476 = cljs.core.bitmap_indexed_node_index(this__9473.bitmap,bit__9475);
var key_or_nil__9477 = (this__9473.arr[(2 * idx__9476)]);
var val_or_node__9478 = (this__9473.arr[((2 * idx__9476) + 1)]);
if((key_or_nil__9477 == null))
{return val_or_node__9478.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__9477))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9477,val_or_node__9478], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9479 = this;
var inode__9480 = this;
var bit__9481 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9479.bitmap & bit__9481) === 0))
{return inode__9480;
} else
{var idx__9482 = cljs.core.bitmap_indexed_node_index(this__9479.bitmap,bit__9481);
var key_or_nil__9483 = (this__9479.arr[(2 * idx__9482)]);
var val_or_node__9484 = (this__9479.arr[((2 * idx__9482) + 1)]);
if((key_or_nil__9483 == null))
{var n__9485 = val_or_node__9484.inode_without((shift + 5),hash,key);
if((n__9485 === val_or_node__9484))
{return inode__9480;
} else
{if(!((n__9485 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9479.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__9479.arr,((2 * idx__9482) + 1),n__9485)));
} else
{if((this__9479.bitmap === bit__9481))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9479.bitmap ^ bit__9481),cljs.core.remove_pair(this__9479.arr,idx__9482)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__9483))
{return (new cljs.core.BitmapIndexedNode(null,(this__9479.bitmap ^ bit__9481),cljs.core.remove_pair(this__9479.arr,idx__9482)));
} else
{if("\uFDD0'else")
{return inode__9480;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9486 = this;
var inode__9487 = this;
var bit__9488 = (1 << ((hash >>> shift) & 0x01f));
var idx__9489 = cljs.core.bitmap_indexed_node_index(this__9486.bitmap,bit__9488);
if(((this__9486.bitmap & bit__9488) === 0))
{var n__9490 = cljs.core.bit_count(this__9486.bitmap);
if((n__9490 >= 16))
{var nodes__9491 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__9492 = ((hash >>> shift) & 0x01f);
(nodes__9491[jdx__9492] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9493 = 0;
var j__9494 = 0;
while(true){
if((i__9493 < 32))
{if((((this__9486.bitmap >>> i__9493) & 1) === 0))
{{
var G__9509 = (i__9493 + 1);
var G__9510 = j__9494;
i__9493 = G__9509;
j__9494 = G__9510;
continue;
}
} else
{(nodes__9491[i__9493] = ((!(((this__9486.arr[j__9494]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.cljs$lang$arity$1((this__9486.arr[j__9494])),(this__9486.arr[j__9494]),(this__9486.arr[(j__9494 + 1)]),added_leaf_QMARK_):(this__9486.arr[(j__9494 + 1)])));
{
var G__9511 = (i__9493 + 1);
var G__9512 = (j__9494 + 2);
i__9493 = G__9511;
j__9494 = G__9512;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9490 + 1),nodes__9491));
} else
{var new_arr__9495 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__9490 + 1)));
cljs.core.array_copy(this__9486.arr,0,new_arr__9495,0,(2 * idx__9489));
(new_arr__9495[(2 * idx__9489)] = key);
(new_arr__9495[((2 * idx__9489) + 1)] = val);
cljs.core.array_copy(this__9486.arr,(2 * idx__9489),new_arr__9495,(2 * (idx__9489 + 1)),(2 * (n__9490 - idx__9489)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9486.bitmap | bit__9488),new_arr__9495));
}
} else
{var key_or_nil__9496 = (this__9486.arr[(2 * idx__9489)]);
var val_or_node__9497 = (this__9486.arr[((2 * idx__9489) + 1)]);
if((key_or_nil__9496 == null))
{var n__9498 = val_or_node__9497.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9498 === val_or_node__9497))
{return inode__9487;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9486.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__9486.arr,((2 * idx__9489) + 1),n__9498)));
}
} else
{if(cljs.core.key_test(key,key_or_nil__9496))
{if((val === val_or_node__9497))
{return inode__9487;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9486.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__9486.arr,((2 * idx__9489) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9486.bitmap,cljs.core.clone_and_set.cljs$lang$arity$5(this__9486.arr,(2 * idx__9489),null,((2 * idx__9489) + 1),cljs.core.create_node.cljs$lang$arity$6((shift + 5),key_or_nil__9496,val_or_node__9497,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9499 = this;
var inode__9500 = this;
var bit__9501 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9499.bitmap & bit__9501) === 0))
{return not_found;
} else
{var idx__9502 = cljs.core.bitmap_indexed_node_index(this__9499.bitmap,bit__9501);
var key_or_nil__9503 = (this__9499.arr[(2 * idx__9502)]);
var val_or_node__9504 = (this__9499.arr[((2 * idx__9502) + 1)]);
if((key_or_nil__9503 == null))
{return val_or_node__9504.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__9503))
{return val_or_node__9504;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.cljs$lang$arity$1(0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__9520 = array_node.arr;
var len__9521 = (2 * (array_node.cnt - 1));
var new_arr__9522 = cljs.core.make_array.cljs$lang$arity$1(len__9521);
var i__9523 = 0;
var j__9524 = 1;
var bitmap__9525 = 0;
while(true){
if((i__9523 < len__9521))
{if((function (){var and__3822__auto____9526 = !((i__9523 === idx));
if(and__3822__auto____9526)
{return !(((arr__9520[i__9523]) == null));
} else
{return and__3822__auto____9526;
}
})())
{(new_arr__9522[j__9524] = (arr__9520[i__9523]));
{
var G__9527 = (i__9523 + 1);
var G__9528 = (j__9524 + 2);
var G__9529 = (bitmap__9525 | (1 << i__9523));
i__9523 = G__9527;
j__9524 = G__9528;
bitmap__9525 = G__9529;
continue;
}
} else
{{
var G__9530 = (i__9523 + 1);
var G__9531 = j__9524;
var G__9532 = bitmap__9525;
i__9523 = G__9530;
j__9524 = G__9531;
bitmap__9525 = G__9532;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9525,new_arr__9522));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9533 = this;
var inode__9534 = this;
var idx__9535 = ((hash >>> shift) & 0x01f);
var node__9536 = (this__9533.arr[idx__9535]);
if((node__9536 == null))
{var editable__9537 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__9534,edit,idx__9535,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9537.cnt = (editable__9537.cnt + 1);
return editable__9537;
} else
{var n__9538 = node__9536.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9538 === node__9536))
{return inode__9534;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9534,edit,idx__9535,n__9538);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9539 = this;
var inode__9540 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$1(this__9539.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9541 = this;
var inode__9542 = this;
var idx__9543 = ((hash >>> shift) & 0x01f);
var node__9544 = (this__9541.arr[idx__9543]);
if((node__9544 == null))
{return inode__9542;
} else
{var n__9545 = node__9544.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9545 === node__9544))
{return inode__9542;
} else
{if((n__9545 == null))
{if((this__9541.cnt <= 8))
{return cljs.core.pack_array_node(inode__9542,edit,idx__9543);
} else
{var editable__9546 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__9542,edit,idx__9543,n__9545);
editable__9546.cnt = (editable__9546.cnt - 1);
return editable__9546;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9542,edit,idx__9543,n__9545);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9547 = this;
var inode__9548 = this;
if((e === this__9547.edit))
{return inode__9548;
} else
{return (new cljs.core.ArrayNode(e,this__9547.cnt,this__9547.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9549 = this;
var inode__9550 = this;
var len__9551 = this__9549.arr.length;
var i__9552 = 0;
var init__9553 = init;
while(true){
if((i__9552 < len__9551))
{var node__9554 = (this__9549.arr[i__9552]);
if(!((node__9554 == null)))
{var init__9555 = node__9554.kv_reduce(f,init__9553);
if(cljs.core.reduced_QMARK_(init__9555))
{return cljs.core.deref(init__9555);
} else
{{
var G__9574 = (i__9552 + 1);
var G__9575 = init__9555;
i__9552 = G__9574;
init__9553 = G__9575;
continue;
}
}
} else
{return null;
}
} else
{return init__9553;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9556 = this;
var inode__9557 = this;
var idx__9558 = ((hash >>> shift) & 0x01f);
var node__9559 = (this__9556.arr[idx__9558]);
if(!((node__9559 == null)))
{return node__9559.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9560 = this;
var inode__9561 = this;
var idx__9562 = ((hash >>> shift) & 0x01f);
var node__9563 = (this__9560.arr[idx__9562]);
if(!((node__9563 == null)))
{var n__9564 = node__9563.inode_without((shift + 5),hash,key);
if((n__9564 === node__9563))
{return inode__9561;
} else
{if((n__9564 == null))
{if((this__9560.cnt <= 8))
{return cljs.core.pack_array_node(inode__9561,null,idx__9562);
} else
{return (new cljs.core.ArrayNode(null,(this__9560.cnt - 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__9560.arr,idx__9562,n__9564)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9560.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__9560.arr,idx__9562,n__9564)));
} else
{return null;
}
}
}
} else
{return inode__9561;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9565 = this;
var inode__9566 = this;
var idx__9567 = ((hash >>> shift) & 0x01f);
var node__9568 = (this__9565.arr[idx__9567]);
if((node__9568 == null))
{return (new cljs.core.ArrayNode(null,(this__9565.cnt + 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__9565.arr,idx__9567,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9569 = node__9568.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9569 === node__9568))
{return inode__9566;
} else
{return (new cljs.core.ArrayNode(null,this__9565.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__9565.arr,idx__9567,n__9569)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9570 = this;
var inode__9571 = this;
var idx__9572 = ((hash >>> shift) & 0x01f);
var node__9573 = (this__9570.arr[idx__9572]);
if(!((node__9573 == null)))
{return node__9573.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9578 = (2 * cnt);
var i__9579 = 0;
while(true){
if((i__9579 < lim__9578))
{if(cljs.core.key_test(key,(arr[i__9579])))
{return i__9579;
} else
{{
var G__9580 = (i__9579 + 2);
i__9579 = G__9580;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9581 = this;
var inode__9582 = this;
if((hash === this__9581.collision_hash))
{var idx__9583 = cljs.core.hash_collision_node_find_index(this__9581.arr,this__9581.cnt,key);
if((idx__9583 === -1))
{if((this__9581.arr.length > (2 * this__9581.cnt)))
{var editable__9584 = cljs.core.edit_and_set.cljs$lang$arity$6(inode__9582,edit,(2 * this__9581.cnt),key,((2 * this__9581.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9584.cnt = (editable__9584.cnt + 1);
return editable__9584;
} else
{var len__9585 = this__9581.arr.length;
var new_arr__9586 = cljs.core.make_array.cljs$lang$arity$1((len__9585 + 2));
cljs.core.array_copy(this__9581.arr,0,new_arr__9586,0,len__9585);
(new_arr__9586[len__9585] = key);
(new_arr__9586[(len__9585 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9582.ensure_editable_array(edit,(this__9581.cnt + 1),new_arr__9586);
}
} else
{if(((this__9581.arr[(idx__9583 + 1)]) === val))
{return inode__9582;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9582,edit,(idx__9583 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9581.collision_hash >>> shift) & 0x01f)),[null,inode__9582,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9587 = this;
var inode__9588 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__9587.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9589 = this;
var inode__9590 = this;
var idx__9591 = cljs.core.hash_collision_node_find_index(this__9589.arr,this__9589.cnt,key);
if((idx__9591 === -1))
{return inode__9590;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9589.cnt === 1))
{return null;
} else
{var editable__9592 = inode__9590.ensure_editable(edit);
var earr__9593 = editable__9592.arr;
(earr__9593[idx__9591] = (earr__9593[((2 * this__9589.cnt) - 2)]));
(earr__9593[(idx__9591 + 1)] = (earr__9593[((2 * this__9589.cnt) - 1)]));
(earr__9593[((2 * this__9589.cnt) - 1)] = null);
(earr__9593[((2 * this__9589.cnt) - 2)] = null);
editable__9592.cnt = (editable__9592.cnt - 1);
return editable__9592;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9594 = this;
var inode__9595 = this;
if((e === this__9594.edit))
{return inode__9595;
} else
{var new_arr__9596 = cljs.core.make_array.cljs$lang$arity$1((2 * (this__9594.cnt + 1)));
cljs.core.array_copy(this__9594.arr,0,new_arr__9596,0,(2 * this__9594.cnt));
return (new cljs.core.HashCollisionNode(e,this__9594.collision_hash,this__9594.cnt,new_arr__9596));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9597 = this;
var inode__9598 = this;
return cljs.core.inode_kv_reduce(this__9597.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9599 = this;
var inode__9600 = this;
var idx__9601 = cljs.core.hash_collision_node_find_index(this__9599.arr,this__9599.cnt,key);
if((idx__9601 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__9599.arr[idx__9601])))
{return cljs.core.PersistentVector.fromArray([(this__9599.arr[idx__9601]),(this__9599.arr[(idx__9601 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9602 = this;
var inode__9603 = this;
var idx__9604 = cljs.core.hash_collision_node_find_index(this__9602.arr,this__9602.cnt,key);
if((idx__9604 === -1))
{return inode__9603;
} else
{if((this__9602.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9602.collision_hash,(this__9602.cnt - 1),cljs.core.remove_pair(this__9602.arr,cljs.core.quot(idx__9604,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9605 = this;
var inode__9606 = this;
if((hash === this__9605.collision_hash))
{var idx__9607 = cljs.core.hash_collision_node_find_index(this__9605.arr,this__9605.cnt,key);
if((idx__9607 === -1))
{var len__9608 = this__9605.arr.length;
var new_arr__9609 = cljs.core.make_array.cljs$lang$arity$1((len__9608 + 2));
cljs.core.array_copy(this__9605.arr,0,new_arr__9609,0,len__9608);
(new_arr__9609[len__9608] = key);
(new_arr__9609[(len__9608 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9605.collision_hash,(this__9605.cnt + 1),new_arr__9609));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((this__9605.arr[idx__9607]),val))
{return inode__9606;
} else
{return (new cljs.core.HashCollisionNode(null,this__9605.collision_hash,this__9605.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__9605.arr,(idx__9607 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9605.collision_hash >>> shift) & 0x01f)),[null,inode__9606])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9610 = this;
var inode__9611 = this;
var idx__9612 = cljs.core.hash_collision_node_find_index(this__9610.arr,this__9610.cnt,key);
if((idx__9612 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__9610.arr[idx__9612])))
{return (this__9610.arr[(idx__9612 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__9613 = this;
var inode__9614 = this;
if((e === this__9613.edit))
{this__9613.arr = array;
this__9613.cnt = count;
return inode__9614;
} else
{return (new cljs.core.HashCollisionNode(this__9613.edit,this__9613.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9619 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__9619 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9619,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9620 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9619,key1,val1,added_leaf_QMARK___9620).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9620);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9621 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__9621 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9621,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9622 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9621,key1,val1,added_leaf_QMARK___9622).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9622);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9623 = this;
var h__2914__auto____9624 = this__9623.__hash;
if(!((h__2914__auto____9624 == null)))
{return h__2914__auto____9624;
} else
{var h__2914__auto____9625 = cljs.core.hash_coll(coll);
this__9623.__hash = h__2914__auto____9625;
return h__2914__auto____9625;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9626 = this;
return cljs.core.cons(o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9627 = this;
var this__9628 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9628], 0));
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9629 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9630 = this;
if((this__9630.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9630.nodes[this__9630.i]),(this__9630.nodes[(this__9630.i + 1)])], true);
} else
{return cljs.core.first(this__9630.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9631 = this;
if((this__9631.s == null))
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__9631.nodes,(this__9631.i + 2),null);
} else
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__9631.nodes,this__9631.i,cljs.core.next(this__9631.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9632 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9633 = this;
return (new cljs.core.NodeSeq(meta,this__9633.nodes,this__9633.i,this__9633.s,this__9633.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9634 = this;
return this__9634.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9635 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9635.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$lang$arity$3(nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9642 = nodes.length;
var j__9643 = i;
while(true){
if((j__9643 < len__9642))
{if(!(((nodes[j__9643]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9643,null,null));
} else
{var temp__3971__auto____9644 = (nodes[(j__9643 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9644))
{var node__9645 = temp__3971__auto____9644;
var temp__3971__auto____9646 = node__9645.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9646))
{var node_seq__9647 = temp__3971__auto____9646;
return (new cljs.core.NodeSeq(null,nodes,(j__9643 + 2),node_seq__9647,null));
} else
{{
var G__9648 = (j__9643 + 2);
j__9643 = G__9648;
continue;
}
}
} else
{{
var G__9649 = (j__9643 + 2);
j__9643 = G__9649;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9650 = this;
var h__2914__auto____9651 = this__9650.__hash;
if(!((h__2914__auto____9651 == null)))
{return h__2914__auto____9651;
} else
{var h__2914__auto____9652 = cljs.core.hash_coll(coll);
this__9650.__hash = h__2914__auto____9652;
return h__2914__auto____9652;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9653 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9654 = this;
var this__9655 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9655], 0));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9656 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9657 = this;
return cljs.core.first(this__9657.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9658 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$4(null,this__9658.nodes,this__9658.i,cljs.core.next(this__9658.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9659 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9660 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9660.nodes,this__9660.i,this__9660.s,this__9660.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9661 = this;
return this__9661.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9662 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9662.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$lang$arity$4(null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9669 = nodes.length;
var j__9670 = i;
while(true){
if((j__9670 < len__9669))
{var temp__3971__auto____9671 = (nodes[j__9670]);
if(cljs.core.truth_(temp__3971__auto____9671))
{var nj__9672 = temp__3971__auto____9671;
var temp__3971__auto____9673 = nj__9672.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9673))
{var ns__9674 = temp__3971__auto____9673;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9670 + 1),ns__9674,null));
} else
{{
var G__9675 = (j__9670 + 1);
j__9670 = G__9675;
continue;
}
}
} else
{{
var G__9676 = (j__9670 + 1);
j__9670 = G__9676;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9679 = this;
return (new cljs.core.TransientHashMap({},this__9679.root,this__9679.cnt,this__9679.has_nil_QMARK_,this__9679.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9680 = this;
var h__2914__auto____9681 = this__9680.__hash;
if(!((h__2914__auto____9681 == null)))
{return h__2914__auto____9681;
} else
{var h__2914__auto____9682 = cljs.core.hash_imap(coll);
this__9680.__hash = h__2914__auto____9682;
return h__2914__auto____9682;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9683 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9684 = this;
if((k == null))
{if(this__9684.has_nil_QMARK_)
{return this__9684.nil_val;
} else
{return not_found;
}
} else
{if((this__9684.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9684.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9685 = this;
if((k == null))
{if((function (){var and__3822__auto____9686 = this__9685.has_nil_QMARK_;
if(and__3822__auto____9686)
{return (v === this__9685.nil_val);
} else
{return and__3822__auto____9686;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9685.meta,((this__9685.has_nil_QMARK_)?this__9685.cnt:(this__9685.cnt + 1)),this__9685.root,true,v,null));
}
} else
{var added_leaf_QMARK___9687 = (new cljs.core.Box(false));
var new_root__9688 = (((this__9685.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9685.root).inode_assoc(0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___9687);
if((new_root__9688 === this__9685.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9685.meta,((added_leaf_QMARK___9687.val)?(this__9685.cnt + 1):this__9685.cnt),new_root__9688,this__9685.has_nil_QMARK_,this__9685.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9689 = this;
if((k == null))
{return this__9689.has_nil_QMARK_;
} else
{if((this__9689.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9689.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9712 = null;
var G__9712__2 = (function (this_sym9690,k){
var this__9692 = this;
var this_sym9690__9693 = this;
var coll__9694 = this_sym9690__9693;
return coll__9694.cljs$core$ILookup$_lookup$arity$2(coll__9694,k);
});
var G__9712__3 = (function (this_sym9691,k,not_found){
var this__9692 = this;
var this_sym9691__9695 = this;
var coll__9696 = this_sym9691__9695;
return coll__9696.cljs$core$ILookup$_lookup$arity$3(coll__9696,k,not_found);
});
G__9712 = function(this_sym9691,k,not_found){
switch(arguments.length){
case 2:
return G__9712__2.call(this,this_sym9691,k);
case 3:
return G__9712__3.call(this,this_sym9691,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9712;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9677,args9678){
var this__9697 = this;
return this_sym9677.call.apply(this_sym9677,[this_sym9677].concat(args9678.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9698 = this;
var init__9699 = ((this__9698.has_nil_QMARK_)?(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,null,this__9698.nil_val) : f.call(null,init,null,this__9698.nil_val)):init);
if(cljs.core.reduced_QMARK_(init__9699))
{return cljs.core.deref(init__9699);
} else
{if(!((this__9698.root == null)))
{return this__9698.root.kv_reduce(f,init__9699);
} else
{if("\uFDD0'else")
{return init__9699;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9700 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9701 = this;
var this__9702 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9702], 0));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9703 = this;
if((this__9703.cnt > 0))
{var s__9704 = ((!((this__9703.root == null)))?this__9703.root.inode_seq():null);
if(this__9703.has_nil_QMARK_)
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([null,this__9703.nil_val], true),s__9704);
} else
{return s__9704;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9705 = this;
return this__9705.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9706 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9707 = this;
return (new cljs.core.PersistentHashMap(meta,this__9707.cnt,this__9707.root,this__9707.has_nil_QMARK_,this__9707.nil_val,this__9707.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9708 = this;
return this__9708.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9709 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,this__9709.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9710 = this;
if((k == null))
{if(this__9710.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9710.meta,(this__9710.cnt - 1),this__9710.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9710.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9711 = this__9710.root.inode_without(0,cljs.core.hash.cljs$lang$arity$1(k),k);
if((new_root__9711 === this__9710.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9710.meta,(this__9710.cnt - 1),new_root__9711,this__9710.has_nil_QMARK_,this__9710.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9713 = ks.length;
var i__9714 = 0;
var out__9715 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9714 < len__9713))
{{
var G__9716 = (i__9714 + 1);
var G__9717 = cljs.core.assoc_BANG_(out__9715,(ks[i__9714]),(vs[i__9714]));
i__9714 = G__9716;
out__9715 = G__9717;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9715);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9718 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9719 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9720 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9721 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9722 = this;
if((k == null))
{if(this__9722.has_nil_QMARK_)
{return this__9722.nil_val;
} else
{return null;
}
} else
{if((this__9722.root == null))
{return null;
} else
{return this__9722.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9723 = this;
if((k == null))
{if(this__9723.has_nil_QMARK_)
{return this__9723.nil_val;
} else
{return not_found;
}
} else
{if((this__9723.root == null))
{return not_found;
} else
{return this__9723.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9724 = this;
if(this__9724.edit)
{return this__9724.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9725 = this;
var tcoll__9726 = this;
if(this__9725.edit)
{if((function (){var G__9727__9728 = o;
if(G__9727__9728)
{if((function (){var or__3824__auto____9729 = (G__9727__9728.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9729)
{return or__3824__auto____9729;
} else
{return G__9727__9728.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9727__9728.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9727__9728);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9727__9728);
}
})())
{return tcoll__9726.assoc_BANG_(cljs.core.key(o),cljs.core.val(o));
} else
{var es__9730 = cljs.core.seq(o);
var tcoll__9731 = tcoll__9726;
while(true){
var temp__3971__auto____9732 = cljs.core.first(es__9730);
if(cljs.core.truth_(temp__3971__auto____9732))
{var e__9733 = temp__3971__auto____9732;
{
var G__9744 = cljs.core.next(es__9730);
var G__9745 = tcoll__9731.assoc_BANG_(cljs.core.key(e__9733),cljs.core.val(e__9733));
es__9730 = G__9744;
tcoll__9731 = G__9745;
continue;
}
} else
{return tcoll__9731;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9734 = this;
var tcoll__9735 = this;
if(this__9734.edit)
{if((k == null))
{if((this__9734.nil_val === v))
{} else
{this__9734.nil_val = v;
}
if(this__9734.has_nil_QMARK_)
{} else
{this__9734.count = (this__9734.count + 1);
this__9734.has_nil_QMARK_ = true;
}
return tcoll__9735;
} else
{var added_leaf_QMARK___9736 = (new cljs.core.Box(false));
var node__9737 = (((this__9734.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9734.root).inode_assoc_BANG_(this__9734.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___9736);
if((node__9737 === this__9734.root))
{} else
{this__9734.root = node__9737;
}
if(added_leaf_QMARK___9736.val)
{this__9734.count = (this__9734.count + 1);
} else
{}
return tcoll__9735;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9738 = this;
var tcoll__9739 = this;
if(this__9738.edit)
{if((k == null))
{if(this__9738.has_nil_QMARK_)
{this__9738.has_nil_QMARK_ = false;
this__9738.nil_val = null;
this__9738.count = (this__9738.count - 1);
return tcoll__9739;
} else
{return tcoll__9739;
}
} else
{if((this__9738.root == null))
{return tcoll__9739;
} else
{var removed_leaf_QMARK___9740 = (new cljs.core.Box(false));
var node__9741 = this__9738.root.inode_without_BANG_(this__9738.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,removed_leaf_QMARK___9740);
if((node__9741 === this__9738.root))
{} else
{this__9738.root = node__9741;
}
if(cljs.core.truth_((removed_leaf_QMARK___9740[0])))
{this__9738.count = (this__9738.count - 1);
} else
{}
return tcoll__9739;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9742 = this;
var tcoll__9743 = this;
if(this__9742.edit)
{this__9742.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9742.count,this__9742.root,this__9742.has_nil_QMARK_,this__9742.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9748 = node;
var stack__9749 = stack;
while(true){
if(!((t__9748 == null)))
{{
var G__9750 = ((ascending_QMARK_)?t__9748.left:t__9748.right);
var G__9751 = cljs.core.conj.cljs$lang$arity$2(stack__9749,t__9748);
t__9748 = G__9750;
stack__9749 = G__9751;
continue;
}
} else
{return stack__9749;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9752 = this;
var h__2914__auto____9753 = this__9752.__hash;
if(!((h__2914__auto____9753 == null)))
{return h__2914__auto____9753;
} else
{var h__2914__auto____9754 = cljs.core.hash_coll(coll);
this__9752.__hash = h__2914__auto____9754;
return h__2914__auto____9754;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9755 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9756 = this;
var this__9757 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9757], 0));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9758 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9759 = this;
if((this__9759.cnt < 0))
{return (cljs.core.count(cljs.core.next(coll)) + 1);
} else
{return this__9759.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9760 = this;
return cljs.core.peek(this__9760.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9761 = this;
var t__9762 = cljs.core.first(this__9761.stack);
var next_stack__9763 = cljs.core.tree_map_seq_push(((this__9761.ascending_QMARK_)?t__9762.right:t__9762.left),cljs.core.next(this__9761.stack),this__9761.ascending_QMARK_);
if(!((next_stack__9763 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9763,this__9761.ascending_QMARK_,(this__9761.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9764 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9765 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9765.stack,this__9765.ascending_QMARK_,this__9765.cnt,this__9765.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9766 = this;
return this__9766.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,right))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____9768 = cljs.core.instance_QMARK_(cljs.core.RedNode,right);
if(and__3822__auto____9768)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9768;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,left))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____9770 = cljs.core.instance_QMARK_(cljs.core.RedNode,left);
if(and__3822__auto____9770)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9770;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9774 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,node.key,node.val) : f.call(null,init,node.key,node.val));
if(cljs.core.reduced_QMARK_(init__9774))
{return cljs.core.deref(init__9774);
} else
{var init__9775 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init__9774):init__9774);
if(cljs.core.reduced_QMARK_(init__9775))
{return cljs.core.deref(init__9775);
} else
{var init__9776 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__9775):init__9775);
if(cljs.core.reduced_QMARK_(init__9776))
{return cljs.core.deref(init__9776);
} else
{return init__9776;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9779 = this;
var h__2914__auto____9780 = this__9779.__hash;
if(!((h__2914__auto____9780 == null)))
{return h__2914__auto____9780;
} else
{var h__2914__auto____9781 = cljs.core.hash_coll(coll);
this__9779.__hash = h__2914__auto____9781;
return h__2914__auto____9781;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9782 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9783 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9784 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__9784.key,this__9784.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9832 = null;
var G__9832__2 = (function (this_sym9785,k){
var this__9787 = this;
var this_sym9785__9788 = this;
var node__9789 = this_sym9785__9788;
return node__9789.cljs$core$ILookup$_lookup$arity$2(node__9789,k);
});
var G__9832__3 = (function (this_sym9786,k,not_found){
var this__9787 = this;
var this_sym9786__9790 = this;
var node__9791 = this_sym9786__9790;
return node__9791.cljs$core$ILookup$_lookup$arity$3(node__9791,k,not_found);
});
G__9832 = function(this_sym9786,k,not_found){
switch(arguments.length){
case 2:
return G__9832__2.call(this,this_sym9786,k);
case 3:
return G__9832__3.call(this,this_sym9786,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9832;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9777,args9778){
var this__9792 = this;
return this_sym9777.call.apply(this_sym9777,[this_sym9777].concat(args9778.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9793 = this;
return cljs.core.PersistentVector.fromArray([this__9793.key,this__9793.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9794 = this;
return this__9794.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9795 = this;
return this__9795.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9796 = this;
var node__9797 = this;
return ins.balance_right(node__9797);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9798 = this;
var node__9799 = this;
return (new cljs.core.RedNode(this__9798.key,this__9798.val,this__9798.left,this__9798.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9800 = this;
var node__9801 = this;
return cljs.core.balance_right_del(this__9800.key,this__9800.val,this__9800.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9802 = this;
var node__9803 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9804 = this;
var node__9805 = this;
return cljs.core.tree_map_kv_reduce(node__9805,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9806 = this;
var node__9807 = this;
return cljs.core.balance_left_del(this__9806.key,this__9806.val,del,this__9806.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9808 = this;
var node__9809 = this;
return ins.balance_left(node__9809);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9810 = this;
var node__9811 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9811,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9833 = null;
var G__9833__0 = (function (){
var this__9812 = this;
var this__9814 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9814], 0));
});
G__9833 = function(){
switch(arguments.length){
case 0:
return G__9833__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9833;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9815 = this;
var node__9816 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9816,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9817 = this;
var node__9818 = this;
return node__9818;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9819 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9820 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9821 = this;
return cljs.core.list.cljs$lang$arity$2(this__9821.key,this__9821.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9822 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9823 = this;
return this__9823.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9824 = this;
return cljs.core.PersistentVector.fromArray([this__9824.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9825 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__9825.key,this__9825.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9826 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9827 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__9827.key,this__9827.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9828 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9829 = this;
if((n === 0))
{return this__9829.key;
} else
{if((n === 1))
{return this__9829.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9830 = this;
if((n === 0))
{return this__9830.key;
} else
{if((n === 1))
{return this__9830.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9831 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9836 = this;
var h__2914__auto____9837 = this__9836.__hash;
if(!((h__2914__auto____9837 == null)))
{return h__2914__auto____9837;
} else
{var h__2914__auto____9838 = cljs.core.hash_coll(coll);
this__9836.__hash = h__2914__auto____9838;
return h__2914__auto____9838;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9839 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9840 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9841 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__9841.key,this__9841.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9889 = null;
var G__9889__2 = (function (this_sym9842,k){
var this__9844 = this;
var this_sym9842__9845 = this;
var node__9846 = this_sym9842__9845;
return node__9846.cljs$core$ILookup$_lookup$arity$2(node__9846,k);
});
var G__9889__3 = (function (this_sym9843,k,not_found){
var this__9844 = this;
var this_sym9843__9847 = this;
var node__9848 = this_sym9843__9847;
return node__9848.cljs$core$ILookup$_lookup$arity$3(node__9848,k,not_found);
});
G__9889 = function(this_sym9843,k,not_found){
switch(arguments.length){
case 2:
return G__9889__2.call(this,this_sym9843,k);
case 3:
return G__9889__3.call(this,this_sym9843,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9889;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9834,args9835){
var this__9849 = this;
return this_sym9834.call.apply(this_sym9834,[this_sym9834].concat(args9835.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9850 = this;
return cljs.core.PersistentVector.fromArray([this__9850.key,this__9850.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9851 = this;
return this__9851.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9852 = this;
return this__9852.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9853 = this;
var node__9854 = this;
return (new cljs.core.RedNode(this__9853.key,this__9853.val,this__9853.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9855 = this;
var node__9856 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9857 = this;
var node__9858 = this;
return (new cljs.core.RedNode(this__9857.key,this__9857.val,this__9857.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9859 = this;
var node__9860 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9861 = this;
var node__9862 = this;
return cljs.core.tree_map_kv_reduce(node__9862,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9863 = this;
var node__9864 = this;
return (new cljs.core.RedNode(this__9863.key,this__9863.val,del,this__9863.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9865 = this;
var node__9866 = this;
return (new cljs.core.RedNode(this__9865.key,this__9865.val,ins,this__9865.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9867 = this;
var node__9868 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9867.left))
{return (new cljs.core.RedNode(this__9867.key,this__9867.val,this__9867.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9867.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9867.right))
{return (new cljs.core.RedNode(this__9867.right.key,this__9867.right.val,(new cljs.core.BlackNode(this__9867.key,this__9867.val,this__9867.left,this__9867.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9867.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9868,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9890 = null;
var G__9890__0 = (function (){
var this__9869 = this;
var this__9871 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9871], 0));
});
G__9890 = function(){
switch(arguments.length){
case 0:
return G__9890__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9890;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9872 = this;
var node__9873 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9872.right))
{return (new cljs.core.RedNode(this__9872.key,this__9872.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9872.left,null)),this__9872.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9872.left))
{return (new cljs.core.RedNode(this__9872.left.key,this__9872.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9872.left.left,null)),(new cljs.core.BlackNode(this__9872.key,this__9872.val,this__9872.left.right,this__9872.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9873,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9874 = this;
var node__9875 = this;
return (new cljs.core.BlackNode(this__9874.key,this__9874.val,this__9874.left,this__9874.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9876 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9877 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9878 = this;
return cljs.core.list.cljs$lang$arity$2(this__9878.key,this__9878.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9879 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9880 = this;
return this__9880.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9881 = this;
return cljs.core.PersistentVector.fromArray([this__9881.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9882 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__9882.key,this__9882.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9883 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9884 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__9884.key,this__9884.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9885 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9886 = this;
if((n === 0))
{return this__9886.key;
} else
{if((n === 1))
{return this__9886.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9887 = this;
if((n === 0))
{return this__9887.key;
} else
{if((n === 1))
{return this__9887.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9888 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9894 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__9894 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9894 < 0))
{var ins__9895 = tree_map_add(comp,tree.left,k,v,found);
if(!((ins__9895 == null)))
{return tree.add_left(ins__9895);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9896 = tree_map_add(comp,tree.right,k,v,found);
if(!((ins__9896 == null)))
{return tree.add_right(ins__9896);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{var app__9899 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__9899))
{return (new cljs.core.RedNode(app__9899.key,app__9899.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9899.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9899.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9899,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9900 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__9900))
{return (new cljs.core.RedNode(app__9900.key,app__9900.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9900.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9900.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9900,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9906 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__9906 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c__9906 < 0))
{var del__9907 = tree_map_remove(comp,tree.left,k,found);
if((function (){var or__3824__auto____9908 = !((del__9907 == null));
if(or__3824__auto____9908)
{return or__3824__auto____9908;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del(tree.key,tree.val,del__9907,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9907,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9909 = tree_map_remove(comp,tree.right,k,found);
if((function (){var or__3824__auto____9910 = !((del__9909 == null));
if(or__3824__auto____9910)
{return or__3824__auto____9910;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del__9909);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9909,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9913 = tree.key;
var c__9914 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tk__9913) : comp.call(null,k,tk__9913));
if((c__9914 === 0))
{return tree.replace(tk__9913,v,tree.left,tree.right);
} else
{if((c__9914 < 0))
{return tree.replace(tk__9913,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9913,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9917 = this;
var h__2914__auto____9918 = this__9917.__hash;
if(!((h__2914__auto____9918 == null)))
{return h__2914__auto____9918;
} else
{var h__2914__auto____9919 = cljs.core.hash_imap(coll);
this__9917.__hash = h__2914__auto____9919;
return h__2914__auto____9919;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9920 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9921 = this;
var n__9922 = coll.entry_at(k);
if(!((n__9922 == null)))
{return n__9922.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9923 = this;
var found__9924 = [null];
var t__9925 = cljs.core.tree_map_add(this__9923.comp,this__9923.tree,k,v,found__9924);
if((t__9925 == null))
{var found_node__9926 = cljs.core.nth.cljs$lang$arity$2(found__9924,0);
if(cljs.core._EQ_.cljs$lang$arity$2(v,found_node__9926.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9923.comp,cljs.core.tree_map_replace(this__9923.comp,this__9923.tree,k,v),this__9923.cnt,this__9923.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9923.comp,t__9925.blacken(),(this__9923.cnt + 1),this__9923.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9927 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9961 = null;
var G__9961__2 = (function (this_sym9928,k){
var this__9930 = this;
var this_sym9928__9931 = this;
var coll__9932 = this_sym9928__9931;
return coll__9932.cljs$core$ILookup$_lookup$arity$2(coll__9932,k);
});
var G__9961__3 = (function (this_sym9929,k,not_found){
var this__9930 = this;
var this_sym9929__9933 = this;
var coll__9934 = this_sym9929__9933;
return coll__9934.cljs$core$ILookup$_lookup$arity$3(coll__9934,k,not_found);
});
G__9961 = function(this_sym9929,k,not_found){
switch(arguments.length){
case 2:
return G__9961__2.call(this,this_sym9929,k);
case 3:
return G__9961__3.call(this,this_sym9929,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9961;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9915,args9916){
var this__9935 = this;
return this_sym9915.call.apply(this_sym9915,[this_sym9915].concat(args9916.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9936 = this;
if(!((this__9936.tree == null)))
{return cljs.core.tree_map_kv_reduce(this__9936.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9937 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9938 = this;
if((this__9938.cnt > 0))
{return cljs.core.create_tree_map_seq(this__9938.tree,false,this__9938.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9939 = this;
var this__9940 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9940], 0));
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9941 = this;
var coll__9942 = this;
var t__9943 = this__9941.tree;
while(true){
if(!((t__9943 == null)))
{var c__9944 = (this__9941.comp.cljs$lang$arity$2 ? this__9941.comp.cljs$lang$arity$2(k,t__9943.key) : this__9941.comp.call(null,k,t__9943.key));
if((c__9944 === 0))
{return t__9943;
} else
{if((c__9944 < 0))
{{
var G__9962 = t__9943.left;
t__9943 = G__9962;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9963 = t__9943.right;
t__9943 = G__9963;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9945 = this;
if((this__9945.cnt > 0))
{return cljs.core.create_tree_map_seq(this__9945.tree,ascending_QMARK_,this__9945.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9946 = this;
if((this__9946.cnt > 0))
{var stack__9947 = null;
var t__9948 = this__9946.tree;
while(true){
if(!((t__9948 == null)))
{var c__9949 = (this__9946.comp.cljs$lang$arity$2 ? this__9946.comp.cljs$lang$arity$2(k,t__9948.key) : this__9946.comp.call(null,k,t__9948.key));
if((c__9949 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$lang$arity$2(stack__9947,t__9948),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9949 < 0))
{{
var G__9964 = cljs.core.conj.cljs$lang$arity$2(stack__9947,t__9948);
var G__9965 = t__9948.left;
stack__9947 = G__9964;
t__9948 = G__9965;
continue;
}
} else
{{
var G__9966 = stack__9947;
var G__9967 = t__9948.right;
stack__9947 = G__9966;
t__9948 = G__9967;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9949 > 0))
{{
var G__9968 = cljs.core.conj.cljs$lang$arity$2(stack__9947,t__9948);
var G__9969 = t__9948.right;
stack__9947 = G__9968;
t__9948 = G__9969;
continue;
}
} else
{{
var G__9970 = stack__9947;
var G__9971 = t__9948.left;
stack__9947 = G__9970;
t__9948 = G__9971;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9947 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9947,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9950 = this;
return cljs.core.key(entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9951 = this;
return this__9951.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9952 = this;
if((this__9952.cnt > 0))
{return cljs.core.create_tree_map_seq(this__9952.tree,true,this__9952.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9953 = this;
return this__9953.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9954 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9955 = this;
return (new cljs.core.PersistentTreeMap(this__9955.comp,this__9955.tree,this__9955.cnt,meta,this__9955.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9956 = this;
return this__9956.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9957 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,this__9957.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9958 = this;
var found__9959 = [null];
var t__9960 = cljs.core.tree_map_remove(this__9958.comp,this__9958.tree,k,found__9959);
if((t__9960 == null))
{if((cljs.core.nth.cljs$lang$arity$2(found__9959,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9958.comp,null,0,this__9958.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9958.comp,t__9960.blacken(),(this__9958.cnt - 1),this__9958.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9974 = cljs.core.seq(keyvals);
var out__9975 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9974)
{{
var G__9976 = cljs.core.nnext(in__9974);
var G__9977 = cljs.core.assoc_BANG_(out__9975,cljs.core.first(in__9974),cljs.core.second(in__9974));
in__9974 = G__9976;
out__9975 = G__9977;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9975);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9978){
var keyvals = cljs.core.seq(arglist__9978);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),2),cljs.core.apply.cljs$lang$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9979){
var keyvals = cljs.core.seq(arglist__9979);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__9983 = [];
var obj__9984 = {};
var kvs__9985 = cljs.core.seq(keyvals);
while(true){
if(kvs__9985)
{ks__9983.push(cljs.core.first(kvs__9985));
(obj__9984[cljs.core.first(kvs__9985)] = cljs.core.second(kvs__9985));
{
var G__9986 = cljs.core.nnext(kvs__9985);
kvs__9985 = G__9986;
continue;
}
} else
{return (cljs.core.ObjMap.fromObject.cljs$lang$arity$2 ? cljs.core.ObjMap.fromObject.cljs$lang$arity$2(ks__9983,obj__9984) : cljs.core.ObjMap.fromObject.call(null,ks__9983,obj__9984));
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__9987){
var keyvals = cljs.core.seq(arglist__9987);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9990 = cljs.core.seq(keyvals);
var out__9991 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9990)
{{
var G__9992 = cljs.core.nnext(in__9990);
var G__9993 = cljs.core.assoc.cljs$lang$arity$3(out__9991,cljs.core.first(in__9990),cljs.core.second(in__9990));
in__9990 = G__9992;
out__9991 = G__9993;
continue;
}
} else
{return out__9991;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9994){
var keyvals = cljs.core.seq(arglist__9994);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9997 = cljs.core.seq(keyvals);
var out__9998 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9997)
{{
var G__9999 = cljs.core.nnext(in__9997);
var G__10000 = cljs.core.assoc.cljs$lang$arity$3(out__9998,cljs.core.first(in__9997),cljs.core.second(in__9997));
in__9997 = G__9999;
out__9998 = G__10000;
continue;
}
} else
{return out__9998;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__10001){
var comparator = cljs.core.first(arglist__10001);
var keyvals = cljs.core.rest(arglist__10001);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$lang$arity$2((function (p1__10002_SHARP_,p2__10003_SHARP_){
return cljs.core.conj.cljs$lang$arity$2((function (){var or__3824__auto____10005 = p1__10002_SHARP_;
if(cljs.core.truth_(or__3824__auto____10005))
{return or__3824__auto____10005;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10003_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__10006){
var maps = cljs.core.seq(arglist__10006);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry__10014 = (function (m,e){
var k__10012 = cljs.core.first(e);
var v__10013 = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k__10012))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__10012,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(m,k__10012,null),v__10013) : f.call(null,cljs.core._lookup.cljs$lang$arity$3(m,k__10012,null),v__10013)));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__10012,v__10013);
}
});
var merge2__10016 = (function (m1,m2){
return cljs.core.reduce.cljs$lang$arity$3(merge_entry__10014,(function (){var or__3824__auto____10015 = m1;
if(cljs.core.truth_(or__3824__auto____10015))
{return or__3824__auto____10015;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$lang$arity$2(merge2__10016,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__10017){
var f = cljs.core.first(arglist__10017);
var maps = cljs.core.rest(arglist__10017);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__10022 = cljs.core.ObjMap.EMPTY;
var keys__10023 = cljs.core.seq(keyseq);
while(true){
if(keys__10023)
{var key__10024 = cljs.core.first(keys__10023);
var entry__10025 = cljs.core._lookup.cljs$lang$arity$3(map,key__10024,"\uFDD0'cljs.core/not-found");
{
var G__10026 = ((cljs.core.not_EQ_.cljs$lang$arity$2(entry__10025,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.cljs$lang$arity$3(ret__10022,key__10024,entry__10025):ret__10022);
var G__10027 = cljs.core.next(keys__10023);
ret__10022 = G__10026;
keys__10023 = G__10027;
continue;
}
} else
{return ret__10022;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10031 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$(this__10031.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10032 = this;
var h__2914__auto____10033 = this__10032.__hash;
if(!((h__2914__auto____10033 == null)))
{return h__2914__auto____10033;
} else
{var h__2914__auto____10034 = cljs.core.hash_iset(coll);
this__10032.__hash = h__2914__auto____10034;
return h__2914__auto____10034;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10035 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10036 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__10036.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10057 = null;
var G__10057__2 = (function (this_sym10037,k){
var this__10039 = this;
var this_sym10037__10040 = this;
var coll__10041 = this_sym10037__10040;
return coll__10041.cljs$core$ILookup$_lookup$arity$2(coll__10041,k);
});
var G__10057__3 = (function (this_sym10038,k,not_found){
var this__10039 = this;
var this_sym10038__10042 = this;
var coll__10043 = this_sym10038__10042;
return coll__10043.cljs$core$ILookup$_lookup$arity$3(coll__10043,k,not_found);
});
G__10057 = function(this_sym10038,k,not_found){
switch(arguments.length){
case 2:
return G__10057__2.call(this,this_sym10038,k);
case 3:
return G__10057__3.call(this,this_sym10038,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10057;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10029,args10030){
var this__10044 = this;
return this_sym10029.call.apply(this_sym10029,[this_sym10029].concat(args10030.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10045 = this;
return (new cljs.core.PersistentHashSet(this__10045.meta,cljs.core.assoc.cljs$lang$arity$3(this__10045.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10046 = this;
var this__10047 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10047], 0));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10048 = this;
return cljs.core.keys(this__10048.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10049 = this;
return (new cljs.core.PersistentHashSet(this__10049.meta,cljs.core.dissoc.cljs$lang$arity$2(this__10049.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10050 = this;
return cljs.core.count(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10051 = this;
var and__3822__auto____10052 = cljs.core.set_QMARK_(other);
if(and__3822__auto____10052)
{var and__3822__auto____10053 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3822__auto____10053)
{return cljs.core.every_QMARK_((function (p1__10028_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__10028_SHARP_);
}),other);
} else
{return and__3822__auto____10053;
}
} else
{return and__3822__auto____10052;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10054 = this;
return (new cljs.core.PersistentHashSet(meta,this__10054.hash_map,this__10054.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10055 = this;
return this__10055.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10056 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,this__10056.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map(),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__10058 = cljs.core.count(items);
var i__10059 = 0;
var out__10060 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__10059 < len__10058))
{{
var G__10061 = (i__10059 + 1);
var G__10062 = cljs.core.conj_BANG_(out__10060,(items[i__10059]));
i__10059 = G__10061;
out__10060 = G__10062;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__10060);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__10080 = null;
var G__10080__2 = (function (this_sym10066,k){
var this__10068 = this;
var this_sym10066__10069 = this;
var tcoll__10070 = this_sym10066__10069;
if((cljs.core._lookup.cljs$lang$arity$3(this__10068.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10080__3 = (function (this_sym10067,k,not_found){
var this__10068 = this;
var this_sym10067__10071 = this;
var tcoll__10072 = this_sym10067__10071;
if((cljs.core._lookup.cljs$lang$arity$3(this__10068.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10080 = function(this_sym10067,k,not_found){
switch(arguments.length){
case 2:
return G__10080__2.call(this,this_sym10067,k);
case 3:
return G__10080__3.call(this,this_sym10067,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10080;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10064,args10065){
var this__10073 = this;
return this_sym10064.call.apply(this_sym10064,[this_sym10064].concat(args10065.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10074 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10075 = this;
if((cljs.core._lookup.cljs$lang$arity$3(this__10075.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10076 = this;
return cljs.core.count(this__10076.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10077 = this;
this__10077.transient_map = cljs.core.dissoc_BANG_(this__10077.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10078 = this;
this__10078.transient_map = cljs.core.assoc_BANG_(this__10078.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10079 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(this__10079.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10083 = this;
var h__2914__auto____10084 = this__10083.__hash;
if(!((h__2914__auto____10084 == null)))
{return h__2914__auto____10084;
} else
{var h__2914__auto____10085 = cljs.core.hash_iset(coll);
this__10083.__hash = h__2914__auto____10085;
return h__2914__auto____10085;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10086 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10087 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__10087.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10113 = null;
var G__10113__2 = (function (this_sym10088,k){
var this__10090 = this;
var this_sym10088__10091 = this;
var coll__10092 = this_sym10088__10091;
return coll__10092.cljs$core$ILookup$_lookup$arity$2(coll__10092,k);
});
var G__10113__3 = (function (this_sym10089,k,not_found){
var this__10090 = this;
var this_sym10089__10093 = this;
var coll__10094 = this_sym10089__10093;
return coll__10094.cljs$core$ILookup$_lookup$arity$3(coll__10094,k,not_found);
});
G__10113 = function(this_sym10089,k,not_found){
switch(arguments.length){
case 2:
return G__10113__2.call(this,this_sym10089,k);
case 3:
return G__10113__3.call(this,this_sym10089,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10113;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10081,args10082){
var this__10095 = this;
return this_sym10081.call.apply(this_sym10081,[this_sym10081].concat(args10082.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10096 = this;
return (new cljs.core.PersistentTreeSet(this__10096.meta,cljs.core.assoc.cljs$lang$arity$3(this__10096.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10097 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core.rseq(this__10097.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10098 = this;
var this__10099 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10099], 0));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10100 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq(this__10100.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10101 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq_from(this__10101.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10102 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10103 = this;
return cljs.core._comparator(this__10103.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10104 = this;
return cljs.core.keys(this__10104.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10105 = this;
return (new cljs.core.PersistentTreeSet(this__10105.meta,cljs.core.dissoc.cljs$lang$arity$2(this__10105.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10106 = this;
return cljs.core.count(this__10106.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10107 = this;
var and__3822__auto____10108 = cljs.core.set_QMARK_(other);
if(and__3822__auto____10108)
{var and__3822__auto____10109 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3822__auto____10109)
{return cljs.core.every_QMARK_((function (p1__10063_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__10063_SHARP_);
}),other);
} else
{return and__3822__auto____10109;
}
} else
{return and__3822__auto____10108;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10110 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10110.tree_map,this__10110.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10111 = this;
return this__10111.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10112 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,this__10112.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map(),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__10118__delegate = function (keys){
var in__10116 = cljs.core.seq(keys);
var out__10117 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq(in__10116))
{{
var G__10119 = cljs.core.next(in__10116);
var G__10120 = cljs.core.conj_BANG_(out__10117,cljs.core.first(in__10116));
in__10116 = G__10119;
out__10117 = G__10120;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__10117);
}
break;
}
};
var G__10118 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10118__delegate.call(this, keys);
};
G__10118.cljs$lang$maxFixedArity = 0;
G__10118.cljs$lang$applyTo = (function (arglist__10121){
var keys = cljs.core.seq(arglist__10121);;
return G__10118__delegate(keys);
});
G__10118.cljs$lang$arity$variadic = G__10118__delegate;
return G__10118;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__10122){
var keys = cljs.core.seq(arglist__10122);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__10124){
var comparator = cljs.core.first(arglist__10124);
var keys = cljs.core.rest(arglist__10124);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_(coll))
{var n__10130 = cljs.core.count(coll);
return cljs.core.reduce.cljs$lang$arity$3((function (v,i){
var temp__3971__auto____10131 = cljs.core.find(smap,cljs.core.nth.cljs$lang$arity$2(v,i));
if(cljs.core.truth_(temp__3971__auto____10131))
{var e__10132 = temp__3971__auto____10131;
return cljs.core.assoc.cljs$lang$arity$3(v,i,cljs.core.second(e__10132));
} else
{return v;
}
}),coll,cljs.core.take(n__10130,cljs.core.iterate(cljs.core.inc,0)));
} else
{return cljs.core.map.cljs$lang$arity$2((function (p1__10123_SHARP_){
var temp__3971__auto____10133 = cljs.core.find(smap,p1__10123_SHARP_);
if(cljs.core.truth_(temp__3971__auto____10133))
{var e__10134 = temp__3971__auto____10133;
return cljs.core.second(e__10134);
} else
{return p1__10123_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__10164 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__10157,seen){
while(true){
var vec__10158__10159 = p__10157;
var f__10160 = cljs.core.nth.cljs$lang$arity$3(vec__10158__10159,0,null);
var xs__10161 = vec__10158__10159;
var temp__3974__auto____10162 = cljs.core.seq(xs__10161);
if(temp__3974__auto____10162)
{var s__10163 = temp__3974__auto____10162;
if(cljs.core.contains_QMARK_(seen,f__10160))
{{
var G__10165 = cljs.core.rest(s__10163);
var G__10166 = seen;
p__10157 = G__10165;
seen = G__10166;
continue;
}
} else
{return cljs.core.cons(f__10160,step(cljs.core.rest(s__10163),cljs.core.conj.cljs$lang$arity$2(seen,f__10160)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return (step__10164.cljs$lang$arity$2 ? step__10164.cljs$lang$arity$2(coll,cljs.core.PersistentHashSet.EMPTY) : step__10164.call(null,coll,cljs.core.PersistentHashSet.EMPTY));
});
cljs.core.butlast = (function butlast(s){
var ret__10169 = cljs.core.PersistentVector.EMPTY;
var s__10170 = s;
while(true){
if(cljs.core.next(s__10170))
{{
var G__10171 = cljs.core.conj.cljs$lang$arity$2(ret__10169,cljs.core.first(s__10170));
var G__10172 = cljs.core.next(s__10170);
ret__10169 = G__10171;
s__10170 = G__10172;
continue;
}
} else
{return cljs.core.seq(ret__10169);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_(x))
{return x;
} else
{if((function (){var or__3824__auto____10175 = cljs.core.keyword_QMARK_(x);
if(or__3824__auto____10175)
{return or__3824__auto____10175;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__10176 = x.lastIndexOf("/");
if((i__10176 < 0))
{return cljs.core.subs.cljs$lang$arity$2(x,2);
} else
{return cljs.core.subs.cljs$lang$arity$2(x,(i__10176 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____10179 = cljs.core.keyword_QMARK_(x);
if(or__3824__auto____10179)
{return or__3824__auto____10179;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__10180 = x.lastIndexOf("/");
if((i__10180 > -1))
{return cljs.core.subs.cljs$lang$arity$3(x,2,i__10180);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__10187 = cljs.core.ObjMap.EMPTY;
var ks__10188 = cljs.core.seq(keys);
var vs__10189 = cljs.core.seq(vals);
while(true){
if((function (){var and__3822__auto____10190 = ks__10188;
if(and__3822__auto____10190)
{return vs__10189;
} else
{return and__3822__auto____10190;
}
})())
{{
var G__10191 = cljs.core.assoc.cljs$lang$arity$3(map__10187,cljs.core.first(ks__10188),cljs.core.first(vs__10189));
var G__10192 = cljs.core.next(ks__10188);
var G__10193 = cljs.core.next(vs__10189);
map__10187 = G__10191;
ks__10188 = G__10192;
vs__10189 = G__10193;
continue;
}
} else
{return map__10187;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) > (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__10196__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10181_SHARP_,p2__10182_SHARP_){
return max_key.cljs$lang$arity$3(k,p1__10181_SHARP_,p2__10182_SHARP_);
}),max_key.cljs$lang$arity$3(k,x,y),more);
};
var G__10196 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10196__delegate.call(this, k, x, y, more);
};
G__10196.cljs$lang$maxFixedArity = 3;
G__10196.cljs$lang$applyTo = (function (arglist__10197){
var k = cljs.core.first(arglist__10197);
var x = cljs.core.first(cljs.core.next(arglist__10197));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10197)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10197)));
return G__10196__delegate(k, x, y, more);
});
G__10196.cljs$lang$arity$variadic = G__10196__delegate;
return G__10196;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) < (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__10198__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10194_SHARP_,p2__10195_SHARP_){
return min_key.cljs$lang$arity$3(k,p1__10194_SHARP_,p2__10195_SHARP_);
}),min_key.cljs$lang$arity$3(k,x,y),more);
};
var G__10198 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10198__delegate.call(this, k, x, y, more);
};
G__10198.cljs$lang$maxFixedArity = 3;
G__10198.cljs$lang$applyTo = (function (arglist__10199){
var k = cljs.core.first(arglist__10199);
var x = cljs.core.first(cljs.core.next(arglist__10199));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10199)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10199)));
return G__10198__delegate(k, x, y, more);
});
G__10198.cljs$lang$arity$variadic = G__10198__delegate;
return G__10198;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.cljs$lang$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10202 = cljs.core.seq(coll);
if(temp__3974__auto____10202)
{var s__10203 = temp__3974__auto____10202;
return cljs.core.cons(cljs.core.take(n,s__10203),partition_all.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__10203)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10206 = cljs.core.seq(coll);
if(temp__3974__auto____10206)
{var s__10207 = temp__3974__auto____10206;
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__10207)) : pred.call(null,cljs.core.first(s__10207)))))
{return cljs.core.cons(cljs.core.first(s__10207),take_while(pred,cljs.core.rest(s__10207)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__10209 = cljs.core._comparator(sc);
return (test.cljs$lang$arity$2 ? test.cljs$lang$arity$2((comp__10209.cljs$lang$arity$2 ? comp__10209.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__10209.call(null,cljs.core._entry_key(sc,e),key)),0) : test.call(null,(comp__10209.cljs$lang$arity$2 ? comp__10209.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__10209.call(null,cljs.core._entry_key(sc,e),key)),0));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__10221 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____10222 = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__3974__auto____10222))
{var vec__10223__10224 = temp__3974__auto____10222;
var e__10225 = cljs.core.nth.cljs$lang$arity$3(vec__10223__10224,0,null);
var s__10226 = vec__10223__10224;
if(cljs.core.truth_((include__10221.cljs$lang$arity$1 ? include__10221.cljs$lang$arity$1(e__10225) : include__10221.call(null,e__10225))))
{return s__10226;
} else
{return cljs.core.next(s__10226);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__10221,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10227 = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____10227))
{var vec__10228__10229 = temp__3974__auto____10227;
var e__10230 = cljs.core.nth.cljs$lang$arity$3(vec__10228__10229,0,null);
var s__10231 = vec__10228__10229;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e__10230))?s__10231:cljs.core.next(s__10231)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__10243 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____10244 = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__3974__auto____10244))
{var vec__10245__10246 = temp__3974__auto____10244;
var e__10247 = cljs.core.nth.cljs$lang$arity$3(vec__10245__10246,0,null);
var s__10248 = vec__10245__10246;
if(cljs.core.truth_((include__10243.cljs$lang$arity$1 ? include__10243.cljs$lang$arity$1(e__10247) : include__10243.call(null,e__10247))))
{return s__10248;
} else
{return cljs.core.next(s__10248);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__10243,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10249 = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____10249))
{var vec__10250__10251 = temp__3974__auto____10249;
var e__10252 = cljs.core.nth.cljs$lang$arity$3(vec__10250__10251,0,null);
var s__10253 = vec__10250__10251;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e__10252))?s__10253:cljs.core.next(s__10253)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__10254 = this;
var h__2914__auto____10255 = this__10254.__hash;
if(!((h__2914__auto____10255 == null)))
{return h__2914__auto____10255;
} else
{var h__2914__auto____10256 = cljs.core.hash_coll(rng);
this__10254.__hash = h__2914__auto____10256;
return h__2914__auto____10256;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__10257 = this;
if((this__10257.step > 0))
{if(((this__10257.start + this__10257.step) < this__10257.end))
{return (new cljs.core.Range(this__10257.meta,(this__10257.start + this__10257.step),this__10257.end,this__10257.step,null));
} else
{return null;
}
} else
{if(((this__10257.start + this__10257.step) > this__10257.end))
{return (new cljs.core.Range(this__10257.meta,(this__10257.start + this__10257.step),this__10257.end,this__10257.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__10258 = this;
return cljs.core.cons(o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__10259 = this;
var this__10260 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10260], 0));
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__10261 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__10262 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__10263 = this;
if((this__10263.step > 0))
{if((this__10263.start < this__10263.end))
{return rng;
} else
{return null;
}
} else
{if((this__10263.start > this__10263.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__10264 = this;
if(cljs.core.not(rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__10264.end - this__10264.start) / this__10264.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__10265 = this;
return this__10265.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__10266 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__10266.meta,(this__10266.start + this__10266.step),this__10266.end,this__10266.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__10267 = this;
return cljs.core.equiv_sequential(rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__10268 = this;
return (new cljs.core.Range(meta,this__10268.start,this__10268.end,this__10268.step,this__10268.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__10269 = this;
return this__10269.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__10270 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10270.start + (n * this__10270.step));
} else
{if((function (){var and__3822__auto____10271 = (this__10270.start > this__10270.end);
if(and__3822__auto____10271)
{return (this__10270.step === 0);
} else
{return and__3822__auto____10271;
}
})())
{return this__10270.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__10272 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10272.start + (n * this__10272.step));
} else
{if((function (){var and__3822__auto____10273 = (this__10272.start > this__10272.end);
if(and__3822__auto____10273)
{return (this__10272.step === 0);
} else
{return and__3822__auto____10273;
}
})())
{return this__10272.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__10274 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__10274.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$lang$arity$3(0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.cljs$lang$arity$3(0,end,1);
});
var range__2 = (function (start,end){
return range.cljs$lang$arity$3(start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10277 = cljs.core.seq(coll);
if(temp__3974__auto____10277)
{var s__10278 = temp__3974__auto____10277;
return cljs.core.cons(cljs.core.first(s__10278),take_nth(n,cljs.core.drop(n,s__10278)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while(pred,coll),cljs.core.drop_while(pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10285 = cljs.core.seq(coll);
if(temp__3974__auto____10285)
{var s__10286 = temp__3974__auto____10285;
var fst__10287 = cljs.core.first(s__10286);
var fv__10288 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(fst__10287) : f.call(null,fst__10287));
var run__10289 = cljs.core.cons(fst__10287,cljs.core.take_while((function (p1__10279_SHARP_){
return cljs.core._EQ_.cljs$lang$arity$2(fv__10288,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(p1__10279_SHARP_) : f.call(null,p1__10279_SHARP_)));
}),cljs.core.next(s__10286)));
return cljs.core.cons(run__10289,partition_by(f,cljs.core.seq(cljs.core.drop(cljs.core.count(run__10289),s__10286))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (counts,x){
return cljs.core.assoc_BANG_(counts,x,(cljs.core._lookup.cljs$lang$arity$3(counts,x,0) + 1));
}),cljs.core.transient$(cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10304 = cljs.core.seq(coll);
if(temp__3971__auto____10304)
{var s__10305 = temp__3971__auto____10304;
return reductions.cljs$lang$arity$3(f,cljs.core.first(s__10305),cljs.core.rest(s__10305));
} else
{return cljs.core.list.cljs$lang$arity$1((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10306 = cljs.core.seq(coll);
if(temp__3974__auto____10306)
{var s__10307 = temp__3974__auto____10306;
return reductions.cljs$lang$arity$3(f,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(init,cljs.core.first(s__10307)) : f.call(null,init,cljs.core.first(s__10307))),cljs.core.rest(s__10307));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__10310 = null;
var G__10310__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null))], 0));
});
var G__10310__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x))], 0));
});
var G__10310__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y))], 0));
});
var G__10310__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z))], 0));
});
var G__10310__4 = (function() { 
var G__10311__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args)], 0));
};
var G__10311 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10311__delegate.call(this, x, y, z, args);
};
G__10311.cljs$lang$maxFixedArity = 3;
G__10311.cljs$lang$applyTo = (function (arglist__10312){
var x = cljs.core.first(arglist__10312);
var y = cljs.core.first(cljs.core.next(arglist__10312));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10312)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10312)));
return G__10311__delegate(x, y, z, args);
});
G__10311.cljs$lang$arity$variadic = G__10311__delegate;
return G__10311;
})()
;
G__10310 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10310__0.call(this);
case 1:
return G__10310__1.call(this,x);
case 2:
return G__10310__2.call(this,x,y);
case 3:
return G__10310__3.call(this,x,y,z);
default:
return G__10310__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10310.cljs$lang$maxFixedArity = 3;
G__10310.cljs$lang$applyTo = G__10310__4.cljs$lang$applyTo;
return G__10310;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10313 = null;
var G__10313__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))], 0));
});
var G__10313__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))], 0));
});
var G__10313__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))], 0));
});
var G__10313__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))], 0));
});
var G__10313__4 = (function() { 
var G__10314__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)], 0));
};
var G__10314 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10314__delegate.call(this, x, y, z, args);
};
G__10314.cljs$lang$maxFixedArity = 3;
G__10314.cljs$lang$applyTo = (function (arglist__10315){
var x = cljs.core.first(arglist__10315);
var y = cljs.core.first(cljs.core.next(arglist__10315));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10315)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10315)));
return G__10314__delegate(x, y, z, args);
});
G__10314.cljs$lang$arity$variadic = G__10314__delegate;
return G__10314;
})()
;
G__10313 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10313__0.call(this);
case 1:
return G__10313__1.call(this,x);
case 2:
return G__10313__2.call(this,x,y);
case 3:
return G__10313__3.call(this,x,y,z);
default:
return G__10313__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10313.cljs$lang$maxFixedArity = 3;
G__10313.cljs$lang$applyTo = G__10313__4.cljs$lang$applyTo;
return G__10313;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10316 = null;
var G__10316__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null)),(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))], 0));
});
var G__10316__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x)),(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))], 0));
});
var G__10316__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y)),(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))], 0));
});
var G__10316__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z)),(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))], 0));
});
var G__10316__4 = (function() { 
var G__10317__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)], 0));
};
var G__10317 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10317__delegate.call(this, x, y, z, args);
};
G__10317.cljs$lang$maxFixedArity = 3;
G__10317.cljs$lang$applyTo = (function (arglist__10318){
var x = cljs.core.first(arglist__10318);
var y = cljs.core.first(cljs.core.next(arglist__10318));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10318)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10318)));
return G__10317__delegate(x, y, z, args);
});
G__10317.cljs$lang$arity$variadic = G__10317__delegate;
return G__10317;
})()
;
G__10316 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10316__0.call(this);
case 1:
return G__10316__1.call(this,x);
case 2:
return G__10316__2.call(this,x,y);
case 3:
return G__10316__3.call(this,x,y,z);
default:
return G__10316__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10316.cljs$lang$maxFixedArity = 3;
G__10316.cljs$lang$applyTo = G__10316__4.cljs$lang$applyTo;
return G__10316;
})()
});
var juxt__4 = (function() { 
var G__10319__delegate = function (f,g,h,fs){
var fs__10309 = cljs.core.list_STAR_.cljs$lang$arity$4(f,g,h,fs);
return (function() {
var G__10320 = null;
var G__10320__0 = (function (){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10290_SHARP_,p2__10291_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10290_SHARP_,(p2__10291_SHARP_.cljs$lang$arity$0 ? p2__10291_SHARP_.cljs$lang$arity$0() : p2__10291_SHARP_.call(null)));
}),cljs.core.PersistentVector.EMPTY,fs__10309);
});
var G__10320__1 = (function (x){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10292_SHARP_,p2__10293_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10292_SHARP_,(p2__10293_SHARP_.cljs$lang$arity$1 ? p2__10293_SHARP_.cljs$lang$arity$1(x) : p2__10293_SHARP_.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,fs__10309);
});
var G__10320__2 = (function (x,y){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10294_SHARP_,p2__10295_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10294_SHARP_,(p2__10295_SHARP_.cljs$lang$arity$2 ? p2__10295_SHARP_.cljs$lang$arity$2(x,y) : p2__10295_SHARP_.call(null,x,y)));
}),cljs.core.PersistentVector.EMPTY,fs__10309);
});
var G__10320__3 = (function (x,y,z){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10296_SHARP_,p2__10297_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10296_SHARP_,(p2__10297_SHARP_.cljs$lang$arity$3 ? p2__10297_SHARP_.cljs$lang$arity$3(x,y,z) : p2__10297_SHARP_.call(null,x,y,z)));
}),cljs.core.PersistentVector.EMPTY,fs__10309);
});
var G__10320__4 = (function() { 
var G__10321__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10298_SHARP_,p2__10299_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10298_SHARP_,cljs.core.apply.cljs$lang$arity$5(p2__10299_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10309);
};
var G__10321 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10321__delegate.call(this, x, y, z, args);
};
G__10321.cljs$lang$maxFixedArity = 3;
G__10321.cljs$lang$applyTo = (function (arglist__10322){
var x = cljs.core.first(arglist__10322);
var y = cljs.core.first(cljs.core.next(arglist__10322));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10322)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10322)));
return G__10321__delegate(x, y, z, args);
});
G__10321.cljs$lang$arity$variadic = G__10321__delegate;
return G__10321;
})()
;
G__10320 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10320__0.call(this);
case 1:
return G__10320__1.call(this,x);
case 2:
return G__10320__2.call(this,x,y);
case 3:
return G__10320__3.call(this,x,y,z);
default:
return G__10320__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10320.cljs$lang$maxFixedArity = 3;
G__10320.cljs$lang$applyTo = G__10320__4.cljs$lang$applyTo;
return G__10320;
})()
};
var G__10319 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10319__delegate.call(this, f, g, h, fs);
};
G__10319.cljs$lang$maxFixedArity = 3;
G__10319.cljs$lang$applyTo = (function (arglist__10323){
var f = cljs.core.first(arglist__10323);
var g = cljs.core.first(cljs.core.next(arglist__10323));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10323)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10323)));
return G__10319__delegate(f, g, h, fs);
});
G__10319.cljs$lang$arity$variadic = G__10319__delegate;
return G__10319;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll))
{{
var G__10326 = cljs.core.next(coll);
coll = G__10326;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10325 = cljs.core.seq(coll);
if(and__3822__auto____10325)
{return (n > 0);
} else
{return and__3822__auto____10325;
}
})()))
{{
var G__10327 = (n - 1);
var G__10328 = cljs.core.next(coll);
n = G__10327;
coll = G__10328;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$lang$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$lang$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__10330 = re.exec(s);
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(matches__10330),s))
{if((cljs.core.count(matches__10330) === 1))
{return cljs.core.first(matches__10330);
} else
{return cljs.core.vec(matches__10330);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__10332 = re.exec(s);
if((matches__10332 == null))
{return null;
} else
{if((cljs.core.count(matches__10332) === 1))
{return cljs.core.first(matches__10332);
} else
{return cljs.core.vec(matches__10332);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10337 = cljs.core.re_find(re,s);
var match_idx__10338 = s.search(re);
var match_str__10339 = ((cljs.core.coll_QMARK_(match_data__10337))?cljs.core.first(match_data__10337):match_data__10337);
var post_match__10340 = cljs.core.subs.cljs$lang$arity$2(s,(match_idx__10338 + cljs.core.count(match_str__10339)));
if(cljs.core.truth_(match_data__10337))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(match_data__10337,re_seq(re,post_match__10340));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10347__10348 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10349 = cljs.core.nth.cljs$lang$arity$3(vec__10347__10348,0,null);
var flags__10350 = cljs.core.nth.cljs$lang$arity$3(vec__10347__10348,1,null);
var pattern__10351 = cljs.core.nth.cljs$lang$arity$3(vec__10347__10348,2,null);
return (new RegExp(pattern__10351,flags__10350));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1(cljs.core.interpose(cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.cljs$lang$arity$2((function (p1__10341_SHARP_){
return (print_one.cljs$lang$arity$2 ? print_one.cljs$lang$arity$2(p1__10341_SHARP_,opts) : print_one.call(null,p1__10341_SHARP_,opts));
}),coll))),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([end], true)], 0));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_(x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.cljs$lang$arity$1("nil");
} else
{if((void 0 === obj))
{return cljs.core.list.cljs$lang$arity$1("#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.cljs$lang$arity$2((cljs.core.truth_((function (){var and__3822__auto____10361 = cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10361))
{var and__3822__auto____10365 = (function (){var G__10362__10363 = obj;
if(G__10362__10363)
{if((function (){var or__3824__auto____10364 = (G__10362__10363.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10364)
{return or__3824__auto____10364;
} else
{return G__10362__10363.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10362__10363.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__10362__10363);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__10362__10363);
}
})();
if(cljs.core.truth_(and__3822__auto____10365))
{return cljs.core.meta(obj);
} else
{return and__3822__auto____10365;
}
} else
{return and__3822__auto____10361;
}
})())?cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["^"], true),pr_seq(cljs.core.meta(obj),opts),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([" "], true)], 0)):null),(((function (){var and__3822__auto____10366 = !((obj == null));
if(and__3822__auto____10366)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10366;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10367__10368 = obj;
if(G__10367__10368)
{if((function (){var or__3824__auto____10369 = (G__10367__10368.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10369)
{return or__3824__auto____10369;
} else
{return G__10367__10368.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10367__10368.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__10367__10368);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__10367__10368);
}
})())?cljs.core._pr_seq(obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_(obj))?cljs.core.list.cljs$lang$arity$3("#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10389 = (new goog.string.StringBuffer());
var G__10390__10391 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__10390__10391)
{var string__10392 = cljs.core.first(G__10390__10391);
var G__10390__10393 = G__10390__10391;
while(true){
sb__10389.append(string__10392);
var temp__3974__auto____10394 = cljs.core.next(G__10390__10393);
if(temp__3974__auto____10394)
{var G__10390__10395 = temp__3974__auto____10394;
{
var G__10408 = cljs.core.first(G__10390__10395);
var G__10409 = G__10390__10395;
string__10392 = G__10408;
G__10390__10393 = G__10409;
continue;
}
} else
{}
break;
}
} else
{}
var G__10396__10397 = cljs.core.seq(cljs.core.next(objs));
if(G__10396__10397)
{var obj__10398 = cljs.core.first(G__10396__10397);
var G__10396__10399 = G__10396__10397;
while(true){
sb__10389.append(" ");
var G__10400__10401 = cljs.core.seq(cljs.core.pr_seq(obj__10398,opts));
if(G__10400__10401)
{var string__10402 = cljs.core.first(G__10400__10401);
var G__10400__10403 = G__10400__10401;
while(true){
sb__10389.append(string__10402);
var temp__3974__auto____10404 = cljs.core.next(G__10400__10403);
if(temp__3974__auto____10404)
{var G__10400__10405 = temp__3974__auto____10404;
{
var G__10410 = cljs.core.first(G__10400__10405);
var G__10411 = G__10400__10405;
string__10402 = G__10410;
G__10400__10403 = G__10411;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10406 = cljs.core.next(G__10396__10399);
if(temp__3974__auto____10406)
{var G__10396__10407 = temp__3974__auto____10406;
{
var G__10412 = cljs.core.first(G__10396__10407);
var G__10413 = G__10396__10407;
obj__10398 = G__10412;
G__10396__10399 = G__10413;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10389;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb(objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__10415 = cljs.core.pr_sb(objs,opts);
sb__10415.append("\n");
return [cljs.core.str(sb__10415)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10434__10435 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__10434__10435)
{var string__10436 = cljs.core.first(G__10434__10435);
var G__10434__10437 = G__10434__10435;
while(true){
cljs.core.string_print(string__10436);
var temp__3974__auto____10438 = cljs.core.next(G__10434__10437);
if(temp__3974__auto____10438)
{var G__10434__10439 = temp__3974__auto____10438;
{
var G__10452 = cljs.core.first(G__10434__10439);
var G__10453 = G__10434__10439;
string__10436 = G__10452;
G__10434__10437 = G__10453;
continue;
}
} else
{}
break;
}
} else
{}
var G__10440__10441 = cljs.core.seq(cljs.core.next(objs));
if(G__10440__10441)
{var obj__10442 = cljs.core.first(G__10440__10441);
var G__10440__10443 = G__10440__10441;
while(true){
cljs.core.string_print(" ");
var G__10444__10445 = cljs.core.seq(cljs.core.pr_seq(obj__10442,opts));
if(G__10444__10445)
{var string__10446 = cljs.core.first(G__10444__10445);
var G__10444__10447 = G__10444__10445;
while(true){
cljs.core.string_print(string__10446);
var temp__3974__auto____10448 = cljs.core.next(G__10444__10447);
if(temp__3974__auto____10448)
{var G__10444__10449 = temp__3974__auto____10448;
{
var G__10454 = cljs.core.first(G__10444__10449);
var G__10455 = G__10444__10449;
string__10446 = G__10454;
G__10444__10447 = G__10455;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10450 = cljs.core.next(G__10440__10443);
if(temp__3974__auto____10450)
{var G__10440__10451 = temp__3974__auto____10450;
{
var G__10456 = cljs.core.first(G__10440__10451);
var G__10457 = G__10440__10451;
obj__10442 = G__10456;
G__10440__10443 = G__10457;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush();
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__10458){
var objs = cljs.core.seq(arglist__10458);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__10459){
var objs = cljs.core.seq(arglist__10459);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__10460){
var objs = cljs.core.seq(arglist__10460);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__10461){
var objs = cljs.core.seq(arglist__10461);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10462){
var objs = cljs.core.seq(arglist__10462);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
return cljs.core.newline(cljs.core.pr_opts());
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10463){
var objs = cljs.core.seq(arglist__10463);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10464){
var objs = cljs.core.seq(arglist__10464);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
return cljs.core.newline(cljs.core.pr_opts());
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10465){
var objs = cljs.core.seq(arglist__10465);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$3(cljs.core.format,fmt,args)], 0));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__10466){
var fmt = cljs.core.first(arglist__10466);
var args = cljs.core.rest(arglist__10466);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10467 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10467,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10468 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10468,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10469 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10469,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10470 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__3974__auto____10470))
{var nspc__10471 = temp__3974__auto____10470;
return [cljs.core.str(nspc__10471),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str((function (){var temp__3974__auto____10472 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__3974__auto____10472))
{var nspc__10473 = temp__3974__auto____10472;
return [cljs.core.str(nspc__10473),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.cljs$lang$arity$1((cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10474 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10474,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.cljs$lang$arity$1("()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10476 = (function (n,len){
var ns__10475 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns__10475) < len))
{{
var G__10478 = [cljs.core.str("0"),cljs.core.str(ns__10475)].join('');
ns__10475 = G__10478;
continue;
}
} else
{return ns__10475;
}
break;
}
});
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str((normalize__10476.cljs$lang$arity$2 ? normalize__10476.cljs$lang$arity$2((d.getUTCMonth() + 1),2) : normalize__10476.call(null,(d.getUTCMonth() + 1),2))),cljs.core.str("-"),cljs.core.str((normalize__10476.cljs$lang$arity$2 ? normalize__10476.cljs$lang$arity$2(d.getUTCDate(),2) : normalize__10476.call(null,d.getUTCDate(),2))),cljs.core.str("T"),cljs.core.str((normalize__10476.cljs$lang$arity$2 ? normalize__10476.cljs$lang$arity$2(d.getUTCHours(),2) : normalize__10476.call(null,d.getUTCHours(),2))),cljs.core.str(":"),cljs.core.str((normalize__10476.cljs$lang$arity$2 ? normalize__10476.cljs$lang$arity$2(d.getUTCMinutes(),2) : normalize__10476.call(null,d.getUTCMinutes(),2))),cljs.core.str(":"),cljs.core.str((normalize__10476.cljs$lang$arity$2 ? normalize__10476.cljs$lang$arity$2(d.getUTCSeconds(),2) : normalize__10476.call(null,d.getUTCSeconds(),2))),cljs.core.str("."),cljs.core.str((normalize__10476.cljs$lang$arity$2 ? normalize__10476.cljs$lang$arity$2(d.getUTCMilliseconds(),3) : normalize__10476.call(null,d.getUTCMilliseconds(),3))),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10477 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10477,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.cljs$lang$arity$2(x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10479 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10480 = this;
var G__10481__10482 = cljs.core.seq(this__10480.watches);
if(G__10481__10482)
{var G__10484__10486 = cljs.core.first(G__10481__10482);
var vec__10485__10487 = G__10484__10486;
var key__10488 = cljs.core.nth.cljs$lang$arity$3(vec__10485__10487,0,null);
var f__10489 = cljs.core.nth.cljs$lang$arity$3(vec__10485__10487,1,null);
var G__10481__10490 = G__10481__10482;
var G__10484__10491 = G__10484__10486;
var G__10481__10492 = G__10481__10490;
while(true){
var vec__10493__10494 = G__10484__10491;
var key__10495 = cljs.core.nth.cljs$lang$arity$3(vec__10493__10494,0,null);
var f__10496 = cljs.core.nth.cljs$lang$arity$3(vec__10493__10494,1,null);
var G__10481__10497 = G__10481__10492;
(f__10496.cljs$lang$arity$4 ? f__10496.cljs$lang$arity$4(key__10495,this$,oldval,newval) : f__10496.call(null,key__10495,this$,oldval,newval));
var temp__3974__auto____10498 = cljs.core.next(G__10481__10497);
if(temp__3974__auto____10498)
{var G__10481__10499 = temp__3974__auto____10498;
{
var G__10506 = cljs.core.first(G__10481__10499);
var G__10507 = G__10481__10499;
G__10484__10491 = G__10506;
G__10481__10492 = G__10507;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10500 = this;
return this$.watches = cljs.core.assoc.cljs$lang$arity$3(this__10500.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10501 = this;
return this$.watches = cljs.core.dissoc.cljs$lang$arity$2(this__10501.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10502 = this;
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq(this__10502.state,opts),cljs.core.array_seq([">"], 0));
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10503 = this;
return this__10503.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10504 = this;
return this__10504.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10505 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10519__delegate = function (x,p__10508){
var map__10514__10515 = p__10508;
var map__10514__10516 = ((cljs.core.seq_QMARK_(map__10514__10515))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__10514__10515):map__10514__10515);
var validator__10517 = cljs.core._lookup.cljs$lang$arity$3(map__10514__10516,"\uFDD0'validator",null);
var meta__10518 = cljs.core._lookup.cljs$lang$arity$3(map__10514__10516,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10518,validator__10517,null));
};
var G__10519 = function (x,var_args){
var p__10508 = null;
if (goog.isDef(var_args)) {
  p__10508 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10519__delegate.call(this, x, p__10508);
};
G__10519.cljs$lang$maxFixedArity = 1;
G__10519.cljs$lang$applyTo = (function (arglist__10520){
var x = cljs.core.first(arglist__10520);
var p__10508 = cljs.core.rest(arglist__10520);
return G__10519__delegate(x, p__10508);
});
G__10519.cljs$lang$arity$variadic = G__10519__delegate;
return G__10519;
})()
;
atom = function(x,var_args){
var p__10508 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____10524 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10524))
{var validate__10525 = temp__3974__auto____10524;
if(cljs.core.truth_((validate__10525.cljs$lang$arity$1 ? validate__10525.cljs$lang$arity$1(new_value) : validate__10525.call(null,new_value))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))], 0)))].join('')));
}
} else
{}
var old_value__10526 = a.state;
a.state = new_value;
cljs.core._notify_watches(a,old_value__10526,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a.state) : f.call(null,a.state)));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a.state,x) : f.call(null,a.state,x)));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a.state,x,y) : f.call(null,a.state,x,y)));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a.state,x,y,z) : f.call(null,a.state,x,y,z)));
});
var swap_BANG___6 = (function() { 
var G__10527__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$lang$arity$variadic(f,a.state,x,y,z,cljs.core.array_seq([more], 0)));
};
var G__10527 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10527__delegate.call(this, a, f, x, y, z, more);
};
G__10527.cljs$lang$maxFixedArity = 5;
G__10527.cljs$lang$applyTo = (function (arglist__10528){
var a = cljs.core.first(arglist__10528);
var f = cljs.core.first(cljs.core.next(arglist__10528));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10528)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10528))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10528)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10528)))));
return G__10527__delegate(a, f, x, y, z, more);
});
G__10527.cljs$lang$arity$variadic = G__10527__delegate;
return G__10527;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$lang$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$lang$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10529){
var iref = cljs.core.first(arglist__10529);
var f = cljs.core.first(cljs.core.next(arglist__10529));
var args = cljs.core.rest(cljs.core.next(arglist__10529));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$lang$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.cljs$lang$arity$1(0);
} else
{}
return cljs.core.symbol.cljs$lang$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$lang$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10530 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref(this__10530.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10531 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.cljs$lang$arity$2(this__10531.state,(function (p__10532){
var map__10533__10534 = p__10532;
var map__10533__10535 = ((cljs.core.seq_QMARK_(map__10533__10534))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__10533__10534):map__10533__10534);
var curr_state__10536 = map__10533__10535;
var done__10537 = cljs.core._lookup.cljs$lang$arity$3(map__10533__10535,"\uFDD0'done",null);
if(cljs.core.truth_(done__10537))
{return curr_state__10536;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":(this__10531.f.cljs$lang$arity$0 ? this__10531.f.cljs$lang$arity$0() : this__10531.f.call(null))});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_(cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x))
{return cljs.core.deref(x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__10558__10559 = options;
var map__10558__10560 = ((cljs.core.seq_QMARK_(map__10558__10559))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__10558__10559):map__10558__10559);
var keywordize_keys__10561 = cljs.core._lookup.cljs$lang$arity$3(map__10558__10560,"\uFDD0'keywordize-keys",null);
var keyfn__10562 = (cljs.core.truth_(keywordize_keys__10561)?cljs.core.keyword:cljs.core.str);
var f__10577 = (function thisfn(x){
if(cljs.core.seq_QMARK_(x))
{return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.coll_QMARK_(x))
{return cljs.core.into(cljs.core.empty(x),cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if((cljs.core.type(x) === Object))
{return cljs.core.into(cljs.core.ObjMap.EMPTY,(function (){var iter__3184__auto____10576 = (function iter__10570(s__10571){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10571__10574 = s__10571;
while(true){
if(cljs.core.seq(s__10571__10574))
{var k__10575 = cljs.core.first(s__10571__10574);
return cljs.core.cons(cljs.core.PersistentVector.fromArray([(keyfn__10562.cljs$lang$arity$1 ? keyfn__10562.cljs$lang$arity$1(k__10575) : keyfn__10562.call(null,k__10575)),thisfn((x[k__10575]))], true),iter__10570(cljs.core.rest(s__10571__10574)));
} else
{return null;
}
break;
}
}),null));
});
return (iter__3184__auto____10576.cljs$lang$arity$1 ? iter__3184__auto____10576.cljs$lang$arity$1(cljs.core.js_keys(x)) : iter__3184__auto____10576.call(null,cljs.core.js_keys(x)));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return (f__10577.cljs$lang$arity$1 ? f__10577.cljs$lang$arity$1(x) : f__10577.call(null,x));
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10578){
var x = cljs.core.first(arglist__10578);
var options = cljs.core.rest(arglist__10578);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__10583 = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10587__delegate = function (args){
var temp__3971__auto____10584 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(mem__10583),args,null);
if(cljs.core.truth_(temp__3971__auto____10584))
{var v__10585 = temp__3971__auto____10584;
return v__10585;
} else
{var ret__10586 = cljs.core.apply.cljs$lang$arity$2(f,args);
cljs.core.swap_BANG_.cljs$lang$arity$4(mem__10583,cljs.core.assoc,args,ret__10586);
return ret__10586;
}
};
var G__10587 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10587__delegate.call(this, args);
};
G__10587.cljs$lang$maxFixedArity = 0;
G__10587.cljs$lang$applyTo = (function (arglist__10588){
var args = cljs.core.seq(arglist__10588);;
return G__10587__delegate(args);
});
G__10587.cljs$lang$arity$variadic = G__10587__delegate;
return G__10587;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__10590 = (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret__10590))
{{
var G__10591 = ret__10590;
f = G__10591;
continue;
}
} else
{return ret__10590;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10592__delegate = function (f,args){
return trampoline.cljs$lang$arity$1((function (){
return cljs.core.apply.cljs$lang$arity$2(f,args);
}));
};
var G__10592 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10592__delegate.call(this, f, args);
};
G__10592.cljs$lang$maxFixedArity = 1;
G__10592.cljs$lang$applyTo = (function (arglist__10593){
var f = cljs.core.first(arglist__10593);
var args = cljs.core.rest(arglist__10593);
return G__10592__delegate(f, args);
});
G__10592.cljs$lang$arity$variadic = G__10592__delegate;
return G__10592;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$lang$arity$1(1);
});
var rand__1 = (function (n){
return ((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)) : Math.floor.call(null,((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$lang$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,x){
var k__10595 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x));
return cljs.core.assoc.cljs$lang$arity$3(ret,k__10595,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(ret,k__10595,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.cljs$lang$arity$1(cljs.core.make_hierarchy());
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$lang$arity$3(cljs.core.deref(cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____10604 = cljs.core._EQ_.cljs$lang$arity$2(child,parent);
if(or__3824__auto____10604)
{return or__3824__auto____10604;
} else
{var or__3824__auto____10605 = cljs.core.contains_QMARK_((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10605)
{return or__3824__auto____10605;
} else
{var and__3822__auto____10606 = cljs.core.vector_QMARK_(parent);
if(and__3822__auto____10606)
{var and__3822__auto____10607 = cljs.core.vector_QMARK_(child);
if(and__3822__auto____10607)
{var and__3822__auto____10608 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3822__auto____10608)
{var ret__10609 = true;
var i__10610 = 0;
while(true){
if((function (){var or__3824__auto____10611 = cljs.core.not(ret__10609);
if(or__3824__auto____10611)
{return or__3824__auto____10611;
} else
{return (i__10610 === cljs.core.count(parent));
}
})())
{return ret__10609;
} else
{{
var G__10612 = isa_QMARK_.cljs$lang$arity$3(h,(child.cljs$lang$arity$1 ? child.cljs$lang$arity$1(i__10610) : child.call(null,i__10610)),(parent.cljs$lang$arity$1 ? parent.cljs$lang$arity$1(i__10610) : parent.call(null,i__10610)));
var G__10613 = (i__10610 + 1);
ret__10609 = G__10612;
i__10610 = G__10613;
continue;
}
}
break;
}
} else
{return and__3822__auto____10608;
}
} else
{return and__3822__auto____10607;
}
} else
{return and__3822__auto____10606;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))], 0)))].join('')));
}
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$lang$arity$2(tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))], 0)))].join('')));
}
var tp__10622 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10623 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10624 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10625 = (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,k){
return cljs.core.assoc.cljs$lang$arity$3(ret,k,cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core._lookup.cljs$lang$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(targets.cljs$lang$arity$1 ? targets.cljs$lang$arity$1(target) : targets.call(null,target)))));
}),m,cljs.core.cons(source,(sources.cljs$lang$arity$1 ? sources.cljs$lang$arity$1(source) : sources.call(null,source))));
});
var or__3824__auto____10626 = ((cljs.core.contains_QMARK_((tp__10622.cljs$lang$arity$1 ? tp__10622.cljs$lang$arity$1(tag) : tp__10622.call(null,tag)),parent))?null:(function (){if(cljs.core.contains_QMARK_((ta__10624.cljs$lang$arity$1 ? ta__10624.cljs$lang$arity$1(tag) : ta__10624.call(null,tag)),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_((ta__10624.cljs$lang$arity$1 ? ta__10624.cljs$lang$arity$1(parent) : ta__10624.call(null,parent)),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(tp__10622,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":(tf__10625.cljs$lang$arity$5 ? tf__10625.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10623,parent,ta__10624) : tf__10625.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10623,parent,ta__10624)),"\uFDD0'descendants":(tf__10625.cljs$lang$arity$5 ? tf__10625.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10624,tag,td__10623) : tf__10625.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10624,tag,td__10623))});
})());
if(cljs.core.truth_(or__3824__auto____10626))
{return or__3824__auto____10626;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10631 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10632 = (cljs.core.truth_((parentMap__10631.cljs$lang$arity$1 ? parentMap__10631.cljs$lang$arity$1(tag) : parentMap__10631.call(null,tag)))?cljs.core.disj.cljs$lang$arity$2((parentMap__10631.cljs$lang$arity$1 ? parentMap__10631.cljs$lang$arity$1(tag) : parentMap__10631.call(null,tag)),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10633 = (cljs.core.truth_(cljs.core.not_empty(childsParents__10632))?cljs.core.assoc.cljs$lang$arity$3(parentMap__10631,tag,childsParents__10632):cljs.core.dissoc.cljs$lang$arity$2(parentMap__10631,tag));
var deriv_seq__10634 = cljs.core.flatten(cljs.core.map.cljs$lang$arity$2((function (p1__10614_SHARP_){
return cljs.core.cons(cljs.core.first(p1__10614_SHARP_),cljs.core.interpose(cljs.core.first(p1__10614_SHARP_),cljs.core.second(p1__10614_SHARP_)));
}),cljs.core.seq(newParents__10633)));
if(cljs.core.contains_QMARK_((parentMap__10631.cljs$lang$arity$1 ? parentMap__10631.cljs$lang$arity$1(tag) : parentMap__10631.call(null,tag)),parent))
{return cljs.core.reduce.cljs$lang$arity$3((function (p1__10615_SHARP_,p2__10616_SHARP_){
return cljs.core.apply.cljs$lang$arity$3(cljs.core.derive,p1__10615_SHARP_,p2__10616_SHARP_);
}),cljs.core.make_hierarchy(),cljs.core.partition.cljs$lang$arity$2(2,deriv_seq__10634));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$lang$arity$2(method_cache,(function (_){
return cljs.core.deref(method_table);
}));
return cljs.core.swap_BANG_.cljs$lang$arity$2(cached_hierarchy,(function (_){
return cljs.core.deref(hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10642 = cljs.core.deref(prefer_table).call(null,x);
var or__3824__auto____10644 = (cljs.core.truth_((function (){var and__3822__auto____10643 = xprefs__10642;
if(cljs.core.truth_(and__3822__auto____10643))
{return (xprefs__10642.cljs$lang$arity$1 ? xprefs__10642.cljs$lang$arity$1(y) : xprefs__10642.call(null,y));
} else
{return and__3822__auto____10643;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10644))
{return or__3824__auto____10644;
} else
{var or__3824__auto____10646 = (function (){var ps__10645 = cljs.core.parents.cljs$lang$arity$1(y);
while(true){
if((cljs.core.count(ps__10645) > 0))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps__10645),prefer_table)))
{} else
{}
{
var G__10649 = cljs.core.rest(ps__10645);
ps__10645 = G__10649;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10646))
{return or__3824__auto____10646;
} else
{var or__3824__auto____10648 = (function (){var ps__10647 = cljs.core.parents.cljs$lang$arity$1(x);
while(true){
if((cljs.core.count(ps__10647) > 0))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps__10647),y,prefer_table)))
{} else
{}
{
var G__10650 = cljs.core.rest(ps__10647);
ps__10647 = G__10650;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10648))
{return or__3824__auto____10648;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10652 = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10652))
{return or__3824__auto____10652;
} else
{return cljs.core.isa_QMARK_.cljs$lang$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10670 = cljs.core.reduce.cljs$lang$arity$3((function (be,p__10662){
var vec__10663__10664 = p__10662;
var k__10665 = cljs.core.nth.cljs$lang$arity$3(vec__10663__10664,0,null);
var ___10666 = cljs.core.nth.cljs$lang$arity$3(vec__10663__10664,1,null);
var e__10667 = vec__10663__10664;
if(cljs.core.isa_QMARK_.cljs$lang$arity$2(dispatch_val,k__10665))
{var be2__10669 = (cljs.core.truth_((function (){var or__3824__auto____10668 = (be == null);
if(or__3824__auto____10668)
{return or__3824__auto____10668;
} else
{return cljs.core.dominates(k__10665,cljs.core.first(be),prefer_table);
}
})())?e__10667:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2__10669),k__10665,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10665),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2__10669)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10669;
} else
{return be;
}
}),null,cljs.core.deref(method_table));
if(cljs.core.truth_(best_entry__10670))
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(cached_hierarchy),cljs.core.deref(hierarchy)))
{cljs.core.swap_BANG_.cljs$lang$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry__10670));
return cljs.core.second(best_entry__10670);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____10675 = mf;
if(and__3822__auto____10675)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10675;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__3085__auto____10676 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10677 = (cljs.core._reset[goog.typeOf(x__3085__auto____10676)]);
if(or__3824__auto____10677)
{return or__3824__auto____10677;
} else
{var or__3824__auto____10678 = (cljs.core._reset["_"]);
if(or__3824__auto____10678)
{return or__3824__auto____10678;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10683 = mf;
if(and__3822__auto____10683)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10683;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__3085__auto____10684 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10685 = (cljs.core._add_method[goog.typeOf(x__3085__auto____10684)]);
if(or__3824__auto____10685)
{return or__3824__auto____10685;
} else
{var or__3824__auto____10686 = (cljs.core._add_method["_"]);
if(or__3824__auto____10686)
{return or__3824__auto____10686;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10691 = mf;
if(and__3822__auto____10691)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10691;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__3085__auto____10692 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10693 = (cljs.core._remove_method[goog.typeOf(x__3085__auto____10692)]);
if(or__3824__auto____10693)
{return or__3824__auto____10693;
} else
{var or__3824__auto____10694 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10694)
{return or__3824__auto____10694;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10699 = mf;
if(and__3822__auto____10699)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10699;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__3085__auto____10700 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10701 = (cljs.core._prefer_method[goog.typeOf(x__3085__auto____10700)]);
if(or__3824__auto____10701)
{return or__3824__auto____10701;
} else
{var or__3824__auto____10702 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10702)
{return or__3824__auto____10702;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10707 = mf;
if(and__3822__auto____10707)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10707;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__3085__auto____10708 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10709 = (cljs.core._get_method[goog.typeOf(x__3085__auto____10708)]);
if(or__3824__auto____10709)
{return or__3824__auto____10709;
} else
{var or__3824__auto____10710 = (cljs.core._get_method["_"]);
if(or__3824__auto____10710)
{return or__3824__auto____10710;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10715 = mf;
if(and__3822__auto____10715)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10715;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__3085__auto____10716 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10717 = (cljs.core._methods[goog.typeOf(x__3085__auto____10716)]);
if(or__3824__auto____10717)
{return or__3824__auto____10717;
} else
{var or__3824__auto____10718 = (cljs.core._methods["_"]);
if(or__3824__auto____10718)
{return or__3824__auto____10718;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10723 = mf;
if(and__3822__auto____10723)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10723;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__3085__auto____10724 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10725 = (cljs.core._prefers[goog.typeOf(x__3085__auto____10724)]);
if(or__3824__auto____10725)
{return or__3824__auto____10725;
} else
{var or__3824__auto____10726 = (cljs.core._prefers["_"]);
if(or__3824__auto____10726)
{return or__3824__auto____10726;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10731 = mf;
if(and__3822__auto____10731)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10731;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__3085__auto____10732 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10733 = (cljs.core._dispatch[goog.typeOf(x__3085__auto____10732)]);
if(or__3824__auto____10733)
{return or__3824__auto____10733;
} else
{var or__3824__auto____10734 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10734)
{return or__3824__auto____10734;
} else
{throw cljs.core.missing_protocol("IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10737 = cljs.core.apply.cljs$lang$arity$2(dispatch_fn,args);
var target_fn__10738 = cljs.core._get_method(mf,dispatch_val__10737);
if(cljs.core.truth_(target_fn__10738))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10737)].join('')));
}
return cljs.core.apply.cljs$lang$arity$2(target_fn__10738,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10739 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10740 = this;
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10740.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10740.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10740.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10740.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10741 = this;
cljs.core.swap_BANG_.cljs$lang$arity$4(this__10741.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(this__10741.method_cache,this__10741.method_table,this__10741.cached_hierarchy,this__10741.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10742 = this;
cljs.core.swap_BANG_.cljs$lang$arity$3(this__10742.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(this__10742.method_cache,this__10742.method_table,this__10742.cached_hierarchy,this__10742.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10743 = this;
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(this__10743.cached_hierarchy),cljs.core.deref(this__10743.hierarchy)))
{} else
{cljs.core.reset_cache(this__10743.method_cache,this__10743.method_table,this__10743.cached_hierarchy,this__10743.hierarchy);
}
var temp__3971__auto____10744 = cljs.core.deref(this__10743.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10744))
{var target_fn__10745 = temp__3971__auto____10744;
return target_fn__10745;
} else
{var temp__3971__auto____10746 = cljs.core.find_and_cache_best_method(this__10743.name,dispatch_val,this__10743.hierarchy,this__10743.method_table,this__10743.prefer_table,this__10743.method_cache,this__10743.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10746))
{var target_fn__10747 = temp__3971__auto____10746;
return target_fn__10747;
} else
{return cljs.core.deref(this__10743.method_table).call(null,this__10743.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10748 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,this__10748.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10748.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10748.prefer_table,(function (old){
return cljs.core.assoc.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache(this__10748.method_cache,this__10748.method_table,this__10748.cached_hierarchy,this__10748.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10749 = this;
return cljs.core.deref(this__10749.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10750 = this;
return cljs.core.deref(this__10750.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10751 = this;
return cljs.core.do_dispatch(mf,this__10751.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10753__delegate = function (_,args){
var self__10752 = this;
return cljs.core._dispatch(self__10752,args);
};
var G__10753 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10753__delegate.call(this, _, args);
};
G__10753.cljs$lang$maxFixedArity = 1;
G__10753.cljs$lang$applyTo = (function (arglist__10754){
var _ = cljs.core.first(arglist__10754);
var args = cljs.core.rest(arglist__10754);
return G__10753__delegate(_, args);
});
G__10753.cljs$lang$arity$variadic = G__10753__delegate;
return G__10753;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10755 = this;
return cljs.core._dispatch(self__10755,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__3031__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10756 = this;
return goog.string.hashCode(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this$], 0)));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10758,_){
var this__10757 = this;
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#uuid \""),cljs.core.str(this__10757.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10759 = this;
var and__3822__auto____10760 = cljs.core.instance_QMARK_(cljs.core.UUID,other);
if(and__3822__auto____10760)
{return (this__10759.uuid === other.uuid);
} else
{return and__3822__auto____10760;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10761 = this;
var this__10762 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10762], 0));
});
cljs.core.UUID;
