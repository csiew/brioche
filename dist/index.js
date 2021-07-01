"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-router-dom"),a=require("react-icons/md");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=r(e);function i({className:e,style:t,onClick:a,label:r,tooltip:i,primary:n,iconOnly:s,round:o}){return l.default.createElement("button",{title:i,className:`${s?"button-icon-only padding-none":""} ${n?"button-primary":""} ${o?"border-radius-100pct":""} ${e||""}`,style:t,onClick:a},r)}function n({className:e,mainClassName:t,sidebarClassName:a,main:r,sidebar:i}){return l.default.createElement("div",{className:`width-full responsive-row margin-auto-horizontal padding-s-left padding-s-right ${e||""}`},l.default.createElement("div",{className:`width-full height-auto padding-s padding-m-top grid grid-col-1 grid-gap-xl ${t||""}`,style:{flexGrow:"2",flexShrink:"1"}},r),i?l.default.createElement("div",{className:`width-full height-auto padding-s padding-m-top grid grid-col-1 grid-gap-xl ${a||""}`,style:{flexGrow:"1",flexShrink:"2"}},i):"")}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}('@import url("./styles/Util.css");@import url("./styles/Definitions.css");@import url("./styles/themes/Default.css");@import url("./styles/themes/Dark.css");@import url("./styles/Main.css");@import url("./styles/Controls.css");@import url("./styles/Surfaces.css");@import url("./styles/Lists.css");@import url("./styles/Article.css");@import url("./styles/Animation.css");@import url("./styles/Interactive.css");@import url("./assets/fonts/PublicSans.css");@import url("./assets/fonts/Bitter.css");@import url("./assets/fonts/RobotoMono.css");'),exports.AppContainer=function({children:e}){return l.default.createElement("div",{id:"App"},e)},exports.Button=i,exports.Card=function({className:t,children:a,header:r,body:i,id:n,isFloating:s,isWindowMode:o,toggleFloating:c}){const d=e.useRef(),[u,m]=e.useState(0),[p,f]=e.useState(0);return l.default.createElement("div",{ref:d,id:n,className:`card width-full ${s?"position-fixed width-max-480 height-max-640":""} ${t||""}`,style:{left:s?`${u}px`:null,top:s?`${p}px`:null},onDoubleClick:e=>s?c(e):void 0,onMouseDown:e=>o?(e=>{if(e.preventDefault(),!s)return;const t=document.querySelector("body");var a=0,r=0,l=0,i=0;l=e.clientX,i=e.clientY,document.onmouseup=e=>{e.preventDefault(),document.onmousedown=null,document.onmouseup=null,document.onmousemove=null},document.onmousemove=e=>{e.preventDefault(),a=l-e.clientX,r=i-e.clientY,l=e.clientX,i=e.clientY;const{left:n,top:s}=d.current.getBoundingClientRect();n-a>=0&&m(n-a),s-r-t.getBoundingClientRect().height>=0&&f(s-r)}})(e):void 0},r,i,a)},exports.CardBody=function({className:e,children:t}){return l.default.createElement("div",{className:`body width-full ${e||""}`},t)},exports.CardTitle=function({className:e,children:t,noBody:a}){return l.default.createElement("div",{className:`title width-full ${e||""} ${a?"card-border-bottom-radius hug-bottom":""}`},t)},exports.CardToggleButton=function({isVisible:e,cardName:t,toggle:r}){return l.default.createElement(i,{tooltip:e?`Hide ${t}`:`Show ${t}`,className:"border-radius-100pct padding-none",style:{width:"2rem",height:"2rem"},onClick:r},e?l.default.createElement(a.MdArrowDropUp,{size:"1.5rem"}):l.default.createElement(a.MdArrowDropDown,{size:"1.5rem"}))},exports.CardToggleFloatingButton=function({isVisible:e,cardName:t,toggle:r}){return l.default.createElement(i,{tooltip:e?`Hide ${t}`:`Show ${t}`,className:"border-radius-100pct padding-none",style:{width:"2rem",height:"2rem"},onClick:r},l.default.createElement(a.MdArrowUpward,{size:"1.5rem"}))},exports.DynamicPageView=function({className:e,mainClassName:t,sidebarClassName:a,header:r,main:i,sidebar:s}){return l.default.createElement("div",{className:`width-full margin-auto-horizontal grid grid-col-1 ${e||""}`},r,l.default.createElement(n,{mainClassName:t,sidebarClassName:a,main:i,sidebar:s}))},exports.MainSidebarView=n,exports.PageHeader=function({className:e,title:t,isTextured:a,isItalic:r}){return l.default.createElement("div",{className:"width-full page-title-main"},l.default.createElement("div",{className:`page-title ${a?"textured-text":""} ${r?"font-style-italic":""} ${e||""}`},l.default.createElement("h2",null,t)))},exports.SelectableList=function({className:e,children:t}){return l.default.createElement("div",{className:`list-selectable ${e||""}`},t)},exports.SelectableListItem=function({className:e,children:a,onClick:r,tooltip:i,selected:n,to:s,exact:o,href:c,openInNewTab:d}){return s?l.default.createElement(t.NavLink,{title:i,className:`item ${n?"active":""} ${e||""}`,to:s,exact:o},a):c?l.default.createElement("a",{title:i,href:c,target:d?"_blank":"",rel:"noreferrer",className:`item ${e||""}`},a):l.default.createElement("div",{title:i,className:`item ${n?"active":""} ${e||""}`,onClick:r},a)},exports.TabBar=function({className:e,children:t}){return l.default.createElement("div",{className:`tab-bar ${e||""}`},t)},exports.TabBarItem=function({className:e,children:a,onClick:r,tooltip:i,selected:n,to:s,exact:o,href:c,openInNewTab:d}){return s?l.default.createElement(t.NavLink,{title:i,to:s,exact:o,className:`item text-align-center cursor-pointer noselect ${n?"active":""} ${e||""}`},a):c?l.default.createElement("a",{title:i,href:c,target:d?"_blank":"",rel:"noreferrer",className:`item text-align-center cursor-pointer noselect ${n?"active":""} ${e||""}`},a):l.default.createElement("div",{title:i,className:`item text-align-center cursor-pointer noselect ${n?"active":""} ${e||""}`,onClick:r},a)},exports.TabBarStickyContainer=function({className:e,children:t,anchor:a}){let r="";switch(a){case"bottom":r="card-border-bottom-radius border-top anchor-bottom margin-none-bottom";break;case"top":default:r="card-border-top-radius border-bottom anchor-top margin-none-top"}return l.default.createElement("div",{className:`bg-color-acryllic position-sticky padding-s ${r} ${e||""}`},t)},exports.Toolbar=function(e){return l.default.createElement("div",{className:`toolbar anchor-top margin-none-top padding-s padding-xs-top padding-xs-bottom ${e.className?e.className:""}`},e.children)};
