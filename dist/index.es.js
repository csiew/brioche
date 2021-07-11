import e,{useEffect as t,useState as a}from"react";import{NavLink as l}from"react-router-dom";var o={primaryColor:"--PRIMARY-COLOR",secondaryColor:"--SECONDARY-COLOR",tertiaryColor:"--TERTIARY-COLOR",fgColor:"--FG-COLOR",fgColorSecondary:"--FG-COLOR-SECONDARY",fgColorTertiary:"--FG-COLOR-TERTIARY",bgColor:"--BG-COLOR",bgColorSecondary:"--BG-COLOR-SECONDARY",borderColor:"--BORDER-COLOR",borderColorHover:"--BORDER-COLOR-HOVER",buttonFgColor:"--BUTTON-FG-COLOR",buttonFgColorDisabled:"--BUTTON-FG-COLOR-DISABLED",buttonBgColor:"--BUTTON-BG-COLOR",buttonBgColorHover:"--BUTTON-BG-COLOR-HOVER",buttonBgColorActive:"--BUTTON-BG-COLOR-ACTIVE",buttonBgColorDisabled:"--BUTTON-BG-COLOR-DISABLED",inputFgColor:"--INPUT-FG-COLOR",inputBgColor:"--INPUT-BG-COLOR",inputBgColorHover:"--INPUT-BG-COLOR-HOVER",inputBgColorActive:"--INPUT-BG-COLOR-ACTIVE",inputBgColorDisabled:"--INPUT-BG-COLOR-DISABLED",navMenuFgColor:"--NAV-MENU-FG-COLOR",navMenuBgColor:"--NAV-MENU-BG-COLOR",navMenuBgColorHover:"--NAV-MENU-BG-COLOR-HOVER",navMenuBgColorActive:"--NAV-MENU-BG-COLOR-ACTIVE",headerFgColor:"--HEADER-FG-COLOR",headerBgColor:"--HEADER-BG-COLOR",footerFgColor:"--FOOTER-FG-COLOR",footerBgColor:"--FOOTER-BG-COLOR",borderRadius:"--BORDER-RADIUS",buttonBorderRadius:"--BUTTON-BORDER-RADIUS",baseFontFamily:"--BASE-FONT-FAMILY",headerFontFamily:"--HEADER-FONT-FAMILY",articleFontFamily:"--ARTICLE-FONT-FAMILY"};function r({className:a,style:l,children:r,styleOverride:s}){return t((()=>{if(s){console.log(s);const e=document.getElementById("App");Object.entries(s).forEach((t=>{Object.keys(o).includes(t[0])&&e.style.setProperty(o[t[0]],t[1])}))}}),[]),e.createElement("div",{id:"App",className:a,style:l},r)}function s({className:t,disabled:a,exact:o,href:r,iconOnly:s,label:n,onClick:i,openInNewTab:c,primary:d,round:m,style:u,to:p,tooltip:C}){const g=`${s?"button-icon-only padding-none":""} ${d?"button-primary":""} ${m?"border-radius-100pct":""} ${t||""}`;return p?e.createElement(l,{title:C,className:`${g} ${a?"disabled":""}`,style:u,onClick:i,to:p,exact:o},n):r?e.createElement("a",{title:C,className:`${g} ${a?"disabled":""}`,style:u,onClick:i,href:r,target:c?"_blank":"",rel:"noreferrer"},n):e.createElement("button",{title:C,className:g,style:u,onClick:i,disabled:a},n)}function n({className:t,headerClassName:l,bodyClassName:o,children:r,title:s,body:n,id:m,collapseButtonClassName:u,collapseButtonStyle:p,isCollapsible:C,isCollapsedValue:g,isNotCollapsedValue:N}){const[O,E]=a(!1);return e.createElement("div",{id:m,className:`card width-full ${t||""}`},s?e.createElement(i,{className:`${l||""} ${!0===C&&!0===O?"card-border-bottom-radius hug-bottom":""}`},e.createElement("h2",null,s),C?e.createElement(d,{className:u,style:p,cardName:s,isCollapsed:O,toggle:()=>E(!O),isCollapsedValue:g,isNotCollapsedValue:N}):""):"",n&&!1===O?e.createElement(c,{className:o||""},n):"",r)}function i({className:t,children:a,noBody:l}){return e.createElement("div",{className:`title width-full ${t||""} ${l?"card-border-bottom-radius hug-bottom":""}`},a)}function c({className:t,children:a}){return e.createElement("div",{className:`body width-full ${t||""}`},a)}function d({className:t,style:a,isCollapsed:l,cardName:o,toggle:r,isCollapsedValue:n,isNotCollapsedValue:i}){return e.createElement(s,{tooltip:l?`Hide ${o}`:`Show ${o}`,className:t,style:a,onClick:r,label:l?n:i})}function m({className:t,children:a,edgeToEdge:l,lineSeparated:o}){return e.createElement("div",{className:`list ${l?"edge-to-edge":""} ${o?"line-separated":""} ${t||""}`},a)}function u({className:t,children:a,onClick:o,tooltip:r,selected:s,to:n,exact:i,href:c,openInNewTab:d}){return n?e.createElement(l,{title:r,className:`item ${s?"active":""} ${t||""}`,onClick:o,to:n,exact:i},a):c?e.createElement("a",{title:r,className:`item ${t||""}`,onClick:o,href:c,target:d?"_blank":"",rel:"noreferrer"},a):e.createElement("div",{title:r,className:`item ${s?"active":""} ${t||""}`,onClick:o},a)}function p({className:t,mainClassName:a,sidebarClassName:l,main:o,sidebar:r}){return e.createElement("div",{className:`width-full responsive-row margin-auto-horizontal padding-s-left padding-s-right ${t||""}`},e.createElement("div",{className:`width-full height-auto padding-s padding-m-top grid grid-col-1 grid-gap-xl ${a||""}`,style:{flexGrow:"2",flexShrink:"1"}},o),r?e.createElement("div",{className:`width-full height-auto padding-s padding-m-top grid grid-col-1 grid-gap-xl ${l||""}`,style:{flexGrow:"1",flexShrink:"2"}},r):"")}function C({className:t,mainClassName:a,sidebarClassName:l,header:o,main:r,sidebar:s}){return e.createElement("div",{className:`width-full margin-auto-horizontal grid grid-col-1 ${t||""}`},o,e.createElement(p,{mainClassName:a,sidebarClassName:l,main:r,sidebar:s}))}function g({className:t,title:a,isTextured:l,isItalic:o}){return e.createElement("div",{className:"width-full page-title-main"},e.createElement("div",{className:`page-title ${l?"textured-text":""} ${o?"font-style-italic":""} ${t||""}`},e.createElement("h2",null,a)))}function N({className:t,children:a}){return e.createElement("div",{className:`tab-bar ${t||""}`},a)}function O({className:t,children:a,onClick:o,tooltip:r,selected:s,to:n,exact:i,href:c,openInNewTab:d}){const m=`item text-align-center cursor-pointer noselect ${s?"active":""} ${t||""}`;return n?e.createElement(l,{title:r,className:m,onClick:o,to:n,exact:i},a):c?e.createElement("a",{title:r,className:m,onClick:o,href:c,target:d?"_blank":"",rel:"noreferrer"},a):e.createElement("div",{title:r,className:m,onClick:o},a)}function E({className:t,children:a,anchor:l}){let o="";switch(l){case"bottom":o="card-border-bottom-radius border-top anchor-bottom margin-none-bottom";break;case"top":default:o="card-border-top-radius border-bottom anchor-top margin-none-top"}return e.createElement("div",{className:`bg-color-acryllic position-sticky padding-s ${o} ${t||""}`},a)}function b({className:t,style:a,headerMap:l,contentMap:o,contentReducer:r,stickyHeader:s}){return e.createElement(n,{noBody:!0,className:`position-sticky anchor-top ${t||""}`,style:a},e.createElement(i,{className:"position-sticky anchor-top padding-none bg-as-fg-color bg-color-accent-primary card-border-top-radius font-weight-700 "+(s?"position-sticky anchor-top":"")},e.createElement("div",{className:"width-full grid grid-auto-flow-column"},Object.entries(JSON.parse(l)).map((t=>{if(!t[1].hidden)return e.createElement("span",{key:`header-${t[0]}`,className:"padding-xs padding-s-left padding-s-right"},t[1].name)})))),e.createElement(c,{className:"grid grid-col-1 padding-none"},e.createElement(m,{edgeToEdge:!0,lineSeparated:!0,className:"padding-none-top padding-xs-bottom"},JSON.parse(o).map((t=>e.createElement(u,{className:"grid grid-auto-flow-column padding-none"},Object.entries(r?r(t):t).map((t=>{if(!JSON.parse(l)[t[0]].hidden)return e.createElement("span",{className:"padding-xs padding-s-left padding-s-right"},t[1])}))))))))}function h({id:t,name:a,tooltip:l,className:o,style:r,value:s,placeholder:n,onChange:i,onInput:c,onClick:d,readOnly:m,disabled:u}){return e.createElement("textarea",{id:t,name:a,title:l,className:o,style:r,value:s,placeholder:n,onChange:i,onInput:c,onClick:d,readOnly:m||(!i||null),disabled:u})}function f({id:l,name:o,tooltip:r,label:s,className:n,style:i,type:c,value:d,placeholder:m,onChange:u,onInput:p,onClick:C,disabled:g}){const[N,O]=a("text");return t((()=>{["text","email","password"].includes(c)&&O(c)}),[]),e.createElement("div",{className:"grid grid-col-1 grid-gap-xs"},s?e.createElement("label",{htmlFor:o},s):"",e.createElement("input",{id:l,name:o,title:r,type:N,className:n,style:i,value:d,placeholder:m,onChange:u,onInput:p,onClick:C,disabled:g}))}function y(t){return e.createElement("div",{className:`toolbar anchor-top margin-none-top padding-s padding-xs-top padding-xs-bottom ${t.className?t.className:""}`},t.children)}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===a&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('@import url("./styles/Util.css");@import url("./styles/Definitions.css");@import url("./styles/themes/Default.css");@import url("./styles/themes/Dark.css");@import url("./styles/Main.css");@import url("./styles/Controls.css");@import url("./styles/Surfaces.css");@import url("./styles/Lists.css");@import url("./styles/Article.css");@import url("./styles/Animation.css");@import url("./styles/Interactive.css");@import url("./assets/fonts/PublicSans.css");@import url("./assets/fonts/Bitter.css");@import url("./assets/fonts/RobotoMono.css");');export{r as AppContainer,s as Button,n as Card,c as CardBody,d as CardCollapseButton,i as CardTitle,m as List,u as ListItem,g as PageHeader,C as PageLayout,p as PageLayoutBody,N as TabBar,O as TabBarItem,E as TabBarStickyContainer,b as Table,h as TextAreaBox,f as TextBox,y as Toolbar};
