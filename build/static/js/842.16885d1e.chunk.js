/*! For license information please see 842.16885d1e.chunk.js.LICENSE.txt */
(self.webpackChunk_dynamic_labs_react_18_viem=self.webpackChunk_dynamic_labs_react_18_viem||[]).push([[842],{8733:()=>{},4842:(t,r,e)=>{"use strict";e.r(r),e.d(r,{signWithApiKey:()=>i});var n=e(8733),o=e(2972);const i=async t=>{const{content:r,publicKey:e,privateKey:i}=t,c=n.createPrivateKey({key:(0,o.S)({uncompressedPrivateKeyHex:i,compressedPublicKeyHex:e}),format:"jwk"}),u=n.createSign("SHA256");return u.write(Buffer.from(r)),u.end(),u.sign(c,"hex")}},2972:(t,r,e)=>{"use strict";function n(t,r){const e=btoa(function(t){let r="";for(let e=0;e<t.length;e+=1)r+=String.fromCharCode(t[e]);return r}(t)).replace(/=/g,"");return r?e.replace(/\+/g,"-").replace(/\//g,"_"):e}function o(){return BigInt("115792089210356248762697446949407573530086143415290314195533631308867097853951")}function i(t){let r=t.toString(16);return r=r.length%2===0?r:"0"+r,function(t){if(t.length%2!=0)throw new Error("Hex string length must be multiple of 2");const r=new Uint8Array(t.length/2);for(let e=0;e<t.length;e+=2)r[e/2]=parseInt(t.substring(e,e+2),16);return r}(r)}function c(t,r){return(t&BigInt(1)<<BigInt(r))!==BigInt(0)}function u(t,r){if(r<=BigInt(0))throw new Error("p must be positive");const e=t%r;if(c(r,0)&&c(r,1)){const t=function(t,r,e){if(r===BigInt(0))return BigInt(1);let n=t;const o=r.toString(2);for(let i=1;i<o.length;++i)n=n*n%e,"1"===o[i]&&(n=n*t%e);return n}(e,r+BigInt(1)>>BigInt(2),r);if(t*t%r!==e)throw new Error("could not find a modular square root");return t}throw new Error("unsupported modulus value")}function a(t,r){const e=o();let n=u(((t*t+(e-BigInt(3)))*t+BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"))%e,e);return r!==c(n,0)&&(n=(e-n)%e),n}function s(t){if(33!==t.length)throw new Error("compressed point has wrong length");if(2!==t[0]&&3!==t[0])throw new Error("invalid format");const r=3===t[0],e=(c=t.subarray(1,t.length),BigInt("0x"+function(t){let r="";for(let e=0;e<t.length;e++){const n=t[e].toString(16);r+=n.length>1?n:"0"+n}return r}(c)));var c;const u=o();if(e<BigInt(0)||e>=u)throw new Error("x is out of range");const s=a(e,r);return{kty:"EC",crv:"P-256",x:n(i(e),!0),y:n(i(s),!0),ext:!0}}e.d(r,{S:()=>g});var f=e(5069);function g(t){const{uncompressedPrivateKeyHex:r,compressedPublicKeyHex:e}=t,n=s(l(e));return n.d=function(t){const r=l(t);return(0,f.up)(r.reduce(((t,r)=>t+String.fromCharCode(r)),""))}(r),n}function l(t){if(0===t.length||t.length%2!==0||/[^a-fA-F0-9]/u.test(t))throw new Error("Invalid hex string: ".concat(JSON.stringify(t)));return Uint8Array.from(t.match(/.{2}/g).map((t=>parseInt(t,16))))}},5069:(t,r,e)=>{"use strict";function n(t){const r=function(t){if(0===arguments.length)throw new TypeError("1 argument required, but only 0 present.");let r;for(t="".concat(t),r=0;r<t.length;r++)if(t.charCodeAt(r)>255)throw new Error("InvalidCharacterError: found code point greater than 255:".concat(t.charCodeAt(r)," at position ").concat(r));let e="";for(r=0;r<t.length;r+=3){const n=[void 0,void 0,void 0,void 0];n[0]=t.charCodeAt(r)>>2,n[1]=(3&t.charCodeAt(r))<<4,t.length>r+1&&(n[1]|=t.charCodeAt(r+1)>>4,n[2]=(15&t.charCodeAt(r+1))<<2),t.length>r+2&&(n[2]|=t.charCodeAt(r+2)>>6,n[3]=63&t.charCodeAt(r+2));for(let t=0;t<n.length;t++)"undefined"===typeof n[t]?e+="=":e+=i(n[t])}return e}(t);return function(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}(r)}function o(t){return t.reduce(((t,r)=>t+r.toString(16).padStart(2,"0")),"")}function i(t){if(t>=0&&t<64)return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[t]}e.d(r,{pD:()=>o,up:()=>n})}}]);
//# sourceMappingURL=842.16885d1e.chunk.js.map