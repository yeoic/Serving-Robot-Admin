import{Q as tt,a as at}from"./QBtn.dd72c0be.js";import{c as D,h as ne,a as nt,b as ot,d as $e,e as it}from"./render.56081c65.js";import{c as v,h as S,r as z,i as Ve,o as X,a as U,n as Se,d as ee,g as F,l as be,e as xe,f as P,j as oe,w as C,k as I,m as rt,p as G,q as fe,s as Be,t as ve,u as pe,v as he,x as lt,y as ut,z as He,A as st,B as J,C as ct,D as j,E as te,F as $,G as _,H as dt,I as ae,J as we,K as ft,L as vt,M as ht,N as mt,O as gt,P as yt,Q as bt}from"./index.e4e2c815.js";import{c as pt,u as wt,a as Ct,b as qt,d as St,e as xt,f as zt,g as kt,h as Z,i as Tt,j as Lt,k as _t,l as $t,m as me,Q as Ee,n as Ce,o as Bt,p as Et}from"./QItem.b9372290.js";var Ot=D({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const i=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:i.value},ne(o.default))}}),Pt=D({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const i=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:i.value,role:"toolbar"},ne(o.default))}});function Qt(){const e=z(!Ve.value);return e.value===!1&&X(()=>{e.value=!0}),e}const Re=typeof ResizeObserver!="undefined",Oe=Re===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var qe=D({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let i=null,u,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),u){const{offsetWidth:c,offsetHeight:l}=u;(c!==t.width||l!==t.height)&&(t={width:c,height:l},o("resize",t))}}const{proxy:f}=F();if(Re===!0){let c;const l=r=>{u=f.$el.parentNode,u?(c=new ResizeObserver(a),c.observe(u),s()):r!==!0&&ee(()=>{l(!0)})};return X(()=>{l()}),U(()=>{i!==null&&clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():u&&c.unobserve(u))}),Se}else{let r=function(){i!==null&&(clearTimeout(i),i=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",a,be.passive),l=void 0)},w=function(){r(),u&&u.contentDocument&&(l=u.contentDocument.defaultView,l.addEventListener("resize",a,be.passive),s())};const c=Qt();let l;return X(()=>{ee(()=>{u=f.$el,u&&w()})}),U(r),f.trigger=a,()=>{if(c.value===!0)return S("object",{style:Oe.style,tabindex:-1,type:"text/html",data:Oe.url,"aria-hidden":"true",onLoad:w})}}}}),Mt=D({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=F(),t=xe(oe,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=z(parseInt(e.heightHint,10)),s=z(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||u.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?a.value:0;const d=a.value-t.scroll.value.position;return d>0?d:0}),l=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),r=v(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=v(()=>{const d=t.rows.value.top,k={};return d[0]==="l"&&t.left.space===!0&&(k[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(k[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function h(d,k){t.update("header",d,k)}function m(d,k){d.value!==k&&(d.value=k)}function B({height:d}){m(a,d),h("size",d)}function x(d){r.value===!0&&m(s,!0),i("focusin",d)}C(()=>e.modelValue,d=>{h("space",d),m(s,!0),t.animate()}),C(c,d=>{h("offset",d)}),C(()=>e.reveal,d=>{d===!1&&m(s,e.modelValue)}),C(s,d=>{t.animate(),i("reveal",d)}),C(t.scroll,d=>{e.reveal===!0&&m(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&h("size",a.value),h("space",e.modelValue),h("offset",c.value),U(()=>{t.instances.header===b&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const d=nt(o.default,[]);return e.elevated===!0&&d.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(S(qe,{debounce:0,onResize:B})),S("header",{class:w.value,style:p.value,onFocusin:x},d)}}});const ze={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Dt=Object.keys(ze);ze.all=!0;function Pe(e){const o={};for(const i of Dt)e[i]===!0&&(o[i]=!0);return Object.keys(o).length===0?ze:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const Vt=["INPUT","TEXTAREA"];function Qe(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&Vt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function ge(e,o,i){const u=pe(e);let t,a=u.left-o.event.x,s=u.top-o.event.y,f=Math.abs(a),c=Math.abs(s);const l=o.direction;l.horizontal===!0&&l.vertical!==!0?t=a<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?t=s<0?"up":"down":l.up===!0&&s<0?(t="up",f>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.down===!0&&s>0?(t="down",f>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.left===!0&&a<0?(t="left",f<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down"))):l.right===!0&&a>0&&(t="right",f<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(u.left-=a,f=0,a=0):(u.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:u,direction:t,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:f,y:c},offset:{x:a,y:s},delta:{x:u.left-o.event.lastX,y:u.top-o.event.lastY}}}}let Ht=0;var ye=ot({name:"touch-pan",beforeMount(e,{value:o,modifiers:i}){if(i.mouse!==!0&&I.has.touch!==!0)return;function u(a,s){i.mouse===!0&&s===!0?lt(a):(i.stop===!0&&ve(a),i.prevent===!0&&Be(a))}const t={uid:"qvtp_"+Ht++,handler:o,modifiers:i,direction:Pe(i),noop:Se,mouseStart(a){Qe(a,t)&&rt(a)&&(G(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Qe(a,t)){const s=a.target;G(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(I.is.firefox===!0&&fe(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const l=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Be(l),a.cancelBubble===!0&&ve(l),Object.assign(l,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:l}}ve(a)}const{left:f,top:c}=pe(a);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(a){if(t.event===void 0)return;const s=pe(a),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=a;const l=t.event.mouse===!0,r=()=>{u(a,l);let h;i.preserveCursor!==!0&&i.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),l===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{B(),m()},50):B()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:h,synthetic:m}=ge(a,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=m===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||l===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(a);return}const w=Math.abs(f),p=Math.abs(c);w!==p&&(t.direction.horizontal===!0&&w>p||t.direction.vertical===!0&&w<p||t.direction.up===!0&&w<p&&c<0||t.direction.down===!0&&w<p&&c>0||t.direction.left===!0&&w>p&&f<0||t.direction.right===!0&&w>p&&f>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(he(t,"temp"),I.is.firefox===!0&&fe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ge(a===void 0?t.lastEvt:a,t).payload);const{payload:f}=ge(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";G(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}I.has.touch===!0&&G(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=Pe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),he(o,"main"),he(o,"temp"),I.is.firefox===!0&&fe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const Me=150;var Rt=D({name:"QDrawer",inheritAttrs:!1,props:{...wt,...Ct,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qt,"onLayout","miniState"],setup(e,{slots:o,emit:i,attrs:u}){const t=F(),{proxy:{$q:a}}=t,s=St(e,a),{preventBodyScroll:f}=Tt(),{registerTimeout:c,removeTimeout:l}=xt(),r=xe(oe,P);if(r===P)return console.error("QDrawer needs to be child of QLayout"),P;let w,p=null,h;const m=z(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),B=v(()=>e.mini===!0&&m.value!==!0),x=v(()=>B.value===!0?e.miniWidth:e.width),b=z(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),d=v(()=>e.persistent!==!0&&(m.value===!0||Ae.value===!0));function k(n,g){if(V(),n!==!1&&r.animate(),E(0),m.value===!0){const T=r.instances[Y.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),Q(1),r.isContainer.value!==!0&&f(!0)}else Q(0),n!==!1&&se(!1);c(()=>{n!==!1&&se(!0),g!==!0&&i("show",n)},Me)}function y(n,g){W(),n!==!1&&r.animate(),Q(0),E(R.value*x.value),ce(),g!==!0?c(()=>{i("hide",n)},Me):l()}const{show:q,hide:L}=zt({showing:b,hideOnRouteChange:d,handleShow:k,handleHide:y}),{addToHistory:V,removeFromHistory:W}=kt(b,L,d),H={belowBreakpoint:m,hide:L},O=v(()=>e.side==="right"),R=v(()=>(a.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),ke=z(0),A=z(!1),ie=z(!1),Te=z(x.value*R.value),Y=v(()=>O.value===!0?"left":"right"),re=v(()=>b.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),le=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(O.value?"R":"L")>-1||a.platform.is.ios===!0&&r.isContainer.value===!0),N=v(()=>e.overlay===!1&&b.value===!0&&m.value===!1),Ae=v(()=>e.overlay===!0&&b.value===!0&&m.value===!1),Fe=v(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&A.value===!1?" hidden":"")),We=v(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),Le=v(()=>O.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Ne=v(()=>O.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ie=v(()=>{const n={};return r.header.space===!0&&Le.value===!1&&(le.value===!0?n.top=`${r.header.offset}px`:r.header.space===!0&&(n.top=`${r.header.size}px`)),r.footer.space===!0&&Ne.value===!1&&(le.value===!0?n.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(n.bottom=`${r.footer.size}px`)),n}),je=v(()=>{const n={width:`${x.value}px`,transform:`translateX(${Te.value}px)`};return m.value===!0?n:Object.assign(n,Ie.value)}),Xe=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ue=v(()=>`q-drawer q-drawer--${e.side}`+(ie.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(le.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),Ye=v(()=>{const n=a.lang.rtl===!0?e.side:Y.value;return[[ye,Ze,void 0,{[n]:!0,mouse:!0}]]}),Ke=v(()=>{const n=a.lang.rtl===!0?Y.value:e.side;return[[ye,_e,void 0,{[n]:!0,mouse:!0}]]}),Ge=v(()=>{const n=a.lang.rtl===!0?Y.value:e.side;return[[ye,_e,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){et(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}C(m,n=>{n===!0?(w=b.value,b.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(b.value===!0?(E(0),Q(0),ce()):q(!1))}),C(()=>e.side,(n,g)=>{r.instances[g]===H&&(r.instances[g]=void 0,r[g].space=!1,r[g].offset=0),r.instances[n]=H,r[n].size=x.value,r[n].space=N.value,r[n].offset=re.value}),C(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),C(()=>e.behavior+e.breakpoint,ue),C(r.isContainer,n=>{b.value===!0&&f(n!==!0),n===!0&&ue()}),C(r.scrollbarWidth,()=>{E(b.value===!0?0:void 0)}),C(re,n=>{M("offset",n)}),C(N,n=>{i("onLayout",n),M("space",n)}),C(O,()=>{E()}),C(x,n=>{E(),de(e.miniToOverlay,n)}),C(()=>e.miniToOverlay,n=>{de(n,x.value)}),C(()=>a.lang.rtl,()=>{E()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Je(),r.animate())}),C(B,n=>{i("miniState",n)});function E(n){n===void 0?ee(()=>{n=b.value===!0?0:x.value,E(R.value*n)}):(r.isContainer.value===!0&&O.value===!0&&(m.value===!0||Math.abs(n)===x.value)&&(n+=R.value*r.scrollbarWidth.value),Te.value=n)}function Q(n){ke.value=n}function se(n){const g=n===!0?"remove":r.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function Je(){p!==null&&clearTimeout(p),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ie.value=!0,p=setTimeout(()=>{p=null,ie.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ze(n){if(b.value!==!1)return;const g=x.value,T=Z(n.distance.x,0,g);if(n.isFinal===!0){T>=Math.min(75,g)===!0?q():(r.animate(),Q(0),E(R.value*g)),A.value=!1;return}E((a.lang.rtl===!0?O.value!==!0:O.value)?Math.max(g-T,0):Math.min(0,T-g)),Q(Z(T/g,0,1)),n.isFirst===!0&&(A.value=!0)}function _e(n){if(b.value!==!0)return;const g=x.value,T=n.direction===e.side,K=(a.lang.rtl===!0?T!==!0:T)?Z(n.distance.x,0,g):0;if(n.isFinal===!0){Math.abs(K)<Math.min(75,g)===!0?(r.animate(),Q(1),E(0)):L(),A.value=!1;return}E(R.value*K),Q(Z(1-K/g,0,1)),n.isFirst===!0&&(A.value=!0)}function ce(){f(!1),se(!0)}function M(n,g){r.update(e.side,n,g)}function et(n,g){n.value!==g&&(n.value=g)}function de(n,g){M("size",n===!0?e.miniWidth:g)}return r.instances[e.side]=H,de(e.miniToOverlay,x.value),M("space",N.value),M("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),X(()=>{i("onLayout",N.value),i("miniState",B.value),w=e.showIfAbove===!0;const n=()=>{(b.value===!0?k:y)(!1,!0)};if(r.totalWidth.value!==0){ee(n);return}h=C(r.totalWidth,()=>{h(),h=void 0,b.value===!1&&e.showIfAbove===!0&&m.value===!1?q(!1):n()})}),U(()=>{h!==void 0&&h(),p!==null&&(clearTimeout(p),p=null),b.value===!0&&ce(),r.instances[e.side]===H&&(r.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const n=[];m.value===!0&&(e.noSwipeOpen===!1&&n.push(ut(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ye.value)),n.push($e("div",{ref:"backdrop",class:Fe.value,style:We.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>Ge.value)));const g=B.value===!0&&o.mini!==void 0,T=[S("div",{...u,key:""+g,class:[Xe.value,u.class]},g===!0?o.mini():ne(o.default))];return e.elevated===!0&&b.value===!0&&T.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push($e("aside",{ref:"content",class:Ue.value,style:je.value},T,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Ke.value)),S("div",{class:"q-drawer-container"},n)}}}),At=D({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:i}}=F(),u=xe(oe,P);if(u===P)return console.error("QPageContainer needs to be child of QLayout"),P;He(st,!0);const t=v(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:t.value},ne(o.default))}});const{passive:De}=be,Ft=["both","horizontal","vertical"];var Wt=D({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ft.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;C(()=>e.scrollTarget,()=>{c(),f()});function s(){u!==null&&u();const w=Math.max(0,_t(t)),p=$t(t),h={top:w-i.position.top,left:p-i.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const m=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";i.position={top:w,left:p},i.directionChanged=i.direction!==m,i.delta=h,i.directionChanged===!0&&(i.direction=m,i.inflectionPoint=i.position),o("scroll",{...i})}function f(){t=Lt(a,e.scrollTarget),t.addEventListener("scroll",l,De),l(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",l,De),t=void 0)}function l(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[p,h]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{h(p),u=null}}}const{proxy:r}=F();return C(()=>r.$q.lang.rtl,s),X(()=>{a=r.$el.parentNode,f()}),U(()=>{u!==null&&u(),c()}),Object.assign(r,{trigger:l,getPosition:()=>i}),Se}}),Nt=D({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=F(),t=z(null),a=z(u.screen.height),s=z(e.container===!0?0:u.screen.width),f=z({position:0,direction:"down",inflectionPoint:0}),c=z(0),l=z(Ve.value===!0?0:me()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),p=v(()=>l.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),h=v(()=>l.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function m(y){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};f.value=q,e.onScroll!==void 0&&i("scroll",q)}}function B(y){const{height:q,width:L}=y;let V=!1;a.value!==q&&(V=!0,a.value=q,e.onScrollHeight!==void 0&&i("scrollHeight",q),b()),s.value!==L&&(V=!0,s.value=L),V===!0&&e.onResize!==void 0&&i("resize",y)}function x({height:y}){c.value!==y&&(c.value=y,b())}function b(){if(e.container===!0){const y=a.value>c.value?me():0;l.value!==y&&(l.value=y)}}let d=null;const k={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:l,totalWidth:v(()=>s.value+l.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:f,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,q,L){k[y][q]=L}};if(He(oe,k),me()>0){let L=function(){y=null,q.classList.remove("hide-scrollbar")},V=function(){if(y===null){if(q.scrollHeight>u.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(L,300)},W=function(H){y!==null&&H==="remove"&&(clearTimeout(y),L()),window[`${H}EventListener`]("resize",V)},y=null;const q=document.body;C(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),ct(()=>{W("remove")})}return()=>{const y=it(o.default,[S(Wt,{onScroll:m}),S(qe,{onResize:B})]),q=S("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(qe,{onResize:x}),S("div",{class:"absolute-full",style:p.value},[S("div",{class:"scroll",style:h.value},[q])])]):q}}});const It={__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){return(o,i)=>(j(),te(Bt,{clickable:"",tag:"a",to:e.to},{default:$(()=>[e.icon?(j(),te(Ee,{key:0,avatar:""},{default:$(()=>[_(tt,{name:e.icon},null,8,["name"])]),_:1})):dt("",!0),_(Ee,null,{default:$(()=>[_(Ce,null,{default:$(()=>[ae(we(e.title),1)]),_:1}),_(Ce,{caption:""},{default:$(()=>[ae(we(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"]))}},jt=[{title:"typography",caption:"quasar.dev",icon:"school",to:"/typography"}],Jt={__name:"MainLayout",setup(e){const o=z(!1),i=jt,u=()=>o.value=!o.value;return(t,a)=>{const s=ft("router-view");return j(),te(Nt,{view:"lHh Lpr lFf"},{default:$(()=>[_(Mt,{elevated:""},{default:$(()=>[_(Pt,null,{default:$(()=>[_(at,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u}),_(Ot,null,{default:$(()=>[ae(" Serving Robot Admin ")]),_:1}),vt("div",null,"Quasar v"+we(t.$q.version),1)]),_:1})]),_:1}),_(Rt,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=f=>o.value=f),"show-if-above":"",bordered:""},{default:$(()=>[_(Et,null,{default:$(()=>[_(Ce,{header:""},{default:$(()=>[ae(" Essential Links ")]),_:1}),(j(!0),ht(yt,null,mt(gt(i),f=>(j(),te(It,bt({key:f.title},f),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),_(At,null,{default:$(()=>[_(s)]),_:1})]),_:1})}}};export{Jt as default};
