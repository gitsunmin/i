import{aG as o,aH as l,aI as e,aJ as s,aK as d}from"./index-BeiZC-8u.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],p=o("Building2",h);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],u=o("FileText",x);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M10 7.5 8 10l2 2.5",key:"xb17xw"}],["path",{d:"m14 7.5 2 2.5-2 2.5",key:"5rap1v"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],y=o("MessageSquareCode",m);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]],f=o("MonitorSmartphone",N),v=l("/")({component:j}),g=a=>{const{to:r,icon:c,label:n,status:i}=a,t=i==="CONSTRUCTION";return e.jsxs(d,{to:r,disabled:t,className:s("flex w-14 flex-col justify-center items-center gap-1",{"cursor-not-allowed":t,"active:transform active:duration-300 active:scale-150 active:opacity-80 hover:opacity-90":!t}),children:[e.jsx("div",{className:s("size-14 bg-background rounded-xl shadow-md flex items-center justify-center",{"bg-gray-200 opacity-50":t}),children:c}),i==="CONSTRUCTION"&&e.jsx("div",{className:"absolute text-5xl",children:"🚧"}),e.jsx("span",{className:s("text-[12px] text-foreground",{"line-through":t}),children:n})]})},k=[{id:"careers",label:"Careers",icon:e.jsx(p,{size:28,className:"text-foreground"}),status:"ENABLED",to:"/careers"},{id:"projects",label:"Projects",icon:e.jsx(f,{size:28,className:"text-foreground"}),status:"CONSTRUCTION",to:"/projects"},{id:"interview",label:"Interview",icon:e.jsx(y,{size:28,className:"text-foreground"}),status:"ENABLED",to:"/interview"},{id:"til",label:"TIL",icon:e.jsx(u,{size:28,className:"text-foreground"}),status:"ENABLED",to:"/til"}];function j(){return e.jsx("main",{className:s("fixed","mx-auto px-4 py-6 w-full h-[100dvh] break-all pb-10","bg-background"),children:e.jsx("ul",{className:"grid grid-cols-[repeat(auto-fit,minmax(64px,1fr))] gap-4",children:k.map(a=>e.jsx("li",{className:"flex flex-col justify-center items-center",children:e.jsx(g,{...a})},a.id))})})}export{v as Route};
