import{S as e,i as s,s as t,l as c,f as n,d as a,e as l,k as r,t as o,c as i,a as h,n as f,g as v,b as u,G as d,J as p,K as g,F as E,h as m,L as y,I as b}from"../chunks/vendor-969d451a.js";import{b as T}from"../chunks/paths-45dac81d.js";function k(e,s,t){const c=e.slice();return c[19]=s[t],c}function D(e,s,t){const c=e.slice();return c[22]=s[t],c}function I(e,s,t){const c=e.slice();return c[19]=s[t],c[25]=s,c[26]=t,c}function V(e,s,t){const c=e.slice();return c[19]=s[t],c}function x(e){let s;return{c(){s=l("div"),this.h()},l(e){s=i(e,"DIV",{class:!0}),h(s).forEach(a),this.h()},h(){u(s,"class","col")},m(e,t){n(e,s,t)},p:b,d(e){e&&a(s)}}}function H(e){let s,t,c,g,E,m,y,b,T=e[19]+"";function k(){return e[7](e[19])}return{c(){s=l("div"),t=l("div"),c=l("button"),g=o(T),m=r(),this.h()},l(e){s=i(e,"DIV",{class:!0});var n=h(s);t=i(n,"DIV",{class:!0});var l=h(t);c=i(l,"BUTTON",{class:!0});var r=h(c);g=v(r,T),r.forEach(a),l.forEach(a),m=f(n),n.forEach(a),this.h()},h(){u(c,"class",E="btn btn-sm btn-block "+(e[1][e[19]]?"btn-danger":"btn-outline-primary")+" svelte-507unh"),u(t,"class","form-group"),u(s,"class","col")},m(e,a){n(e,s,a),d(s,t),d(t,c),d(c,g),d(s,m),y||(b=p(c,"click",k),y=!0)},p(s,t){e=s,2&t&&E!==(E="btn btn-sm btn-block "+(e[1][e[19]]?"btn-danger":"btn-outline-primary")+" svelte-507unh")&&u(c,"class",E)},d(e){e&&a(s),y=!1,b()}}}function N(e){let s;function t(e,s){return e[3].tenses[e[19]]?H:x}let l=t(e),r=l(e);return{c(){r.c(),s=c()},l(e){r.l(e),s=c()},m(e,t){r.m(e,t),n(e,s,t)},p(e,c){l===(l=t(e))&&r?r.p(e,c):(r.d(1),r=l(e),r&&(r.c(),r.m(s.parentNode,s)))},d(e){r.d(e),e&&a(s)}}}function q(e){let s,t,c,E,m,y,b,T,k=e[19]+"";function D(){e[8].call(t,e[19])}return{c(){s=l("div"),t=l("input"),c=r(),E=l("label"),m=o(k),y=r(),this.h()},l(e){s=i(e,"DIV",{class:!0});var n=h(s);t=i(n,"INPUT",{class:!0,type:!0,id:!0}),c=f(n),E=i(n,"LABEL",{class:!0,for:!0});var l=h(E);m=v(l,k),l.forEach(a),y=f(n),n.forEach(a),this.h()},h(){u(t,"class","form-check-input"),u(t,"type","checkbox"),u(t,"id",e[19]),u(E,"class","form-check-label"),u(E,"for",e[19]),u(s,"class","form-check")},m(a,l){n(a,s,l),d(s,t),t.checked=e[3].tenses[e[19]],d(s,c),d(s,E),d(E,m),d(s,y),b||(T=[p(t,"change",D),p(t,"click",e[9])],b=!0)},p(s,c){e=s,24&c&&(t.checked=e[3].tenses[e[19]])},d(e){e&&a(s),b=!1,g(T)}}}function L(e){let s,t,c,p,g,m,b,T,k,I,V,x,H,N,q,L,P,j,B,O=e[19]+"",A=[0,1,2,3,4,5,6],R=[];for(let n=0;n<7;n+=1)R[n]=w(D(e,A,n));return{c(){s=l("div"),t=l("div"),c=l("h6"),p=o(O),g=r(),m=l("table"),b=l("thead"),T=l("tr"),k=l("th"),I=o("Positive"),V=r(),x=l("th"),H=o("Negative"),N=r(),q=l("th"),L=o("Question"),P=r(),j=l("tbody");for(let e=0;e<7;e+=1)R[e].c();B=r(),this.h()},l(e){s=i(e,"DIV",{class:!0});var n=h(s);t=i(n,"DIV",{class:!0});var l=h(t);c=i(l,"H6",{style:!0});var r=h(c);p=v(r,O),r.forEach(a),g=f(l),m=i(l,"TABLE",{class:!0});var o=h(m);b=i(o,"THEAD",{});var u=h(b);T=i(u,"TR",{});var d=h(T);k=i(d,"TH",{});var E=h(k);I=v(E,"Positive"),E.forEach(a),V=f(d),x=i(d,"TH",{});var y=h(x);H=v(y,"Negative"),y.forEach(a),N=f(d),q=i(d,"TH",{});var D=h(q);L=v(D,"Question"),D.forEach(a),d.forEach(a),u.forEach(a),P=f(o),j=i(o,"TBODY",{});var w=h(j);for(let s=0;s<7;s+=1)R[s].l(w);w.forEach(a),o.forEach(a),l.forEach(a),B=f(n),n.forEach(a),this.h()},h(){E(c,"text-align","center"),u(m,"class","table table-striped table-hover table-sm"),u(t,"class","col"),u(s,"class","row")},m(e,a){n(e,s,a),d(s,t),d(t,c),d(c,p),d(t,g),d(t,m),d(m,b),d(b,T),d(T,k),d(k,I),d(T,V),d(T,x),d(x,H),d(T,N),d(T,q),d(q,L),d(m,P),d(m,j);for(let s=0;s<7;s+=1)R[s].m(j,null);d(s,B)},p(e,s){if(17&s){let t;for(A=[0,1,2,3,4,5,6],t=0;t<7;t+=1){const c=D(e,A,t);R[t]?R[t].p(c,s):(R[t]=w(c),R[t].c(),R[t].m(j,null))}for(;t<7;t+=1)R[t].d(1)}},d(e){e&&a(s),y(R,e)}}}function w(e){let s,t,c,u,p,g,E,y,b,T,k=e[0][e[19]].positive[e[22]]+"",D=e[0][e[19]].negative[e[22]]+"",I=e[0][e[19]].question[e[22]]+"";return{c(){s=l("tr"),t=l("td"),c=o(k),u=r(),p=l("td"),g=o(D),E=r(),y=l("td"),b=o(I),T=r()},l(e){s=i(e,"TR",{});var n=h(s);t=i(n,"TD",{});var l=h(t);c=v(l,k),l.forEach(a),u=f(n),p=i(n,"TD",{});var r=h(p);g=v(r,D),r.forEach(a),E=f(n),y=i(n,"TD",{});var o=h(y);b=v(o,I),o.forEach(a),T=f(n),n.forEach(a)},m(e,a){n(e,s,a),d(s,t),d(t,c),d(s,u),d(s,p),d(p,g),d(s,E),d(s,y),d(y,b),d(s,T)},p(e,s){1&s&&k!==(k=e[0][e[19]].positive[e[22]]+"")&&m(c,k),1&s&&D!==(D=e[0][e[19]].negative[e[22]]+"")&&m(g,D),1&s&&I!==(I=e[0][e[19]].question[e[22]]+"")&&m(b,I)},d(e){e&&a(s)}}}function P(e){let s,t=e[3].tenses[e[19]]&&L(e);return{c(){t&&t.c(),s=c()},l(e){t&&t.l(e),s=c()},m(e,c){t&&t.m(e,c),n(e,s,c)},p(e,c){e[3].tenses[e[19]]?t?t.p(e,c):(t=L(e),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&a(s)}}}function j(e){let s,t,c,T,D,x,H,L,w,j,B,O,A,R,U,Q,S,$,G,M,F,J,K,Y,z,C,W,X,Z,_,ee,se,te,ce,ne,ae,le,re,oe,ie,he,fe,ve,ue,de,pe,ge,Ee,me,ye,be,Te,ke,De,Ie,Ve,xe,He,Ne,qe,Le,we,Pe=e[4],je=[];for(let n=0;n<Pe.length;n+=1)je[n]=N(V(e,Pe,n));let Be=e[4].sort(),Oe=[];for(let n=0;n<Be.length;n+=1)Oe[n]=q(I(e,Be,n));let Ae=e[4],Re=[];for(let n=0;n<Ae.length;n+=1)Re[n]=P(k(e,Ae,n));return{c(){s=l("div"),t=l("div"),c=l("div"),T=l("p"),D=l("strong"),x=o(e[2]),H=r(),L=l("hr"),w=r(),j=l("div");for(let e=0;e<je.length;e+=1)je[e].c();B=r(),O=l("hr"),A=r(),R=l("div"),U=l("div"),Q=l("h3"),S=o("Settings"),$=r(),G=l("div"),M=l("div"),F=l("h6"),J=o("Enabled tenses:"),K=r();for(let e=0;e<Oe.length;e+=1)Oe[e].c();Y=r(),z=l("div"),C=l("div"),W=l("h6"),X=o("Enabled sentence types:"),Z=r(),_=l("div"),ee=l("input"),te=r(),ce=l("label"),ne=o("Positive"),le=r(),re=l("div"),oe=l("input"),he=r(),fe=l("label"),ve=o("Negative"),de=r(),pe=l("div"),ge=l("input"),me=r(),ye=l("label"),be=o("Question"),ke=r(),De=l("hr"),Ie=r(),Ve=l("div"),xe=l("div"),He=l("h3"),Ne=o("Docs"),qe=r();for(let e=0;e<Re.length;e+=1)Re[e].c();this.h()},l(n){s=i(n,"DIV",{class:!0});var l=h(s);t=i(l,"DIV",{class:!0,style:!0});var r=h(t);c=i(r,"DIV",{class:!0});var o=h(c);T=i(o,"P",{class:!0});var u=h(T);D=i(u,"STRONG",{});var d=h(D);x=v(d,e[2]),d.forEach(a),u.forEach(a),o.forEach(a),r.forEach(a),H=f(l),L=i(l,"HR",{}),w=f(l),j=i(l,"DIV",{class:!0});var p=h(j);for(let e=0;e<je.length;e+=1)je[e].l(p);p.forEach(a),B=f(l),O=i(l,"HR",{}),A=f(l),R=i(l,"DIV",{class:!0});var g=h(R);U=i(g,"DIV",{class:!0});var E=h(U);Q=i(E,"H3",{class:!0});var m=h(Q);S=v(m,"Settings"),m.forEach(a),E.forEach(a),g.forEach(a),$=f(l),G=i(l,"DIV",{class:!0});var y=h(G);M=i(y,"DIV",{class:!0});var b=h(M);F=i(b,"H6",{});var k=h(F);J=v(k,"Enabled tenses:"),k.forEach(a),K=f(b);for(let e=0;e<Oe.length;e+=1)Oe[e].l(b);b.forEach(a),y.forEach(a),Y=f(l),z=i(l,"DIV",{class:!0,style:!0});var I=h(z);C=i(I,"DIV",{class:!0});var V=h(C);W=i(V,"H6",{});var N=h(W);X=v(N,"Enabled sentence types:"),N.forEach(a),Z=f(V),_=i(V,"DIV",{class:!0});var q=h(_);ee=i(q,"INPUT",{class:!0,type:!0,id:!0}),te=f(q),ce=i(q,"LABEL",{class:!0,for:!0});var P=h(ce);ne=v(P,"Positive"),P.forEach(a),q.forEach(a),le=f(V),re=i(V,"DIV",{class:!0});var se=h(re);oe=i(se,"INPUT",{class:!0,type:!0,id:!0}),he=f(se),fe=i(se,"LABEL",{class:!0,for:!0});var ae=h(fe);ve=v(ae,"Negative"),ae.forEach(a),se.forEach(a),de=f(V),pe=i(V,"DIV",{class:!0});var ie=h(pe);ge=i(ie,"INPUT",{class:!0,type:!0,id:!0}),me=f(ie),ye=i(ie,"LABEL",{class:!0,for:!0});var ue=h(ye);be=v(ue,"Question"),ue.forEach(a),ie.forEach(a),V.forEach(a),I.forEach(a),ke=f(l),De=i(l,"HR",{}),Ie=f(l),Ve=i(l,"DIV",{class:!0});var Ee=h(Ve);xe=i(Ee,"DIV",{class:!0});var Te=h(xe);He=i(Te,"H3",{class:!0});var Le=h(He);Ne=v(Le,"Docs"),Le.forEach(a),Te.forEach(a),Ee.forEach(a),qe=f(l);for(let e=0;e<Re.length;e+=1)Re[e].l(l);l.forEach(a),this.h()},h(){u(T,"class","text-center "),u(c,"class","col"),u(t,"class","row"),E(t,"margin-top","30px"),u(j,"class","row row-cols-3"),u(Q,"class","text-center"),u(U,"class","col"),u(R,"class","row"),u(M,"class","col"),u(G,"class","row"),u(ee,"class","form-check-input"),u(ee,"type","checkbox"),u(ee,"id",se=e[3].sentenceTypes.positive),u(ce,"class","form-check-label"),u(ce,"for",ae=e[3].sentenceTypes.positive),u(_,"class","form-check"),u(oe,"class","form-check-input"),u(oe,"type","checkbox"),u(oe,"id",ie=e[3].sentenceTypes.negative),u(fe,"class","form-check-label"),u(fe,"for",ue=e[3].sentenceTypes.negative),u(re,"class","form-check"),u(ge,"class","form-check-input"),u(ge,"type","checkbox"),u(ge,"id",Ee=e[3].sentenceTypes.question),u(ye,"class","form-check-label"),u(ye,"for",Te=e[3].sentenceTypes.question),u(pe,"class","form-check"),u(C,"class","col"),u(z,"class","row"),E(z,"margin-top","10px"),u(He,"class","text-center"),u(xe,"class","col"),u(Ve,"class","row"),u(s,"class","container")},m(a,l){n(a,s,l),d(s,t),d(t,c),d(c,T),d(T,D),d(D,x),d(s,H),d(s,L),d(s,w),d(s,j);for(let e=0;e<je.length;e+=1)je[e].m(j,null);d(s,B),d(s,O),d(s,A),d(s,R),d(R,U),d(U,Q),d(Q,S),d(s,$),d(s,G),d(G,M),d(M,F),d(F,J),d(M,K);for(let e=0;e<Oe.length;e+=1)Oe[e].m(M,null);d(s,Y),d(s,z),d(z,C),d(C,W),d(W,X),d(C,Z),d(C,_),d(_,ee),ee.checked=e[3].sentenceTypes.positive,d(_,te),d(_,ce),d(ce,ne),d(C,le),d(C,re),d(re,oe),oe.checked=e[3].sentenceTypes.negative,d(re,he),d(re,fe),d(fe,ve),d(C,de),d(C,pe),d(pe,ge),ge.checked=e[3].sentenceTypes.question,d(pe,me),d(pe,ye),d(ye,be),d(s,ke),d(s,De),d(s,Ie),d(s,Ve),d(Ve,xe),d(xe,He),d(He,Ne),d(s,qe);for(let e=0;e<Re.length;e+=1)Re[e].m(s,null);Le||(we=[p(ee,"change",e[10]),p(oe,"change",e[11]),p(ge,"change",e[12])],Le=!0)},p(e,[t]){if(4&t&&m(x,e[2]),90&t){let s;for(Pe=e[4],s=0;s<Pe.length;s+=1){const c=V(e,Pe,s);je[s]?je[s].p(c,t):(je[s]=N(c),je[s].c(),je[s].m(j,null))}for(;s<je.length;s+=1)je[s].d(1);je.length=Pe.length}if(56&t){let s;for(Be=e[4].sort(),s=0;s<Be.length;s+=1){const c=I(e,Be,s);Oe[s]?Oe[s].p(c,t):(Oe[s]=q(c),Oe[s].c(),Oe[s].m(M,null))}for(;s<Oe.length;s+=1)Oe[s].d(1);Oe.length=Be.length}if(8&t&&se!==(se=e[3].sentenceTypes.positive)&&u(ee,"id",se),8&t&&(ee.checked=e[3].sentenceTypes.positive),8&t&&ae!==(ae=e[3].sentenceTypes.positive)&&u(ce,"for",ae),8&t&&ie!==(ie=e[3].sentenceTypes.negative)&&u(oe,"id",ie),8&t&&(oe.checked=e[3].sentenceTypes.negative),8&t&&ue!==(ue=e[3].sentenceTypes.negative)&&u(fe,"for",ue),8&t&&Ee!==(Ee=e[3].sentenceTypes.question)&&u(ge,"id",Ee),8&t&&(ge.checked=e[3].sentenceTypes.question),8&t&&Te!==(Te=e[3].sentenceTypes.question)&&u(ye,"for",Te),25&t){let c;for(Ae=e[4],c=0;c<Ae.length;c+=1){const n=k(e,Ae,c);Re[c]?Re[c].p(n,t):(Re[c]=P(n),Re[c].c(),Re[c].m(s,null))}for(;c<Re.length;c+=1)Re[c].d(1);Re.length=Ae.length}},i:b,o:b,d(e){e&&a(s),y(je,e),y(Oe,e),y(Re,e),Le=!1,g(we)}}}let B=T;async function O({fetch:e}){return{props:{data:await e(`${B}/sentences.json`).then((e=>e.json()))}}}function A(e){return e[Math.floor(Math.random()*e.length)]}function R(e,s,t){let{data:c}=s,n=Object.keys(c),a={},l=null,r=null;const o={tenses:Object.assign(...n.map((e=>({[e]:!0})))),sentenceTypes:{positive:!0,negative:!0,question:!0}};function i(){return n.filter((e=>o.tenses[e]))}function h(){return A(Object.keys(o.sentenceTypes).filter((e=>o.sentenceTypes[e])))}function f(e,s){return A(c[e][s])}function v(){if(Object.keys(a).map((e=>{t(1,a[e]=!1,a)})),0==i().length)r=null,t(2,l=null);else if(1==i().length)t(2,l=f(r,h()));else{let e=r;for(;r==e;)r=A(i());t(2,l=f(r,h()))}}function u(e){e==r?v():t(1,a[e]=!0,a)}v();return e.$$set=e=>{"data"in e&&t(0,c=e.data)},[c,a,l,o,n,v,u,e=>u(e),function(e){o.tenses[e]=this.checked,t(3,o),t(4,n)},()=>v(),function(){o.sentenceTypes.positive=this.checked,t(3,o)},function(){o.sentenceTypes.negative=this.checked,t(3,o)},function(){o.sentenceTypes.question=this.checked,t(3,o)}]}B&&"/"==B[B.length-1]&&(B=B.substring(0,B.length-1));export default class extends e{constructor(e){super(),s(this,e,R,j,t,{data:0})}}export{O as load};