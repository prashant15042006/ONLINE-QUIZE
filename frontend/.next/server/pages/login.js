"use strict";(()=>{var e={};
e.id=459,e.ids=[459,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof 
    t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},
    540:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>m,
    default:()=>g,getServerSideProps:()=>h,
    getStaticPaths:()=>P,
    getStaticProps:()=>f,
    reportWebVitals:()=>b,
    routeModule:()=>j,
    unstable_getServerProps:()=>y,
    unstable_getServerSideProps:()=>_,
    unstable_getStaticParams:()=>v,
    unstable_getStaticPaths:()=>S,
    unstable_getStaticProps:()=>x});
    var n=r(7093),
    s=r(5244),
    o=r(1323),
    l=r(1682),
    i=r.n(l),
    u=r(8141),
    d=r.n(u),
    c=r(627),
    p=e([c]);
    c=(p.then?(await p)():p)[0];
    let g=(0,o.l)(c,"default"),
    f=(0,o.l)(c,"getStaticProps"),
    P=(0,o.l)(c,"getStaticPaths"),
    h=(0,o.l)(c,"getServerSideProps"),
    m=(0,o.l)(c,"config"),
    b=(0,o.l)(c,"reportWebVitals"),
    x=(0,o.l)(c,"unstable_getStaticProps"),
    S=(0,o.l)(c,"unstable_getStaticPaths"),
    v=(0,o.l)(c,"unstable_getStaticParams"),
    y=(0,o.l)(c,"unstable_getServerProps"),
    _=(0,o.l)(c,"unstable_getServerSideProps"),
    j=new n.PagesRouteModule({definition:{kind:s.x.PAGES,
        page:"/login",pathname:"/login",bundlePath:"",
        filename:""},components:{App:d(),Document:i()},
        userland:c});a()}catch(e){a(e)}})},
        8141:(e,t,r)=>{Object.defineProperty(t,"__esModule",
            {value:!0}),Object.defineProperty(t,"default",
                {enumerable:!0,get:function(){return i}});
                let a=r(167),n=r(997),s=a._(r(6689)),
         o=r(5782);async function l(e){let{Component:t,
            ctx:r}=e;
            return{pageProps:await (0,o.loadGetInitialProps)(t,r)}}class i extends s.default.Component{render(){let{Component:e,pageProps:t}=this.props;
            return(0,n.jsx)(e,{...t})}}i.origGetInitialProps=l,
            i.getInitialProps=l,
            ("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),
            e.exports=t.default)},
            627:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>u,getServerSideProps:()=>d});
            var n=r(997),s=r(6689),o=r(401),l=r(8124),i=e([o,l]);[o,l]=i.then?(await i)():i;let d=async()=>({props:{}});
            function u(){let[e,t]=(0,s.useState)(""),[r,a]=(0,s.useState)(""),[l,i]=(0,s.useState)(!1),u=(0,o.getAuth)();
                async function d(t){if(t.preventDefault(),l)try{await (0,o.signInWithEmailAndPassword)(u,e,r),alert("Logged in")}catch(e){console.error(e),alert("Login failed")}}async function c(){if(!l)return;
                    let e=new o.GoogleAuthProvider;try{await (0,o.signInWithPopup)(u,e),alert("Logged in with Google")}catch(e){console.error(e),alert("Google login failed")}}return l?(0,n.jsxs)("main",{className:"min-h-screen p-8",children:[n.jsx("h2",{className:"text-2xl font-semibold",children:"Login"}),(0,n.jsxs)("form",{onSubmit:d,className:"mt-4 space-y-3 max-w-md",children:[n.jsx("input",{value:e,onChange:e=>t(e.target.value),placeholder:"Email",className:"w-full p-2 border rounded"}),n.jsx("input",{type:"password",value:r,onChange:e=>a(e.target.value),placeholder:"Password",className:"w-full p-2 border rounded"}),(0,n.jsxs)("div",{className:"flex gap-2",children:[n.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded",children:"Sign in"}),n.jsx("button",{type:"button",onClick:c,className:"px-4 py-2 bg-red-600 text-white rounded",children:"Google"})]})]})]}):n.jsx("div",{className:"p-8",children:"Loading..."})}a()}catch(e){a(e)}})},8124:(e,t,r)=>{r.a(e,async(e,t)=>{try{var a=r(3745),n=r(401),s=e([a,n]);
                        [a,n]=s.then?(await s)():s,t()}catch(e){t(e)}})},5244:(e,t)=>{var r;
                            Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},5315:e=>{e.exports=require("path")},3745:e=>{e.exports=import("firebase/app")},401:e=>{e.exports=import("firebase/auth")}};
                            var t=require("../webpack-runtime.js");
                    t.C(e);var r=e=>t(t.s=e),a=t.X(0,[682],()=>r(540));module.exports=a})();