/*! For license information please see 998.169b5509.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_dynamic_labs_react_18_viem=self.webpackChunk_dynamic_labs_react_18_viem||[]).push([[998],{2972:(t,n,e)=>{function r(t,n){const e=btoa(function(t){let n="";for(let e=0;e<t.length;e+=1)n+=String.fromCharCode(t[e]);return n}(t)).replace(/=/g,"");return n?e.replace(/\+/g,"-").replace(/\//g,"_"):e}function o(){return BigInt("115792089210356248762697446949407573530086143415290314195533631308867097853951")}function i(t){let n=t.toString(16);return n=n.length%2===0?n:"0"+n,function(t){if(t.length%2!=0)throw new Error("Hex string length must be multiple of 2");const n=new Uint8Array(t.length/2);for(let e=0;e<t.length;e+=2)n[e/2]=parseInt(t.substring(e,e+2),16);return n}(n)}function c(t,n){return(t&BigInt(1)<<BigInt(n))!==BigInt(0)}function a(t,n){if(n<=BigInt(0))throw new Error("p must be positive");const e=t%n;if(c(n,0)&&c(n,1)){const t=function(t,n,e){if(n===BigInt(0))return BigInt(1);let r=t;const o=n.toString(2);for(let i=1;i<o.length;++i)r=r*r%e,"1"===o[i]&&(r=r*t%e);return r}(e,n+BigInt(1)>>BigInt(2),n);if(t*t%n!==e)throw new Error("could not find a modular square root");return t}throw new Error("unsupported modulus value")}function u(t,n){const e=o();let r=a(((t*t+(e-BigInt(3)))*t+BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"))%e,e);return n!==c(r,0)&&(r=(e-r)%e),r}function s(t){if(33!==t.length)throw new Error("compressed point has wrong length");if(2!==t[0]&&3!==t[0])throw new Error("invalid format");const n=3===t[0],e=(c=t.subarray(1,t.length),BigInt("0x"+function(t){let n="";for(let e=0;e<t.length;e++){const r=t[e].toString(16);n+=r.length>1?r:"0"+r}return n}(c)));var c;const a=o();if(e<BigInt(0)||e>=a)throw new Error("x is out of range");const s=u(e,n);return{kty:"EC",crv:"P-256",x:r(i(e),!0),y:r(i(s),!0),ext:!0}}e.d(n,{S:()=>g});var l=e(5069);function g(t){const{uncompressedPrivateKeyHex:n,compressedPublicKeyHex:e}=t,r=s(h(e));return r.d=function(t){const n=h(t);return(0,l.up)(n.reduce(((t,n)=>t+String.fromCharCode(n)),""))}(n),r}function h(t){if(0===t.length||t.length%2!==0||/[^a-fA-F0-9]/u.test(t))throw new Error("Invalid hex string: ".concat(JSON.stringify(t)));return Uint8Array.from(t.match(/.{2}/g).map((t=>parseInt(t,16))))}},5998:(t,n,e)=>{e.r(n),e.d(n,{signWithApiKey:()=>i});var r=e(2972),o=e(5069);const i=async t=>{const{content:n,publicKey:e,privateKey:i}=t,a=await async function(t){const{uncompressedPrivateKeyHex:n,compressedPublicKeyHex:e}=t,o=(0,r.S)({uncompressedPrivateKeyHex:n,compressedPublicKeyHex:e});return await crypto.subtle.importKey("jwk",o,{name:"ECDSA",namedCurve:"P-256"},!1,["sign"])}({uncompressedPrivateKeyHex:i,compressedPublicKeyHex:e});return await async function(t){const{key:n,content:e}=t,r=await crypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},n,(new TextEncoder).encode(e)),i=function(t){if(t.length%2!=0||0==t.length||t.length>132)throw new Error("Invalid IEEE P1363 signature encoding. Length: "+t.length);const n=c(t.subarray(0,t.length/2)),e=c(t.subarray(t.length/2,t.length));let r=0;const o=2+n.length+1+1+e.length;let i;o>=128?(i=new Uint8Array(o+3),i[r++]=48,i[r++]=129,i[r++]=o):(i=new Uint8Array(o+2),i[r++]=48,i[r++]=o);return i[r++]=2,i[r++]=n.length,i.set(n,r),r+=n.length,i[r++]=2,i[r++]=e.length,i.set(e,r),i}(new Uint8Array(r));return(0,o.pD)(i)}({key:a,content:n})};function c(t){let n=0;for(;n<t.length&&0==t[n];)n++;n==t.length&&(n=t.length-1);let e=0;128==(128&t[n])&&(e=1);const r=new Uint8Array(t.length-n+e);return r.set(t.subarray(n),e),r}},5069:(t,n,e)=>{function r(t){const n=function(t){if(0===arguments.length)throw new TypeError("1 argument required, but only 0 present.");let n;for(t="".concat(t),n=0;n<t.length;n++)if(t.charCodeAt(n)>255)throw new Error("InvalidCharacterError: found code point greater than 255:".concat(t.charCodeAt(n)," at position ").concat(n));let e="";for(n=0;n<t.length;n+=3){const r=[void 0,void 0,void 0,void 0];r[0]=t.charCodeAt(n)>>2,r[1]=(3&t.charCodeAt(n))<<4,t.length>n+1&&(r[1]|=t.charCodeAt(n+1)>>4,r[2]=(15&t.charCodeAt(n+1))<<2),t.length>n+2&&(r[2]|=t.charCodeAt(n+2)>>6,r[3]=63&t.charCodeAt(n+2));for(let t=0;t<r.length;t++)"undefined"===typeof r[t]?e+="=":e+=i(r[t])}return e}(t);return function(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}(n)}function o(t){return t.reduce(((t,n)=>t+n.toString(16).padStart(2,"0")),"")}function i(t){if(t>=0&&t<64)return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[t]}e.d(n,{pD:()=>o,up:()=>r})}}]);
//# sourceMappingURL=998.169b5509.chunk.js.map