function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,c,s){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(u){const r=i(n,e,o,s);t.p(r,u)}}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function m(){return g("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):p(n)}function v(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return g(n)}function w(t){return v(t," ")}function E(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let j;function A(t){j=t}function N(){if(!j)throw new Error("Function called outside component initialization");return j}function O(t){N().$$.on_mount.push(t)}function S(t){N().$$.after_update.push(t)}function C(t,n){N().$$.context.set(t,n)}const T=[],q=[],z=[],B=[],F=Promise.resolve();let L=!1;function M(t){z.push(t)}let P=!1;const D=new Set;function G(){if(!P){P=!0;do{for(let t=0;t<T.length;t+=1){const n=T[t];A(n),H(n.$$)}for(A(null),T.length=0;q.length;)q.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];D.has(n)||(D.add(n),n())}z.length=0}while(T.length);for(;B.length;)B.pop()();L=!1,P=!1,D.clear()}}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}const I=new Set;let J;function K(){J={r:0,c:[],p:J}}function Q(){J.r||r(J.c),J=J.p}function R(t,n){t&&t.i&&(I.delete(t),t.i(n))}function U(t,n,e,o){if(t&&t.o){if(I.has(t))return;I.add(t),J.c.push((()=>{I.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function V(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const s in o)s in e||(e[s]=void 0);return e}function W(t){return"object"==typeof t&&null!==t?t:{}}function X(t){t&&t.c()}function Y(t,n){t&&t.l(n)}function Z(t,n,o,s){const{fragment:u,on_mount:i,on_destroy:f,after_update:a}=t.$$;u&&u.m(n,o),s||M((()=>{const n=i.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(M)}function tt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function nt(t,n){-1===t.$$.dirty[0]&&(T.push(t),L||(L=!0,F.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function et(n,e,c,s,u,i,f=[-1]){const a=j;A(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let h=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&u(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),h&&nt(n,t)),e})):[],l.update(),h=!0,r(l.before_update),l.fragment=!!s&&s(l.ctx),e.target){if(e.hydrate){const t=x(e.target);l.fragment&&l.fragment.l(t),t.forEach(d)}else l.fragment&&l.fragment.c();e.intro&&R(n.$$.fragment),Z(n,e.target,e.anchor,e.customElement),G()}A(a)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=[];function ct(n,e=t){let o;const r=[];function c(t){if(s(n,t)&&(n=t,o)){const t=!rt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),rt.push(t,n)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,u=t){const i=[s,u];return r.push(i),1===r.length&&(o=e(c)||t),s(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,K as B,ct as C,u as D,f as E,a as F,t as G,y as H,r as I,k as J,h as K,ot as S,x as a,b,_ as c,d,p as e,l as f,v as g,E as h,et as i,X as j,$ as k,m as l,Y as m,w as n,Z as o,V as p,W as q,U as r,s,g as t,Q as u,R as v,tt as w,C as x,S as y,O as z};
