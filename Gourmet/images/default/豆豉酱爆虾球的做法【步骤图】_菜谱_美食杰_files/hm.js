(function(){var h={},mt={},c={id:"01dd6a7c493607e115255b7e72de5f40",dm:["meishij.net","meishi.cc","i.meishi.cc","so.meishi.cc","app.meishi.cc"],js:"tongji.baidu.com/hm-web/js/",etrk:[{id:"%23erweima_t",eventType:"onclick"},{id:"%23addToFav_con",eventType:"onclick"},{id:"%23tongji_title",eventType:"onclick"},{id:"%23tongji_toolbar_10006",eventType:"onclick"},{id:"%23tongji_caipudaquan",eventType:"onclick"},{id:"%23tongji_author",eventType:"onclick"},{id:"%23tongji_yuanwen_2",eventType:"onclick"},{id:"%23tongji_gy",eventType:"onclick"},{id:"%23tongji_kw",eventType:"onclick"},{id:"%23tongji_shangchuancgt",eventType:"onclick"},{id:"%23tongji_gx_2",eventType:"onclick"},{id:"%23tongji_gx_1",eventType:"onclick"},{id:"%23tongji_gx_0",eventType:"onclick"}],icon:'',ctrk:true,align:1,nv:0,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,r=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(a,b,d){var e;d.M&&(e=new Date,e.setTime(e.getTime()+d.M));document.cookie=a+"="+b+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(e?"; expires="+e.toGMTString():"")+(d.wb?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:t};mt.f={};mt.f.N=function(a){return document.getElementById(a)};
mt.f.P=function(a,b){var d=[],e=[];if(!a)return e;for(;a.parentNode!=t;){for(var k=0,f=0,l=a.parentNode.childNodes.length,g=0;g<l;g++){var n=a.parentNode.childNodes[g];if(n.nodeName===a.nodeName&&(k++,n===a&&(f=k),0<f&&1<k))break}if((l=""!==a.id)&&b){d.unshift("#"+encodeURIComponent(a.id));break}else l&&(l="#"+encodeURIComponent(a.id),l=0<d.length?l+">"+d.join(">"):l,e.push(l)),d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<k?"["+f+"]":""));a=a.parentNode}e.push(d.join(">"));return e};
mt.f.Ma=function(a){return(a=mt.f.P(a,r))&&a.length?String(a[0]):""};mt.f.La=function(a){return mt.f.P(a,u)};mt.f.Da=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.f.Fa=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};
mt.f.Ja=function(a){var b=mt.f.Fa(a),d={top:0,left:0};if(a)return b=b.documentElement,"undefined"!==typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect()),{top:d.top+(window.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};
(mt.f.U=function(){function a(){if(!a.D){a.D=r;for(var b=0,d=e.length;b<d;b++)e[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(b,1);return}a()}var d=u,e=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,u);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!d)if(d=r,"complete"===document.readyState)a.D=r;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
k,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",k);window.attachEvent("onload",a);var e=u;try{e=window.frameElement==t}catch(l){}document.documentElement.doScroll&&e&&b()}})();return function(b){a.D?b():e.push(b)}}()).D=u;mt.event={};mt.event.c=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(e){d.call(a,e)}):a.addEventListener&&a.addEventListener(b,d,u)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=u};
(function(){var a=mt.event;mt.j={};mt.j.ca=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.j.Xa=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:q;mt.j.cookieEnabled=navigator.cookieEnabled;mt.j.javaEnabled=navigator.javaEnabled();mt.j.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.j.eb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.j.colorDepth=window.screen.colorDepth||0;mt.j.orientation=0;
(function(){function b(){var a=0;window.orientation!==q&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==q)&&(a=screen.orientation.angle);mt.j.orientation=a}b();a.c(window,"orientationchange",b)})();return mt.j})();mt.m={};mt.m.parse=function(){return(new Function('return (" + source + ")'))()};
mt.m.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var e=d[a];if(e)return e;e=a.charCodeAt();return"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return a(e);case "boolean":return String(e);
default:if(e===t)return"null";if(e instanceof Array){var d=["["],f=e.length,l,g,n;for(g=0;g<f;g++)switch(n=e[g],typeof n){case "undefined":case "function":case "unknown":break;default:l&&d.push(","),d.push(mt.m.stringify(n)),l=1}d.push("]");return d.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+b(e.getMonth()+1)+"-"+b(e.getDate())+"T"+b(e.getHours())+":"+b(e.getMinutes())+":"+b(e.getSeconds())+'"';l=["{"];g=mt.m.stringify;for(f in e)if(Object.prototype.hasOwnProperty.call(e,f))switch(n=
e[f],typeof n){case "undefined":case "unknown":case "function":break;default:d&&l.push(","),d=1,l.push(g(f)+":"+g(n))}l.push("}");return l.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.tb=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.vb=function(a){return mt.lang.d(a,"String")};mt.lang.h=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.localStorage={};
mt.localStorage.J=function(){if(!mt.localStorage.i)try{mt.localStorage.i=document.createElement("input"),mt.localStorage.i.type="hidden",mt.localStorage.i.style.display="none",mt.localStorage.i.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.i)}catch(a){return u}return r};
mt.localStorage.set=function(a,b,d){var e=new Date;e.setTime(e.getTime()+d||31536E6);try{window.localStorage?(b=e.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.J()&&(mt.localStorage.i.expires=e.toUTCString(),mt.localStorage.i.load(document.location.hostname),mt.localStorage.i.setAttribute(a,b),mt.localStorage.i.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),d=a.substring(0,b)-0;if(d&&d>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.J())try{return mt.localStorage.i.load(document.location.hostname),mt.localStorage.i.getAttribute(a)}catch(e){}return t};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.J())try{mt.localStorage.i.load(document.location.hostname),mt.localStorage.i.removeAttribute(a),mt.localStorage.i.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(d){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):t};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.ia={};mt.ia.log=function(a,b){var d=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=t;d=window[e]=t;b&&b(a)};d.src=a};mt.I={};
mt.I.Oa=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return a};
mt.I.wa=function(a,b,d,e,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+d+'" height="'+e+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+d+'" height="'+e+'" src="'+b+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.g=function(a,b){var d=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return d?d[3]:t};mt.url.rb=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:t};mt.url.Ha=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):t};mt.url.aa=function(a){return(a=mt.url.Ha(a))?a.replace(/:\d+$/,""):a};mt.url.P=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function a(){for(var a=u,d=document.getElementsByTagName("script"),e=d.length,e=100<e?100:e,k=0;k<e;k++){var f=d[k].src;if(f&&0===f.indexOf("https://hm.baidu.com/h")){a=r;break}}return a}return h.Ca=a})();var y=h.Ca;
h.l={Wa:"http://tongji.baidu.com/hm-web/welcome/ico",T:"hm.baidu.com/hm.gif",pa:"baidu.com",Ta:"hmmd",Ua:"hmpl",nb:"utm_medium",Sa:"hmkw",pb:"utm_term",Qa:"hmci",mb:"utm_content",Va:"hmsr",ob:"utm_source",Ra:"hmcu",lb:"utm_campaign",z:0,o:Math.round(+new Date/1E3),Y:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",F:y()||"https:"===document.location.protocol?"https:":"http:",ub:0,ua:6E5,va:5,X:1024,ta:1,w:2147483647,ka:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" ")};
(function(){var a={s:{},c:function(a,d){this.s[a]=this.s[a]||[];this.s[a].push(d)},B:function(a,d){this.s[a]=this.s[a]||[];for(var e=this.s[a].length,k=0;k<e;k++)this.s[a][k](d)}};return h.p=a})();
(function(){function a(a,e){var k=document.createElement("script");k.charset="utf-8";b.d(e,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=t,e()}:k.onload=function(){e()});k.src=a;var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(k,f)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?d.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?d.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||"";return a}var b=mt.localStorage,d=mt.sessionStorage;return h.Z=a})();
(function(){var a=h.l,b=mt.I,d={init:function(){if(""!==c.icon){var e;e=c.icon.split("|");var d=a.Wa+"?s="+c.id,f=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+e[0]+"."+e[1];switch(e[1]){case "swf":e=b.wa("HolmesIcon"+a.o,f,e[2],e[3],"s="+d);break;case "gif":e='<a href="'+d+'" target="_blank"><img border="0" src="'+f+'" width="'+e[2]+'" height="'+e[3]+'"></a>';break;default:e='<a href="'+d+'" target="_blank">'+e[0]+"</a>"}document.write(e)}}};h.p.c("pv-b",d.init);return d})();
(function(){var a=mt.f,b=mt.event,d={ma:function(){b.c(document,"click",d.za());for(var e=c.etrk.length,k=0;k<e;k++){var f=c.etrk[k],l=decodeURIComponent(String(f.id));-1===l.indexOf(">")&&(0===l.indexOf("#")&&(l=l.substring(1)),(l=a.N(decodeURIComponent(l)))&&b.c(l,f.eventType,d.L()))}},L:function(){return function(a){(a.target||a.srcElement).setAttribute("HM_fix",a.clientX+":"+a.clientY);d.fa("#"+encodeURIComponent(this.id),a.type)}},za:function(){return function(e){var b=e.target||e.srcElement;
if(b){var f=b.getAttribute("HM_fix");e=e.clientX+":"+e.clientY;if(f&&f==e)b.removeAttribute("HM_fix");else if(0<c.etrk.length&&(b=a.La(b))&&b.length)if(f=b.length,e=b[b.length-1],1E4>f*e.split(">").length)for(e=0;e<f;e++)d.ha(b[e]);else d.ha(e)}}},ha:function(a){for(var b={},f=String(a).split(">").length,l=0;l<f;l++)b[a]="",a=a.substring(0,a.lastIndexOf(">"));a=c.etrk.length;for(f=0;f<a;f++)l=decodeURIComponent(String(c.etrk[f].id)),b.hasOwnProperty(l)&&d.fa(l)},fa:function(a,b){h.b.a.et=1;h.b.a.ep=
"{id:"+a+",eventType:"+(b||"click")+"}";h.b.k()}};h.p.c("pv-b",d.ma);return d})();
(function(){var a=mt.f,b=mt.lang,d=mt.event,e=mt.j,k=h.l,f=[],l={la:function(){c.ctrk&&(d.c(document,"mouseup",l.sa()),d.c(window,"unload",function(){l.G()}),setInterval(function(){l.G()},k.ua))},sa:function(){return function(a){a=l.Ea(a);if(""!==a){var n=(k.F+"//"+k.T+"?"+h.b.ga().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;n+(k.w+"").length>k.X||(n+encodeURIComponent(f.join("!")+(f.length?"!":"")).length+(k.w+"").length>k.X&&l.G(),f.push(a),(f.length>=k.va||/\*a\*/.test(a))&&l.G())}}},
Ea:function(d){var n=d.target||d.srcElement;if(0===k.ta){var m=(n.tagName||"").toLowerCase();if("embed"==m||"object"==m)return""}var f;e.ca?(f=Math.max(document.documentElement.scrollTop,document.body.scrollTop),m=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),m=d.clientX+m,f=d.clientY+f):(m=d.pageX,f=d.pageY);d=l.Ia(d,n,m,f);var p=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:m-=p/2;break;case 2:m-=p}p=[];p.push(m);
p.push(f);p.push(d.Za);p.push(d.$a);p.push(d.bb);p.push(b.h(d.ab));p.push(d.qb);p.push(d.Pa);(n="a"===(n.tagName||"").toLowerCase()?n:a.Da(n))?(p.push("a"),p.push(b.h(encodeURIComponent(n.href)))):p.push("b");return p.join("*")},Ia:function(d,n,b,f){d=a.Ma(n);var p=0,s=0,k=0,x=0;if(n&&(p=n.offsetWidth||n.clientWidth,s=n.offsetHeight||n.clientHeight,x=a.Ja(n),k=x.left,x=x.top,"html"===(n.tagName||"").toLowerCase()))p=Math.max(p,n.clientWidth),s=Math.max(s,n.clientHeight);return{Za:Math.round(100*((b-
k)/p)),$a:Math.round(100*((f-x)/s)),bb:e.orientation,ab:d,qb:p,Pa:s}},G:function(){0!==f.length&&(h.b.a.et=2,h.b.a.ep=f.join("!"),h.b.k(),f=[])}};h.p.c("pv-b",l.la);return l})();
(function(){var a=mt.f,b=h.l,d=h.load,e=h.Z;h.p.c("pv-b",function(){var k=b.protocol+"//crs.baidu.com/";c.rec&&a.U(function(){for(var f=0,l=c.rp.length;f<l;f++){var g=c.rp[f][0],n=c.rp[f][1],m=a.N("hm_t_"+g);if(n&&!(2==n&&!m||m&&""!==m.innerHTML))m="",m=Math.round(Math.random()*b.w),m=4==n?k+"hl.js?"+["siteId="+c.id,"planId="+g,"rnd="+m].join("&"):k+"t.js?"+["siteId="+c.id,"planId="+g,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+m].join("&"),
d(m)}})})})();(function(){var a=h.l,b=h.load,d=h.Z;h.p.c("pv-b",function(){if(c.trust&&c.vcard){var e="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+d(),"rnd="+Math.round(Math.random()*a.w),"hm=1"].join("&");b(e)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.K.Ka()+","+h.K.Ga();h.b.k()}}function b(){clearTimeout(B);var a;x&&(a="visible"==document[x]);C&&(a=!document[C]);g="undefined"==typeof a?r:a;if((!l||!n)&&g&&m)v=r,p=+new Date;else if(l&&n&&(!g||!m))v=u,s+=+new Date-p;l=g;n=m;B=setTimeout(b,100)}function d(a){var n=document,p="";if(a in n)p=a;else for(var d=["webkit","ms","moz","o"],b=0;b<d.length;b++){var e=d[b]+a.charAt(0).toUpperCase()+a.slice(1);if(e in n){p=
e;break}}return p}function e(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?r:u,b()}var k=mt.event,f=h.p,l=r,g=r,n=r,m=r,w=+new Date,p=w,s=0,v=r,x=d("visibilityState"),C=d("hidden"),B;b();(function(){var a=x.replace(/[vV]isibilityState/,"visibilitychange");k.c(document,a,b);k.c(window,"pageshow",b);k.c(window,"pagehide",b);"object"==typeof document.onfocusin?(k.c(document,"focusin",e),k.c(document,"focusout",e)):(k.c(window,"focus",e),
k.c(window,"blur",e))})();h.K={Ka:function(){return+new Date-w},Ga:function(){return v?+new Date-p+s:s}};f.c("pv-b",function(){k.c(window,"unload",a())});return h.K})();
(function(){var a=mt.lang,b=h.l,d=h.load,e={Ya:function(e){if((window._dxt===q||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var f=h.b.O();d([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(f)].join(""),e)}},jb:function(d){if(a.d(d,"String")||a.d(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.xa=e})();
(function(){function a(a,d,b,p){if(!(a===q||d===q||p===q)){if(""===a)return[d,b,p].join("*");a=String(a).split("!");for(var e,f=u,g=0;g<a.length;g++)if(e=a[g].split("*"),String(d)===e[0]){e[1]=b;e[2]=p;a[g]=e.join("*");f=r;break}f||a.push([d,b,p].join("*"));return a.join("!")}}function b(a){for(var e in a)if({}.hasOwnProperty.call(a,e)){var f=a[e];d.d(f,"Object")||d.d(f,"Array")?b(f):a[e]=String(f)}}var d=mt.lang,e=mt.m,k=h.l,f=h.p,l=h.xa,g={A:[],H:0,da:u,r:{W:"",page:""},init:function(){g.e=0;f.c("pv-b",
function(){g.ya();g.Aa()});f.c("pv-d",function(){g.Ba();g.r.page=""});f.c("stag-b",function(){h.b.a.api=g.e||g.H?g.e+"_"+g.H:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),g.r.W,g.r.page].join("!")});f.c("stag-d",function(){h.b.a.api=0;g.e=0;g.H=0})},ya:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,n=0;n<arguments.length;n++){var p=arguments[n];d.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<
p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Aa:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var d=a.cmd[c.id],b=/^_track(Event|MobConv|Order|RTEvent)$/,p=0,e=d.length;p<e;p++){var f=d[p];b.test(f[0])?g.A.push(f):g.S(f)}a.cmd[c.id]={push:g.S}},Ba:function(){if(0<g.A.length)for(var a=0,d=g.A.length;a<d;a++)g.S(g.A[a]);g.A=t},S:function(a){var b=a[0];if(g.hasOwnProperty(b)&&d.d(g[b],"Function"))g[b](a)},
_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(g.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||r===a))g.e|=2,h.b.ba=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){g.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.Q?(h.b.a.nv=0,h.b.a.st=4):h.b.Q=r;var d=h.b.a.u,b=h.b.a.su;h.b.a.u=k.protocol+"//"+document.location.host+a[1];g.da||(h.b.a.su=document.location.href);h.b.k();h.b.a.u=d;h.b.a.su=b}},_trackEvent:function(a){2<a.length&&(g.e|=8,h.b.a.nv=
0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d.h(a[1])+"*"+d.h(a[2])+(a[3]?"*"+d.h(a[3]):"")+(a[4]?"*"+d.h(a[4]):""),h.b.k())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){g.H++;for(var p=(h.b.a.cv||"*").split("!"),f=p.length;f<b-1;f++)p.push("*");p[b-1]=e+"*"+d.h(a[2])+"*"+d.h(a[3]);h.b.a.cv=p.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.cb("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>
b.length)){var e=d.h(b[1]);b=d.h(b[2]);if(e!==q&&b!==q){var f=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f=a(f,e,1,b);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var e=d.h(b[1]);b=d.h(b[2]);if(e!==q&&b!==q){var f=g.r.W,f=a(f,e,2,b);g.r.W=f}}},_setPageTag:function(b){if(!(3>b.length)){var e=d.h(b[1]);b=d.h(b[2]);if(e!==q&&b!==q){var f=g.r.page,f=a(f,e,3,b);g.r.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&
"/"===a[1].charAt(0)?k.protocol+"//"+window.location.host+a[1]:a[1],g.da=r)},_trackOrder:function(a){a=a[1];d.d(a,"Object")&&(b(a),g.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=e.stringify(a),h.b.k())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])g.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.k()},_trackRTPageview:function(a){a=a[1];d.d(a,"Object")&&(b(a),a=e.stringify(a),512>=encodeURIComponent(a).length&&(g.e|=64,h.b.a.rt=a))},_trackRTEvent:function(a){a=a[1];if(d.d(a,
"Object")){b(a);a=encodeURIComponent(e.stringify(a));var f=function(a){var b=h.b.a.rt;g.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.k();h.b.a.rt=b},l=a.length;if(900>=l)f.call(this,a);else for(var l=Math.ceil(l/900),p="block|"+Math.round(Math.random()*k.w).toString(16)+"|"+l+"|",s=[],v=0;v<l;v++)s.push(v),s.push(a.substring(900*v,900*v+900)),f.call(this,p+s.join("|")),s=[]}},_setUserId:function(a){a=a[1];l.Ya();l.jb(a)}};g.init();h.qa=g;return h.qa})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=r,this.a={},this.ba=r,this.Q=u,this.init())}var b=mt.url,d=mt.ia,e=mt.I,k=mt.lang,f=mt.cookie,l=mt.j,g=mt.localStorage,n=mt.sessionStorage,m=h.l,w=h.p;a.prototype={R:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ea:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},C:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.ea(a,c.dm[d]))return r}else{var e=b.aa(a);if(e&&this.R(e,c.dm[d]))return r}return u},O:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.R(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},$:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ea(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},Na:function(){if(!document.referrer)return m.o-m.z>c.vdur?1:4;
var a=u;this.C(document.referrer)&&this.C(document.location.href)?a=r:(a=b.aa(document.referrer),a=this.R(a||"",document.location.hostname));return a?m.o-m.z>c.vdur?1:4:3},getData:function(a){try{return f.get(a)||n.get(a)||g.get(a)}catch(b){}},setData:function(a,b,d){try{f.set(a,b,{domain:this.O(),path:this.$(),M:d}),d?g.set(a,b,d):n.set(a,b)}catch(e){}},cb:function(a){try{f.set(a,"",{domain:this.O(),path:this.$(),M:-1}),n.remove(a),g.remove(a)}catch(b){}},hb:function(){var a,b,d,e,f;m.z=this.getData("Hm_lpvt_"+
c.id)||0;13===m.z.length&&(m.z=Math.round(m.z/1E3));b=this.Na();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<m.o-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(m.o);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=m.o,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.o);d=m.o===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.C(document.location.href)&&
(""===document.referrer||this.C(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},ga:function(){for(var a=[],b=this.a.et,d=0,e=m.ka.length;d<e;d++){var f=m.ka[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}switch(b){case 0:a.push("sn="+m.Y);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+m.Y);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},
ib:function(){this.hb();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=l.eb;this.a.cl=l.colorDepth+"-bit";this.a.ln=String(l.language).toLowerCase();this.a.ja=l.javaEnabled?1:0;this.a.ck=l.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=e.Oa();this.a.v="1.2.24";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=b.g(a,m.Ta)||"";this.a.cp=b.g(a,m.Ua)||b.g(a,m.nb)||"";this.a.cw=b.g(a,m.Sa)||b.g(a,
m.pb)||"";this.a.ci=b.g(a,m.Qa)||b.g(a,m.mb)||"";this.a.cf=b.g(a,m.Va)||b.g(a,m.ob)||"";this.a.cu=b.g(a,m.Ra)||b.g(a,m.lb)||""},init:function(){try{this.ib(),0===this.a.nv?this.gb():this.V(".*"),h.b=this,this.ra(),w.B("pv-b"),this.fb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(m.F+"//"+m.T+"?"+b.join("&"))}},fb:function(){function a(){w.B("pv-d")}this.ba?(this.Q=r,
this.a.et=0,this.a.ep="",this.k(a)):a()},k:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.w);w.B("stag-b");var e=m.F+"//"+m.T+"?"+b.ga();w.B("stag-d");b.oa(e);d.log(e,function(d){b.V(d);k.d(a,"Function")&&a.call(b)})},ra:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(m.pa),f=b.g(a,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);a&&(d.test(a)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*m.w),a=document.createElement("script"),a.setAttribute("type",
"text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},oa:function(a){var b=n.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");n.set("Hm_unsent_"+c.id,b)},V:function(a){var b=n.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),
a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?n.set("Hm_unsent_"+c.id,b):n.remove("Hm_unsent_"+c.id))},gb:function(){var a=this,b=n.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),e=function(b){d.log(m.F+"//"+decodeURIComponent(b),function(b){a.V(b)})},f=0,g=b.length;f<g;f++)e(b[f])}};return new a})();var z=h.l,A=h.load;if(c.apps){var D=[z.protocol,"//ers.baidu.com/app/s.js?"];D.push(c.apps);A(D.join(""))}var E=h.l,F=h.load;
c.lxb&&F([E.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var G=h.load,H=h.l.protocol;if(c.qiao){for(var I=[H+"//goutong.baidu.com/site/"],J=c.id,K=5381,L=J.length,M=0;M<L;M++)K=(33*K+Number(J.charCodeAt(M)))%4294967296;2147483648<K&&(K-=2147483648);I.push(K%1E3+"/");I.push(c.id+"/b.js");I.push("?siteId="+c.qiao);G(I.join(""))}
(function(){var a=mt.f,b=mt.event,d=mt.url,e=mt.m;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var k=+new Date,f=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},l=t;a.U(function(){l=+new Date});var g=function(){var a,b,g;g=f("navigation");b=f("request");g={netAll:b.start-g.start,netDns:f("domainLookup").value,netTcp:f("connect").value,srv:f("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:f("loadEvent").end-g.start};a=document.referrer;var n=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],v=t;b=t;if("www.baidu.com"===n[2]||"m.baidu.com"===n[2])v=d.g(a,"qid"),b=d.g(a,"click_t");a=v;g.qid=a!=t?a:"";b!=t?(g.bdDom=l?l-b:0,g.bdRun=k-b,g.bdDef=f("navigation").start-b):(g.bdDom=0,g.bdRun=0,g.bdDef=0);h.b.a.et=87;h.b.a.ep=e.stringify(g);h.b.k()};b.c(window,"load",function(){setTimeout(g,500)})}}catch(n){}})();
(function(){var a=mt.j,b=mt.lang,d=mt.event,e=mt.m;if("undefined"!==typeof h.b&&(c.med||(!a.ca||7<a.Xa)&&c.cvcc)){var k,f,l,g,n=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},m=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},w=function(a,d){var f={};f.n=k;f.t="clk";f.v=a;if(d){var g=d.getAttribute("href"),m=d.getAttribute("onclick")?""+d.getAttribute("onclick"):t,n=d.getAttribute("id")||"";l.test(g)?(f.sn="mediate",
f.snv=g):b.d(m,"String")&&l.test(m)&&(f.sn="wrap",f.snv=m);f.id=n}h.b.a.et=86;h.b.a.ep=e.stringify(f);h.b.k();for(f=+new Date;400>=+new Date-f;);};if(c.med)f="/zoosnet",k="swt",l=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,g={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(l.test(e)||l.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){f="/other-comm";k="other";l=c.cvcc.q||q;var p=c.cvcc.id||q;g={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f,g=0,k=b.length;g<k;g++)d=b[g],l!==q?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),p?(d=d.getAttribute("id"),(l.test(e)||l.test(f)||p.test(d))&&
a.push(b[g])):(l.test(e)||l.test(f))&&a.push(b[g])):p!==q&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof g&&"undefined"!==typeof l){var s;f+=/\/$/.test(f)?"":"/";var v=function(a,d){if(s===d)return w(f+a,d),u;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,g=d.length;e<g;e++)if(s===d[e])return w(f+a+"/"+(e+1),d[e]),u};d.c(document,"mousedown",function(a){a=a||window.event;s=a.target||a.srcElement;var d={};for(m(g,function(a,e){d[a]=b.d(e,"Function")?e():document.getElementById(e)});s&&
s!==document&&m(d,v)!==u;)s=s.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,d=mt.event,e=mt.m;if("undefined"!==typeof h.b&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var k={na:function(){for(var b=c.cvcf.length,e,g=0;g<b;g++)(e=a.N(decodeURIComponent(c.cvcf[g])))&&d.c(e,"click",k.L())},L:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=e.stringify(a);h.b.k()}}};a.U(function(){k.na()})}})();
(function(){var a=mt.event,b=mt.m;if(c.med&&"undefined"!==typeof h.b){var d=+new Date,e={n:"anti",sb:0,kb:0,clk:0},k=function(){h.b.a.et=86;h.b.a.ep=b.stringify(e);h.b.k()};a.c(document,"click",function(){e.clk++});a.c(document,"keyup",function(){e.kb=1});a.c(window,"scroll",function(){e.sb++});a.c(window,"unload",function(){e.t=+new Date-d;k()});a.c(window,"load",function(){setTimeout(k,5E3)})}})();})();
