function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},p.apply(this,arguments)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,c){return o.__proto__=c,o},n(t,e)}function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}export{p as _,f as a,n as b};
//# sourceMappingURL=inheritsLoose-50ceb98b.js.map