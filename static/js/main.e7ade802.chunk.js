(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{63:function(e,t,s){},64:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(25),o=s.n(n),a=(s(63),s(15));s(64);console.log(window.location.hash);var i="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("8f5267a140754b25a5d5b64b97823b45","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),r=s(1),l=function(){return Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("img",{src:"images/logo512.png",alt:""}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:i,children:"LOGIN WITH SPOTIFY"})]})},j=s(35),d=s.n(j),b=(s(66),Object(c.createContext)()),u=function(e){var t=e.reducer,s=e.initialState,n=e.children;return Object(r.jsx)(b.Provider,{value:Object(c.useReducer)(t,s),children:n})},O=function(){return Object(c.useContext)(b)};s(67),s(68);var x=function(e){var t=e.option,s=void 0===t?"test":t,c=e.Icon;return Object(r.jsxs)("div",{className:"sidebarOption",children:[c&&Object(r.jsx)(c,{style:{fontSize:"45px"},className:"sidebarOption__icon"}),c?Object(r.jsx)("h4",{children:s}):Object(r.jsx)("p",{children:s})]})},h=s(36),f=s.n(h),p=s(42),m=s.n(p),_=s(43),v=s.n(_),y=s(44),g=s.n(y),N=s(45),S=s.n(N),k=function(){var e,t=O(),s=Object(a.a)(t,2),c=s[0].playlists;s[1];return Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsx)("img",{src:"images/logo512.png",alt:""}),Object(r.jsx)(x,{Icon:f.a,option:"Home"}),Object(r.jsx)(x,{Icon:m.a,option:"Search"}),Object(r.jsx)(x,{Icon:v.a,option:"Your Library"}),Object(r.jsx)("br",{}),Object(r.jsx)(x,{Icon:g.a,option:"Create Playlist"}),Object(r.jsx)(x,{Icon:S.a,option:"Liked Songs"}),Object(r.jsx)("hr",{}),null===c||void 0===c||null===(e=c.items)||void 0===e?void 0:e.map((function(e){return Object(r.jsx)(x,{option:e.name})}))]})},E=s(47),w=s.n(E),I=s(48),T=s.n(I),L=s(46),P=s.n(L),R=s(49),W=s.n(R),Y=s(51),A=s.n(Y),C=s(28),z=s.n(C),K=s(50),U=s.n(K),J=(s(74),s(93)),D=s(94);var V=function(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsxs)("div",{className:"footer__left",children:[Object(r.jsx)("img",{className:"footer__albumLogo",src:"images/album.png",alt:""}),Object(r.jsxs)("div",{className:"footer__songInfo",children:[Object(r.jsx)("h4",{children:"Wildlife"}),Object(r.jsx)("p",{children:"Jauz, Karra - Wildlife"})]})]}),Object(r.jsxs)("div",{className:"footer__center",children:[Object(r.jsx)(P.a,{className:"footer__green"}),Object(r.jsx)(w.a,{className:"footer__icon"}),Object(r.jsx)(z.a,{className:"footer__icon",style:{fontSize:"45px"}}),Object(r.jsx)(T.a,{className:"footer__icon"}),Object(r.jsx)(W.a,{className:"footer__green"})]}),Object(r.jsx)("div",{className:"footer__right",children:Object(r.jsxs)(J.a,{container:!0,spacing:2,children:[Object(r.jsx)(J.a,{item:!0,children:Object(r.jsx)(U.a,{})}),Object(r.jsx)(J.a,{item:!0,children:Object(r.jsx)(A.a,{})}),Object(r.jsx)(J.a,{item:!0,xs:!0,children:Object(r.jsx)(D.a,{"aria-labelledby":"continuous-slider"})})]})})]})},F=(s(75),s(95)),H=s(52),Z=s.n(H),B=(s(76),function(){var e,t=O(),s=Object(a.a)(t,2),c=s[0].user;s[1];return console.log(c),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("div",{className:"header__left",children:[Object(r.jsx)(Z.a,{}),Object(r.jsx)("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})]}),Object(r.jsxs)("div",{className:"header__right",children:[Object(r.jsx)(F.a,{src:null===c||void 0===c||null===(e=c.images[0])||void 0===e?void 0:e.url}),Object(r.jsx)("h4",{children:null===c||void 0===c?void 0:c.display_name})]})]})}),G=s(53),M=s.n(G),Q=s(54),X=s.n(Q);s(77);var q=function(e){var t=e.track;return console.log(t),Object(r.jsxs)("div",{className:"songRow",children:[Object(r.jsx)("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),Object(r.jsxs)("div",{className:"songRow__info",children:[Object(r.jsx)("h1",{children:t.name}),Object(r.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})},$=function(e){var t=e.spotify,s=O(),c=Object(a.a)(s,2),n=c[0].discover_weekly;c[1];return console.log(n),Object(r.jsxs)("div",{className:"body",children:[Object(r.jsx)(B,{spotify:{spotify:t}}),Object(r.jsxs)("div",{className:"body__info",children:[Object(r.jsx)("img",{src:"images/album.png",alt:""}),Object(r.jsxs)("div",{className:"body__infoText",children:[Object(r.jsx)("strong",{children:"PLAYLIST"}),Object(r.jsx)("h2",{children:"Discover Weekly"}),Object(r.jsx)("p",{children:null===n||void 0===n?void 0:n.description})]})]}),Object(r.jsxs)("div",{className:"body__songs",children:[Object(r.jsxs)("div",{className:"body__icons",children:[Object(r.jsx)(z.a,{className:"body__shuffle footer__green"}),Object(r.jsx)(M.a,{fontSize:"large"}),Object(r.jsx)(X.a,{})]}),null===n||void 0===n?void 0:n.tracks.items.map((function(e){return Object(r.jsx)(q,{track:e.track})}))]})]})},ee=(s(78),function(e){var t=e.spotify;return Object(r.jsxs)("div",{className:"player",children:[Object(r.jsxs)("div",{className:"player-body",children:[Object(r.jsx)(k,{}),Object(r.jsx)($,{spotify:t})]}),Object(r.jsx)(V,{})]})}),te=new d.a;var se=function(){var e=O(),t=Object(a.a)(e,2),s=t[0],n=(s.user,s.token),o=t[1];return Object(c.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var s=t.split("=");return e[s[0]]=decodeURIComponent(s[1]),e}),{});window.location.hash="";var t=e.access_token;console.log(t),t&&(o({type:"SET_TOKEN",token:t}),te.setAccessToken(t),te.getMe().then((function(e){o({type:"SET_USER",user:e})})),te.getUserPlaylists().then((function(e){o({type:"SET_PLAYLIST",playlists:e})})),te.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((function(e){return o({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})}))),console.log(e)})),Object(r.jsx)("div",{className:"App",children:n?Object(r.jsx)(ee,{}):Object(r.jsx)(l,{})})},ce=s(13),ne=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(ce.a)(Object(ce.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(ce.a)(Object(ce.a)({},e),{},{token:t.token});case"SET_PLAYLIST":return Object(ce.a)(Object(ce.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ce.a)(Object(ce.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};o.a.render(Object(r.jsx)(u,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:ne,children:Object(r.jsx)(se,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.e7ade802.chunk.js.map