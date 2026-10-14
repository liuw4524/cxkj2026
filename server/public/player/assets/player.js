(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="185",wg=0,Ic=1,Tg=2,Ya=1,Ag=2,yr=3,Un=0,$e=1,Qi=2,en=0,ks=1,Dc=2,Uc=3,Fc=4,Cg=5,Yn=100,Rg=101,Pg=102,Lg=103,Ig=104,Dg=200,Ug=201,Fg=202,Ng=203,zl=204,Bl=205,Og=206,zg=207,Bg=208,kg=209,Vg=210,Hg=211,Gg=212,Wg=213,Xg=214,kl=0,Vl=1,Hl=2,Ks=3,Gl=4,Wl=5,Xl=6,$l=7,Ad=0,$g=1,qg=2,Bi=0,Xh=1,Cd=2,Rd=3,Pd=4,Ld=5,Id=6,Dd=7,Ud=300,Qn=301,Js=302,No=303,Oo=304,xo=306,ql=1e3,tn=1001,Yl=1002,De=1003,Yg=1004,na=1005,Ue=1006,zo=1007,Cn=1008,hi=1009,Fd=1010,Nd=1011,zr=1012,$h=1013,Vi=1014,Ni=1015,ln=1016,qh=1017,Yh=1018,Br=1020,Od=35902,zd=35899,Bd=1021,kd=1022,Ei=1023,hn=1026,Kn=1027,Vd=1028,Zh=1029,ts=1030,Kh=1031,Jh=1033,Za=33776,Ka=33777,Ja=33778,ja=33779,Zl=35840,Kl=35841,Jl=35842,jl=35843,Ql=36196,th=37492,eh=37496,ih=37488,nh=37489,ao=37490,sh=37491,rh=37808,ah=37809,oh=37810,lh=37811,hh=37812,ch=37813,uh=37814,dh=37815,fh=37816,ph=37817,mh=37818,gh=37819,vh=37820,_h=37821,xh=36492,yh=36494,Mh=36495,Sh=36283,bh=36284,oo=36285,Eh=36286,Zg=3200,Nc=0,Kg=1,Tn="",oi="srgb",kr="srgb-linear",lo="linear",te="srgb",os=7680,Oc=519,Jg=512,jg=513,Qg=514,jh=515,t0=516,e0=517,Qh=518,i0=519,zc=35044,Bc="300 es",Oi=2e3,ho=2001;function n0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function s0(){const i=Vr("canvas");return i.style.display="block",i}const kc={};function Vc(...i){const t="THREE."+i.shift();console.log(t,...i)}function Hd(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=Hd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Gt(...i){i=Hd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vs(...i){const t=i.join(" ");t in kc||(kc[t]=!0,Ct(...i))}function r0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const a0={[kl]:Vl,[Hl]:Xl,[Gl]:$l,[Ks]:Wl,[Vl]:kl,[Xl]:Hl,[$l]:Gl,[Wl]:Ks};let is=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}};const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hc=1234567;const br=Math.PI/180,Hr=180/Math.PI;function ir(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function tc(i,t){return(i%t+t)%t}function o0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function l0(i,t,e){return i!==t?(e-i)/(t-i):0}function Er(i,t,e){return(1-e)*i+e*t}function h0(i,t,e,n){return Er(i,t,1-Math.exp(-e*n))}function c0(i,t=1){return t-Math.abs(tc(i,t*2)-t)}function u0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function d0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function f0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function p0(i,t){return i+Math.random()*(t-i)}function m0(i){return i*(.5-Math.random())}function g0(i){i!==void 0&&(Hc=i);let t=Hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function v0(i){return i*br}function _0(i){return i*Hr}function x0(i){return(i&i-1)===0&&i!==0}function y0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function M0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function S0(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),c=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*c,l*d,l*u,o*h);break;case"YZY":i.set(l*u,o*c,l*d,o*h);break;case"ZXZ":i.set(l*d,l*u,o*c,o*h);break;case"XZX":i.set(o*c,l*g,l*f,o*h);break;case"YXY":i.set(l*f,o*c,l*g,o*h);break;case"ZYZ":i.set(l*g,l*f,o*c,o*h);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $t={DEG2RAD:br,RAD2DEG:Hr,generateUUID:ir,clamp:Vt,euclideanModulo:tc,mapLinear:o0,inverseLerp:l0,lerp:Er,damp:h0,pingpong:c0,smoothstep:u0,smootherstep:d0,randInt:f0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:v0,radToDeg:_0,isPowerOfTwo:x0,ceilPowerOfTwo:y0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:S0,normalize:ke,denormalize:Ds};var $s;let qt=($s=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$s.prototype.isVector2=!0,$s),ns=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],c=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==u||h!==f||c!==g){let p=l*u+h*f+c*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const E=Math.acos(p),A=Math.sin(E);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A,l=l*m+u*o,h=h*m+f*o,c=c*m+g*o,d=d*m+_*o}else{l=l*m+u*o,h=h*m+f*o,c=c*m+g*o,d=d*m+_*o;const E=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=E,h*=E,c*=E,d*=E}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],c=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+c*d+l*f-h*u,t[e+1]=l*g+c*u+h*d-o*f,t[e+2]=h*g+c*f+o*u-l*d,t[e+3]=c*g-o*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-n*h,this._z=r*c+a*h+n*l-s*o,this._w=a*c-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var qs;let B=(qs=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),c=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*h+a*d-o*c,this.y=n+l*c+o*h-r*d,this.z=s+l*d+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bo.copy(this).projectOnVector(t),this.sub(Bo)}reflect(t){return this.sub(Bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qs.prototype.isVector3=!0,qs);const Bo=new B,Gc=new ns;var Ys;let Ut=(Ys=class{constructor(t,e,n,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],E=s[1],A=s[4],M=s[7],b=s[2],S=s[5],C=s[8];return r[0]=a*_+o*E+l*b,r[3]=a*p+o*A+l*S,r[6]=a*m+o*M+l*C,r[1]=h*_+c*E+d*b,r[4]=h*p+c*A+d*S,r[7]=h*m+c*M+d*C,r[2]=u*_+f*E+g*b,r[5]=u*p+f*A+g*S,r[8]=u*m+f*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-n*r*c+n*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*a-o*h,u=o*l-c*r,f=h*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*h-c*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ko.makeScale(t,e)),this}rotate(t){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ko.makeRotation(-t)),this}translate(t,e){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ys.prototype.isMatrix3=!0,Ys);const ko=new Ut,Wc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b0(){const i={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=nn(s.r),s.g=nn(s.g),s.b=nn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[kr]:{primaries:t,whitePoint:n,transfer:lo,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),i}const kt=b0();function nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ls,E0=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ls===void 0&&(ls=Vr("canvas")),ls.width=t.width,ls.height=t.height;const s=ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ls}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=nn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(nn(e[n]/255)*255):e[n]=nn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},w0=0,ec=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=ir(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vo(s[a].image)):r.push(Vo(s[a]))}else r=Vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?E0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let T0=0;const Ho=new B;let di=class Qa extends is{constructor(t=Qa.DEFAULT_IMAGE,e=Qa.DEFAULT_MAPPING,n=tn,s=tn,r=Ue,a=Cn,o=Ei,l=hi,h=Qa.DEFAULT_ANISOTROPY,c=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=ir(),this.name="",this.source=new ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ql:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ql:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=Ud;di.DEFAULT_ANISOTROPY=1;var Zs;let ye=(Zs=class{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(h+1)/2,M=(f+1)/2,b=(m+1)/2,S=(c+u)/4,C=(d+_)/4,x=(g+p)/4;return A>M&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=C/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-c)*(u-c));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(u-c)/E,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zs.prototype.isVector4=!0,Zs);class A0 extends is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new di(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ec(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends A0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gd extends di{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class C0 extends di{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var jn;let Me=(jn=class{constructor(t,e,n,s,r,a,o,l,h,c,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,c,d,u,f,g,_,p)}set(t,e,n,s,r,a,o,l,h,c,d,u,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jn().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*c,f=a*d,g=o*c,_=o*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+g*h,e[5]=u-_*h,e[9]=-o*l,e[2]=_-u*h,e[6]=g+f*h,e[10]=a*l}else if(t.order==="YXZ"){const u=l*c,f=l*d,g=h*c,_=h*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*c,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*c,f=l*d,g=h*c,_=h*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*c,e[9]=_-u*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*c,f=a*d,g=o*c,_=o*d;e[0]=l*c,e[4]=g*h-f,e[8]=u*h+_,e[1]=l*d,e[5]=_*h+u,e[9]=f*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+_,e[5]=a*c,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*c,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,P0)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),mn.crossVectors(n,Ze),mn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),mn.crossVectors(n,Ze)),mn.normalize(),sa.crossVectors(Ze,mn),s[0]=mn.x,s[4]=sa.x,s[8]=Ze.x,s[1]=mn.y,s[5]=sa.y,s[9]=Ze.y,s[2]=mn.z,s[6]=sa.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],A=n[7],M=n[11],b=n[15],S=s[0],C=s[4],x=s[8],T=s[12],P=s[1],R=s[5],O=s[9],N=s[13],X=s[2],U=s[6],$=s[10],z=s[14],Y=s[3],tt=s[7],nt=s[11],st=s[15];return r[0]=a*S+o*P+l*X+h*Y,r[4]=a*C+o*R+l*U+h*tt,r[8]=a*x+o*O+l*$+h*nt,r[12]=a*T+o*N+l*z+h*st,r[1]=c*S+d*P+u*X+f*Y,r[5]=c*C+d*R+u*U+f*tt,r[9]=c*x+d*O+u*$+f*nt,r[13]=c*T+d*N+u*z+f*st,r[2]=g*S+_*P+p*X+m*Y,r[6]=g*C+_*R+p*U+m*tt,r[10]=g*x+_*O+p*$+m*nt,r[14]=g*T+_*N+p*z+m*st,r[3]=E*S+A*P+M*X+b*Y,r[7]=E*C+A*R+M*U+b*tt,r[11]=E*x+A*O+M*$+b*nt,r[15]=E*T+A*N+M*z+b*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],E=l*f-h*u,A=o*f-h*d,M=o*u-l*d,b=a*f-h*c,S=a*u-l*c,C=a*d-o*c;return e*(_*E-p*A+m*M)-n*(g*E-p*b+m*S)+s*(g*A-_*b+m*C)-r*(g*M-_*S+p*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],h=t[6],c=t[10];return e*(a*c-o*h)-n*(r*c-o*l)+s*(r*h-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],E=e*o-n*a,A=e*l-s*a,M=e*h-r*a,b=n*l-s*o,S=n*h-r*o,C=s*h-r*l,x=c*_-d*g,T=c*p-u*g,P=c*m-f*g,R=d*p-u*_,O=d*m-f*_,N=u*m-f*p,X=E*N-A*O+M*R+b*P-S*T+C*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/X;return t[0]=(o*N-l*O+h*R)*U,t[1]=(s*O-n*N-r*R)*U,t[2]=(_*C-p*S+m*b)*U,t[3]=(u*S-d*C-f*b)*U,t[4]=(l*P-a*N-h*T)*U,t[5]=(e*N-s*P+r*T)*U,t[6]=(p*M-g*C-m*A)*U,t[7]=(c*C-u*M+f*A)*U,t[8]=(a*O-o*P+h*x)*U,t[9]=(n*P-e*O-r*x)*U,t[10]=(g*S-_*M+m*E)*U,t[11]=(d*M-c*S-f*E)*U,t[12]=(o*T-a*R-l*x)*U,t[13]=(e*R-n*T+s*x)*U,t[14]=(_*A-g*b-p*E)*U,t[15]=(c*b-d*A+u*E)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+n,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,d=o+o,u=r*h,f=r*c,g=r*d,_=a*c,p=a*d,m=o*d,E=l*h,A=l*c,M=l*d,b=n.x,S=n.y,C=n.z;return s[0]=(1-(_+m))*b,s[1]=(f+M)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(u+m))*S,s[6]=(p+E)*S,s[7]=0,s[8]=(g+A)*C,s[9]=(p-E)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),l=hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pi.copy(this);const h=1/a,c=1/o,d=1/l;return pi.elements[0]*=h,pi.elements[1]*=h,pi.elements[2]*=h,pi.elements[4]*=c,pi.elements[5]*=c,pi.elements[6]*=c,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,e.setFromRotationMatrix(pi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Oi,l=!1){const h=this.elements,c=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Oi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ho)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Oi,l=!1){const h=this.elements,c=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Oi)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ho)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=g,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},jn.prototype.isMatrix4=!0,jn);const hs=new B,pi=new Me,R0=new B(0,0,0),P0=new B(1,1,1),mn=new B,sa=new B,Ze=new B,$c=new Me,qc=new ns;let js=class Wd{constructor(t=0,e=0,n=0,s=Wd.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};js.DEFAULT_ORDER="XYZ";let ic=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},L0=0;const Yc=new B,cs=new ns,Hi=new Me,ra=new B,or=new B,I0=new B,D0=new ns,Zc=new B(1,0,0),Kc=new B(0,1,0),Jc=new B(0,0,1),jc={type:"added"},U0={type:"removed"},us={type:"childadded",child:null},Go={type:"childremoved",child:null};let un=class to extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=to.DEFAULT_UP.clone();const t=new B,e=new js,n=new ns,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new Ut}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=to.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=to.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return Yc.copy(t).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ra.copy(t):ra.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(or,ra,this.up):Hi.lookAt(ra,or,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Hi),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),us.child=t,this.dispatchEvent(us),us.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(U0),Go.child=t,this.dispatchEvent(Go),Go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,I0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,D0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}};un.DEFAULT_UP=new B(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let zs=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}};const F0={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(h,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=tc(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xo(a,r,t+1/3),this.g=Xo(a,r,t),this.b=Xo(a,r,t-1/3)}return kt.colorSpaceToWorking(this,s),this}setStyle(t,e=oi){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){const n=Xd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nn(t.r),this.g=nn(t.g),this.b=nn(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return kt.workingToColorSpace(Oe.copy(this),t),Math.round(Vt(Oe.r*255,0,255))*65536+Math.round(Vt(Oe.g*255,0,255))*256+Math.round(Vt(Oe.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.workingToColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const d=a-o;switch(h=c<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=kt.workingColorSpace){return kt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=oi){kt.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(aa);const n=Er(gn.h,aa.h,e),s=Er(gn.s,aa.s,e),r=Er(gn.l,aa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Oe=new Jt;Jt.NAMES=Xd;let Qc=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new js,this.environmentIntensity=1,this.environmentRotation=new js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};const mi=new B,Gi=new B,$o=new B,Wi=new B,ds=new B,fs=new B,tu=new B,qo=new B,Yo=new B,Zo=new B,Ko=new ye,Jo=new ye,jo=new ye;let lr=class Us{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mi.subVectors(t,e),s.cross(mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mi.subVectors(s,e),Gi.subVectors(n,e),$o.subVectors(t,e);const a=mi.dot(mi),o=mi.dot(Gi),l=mi.dot($o),h=Gi.dot(Gi),c=Gi.dot($o),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(h*l-o*c)*u,g=(a*c-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(o,Wi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ko.setScalar(0),Jo.setScalar(0),jo.setScalar(0),Ko.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),jo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ko,r.x),a.addScaledVector(Jo,r.y),a.addScaledVector(jo,r.z),a}static isFrontFacing(t,e,n,s){return mi.subVectors(n,e),Gi.subVectors(t,e),mi.cross(Gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),mi.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Us.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Us.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Us.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Us.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Us.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ds.subVectors(s,n),fs.subVectors(r,n),qo.subVectors(t,n);const l=ds.dot(qo),h=fs.dot(qo);if(l<=0&&h<=0)return e.copy(n);Yo.subVectors(t,s);const c=ds.dot(Yo),d=fs.dot(Yo);if(c>=0&&d<=c)return e.copy(s);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(n).addScaledVector(ds,a);Zo.subVectors(t,r);const f=ds.dot(Zo),g=fs.dot(Zo);if(g>=0&&f<=g)return e.copy(r);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(fs,o);const p=c*g-f*d;if(p<=0&&d-c>=0&&f-g>=0)return tu.subVectors(r,s),o=(d-c)/(d-c+(f-g)),e.copy(s).addScaledVector(tu,o);const m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nr=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),la.subVectors(this.max,hr),ps.subVectors(t.a,hr),ms.subVectors(t.b,hr),gs.subVectors(t.c,hr),vn.subVectors(ms,ps),_n.subVectors(gs,ms),Bn.subVectors(ps,gs);let e=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-Bn.z,Bn.y,vn.z,0,-vn.x,_n.z,0,-_n.x,Bn.z,0,-Bn.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-Bn.y,Bn.x,0];return!Qo(e,ps,ms,gs,la)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,ps,ms,gs,la))?!1:(ha.crossVectors(vn,_n),e=[ha.x,ha.y,ha.z],Qo(e,ps,ms,gs,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}};const Xi=[new B,new B,new B,new B,new B,new B,new B,new B],gi=new B,oa=new nr,ps=new B,ms=new B,gs=new B,vn=new B,_n=new B,Bn=new B,hr=new B,la=new B,ha=new B,kn=new B;function Qo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){kn.fromArray(i,r);const o=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),l=t.dot(kn),h=e.dot(kn),c=n.dot(kn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const ve=new B,ca=new qt;let N0=0,ki=class extends is{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},$d=class extends ki{constructor(t,e,n){super(new Uint16Array(t),e,n)}},qd=class extends ki{constructor(t,e,n){super(new Uint32Array(t),e,n)}},ci=class extends ki{constructor(t,e,n){super(new Float32Array(t),e,n)}};const O0=new nr,cr=new B,tl=new B;let nc=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):O0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);const e=cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(tl)),this.expandByPoint(cr.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},z0=0;const si=new Me,el=new un,vs=new B,Ke=new nr,ur=new nr,Te=new B;let Nn=class Yd extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(n0(t)?qd:$d)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,n){return si.makeTranslation(t,e,n),this.applyMatrix4(si),this}scale(t,e,n){return si.makeScale(t,e,n),this.applyMatrix4(si),this}lookAt(t){return el.lookAt(t),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ci(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Ke.min,ur.min),Ke.expandByPoint(Te),Te.addVectors(Ke.max,ur.max),Ke.expandByPoint(Te)):(Ke.expandByPoint(ur.min),Ke.expandByPoint(ur.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Te.fromBufferAttribute(o,h),l&&(vs.fromBufferAttribute(t,h),Te.add(vs)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ki(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new B,l[x]=new B;const h=new B,c=new B,d=new B,u=new qt,f=new qt,g=new qt,_=new B,p=new B;function m(x,T,P){h.fromBufferAttribute(n,x),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),c.sub(h),d.sub(h),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(R),o[x].add(_),o[T].add(_),o[P].add(_),l[x].add(p),l[T].add(p),l[P].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,T=E.length;x<T;++x){const P=E[x],R=P.start,O=P.count;for(let N=R,X=R+O;N<X;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const A=new B,M=new B,b=new B,S=new B;function C(x){b.fromBufferAttribute(s,x),S.copy(b);const T=o[x];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(S,T);const R=M.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,R)}for(let x=0,T=E.length;x<T;++x){const P=E[x],R=P.start,O=P.count;for(let N=R,X=R+O;N<X;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ki(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,h=new B,c=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),o.add(c),l.add(c),h.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){const h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*c;for(let m=0;m<c;m++)u[g++]=h[f++]}return new ki(u,c,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Yd,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,d=h.length;c<d;c++){const u=h[c],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,c=a.length;h<c;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},B0=0,yo=class extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=ks,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Bl,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const $i=new B,il=new B,ua=new B,xn=new B,nl=new B,da=new B,sl=new B;let Zd=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,e),$i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){il.copy(t).add(e).multiplyScalar(.5),ua.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(il);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ua),o=xn.dot(this.direction),l=-xn.dot(ua),h=xn.lengthSq(),c=Math.abs(1-a*a);let d,u,f,g;if(c>0)if(d=a*l-o,u=a*o-l,g=r*c,d>=0)if(u>=-g)if(u<=g){const _=1/c;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(il).addScaledVector(ua,u),f}intersectSphere(t,e){$i.subVectors(t.center,this.origin);const n=$i.dot(this.direction),s=$i.dot($i)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,e,n,s,r){nl.subVectors(e,t),da.subVectors(n,t),sl.crossVectors(nl,da);let a=this.direction.dot(sl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,t);const l=o*this.direction.dot(da.crossVectors(xn,da));if(l<0)return null;const h=o*this.direction.dot(nl.cross(xn));if(h<0||l+h>a)return null;const c=-o*xn.dot(sl);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$r=class extends yo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const eu=new Me,Vn=new Zd,fa=new nc,iu=new B,pa=new B,ma=new B,ga=new B,rl=new B,va=new B,nu=new B,_a=new B;let ii=class extends un{constructor(t=new Nn,e=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){va.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],d=r[l];c!==0&&(rl.fromBufferAttribute(d,t),a?va.addScaledVector(rl,c):va.addScaledVector(rl.sub(e),c))}e.add(va)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(fa.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(fa,iu)===null||Vn.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(eu.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(eu),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=E,b=A;M<b;M+=3){const S=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);s=xa(this,m,t,n,h,c,d,S,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=o.getX(p),A=o.getX(p+1),M=o.getX(p+2);s=xa(this,a,t,n,h,c,d,E,A,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=E,b=A;M<b;M+=3){const S=M,C=M+1,x=M+2;s=xa(this,m,t,n,h,c,d,S,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=p,A=p+1,M=p+2;s=xa(this,a,t,n,h,c,d,E,A,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function k0(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Un,o),l===null)return null;_a.copy(o),_a.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(_a);return h<e.near||h>e.far?null:{distance:h,point:_a.clone(),object:i}}function xa(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,pa),i.getVertexPosition(l,ma),i.getVertexPosition(h,ga);const c=k0(i,t,e,n,pa,ma,ga,nu);if(c){const d=new B;lr.getBarycoord(nu,pa,ma,ga,d),s&&(c.uv=lr.getInterpolatedAttribute(s,o,l,h,d,new qt)),r&&(c.uv1=lr.getInterpolatedAttribute(r,o,l,h,d,new qt)),a&&(c.normal=lr.getInterpolatedAttribute(a,o,l,h,d,new B),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new B,materialIndex:0};lr.getNormal(pa,ma,ga,u.normal),c.face=u,c.barycoord=d}return c}class V0 extends di{constructor(t=null,e=1,n=1,s,r,a,o,l,h=De,c=De,d,u){super(null,a,o,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const al=new B,H0=new B,G0=new Ut;class qn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=al.subVectors(n,e).cross(H0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(al),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||G0.getNormalMatrix(t),s=this.coplanarPoint(al).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new nc,W0=new qt(.5,.5),ya=new B;class sc{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],E=r[12],A=r[13],M=r[14],b=r[15];if(s[0].setComponents(h-a,f-c,m-g,b-E).normalize(),s[1].setComponents(h+a,f+c,m+g,b+E).normalize(),s[2].setComponents(h+o,f+d,m+_,b+A).normalize(),s[3].setComponents(h-o,f-d,m-_,b-A).normalize(),n)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(h-l,f-u,m-p,b-M).normalize();else if(s[4].setComponents(h-l,f-u,m-p,b-M).normalize(),e===Oi)s[5].setComponents(h+l,f+u,m+p,b+M).normalize();else if(e===ho)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){Hn.center.set(0,0,0);const e=W0.distanceTo(t.center);return Hn.radius=.7071067811865476+e,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kd extends di{constructor(t=[],e=Qn,n,s,r,a,o,l,h,c){super(t,e,n,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qs extends di{constructor(t,e,n=Vi,s,r,a,o=De,l=De,h,c=hn,d=1){if(c!==hn&&c!==Kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,a,o,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ec(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class X0 extends Qs{constructor(t,e=Vi,n=Qn,s,r,a=De,o=De,l,h=hn){const c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,n,s,r,a,o,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Jd extends di{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qr extends Nn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ci(h,3)),this.setAttribute("normal",new ci(c,3)),this.setAttribute("uv",new ci(d,2));function g(_,p,m,E,A,M,b,S,C,x,T){const P=M/C,R=b/x,O=M/2,N=b/2,X=S/2,U=C+1,$=x+1;let z=0,Y=0;const tt=new B;for(let nt=0;nt<$;nt++){const st=nt*R-N;for(let _t=0;_t<U;_t++){const Yt=_t*P-O;tt[_]=Yt*E,tt[p]=st*A,tt[m]=X,h.push(tt.x,tt.y,tt.z),tt[_]=0,tt[p]=0,tt[m]=S>0?1:-1,c.push(tt.x,tt.y,tt.z),d.push(_t/C),d.push(1-nt/x),z+=1}}for(let nt=0;nt<x;nt++)for(let st=0;st<C;st++){const _t=u+st+U*nt,Yt=u+st+U*(nt+1),le=u+(st+1)+U*(nt+1),Zt=u+(st+1)+U*nt;l.push(_t,Yt,Zt),l.push(Yt,le,Zt),Y+=6}o.addGroup(f,Y,T),f+=Y,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}let jd=class Qd extends Nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,c=l+1,d=t/o,u=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<c;m++){const E=m*u-a;for(let A=0;A<h;A++){const M=A*d-r;g.push(M,-E,0),_.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const A=E+h*m,M=E+h*(m+1),b=E+1+h*(m+1),S=E+1+h*m;f.push(A,M,S),f.push(M,b,S)}this.setIndex(f),this.setAttribute("position",new ci(g,3)),this.setAttribute("normal",new ci(_,3)),this.setAttribute("uv",new ci(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qd(t.width,t.height,t.widthSegments,t.heightSegments)}};class tr extends Nn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let h=0;const c=[],d=new B,u=new B,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const E=[],A=m/n,M=a+A*o,b=t*Math.cos(M),S=Math.sqrt(t*t-b*b);let C=0;m===0&&a===0?C=.5/e:m===n&&l===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){const T=x/e,P=s+T*r;d.x=-S*Math.cos(P),d.y=b,d.z=S*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(T+C,1-A),E.push(h++)}c.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){const A=c[m][E+1],M=c[m][E],b=c[m+1][E],S=c[m+1][E+1];(m!==0||a>0)&&f.push(A,M,S),(m!==n-1||l<Math.PI)&&f.push(M,b,S)}this.setIndex(f),this.setAttribute("position",new ci(g,3)),this.setAttribute("normal",new ci(_,3)),this.setAttribute("uv",new ci(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(su(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(su(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=er(i[e]);for(const s in n)t[s]=n[s]}return t}function su(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const q0={clone:er,merge:He};var Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let Ti=class extends yo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}};class K0 extends Ti{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class J0 extends yo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j0 extends yo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pn={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(ru(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!ru(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ru(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Q0{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){const d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){const f=h[d],g=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tv=new Q0;let rc=class{constructor(t){this.manager=t!==void 0?t:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};rc.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class ev extends Error{constructor(t,e){super(t),this.response=e}}class iv extends rc{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Pn.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(qi[t]!==void 0){qi[t].push({onLoad:e,onProgress:n,onError:s});return}qi[t]=[],qi[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=qi[t],d=h.body.getReader(),u=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){E();function E(){d.read().then(({done:A,value:M})=>{if(A)m.close();else{_+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let S=0,C=c.length;S<C;S++){const x=c[S];x.onProgress&&x.onProgress(b)}m.enqueue(M),E()}},A=>{m.error(A)})}}});return new Response(p)}else throw new ev(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o==="")return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{Pn.add(`file:${t}`,h);const c=qi[t];delete qi[t];for(let d=0,u=c.length;d<u;d++){const f=c[d];f.onLoad&&f.onLoad(h)}}).catch(h=>{const c=qi[t];if(c===void 0)throw this.manager.itemError(t),h;delete qi[t];for(let d=0,u=c.length;d<u;d++){const f=c[d];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _s=new WeakMap;class nv extends rc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Pn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=_s.get(a);d===void 0&&(d=[],_s.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=Vr("img");function l(){c(),e&&e(this);const d=_s.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}_s.delete(this),r.manager.itemEnd(t)}function h(d){c(),s&&s(d),Pn.remove(`image:${t}`);const u=_s.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}_s.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pn.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}const Ma=new B,Sa=new ns,Li=new B;class ef extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ma,Sa,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,Li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ma,Sa,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yn=new B,au=new qt,ou=new qt;class li extends ef{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,au,ou),e.subVectors(ou,au)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class nf extends ef{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xs=-90,ys=1;class sv extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new li(xs,ys,t,e);s.layers=this.layers,this.add(s);const r=new li(xs,ys,t,e);r.layers=this.layers,this.add(r);const a=new li(xs,ys,t,e);a.layers=this.layers,this.add(a);const o=new li(xs,ys,t,e);o.layers=this.layers,this.add(o);const l=new li(xs,ys,t,e);l.layers=this.layers,this.add(l);const h=new li(xs,ys,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rv extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const lu=new Me;class av{constructor(t,e,n=0,s=1/0){this.ray=new Zd(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lu),this}intersectObject(t,e=!0,n=[]){return wh(t,this,n,e),n.sort(hu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wh(t[s],this,n,e);return n.sort(hu),n}}function hu(i,t){return i.distance-t.distance}function wh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)wh(r[a],t,e,!0)}}const Sc=class Sc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Sc.prototype.isMatrix2=!0;let cu=Sc;function uu(i,t,e,n){const s=ov(n);switch(e){case Bd:return i*t;case Vd:return i*t/s.components*s.byteLength;case Zh:return i*t/s.components*s.byteLength;case ts:return i*t*2/s.components*s.byteLength;case Kh:return i*t*2/s.components*s.byteLength;case kd:return i*t*3/s.components*s.byteLength;case Ei:return i*t*4/s.components*s.byteLength;case Jh:return i*t*4/s.components*s.byteLength;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kl:case jl:return Math.max(i,16)*Math.max(t,8)/4;case Zl:case Jl:return Math.max(i,8)*Math.max(t,8)/2;case Ql:case th:case ih:case nh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case eh:case ao:case sh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ch:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ph:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xh:case yh:case Mh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sh:case bh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oo:case Eh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ov(i){switch(i){case hi:case Fd:return{byteLength:1,components:1};case zr:case Nd:case ln:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case Vi:case $h:case Ni:return{byteLength:4,components:1};case Od:case zd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lv(i){const t=new WeakMap;function e(o,l){const h=o.array,c=o.usage,d=h.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,h){const c=l.array,d=l.updateRanges;if(i.bindBuffer(h,o),d.length===0)i.bufferSubData(h,0,c);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,e_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,__=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Px=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ux=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:hv,alphahash_pars_fragment:cv,alphamap_fragment:uv,alphamap_pars_fragment:dv,alphatest_fragment:fv,alphatest_pars_fragment:pv,aomap_fragment:mv,aomap_pars_fragment:gv,batching_pars_vertex:vv,batching_vertex:_v,begin_vertex:xv,beginnormal_vertex:yv,bsdfs:Mv,iridescence_fragment:Sv,bumpmap_pars_fragment:bv,clipping_planes_fragment:Ev,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Tv,clipping_planes_vertex:Av,color_fragment:Cv,color_pars_fragment:Rv,color_pars_vertex:Pv,color_vertex:Lv,common:Iv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Uv,displacementmap_pars_vertex:Fv,displacementmap_vertex:Nv,emissivemap_fragment:Ov,emissivemap_pars_fragment:zv,colorspace_fragment:Bv,colorspace_pars_fragment:kv,envmap_fragment:Vv,envmap_common_pars_fragment:Hv,envmap_pars_fragment:Gv,envmap_pars_vertex:Wv,envmap_physical_pars_fragment:e_,envmap_vertex:Xv,fog_vertex:$v,fog_pars_vertex:qv,fog_fragment:Yv,fog_pars_fragment:Zv,gradientmap_pars_fragment:Kv,lightmap_pars_fragment:Jv,lights_lambert_fragment:jv,lights_lambert_pars_fragment:Qv,lights_pars_begin:t_,lights_toon_fragment:i_,lights_toon_pars_fragment:n_,lights_phong_fragment:s_,lights_phong_pars_fragment:r_,lights_physical_fragment:a_,lights_physical_pars_fragment:o_,lights_fragment_begin:l_,lights_fragment_maps:h_,lights_fragment_end:c_,lightprobes_pars_fragment:u_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:p_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:v_,map_particle_fragment:__,map_particle_pars_fragment:x_,metalnessmap_fragment:y_,metalnessmap_pars_fragment:M_,morphinstance_vertex:S_,morphcolor_vertex:b_,morphnormal_vertex:E_,morphtarget_pars_vertex:w_,morphtarget_vertex:T_,normal_fragment_begin:A_,normal_fragment_maps:C_,normal_pars_fragment:R_,normal_pars_vertex:P_,normal_vertex:L_,normalmap_pars_fragment:I_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:F_,iridescence_pars_fragment:N_,opaque_fragment:O_,packing:z_,premultiplied_alpha_fragment:B_,project_vertex:k_,dithering_fragment:V_,dithering_pars_fragment:H_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:$_,shadowmap_vertex:q_,shadowmask_pars_fragment:Y_,skinbase_vertex:Z_,skinning_pars_vertex:K_,skinning_vertex:J_,skinnormal_vertex:j_,specularmap_fragment:Q_,specularmap_pars_fragment:tx,tonemapping_fragment:ex,tonemapping_pars_fragment:ix,transmission_fragment:nx,transmission_pars_fragment:sx,uv_pars_fragment:rx,uv_pars_vertex:ax,uv_vertex:ox,worldpos_vertex:lx,background_vert:hx,background_frag:cx,backgroundCube_vert:ux,backgroundCube_frag:dx,cube_vert:fx,cube_frag:px,depth_vert:mx,depth_frag:gx,distance_vert:vx,distance_frag:_x,equirect_vert:xx,equirect_frag:yx,linedashed_vert:Mx,linedashed_frag:Sx,meshbasic_vert:bx,meshbasic_frag:Ex,meshlambert_vert:wx,meshlambert_frag:Tx,meshmatcap_vert:Ax,meshmatcap_frag:Cx,meshnormal_vert:Rx,meshnormal_frag:Px,meshphong_vert:Lx,meshphong_frag:Ix,meshphysical_vert:Dx,meshphysical_frag:Ux,meshtoon_vert:Fx,meshtoon_frag:Nx,points_vert:Ox,points_frag:zx,shadow_vert:Bx,shadow_frag:kx,sprite_vert:Vx,sprite_frag:Hx},dt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Fi={basic:{uniforms:He([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:He([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:He([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:He([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:He([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:He([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:He([dt.points,dt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:He([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:He([dt.common,dt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:He([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:He([dt.sprite,dt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:He([dt.common,dt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:He([dt.lights,dt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Fi.physical={uniforms:He([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const ba={r:0,b:0,g:0},Gx=new Me,rf=new Ut;rf.set(-1,0,0,0,1,0,0,0,1);function Wx(i,t,e,n,s,r){const a=new Jt(0);let o=s===!0?0:1,l,h,c=null,d=0,u=null;function f(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const M=E.backgroundBlurriness>0;A=t.get(A,M)}return A}function g(E){let A=!1;const M=f(E);M===null?p(a,o):M&&M.isColor&&(p(M,1),A=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,A){const M=f(A);M&&(M.isCubeTexture||M.mapping===xo)?(h===void 0&&(h=new ii(new qr(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:er(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(rf),h.material.toneMapped=kt.getTransfer(M.colorSpace)!==te,(c!==M||d!==M.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,c=M,d=M.version,u=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ii(new jd(2,2),new Ti({name:"BackgroundMaterial",uniforms:er(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=kt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,c=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,A){E.getRGB(ba,tf(i)),e.buffers.color.setClear(ba.r,ba.g,ba.b,A,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Xx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(R,O,N,X,U){let $=!1;const z=d(R,X,N,O);r!==z&&(r=z,h(r.object)),$=f(R,X,N,U),$&&g(R,X,N,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(R,O,N,X),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function h(R){return i.bindVertexArray(R)}function c(R){return i.deleteVertexArray(R)}function d(R,O,N,X){const U=X.wireframe===!0;let $=n[O.id];$===void 0&&($={},n[O.id]=$);const z=R.isInstancedMesh===!0?R.id:0;let Y=$[z];Y===void 0&&(Y={},$[z]=Y);let tt=Y[N.id];tt===void 0&&(tt={},Y[N.id]=tt);let nt=tt[U];return nt===void 0&&(nt=u(l()),tt[U]=nt),nt}function u(R){const O=[],N=[],X=[];for(let U=0;U<e;U++)O[U]=0,N[U]=0,X[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:X,object:R,attributes:{},index:null}}function f(R,O,N,X){const U=r.attributes,$=O.attributes;let z=0;const Y=N.getAttributes();for(const tt in Y)if(Y[tt].location>=0){const st=U[tt];let _t=$[tt];if(_t===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),st===void 0||st.attribute!==_t||_t&&st.data!==_t.data)return!0;z++}return r.attributesNum!==z||r.index!==X}function g(R,O,N,X){const U={},$=O.attributes;let z=0;const Y=N.getAttributes();for(const tt in Y)if(Y[tt].location>=0){let st=$[tt];st===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(st=R.instanceColor));const _t={};_t.attribute=st,st&&st.data&&(_t.data=st.data),U[tt]=_t,z++}r.attributes=U,r.attributesNum=z,r.index=X}function _(){const R=r.newAttributes;for(let O=0,N=R.length;O<N;O++)R[O]=0}function p(R){m(R,0)}function m(R,O){const N=r.newAttributes,X=r.enabledAttributes,U=r.attributeDivisors;N[R]=1,X[R]===0&&(i.enableVertexAttribArray(R),X[R]=1),U[R]!==O&&(i.vertexAttribDivisor(R,O),U[R]=O)}function E(){const R=r.newAttributes,O=r.enabledAttributes;for(let N=0,X=O.length;N<X;N++)O[N]!==R[N]&&(i.disableVertexAttribArray(N),O[N]=0)}function A(R,O,N,X,U,$,z){z===!0?i.vertexAttribIPointer(R,O,N,U,$):i.vertexAttribPointer(R,O,N,X,U,$)}function M(R,O,N,X){_();const U=X.attributes,$=N.getAttributes(),z=O.defaultAttributeValues;for(const Y in $){const tt=$[Y];if(tt.location>=0){let nt=U[Y];if(nt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),nt!==void 0){const st=nt.normalized,_t=nt.itemSize,Yt=t.get(nt);if(Yt===void 0)continue;const le=Yt.buffer,Zt=Yt.type,J=Yt.bytesPerElement,at=Zt===i.INT||Zt===i.UNSIGNED_INT||nt.gpuType===$h;if(nt.isInterleavedBufferAttribute){const et=nt.data,Pt=et.stride,Lt=nt.offset;if(et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<tt.locationSize;Tt++)m(tt.location+Tt,et.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<tt.locationSize;Tt++)p(tt.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Tt=0;Tt<tt.locationSize;Tt++)A(tt.location+Tt,_t/tt.locationSize,Zt,st,Pt*J,(Lt+_t/tt.locationSize*Tt)*J,at)}else{if(nt.isInstancedBufferAttribute){for(let et=0;et<tt.locationSize;et++)m(tt.location+et,nt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let et=0;et<tt.locationSize;et++)p(tt.location+et);i.bindBuffer(i.ARRAY_BUFFER,le);for(let et=0;et<tt.locationSize;et++)A(tt.location+et,_t/tt.locationSize,Zt,st,_t*J,_t/tt.locationSize*et*J,at)}}else if(z!==void 0){const st=z[Y];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(tt.location,st);break;case 3:i.vertexAttrib3fv(tt.location,st);break;case 4:i.vertexAttrib4fv(tt.location,st);break;default:i.vertexAttrib1fv(tt.location,st)}}}}E()}function b(){T();for(const R in n){const O=n[R];for(const N in O){const X=O[N];for(const U in X){const $=X[U];for(const z in $)c($[z].object),delete $[z];delete X[U]}}delete n[R]}}function S(R){if(n[R.id]===void 0)return;const O=n[R.id];for(const N in O){const X=O[N];for(const U in X){const $=X[U];for(const z in $)c($[z].object),delete $[z];delete X[U]}}delete n[R.id]}function C(R){for(const O in n){const N=n[O];for(const X in N){const U=N[X];if(U[R.id]===void 0)continue;const $=U[R.id];for(const z in $)c($[z].object),delete $[z];delete U[R.id]}}}function x(R){for(const O in n){const N=n[O],X=R.isInstancedMesh===!0?R.id:0,U=N[X];if(U!==void 0){for(const $ in U){const z=U[$];for(const Y in z)c(z[Y].object),delete z[Y];delete U[$]}delete N[X],Object.keys(N).length===0&&delete n[O]}}}function T(){P(),a=!0,r!==s&&(r=s,h(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function $x(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,c){c!==0&&(i.drawArraysInstanced(n,l,h,c),e.update(h,n,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,c);let u=0;for(let f=0;f<c;f++)u+=h[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ei&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==hi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ni&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(Ct("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:M,maxSamples:b,samples:S}}function Yx(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new qn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?c(null):h();else{const E=r?0:n,A=E*4;let M=m.clippingState||null;l.value=M,M=c(g,u,A,f);for(let b=0;b!==A;++b)M[b]=e[b];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,u,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,M=f;A!==_;++A,M+=4)a.copy(d[A]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}const Rn=4,du=[.125,.215,.35,.446,.526,.582],Zn=20,Zx=256,dr=new nf,fu=new Jt;let ol=null,ll=0,hl=0,cl=!1;const Kx=new B;class pu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Kx}=r;ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ol,ll,hl),this._renderer.xr.enabled=cl,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qn||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:ln,format:Ei,colorSpace:kr,depthBuffer:!1},s=mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jx(r)),this._blurMaterial=Qx(r,t,e),this._ggxMaterial=jx(r,t,e)}return s}_compileMaterial(t){const e=new ii(new Nn,t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,s,r){const l=new li(90,1,e,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(fu),d.toneMapping=Bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ii(new qr,new $r({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,m=!0):(p.color.copy(fu),m=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,h[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[A],r.y,r.z)):M===1?(l.up.set(0,0,h[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[A],r.z)):(l.up.set(0,h[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[A]));const b=this._cubeSize;Ms(s,M*b,A>2?b:0,b,b),d.setRenderTarget(s),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qn||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ms(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,h=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),d=Math.sqrt(h*h-c*c),u=0+h*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Rn?n-g+Rn:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ms(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(o,dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ms(t,p,m,3*_,2*_),s.setRenderTarget(t),s.render(o,dr)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[s];d.material=h;const u=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zn-1),_=r/g,p=isFinite(r)?1+Math.floor(c*_):Zn;p>Zn&&Ct(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const m=[];let E=0;for(let C=0;C<Zn;++C){const x=C/_,T=Math.exp(-x*x/2);m.push(T),C===0?E+=T:C<p&&(E+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/E;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-n;const M=this._sizeLods[s],b=3*M*(s>A-Rn?s-A+Rn:0),S=4*(this._cubeSize-M);Ms(e,b,S,3*M,2*M),l.setRenderTarget(e),l.render(d,dr)}}function Jx(i){const t=[],e=[],n=[];let s=i;const r=i-Rn+1+du.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Rn?l=du[a-i+Rn-1]:a===0&&(l=0),e.push(l);const h=1/(o-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,_=3,p=2,m=1,E=new Float32Array(_*g*f),A=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let S=0;S<f;S++){const C=S%3*2/3-1,x=S>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];E.set(T,_*g*S),A.set(u,p*g*S);const P=[S,S,S,S,S,S];M.set(P,m*g*S)}const b=new Nn;b.setAttribute("position",new ki(E,_)),b.setAttribute("uv",new ki(A,p)),b.setAttribute("faceIndex",new ki(M,m)),n.push(new ii(b,null)),s>Rn&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function mu(i,t,e){const n=new wi(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jx(i,t,e){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Qx(i,t,e){const n=new Float32Array(Zn),s=new B(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function gu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function vu(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class af extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qr(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:en});r.uniforms.tEquirect.value=e;const a=new ii(s,r),o=e.minFilter;return e.minFilter===Cn&&(e.minFilter=Ue),new sv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function ty(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===No||f===Oo)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new af(g.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",h),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===No||f===Oo,_=f===Qn||f===Js;if(g||_){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new pu(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const E=u.image;return g&&E&&E.height>0||_&&E&&l(E)?(n===null&&(n=new pu(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",c),p.texture):null}}}return u}function o(u,f){return f===No?u.mapping=Qn:f===Oo&&(u.mapping=Js),u}function l(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ey(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Vs("WebGLRenderer: "+n+" extension not supported."),s}}}function iy(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function h(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const E=f.array;_=f.version;for(let A=0,M=E.length;A<M;A+=3){const b=E[A+0],S=E[A+1],C=E[A+2];u.push(b,S,S,C,C,b)}}else{const E=g.array;_=g.version;for(let A=0,M=E.length/3-1;A<M;A+=3){const b=A+0,S=A+1,C=A+2;u.push(b,S,S,C,C,b)}}const p=new(g.count>=65535?qd:$d)(u,1);p.version=_;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function c(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function ny(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function h(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function c(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function sy(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ry(i,t,e){const n=new WeakMap,s=new ye;function r(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var f=P;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let b=o.attributes.position.count*M,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*S*4*d),x=new Gd(C,b,S,d);x.type=Ni,x.needsUpdate=!0;const T=M*4;for(let R=0;R<d;R++){const O=m[R],N=E[R],X=A[R],U=b*S*4*R;for(let $=0;$<O.count;$++){const z=$*T;g===!0&&(s.fromBufferAttribute(O,$),C[U+z+0]=s.x,C[U+z+1]=s.y,C[U+z+2]=s.z,C[U+z+3]=0),_===!0&&(s.fromBufferAttribute(N,$),C[U+z+4]=s.x,C[U+z+5]=s.y,C[U+z+6]=s.z,C[U+z+7]=0),p===!0&&(s.fromBufferAttribute(X,$),C[U+z+8]=s.x,C[U+z+9]=s.y,C[U+z+10]=s.z,C[U+z+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new qt(b,S)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<h.length;p++)g+=h[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ay(i,t,e,n,s){let r=new WeakMap;function a(h){const c=s.render.frame,d=h.geometry,u=t.get(h,d);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),n.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}const oy={[Xh]:"LINEAR_TONE_MAPPING",[Cd]:"REINHARD_TONE_MAPPING",[Rd]:"CINEON_TONE_MAPPING",[Pd]:"ACES_FILMIC_TONE_MAPPING",[Id]:"AGX_TONE_MAPPING",[Dd]:"NEUTRAL_TONE_MAPPING",[Ld]:"CUSTOM_TONE_MAPPING"};function ly(i,t,e,n,s,r){const a=new wi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Qs(t,e):void 0}),o=new wi(t,e,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Nn;l.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ci([0,2,0,0,2,0],2));const h=new K0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ii(l,h),d=new nf(-1,1,1,-1,0,1);let u=null,f=null,g=!1,_,p=null,m=[],E=!1;this.setSize=function(A,M){a.setSize(A,M),o.setSize(A,M);for(let b=0;b<m.length;b++){const S=m[b];S.setSize&&S.setSize(A,M)}},this.setEffects=function(A){m=A,E=m.length>0&&m[0].isRenderPass===!0;const M=a.width,b=a.height;for(let S=0;S<m.length;S++){const C=m[S];C.setSize&&C.setSize(M,b)}},this.begin=function(A,M){if(g||A.toneMapping===Bi&&m.length===0)return!1;if(p=M,M!==null){const b=M.width,S=M.height;(a.width!==b||a.height!==S)&&this.setSize(b,S)}return E===!1&&A.setRenderTarget(a),_=A.toneMapping,A.toneMapping=Bi,!0},this.hasRenderPass=function(){return E},this.end=function(A,M){A.toneMapping=_,g=!0;let b=a,S=o;for(let C=0;C<m.length;C++){const x=m[C];if(x.enabled!==!1&&(x.render(A,S,b,M),x.needsSwap!==!1)){const T=b;b=S,S=T}}if(u!==A.outputColorSpace||f!==A.toneMapping){u=A.outputColorSpace,f=A.toneMapping,h.defines={},kt.getTransfer(u)===te&&(h.defines.SRGB_TRANSFER="");const C=oy[f];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,A.setRenderTarget(p),A.render(c,d),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),h.dispose()}}const of=new di,Th=new Qs(1,1),lf=new Gd,hf=new C0,cf=new Kd,_u=[],xu=[],yu=new Float32Array(16),Mu=new Float32Array(9),Su=new Float32Array(4);function sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_u[s];if(r===void 0&&(r=new Float32Array(s),_u[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function So(i,t){let e=xu[t];e===void 0&&(e=new Int32Array(t),xu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function uy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function dy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function fy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Su.set(n),i.uniformMatrix2fv(this.addr,!1,Su),Ee(e,n)}}function py(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Mu.set(n),i.uniformMatrix3fv(this.addr,!1,Mu),Ee(e,n)}}function my(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;yu.set(n),i.uniformMatrix4fv(this.addr,!1,yu),Ee(e,n)}}function gy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function _y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function xy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function yy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function My(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Sy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function by(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Ey(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=e.isReversedDepthBuffer()?Qh:jh,r=Th):r=of,e.setTexture2D(t||r,s)}function wy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hf,s)}function Ty(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cf,s)}function Ay(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lf,s)}function Cy(i){switch(i){case 5126:return hy;case 35664:return cy;case 35665:return uy;case 35666:return dy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return vy;case 35668:case 35672:return _y;case 35669:case 35673:return xy;case 5125:return yy;case 36294:return My;case 36295:return Sy;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ay}}function Ry(i,t){i.uniform1fv(this.addr,t)}function Py(i,t){const e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ly(i,t){const e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function Iy(i,t){const e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Dy(i,t){const e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Uy(i,t){const e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fy(i,t){const e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ny(i,t){i.uniform1iv(this.addr,t)}function Oy(i,t){i.uniform2iv(this.addr,t)}function zy(i,t){i.uniform3iv(this.addr,t)}function By(i,t){i.uniform4iv(this.addr,t)}function ky(i,t){i.uniform1uiv(this.addr,t)}function Vy(i,t){i.uniform2uiv(this.addr,t)}function Hy(i,t){i.uniform3uiv(this.addr,t)}function Gy(i,t){i.uniform4uiv(this.addr,t)}function Wy(i,t,e){const n=this.cache,s=t.length,r=So(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Th:a=of;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Xy(i,t,e){const n=this.cache,s=t.length,r=So(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hf,r[a])}function $y(i,t,e){const n=this.cache,s=t.length,r=So(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||cf,r[a])}function qy(i,t,e){const n=this.cache,s=t.length,r=So(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lf,r[a])}function Yy(i){switch(i){case 5126:return Ry;case 35664:return Py;case 35665:return Ly;case 35666:return Iy;case 35674:return Dy;case 35675:return Uy;case 35676:return Fy;case 5124:case 35670:return Ny;case 35667:case 35671:return Oy;case 35668:case 35672:return zy;case 35669:case 35673:return By;case 5125:return ky;case 36294:return Vy;case 36295:return Hy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return qy}}class Zy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cy(e.type)}}class Ky{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yy(e.type)}}class Jy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function bu(i,t){i.seq.push(t),i.map[t.id]=t}function jy(i,t,e){const n=i.name,s=n.length;for(ul.lastIndex=0;;){const r=ul.exec(n),a=ul.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){bu(e,h===void 0?new Zy(o,i,t):new Ky(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Jy(o),bu(e,d)),e=d}}}class eo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);jy(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Eu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qy=37297;let tM=0;function eM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const wu=new Ut;function iM(i){kt._getMatrix(wu,kt.workingColorSpace,i);const t=`mat3( ${wu.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case lo:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+eM(i.getShaderSource(t),o)}else return r}function nM(i,t){const e=iM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const sM={[Xh]:"Linear",[Cd]:"Reinhard",[Rd]:"Cineon",[Pd]:"ACESFilmic",[Id]:"AgX",[Dd]:"Neutral",[Ld]:"Custom"};function rM(i,t){const e=sM[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ea=new B;function aM(){kt.getLuminanceCoefficients(Ea);const i=Ea.x.toFixed(4),t=Ea.y.toFixed(4),e=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function lM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Mr(i){return i!==""}function Au(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(i){return i.replace(cM,dM)}const uM=new Map;function dM(i,t){let e=Nt[t];if(e===void 0){const n=uM.get(t);if(n!==void 0)e=Nt[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ah(e)}const fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(i){return i.replace(fM,pM)}function pM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const mM={[Ya]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function gM(i){return mM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vM={[Qn]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"};function _M(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":vM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const xM={[Js]:"ENVMAP_MODE_REFRACTION"};function yM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MM={[Ad]:"ENVMAP_BLENDING_MULTIPLY",[$g]:"ENVMAP_BLENDING_MIX",[qg]:"ENVMAP_BLENDING_ADD"};function SM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":MM[i.combine]||"ENVMAP_BLENDING_NONE"}function bM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function EM(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=gM(e),h=_M(e),c=yM(e),d=SM(e),u=bM(e),f=oM(e),g=lM(r),_=s.createProgram();let p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`)):(p=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),m=[Pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?rM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,nM("linearToOutputTexel",e.outputColorSpace),aM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=Ah(a),a=Au(a,e),a=Cu(a,e),o=Ah(o),o=Au(o,e),o=Cu(o,e),a=Ru(a),o=Ru(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=E+p+a,M=E+m+o,b=Eu(s,s.VERTEX_SHADER,A),S=Eu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,b),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(S)||"",U=O.trim(),$=N.trim(),z=X.trim();let Y=!0,tt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,S);else{const nt=Tu(s,b,"vertex"),st=Tu(s,S,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+nt+`
`+st)}else U!==""?Ct("WebGLProgram: Program Info Log:",U):($===""||z==="")&&(tt=!1);tt&&(R.diagnostics={runnable:Y,programLog:U,vertexShader:{log:$,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(b),s.deleteShader(S),x=new eo(s,_),T=hM(s,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,Qy)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=S,this}let wM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new AM(t),e.set(t,n)),n}}class AM{constructor(t){this.id=wM++,this.code=t,this.usedTimes=0}}function CM(i){return i===ts||i===ao||i===oo}function RM(i,t,e,n,s,r){const a=new ic,o=new TM,l=new Set,h=[],c=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,P,R,O,N){const X=R.fog,U=O.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||$,z),tt=Y&&Y.mapping===xo?Y.image.height:null,nt=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ct("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const st=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_t=st!==void 0?st.length:0;let Yt=0;U.morphAttributes.position!==void 0&&(Yt=1),U.morphAttributes.normal!==void 0&&(Yt=2),U.morphAttributes.color!==void 0&&(Yt=3);let le,Zt,J,at;if(nt){const xt=Fi[nt];le=xt.vertexShader,Zt=xt.fragmentShader}else{le=x.vertexShader,Zt=x.fragmentShader;const xt=o.getVertexShaderStage(x),ce=o.getFragmentShaderStage(x);o.update(x,xt,ce),J=xt.id,at=ce.id}const et=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,Tt=O.isBatchedMesh===!0,de=!!x.map,Bt=!!x.matcap,ie=!!Y,Kt=!!x.aoMap,Wt=!!x.lightMap,me=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,we=!!x.displacementMap,Le=!!x.emissiveMap,he=!!x.metalnessMap,ge=!!x.roughnessMap,I=x.anisotropy>0,Xe=x.clearcoat>0,Qt=x.dispersion>0,w=x.iridescence>0,v=x.sheen>0,F=x.transmission>0,H=I&&!!x.anisotropyMap,W=Xe&&!!x.clearcoatMap,it=Xe&&!!x.clearcoatNormalMap,ot=Xe&&!!x.clearcoatRoughnessMap,q=w&&!!x.iridescenceMap,K=w&&!!x.iridescenceThicknessMap,lt=v&&!!x.sheenColorMap,St=v&&!!x.sheenRoughnessMap,ut=!!x.specularMap,ht=!!x.specularColorMap,wt=!!x.specularIntensityMap,At=F&&!!x.transmissionMap,It=F&&!!x.thicknessMap,L=!!x.gradientMap,rt=!!x.alphaMap,Z=x.alphaTest>0,ct=!!x.alphaHash,mt=!!x.extensions;let Q=Bi;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Q=i.toneMapping);const Mt={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:Zt,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:de,matcap:Bt,envMap:ie,envMapMode:ie&&Y.mapping,envMapCubeUVHeight:tt,aoMap:Kt,lightMap:Wt,bumpMap:me,normalMap:Se,displacementMap:we,emissiveMap:Le,normalMapObjectSpace:Se&&x.normalMapType===Kg,normalMapTangentSpace:Se&&x.normalMapType===Nc,packedNormalMap:Se&&x.normalMapType===Nc&&CM(x.normalMap.format),metalnessMap:he,roughnessMap:ge,anisotropy:I,anisotropyMap:H,clearcoat:Xe,clearcoatMap:W,clearcoatNormalMap:it,clearcoatRoughnessMap:ot,dispersion:Qt,iridescence:w,iridescenceMap:q,iridescenceThicknessMap:K,sheen:v,sheenColorMap:lt,sheenRoughnessMap:St,specularMap:ut,specularColorMap:ht,specularIntensityMap:wt,transmission:F,transmissionMap:At,thicknessMap:It,gradientMap:L,opaque:x.transparent===!1&&x.blending===ks&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:Z,alphaHash:ct,combine:x.combine,mapUv:de&&g(x.map.channel),aoMapUv:Kt&&g(x.aoMap.channel),lightMapUv:Wt&&g(x.lightMap.channel),bumpMapUv:me&&g(x.bumpMap.channel),normalMapUv:Se&&g(x.normalMap.channel),displacementMapUv:we&&g(x.displacementMap.channel),emissiveMapUv:Le&&g(x.emissiveMap.channel),metalnessMapUv:he&&g(x.metalnessMap.channel),roughnessMapUv:ge&&g(x.roughnessMap.channel),anisotropyMapUv:H&&g(x.anisotropyMap.channel),clearcoatMapUv:W&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:it&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(x.sheenRoughnessMap.channel),specularMapUv:ut&&g(x.specularMap.channel),specularColorMapUv:ht&&g(x.specularColorMap.channel),specularIntensityMapUv:wt&&g(x.specularIntensityMap.channel),transmissionMapUv:At&&g(x.transmissionMap.channel),thicknessMapUv:It&&g(x.thicknessMap.channel),alphaMapUv:rt&&g(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Se||I),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(de||rt),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Yt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:de&&x.map.isVideoTexture===!0&&kt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&kt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qi,flipSided:x.side===$e,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:mt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&x.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(T,x),E(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){const T=f[x.type];let P;if(T){const R=Fi[T];P=q0.clone(R.uniforms)}else P=x.uniforms;return P}function M(x,T){let P=c.get(T);return P!==void 0?++P.usedTimes:(P=new EM(i,T,x,s),h.push(P),c.set(T,P)),P}function b(x){if(--x.usedTimes===0){const T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),c.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:M,releaseProgram:b,releaseShaderCache:S,programs:h,dispose:C}}function PM(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function LM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Lu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Iu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},i[t]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=g,E.materialVariant=a(u),E.groupOrder=_,E.renderOrder=u.renderOrder,E.z=p,E.group=m),t++,E}function l(u,f,g,_,p,m){const E=o(u,f,g,_,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function h(u,f,g,_,p,m){const E=o(u,f,g,_,p,m);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function c(u,f,g){e.length>1&&e.sort(u||LM),n.length>1&&n.sort(f||Lu),s.length>1&&s.sort(f||Lu),g&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:h,finish:d,sort:c}}function IM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Iu,i.set(n,[a])):s>=r.length?(a=new Iu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function DM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Jt};break;case"SpotLight":e={position:new B,direction:new B,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function UM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let FM=0;function NM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function OM(i){const t=new DM,e=UM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new B);const s=new B,r=new Me,a=new Me;function o(h){let c=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,E=0,A=0,M=0,b=0,S=0,C=0;h.sort(NM);for(let T=0,P=h.length;T<P;T++){const R=h[T],O=R.color,N=R.intensity,X=R.distance;let U=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ts?U=R.shadow.map.texture:U=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=O.r*N,d+=O.g*N,u+=O.b*N;else if(R.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(R.sh.coefficients[$],N);C++}else if(R.isDirectionalLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,Y=e.get(R);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=R.shadow.matrix,E++}n.directional[f]=$,f++}else if(R.isSpotLight){const $=t.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(O).multiplyScalar(N),$.distance=X,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,n.spot[_]=$;const z=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,z.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[_]=z.matrix,R.castShadow){const Y=e.get(R);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=U,M++}_++}else if(R.isRectAreaLight){const $=t.get(R);$.color.copy(O).multiplyScalar(N),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=$,p++}else if(R.isPointLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const z=R.shadow,Y=e.get(R);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,Y.shadowCameraNear=z.camera.near,Y.shadowCameraFar=z.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=R.shadow.matrix,A++}n.point[g]=$,g++}else if(R.isHemisphereLight){const $=t.get(R);$.skyColor.copy(R.color).multiplyScalar(N),$.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[m]=$,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==E||x.numPointShadows!==A||x.numSpotShadows!==M||x.numSpotMaps!==b||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=M+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=E,x.numPointShadows=A,x.numSpotShadows=M,x.numSpotMaps=b,x.numLightProbes=C,n.version=FM++)}function l(h,c){let d=0,u=0,f=0,g=0,_=0;const p=c.matrixWorldInverse;for(let m=0,E=h.length;m<E;m++){const A=h[m];if(A.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(A.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(A.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(A.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),u++}else if(A.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Du(i){const t=new OM(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function h(){t.setup(e)}function c(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function zM(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Du(i),t.set(s,[o])):r>=a.length?(o=new Du(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VM=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],HM=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Uu=new Me,fr=new B,dl=new B;function GM(i,t,e){let n=new sc;const s=new qt,r=new qt,a=new ye,o=new J0,l=new j0,h={},c=e.maxTextureSize,d={[Un]:$e,[$e]:Un,[Qi]:Qi},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:BM,fragmentShader:kM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Nn;g.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ii(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let m=this.type;this.render=function(S,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Ag&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ya);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(en),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=m!==this.type;N&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(U=>U.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,U=S.length;X<U;X++){const $=S[X],z=$.shadow;if(z===void 0){Ct("WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Y=z.getFrameExtents();s.multiply(Y),r.copy(z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/Y.x),s.x=r.x*Y.x,z.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/Y.y),s.y=r.y*Y.y,z.mapSize.y=r.y));const tt=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=tt,z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===yr){if($.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new wi(s.x,s.y,{format:ts,type:ln,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),z.map.texture.name=$.name+".shadowMap",z.map.depthTexture=new Qs(s.x,s.y,Ni),z.map.depthTexture.name=$.name+".shadowMapDepth",z.map.depthTexture.format=hn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=De,z.map.depthTexture.magFilter=De}else $.isPointLight?(z.map=new af(s.x),z.map.depthTexture=new X0(s.x,Vi)):(z.map=new wi(s.x,s.y),z.map.depthTexture=new Qs(s.x,s.y,Vi)),z.map.depthTexture.name=$.name+".shadowMap",z.map.depthTexture.format=hn,this.type===Ya?(z.map.depthTexture.compareFunction=tt?Qh:jh,z.map.depthTexture.minFilter=Ue,z.map.depthTexture.magFilter=Ue):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=De,z.map.depthTexture.magFilter=De);z.camera.updateProjectionMatrix()}const nt=z.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<nt;st++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,st),i.clear();else{st===0&&(i.setRenderTarget(z.map),i.clear());const _t=z.getViewport(st);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),O.viewport(a)}if($.isPointLight){const _t=z.camera,Yt=z.matrix,le=$.distance||_t.far;le!==_t.far&&(_t.far=le,_t.updateProjectionMatrix()),fr.setFromMatrixPosition($.matrixWorld),_t.position.copy(fr),dl.copy(_t.position),dl.add(VM[st]),_t.up.copy(HM[st]),_t.lookAt(dl),_t.updateMatrixWorld(),Yt.makeTranslation(-fr.x,-fr.y,-fr.z),Uu.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Uu,_t.coordinateSystem,_t.reversedDepth)}else z.updateMatrices($);n=z.getFrustum(),M(C,x,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===yr&&E(z,x),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,P,R)};function E(S,C){const x=t.update(_);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new wi(s.x,s.y,{format:ts,type:ln})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,x,u,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,x,f,_,null)}function A(S,C,x,T){let P=null;const R=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=P.uuid,N=C.uuid;let X=h[O];X===void 0&&(X={},h[O]=X);let U=X[N];U===void 0&&(U=P.clone(),X[N]=U,C.addEventListener("dispose",b)),P=U}if(P.visible=C.visible,P.wireframe=C.wireframe,T===yr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=i.properties.get(P);O.light=x}return P}function M(S,C,x,T,P){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===yr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);const N=t.update(S),X=S.material;if(Array.isArray(X)){const U=N.groups;for(let $=0,z=U.length;$<z;$++){const Y=U[$],tt=X[Y.materialIndex];if(tt&&tt.visible){const nt=A(S,tt,T,P);S.onBeforeShadow(i,S,C,x,N,nt,Y),i.renderBufferDirect(x,null,N,nt,S,Y),S.onAfterShadow(i,S,C,x,N,nt,Y)}}}else if(X.visible){const U=A(S,X,T,P);S.onBeforeShadow(i,S,C,x,N,U,null),i.renderBufferDirect(x,null,N,U,S,null),S.onAfterShadow(i,S,C,x,N,U,null)}}const O=S.children;for(let N=0,X=O.length;N<X;N++)M(O[N],C,x,T,P)}function b(S){S.target.removeEventListener("dispose",b);for(const x in h){const T=h[x],P=S.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function WM(i,t){function e(){let L=!1;const rt=new ye;let Z=null;const ct=new ye(0,0,0,0);return{setMask:function(mt){Z!==mt&&!L&&(i.colorMask(mt,mt,mt,mt),Z=mt)},setLocked:function(mt){L=mt},setClear:function(mt,Q,Mt,xt,ce){ce===!0&&(mt*=xt,Q*=xt,Mt*=xt),rt.set(mt,Q,Mt,xt),ct.equals(rt)===!1&&(i.clearColor(mt,Q,Mt,xt),ct.copy(rt))},reset:function(){L=!1,Z=null,ct.set(-1,0,0,0)}}}function n(){let L=!1,rt=!1,Z=null,ct=null,mt=null;return{setReversed:function(Q){if(rt!==Q){const Mt=t.get("EXT_clip_control");Q?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),rt=Q;const xt=mt;mt=null,this.setClear(xt)}},getReversed:function(){return rt},setTest:function(Q){Q?et(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Q){Z!==Q&&!L&&(i.depthMask(Q),Z=Q)},setFunc:function(Q){if(rt&&(Q=a0[Q]),ct!==Q){switch(Q){case kl:i.depthFunc(i.NEVER);break;case Vl:i.depthFunc(i.ALWAYS);break;case Hl:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Wl:i.depthFunc(i.GEQUAL);break;case Xl:i.depthFunc(i.GREATER);break;case $l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Q}},setLocked:function(Q){L=Q},setClear:function(Q){mt!==Q&&(mt=Q,rt&&(Q=1-Q),i.clearDepth(Q))},reset:function(){L=!1,Z=null,ct=null,mt=null,rt=!1}}}function s(){let L=!1,rt=null,Z=null,ct=null,mt=null,Q=null,Mt=null,xt=null,ce=null;return{setTest:function(re){L||(re?et(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(re){rt!==re&&!L&&(i.stencilMask(re),rt=re)},setFunc:function(re,Ci,Ri){(Z!==re||ct!==Ci||mt!==Ri)&&(i.stencilFunc(re,Ci,Ri),Z=re,ct=Ci,mt=Ri)},setOp:function(re,Ci,Ri){(Q!==re||Mt!==Ci||xt!==Ri)&&(i.stencilOp(re,Ci,Ri),Q=re,Mt=Ci,xt=Ri)},setLocked:function(re){L=re},setClear:function(re){ce!==re&&(i.clearStencil(re),ce=re)},reset:function(){L=!1,rt=null,Z=null,ct=null,mt=null,Q=null,Mt=null,xt=null,ce=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,h=new WeakMap;let c={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,E=null,A=null,M=null,b=null,S=null,C=null,x=new Jt(0,0,0),T=0,P=!1,R=null,O=null,N=null,X=null,U=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(tt)[1]),z=Y>=1):tt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),z=Y>=2);let nt=null,st={};const _t=i.getParameter(i.SCISSOR_BOX),Yt=i.getParameter(i.VIEWPORT),le=new ye().fromArray(_t),Zt=new ye().fromArray(Yt);function J(L,rt,Z,ct){const mt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(L,Q),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<Z;Mt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(rt+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return Q}const at={};at[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Ks),me(!1),Se(Ic),et(i.CULL_FACE),Kt(en);function et(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function Pt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Lt(L,rt){return u[L]!==rt?(i.bindFramebuffer(L,rt),u[L]=rt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Tt(L,rt){let Z=g,ct=!1;if(L){Z=f.get(rt),Z===void 0&&(Z=[],f.set(rt,Z));const mt=L.textures;if(Z.length!==mt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Mt=mt.length;Q<Mt;Q++)Z[Q]=i.COLOR_ATTACHMENT0+Q;Z.length=mt.length,ct=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ct=!0);ct&&i.drawBuffers(Z)}function de(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Bt={[Yn]:i.FUNC_ADD,[Rg]:i.FUNC_SUBTRACT,[Pg]:i.FUNC_REVERSE_SUBTRACT};Bt[Lg]=i.MIN,Bt[Ig]=i.MAX;const ie={[Dg]:i.ZERO,[Ug]:i.ONE,[Fg]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[Vg]:i.SRC_ALPHA_SATURATE,[Bg]:i.DST_COLOR,[Og]:i.DST_ALPHA,[Ng]:i.ONE_MINUS_SRC_COLOR,[Bl]:i.ONE_MINUS_SRC_ALPHA,[kg]:i.ONE_MINUS_DST_COLOR,[zg]:i.ONE_MINUS_DST_ALPHA,[Hg]:i.CONSTANT_COLOR,[Gg]:i.ONE_MINUS_CONSTANT_COLOR,[Wg]:i.CONSTANT_ALPHA,[Xg]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(L,rt,Z,ct,mt,Q,Mt,xt,ce,re){if(L===en){p===!0&&(Pt(i.BLEND),p=!1);return}if(p===!1&&(et(i.BLEND),p=!0),L!==Cg){if(L!==m||re!==P){if((E!==Yn||b!==Yn)&&(i.blendEquation(i.FUNC_ADD),E=Yn,b=Yn),re)switch(L){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Gt("WebGLState: Invalid blending: ",L);break}else switch(L){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uc:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",L);break}A=null,M=null,S=null,C=null,x.set(0,0,0),T=0,m=L,P=re}return}mt=mt||rt,Q=Q||Z,Mt=Mt||ct,(rt!==E||mt!==b)&&(i.blendEquationSeparate(Bt[rt],Bt[mt]),E=rt,b=mt),(Z!==A||ct!==M||Q!==S||Mt!==C)&&(i.blendFuncSeparate(ie[Z],ie[ct],ie[Q],ie[Mt]),A=Z,M=ct,S=Q,C=Mt),(xt.equals(x)===!1||ce!==T)&&(i.blendColor(xt.r,xt.g,xt.b,ce),x.copy(xt),T=ce),m=L,P=!1}function Wt(L,rt){L.side===Qi?Pt(i.CULL_FACE):et(i.CULL_FACE);let Z=L.side===$e;rt&&(Z=!Z),me(Z),L.blending===ks&&L.transparent===!1?Kt(en):Kt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ct=L.stencilWrite;o.setTest(ct),ct&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(L){R!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),R=L)}function Se(L){L!==wg?(et(i.CULL_FACE),L!==O&&(L===Ic?i.cullFace(i.BACK):L===Tg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),O=L}function we(L){L!==N&&(z&&i.lineWidth(L),N=L)}function Le(L,rt,Z){L?(et(i.POLYGON_OFFSET_FILL),(X!==rt||U!==Z)&&(X=rt,U=Z,a.getReversed()&&(rt=-rt),i.polygonOffset(rt,Z))):Pt(i.POLYGON_OFFSET_FILL)}function he(L){L?et(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function ge(L){L===void 0&&(L=i.TEXTURE0+$-1),nt!==L&&(i.activeTexture(L),nt=L)}function I(L,rt,Z){Z===void 0&&(nt===null?Z=i.TEXTURE0+$-1:Z=nt);let ct=st[Z];ct===void 0&&(ct={type:void 0,texture:void 0},st[Z]=ct),(ct.type!==L||ct.texture!==rt)&&(nt!==Z&&(i.activeTexture(Z),nt=Z),i.bindTexture(L,rt||at[L]),ct.type=L,ct.texture=rt)}function Xe(){const L=st[nt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Qt(){try{i.compressedTexImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function v(){try{i.texSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function it(){try{i.texStorage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function ot(){try{i.texStorage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function q(){try{i.texImage2D(...arguments)}catch(L){Gt("WebGLState:",L)}}function K(){try{i.texImage3D(...arguments)}catch(L){Gt("WebGLState:",L)}}function lt(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function St(L,rt){d[L]!==rt&&(i.pixelStorei(L,rt),d[L]=rt)}function ut(L){le.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function ht(L){Zt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Zt.copy(L))}function wt(L,rt){let Z=h.get(rt);Z===void 0&&(Z=new WeakMap,h.set(rt,Z));let ct=Z.get(L);ct===void 0&&(ct=i.getUniformBlockIndex(rt,L.name),Z.set(L,ct))}function At(L,rt){const ct=h.get(rt).get(L);l.get(rt)!==ct&&(i.uniformBlockBinding(rt,ct,L.__bindingPointIndex),l.set(rt,ct))}function It(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},d={},nt=null,st={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,E=null,A=null,M=null,b=null,S=null,C=null,x=new Jt(0,0,0),T=0,P=!1,R=null,O=null,N=null,X=null,U=null,le.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Pt,bindFramebuffer:Lt,drawBuffers:Tt,useProgram:de,setBlending:Kt,setMaterial:Wt,setFlipSided:me,setCullFace:Se,setLineWidth:we,setPolygonOffset:Le,setScissorTest:he,activeTexture:ge,bindTexture:I,unbindTexture:Xe,compressedTexImage2D:Qt,compressedTexImage3D:w,texImage2D:q,texImage3D:K,pixelStorei:St,getParameter:lt,updateUBOMapping:wt,uniformBlockBinding:At,texStorage2D:it,texStorage3D:ot,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:W,scissor:ut,viewport:ht,reset:It}}function XM(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,c=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return g?new OffscreenCanvas(w,v):Vr("canvas")}function p(w,v,F){let H=1;const W=Qt(w);if((W.width>F||W.height>F)&&(H=F/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const it=Math.floor(H*W.width),ot=Math.floor(H*W.height);u===void 0&&(u=_(it,ot));const q=v?_(it,ot):u;return q.width=it,q.height=ot,q.getContext("2d").drawImage(w,0,0,it,ot),Ct("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+it+"x"+ot+")."),q}else return"data"in w&&Ct("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function m(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,v,F,H,W,it=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot;H&&(ot=t.get("EXT_texture_norm16"),ot||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8),F===i.UNSIGNED_SHORT&&ot&&(q=ot.R16_EXT),F===i.SHORT&&ot&&(q=ot.R16_SNORM_EXT)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8),F===i.UNSIGNED_SHORT&&ot&&(q=ot.RG16_EXT),F===i.SHORT&&ot&&(q=ot.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_SHORT&&ot&&(q=ot.RGB16_EXT),F===i.SHORT&&ot&&(q=ot.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),v===i.RGBA){const K=it?lo:kt.getTransfer(W);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=K===te?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ot&&(q=ot.RGBA16_EXT),F===i.SHORT&&ot&&(q=ot.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function b(w,v){let F;return w?v===null||v===Vi||v===Br?F=i.DEPTH24_STENCIL8:v===Ni?F=i.DEPTH32F_STENCIL8:v===zr&&(F=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vi||v===Br?F=i.DEPTH_COMPONENT24:v===Ni?F=i.DEPTH_COMPONENT32F:v===zr&&(F=i.DEPTH_COMPONENT16),F}function S(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==De&&w.minFilter!==Ue?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),T(v),v.isVideoTexture&&c.delete(v),v.isHTMLTexture&&d.delete(v)}function x(w){const v=w.target;v.removeEventListener("dispose",x),R(v)}function T(w){const v=n.get(w);if(v.__webglInit===void 0)return;const F=w.source,H=f.get(F);if(H){const W=H[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(w),Object.keys(H).length===0&&f.delete(F)}n.remove(w)}function P(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const F=w.source,H=f.get(F);delete H[v.__cacheKey],a.memory.textures--}function R(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let W=0;W<v.__webglFramebuffer[H].length;W++)i.deleteFramebuffer(v.__webglFramebuffer[H][W]);else i.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)i.deleteFramebuffer(v.__webglFramebuffer[H]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=w.textures;for(let H=0,W=F.length;H<W;H++){const it=n.get(F[H]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(w)}let O=0;function N(){O=0}function X(){return O}function U(w){O=w}function $(){const w=O;return w>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),O+=1,w}function z(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Y(w,v){const F=n.get(w);if(w.isVideoTexture&&I(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const H=w.image;if(H===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(F,w,v);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function tt(w,v){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Pt(F,w,v);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function nt(w,v){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Pt(F,w,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function st(w,v){const F=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){Lt(F,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const _t={[ql]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[Yl]:i.MIRRORED_REPEAT},Yt={[De]:i.NEAREST,[Yg]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[zo]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},le={[Jg]:i.NEVER,[i0]:i.ALWAYS,[jg]:i.LESS,[jh]:i.LEQUAL,[Qg]:i.EQUAL,[Qh]:i.GEQUAL,[t0]:i.GREATER,[e0]:i.NOTEQUAL};function Zt(w,v){if(v.type===Ni&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ue||v.magFilter===zo||v.magFilter===na||v.magFilter===Cn||v.minFilter===Ue||v.minFilter===zo||v.minFilter===na||v.minFilter===Cn)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,_t[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,_t[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,_t[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Yt[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Yt[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===De||v.minFilter!==na&&v.minFilter!==Cn||v.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function J(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const H=v.source;let W=f.get(H);W===void 0&&(W={},f.set(H,W));const it=z(v);if(it!==w.__cacheKey){W[it]===void 0&&(W[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),W[it].usedTimes++;const ot=W[w.__cacheKey];ot!==void 0&&(W[w.__cacheKey].usedTimes--,ot.usedTimes===0&&P(v)),w.__cacheKey=it,w.__webglTexture=W[it].texture}return F}function at(w,v,F){return Math.floor(Math.floor(w/F)/v)}function et(w,v,F,H){const it=w.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,H,v.data);else{it.sort((St,ut)=>St.start-ut.start);let ot=0;for(let St=1;St<it.length;St++){const ut=it[ot],ht=it[St],wt=ut.start+ut.count,At=at(ht.start,v.width,4),It=at(ut.start,v.width,4);ht.start<=wt+1&&At===It&&at(ht.start+ht.count-1,v.width,4)===At?ut.count=Math.max(ut.count,ht.start+ht.count-ut.start):(++ot,it[ot]=ht)}it.length=ot+1;const q=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let St=0,ut=it.length;St<ut;St++){const ht=it[St],wt=Math.floor(ht.start/4),At=Math.ceil(ht.count/4),It=wt%v.width,L=Math.floor(wt/v.width),rt=At,Z=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,It),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,It,L,rt,Z,F,H,v.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function Pt(w,v,F){let H=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=i.TEXTURE_3D);const W=J(w,v),it=v.source;e.bindTexture(H,w.__webglTexture,i.TEXTURE0+F);const ot=n.get(it);if(it.version!==ot.__version||W===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Z=kt.getPrimaries(kt.workingColorSpace),ct=v.colorSpace===Tn?null:kt.getPrimaries(v.colorSpace),mt=v.colorSpace===Tn||Z===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=p(v.image,!1,s.maxTextureSize);K=Xe(v,K);const lt=r.convert(v.format,v.colorSpace),St=r.convert(v.type);let ut=M(v.internalFormat,lt,St,v.normalized,v.colorSpace,v.isVideoTexture);Zt(H,v);let ht;const wt=v.mipmaps,At=v.isVideoTexture!==!0,It=ot.__version===void 0||W===!0,L=it.dataReady,rt=S(v,K);if(v.isDepthTexture)ut=b(v.format===Kn,v.type),It&&(At?e.texStorage2D(i.TEXTURE_2D,1,ut,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,ut,K.width,K.height,0,lt,St,null));else if(v.isDataTexture)if(wt.length>0){At&&It&&e.texStorage2D(i.TEXTURE_2D,rt,ut,wt[0].width,wt[0].height);for(let Z=0,ct=wt.length;Z<ct;Z++)ht=wt[Z],At?L&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ht.width,ht.height,lt,St,ht.data):e.texImage2D(i.TEXTURE_2D,Z,ut,ht.width,ht.height,0,lt,St,ht.data);v.generateMipmaps=!1}else At?(It&&e.texStorage2D(i.TEXTURE_2D,rt,ut,K.width,K.height),L&&et(v,K,lt,St)):e.texImage2D(i.TEXTURE_2D,0,ut,K.width,K.height,0,lt,St,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){At&&It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ut,wt[0].width,wt[0].height,K.depth);for(let Z=0,ct=wt.length;Z<ct;Z++)if(ht=wt[Z],v.format!==Ei)if(lt!==null)if(At){if(L)if(v.layerUpdates.size>0){const mt=uu(ht.width,ht.height,v.format,v.type);for(const Q of v.layerUpdates){const Mt=ht.data.subarray(Q*mt/ht.data.BYTES_PER_ELEMENT,(Q+1)*mt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Q,ht.width,ht.height,1,lt,Mt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ht.width,ht.height,K.depth,lt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ut,ht.width,ht.height,K.depth,0,ht.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ht.width,ht.height,K.depth,lt,St,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,ut,ht.width,ht.height,K.depth,0,lt,St,ht.data)}else{At&&It&&e.texStorage2D(i.TEXTURE_2D,rt,ut,wt[0].width,wt[0].height);for(let Z=0,ct=wt.length;Z<ct;Z++)ht=wt[Z],v.format!==Ei?lt!==null?At?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ht.width,ht.height,lt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,ut,ht.width,ht.height,0,ht.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?L&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ht.width,ht.height,lt,St,ht.data):e.texImage2D(i.TEXTURE_2D,Z,ut,ht.width,ht.height,0,lt,St,ht.data)}else if(v.isDataArrayTexture)if(At){if(It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ut,K.width,K.height,K.depth),L)if(v.layerUpdates.size>0){const Z=uu(K.width,K.height,v.format,v.type);for(const ct of v.layerUpdates){const mt=K.data.subarray(ct*Z/K.data.BYTES_PER_ELEMENT,(ct+1)*Z/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,K.width,K.height,1,lt,St,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,lt,St,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,K.width,K.height,K.depth,0,lt,St,K.data);else if(v.isData3DTexture)At?(It&&e.texStorage3D(i.TEXTURE_3D,rt,ut,K.width,K.height,K.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,lt,St,K.data)):e.texImage3D(i.TEXTURE_3D,0,ut,K.width,K.height,K.depth,0,lt,St,K.data);else if(v.isFramebufferTexture){if(It)if(At)e.texStorage2D(i.TEXTURE_2D,rt,ut,K.width,K.height);else{let Z=K.width,ct=K.height;for(let mt=0;mt<rt;mt++)e.texImage2D(i.TEXTURE_2D,mt,ut,Z,ct,0,lt,St,null),Z>>=1,ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),K.parentNode!==Z){Z.appendChild(K),d.add(v),Z.onpaint=ct=>{const mt=ct.changedElements;for(const Q of d)mt.includes(Q.image)&&(Q.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{const mt=i.RGBA,Q=i.RGBA,Mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,Q,Mt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(At&&It){const Z=Qt(wt[0]);e.texStorage2D(i.TEXTURE_2D,rt,ut,Z.width,Z.height)}for(let Z=0,ct=wt.length;Z<ct;Z++)ht=wt[Z],At?L&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,lt,St,ht):e.texImage2D(i.TEXTURE_2D,Z,ut,lt,St,ht);v.generateMipmaps=!1}else if(At){if(It){const Z=Qt(K);e.texStorage2D(i.TEXTURE_2D,rt,ut,Z.width,Z.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,St,K)}else e.texImage2D(i.TEXTURE_2D,0,ut,lt,St,K);m(v)&&E(H),ot.__version=it.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Lt(w,v,F){if(v.image.length!==6)return;const H=J(w,v),W=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const it=n.get(W);if(W.version!==it.__version||H===!0){e.activeTexture(i.TEXTURE0+F);const ot=kt.getPrimaries(kt.workingColorSpace),q=v.colorSpace===Tn?null:kt.getPrimaries(v.colorSpace),K=v.colorSpace===Tn||ot===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const lt=v.isCompressedTexture||v.image[0].isCompressedTexture,St=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let Q=0;Q<6;Q++)!lt&&!St?ut[Q]=p(v.image[Q],!0,s.maxCubemapSize):ut[Q]=St?v.image[Q].image:v.image[Q],ut[Q]=Xe(v,ut[Q]);const ht=ut[0],wt=r.convert(v.format,v.colorSpace),At=r.convert(v.type),It=M(v.internalFormat,wt,At,v.normalized,v.colorSpace),L=v.isVideoTexture!==!0,rt=it.__version===void 0||H===!0,Z=W.dataReady;let ct=S(v,ht);Zt(i.TEXTURE_CUBE_MAP,v);let mt;if(lt){L&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,It,ht.width,ht.height);for(let Q=0;Q<6;Q++){mt=ut[Q].mipmaps;for(let Mt=0;Mt<mt.length;Mt++){const xt=mt[Mt];v.format!==Ei?wt!==null?L?Z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,xt.width,xt.height,wt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,It,xt.width,xt.height,0,xt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,xt.width,xt.height,wt,At,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,It,xt.width,xt.height,0,wt,At,xt.data)}}}else{if(mt=v.mipmaps,L&&rt){mt.length>0&&ct++;const Q=Qt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,It,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(St){L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ut[Q].width,ut[Q].height,wt,At,ut[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,ut[Q].width,ut[Q].height,0,wt,At,ut[Q].data);for(let Mt=0;Mt<mt.length;Mt++){const ce=mt[Mt].image[Q].image;L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,ce.width,ce.height,wt,At,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,It,ce.width,ce.height,0,wt,At,ce.data)}}else{L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt,At,ut[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,wt,At,ut[Q]);for(let Mt=0;Mt<mt.length;Mt++){const xt=mt[Mt];L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,wt,At,xt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,It,wt,At,xt.image[Q])}}}m(v)&&E(i.TEXTURE_CUBE_MAP),it.__version=W.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Tt(w,v,F,H,W,it){const ot=r.convert(F.format,F.colorSpace),q=r.convert(F.type),K=M(F.internalFormat,ot,q,F.normalized,F.colorSpace),lt=n.get(v),St=n.get(F);if(St.__renderTarget=v,!lt.__hasExternalTextures){const ut=Math.max(1,v.width>>it),ht=Math.max(1,v.height>>it);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,it,K,ut,ht,v.depth,0,ot,q,null):e.texImage2D(W,it,K,ut,ht,0,ot,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ge(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,W,St.__webglTexture,0,he(v)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,W,St.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function de(w,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const H=v.depthTexture,W=H&&H.isDepthTexture?H.type:null,it=b(v.stencilBuffer,W),ot=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(v),it,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(v),it,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,it,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,w)}else{const H=v.textures;for(let W=0;W<H.length;W++){const it=H[W],ot=r.convert(it.format,it.colorSpace),q=r.convert(it.type),K=M(it.internalFormat,ot,q,it.normalized,it.colorSpace);ge(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(v),K,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(w,v,F){const H=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(v.depthTexture);if(W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if(W.__webglInit===void 0&&(W.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,v.depthTexture);const lt=r.convert(v.depthTexture.format),St=r.convert(v.depthTexture.type);let ut;v.depthTexture.format===hn?ut=i.DEPTH_COMPONENT24:v.depthTexture.format===Kn&&(ut=i.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ut,v.width,v.height,0,lt,St,null)}}else Y(v.depthTexture,0);const it=W.__webglTexture,ot=he(v),q=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,K=v.depthTexture.format===Kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===hn)ge(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,q,it,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,K,q,it,0);else if(v.depthTexture.format===Kn)ge(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,q,it,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,K,q,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(w){const v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const H=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){const W=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",W)};H.addEventListener("dispose",W),v.__depthDisposeCallback=W}v.__boundDepthTexture=H}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)Bt(v.__webglFramebuffer[H],w,H);else{const H=w.texture.mipmaps;H&&H.length>0?Bt(v.__webglFramebuffer[0],w,0):Bt(v.__webglFramebuffer,w,0)}else if(F){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=i.createRenderbuffer(),de(v.__webglDepthbuffer[H],w,!1);else{const W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,it)}}else{const H=w.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),de(v.__webglDepthbuffer,w,!1);else{const W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(w,v,F){const H=n.get(w);v!==void 0&&Tt(H.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ie(w)}function Wt(w){const v=w.texture,F=n.get(w),H=n.get(v);w.addEventListener("dispose",x);const W=w.textures,it=w.isWebGLCubeRenderTarget===!0,ot=W.length>1;if(ot||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=v.version,a.memory.textures++),it){F.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[q]=[];for(let K=0;K<v.mipmaps.length;K++)F.__webglFramebuffer[q][K]=i.createFramebuffer()}else F.__webglFramebuffer[q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)F.__webglFramebuffer[q]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ot)for(let q=0,K=W.length;q<K;q++){const lt=n.get(W[q]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ge(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let q=0;q<W.length;q++){const K=W[q];F.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[q]);const lt=r.convert(K.format,K.colorSpace),St=r.convert(K.type),ut=M(K.internalFormat,lt,St,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),ht=he(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,ut,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,F.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),de(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Tt(F.__webglFramebuffer[q][K],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else Tt(F.__webglFramebuffer[q],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(v)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let q=0,K=W.length;q<K;q++){const lt=W[q],St=n.get(lt);let ut=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,St.__webglTexture),Zt(ut,lt),Tt(F.__webglFramebuffer,w,lt,i.COLOR_ATTACHMENT0+q,ut,0),m(lt)&&E(ut)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,H.__webglTexture),Zt(q,v),v.mipmaps&&v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Tt(F.__webglFramebuffer[K],w,v,i.COLOR_ATTACHMENT0,q,K);else Tt(F.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,q,0);m(v)&&E(q),e.unbindTexture()}w.depthBuffer&&ie(w)}function me(w){const v=w.textures;for(let F=0,H=v.length;F<H;F++){const W=v[F];if(m(W)){const it=A(w),ot=n.get(W).__webglTexture;e.bindTexture(it,ot),E(it),e.unbindTexture()}}}const Se=[],we=[];function Le(w){if(w.samples>0){if(ge(w)===!1){const v=w.textures,F=w.width,H=w.height;let W=i.COLOR_BUFFER_BIT;const it=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(w),q=v.length>1;if(q)for(let lt=0;lt<v.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);const K=w.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<v.length;lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const St=n.get(v[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,W,i.NEAREST),l===!0&&(Se.length=0,we.length=0,Se.push(i.COLOR_ATTACHMENT0+lt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Se.push(it),we.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,we)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let lt=0;lt<v.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);const St=n.get(v[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function he(w){return Math.min(s.maxSamples,w.samples)}function ge(w){const v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(w){const v=a.render.frame;c.get(w)!==v&&(c.set(w,v),w.update())}function Xe(w,v){const F=w.colorSpace,H=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==kr&&F!==Tn&&(kt.getTransfer(F)===te?(H!==Ei||W!==hi)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",F)),v}function Qt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=N,this.getTextureUnits=X,this.setTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=tt,this.setTexture3D=nt,this.setTextureCube=st,this.rebindTextures=Kt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $M(i,t){function e(n,s=Tn){let r;const a=kt.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===qh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Od)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fd)return i.BYTE;if(n===Nd)return i.SHORT;if(n===zr)return i.UNSIGNED_SHORT;if(n===$h)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Ni)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===Bd)return i.ALPHA;if(n===kd)return i.RGB;if(n===Ei)return i.RGBA;if(n===hn)return i.DEPTH_COMPONENT;if(n===Kn)return i.DEPTH_STENCIL;if(n===Vd)return i.RED;if(n===Zh)return i.RED_INTEGER;if(n===ts)return i.RG;if(n===Kh)return i.RG_INTEGER;if(n===Jh)return i.RGBA_INTEGER;if(n===Za||n===Ka||n===Ja||n===ja)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zl||n===Kl||n===Jl||n===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ql||n===th||n===eh||n===ih||n===nh||n===ao||n===sh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ql||n===th)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===eh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ih)return r.COMPRESSED_R11_EAC;if(n===nh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ao)return r.COMPRESSED_RG11_EAC;if(n===sh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rh||n===ah||n===oh||n===lh||n===hh||n===ch||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===vh||n===_h)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ah)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ch)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ph)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vh)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_h)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xh||n===yh||n===Mh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xh)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sh||n===bh||n===oo||n===Eh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Jd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ti({vertexShader:qM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ii(new jd(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KM extends is{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new ZM,m={},E=e.getContextAttributes();let A=null,M=null;const b=[],S=[],C=new qt;let x=null;const T=new li;T.viewport=new ye;const P=new li;P.viewport=new ye;const R=[T,P],O=new rv;let N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=b[J];return at===void 0&&(at=new Wo,b[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=b[J];return at===void 0&&(at=new Wo,b[J]=at),at.getGripSpace()},this.getHand=function(J){let at=b[J];return at===void 0&&(at=new Wo,b[J]=at),at.getHandSpace()};function U(J){const at=S.indexOf(J.inputSource);if(at===-1)return;const et=b[at];et!==void 0&&(et.update(J.inputSource,J.frame,h||a),et.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",z);for(let J=0;J<b.length;J++){const at=S[J];at!==null&&(S[J]=null,b[J].disconnect(at))}N=null,X=null,p.reset();for(const J in m)delete m[J];t.setRenderTarget(A),f=null,u=null,d=null,s=null,M=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",$),s.addEventListener("inputsourceschange",z),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Pt=null,Lt=null;E.depth&&(Lt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=E.stencil?Kn:hn,Pt=E.stencil?Br:Vi);const Tt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Tt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new wi(u.textureWidth,u.textureHeight,{format:Ei,type:hi,depthTexture:new Qs(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const et={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new wi(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(J){for(let at=0;at<J.removed.length;at++){const et=J.removed[at],Pt=S.indexOf(et);Pt>=0&&(S[Pt]=null,b[Pt].disconnect(et))}for(let at=0;at<J.added.length;at++){const et=J.added[at];let Pt=S.indexOf(et);if(Pt===-1){for(let Tt=0;Tt<b.length;Tt++)if(Tt>=S.length){S.push(et),Pt=Tt;break}else if(S[Tt]===null){S[Tt]=et,Pt=Tt;break}if(Pt===-1)break}const Lt=b[Pt];Lt&&Lt.connect(et)}}const Y=new B,tt=new B;function nt(J,at,et){Y.setFromMatrixPosition(at.matrixWorld),tt.setFromMatrixPosition(et.matrixWorld);const Pt=Y.distanceTo(tt),Lt=at.projectionMatrix.elements,Tt=et.projectionMatrix.elements,de=Lt[14]/(Lt[10]-1),Bt=Lt[14]/(Lt[10]+1),ie=(Lt[9]+1)/Lt[5],Kt=(Lt[9]-1)/Lt[5],Wt=(Lt[8]-1)/Lt[0],me=(Tt[8]+1)/Tt[0],Se=de*Wt,we=de*me,Le=Pt/(-Wt+me),he=Le*-Wt;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(he),J.translateZ(Le),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Lt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const ge=de+Le,I=Bt+Le,Xe=Se-he,Qt=we+(Pt-he),w=ie*Bt/I*ge,v=Kt*Bt/I*ge;J.projectionMatrix.makePerspective(Xe,Qt,w,v,ge,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function st(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,et=J.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(et=p.depthFar)),O.near=P.near=T.near=at,O.far=P.far=T.far=et,(N!==O.near||X!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),N=O.near,X=O.far),O.layers.mask=J.layers.mask|6,T.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Pt=J.parent,Lt=O.cameras;st(O,Pt);for(let Tt=0;Tt<Lt.length;Tt++)st(Lt[Tt],Pt);Lt.length===2?nt(O,T,P):O.projectionMatrix.copy(T.projectionMatrix),_t(J,O,Pt)};function _t(J,at,et){et===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(et.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(J){return m[J]};let Yt=null;function le(J,at){if(c=at.getViewerPose(h||a),g=at,c!==null){const et=c.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Pt=!1;et.length!==O.cameras.length&&(O.cameras.length=0,Pt=!0);for(let Bt=0;Bt<et.length;Bt++){const ie=et[Bt];let Kt=null;if(f!==null)Kt=f.getViewport(ie);else{const me=d.getViewSubImage(u,ie);Kt=me.viewport,Bt===0&&(t.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(M))}let Wt=R[Bt];Wt===void 0&&(Wt=new li,Wt.layers.enable(Bt),Wt.viewport=new ye,R[Bt]=Wt),Wt.matrix.fromArray(ie.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(ie.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Bt===0&&(O.matrix.copy(Wt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pt===!0&&O.cameras.push(Wt)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Bt=d.getDepthInformation(et[0]);Bt&&Bt.isValid&&Bt.texture&&p.init(Bt,s.renderState)}if(Lt&&Lt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<et.length;Bt++){const ie=et[Bt].camera;if(ie){let Kt=m[ie];Kt||(Kt=new Jd,m[ie]=Kt);const Wt=d.getCameraImage(ie);Kt.sourceTexture=Wt}}}}for(let et=0;et<b.length;et++){const Pt=S[et],Lt=b[et];Pt!==null&&Lt!==void 0&&Lt.update(Pt,at,h||a)}Yt&&Yt(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const Zt=new sf;Zt.setAnimationLoop(le),this.setAnimationLoop=function(J){Yt=J},this.dispose=function(){}}}const JM=new Me,uf=new Ut;uf.set(-1,0,0,0,1,0,0,0,1);function jM(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,tf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,E,A,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,E,A):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===$e&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===$e&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=t.get(m),A=E.envMap,M=E.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(uf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$e&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function QM(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const S=b.program;n.uniformBlockBinding(M,S)}function h(M,b){let S=s[M.id];S===void 0&&(p(M),S=c(M),s[M.id]=S,M.addEventListener("dispose",E));const C=b.program;n.updateUBOMapping(M,C);const x=t.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function c(M){const b=d();M.__bindingPointIndex=b;const S=i.createBuffer(),C=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const b=s[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,T=S.length;x<T;x++){const P=S[x];if(Array.isArray(P))for(let R=0,O=P.length;R<O;R++)f(P[R],x,R,C);else f(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,b,S,C){if(_(M,b,S,C)===!0){const x=M.__offset,T=M.value;if(Array.isArray(T)){let P=0;for(let R=0;R<T.length;R++){const O=T[R],N=m(O);g(O,M.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,b,S){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,S)}function _(M,b,S,C){const x=M.value,T=b+"_"+S;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{const P=C[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function p(M){const b=M.uniforms;let S=0;const C=16;for(let T=0,P=b.length;T<P;T++){const R=Array.isArray(b[T])?b[T]:[b[T]];for(let O=0,N=R.length;O<N;O++){const X=R[O],U=Array.isArray(X.value)?X.value:[X.value];for(let $=0,z=U.length;$<z;$++){const Y=U[$],tt=m(Y),nt=S%C,st=nt%tt.boundary,_t=nt+st;S+=st,_t!==0&&C-_t<tt.storage&&(S+=C-_t),X.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=tt.storage}}}const x=S%C;return x>0&&(S+=C-x),M.__size=S,M.__cache={},this}function m(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",M),b}function E(M){const b=M.target;b.removeEventListener("dispose",E);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:h,dispose:A}}const tS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function eS(){return Ii===null&&(Ii=new V0(tS,16,16,ts,ln),Ii.name="DFG_LUT",Ii.minFilter=Ue,Ii.magFilter=Ue,Ii.wrapS=tn,Ii.wrapT=tn,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class iS{constructor(t={}){const{canvas:e=s0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=hi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,p=new Set([Jh,Kh,Zh]),m=new Set([hi,Vi,zr,Br,qh,Yh]),E=new Uint32Array(4),A=new Int32Array(4),M=new B;let b=null,S=null;const C=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,O=null,N=null,X=null,U=null;this._outputColorSpace=oi;let $=0,z=0,Y=null,tt=-1,nt=null;const st=new ye,_t=new ye;let Yt=null;const le=new Jt(0);let Zt=0,J=e.width,at=e.height,et=1,Pt=null,Lt=null;const Tt=new ye(0,0,J,at),de=new ye(0,0,J,at);let Bt=!1;const ie=new sc;let Kt=!1,Wt=!1;const me=new Me,Se=new B,we=new ye,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ge(){return Y===null?et:1}let I=n;function Xe(y,D){return e.getContext(y,D)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wh}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Ci,!1),I===null){const D="webgl2";if(I=Xe(D,y),I===null)throw Xe(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Gt("WebGLRenderer: "+y.message),y}let Qt,w,v,F,H,W,it,ot,q,K,lt,St,ut,ht,wt,At,It,L,rt,Z,ct,mt,Q;function Mt(){Qt=new ey(I),Qt.init(),ct=new $M(I,Qt),w=new qx(I,Qt,t,ct),v=new WM(I,Qt),w.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),N=I.createFramebuffer(),X=I.createFramebuffer(),U=I.createFramebuffer(),F=new sy(I),H=new PM,W=new XM(I,Qt,v,H,w,ct,F),it=new ty(P),ot=new lv(I),mt=new Xx(I,ot),q=new iy(I,ot,F,mt),K=new ay(I,q,ot,mt,F),L=new ry(I,w,W),wt=new Yx(H),lt=new RM(P,it,Qt,w,mt,wt),St=new jM(P,H),ut=new IM,ht=new zM(Qt),It=new Wx(P,it,v,K,g,l),At=new GM(P,K,w),Q=new QM(I,F,w,v),rt=new $x(I,Qt,F),Z=new ny(I,Qt,F),F.programs=lt.programs,P.capabilities=w,P.extensions=Qt,P.properties=H,P.renderLists=ut,P.shadowMap=At,P.state=v,P.info=F}Mt(),_!==hi&&(T=new ly(_,e.width,e.height,o,s,r));const xt=new KM(P,I);this.xr=xt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Qt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Qt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(y){y!==void 0&&(et=y,this.setSize(J,at,!1))},this.getSize=function(y){return y.set(J,at)},this.setSize=function(y,D,G=!0){if(xt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,at=D,e.width=Math.floor(y*et),e.height=Math.floor(D*et),G===!0&&(e.style.width=y+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(J*et,at*et).floor()},this.setDrawingBufferSize=function(y,D,G){J=y,at=D,et=G,e.width=Math.floor(y*G),e.height=Math.floor(D*G),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(_===hi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(st)},this.getViewport=function(y){return y.copy(Tt)},this.setViewport=function(y,D,G,k){y.isVector4?Tt.set(y.x,y.y,y.z,y.w):Tt.set(y,D,G,k),v.viewport(st.copy(Tt).multiplyScalar(et).round())},this.getScissor=function(y){return y.copy(de)},this.setScissor=function(y,D,G,k){y.isVector4?de.set(y.x,y.y,y.z,y.w):de.set(y,D,G,k),v.scissor(_t.copy(de).multiplyScalar(et).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(y){v.setScissorTest(Bt=y)},this.setOpaqueSort=function(y){Pt=y},this.setTransparentSort=function(y){Lt=y},this.getClearColor=function(y){return y.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,G=!0){let k=0;if(y){let V=!1;if(Y!==null){const pt=Y.texture.format;V=p.has(pt)}if(V){const pt=Y.texture.type,vt=m.has(pt),ft=It.getClearColor(),yt=It.getClearAlpha(),bt=ft.r,Dt=ft.g,Ot=ft.b;vt?(E[0]=bt,E[1]=Dt,E[2]=Ot,E[3]=yt,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=bt,A[1]=Dt,A[2]=Ot,A[3]=yt,I.clearBufferiv(I.COLOR,0,A))}else k|=I.COLOR_BUFFER_BIT}D&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ci,!1),It.dispose(),ut.dispose(),ht.dispose(),H.dispose(),it.dispose(),K.dispose(),mt.dispose(),Q.dispose(),lt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Ec),xt.removeEventListener("sessionend",wc),zn.stop()};function ce(y){y.preventDefault(),Vc("WebGLRenderer: Context Lost."),R=!0}function re(){Vc("WebGLRenderer: Context Restored."),R=!1;const y=F.autoReset,D=At.enabled,G=At.autoUpdate,k=At.needsUpdate,V=At.type;Mt(),F.autoReset=y,At.enabled=D,At.autoUpdate=G,At.needsUpdate=k,At.type=V}function Ci(y){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ri(y){const D=y.target;D.removeEventListener("dispose",Ri),_g(D)}function _g(y){xg(y),H.remove(y)}function xg(y){const D=H.get(y).programs;D!==void 0&&(D.forEach(function(G){lt.releaseProgram(G)}),y.isShaderMaterial&&lt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,G,k,V,pt){D===null&&(D=Le);const vt=V.isMesh&&V.matrixWorld.determinantAffine()<0,ft=Sg(y,D,G,k,V);v.setMaterial(k,vt);let yt=G.index,bt=1;if(k.wireframe===!0){if(yt=q.getWireframeAttribute(G),yt===void 0)return;bt=2}const Dt=G.drawRange,Ot=G.attributes.position;let Et=Dt.start*bt,ee=(Dt.start+Dt.count)*bt;pt!==null&&(Et=Math.max(Et,pt.start*bt),ee=Math.min(ee,(pt.start+pt.count)*bt)),yt!==null?(Et=Math.max(Et,0),ee=Math.min(ee,yt.count)):Ot!=null&&(Et=Math.max(Et,0),ee=Math.min(ee,Ot.count));const fe=ee-Et;if(fe<0||fe===1/0)return;mt.setup(V,k,ft,G,yt);let ue,ne=rt;if(yt!==null&&(ue=ot.get(yt),ne=Z,ne.setIndex(ue)),V.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*ge()),ne.setMode(I.LINES)):ne.setMode(I.TRIANGLES);else if(V.isLine){let Fe=k.linewidth;Fe===void 0&&(Fe=1),v.setLineWidth(Fe*ge()),V.isLineSegments?ne.setMode(I.LINES):V.isLineLoop?ne.setMode(I.LINE_LOOP):ne.setMode(I.LINE_STRIP)}else V.isPoints?ne.setMode(I.POINTS):V.isSprite&&ne.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))ne.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Fe=V._multiDrawStarts,gt=V._multiDrawCounts,Ye=V._multiDrawCount,Xt=yt?ot.get(yt).bytesPerElement:1,ni=H.get(k).currentProgram.getUniforms();for(let Pi=0;Pi<Ye;Pi++)ni.setValue(I,"_gl_DrawID",Pi),ne.render(Fe[Pi]/Xt,gt[Pi])}else if(V.isInstancedMesh)ne.renderInstances(Et,fe,V.count);else if(G.isInstancedBufferGeometry){const Fe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,Fe);ne.renderInstances(Et,fe,gt)}else ne.render(Et,fe)};function bc(y,D,G){y.transparent===!0&&y.side===Qi&&y.forceSinglePass===!1?(y.side=$e,y.needsUpdate=!0,ia(y,D,G),y.side=Un,y.needsUpdate=!0,ia(y,D,G),y.side=Qi):ia(y,D,G)}this.compile=function(y,D,G=null){G===null&&(G=y),S=ht.get(G),S.init(D),x.push(S),G.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),y!==G&&y.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights();const k=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let vt=0;vt<pt.length;vt++){const ft=pt[vt];bc(ft,G,V),k.add(ft)}else bc(pt,G,V),k.add(pt)}),S=x.pop(),k},this.compileAsync=function(y,D,G=null){const k=this.compile(y,D,G);return new Promise(V=>{function pt(){if(k.forEach(function(vt){H.get(vt).currentProgram.isReady()&&k.delete(vt)}),k.size===0){V(y);return}setTimeout(pt,10)}Qt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Uo=null;function yg(y){Uo&&Uo(y)}function Ec(){zn.stop()}function wc(){zn.start()}const zn=new sf;zn.setAnimationLoop(yg),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(y){Uo=y,xt.setAnimationLoop(y),y===null?zn.stop():zn.start()},xt.addEventListener("sessionstart",Ec),xt.addEventListener("sessionend",wc),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;O!==null&&O.renderStart(y,D);const G=xt.enabled===!0&&xt.isPresenting===!0,k=T!==null&&(Y===null||G)&&T.begin(P,Y);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(D),D=xt.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,D,Y),S=ht.get(y,x.length),S.init(D),S.state.textureUnits=W.getTextureUnits(),x.push(S),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ie.setFromProjectionMatrix(me,Oi,D.reversedDepth),Wt=this.localClippingEnabled,Kt=wt.init(this.clippingPlanes,Wt),b=ut.get(y,C.length),b.init(),C.push(b),xt.enabled===!0&&xt.isPresenting===!0){const vt=P.xr.getDepthSensingMesh();vt!==null&&Fo(vt,D,-1/0,P.sortObjects)}Fo(y,D,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(Pt,Lt,D.reversedDepth),he=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,he&&It.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&wt.beginShadows();const V=S.state.shadowsArray;if(At.render(V,y,D),Kt===!0&&wt.endShadows(),(k&&T.hasRenderPass())===!1){const vt=b.opaque,ft=b.transmissive;if(S.setupLights(),D.isArrayCamera){const yt=D.cameras;if(ft.length>0)for(let bt=0,Dt=yt.length;bt<Dt;bt++){const Ot=yt[bt];Ac(vt,ft,y,Ot)}he&&It.render(y);for(let bt=0,Dt=yt.length;bt<Dt;bt++){const Ot=yt[bt];Tc(b,y,Ot,Ot.viewport)}}else ft.length>0&&Ac(vt,ft,y,D),he&&It.render(y),Tc(b,y,D)}Y!==null&&z===0&&(W.updateMultisampleRenderTarget(Y),W.updateRenderTargetMipmap(Y)),k&&T.end(P),y.isScene===!0&&y.onAfterRender(P,y,D),mt.resetDefaultState(),tt=-1,nt=null,x.pop(),x.length>0?(S=x[x.length-1],W.setTextureUnits(S.state.textureUnits),Kt===!0&&wt.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,O!==null&&O.renderEnd()};function Fo(y,D,G,k){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLightProbeGrid)S.pushLightProbeGrid(y);else if(y.isLight)S.pushLight(y),y.castShadow&&S.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ie.intersectsSprite(y)){k&&we.setFromMatrixPosition(y.matrixWorld).applyMatrix4(me);const vt=K.update(y),ft=y.material;ft.visible&&b.push(y,vt,ft,G,we.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ie.intersectsObject(y))){const vt=K.update(y),ft=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),we.copy(y.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),we.copy(vt.boundingSphere.center)),we.applyMatrix4(y.matrixWorld).applyMatrix4(me)),Array.isArray(ft)){const yt=vt.groups;for(let bt=0,Dt=yt.length;bt<Dt;bt++){const Ot=yt[bt],Et=ft[Ot.materialIndex];Et&&Et.visible&&b.push(y,vt,Et,G,we.z,Ot)}}else ft.visible&&b.push(y,vt,ft,G,we.z,null)}}const pt=y.children;for(let vt=0,ft=pt.length;vt<ft;vt++)Fo(pt[vt],D,G,k)}function Tc(y,D,G,k){const{opaque:V,transmissive:pt,transparent:vt}=y;S.setupLightsView(G),Kt===!0&&wt.setGlobalState(P.clippingPlanes,G),k&&v.viewport(st.copy(k)),V.length>0&&ea(V,D,G),pt.length>0&&ea(pt,D,G),vt.length>0&&ea(vt,D,G),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ac(y,D,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[k.id]===void 0){const Et=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[k.id]=new wi(1,1,{generateMipmaps:!0,type:Et?ln:hi,minFilter:Cn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const pt=S.state.transmissionRenderTarget[k.id],vt=k.viewport||st;pt.setSize(vt.z*P.transmissionResolutionScale,vt.w*P.transmissionResolutionScale);const ft=P.getRenderTarget(),yt=P.getActiveCubeFace(),bt=P.getActiveMipmapLevel();P.setRenderTarget(pt),P.getClearColor(le),Zt=P.getClearAlpha(),Zt<1&&P.setClearColor(16777215,.5),P.clear(),he&&It.render(G);const Dt=P.toneMapping;P.toneMapping=Bi;const Ot=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),S.setupLightsView(k),Kt===!0&&wt.setGlobalState(P.clippingPlanes,k),ea(y,G,k),W.updateMultisampleRenderTarget(pt),W.updateRenderTargetMipmap(pt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let ee=0,fe=D.length;ee<fe;ee++){const ue=D[ee],{object:ne,geometry:Fe,material:gt,group:Ye}=ue;if(gt.side===Qi&&ne.layers.test(k.layers)){const Xt=gt.side;gt.side=$e,gt.needsUpdate=!0,Cc(ne,G,k,Fe,gt,Ye),gt.side=Xt,gt.needsUpdate=!0,Et=!0}}Et===!0&&(W.updateMultisampleRenderTarget(pt),W.updateRenderTargetMipmap(pt))}P.setRenderTarget(ft,yt,bt),P.setClearColor(le,Zt),Ot!==void 0&&(k.viewport=Ot),P.toneMapping=Dt}function ea(y,D,G){const k=D.isScene===!0?D.overrideMaterial:null;for(let V=0,pt=y.length;V<pt;V++){const vt=y[V],{object:ft,geometry:yt,group:bt}=vt;let Dt=vt.material;Dt.allowOverride===!0&&k!==null&&(Dt=k),ft.layers.test(G.layers)&&Cc(ft,D,G,yt,Dt,bt)}}function Cc(y,D,G,k,V,pt){y.onBeforeRender(P,D,G,k,V,pt),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(P,D,G,k,y,pt),V.transparent===!0&&V.side===Qi&&V.forceSinglePass===!1?(V.side=$e,V.needsUpdate=!0,P.renderBufferDirect(G,D,k,V,y,pt),V.side=Un,V.needsUpdate=!0,P.renderBufferDirect(G,D,k,V,y,pt),V.side=Qi):P.renderBufferDirect(G,D,k,V,y,pt),y.onAfterRender(P,D,G,k,V,pt)}function ia(y,D,G){D.isScene!==!0&&(D=Le);const k=H.get(y),V=S.state.lights,pt=S.state.shadowsArray,vt=V.state.version,ft=lt.getParameters(y,V.state,pt,D,G,S.state.lightProbeGridArray),yt=lt.getProgramCacheKey(ft);let bt=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;const Dt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=it.get(y.envMap||k.environment,Dt),k.envMapRotation=k.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,bt===void 0&&(y.addEventListener("dispose",Ri),bt=new Map,k.programs=bt);let Ot=bt.get(yt);if(Ot!==void 0){if(k.currentProgram===Ot&&k.lightsStateVersion===vt)return Pc(y,ft),Ot}else ft.uniforms=lt.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,G,ft),y.onBeforeCompile(ft,P),Ot=lt.acquireProgram(ft,yt),bt.set(yt,Ot),k.uniforms=ft.uniforms;const Et=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Et.clippingPlanes=wt.uniform),Pc(y,ft),k.needsLights=Eg(y),k.lightsStateVersion=vt,k.needsLights&&(Et.ambientLightColor.value=V.state.ambient,Et.lightProbe.value=V.state.probe,Et.directionalLights.value=V.state.directional,Et.directionalLightShadows.value=V.state.directionalShadow,Et.spotLights.value=V.state.spot,Et.spotLightShadows.value=V.state.spotShadow,Et.rectAreaLights.value=V.state.rectArea,Et.ltc_1.value=V.state.rectAreaLTC1,Et.ltc_2.value=V.state.rectAreaLTC2,Et.pointLights.value=V.state.point,Et.pointLightShadows.value=V.state.pointShadow,Et.hemisphereLights.value=V.state.hemi,Et.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Et.spotLightMatrix.value=V.state.spotLightMatrix,Et.spotLightMap.value=V.state.spotLightMap,Et.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=S.state.lightProbeGridArray.length>0,k.currentProgram=Ot,k.uniformsList=null,Ot}function Rc(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=eo.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Pc(y,D){const G=H.get(y);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Mg(y,D){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let G=0,k=y.length;G<k;G++){const V=y[G];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function Sg(y,D,G,k,V){D.isScene!==!0&&(D=Le),W.resetTextureUnits();const pt=D.fog,vt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,ft=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:kt.workingColorSpace,yt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,bt=it.get(k.envMap||vt,yt),Dt=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ot=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!G.morphAttributes.position,ee=!!G.morphAttributes.normal,fe=!!G.morphAttributes.color;let ue=Bi;k.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ue=P.toneMapping);const ne=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Fe=ne!==void 0?ne.length:0,gt=H.get(k),Ye=S.state.lights;if(Kt===!0&&(Wt===!0||y!==nt)){const ae=y===nt&&k.id===tt;wt.setState(k,y,ae)}let Xt=!1;k.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Ye.state.version||gt.outputColorSpace!==ft||V.isBatchedMesh&&gt.batching===!1||!V.isBatchedMesh&&gt.batching===!0||V.isBatchedMesh&&gt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&gt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&gt.instancing===!1||!V.isInstancedMesh&&gt.instancing===!0||V.isSkinnedMesh&&gt.skinning===!1||!V.isSkinnedMesh&&gt.skinning===!0||V.isInstancedMesh&&gt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&gt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&gt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&gt.instancingMorph===!1&&V.morphTexture!==null||gt.envMap!==bt||k.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==wt.numPlanes||gt.numIntersection!==wt.numIntersection)||gt.vertexAlphas!==Dt||gt.vertexTangents!==Ot||gt.morphTargets!==Et||gt.morphNormals!==ee||gt.morphColors!==fe||gt.toneMapping!==ue||gt.morphTargetsCount!==Fe||!!gt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Xt=!0):(Xt=!0,gt.__version=k.version);let ni=gt.currentProgram;Xt===!0&&(ni=ia(k,D,V),O&&k.isNodeMaterial&&O.onUpdateProgram(k,ni,gt));let Pi=!1,dn=!1,rs=!1;const se=ni.getUniforms(),pe=gt.uniforms;if(v.useProgram(ni.program)&&(Pi=!0,dn=!0,rs=!0),k.id!==tt&&(tt=k.id,dn=!0),gt.needsLights){const ae=Mg(S.state.lightProbeGridArray,V);gt.lightProbeGrid!==ae&&(gt.lightProbeGrid=ae,dn=!0)}if(Pi||nt!==y){v.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),se.setValue(I,"projectionMatrix",y.projectionMatrix),se.setValue(I,"viewMatrix",y.matrixWorldInverse);const pn=se.map.cameraPosition;pn!==void 0&&pn.setValue(I,Se.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&se.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&se.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),nt!==y&&(nt=y,dn=!0,rs=!0)}if(gt.needsLights&&(Ye.state.directionalShadowMap.length>0&&se.setValue(I,"directionalShadowMap",Ye.state.directionalShadowMap,W),Ye.state.spotShadowMap.length>0&&se.setValue(I,"spotShadowMap",Ye.state.spotShadowMap,W),Ye.state.pointShadowMap.length>0&&se.setValue(I,"pointShadowMap",Ye.state.pointShadowMap,W)),V.isSkinnedMesh){se.setOptional(I,V,"bindMatrix"),se.setOptional(I,V,"bindMatrixInverse");const ae=V.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),se.setValue(I,"boneTexture",ae.boneTexture,W))}V.isBatchedMesh&&(se.setOptional(I,V,"batchingTexture"),se.setValue(I,"batchingTexture",V._matricesTexture,W),se.setOptional(I,V,"batchingIdTexture"),se.setValue(I,"batchingIdTexture",V._indirectTexture,W),se.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&se.setValue(I,"batchingColorTexture",V._colorsTexture,W));const fn=G.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&L.update(V,G,ni),(dn||gt.receiveShadow!==V.receiveShadow)&&(gt.receiveShadow=V.receiveShadow,se.setValue(I,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(pe.envMapIntensity.value=D.environmentIntensity),pe.dfgLUT!==void 0&&(pe.dfgLUT.value=eS()),dn){if(se.setValue(I,"toneMappingExposure",P.toneMappingExposure),gt.needsLights&&bg(pe,rs),pt&&k.fog===!0&&St.refreshFogUniforms(pe,pt),St.refreshMaterialUniforms(pe,k,et,at,S.state.transmissionRenderTarget[y.id]),gt.needsLights&&gt.lightProbeGrid){const ae=gt.lightProbeGrid;pe.probesSH.value=ae.texture,pe.probesMin.value.copy(ae.boundingBox.min),pe.probesMax.value.copy(ae.boundingBox.max),pe.probesResolution.value.copy(ae.resolution)}eo.upload(I,Rc(gt),pe,W)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(eo.upload(I,Rc(gt),pe,W),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&se.setValue(I,"center",V.center),se.setValue(I,"modelViewMatrix",V.modelViewMatrix),se.setValue(I,"normalMatrix",V.normalMatrix),se.setValue(I,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const ae=k.uniformsGroups;for(let pn=0,as=ae.length;pn<as;pn++){const Lc=ae[pn];Q.update(Lc,ni),Q.bind(Lc,ni)}}return ni}function bg(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Eg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(y,D,G){const k=H.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(y.texture).__webglTexture=D,H.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:G,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){const G=H.get(y);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,G=0){Y=y,$=D,z=G;let k=null,V=!1,pt=!1;if(y){const ft=H.get(y);if(ft.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,ft.__webglFramebuffer),st.copy(y.viewport),_t.copy(y.scissor),Yt=y.scissorTest,v.viewport(st),v.scissor(_t),v.setScissorTest(Yt),tt=-1;return}else if(ft.__webglFramebuffer===void 0)W.setupRenderTarget(y);else if(ft.__hasExternalTextures)W.rebindTextures(y,H.get(y.texture).__webglTexture,H.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Dt=y.depthTexture;if(ft.__boundDepthTexture!==Dt){if(Dt!==null&&H.has(Dt)&&(y.width!==Dt.image.width||y.height!==Dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(y)}}const yt=y.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(pt=!0);const bt=H.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(bt[D])?k=bt[D][G]:k=bt[D],V=!0):y.samples>0&&W.useMultisampledRTT(y)===!1?k=H.get(y).__webglMultisampledFramebuffer:Array.isArray(bt)?k=bt[G]:k=bt,st.copy(y.viewport),_t.copy(y.scissor),Yt=y.scissorTest}else st.copy(Tt).multiplyScalar(et).floor(),_t.copy(de).multiplyScalar(et).floor(),Yt=Bt;if(G!==0&&(k=N),v.bindFramebuffer(I.FRAMEBUFFER,k)&&v.drawBuffers(y,k),v.viewport(st),v.scissor(_t),v.setScissorTest(Yt),V){const ft=H.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,G)}else if(pt){const ft=D;for(let yt=0;yt<y.textures.length;yt++){const bt=H.get(y.textures[yt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+yt,bt.__webglTexture,G,ft)}}else if(y!==null&&G!==0){const ft=H.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ft.__webglTexture,G)}tt=-1},this.readRenderTargetPixels=function(y,D,G,k,V,pt,vt,ft=0){if(!(y&&y.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt){v.bindFramebuffer(I.FRAMEBUFFER,yt);try{const bt=y.textures[ft],Dt=bt.format,Ot=bt.type;if(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ft),!w.textureFormatReadable(Dt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Ot)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-k&&G>=0&&G<=y.height-V&&I.readPixels(D,G,k,V,ct.convert(Dt),ct.convert(Ot),pt)}finally{const bt=Y!==null?H.get(Y).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,D,G,k,V,pt,vt,ft=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=H.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt)if(D>=0&&D<=y.width-k&&G>=0&&G<=y.height-V){v.bindFramebuffer(I.FRAMEBUFFER,yt);const bt=y.textures[ft],Dt=bt.format,Ot=bt.type;if(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ft),!w.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,pt.byteLength,I.STREAM_READ),I.readPixels(D,G,k,V,ct.convert(Dt),ct.convert(Ot),0);const ee=Y!==null?H.get(Y).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,ee);const fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await r0(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pt),I.deleteBuffer(Et),I.deleteSync(fe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,G=0){const k=Math.pow(2,-G),V=Math.floor(y.image.width*k),pt=Math.floor(y.image.height*k),vt=D!==null?D.x:0,ft=D!==null?D.y:0;W.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,vt,ft,V,pt),v.unbindTexture()},this.copyTextureToTexture=function(y,D,G=null,k=null,V=0,pt=0){let vt,ft,yt,bt,Dt,Ot,Et,ee,fe;const ue=y.isCompressedTexture?y.mipmaps[pt]:y.image;if(G!==null)vt=G.max.x-G.min.x,ft=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,bt=G.min.x,Dt=G.min.y,Ot=G.isBox3?G.min.z:0;else{const pe=Math.pow(2,-V);vt=Math.floor(ue.width*pe),ft=Math.floor(ue.height*pe),y.isDataArrayTexture?yt=ue.depth:y.isData3DTexture?yt=Math.floor(ue.depth*pe):yt=1,bt=0,Dt=0,Ot=0}k!==null?(Et=k.x,ee=k.y,fe=k.z):(Et=0,ee=0,fe=0);const ne=ct.convert(D.format),Fe=ct.convert(D.type);let gt;D.isData3DTexture?(W.setTexture3D(D,0),gt=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(W.setTexture2DArray(D,0),gt=I.TEXTURE_2D_ARRAY):(W.setTexture2D(D,0),gt=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Ye=v.getParameter(I.UNPACK_ROW_LENGTH),Xt=v.getParameter(I.UNPACK_IMAGE_HEIGHT),ni=v.getParameter(I.UNPACK_SKIP_PIXELS),Pi=v.getParameter(I.UNPACK_SKIP_ROWS),dn=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,ue.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),v.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),v.pixelStorei(I.UNPACK_SKIP_IMAGES,Ot);const rs=y.isDataArrayTexture||y.isData3DTexture,se=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const pe=H.get(y),fn=H.get(D),ae=H.get(pe.__renderTarget),pn=H.get(fn.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,ae.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let as=0;as<yt;as++)rs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(y).__webglTexture,V,Ot+as),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(D).__webglTexture,pt,fe+as)),I.blitFramebuffer(bt,Dt,vt,ft,Et,ee,vt,ft,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||H.has(y)){const pe=H.get(y),fn=H.get(D);v.bindFramebuffer(I.READ_FRAMEBUFFER,X),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,U);for(let ae=0;ae<yt;ae++)rs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pe.__webglTexture,V,Ot+ae):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,V),se?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,pt,fe+ae):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,pt),V!==0?I.blitFramebuffer(bt,Dt,vt,ft,Et,ee,vt,ft,I.COLOR_BUFFER_BIT,I.NEAREST):se?I.copyTexSubImage3D(gt,pt,Et,ee,fe+ae,bt,Dt,vt,ft):I.copyTexSubImage2D(gt,pt,Et,ee,bt,Dt,vt,ft);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else se?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(gt,pt,Et,ee,fe,vt,ft,yt,ne,Fe,ue.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(gt,pt,Et,ee,fe,vt,ft,yt,ne,ue.data):I.texSubImage3D(gt,pt,Et,ee,fe,vt,ft,yt,ne,Fe,ue):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pt,Et,ee,vt,ft,ne,Fe,ue.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pt,Et,ee,ue.width,ue.height,ne,ue.data):I.texSubImage2D(I.TEXTURE_2D,pt,Et,ee,vt,ft,ne,Fe,ue);v.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt),v.pixelStorei(I.UNPACK_SKIP_PIXELS,ni),v.pixelStorei(I.UNPACK_SKIP_ROWS,Pi),v.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),pt===0&&D.generateMipmaps&&I.generateMipmap(gt),v.unbindTexture()},this.initRenderTarget=function(y){H.get(y).__webglFramebuffer===void 0&&W.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?W.setTextureCube(y,0):y.isData3DTexture?W.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?W.setTexture2DArray(y,0):W.setTexture2D(y,0),v.unbindTexture()},this.resetState=function(){$=0,z=0,Y=null,v.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.15.1
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var nS=Object.defineProperty,ac=(i,t)=>{for(var e in t)nS(i,e,{get:t[e],enumerable:!0})},Gr={};ac(Gr,{ACTIONS:()=>vf,ANIMATION_MIN_DURATION:()=>Ch,CAPTURE_EVENTS_CLASS:()=>Yr,CTRLZOOM_TIMEOUT:()=>gf,DBLCLICK_DELAY:()=>ff,EASINGS:()=>io,ICONS:()=>Ai,IDS:()=>Ie,KEY_CODES:()=>Ce,LONGTOUCH_DELAY:()=>pf,MOVE_THRESHOLD:()=>df,SPHERE_RADIUS:()=>sn,TWOFINGERSOVERLAY_DELAY:()=>mf,VIEWER_DATA:()=>Fn});var sS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,rS='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',aS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,oS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,lS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,hS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,cS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,uS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,dS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Ch=500,df=4,ff=300,pf=500,mf=100,gf=2e3,sn=10,Fn="photoSphereViewer",Yr="psv--capture-event",vf=(i=>(i.ROTATE_UP="ROTATE_UP",i.ROTATE_DOWN="ROTATE_DOWN",i.ROTATE_RIGHT="ROTATE_RIGHT",i.ROTATE_LEFT="ROTATE_LEFT",i.ZOOM_IN="ZOOM_IN",i.ZOOM_OUT="ZOOM_OUT",i))(vf||{}),Ie={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Ce={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},Ai={arrow:sS,close:rS,download:aS,fullscreenIn:oS,fullscreenOut:lS,info:hS,menu:cS,zoomIn:uS,zoomOut:dS},io={linear:i=>i,inQuad:i=>i*i,outQuad:i=>i*(2-i),inOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,inCubic:i=>i*i*i,outCubic:i=>--i*i*i+1,inOutCubic:i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,inQuart:i=>i*i*i*i,outQuart:i=>1- --i*i*i*i,inOutQuart:i=>i<.5?8*i*i*i*i:1-8*--i*i*i*i,inQuint:i=>i*i*i*i*i,outQuint:i=>1+--i*i*i*i*i,inOutQuint:i=>i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i,inSine:i=>1-Math.cos(i*(Math.PI/2)),outSine:i=>Math.sin(i*(Math.PI/2)),inOutSine:i=>.5-.5*Math.cos(Math.PI*i),inExpo:i=>Math.pow(2,10*(i-1)),outExpo:i=>1-Math.pow(2,-10*i),inOutExpo:i=>(i=i*2-1)<0?.5*Math.pow(2,10*i):1-.5*Math.pow(2,-10*i),inCirc:i=>1-Math.sqrt(1-i*i),outCirc:i=>Math.sqrt(1-(i-1)*(i-1)),inOutCirc:i=>(i*=2)<1?.5-.5*Math.sqrt(1-i*i):.5+.5*Math.sqrt(1-(i-=2)*i)},zt={};ac(zt,{Animation:()=>mo,Dynamic:()=>Sr,MultiDynamic:()=>Vf,PressHandler:()=>Ao,Slider:()=>Gf,SliderDirection:()=>Hf,addClasses:()=>oc,angle:()=>xf,applyEulerInverse:()=>Dh,checkClosedShadowDom:()=>zf,checkStylesheet:()=>Of,checkVersion:()=>fc,cleanCssPosition:()=>Ff,clone:()=>Eo,createSizedTexture:()=>kf,createTexture:()=>Ih,cssPositionIsOrdered:()=>dc,dasherize:()=>vS,deepEqual:()=>If,deepmerge:()=>Pf,distance:()=>_f,exitFullscreen:()=>Cf,firstNonNull:()=>Ui,getAbortError:()=>Ph,getAngle:()=>Mf,getClosest:()=>bf,getConfigParser:()=>To,getElement:()=>Sf,getEventTarget:()=>co,getMatchingTarget:()=>Ef,getPosition:()=>wf,getShortestArc:()=>yf,getStyleProperty:()=>zi,getTouchData:()=>Rh,getXMPValue:()=>Qe,greatArcDistance:()=>pS,hasParent:()=>gS,invertResolvableBoolean:()=>wo,isAbortError:()=>Uf,isEmpty:()=>Lf,isExtendedPosition:()=>uc,isFullscreenEnabled:()=>Tf,isNil:()=>Re,isPlainObject:()=>hc,keyPressMatch:()=>lc,logWarn:()=>Pe,mergePanoData:()=>Bf,parseAngle:()=>An,parsePoint:()=>_S,parseSpeed:()=>Nf,removeClasses:()=>mS,requestFullscreen:()=>Af,resolveBoolean:()=>cc,speedToDuration:()=>Lh,sum:()=>fS,throttle:()=>Rf,toggleClass:()=>bo,wrap:()=>wr});function wr(i,t){let e=i%t;return e<0&&(e+=t),e}function fS(i){return i.reduce((t,e)=>t+e,0)}function _f(i,t){return Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2))}function xf(i,t){return Math.atan2(t.y-i.y,t.x-i.x)}function yf(i,t){return[0,Math.PI*2,-Math.PI*2].reduce((n,s)=>{const r=t-i+s;return Math.abs(r)<Math.abs(n)?r:n},1/0)}function Mf(i,t){return Math.acos(Math.cos(i.pitch)*Math.cos(t.pitch)*Math.cos(i.yaw-t.yaw)+Math.sin(i.pitch)*Math.sin(t.pitch))}function pS([i,t],[e,n]){i-e>Math.PI?i-=2*Math.PI:i-e<-Math.PI&&(i+=2*Math.PI);const s=(e-i)*Math.cos((t+n)/2),r=n-t;return Math.sqrt(s*s+r*r)}function Sf(i){return typeof i=="string"?i.match(/^[a-z]/i)?document.getElementById(i):document.querySelector(i):i}function bo(i,t,e){e===void 0?i.classList.toggle(t):e?i.classList.add(t):e||i.classList.remove(t)}function oc(i,t){i.classList.add(...t.split(" ").filter(e=>!!e))}function mS(i,t){i.classList.remove(...t.split(" ").filter(e=>!!e))}function gS(i,t){let e=i;do{if(e===t)return!0;e=e.parentElement}while(e);return!1}function bf(i,t){if(!(i!=null&&i.matches))return null;let e=i;do{if(e.matches(t))return e;e=e.parentElement}while(e);return null}function co(i){return(i==null?void 0:i.composedPath()[0])||null}function Ef(i,t){return i?i.composedPath().find(e=>!(e instanceof HTMLElement)&&!(e instanceof SVGElement)?!1:e.matches(t)):null}function wf(i){let t=0,e=0,n=i;for(;n;)t+=n.offsetLeft-n.scrollLeft+n.clientLeft,e+=n.offsetTop-n.scrollTop+n.clientTop,n=n.offsetParent;return t-=window.scrollX,e-=window.scrollY,{x:t,y:e}}function zi(i,t){return window.getComputedStyle(i).getPropertyValue(t)}function Rh(i){if(i.touches.length<2)return null;const t={x:i.touches[0].clientX,y:i.touches[0].clientY},e={x:i.touches[1].clientX,y:i.touches[1].clientY};return{distance:_f(t,e),angle:xf(t,e),center:{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}}var uo;function Tf(i,t=!1){return t?i===uo:document.fullscreenElement===i}function Af(i,t=!1){t?(uo=i,i.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):i.requestFullscreen()}function Cf(i=!1){i?(uo.classList.remove("psv-fullscreen-emulation"),uo=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function lc(i,t){let e,n=!1,s=!1,r=!1,a=!1;return t==="+"?e=t:t.split("+").forEach(o=>{switch(o){case"Shift":n=!0;break;case"Ctrl":s=!0;break;case"Alt":r=!0;break;case"Meta":a=!0;break;case"Space":e=" ";break;case"Plus":e="+";break;case"Minus":e="-";break;default:e=o;break}}),n===i.shiftKey&&s===i.ctrlKey&&r===i.altKey&&a===i.metaKey&&e===i.key}function vS(i){return i.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(t,e)=>(e>0?"-":"")+t.toLowerCase())}function Rf(i,t){let e=!1;return function(...n){e||(e=!0,setTimeout(()=>{i.apply(this,n),e=!1},t))}}function hc(i){if(typeof i!="object"||i===null||Object.prototype.toString.call(i)!=="[object Object]")return!1;if(Object.getPrototypeOf(i)===null)return!0;let t=i;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(i)===t}function Pf(i,t){const e=t;return(function n(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=n(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{a!=="__proto__"&&(typeof r[a]!="object"||!r[a]||!hc(r[a])?s[a]=r[a]:r[a]!==e&&(s[a]?n(s[a],r[a]):s[a]=n(null,r[a])))})):s=r,s})(i,t)}function Eo(i){return Pf(null,i)}function Lf(i){return!i||Object.keys(i).length===0&&i.constructor===Object}function Re(i){return i==null}function Ui(...i){for(const t of i)if(!Re(t))return t;return null}function If(i,t){if(i===t)return!0;if(Fu(i)&&Fu(t)){if(Object.keys(i).length!==Object.keys(t).length)return!1;for(const e of Object.keys(i))if(!If(i[e],t[e]))return!1;return!0}else return!1}function Fu(i){return typeof i=="object"&&i!==null}var Rt=class Df extends Error{constructor(t,e){var n;super(e&&e instanceof Error?`${t}: ${e.message}`:t),this.name="PSVError",(n=Error.captureStackTrace)==null||n.call(Error,this,Df)}};function cc(i,t){hc(i)?(t(i.initial,!0),i.promise.then(e=>t(e,!1))):t(i,!0)}function wo(i){return{initial:!i.initial,promise:i.promise.then(t=>!t)}}function Ph(){const i=new Error("Loading was aborted.");return i.name="AbortError",i}function Uf(i){return(i==null?void 0:i.name)==="AbortError"}function Pe(i){console.warn(`PhotoSphereViewer: ${i}`)}function uc(i){return!i||Array.isArray(i)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([t,e])=>i[t]!==void 0&&i[e]!==void 0)}function Qe(i,t,e=!0){let n=i.match("<GPano:"+t+">(.*)</GPano:"+t+">");if(n!==null){const s=e?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}if(n=i.match("GPano:"+t+'="(.*?)"'),n!==null){const s=e?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}return null}var Nu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fo=["left","center","right"],po=["top","center","bottom"],Ou=[...fo,...po],ai="center";function _S(i){if(!i)return{x:.5,y:.5};if(typeof i=="object")return i;let t=i.toLocaleLowerCase().split(" ").slice(0,2);t.length===1&&(Nu[t[0]]?t=[t[0],ai]:t=[t[0],t[0]]);const e=t[1]!=="left"&&t[1]!=="right"&&t[0]!=="top"&&t[0]!=="bottom";t=t.map(s=>Nu[s]||s),e||t.reverse();const n=t.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return n?{x:parseFloat(n[1])/100,y:parseFloat(n[2])/100}:{x:.5,y:.5}}function Ff(i,{allowCenter:t,cssOrder:e}={allowCenter:!0,cssOrder:!0}){return i?(typeof i=="string"&&(i=i.split(" ")),i.length===1&&(i[0]===ai?i=[ai,ai]:fo.indexOf(i[0])!==-1?i=[ai,i[0]]:po.indexOf(i[0])!==-1&&(i=[i[0],ai])),i.length!==2||Ou.indexOf(i[0])===-1||Ou.indexOf(i[1])===-1?(Pe(`Unparsable position ${i}`),null):!t&&i[0]===ai&&i[1]===ai?(Pe("Invalid position center center"),null):(e&&!dc(i)&&(i=[i[1],i[0]]),i[1]===ai&&fo.indexOf(i[0])!==-1&&(i=[ai,i[0]]),i[0]===ai&&po.indexOf(i[1])!==-1&&(i=[i[1],ai]),i)):null}function dc(i){return po.indexOf(i[0])!==-1&&fo.indexOf(i[1])!==-1}function Nf(i){let t;if(typeof i=="string"){const e=i.toString().trim();let n=parseFloat(e.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=e.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(n/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":t=$t.degToRad(n);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":t=n;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":t=n*Math.PI*2;break;default:throw new Rt(`Unknown speed unit "${s}"`)}}else t=i;return t}function Lh(i,t){if(typeof i!="number"){const e=Nf(i);return t/Math.abs(e)*1e3}else return Math.abs(i)}function An(i,t=!1,e=t){let n;if(typeof i=="string"){const s=i.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new Rt(`Unknown angle "${i}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":n=$t.degToRad(r);break;case"rad":case"rads":n=r;break;default:throw new Rt(`Unknown angle unit "${a}"`)}else n=r}else if(typeof i=="number"&&!isNaN(i))n=i;else throw new Rt(`Unknown angle "${i}"`);return n=wr(t?n+Math.PI:n,Math.PI*2),t?$t.clamp(n-Math.PI,-Math.PI/(e?2:1),Math.PI/(e?2:1)):n}function To(i,t){const e=function(n){const s=Eo({...i,...n}),r={};for(let[a,o]of Object.entries(s)){if(t&&a in t)o=t[a](o,{rawConfig:s,defValue:i[a]});else if(!(a in i)){Pe(`Unknown option ${a}`);continue}r[a]=o}return r};return e.defaults=i,e.parsers=t||{},e}function Of(i,t){zi(i,`--psv-${t}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${t}/index.css" is not loaded`)}function fc(i,t,e){t&&t!==e&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${i} is in version ${t} but @photo-sphere-viewer/core is in version ${e}`)}function zf(i){do{if(i instanceof ShadowRoot&&i.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}i=i.parentNode}while(i)}function Bf(i,t,e,n){const s={isEquirectangular:!0,fullWidth:Ui(e==null?void 0:e.fullWidth,n==null?void 0:n.fullWidth),fullHeight:Ui(e==null?void 0:e.fullHeight,n==null?void 0:n.fullHeight),croppedWidth:Ui(e==null?void 0:e.croppedWidth,n==null?void 0:n.croppedWidth,i),croppedHeight:Ui(e==null?void 0:e.croppedHeight,n==null?void 0:n.croppedHeight,t),croppedX:Ui(e==null?void 0:e.croppedX,n==null?void 0:n.croppedX),croppedY:Ui(e==null?void 0:e.croppedY,n==null?void 0:n.croppedY),poseHeading:Ui(e==null?void 0:e.poseHeading,n==null?void 0:n.poseHeading,0),posePitch:Ui(e==null?void 0:e.posePitch,n==null?void 0:n.posePitch,0),poseRoll:Ui(e==null?void 0:e.poseRoll,n==null?void 0:n.poseRoll,0),initialHeading:n==null?void 0:n.initialHeading,initialPitch:n==null?void 0:n.initialPitch,initialFov:n==null?void 0:n.initialFov};if(s.croppedWidth!==i){const r=i/s.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(a=>{s[a]&&(s[a]=Math.round(s[a]*r))})}return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(s.croppedWidth,s.croppedHeight*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-i)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-t)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(Pe("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(Pe("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(Pe("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(Pe("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(Pe("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var pr=`${Fn}_touchSupport`,Ge={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=MS(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const i=xS();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!i,this.maxTextureWidth=i?i.getParameter(i.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=yS(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Ge.isWebGLSupported)throw new Rt("WebGL 2 is not supported.");if(Ge.maxTextureWidth===0)throw new Rt("Unable to detect system capabilities")}};function xS(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function yS(){let i="ontouchstart"in window||navigator.maxTouchPoints>0;pr in localStorage&&(i=localStorage[pr]==="true");const t=new Promise(e=>{const n=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{n(),localStorage[pr]=!1,e(!1)},r=()=>{n(),localStorage[pr]=!0,e(!0)},a=()=>{n(),localStorage[pr]=i,e(i)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:i,promise:t}}function MS(i){let t=i,e=!1;const n=document.createElement("canvas"),s=n.getContext("2d");for(n.width=1,n.height=1;t>1024&&!e;){const r=document.createElement("canvas"),a=r.getContext("2d");r.width=t,r.height=t/2;try{a.fillStyle="white",a.fillRect(t-1,t/2-1,1,1),s.drawImage(r,t-1,t/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(e=!0)}catch{}r.width=0,r.height=0,e||(t/=2)}if(e)return t;throw new Rt("Unable to detect system capabilities")}function Ih(i,t=!1){const e=new di(i);return e.needsUpdate=!0,e.minFilter=t?Cn:Ue,e.generateMipmaps=t,e.anisotropy=t?2:1,e}function kf(i,t){if(t||i.width>Ge.maxTextureWidth){const e=Math.min(1,Ge.maxCanvasWidth/i.width),n=new OffscreenCanvas(Math.floor(i.width*e),Math.floor(i.height*e)),s=n.getContext("2d");return t&&(s.filter=`blur(${n.width/t.factor}px)`),s.drawImage(i,0,0,n.width,n.height),Ih(n)}return Ih(i)}var zu=new ns;function Dh(i,t){zu.setFromEuler(t).invert(),i.applyQuaternion(zu)}var mo=class{constructor(i){this.easing=io.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=i,i?(i.easing&&(this.easing=typeof i.easing=="function"?i.easing:io[i.easing]||io.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(t=>this.__run(t))},i.delay||0)):this.resolved=!0}__run(i){if(this.cancelled)return;this.start||(this.start=i);const t=(i-this.start)/this.options.duration,e={};if(t<1){for(const[n,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(t);e[n]=r}this.options.onTick(e,t),this.animationFrame=window.requestAnimationFrame(n=>this.__run(n))}else{for(const[n,s]of Object.entries(this.options.properties))s&&(e[n]=s.end);this.options.onTick(e,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(i){i?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(t=>t(i)),this.callbacks.length=0}then(i){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(i):new Promise(t=>{this.callbacks.push(t)}).then(i)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},Sr=class{constructor(i,t){if(this.fn=i,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=t.min,this.max=t.max,this.wrap=t.wrap,this.current=t.defaultValue,this.wrap&&this.min!==0)throw new Rt("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(i){this.__current=i}setSpeed(i){this.speed=i}goto(i,t=1){this.mode=2,this.target=this.wrap?wr(i,this.max):$t.clamp(i,this.min,this.max),this.speedMult=t}step(i,t=1){t===0?this.setValue(this.current+i):(this.mode!==2&&(this.target=this.current),this.goto(this.target+i,t))}roll(i=!1,t=1){this.mode=1,this.target=i?-1/0:1/0,this.speedMult=t}stop(){this.mode=0}setValue(i){return this.target=this.wrap?wr(i,this.max):$t.clamp(i,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(i){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const n=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=n&&(this.mode=0)}let t=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(t=-t),this.currentSpeed<t?this.currentSpeed=Math.min(t,this.currentSpeed+i/1e3*this.speed*this.speedMult*2):this.currentSpeed>t&&(this.currentSpeed=Math.max(t,this.currentSpeed-i/1e3*this.speed*this.speedMult*2));let e=null;return this.current>this.target&&this.currentSpeed?e=Math.max(this.target,this.current+this.currentSpeed*i/1e3):this.current<this.target&&this.currentSpeed&&(e=Math.min(this.target,this.current+this.currentSpeed*i/1e3)),e!==null&&(e=this.wrap?wr(e,this.max):$t.clamp(e,this.min,this.max),e!==this.current)?(this.current=e,this.fn&&this.fn(this.current),!0):!1}},Vf=class{constructor(i,t){this.fn=i,this.dynamics=t,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((i,[t,e])=>(i[t]=e.current,i),{})}setSpeed(i){for(const t of Object.values(this.dynamics))t.setSpeed(i)}goto(i,t=1){for(const[e,n]of Object.entries(i))this.dynamics[e].goto(n,t)}step(i,t=1){if(t===0)this.setValue(Object.keys(i).reduce((e,n)=>(e[n]=i[n]+this.dynamics[n].current,e),{}));else for(const[e,n]of Object.entries(i))this.dynamics[e].step(n,t)}roll(i,t=1){for(const[e,n]of Object.entries(i))this.dynamics[e].roll(n,t)}stop(){for(const i of Object.values(this.dynamics))i.stop()}setValue(i){let t=!1;for(const[e,n]of Object.entries(i))t=this.dynamics[e].setValue(n)||t;return t&&this.fn&&this.fn(this.current),t}update(i){let t=!1;for(const e of Object.values(this.dynamics))t=e.update(i)||t;return t&&this.fn&&this.fn(this.current),t}},Ao=class{constructor(i=200){this.delay=i,this.time=0,this.delay=i}get pending(){return this.time!==0}down(i){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=i}up(i){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{i(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(i(this.data),this.time=0,this.data=void 0)}},Hf=(i=>(i.VERTICAL="VERTICAL",i.HORIZONTAL="HORIZONTAL",i))(Hf||{}),Gf=class{constructor(i,t,e){this.container=i,this.direction=t,this.listener=e,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(i){switch(i.type){case"click":i.stopPropagation();break;case"mousedown":this.__onMouseDown(i);break;case"mouseenter":this.__onMouseEnter(i);break;case"mouseleave":this.__onMouseLeave(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break}}__onMouseDown(i){this.mousedown=!0,this.__update(i.clientX,i.clientY,!0)}__onMouseEnter(i){this.mouseover=!0,this.__update(i.clientX,i.clientY,!0)}__onTouchStart(i){this.mouseover=!0,this.mousedown=!0;const t=i.changedTouches[0];this.__update(t.clientX,t.clientY,!0)}__onMouseMove(i){(this.mousedown||this.mouseover)&&(i.stopPropagation(),this.__update(i.clientX,i.clientY,!0))}__onTouchMove(i){if(this.mousedown||this.mouseover){i.stopPropagation();const t=i.changedTouches[0];this.__update(t.clientX,t.clientY,!0)}}__onMouseUp(i){this.mousedown&&(this.mousedown=!1,this.__update(i.clientX,i.clientY,!1))}__onMouseLeave(i){this.mouseover&&(this.mouseover=!1,this.__update(i.clientX,i.clientY,!0))}__onTouchEnd(i){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const t=i.changedTouches[0];this.__update(t.clientX,t.clientY,!1)}}__update(i,t,e){const n=this.container.getBoundingClientRect();let s;this.isVertical?s=$t.clamp((n.bottom-t)/n.height,0,1):s=$t.clamp((i-n.left)/n.width,0,1),this.listener({value:s,click:!e,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:i,clientY:t}})}},Ft={};ac(Ft,{BeforeAnimateEvent:()=>pc,BeforeRenderEvent:()=>Tr,BeforeRotateEvent:()=>jf,ClickEvent:()=>ep,ConfigChangedEvent:()=>qe,DoubleClickEvent:()=>ap,FullscreenEvent:()=>Ar,HideNotificationEvent:()=>Cr,HideOverlayEvent:()=>fp,HidePanelEvent:()=>Ln,HideTooltipEvent:()=>_p,KeypressEvent:()=>In,LoadProgressEvent:()=>bp,ObjectEnterEvent:()=>lm,ObjectEvent:()=>Co,ObjectHoverEvent:()=>fm,ObjectLeaveEvent:()=>Uh,PanoramaErrorEvent:()=>Lp,PanoramaLoadEvent:()=>Tp,PanoramaLoadedEvent:()=>Gs,PositionUpdatedEvent:()=>Rr,ReadyEvent:()=>Lr,RenderEvent:()=>Gp,RollUpdatedEvent:()=>Pr,ShowNotificationEvent:()=>Ir,ShowOverlayEvent:()=>Yp,ShowPanelEvent:()=>Dn,ShowTooltipEvent:()=>Qp,SizeUpdatedEvent:()=>Dr,StopAllEvent:()=>Ur,TransitionDoneEvent:()=>Up,ViewerEvent:()=>jt,ZoomUpdatedEvent:()=>rn});var Wf=class extends Event{constructor(i,t=!1){super(i,{cancelable:t})}},Xf=class extends EventTarget{dispatchEvent(i){return super.dispatchEvent(i)}addEventListener(i,t,e){super.addEventListener(i,t,e)}removeEventListener(i,t,e){super.removeEventListener(i,t,e)}},jt=class extends Wf{},$f=class qf extends jt{constructor(t,e){super(qf.type,!0),this.position=t,this.zoomLevel=e}};$f.type="before-animate";var pc=$f,Yf=class Zf extends jt{constructor(t,e){super(Zf.type),this.timestamp=t,this.elapsed=e}};Yf.type="before-render";var Tr=Yf,Kf=class Jf extends jt{constructor(t){super(Jf.type,!0),this.position=t}};Kf.type="before-rotate";var jf=Kf,Qf=class tp extends jt{constructor(t){super(tp.type),this.data=t}};Qf.type="click";var ep=Qf,ip=class np extends jt{constructor(t){super(np.type),this.options=t}containsOptions(...t){return t.some(e=>this.options.includes(e))}};ip.type="config-changed";var qe=ip,sp=class rp extends jt{constructor(t){super(rp.type),this.data=t}};sp.type="dblclick";var ap=sp,op=class lp extends jt{constructor(t){super(lp.type),this.fullscreenEnabled=t}};op.type="fullscreen";var Ar=op,hp=class cp extends jt{constructor(t){super(cp.type),this.notificationId=t}};hp.type="hide-notification";var Cr=hp,up=class dp extends jt{constructor(t){super(dp.type),this.overlayId=t}};up.type="hide-overlay";var fp=up,pp=class mp extends jt{constructor(t){super(mp.type),this.panelId=t}};pp.type="hide-panel";var Ln=pp,gp=class vp extends jt{constructor(t){super(vp.type),this.tooltipData=t}};gp.type="hide-tooltip";var _p=gp,xp=class yp extends jt{constructor(t,e){super(yp.type,!0),this.key=t,this.originalEvent=e}matches(t){return lc(this.originalEvent,t)}};xp.type="key-press";var In=xp,Mp=class Sp extends jt{constructor(t){super(Sp.type),this.progress=t}};Mp.type="load-progress";var bp=Mp,Ep=class wp extends jt{constructor(t){super(wp.type),this.panorama=t}};Ep.type="panorama-load";var Tp=Ep,Ap=class Cp extends jt{constructor(t){super(Cp.type),this.data=t}};Ap.type="panorama-loaded";var Gs=Ap,Rp=class Pp extends jt{constructor(t,e){super(Pp.type),this.panorama=t,this.error=e}};Rp.type="panorama-error";var Lp=Rp,Ip=class Dp extends jt{constructor(t){super(Dp.type),this.completed=t}};Ip.type="transition-done";var Up=Ip,Fp=class Np extends jt{constructor(t){super(Np.type),this.position=t}};Fp.type="position-updated";var Rr=Fp,Op=class zp extends jt{constructor(t){super(zp.type),this.roll=t}};Op.type="roll-updated";var Pr=Op,Bp=class kp extends jt{constructor(){super(kp.type)}};Bp.type="ready";var Lr=Bp,Vp=class Hp extends jt{constructor(){super(Hp.type)}};Vp.type="render";var Gp=Vp,Wp=class Xp extends jt{constructor(t){super(Xp.type),this.notificationId=t}};Wp.type="show-notification";var Ir=Wp,$p=class qp extends jt{constructor(t){super(qp.type),this.overlayId=t}};$p.type="show-overlay";var Yp=$p,Zp=class Kp extends jt{constructor(t){super(Kp.type),this.panelId=t}};Zp.type="show-panel";var Dn=Zp,Jp=class jp extends jt{constructor(t,e){super(jp.type),this.tooltip=t,this.tooltipData=e}};Jp.type="show-tooltip";var Qp=Jp,tm=class em extends jt{constructor(t){super(em.type),this.size=t}};tm.type="size-updated";var Dr=tm,im=class nm extends jt{constructor(){super(nm.type)}};im.type="stop-all";var Ur=im,sm=class rm extends jt{constructor(t){super(rm.type),this.zoomLevel=t}};sm.type="zoom-updated";var rn=sm,Co=class extends jt{constructor(i,t,e,n,s){super(i),this.originalEvent=t,this.object=e,this.viewerPoint=n,this.userDataKey=s}},am=class om extends Co{constructor(t,e,n,s){super(om.type,t,e,n,s)}};am.type="enter-object";var lm=am,hm=class cm extends Co{constructor(t,e,n,s){super(cm.type,t,e,n,s)}};hm.type="leave-object";var Uh=hm,um=class dm extends Co{constructor(t,e,n,s){super(dm.type,t,e,n,s)}};um.type="hover-object";var fm=um,mc=class{constructor(i){this.viewer=i}init(){}destroy(){}supportsTransition(i){return!1}supportsPreload(i){return!1}textureCoordsToSphericalCoords(i,t){throw new Rt("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(i,t){throw new Rt("Current adapter does not support texture coordinates.")}};mc.supportsDownload=!1;function Bu(i){if(i){for(const[,t]of[["_",i],...Object.entries(i)])if(t.prototype instanceof mc)return fc(t.id,t.VERSION,"5.15.1"),t}return null}var SS=`varying vec3 vLocalPos;
varying vec3 vLocalCam;
uniform sampler2D map;
uniform float opacity;
uniform vec2 uvOffset;
uniform vec2 uvScale;
uniform float radius;

const float PI = 3.1415926535897932384626433832795;

// Analytic edge antialiasing across one screen-space pixel at the
// cropped-region boundary on a single axis (replaces the MSAA the standard
// adapter gets by rendering triangles).
float edgeAlpha(float coord, float width) {
    float dist = min(coord, 1.0 - coord);
    return clamp(dist / width + 0.5, 0.0, 1.0);
}

// Screen-space derivative (fwidth) of a coordinate that wraps in [0, 1], such
// as longitude at the antimeridian. A naive fwidth() spikes to ~1.0 across the
// seam. Removing the integer jump keeps the result sub-pixel. Assumes the
// per-pixel change stays well under 0.5, so only the wrap rounds to a non-zero
// integer (safe unless a pixel spans ~180deg of longitude).
float fwidthWrapped(float coord) {
    float dx = dFdx(coord); dx -= floor(dx + 0.5);
    float dy = dFdy(coord); dy -= floor(dy + 0.5);
    return abs(dx) + abs(dy);
}

void main() {
    // Ray-cast the true sphere from the camera through the (interpolated, on
    // the polygon chord) position, and use the exit-point direction for
    // sampling. This makes the result independent of mesh tessellation even
    // when the camera is offset from the sphere center (e.g. fisheye config).
    // Inputs are already in the panorama's local frame (see vertex shader), so
    // the exit direction is too and needs no further rotation.
    vec3 rayDir = vLocalPos - vLocalCam;
    float a = dot(rayDir, rayDir);
    float b = dot(vLocalCam, rayDir);
    float c = dot(vLocalCam, vLocalCam) - radius * radius;
    float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
    vec3 dir = (vLocalCam + t * rayDir) / radius;

    float u = atan(-dir.x, dir.z) / (2.0 * PI) + 0.5;
    float v = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;
    vec2 uv = (vec2(u, v) - uvOffset) / uvScale;

    float alpha = 1.0;
    // \`u\` wraps at the antimeridian, so derive its width safely.
    if (uvScale.x < 1.0) alpha = min(alpha, edgeAlpha(uv.x, fwidthWrapped(u) / uvScale.x));
    if (uvScale.y < 1.0) alpha = min(alpha, edgeAlpha(uv.y, fwidth(uv.y)));
    if (alpha <= 0.0) discard;

    gl_FragColor = texture2D(map, uv);
    gl_FragColor.a *= opacity * alpha;
}
`,bS=`// Ray-cast inputs in the panorama's local frame, so sphereCorrection and pose
// (both folded into modelMatrix) apply to the sampled direction without
// per-fragment work.
varying vec3 vLocalPos;
varying vec3 vLocalCam;

void main() {
    vLocalPos = position;

    // mat3(modelMatrix) is a pure rotation, so its inverse is its transpose:
    // \`cameraPosition * M == transpose(M) * cameraPosition\`.
    vLocalCam = cameraPosition * mat3(modelMatrix);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ES=To({shader:!1,resolution:64,useXmpData:!0},{resolution:i=>{if(!i||!$t.isPowerOfTwo(i))throw new Rt("EquirectangularAdapter resolution must be power of two.");return i}}),Ro=class pm extends mc{static withConfig(t){return[pm,t]}constructor(t,e){super(t),this.config=ES(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(t,e){if(Re(t.textureX)||Re(t.textureY))throw new Rt("Texture position is missing 'textureX' or 'textureY'");const n=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,s=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(t,e){const n=t.yaw/Math.PI/2*e.fullWidth,s=t.pitch/Math.PI*e.fullHeight;let r=Math.round(t.yaw<Math.PI?n+e.fullWidth/2:n-e.fullWidth/2)-e.croppedX,a=Math.round(e.fullHeight/2-s)-e.croppedY;return(r<0||r>e.croppedWidth||a<0||a>e.croppedHeight)&&(r=a=void 0),{textureX:r,textureY:a}}async loadTexture(t,e=!0,n,s=this.config.useXmpData){if(typeof t!="string"&&(typeof t!="object"||!t.path))return Promise.reject(new Rt("Invalid panorama url, are you using the right adapter?"));let r;typeof t=="string"?r={path:t,data:n}:r={data:n,...t};const a=await this.viewer.textureLoader.loadFile(r.path,e?d=>this.viewer.textureLoader.dispatchProgress(d):null,r.path),o=s?await this.loadXMP(a):null,l=await this.viewer.textureLoader.blobToImage(a);typeof r.data=="function"&&(r.data=r.data(l,o));const h=Bf(l.width,l.height,r.data,o),c=kf(l,r.blur?{factor:2048}:null);return{panorama:t,texture:c,panoData:h,cacheKey:r.path}}async loadXMP(t){const e=await this.loadBlobAsString(t),n=e.indexOf("<x:xmpmeta");if(n===-1)return null;const s=e.indexOf("</x:xmpmeta>",n);if(s===-1)return null;const r=e.substring(n,s);return r.includes("GPano:")?{fullWidth:Qe(r,"FullPanoWidthPixels"),fullHeight:Qe(r,"FullPanoHeightPixels"),croppedWidth:Qe(r,"CroppedAreaImageWidthPixels"),croppedHeight:Qe(r,"CroppedAreaImageHeightPixels"),croppedX:Qe(r,"CroppedAreaLeftPixels"),croppedY:Qe(r,"CroppedAreaTopPixels"),poseHeading:Qe(r,"PoseHeadingDegrees",!1),posePitch:Qe(r,"PosePitchDegrees",!1),poseRoll:Qe(r,"PoseRollDegrees",!1),initialHeading:Qe(r,"InitialViewHeadingDegrees",!1),initialPitch:Qe(r,"InitialViewPitchDegrees",!1),initialFov:Qe(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(t){return new Promise((e,n)=>{const s=new FileReader;s.onload=()=>e(s.result),s.onerror=n,s.readAsText(t)})}createMesh(t){if(this.config.shader){const e=new tr(sn,32,16).scale(-1,1,1),n={map:{value:null},opacity:{value:1},radius:{value:sn},uvOffset:{value:new qt(t.croppedX/t.fullWidth,(t.fullHeight-t.croppedY-t.croppedHeight)/t.fullHeight)},uvScale:{value:new qt(t.croppedWidth/t.fullWidth,t.croppedHeight/t.fullHeight)}},s=new Ti({uniforms:n,vertexShader:bS,fragmentShader:SS,depthTest:!1,depthWrite:!1,transparent:!0});return new ii(e,s)}else{const e=t.croppedX/t.fullWidth*2*Math.PI,n=t.croppedWidth/t.fullWidth*2*Math.PI,s=t.croppedY/t.fullHeight*Math.PI,r=t.croppedHeight/t.fullHeight*Math.PI,a=new tr(sn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*n),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+e,n,s,r).scale(-1,1,1),o=new $r({depthTest:!1,depthWrite:!1});return new ii(a,o)}}setTexture(t,e){this.config.shader?t.material.uniforms.map.value=e.texture:t.material.map=e.texture}setTextureOpacity(t,e){this.config.shader?t.material.uniforms.opacity.value=e:(t.material.opacity=e,t.material.transparent=e<1)}disposeTexture({texture:t}){t.dispose()}disposeMesh(t){t.geometry.dispose(),t.material.dispose()}};Ro.id="equirectangular";Ro.VERSION="5.15.1";Ro.supportsDownload=!0;var mm=Ro,gm=class vm extends mm{static withConfig(t){return[vm,t]}constructor(t,e){super(t,{resolution:(e==null?void 0:e.resolution)??64,useXmpData:!1}),Pe('"DualFisheyeAdapter" must be imported from "@photo-sphere-viewer/dual-fisheye-adapter" package')}async loadTexture(t,e){const n=await super.loadTexture(t,e,null,!1);return n.panoData=null,n}createMesh(){const t=new tr(sn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),e=t.getAttribute("uv"),n=t.getAttribute("normal");for(let r=0;r<e.count;r++)for(let a=0;a<3;a++){const o=r*3+a,l=n.getX(o),h=n.getY(o),c=n.getZ(o),d=.947;if(r<e.count/6){const u=l===0&&c===0?1:Math.acos(h)/Math.sqrt(l*l+c*c)*(2/Math.PI);e.setXY(o,l*(d/4)*u+1/4,c*(d/2)*u+1/2)}else{const u=l===0&&c===0?1:Math.acos(-h)/Math.sqrt(l*l+c*c)*(2/Math.PI);e.setXY(o,-l*(d/4)*u+3/4,c*(d/2)*u+1/2)}}t.rotateX(-Math.PI/2),t.rotateY(Math.PI);const s=new $r({depthTest:!1,depthWrite:!1});return new ii(t,s)}};gm.id="dual-fisheye";gm.VERSION="5.15.1";var ss=class _m{constructor(t,e){this.parent=t,this.children=[],this.state={visible:!0},this.viewer=t instanceof _m?t.viewer:t,this.container=document.createElement(e.tagName??"div"),this.container.className=e.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const t=this.parent.children.indexOf(this);t!==-1&&this.parent.children.splice(t,1),this.children.slice().forEach(e=>e.destroy()),this.children.length=0}toggle(t=!this.isVisible()){t?this.show():this.hide()}hide(t){this.container.style.display="none",this.state.visible=!1}show(t){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},wS=To({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),We=class extends ss{constructor(i,t){super(i,{tagName:t.tagName,className:`psv-button ${t.hoverScale?"psv-button--hover-scale":""} ${t.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=wS(t),t.id||(this.config.id=this.constructor.id),t.icon&&this.__setIcon(t.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),t.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",e=>{this.state.enabled&&this.onClick(),e.stopPropagation()}),this.container.addEventListener("keydown",e=>{e.key===Ce.Enter&&this.state.enabled&&(this.onClick(),e.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(i=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),i&&this.viewer.navbar.autoSize())}hide(i=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",i&&this.viewer.navbar.autoSize())}checkSupported(){cc(this.isSupported(),(i,t)=>{this.state&&(this.state.supported=i,t?i||this.hide():this.toggle(i))})}autoSize(){}isSupported(){return!0}toggleActive(i=!this.state.active){i!==this.state.active&&(this.state.active=i,bo(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(i){this.container.innerHTML=i,oc(this.container.querySelector("svg"),"psv-button-svg")}},TS=class extends We{constructor(i,t){var e,n;super(i,{id:t.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${t.className||""}`,hoverScale:!1,collapsable:t.collapsable!==!1,tabbable:t.tabbable!==!1,title:t.title}),this.customOnClick=t.onClick,t.content&&(typeof t.content=="string"?this.container.innerHTML=t.content:(this.container.classList.add("psv-custom-button--no-padding"),t.content.style.height="100%",(n=(e=t.content).attachViewer)==null||n.call(e,this.viewer),this.container.appendChild(t.content))),this.state.width=this.container.offsetWidth,t.disabled&&this.disable(),t.visible===!1&&this.hide()}onClick(){var i;(i=this.customOnClick)==null||i.call(this,this.viewer)}},Wr=class extends We{constructor(i){super(i,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Ai.info}),this.mode=0,this.viewer.addEventListener(Cr.type,this),this.viewer.addEventListener(Ir.type,this),this.viewer.addEventListener(Ln.type,this),this.viewer.addEventListener(Dn.type,this),this.viewer.addEventListener(qe.type,this)}destroy(){this.viewer.removeEventListener(Cr.type,this),this.viewer.removeEventListener(Ir.type,this),this.viewer.removeEventListener(Ln.type,this),this.viewer.removeEventListener(Dn.type,this),this.viewer.removeEventListener(qe.type,this),super.destroy()}handleEvent(i){if(i instanceof qe){i.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let t=!1;i instanceof Cr?t=this.mode===1:i instanceof Ir?t=this.mode===1&&i.notificationId!==Ie.DESCRIPTION:i instanceof Ln?t=this.mode===2:i instanceof Dn&&(t=this.mode===2&&i.panelId!==Ie.DESCRIPTION),t&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(i){super.hide(i),this.mode&&this.__close()}autoSize(i=!1){if(i){const t=this.viewer.navbar.getButton("caption",!1),e=t&&!t.isVisible(),n=!!this.viewer.config.description;e||n?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(Ie.DESCRIPTION);break;case 2:this.viewer.panel.hide(Ie.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:Ie.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:Ie.DESCRIPTION,content:this.viewer.config.caption}))}};Wr.id="description";var xm=class extends We{constructor(i){super(i,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Ai.download}),this.viewer.addEventListener(qe.type,this),this.viewer.addEventListener(Gs.type,this)}destroy(){this.viewer.removeEventListener(qe.type,this),this.viewer.removeEventListener(Gs.type,this),super.destroy()}handleEvent(i){i instanceof qe?(i.containsOptions("downloadUrl")&&this.checkSupported(),i.containsOptions("downloadUrl","downloadName")&&this.__update()):i instanceof Gs&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const i=this.container;i.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,i.target="_blank",i.href.startsWith("data:")&&!this.viewer.config.downloadName?i.download="panorama."+i.href.substring(0,i.href.indexOf(";")).split("/").pop():i.download=this.viewer.config.downloadName||i.href.split("/").pop()}};xm.id="download";var ym=class extends We{constructor(i){super(i,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Ai.fullscreenIn,iconActive:Ai.fullscreenOut}),this.viewer.addEventListener(Ar.type,this)}destroy(){this.viewer.removeEventListener(Ar.type,this),super.destroy()}handleEvent(i){i instanceof Ar&&this.toggleActive(i.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};ym.id="fullscreen";var AS="psvButton",CS=(i,t)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${Ai.menu} ${t}</h1>
  <ul class="psv-panel-menu-list">
    ${i.map(e=>`
    <li data-psv-button="${e.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${e.content}</span>
      <span class="psv-panel-menu-item-label">${e.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,no=class extends We{constructor(i){super(i,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Ai.menu}),this.viewer.addEventListener(Dn.type,this),this.viewer.addEventListener(Ln.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Dn.type,this),this.viewer.removeEventListener(Ln.type,this),super.destroy()}handleEvent(i){i instanceof Dn?this.toggleActive(i.panelId===Ie.MENU):i instanceof Ln&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(i){super.hide(i),this.__hideMenu()}show(i){super.show(i),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:Ie.MENU,content:CS(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:i=>{const t=i?bf(i,".psv-panel-menu-item"):void 0,e=t?t.dataset[AS]:void 0;e&&(this.viewer.navbar.getButton(e).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(Ie.MENU)}};no.id="menu";function RS(i){let t;switch(i){case 0:t=90;break;case 1:t=-90;break;case 3:t=180;break;default:t=0;break}return Ai.arrow.replace("rotate(0",`rotate(${t}`)}var Zr=class extends We{constructor(i,t){super(i,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:RS(t)}),this.direction=t,this.handler=new Ao,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===Ce.Enter&&this.__onMouseDown();break;case"keyup":i.key===Ce.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return wo(Ge.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const i={};switch(this.direction){case 0:i.pitch=!1;break;case 1:i.pitch=!0;break;case 3:i.yaw=!1;break;default:i.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(i),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Zr.groupId="move";var Mm=class extends Zr{constructor(i){super(i,1)}};Mm.id="moveDown";var Sm=class extends Zr{constructor(i){super(i,2)}};Sm.id="moveLeft";var bm=class extends Zr{constructor(i){super(i,3)}};bm.id="moveRight";var Em=class extends Zr{constructor(i){super(i,0)}};Em.id="moveUp";var gc=class extends We{constructor(i,t,e){super(i,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:t}),this.direction=e,this.handler=new Ao,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===Ce.Enter&&this.__onMouseDown();break;case"keyup":i.key===Ce.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return wo(Ge.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};gc.groupId="zoom";var wm=class extends gc{constructor(i){super(i,Ai.zoomIn,0)}};wm.id="zoomIn";var Tm=class extends gc{constructor(i){super(i,Ai.zoomOut,1)}};Tm.id="zoomOut";var vc=class extends We{constructor(i){super(i,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Gf(this.container,"HORIZONTAL",t=>this.__onSliderUpdate(t)),this.mediaMinWidth=parseInt(zi(this.container,"max-width"),10),this.viewer.addEventListener(rn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(Lr.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(rn.type,this),this.viewer.removeEventListener(Lr.type,this),super.destroy()}handleEvent(i){i instanceof rn?this.__moveZoomValue(i.zoomLevel):i instanceof Lr&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return wo(Ge.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(i){this.zoomValue.style.left=i/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(i){i.mousedown&&this.viewer.zoom(i.value*100)}};vc.id="zoomRange";vc.groupId="zoom";var Am=class extends Xf{constructor(i){super(),this.viewer=i}init(){}destroy(){}},Cm=class extends Am{constructor(i,t){super(i),this.config=this.constructor.configParser(t)}setOption(i,t){this.setOptions({[i]:t})}setOptions(i){const t={...this.config,...i},e=this.constructor,n=e.configParser,s=e.readonlyOptions,r=e.id;for(let[a,o]of Object.entries(i)){if(!(a in n.defaults)){Pe(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){Pe(`${r}: Option "${a}" cannot be updated`);continue}a in n.parsers&&(o=n.parsers[a](o,{rawConfig:t,defValue:n.defaults[a]})),this.config[a]=o}}};Cm.readonlyOptions=[];function Fh(i){if(i){for(const[,t]of[["_",i],...Object.entries(i)])if(t.prototype instanceof Am)return fc(t.id,t.VERSION,"5.15.1"),t}return null}var cn={panorama:null,container:null,adapter:[mm,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Ce.ArrowUp]:"ROTATE_UP",[Ce.ArrowDown]:"ROTATE_DOWN",[Ce.ArrowRight]:"ROTATE_RIGHT",[Ce.ArrowLeft]:"ROTATE_LEFT",[Ce.PageUp]:"ZOOM_IN",[Ce.PageDown]:"ZOOM_OUT",[Ce.Plus]:"ZOOM_IN",[Ce.Minus]:"ZOOM_OUT"}},ku={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Nh={container:i=>{if(!i)throw new Rt("No value given for container.");return i},adapter:(i,{defValue:t})=>{if(i?Array.isArray(i)?i=[Bu(i[0]),i[1]]:i=[Bu(i),null]:i=t,!i[0])throw new Rt("An undefined value was given for adapter.");if(!i[0].id)throw new Rt("Adapter has no id.");return i},defaultYaw:i=>An(i),defaultPitch:i=>An(i,!0),defaultZoomLvl:i=>$t.clamp(i,0,100),minFov:(i,{rawConfig:t})=>(t.maxFov<i&&(Pe("maxFov cannot be lower than minFov"),i=t.maxFov),$t.clamp(i,1,179)),maxFov:(i,{rawConfig:t})=>(i<t.minFov&&(i=t.minFov),$t.clamp(i,1,179)),moveInertia:(i,{defValue:t})=>i===!0?t:i===!1?0:i,lang:i=>({...cn.lang,...i}),fisheye:i=>i===!0?1:i===!1?0:$t.clamp(i,0,2),requestHeaders:i=>i&&typeof i=="object"?()=>i:typeof i=="function"?i:null,withCredentials:i=>typeof i=="boolean"?()=>i:typeof i=="function"?i:()=>!1,defaultTransition:(i,{defValue:t})=>i===null||i.speed===0?null:{...t,...i},rendererParameters:(i,{defValue:t})=>({...i,...t}),plugins:i=>i.map((t,e)=>{if(Array.isArray(t)?t=[Fh(t[0]),t[1]]:t=[Fh(t),null],!t[0])throw new Rt(`An undefined value was given for plugin ${e}.`);if(!t[0].id)throw new Rt(`Plugin ${e} has no id.`);return t}),navbar:i=>i===!1?null:i===!0?Eo(cn.navbar):typeof i=="string"?i.split(/[ ,]/):i},PS=To(cn,Nh),Bs=class extends We{constructor(i){super(i,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(i){this.show(),this.contentElt.innerHTML=i??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var i;(i=this.viewer.navbar.getButton(Wr.id,!1))==null||i.autoSize(!0)}};Bs.id="caption";var Oh={},go={};function _c(i,t){if(!i.id)throw new Rt("Button id is required");if(Oh[i.id]=i,i.groupId&&(go[i.groupId]=go[i.groupId]||[]).push(i),t){const e=cn.navbar;switch(t){case"start":e.unshift(i.id);break;case"end":e.push(i.id);break;default:{const[n,s]=t.split(":"),r=e.indexOf(n);if(!n||!s||r===-1)throw new Rt(`Invalid defaultPosition ${t}`);e.splice(r+(s==="right"?1:0),0,i.id)}}}}[Tm,vc,wm,Wr,Bs,xm,ym,Sm,bm,Em,Mm].forEach(i=>_c(i));var LS=class extends ss{constructor(i){super(i,{className:`psv-navbar ${Yr}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(i){this.children.slice().forEach(t=>t.destroy()),this.children.length=0,i.indexOf(Bs.id)!==-1&&i.indexOf(Wr.id)===-1&&i.splice(i.indexOf(Bs.id),0,Wr.id),i.forEach(t=>{typeof t=="object"?new TS(this,t):Oh[t]?new Oh[t](this):go[t]?go[t].forEach(e=>{new e(this)}):Pe(`Unknown button ${t}`)}),new no(this),this.children.forEach(t=>{t instanceof We&&t.checkSupported()}),this.autoSize()}setCaption(i){this.children.some(t=>t instanceof Bs?(t.setCaption(i),!0):!1)}getButton(i,t=!0){const e=this.children.find(n=>n instanceof We&&n.id===i);return!e&&t&&Pe(`button "${i}" not found in the navbar`),e}focusButton(i){var t,e;this.isVisible()&&((e=((t=this.getButton(i,!1))==null?void 0:t.container)||this.container.firstElementChild)==null||e.focus())}autoSize(){var n;this.children.forEach(s=>{s instanceof We&&s.autoSize()});const i=this.container.offsetWidth;let t=0;const e=[];this.children.forEach(s=>{s.isVisible()&&s instanceof We&&(t+=s.width,s.collapsable&&e.push(s))}),t!==0&&(i<t&&e.length>0?(e.forEach(s=>s.collapse()),this.collapsed=e,this.getButton(no.id).show(!1)):i>=t&&this.collapsed.length>0&&(this.collapsed.forEach(s=>s.uncollapse()),this.collapsed=[],this.getButton(no.id).hide(!1)),(n=this.getButton(Bs.id,!1))==null||n.autoSize())}};Pn.enabled=!1;var Fs={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){Pn.enabled&&(Pe("ThreeJS cache should be disabled"),Pn.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(i,t,e){this.enabled&&t&&(this.items[t]=this.items[t]??{files:{},lastAccess:null},this.items[t].files[i]=e,this.items[t].lastAccess=Date.now())},get(i,t){if(this.enabled&&t&&this.items[t])return this.items[t].lastAccess=Date.now(),this.items[t].files[i]},remove(i,t){this.enabled&&t&&this.items[t]&&(delete this.items[t].files[i],Object.keys(this.items[t].files).length===0&&delete this.items[t])},purge(){Object.entries(this.items).sort(([,i],[,t])=>t.lastAccess-i.lastAccess).forEach(([i,{lastAccess:t}],e)=>{e>0&&(Date.now()-t>=this.ttl*1e3||e>=this.maxItems)&&delete this.items[i]})}},IS=class extends ss{constructor(i){super(i,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=zi(this.loader,"color"),this.color=zi(this.canvas,"color"),this.border=parseInt(zi(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(zi(this.loader,"--psv-loader-tickness"),10);const t=this.size/2;this.canvas.innerHTML=`
            <circle cx="${t}" cy="${t}" r="${t}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(qe.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(qe.type,this),super.destroy()}handleEvent(i){i instanceof qe&&i.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(i){this.container.classList.remove("psv-loader--undefined");const t=$t.clamp(i,0,99.999)/100*Math.PI*2,e=this.size/2,n=e,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(t)*r+e,o=-Math.cos(t)*r+e,l=i>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${n} ${s} A ${r} ${r} 0 ${l} 1 ${a} ${o}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const i=this.loader.querySelector(".psv-loader-image, .psv-loader-text");i&&this.loader.removeChild(i);let t;if(this.viewer.config.loadingImg?(t=document.createElement("img"),t.className="psv-loader-image",t.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(t=document.createElement("div"),t.className="psv-loader-text",t.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),t){const e=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));t.style.maxWidth=e+"px",t.style.maxHeight=e+"px",this.loader.appendChild(t)}}},DS=class extends ss{constructor(i){super(i,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new Rt("Notification cannot be toggled")}show(i){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof i=="string"&&(i={content:i}),this.state.contentId=i.id||null,this.content.innerHTML=i.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new Ir(this.state.contentId)),i.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),i.timeout))}hide(i){if(this.isVisible(i)){const t=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new Cr(t))}}},US=class extends ss{constructor(i){super(i,{className:`psv-overlay ${Yr}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(In.type,this),super.hide()}destroy(){this.viewer.removeEventListener(In.type,this),super.destroy()}handleEvent(i){i.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),i.stopPropagation()):i instanceof In&&this.isVisible()&&this.state.dismissible&&i.matches(Ce.Escape)&&(this.hide(),i.preventDefault())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new Rt("Overlay cannot be toggled")}show(i){typeof i=="string"&&(i={title:i}),this.state.contentId=i.id||null,this.state.dismissible=i.dismissible!==!1,this.image.innerHTML=i.image||"",this.title.innerHTML=i.title||"",this.text.innerHTML=i.text||"",super.show(),this.viewer.dispatchEvent(new Yp(this.state.contentId))}hide(i){if(this.isVisible(i)){const t=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new fp(t))}}},FS=200,fl="psv-panel-content--no-interaction",NS=class extends ss{constructor(i){super(i,{className:`psv-panel ${Yr}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const t=document.createElement("div");t.className="psv-panel-resizer",this.container.appendChild(t);const e=document.createElement("div");e.className="psv-panel-close-button",e.innerHTML=Ai.close,e.title=i.config.lang.close,this.container.appendChild(e),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),e.addEventListener("click",()=>this.hide()),t.addEventListener("mousedown",this),t.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(In.type,this)}destroy(){this.viewer.removeEventListener(In.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break;case In.type:this.__onKeyPress(i);break}}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new Rt("Panel cannot be toggled")}show(i){typeof i=="string"&&(i={content:i});const t=this.isVisible(i.id);this.state.contentId=i.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),i.id&&this.state.width[i.id]?this.container.style.width=this.state.width[i.id]:i.width?this.container.style.width=i.width:this.container.style.width=null,this.content.innerHTML=i.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),bo(this.content,"psv-panel-content--no-margin",i.noMargin===!0),i.clickHandler&&(this.state.clickHandler=e=>{i.clickHandler(co(e))},this.state.keyHandler=e=>{e.key===Ce.Enter&&i.clickHandler(co(e))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),t||setTimeout(()=>{var e;(e=this.content.querySelector("a,button,[tabindex]"))==null||e.focus()},300)),this.viewer.dispatchEvent(new Dn(this.state.contentId))}hide(i){if(this.isVisible(i)){const t=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Ln(t))}}__onMouseDown(i){i.stopPropagation(),this.__startResize(i.clientX,i.clientY)}__onTouchStart(i){if(i.stopPropagation(),i.touches.length===1){const t=i.touches[0];this.__startResize(t.clientX,t.clientY)}}__onMouseUp(i){this.state.mousedown&&(i.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(fl))}__onTouchEnd(i){this.state.mousedown&&(i.stopPropagation(),i.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(fl)))}__onMouseMove(i){this.state.mousedown&&(i.stopPropagation(),this.__resize(i.clientX,i.clientY))}__onTouchMove(i){if(this.state.mousedown){const t=i.touches[0];this.__resize(t.clientX,t.clientY)}}__onKeyPress(i){this.isVisible()&&i.matches(Ce.Escape)&&(this.hide(),i.preventDefault())}__startResize(i,t){this.state.mouseX=i,this.state.mouseY=t,this.state.mousedown=!0,this.content.classList.add(fl)}__resize(i,t){const e=i,n=t,s=Math.max(FS,this.container.offsetWidth-(e-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=e,this.state.mouseY=n}},OS=class extends ss{constructor(i,t){super(i,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",e=>e.stopPropagation()),this.container.addEventListener("mousedown",e=>e.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(t)}handleEvent(i){i.type==="transitionend"&&this.__onTransitionEnd(i)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Rt("Tooltip cannot be toggled")}show(i){if(this.state.state!==0)throw new Rt("Initialized tooltip cannot be re-initialized");i.className&&oc(this.container,i.className),i.style&&Object.assign(this.container.style,i.style),this.state.state=3,this.update(i.content,i),this.state.data=i.data,this.state.state=1,this.viewer.dispatchEvent(new Qp(this,this.state.data)),this.__waitImages()}update(i,t){this.content.innerHTML=i;const e=this.container.getBoundingClientRect();this.state.width=e.right-e.left,this.state.height=e.bottom-e.top,this.state.arrow=parseInt(zi(this.arrow,"border-top-width"),10),this.state.border=parseInt(zi(this.container,"border-top-left-radius"),10),this.move(t??this.state.config),this.__waitImages()}move(i){var o;if(this.state.state!==1&&this.state.state!==3)throw new Rt("Uninitialized tooltip cannot be moved");i.box=i.box??((o=this.state.config)==null?void 0:o.box)??{width:0,height:0},this.state.config=i;const t=this.container,e=this.arrow,n={posClass:Ff(i.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(n,i);let s=null,r=null;if(n.top<0?s="bottom":n.top+n.height>this.viewer.state.size.height&&(s="top"),n.left<0?r="right":n.left+n.width>this.viewer.state.size.width&&(r="left"),r||s){const l=dc(n.posClass);s&&(n.posClass[l?0:1]=s),r&&(n.posClass[l?1:0]=r),this.__computeTooltipPosition(n,i)}t.style.top=n.top+"px",t.style.left=n.left+"px",e.style.top=n.arrowTop+"px",e.style.left=n.arrowLeft+"px";const a=n.posClass.join("-");a!==this.state.pos&&(t.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,t.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new _p(this.state.data));const i=parseFloat(zi(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},i*2)}__onTransitionEnd(i){if(i.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(i,t){const e=this.state.arrow,n=t.top,s=i.height,r=t.left,a=i.width,o=e+this.state.border,l=t.box.width/2+e*2,h=t.box.height/2+e*2;switch(i.posClass.join("-")){case"top-left":i.top=n-h-s,i.left=r+o-a,i.arrowTop=s,i.arrowLeft=a-o-e;break;case"top-center":i.top=n-h-s,i.left=r-a/2,i.arrowTop=s,i.arrowLeft=a/2-e;break;case"top-right":i.top=n-h-s,i.left=r-o,i.arrowTop=s,i.arrowLeft=e;break;case"bottom-left":i.top=n+h,i.left=r+o-a,i.arrowTop=-e*2,i.arrowLeft=a-o-e;break;case"bottom-center":i.top=n+h,i.left=r-a/2,i.arrowTop=-e*2,i.arrowLeft=a/2-e;break;case"bottom-right":i.top=n+h,i.left=r-o,i.arrowTop=-e*2,i.arrowLeft=e;break;case"left-top":i.top=n+o-s,i.left=r-l-a,i.arrowTop=s-o-e,i.arrowLeft=a;break;case"center-left":i.top=n-s/2,i.left=r-l-a,i.arrowTop=s/2-e,i.arrowLeft=a;break;case"left-bottom":i.top=n-o,i.left=r-l-a,i.arrowTop=e,i.arrowLeft=a;break;case"right-top":i.top=n+o-s,i.left=r+l,i.arrowTop=s-o-e,i.arrowLeft=-e*2;break;case"center-right":i.top=n-s/2,i.left=r+l,i.arrowTop=s/2-e,i.arrowLeft=-e*2;break;case"right-bottom":i.top=n-o,i.left=r+l,i.arrowTop=e,i.arrowLeft=-e*2;break}}__waitImages(){const i=this.content.querySelectorAll("img");if(i.length>0){const t=[];i.forEach(e=>{e.complete||t.push(new Promise(n=>{e.onload=n,e.onerror=n}))}),t.length&&Promise.all(t).then(()=>{if(this.state.state===1||this.state.state===3){const e=this.container.getBoundingClientRect();this.state.width=e.right-e.left,this.state.height=e.bottom-e.top,this.move(this.state.config)}})}}},zS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Kr=class{constructor(i){this.viewer=i,this.config=i.config,this.state=i.state}destroy(){}},vi=new B,wa=new js(0,0,0,"ZXY"),BS=class extends Kr{constructor(i){super(i)}fovToZoomLevel(i){const t=Math.round((i-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return $t.clamp(t-2*(t-50),0,100)}zoomLevelToFov(i){return this.config.maxFov+i/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(i){return $t.radToDeg(2*Math.atan(Math.tan($t.degToRad(i)/2)*this.state.aspect))}hFovToVFov(i){return $t.radToDeg(2*Math.atan(Math.tan($t.degToRad(i)/2)/this.state.aspect))}getAnimationProperties(i,t,e){const n=!Re(t),s=!Re(e),r={};let a=null;if(n){const o=this.viewer.getPosition(),l=yf(o.yaw,t.yaw);r.yaw={start:o.yaw,end:o.yaw+l},r.pitch={start:o.pitch,end:t.pitch},a=Lh(i,Mf(o,t))}if(s){const o=this.viewer.getZoomLevel(),l=Math.abs(e-o);r.zoom={start:o,end:e},a===null&&(a=Lh(i,Math.PI/4*l/100))}return a===null?typeof i=="number"?a=i:a=Ch:a=Math.max(Ch,a),{duration:a,properties:r}}getTransitionOptions(i){let t;const e=this.config.defaultTransition??cn.defaultTransition;return i.transition===!1||i.transition===null?t=null:i.transition===!0?t={...e}:typeof i.transition=="object"?t={...e,...i.transition}:t=this.config.defaultTransition,t}textureCoordsToSphericalCoords(i){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new Rt("Current adapter does not support texture coordinates or no texture has been loaded");const t=this.viewer.adapter.textureCoordsToSphericalCoords(i,this.state.textureData.panoData);return!wa.equals(this.viewer.renderer.panoramaPose)||!wa.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(t,vi),vi.applyEuler(this.viewer.renderer.panoramaPose),vi.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(vi)):t}sphericalCoordsToTextureCoords(i){var t;if(!((t=this.state.textureData)!=null&&t.panoData))throw new Rt("Current adapter does not support texture coordinates or no texture has been loaded");return(!wa.equals(this.viewer.renderer.panoramaPose)||!wa.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(i,vi),Dh(vi,this.viewer.renderer.sphereCorrection),Dh(vi,this.viewer.renderer.panoramaPose),i=this.vector3ToSphericalCoords(vi)),this.viewer.adapter.sphericalCoordsToTextureCoords(i,this.state.textureData.panoData)}sphericalCoordsToVector3(i,t,e=sn){return t||(t=new B),t.x=e*-Math.cos(i.pitch)*Math.sin(i.yaw),t.y=e*Math.sin(i.pitch),t.z=e*Math.cos(i.pitch)*Math.cos(i.yaw),t}vector3ToSphericalCoords(i){const t=Math.acos(i.y/Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)),e=Math.atan2(i.x,i.z);return{yaw:e<0?-e:Math.PI*2-e,pitch:Math.PI/2-t}}viewerCoordsToVector3(i){const t=this.viewer.renderer.getIntersections(i).filter(e=>e.object.userData[Fn]);return t.length?t[0].point:null}viewerCoordsToSphericalCoords(i){const t=this.viewerCoordsToVector3(i);return t?this.vector3ToSphericalCoords(t):null}vector3ToViewerCoords(i){const t=i.clone();return t.project(this.viewer.renderer.camera),{x:Math.round((t.x+1)/2*this.state.size.width),y:Math.round((1-t.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(i){return this.sphericalCoordsToVector3(i,vi),this.vector3ToViewerCoords(vi)}isPointVisible(i){let t,e;if(i instanceof B)t=i,e=this.vector3ToViewerCoords(i);else if(uc(i))t=this.sphericalCoordsToVector3(i,vi),e=this.vector3ToViewerCoords(t);else return!1;return t.dot(this.viewer.state.direction)>0&&e.x>=0&&e.x<=this.viewer.state.size.width&&e.y>=0&&e.y<=this.viewer.state.size.height}cleanPosition(i){if("yaw"in i||"pitch"in i){if(!("yaw"in i)||!("pitch"in i))throw new Rt("Position is missing 'yaw' or 'pitch'");return{yaw:An(i.yaw),pitch:An(i.pitch,!0)}}else return this.textureCoordsToSphericalCoords(i)}cleanSphereCorrection(i){return{pan:An((i==null?void 0:i.pan)||0),tilt:An((i==null?void 0:i.tilt)||0,!0),roll:An((i==null?void 0:i.roll)||0,!0,!1)}}cleanPanoramaPose(i){return{pan:$t.degToRad((i==null?void 0:i.poseHeading)||0),tilt:$t.degToRad((i==null?void 0:i.posePitch)||0),roll:$t.degToRad((i==null?void 0:i.poseRoll)||0)}}cleanPanoramaOptions(i,t){return t!=null&&t.isEquirectangular&&(Re(i.zoom)&&!Re(t.initialFov)&&(i={...i,zoom:this.fovToZoomLevel(this.hFovToVFov(t.initialFov))}),Re(i.position)&&!Re(t.initialHeading)&&!Re(t.initialPitch)&&(i={...i,position:{yaw:$t.degToRad(t.initialHeading),pitch:$t.degToRad(t.initialPitch)}})),i}},kS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,VS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Po=class Rm{constructor(){this.$=Rm.IDLE}is(...t){return t.some(e=>this.$&e)}set(t){this.$=t}add(t){this.$|=t}remove(t){this.$&=~t}};Po.IDLE=0;Po.CLICK=1;Po.MOVING=2;var _e=Po,HS=class extends Kr{constructor(i){super(i),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new _e,this.keyHandler=new Ao,this.resizeObserver=new ResizeObserver(Rf(()=>this.viewer.autoSize(),50)),this.moveThreshold=df*Ge.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(Tr.type,this),this.viewer.addEventListener(Ur.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(Tr.type,this),this.viewer.removeEventListener(Ur.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(i){switch(i.type){case"keydown":this.__onKeyDown(i);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchmove":this.__onTouchMove(i);break;case"touchend":this.__onTouchEnd(i);break;case"fullscreenchange":this.__onFullscreenChange();break;case Tr.type:this.__applyMoveDelta();break;case Ur.type:this.__clearMoveDelta();break}if(!Ef(i,"."+Yr))switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"wheel":this.__onMouseWheel(i);break}}__onKeyDown(i){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=i.key===Ce.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(Ie.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new In(i.key,i))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[t,e]of Object.entries(this.config.keyboardActions))if(lc(i,t)){if(typeof e=="function")e(this.viewer,i);else{switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e)}i.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(i=>{i==="ZOOM_IN"||i==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(i){this.step.add(_e.CLICK),this.data.startMouseX=i.clientX,this.data.startMouseY=i.clientY,this.config.mousemove&&i.preventDefault()}__onMouseUp(i){this.step.is(_e.CLICK,_e.MOVING)&&this.__stopMove(i.clientX,i.clientY,i,i.button===2)}__onMouseMove(i){this.config.mousemove&&this.step.is(_e.CLICK,_e.MOVING)&&(i.preventDefault(),this.__doMove(i.clientX,i.clientY)),this.__handleObjectsEvents(i)}__onTouchStart(i){i.touches.length===1?(this.step.add(_e.CLICK),this.data.startMouseX=i.touches[0].clientX,this.data.startMouseY=i.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const t=i.touches[0];this.__stopMove(t.clientX,t.clientY,i,!0),this.data.longtouchTimeout=null},pf))):i.touches.length===2&&(this.step.set(_e.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(i),i.preventDefault()))}__onTouchEnd(i){if(this.__cancelLongTouch(),this.step.is(_e.CLICK,_e.MOVING)){if(i.preventDefault(),this.__cancelTwoFingersOverlay(),i.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(i.touches.length===0){const t=i.changedTouches[0];this.__stopMove(t.clientX,t.clientY,i)}}}__onTouchMove(i){if(this.__cancelLongTouch(),!!this.config.mousemove)if(i.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(_e.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:Ie.TWO_FINGERS,image:kS,title:this.config.lang.twoFingers})},mf));else if(this.step.is(_e.CLICK,_e.MOVING)){i.preventDefault();const t=i.touches[0];this.__doMove(t.clientX,t.clientY)}}else this.__doMoveZoom(i),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(Ie.TWO_FINGERS))}__onMouseWheel(i){if(!this.config.mousewheel||!i.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:Ie.CTRL_ZOOM,image:VS,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(Ie.CTRL_ZOOM),gf);return}i.preventDefault(),i.stopPropagation();const t=i.deltaY/Math.abs(i.deltaY)*5*this.config.zoomSpeed;t!==0&&this.viewer.dynamics.zoom.step(-t,5)}__onFullscreenChange(){const i=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(i?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new Ar(i))}__resetMove(){this.step.set(_e.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(i){this.viewer.stopAll(),this.__resetMove();const t=Rh(i);this.step.set(_e.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=t}__stopMove(i,t,e,n=!1){this.step.is(_e.CLICK)&&!this.__moveThresholdReached(i,t)&&this.__doClick(i,t,e,n),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(i,t,e,n=!1){const s=this.viewer.container.getBoundingClientRect(),r=i-s.left,a=t-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),l=o.find(h=>h.object.userData[Fn]);if(l){const h=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),c={rightclick:n,originalEvent:e,target:co(e),clientX:i,clientY:t,viewerX:r,viewerY:a,yaw:h.yaw,pitch:h.pitch,objects:o.map(d=>d.object).filter(d=>!d.userData[Fn])};try{const d=this.viewer.dataHelper.sphericalCoordsToTextureCoords(c);Object.assign(c,d)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-c.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-c.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new ap(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new ep(c)),this.data.dblclickData=Eo(c),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},ff))}}__handleObjectsEvents(i){if(!Lf(this.state.objectsObservers)&&i.composedPath().includes(this.viewer.container)){const t=wf(this.viewer.container),e={x:i.clientX-t.x,y:i.clientY-t.y},n=this.viewer.renderer.getIntersections(e),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(i,r,e,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=n.find(l=>l.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,Uh),this.state.objectsObservers[r]=null),a?s(o.object,r,fm):(this.state.objectsObservers[r]=o.object,s(o.object,r,lm))):a&&(s(a,r,Uh),this.state.objectsObservers[r]=null)}}}__doMove(i,t){if(this.step.is(_e.CLICK)&&this.__moveThresholdReached(i,t))this.viewer.stopAll(),this.__resetMove(),this.step.set(_e.MOVING),this.data.mouseX=i,this.data.mouseY=t,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(_e.MOVING)){const e=(i-this.data.mouseX)*Math.cos(this.state.roll)-(t-this.data.mouseY)*Math.sin(this.state.roll),n=(t-this.data.mouseY)*Math.cos(this.state.roll)+(i-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(e/this.state.size.width)*$t.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(n/this.state.size.height)*$t.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=i,this.data.mouseY=t}}__moveThresholdReached(i,t){return Math.abs(i-this.data.startMouseX)>=this.moveThreshold||Math.abs(t-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(i){if(this.step.is(_e.MOVING)){i.preventDefault();const t=Rh(i);this.__doMove(t.center.x,t.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((t.distance-this.data.pinchDist)/Ge.pixelRatio),this.data.pinchDist=t.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const t=this.viewer.getPosition();this.viewer.rotate({yaw:t.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:t.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const t=this.viewer.getZoomLevel();this.viewer.zoom(t+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};kt.enabled=!1;var Ta=new qt,Vu=new Me,Hu=new nr,GS=class extends Kr{constructor(i){super(i),this.frustumNeedsUpdate=!0,this.renderer=new iS(this.config.rendererParameters),this.renderer.setPixelRatio(Ge.pixelRatio),this.renderer.outputColorSpace=kr,this.renderer.toneMapping=Xh,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Qc,this.camera=new li(50,16/9,.1,2*sn),this.camera.matrixAutoUpdate=!1;const t=new ii(new tr(sn).scale(-1,1,1),new $r({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));t.userData={[Fn]:!0},this.scene.add(t),this.raycaster=new av,this.frustum=new sc,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",e=>e.preventDefault()),this.viewer.addEventListener(Dr.type,this),this.viewer.addEventListener(rn.type,this),this.viewer.addEventListener(Rr.type,this),this.viewer.addEventListener(Pr.type,this),this.viewer.addEventListener(qe.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(i=>this.__renderLoop(i))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Dr.type,this),this.viewer.removeEventListener(rn.type,this),this.viewer.removeEventListener(Rr.type,this),this.viewer.removeEventListener(Pr.type,this),this.viewer.removeEventListener(qe.type,this),super.destroy()}handleEvent(i){switch(i.type){case Dr.type:this.__onSizeUpdated();break;case rn.type:this.__onZoomUpdated();break;case Rr.type:this.__onPositionUpdated();break;case Pr.type:this.__onPositionUpdated();break;case qe.type:i.containsOptions("fisheye")&&this.__onPositionUpdated(),i.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(i){i?this.customRenderer=i(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(i){const t=this.timestamp?i-this.timestamp:0;this.timestamp=i,this.viewer.dispatchEvent(new Tr(i,t)),this.viewer.dynamics.update(t),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Gp))}setTexture(i){this.meshContainer||(this.meshContainer=new zs,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(i.panoData),this.viewer.adapter.setTexture(this.mesh,i,!1),this.meshContainer.add(this.mesh),this.state.textureData=i,this.viewer.needsUpdate()}setPanoramaPose(i,t=this.mesh){const e=this.viewer.dataHelper.cleanPanoramaPose(i);t.rotation.set(-e.tilt,-e.pan,e.roll,"YXZ")}setSphereCorrection(i,t=this.meshContainer){const e=this.viewer.dataHelper.cleanSphereCorrection(i);t.rotation.set(e.tilt,e.pan,e.roll,"YXZ")}transition(i,t,e){const n=e.effect==="fade"||e.rotation,s=!Re(t.position),r=!Re(t.zoom),a=new pc(s?this.viewer.dataHelper.cleanPosition(t.position):void 0,t.zoom);this.viewer.dispatchEvent(a);const o=new zs,l=this.viewer.adapter.createMesh(i.panoData);if(this.viewer.adapter.setTexture(l,i,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(i.panoData,l),this.setSphereCorrection(t.sphereCorrection,o),s&&!e.rotation){const f=this.viewer.getPosition(),g=new B(0,1,0);o.rotateOnWorldAxis(g,a.position.yaw-f.yaw);const _=new B(0,1,0).cross(this.camera.getWorldDirection(new B)).normalize();o.rotateOnWorldAxis(_,a.position.pitch-f.pitch)}o.add(l),this.scene.add(o);const h=new wi;this.renderer.setRenderTarget(h),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),h.dispose();const{duration:c,properties:d}=this.viewer.dataHelper.getAnimationProperties(e.speed,e.rotation?a.position:null,n?a.zoomLevel:null),u=new mo({properties:{...d,opacity:{start:0,end:1}},duration:c,easing:"inOutCubic",onTick:f=>{switch(e.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,f.opacity);break;case"black":case"white":f.opacity<.5?this.renderer.toneMappingExposure=e.effect==="black"?$t.mapLinear(f.opacity,0,.5,1,0):$t.mapLinear(f.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=e.effect==="black"?$t.mapLinear(f.opacity,.5,1,0,1):$t.mapLinear(f.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!n&&this.viewer.dynamics.zoom.setValue(a.zoomLevel));break}s&&e.rotation&&this.viewer.dynamics.position.setValue({yaw:f.yaw,pitch:f.pitch}),r&&n&&this.viewer.dynamics.zoom.setValue(f.zoom),this.viewer.needsUpdate()}});return u.then(f=>{o.remove(l),this.scene.remove(o),f?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=i,this.setPanoramaPose(i.panoData),this.setSphereCorrection(t.sphereCorrection),s&&!e.rotation&&this.viewer.rotate(t.position)):(this.viewer.adapter.disposeTexture(i),this.viewer.adapter.disposeMesh(l))}),u}getIntersections(i){var e;Ta.x=2*i.x/this.state.size.width-1,Ta.y=-2*i.y/this.state.size.height+1,this.raycaster.setFromCamera(Ta,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0).filter(n=>n.object.visible).filter(n=>n.object.isMesh&&!!n.object.userData);return(e=this.customRenderer)!=null&&e.getIntersections&&t.push(...this.customRenderer.getIntersections(this.raycaster,Ta)),t}isObjectVisible(i){if(!i)return!1;if(this.frustumNeedsUpdate&&(Vu.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Vu),this.frustumNeedsUpdate=!1),i.isVector3)return this.frustum.containsPoint(i);if(i.isMesh&&i.geometry){const t=i;return t.geometry.boundingBox||t.geometry.computeBoundingBox(),Hu.copy(t.geometry.boundingBox).applyMatrix4(t.matrixWorld),this.frustum.intersectsBox(Hu)}else return i.isObject3D?this.frustum.intersectsObject(i):!1}addObject(i){this.scene.add(i)}removeObject(i){this.scene.remove(i)}cleanScene(i){const t=e=>{var n;(n=e.map)==null||n.dispose(),e.uniforms&&Object.values(e.uniforms).forEach(s=>{var r,a;(a=(r=s.value)==null?void 0:r.dispose)==null||a.call(r)}),e.dispose()};i.traverse(e=>{var n,s;(n=e.geometry)==null||n.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(r=>{t(r)}):t(e.material)),e instanceof Qc||(s=e.dispose)==null||s.call(e),e!==i&&this.cleanScene(e)})}},WS=class extends nv{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(i,t,e,n){const s=this._abortController.signal,r=super.load(i,l=>{o(),t(l)},e,l=>{if(o(),s.aborted){const h=new Error;h.name="AbortError",h.message="The operation was aborted.",n(h)}else n(l)});function a(){r.src=""}function o(){s.removeEventListener("abort",a,!1)}return s.addEventListener("abort",a,!1),r}},XS=class extends Kr{constructor(i){super(i),this.fileLoader=new iv,this.fileLoader.setResponseType("blob"),this.imageLoader=new WS}destroy(){this.abortLoading(),super.destroy()}abortLoading(){var i,t;(t=(i=this.fileLoader).abort)==null||t.call(i),this.imageLoader.abort()}loadFile(i,t,e){const n=Fs.get(i,e);if(n){if(n instanceof Blob)return t==null||t(100),Promise.resolve(n);Fs.remove(i,e)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(i)),this.fileLoader.setWithCredentials(this.config.withCredentials(i));let s=0;return t==null||t(s),this.fileLoader.loadAsync(i,r=>{if(r.lengthComputable){const a=r.loaded/r.total*100;a>s&&(s=a,t==null||t(s))}}).then(r=>(s=100,t==null||t(s),Fs.add(i,e,r),r))}loadImage(i,t,e){const n=Fs.get(i,e);return n?(t==null||t(100),n instanceof Blob?this.blobToImage(n):Promise.resolve(n)):!t&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(i)),this.imageLoader.loadAsync(i).then(s=>(Fs.add(i,e,s),s))):this.loadFile(i,t,e).then(s=>this.blobToImage(s))}blobToImage(i){return new Promise((t,e)=>{const n=document.createElement("img");n.onload=()=>{URL.revokeObjectURL(n.src),t(n)},n.onerror=e,n.src=URL.createObjectURL(i)})}preloadPanorama(i){return this.viewer.adapter.supportsPreload(i)?this.viewer.adapter.loadTexture(i,!1):Promise.reject(new Rt("Current adapter does not support preload"))}dispatchProgress(i){this.viewer.loader.setProgress(i),this.viewer.dispatchEvent(new bp(Math.round(i)))}},$S=class extends Kr{constructor(i){super(i),this.zoom=new Sr(t=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(t),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new rn(t))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Vf(t=>{this.viewer.dataHelper.sphericalCoordsToVector3(t,this.viewer.state.direction),this.viewer.dispatchEvent(new Rr(t))},{yaw:new Sr(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new Sr(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new Sr(t=>{this.viewer.state.roll=t,this.viewer.dispatchEvent(new Pr(t))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed($t.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed($t.degToRad(this.config.moveSpeed*50))}update(i){this.zoom.update(i),this.position.update(i),this.roll.update(i)}},qS=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new B(0,0,sn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},YS=class extends Xf{constructor(i){var t,e,n;if(super(),this.plugins={},this.children=[],this.parent=Sf(i.container),!this.parent)throw new Rt('"container" element not found.');this.parent[Fn]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),zf(this.parent),Of(this.container,"core"),this.state=new qS,this.config=PS(i),this.__setSize(this.config.size),this.overlay=new US(this);try{Ge.load()}catch(s){console.error(s),this.showError(this.config.lang.webglError);return}Fs.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new GS(this),this.textureLoader=new XS(this),this.eventsHandler=new HS(this),this.dataHelper=new BS(this),this.dynamics=new $S(this),(e=(t=this.adapter).init)==null||e.call(t),this.loader=new IS(this),this.navbar=new LS(this),this.panel=new NS(this),this.notification=new DS(this),this.autoSize(),this.setCursor(null),cc(Ge.isTouchEnabled,s=>{bo(this.container,"psv--is-touch",s)}),this.config.plugins.forEach(([s,r])=>{this.plugins[s.id]=new s(this,r)});for(const s of Object.values(this.plugins))(n=s.init)==null||n.call(s);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){var i,t,e,n,s,r;this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[a,o]of Object.entries(this.plugins))o.destroy(),delete this.plugins[a];this.children.slice().forEach(a=>a.destroy()),this.children.length=0,(i=this.eventsHandler)==null||i.destroy(),(t=this.renderer)==null||t.destroy(),(e=this.textureLoader)==null||e.destroy(),(n=this.dataHelper)==null||n.destroy(),(s=this.adapter)==null||s.destroy(),(r=this.dynamics)==null||r.destroy(),this.parent.removeChild(this.container),delete this.parent[Fn]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new Lr)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(i){if(typeof i=="string")return this.plugins[i];{const t=Fh(i);return t?this.plugins[t.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Tf(this.parent,Ge.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(i){i?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Dr(this.getSize())),this.navbar.autoSize())}setPanorama(i,t={}){var r;this.textureLoader.abortLoading(),(r=this.state.transitionAnimation)==null||r.cancel();const e=this.dataHelper.getTransitionOptions(t);t.showLoader===void 0&&(t.showLoader=!0),t.caption===void 0&&(t.caption=this.config.caption),t.description===void 0&&(t.description=this.config.description),!t.panoData&&typeof this.config.panoData=="function"&&(t.panoData=this.config.panoData),t.sphereCorrection===void 0&&(t.sphereCorrection=this.config.sphereCorrection),this.hideError(),this.resetIdleTimer(),this.config.panorama=i,this.config.caption=t.caption,this.config.description=t.description,this.config.sphereCorrection=t.sphereCorrection,(typeof this.config.panoData!="function"||typeof t.panoData=="function")&&(this.config.panoData=t.panoData);const n=a=>{if(Uf(a))return!1;if(this.loader.hide(),this.state.loadingPromise=null,a)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(a),this.dispatchEvent(new Lp(i,a)),a;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(t.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new Tp(i));const s=this.adapter.loadTexture(this.config.panorama,!0,t.panoData).then(a=>{if(a.panorama!==this.config.panorama)throw this.adapter.disposeTexture(a),Ph();const o=this.dataHelper.cleanPanoramaOptions(t,a.panoData);return(!Re(o.zoom)||!Re(o.position))&&this.stopAll(),{textureData:a,cleanOptions:o}});return!e||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:a,cleanOptions:o})=>{this.renderer.show(),this.renderer.setTexture(a),this.renderer.setPanoramaPose(a.panoData),this.renderer.setSphereCorrection(t.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Gs(a)),Re(o.zoom)||this.zoom(o.zoom),Re(o.position)||this.rotate(o.position)}).then(()=>n(),a=>n(a)):this.state.loadingPromise=s.then(({textureData:a,cleanOptions:o})=>(this.loader.hide(),this.dispatchEvent(new Gs(a)),this.state.transitionAnimation=this.renderer.transition(a,o,e),this.state.transitionAnimation)).then(a=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new Up(a)),!a)throw Ph()}).then(()=>n(),a=>n(a)),this.state.loadingPromise}setOptions(i){const t={...this.config,...i};for(let[e,n]of Object.entries(i)){if(!(e in cn)){Pe(`Unknown option ${e}`);continue}if(e in ku){Pe(ku[e]);continue}switch(e in Nh&&(n=Nh[e](n,{rawConfig:t,defValue:cn[e]})),this.config[e]=n,e){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new rn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new qe(Object.keys(i)))}setOption(i,t){this.setOptions({[i]:t})}showError(i){this.overlay.show({id:Ie.ERROR,image:zS,title:i,dismissible:!1})}hideError(){this.overlay.hide(Ie.ERROR)}rotate(i){const t=new jf(this.dataHelper.cleanPosition(i));this.dispatchEvent(t),!t.defaultPrevented&&this.dynamics.position.setValue(t.position)}zoom(i){this.dynamics.zoom.setValue(i)}zoomIn(i=1){this.dynamics.zoom.step(i)}zoomOut(i=1){this.dynamics.zoom.step(-i)}animate(i){const t=uc(i),e=!Re(i.zoom),n=new pc(t?this.dataHelper.cleanPosition(i):void 0,i.zoom);if(this.dispatchEvent(n),n.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(i.speed,n.position,n.zoomLevel);return s?(this.state.animation=new mo({properties:r,duration:s,easing:i.easing||"inOutSine",onTick:a=>{t&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),e&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(t&&this.rotate(n.position),e&&this.zoom(n.zoomLevel),new mo(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(i){this.__setSize(i),this.autoSize()}__setSize(i){["width","height"].forEach(t=>{i!=null&&i[t]&&(/^[0-9.]+$/.test(i[t])&&(i[t]+="px"),this.parent.style[t]=i[t])})}enterFullscreen(){this.isFullscreenEnabled()||Af(this.parent,Ge.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&Cf(Ge.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(i){return new OS(this,i)}setCursor(i){this.state.cursorOverride=i,i?this.container.style.cursor=i:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(i){this.state.objectsObservers[i]||(this.state.objectsObservers[i]=null)}unobserveObjects(i){delete this.state.objectsObservers[i]}stopAll(){return this.dispatchEvent(new Ur),this.disableIdleTimer(),this.stopAnimation()}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pm="171",zh=0,ZS=1,Gu=1,Wu=100,Xu=204,$u=205,qu=3,KS=0,Lm=300,Yu=1e3,Aa=1001,Zu=1002,Bh=1006,JS=1008,jS=1009,QS=1015,tb=1023,Im="",Si="srgb",Ku="srgb-linear",Ju="linear",pl="srgb",Ss=7680,ju=519,Qu=35044,Ca=2e3,td=2001;class Lo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ed=1234567;const Dm=Math.PI/180,Um=180/Math.PI;function rr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Ht(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function eb(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ib(i,t,e){return i!==t?(e-i)/(t-i):0}function Fr(i,t,e){return(1-e)*i+e*t}function nb(i,t,e,n){return Fr(i,t,1-Math.exp(-e*n))}function sb(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function rb(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ab(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ob(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lb(i,t){return i+Math.random()*(t-i)}function hb(i){return i*(.5-Math.random())}function cb(i){i!==void 0&&(ed=i);let t=ed+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ub(i){return i*Dm}function db(i){return i*Um}function fb(i){return(i&i-1)===0&&i!==0}function pb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gb(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+n)/2),c=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*c,l*d,l*u,o*h);break;case"YZY":i.set(l*u,o*c,l*d,o*h);break;case"ZXZ":i.set(l*d,l*u,o*c,o*h);break;case"XZX":i.set(o*c,l*g,l*f,o*h);break;case"YXY":i.set(l*f,o*c,l*g,o*h);break;case"ZYZ":i.set(l*g,l*f,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const id={DEG2RAD:Dm,RAD2DEG:Um,generateUUID:rr,clamp:Ht,euclideanModulo:xc,mapLinear:eb,inverseLerp:ib,lerp:Fr,damp:nb,pingpong:sb,smoothstep:rb,smootherstep:ab,randInt:ob,randFloat:lb,randFloatSpread:hb,seededRandom:cb,degToRad:ub,radToDeg:db,isPowerOfTwo:fb,ceilPowerOfTwo:pb,floorPowerOfTwo:mb,setQuaternionFromProperEuler:gb,normalize:Ve,denormalize:Ns};class ti{constructor(t=0,e=0){ti.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class On{constructor(t,e,n,s,r,a,o,l,h){On.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h)}set(t,e,n,s,r,a,o,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],c=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],E=s[1],A=s[4],M=s[7],b=s[2],S=s[5],C=s[8];return r[0]=a*_+o*E+l*b,r[3]=a*p+o*A+l*S,r[6]=a*m+o*M+l*C,r[1]=h*_+c*E+d*b,r[4]=h*p+c*A+d*S,r[7]=h*m+c*M+d*C,r[2]=u*_+f*E+g*b,r[5]=u*p+f*A+g*S,r[8]=u*m+f*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-n*r*c+n*o*l+s*r*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=c*a-o*h,u=o*l-c*r,f=h*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*h-c*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(c*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+t,-s*h,s*l,-s*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ml.makeScale(t,e)),this}rotate(t){return this.premultiply(ml.makeRotation(-t)),this}translate(t,e){return this.premultiply(ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ml=new On;function vb(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nd(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const sd=new On().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new On().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _b(){const i={enabled:!0,workingColorSpace:Ku,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pl&&(s.r=an(s.r),s.g=an(s.g),s.b=an(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pl&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Im?Ju:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ku]:{primaries:t,whitePoint:n,transfer:Ju,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:n,transfer:pl,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),i}const _i=_b();function an(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bs;class xb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bs===void 0&&(bs=nd("canvas")),bs.width=t.width,bs.height=t.height;const n=bs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=nd("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=an(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(an(e[n]/255)*255):e[n]=an(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yb=0;class Mb{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xb.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sb=0;class on extends Lo{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Aa,s=Aa,r=Bh,a=JS,o=tb,l=jS,h=on.DEFAULT_ANISOTROPY,c=Im){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=rr(),this.name="",this.source=new Mb(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ti(0,0),this.repeat=new ti(1,1),this.center=new ti(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new On,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yu:t.x=t.x-Math.floor(t.x);break;case Aa:t.x=t.x<0?0:1;break;case Zu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yu:t.y=t.y-Math.floor(t.y);break;case Aa:t.y=t.y<0?0:1;break;case Zu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Lm;on.DEFAULT_ANISOTROPY=1;class Jr{constructor(t=0,e=0,n=0,s=1){Jr.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(h+1)/2,M=(f+1)/2,b=(m+1)/2,S=(c+u)/4,C=(d+_)/4,x=(g+p)/4;return A>M&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=C/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-c)*(u-c));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(u-c)/E,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ar{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],h=n[s+1],c=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||h!==f||c!==g){let p=1-o;const m=l*u+h*f+c*g+d*_,E=m>=0?1:-1,A=1-m*m;if(A>Number.EPSILON){const b=Math.sqrt(A),S=Math.atan2(b,m*E);p=Math.sin(p*S)/b,o=Math.sin(o*S)/b}const M=o*E;if(l=l*p+u*M,h=h*p+f*M,c=c*p+g*M,d=d*p+_*M,p===1-o){const b=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=b,h*=b,c*=b,d*=b}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],h=n[s+2],c=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+c*d+l*f-h*u,t[e+1]=l*g+c*u+h*d-o*f,t[e+2]=h*g+c*f+o*u-l*d,t[e+3]=c*g-o*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(n/2),c=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-n*h,this._z=r*c+a*h+n*l-s*o,this._w=a*c-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),d=Math.sin((1-e)*c)/h,u=Math.sin(e*c)/h;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,n=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ad.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ad.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*s-o*n),c=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*h+a*d-o*c,this.y=n+l*c+o*h-r*d,this.z=s+l*d+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new j,ad=new ar;class jr{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xi):xi.fromBufferAttribute(r,a),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(t.matrixWorld),this.union(Ra)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),Pa.subVectors(this.max,mr),Es.subVectors(t.a,mr),ws.subVectors(t.b,mr),Ts.subVectors(t.c,mr),Mn.subVectors(ws,Es),Sn.subVectors(Ts,ws),Gn.subVectors(Es,Ts);let e=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Gn.z,Gn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Gn.z,0,-Gn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Gn.y,Gn.x,0];return!_l(e,Es,ws,Ts,Pa)||(e=[1,0,0,0,1,0,0,0,1],!_l(e,Es,ws,Ts,Pa))?!1:(La.crossVectors(Mn,Sn),e=[La.x,La.y,La.z],_l(e,Es,ws,Ts,Pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yi=[new j,new j,new j,new j,new j,new j,new j,new j],xi=new j,Ra=new jr,Es=new j,ws=new j,Ts=new j,Mn=new j,Sn=new j,Gn=new j,mr=new j,Pa=new j,La=new j,Wn=new j;function _l(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wn.fromArray(i,r);const o=s.x*Math.abs(Wn.x)+s.y*Math.abs(Wn.y)+s.z*Math.abs(Wn.z),l=t.dot(Wn),h=e.dot(Wn),c=n.dot(Wn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const bb=new jr,gr=new j,xl=new j;class Fm{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bb.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(xl)),this.expandByPoint(gr.copy(t.center).sub(xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new j,yl=new j,Ia=new j,bn=new j,Ml=new j,Da=new j,Sl=new j;class Eb{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yl.copy(t).add(e).multiplyScalar(.5),Ia.copy(e).sub(t).normalize(),bn.copy(this.origin).sub(yl);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ia),o=bn.dot(this.direction),l=-bn.dot(Ia),h=bn.lengthSq(),c=Math.abs(1-a*a);let d,u,f,g;if(c>0)if(d=a*l-o,u=a*o-l,g=r*c,d>=0)if(u>=-g)if(u<=g){const _=1/c;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yl).addScaledVector(Ia,u),f}intersectSphere(t,e){Zi.subVectors(t.center,this.origin);const n=Zi.dot(this.direction),s=Zi.dot(Zi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,n,s,r){Ml.subVectors(e,t),Da.subVectors(n,t),Sl.crossVectors(Ml,Da);let a=this.direction.dot(Sl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bn.subVectors(this.origin,t);const l=o*this.direction.dot(Da.crossVectors(bn,Da));if(l<0)return null;const h=o*this.direction.dot(Ml.cross(bn));if(h<0||l+h>a)return null;const c=-o*bn.dot(Sl);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ei{constructor(t,e,n,s,r,a,o,l,h,c,d,u,f,g,_,p){ei.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,h,c,d,u,f,g,_,p)}set(t,e,n,s,r,a,o,l,h,c,d,u,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ei().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),a=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*c,f=a*d,g=o*c,_=o*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+g*h,e[5]=u-_*h,e[9]=-o*l,e[2]=_-u*h,e[6]=g+f*h,e[10]=a*l}else if(t.order==="YXZ"){const u=l*c,f=l*d,g=h*c,_=h*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*c,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*c,f=l*d,g=h*c,_=h*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*c,e[9]=_-u*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*c,f=a*d,g=o*c,_=o*d;e[0]=l*c,e[4]=g*h-f,e[8]=u*h+_,e[1]=l*d,e[5]=_*h+u,e[9]=f*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+_,e[5]=a*c,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*c,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wb,t,Tb)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),En.crossVectors(n,Je),En.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),En.crossVectors(n,Je)),En.normalize(),Ua.crossVectors(Je,En),s[0]=En.x,s[4]=Ua.x,s[8]=Je.x,s[1]=En.y,s[5]=Ua.y,s[9]=Je.y,s[2]=En.z,s[6]=Ua.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],c=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],A=n[7],M=n[11],b=n[15],S=s[0],C=s[4],x=s[8],T=s[12],P=s[1],R=s[5],O=s[9],N=s[13],X=s[2],U=s[6],$=s[10],z=s[14],Y=s[3],tt=s[7],nt=s[11],st=s[15];return r[0]=a*S+o*P+l*X+h*Y,r[4]=a*C+o*R+l*U+h*tt,r[8]=a*x+o*O+l*$+h*nt,r[12]=a*T+o*N+l*z+h*st,r[1]=c*S+d*P+u*X+f*Y,r[5]=c*C+d*R+u*U+f*tt,r[9]=c*x+d*O+u*$+f*nt,r[13]=c*T+d*N+u*z+f*st,r[2]=g*S+_*P+p*X+m*Y,r[6]=g*C+_*R+p*U+m*tt,r[10]=g*x+_*O+p*$+m*nt,r[14]=g*T+_*N+p*z+m*st,r[3]=E*S+A*P+M*X+b*Y,r[7]=E*C+A*R+M*U+b*tt,r[11]=E*x+A*O+M*$+b*nt,r[15]=E*T+A*N+M*z+b*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*d-s*h*d-r*o*u+n*h*u+s*o*f-n*l*f)+_*(+e*l*f-e*h*u+r*a*u-s*a*f+s*h*c-r*l*c)+p*(+e*h*d-e*o*f-r*a*d+n*a*f+r*o*c-n*h*c)+m*(-s*o*c-e*l*d+e*o*u+s*a*d-n*a*u+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],E=d*p*h-_*u*h+_*l*f-o*p*f-d*l*m+o*u*m,A=g*u*h-c*p*h-g*l*f+a*p*f+c*l*m-a*u*m,M=c*_*h-g*d*h+g*o*f-a*_*f-c*o*m+a*d*m,b=g*d*l-c*_*l-g*o*u+a*_*u+c*o*p-a*d*p,S=e*E+n*A+s*M+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return t[0]=E*C,t[1]=(_*u*r-d*p*r-_*s*f+n*p*f+d*s*m-n*u*m)*C,t[2]=(o*p*r-_*l*r+_*s*h-n*p*h-o*s*m+n*l*m)*C,t[3]=(d*l*r-o*u*r-d*s*h+n*u*h+o*s*f-n*l*f)*C,t[4]=A*C,t[5]=(c*p*r-g*u*r+g*s*f-e*p*f-c*s*m+e*u*m)*C,t[6]=(g*l*r-a*p*r-g*s*h+e*p*h+a*s*m-e*l*m)*C,t[7]=(a*u*r-c*l*r+c*s*h-e*u*h-a*s*f+e*l*f)*C,t[8]=M*C,t[9]=(g*d*r-c*_*r-g*n*f+e*_*f+c*n*m-e*d*m)*C,t[10]=(a*_*r-g*o*r+g*n*h-e*_*h-a*n*m+e*o*m)*C,t[11]=(c*o*r-a*d*r-c*n*h+e*d*h+a*n*f-e*o*f)*C,t[12]=b*C,t[13]=(c*_*s-g*d*s+g*n*u-e*_*u-c*n*p+e*d*p)*C,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*p-e*o*p)*C,t[15]=(a*d*s-c*o*s+c*n*l-e*d*l-a*n*u+e*o*u)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+n,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,d=o+o,u=r*h,f=r*c,g=r*d,_=a*c,p=a*d,m=o*d,E=l*h,A=l*c,M=l*d,b=n.x,S=n.y,C=n.z;return s[0]=(1-(_+m))*b,s[1]=(f+M)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(u+m))*S,s[6]=(p+E)*S,s[7]=0,s[8]=(g+A)*C,s[9]=(p-E)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const a=As.set(s[4],s[5],s[6]).length(),o=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yi.copy(this);const h=1/r,c=1/a,d=1/o;return yi.elements[0]*=h,yi.elements[1]*=h,yi.elements[2]*=h,yi.elements[4]*=c,yi.elements[5]*=c,yi.elements[6]*=c,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,e.setFromRotationMatrix(yi),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ca){const l=this.elements,h=2*r/(e-t),c=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(o===Ca)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===td)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ca){const l=this.elements,h=1/(e-t),c=1/(n-s),d=1/(a-r),u=(e+t)*h,f=(n+s)*c;let g,_;if(o===Ca)g=(a+r)*d,_=-2*d;else if(o===td)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const As=new j,yi=new ei,wb=new j(0,0,0),Tb=new j(1,1,1),En=new j,Ua=new j,Je=new j,od=new ei,ld=new ar;class es{constructor(t=0,e=0,n=0,s=es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return od.makeRotationFromQuaternion(t),this.setFromRotationMatrix(od,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ld.setFromEuler(this),this.setFromQuaternion(ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class Ab{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cb=0;const hd=new j,Cs=new ar,Ki=new ei,Fa=new j,vr=new j,Rb=new j,Pb=new ar,cd=new j(1,0,0),ud=new j(0,1,0),dd=new j(0,0,1),fd={type:"added"},Lb={type:"removed"},Rs={type:"childadded",child:null},bl={type:"childremoved",child:null};class ui extends Lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const t=new j,e=new es,n=new ar,s=new j(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ei},normalMatrix:{value:new On}}),this.matrix=new ei,this.matrixWorld=new ei,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ab,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(cd,t)}rotateY(t){return this.rotateOnAxis(ud,t)}rotateZ(t){return this.rotateOnAxis(dd,t)}translateOnAxis(t,e){return hd.copy(t).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cd,t)}translateY(t){return this.translateOnAxis(ud,t)}translateZ(t){return this.translateOnAxis(dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fa.copy(t):Fa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(vr,Fa,this.up):Ki.lookAt(Fa,vr,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(Ki),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fd),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lb),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fd),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,Rb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Pb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ui.DEFAULT_UP=new j(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new j,Ji=new j,El=new j,ji=new j,Ps=new j,Ls=new j,pd=new j,wl=new j,Tl=new j,Al=new j,Cl=new Jr,Rl=new Jr,Pl=new Jr;class bi{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mi.subVectors(t,e),s.cross(Mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mi.subVectors(s,e),Ji.subVectors(n,e),El.subVectors(t,e);const a=Mi.dot(Mi),o=Mi.dot(Ji),l=Mi.dot(El),h=Ji.dot(Ji),c=Ji.dot(El),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(h*l-o*c)*u,g=(a*c-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Cl.setScalar(0),Rl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(t,e),Rl.fromBufferAttribute(t,n),Pl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Cl,r.x),a.addScaledVector(Rl,r.y),a.addScaledVector(Pl,r.z),a}static isFrontFacing(t,e,n,s){return Mi.subVectors(n,e),Ji.subVectors(t,e),Mi.cross(Ji).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Mi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return bi.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ps.subVectors(s,n),Ls.subVectors(r,n),wl.subVectors(t,n);const l=Ps.dot(wl),h=Ls.dot(wl);if(l<=0&&h<=0)return e.copy(n);Tl.subVectors(t,s);const c=Ps.dot(Tl),d=Ls.dot(Tl);if(c>=0&&d<=c)return e.copy(s);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(n).addScaledVector(Ps,a);Al.subVectors(t,r);const f=Ps.dot(Al),g=Ls.dot(Al);if(g>=0&&f<=g)return e.copy(r);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Ls,o);const p=c*g-f*d;if(p<=0&&d-c>=0&&f-g>=0)return pd.subVectors(r,s),o=(d-c)/(d-c+(f-g)),e.copy(s).addScaledVector(pd,o);const m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(Ps,a).addScaledVector(Ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Ll(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qr{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_i.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=_i.workingColorSpace){return this.r=t,this.g=e,this.b=n,_i.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=_i.workingColorSpace){if(t=xc(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ll(a,r,t+1/3),this.g=Ll(a,r,t),this.b=Ll(a,r,t-1/3)}return _i.toWorkingColorSpace(this,s),this}setStyle(t,e=Si){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Si){const n=Nm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=an(t.r),this.g=an(t.g),this.b=an(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return _i.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ht(Be.r*255,0,255))*65536+Math.round(Ht(Be.g*255,0,255))*256+Math.round(Ht(Be.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_i.workingColorSpace){_i.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const d=a-o;switch(h=c<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=_i.workingColorSpace){return _i.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Si){_i.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==Si?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(Na);const n=Fr(wn.h,Na.h,e),s=Fr(wn.s,Na.s,e),r=Fr(wn.l,Na.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Qr;Qr.NAMES=Nm;let Ib=0;class Om extends Lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Gu,this.side=zh,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xu,this.blendDst=$u,this.blendEquation=Wu,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qr(0,0,0),this.blendAlpha=0,this.depthFunc=qu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gu&&(n.blending=this.blending),this.side!==zh&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xu&&(n.blendSrc=this.blendSrc),this.blendDst!==$u&&(n.blendDst=this.blendDst),this.blendEquation!==Wu&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qu&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Db extends Om{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=KS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new j,Oa=new ti;class Xs{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qu,this.updateRanges=[],this.gpuType=QS,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oa.fromBufferAttribute(this,e),Oa.applyMatrix3(t),this.setXY(e,Oa.x,Oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qu&&(t.usage=this.usage),t}}class Ub extends Xs{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fb extends Xs{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class so extends Xs{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nb=0;const ri=new ei,Il=new ui,Is=new j,je=new jr,_r=new jr,Ae=new j;class Io extends Lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vb(t)?Fb:Ub)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new On().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,n){return ri.makeTranslation(t,e,n),this.applyMatrix4(ri),this}scale(t,e,n){return ri.makeScale(t,e,n),this.applyMatrix4(ri),this}lookAt(t){return Il.lookAt(t),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new so(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fm);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(je.min,_r.min),je.expandByPoint(Ae),Ae.addVectors(je.max,_r.max),je.expandByPoint(Ae)):(je.expandByPoint(_r.min),je.expandByPoint(_r.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Ae.fromBufferAttribute(o,h),l&&(Is.fromBufferAttribute(t,h),Ae.add(Is)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xs(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new j,l[x]=new j;const h=new j,c=new j,d=new j,u=new ti,f=new ti,g=new ti,_=new j,p=new j;function m(x,T,P){h.fromBufferAttribute(n,x),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),c.sub(h),d.sub(h),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(R),o[x].add(_),o[T].add(_),o[P].add(_),l[x].add(p),l[T].add(p),l[P].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,T=E.length;x<T;++x){const P=E[x],R=P.start,O=P.count;for(let N=R,X=R+O;N<X;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const A=new j,M=new j,b=new j,S=new j;function C(x){b.fromBufferAttribute(s,x),S.copy(b);const T=o[x];A.copy(T),A.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(S,T);const R=M.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,R)}for(let x=0,T=E.length;x<T;++x){const P=E[x],R=P.start,O=P.count;for(let N=R,X=R+O;N<X;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xs(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new j,r=new j,a=new j,o=new j,l=new j,h=new j,c=new j,d=new j;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),o.add(c),l.add(c),h.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){const h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*c;for(let m=0;m<c;m++)u[g++]=h[f++]}return new Xs(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Io,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=t(l,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,d=h.length;c<d;c++){const u=h[c],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,c=a.length;h<c;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const md=new ei,Xn=new Eb,za=new Fm,gd=new j,Ba=new j,ka=new j,Va=new j,Dl=new j,Ha=new j,vd=new j,Ga=new j;class Ob extends ui{constructor(t=new Io,e=new Db){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ha.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],d=r[l];c!==0&&(Dl.fromBufferAttribute(d,t),a?Ha.addScaledVector(Dl,c):Ha.addScaledVector(Dl.sub(e),c))}e.add(Ha)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(za.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(za,gd)===null||Xn.origin.distanceToSquared(gd)>(t.far-t.near)**2))&&(md.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(md),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=E,b=A;M<b;M+=3){const S=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);s=Wa(this,m,t,n,h,c,d,S,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=o.getX(p),A=o.getX(p+1),M=o.getX(p+2);s=Wa(this,a,t,n,h,c,d,E,A,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=E,b=A;M<b;M+=3){const S=M,C=M+1,x=M+2;s=Wa(this,m,t,n,h,c,d,S,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=p,A=p+1,M=p+2;s=Wa(this,a,t,n,h,c,d,E,A,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function zb(i,t,e,n,s,r,a,o){let l;if(t.side===ZS?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===zh,o),l===null)return null;Ga.copy(o),Ga.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ga);return h<e.near||h>e.far?null:{distance:h,point:Ga.clone(),object:i}}function Wa(i,t,e,n,s,r,a,o,l,h){i.getVertexPosition(o,Ba),i.getVertexPosition(l,ka),i.getVertexPosition(h,Va);const c=zb(i,t,e,n,Ba,ka,Va,vd);if(c){const d=new j;bi.getBarycoord(vd,Ba,ka,Va,d),s&&(c.uv=bi.getInterpolatedAttribute(s,o,l,h,d,new ti)),r&&(c.uv1=bi.getInterpolatedAttribute(r,o,l,h,d,new ti)),a&&(c.normal=bi.getInterpolatedAttribute(a,o,l,h,d,new j),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new j,materialIndex:0};bi.getNormal(Ba,ka,Va,u.normal),c.face=u,c.barycoord=d}return c}function Bb(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function kb(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}var Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gb extends Om{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=Hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bb(t.uniforms),this.uniformsGroups=kb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wb extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xb extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $b extends on{constructor(t,e,n,s,r,a,o,l,h){super(t,e,n,s,r,a,o,l,h),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Bh,this.magFilter=r!==void 0?r:Bh,this.generateMipmaps=!1;const c=this;function d(){c.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class yc extends Io{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),h=o+1,c=l+1,d=t/o,u=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<c;m++){const E=m*u-a;for(let A=0;A<h;A++){const M=A*d-r;g.push(M,-E,0),_.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const A=E+h*m,M=E+h*(m+1),b=E+1+h*(m+1),S=E+1+h*m;f.push(A,M,S),f.push(M,b,S)}this.setIndex(f),this.setAttribute("position",new so(g,3)),this.setAttribute("normal",new so(_,3)),this.setAttribute("uv",new so(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yc(t.width,t.height,t.widthSegments,t.heightSegments)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pm);/*!
 * Photo Sphere Viewer / Markers Plugin 5.15.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var qb=Object.defineProperty,Yb=(i,t)=>{for(var e in t)qb(i,e,{get:t[e],enumerable:!0})},Zb={};Yb(Zb,{EnterMarkerEvent:()=>Ym,GotoMarkerDoneEvent:()=>kh,HideMarkersEvent:()=>Nr,LeaveMarkerEvent:()=>Xm,MarkerVisibilityEvent:()=>km,MarkersPluginEvent:()=>fi,RenderMarkersListEvent:()=>fg,SelectMarkerEvent:()=>Jm,SelectMarkerListEvent:()=>tg,SetMarkersEvent:()=>lg,ShowMarkersEvent:()=>Or,UnselectMarkerEvent:()=>ng});var fi=class extends Wf{},zm=class Bm extends fi{constructor(t,e){super(Bm.type),this.marker=t,this.visible=e}};zm.type="marker-visibility";var km=zm,Vm=class Hm extends fi{constructor(t){super(Hm.type),this.marker=t}};Vm.type="goto-marker-done";var kh=Vm,Gm=class Wm extends fi{constructor(t){super(Wm.type),this.marker=t}};Gm.type="leave-marker";var Xm=Gm,$m=class qm extends fi{constructor(t){super(qm.type),this.marker=t}};$m.type="enter-marker";var Ym=$m,Zm=class Km extends fi{constructor(t,e,n){super(Km.type),this.marker=t,this.doubleClick=e,this.rightClick=n}};Zm.type="select-marker";var Jm=Zm,jm=class Qm extends fi{constructor(t){super(Qm.type),this.marker=t}};jm.type="select-marker-list";var tg=jm,eg=class ig extends fi{constructor(t){super(ig.type),this.marker=t}};eg.type="unselect-marker";var ng=eg,sg=class rg extends fi{constructor(){super(rg.type)}};sg.type="hide-markers";var Nr=sg,ag=class og extends fi{constructor(t){super(og.type),this.markers=t}};ag.type="set-markers";var lg=ag,hg=class cg extends fi{constructor(){super(cg.type)}};hg.type="show-markers";var Or=hg,ug=class dg extends fi{constructor(t){super(dg.type),this.markers=t}};ug.type="render-markers-list";var fg=ug,Kb=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Xr=class extends We{constructor(i){super(i,{className:"psv-markers-button",icon:Kb,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(Or.type,this),this.plugin.addEventListener(Nr.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(Or.type,this),this.plugin.removeEventListener(Nr.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof Or?this.toggleActive(!0):i instanceof Nr&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Xr.id="markers";var pg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,vo="http://www.w3.org/2000/svg",oe="psvMarker",Jb=zt.dasherize(oe),xr="marker",Os="markersList",Vh={amount:2,duration:100,easing:"linear"},jb=(i,t)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${pg} ${t}</h1>
    <ul class="psv-panel-menu-list">
    ${i.map(e=>`
        <li data-${Jb}="${e.id}" class="psv-panel-menu-item" tabindex="0">
          ${e.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${e.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${e.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,Do=class extends We{constructor(i){super(i,{className:" psv-markers-list-button",icon:pg,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(Ft.ShowPanelEvent.type,this),this.viewer.addEventListener(Ft.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(Ft.ShowPanelEvent.type,this),this.viewer.removeEventListener(Ft.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof Ft.ShowPanelEvent?this.toggleActive(i.panelId===Os):i instanceof Ft.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};Do.id="markersList";var _d=new j,Qb=new ar,xd=new j,tE=class extends ui{constructor(i=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=i,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(i,t){return super.copy(i,t),this.element=i.element.cloneNode(!0),this}},Di=new ei,eE=new ei,iE=class{constructor(i={}){const t=this;let e,n,s,r;const a={camera:{style:""},objects:new WeakMap},o=i.element!==void 0?i.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",o.appendChild(l);const h=document.createElement("div");h.style.transformStyle="preserve-3d",l.appendChild(h),this.getSize=function(){return{width:e,height:n}},this.render=function(_,p){const m=p.projectionMatrix.elements[5]*r;p.view&&p.view.enabled?(l.style.transform=`translate( ${-p.view.offsetX*(e/p.view.width)}px, ${-p.view.offsetY*(n/p.view.height)}px )`,l.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):l.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let E,A;p.isOrthographicCamera&&(E=-(p.right+p.left)/2,A=(p.top+p.bottom)/2);const M=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,b=p.isOrthographicCamera?`scale( ${M} )scale(`+m+")translate("+c(E)+"px,"+c(A)+"px)"+d(p.matrixWorldInverse):`scale( ${M} )translateZ(`+m+"px)"+d(p.matrixWorldInverse),C=(p.isPerspectiveCamera?"perspective("+m+"px) ":"")+b+"translate("+s+"px,"+r+"px)";a.camera.style!==C&&(h.style.transform=C,a.camera.style=C),g(_,_,p)},this.setSize=function(_,p){e=_,n=p,s=e/2,r=n/2,o.style.width=_+"px",o.style.height=p+"px",l.style.width=_+"px",l.style.height=p+"px",h.style.width=_+"px",h.style.height=p+"px"};function c(_){return Math.abs(_)<1e-10?0:_}function d(_){const p=_.elements;return"matrix3d("+c(p[0])+","+c(-p[1])+","+c(p[2])+","+c(p[3])+","+c(p[4])+","+c(-p[5])+","+c(p[6])+","+c(p[7])+","+c(p[8])+","+c(-p[9])+","+c(p[10])+","+c(p[11])+","+c(p[12])+","+c(-p[13])+","+c(p[14])+","+c(p[15])+")"}function u(_){const p=_.elements;return"translate(-50%,-50%)"+("matrix3d("+c(p[0])+","+c(p[1])+","+c(p[2])+","+c(p[3])+","+c(-p[4])+","+c(-p[5])+","+c(-p[6])+","+c(-p[7])+","+c(p[8])+","+c(p[9])+","+c(p[10])+","+c(p[11])+","+c(p[12])+","+c(p[13])+","+c(p[14])+","+c(p[15])+")")}function f(_){_.isCSS3DObject&&(_.element.style.display="none");for(let p=0,m=_.children.length;p<m;p++)f(_.children[p])}function g(_,p,m,E){if(_.visible===!1){f(_);return}if(_.isCSS3DObject){const A=_.layers.test(m.layers)===!0,M=_.element;if(M.style.display=A===!0?"":"none",A===!0){_.onBeforeRender(t,p,m);let b;_.isCSS3DSprite?(Di.copy(m.matrixWorldInverse),Di.transpose(),_.rotation2D!==0&&Di.multiply(eE.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(_d,Qb,xd),Di.setPosition(_d),Di.scale(xd),Di.elements[3]=0,Di.elements[7]=0,Di.elements[11]=0,Di.elements[15]=1,b=u(Di)):b=u(_.matrixWorld);const S=a.objects.get(_);if(S===void 0||S.style!==b){M.style.transform=b;const C={style:b};a.objects.set(_,C)}M.parentNode!==h&&h.appendChild(M),_.onAfterRender(t,p,m)}}for(let A=0,M=_.children.length;A<M;A++)g(_.children[A],p,m)}}},nE=class{constructor(i){this.viewer=i,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new iE({element:this.element}),this.scene=new Wb,this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(e=>{const n=e.target[oe];n.config.visible&&(n.viewportIntersection=e.isIntersecting)})},{root:this.element}),i.addEventListener(Ft.ReadyEvent.type,this,{once:!0}),i.addEventListener(Ft.SizeUpdatedEvent.type,this),i.addEventListener(Ft.RenderEvent.type,this)}handleEvent(i){switch(i.type){case Ft.ReadyEvent.type:case Ft.SizeUpdatedEvent.type:this.updateSize();break;case Ft.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(Ft.ReadyEvent.type,this),this.viewer.removeEventListener(Ft.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(Ft.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const i=this.viewer.getSize();this.renderer.setSize(i.width,i.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(i){this.scene.add(i.threeElement),this.intersectionObserver.observe(i.domElement)}removeObject(i){this.scene.remove(i.threeElement),this.intersectionObserver.unobserve(i.domElement)}},ro=(i=>(i.image="image",i.html="html",i.element="element",i.imageLayer="imageLayer",i.videoLayer="videoLayer",i.elementLayer="elementLayer",i.polygon="polygon",i.polygonPixels="polygonPixels",i.polyline="polyline",i.polylinePixels="polylinePixels",i.square="square",i.rect="rect",i.circle="circle",i.ellipse="ellipse",i.path="path",i))(ro||{});function Hh(i,t=!1){const e=[];if(Object.keys(ro).forEach(n=>{i[n]&&e.push(n)}),e.length===0&&!t)throw new Rt(`missing marker content, either ${Object.keys(ro).join(", ")}`);if(e.length>1)throw new Rt(`multiple marker content, either ${Object.keys(ro).join(", ")}`);return e[0]}var mg=class{constructor(i,t,e){if(this.viewer=i,this.plugin=t,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!e.id)throw new Rt("missing marker id");this.type=Hh(e),this.createElement(),this.update(e)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(i){const t=Hh(i,!0);if(t!==void 0&&t!==this.type)throw new Rt(`cannot change marker ${i.id} type`);if(this.config=zt.deepmerge(this.config,i),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),zt.isNil(this.config.visible)&&(this.config.visible=!0),zt.isNil(this.config.zIndex)&&(this.config.zIndex=1),zt.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const e=this.config.rotation;typeof e=="object"?this.config.rotation={yaw:e.yaw?zt.parseAngle(e.yaw,!0,!1):0,pitch:e.pitch?zt.parseAngle(e.pitch,!0,!1):0,roll:e.roll?zt.parseAngle(e.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:zt.parseAngle(e,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=zt.parsePoint(this.config.anchor)}getListContent(){var i;return this.config.listContent?this.config.listContent:(i=this.config.tooltip)!=null&&i.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(i,t,e=!1){var n;if(this.state.visible&&((n=this.config.tooltip)!=null&&n.content)&&this.state.position2D){const s={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(i||t){const r=zt.getPosition(this.viewer.container);s.top=t-r.y+10,s.left=i-r.x,s.box={width:20,height:20}}else s.top=this.state.position2D.y,s.left=this.state.position2D.x;else{const r=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let a=this.state.size.width,o=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(a*=this.config.hoverScale.amount,o*=this.config.hoverScale.amount),s.top=r.y-o*this.state.anchor.y+o/2,s.left=r.x-a*this.state.anchor.x+a/2,s.box={width:a,height:o}}this.tooltip?e?this.tooltip.update(this.config.tooltip.content,s):this.tooltip.move(s):this.tooltip=this.viewer.createTooltip(s)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},Mc=class extends mg{get domElement(){return this.element}constructor(i,t,e){super(i,t,e)}afterCreateElement(){this.element[oe]=this}destroy(){delete this.element[oe],super.destroy()}update(i){super.update(i);const t=this.domElement;t.id=`psv-marker-${this.config.id}`,t.setAttribute("class","psv-marker"),this.state.visible&&t.classList.add("psv-marker--visible"),this.config.tooltip&&t.classList.add("psv-marker--has-tooltip"),this.config.content&&t.classList.add("psv-marker--has-content"),this.config.className&&zt.addClasses(t,this.config.className),t.style.opacity=`${this.config.opacity}`,t.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(t.style,this.config.style)}},_o=class extends Mc{constructor(i,t,e){super(i,t,e)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:i,zoomLevel:t,hoveringMarker:e}){this.__updateSize();const n=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return n.x-=this.state.size.width*this.state.anchor.x,n.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&n.x+this.state.size.width>=0&&n.x-this.state.size.width<=this.viewer.state.size.width&&n.y+this.state.size.height>=0&&n.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${n.x}px ${n.y}px 0px`,this.applyScale({zoomLevel:t,viewerPosition:i,mouseover:this===e}),n):null}update(i){if(super.update(i),!zt.isExtendedPosition(this.config.position))throw new Rt(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(e){throw new Rt(`invalid marker ${this.id} position`,e)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const t=this.domElement;t.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||Vh:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),t.style.rotate=this.config.rotation.roll!==0?id.radToDeg(this.config.rotation.roll)+"deg":null,t.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const i=this.domElement,t=!this.state.visible||!this.state.size;if(t&&i.classList.add("psv-marker--transparent"),this.isSvg()){const e=i.firstElementChild.getBoundingClientRect();this.state.size={width:e.width,height:e.height}}else this.state.size={width:i.offsetWidth,height:i.offsetHeight};t&&i.classList.remove("psv-marker--transparent"),this.isSvg()&&(i.style.width=this.state.size.width+"px",i.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:i,viewerPosition:t,mouseover:e}){e!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let n=1;if(typeof this.config.scale=="function")n=this.config.scale(i,t);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;n*=s+(r-s)*Gr.EASINGS.inQuad(i/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,a=id.degToRad(this.viewer.state.hFov)/2,o=Math.abs(zt.getShortestArc(this.state.position.yaw,t.yaw));n*=r+(s-r)*Gr.EASINGS.outQuad(Math.max(0,(a-o)/a))}}e&&this.config.hoverScale&&(n*=this.config.hoverScale.amount),this.domElement.style.scale=`${n}`}},sE=`// https://www.8thwall.com/playground/chromakey-threejs

uniform sampler2D map;
uniform float alpha;
uniform bool keying;
uniform vec3 color;
uniform float similarity;
uniform float smoothness;
uniform float spill;

varying vec2 vUv;

vec2 RGBtoUV(vec3 rgb) {
    return vec2(
        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
}

void main(void) {
    gl_FragColor = texture2D(map, vUv);

    if (keying) {
        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));

        float baseMask = chromaDist - similarity;
        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
        gl_FragColor.a *= fullMask * alpha;

        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);
        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);
    } else {
        gl_FragColor.a *= alpha;
    }
}
`,rE=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,aE=class extends Gb{get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}set alpha(i){this.uniforms.alpha.value=i}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(i){this.uniforms.keying.value=(i==null?void 0:i.enabled)===!0,i!=null&&i.enabled&&(typeof i.color=="object"&&"r"in i.color?this.uniforms.color.value.set(i.color.r/255,i.color.g/255,i.color.b/255):this.uniforms.color.value.set(i.color??65280),this.uniforms.similarity.value=i.similarity??.2,this.uniforms.smoothness.value=i.smoothness??.2)}constructor(i){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:i==null?void 0:i.map},repeat:{value:new ti(1,1)},offset:{value:new ti(0,0)},alpha:{value:(i==null?void 0:i.alpha)??1},keying:{value:!1},color:{value:new Qr(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:rE,fragmentShader:sE}),this.chromaKey=i==null?void 0:i.chromaKey}};function oE({src:i,withCredentials:t,muted:e,autoplay:n}){const s=document.createElement("video");return s.crossOrigin=t?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=n,s.muted=e,s.preload="metadata",i instanceof MediaStream?s.srcObject=i:s.src=i,s}function lE(i,t,e){const[n,s]=i,[r,a]=t,o=zt.greatArcDistance(i,t),l=Math.sin((1-e)*o)/Math.sin(o),h=Math.sin(e*o)/Math.sin(o),c=l*Math.cos(s)*Math.cos(n)+h*Math.cos(a)*Math.cos(r),d=l*Math.cos(s)*Math.sin(n)+h*Math.cos(a)*Math.sin(r),u=l*Math.sin(s)+h*Math.sin(a);return[Math.atan2(d,c),Math.atan2(u,Math.sqrt(c*c+d*d))]}function hE(i){const t=[i[0]];let e=0;for(let n=1;n<i.length;n++){const s=i[n-1][0]-i[n][0];s>Math.PI?e+=1:s<-Math.PI&&(e-=1),t.push([i[n][0]+e*2*Math.PI,i[n][1]])}return t}function gg(i){return i.reduce((t,e)=>t.add(e),new j).normalize()}function cE(i){const t=hE(i);let e=0;const n=[];for(let r=0;r<t.length-1;r++){const a=zt.greatArcDistance(t[r],t[r+1])*Gr.SPHERE_RADIUS;n.push(a),e+=a}let s=0;for(let r=0;r<t.length-1;r++){if(s+n[r]>e/2){const a=(e/2-s)/n[r];return lE(t[r],t[r+1],a)}s+=n[r]}return t[Math.round(t.length/2)]}var Xa=new j,yd=new j,Ul=new j,Md=new j,Sd=new j,bd=new j;function uE(i,t,e){Xa.copy(e).normalize(),yd.crossVectors(i,t).normalize(),Ul.crossVectors(yd,i).normalize(),Md.copy(i).multiplyScalar(-Xa.dot(Ul)),Sd.copy(Ul).multiplyScalar(Xa.dot(i));const n=new j().addVectors(Md,Sd).normalize();return bd.crossVectors(n,Xa),n.applyAxisAngle(bd,.01).multiplyScalar(Gr.SPHERE_RADIUS)}var dE=class extends mg{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(i,t,e){super(i,t,e)}is3d(){return!0}createElement(){const i=new aE({alpha:0}),t=new yc(1,1),e=new Ob(t,i);e.userData={[oe]:this},Object.defineProperty(e,"visible",{enumerable:!0,get:function(){return this.userData[oe].config.visible},set:function(n){this.userData[oe].config.visible=n}}),this.element=new Xb().add(e),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[oe],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(i){var s,r,a;super.update(i);const t=this.threeMesh,e=t.parent,n=t.material;if(zt.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(l){throw new Rt(`invalid marker ${this.id} position`,l)}if(!this.config.size)throw new Rt(`missing marker ${this.id} size`);this.state.size=this.config.size,t.scale.set(this.config.size.width/100,this.config.size.height/100,1),t.position.set(t.scale.x*(.5-this.state.anchor.x),t.scale.y*(this.state.anchor.y-.5),0),t.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,e.position),e.lookAt(0,e.position.y,0),t.rotateY(-this.config.rotation.yaw),t.rotateX(-this.config.rotation.pitch),t.rotateZ(-this.config.rotation.roll);const o=t.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(l=>{const h=new j;return h.fromBufferAttribute(o,l),t.localToWorld(h)})}else{if(((s=this.config.position)==null?void 0:s.length)!==4)throw new Rt(`missing marker ${this.id} position`);let o;try{o=this.config.position.map(d=>this.viewer.dataHelper.cleanPosition(d))}catch(d){throw new Rt(`invalid marker ${this.id} position`,d)}const l=o.map(d=>this.viewer.dataHelper.sphericalCoordsToVector3(d)),h=gg(l);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(h),this.state.positions3D=l;const c=t.geometry.getAttribute("position");[l[0],l[1],l[3],l[2]].forEach((d,u)=>{c.setX(u,d.x),c.setY(u,d.y),c.setZ(u,d.z)}),c.needsUpdate=!0,this.__setTextureWrap(n)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){(r=n.map)==null||r.dispose();const o=oE({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),l=new $b(o);n.map=l,n.alpha=0,o.addEventListener("loadedmetadata",()=>{this.viewer&&(n.alpha=this.config.opacity,zt.isExtendedPosition(this.config.position)||(t.material.userData[oe]={width:o.videoWidth,height:o.videoHeight},this.__setTextureWrap(n)))},{once:!0}),o.autoplay&&o.play(),this.definition=this.config.videoLayer}else n.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){(a=n.map)==null||a.dispose();const o=new on;n.map=o,n.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(l=>{this.viewer&&(zt.isExtendedPosition(this.config.position)||(t.material.userData[oe]={width:l.width,height:l.height},this.__setTextureWrap(n)),o.image=l,o.anisotropy=4,o.needsUpdate=!0,n.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else n.alpha=this.config.opacity;break}n.chromaKey=this.config.chromaKey,t.renderOrder=1e3+this.config.zIndex,t.geometry.boundingBox=null}__setTextureWrap(i){const t=i.userData[oe];if(!t||!t.height||!t.width){i.repeat.set(1,1),i.offset.set(0,0);return}const e=this.config.position.map(d=>this.viewer.dataHelper.cleanPosition(d)),n=zt.greatArcDistance([e[0].yaw,e[0].pitch],[e[1].yaw,e[1].pitch]),s=zt.greatArcDistance([e[3].yaw,e[3].pitch],[e[2].yaw,e[2].pitch]),r=zt.greatArcDistance([e[1].yaw,e[1].pitch],[e[2].yaw,e[2].pitch]),a=zt.greatArcDistance([e[0].yaw,e[0].pitch],[e[3].yaw,e[3].pitch]),o=(n+s)/(r+a),l=t.width/t.height;let h=0,c=0;o<l?h=l-o:c=1/l-1/o,i.repeat.set(1-h,1-c),i.offset.set(h/2,c/2)}},fE=class extends Mc{constructor(i,t,e){super(i,t,e),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new tE(this.element),this.object.userData={[oe]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[oe].config.visible},set:function(i){this.userData[oe].config.visible=i}}),this.afterCreateElement()}destroy(){delete this.object.userData[oe],delete this.object,super.destroy()}render({viewerPosition:i,zoomLevel:t}){var s,r;const e=this.domElement;if(this.state.size={width:e.offsetWidth,height:e.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const a=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return(r=(s=this.config.elementLayer).updateMarker)==null||r.call(s,{marker:this,position:a,viewerPosition:i,zoomLevel:t,viewerSize:this.viewer.state.size}),a}else return null}update(i){if(super.update(i),!zt.isExtendedPosition(this.config.position))throw new Rt(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new Rt(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const t=this.threeElement,e=this.domElement;e.classList.add("psv-marker--css3d"),e.childNodes.forEach(n=>n.remove()),e.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",t.position.copy(this.state.positions3D[0]).multiplyScalar(100),t.lookAt(0,this.state.positions3D[0].y*100,0),t.rotateY(-this.config.rotation.yaw),t.rotateX(-this.config.rotation.pitch),t.rotateZ(-this.config.rotation.roll)}},pE=class extends _o{constructor(i,t,e){super(i,t,e)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(i){var e,n;const t=super.render(i);return t&&this.type==="element"&&((n=(e=this.config.element).updateMarker)==null||n.call(e,{marker:this,position:t,viewerPosition:i.viewerPosition,zoomLevel:i.zoomLevel,viewerSize:this.viewer.state.size})),t}update(i){super.update(i);const t=this.domElement;if(this.config.image&&!this.config.size)throw new Rt(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,t.style.width=this.config.size.width+"px",t.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,t.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,t.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,t.childNodes.forEach(e=>e.remove()),t.appendChild(this.config.element),this.config.element.style.display="block");break}}},mE=class extends Mc{constructor(i,t,e){super(i,t,e)}createElement(){this.element=document.createElementNS(vo,"path"),this.element[oe]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const i=this.__getAllPolyPositions();if(i[0].length>(this.isPolygon?2:1)){const e=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),n=i.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(a=>`${a.x-e.x},${a.y-e.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",n),this.domElement.setAttributeNS(null,"transform",`translate(${e.x} ${e.y})`),e}else return null}update(i){super.update(i);const t=this.domElement;t.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([e,n])=>{t.setAttributeNS(null,zt.dasherize(e),n)}),this.isPolyline&&!this.config.svgStyle.fill&&t.setAttributeNS(null,"fill","none")):this.isPolygon?t.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(t.setAttributeNS(null,"fill","none"),t.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let e=this.config[this.type];if(!Array.isArray(e[0])&&typeof e[0]!="object")for(let n=0;n<e.length;n++)e.splice(n,2,[e[n],e[n+1]]);if(!Array.isArray(e[0][0])&&typeof e[0][0]!="object"&&(e=[e]),this.isPolyline&&e.length>1)throw new Rt("polylines cannot have holes");this.isPixels?this.definition=e.map(n=>n.map(s=>{let r;return zt.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:s[0],textureY:s[1]}),[r.yaw,r.pitch]})):this.definition=e.map(n=>n.map(s=>{let r;return zt.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.cleanPosition({yaw:s[0],pitch:s[1]}),[r.yaw,r.pitch]}))}catch(e){throw new Rt(`invalid marker ${this.id} position`,e)}if(this.positions3D=this.coords.map(e=>e.map(n=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:n[0],pitch:n[1]}))),this.isPolygon){const e=gg(this.positions3D[0]);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(e)}else{const e=cE(this.coords[0]);this.state.position={yaw:e[0],pitch:e[1]}}this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(i=>this.__getPolyPositions(i))}__getPolyPositions(i){const t=i.length,e=i.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),n=[];return e.forEach((s,r)=>{s.visible||[r===0?e[t-1]:e[r-1],r===t-1?e[0]:e[r+1]].forEach(o=>{o.visible&&n.push({visible:o.vector,invisible:s.vector,index:r})})}),n.reverse().forEach(s=>{e.splice(s.index,0,{vector:uE(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),e.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},gE=class extends _o{get svgElement(){return this.domElement.firstElementChild}constructor(i,t,e){super(i,t,e)}isSvg(){return!0}createElement(){const i=this.type==="square"?"rect":this.type,t=document.createElementNS(vo,i);this.element=document.createElementNS(vo,"svg"),this.element.appendChild(t),this.afterCreateElement()}update(i){super.update(i);const t=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([e,n])=>{t.setAttributeNS(null,e,n)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([e,n])=>{t.setAttributeNS(null,zt.dasherize(e),n)}):t.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},vE=zt.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(i){return i?(i===!0&&(i=Vh),typeof i=="number"&&(i={amount:i}),{...Vh,...i}):null}});function _E(i){switch(Hh(i,!1)){case"image":case"html":case"element":return pE;case"imageLayer":case"videoLayer":return dE;case"elementLayer":return fE;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return mE;case"square":case"rect":case"circle":case"ellipse":case"path":return gE;default:throw new Rt("invalid marker type")}}var ta=class vg extends Cm{constructor(t,e){super(t,e),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.svgContainer=document.createElementNS(vo,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new nE(t),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}static withConfig(t){return[vg,t]}init(){super.init(),zt.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(Ft.ClickEvent.type,this),this.viewer.addEventListener(Ft.DoubleClickEvent.type,this),this.viewer.addEventListener(Ft.RenderEvent.type,this),this.viewer.addEventListener(Ft.ConfigChangedEvent.type,this),this.viewer.addEventListener(Ft.ObjectEnterEvent.type,this),this.viewer.addEventListener(Ft.ObjectHoverEvent.type,this),this.viewer.addEventListener(Ft.ObjectLeaveEvent.type,this),this.viewer.addEventListener(Ft.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(oe),this.viewer.removeEventListener(Ft.ClickEvent.type,this),this.viewer.removeEventListener(Ft.DoubleClickEvent.type,this),this.viewer.removeEventListener(Ft.RenderEvent.type,this),this.viewer.removeEventListener(Ft.ObjectEnterEvent.type,this),this.viewer.removeEventListener(Ft.ObjectHoverEvent.type,this),this.viewer.removeEventListener(Ft.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(Ft.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(t){var e;switch(t.type){case Ft.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case Ft.RenderEvent.type:this.renderMarkers();break;case Ft.ClickEvent.type:this.__onClick(t,!1);break;case Ft.DoubleClickEvent.type:this.__onClick(t,!0);break;case Ft.ObjectEnterEvent.type:case Ft.ObjectLeaveEvent.type:case Ft.ObjectHoverEvent.type:if(t.userDataKey===oe){const n=t.originalEvent,s=t.object.userData[oe];switch(t.type){case Ft.ObjectEnterEvent.type:(e=s.config.style)!=null&&e.cursor?this.viewer.setCursor(s.config.style.cursor):(s.config.tooltip||s.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(n,s);break;case Ft.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(s);break;case Ft.ObjectHoverEvent.type:this.__onHoverMarker(n,s);break}}break;case"mouseenter":{const n=this.__getTargetMarker(zt.getEventTarget(t));this.__onEnterMarker(t,n);break}case"mouseleave":{const n=this.__getTargetMarker(zt.getEventTarget(t));this.__onLeaveMarker(n);break}case"mousemove":{const n=this.__getTargetMarker(zt.getEventTarget(t),!0);this.__onHoverMarker(t,n);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(t=>{t.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new Or)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(t=>{t.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new Nr)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!0,t.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!1,t.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(t,e=!0){if(this.markers[t.id])throw new Rt(`marker "${t.id}" already exists`);const n=new(_E(t))(this.viewer,this,t);n.isPoly()?this.svgContainer.appendChild(n.domElement):n.isCss3d()?this.css3DContainer.addObject(n):n.is3d()?this.viewer.renderer.addObject(n.threeElement):this.container.appendChild(n.domElement),this.markers[n.id]=n,this.state.showAllTooltips&&(n.state.staticTooltip=!0),e&&this.__afterChangeMarkers()}getMarker(t){const e=typeof t=="object"?t.id:t;if(!this.markers[e])throw new Rt(`cannot find marker "${e}"`);return this.markers[e]}getCurrentMarker(){return this.state.currentMarker}updateMarker(t,e=!0){var s;const n=this.getMarker(t.id);n.update(t),e&&(this.__afterChangeMarkers(),(n===this.state.hoveringMarker&&((s=n.config.tooltip)==null?void 0:s.trigger)==="hover"||n.state.staticTooltip)&&n.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(t,e=!0){const n=this.getMarker(t);n.isPoly()?this.svgContainer.removeChild(n.domElement):n.isCss3d()?this.css3DContainer.removeObject(n):n.is3d()?this.viewer.renderer.removeObject(n.threeElement):this.container.removeChild(n.domElement),this.state.hoveringMarker===n&&(this.state.hoveringMarker=null),this.state.currentMarker===n&&(this.state.currentMarker=null),n.destroy(),delete this.markers[n.id],e&&this.__afterChangeMarkers()}removeMarkers(t,e=!0){t.forEach(n=>this.removeMarker(n,!1)),e&&this.__afterChangeMarkers()}setMarkers(t,e=!0){this.clearMarkers(!1),t==null||t.forEach(n=>{this.addMarker(n,!1)}),e&&this.__afterChangeMarkers()}clearMarkers(t=!0){Object.keys(this.markers).forEach(e=>{this.removeMarker(e,!1)}),t&&this.__afterChangeMarkers()}gotoMarker(t,e=this.config.gotoMarkerSpeed){const n=this.getMarker(t);return e?this.viewer.animate({...n.state.position,zoom:n.config.zoomLvl,speed:e}).then(()=>{this.dispatchEvent(new kh(n))}):(this.viewer.rotate(n.state.position),zt.isNil(n.config.zoomLvl)||this.viewer.zoom(n.config.zoomLvl),this.dispatchEvent(new kh(n)),Promise.resolve())}hideMarker(t){this.toggleMarker(t,!1)}showMarker(t){this.toggleMarker(t,!0)}showMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!0,e.showTooltip()}hideMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!1,e.hideTooltip()}toggleMarker(t,e){const n=this.getMarker(t);n.config.visible=zt.isNil(e)?!n.config.visible:e,this.renderMarkers()}showMarkerPanel(t){const e=this.getMarker(t);e.config.content?this.viewer.panel.show({id:xr,content:e.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(xr)}toggleMarkersList(){this.viewer.panel.isVisible(Os)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let t=[];Object.values(this.markers).forEach(n=>{n.config.visible&&!n.config.hideList&&t.push(n)});const e=new fg(t);this.dispatchEvent(e),t=e.markers,this.viewer.panel.show({id:Os,content:jb(t,this.viewer.config.lang[Xr.id]),noMargin:!0,clickHandler:n=>{const s=zt.getClosest(n,".psv-panel-menu-item"),r=s?s.dataset[oe]:void 0;if(r){const a=this.getMarker(r);this.dispatchEvent(new tg(a)),this.gotoMarker(a.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(Os)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const t=this.viewer.getZoomLevel(),e=this.viewer.getPosition(),n=this.state.hoveringMarker;Object.values(this.markers).forEach(s=>{let r=s.config.visible,a=null;r&&(a=s.render({viewerPosition:e,zoomLevel:t,hoveringMarker:n}),r=!!a);const o=s.state.visible!==r;s.state.visible=r,s.state.position2D=a,s.domElement&&zt.toggleClass(s.domElement,"psv-marker--visible",r),r?s.state.staticTooltip?s.showTooltip():s!==this.state.hoveringMarker&&s.hideTooltip():s.hideTooltip(),o&&(this.dispatchEvent(new km(s,r)),(s.is3d()||s.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(t,e=!1){if(t instanceof Node){const n=e?zt.getClosest(t,".psv-marker"):t;return n?n[oe]:void 0}else return Array.isArray(t)?t.map(n=>n.userData[oe]).filter(n=>!!n).sort((n,s)=>s.config.zIndex-n.config.zIndex)[0]:null}__onEnterMarker(t,e){var n;e&&(this.state.hoveringMarker=e,this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,this.dispatchEvent(new Ym(e)),e instanceof _o&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!e.state.staticTooltip&&((n=e.config.tooltip)==null?void 0:n.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onLeaveMarker(t){var e;t&&(this.dispatchEvent(new Xm(t)),t instanceof _o&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!t.state.staticTooltip&&((e=t.config.tooltip)==null?void 0:e.trigger)==="hover"?t.hideTooltip():t.state.staticTooltip&&t.showTooltip())}__onHoverMarker(t,e){var n;e&&(this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,(e.isPoly()||e.is3d()||e.isCss3d())&&((n=e.config.tooltip)==null?void 0:n.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onClick(t,e){var a,o;const n=this.__getTargetMarker(t.data.objects),r=this.__getTargetMarker(t.data.target,!0)||n;this.state.currentMarker&&this.state.currentMarker!==r&&(this.dispatchEvent(new ng(this.state.currentMarker)),this.viewer.panel.hide(xr),!this.state.showAllTooltips&&((a=this.state.currentMarker.config.tooltip)==null?void 0:a.trigger)==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),r&&(this.state.currentMarker=r,this.dispatchEvent(new Jm(r,e,t.data.rightclick)),this.config.clickEventOnMarker?t.data.marker=r:t.stopImmediatePropagation(),this.markers[r.id]&&!t.data.rightclick&&(((o=r.config.tooltip)==null?void 0:o.trigger)==="click"?r.tooltip?this.hideMarkerTooltip(r.id):this.showMarkerTooltip(r.id):this.showMarkerPanel(r.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new lg(this.getMarkers()))}__refreshUi(){var e,n;const t=Object.values(this.markers).filter(s=>!s.config.hideList).length;t===0?(this.viewer.panel.hide(xr),this.viewer.panel.hide(Os)):this.viewer.panel.isVisible(Os)?this.showMarkersList():this.viewer.panel.isVisible(xr)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),(e=this.viewer.navbar.getButton(Xr.id,!1))==null||e.toggle(t>0),(n=this.viewer.navbar.getButton(Do.id,!1))==null||n.toggle(t>0)}__checkObjectsObserver(){Object.values(this.markers).some(e=>e.is3d())?this.viewer.observeObjects(oe):this.viewer.unobserveObjects(oe)}};ta.id="markers";ta.VERSION="5.15.1";ta.configParser=vE;ta.readonlyOptions=["markers"];var Ed=ta;cn.lang[Xr.id]="Markers";cn.lang[Do.id]="Markers list";_c(Xr,"caption:left");_c(Do,"caption:left");const Fl="目标场景已不存在",Nl="目标站位已不存在",xE=500,yE=1e3;function ME(i,t){if(!i)return{ok:!1,message:Fl};if(i.target_kind==="standpoint"){if(i.target_available===!1||i.target_standpoint_id==null)return{ok:!1,message:Nl};for(const s of t||[]){const r=(s.standpoints||[]).find(o=>o.id===i.target_standpoint_id);if(!r)continue;const a=r.image_url||s.image_url;return a?{ok:!0,kind:"standpoint",scene:s,standpoint:{...r,image_url:a,hotspots:r.hotspots||[]}}:{ok:!1,message:Nl}}return{ok:!1,message:Nl}}if(i.target_available===!1||i.target_scene_id==null)return{ok:!1,message:Fl};const e=(t||[]).find(s=>s.id===i.target_scene_id),n=e?Gh(e):null;return!e||!(n!=null&&n.image_url)?{ok:!1,message:Fl}:{ok:!0,kind:"scene",scene:e,standpoint:n}}function SE(i){return i!=null&&i.length?i.find(t=>t.is_entry)||[...i].sort((t,e)=>t.sort_order-e.sort_order)[0]:null}function Gh(i){if(!i)return null;const t=Array.isArray(i.standpoints)?i.standpoints:[],e=t.find(n=>n.is_entry)||[...t].sort((n,s)=>(n.sort_order??0)-(s.sort_order??0)||(n.id??0)-(s.id??0))[0];return e?{...e,image_url:e.image_url||i.image_url,thumbnail_url:e.thumbnail_url||i.thumbnail_url||e.image_url||i.image_url,hotspots:e.hotspots||[]}:{id:null,scene_id:i.id,name:i.name,image_url:i.image_url,thumbnail_url:i.thumbnail_url||i.image_url,position_x:0,position_y:0,yaw:0,pitch:0,sort_order:0,is_entry:!0,hotspots:i.hotspots||[]}}function bE(i,t,e){const n=$n(t==null?void 0:t.position_x)-$n(i==null?void 0:i.position_x),s=$n(t==null?void 0:t.position_y)-$n(i==null?void 0:i.position_y),r=Math.hypot(n,s),a=EE(Math.round(560+r*80),xE,yE),o=Math.round(a*.42),l=a-o,h=(e==null?void 0:e.yaw)??wE(Math.atan2(n,s)-$n(i==null?void 0:i.yaw)),c=(e==null?void 0:e.pitch)??-.2;return{durationMs:a,approachMs:o,fadeMs:l,effect:"fade",showLoader:!1,translate:{x:n,y:s,distance:r},approach:{yaw:h,pitch:Math.min(c,-.05),zoom:46},landing:{yaw:$n(t==null?void 0:t.yaw),pitch:$n(t==null?void 0:t.pitch),zoom:30}}}function Jn(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function $n(i){const t=Number(i);return Number.isFinite(t)?t:0}function EE(i,t,e){return Math.min(e,Math.max(t,i))}function wE(i){const t=Math.PI*2;let e=i;for(;e>Math.PI;)e-=t;for(;e<-Math.PI;)e+=t;return e}function TE(){let i=!1;return{get active(){return i},async run(t){if(i)return{skipped:!0};i=!0;try{return{skipped:!1,value:await t()}}finally{i=!1}}}}async function AE({from:i,to:t,hotspot:e,animate:n,setPanorama:s}){const r=bE(i,t,e);if(!(t!=null&&t.image_url)){const o=new Error("目标站位没有全景图");throw o.code="missing-image",o}if(await n({yaw:r.approach.yaw,pitch:r.approach.pitch,zoom:r.approach.zoom,speed:r.approachMs}),await s(t.image_url,{showLoader:!1,position:{yaw:r.landing.yaw,pitch:r.landing.pitch},zoom:r.landing.zoom,transition:{speed:r.fadeMs,effect:r.effect,rotation:!0}})===!1){const o=new Error("过渡被中断");throw o.code="aborted",o}return r}const CE={zoom:"缩放",zoomOut:"缩小",zoomIn:"放大",moveUp:"向上",moveDown:"向下",moveLeft:"向左",moveRight:"向右",description:"说明",download:"下载",fullscreen:"全屏",loading:"正在加载全景…",menu:"菜单",close:"关闭",twoFingers:"使用双指拖动",ctrlZoom:"滚动鼠标滚轮可缩放",loadError:"全景加载失败",webglError:"当前浏览器似乎不支持 WebGL"};async function RE(i,{shareCode:t,apiBase:e}){if(!t){Td(i,"缺少分享码","请使用作品分享链接打开。");return}UE(i);try{const n=await PE(e,t);LE(i,n)}catch(n){Td(i,n.message||"作品加载失败","请稍后重试。")}}async function PE(i,t){let e;try{e=await fetch(`${i.replace(/\/$/,"")}/tours/${encodeURIComponent(t)}`,{headers:{Accept:"application/json"}})}catch{throw new Error("网络异常，请重试")}const n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.message||"作品加载失败");return n}function LE(i,t){const e=i.querySelector("[data-stage]"),n=i.querySelector("[data-viewer]"),s=i.querySelector("[data-title]"),r=i.querySelector("[data-scene-name]"),a=i.querySelector("[data-strip]"),o=i.querySelector("[data-overlay]"),l=i.querySelector("[data-progress]"),h=i.querySelector("[data-overlay-text]"),c=i.querySelector("[data-retry]"),d=i.querySelector("[data-toast]"),u=SE(t.scenes);if(s.textContent=t.name||"全景漫游",!u){Ol(o,h,l,"这个作品还没有可播放的场景",null,!1),c.hidden=!0;return}let f=u,g=Gh(u),_,p,m;const E=TE(),A=N=>{d.hidden=!1,d.textContent=N,clearTimeout(m),m=setTimeout(()=>{d.hidden=!0},2400)},M=()=>{a.innerHTML=t.scenes.map(N=>`
      <button type="button" class="thumb ${N.id===f.id?"is-active":""}" data-scene-id="${N.id}">
        <img src="${Jn(N.thumbnail_url||N.image_url)}" alt="${Jn(N.name)}">
        <span>${Jn(N.name)}</span>
      </button>
    `).join("")},b=()=>{const N=$a(f,g);r.textContent=N,r.dataset.standpointName=(g==null?void 0:g.name)||"",M()},S=N=>{c.hidden=!0,Ol(o,h,l,"正在加载全景…",N,!0)},C=()=>{Ol(o,h,l,"全景加载失败",null,!1),c.hidden=!1},x=()=>{o.hidden=!0},T=()=>{p==null||p.setMarkers(wd(g))},P=async(N,{bustCache:X=!1,loading:U=!1,transition:$=!0}={})=>{if(!(N!=null&&N.image_url))return C(),!1;const z=X?DE(N.image_url):N.image_url;return _?(U&&S(8),await _.setPanorama(z,{caption:$a(f,N),position:{yaw:N.yaw||0,pitch:N.pitch||0},zoom:30,showLoader:!1,transition:$?{speed:800,effect:"fade",rotation:!1}:!1})===!1?!1:(T(),U&&x(),!0)):(U&&S(8),_=new YS({container:n,panorama:z,caption:$a(f,N),navbar:["zoom","fullscreen"],lang:CE,loadingTxt:"正在加载全景…",mousewheel:!0,mousemove:!0,touchmoveTwoFingers:!1,defaultZoomLvl:30,defaultYaw:N.yaw||0,defaultPitch:N.pitch||0,plugins:[Ed.withConfig({clickEventOnMarker:!1,markers:wd(N)})]}),p=_.getPlugin(Ed),_.addEventListener("load-progress",tt=>{o.hidden||S(tt.progress)}),_.addEventListener("panorama-loaded",()=>{e.dataset.transitioning!=="true"&&(T(),x())}),_.addEventListener("panorama-error",()=>{C()}),p.addEventListener("select-marker",({marker:tt})=>{const nt=((g==null?void 0:g.hotspots)||[]).find(_t=>String(_t.id)===String(tt.id)),st=ME(nt,t.scenes);if(!st.ok){A(st.message);return}O(st.scene,st.standpoint,nt)}),!0)},R=(N,X,U={})=>E.run(async()=>{f=N,g=X,b(),e.dataset.transitioning="false";try{await P(X,{loading:!0,transition:!0,...U})||C()}catch{C()}}),O=(N,X,U)=>E.run(async()=>{if(!_){f=N,g=X,b(),await P(X,{loading:!0});return}const $=f,z=g;f=N,g=X,b(),e.dataset.transitioning="true";try{await AE({from:z,to:X,hotspot:U,animate:Y=>_.animate(Y),setPanorama:(Y,tt)=>_.setPanorama(Y,{...tt,caption:$a(N,X)})}),T(),x()}catch(Y){if(f=$,g=z,b(),(Y==null?void 0:Y.code)!=="aborted")try{await _.setPanorama(z.image_url,{showLoader:!1,transition:!1,position:{yaw:z.yaw||0,pitch:z.pitch||0}}),T(),A("走过去失败，请重试")}catch{C()}}finally{e.dataset.transitioning="false"}});a.addEventListener("click",N=>{const X=N.target.closest("[data-scene-id]");if(!X||E.active)return;const U=t.scenes.find($=>String($.id)===X.dataset.sceneId);U&&R(U,Gh(U))}),c.addEventListener("click",()=>{E.active||R(f,g,{bustCache:!0})}),b(),R(u,g),e.dataset.ready="true"}function $a(i,t){return!(((i==null?void 0:i.standpoints)||[]).length>1)||!(t!=null&&t.name)?(i==null?void 0:i.name)||"":`${i.name} · ${t.name}`}function IE(i){const t=String(i.title||i.label||"").trim();return t||(i.target_kind==="standpoint"?"向前走":"前往")}function wd(i){return((i==null?void 0:i.hotspots)||[]).map(t=>{const e=t.target_kind==="standpoint",n=IE(t),s=t.target_available===!1,r=s?`${n}（${e?"目标站位已不存在":"目标场景已不存在"}）`:n;return{id:String(t.id),position:{yaw:t.yaw,pitch:t.pitch},anchor:e?"center center":"bottom center",tooltip:r,html:e?`<button type="button" class="hotspot hotspot-arrow ${s?"is-missing":""}" data-hotspot-id="${t.id}">
            <span class="arrow-chevron" aria-hidden="true"></span>
            <span class="hotspot-label">${Jn(n)}</span>
          </button>`:`<button type="button" class="hotspot ${s?"is-missing":""}" data-hotspot-id="${t.id}">
            <span class="hotspot-dot"></span>
            <span class="hotspot-label">${Jn(n)}</span>
          </button>`}})}function Ol(i,t,e,n,s,r){if(i.hidden=!1,t.textContent=n,e.hidden=s==null,s!=null){const a=Math.max(0,Math.min(100,Math.round(s)));e.querySelector("span").style.width=`${a}%`,e.dataset.value=`${a}%`}i.classList.toggle("is-busy",r)}function DE(i){const t=new URL(i,window.location.origin);return t.searchParams.set("retry",String(Date.now())),t.toString()}function UE(i){i.innerHTML=`
    <div class="shell">
      <header class="topbar">
        <strong data-title>全景漫游</strong>
        <span data-scene-name data-standpoint-name=""></span>
      </header>
      <div class="stage" data-stage data-transitioning="false">
        <div class="viewer" data-viewer></div>
        <div class="overlay" data-overlay>
          <p data-overlay-text>正在加载全景…</p>
          <div class="progress" data-progress hidden><span></span></div>
          <button type="button" data-retry hidden>重试</button>
        </div>
        <p class="hint">单指拖动 · 双指缩放 · 点箭头走动</p>
        <div class="toast" data-toast hidden></div>
      </div>
      <nav class="strip" data-strip aria-label="场景列表"></nav>
    </div>
  `}function Td(i,t,e){i.innerHTML=`
    <main class="message">
      <h1>${Jn(t)}</h1>
      <p>${Jn(e)}</p>
    </main>
  `}const qa=document.querySelector("#app");if(qa){const i=new URLSearchParams(window.location.search);RE(qa,{shareCode:qa.dataset.shareCode||i.get("code")||"",apiBase:qa.dataset.apiBase||"/api"})}
