import{S as r,i as t,s as a,e,t as o,c as s,a as c,g as n,d as h,b as f,f as l,G as u,h as v,k as i,n as E,F as d,J as P,K as T,l as b,I as g,L as p}from"../chunks/vendor-969d451a.js";import{b as m}from"../chunks/paths-45dac81d.js";function C(r,t,a){const e=r.slice();return e[14]=t[a],e}function O(r,t,a){const e=r.slice();return e[14]=t[a],e[17]=t,e[18]=a,e}function D(r){let t,a,i,E;return{c(){t=e("div"),a=e("p"),i=e("strong"),E=o(r[1]),this.h()},l(e){t=s(e,"DIV",{class:!0});var o=c(t);a=s(o,"P",{});var f=c(a);i=s(f,"STRONG",{});var l=c(i);E=n(l,r[1]),l.forEach(h),f.forEach(h),o.forEach(h),this.h()},h(){f(t,"class","text-center")},m(r,e){l(r,t,e),u(t,a),u(a,i),u(i,E)},p(r,t){2&t&&v(E,r[1])},d(r){r&&h(t)}}}function R(r){let t,a,P,T,b,g,p,m,C,O,D,R,I,N,S,G=r[0][r[1]].auxiliary_verb+"",F=r[0][r[1]].verb_form+"";return{c(){t=e("table"),a=e("tbody"),P=e("tr"),T=e("td"),b=o("auxiliary verb"),g=i(),p=e("th"),m=o(G),C=i(),O=e("tr"),D=e("td"),R=o("verb form"),I=i(),N=e("th"),S=o(F),this.h()},l(r){t=s(r,"TABLE",{class:!0});var e=c(t);a=s(e,"TBODY",{});var o=c(a);P=s(o,"TR",{});var f=c(P);T=s(f,"TD",{style:!0});var l=c(T);b=n(l,"auxiliary verb"),l.forEach(h),g=E(f),p=s(f,"TH",{});var u=c(p);m=n(u,G),u.forEach(h),f.forEach(h),C=E(o),O=s(o,"TR",{});var v=c(O);D=s(v,"TD",{});var i=c(D);R=n(i,"verb form"),i.forEach(h),I=E(v),N=s(v,"TH",{});var d=c(N);S=n(d,F),d.forEach(h),v.forEach(h),o.forEach(h),e.forEach(h),this.h()},h(){d(T,"width","50%"),f(t,"class","table text-center")},m(r,e){l(r,t,e),u(t,a),u(a,P),u(P,T),u(T,b),u(P,g),u(P,p),u(p,m),u(a,C),u(a,O),u(O,D),u(D,R),u(O,I),u(O,N),u(N,S)},p(r,t){3&t&&G!==(G=r[0][r[1]].auxiliary_verb+"")&&v(m,G),3&t&&F!==(F=r[0][r[1]].verb_form+"")&&v(S,F)},d(r){r&&h(t)}}}function I(r){let t,a,v,i,E;return{c(){t=e("div"),a=e("button"),v=o("show"),this.h()},l(r){t=s(r,"DIV",{class:!0});var e=c(t);a=s(e,"BUTTON",{class:!0});var o=c(a);v=n(o,"show"),o.forEach(h),e.forEach(h),this.h()},h(){f(a,"class","btn btn-outline-primary"),f(t,"class","text-center")},m(e,o){l(e,t,o),u(t,a),u(a,v),i||(E=P(a,"click",r[7]),i=!0)},p:g,d(r){r&&h(t),i=!1,E()}}}function N(r){let t,a,v,i,E;return{c(){t=e("div"),a=e("button"),v=o("next"),this.h()},l(r){t=s(r,"DIV",{class:!0});var e=c(t);a=s(e,"BUTTON",{class:!0});var o=c(a);v=n(o,"next"),o.forEach(h),e.forEach(h),this.h()},h(){f(a,"class","btn btn-outline-primary"),f(t,"class","text-center")},m(e,o){l(e,t,o),u(t,a),u(a,v),i||(E=P(a,"click",r[6]),i=!0)},p:g,d(r){r&&h(t),i=!1,E()}}}function S(r){let t,a,v,d,b,g,p,m,C=r[14]+"";function O(){r[8].call(a,r[14])}return{c(){t=e("div"),a=e("input"),v=i(),d=e("label"),b=o(C),g=i(),this.h()},l(r){t=s(r,"DIV",{class:!0});var e=c(t);a=s(e,"INPUT",{class:!0,type:!0,id:!0}),v=E(e),d=s(e,"LABEL",{class:!0,for:!0});var o=c(d);b=n(o,C),o.forEach(h),g=E(e),e.forEach(h),this.h()},h(){f(a,"class","form-check-input"),f(a,"type","checkbox"),f(a,"id",r[14]),f(d,"class","form-check-label"),f(d,"for",r[14]),f(t,"class","form-check")},m(e,o){l(e,t,o),u(t,a),a.checked=r[3].tenses[r[14]],u(t,v),u(t,d),u(d,b),u(t,g),p||(m=[P(a,"change",O),P(a,"click",r[9])],p=!0)},p(t,e){r=t,24&e&&(a.checked=r[3].tenses[r[14]])},d(r){r&&h(t),p=!1,T(m)}}}function G(r){let t,a,f,d,P,T,b,g,p,m,C=r[14]+"",O=r[0][r[14]].auxiliary_verb+"",D=r[0][r[14]].verb_form+"";return{c(){t=e("tr"),a=e("td"),f=o(C),d=i(),P=e("td"),T=o(O),b=i(),g=e("td"),p=o(D),m=i()},l(r){t=s(r,"TR",{});var e=c(t);a=s(e,"TD",{});var o=c(a);f=n(o,C),o.forEach(h),d=E(e),P=s(e,"TD",{});var l=c(P);T=n(l,O),l.forEach(h),b=E(e),g=s(e,"TD",{});var u=c(g);p=n(u,D),u.forEach(h),m=E(e),e.forEach(h)},m(r,e){l(r,t,e),u(t,a),u(a,f),u(t,d),u(t,P),u(P,T),u(t,b),u(t,g),u(g,p),u(t,m)},p(r,t){1&t&&O!==(O=r[0][r[14]].auxiliary_verb+"")&&v(T,O),1&t&&D!==(D=r[0][r[14]].verb_form+"")&&v(p,D)},d(r){r&&h(t)}}}function F(r){let t,a=r[3].tenses[r[14]]&&G(r);return{c(){a&&a.c(),t=b()},l(r){a&&a.l(r),t=b()},m(r,e){a&&a.m(r,e),l(r,t,e)},p(r,e){r[3].tenses[r[14]]?a?a.p(r,e):(a=G(r),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(r){a&&a.d(r),r&&h(t)}}}function V(r){let t,a,v,b,m,G,V,w,x,L,y,k,H,B,_,A,j,U,Y,$,M,J,K,q,z,Q,W,X,Z,rr,tr,ar,er,or,sr,cr,nr,hr,fr,lr,ur,vr,ir,Er,dr,Pr,Tr,br,gr,pr,mr,Cr,Or,Dr,Rr,Ir,Nr,Sr,Gr,Fr,Vr,wr,xr,Lr,yr,kr,Hr,Br,_r,Ar,jr,Ur,Yr,$r,Mr,Jr,Kr,qr,zr,Qr,Wr,Xr,Zr,rt,tt,at,et,ot,st,ct,nt,ht,ft,lt,ut,vt,it,Et,dt,Pt,Tt,bt,gt,pt,mt,Ct,Ot,Dt,Rt,It,Nt,St,Gt,Ft,Vt,wt,xt,Lt,yt,kt,Ht,Bt,_t,At,jt,Ut,Yt,$t,Mt,Jt,Kt,qt,zt,Qt,Wt,Xt,Zt,ra,ta,aa,ea,oa,sa,ca,na,ha,fa,la,ua,va,ia,Ea,da,Pa,Ta,ba,ga,pa,ma,Ca,Oa,Da,Ra,Ia,Na,Sa,Ga,Fa,Va,wa,xa,La,ya,ka,Ha,Ba,_a,Aa,ja,Ua,Ya,$a,Ma,Ja,Ka,qa,za,Qa,Wa,Xa,Za,re,te,ae,ee,oe,se,ce,ne,he,fe,le,ue,ve,ie,Ee,de,Pe,Te,be,ge,pe,me,Ce,Oe,De,Re,Ie,Ne,Se,Ge,Fe,Ve,we,xe,Le,ye,ke,He,Be,_e,Ae,je,Ue,Ye,$e,Me,Je,Ke,qe,ze,Qe,We,Xe,Ze,ro,to,ao,eo,oo,so,co,no,ho,fo,lo,uo,vo,io,Eo,Po,To,bo,go,po,mo,Co,Oo,Do,Ro,Io,No,So,Go,Fo,Vo,wo,xo,Lo,yo,ko,Ho,Bo,_o,Ao,jo,Uo,Yo,$o,Mo,Jo,Ko,qo,zo=(!r[3].reverse&&!r[2]||r[2])&&D(r),Qo=(r[3].reverse||r[2]&&!r[3].reverse)&&R(r);function Wo(r,t){return r[2]?N:I}let Xo=Wo(r),Zo=Xo(r),rs=r[4].sort(),ts=[];for(let e=0;e<rs.length;e+=1)ts[e]=S(O(r,rs,e));let as=r[4].sort(),es=[];for(let e=0;e<as.length;e+=1)es[e]=F(C(r,as,e));return{c(){t=e("div"),a=e("div"),v=e("div"),zo&&zo.c(),b=i(),Qo&&Qo.c(),m=i(),Zo.c(),G=i(),V=e("hr"),w=i(),x=e("div"),L=e("div"),y=e("div"),k=e("h3"),H=o("Settings"),B=i(),_=e("div"),A=e("div"),j=e("h6"),U=o("Enabled tenses:"),Y=i();for(let r=0;r<ts.length;r+=1)ts[r].c();$=i(),M=e("div"),J=e("div"),K=e("h6"),q=o("Other:"),z=i(),Q=e("div"),W=e("input"),X=i(),Z=e("label"),rr=o("Reverse"),tr=i(),ar=e("div"),er=e("div"),or=e("div"),sr=e("h3"),cr=o("Docs"),nr=i(),hr=e("div"),fr=e("div"),lr=e("table"),ur=e("thead"),vr=e("tr"),ir=e("th"),Er=o("tense"),dr=i(),Pr=e("th"),Tr=o("auxiliary verb"),br=i(),gr=e("th"),pr=o("verb form"),mr=i(),Cr=e("tbody");for(let r=0;r<es.length;r+=1)es[r].c();Or=i(),Dr=e("div"),Rr=e("div"),Ir=e("div"),Nr=e("h3"),Sr=o("Группа времен Future"),Gr=i(),Fr=e("p"),Vr=o("Future Simple, Future Continuous, Future Perfect, Future Perfect Continuous"),wr=i(),xr=e("p"),Lr=o("Первый из вспомогательных глаголов (если их несколько) - всегда "),yr=e("strong"),kr=o("will"),Hr=o("."),Br=i(),_r=e("h3"),Ar=o("Времена типа Continuous"),jr=i(),Ur=e("p"),Yr=o("Past Continuous, Present Continuous, Future Continuous"),$r=i(),Mr=e("p"),Jr=o("Один из вспомогательных глаголов - всегда "),Kr=e("strong"),qr=o("be"),zr=o(" (в том числе и для Perfect Continuous),\n\t\t\t\tно его форма отличается в зависимости от лица и времени (прошедшего, настоящего или будущего)."),Qr=i(),Wr=e("ol"),Xr=e("li"),Zr=o("Для временной группы "),rt=e("strong"),tt=o("Future"),at=o(" глагол имеет форму "),et=e("strong"),ot=o("be"),st=o("."),ct=i(),nt=e("li"),ht=o("Для временной группы "),ft=e("strong"),lt=o("Past"),ut=o(" глагол имеет форму "),vt=e("strong"),it=o("was/were"),Et=o("."),dt=i(),Pt=e("li"),Tt=o("Для временной группы "),bt=e("strong"),gt=o("Present"),pt=o(" глагол имеет форму\n\t\t\t\t\t"),mt=e("strong"),Ct=o("am/is/are"),Ot=o("."),Dt=i(),Rt=e("li"),It=o("У времён типа "),Nt=e("strong"),St=o("Perfect Continuous"),Gt=o(", вспомогательный глагол\n\t\t\t\t\t"),Ft=e("strong"),Vt=o("be"),wt=o("\n\t\t\t\t\tвсегда принимает третью форму - "),xt=e("strong"),Lt=o("been"),yt=o("."),kt=i(),Ht=e("p"),Bt=o("У всех времён типа "),_t=e("strong"),At=o("Continuous"),jt=o(", в том числе и\n\t\t\t\t"),Ut=e("strong"),Yt=o("Perfect Continuous"),$t=o(", форма смыслового глагола - "),Mt=e("strong"),Jt=o("V-ing"),Kt=o("."),qt=i(),zt=e("h3"),Qt=o("Времена типа Perfect"),Wt=i(),Xt=e("p"),Zt=o("Past Perfect, Present Perfect, Future Perfect"),ra=i(),ta=e("p"),aa=o("Один из вспомогательных глаголов - всегда "),ea=e("strong"),oa=o("have"),sa=o(" (в том числе и для Perfect Continuous),\n\t\t\t\tно его форма отличается в зависимости от времени (прошедшего, настоящего или будущего):"),ca=i(),na=e("ol"),ha=e("li"),fa=o("Для временной группы "),la=e("strong"),ua=o("Future"),va=o(" глагол имеет форму "),ia=e("strong"),Ea=o("have"),da=o("."),Pa=i(),Ta=e("li"),ba=o("Для временной группы "),ga=e("strong"),pa=o("Past"),ma=o(" глагол имеет форму "),Ca=e("strong"),Oa=o("had"),Da=o("."),Ra=i(),Ia=e("li"),Na=o("Для временной группы "),Sa=e("strong"),Ga=o("Present"),Fa=o(" глагол имеет форму\n\t\t\t\t\t"),Va=e("strong"),wa=o("have/has"),xa=o(", в зависимости от лица."),La=i(),ya=e("p"),ka=o("У всех времён типа "),Ha=e("strong"),Ba=o("Perfect"),_a=o(" (но не "),Aa=e("strong"),ja=o("Perfect Continuous"),Ua=o(")\n\t\t\t\tформа смыслового глагола - "),Ya=e("strong"),$a=o("V3"),Ma=o("."),Ja=i(),Ka=e("h3"),qa=o("Времена типа Perfect Continuous"),za=i(),Qa=e("p"),Wa=o("Past Perfect Continuous, Present Perfect Continuous, Future Perfect Continuous"),Xa=i(),Za=e("p"),re=o("Два вспомогательных глагола:"),te=i(),ae=e("ol"),ee=e("li"),oe=o("have (в различных формах, в зависимости от лица и времени)"),se=i(),ce=e("li"),ne=o("be, всегда в третьей форме - "),he=e("strong"),fe=o("been"),le=o("."),ue=i(),ve=e("p"),ie=o("У Future перед этими глаголами так же добавляется третий вспомогательный глагол - "),Ee=e("strong"),de=o("will"),Pe=o("."),Te=i(),be=e("table"),ge=e("thead"),pe=e("tr"),me=e("th"),Ce=o("Время"),Oe=i(),De=e("th"),Re=o("форма глагола have"),Ie=i(),Ne=e("th"),Se=o("Смысловые глаголы вместе"),Ge=i(),Fe=e("tbody"),Ve=e("tr"),we=e("td"),xe=o("Past Perfect Continuous"),Le=i(),ye=e("td"),ke=o("had"),He=i(),Be=e("td"),_e=o("had been"),Ae=i(),je=e("tr"),Ue=e("td"),Ye=o("Present Perfect Continuous"),$e=i(),Me=e("td"),Je=o("have/has"),Ke=i(),qe=e("td"),ze=o("have been / has been"),Qe=i(),We=e("tr"),Xe=e("td"),Ze=o("Future Perfect Continuous"),ro=i(),to=e("td"),ao=o("have"),eo=i(),oo=e("td"),so=o("will have been"),co=i(),no=e("p"),ho=o("Форма смыслового глагола, как и у "),fo=e("strong"),lo=o("Continuous"),uo=o(" - всегда\n\t\t\t\t"),vo=e("strong"),io=o("V-ing"),Eo=o("."),Po=i(),To=e("h3"),bo=o("Другие закономерности"),go=i(),po=e("p"),mo=o("Порядок следования друг за другом вспомогательных глаголов полностью соответствует порядку\n\t\t\t\tименования времени."),Co=i(),Oo=e("p"),Do=o("Например, если у нас есть время "),Ro=e("strong"),Io=o("Future Perfect Continuous"),No=o(", то\n\t\t\t\tвспомогательные глаголы будут в следующем порядке: "),So=e("strong"),Go=o("will have been"),Fo=o(":"),Vo=i(),wo=e("ol"),xo=e("li"),Lo=o("Future - will"),yo=i(),ko=e("li"),Ho=o("Perfect - have"),Bo=i(),_o=e("li"),Ao=o("Continuous - been"),jo=i(),Uo=e("p"),Yo=o("Но нужно учитывать, что не всегда у каждого слова в названии времени будет свой временной\n\t\t\t\tглагол. Например, у "),$o=e("strong"),Mo=o("Past Perfect Continuous"),Jo=o(" вспомогательные глаголы будут только\n\t\t\t\tиз Perfect и Continuous, без Past: had been."),this.h()},l(r){t=s(r,"DIV",{class:!0});var e=c(t);a=s(e,"DIV",{class:!0,style:!0});var o=c(a);v=s(o,"DIV",{class:!0});var f=c(v);zo&&zo.l(f),b=E(f),Qo&&Qo.l(f),m=E(f),Zo.l(f),f.forEach(h),o.forEach(h),G=E(e),V=s(e,"HR",{}),e.forEach(h),w=E(r),x=s(r,"DIV",{class:!0});var l=c(x);L=s(l,"DIV",{class:!0});var u=c(L);y=s(u,"DIV",{class:!0});var i=c(y);k=s(i,"H3",{class:!0});var d=c(k);H=n(d,"Settings"),d.forEach(h),i.forEach(h),u.forEach(h),B=E(l),_=s(l,"DIV",{class:!0});var P=c(_);A=s(P,"DIV",{class:!0});var T=c(A);j=s(T,"H6",{});var g=c(j);U=n(g,"Enabled tenses:"),g.forEach(h),Y=E(T);for(let t=0;t<ts.length;t+=1)ts[t].l(T);T.forEach(h),P.forEach(h),$=E(l),M=s(l,"DIV",{class:!0,style:!0});var p=c(M);J=s(p,"DIV",{class:!0});var C=c(J);K=s(C,"H6",{});var O=c(K);q=n(O,"Other:"),O.forEach(h),z=E(C),Q=s(C,"DIV",{class:!0});var D=c(Q);W=s(D,"INPUT",{class:!0,type:!0,id:!0}),X=E(D),Z=s(D,"LABEL",{class:!0,for:!0});var R=c(Z);rr=n(R,"Reverse"),R.forEach(h),D.forEach(h),C.forEach(h),p.forEach(h),l.forEach(h),tr=E(r),ar=s(r,"DIV",{class:!0,style:!0});var I=c(ar);er=s(I,"DIV",{class:!0});var N=c(er);or=s(N,"DIV",{class:!0});var S=c(or);sr=s(S,"H3",{class:!0});var F=c(sr);cr=n(F,"Docs"),F.forEach(h),S.forEach(h),N.forEach(h),nr=E(I),hr=s(I,"DIV",{class:!0});var Ko=c(hr);fr=s(Ko,"DIV",{class:!0});var qo=c(fr);lr=s(qo,"TABLE",{class:!0});var Wo=c(lr);ur=s(Wo,"THEAD",{});var Xo=c(ur);vr=s(Xo,"TR",{});var rs=c(vr);ir=s(rs,"TH",{});var as=c(ir);Er=n(as,"tense"),as.forEach(h),dr=E(rs),Pr=s(rs,"TH",{});var os=c(Pr);Tr=n(os,"auxiliary verb"),os.forEach(h),br=E(rs),gr=s(rs,"TH",{});var ss=c(gr);pr=n(ss,"verb form"),ss.forEach(h),rs.forEach(h),Xo.forEach(h),mr=E(Wo),Cr=s(Wo,"TBODY",{});var cs=c(Cr);for(let t=0;t<es.length;t+=1)es[t].l(cs);cs.forEach(h),Wo.forEach(h),qo.forEach(h),Ko.forEach(h),I.forEach(h),Or=E(r),Dr=s(r,"DIV",{class:!0});var ns=c(Dr);Rr=s(ns,"DIV",{class:!0});var hs=c(Rr);Ir=s(hs,"DIV",{class:!0});var fs=c(Ir);Nr=s(fs,"H3",{id:!0});var ls=c(Nr);Sr=n(ls,"Группа времен Future"),ls.forEach(h),Gr=E(fs),Fr=s(fs,"P",{});var us=c(Fr);Vr=n(us,"Future Simple, Future Continuous, Future Perfect, Future Perfect Continuous"),us.forEach(h),wr=E(fs),xr=s(fs,"P",{});var vs=c(xr);Lr=n(vs,"Первый из вспомогательных глаголов (если их несколько) - всегда "),yr=s(vs,"STRONG",{});var is=c(yr);kr=n(is,"will"),is.forEach(h),Hr=n(vs,"."),vs.forEach(h),Br=E(fs),_r=s(fs,"H3",{id:!0});var Es=c(_r);Ar=n(Es,"Времена типа Continuous"),Es.forEach(h),jr=E(fs),Ur=s(fs,"P",{});var ds=c(Ur);Yr=n(ds,"Past Continuous, Present Continuous, Future Continuous"),ds.forEach(h),$r=E(fs),Mr=s(fs,"P",{});var Ps=c(Mr);Jr=n(Ps,"Один из вспомогательных глаголов - всегда "),Kr=s(Ps,"STRONG",{});var Ts=c(Kr);qr=n(Ts,"be"),Ts.forEach(h),zr=n(Ps," (в том числе и для Perfect Continuous),\n\t\t\t\tно его форма отличается в зависимости от лица и времени (прошедшего, настоящего или будущего)."),Ps.forEach(h),Qr=E(fs),Wr=s(fs,"OL",{});var bs=c(Wr);Xr=s(bs,"LI",{});var gs=c(Xr);Zr=n(gs,"Для временной группы "),rt=s(gs,"STRONG",{});var ps=c(rt);tt=n(ps,"Future"),ps.forEach(h),at=n(gs," глагол имеет форму "),et=s(gs,"STRONG",{});var ms=c(et);ot=n(ms,"be"),ms.forEach(h),st=n(gs,"."),gs.forEach(h),ct=E(bs),nt=s(bs,"LI",{});var Cs=c(nt);ht=n(Cs,"Для временной группы "),ft=s(Cs,"STRONG",{});var Os=c(ft);lt=n(Os,"Past"),Os.forEach(h),ut=n(Cs," глагол имеет форму "),vt=s(Cs,"STRONG",{});var Ds=c(vt);it=n(Ds,"was/were"),Ds.forEach(h),Et=n(Cs,"."),Cs.forEach(h),dt=E(bs),Pt=s(bs,"LI",{});var Rs=c(Pt);Tt=n(Rs,"Для временной группы "),bt=s(Rs,"STRONG",{});var Is=c(bt);gt=n(Is,"Present"),Is.forEach(h),pt=n(Rs," глагол имеет форму\n\t\t\t\t\t"),mt=s(Rs,"STRONG",{});var Ns=c(mt);Ct=n(Ns,"am/is/are"),Ns.forEach(h),Ot=n(Rs,"."),Rs.forEach(h),Dt=E(bs),Rt=s(bs,"LI",{});var Ss=c(Rt);It=n(Ss,"У времён типа "),Nt=s(Ss,"STRONG",{});var Gs=c(Nt);St=n(Gs,"Perfect Continuous"),Gs.forEach(h),Gt=n(Ss,", вспомогательный глагол\n\t\t\t\t\t"),Ft=s(Ss,"STRONG",{});var Fs=c(Ft);Vt=n(Fs,"be"),Fs.forEach(h),wt=n(Ss,"\n\t\t\t\t\tвсегда принимает третью форму - "),xt=s(Ss,"STRONG",{});var Vs=c(xt);Lt=n(Vs,"been"),Vs.forEach(h),yt=n(Ss,"."),Ss.forEach(h),bs.forEach(h),kt=E(fs),Ht=s(fs,"P",{});var ws=c(Ht);Bt=n(ws,"У всех времён типа "),_t=s(ws,"STRONG",{});var xs=c(_t);At=n(xs,"Continuous"),xs.forEach(h),jt=n(ws,", в том числе и\n\t\t\t\t"),Ut=s(ws,"STRONG",{});var Ls=c(Ut);Yt=n(Ls,"Perfect Continuous"),Ls.forEach(h),$t=n(ws,", форма смыслового глагола - "),Mt=s(ws,"STRONG",{});var ys=c(Mt);Jt=n(ys,"V-ing"),ys.forEach(h),Kt=n(ws,"."),ws.forEach(h),qt=E(fs),zt=s(fs,"H3",{id:!0});var ks=c(zt);Qt=n(ks,"Времена типа Perfect"),ks.forEach(h),Wt=E(fs),Xt=s(fs,"P",{});var Hs=c(Xt);Zt=n(Hs,"Past Perfect, Present Perfect, Future Perfect"),Hs.forEach(h),ra=E(fs),ta=s(fs,"P",{});var Bs=c(ta);aa=n(Bs,"Один из вспомогательных глаголов - всегда "),ea=s(Bs,"STRONG",{});var _s=c(ea);oa=n(_s,"have"),_s.forEach(h),sa=n(Bs," (в том числе и для Perfect Continuous),\n\t\t\t\tно его форма отличается в зависимости от времени (прошедшего, настоящего или будущего):"),Bs.forEach(h),ca=E(fs),na=s(fs,"OL",{});var As=c(na);ha=s(As,"LI",{});var js=c(ha);fa=n(js,"Для временной группы "),la=s(js,"STRONG",{});var Us=c(la);ua=n(Us,"Future"),Us.forEach(h),va=n(js," глагол имеет форму "),ia=s(js,"STRONG",{});var Ys=c(ia);Ea=n(Ys,"have"),Ys.forEach(h),da=n(js,"."),js.forEach(h),Pa=E(As),Ta=s(As,"LI",{});var $s=c(Ta);ba=n($s,"Для временной группы "),ga=s($s,"STRONG",{});var Ms=c(ga);pa=n(Ms,"Past"),Ms.forEach(h),ma=n($s," глагол имеет форму "),Ca=s($s,"STRONG",{});var Js=c(Ca);Oa=n(Js,"had"),Js.forEach(h),Da=n($s,"."),$s.forEach(h),Ra=E(As),Ia=s(As,"LI",{});var Ks=c(Ia);Na=n(Ks,"Для временной группы "),Sa=s(Ks,"STRONG",{});var qs=c(Sa);Ga=n(qs,"Present"),qs.forEach(h),Fa=n(Ks," глагол имеет форму\n\t\t\t\t\t"),Va=s(Ks,"STRONG",{});var zs=c(Va);wa=n(zs,"have/has"),zs.forEach(h),xa=n(Ks,", в зависимости от лица."),Ks.forEach(h),As.forEach(h),La=E(fs),ya=s(fs,"P",{});var Qs=c(ya);ka=n(Qs,"У всех времён типа "),Ha=s(Qs,"STRONG",{});var Ws=c(Ha);Ba=n(Ws,"Perfect"),Ws.forEach(h),_a=n(Qs," (но не "),Aa=s(Qs,"STRONG",{});var Xs=c(Aa);ja=n(Xs,"Perfect Continuous"),Xs.forEach(h),Ua=n(Qs,")\n\t\t\t\tформа смыслового глагола - "),Ya=s(Qs,"STRONG",{});var Zs=c(Ya);$a=n(Zs,"V3"),Zs.forEach(h),Ma=n(Qs,"."),Qs.forEach(h),Ja=E(fs),Ka=s(fs,"H3",{id:!0});var rc=c(Ka);qa=n(rc,"Времена типа Perfect Continuous"),rc.forEach(h),za=E(fs),Qa=s(fs,"P",{});var tc=c(Qa);Wa=n(tc,"Past Perfect Continuous, Present Perfect Continuous, Future Perfect Continuous"),tc.forEach(h),Xa=E(fs),Za=s(fs,"P",{});var ac=c(Za);re=n(ac,"Два вспомогательных глагола:"),ac.forEach(h),te=E(fs),ae=s(fs,"OL",{});var ec=c(ae);ee=s(ec,"LI",{});var oc=c(ee);oe=n(oc,"have (в различных формах, в зависимости от лица и времени)"),oc.forEach(h),se=E(ec),ce=s(ec,"LI",{});var sc=c(ce);ne=n(sc,"be, всегда в третьей форме - "),he=s(sc,"STRONG",{});var cc=c(he);fe=n(cc,"been"),cc.forEach(h),le=n(sc,"."),sc.forEach(h),ec.forEach(h),ue=E(fs),ve=s(fs,"P",{});var nc=c(ve);ie=n(nc,"У Future перед этими глаголами так же добавляется третий вспомогательный глагол - "),Ee=s(nc,"STRONG",{});var hc=c(Ee);de=n(hc,"will"),hc.forEach(h),Pe=n(nc,"."),nc.forEach(h),Te=E(fs),be=s(fs,"TABLE",{class:!0});var fc=c(be);ge=s(fc,"THEAD",{});var lc=c(ge);pe=s(lc,"TR",{});var uc=c(pe);me=s(uc,"TH",{});var vc=c(me);Ce=n(vc,"Время"),vc.forEach(h),Oe=E(uc),De=s(uc,"TH",{});var ic=c(De);Re=n(ic,"форма глагола have"),ic.forEach(h),Ie=E(uc),Ne=s(uc,"TH",{});var Ec=c(Ne);Se=n(Ec,"Смысловые глаголы вместе"),Ec.forEach(h),uc.forEach(h),lc.forEach(h),Ge=E(fc),Fe=s(fc,"TBODY",{});var dc=c(Fe);Ve=s(dc,"TR",{});var Pc=c(Ve);we=s(Pc,"TD",{});var Tc=c(we);xe=n(Tc,"Past Perfect Continuous"),Tc.forEach(h),Le=E(Pc),ye=s(Pc,"TD",{});var bc=c(ye);ke=n(bc,"had"),bc.forEach(h),He=E(Pc),Be=s(Pc,"TD",{});var gc=c(Be);_e=n(gc,"had been"),gc.forEach(h),Pc.forEach(h),Ae=E(dc),je=s(dc,"TR",{});var pc=c(je);Ue=s(pc,"TD",{});var mc=c(Ue);Ye=n(mc,"Present Perfect Continuous"),mc.forEach(h),$e=E(pc),Me=s(pc,"TD",{});var Cc=c(Me);Je=n(Cc,"have/has"),Cc.forEach(h),Ke=E(pc),qe=s(pc,"TD",{});var Oc=c(qe);ze=n(Oc,"have been / has been"),Oc.forEach(h),pc.forEach(h),Qe=E(dc),We=s(dc,"TR",{});var Dc=c(We);Xe=s(Dc,"TD",{});var Rc=c(Xe);Ze=n(Rc,"Future Perfect Continuous"),Rc.forEach(h),ro=E(Dc),to=s(Dc,"TD",{});var Ic=c(to);ao=n(Ic,"have"),Ic.forEach(h),eo=E(Dc),oo=s(Dc,"TD",{});var Nc=c(oo);so=n(Nc,"will have been"),Nc.forEach(h),Dc.forEach(h),dc.forEach(h),fc.forEach(h),co=E(fs),no=s(fs,"P",{});var Sc=c(no);ho=n(Sc,"Форма смыслового глагола, как и у "),fo=s(Sc,"STRONG",{});var Gc=c(fo);lo=n(Gc,"Continuous"),Gc.forEach(h),uo=n(Sc," - всегда\n\t\t\t\t"),vo=s(Sc,"STRONG",{});var Fc=c(vo);io=n(Fc,"V-ing"),Fc.forEach(h),Eo=n(Sc,"."),Sc.forEach(h),Po=E(fs),To=s(fs,"H3",{id:!0});var Vc=c(To);bo=n(Vc,"Другие закономерности"),Vc.forEach(h),go=E(fs),po=s(fs,"P",{});var wc=c(po);mo=n(wc,"Порядок следования друг за другом вспомогательных глаголов полностью соответствует порядку\n\t\t\t\tименования времени."),wc.forEach(h),Co=E(fs),Oo=s(fs,"P",{});var xc=c(Oo);Do=n(xc,"Например, если у нас есть время "),Ro=s(xc,"STRONG",{});var Lc=c(Ro);Io=n(Lc,"Future Perfect Continuous"),Lc.forEach(h),No=n(xc,", то\n\t\t\t\tвспомогательные глаголы будут в следующем порядке: "),So=s(xc,"STRONG",{});var yc=c(So);Go=n(yc,"will have been"),yc.forEach(h),Fo=n(xc,":"),xc.forEach(h),Vo=E(fs),wo=s(fs,"OL",{});var kc=c(wo);xo=s(kc,"LI",{});var Hc=c(xo);Lo=n(Hc,"Future - will"),Hc.forEach(h),yo=E(kc),ko=s(kc,"LI",{});var Bc=c(ko);Ho=n(Bc,"Perfect - have"),Bc.forEach(h),Bo=E(kc),_o=s(kc,"LI",{});var _c=c(_o);Ao=n(_c,"Continuous - been"),_c.forEach(h),kc.forEach(h),jo=E(fs),Uo=s(fs,"P",{});var Ac=c(Uo);Yo=n(Ac,"Но нужно учитывать, что не всегда у каждого слова в названии времени будет свой временной\n\t\t\t\tглагол. Например, у "),$o=s(Ac,"STRONG",{});var jc=c($o);Mo=n(jc,"Past Perfect Continuous"),jc.forEach(h),Jo=n(Ac," вспомогательные глаголы будут только\n\t\t\t\tиз Perfect и Continuous, без Past: had been."),Ac.forEach(h),fs.forEach(h),hs.forEach(h),ns.forEach(h),this.h()},h(){f(v,"class","col-1-auto"),f(a,"class","row"),d(a,"margin-top","30px"),f(t,"class","container"),f(k,"class","text-center"),f(y,"class","col"),f(L,"class","row"),f(A,"class","col"),f(_,"class","row"),f(W,"class","form-check-input"),f(W,"type","checkbox"),f(W,"id","reverse"),f(Z,"class","form-check-label"),f(Z,"for","reverse"),f(Q,"class","form-check"),f(J,"class","col"),f(M,"class","row"),d(M,"margin-top","10px"),f(x,"class","container"),f(sr,"class","text-center"),f(or,"class","col"),f(er,"class","row"),f(lr,"class","table table-striped table-hover table-sm"),f(fr,"class","col"),f(hr,"class","row"),f(ar,"class","container"),d(ar,"margin-top","30px"),f(Nr,"id","-future"),f(_r,"id","-continuous"),f(zt,"id","-perfect"),f(Ka,"id","-perfect-continuous"),f(be,"class","table"),f(To,"id","-"),f(Ir,"class","col"),f(Rr,"class","row"),f(Dr,"class","container")},m(e,o){l(e,t,o),u(t,a),u(a,v),zo&&zo.m(v,null),u(v,b),Qo&&Qo.m(v,null),u(v,m),Zo.m(v,null),u(t,G),u(t,V),l(e,w,o),l(e,x,o),u(x,L),u(L,y),u(y,k),u(k,H),u(x,B),u(x,_),u(_,A),u(A,j),u(j,U),u(A,Y);for(let r=0;r<ts.length;r+=1)ts[r].m(A,null);u(x,$),u(x,M),u(M,J),u(J,K),u(K,q),u(J,z),u(J,Q),u(Q,W),W.checked=r[3].reverse,u(Q,X),u(Q,Z),u(Z,rr),l(e,tr,o),l(e,ar,o),u(ar,er),u(er,or),u(or,sr),u(sr,cr),u(ar,nr),u(ar,hr),u(hr,fr),u(fr,lr),u(lr,ur),u(ur,vr),u(vr,ir),u(ir,Er),u(vr,dr),u(vr,Pr),u(Pr,Tr),u(vr,br),u(vr,gr),u(gr,pr),u(lr,mr),u(lr,Cr);for(let r=0;r<es.length;r+=1)es[r].m(Cr,null);l(e,Or,o),l(e,Dr,o),u(Dr,Rr),u(Rr,Ir),u(Ir,Nr),u(Nr,Sr),u(Ir,Gr),u(Ir,Fr),u(Fr,Vr),u(Ir,wr),u(Ir,xr),u(xr,Lr),u(xr,yr),u(yr,kr),u(xr,Hr),u(Ir,Br),u(Ir,_r),u(_r,Ar),u(Ir,jr),u(Ir,Ur),u(Ur,Yr),u(Ir,$r),u(Ir,Mr),u(Mr,Jr),u(Mr,Kr),u(Kr,qr),u(Mr,zr),u(Ir,Qr),u(Ir,Wr),u(Wr,Xr),u(Xr,Zr),u(Xr,rt),u(rt,tt),u(Xr,at),u(Xr,et),u(et,ot),u(Xr,st),u(Wr,ct),u(Wr,nt),u(nt,ht),u(nt,ft),u(ft,lt),u(nt,ut),u(nt,vt),u(vt,it),u(nt,Et),u(Wr,dt),u(Wr,Pt),u(Pt,Tt),u(Pt,bt),u(bt,gt),u(Pt,pt),u(Pt,mt),u(mt,Ct),u(Pt,Ot),u(Wr,Dt),u(Wr,Rt),u(Rt,It),u(Rt,Nt),u(Nt,St),u(Rt,Gt),u(Rt,Ft),u(Ft,Vt),u(Rt,wt),u(Rt,xt),u(xt,Lt),u(Rt,yt),u(Ir,kt),u(Ir,Ht),u(Ht,Bt),u(Ht,_t),u(_t,At),u(Ht,jt),u(Ht,Ut),u(Ut,Yt),u(Ht,$t),u(Ht,Mt),u(Mt,Jt),u(Ht,Kt),u(Ir,qt),u(Ir,zt),u(zt,Qt),u(Ir,Wt),u(Ir,Xt),u(Xt,Zt),u(Ir,ra),u(Ir,ta),u(ta,aa),u(ta,ea),u(ea,oa),u(ta,sa),u(Ir,ca),u(Ir,na),u(na,ha),u(ha,fa),u(ha,la),u(la,ua),u(ha,va),u(ha,ia),u(ia,Ea),u(ha,da),u(na,Pa),u(na,Ta),u(Ta,ba),u(Ta,ga),u(ga,pa),u(Ta,ma),u(Ta,Ca),u(Ca,Oa),u(Ta,Da),u(na,Ra),u(na,Ia),u(Ia,Na),u(Ia,Sa),u(Sa,Ga),u(Ia,Fa),u(Ia,Va),u(Va,wa),u(Ia,xa),u(Ir,La),u(Ir,ya),u(ya,ka),u(ya,Ha),u(Ha,Ba),u(ya,_a),u(ya,Aa),u(Aa,ja),u(ya,Ua),u(ya,Ya),u(Ya,$a),u(ya,Ma),u(Ir,Ja),u(Ir,Ka),u(Ka,qa),u(Ir,za),u(Ir,Qa),u(Qa,Wa),u(Ir,Xa),u(Ir,Za),u(Za,re),u(Ir,te),u(Ir,ae),u(ae,ee),u(ee,oe),u(ae,se),u(ae,ce),u(ce,ne),u(ce,he),u(he,fe),u(ce,le),u(Ir,ue),u(Ir,ve),u(ve,ie),u(ve,Ee),u(Ee,de),u(ve,Pe),u(Ir,Te),u(Ir,be),u(be,ge),u(ge,pe),u(pe,me),u(me,Ce),u(pe,Oe),u(pe,De),u(De,Re),u(pe,Ie),u(pe,Ne),u(Ne,Se),u(be,Ge),u(be,Fe),u(Fe,Ve),u(Ve,we),u(we,xe),u(Ve,Le),u(Ve,ye),u(ye,ke),u(Ve,He),u(Ve,Be),u(Be,_e),u(Fe,Ae),u(Fe,je),u(je,Ue),u(Ue,Ye),u(je,$e),u(je,Me),u(Me,Je),u(je,Ke),u(je,qe),u(qe,ze),u(Fe,Qe),u(Fe,We),u(We,Xe),u(Xe,Ze),u(We,ro),u(We,to),u(to,ao),u(We,eo),u(We,oo),u(oo,so),u(Ir,co),u(Ir,no),u(no,ho),u(no,fo),u(fo,lo),u(no,uo),u(no,vo),u(vo,io),u(no,Eo),u(Ir,Po),u(Ir,To),u(To,bo),u(Ir,go),u(Ir,po),u(po,mo),u(Ir,Co),u(Ir,Oo),u(Oo,Do),u(Oo,Ro),u(Ro,Io),u(Oo,No),u(Oo,So),u(So,Go),u(Oo,Fo),u(Ir,Vo),u(Ir,wo),u(wo,xo),u(xo,Lo),u(wo,yo),u(wo,ko),u(ko,Ho),u(wo,Bo),u(wo,_o),u(_o,Ao),u(Ir,jo),u(Ir,Uo),u(Uo,Yo),u(Uo,$o),u($o,Mo),u(Uo,Jo),Ko||(qo=[P(W,"change",r[10]),P(W,"click",r[11])],Ko=!0)},p(r,[t]){if(!r[3].reverse&&!r[2]||r[2]?zo?zo.p(r,t):(zo=D(r),zo.c(),zo.m(v,b)):zo&&(zo.d(1),zo=null),r[3].reverse||r[2]&&!r[3].reverse?Qo?Qo.p(r,t):(Qo=R(r),Qo.c(),Qo.m(v,m)):Qo&&(Qo.d(1),Qo=null),Xo===(Xo=Wo(r))&&Zo?Zo.p(r,t):(Zo.d(1),Zo=Xo(r),Zo&&(Zo.c(),Zo.m(v,null))),56&t){let a;for(rs=r[4].sort(),a=0;a<rs.length;a+=1){const e=O(r,rs,a);ts[a]?ts[a].p(e,t):(ts[a]=S(e),ts[a].c(),ts[a].m(A,null))}for(;a<ts.length;a+=1)ts[a].d(1);ts.length=rs.length}if(8&t&&(W.checked=r[3].reverse),25&t){let a;for(as=r[4].sort(),a=0;a<as.length;a+=1){const e=C(r,as,a);es[a]?es[a].p(e,t):(es[a]=F(e),es[a].c(),es[a].m(Cr,null))}for(;a<es.length;a+=1)es[a].d(1);es.length=as.length}},i:g,o:g,d(r){r&&h(t),zo&&zo.d(),Qo&&Qo.d(),Zo.d(),r&&h(w),r&&h(x),p(ts,r),r&&h(tr),r&&h(ar),p(es,r),r&&h(Or),r&&h(Dr),Ko=!1,T(qo)}}}let w=m;async function x({fetch:r}){return{props:{data:await r(`${w}/tenses.json`).then((r=>r.json()))}}}function L(r,t,a){let{data:e}=t,o=Object.keys(e),s=null,c=!1;const n={tenses:Object.assign(...o.map((r=>({[r]:!0})))),reverse:!1};function h(){return o.filter((r=>n.tenses[r]))}function f(){return(r=h())[Math.floor(Math.random()*r.length)];var r}function l(){if(0==h.length)a(1,s=null);else if(1==h.length);else{let r=s;for(;s==r;)a(1,s=f())}a(2,c=!1)}l();return r.$$set=r=>{"data"in r&&a(0,e=r.data)},[e,s,c,n,o,l,()=>l(),()=>a(2,c=!0),function(r){n.tenses[r]=this.checked,a(3,n),a(4,o)},()=>l(),function(){n.reverse=this.checked,a(3,n)},()=>l()]}w&&"/"==w[w.length-1]&&(w=w.substring(0,w.length-1));export default class extends r{constructor(r){super(),t(this,r,L,V,a,{data:0})}}export{x as load};