import{R as r,r as i,j as e}from"./index-B0KQJkcm.js";import{c as a}from"./createLucideIcon-BKfF1Yqk.js";/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=a("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),d=()=>{const[o,t]=r.useState(!1);return i.useEffect(()=>{const s=()=>{window.pageYOffset>300?t(!0):t(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]),o&&e.jsx("div",{children:e.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-full",children:e.jsx(l,{size:24})})})};export{d as default};
