"use strict";(self.webpackChunkquran_app=self.webpackChunkquran_app||[]).push([[952],{9952:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var a=r(885),i=r(5861),s=r(7757),t=r.n(s),u=r(2791),l=r(1933),c=r(9126),o=r(4569),d=r.n(o),v=r(9434),f=r(184),h=function(){var n=(0,i.Z)(t().mark((function n(){var e;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d().get("https://api.quran.gading.dev/surah");case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(n){var e,r=n.getNomor,i=n.setPlay,s=(0,l.useQuery)("surah",h).data,t=(0,u.useState)(1),c=(0,a.Z)(t,2),o=c[0],d=c[1],x=(0,u.useState)([]),m=(0,a.Z)(x,2),p=m[0],j=m[1],N=(0,v.v9)((function(n){var e;return null===(e=n.search)||void 0===e?void 0:e.search}))||"";(0,u.useEffect)((function(){!function(){var n,e=null===s||void 0===s||null===(n=s.data)||void 0===n?void 0:n.data.filter((function(n){var e,r,a;return null===(e=n.name)||void 0===e||null===(r=e.transliteration)||void 0===r||null===(a=r.id.toLowerCase())||void 0===a?void 0:a.includes(N.toLowerCase())}));j(e)}()}),[N,null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.data]);return(0,f.jsx)("div",{className:"main-quran",children:(0,f.jsx)("ul",{children:null===p||void 0===p?void 0:p.map((function(n,e){var a,s,t,u;return(0,f.jsxs)("li",{onClick:function(){return e=n.number,r(e),d(e),void i();var e},className:n.number===o?"item border":"item",children:[(0,f.jsx)("div",{className:"ayat",children:n.number}),(0,f.jsxs)("div",{className:"surah",children:[(0,f.jsx)("div",{className:"name",children:null===(a=n.name)||void 0===a||null===(s=a.transliteration)||void 0===s?void 0:s.id}),(0,f.jsx)("div",{className:"info",children:null===(t=n.name)||void 0===t||null===(u=t.translation)||void 0===u?void 0:u.id})]})]},e)}))})})},m=r(8683),p=r(6856),j=r(8820),N=r(8029),y=r(688),b=function(n){var e,r,s=n.nomor,l=n.isPlay,o=n.setIsPlay,h=(0,u.useState)([]),x=(0,a.Z)(h,2),b=x[0],S=x[1],C=(0,u.useState)(""),k=(0,a.Z)(C,2),I=k[0],Z=k[1],E=(0,u.useState)(-1),g=(0,a.Z)(E,2),A=g[0],q=g[1],w=(0,u.useState)(null),T=(0,a.Z)(w,2),P=T[0],D=T[1],O=(0,v.I0)(),H=(0,u.useRef)([]);(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(t().mark((function n(){var e;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d().get("https://api.quran.gading.dev/surah/1");case 3:e=n.sent,S(e.data.data),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,u.useEffect)((function(){var n,e;s?H.current=H.current.slice(0,null===s||void 0===s||null===(n=s.verses)||void 0===n?void 0:n.length):H.current=H.current.slice(0,null===b||void 0===b||null===(e=b.verses)||void 0===e?void 0:e.length)}),[s]),(0,u.useEffect)((function(){-1!==A&&setTimeout((function(){return q(-1)}),2800)}),[A]),(0,u.useEffect)((function(){H.current[P]&&(l&&H.current[P].play(),l||(H.current[P].pause(),H.current[P].currentTime=0))}),[l,I,P]);var R=function(n,e,r){O((0,y.d)(n)),O((0,y.z7)({surah:e,ayat:r}))},z=function(n,e,r,a){Z(n),D(e),O((0,y.Sp)({surah:r,ayat:a})),o(!l)};return(0,f.jsx)("div",{className:"ayat-container",children:(0,f.jsx)("ul",{children:null!==s&&void 0!==s&&s.verses?null===(e=s.verses)||void 0===e?void 0:e.map((function(n,e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("div",{className:"ayat",children:[(0,f.jsx)("div",{className:"no",children:n.number.inSurah}),(0,f.jsx)("div",{className:"bacaan",children:n.text.arab})]}),(0,f.jsxs)("h2",{children:["INDONESIA-SAHIH INTERNATIONAL"," ",(0,f.jsxs)("span",{children:["| SEE TAFSIR ",(0,f.jsx)(c.lzl,{className:"icon"})]})]}),(0,f.jsx)("p",{children:n.translation.id}),(0,f.jsx)("div",{className:"line"}),(0,f.jsxs)("div",{className:"icons",children:[(0,f.jsx)(p.iqB,{onClick:function(){return R((0,m.Z)((0,m.Z)({},n),{},{id:n.audio.secondary[0]}),s.name.transliteration.id,n.number.inSurah)}}),(0,f.jsx)(c.Dqf,{}),(0,f.jsxs)("div",{className:"audio",children:[(0,f.jsx)("audio",{ref:function(n){return H.current[e]=n},src:I,onEnded:function(){return o(!l)}}),l&&P===e?(0,f.jsx)(j.lbi,{onClick:function(){return z(n.audio.primary,e,s.name.transliteration.id,n.number.inSurah)}}):(0,f.jsx)(j.Wxs,{onClick:function(){return z(n.audio.primary,e,s.name.transliteration.id,n.number.inSurah)}})]}),(0,f.jsxs)("div",{className:"copy",children:[(0,f.jsx)(N.CopyToClipboard,{text:n.text.arab,onCopy:function(){return q(e)},children:(0,f.jsx)("span",{children:(0,f.jsx)(j.AOF,{})})}),A===e?(0,f.jsx)("div",{className:"popup",children:"Copied"}):null]})]})]},e)})):null===(r=b.verses)||void 0===r?void 0:r.map((function(n,e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("div",{className:"ayat",children:[(0,f.jsx)("div",{className:"no",children:n.number.inSurah}),(0,f.jsx)("div",{className:"bacaan",children:n.text.arab})]}),(0,f.jsxs)("h2",{children:["INDONESIA-SAHIH INTERNATIONAL"," ",(0,f.jsxs)("span",{children:["| SEE TAFSIR ",(0,f.jsx)(c.lzl,{className:"icon"})]})]}),(0,f.jsx)("p",{children:n.translation.id}),(0,f.jsx)("div",{className:"line"}),(0,f.jsxs)("div",{className:"icons",children:[(0,f.jsx)(p.iqB,{onClick:function(){return R((0,m.Z)((0,m.Z)({},n),{},{id:n.audio.secondary[0]}),b.name.transliteration.id,n.number.inSurah)}}),(0,f.jsx)(c.Dqf,{}),(0,f.jsxs)("div",{className:"audio",children:[(0,f.jsx)("audio",{ref:function(n){return H.current[e]=n},src:I,onEnded:function(){return o(!l)}}),l&&P===e?(0,f.jsx)(j.lbi,{onClick:function(){return z(n.audio.primary,e,b.name.transliteration.id,n.number.inSurah)}}):(0,f.jsx)(j.Wxs,{onClick:function(){return z(n.audio.primary,e,b.name.transliteration.id,n.number.inSurah)}})]}),(0,f.jsxs)("div",{className:"copy",children:[(0,f.jsx)(N.CopyToClipboard,{text:n.text.arab,onCopy:function(){return q(e)},children:(0,f.jsx)("span",{children:(0,f.jsx)(j.AOF,{})})}),A===e?(0,f.jsx)("div",{className:"popup",children:"Copied"}):null]})]})]},e)}))})})},S=(0,u.lazy)((function(){return Promise.all([r.e(204),r.e(651),r.e(383)]).then(r.bind(r,2383))})),C=function(){var n=(0,i.Z)(t().mark((function n(e){var r,i,s,u;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.queryKey,i=(0,a.Z)(r,2),i[0],s=i[1],n.next=4,d().get("https://api.quran.gading.dev/surah/".concat(s));case 4:return u=n.sent,n.abrupt("return",u);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n,e=(0,u.useState)(null),r=(0,a.Z)(e,2),i=r[0],s=r[1],t=(0,u.useState)(!1),o=(0,a.Z)(t,2),d=o[0],v=o[1],h=(0,l.useQuery)(["surah",i],C,{enabled:!!i,keepPreviousData:!0}).data,m=(0,u.useState)(!1),p=(0,a.Z)(m,2),j=p[0],N=p[1];return(0,f.jsxs)("div",{className:"surah-container",children:[d&&(0,f.jsx)("div",{className:"bg-info"}),(0,f.jsx)(x,{getNomor:function(n){s(n)},nomor:i,setPlay:function(){j&&N(!j)}}),(0,f.jsx)(b,{nomor:null===h||void 0===h||null===(n=h.data)||void 0===n?void 0:n.data,isPlay:j,setIsPlay:N}),(0,f.jsx)(u.Suspense,{fallback:(0,f.jsx)("div",{}),children:(0,f.jsx)(S,{displayInfo:d,handleHiddenInfo:function(){v(!1)}})}),d?null:(0,f.jsx)(c.DpK,{className:"display-icons",onClick:function(){v(!0)}})]})}}}]);
//# sourceMappingURL=952.9170178b.chunk.js.map