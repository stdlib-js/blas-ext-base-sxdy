"use strict";var q=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(n){throw (a=0, n)}};};var c=q(function(D,d){
var v=5;function O(i,a,n,o,r,f,M){var u,e,s,t;if(i<=0)return r;if(u=o,e=M,n===1&&f===1){if(s=i%v,s>0)for(t=0;t<s;t++)r[e]=a[u]/r[e],u+=n,e+=f;if(i<v)return r;for(t=s;t<i;t+=v)r[e]=a[u]/r[e],r[e+1]=a[u+1]/r[e+1],r[e+2]=a[u+2]/r[e+2],r[e+3]=a[u+3]/r[e+3],r[e+4]=a[u+4]/r[e+4],u+=v,e+=v;return r}for(t=0;t<i;t++)r[e]=a[u]/r[e],u+=n,e+=f;return r}d.exports=O
});var x=q(function(F,j){
var m=require('@stdlib/strided-base-stride2offset/dist'),b=c();function g(i,a,n,o,r){return b(i,a,n,m(i,n),o,r,m(i,r))}j.exports=g
});var _=q(function(G,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=x(),k=c();h(l,"ndarray",k);R.exports=l
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=_(),p,E=z(w(__dirname,"./native.js"));A(E)?p=B:p=E;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
