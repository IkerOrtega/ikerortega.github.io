"use strict";(self.webpackChunkikerortega_github_io=self.webpackChunkikerortega_github_io||[]).push([[8354],{8354:function(e,t,i){i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return n},copyVisualViewport:function(){return y},keyboardDidClose:function(){return b},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return g},resetKeyboardAssist:function(){return u},setKeyboardClose:function(){return f},setKeyboardOpen:function(){return c},startKeyboardAssist:function(){return d},trackViewportChanges:function(){return l}});const n="ionKeyboardDidShow",o="ionKeyboardDidHide";let r={},s={},a=!1;const u=()=>{r={},s={},a=!1},d=e=>{h(e),e.visualViewport&&(s=y(e.visualViewport),e.visualViewport.onresize=()=>{l(e),p()||g(e)?c(e):b(e)&&f(e)})},h=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>f(e))},c=(e,t)=>{w(e,t),a=!0},f=e=>{k(e),a=!1},p=()=>!a&&r.width===s.width&&(r.height-s.height)*s.scale>150,g=e=>a&&!b(e),b=e=>a&&s.height===e.innerHeight,w=(e,t)=>{const i=new CustomEvent(n,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-s.height}});e.dispatchEvent(i)},k=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},l=e=>{r=Object.assign({},s),s=y(e.visualViewport)},y=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);