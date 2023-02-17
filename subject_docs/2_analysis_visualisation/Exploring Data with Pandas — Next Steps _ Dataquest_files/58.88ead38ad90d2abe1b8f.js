(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1411:
/*!************************************************************!*\
  !*** ./node_modules/codemirror/addon/hint/anyword-hint.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,n,r){!function(e){"use strict";var n=/[\w$]+/;e.registerHelper("hint","anyword",(function(r,t){for(var i=t&&t.word||n,o=t&&t.range||500,s=r.getCursor(),a=r.getLine(s.line),c=s.ch,l=c;l&&i.test(a.charAt(l-1));)--l;for(var p=l!=c&&a.slice(l,c),w=t&&t.list||[],f={},u=new RegExp(i.source,"g"),h=-1;h<=1;h+=2)for(var g=s.line,d=Math.min(Math.max(g+h*o,r.firstLine()),r.lastLine())+h;g!=d;g+=h)for(var v,x=r.getLine(g);v=u.exec(x);)g==s.line&&v[0]===p||p&&0!=v[0].lastIndexOf(p,0)||Object.prototype.hasOwnProperty.call(f,v[0])||(f[v[0]]=!0,w.push(v[0]));return{list:w,from:e.Pos(s.line,l),to:e.Pos(s.line,c)}}))}(r(/*! ../../lib/codemirror */750))}}]);
//# sourceMappingURL=58.88ead38ad90d2abe1b8f.js.map